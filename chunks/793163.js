e.d(t, { A: () => p });
var i = e(477900);
e(582128);
var a = e(503698),
    s = e.n(a),
    r = e(935462),
    l = e(123292),
    d = e(825484),
    c = e(375708),
    o = e(486128);
let p = function (n) {
    let {
            parentComponent: t,
            transitionState: e,
            onBackToStart: a,
            onCancel: p,
            footerRightSlot: u,
            hideFooter: h = !1,
            children: g,
        } = n,
        j =
            u ??
            (null != p
                ? (0, i.jsx)(l.Q, { variant: "secondary", text: c.intl.string(c.t["4gTnU0"]), onClick: p })
                : null),
        x = !h,
        m = x || null != j;
    return (0, i.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: e,
        className: s()(o.zr, o.rh),
        parentComponent: t,
        size: r.rI.MEDIUM,
        children: [
            (0, i.jsx)(r.$m, {
                "data-migration-pending": !0,
                className: s()(o.Qs, o.WM),
                scrollbarType: "none",
                children: g,
            }),
            m
                ? (0, i.jsx)(r.jl, {
                      "data-migration-pending": !0,
                      children: (0, i.jsxs)(d.e, {
                          justify: x ? "space-between" : "end",
                          fullWidthContainer: !0,
                          children: [
                              x
                                  ? (0, i.jsx)(l.Q, {
                                        variant: "secondary",
                                        text: c.intl.string(c.t.fjKFae),
                                        onClick: a,
                                    })
                                  : null,
                              j,
                          ],
                      }),
                  })
                : null,
        ],
    });
};
