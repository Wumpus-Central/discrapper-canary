r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(552952),
    n = r(181568);
function s(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, s, o] = a.Z.from(e),
        [i, c, u] = a.Z.from(t);
    return 720 * Math.sqrt((r - i) ** 2 + 0.25 * (s - c) ** 2 + (o - u) ** 2);
}
