function n(e) {
    let n = e.regex,
        r = 'HTTP/([32]|1\\.[01])',
        i = /[A-Za-z][A-Za-z0-9-]*/,
        a = {
            className: 'attribute',
            begin: n.concat('^', i, '(?=\\:\\s)'),
            starts: {
                contains: [
                    {
                        className: 'punctuation',
                        begin: /: /,
                        relevance: 0,
                        starts: {
                            end: '$',
                            relevance: 0
                        }
                    }
                ]
            }
        },
        s = [
            a,
            {
                begin: '\\n\\n',
                starts: {
                    subLanguage: [],
                    endsWithParent: !0
                }
            }
        ];
    return {
        name: 'HTTP',
        aliases: ['https'],
        illegal: /\S/,
        contains: [
            {
                begin: '^(?=' + r + ' \\d{3})',
                end: /$/,
                contains: [
                    {
                        className: 'meta',
                        begin: r
                    },
                    {
                        className: 'number',
                        begin: '\\b\\d{3}\\b'
                    }
                ],
                starts: {
                    end: /\b\B/,
                    illegal: /\S/,
                    contains: s
                }
            },
            {
                begin: '(?=^[A-Z]+ (.*?) ' + r + '$)',
                end: /$/,
                contains: [
                    {
                        className: 'string',
                        begin: ' ',
                        end: ' ',
                        excludeBegin: !0,
                        excludeEnd: !0
                    },
                    {
                        className: 'meta',
                        begin: r
                    },
                    {
                        className: 'keyword',
                        begin: '[A-Z]+'
                    }
                ],
                starts: {
                    end: /\b\B/,
                    illegal: /\S/,
                    contains: s
                }
            },
            e.inherit(a, { relevance: 0 })
        ]
    };
}
e.exports = n;
