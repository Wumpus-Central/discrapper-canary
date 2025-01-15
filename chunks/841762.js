n.d(e, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(481060),
    a = n(536995);
function s(t) {
    let { alt: e, ...n } = t,
        [l, o] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.LOW_MOTION,
                    className: a.loader
                }),
            (0, i.jsx)('img', {
                ...n,
                alt: e,
                onLoad: () => o(!1)
            })
        ]
    });
}
function c(t) {
    let { src: e, backgroundSrc: n, alt: r, aspectRatio: l, className: u, imageChildClassName: c, ...d } = t;
    return (0, i.jsxs)('div', {
        className: o()(a.container, u),
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: r,
                className: a.backgroundImage
            }),
            (0, i.jsx)('div', { className: a.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: l },
                className: a.imageContainer,
                children: (0, i.jsx)(s, {
                    src: e,
                    alt: r,
                    className: o()(a.image, c),
                    ...d
                })
            })
        ]
    });
}
