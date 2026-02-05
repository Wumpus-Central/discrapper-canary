n.d(t, { e: () => u, l: () => A });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(308528),
    r = n(993401),
    d = n(518477),
    o = n(985018);
function c(e) {
    let { userId: t, onClose: n } = e,
        i = s.useCallback(() => {
            a.A.openPrivateChannel({ recipientIds: t }), n?.(), (0, l.s7G)();
        }, [t, n]);
    return { action: d.pt.SEND_MESSAGE, icon: l.oyn, onClick: i, text: o.intl.string(o.t.zROXEV) };
}
function u(e) {
    let { userId: t, onClose: n, variant: s = "primary", ...l } = e,
        a = c({ userId: t, onClose: n });
    return (0, i.jsx)(r.FD, { variant: s, ...a, ...l });
}
function A(e) {
    let { userId: t, onClose: n, variant: s = "primary", ...l } = e,
        { text: a, ...d } = c({ userId: t, onClose: n });
    return (0, i.jsx)(r.q3, { tooltipText: a, "aria-label": a, variant: s, ...d, ...l });
}
