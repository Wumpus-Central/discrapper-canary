t.d(n, { h: () => o });
var l = t(477900),
    i = t(582128),
    s = t(416696),
    a = t(204651),
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
            ...E
        } = e,
        p = d ? a.l : a.A;
    t = c
        ? u
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: g, events: f, play: x } = (0, s.c)(c ? "disable" : "enable");
    return (
        i.useEffect(() => () => x(), [c, x]),
        (0, l.jsx)(p, {
            buttonRef: C,
            isTrayButton: !0,
            label: t,
            disabled: !o,
            iconComponent: g,
            isActive: c,
            color: (h ? (n = "premiumGradient") : c && (n = "green"), n),
            onMouseEnter: (e) => {
                A?.(e), f.onMouseEnter();
            },
            onMouseLeave: (e) => {
                m?.(e), f.onMouseLeave();
            },
            ...E,
        })
    );
}
