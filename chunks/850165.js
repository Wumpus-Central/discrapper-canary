(n.d(e, { Z: () => a }), n(953529));
var r = n(255367);
n(73800);
var i = n(481060),
    s = n(948582);
function a(t) {
    let { heroImageSrc: e, heroImageAlt: n, children: a, header: o, description: c } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: e,
                alt: n,
                className: s.heroImage
            }),
            (0, r.jsxs)(i.hzk, {
                'data-migration-pending': !0,
                className: s.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: s.textContainer,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: o
                            }),
                            null != c &&
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: s.description,
                                    children: c
                                })
                        ]
                    }),
                    a
                ]
            })
        ]
    });
}
