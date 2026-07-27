e.exports = function (e) {
    let t = {
            keyword:
                "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
            literal: "true false nil",
            built_in:
                "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table",
        },
        a = "[A-Za-z$_][0-9A-Za-z$_]{0,149}",
        n = { className: "subst", begin: /#\{/, end: /\}/, keywords: t },
        r = [
            e.inherit(e.C_NUMBER_MODE, { starts: { end: "(\\s*/)?", relevance: 0 } }),
            {
                className: "string",
                variants: [
                    { begin: /'/, end: /'/, contains: [e.BACKSLASH_ESCAPE] },
                    { begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, n] },
                ],
            },
            { className: "built_in", begin: "@__" + e.IDENT_RE },
            { begin: "@" + e.IDENT_RE },
            { begin: e.IDENT_RE + "\\\\" + e.IDENT_RE },
        ];
    n.contains = r;
    let i = e.inherit(e.TITLE_MODE, { begin: a }),
        o = "(\\(.*\\)\\s*)?\\B[-=]>",
        s = {
            className: "params",
            begin: "\\([^\\(]",
            returnBegin: !0,
            contains: [{ begin: /\(/, end: /\)/, keywords: t, contains: ["self"].concat(r) }],
        };
    return {
        name: "MoonScript",
        aliases: ["moon"],
        keywords: t,
        illegal: /\/\*/,
        contains: r.concat([
            e.COMMENT("--", "$"),
            {
                className: "function",
                begin: "^\\s*" + a + "\\s*=\\s*" + o,
                end: "[-=]>",
                returnBegin: !0,
                contains: [i, s],
            },
            {
                begin: /[\(,:=]\s*/,
                relevance: 0,
                contains: [{ className: "function", begin: o, end: "[-=]>", returnBegin: !0, contains: [s] }],
            },
            {
                className: "class",
                beginKeywords: "class",
                end: "$",
                illegal: /[:="\[\]]/,
                contains: [{ beginKeywords: "extends", endsWithParent: !0, illegal: /[:="\[\]]/, contains: [i] }, i],
            },
            { className: "name", begin: a + ":", end: ":", returnBegin: !0, returnEnd: !0, relevance: 0 },
        ]),
    };
};
