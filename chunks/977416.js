function i(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
}
function r(e) {
    return i(e.config);
}
function a(e) {
    let t = null,
        n = Date.now();
    for (let i of e) {
        let e = new Date(i.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
n.d(t, { Ic: () => r, kd: () => i, v1: () => a });
