var l = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    a = n(855986),
    i = n(653887),
    o = n(775602),
    c = n(607470),
    u = n(531685),
    d = n(296344);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { bannerStatic: t, bannerAnimated: n, bannerRive: r, isResponsive: m = !1, eventTargetRef: g } = e,
                h = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
                p = (0, a.bG)([u.A], () => u.A.isFocused()),
                x = null != n && !h && p;
            return null != r
                ? (0, l.jsx)(i._, { src: r, fit: "fit-width", eventTargetRef: g })
                : x
                  ? (0, l.jsx)(c.A, { className: s()({ [d.no]: m }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
                  : (0, l.jsx)("div", {
                        className: s()({ [d.no]: m }, d.BW, d._e),
                        style: { backgroundImage: `url(${t})` },
                    });
        },
    },
);
