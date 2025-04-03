a.d(e, { default: () => d });
var n = a(200651);
a(192379);
var l = a(481060),
    s = a(600164),
    r = a(313201),
    i = a(988158),
    o = a(388032),
    c = a(251997);
function d(t) {
    let { url: e, onClose: d, transitionState: u } = t,
        x = (0, r.Dt)(),
        { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, i.h)(e);
    return (0, n.jsxs)(l.Y0X, {
        transitionState: u,
        'aria-labelledby': x,
        children: [
            (0, n.jsx)('img', {
                className: c.art,
                src: a(902623),
                alt: ''
            }),
            (0, n.jsx)(l.hzk, {
                children: (0, n.jsxs)(s.Z, {
                    direction: s.Z.Direction.VERTICAL,
                    justify: s.Z.Justify.CENTER,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: o.NW.string(o.t['2B3wj4'])
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: o.NW.format(o.t.jnHyYW, {})
                        }),
                        (0, n.jsxs)(l.Ttm, {
                            className: c.linkCalloutContainer,
                            children: [
                                (0, n.jsxs)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: [h, '//']
                                }),
                                (0, n.jsx)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: 'text-normal',
                                    children: m
                                }),
                                (0, n.jsx)(l.Text, {
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
            (0, n.jsx)(l.mzw, {
                children: (0, n.jsx)(l.zxk, {
                    type: 'button',
                    size: l.zxk.Sizes.MEDIUM,
                    color: l.zxk.Colors.BRAND,
                    onClick: d,
                    children: o.NW.string(o.t['/g10LC'])
                })
            })
        ]
    });
}
