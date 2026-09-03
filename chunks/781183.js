n.d(t, { Ym: () => a, qE: () => i.clamp, ry: () => r });
var i = n(435558);
function r(e) {
    return 1 / (1 + Math.exp(-e));
}
function a(e, t) {
    if (0 === e.length) return 0;
    if (1 === e.length) return e[0];
    let n = [...e].sort((e, t) => e - t),
        r = ((0, i.clamp)(t, 0, 100) / 100) * (n.length - 1),
        a = Math.floor(r),
        s = Math.ceil(r);
    if (a === s) return n[a];
    let l = r - a;
    return n[a] * (1 - l) + n[s] * l;
}
