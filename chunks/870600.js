var i = n(76573);
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
        },
    ));
