t.d(n, { Z: () => s });
var a = t(512722),
    l = t.n(a),
    r = t(442837),
    i = t(339085),
    o = t(633302);
function s(e) {
    let { emojiId: n, emojiName: t } = e,
        a = (0, r.e7)([i.ZP], () => (null != n ? i.ZP.getCustomEmojiById(n) : null));
    if (null != a || null != t)
        if (null == n)
            return (
                l()(null != t, "emojiName must be defined if emojiId is not defined"),
                o.ZP.convertSurrogateToName(t, !1)
            );
        else return null == a ? void 0 : a.name;
}
