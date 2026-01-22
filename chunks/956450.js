n.d(t, {
    default: () => p,
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(780964),
    r = n(840065),
    o = n(257110),
    s = n(706069),
    c = n(652215),
    d = n(531525),
    u = n(524988);
let p = (e) => {
    let { transitionState: t, onClose: n, classificationId: p, source: m } = e,
        f = (0, o.A)(),
        h = () => {
            n(),
                (0, r.openUserSettings)(l.X.ACCOUNT_PANEL, {
                    section: c.nc_.ACCOUNT,
                    subsection: d.H.PRIVACY_AND_SAFETY_STANDING,
                });
        };
    return (0, i.jsxs)(a.EOs, {
        className: u.CR,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)("div", {
                className: u.Hc,
                children: (0, i.jsx)(a.s_y, {
                    "data-migration-pending": !0,
                    className: u.g8,
                    onClick: n,
                }),
            }),
            (0, i.jsx)(a.$mQ, {
                "data-migration-pending": !0,
                className: u.jE,
                children: f
                    ? (0, i.jsx)(a.y$y, {})
                    : (0, i.jsx)(s.A, {
                          classificationId: p,
                          source: m,
                          onError: h,
                          onClose: h,
                      }),
            }),
        ],
    });
};
