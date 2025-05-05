let t = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    n = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    r = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'], ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
e.exports = function (e) {
    let i = ['npm', 'print'],
        o = ['yes', 'no', 'on', 'off', 'it', 'that', 'void'],
        a = ['then', 'unless', 'until', 'loop', 'of', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not', 'it', 'that', 'otherwise', 'from', 'to', 'til', 'fallthrough', 'case', 'enum', 'native', 'list', 'map', '__hasProp', '__extends', '__slice', '__bind', '__indexOf'],
        s = {
            keyword: t.concat(a),
            literal: n.concat(o),
            built_in: r.concat(i)
        },
        l = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*',
        c = e.inherit(e.TITLE_MODE, { begin: l }),
        u = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: s
        },
        d = {
            className: 'subst',
            begin: /#[A-Za-z$_]/,
            end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
            keywords: s
        },
        f = [
            e.BINARY_NUMBER_MODE,
            {
                className: 'number',
                begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
                relevance: 0,
                starts: {
                    end: '(\\s*/)?',
                    relevance: 0
                }
            },
            {
                className: 'string',
                variants: [
                    {
                        begin: /'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, u, d]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, u, d]
                    },
                    {
                        begin: /\\/,
                        end: /(\s|$)/,
                        excludeEnd: !0
                    }
                ]
            },
            {
                className: 'regexp',
                variants: [
                    {
                        begin: '//',
                        end: '//[gim]*',
                        contains: [u, e.HASH_COMMENT_MODE]
                    },
                    { begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/ }
                ]
            },
            { begin: '@' + l },
            {
                begin: '``',
                end: '``',
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: 'javascript'
            }
        ];
    u.contains = f;
    let _ = {
            className: 'params',
            begin: '\\(',
            returnBegin: !0,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: s,
                    contains: ['self'].concat(f)
                }
            ]
        },
        p = { begin: '(#=>|=>|\\|>>|-?->|!->)' },
        h = {
            variants: [
                {
                    match: [/class\s+/, l, /\s+extends\s+/, l]
                },
                {
                    match: [/class\s+/, l]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: s
        };
    return {
        name: 'LiveScript',
        aliases: ['ls'],
        keywords: s,
        illegal: /\/\*/,
        contains: f.concat([
            e.COMMENT('\\/\\*', '\\*\\/'),
            e.HASH_COMMENT_MODE,
            p,
            {
                className: 'function',
                contains: [c, _],
                returnBegin: !0,
                variants: [
                    {
                        begin: '(' + l + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?',
                        end: '->\\*?'
                    },
                    {
                        begin: '(' + l + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?',
                        end: '[-~]{1,2}>\\*?'
                    },
                    {
                        begin: '(' + l + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?',
                        end: '!?[-~]{1,2}>\\*?'
                    }
                ]
            },
            h,
            {
                begin: l + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ])
    };
};
