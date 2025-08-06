n.d(t, { K: () => a });
var r = n(339085),
    i = n(176354),
    o = n(185923);
function a(e, t) {
    if (null == e.id) return !0;
    let n = r.ZP.getCustomEmojiById(e.id);
    return (
        null != n &&
        !i.ZP.isEmojiDisabled({
            emoji: n,
            channel: t,
            intention: o.Hz.STATUS,
        })
    );
}
