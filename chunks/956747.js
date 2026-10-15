t.d(n, { A: () => c });
var i = t(477900);
t(582128);
var l = t(17928),
    s = t(477782),
    a = t(249288),
    r = t(221598),
    o = t(105292);
function c(e) {
    let n = (0, l.bG)([a.A], () => a.A.getToastsEnabled(e));
    return (0, i.jsx)(s.sL, {
        id: "show-call-chat-toasts",
        label: o.intl.string(o.t["5NL5vT"]),
        checked: n,
        action: () => r.A.setCallChatToastsEnabled(e, !n),
    });
}
