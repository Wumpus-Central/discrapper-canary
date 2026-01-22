n.d(t, { A: () => L }), n(896048), n(747238), n(812715);
var r = n(310784),
    i = n.n(r),
    a = n(119479),
    s = n.n(a),
    o = n(563304),
    l = n.n(o),
    c = n(93132),
    u = n(949816),
    d = n(589448),
    f = n(415720),
    p = n(626757),
    _ = n(788894),
    h = n(199222),
    m = n(857526),
    g = n(677370);
let { Themes: E } = n(680049).zv,
    { SemanticColors: b } = d.z,
    { RawColors: y } = c.z,
    { SemanticColorExperiments: O } = u.z,
    { SemanticColorHighContrast: A } = f.z,
    { Shadows: v } = m.z,
    { Spacing: S } = g.z,
    { Modules: I } = _.z,
    { Layout: T, Space: C } = p.zv,
    N = l()(y, (e) => i()(e)),
    R = {
        themes: E,
        modules: I,
        colors: l()(b, (e, t) => {
            let n = t;
            return {
                css: x(n),
                resolve(t) {
                    var r, i, a, s, o, l, c;
                    let u = e[t.theme],
                        d = u.raw,
                        f = u.opacity;
                    if (n in O && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            let o = null == (i = O[n]) || null == (r = i[e]) ? void 0 : r[t.theme];
                            null != o && ((d = null != (a = o.raw) ? a : d), (f = null != (s = o.opacity) ? s : f));
                        }
                    if (!0 === t.highContrastModeEnabled) {
                        let e = null == (o = A[n]) ? void 0 : o[t.theme];
                        null != e && ((d = null != (l = e.raw) ? l : d), (f = null != (c = e.opacity) ? c : f));
                    }
                    if (1 === f) return R.unsafe_rawColors[d].resolve(t);
                    {
                        let e = N[d];
                        return 0 !== e.alpha() && 1 !== f && (e = e.alpha(f)), w(e, t.saturation);
                    }
                },
            };
        }),
        unsafe_rawColors: l()(y, (e, t) => {
            let n = t,
                r = N[n];
            return {
                css: x(n),
                resolve(e) {
                    var t;
                    return w(r, null != (t = null == e ? void 0 : e.saturation) ? t : 1);
                },
            };
        }),
        shadows: l()(v, (e, t) => ({
            css: x(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles,
            }),
        })),
        radii: h.T,
        spacing: l()(S, (e) => "".concat(e, "px")),
        layout: l()(T, (e) => ("number" == typeof e ? "".concat(e, "px") : e)),
        space: l()(C, (e) => ({
            css: e.css,
            resolve(t) {
                let { density: n } = t;
                return e.resolve(n);
            },
        })),
    };
function w(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return P(e, t, n).hex("rgba");
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return P(e, t, n).css("hsl");
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return P(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = P(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        },
        rgba() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return P(e, t, n).rgba();
        },
    };
}
function P(e, t, n) {
    var r;
    let i = s()(null != (r = n.opacity) ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set("hsl.s", a.get("hsl.s") * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function D(e) {
    return e.toLowerCase().replace(/_/g, "-");
}
function x(e, t) {
    let n = null != t ? D(t) : null,
        r = D(e);
    return "var(--".concat([n, r].filter(Boolean).join("-"), ")");
}
let L = R;
