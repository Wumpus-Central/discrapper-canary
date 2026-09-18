n.d(l, { A: () => t });
var a = n(477900);
n(582128);
var s = n(763754),
    i = n(799162),
    r = n(812299);
function t(e) {
    let l = (0, s.Ay)(e.message),
        n = (0, r.y)({
            message: e.message,
            channel: e.channel,
            user: e.message?.author ?? e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        t = {};
    return (null != n && (t[i.w.SYSTEM_TAG] = n), (0, a.jsx)(i.A, { ...e, author: l, decorations: t }));
}
