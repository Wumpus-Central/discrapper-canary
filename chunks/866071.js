n.d(t, { K: () => o });
var r = n(339085),
    i = n(176354),
    a = n(185923);
function o(e, t) {
    if (null == e.id) return !0;
    let n = r.ZP.getCustomEmojiById(e.id);
    return (
        null != n &&
        !i.ZP.isEmojiDisabled({
            emoji: n,
            channel: t,
            intention: a.Hz.STATUS
        })
    );
}
