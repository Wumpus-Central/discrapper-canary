let n = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends', 'using'],
    r = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    i = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['Object', 'Function', 'Boolean', 'Symbol', 'Math', 'Date', 'Number', 'BigInt', 'String', 'RegExp', 'Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Int32Array', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array', 'Set', 'Map', 'WeakSet', 'WeakMap', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'Proxy', 'Intl', 'WebAssembly'], ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
function a(e) {
    let a = ['npm', 'print'],
        s = ['yes', 'no', 'on', 'off'],
        o = ['then', 'unless', 'until', 'loop', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not'],
        l = ['var', 'const', 'let', 'function', 'static'],
        u = (e) => (n) => !e.includes(n),
        c = {
            keyword: n.concat(o).filter(u(l)),
            literal: r.concat(s),
            built_in: i.concat(a)
        },
        d = '[A-Za-z$_][0-9A-Za-z$_]*',
        f = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: c
        },
        _ = [
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
                        contains: [e.BACKSLASH_ESCAPE, f]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, f]
                    }
                ]
            },
            {
                className: 'regexp',
                variants: [
                    {
                        begin: '///',
                        end: '///',
                        contains: [f, e.HASH_COMMENT_MODE]
                    },
                    {
                        begin: '//[gim]{0,3}(?=\\W)',
                        relevance: 0
                    },
                    { begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ }
                ]
            },
            { begin: '@' + d },
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
    f.contains = _;
    let h = e.inherit(e.TITLE_MODE, { begin: d }),
        p = '(\\(.*\\)\\s*)?\\B[-=]>',
        m = {
            className: 'params',
            begin: '\\([^\\(]',
            returnBegin: !0,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: c,
                    contains: ['self'].concat(_)
                }
            ]
        },
        g = {
            variants: [
                {
                    match: [/class\s+/, d, /\s+extends\s+/, d]
                },
                {
                    match: [/class\s+/, d]
                }
            ],
            scope: {
                2: 'title.class',
                4: 'title.class.inherited'
            },
            keywords: c
        };
    return {
        name: 'CoffeeScript',
        aliases: ['coffee', 'cson', 'iced'],
        keywords: c,
        illegal: /\/\*/,
        contains: [
            ..._,
            e.COMMENT('###', '###'),
            e.HASH_COMMENT_MODE,
            {
                className: 'function',
                begin: '^\\s*' + d + '\\s*=\\s*' + p,
                end: '[-=]>',
                returnBegin: !0,
                contains: [h, m]
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
                        contains: [m]
                    }
                ]
            },
            g,
            {
                begin: d + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ]
    };
}
e.exports = a;
