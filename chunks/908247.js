"use strict";
n.d(t, { A: () => i });
var l = n(627968);
n(64700);
var a = n(807884),
    s = n(514116);
function i(e) {
    let { channelId: t, messageId: n } = e,
        i = (0, a.A)(t, n)?.message.moderationLabel;
    return null == i || "" === i ? null : (0, l.jsx)("span", { className: s.R, children: i });
}
