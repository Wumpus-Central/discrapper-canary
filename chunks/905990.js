r.d(t, {
    Z: function () {
        return o;
    }
});
var a = r(461195),
    n = r(181568);
function o(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, o, s] = a.Z.from(e),
        [i, c, u] = a.Z.from(t);
    return 720 * Math.sqrt((r - i) ** 2 + 0.25 * (o - c) ** 2 + (s - u) ** 2);
}
