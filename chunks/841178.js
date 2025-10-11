n.d(i, { default: () => d });
var e = n(951288);
n(647438);
var a = n(481060),
    r = n(600164),
    s = n(313201),
    o = n(952164),
    l = n(388032),
    c = n(551850);
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
                children: (0, e.jsx)(a.Heading, {
                    id: d,
                    variant: "heading-lg/semibold",
                    children: l.intl.formatToMarkdownString(l.t.DQsSGh, {}),
                }),
            }),
            (0, e.jsxs)(a.hzk, {
                children: [
                    (0, e.jsx)(r.Z, {
                        justify: r.Z.Justify.CENTER,
                        children: (0, e.jsx)("div", { className: c.image }),
                    }),
                    (0, e.jsx)(a.Text, {
                        className: c.text,
                        variant: "text-sm/normal",
                        children: l.intl.string(l.t.xGMwi4),
                    }),
                ],
            }),
            (0, e.jsx)(a.mzw, {
                children: (0, e.jsxs)(a.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, e.jsx)(a.Button, {
                            variant: "primary",
                            text: l.intl.string(l.t.n8U5jY),
                            onClick: function () {
                                (0, o.KK)(), n();
                            },
                        }),
                        (0, e.jsx)(a.Button, {
                            variant: "secondary",
                            text: l.intl.string(l.t["ETE/oK"]),
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
