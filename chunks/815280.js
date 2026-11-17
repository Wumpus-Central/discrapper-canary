var l = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    a = n(855986),
    i = n(653887),
    o = n(775602),
    u = n(607470),
    c = n(531685),
    d = n(296344);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { bannerStatic: t, bannerAnimated: n, bannerRive: r, isResponsive: m = !1, eventTargetRef: h } = e,
                g = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
                E = (0, a.bG)([c.A], () => c.A.isFocused()),
                p = null != n && !g && E;
            return null != r
                ? (0, l.jsx)(i._, { src: r, fit: "fit-width", eventTargetRef: h })
                : p
                  ? (0, l.jsx)(u.A, { className: s()({ [d.no]: m }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
                  : (0, l.jsx)("div", {
                        className: s()({ [d.no]: m }, d.BW, d._e),
                        style: { backgroundImage: `url(${t})` },
                    });
        },
    },
);
