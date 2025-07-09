t.d(a, { C: () => x });
var r = t(255367);
t(73800);
var s = t(755721),
    l = t(481060),
    n = t(600164),
    i = t(424071),
    o = t(388032),
    c = t(475286),
    d = t(387852);
function x(e) {
    let { onContinue: a, onClose: t, title: x, body: u } = e;
    return (0, r.jsxs)(i.Z, {
        children: [
            (0, r.jsxs)(l.xBx, {
                direction: n.Z.Direction.VERTICAL,
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
                    (0, r.jsx)(l.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: x
                    }),
                    null != t &&
                        (0, r.jsx)(l.olH, {
                            className: c.closeButton,
                            onClick: t
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
                    children: u
                })
            }),
            (0, r.jsx)(l.mzw, {
                className: c.footer,
                children: (0, r.jsxs)(s.zx, {
                    className: c.footerButton,
                    color: s.zx.Colors.BRAND,
                    onClick: a,
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
