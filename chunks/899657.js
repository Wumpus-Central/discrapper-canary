function t(e) {
    let t = e.regex,
        n = {
            $pattern: /[\w.\/]+/,
            built_in: ['action', 'bindattr', 'collection', 'component', 'concat', 'debugger', 'each', 'each-in', 'get', 'hash', 'if', 'in', 'input', 'link-to', 'loc', 'log', 'lookup', 'mut', 'outlet', 'partial', 'query-params', 'render', 'template', 'textarea', 'unbound', 'unless', 'view', 'with', 'yield']
        },
        r = {
            $pattern: /[\w.\/]+/,
            literal: ['true', 'false', 'undefined', 'null']
        },
        i = /""|"[^"]+"/,
        o = /''|'[^']+'/,
        a = /\[\]|\[[^\]]+\]/,
        s = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
        l = /(\.|\/)/,
        c = t.either(i, o, a, s),
        u = t.concat(t.optional(/\.|\.\/|\//), c, t.anyNumberOfTimes(t.concat(l, c))),
        d = t.concat('(', a, '|', s, ')(?==)'),
        f = { begin: u },
        p = e.inherit(f, { keywords: r }),
        _ = {
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
                    contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, p, _]
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
            contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, m, h, p, _],
            returnEnd: !0
        },
        E = e.inherit(f, {
            className: 'name',
            keywords: n,
            starts: e.inherit(g, { end: /\)/ })
        });
    _.contains = [E];
    let v = e.inherit(f, {
            keywords: n,
            className: 'name',
            starts: e.inherit(g, { end: /\}\}/ })
        }),
        b = e.inherit(f, {
            keywords: n,
            className: 'name'
        }),
        y = e.inherit(f, {
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
                contains: [b]
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
                contains: [b]
            },
            {
                className: 'template-variable',
                begin: /\{\{\{/,
                end: /\}\}\}/,
                contains: [y]
            },
            {
                className: 'template-variable',
                begin: /\{\{/,
                end: /\}\}/,
                contains: [y]
            }
        ]
    };
}
e.exports = t;
