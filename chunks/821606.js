n.d(e, { default: () => d });
var a = n(255367);
n(73800);
var l = n(481060),
    i = n(600164),
    s = n(313201),
    r = n(988158),
    o = n(388032),
    c = n(251997);
function d(t) {
    let { url: e, onClose: d, transitionState: u } = t,
        x = (0, s.Dt)(),
        { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, r.h)(e);
    return (0, a.jsxs)(l.Y0X, {
        transitionState: u,
        'aria-labelledby': x,
        children: [
            (0, a.jsx)('img', {
                className: c.art,
                src: n(902623),
                alt: ''
            }),
            (0, a.jsx)(l.hzk, {
                children: (0, a.jsxs)(i.Z, {
                    direction: i.Z.Direction.VERTICAL,
                    justify: i.Z.Justify.CENTER,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: o.intl.string(o.t['2B3wj4'])
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: o.intl.format(o.t.jnHyYW, {})
                        }),
                        (0, a.jsxs)(l.Ttm, {
                            className: c.linkCalloutContainer,
                            children: [
                                (0, a.jsxs)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: [h, '//']
                                }),
                                (0, a.jsx)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: 'text-normal',
                                    children: m
                                }),
                                (0, a.jsx)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: b
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, a.jsx)(l.mzw, {
                children: (0, a.jsx)(l.zxk, {
                    type: 'button',
                    size: l.zxk.Sizes.MEDIUM,
                    color: l.zxk.Colors.BRAND,
                    onClick: d,
                    children: o.intl.string(o.t['/g10LC'])
                })
            })
        ]
    });
}
