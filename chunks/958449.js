t.d(n, { h: () => c });
var i = t(477900),
    l = t(582128),
    s = t(416696),
    a = t(797394),
    r = t(204651),
    o = t(660183);
function c(e) {
    let n,
        t,
        {
            hasPermission: c,
            streamActive: u,
            isSelfStream: d,
            videoBlocked: A = !1,
            centerButton: h,
            onMouseEnter: m,
            onMouseLeave: g,
            renderNUXHighlight: x,
            buttonRef: C,
            ...f
        } = e,
        p = h ? r.l : r.A;
    t = A
        ? o.intl.string(o.t.GFr0GR)
        : u
          ? d
              ? o.intl.string(o.t.S5anIc)
              : o.intl.string(o.t.q3O3J8)
          : c
            ? o.intl.string(o.t.fjBNo1)
            : o.intl.string(o.t.uQn9B8);
    let { Component: E, events: j, play: v } = (0, s.c)(u ? "disable" : "enable"),
        I = A ? a.i : E;
    return (
        l.useEffect(() => () => v(), [u, v]),
        (0, i.jsx)(p, {
            buttonRef: C,
            isTrayButton: !0,
            label: t,
            disabled: !c,
            iconComponent: I,
            isActive: u,
            color: (x ? (n = "premiumGradient") : u && (n = "green"), n),
            onMouseEnter: (e) => {
                (m?.(e), j.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (g?.(e), j.onMouseLeave());
            },
            ...f,
        })
    );
}
