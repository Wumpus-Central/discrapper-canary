function a(e) {
    var t,
        r,
        a,
        n = e[0],
        s = e[1],
        o = e[2];
    return (t = +n + 0 * s + 1.13983 * o), (r = +n + -0.39465 * s + -0.5806 * o), (a = +n + 2.02311 * s + 0 * o), [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (a = Math.min(Math.max(0, a), 1))];
}
function n(e) {
    var t = e[0] / 255,
        r = e[1] / 255,
        a = e[2] / 255;
    return [0.299 * t + 0.587 * r + 0.114 * a, -0.14713 * t + -0.28886 * r + 0.436 * a, 0.615 * t + -0.51499 * r + -0.10001 * a];
}
r.d(t, {
    L: () => n,
    x: () => a
});
