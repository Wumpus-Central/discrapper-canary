function t(e) {
    return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}
function n(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function r(e) {
    return i('(?=', e, ')');
}
function i(...e) {
    return e.map((e) => n(e)).join('');
}
function o(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function a(...e) {
    return '(' + (o(e).capture ? '' : '?:') + e.map((e) => n(e)).join('|') + ')';
}
e.exports = function (e) {
    let n = {
            scope: 'keyword',
            match: /\b(yield|return|let|do|match|use)!/
        },
        o = ['if', 'else', 'endif', 'line', 'nowarn', 'light', 'r', 'i', 'I', 'load', 'time', 'help', 'quit'],
        s = ['bool', 'byte', 'sbyte', 'int8', 'int16', 'int32', 'uint8', 'uint16', 'uint32', 'int', 'uint', 'int64', 'uint64', 'nativeint', 'unativeint', 'decimal', 'float', 'double', 'float32', 'single', 'char', 'string', 'unit', 'bigint', 'option', 'voption', 'list', 'array', 'seq', 'byref', 'exn', 'inref', 'nativeptr', 'obj', 'outref', 'voidptr', 'Result'],
        l = {
            keyword: ['abstract', 'and', 'as', 'assert', 'base', 'begin', 'class', 'default', 'delegate', 'do', 'done', 'downcast', 'downto', 'elif', 'else', 'end', 'exception', 'extern', 'finally', 'fixed', 'for', 'fun', 'function', 'global', 'if', 'in', 'inherit', 'inline', 'interface', 'internal', 'lazy', 'let', 'match', 'member', 'module', 'mutable', 'namespace', 'new', 'of', 'open', 'or', 'override', 'private', 'public', 'rec', 'return', 'static', 'struct', 'then', 'to', 'try', 'type', 'upcast', 'use', 'val', 'void', 'when', 'while', 'with', 'yield'],
            literal: ['true', 'false', 'null', 'Some', 'None', 'Ok', 'Error', 'infinity', 'infinityf', 'nan', 'nanf'],
            built_in: ['not', 'ref', 'raise', 'reraise', 'dict', 'readOnlyDict', 'set', 'get', 'enum', 'sizeof', 'typeof', 'typedefof', 'nameof', 'nullArg', 'invalidArg', 'invalidOp', 'id', 'fst', 'snd', 'ignore', 'lock', 'using', 'box', 'unbox', 'tryUnbox', 'printf', 'printfn', 'sprintf', 'eprintf', 'eprintfn', 'fprintf', 'fprintfn', 'failwith', 'failwithf'],
            'variable.constant': ['__LINE__', '__SOURCE_DIRECTORY__', '__SOURCE_FILE__']
        },
        c = {
            variants: [e.COMMENT(/\(\*(?!\))/, /\*\)/, { contains: ['self'] }), e.C_LINE_COMMENT_MODE]
        },
        u = /[a-zA-Z_](\w|')*/,
        d = {
            scope: 'variable',
            begin: /``/,
            end: /``/
        },
        f = /\B('|\^)/,
        _ = {
            scope: 'symbol',
            variants: [{ match: i(f, /``.*?``/) }, { match: i(f, e.UNDERSCORE_IDENT_RE) }],
            relevance: 0
        },
        p = function ({ includeEqual: e }) {
            let n,
                o = i('[', ...Array.from((n = e ? '!%&*+-/<=>@^|~?' : '!%&*+-/<>@^|~?')).map(t), ']'),
                s = a(o, /\./),
                l = i(s, r(s)),
                c = a(i(l, s, '*'), i(o, '+'));
            return {
                scope: 'operator',
                match: a(c, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
                relevance: 0
            };
        },
        h = p({ includeEqual: !0 }),
        m = p({ includeEqual: !1 }),
        g = function (t, n) {
            return {
                begin: i(t, r(i(/\s*/, a(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
                beginScope: n,
                end: r(a(/\n/, /=/)),
                relevance: 0,
                keywords: e.inherit(l, { type: s }),
                contains: [c, _, e.inherit(d, { scope: null }), m]
            };
        },
        E = g(/:/, 'operator'),
        b = g(/\bof\b/, 'keyword'),
        y = {
            begin: [/(^|\s+)/, /type/, /\s+/, u],
            beginScope: {
                2: 'keyword',
                4: 'title.class'
            },
            end: r(/\(|=|$/),
            keywords: l,
            contains: [
                c,
                e.inherit(d, { scope: null }),
                _,
                {
                    scope: 'operator',
                    match: /<|>/
                },
                E
            ]
        },
        v = {
            scope: 'computation-expression',
            match: /\b[_a-z]\w*(?=\s*\{)/
        },
        O = {
            begin: [/^\s*/, i(/#/, a(...o)), /\b/],
            beginScope: { 2: 'meta' },
            end: r(/\s|$/)
        },
        I = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        },
        S = {
            scope: 'string',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        T = {
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
        A = {
            scope: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: l
        },
        C = {
            scope: 'string',
            begin: /\$"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, e.BACKSLASH_ESCAPE, A]
        },
        R = {
            scope: 'string',
            begin: /(\$@|@\$)"/,
            end: /"/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, { match: /""/ }, e.BACKSLASH_ESCAPE, A]
        },
        P = {
            scope: 'string',
            begin: /\$"""/,
            end: /"""/,
            contains: [{ match: /\{\{/ }, { match: /\}\}/ }, A],
            relevance: 2
        },
        w = {
            scope: 'string',
            match: i(/'/, a(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
        };
    return (
        (A.contains = [R, C, T, S, w, n, c, d, E, v, O, I, _, h]),
        {
            name: 'F#',
            aliases: ['fs', 'f#'],
            keywords: l,
            illegal: /\/\*/,
            classNameAliases: { 'computation-expression': 'keyword' },
            contains: [
                n,
                {
                    variants: [P, R, C, N, T, S, w]
                },
                c,
                d,
                y,
                {
                    scope: 'meta',
                    begin: /\[</,
                    end: />\]/,
                    relevance: 2,
                    contains: [d, N, T, S, w, I]
                },
                b,
                E,
                v,
                O,
                I,
                _,
                h
            ]
        }
    );
};
