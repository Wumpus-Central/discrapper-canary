function r(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function s(e, t, n) {
    return n.left + (e / t) * n.width;
}
function i(e) {
    let t = 0 | e,
        n = Math.floor(t / 3600),
        r = Math.floor((t % 3600) / 60),
        s = t % 60;
    return n > 0
        ? `${n}:${String(r).padStart(2, "0")}:${String(s).padStart(2, "0")}`
        : `${r}:${String(s).padStart(2, "0")}`;
}
n.d(t, { DX: () => s, hc: () => r, rB: () => i });
