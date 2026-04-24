e.exports = function (e) {
    let t = ["true", "false", "null"],
        a = { scope: "literal", beginKeywords: t.join(" ") };
    return {
        name: "JSON",
        aliases: ["jsonc"],
        keywords: { literal: t },
        contains: [
            { className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 },
            { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
            e.QUOTE_STRING_MODE,
            a,
            e.C_NUMBER_MODE,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
        ],
        illegal: "\\S",
    };
};
