var i = n(76573);
function r(e) {
    return 3 === e.length;
}
(i.gm.UNSPECIFIED,
    i.pR.UNSPECIFIED,
    n.d(
        t,
        {},
        {
            El: function (e) {
                return {
                    emojis: e.emojis.map((e) => (null != e.id ? { custom_emoji_id: e.id } : { unicode_emoji: e.name })),
                    animation: e.animation,
                    typing_suggestion: e.typingSuggestion,
                };
            },
            Zc: function (e) {
                return r(e.emojis) ? e.animation : i.pR.UNSPECIFIED;
            },
            aj: function (e) {
                return e.map((e) => e?.id ?? e?.name ?? "").join(":");
            },
            cE: function (e) {
                return null == e
                    ? null
                    : {
                          emojis: (e.emojis ?? []).map((e) =>
                              null != e.custom_emoji_id
                                  ? { id: e.custom_emoji_id, name: "", animated: e.animated ?? !1 }
                                  : { name: e.unicode_emoji ?? "" },
                          ),
                          typingSuggestion: e.typing_suggestion ?? i.gm.UNSPECIFIED,
                          animation: e.animation ?? i.pR.UNSPECIFIED,
                      };
            },
            zM: r,
        },
    ));
