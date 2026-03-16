i.d(t, { default: () => h });
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(780964),
    s = i(840065),
    o = i(393033),
    r = i(257110),
    d = i(706069),
    c = i(652215),
    m = i(524988);
let h = (e) => {
    let { transitionState: t, onClose: i, classificationId: h, source: u } = e,
        p = (0, r.A)(),
        A = (0, o.W$)(),
        _ = () => {
            i(), A || (0, s.openUserSettings)(l.X.ACCOUNT_STANDING_CATEGORY, { section: c.nc_.ACCOUNT });
        };
    return (0, n.jsxs)(a.EOs, {
        className: m.CR,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)("div", {
                className: m.Hc,
                children: (0, n.jsx)(a.s_y, { "data-migration-pending": !0, className: m.g8, onClick: i }),
            }),
            (0, n.jsx)(a.$mQ, {
                "data-migration-pending": !0,
                className: m.jE,
                children: p
                    ? (0, n.jsx)(a.y$y, {})
                    : (0, n.jsx)(d.A, { classificationId: h, source: u, onError: _, onClose: _ }),
            }),
        ],
    });
};
