n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(542508);
function u(e) {
    let { alt: t, ...n } = e,
        [l, o] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(s.Spinner, {
                    type: s.Spinner.Type.LOW_MOTION,
                    className: a.loader
                }),
            (0, i.jsx)('img', {
                ...n,
                alt: t,
                onLoad: () => o(!1)
            })
        ]
    });
}
function d(e) {
    let { src: t, backgroundSrc: n, alt: r, aspectRatio: l, className: s, imageChildClassName: d, ...c } = e;
    return (0, i.jsxs)('div', {
        className: o()(a.container, s),
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
                children: (0, i.jsx)(u, {
                    src: t,
                    alt: r,
                    className: o()(a.image, d),
                    ...c
                })
            })
        ]
    });
}
