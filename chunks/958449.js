t.d(n, { h: () => c });
var i = t(477900),
    l = t(582128),
    a = t(416696),
    s = t(797394),
    o = t(204651),
    r = t(375708);
function c(e) {
    let n,
        t,
        {
            hasPermission: c,
            streamActive: u,
            isSelfStream: d,
            videoBlocked: A = !1,
            centerButton: m,
            onMouseEnter: h,
            onMouseLeave: C,
            renderNUXHighlight: p,
            buttonRef: x,
            ...g
        } = e,
        f = m ? o.l : o.A;
    t = A
        ? r.intl.string(r.t.GFr0GR)
        : u
          ? d
              ? r.intl.string(r.t.S5anIc)
              : r.intl.string(r.t.q3O3J8)
          : c
            ? r.intl.string(r.t.fjBNo1)
            : r.intl.string(r.t.uQn9B8);
    let { Component: E, events: I, play: v } = (0, a.c)(u ? "disable" : "enable"),
        T = A ? s.i : E;
    return (
        l.useEffect(() => () => v(), [u, v]),
        (0, i.jsx)(f, {
            buttonRef: x,
            isTrayButton: !0,
            label: t,
            disabled: !c,
            iconComponent: T,
            isActive: u,
            color: (p ? (n = "premiumGradient") : u && (n = "green"), n),
            onMouseEnter: (e) => {
                (h?.(e), I.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (C?.(e), I.onMouseLeave());
            },
            ...g,
        })
    );
}
