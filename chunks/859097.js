r.d(a, { C: () => d });
var s = r(200651);
r(192379);
var t = r(481060),
    l = r(600164),
    n = r(424071),
    o = r(388032),
    c = r(475286),
    i = r(387852);
function d(e) {
    let { onContinue: a, onClose: r, title: d, body: x } = e;
    return (0, s.jsxs)(n.Z, {
        children: [
            (0, s.jsxs)(t.xBx, {
                direction: l.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, s.jsx)('img', {
                        src: i,
                        className: c.illustration,
                        width: '254',
                        height: '127',
                        alt: ''
                    }),
                    (0, s.jsx)(t.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: d
                    }),
                    null != r &&
                        (0, s.jsx)(t.olH, {
                            className: c.closeButton,
                            onClick: r
                        })
                ]
            }),
            (0, s.jsx)(t.hzk, {
                className: c.body,
                paddingFix: !1,
                children: (0, s.jsx)(t.Text, {
                    tag: 'p',
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: x
                })
            }),
            (0, s.jsx)(t.mzw, {
                className: c.footer,
                children: (0, s.jsxs)(t.zxk, {
                    className: c.footerButton,
                    color: t.zxk.Colors.BRAND,
                    onClick: a,
                    children: [
                        o.NW.string(o.t['7NqTJi']),
                        (0, s.jsx)(t.rgF, {
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
