n.d(e, { Z: () => o });
var s = n(200651);
n(192379);
var i = n(481060),
    r = n(616634);
function o(t) {
    let { heroImageSrc: e, heroImageAlt: n, children: o, header: a, description: c } = t;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('img', {
                src: e,
                alt: n,
                className: r.heroImage
            }),
            (0, s.jsxs)(i.hzk, {
                className: r.body,
                children: [
                    (0, s.jsxs)('div', {
                        className: r.textContainer,
                        children: [
                            (0, s.jsx)(i.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: a
                            }),
                            null != c &&
                                (0, s.jsx)(i.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: r.description,
                                    children: c
                                })
                        ]
                    }),
                    o
                ]
            })
        ]
    });
}
