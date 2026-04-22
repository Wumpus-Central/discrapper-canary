"use strict";
n.d(t, { A: () => P });
var r = n(310784),
    i = n.n(r),
    s = n(119479),
    a = n.n(s),
    o = n(563304),
    l = n.n(o),
    u = n(93132),
    d = n(949816),
    c = n(589448),
    _ = n(415720),
    f = n(626757),
    E = n(788894),
    h = n(199222),
    p = n(857526),
    m = n(677370);
let { Themes: g } = n(680049).zv,
    { SemanticColors: A } = c.z,
    { RawColors: I } = u.z,
    { SemanticColorExperiments: T } = d.z,
    { SemanticColorHighContrast: S } = _.z,
    { Shadows: y } = p.z,
    { Spacing: N } = m.z,
    { Modules: O } = E.z,
    { Layout: R, Space: v } = f.zv,
    C = l()(I, (e) => i()(e)),
    b = {
        themes: g,
        modules: O,
        colors: l()(A, (e, t) => ({
            css: M(t),
            resolve(n) {
                let r = e[n.theme],
                    i = r.raw,
                    s = r.opacity;
                if (t in T && null != n.enabledExperiments && n.enabledExperiments.length > 0)
                    for (let e of n.enabledExperiments) {
                        let r = T[t]?.[e]?.[n.theme];
                        null != r && ((i = r.raw ?? i), (s = r.opacity ?? s));
                    }
                if (!0 === n.highContrastModeEnabled) {
                    let e = S[t]?.[n.theme];
                    null != e && ((i = e.raw ?? i), (s = e.opacity ?? s));
                }
                if (1 === s) return b.unsafe_rawColors[i].resolve(n);
                {
                    let e = C[i];
                    return 0 !== e.alpha() && 1 !== s && (e = e.alpha(s)), D(e, n.saturation);
                }
            },
        })),
        unsafe_rawColors: l()(I, (e, t) => {
            let n = C[t];
            return { css: M(t), resolve: (e) => D(n, e?.saturation ?? 1) };
        }),
        shadows: l()(y, (e, t) => ({
            css: M(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles,
            }),
        })),
        radii: h.T,
        spacing: l()(N, (e) => `${e}px`),
        layout: l()(R, (e) => ("number" == typeof e ? `${e}px` : e)),
        space: l()(v, (e) => ({
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
    let r = a()(n.opacity ?? 1, 0, 1),
        i = e;
    return 1 !== t && (i = i.set("hsl.s", i.get("hsl.s") * t)), 1 !== r && (i = i.alpha(i.alpha() * r)), i;
}
function w(e) {
    return e.toLowerCase().replace(/_/g, "-");
}
function M(e, t) {
    let n = null != t ? w(t) : null,
        r = w(e);
    return `var(--${[n, r].filter(Boolean).join("-")})`;
}
let P = b;
