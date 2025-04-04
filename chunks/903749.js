l.d(t, { Z: () => o });
var n = l(512722),
    i = l.n(n),
    s = l(442837),
    a = l(339085),
    r = l(633302);
function o(e) {
    let { emojiId: t, emojiName: l } = e,
        n = (0, s.e7)([a.ZP], () => (null != t ? a.ZP.getCustomEmojiById(t) : null));
    if (null != n || null != l)
        if (null == t) return i()(null != l, 'emojiName must be defined if emojiId is not defined'), r.ZP.convertSurrogateToName(l, !1);
        else return null == n ? void 0 : n.name;
}
