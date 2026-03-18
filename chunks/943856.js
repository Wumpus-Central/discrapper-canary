e.exports = function (e) {
    let t = {
            $pattern: e.UNDERSCORE_IDENT_RE,
            keyword:
                "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
            built_in:
                "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
            literal: "false null true",
        },
        n = "(0|[1-9][\\d_]*)",
        r = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
        i = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
        s = "([eE][+-]?" + r + ")",
        a = "(" + r + "(\\.\\d*|" + s + ")|\\d+\\." + r + "|\\." + n + s + "?)",
        o = "(" + n + "|0[bB][01_]+|0[xX]" + i + ")",
        l = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",
        u = { className: "number", begin: "\\b" + o + "(L|u|U|Lu|LU|uL|UL)?", relevance: 0 },
        c = {
            className: "number",
            begin:
                "\\b(" +
                ("(" + ("(0[xX](" + i + "\\." + i + "|\\.?" + i + ")[pP][+-]?" + r) + ")|" + a) +
                ")([fF]|L|i|[fF]i|Li)?|" +
                o +
                "(i|[fF]i|Li))",
            relevance: 0,
        },
        d = { className: "string", begin: "'(" + l + "|.)", end: "'", illegal: "." },
        _ = { className: "string", begin: '"', contains: [{ begin: l, relevance: 0 }], end: '"[cwd]?' },
        f = { className: "string", begin: '[rq]"', end: '"[cwd]?', relevance: 5 },
        p = { className: "string", begin: "`", end: "`[cwd]?" },
        h = { className: "string", begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?', relevance: 10 },
        m = { className: "string", begin: 'q"\\{', end: '\\}"' },
        E = { className: "meta", begin: "^#!", end: "$", relevance: 5 },
        g = { className: "meta", begin: "#(line)", end: "$", relevance: 5 },
        A = { className: "keyword", begin: "@[a-zA-Z_][a-zA-Z_\\d]*" },
        I = e.COMMENT("\\/\\+", "\\+\\/", { contains: ["self"], relevance: 10 });
    return {
        name: "D",
        keywords: t,
        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, I, h, _, f, p, m, c, u, d, E, g, A],
    };
};
