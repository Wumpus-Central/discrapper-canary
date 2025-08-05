e.d(t, { s: () => n });
var r = e(688619),
    g = e.n(r);
function v(A, t, e) {
    if (!g().valid(t)) return A.map(() => '#000000');
    let r = g()(t),
        v = r.luminance();
    return A.map((A, t) => r.luminance((A * e[t].base + v * e[t].tint) / (e[t].base + e[t].tint)).hex());
}
function n(A) {
    let { primaryBaseColors: t, primaryTintColor: e, primaryTintLuminances: r, primaryLuminanceWeights: g, secondaryBaseColors: n, secondaryTintColor: f, secondaryTintLuminances: B, secondaryLuminanceWeights: l } = A,
        h = null != e ? v(r, e, g) : t,
        i = [];
    return (
        null != n && null != B && null != l && (i = null != f ? v(B, f, l) : n),
        {
            primaryColorsTransformed: h,
            secondaryColorsTransformed: i
        }
    );
}
