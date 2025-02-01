function t(e) {
    let t = '([0-9]_*)+',
        n = '([0-9a-fA-F]_*)+',
        i = '([01]_*)+',
        r = '([0-7]_*)+',
        a = '[!#$%&*+.\\/<=>?@\\\\^~-]',
        s = '(\\p{S}|\\p{P})',
        o = '[(),;\\[\\]`|{}]',
        l = `(${a}|(?!(${o}|[_:"']))${s})`,
        u = {
            variants: [e.COMMENT('--+', '$'), e.COMMENT(/\{-/, /-\}/, { contains: ['self'] })]
        },
        c = {
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
        _ = {
            begin: '\\(',
            end: '\\)',
            illegal: '"',
            contains: [
                c,
                d,
                {
                    className: 'type',
                    begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
                },
                e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
                u
            ]
        },
        p = {
            begin: /\{/,
            end: /\}/,
            contains: _.contains
        },
        h = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${t})(\\.(${t}))?([eE][+-]?(${t}))?\\b` }, { match: `\\b0[xX]_*(${n})(\\.(${n}))?([pP][+-]?(${t}))?\\b` }, { match: `\\b0[oO](${r})\\b` }, { match: `\\b0[bB](${i})\\b` }]
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
                contains: [_, u],
                illegal: '\\W\\.|;'
            },
            {
                begin: '\\bimport\\b',
                end: '$',
                keywords: 'import qualified as hiding',
                contains: [_, u],
                illegal: '\\W\\.|;'
            },
            {
                className: 'class',
                begin: '^(\\s*)?(class|instance)\\b',
                end: 'where',
                keywords: 'class family instance where',
                contains: [f, _, u]
            },
            {
                className: 'class',
                begin: '\\b(data|(new)?type)\\b',
                end: '$',
                keywords: 'data family type newtype deriving',
                contains: [c, f, _, p, u]
            },
            {
                beginKeywords: 'default',
                end: '$',
                contains: [f, _, u]
            },
            {
                beginKeywords: 'infix infixl infixr',
                end: '$',
                contains: [e.C_NUMBER_MODE, u]
            },
            {
                begin: '\\bforeign\\b',
                end: '$',
                keywords: 'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
                contains: [f, e.QUOTE_STRING_MODE, u]
            },
            {
                className: 'meta',
                begin: '#!\\/usr\\/bin\\/env runhaskell',
                end: '$'
            },
            c,
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
            u,
            { begin: '->|<-' }
        ]
    };
}
e.exports = t;
