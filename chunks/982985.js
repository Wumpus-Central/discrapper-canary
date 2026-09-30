l.d(n, { e: () => g, l: () => f });
var t = l(477900),
    i = l(582128),
    r = l(192308),
    a = l(534890),
    s = l(308528),
    o = l(993401),
    d = l(518477),
    u = l(375708);
function c(e) {
    let { userId: n, onClose: l } = e,
        t = i.useCallback(() => {
            (s.A.openPrivateChannel({ recipientIds: n }), l?.(), (0, r.closeAllModals)());
        }, [n, l]);
    return { action: d.pt.SEND_MESSAGE, icon: a.ChatIcon, onClick: t, text: u.intl.string(u.t.zROXEV) };
}
function g(e) {
    let { userId: n, onClose: l, variant: i = "primary", ...r } = e,
        a = c({ userId: n, onClose: l });
    return (0, t.jsx)(o.FD, { variant: i, ...a, ...r });
}
function f(e) {
    let { userId: n, onClose: l, variant: i = "primary", ...r } = e,
        { text: a, ...s } = c({ userId: n, onClose: l });
    return (0, t.jsx)(o.q3, { tooltipText: a, "aria-label": a, variant: i, ...s, ...r });
}
