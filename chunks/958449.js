t.d(n, { h: () => c });
var l = t(477900),
    i = t(582128),
    s = t(416696),
    a = t(797394),
    r = t(204651),
    o = t(375708);
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
            buttonRef: g,
            ...E
        } = e,
        f = m ? r.l : r.A;
    t = A
        ? o.intl.string(o.t.GFr0GR)
        : u
          ? d
              ? o.intl.string(o.t.S5anIc)
              : o.intl.string(o.t.q3O3J8)
          : c
            ? o.intl.string(o.t.fjBNo1)
            : o.intl.string(o.t.uQn9B8);
    let { Component: x, events: v, play: I } = (0, s.c)(u ? "disable" : "enable"),
        T = A ? a.i : x;
    return (
        i.useEffect(() => () => I(), [u, I]),
        (0, l.jsx)(f, {
            buttonRef: g,
            isTrayButton: !0,
            label: t,
            disabled: !c,
            iconComponent: T,
            isActive: u,
            color: (p ? (n = "premiumGradient") : u && (n = "green"), n),
            onMouseEnter: (e) => {
                (h?.(e), v.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (C?.(e), v.onMouseLeave());
            },
            ...E,
        })
    );
}
