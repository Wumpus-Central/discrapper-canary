"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(58736),
    o = n(857071),
    c = n(203982),
    d = n(607508),
    u = n(914703),
    h = n(37411),
    A = n(652215),
    p = n(985018);
function g(e) {
    let { channel: t } = e,
        n = (0, d.X)(t),
        [g, m] = s.useState(!1),
        _ = s.useRef(null),
        f = (0, l.bG)([o.A], () => null != t.guild_id && o.A.isLurking(t.guild_id));
    if (
        (s.useEffect(() => {
            let e = () => m(!0);
            return (
                c._.subscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    c._.unsubscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        f)
    )
        return null;
    let x = p.intl.string(p.t.h850Ss);
    return (0, i.jsx)(r.YNO, {
        targetElementRef: _,
        shouldShow: g,
        animation: r.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => m(!1),
        renderPopout: (e) =>
            (0, i.jsx)(u.A, { ...e, channel: t, navId: "thread-context", label: p.intl.string(p.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsx)(a.Ay.Icon, {
                ...e,
                ref: _,
                onClick: () => m((e) => !e),
                tooltip: s ? null : x,
                icon: n === h.CP.NO_MESSAGES ? r.a_I : r.XFE,
                "aria-label": x,
                selected: s,
            });
        },
    });
}
