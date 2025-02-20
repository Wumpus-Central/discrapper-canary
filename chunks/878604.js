function r(e, t, n) {
    let r = e[t];
    return null == r ? (n ? ''.concat(e.any, ' (any)') : '100') : r.toString();
}
function i(e, t) {
    let n = e[t];
    return null == n ? e.any : n;
}
n.d(t, {
    F: () => i,
    f: () => r
});
