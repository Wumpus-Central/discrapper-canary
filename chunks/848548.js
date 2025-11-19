e.d(n, { default: () => d });
var i = e(54381);
e(473749);
var r = e(481060),
    a = e(369930),
    s = e(388032),
    l = e(389094);
function d(t) {
    let { transitionState: n, onClose: e } = t;
    return (0, i.jsxs)(r.Y0X, {
        transitionState: n,
        parentComponent: "UrgentMessageModal",
        children: [
            (0, i.jsx)(r.xBx, {
                separator: !1,
                children: (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: s.intl.string(s.t.bAhz9l),
                }),
            }),
            (0, i.jsxs)(r.hzk, {
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: s.intl.string(s.t["7KjxW3"]),
                    }),
                    (0, i.jsx)("div", { className: l.art }),
                ],
            }),
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsx)(r.Button, {
                    variant: "primary",
                    text: s.intl.string(s.t.BddRzS),
                    type: "submit",
                    onClick: () => {
                        (0, a.Z)(), e();
                    },
                }),
            }),
        ],
    });
}
