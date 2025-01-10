function n(e) {
    let n = e.regex,
        r = /^[a-zA-Z][a-zA-Z0-9-]*/,
        i = ['ALPHA', 'BIT', 'CHAR', 'CR', 'CRLF', 'CTL', 'DIGIT', 'DQUOTE', 'HEXDIG', 'HTAB', 'LF', 'LWSP', 'OCTET', 'SP', 'VCHAR', 'WSP'],
        a = e.COMMENT(/;/, /$/),
        s = {
            scope: 'symbol',
            match: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+)?/
        },
        o = {
            scope: 'symbol',
            match: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+)?/
        },
        l = {
            scope: 'symbol',
            match: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+)?/
        },
        u = {
            scope: 'symbol',
            match: /%[si](?=".*")/
        },
        c = {
            scope: 'attribute',
            match: n.concat(r, /(?=\s*=)/)
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
            c,
            a,
            s,
            o,
            l,
            u,
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE
        ]
    };
}
e.exports = n;
