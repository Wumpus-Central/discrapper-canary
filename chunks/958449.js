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
            streamActive: c,
            isSelfStream: d,
            centerButton: u,
            onMouseEnter: h,
            onMouseLeave: A,
            renderNUXHighlight: _,
            buttonRef: m,
            ...g
        } = e,
        p = u ? a.l : a.A;
    n = c
        ? d
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: f, events: x, play: E } = (0, s.c)(c ? "disable" : "enable");
    return (
        l.useEffect(() => () => E(), [c, E]),
        (0, i.jsx)(p, {
            buttonRef: m,
            isTrayButton: !0,
            label: n,
            disabled: !o,
            iconComponent: f,
            isActive: c,
            color: (_ ? (t = "premiumGradient") : c && (t = "green"), t),
            onMouseEnter: (e) => {
                h?.(e), x.onMouseEnter();
            },
            onMouseLeave: (e) => {
                A?.(e), x.onMouseLeave();
            },
            ...g,
        })
    );
}
