var i = a(477900);
a(582128);
var e = a(503698),
    l = a.n(e),
    r = a(935462),
    s = a(123292),
    d = a(825484),
    c = a(664188),
    o = a(792996),
    p = a(679017);
a.d(
    t,
    {},
    {
        A: function (n) {
            let {
                    parentComponent: t,
                    transitionState: a,
                    onBackToStart: e,
                    onCancel: u,
                    footerRightSlot: h,
                    hideFooter: g = !1,
                    children: j,
                } = n,
                m =
                    h ??
                    (null != u
                        ? (0, i.jsx)(s.Q, { variant: "secondary", text: o.intl.string(o.t["4gTnU0"]), onClick: u })
                        : null),
                x = !g,
                k = x || null != m;
            return (0, i.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                className: l()(p.zr, p.rh),
                parentComponent: t,
                size: r.rI.MEDIUM,
                "aria-label": o.intl.string(c.default.eKo6mw),
                children: [
                    (0, i.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: l()(p.Qs, p.WM),
                        scrollbarType: "none",
                        children: j,
                    }),
                    k
                        ? (0, i.jsx)(r.jl, {
                              "data-migration-pending": !0,
                              children: (0, i.jsxs)(d.e, {
                                  justify: x ? "space-between" : "end",
                                  fullWidthContainer: !0,
                                  children: [
                                      x
                                          ? (0, i.jsx)(s.Q, {
                                                variant: "secondary",
                                                text: o.intl.string(o.t.fjKFae),
                                                onClick: e,
                                            })
                                          : null,
                                      m,
                                  ],
                              }),
                          })
                        : null,
                ],
            });
        },
    },
);
