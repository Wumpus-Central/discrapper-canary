e.r(n),
    e.d(n, {
        default: function () {
            return d;
        }
    });
var a = e(200651);
e(192379);
var l = e(481060),
    r = e(600164),
    o = e(313201),
    i = e(988158),
    s = e(388032),
    c = e(614460);
function d(t) {
    let { url: n, onClose: d, transitionState: u } = t,
        x = (0, o.Dt)(),
        { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, i.h)(n);
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: u,
        'aria-labelledby': x,
        children: [
            (0, a.jsx)('img', {
                className: c.art,
                src: e(902623),
                alt: ''
            }),
            (0, a.jsx)(l.ModalContent, {
                children: (0, a.jsxs)(r.Z, {
                    direction: r.Z.Direction.VERTICAL,
                    justify: r.Z.Justify.CENTER,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: s.intl.string(s.t['2B3wj4'])
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: s.intl.format(s.t.jnHyYW, {})
                        }),
                        (0, a.jsxs)(l.Scroller, {
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
            (0, a.jsx)(l.ModalFooter, {
                children: (0, a.jsx)(l.Button, {
                    type: 'button',
                    size: l.Button.Sizes.MEDIUM,
                    color: l.Button.Colors.BRAND,
                    onClick: d,
                    children: s.intl.string(s.t['/g10LC'])
                })
            })
        ]
    });
}
