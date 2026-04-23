t.d(n, { A: () => c });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(477782),
    s = t(249288),
    r = t(221598),
    o = t(985018);
function c(e) {
    let n = (0, i.bG)([s.A], () => s.A.getToastsEnabled(e));
    return (0, l.jsx)(a.sL, {
        id: "show-call-chat-toasts",
        label: o.intl.string(o.t["5NL5vT"]),
        checked: n,
        action: () => r.A.setCallChatToastsEnabled(e, !n),
    });
}
