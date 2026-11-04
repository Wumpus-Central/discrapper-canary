var i = t(477900),
    l = t(582128),
    s = t(416696),
    a = t(797394),
    r = t(693409),
    o = t(792996);
t.d(
    n,
    {},
    {
        h: function (e) {
            let n,
                t,
                {
                    hasPermission: c,
                    streamActive: d,
                    isSelfStream: u,
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
                : d
                  ? u
                      ? o.intl.string(o.t.S5anIc)
                      : o.intl.string(o.t.q3O3J8)
                  : c
                    ? o.intl.string(o.t.fjBNo1)
                    : o.intl.string(o.t.uQn9B8);
            let { Component: E, events: j, play: I } = (0, s.c)(d ? "disable" : "enable"),
                v = A ? a.i : E;
            return (
                l.useEffect(() => () => I(), [d, I]),
                (0, i.jsx)(p, {
                    buttonRef: C,
                    isTrayButton: !0,
                    label: t,
                    disabled: !c,
                    iconComponent: v,
                    isActive: d,
                    color: (x ? (n = "premiumGradient") : d && (n = "green"), n),
                    onMouseEnter: (e) => {
                        (m?.(e), j.onMouseEnter());
                    },
                    onMouseLeave: (e) => {
                        (g?.(e), j.onMouseLeave());
                    },
                    ...f,
                })
            );
        },
    },
);
