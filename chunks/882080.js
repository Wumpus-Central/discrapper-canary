function t(e) {
    let t = {
            begin: /[a-z][A-Za-z0-9_]*/,
            relevance: 0
        },
        n = {
            className: 'symbol',
            variants: [{ begin: /[A-Z][a-zA-Z0-9_]*/ }, { begin: /_[A-Za-z0-9_]*/ }],
            relevance: 0
        },
        i = {
            begin: /\(/,
            end: /\)/,
            relevance: 0
        },
        r = {
            begin: /\[/,
            end: /\]/
        },
        a = {
            className: 'comment',
            begin: /%/,
            end: /$/,
            contains: [e.PHRASAL_WORDS_MODE]
        },
        s = {
            className: 'string',
            begin: /`/,
            end: /`/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        o = {
            className: 'string',
            begin: /0'(\\'|.)/
        },
        l = {
            className: 'string',
            begin: /0'\\s/
        },
        u = [t, n, i, { begin: /:-/ }, r, a, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, s, o, l, e.C_NUMBER_MODE];
    return (
        (i.contains = u),
        (r.contains = u),
        {
            name: 'Prolog',
            contains: u.concat([{ begin: /\.$/ }])
        }
    );
}
e.exports = t;
