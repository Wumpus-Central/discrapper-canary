function t(e) {
    let t = '([0-9]_*)+',
        n = '([0-9a-fA-F]_*)+',
        r = '([01]_*)+',
        i = '([0-7]_*)+',
        o = '[!#$%&*+.\\/<=>?@\\\\^~-]',
        a = '(\\p{S}|\\p{P})',
        s = '[(),;\\[\\]`|{}]',
        l = `(${o}|(?!(${s}|[_:"']))${a})`,
        c = {
            variants: [e.COMMENT('--+', '$'), e.COMMENT(/\{-/, /-\}/, { contains: ['self'] })]
        },
        u = {
            className: 'meta',
            begin: /\{-#/,
            end: /#-\}/
        },
        d = {
            className: 'meta',
            begin: '^#',
            end: '$'
        },
        f = {
            className: 'type',
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
        },
        p = {
            begin: '\\(',
            end: '\\)',
            illegal: '"',
            contains: [
                u,
                d,
                {
                    className: 'type',
                    begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
                },
                e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
                c
            ]
        },
        _ = {
            begin: /\{/,
            end: /\}/,
            contains: p.contains
        },
        h = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${t})(\\.(${t}))?([eE][+-]?(${t}))?\\b` }, { match: `\\b0[xX]_*(${n})(\\.(${n}))?([pP][+-]?(${t}))?\\b` }, { match: `\\b0[oO](${i})\\b` }, { match: `\\b0[bB](${r})\\b` }]
        };
    return {
        name: 'Haskell',
        aliases: ['hs'],
        keywords: 'let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec',
        unicodeRegex: !0,
        contains: [
            {
                beginKeywords: 'module',
                end: 'where',
                keywords: 'module where',
                contains: [p, c],
                illegal: '\\W\\.|;'
            },
            {
                begin: '\\bimport\\b',
                end: '$',
                keywords: 'import qualified as hiding',
                contains: [p, c],
                illegal: '\\W\\.|;'
            },
            {
                className: 'class',
                begin: '^(\\s*)?(class|instance)\\b',
                end: 'where',
                keywords: 'class family instance where',
                contains: [f, p, c]
            },
            {
                className: 'class',
                begin: '\\b(data|(new)?type)\\b',
                end: '$',
                keywords: 'data family type newtype deriving',
                contains: [u, f, p, _, c]
            },
            {
                beginKeywords: 'default',
                end: '$',
                contains: [f, p, c]
            },
            {
                beginKeywords: 'infix infixl infixr',
                end: '$',
                contains: [e.C_NUMBER_MODE, c]
            },
            {
                begin: '\\bforeign\\b',
                end: '$',
                keywords: 'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
                contains: [f, e.QUOTE_STRING_MODE, c]
            },
            {
                className: 'meta',
                begin: '#!\\/usr\\/bin\\/env runhaskell',
                end: '$'
            },
            u,
            d,
            {
                scope: 'string',
                begin: /'(?=\\?.')/,
                end: /'/,
                contains: [
                    {
                        scope: 'char.escape',
                        match: /\\./
                    }
                ]
            },
            e.QUOTE_STRING_MODE,
            h,
            f,
            e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
            { begin: `(?!-)${l}--+|--+(?!-)${l}` },
            c,
            { begin: '->|<-' }
        ]
    };
}
e.exports = t;
