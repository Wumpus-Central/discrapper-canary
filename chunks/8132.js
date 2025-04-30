e.exports = function (e) {
    let t = e.regex,
        n = /^[a-zA-Z][a-zA-Z0-9-]*/,
        r = ['ALPHA', 'BIT', 'CHAR', 'CR', 'CRLF', 'CTL', 'DIGIT', 'DQUOTE', 'HEXDIG', 'HTAB', 'LF', 'LWSP', 'OCTET', 'SP', 'VCHAR', 'WSP'],
        i = e.COMMENT(/;/, /$/),
        o = {
            scope: 'symbol',
            match: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+)?/
        },
        a = {
            scope: 'symbol',
            match: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+)?/
        },
        s = {
            scope: 'symbol',
            match: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+)?/
        },
        l = {
            scope: 'symbol',
            match: /%[si](?=".*")/
        };
    return {
        name: 'Augmented Backus-Naur Form',
        illegal: /[!@#$^&',?+~`|:]/,
        keywords: r,
        contains: [
            {
                scope: 'operator',
                match: /=\/?/
            },
            {
                scope: 'attribute',
                match: t.concat(n, /(?=\s*=)/)
            },
            i,
            o,
            a,
            s,
            l,
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE
        ]
    };
};
