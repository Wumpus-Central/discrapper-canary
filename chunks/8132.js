function t(e) {
    let t = e.regex,
        n = /^[a-zA-Z][a-zA-Z0-9-]*/,
        i = ['ALPHA', 'BIT', 'CHAR', 'CR', 'CRLF', 'CTL', 'DIGIT', 'DQUOTE', 'HEXDIG', 'HTAB', 'LF', 'LWSP', 'OCTET', 'SP', 'VCHAR', 'WSP'],
        r = e.COMMENT(/;/, /$/),
        a = {
            scope: 'symbol',
            match: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+)?/
        },
        s = {
            scope: 'symbol',
            match: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+)?/
        },
        o = {
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
        keywords: i,
        contains: [
            {
                scope: 'operator',
                match: /=\/?/
            },
            {
                scope: 'attribute',
                match: t.concat(n, /(?=\s*=)/)
            },
            r,
            a,
            s,
            o,
            l,
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE
        ]
    };
}
e.exports = t;
