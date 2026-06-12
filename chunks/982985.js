n.d(l, { e: () => g, l: () => f });
var t = n(627968),
    i = n(64700),
    r = n(192308),
    a = n(534890),
    s = n(308528),
    o = n(993401),
    d = n(518477),
    u = n(375708);
function c(e) {
    let { userId: l, onClose: n } = e,
        t = i.useCallback(() => {
            s.A.openPrivateChannel({ recipientIds: l }), n?.(), (0, r.closeAllModals)();
        }, [l, n]);
    return { action: d.pt.SEND_MESSAGE, icon: a.o, onClick: t, text: u.intl.string(u.t.zROXEV) };
}
function g(e) {
    let { userId: l, onClose: n, variant: i = "primary", ...r } = e,
        a = c({ userId: l, onClose: n });
    return (0, t.jsx)(o.FD, { variant: i, ...a, ...r });
}
function f(e) {
    let { userId: l, onClose: n, variant: i = "primary", ...r } = e,
        { text: a, ...s } = c({ userId: l, onClose: n });
    return (0, t.jsx)(o.q3, { tooltipText: a, "aria-label": a, variant: i, ...s, ...r });
}
