var a = i(477900);
i(582128);
var e = i(503698),
    s = i.n(e),
    r = i(935462),
    l = i(123292),
    d = i(825484),
    c = i(792996),
    o = i(679017);
i.d(
    t,
    {},
    {
        A: function (n) {
            let {
                    parentComponent: t,
                    transitionState: i,
                    onBackToStart: e,
                    onCancel: p,
                    footerRightSlot: u,
                    hideFooter: h = !1,
                    children: g,
                } = n,
                j =
                    u ??
                    (null != p
                        ? (0, a.jsx)(l.Q, { variant: "secondary", text: c.intl.string(c.t["4gTnU0"]), onClick: p })
                        : null),
                x = !h,
                m = x || null != j;
            return (0, a.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: i,
                className: s()(o.zr, o.rh),
                parentComponent: t,
                size: r.rI.MEDIUM,
                children: [
                    (0, a.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: s()(o.Qs, o.WM),
                        scrollbarType: "none",
                        children: g,
                    }),
                    m
                        ? (0, a.jsx)(r.jl, {
                              "data-migration-pending": !0,
                              children: (0, a.jsxs)(d.e, {
                                  justify: x ? "space-between" : "end",
                                  fullWidthContainer: !0,
                                  children: [
                                      x
                                          ? (0, a.jsx)(l.Q, {
                                                variant: "secondary",
                                                text: c.intl.string(c.t.fjKFae),
                                                onClick: e,
                                            })
                                          : null,
                                      j,
                                  ],
                              }),
                          })
                        : null,
                ],
            });
        },
    },
);
