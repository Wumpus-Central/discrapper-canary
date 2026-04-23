t.d(n, { h: () => o });
var l = t(627968),
    i = t(64700),
    a = t(416696),
    s = t(709562),
    r = t(985018);
function o(e) {
    let n,
        t,
        {
            hasPermission: o,
            streamActive: c,
            isSelfStream: u,
            centerButton: d,
            onMouseEnter: A,
            onMouseLeave: h,
            renderNUXHighlight: p,
            buttonRef: m,
            ...g
        } = e,
        f = d ? s.l : s.A;
    t = c
        ? u
            ? r.intl.string(r.t.S5anIc)
            : r.intl.string(r.t.q3O3J8)
        : o
          ? r.intl.string(r.t.fjBNo1)
          : r.intl.string(r.t.uQn9B8);
    let { Component: C, events: E, play: v } = (0, a.c)(c ? "disable" : "enable");
    return (
        i.useEffect(() => () => v(), [c, v]),
        (0, l.jsx)(f, {
            buttonRef: m,
            isTrayButton: !0,
            label: t,
            disabled: !o,
            iconComponent: C,
            isActive: c,
            color: (p ? (n = "premiumGradient") : c && (n = "green"), n),
            onMouseEnter: (e) => {
                A?.(e), E.onMouseEnter();
            },
            onMouseLeave: (e) => {
                h?.(e), E.onMouseLeave();
            },
            ...g,
        })
    );
}
