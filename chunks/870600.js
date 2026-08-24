"use strict";
n.d(t, { El: () => r, cE: () => a });
var i = n(441574);
function r(e) {
    return {
        emojis: e.emojis.map((e) => (null != e.id ? { custom_emoji_id: e.id } : { unicode_emoji: e.name })),
        animation: e.animation,
        typing_suggestion: e.typingSuggestion,
    };
}
function a(e) {
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
}
i.gm.UNSPECIFIED, i.pR.UNSPECIFIED;
