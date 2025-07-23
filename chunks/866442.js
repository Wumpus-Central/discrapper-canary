(n.d(t, {
    Bd: () => _,
    FX: () => f,
    O: () => l,
    Rf: () => s,
    _i: () => o,
    br: () => d,
    ho: () => c,
    mj: () => m,
    wK: () => u
}),
    n(35282));
var r = n(688619),
    i = n.n(r);
function a(e) {
    return 1 === e.length ? '0'.concat(e) : e;
}
function o(e) {
    return i()(e).num();
}
function s(e) {
    if (e <= 16777215) {
        let t = (e >> 16) & 255,
            n = (e >> 8) & 255,
            r = 255 & e;
        return '#'
            .concat(a(t.toString(16)))
            .concat(a(n.toString(16)))
            .concat(a(r.toString(16)));
    }
    {
        let t = (e >> 24) & 255,
            n = (e >> 16) & 255,
            r = (e >> 8) & 255;
        return '#'
            .concat(a(t.toString(16)))
            .concat(a(n.toString(16)))
            .concat(a(r.toString(16)));
    }
}
function l(e) {
    let t = (e >> 16) & 255,
        n = (e >> 8) & 255,
        r = 255 & e,
        i = Math.min((t /= 255), (n /= 255), (r /= 255)),
        a = Math.max(t, n, r),
        o = a - i,
        s = 0,
        l = 0,
        c = 0;
    return (
        (s = Math.round(60 * (s = 0 === o ? 0 : a === t ? ((n - r) / o) % 6 : a === n ? (r - t) / o + 2 : (t - n) / o + 4))) < 0 && (s += 360),
        (c = (a + i) / 2),
        {
            h: s,
            s: (l = +(100 * (l = 0 === o ? 0 : o / (1 - Math.abs(2 * c - 1)))).toFixed(1)),
            l: (c = +(100 * c).toFixed(1))
        }
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        { h: i, s: a, l: o } = l(e);
    return t
        ? 'hsla('.concat(i, ', calc(var(--saturation-factor, 1) * ').concat(a, '%), ').concat(o, '%, ').concat(r, ')')
        : null != n
          ? 'hsla('
                .concat(i, ', ')
                .concat(n * a, '%, ')
                .concat(o, '%, ')
                .concat(r, ')')
          : 'hsla('.concat(i, ', ').concat(a, '%, ').concat(o, '%, ').concat(r, ')');
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!i().valid(e)) return null;
    let n = i()(e);
    return n.alpha(null != t ? t : n.alpha()).css();
}
function d(e, t) {
    null == t && (t = ((e >> 24) & 255) / 255);
    let n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        i = 255 & e;
    return 'rgba('.concat(n, ', ').concat(r, ', ').concat(i, ', ').concat(t, ')');
}
function _(e) {
    return 1 - (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (255 & e)) / 255;
}
function f(e) {
    return i().valid(e);
}
function p(e) {
    return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
}
function h(e, t, n) {
    var r = [e, t, n].map((e) => ((e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)));
    return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function m(e, t) {
    let n = p(e),
        r = p(t);
    var i = h(n[0], n[1], n[2]),
        a = h(r[0], r[1], r[2]);
    return (Math.max(i, a) + 0.05) / (Math.min(i, a) + 0.05);
}
