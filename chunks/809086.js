t.d(n, {
    Z: function () {
        return i;
    },
    e: function () {
        return s;
    }
});
var r = t(200651);
t(192379);
var o = t(468194),
    u = t(477690),
    a = t(166081),
    c = t(841762);
let l = (0, o.Mg)(u.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function i(e) {
    let { listing: n, imageSize: t, alt: o, ...u } = e,
        c = (0, a.U)(n, t);
    return (0, r.jsx)('img', {
        src: c,
        alt: o,
        ...u
    });
}
function s(e) {
    let { listing: n, aspectRatio: t = 16 / 9, height: o, ...u } = e,
        i = (o - 2 * l) * t,
        s = (0, a.U)(n, i),
        d = (0, a.U)(n, i, { shouldAnimate: !1 });
    return (0, r.jsx)(c.Z, {
        src: s,
        backgroundSrc: d,
        aspectRatio: t,
        ...u
    });
}
