r.d(t, { Z: () => s });
var a = r(461195),
    n = r(181568);
function s(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, s, o] = a.Z.from(e),
        [i, c, l] = a.Z.from(t);
    return 720 * Math.sqrt((r - i) ** 2 + 0.25 * (s - c) ** 2 + (o - l) ** 2);
}
