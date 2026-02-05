"use strict";
n.d(t, { A: () => P });
var r = n(310784),
    i = n.n(r),
    a = n(119479),
    s = n.n(a),
    o = n(563304),
    l = n.n(o),
    u = n(93132),
    c = n(949816),
    d = n(589448),
    _ = n(415720),
    f = n(626757),
    p = n(788894),
    h = n(199222),
    m = n(857526),
    g = n(677370);
let { Themes: E } = n(680049).zv,
    { SemanticColors: A } = d.z,
    { RawColors: I } = u.z,
    { SemanticColorExperiments: T } = c.z,
    { SemanticColorHighContrast: y } = _.z,
    { Shadows: S } = m.z,
    { Spacing: v } = g.z,
    { Modules: C } = p.z,
    { Layout: b, Space: N } = f.zv,
    R = l()(I, (e) => i()(e)),
    O = {
        themes: E,
        modules: C,
        colors: l()(A, (e, t) => {
            let n = t;
            return {
                css: x(n),
                resolve(t) {
                    let r = e[t.theme],
                        i = r.raw,
                        a = r.opacity;
                    if (n in T && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            let r = T[n]?.[e]?.[t.theme];
                            null != r && ((i = r.raw ?? i), (a = r.opacity ?? a));
                        }
                    if (!0 === t.highContrastModeEnabled) {
                        let e = y[n]?.[t.theme];
                        null != e && ((i = e.raw ?? i), (a = e.opacity ?? a));
                    }
                    if (1 === a) return O.unsafe_rawColors[i].resolve(t);
                    {
                        let e = R[i];
                        return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), D(e, t.saturation);
                    }
                },
            };
        }),
        unsafe_rawColors: l()(I, (e, t) => {
            let n = t,
                r = R[n];
            return { css: x(n), resolve: (e) => D(r, e?.saturation ?? 1) };
        }),
        shadows: l()(S, (e, t) => ({
            css: x(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles,
            }),
        })),
        radii: h.T,
        spacing: l()(v, (e) => `${e}px`),
        layout: l()(b, (e) => ("number" == typeof e ? `${e}px` : e)),
        space: l()(N, (e) => ({
            css: e.css,
            resolve(t) {
                let { density: n } = t;
                return e.resolve(n);
            },
        })),
    };
function D(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).hex("rgba");
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).css("hsl");
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = L(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        },
        rgba() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).rgba();
        },
    };
}
function L(e, t, n) {
    let r = s()(n.opacity ?? 1, 0, 1),
        i = e;
    return 1 !== t && (i = i.set("hsl.s", i.get("hsl.s") * t)), 1 !== r && (i = i.alpha(i.alpha() * r)), i;
}
function w(e) {
    return e.toLowerCase().replace(/_/g, "-");
}
function x(e, t) {
    let n = null != t ? w(t) : null,
        r = w(e);
    return `var(--${[n, r].filter(Boolean).join("-")})`;
}
let P = O;
