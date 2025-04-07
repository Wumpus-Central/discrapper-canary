t.d(n, { Z: () => o });
var l = t(512722),
    a = t.n(l),
    i = t(442837),
    r = t(339085),
    s = t(633302);
function o(e) {
    let { emojiId: n, emojiName: t } = e,
        l = (0, i.e7)([r.ZP], () => (null != n ? r.ZP.getCustomEmojiById(n) : null));
    if (null != l || null != t)
        if (null == n) return a()(null != t, 'emojiName must be defined if emojiId is not defined'), s.ZP.convertSurrogateToName(t, !1);
        else return null == l ? void 0 : l.name;
}
