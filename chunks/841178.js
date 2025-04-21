i.d(s, { default: () => x });
var n = i(200651);
i(192379);
var e = i(481060),
    a = i(600164),
    r = i(313201),
    c = i(952164),
    o = i(388032),
    l = i(532819);
function x(t) {
    let { transitionState: s, onClose: i } = t,
        x = (0, r.Dt)();
    return (0, n.jsxs)(e.Y0X, {
        'aria-labelledby': x,
        transitionState: s,
        size: e.CgR.SMALL,
        children: [
            (0, n.jsx)(e.xBx, {
                separator: !1,
                children: (0, n.jsx)(e.X6q, {
                    id: x,
                    variant: 'heading-lg/semibold',
                    children: o.intl.formatToMarkdownString(o.t.DQsSGh, {})
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
                        children: o.intl.string(o.t.xGMwi4)
                    })
                ]
            }),
            (0, n.jsxs)(e.mzw, {
                children: [
                    (0, n.jsx)(e.zxk, {
                        onClick: function () {
                            (0, c.KK)(), i();
                        },
                        children: o.intl.string(o.t.n8U5jY)
                    }),
                    (0, n.jsx)(e.zxk, {
                        look: e.zxk.Looks.LINK,
                        color: e.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: o.intl.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
