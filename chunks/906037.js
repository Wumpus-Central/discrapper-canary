i.d(t, { A: () => r });
var n = i(116657);
let r = {
    get: function (e, t) {
        let i = {},
            r = !1,
            a = o(e, "exif", "FocalLength", t),
            s = o(e, "exif", "FocalPlaneXResolution", t),
            l = o(e, "exif", "FocalPlaneYResolution", t),
            u = o(e, "exif", "FocalPlaneResolutionUnit", t),
            c = o(e, "file", "Image Width", t),
            d = o(e, "file", "Image Height", t),
            f =
                o(e, "exif", "FocalLengthIn35mmFilm", t) ||
                (function (e, t, i, n, r, o) {
                    if (e && t && i && n && r && o)
                        try {
                            let a;
                            switch (i) {
                                case 2:
                                    a = 25.4;
                                    break;
                                case 3:
                                    a = 10;
                                    break;
                                case 4:
                                    a = 1;
                                    break;
                                default:
                                    return;
                            }
                            let s = (e[0] / e[1]) * a,
                                l = (t[0] / t[1]) * a,
                                u = Math.sqrt((n / s) ** 2 + (r / l) ** 2);
                            return (o[0] / o[1]) * (43.27 / u);
                        } catch (e) {}
                })(s, l, u, c, d, a);
        f && ((i.FocalLength35efl = { value: f, description: n.A.FocalLengthIn35mmFilm(f) }), (r = !0));
        let p = (function (e, t) {
            if (e && t)
                try {
                    let i = t / (e[0] / e[1]);
                    return { value: i, description: i.toFixed(1) };
                } catch (e) {}
        })(a, f);
        p && ((i.ScaleFactorTo35mmEquivalent = p), (r = !0));
        let m = (function (e) {
            if (e)
                try {
                    let t = 2 * Math.atan(36 / (2 * e)) * (180 / Math.PI);
                    return { value: t, description: t.toFixed(1) + " deg" };
                } catch (e) {}
        })(f);
        if ((m && ((i.FieldOfView = m), (r = !0)), r)) return i;
    },
};
function o(e, t, i, n) {
    return n && e[t] && e[t][i] ? e[t][i].value : !n && e[i] ? e[i].value : void 0;
}
