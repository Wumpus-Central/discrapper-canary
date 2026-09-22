t.d(n, { A: () => c });
var i = t(477900);
t(582128);
var l = t(17928),
    s = t(477782),
    a = t(249288),
    o = t(221598),
    r = t(375708);
function c(e) {
    let n = (0, l.bG)([a.A], () => a.A.getToastsEnabled(e));
    return (0, i.jsx)(s.sL, {
        id: "show-call-chat-toasts",
        label: r.intl.string(r.t["5NL5vT"]),
        checked: n,
        action: () => o.A.setCallChatToastsEnabled(e, !n),
    });
}
