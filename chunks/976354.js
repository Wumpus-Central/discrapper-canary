function n(e) {
    let n = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*',
        r = '\\|[^]*?\\|',
        i = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?',
        a = {
            className: 'literal',
            begin: '\\b(t{1}|nil)\\b'
        },
        s = {
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
        o = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        l = e.COMMENT(';', '$', { relevance: 0 }),
        u = {
            begin: '\\*',
            end: '\\*'
        },
        c = {
            className: 'symbol',
            begin: '[:&]' + n
        },
        d = {
            begin: n,
            relevance: 0
        },
        f = { begin: r },
        _ = {
            begin: '\\(',
            end: '\\)',
            contains: ['self', a, o, s, d]
        },
        h = {
            contains: [s, o, u, c, _, d],
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
                { begin: "'" + r }
            ]
        },
        p = {
            variants: [{ begin: "'" + n }, { begin: "#'" + n + '(::' + n + ')*' }]
        },
        m = {
            begin: '\\(\\s*',
            end: '\\)'
        },
        g = {
            endsWithParent: !0,
            relevance: 0
        };
    return (
        (m.contains = [
            {
                className: 'name',
                variants: [
                    {
                        begin: n,
                        relevance: 0
                    },
                    { begin: r }
                ]
            },
            g
        ]),
        (g.contains = [h, p, m, a, s, o, l, u, c, f, d]),
        {
            name: 'Lisp',
            illegal: /\S/,
            contains: [s, e.SHEBANG(), a, o, l, h, p, m, d]
        }
    );
}
e.exports = n;
