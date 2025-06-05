s.d(n, { default: () => d });
var e = s(255367);
s(73800);
var i = s(481060),
    l = s(600164),
    r = s(388032),
    a = s(375971);
function d(t) {
    let { transitionState: n, onClose: s } = t;
    return (0, e.jsxs)(i.Y0X, {
        size: i.CgR.DYNAMIC,
        transitionState: n,
        'aria-label': r.intl.string(r.t.elyVbm),
        parentComponent: 'ChannelFullModal',
        children: [
            (0, e.jsxs)(i.xBx, {
                justify: l.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, e.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        className: a.header,
                        children: r.intl.string(r.t.elyVbm)
                    }),
                    (0, e.jsx)(i.olH, { onClick: s })
                ]
            }),
            (0, e.jsxs)(i.hzk, {
                children: [
                    (0, e.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: r.intl.string(r.t.nIeRen)
                    }),
                    (0, e.jsx)('div', { className: a.fullArt })
                ]
            }),
            (0, e.jsx)(i.mzw, {
                children: (0, e.jsx)(i.zxk, {
                    onClick: s,
                    children: r.intl.string(r.t.BddRzc)
                })
            })
        ]
    });
}
