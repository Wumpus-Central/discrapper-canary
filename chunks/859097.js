t.d(a, { C: () => x });
var r = t(255367);
t(73800);
var s = t(755721),
    n = t(481060),
    l = t(600164),
    i = t(424071),
    o = t(388032),
    c = t(475286),
    d = t(387852);
function x(e) {
    let { onContinue: a, onClose: t, title: x, body: u } = e;
    return (0, r.jsxs)(i.Z, {
        children: [
            (0, r.jsxs)(n.xBx, {
                direction: l.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, r.jsx)('img', {
                        src: d,
                        className: c.illustration,
                        width: '254',
                        height: '127',
                        alt: ''
                    }),
                    (0, r.jsx)(n.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: x
                    }),
                    null != t &&
                        (0, r.jsx)(n.olH, {
                            className: c.closeButton,
                            onClick: t
                        })
                ]
            }),
            (0, r.jsx)(n.hzk, {
                className: c.body,
                paddingFix: !1,
                children: (0, r.jsx)(n.Text, {
                    tag: 'p',
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: u
                })
            }),
            (0, r.jsx)(n.mzw, {
                className: c.footer,
                children: (0, r.jsxs)(s.zx, {
                    className: c.footerButton,
                    color: s.zx.Colors.BRAND,
                    onClick: a,
                    children: [
                        o.intl.string(o.t['7NqTJi']),
                        (0, r.jsx)(n.rgF, {
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
