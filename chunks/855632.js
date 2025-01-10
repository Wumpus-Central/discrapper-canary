function n(e) {
    let n = {
            $pattern: e.UNDERSCORE_IDENT_RE,
            keyword: 'abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
            built_in: 'bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring',
            literal: 'false null true'
        },
        r = '(0|[1-9][\\d_]*)',
        i = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
        a = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
        s = '([eE][+-]?' + i + ')',
        o = '(' + i + '(\\.\\d*|' + s + ')|\\d+\\.' + i + '|\\.' + r + s + '?)',
        l = '(' + r + '|0[bB][01_]+|' + ('0[xX]' + a) + ')',
        u = '\\\\([\'"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};',
        c = {
            className: 'number',
            begin: '\\b' + l + '(L|u|U|Lu|LU|uL|UL)?',
            relevance: 0
        },
        d = {
            className: 'number',
            begin: '\\b(' + ('(' + ('(0[xX](' + a + '\\.' + a + '|\\.?' + a + ')[pP][+-]?' + i + ')') + '|' + o + ')') + '([fF]|L|i|[fF]i|Li)?|' + l + '(i|[fF]i|Li))',
            relevance: 0
        },
        f = {
            className: 'string',
            begin: "'(" + u + '|.)',
            end: "'",
            illegal: '.'
        },
        _ = {
            className: 'string',
            begin: '"',
            contains: [
                {
                    begin: u,
                    relevance: 0
                }
            ],
            end: '"[cwd]?'
        },
        h = {
            className: 'string',
            begin: '[rq]"',
            end: '"[cwd]?',
            relevance: 5
        },
        p = {
            className: 'string',
            begin: '`',
            end: '`[cwd]?'
        },
        m = {
            className: 'string',
            begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
            relevance: 10
        },
        g = {
            className: 'string',
            begin: 'q"\\{',
            end: '\\}"'
        },
        E = {
            className: 'meta',
            begin: '^#!',
            end: '$',
            relevance: 5
        },
        v = {
            className: 'meta',
            begin: '#(line)',
            end: '$',
            relevance: 5
        },
        I = {
            className: 'keyword',
            begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
        },
        T = e.COMMENT('\\/\\+', '\\+\\/', {
            contains: ['self'],
            relevance: 10
        });
    return {
        name: 'D',
        keywords: n,
        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, T, m, _, h, p, g, d, c, f, E, v, I]
    };
}
e.exports = n;
