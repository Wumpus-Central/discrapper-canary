e.d(n, { default: () => d });
var i = e(255367);
e(73800);
var s = e(755721),
    a = e(481060),
    o = e(782568),
    l = e(313201),
    r = e(388032),
    c = e(34397);
function d(t) {
    let { href: n, onClose: d, transitionState: b } = t,
        x = (0, l.Dt)();
    return (0, i.jsxs)(a.Y0X, {
        transitionState: b,
        'aria-labelledby': x,
        parentComponent: 'SuspiciousDownloadModal',
        children: [
            (0, i.jsx)('img', {
                className: c.art,
                src: e(902623),
                alt: ''
            }),
            (0, i.jsx)(a.hzk, {
                children: (0, i.jsxs)('div', {
                    className: c.modalContent,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: r.intl.string(r.t.XtDo9f)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: r.intl.string(r.t.L9yFkp)
                        })
                    ]
                })
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        variant: 'primary',
                        text: r.intl.string(r.t.j7Vi2t),
                        type: 'button',
                        onClick: d
                    }),
                    (0, i.jsx)(s.zx, {
                        type: 'button',
                        size: s.zx.Sizes.MEDIUM,
                        color: s.zx.Colors.TRANSPARENT,
                        look: s.zx.Looks.LINK,
                        onClick: () => {
                            (d(), (0, o.Z)(n, !0));
                        },
                        children: r.intl.string(r.t['/bHu8/'])
                    })
                ]
            })
        ]
    });
}
