n.d(i, { default: () => d });
var e = n(255367);
n(73800);
var a = n(481060),
    r = n(600164),
    s = n(313201),
    l = n(952164),
    c = n(388032),
    o = n(551850);
function d(t) {
    let { transitionState: i, onClose: n } = t,
        d = (0, s.Dt)();
    return (0, e.jsxs)(a.Y0X, {
        "aria-labelledby": d,
        transitionState: i,
        size: a.CgR.SMALL,
        parentComponent: "SpotifyPremiumUpgradeModal",
        children: [
            (0, e.jsx)(a.xBx, {
                separator: !1,
                children: (0, e.jsx)(a.X6q, {
                    id: d,
                    variant: "heading-lg/semibold",
                    children: c.intl.formatToMarkdownString(c.t.DQsSGh, {}),
                }),
            }),
            (0, e.jsxs)(a.hzk, {
                children: [
                    (0, e.jsx)(r.Z, {
                        justify: r.Z.Justify.CENTER,
                        children: (0, e.jsx)("div", { className: o.image }),
                    }),
                    (0, e.jsx)(a.Text, {
                        className: o.text,
                        variant: "text-sm/normal",
                        children: c.intl.string(c.t.xGMwi4),
                    }),
                ],
            }),
            (0, e.jsx)(a.mzw, {
                children: (0, e.jsxs)(a.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, e.jsx)(a.zxk, {
                            variant: "primary",
                            text: c.intl.string(c.t.n8U5jY),
                            onClick: function () {
                                (0, l.KK)(), n();
                            },
                        }),
                        (0, e.jsx)(a.zxk, {
                            variant: "secondary",
                            text: c.intl.string(c.t["ETE/oK"]),
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
