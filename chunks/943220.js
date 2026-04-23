"use strict";
i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var l = i(763754),
    r = i(635071),
    a = i(812299);
function s(e) {
    let t = (0, l.Ay)(e.message),
        i = (0, a.y)({
            message: e.message,
            channel: e.channel,
            user: e.message?.author ?? e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        s = {};
    return null != i && (s[r.w.SYSTEM_TAG] = i), (0, n.jsx)(r.A, { ...e, author: t, decorations: s });
}
