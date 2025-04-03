i.d(t, { default: () => l });
var e = i(200651);
i(192379);
var n = i(481060),
    a = i(600164),
    r = i(313201),
    c = i(952164),
    o = i(388032),
    x = i(532819);
function l(s) {
    let { transitionState: t, onClose: i } = s,
        l = (0, r.Dt)();
    return (0, e.jsxs)(n.Y0X, {
        'aria-labelledby': l,
        transitionState: t,
        size: n.CgR.SMALL,
        children: [
            (0, e.jsx)(n.xBx, {
                separator: !1,
                children: (0, e.jsx)(n.X6q, {
                    id: l,
                    variant: 'heading-lg/semibold',
                    children: o.NW.formatToMarkdownString(o.t.DQsSGh, {})
                })
            }),
            (0, e.jsxs)(n.hzk, {
                children: [
                    (0, e.jsx)(a.Z, {
                        justify: a.Z.Justify.CENTER,
                        children: (0, e.jsx)('div', { className: x.image })
                    }),
                    (0, e.jsx)(n.Text, {
                        className: x.text,
                        variant: 'text-sm/normal',
                        children: o.NW.string(o.t.xGMwi4)
                    })
                ]
            }),
            (0, e.jsxs)(n.mzw, {
                children: [
                    (0, e.jsx)(n.zxk, {
                        onClick: function () {
                            (0, c.KK)(), i();
                        },
                        children: o.NW.string(o.t.n8U5jY)
                    }),
                    (0, e.jsx)(n.zxk, {
                        look: n.zxk.Looks.LINK,
                        color: n.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: o.NW.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
