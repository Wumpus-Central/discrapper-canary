n.d(e, { Z: () => i }), n(266796);
var r = n(200651);
n(192379);
var s = n(481060),
    o = n(948582);
function i(t) {
    let { heroImageSrc: e, heroImageAlt: n, children: i, header: c, description: a } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: e,
                alt: n,
                className: o.heroImage
            }),
            (0, r.jsxs)(s.hzk, {
                className: o.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.textContainer,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: c
                            }),
                            null != a &&
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: o.description,
                                    children: a
                                })
                        ]
                    }),
                    i
                ]
            })
        ]
    });
}
