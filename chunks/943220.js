n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var a = n(763754),
    s = n(635071),
    l = n(812299);
function r(e) {
    let t = (0, a.Ay)(e.message),
        n = (0, l.y)({
            message: e.message,
            channel: e.channel,
            user: e.message?.author ?? e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        r = {};
    return null != n && (r[s.w.SYSTEM_TAG] = n), (0, i.jsx)(s.A, { ...e, author: t, decorations: r });
}
