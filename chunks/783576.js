e.d(s, { default: () => c });
var i = e(200651);
e(192379);
var n = e(481060),
    o = e(782568),
    a = e(313201),
    l = e(388032),
    r = e(34397);
function c(t) {
    let { href: s, onClose: c, transitionState: d } = t,
        b = (0, a.Dt)();
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
                            children: l.NW.string(l.t.XtDo9f)
                        }),
                        (0, i.jsx)(n.Text, {
                            variant: 'text-md/normal',
                            className: r.body,
                            children: l.NW.string(l.t.L9yFkp)
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
                        children: l.NW.string(l.t.j7Vi2t)
                    }),
                    (0, i.jsx)(n.zxk, {
                        type: 'button',
                        size: n.zxk.Sizes.MEDIUM,
                        color: n.zxk.Colors.TRANSPARENT,
                        look: n.zxk.Looks.LINK,
                        onClick: () => {
                            c(), (0, o.Z)(s, !0);
                        },
                        children: l.NW.string(l.t['/bHu8/'])
                    })
                ]
            })
        ]
    });
}
