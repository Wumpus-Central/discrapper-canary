n.d(i, { default: () => c });
var e = n(54381);
n(473749);
var r = n(481060),
    a = n(600164),
    s = n(313201),
    o = n(952164),
    d = n(388032),
    l = n(551850);
function c(t) {
    let { transitionState: i, onClose: n } = t,
        c = (0, s.Dt)();
    return (0, e.jsxs)(r.Y0X, {
        "aria-labelledby": c,
        transitionState: i,
        size: r.CgR.SMALL,
        parentComponent: "SpotifyPremiumUpgradeModal",
        children: [
            (0, e.jsx)(r.xBx, {
                separator: !1,
                children: (0, e.jsx)(r.Heading, {
                    id: c,
                    variant: "heading-lg/semibold",
                    children: d.intl.formatToMarkdownString(d.t.DQsSGr, {}),
                }),
            }),
            (0, e.jsxs)(r.hzk, {
                children: [
                    (0, e.jsx)(a.Z, {
                        justify: a.Z.Justify.CENTER,
                        children: (0, e.jsx)("div", { className: l.image }),
                    }),
                    (0, e.jsx)(r.Text, {
                        className: l.text,
                        variant: "text-sm/normal",
                        children: d.intl.string(d.t.xGMwi9),
                    }),
                ],
            }),
            (0, e.jsx)(r.mzw, {
                children: (0, e.jsxs)(r.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, e.jsx)(r.Button, {
                            variant: "primary",
                            text: d.intl.string(d.t.n8U5jd),
                            onClick: function () {
                                (0, o.KK)(), n();
                            },
                        }),
                        (0, e.jsx)(r.Button, {
                            variant: "secondary",
                            text: d.intl.string(d.t["ETE/oC"]),
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
