"use strict";
n.d(t, { A: () => a });
var l = n(627968);
n(64700);
var i = n(807884),
    s = n(299764);
function a(e) {
    let { channelId: t, messageId: n } = e,
        a = (0, i.A)(t, n)?.message.moderationLabel;
    return null == a || "" === a ? null : (0, l.jsx)("span", { className: s.R, children: a });
}
