t.d(n, { e: () => g, l: () => m });
var l = t(477900),
    i = t(582128),
    r = t(192308),
    s = t(534890),
    a = t(308528),
    o = t(993401),
    d = t(518477),
    u = t(375708);
function c(e) {
    let { userId: n, onClose: t } = e,
        l = i.useCallback(() => {
            (a.A.openPrivateChannel({ recipientIds: n }), t?.(), (0, r.closeAllModals)());
        }, [n, t]);
    return { action: d.pt.SEND_MESSAGE, icon: s.ChatIcon, onClick: l, text: u.intl.string(u.t.zROXEV) };
}
function g(e) {
    let { userId: n, onClose: t, variant: i = "primary", ...r } = e,
        s = c({ userId: n, onClose: t });
    return (0, l.jsx)(o.FD, { variant: i, ...s, ...r });
}
function m(e) {
    let { userId: n, onClose: t, variant: i = "primary", ...r } = e,
        { text: s, ...a } = c({ userId: n, onClose: t });
    return (0, l.jsx)(o.q3, { tooltipText: s, "aria-label": s, variant: i, ...a, ...r });
}
