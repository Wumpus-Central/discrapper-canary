n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(249288),
    s = n(221598),
    o = n(985018);
function c(e) {
    let t = (0, l.bG)([a.A], () => a.A.getToastsEnabled(e));
    return (0, r.jsx)(i.sLh, {
        id: "show-call-chat-toasts",
        label: o.intl.string(o.t["5NL5vT"]),
        checked: t,
        action: () => s.A.setCallChatToastsEnabled(e, !t),
    });
}
