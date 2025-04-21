a.d(t, { C: () => d });
var r = a(200651);
a(192379);
var l = a(481060),
    s = a(600164),
    n = a(424071),
    o = a(388032),
    c = a(475286),
    i = a(387852);
function d(e) {
    let { onContinue: t, onClose: a, title: d, body: x } = e;
    return (0, r.jsxs)(n.Z, {
        children: [
            (0, r.jsxs)(l.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, r.jsx)('img', {
                        src: i,
                        className: c.illustration,
                        width: '254',
                        height: '127',
                        alt: ''
                    }),
                    (0, r.jsx)(l.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: d
                    }),
                    null != a &&
                        (0, r.jsx)(l.olH, {
                            className: c.closeButton,
                            onClick: a
                        })
                ]
            }),
            (0, r.jsx)(l.hzk, {
                className: c.body,
                paddingFix: !1,
                children: (0, r.jsx)(l.Text, {
                    tag: 'p',
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: x
                })
            }),
            (0, r.jsx)(l.mzw, {
                className: c.footer,
                children: (0, r.jsxs)(l.zxk, {
                    className: c.footerButton,
                    color: l.zxk.Colors.BRAND,
                    onClick: t,
                    children: [
                        o.intl.string(o.t['7NqTJi']),
                        (0, r.jsx)(l.rgF, {
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
