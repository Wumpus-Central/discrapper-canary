function n(e) {
    let n = e.regex,
        r = {
            $pattern: /[\w.\/]+/,
            built_in: ['action', 'bindattr', 'collection', 'component', 'concat', 'debugger', 'each', 'each-in', 'get', 'hash', 'if', 'in', 'input', 'link-to', 'loc', 'log', 'lookup', 'mut', 'outlet', 'partial', 'query-params', 'render', 'template', 'textarea', 'unbound', 'unless', 'view', 'with', 'yield']
        },
        i = {
            $pattern: /[\w.\/]+/,
            literal: ['true', 'false', 'undefined', 'null']
        },
        a = /""|"[^"]+"/,
        s = /''|'[^']+'/,
        o = /\[\]|\[[^\]]+\]/,
        l = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
        u = /(\.|\/)/,
        c = n.either(a, s, o, l),
        d = n.concat(n.optional(/\.|\.\/|\//), c, n.anyNumberOfTimes(n.concat(u, c))),
        f = n.concat('(', o, '|', l, ')(?==)'),
        _ = { begin: d },
        h = e.inherit(_, { keywords: i }),
        p = {
            begin: /\(/,
            end: /\)/
        },
        m = {
            className: 'attr',
            begin: f,
            relevance: 0,
            starts: {
                begin: /=/,
                end: /=/,
                starts: {
                    contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, h, p]
                }
            }
        },
        g = {
            begin: /as\s+\|/,
            keywords: { keyword: 'as' },
            end: /\|/,
            contains: [{ begin: /\w+/ }]
        },
        E = {
            contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, g, m, h, p],
            returnEnd: !0
        },
        v = e.inherit(_, {
            className: 'name',
            keywords: r,
            starts: e.inherit(E, { end: /\)/ })
        });
    p.contains = [v];
    let I = e.inherit(_, {
            keywords: r,
            className: 'name',
            starts: e.inherit(E, { end: /\}\}/ })
        }),
        T = e.inherit(_, {
            keywords: r,
            className: 'name'
        }),
        b = e.inherit(_, {
            className: 'name',
            keywords: r,
            starts: e.inherit(E, { end: /\}\}/ })
        });
    return {
        name: 'Handlebars',
        aliases: ['hbs', 'html.hbs', 'html.handlebars', 'htmlbars'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
            {
                begin: /\\\{\{/,
                skip: !0
            },
            {
                begin: /\\\\(?=\{\{)/,
                skip: !0
            },
            e.COMMENT(/\{\{!--/, /--\}\}/),
            e.COMMENT(/\{\{!/, /\}\}/),
            {
                className: 'template-tag',
                begin: /\{\{\{\{(?!\/)/,
                end: /\}\}\}\}/,
                contains: [I],
                starts: {
                    end: /\{\{\{\{\//,
                    returnEnd: !0,
                    subLanguage: 'xml'
                }
            },
            {
                className: 'template-tag',
                begin: /\{\{\{\{\//,
                end: /\}\}\}\}/,
                contains: [T]
            },
            {
                className: 'template-tag',
                begin: /\{\{#/,
                end: /\}\}/,
                contains: [I]
            },
            {
                className: 'template-tag',
                begin: /\{\{(?=else\}\})/,
                end: /\}\}/,
                keywords: 'else'
            },
            {
                className: 'template-tag',
                begin: /\{\{(?=else if)/,
                end: /\}\}/,
                keywords: 'else if'
            },
            {
                className: 'template-tag',
                begin: /\{\{\//,
                end: /\}\}/,
                contains: [T]
            },
            {
                className: 'template-variable',
                begin: /\{\{\{/,
                end: /\}\}\}/,
                contains: [b]
            },
            {
                className: 'template-variable',
                begin: /\{\{/,
                end: /\}\}/,
                contains: [b]
            }
        ]
    };
}
e.exports = n;
