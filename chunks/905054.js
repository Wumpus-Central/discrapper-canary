e.exports = function (e) {
    let t = e.regex,
        n = ['div', 'mod', 'in', 'and', 'or', 'not', 'xor', 'asserterror', 'begin', 'case', 'do', 'downto', 'else', 'end', 'exit', 'for', 'local', 'if', 'of', 'repeat', 'then', 'to', 'until', 'while', 'with', 'var'],
        r = 'false true',
        i = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, { relevance: 0 }), e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })],
        o = {
            className: 'string',
            begin: /'/,
            end: /'/,
            contains: [{ begin: /''/ }]
        },
        a = {
            className: 'string',
            begin: /(#\d+)+/
        },
        s = {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
            relevance: 0
        },
        l = {
            className: 'string',
            begin: '"',
            end: '"'
        },
        c = {
            match: [/procedure/, /\s+/, /[a-zA-Z_][\w@]*/, /\s*/],
            scope: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [
                {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    keywords: n,
                    contains: [o, a, e.NUMBER_MODE]
                },
                ...i
            ]
        },
        u = ['Table', 'Form', 'Report', 'Dataport', 'Codeunit', 'XMLport', 'MenuSuite', 'Page', 'Query'],
        d = {
            match: [/OBJECT/, /\s+/, t.either(...u), /\s+/, /\d+/, /\s+(?=[^\s])/, /.*/, /$/],
            relevance: 3,
            scope: {
                1: 'keyword',
                3: 'type',
                5: 'number',
                7: 'title'
            }
        };
    return {
        name: 'C/AL',
        case_insensitive: !0,
        keywords: {
            keyword: n,
            literal: r
        },
        illegal: /\/\*/,
        contains: [
            {
                match: /[\w]+(?=\=)/,
                scope: 'attribute',
                relevance: 0
            },
            o,
            a,
            s,
            l,
            e.NUMBER_MODE,
            d,
            c
        ]
    };
};
