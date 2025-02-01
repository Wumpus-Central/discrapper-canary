let t = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    n = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    i = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'], ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
function r(e) {
    let r = ['npm', 'print'],
        a = ['yes', 'no', 'on', 'off'],
        s = ['then', 'unless', 'until', 'loop', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not'],
        o = ['var', 'const', 'let', 'function', 'static'],
        l = (e) => (t) => !e.includes(t),
        u = {
            keyword: t.concat(s).filter(l(o)),
            literal: n.concat(a),
            built_in: i.concat(r)
        },
        c = '[A-Za-z$_][0-9A-Za-z$_]*',
        d = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: u
        },
        f = [
            e.BINARY_NUMBER_MODE,
            e.inherit(e.C_NUMBER_MODE, {
                starts: {
                    end: '(\\s*/)?',
                    relevance: 0
                }
            }),
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
                        contains: [e.BACKSLASH_ESCAPE, d]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, d]
                    }
                ]
            },
            {
                className: 'regexp',
                variants: [
                    {
                        begin: '///',
                        end: '///',
                        contains: [d, e.HASH_COMMENT_MODE]
                    },
                    {
                        begin: '//[gim]{0,3}(?=\\W)',
                        relevance: 0
                    },
                    { begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ }
                ]
            },
            { begin: '@' + c },
            {
                subLanguage: 'javascript',
                excludeBegin: !0,
                excludeEnd: !0,
                variants: [
                    {
                        begin: '```',
                        end: '```'
                    },
                    {
                        begin: '`',
                        end: '`'
                    }
                ]
            }
        ];
    d.contains = f;
    let _ = e.inherit(e.TITLE_MODE, { begin: c }),
        p = '(\\(.*\\)\\s*)?\\B[-=]>',
        h = {
            className: 'params',
            begin: '\\([^\\(]',
            returnBegin: !0,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: u,
                    contains: ['self'].concat(f)
                }
            ]
        },
        m = {
            variants: [
                {
                    match: [/class\s+/, c, /\s+extends\s+/, c]
                },
                {
                    match: [/class\s+/, c]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: u
        };
    return {
        name: 'CoffeeScript',
        aliases: ['coffee', 'cson', 'iced'],
        keywords: u,
        illegal: /\/\*/,
        contains: [
            ...f,
            e.COMMENT('###', '###'),
            e.HASH_COMMENT_MODE,
            {
                className: 'function',
                begin: '^\\s*' + c + '\\s*=\\s*' + p,
                end: '[-=]>',
                returnBegin: !0,
                contains: [_, h]
            },
            {
                begin: /[:\(,=]\s*/,
                relevance: 0,
                contains: [
                    {
                        className: 'function',
                        begin: p,
                        end: '[-=]>',
                        returnBegin: !0,
                        contains: [h]
                    }
                ]
            },
            m,
            {
                begin: c + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ]
    };
}
e.exports = r;
