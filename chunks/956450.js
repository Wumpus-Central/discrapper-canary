i.d(t, { default: () => m });
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(780964),
    s = i(840065),
    o = i(393033),
    r = i(257110),
    d = i(706069),
    c = i(524988);
let m = (e) => {
    let { transitionState: t, onClose: i, classificationId: m, source: h } = e,
        u = (0, r.A)(),
        p = (0, o.W$)(),
        A = () => {
            i(), p || (0, s.openUserSettings)(l.X.ACCOUNT_STANDING_CATEGORY);
        };
    return (0, n.jsxs)(a.EOs, {
        className: c.CR,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)("div", {
                className: c.Hc,
                children: (0, n.jsx)(a.s_y, { "data-migration-pending": !0, className: c.g8, onClick: i }),
            }),
            (0, n.jsx)(a.$mQ, {
                "data-migration-pending": !0,
                className: c.jE,
                children: u
                    ? (0, n.jsx)(a.y$y, {})
                    : (0, n.jsx)(d.A, { classificationId: m, source: h, onError: A, onClose: A }),
            }),
        ],
    });
};
