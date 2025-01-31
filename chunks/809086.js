t.d(n, {
    Z: () => c,
    e: () => i
});
var r = t(200651);
t(192379);
var o = t(468194),
    l = t(477690),
    s = t(166081),
    u = t(841762);
let a = (0, o.Mg)(l.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function c(e) {
    let { listing: n, imageSize: t, alt: o, ...l } = e,
        u = (0, s.U)(n, t);
    return (0, r.jsx)('img', {
        src: u,
        alt: o,
        ...l
    });
}
function i(e) {
    let { listing: n, aspectRatio: t = 16 / 9, height: o, ...l } = e,
        c = (o - 2 * a) * t,
        i = (0, s.U)(n, c),
        d = (0, s.U)(n, c, { shouldAnimate: !1 });
    return (0, r.jsx)(u.Z, {
        src: i,
        backgroundSrc: d,
        aspectRatio: t,
        ...l
    });
}
