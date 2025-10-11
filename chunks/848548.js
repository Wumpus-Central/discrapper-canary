e.d(n, { default: () => l });
var i = e(951288);
e(647438);
var r = e(481060),
    a = e(369930),
    s = e(388032),
    d = e(389094);
function l(t) {
    let { transitionState: n, onClose: e } = t;
    return (0, i.jsxs)(r.Y0X, {
        transitionState: n,
        parentComponent: "UrgentMessageModal",
        children: [
            (0, i.jsx)(r.xBx, {
                separator: !1,
                children: (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: s.intl.string(s.t.bAhz9v),
                }),
            }),
            (0, i.jsxs)(r.hzk, {
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: s.intl.string(s.t["7KjxW1"]),
                    }),
                    (0, i.jsx)("div", { className: d.art }),
                ],
            }),
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsx)(r.Button, {
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
