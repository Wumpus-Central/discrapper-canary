e.d(s, { default: () => c });
var i = e(200651);
e(192379);
var n = e(481060),
    l = e(782568),
    o = e(313201),
    a = e(388032),
    r = e(741208);
function c(t) {
    let { href: s, onClose: c, transitionState: d } = t,
        b = (0, o.Dt)();
    return (0, i.jsxs)(n.Y0X, {
        transitionState: d,
        'aria-labelledby': b,
        children: [
            (0, i.jsx)('img', {
                className: r.art,
                src: e(902623),
                alt: ''
            }),
            (0, i.jsx)(n.hzk, {
                children: (0, i.jsxs)('div', {
                    className: r.modalContent,
                    children: [
                        (0, i.jsx)(n.X6q, {
                            id: b,
                            variant: 'heading-lg/semibold',
                            className: r.title,
                            children: a.intl.string(a.t.XtDo9f)
                        }),
                        (0, i.jsx)(n.Text, {
                            variant: 'text-md/normal',
                            className: r.body,
                            children: a.intl.string(a.t.L9yFkp)
                        })
                    ]
                })
            }),
            (0, i.jsxs)(n.mzw, {
                children: [
                    (0, i.jsx)(n.zxk, {
                        type: 'button',
                        size: n.zxk.Sizes.MEDIUM,
                        color: n.zxk.Colors.BRAND,
                        onClick: c,
                        children: a.intl.string(a.t.j7Vi2t)
                    }),
                    (0, i.jsx)(n.zxk, {
                        type: 'button',
                        size: n.zxk.Sizes.MEDIUM,
                        color: n.zxk.Colors.TRANSPARENT,
                        look: n.zxk.Looks.LINK,
                        onClick: () => {
                            c(), (0, l.Z)(s, !0);
                        },
                        children: a.intl.string(a.t['/bHu8/'])
                    })
                ]
            })
        ]
    });
}
