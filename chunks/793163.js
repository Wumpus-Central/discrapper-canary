i.d(t, { A: () => p });
var a = i(627968);
i(64700);
var e = i(503698),
    s = i.n(e),
    r = i(123292),
    l = i(935462),
    c = i(825484),
    d = i(375708),
    o = i(788920);
let p = function (n) {
    let { parentComponent: t, transitionState: i, onBackToStart: e, onCancel: p, footerRightSlot: h, children: u } = n,
        g =
            h ??
            (null != p
                ? (0, a.jsx)(r.Q, { variant: "secondary", text: d.intl.string(d.t["4gTnU0"]), onClick: p })
                : null);
    return (0, a.jsxs)(l.EO, {
        "data-migration-pending": !0,
        transitionState: i,
        className: s()(o.zr, o.rh),
        parentComponent: t,
        size: l.rI.MEDIUM,
        children: [
            (0, a.jsx)(l.$m, {
                "data-migration-pending": !0,
                className: s()(o.Qs, o.WM),
                scrollbarType: "none",
                children: u,
            }),
            (0, a.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, a.jsxs)(c.e, {
                    justify: "space-between",
                    fullWidthContainer: !0,
                    children: [
                        (0, a.jsx)(r.Q, { variant: "secondary", text: d.intl.string(d.t.fjKFae), onClick: e }),
                        g,
                    ],
                }),
            }),
        ],
    });
};
