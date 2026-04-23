i.d(t, { default: () => h });
var n = i(627968);
i(64700);
var a = i(935462),
    l = i(289873),
    s = i(780964),
    o = i(858897),
    r = i(393033),
    d = i(257110),
    c = i(706069),
    m = i(109659);
let h = (e) => {
    let { transitionState: t, onClose: i, classificationId: h, source: u } = e,
        p = (0, d.A)(),
        A = (0, r.W$)(),
        E = () => {
            i(), A || (0, o.openUserSettings)(s.X.ACCOUNT_STANDING_CATEGORY);
        };
    return (0, n.jsxs)(a.EO, {
        className: m.CR,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)("div", {
                className: m.Hc,
                children: (0, n.jsx)(a.s_, { "data-migration-pending": !0, className: m.g8, onClick: i }),
            }),
            (0, n.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: m.jE,
                children: p
                    ? (0, n.jsx)(l.y, {})
                    : (0, n.jsx)(c.A, { classificationId: h, source: u, onError: E, onClose: E }),
            }),
        ],
    });
};
