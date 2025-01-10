function n(e) {
    let n = '([0-9]_*)+',
        r = '([0-9a-fA-F]_*)+',
        i = '([01]_*)+',
        a = '([0-7]_*)+',
        s = '[!#$%&*+.\\/<=>?@\\\\^~-]',
        o = '(\\p{S}|\\p{P})',
        l = '[(),;\\[\\]`|{}]',
        u = `(${s}|(?!(${l}|[_:"']))${o})`,
        c = {
            variants: [e.COMMENT('--+', '$'), e.COMMENT(/\{-/, /-\}/, { contains: ['self'] })]
        },
        d = {
            className: 'meta',
            begin: /\{-#/,
            end: /#-\}/
        },
        f = {
            className: 'meta',
            begin: '^#',
            end: '$'
        },
        _ = {
            className: 'type',
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
        },
        h = {
            begin: '\\(',
            end: '\\)',
            illegal: '"',
            contains: [
                d,
                f,
                {
                    className: 'type',
                    begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
                },
                e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
                c
            ]
        },
        p = {
            begin: /\{/,
            end: /\}/,
            contains: h.contains
        },
        m = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${n})(\\.(${n}))?([eE][+-]?(${n}))?\\b` }, { match: `\\b0[xX]_*(${r})(\\.(${r}))?([pP][+-]?(${n}))?\\b` }, { match: `\\b0[oO](${a})\\b` }, { match: `\\b0[bB](${i})\\b` }]
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
                contains: [h, c],
                illegal: '\\W\\.|;'
            },
            {
                begin: '\\bimport\\b',
                end: '$',
                keywords: 'import qualified as hiding',
                contains: [h, c],
                illegal: '\\W\\.|;'
            },
            {
                className: 'class',
                begin: '^(\\s*)?(class|instance)\\b',
                end: 'where',
                keywords: 'class family instance where',
                contains: [_, h, c]
            },
            {
                className: 'class',
                begin: '\\b(data|(new)?type)\\b',
                end: '$',
                keywords: 'data family type newtype deriving',
                contains: [d, _, h, p, c]
            },
            {
                beginKeywords: 'default',
                end: '$',
                contains: [_, h, c]
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
                contains: [_, e.QUOTE_STRING_MODE, c]
            },
            {
                className: 'meta',
                begin: '#!\\/usr\\/bin\\/env runhaskell',
                end: '$'
            },
            d,
            f,
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
            m,
            _,
            e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
            { begin: `(?!-)${u}--+|--+(?!-)${u}` },
            c,
            { begin: '->|<-' }
        ]
    };
}
e.exports = n;
