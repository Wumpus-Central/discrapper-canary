t.d(n, { A: () => c });
var l = t(627968);
t(64700);
var i = t(17928),
    s = t(477782),
    a = t(249288),
    r = t(221598),
    o = t(375708);
function c(e) {
    let n = (0, i.bG)([a.A], () => a.A.getToastsEnabled(e));
    return (0, l.jsx)(s.sL, {
        id: "show-call-chat-toasts",
        label: o.intl.string(o.t["5NL5vT"]),
        checked: n,
        action: () => r.A.setCallChatToastsEnabled(e, !n),
    });
}
