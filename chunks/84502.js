t.d(e, { s: () => i });
var n = t(688619),
    r = t.n(n);
function l(A, e, t) {
    if (!r().valid(e)) return A.map(() => '#000000');
    let n = r()(e),
        l = n.luminance();
    return A.map((A, e) => n.luminance((A * t[e].base + l * t[e].tint) / (t[e].base + t[e].tint)).hex());
}
function i(A) {
    let { primaryBaseColors: e, primaryTintColor: t, primaryTintLuminances: n, primaryLuminanceWeights: r, secondaryBaseColors: i, secondaryTintColor: s, secondaryTintLuminances: a, secondaryLuminanceWeights: o } = A,
        g = null != t ? l(n, t, r) : e,
        f = [];
    return (
        null != i && null != a && null != o && (f = null != s ? l(a, s, o) : i),
        {
            primaryColorsTransformed: g,
            secondaryColorsTransformed: f
        }
    );
}
