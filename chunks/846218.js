n.d(t, { n: () => s });
var r = n(508675),
    i = n(690521),
    a = n(307731);
function s(e, t) {
    if (null == e.id) return !0;
    let n = r.Ay.getCustomEmojiById(e.id);
    return (
        null != n &&
        !i.Ay.isEmojiDisabled({
            emoji: n,
            channel: t,
            intention: a.b_.STATUS,
        })
    );
}
