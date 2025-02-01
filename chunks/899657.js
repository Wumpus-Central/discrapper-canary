function t(e) {
    let t = e.regex,
        n = {
            $pattern: /[\w.\/]+/,
            built_in: ['action', 'bindattr', 'collection', 'component', 'concat', 'debugger', 'each', 'each-in', 'get', 'hash', 'if', 'in', 'input', 'link-to', 'loc', 'log', 'lookup', 'mut', 'outlet', 'partial', 'query-params', 'render', 'template', 'textarea', 'unbound', 'unless', 'view', 'with', 'yield']
        },
        i = {
            $pattern: /[\w.\/]+/,
            literal: ['true', 'false', 'undefined', 'null']
        },
        r = /""|"[^"]+"/,
        a = /''|'[^']+'/,
        s = /\[\]|\[[^\]]+\]/,
        o = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
        l = /(\.|\/)/,
        u = t.either(r, a, s, o),
        c = t.concat(t.optional(/\.|\.\/|\//), u, t.anyNumberOfTimes(t.concat(l, u))),
        d = t.concat('(', s, '|', o, ')(?==)'),
        f = { begin: c },
        _ = e.inherit(f, { keywords: i }),
        p = {
            begin: /\(/,
            end: /\)/
        },
        h = {
            className: 'attr',
            begin: d,
            relevance: 0,
            starts: {
                begin: /=/,
                end: /=/,
                starts: {
                    contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, _, p]
                }
            }
        },
        m = {
            begin: /as\s+\|/,
            keywords: { keyword: 'as' },
            end: /\|/,
            contains: [{ begin: /\w+/ }]
        },
        g = {
            contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, m, h, _, p],
            returnEnd: !0
        },
        E = e.inherit(f, {
            className: 'name',
            keywords: n,
            starts: e.inherit(g, { end: /\)/ })
        });
    p.contains = [E];
    let v = e.inherit(f, {
            keywords: n,
            className: 'name',
            starts: e.inherit(g, { end: /\}\}/ })
        }),
        y = e.inherit(f, {
            keywords: n,
            className: 'name'
        }),
        I = e.inherit(f, {
            className: 'name',
            keywords: n,
            starts: e.inherit(g, { end: /\}\}/ })
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
                contains: [v],
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
                contains: [y]
            },
            {
                className: 'template-tag',
                begin: /\{\{#/,
                end: /\}\}/,
                contains: [v]
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
                contains: [y]
            },
            {
                className: 'template-variable',
                begin: /\{\{\{/,
                end: /\}\}\}/,
                contains: [I]
            },
            {
                className: 'template-variable',
                begin: /\{\{/,
                end: /\}\}/,
                contains: [I]
            }
        ]
    };
}
e.exports = t;
