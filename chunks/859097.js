a.d(t, { C: () => d });
var l = a(255367);
a(73800);
var r = a(481060),
    s = a(600164),
    n = a(424071),
    o = a(388032),
    c = a(475286),
    i = a(387852);
function d(e) {
    let { onContinue: t, onClose: a, title: d, body: x } = e;
    return (0, l.jsxs)(n.Z, {
        children: [
            (0, l.jsxs)(r.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, l.jsx)('img', {
                        src: i,
                        className: c.illustration,
                        width: '254',
                        height: '127',
                        alt: ''
                    }),
                    (0, l.jsx)(r.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: d
                    }),
                    null != a &&
                        (0, l.jsx)(r.olH, {
                            className: c.closeButton,
                            onClick: a
                        })
                ]
            }),
            (0, l.jsx)(r.hzk, {
                className: c.body,
                paddingFix: !1,
                children: (0, l.jsx)(r.Text, {
                    tag: 'p',
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: x
                })
            }),
            (0, l.jsx)(r.mzw, {
                className: c.footer,
                children: (0, l.jsxs)(r.zxk, {
                    className: c.footerButton,
                    color: r.zxk.Colors.BRAND,
                    onClick: t,
                    children: [
                        o.intl.string(o.t['7NqTJi']),
                        (0, l.jsx)(r.rgF, {
                            color: 'currentColor',
                            className: c.launchIcon,
                            size: 'xs'
                        })
                    ]
                })
            })
        ]
    });
}
