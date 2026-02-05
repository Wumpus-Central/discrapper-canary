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
            renderNUXHighlight: g,
            buttonRef: m,
            ...p
        } = e,
        _ = u ? a.l : a.A;
    n = d
        ? c
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: x, events: f, play: E } = (0, s.c)(d ? "disable" : "enable");
    return (
        l.useEffect(() => () => E(), [d, E]),
        (0, i.jsx)(_, {
            buttonRef: m,
            isTrayButton: !0,
            label: n,
            disabled: !o,
            iconComponent: x,
            isActive: d,
            color: (g ? (t = "premiumGradient") : d && (t = "green"), t),
            onMouseEnter: (e) => {
                h?.(e), f.onMouseEnter();
            },
            onMouseLeave: (e) => {
                A?.(e), f.onMouseLeave();
            },
            ...p,
        })
    );
}
