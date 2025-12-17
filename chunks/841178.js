n.d(i, { default: () => l });
var e = n(54381);
n(473749);
var r = n(481060),
    a = n(600164),
    s = n(313201),
    d = n(952164),
    o = n(388032),
    c = n(650021);
function l(t) {
    let { transitionState: i, onClose: n } = t,
        l = (0, s.Dt)();
    return (0, e.jsxs)(r.Y0X, {
        "aria-labelledby": l,
        transitionState: i,
        size: r.CgR.SMALL,
        parentComponent: "SpotifyPremiumUpgradeModal",
        children: [
            (0, e.jsx)(r.xBx, {
                separator: !1,
                children: (0, e.jsx)(r.Heading, {
                    id: l,
                    variant: "heading-lg/semibold",
                    children: o.intl.formatToMarkdownString(o.t.DQsSGr, {}),
                }),
            }),
            (0, e.jsxs)(r.hzk, {
                children: [
                    (0, e.jsx)(a.Z, {
                        justify: a.Z.Justify.CENTER,
                        children: (0, e.jsx)("div", { className: c.image }),
                    }),
                    (0, e.jsx)(r.Text, {
                        className: c.text,
                        variant: "text-sm/normal",
                        children: o.intl.string(o.t.xGMwi9),
                    }),
                ],
            }),
            (0, e.jsx)(r.mzw, {
                children: (0, e.jsxs)(r.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, e.jsx)(r.Button, {
                            variant: "primary",
                            text: o.intl.string(o.t.n8U5jd),
                            onClick: function () {
                                (0, d.KK)(), n();
                            },
                        }),
                        (0, e.jsx)(r.Button, {
                            variant: "secondary",
                            text: o.intl.string(o.t["ETE/oC"]),
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
