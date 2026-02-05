"use strict";
n.d(t, { sA: () => i, us: () => a });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-09_mention_suggestion",
    label: "Mention Suggestions",
    defaultConfig: {
        enabled: !1,
        suggestionDesign: "horizontal",
        highlightDesign: "mention",
        onlyExactMatch: !1,
        eagerRecentSenders: !1,
        largeGuildExactMatchRecentSenders: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Default",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !1,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 2,
            label: "Exact match only",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 3,
            label: "Alternate highlight design",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "mention",
                onlyExactMatch: !1,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 4,
            label: "Horizontal suggestions",
            config: {
                enabled: !0,
                suggestionDesign: "horizontal",
                highlightDesign: "simple",
                onlyExactMatch: !1,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 5,
            label: "Exact match + eager recent senders",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
                eagerRecentSenders: !0,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 6,
            label: "Eager match recent senders for small guilds, exact match for large guilds",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
                eagerRecentSenders: !0,
                largeGuildExactMatchRecentSenders: !0,
            },
        },
    ],
});
function i(e, t) {
    return r.getCurrentConfig({ location: e }, t);
}
function a(e, t) {
    return r.useExperiment({ location: e }, t);
}
