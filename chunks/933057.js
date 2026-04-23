n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(265872),
    r = n(780338),
    o = n(782603),
    d = n(58736),
    c = n(857071),
    u = n(203982),
    h = n(607508),
    A = n(914703),
    _ = n(37411),
    m = n(652215),
    g = n(985018);
function p(e) {
    let { channel: t } = e,
        n = (0, h.X)(t),
        [p, f] = l.useState(!1),
        E = l.useRef(null),
        x = (0, s.bG)([c.A], () => null != t.guild_id && c.A.isLurking(t.guild_id));
    if (
        (l.useEffect(() => {
            let e = () => f(!0);
            return (
                u._.subscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    u._.unsubscribe(m.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        x)
    )
        return null;
    let I = g.intl.string(g.t.h850Ss);
    return (0, i.jsx)(a.Y, {
        targetElementRef: E,
        shouldShow: p,
        animation: a.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => f(!1),
        renderPopout: (e) =>
            (0, i.jsx)(A.A, { ...e, channel: t, navId: "thread-context", label: g.intl.string(g.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(d.Ay.Icon, {
                ...e,
                ref: E,
                onClick: () => f((e) => !e),
                tooltip: l ? null : I,
                icon: n === _.CP.NO_MESSAGES ? r.a : o.X,
                "aria-label": I,
                selected: l,
            });
        },
    });
}
