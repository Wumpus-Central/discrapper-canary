"use strict";
n.d(t, { A: () => c });
var r = n(116657);
let i = 2,
    a = 3,
    s = 4,
    o = 25.4,
    l = 10,
    u = 1,
    c = { get: d };
function d(e, t) {
    let n = {},
        i = !1,
        a = _(e, "exif", "FocalLength", t),
        s = _(e, "exif", "FocalPlaneXResolution", t),
        o = _(e, "exif", "FocalPlaneYResolution", t),
        l = _(e, "exif", "FocalPlaneResolutionUnit", t),
        u = _(e, "file", "Image Width", t),
        c = _(e, "file", "Image Height", t),
        d = _(e, "exif", "FocalLengthIn35mmFilm", t) || f(s, o, l, u, c, a);
    d && ((n.FocalLength35efl = { value: d, description: r.A.FocalLengthIn35mmFilm(d) }), (i = !0));
    let m = p(a, d);
    m && ((n.ScaleFactorTo35mmEquivalent = m), (i = !0));
    let g = h(d);
    if ((g && ((n.FieldOfView = g), (i = !0)), i)) return n;
}
function _(e, t, n, r) {
    return r && e[t] && e[t][n] ? e[t][n].value : !r && e[n] ? e[n].value : void 0;
}
function f(e, t, n, r, c, d) {
    let _ = 43.27;
    if (e && t && n && r && c && d)
        try {
            let f;
            switch (n) {
                case i:
                    f = o;
                    break;
                case a:
                    f = l;
                    break;
                case s:
                    f = u;
                    break;
                default:
                    return;
            }
            let p = (e[0] / e[1]) * f,
                h = (t[0] / t[1]) * f,
                m = r / p,
                g = c / h,
                E = Math.sqrt(m ** 2 + g ** 2);
            return (d[0] / d[1]) * (_ / E);
        } catch (e) {}
}
function p(e, t) {
    if (e && t)
        try {
            let n = t / (e[0] / e[1]);
            return { value: n, description: n.toFixed(1) };
        } catch (e) {}
}
function h(e) {
    let t = 36;
    if (e)
        try {
            let n = 2 * Math.atan(t / (2 * e)) * (180 / Math.PI);
            return { value: n, description: n.toFixed(1) + " deg" };
        } catch (e) {}
}
