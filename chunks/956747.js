"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(249288),
    a = n(221598),
    o = n(985018);
function c(e) {
    let t = (0, s.bG)([r.A], () => r.A.getToastsEnabled(e));
    return (0, i.jsx)(l.sLh, {
        id: "show-call-chat-toasts",
        label: o.intl.string(o.t["5NL5vT"]),
        checked: t,
        action: () => a.A.setCallChatToastsEnabled(e, !t),
    });
}
