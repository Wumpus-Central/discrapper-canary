n.d(t, { A: () => s });
var i = n(885386),
    r = n(742077),
    a = n(375708);
let s = {
    MENTION_EVERYONE: () => ({ test: "everyone", text: "@everyone", description: a.intl.string(a.t.lHC4zy) }),
    MENTION_HERE: () => ({ test: "here", text: "@here", description: a.intl.string(a.t.OE6mOz) }),
    MENTION_GAME: () =>
        i.BQ.getSetting()
            ? {
                  test: "game",
                  text: "@game",
                  inlineAutocompleteType: "gameMentionInput",
                  autoInsertOnSpace: !0,
                  description: a.intl.string(a.t["1kR88y"]),
              }
            : void 0,
    MENTION_TIMESTAMP: () => ({
        test: "time",
        text: "@time",
        inlineAutocompleteType: "timestampMentionInput",
        autoInsertOnSpace: !0,
        description: a.intl.string(a.t.V6L3TV),
    }),
    LAUNCHABLE_APPLICATIONS: () => r.A.launchableApplicationViewItems,
};
