"use strict";
n.d(t, { A: () => s });
var r = n(742077),
    i = n(985018);
let s = {
    MENTION_EVERYONE: () => ({ test: "everyone", text: "@everyone", description: i.intl.string(i.t.lHC4zy) }),
    MENTION_HERE: () => ({ test: "here", text: "@here", description: i.intl.string(i.t.OE6mOz) }),
    MENTION_TIMESTAMP: () => ({
        test: "time",
        text: "@time",
        inlineAutocompleteType: "timestampMentionInput",
        description: i.intl.string(i.t.V6L3TV),
    }),
    LAUNCHABLE_APPLICATIONS: () => r.A.launchableApplicationViewItems,
};
