g.d(v, { s: () => C });
var B = g(688619),
    t = g.n(B);
function f(A, v, g) {
    if (!t().valid(v)) return A.map(() => '#000000');
    let B = t()(v),
        f = B.luminance();
    return A.map((A, v) => B.luminance((A * g[v].base + f * g[v].tint) / (g[v].base + g[v].tint)).hex());
}
function C(A) {
    let { primaryBaseColors: v, primaryTintColor: g, primaryTintLuminances: B, primaryLuminanceWeights: t, secondaryBaseColors: C, secondaryTintColor: e, secondaryTintLuminances: r, secondaryLuminanceWeights: Q } = A,
        w = null != g ? f(B, g, t) : v,
        h = [];
    return (
        null != C && null != r && null != Q && (h = null != e ? f(r, e, Q) : C),
        {
            primaryColorsTransformed: w,
            secondaryColorsTransformed: h
        }
    );
}
