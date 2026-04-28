n.d(t, { h: () => o });
var l = n(627968),
    i = n(64700),
    s = n(416696),
    a = n(709562),
    r = n(985018);
function o(e) {
    let t,
        n,
        {
            hasPermission: o,
            streamActive: c,
            isSelfStream: u,
            centerButton: d,
            onMouseEnter: A,
            onMouseLeave: E,
            renderNUXHighlight: m,
            buttonRef: h,
            ...C
        } = e,
        g = d ? a.l : a.A;
    n = c
        ? u
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: I, events: p, play: x } = (0, s.c)(c ? "disable" : "enable");
    return (
        i.useEffect(() => () => x(), [c, x]),
        (0, l.jsx)(g, {
            buttonRef: h,
            isTrayButton: !0,
            label: n,
            disabled: !o,
            iconComponent: I,
            isActive: c,
            color: (m ? (t = "premiumGradient") : c && (t = "green"), t),
            onMouseEnter: (e) => {
                A?.(e), p.onMouseEnter();
            },
            onMouseLeave: (e) => {
                E?.(e), p.onMouseLeave();
            },
            ...C,
        })
    );
}
