n.d(e, { Z: () => o }), n(953529);
var r = n(200651);
n(192379);
var s = n(481060),
    i = n(948582);
function o(t) {
    let { heroImageSrc: e, heroImageAlt: n, children: o, header: c, description: a } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: e,
                alt: n,
                className: i.heroImage
            }),
            (0, r.jsxs)(s.hzk, {
                className: i.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: i.textContainer,
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
                                    className: i.description,
                                    children: a
                                })
                        ]
                    }),
                    o
                ]
            })
        ]
    });
}
