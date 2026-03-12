E.d(A, { default: () => a });
var e = E(627968);
E(64700);
var I = E(397927),
    T = E(780964),
    C = E(840065),
    t = E(393033),
    S = E(257110),
    i = E(706069),
    n = E(652215),
    N = E(531525),
    R = E(265626);
let a = (_) => {
    let { transitionState: A, onClose: E, classificationId: a, source: l } = _,
        O = (0, S.A)(),
        s = (0, t.W$)(),
        o = () => {
            E(),
                s ||
                    (0, C.openUserSettings)(T.X.ACCOUNT_PANEL, {
                        section: n.nc_.ACCOUNT,
                        subsection: N.H.PRIVACY_AND_SAFETY_STANDING,
                    });
        };
    return (0, e.jsxs)(I.EOs, {
        className: R.CR,
        transitionState: A,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, e.jsx)("div", {
                className: R.Hc,
                children: (0, e.jsx)(I.s_y, { "data-migration-pending": !0, className: R.g8, onClick: E }),
            }),
            (0, e.jsx)(I.$mQ, {
                "data-migration-pending": !0,
                className: R.jE,
                children: O
                    ? (0, e.jsx)(I.y$y, {})
                    : (0, e.jsx)(i.A, { classificationId: a, source: l, onError: o, onClose: o }),
            }),
        ],
    });
};
