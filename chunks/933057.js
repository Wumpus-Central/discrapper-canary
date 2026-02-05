n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(58736),
    o = n(857071),
    d = n(203982),
    c = n(607508),
    u = n(914703),
    h = n(37411),
    A = n(652215),
    g = n(985018);
function m(e) {
    let { channel: t } = e,
        n = (0, c.X)(t),
        [m, p] = l.useState(!1),
        _ = l.useRef(null),
        x = (0, s.bG)([o.A], () => null != t.guild_id && o.A.isLurking(t.guild_id));
    if (
        (l.useEffect(() => {
            let e = () => p(!0);
            return (
                d._.subscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    d._.unsubscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        x)
    )
        return null;
    let f = g.intl.string(g.t.h850Ss);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: _,
        shouldShow: m,
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => p(!1),
        renderPopout: (e) =>
            (0, i.jsx)(u.A, { ...e, channel: t, navId: "thread-context", label: g.intl.string(g.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(r.Ay.Icon, {
                ...e,
                ref: _,
                onClick: () => p((e) => !e),
                tooltip: l ? null : f,
                icon: n === h.CP.NO_MESSAGES ? a.a_I : a.XFE,
                "aria-label": f,
                selected: l,
            });
        },
    });
}
