v.d(g, { s: () => f });
var t = v(688619),
    B = v.n(t);
function e(A, g, v) {
    if (!B().valid(g)) return A.map(() => '#000000');
    let t = B()(g),
        e = t.luminance();
    return A.map((A, g) => t.luminance((A * v[g].base + e * v[g].tint) / (v[g].base + v[g].tint)).hex());
}
function f(A) {
    let { primaryBaseColors: g, primaryTintColor: v, primaryTintLuminances: t, primaryLuminanceWeights: B, secondaryBaseColors: f, secondaryTintColor: r, secondaryTintLuminances: C, secondaryLuminanceWeights: h } = A,
        w = null != v ? e(t, v, B) : g,
        Q = [];
    return (
        null != f && null != C && null != h && (Q = null != r ? e(C, r, h) : f),
        {
            primaryColorsTransformed: w,
            secondaryColorsTransformed: Q
        }
    );
}
