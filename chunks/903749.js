l.d(t, { Z: () => o });
var n = l(512722),
    i = l.n(n),
    s = l(442837),
    r = l(339085),
    a = l(633302);
function o(e) {
    let { emojiId: t, emojiName: l } = e,
        n = (0, s.e7)([r.ZP], () => (null != t ? r.ZP.getCustomEmojiById(t) : null));
    if (null != n || null != l)
        if (null == t) return (i()(null != l, 'emojiName must be defined if emojiId is not defined'), a.ZP.convertSurrogateToName(l, !1));
        else return null == n ? void 0 : n.name;
}
