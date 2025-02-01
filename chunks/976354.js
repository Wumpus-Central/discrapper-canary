function t(e) {
    let t = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*',
        n = '\\|[^]*?\\|',
        i = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?',
        r = {
            className: 'literal',
            begin: '\\b(t{1}|nil)\\b'
        },
        a = {
            className: 'number',
            variants: [
                {
                    begin: i,
                    relevance: 0
                },
                { begin: '#(b|B)[0-1]+(/[0-1]+)?' },
                { begin: '#(o|O)[0-7]+(/[0-7]+)?' },
                { begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?' },
                {
                    begin: '#(c|C)\\(' + i + ' +' + i,
                    end: '\\)'
                }
            ]
        },
        s = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        o = e.COMMENT(';', '$', { relevance: 0 }),
        l = {
            begin: '\\*',
            end: '\\*'
        },
        u = {
            className: 'symbol',
            begin: '[:&]' + t
        },
        c = {
            begin: t,
            relevance: 0
        },
        d = { begin: n },
        f = {
            begin: '\\(',
            end: '\\)',
            contains: ['self', r, s, a, c]
        },
        _ = {
            contains: [a, s, l, u, f, c],
            variants: [
                {
                    begin: "['`]\\(",
                    end: '\\)'
                },
                {
                    begin: '\\(quote ',
                    end: '\\)',
                    keywords: { name: 'quote' }
                },
                { begin: "'" + n }
            ]
        },
        p = {
            variants: [{ begin: "'" + t }, { begin: "#'" + t + '(::' + t + ')*' }]
        },
        h = {
            begin: '\\(\\s*',
            end: '\\)'
        },
        m = {
            endsWithParent: !0,
            relevance: 0
        };
    return (
        (h.contains = [
            {
                className: 'name',
                variants: [
                    {
                        begin: t,
                        relevance: 0
                    },
                    { begin: n }
                ]
            },
            m
        ]),
        (m.contains = [_, p, h, r, a, s, o, l, u, d, c]),
        {
            name: 'Lisp',
            illegal: /\S/,
            contains: [a, e.SHEBANG(), r, s, o, _, p, h, c]
        }
    );
}
e.exports = t;
