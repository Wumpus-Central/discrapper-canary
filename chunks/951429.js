n.d(t, {
    A: () => o,
    P: () => a
});
let r = 2.8,
    i = 6;
function o(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let o = e / n;
    return (t = o < 1 ? Math.pow(o, r) : Math.pow(10, ((o - 1) * i) / 20)) * n;
}
function a(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let o = e / n;
    return (t = o < 1 ? Math.pow(o, 1 / r) : (20 * Math.log10(o)) / i + 1) * n;
}
