e.exports = function (e) {
    let t = e.regex,
        n = /\b/;
    function r(e, t) {
        if (0 === e.index) return;
        let n = e.input[e.index - 1];
        (n >= '0' && n <= '9') || ('_' !== n && t.ignoreMatch());
    }
    let i = /[+-]?((\.\d+)|(\d+)(\.\d*)?)/,
        o = /[GM]\s*\d+(\.\d+)?/,
        a = /T\s*\d+/,
        s = /O\s*\d+/,
        l = /O<.+>/,
        c = /[ABCUVWXYZ]\s*/,
        u = /[FHIJKPQRS]\s*/;
    return {
        name: 'G-code (ISO 6983)',
        aliases: ['nc'],
        case_insensitive: !0,
        disableAutodetect: !0,
        keywords: {
            $pattern: /[A-Z]+|%/,
            keyword: ['THEN', 'ELSE', 'ENDIF', 'IF', 'GOTO', 'DO', 'WHILE', 'WH', 'END', 'CALL', 'SUB', 'ENDSUB', 'EQ', 'NE', 'LT', 'GT', 'LE', 'GE', 'AND', 'OR', 'XOR', '%'],
            built_in: ['ATAN', 'ABS', 'ACOS', 'ASIN', 'COS', 'EXP', 'FIX', 'FUP', 'ROUND', 'LN', 'SIN', 'SQRT', 'TAN', 'EXISTS']
        },
        contains: [
            e.COMMENT(/\(/, /\)/),
            e.COMMENT(/;/, /$/),
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            e.C_NUMBER_MODE,
            {
                scope: 'title.function',
                variants: [
                    { match: t.concat(n, o) },
                    {
                        begin: o,
                        'on:begin': r
                    },
                    { match: t.concat(n, a) },
                    {
                        begin: a,
                        'on:begin': r
                    }
                ]
            },
            {
                scope: 'symbol',
                variants: [
                    { match: t.concat(n, s) },
                    {
                        begin: s,
                        'on:begin': r
                    },
                    { match: t.concat(n, l) },
                    {
                        begin: l,
                        'on:begin': r
                    },
                    { match: /\*\s*\d+\s*$/ }
                ]
            },
            {
                scope: 'operator',
                match: /^N\s*\d+/
            },
            {
                scope: 'variable',
                match: /-?#\s*\d+/
            },
            {
                scope: 'property',
                variants: [
                    { match: t.concat(n, c, i) },
                    {
                        begin: t.concat(c, i),
                        'on:begin': r
                    }
                ]
            },
            {
                scope: 'params',
                variants: [
                    { match: t.concat(n, u, i) },
                    {
                        begin: t.concat(u, i),
                        'on:begin': r
                    }
                ]
            }
        ]
    };
};
