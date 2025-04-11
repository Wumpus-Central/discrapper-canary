n.d(t, { Z: () => o });
var l = n(512722),
    a = n.n(l),
    r = n(442837),
    i = n(339085),
    s = n(633302);
function o(e) {
    let { emojiId: t, emojiName: n } = e,
        l = (0, r.e7)([i.ZP], () => (null != t ? i.ZP.getCustomEmojiById(t) : null));
    if (null != l || null != n)
        if (null == t) return a()(null != n, 'emojiName must be defined if emojiId is not defined'), s.ZP.convertSurrogateToName(n, !1);
        else return null == l ? void 0 : l.name;
}
