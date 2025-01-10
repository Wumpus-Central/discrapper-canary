function n(e) {
    let n = {
            begin: /[a-z][A-Za-z0-9_]*/,
            relevance: 0
        },
        r = {
            className: 'symbol',
            variants: [{ begin: /[A-Z][a-zA-Z0-9_]*/ }, { begin: /_[A-Za-z0-9_]*/ }],
            relevance: 0
        },
        i = {
            begin: /\(/,
            end: /\)/,
            relevance: 0
        },
        a = {
            begin: /\[/,
            end: /\]/
        },
        s = {
            className: 'comment',
            begin: /%/,
            end: /$/,
            contains: [e.PHRASAL_WORDS_MODE]
        },
        o = {
            className: 'string',
            begin: /`/,
            end: /`/,
            contains: [e.BACKSLASH_ESCAPE]
        },
        l = {
            className: 'string',
            begin: /0'(\\'|.)/
        },
        u = {
            className: 'string',
            begin: /0'\\s/
        },
        c = [n, r, i, { begin: /:-/ }, a, s, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, o, l, u, e.C_NUMBER_MODE];
    return (
        (i.contains = c),
        (a.contains = c),
        {
            name: 'Prolog',
            contains: c.concat([{ begin: /\.$/ }])
        }
    );
}
e.exports = n;
