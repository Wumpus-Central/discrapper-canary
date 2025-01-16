e.d(n, {
    Z: function () {
        return s;
    }
});
var r = e(200651);
e(192379);
var o = e(481060),
    i = e(461247);
function s(t) {
    let { heroImageSrc: n, heroImageAlt: e, children: s, header: a, description: c } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: e,
                className: i.heroImage
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: i.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: i.textContainer,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: a
                            }),
                            null != c &&
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: i.description,
                                    children: c
                                })
                        ]
                    }),
                    s
                ]
            })
        ]
    });
}
