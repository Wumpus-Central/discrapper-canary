"use strict";
n.d(t, { A: () => a });
var i = n(742077),
    r = n(375708);
let a = {
    MENTION_EVERYONE: () => ({ test: "everyone", text: "@everyone", description: r.intl.string(r.t.lHC4zy) }),
    MENTION_HERE: () => ({ test: "here", text: "@here", description: r.intl.string(r.t.OE6mOz) }),
    MENTION_GAME: () => ({
        test: "game",
        text: "@game",
        inlineAutocompleteType: "gameMentionInput",
        autoInsertOnSpace: !0,
        description: r.intl.string(r.t["1kR88y"]),
    }),
    MENTION_TIMESTAMP: () => ({
        test: "time",
        text: "@time",
        inlineAutocompleteType: "timestampMentionInput",
        autoInsertOnSpace: !0,
        description: r.intl.string(r.t.V6L3TV),
    }),
    LAUNCHABLE_APPLICATIONS: () => i.A.launchableApplicationViewItems,
};
