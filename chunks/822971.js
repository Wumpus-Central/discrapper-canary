function t(e) {
    return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}
function n(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function i(e) {
    return r('(?=', e, ')');
}
function r(...e) {
    return e.map((e) => n(e)).join('');
}
function a(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function s(...e) {
    return '(' + (a(e).capture ? '' : '?:') + e.map((e) => n(e)).join('|') + ')';
}
function o(e) {
    let n = {
            scope: 'keyword',
            match: /\b(yield|return|let|do|match|use)!/
        },
        a = ['if', 'else', 'endif', 'line', 'nowarn', 'light', 'r', 'i', 'I', 'load', 'time', 'help', 'quit'],
        o = ['bool', 'byte', 'sbyte', 'int8', 'int16', 'int32', 'uint8', 'uint16', 'uint32', 'int', 'uint', 'int64', 'uint64', 'nativeint', 'unativeint', 'decimal', 'float', 'double', 'float32', 'single', 'char', 'string', 'unit', 'bigint', 'option', 'voption', 'list', 'array', 'seq', 'byref', 'exn', 'inref', 'nativeptr', 'obj', 'outref', 'voidptr', 'Result'],
        l = {
            keyword: ['abstract', 'and', 'as', 'assert', 'base', 'begin', 'class', 'default', 'delegate', 'do', 'done', 'downcast', 'downto', 'elif', 'else', 'end', 'exception', 'extern', 'finally', 'fixed', 'for', 'fun', 'function', 'global', 'if', 'in', 'inherit', 'inline', 'interface', 'internal', 'lazy', 'let', 'match', 'member', 'module', 'mutable', 'namespace', 'new', 'of', 'open', 'or', 'override', 'private', 'public', 'rec', 'return', 'static', 'struct', 'then', 'to', 'try', 'type', 'upcast', 'use', 'val', 'void', 'when', 'while', 'with', 'yield'],
            literal: ['true', 'false', 'null', 'Some', 'None', 'Ok', 'Error', 'infinity', 'infinityf', 'nan', 'nanf'],
            built_in: ['not', 'ref', 'raise', 'reraise', 'dict', 'readOnlyDict', 'set', 'get', 'enum', 'sizeof', 'typeof', 'typedefof', 'nameof', 'nullArg', 'invalidArg', 'invalidOp', 'id', 'fst', 'snd', 'ignore', 'lock', 'using', 'box', 'unbox', 'tryUnbox', 'printf', 'printfn', 'sprintf', 'eprintf', 'eprintfn', 'fprintf', 'fprintfn', 'failwith', 'failwithf'],
            'variable.constant': ['__LINE__', '__SOURCE_DIRECTORY__', '__SOURCE_FILE__']
        },
        u = {
            variants: [e.COMMENT(/\(\*(?!\))/, /\*\)/, { contains: ['self'] }), e.C_LINE_COMMENT_MODE]
        },
        c = /[a-zA-Z_](\w|')*/,
        d = {
            scope: 'variable',
            begin: /``/,
            end: /``/
        },
        f = /\B('|\^)/,
        _ = {
            scope: 'symbol',
            variants: [{ match: r(f, /``.*?``/) }, { match: r(f, e.UNDERSCORE_IDENT_RE) }],
            relevance: 0
        },
        p = function ({ includeEqual: e }) {
            let n;
            let a = r('[', ...Array.from((n = e ? '!%&*+-/<=>@^|~?' : '!%&*+-/<>@^|~?')).map(t), ']'),
                o = s(a, /\./),
                l = r(o, i(o)),
                u = s(r(l, o, '*'), r(a, '+'));
            return {
                scope: 'operator',
                match: s(u, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
                relevance: 0
            };
        },
        h = p({ includeEqual: !0 }),
        m = p({ includeEqual: !1 }),
        g = function (t, n) {
            return {
                begin: r(t, i(r(/\s*/, s(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
                beginScope: n,
                end: i(s(/\n/, /=/)),
                relevance: 0,
                keywords: e.inherit(l, { type: o }),
                contains: [u, _, e.inherit(d, { scope: null }), m]
            };
        },
        E = g(/:/, 'operator'),
        v = g(/\bof\b/, 'keyword'),
        y = {
            begin: [/(^|\s+)/, /type/, /\s+/, c],
            beginScope: {
                2: 'keyword',
                4: 'title.class'
            },
            end: i(/\(|=|$/),
            keywords: l,
            contains: [
                u,
                e.inherit(d, { scope: null }),
                _,
                {
                    scope: 'operator',
                    match: /<|>/
                },
                E
            ]
        },
        I = {
            scope: 'computation-expression',
            match: /\b[_a-z]\w*(?=\s*\{)/
        },
        T = {
            begin: [/^\s*/, r(/#/, s(...a)), /\b/],
            beginScope: { 2: 'meta' },
            end: i(/\s|$/)
        },
        b = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        },
        S = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        A = {
            scope: 'string',
            begin: /@"/,
            end: /"/,
            contains: [{ match: /""/ }, e.BACKSLASH_ESCAPE]
        },
        N = {
            scope: 'string',
            begin: /"""/,
            end: /"""/,
            relevance: 2
        },
        C = {
            scope: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: l
        },
        R = {
            scope: 'string',
            begin: /\$"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, e.BACKSLASH_ESCAPE, C]
        },
        O = {
            scope: 'string',
            begin: /(\$@|@\$)"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, { match: /""/ }, e.BACKSLASH_ESCAPE, C]
        },
        D = {
            scope: 'string',
            begin: /\$"""/,
            end: /"""/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, C],
            relevance: 2
        },
        x = {
            scope: 'string',
            match: r(/'/, s(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
        };
    return (
        (C.contains = [O, R, A, S, x, n, u, d, E, I, T, b, _, h]),
        {
            name: 'F#',
            aliases: ['fs', 'f#'],
            keywords: l,
            illegal: /\/\*/,
            classNameAliases: { 'computation-expression': 'keyword' },
            contains: [
                n,
                {
                    variants: [D, O, R, N, A, S, x]
                },
                u,
                d,
                y,
                {
                    scope: 'meta',
                    begin: /\[</,
                    end: />\]/,
                    relevance: 2,
                    contains: [d, N, A, S, x, b]
                },
                v,
                E,
                I,
                T,
                b,
                _,
                h
            ]
        }
    );
}
e.exports = o;
