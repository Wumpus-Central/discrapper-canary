s.d(n, { default: () => d });
var e = s(255367);
s(73800);
var i = s(481060),
    r = s(600164),
    a = s(388032),
    l = s(375971);
function d(t) {
    let { transitionState: n, onClose: s } = t;
    return (0, e.jsxs)(i.Y0X, {
        size: i.CgR.DYNAMIC,
        transitionState: n,
        'aria-label': a.intl.string(a.t.elyVbm),
        parentComponent: 'ChannelFullModal',
        children: [
            (0, e.jsxs)(i.xBx, {
                justify: r.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, e.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        className: l.header,
                        children: a.intl.string(a.t.elyVbm)
                    }),
                    (0, e.jsx)(i.olH, { onClick: s })
                ]
            }),
            (0, e.jsxs)(i.hzk, {
                children: [
                    (0, e.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: a.intl.string(a.t.nIeRen)
                    }),
                    (0, e.jsx)('div', { className: l.fullArt })
                ]
            }),
            (0, e.jsx)(i.mzw, {
                children: (0, e.jsx)(i.zxk, {
                    variant: 'primary',
                    text: a.intl.string(a.t.BddRzc),
                    onClick: s
                })
            })
        ]
    });
}
