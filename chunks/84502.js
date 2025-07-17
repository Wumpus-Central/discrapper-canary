g.d(t, { s: () => f });
var v = g(688619),
    e = g.n(v);
function r(A, t, g) {
    if (!e().valid(t)) return A.map(() => '#000000');
    let v = e()(t),
        r = v.luminance();
    return A.map((A, t) => v.luminance((A * g[t].base + r * g[t].tint) / (g[t].base + g[t].tint)).hex());
}
function f(A) {
    let { primaryBaseColors: t, primaryTintColor: g, primaryTintLuminances: v, primaryLuminanceWeights: e, secondaryBaseColors: f, secondaryTintColor: B, secondaryTintLuminances: h, secondaryLuminanceWeights: n } = A,
        C = null != g ? r(v, g, e) : t,
        w = [];
    return (
        null != f && null != h && null != n && (w = null != B ? r(h, B, n) : f),
        {
            primaryColorsTransformed: C,
            secondaryColorsTransformed: w
        }
    );
}
