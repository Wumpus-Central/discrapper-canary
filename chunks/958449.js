t.d(n, { h: () => o });
var l = t(477900),
    i = t(582128),
    a = t(416696),
    s = t(204651),
    r = t(375708);
function o(e) {
    let n,
        t,
        {
            hasPermission: o,
            streamActive: c,
            isSelfStream: u,
            centerButton: d,
            onMouseEnter: A,
            onMouseLeave: m,
            renderNUXHighlight: h,
            buttonRef: C,
            ...f
        } = e,
        E = d ? s.l : s.A;
    t = c
        ? u
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: p, events: g, play: x } = (0, a.c)(c ? "disable" : "enable");
    return (
        i.useEffect(() => () => x(), [c, x]),
        (0, l.jsx)(E, {
            buttonRef: C,
            isTrayButton: !0,
            label: t,
            disabled: !o,
            iconComponent: p,
            isActive: c,
            color: (h ? (n = "premiumGradient") : c && (n = "green"), n),
            onMouseEnter: (e) => {
                A?.(e), g.onMouseEnter();
            },
            onMouseLeave: (e) => {
                m?.(e), g.onMouseLeave();
            },
            ...f,
        })
    );
}
