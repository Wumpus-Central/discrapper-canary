function n(e) {
    let n = {
            className: 'string',
            variants: [
                e.inherit(e.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
                {
                    begin: '(u8?|U)?R"',
                    end: '"',
                    contains: [e.BACKSLASH_ESCAPE]
                },
                {
                    begin: "'\\\\?.",
                    end: "'",
                    illegal: '.'
                }
            ]
        },
        r = {
            className: 'number',
            variants: [{ begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' }, { begin: e.C_NUMBER_RE }],
            relevance: 0
        },
        i = {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: { keyword: 'if else elif endif define undef ifdef ifndef' },
            contains: [
                {
                    begin: /\\\n/,
                    relevance: 0
                },
                {
                    beginKeywords: 'include',
                    end: '$',
                    keywords: { keyword: 'include' },
                    contains: [
                        e.inherit(n, { className: 'string' }),
                        {
                            className: 'string',
                            begin: '<',
                            end: '>',
                            illegal: '\\n'
                        }
                    ]
                },
                n,
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE
            ]
        },
        a = {
            className: 'variable',
            begin: /&[a-z\d_]*\b/
        },
        s = {
            className: 'params',
            relevance: 0,
            begin: '<',
            end: '>',
            contains: [r, a]
        },
        o = {
            scope: 'punctuation',
            relevance: 0,
            match: /\};|[;{}]/
        };
    return {
        name: 'Device Tree',
        contains: [
            {
                className: 'title.class',
                begin: /^\/(?=\s*\{)/,
                relevance: 10
            },
            a,
            {
                className: 'keyword',
                begin: '/[a-z][a-z\\d-]*/'
            },
            {
                className: 'symbol',
                begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'
            },
            {
                className: 'title.class',
                begin: /[a-zA-Z_][a-zA-Z\d_@-]*(?=\s\{)/,
                relevance: 0.2
            },
            {
                relevance: 0,
                match: [/[a-z][a-z-,]+/, /\s*/, /=/],
                scope: {
                    1: 'attr',
                    3: 'operator'
                }
            },
            {
                match: /[a-z][a-z-,]+(?=;)/,
                relevance: 0,
                scope: 'attr'
            },
            s,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            r,
            n,
            i,
            o,
            {
                begin: e.IDENT_RE + '::',
                keywords: ''
            }
        ]
    };
}
e.exports = n;
