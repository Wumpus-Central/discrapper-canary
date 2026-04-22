"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var a = n(763754),
    r = n(635071),
    l = n(812299);
function s(e) {
    let t = (0, a.Ay)(e.message),
        n = (0, l.y)({
            message: e.message,
            channel: e.channel,
            user: e.message?.author ?? e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        s = {};
    return null != n && (s[r.w.SYSTEM_TAG] = n), (0, i.jsx)(r.A, { ...e, author: t, decorations: s });
}
