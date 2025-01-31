i.d(l, { Z: () => r });
var t = i(512722),
    n = i.n(t),
    s = i(442837),
    a = i(339085),
    o = i(633302);
function r(e) {
    let { emojiId: l, emojiName: i } = e,
        t = (0, s.e7)([a.ZP], () => (null != l ? a.ZP.getCustomEmojiById(l) : null));
    if (null != t || null != i) return null == l ? (n()(null != i, 'emojiName must be defined if emojiId is not defined'), o.ZP.convertSurrogateToName(i, !1)) : null == t ? void 0 : t.name;
}
