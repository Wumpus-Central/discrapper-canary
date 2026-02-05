I.d(_, { default: () => t });
var A = I(627968);
I(64700);
var S = I(397927),
    T = I(780964),
    C = I(840065),
    O = I(257110),
    N = I(706069),
    R = I(652215),
    e = I(531525),
    P = I(524988);
let t = (E) => {
    let { transitionState: _, onClose: I, classificationId: t, source: L } = E,
        D = (0, O.A)(),
        i = () => {
            I(),
                (0, C.openUserSettings)(T.X.ACCOUNT_PANEL, {
                    section: R.nc_.ACCOUNT,
                    subsection: e.H.PRIVACY_AND_SAFETY_STANDING,
                });
        };
    return (0, A.jsxs)(S.EOs, {
        className: P.CR,
        transitionState: _,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, A.jsx)("div", {
                className: P.Hc,
                children: (0, A.jsx)(S.s_y, { "data-migration-pending": !0, className: P.g8, onClick: I }),
            }),
            (0, A.jsx)(S.$mQ, {
                "data-migration-pending": !0,
                className: P.jE,
                children: D
                    ? (0, A.jsx)(S.y$y, {})
                    : (0, A.jsx)(N.A, { classificationId: t, source: L, onError: i, onClose: i }),
            }),
        ],
    });
};
