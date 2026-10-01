n.d(t, { e: () => g, l: () => f });
var i = n(477900),
    l = n(582128),
    r = n(192308),
    s = n(534890),
    a = n(308528),
    o = n(993401),
    u = n(518477),
    d = n(375708);
function c(e) {
    let { userId: t, onClose: n } = e,
        i = l.useCallback(() => {
            (a.A.openPrivateChannel({ recipientIds: t }), n?.(), (0, r.closeAllModals)());
        }, [t, n]);
    return { action: u.pt.SEND_MESSAGE, icon: s.ChatIcon, onClick: i, text: d.intl.string(d.t.zROXEV) };
}
function g(e) {
    let { userId: t, onClose: n, variant: l = "primary", ...r } = e,
        s = c({ userId: t, onClose: n });
    return (0, i.jsx)(o.FD, { variant: l, ...s, ...r });
}
function f(e) {
    let { userId: t, onClose: n, variant: l = "primary", ...r } = e,
        { text: s, ...a } = c({ userId: t, onClose: n });
    return (0, i.jsx)(o.q3, { tooltipText: s, "aria-label": s, variant: l, ...a, ...r });
}
