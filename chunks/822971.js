function n(e) {
    return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}
function r(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function i(e) {
    return a('(?=', e, ')');
}
function a(...e) {
    return e.map((e) => r(e)).join('');
}
function s(e) {
    let n = e[e.length - 1];
    return 'object' == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
}
function o(...e) {
    return '(' + (s(e).capture ? '' : '?:') + e.map((e) => r(e)).join('|') + ')';
}
function l(e) {
    let r = {
            scope: 'keyword',
            match: /\b(yield|return|let|do|match|use)!/
        },
        s = ['if', 'else', 'endif', 'line', 'nowarn', 'light', 'r', 'i', 'I', 'load', 'time', 'help', 'quit'],
        l = ['bool', 'byte', 'sbyte', 'int8', 'int16', 'int32', 'uint8', 'uint16', 'uint32', 'int', 'uint', 'int64', 'uint64', 'nativeint', 'unativeint', 'decimal', 'float', 'double', 'float32', 'single', 'char', 'string', 'unit', 'bigint', 'option', 'voption', 'list', 'array', 'seq', 'byref', 'exn', 'inref', 'nativeptr', 'obj', 'outref', 'voidptr', 'Result'],
        u = {
            keyword: ['abstract', 'and', 'as', 'assert', 'base', 'begin', 'class', 'default', 'delegate', 'do', 'done', 'downcast', 'downto', 'elif', 'else', 'end', 'exception', 'extern', 'finally', 'fixed', 'for', 'fun', 'function', 'global', 'if', 'in', 'inherit', 'inline', 'interface', 'internal', 'lazy', 'let', 'match', 'member', 'module', 'mutable', 'namespace', 'new', 'of', 'open', 'or', 'override', 'private', 'public', 'rec', 'return', 'static', 'struct', 'then', 'to', 'try', 'type', 'upcast', 'use', 'val', 'void', 'when', 'while', 'with', 'yield'],
            literal: ['true', 'false', 'null', 'Some', 'None', 'Ok', 'Error', 'infinity', 'infinityf', 'nan', 'nanf'],
            built_in: ['not', 'ref', 'raise', 'reraise', 'dict', 'readOnlyDict', 'set', 'get', 'enum', 'sizeof', 'typeof', 'typedefof', 'nameof', 'nullArg', 'invalidArg', 'invalidOp', 'id', 'fst', 'snd', 'ignore', 'lock', 'using', 'box', 'unbox', 'tryUnbox', 'printf', 'printfn', 'sprintf', 'eprintf', 'eprintfn', 'fprintf', 'fprintfn', 'failwith', 'failwithf'],
            'variable.constant': ['__LINE__', '__SOURCE_DIRECTORY__', '__SOURCE_FILE__']
        },
        c = {
            variants: [e.COMMENT(/\(\*(?!\))/, /\*\)/, { contains: ['self'] }), e.C_LINE_COMMENT_MODE]
        },
        d = /[a-zA-Z_](\w|')*/,
        f = {
            scope: 'variable',
            begin: /``/,
            end: /``/
        },
        _ = /\B('|\^)/,
        h = {
            scope: 'symbol',
            variants: [{ match: a(_, /``.*?``/) }, { match: a(_, e.UNDERSCORE_IDENT_RE) }],
            relevance: 0
        },
        p = function ({ includeEqual: e }) {
            let r;
            let s = a('[', ...Array.from((r = e ? '!%&*+-/<=>@^|~?' : '!%&*+-/<>@^|~?')).map(n), ']'),
                l = o(s, /\./),
                u = a(l, i(l)),
                c = o(a(u, l, '*'), a(s, '+'));
            return {
                scope: 'operator',
                match: o(c, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
                relevance: 0
            };
        },
        m = p({ includeEqual: !0 }),
        g = p({ includeEqual: !1 }),
        E = function (n, r) {
            return {
                begin: a(n, i(a(/\s*/, o(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
                beginScope: r,
                end: i(o(/\n/, /=/)),
                relevance: 0,
                keywords: e.inherit(u, { type: l }),
                contains: [c, h, e.inherit(f, { scope: null }), g]
            };
        },
        v = E(/:/, 'operator'),
        I = E(/\bof\b/, 'keyword'),
        T = {
            begin: [/(^|\s+)/, /type/, /\s+/, d],
            beginScope: {
                2: 'keyword',
                4: 'title.class'
            },
            end: i(/\(|=|$/),
            keywords: u,
            contains: [
                c,
                e.inherit(f, { scope: null }),
                h,
                {
                    scope: 'operator',
                    match: /<|>/
                },
                v
            ]
        },
        b = {
            scope: 'computation-expression',
            match: /\b[_a-z]\w*(?=\s*\{)/
        },
        y = {
            begin: [/^\s*/, a(/#/, o(...s)), /\b/],
            beginScope: { 2: 'meta' },
            end: i(/\s|$/)
        },
        S = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        },
        A = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        N = {
            scope: 'string',
            begin: /@"/,
            end: /"/,
            contains: [{ match: /""/ }, e.BACKSLASH_ESCAPE]
        },
        C = {
            scope: 'string',
            begin: /"""/,
            end: /"""/,
            relevance: 2
        },
        R = {
            scope: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: u
        },
        O = {
            scope: 'string',
            begin: /\$"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, e.BACKSLASH_ESCAPE, R]
        },
        D = {
            scope: 'string',
            begin: /(\$@|@\$)"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, { match: /""/ }, e.BACKSLASH_ESCAPE, R]
        },
        L = {
            scope: 'string',
            begin: /\$"""/,
            end: /"""/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, R],
            relevance: 2
        },
        x = {
            scope: 'string',
            match: a(/'/, o(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
        };
    return (
        (R.contains = [D, O, N, A, x, r, c, f, v, b, y, S, h, m]),
        {
            name: 'F#',
            aliases: ['fs', 'f#'],
            keywords: u,
            illegal: /\/\*/,
            classNameAliases: { 'computation-expression': 'keyword' },
            contains: [
                r,
                {
                    variants: [L, D, O, C, N, A, x]
                },
                c,
                f,
                T,
                {
                    scope: 'meta',
                    begin: /\[</,
                    end: />\]/,
                    relevance: 2,
                    contains: [f, C, N, A, x, S]
                },
                I,
                v,
                b,
                y,
                S,
                h,
                m
            ]
        }
    );
}
e.exports = l;
