n.d(t, { h: () => o });
var i = n(627968),
    l = n(64700),
    s = n(416696),
    a = n(709562),
    r = n(985018);
function o(e) {
    let t,
        n,
        {
            hasPermission: o,
            streamActive: d,
            isSelfStream: c,
            centerButton: u,
            onMouseEnter: h,
            onMouseLeave: A,
            renderNUXHighlight: _,
            buttonRef: m,
            ...p
        } = e,
        g = u ? a.l : a.A;
    n = d
        ? c
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: f, events: E, play: x } = (0, s.c)(d ? "disable" : "enable");
    return (
        l.useEffect(() => () => x(), [d, x]),
        (0, i.jsx)(g, {
            buttonRef: m,
            isTrayButton: !0,
            label: n,
            disabled: !o,
            iconComponent: f,
            isActive: d,
            color: (_ ? (t = "premiumGradient") : d && (t = "green"), t),
            onMouseEnter: (e) => {
                h?.(e), E.onMouseEnter();
            },
            onMouseLeave: (e) => {
                A?.(e), E.onMouseLeave();
            },
            ...p,
        })
    );
}
