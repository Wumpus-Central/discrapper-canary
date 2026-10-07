t.d(n, { A: () => c });
var l = t(477900);
t(582128);
var i = t(17928),
    a = t(477782),
    s = t(249288),
    o = t(221598),
    r = t(660183);
function c(e) {
    let n = (0, i.bG)([s.A], () => s.A.getToastsEnabled(e));
    return (0, l.jsx)(a.sL, {
        id: "show-call-chat-toasts",
        label: r.intl.string(r.t["5NL5vT"]),
        checked: n,
        action: () => o.A.setCallChatToastsEnabled(e, !n),
    });
}
