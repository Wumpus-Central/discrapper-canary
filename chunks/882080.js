e.exports = function (e) {
    let t = {
            begin: /[a-z][A-Za-z0-9_]*/,
            relevance: 0
        },
        n = {
            className: 'symbol',
            variants: [{ begin: /[A-Z][a-zA-Z0-9_]*/ }, { begin: /_[A-Za-z0-9_]*/ }],
            relevance: 0
        },
        r = {
            begin: /\(/,
            end: /\)/,
            relevance: 0
        },
        i = {
            begin: /\[/,
            end: /\]/
        },
        a = {
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
        s = {
            className: 'string',
            begin: /0'(\\'|.)/
        },
        l = {
            className: 'string',
            begin: /0'\\s/
        },
        c = [t, n, r, { begin: /:-/ }, i, a, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, o, s, l, e.C_NUMBER_MODE];
    return (
        (r.contains = c),
        (i.contains = c),
        {
            name: 'Prolog',
            contains: c.concat([{ begin: /\.$/ }])
        }
    );
};
