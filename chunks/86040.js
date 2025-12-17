n.d(t, {
    C: () => c,
    N: () => u,
});
var r = n(54381);
n(473749);
var i = n(159691),
    a = n(481060),
    o = n(600164),
    s = n(388032),
    l = n(711730);
let c = (e) => {
        let { className: t, isEmailResent: n, resendEmail: i } = e;
        return (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsxs)("div", {
                className: l.awaitingWrapper,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/bold",
                        children: s.intl.string(s.t.Q03WWV),
                    }),
                    (0, r.jsxs)("p", {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: s.intl.string(s.t.BxPxhI),
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: s.intl.string(s.t.Y3fdOp),
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsxs)(a.Text, {
                                variant: "text-md/normal",
                                children: [
                                    s.intl.string(s.t.Paa4v4),
                                    "\xA0",
                                    n
                                        ? s.intl.string(s.t.StGVvC)
                                        : (0, r.jsx)(a.Anchor, {
                                              onClick: i,
                                              children: s.intl.string(s.t.Ex7sk9),
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    u = () =>
        (0, r.jsx)("div", {
            children: (0, r.jsx)(a.mzw, {
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                "data-migration-pending": !0,
                children: (0, r.jsx)(i.zxk, {
                    "data-testid": "continue",
                    variant: "primary",
                    disabled: !0,
                    text: s.intl.string(s.t.g8vPzy),
                }),
            }),
        });
