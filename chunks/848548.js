e.d(n, { default: () => d });
var r = e(951288);
e(647438);
var i = e(481060),
    a = e(369930),
    s = e(388032),
    l = e(389094);
function d(t) {
    let { transitionState: n, onClose: e } = t;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: n,
        parentComponent: "UrgentMessageModal",
        children: [
            (0, r.jsx)(i.xBx, {
                separator: !1,
                children: (0, r.jsx)(i.X6q, {
                    variant: "heading-lg/semibold",
                    children: s.intl.string(s.t.bAhz9v),
                }),
            }),
            (0, r.jsxs)(i.hzk, {
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: s.intl.string(s.t["7KjxW1"]),
                    }),
                    (0, r.jsx)("div", { className: l.art }),
                ],
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsx)(i.zxk, {
                    variant: "primary",
                    text: s.intl.string(s.t.BddRzc),
                    type: "submit",
                    onClick: () => {
                        (0, a.Z)(), e();
                    },
                }),
            }),
        ],
    });
}
