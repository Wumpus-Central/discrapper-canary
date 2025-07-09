e.d(i, { default: () => x });
var n = e(255367);
e(73800);
var s = e(481060),
    a = e(600164),
    r = e(313201),
    c = e(952164),
    o = e(388032),
    l = e(532819);
function x(t) {
    let { transitionState: i, onClose: e } = t,
        x = (0, r.Dt)();
    return (0, n.jsxs)(s.Y0X, {
        'aria-labelledby': x,
        transitionState: i,
        size: s.CgR.SMALL,
        parentComponent: 'SpotifyPremiumUpgradeModal',
        children: [
            (0, n.jsx)(s.xBx, {
                separator: !1,
                children: (0, n.jsx)(s.X6q, {
                    id: x,
                    variant: 'heading-lg/semibold',
                    children: o.intl.formatToMarkdownString(o.t.DQsSGh, {})
                })
            }),
            (0, n.jsxs)(s.hzk, {
                children: [
                    (0, n.jsx)(a.Z, {
                        justify: a.Z.Justify.CENTER,
                        children: (0, n.jsx)('div', { className: l.image })
                    }),
                    (0, n.jsx)(s.Text, {
                        className: l.text,
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.xGMwi4)
                    })
                ]
            }),
            (0, n.jsx)(s.mzw, {
                children: (0, n.jsxs)(s.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, n.jsx)(s.zxk, {
                            variant: 'primary',
                            text: o.intl.string(o.t.n8U5jY),
                            onClick: function () {
                                ((0, c.KK)(), e());
                            }
                        }),
                        (0, n.jsx)(s.zxk, {
                            variant: 'secondary',
                            text: o.intl.string(o.t['ETE/oK']),
                            onClick: e
                        })
                    ]
                })
            })
        ]
    });
}
