"use strict";
n.d(t, { h: () => o });
var i = n(627968),
    s = n(64700),
    l = n(416696),
    r = n(709562),
    a = n(985018);
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
            renderNUXHighlight: p,
            buttonRef: g,
            ...m
        } = e,
        _ = u ? r.l : r.A;
    n = c
        ? d
            ? a.intl.string(a.t.S5anIc)
            : a.intl.string(a.t.q3O3J8)
        : o
          ? a.intl.string(a.t.fjBNo1)
          : a.intl.string(a.t.uQn9B8);
    let { Component: f, events: x, play: C } = (0, l.c)(c ? "disable" : "enable");
    return (
        s.useEffect(() => () => C(), [c, C]),
        (0, i.jsx)(_, {
            buttonRef: g,
            isTrayButton: !0,
            label: n,
            disabled: !o,
            iconComponent: f,
            isActive: c,
            color: (p ? (t = "premiumGradient") : c && (t = "green"), t),
            onMouseEnter: (e) => {
                h?.(e), x.onMouseEnter();
            },
            onMouseLeave: (e) => {
                A?.(e), x.onMouseLeave();
            },
            ...m,
        })
    );
}
