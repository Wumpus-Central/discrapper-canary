s.d(i, { default: () => x });
var n = s(255367);
s(73800);
var e = s(481060),
    a = s(600164),
    r = s(313201),
    o = s(952164),
    c = s(388032),
    l = s(532819);
function x(t) {
    let { transitionState: i, onClose: s } = t,
        x = (0, r.Dt)();
    return (0, n.jsxs)(e.Y0X, {
        'aria-labelledby': x,
        transitionState: i,
        size: e.CgR.SMALL,
        parentComponent: 'SpotifyPremiumUpgradeModal',
        children: [
            (0, n.jsx)(e.xBx, {
                separator: !1,
                children: (0, n.jsx)(e.X6q, {
                    id: x,
                    variant: 'heading-lg/semibold',
                    children: c.intl.formatToMarkdownString(c.t.DQsSGh, {})
                })
            }),
            (0, n.jsxs)(e.hzk, {
                children: [
                    (0, n.jsx)(a.Z, {
                        justify: a.Z.Justify.CENTER,
                        children: (0, n.jsx)('div', { className: l.image })
                    }),
                    (0, n.jsx)(e.Text, {
                        className: l.text,
                        variant: 'text-sm/normal',
                        children: c.intl.string(c.t.xGMwi4)
                    })
                ]
            }),
            (0, n.jsxs)(e.mzw, {
                children: [
                    (0, n.jsx)(e.zxk, {
                        onClick: function () {
                            (0, o.KK)(), s();
                        },
                        children: c.intl.string(c.t.n8U5jY)
                    }),
                    (0, n.jsx)(e.zxk, {
                        look: e.zxk.Looks.LINK,
                        color: e.zxk.Colors.PRIMARY,
                        onClick: s,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
