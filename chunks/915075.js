let n = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    r = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    i = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'], ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
function a(e) {
    let a = ['npm', 'print'],
        s = ['yes', 'no', 'on', 'off', 'it', 'that', 'void'],
        o = ['then', 'unless', 'until', 'loop', 'of', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not', 'it', 'that', 'otherwise', 'from', 'to', 'til', 'fallthrough', 'case', 'enum', 'native', 'list', 'map', '__hasProp', '__extends', '__slice', '__bind', '__indexOf'],
        l = {
            keyword: n.concat(o),
            literal: r.concat(s),
            built_in: i.concat(a)
        },
        u = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*',
        c = e.inherit(e.TITLE_MODE, { begin: u }),
        d = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: l
        },
        f = {
            className: 'subst',
            begin: /#[A-Za-z$_]/,
            end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
            keywords: l
        },
        _ = [
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
                        contains: [e.BACKSLASH_ESCAPE, d, f]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, d, f]
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
                        contains: [d, e.HASH_COMMENT_MODE]
                    },
                    { begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/ }
                ]
            },
            { begin: '@' + u },
            {
                begin: '``',
                end: '``',
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: 'javascript'
            }
        ];
    d.contains = _;
    let h = {
            className: 'params',
            begin: '\\(',
            returnBegin: !0,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: l,
                    contains: ['self'].concat(_)
                }
            ]
        },
        p = { begin: '(#=>|=>|\\|>>|-?->|!->)' },
        m = {
            variants: [
                {
                    match: [/class\s+/, u, /\s+extends\s+/, u]
                },
                {
                    match: [/class\s+/, u]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: l
        };
    return {
        name: 'LiveScript',
        aliases: ['ls'],
        keywords: l,
        illegal: /\/\*/,
        contains: _.concat([
            e.COMMENT('\\/\\*', '\\*\\/'),
            e.HASH_COMMENT_MODE,
            p,
            {
                className: 'function',
                contains: [c, h],
                returnBegin: !0,
                variants: [
                    {
                        begin: '(' + u + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?',
                        end: '->\\*?'
                    },
                    {
                        begin: '(' + u + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?',
                        end: '[-~]{1,2}>\\*?'
                    },
                    {
                        begin: '(' + u + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?',
                        end: '!?[-~]{1,2}>\\*?'
                    }
                ]
            },
            m,
            {
                begin: u + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ])
    };
}
e.exports = a;
