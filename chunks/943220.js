n.d(t, { A: () => s });
var a = n(627968);
n(64700);
var i = n(763754),
    l = n(635071),
    r = n(812299);
function s(e) {
    let t = (0, i.Ay)(e.message),
        n = (0, r.y)({
            message: e.message,
            channel: e.channel,
            user: e.message?.author ?? e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        s = {};
    return null != n && (s[l.w.SYSTEM_TAG] = n), (0, a.jsx)(l.A, { ...e, author: t, decorations: s });
}
