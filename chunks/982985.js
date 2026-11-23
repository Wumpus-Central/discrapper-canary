var i = n(477900),
    l = n(582128),
    r = n(192308),
    s = n(534890),
    a = n(308528),
    o = n(993401),
    d = n(518477),
    u = n(792996);
function c(e) {
    let { userId: t, onClose: n } = e,
        i = l.useCallback(() => {
            (a.A.openPrivateChannel({ recipientIds: t }), n?.(), (0, r.s7)());
        }, [t, n]);
    return { action: d.pt.SEND_MESSAGE, icon: s.ChatIcon, onClick: i, text: u.intl.string(u.t.zROXEV) };
}
n.d(
    t,
    {},
    {
        e: function (e) {
            let { userId: t, onClose: n, variant: l = "primary", ...r } = e,
                s = c({ userId: t, onClose: n });
            return (0, i.jsx)(o.FD, { variant: l, ...s, ...r });
        },
        l: function (e) {
            let { userId: t, onClose: n, variant: l = "primary", ...r } = e,
                { text: s, ...a } = c({ userId: t, onClose: n });
            return (0, i.jsx)(o.q3, { tooltipText: s, "aria-label": s, variant: l, ...a, ...r });
        },
    },
);
