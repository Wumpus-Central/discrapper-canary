var n = '[0-9](_*[0-9])*',
    r = `\\.(${n})`,
    i = '[0-9a-fA-F](_*[0-9a-fA-F])*',
    a = {
        className: 'number',
        variants: [{ begin: `(\\b(${n})((${r})|\\.)?|(${r}))[eE][+-]?(${n})[fFdD]?\\b` }, { begin: `\\b(${n})((${r})[fFdD]?\\b|\\.([fFdD]\\b)?)` }, { begin: `(${r})[fFdD]?\\b` }, { begin: `\\b(${n})[fFdD]\\b` }, { begin: `\\b0[xX]((${i})\\.?|(${i})?\\.(${i}))[pP][+-]?(${n})[fFdD]?\\b` }, { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' }, { begin: `\\b0[xX](${i})[lL]?\\b` }, { begin: '\\b0(_*[0-7])*[lL]?\\b' }, { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' }],
        relevance: 0
    };
function s(e, n, r) {
    return -1 === r ? '' : e.replace(n, (i) => s(e, n, r - 1));
}
function o(e) {
    let n = e.regex,
        r = '[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*',
        i = r + s('(?:<' + r + '~~~(?:\\s*,\\s*' + r + '~~~)*>)?', /~~~/g, 2),
        o = {
            keyword: ['synchronized', 'abstract', 'private', 'var', 'static', 'if', 'const ', 'for', 'while', 'strictfp', 'finally', 'protected', 'import', 'native', 'final', 'void', 'enum', 'else', 'break', 'transient', 'catch', 'instanceof', 'volatile', 'case', 'assert', 'package', 'default', 'public', 'try', 'switch', 'continue', 'throws', 'protected', 'public', 'private', 'module', 'requires', 'exports', 'do', 'sealed', 'yield', 'permits', 'goto', 'when'],
            literal: ['false', 'true', 'null'],
            type: ['char', 'boolean', 'long', 'float', 'int', 'byte', 'short', 'double'],
            built_in: ['super', 'this']
        },
        l = {
            className: 'meta',
            begin: '@' + r,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    contains: ['self']
                }
            ]
        },
        u = {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: o,
            relevance: 0,
            contains: [e.C_BLOCK_COMMENT_MODE],
            endsParent: !0
        };
    return {
        name: 'Java',
        aliases: ['jsp'],
        keywords: o,
        illegal: /<\/|#/,
        contains: [
            e.COMMENT('/\\*\\*', '\\*/', {
                relevance: 0,
                contains: [
                    {
                        begin: /\w+@/,
                        relevance: 0
                    },
                    {
                        className: 'doctag',
                        begin: '@[A-Za-z]+'
                    }
                ]
            }),
            {
                begin: /import java\.[a-z]+\./,
                keywords: 'import',
                relevance: 2
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            {
                begin: /"""/,
                end: /"""/,
                className: 'string',
                contains: [e.BACKSLASH_ESCAPE]
            },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            {
                match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, r],
                className: {
                    1: 'keyword',
                    3: 'title.class'
                }
            },
            {
                match: /non-sealed/,
                scope: 'keyword'
            },
            {
                begin: [n.concat(/(?!else)/, r), /\s+/, r, /\s+/, /=(?!=)/],
                className: {
                    1: 'type',
                    3: 'variable',
                    5: 'operator'
                }
            },
            {
                begin: [/record/, /\s+/, r],
                className: {
                    1: 'keyword',
                    3: 'title.class'
                },
                contains: [u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            },
            {
                beginKeywords: 'new throw return else',
                relevance: 0
            },
            {
                begin: ['(?:' + i + '\\s+)', e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                className: { 2: 'title.function' },
                keywords: o,
                contains: [
                    {
                        className: 'params',
                        begin: /\(/,
                        end: /\)/,
                        keywords: o,
                        relevance: 0,
                        contains: [l, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE]
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE
                ]
            },
            a,
            l
        ]
    };
}
e.exports = o;
