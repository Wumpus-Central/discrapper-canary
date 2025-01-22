e.d(n, {
    Z: function () {
        return c;
    }
}),
    e(47120);
var i = e(200651),
    r = e(192379),
    l = e(120356),
    u = e.n(l),
    o = e(481060),
    a = e(542508);
function s(t) {
    let { alt: n, ...e } = t,
        [l, u] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(o.Spinner, {
                    type: o.Spinner.Type.LOW_MOTION,
                    className: a.loader
                }),
            (0, i.jsx)('img', {
                ...e,
                alt: n,
                onLoad: () => u(!1)
            })
        ]
    });
}
function c(t) {
    let { src: n, backgroundSrc: e, alt: r, aspectRatio: l, className: o, imageChildClassName: c, ...d } = t;
    return (0, i.jsxs)('div', {
        className: u()(a.container, o),
        children: [
            (0, i.jsx)('img', {
                src: e,
                alt: r,
                className: a.backgroundImage
            }),
            (0, i.jsx)('div', { className: a.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: l },
                className: a.imageContainer,
                children: (0, i.jsx)(s, {
                    src: n,
                    alt: r,
                    className: u()(a.image, c),
                    ...d
                })
            })
        ]
    });
}
