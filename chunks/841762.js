n.d(e, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    u = n(481060),
    s = n(509754);
function o(t) {
    let { alt: e, ...n } = t,
        [l, a] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(u.$jN, {
                    type: u.$jN.Type.LOW_MOTION,
                    className: s.loader
                }),
            (0, i.jsx)('img', {
                ...n,
                alt: e,
                onLoad: () => a(!1)
            })
        ]
    });
}
function d(t) {
    let { src: e, backgroundSrc: n, alt: r, aspectRatio: l, className: u, imageChildClassName: d, ...c } = t;
    return (0, i.jsxs)('div', {
        className: a()(s.container, u),
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: r,
                className: s.backgroundImage
            }),
            (0, i.jsx)('div', { className: s.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: l },
                className: s.imageContainer,
                children: (0, i.jsx)(o, {
                    src: e,
                    alt: r,
                    className: a()(s.image, d),
                    ...c
                })
            })
        ]
    });
}
