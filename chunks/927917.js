function r(e) {
    var t;
    if ("undefined" == typeof window || null == window.navigator) return !1;
    let n = null == (t = window.navigator.userAgentData) ? void 0 : t.brands;
    return (Array.isArray(n) && n.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function i(e) {
    var t;
    return (
        "undefined" != typeof window &&
        null != window.navigator &&
        e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform)
    );
}
function a(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
}
n.d(t, {
    Dt: () => _,
    Pf: () => d,
    V5: () => o,
    ad: () => u,
    gn: () => c,
    i7: () => f,
    vU: () => p,
    zc: () => l,
});
let o = a(function () {
        return i(/^Mac/i);
    }),
    s = a(function () {
        return i(/^iPhone/i);
    }),
    l = a(function () {
        return i(/^iPad/i) || (o() && navigator.maxTouchPoints > 1);
    }),
    c = a(function () {
        return s() || l();
    }),
    u = a(function () {
        return o() || c();
    }),
    d = a(function () {
        return r(/AppleWebKit/i) && !f();
    }),
    f = a(function () {
        return r(/Chrome/i);
    }),
    _ = a(function () {
        return r(/Android/i);
    }),
    p = a(function () {
        return r(/Firefox/i);
    });
