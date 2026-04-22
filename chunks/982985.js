l.d(n, { e: () => g, l: () => A });
var t = l(627968),
    i = l(64700),
    r = l(192308),
    s = l(534890),
    a = l(308528),
    o = l(993401),
    d = l(518477),
    c = l(985018);
function u(e) {
    let { userId: n, onClose: l } = e,
        t = i.useCallback(() => {
            a.A.openPrivateChannel({ recipientIds: n }), l?.(), (0, r.closeAllModals)();
        }, [n, l]);
    return { action: d.pt.SEND_MESSAGE, icon: s.o, onClick: t, text: c.intl.string(c.t.zROXEV) };
}
function g(e) {
    let { userId: n, onClose: l, variant: i = "primary", ...r } = e,
        s = u({ userId: n, onClose: l });
    return (0, t.jsx)(o.FD, { variant: i, ...s, ...r });
}
function A(e) {
    let { userId: n, onClose: l, variant: i = "primary", ...r } = e,
        { text: s, ...a } = u({ userId: n, onClose: l });
    return (0, t.jsx)(o.q3, { tooltipText: s, "aria-label": s, variant: i, ...a, ...r });
}
