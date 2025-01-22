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
        o = /''|'[^']+'/,
        s = /\[\]|\[[^\]]+\]/,
        l = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
        u = /(\.|\/)/,
        c = n.either(a, o, s, l),
        d = n.concat(n.optional(/\.|\.\/|\//), c, n.anyNumberOfTimes(n.concat(u, c))),
        f = n.concat('(', s, '|', l, ')(?==)'),
        p = { begin: d },
        h = e.inherit(p, { keywords: i }),
        _ = {
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
                    contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, h, _]
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
            contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, g, m, h, _],
            returnEnd: !0
        },
        v = e.inherit(p, {
            className: 'name',
            keywords: r,
            starts: e.inherit(E, { end: /\)/ })
        });
    _.contains = [v];
    let y = e.inherit(p, {
            keywords: r,
            className: 'name',
            starts: e.inherit(E, { end: /\}\}/ })
        }),
        b = e.inherit(p, {
            keywords: r,
            className: 'name'
        }),
        I = e.inherit(p, {
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
                contains: [y],
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
                contains: [b]
            },
            {
                className: 'template-tag',
                begin: /\{\{#/,
                end: /\}\}/,
                contains: [y]
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
                contains: [b]
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
e.exports = n;
