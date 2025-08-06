n.d(t, {
    Re: () => o,
    Zq: () => a,
    kK: () => i
});
var r = n(49691);
function i(e) {
    var t = (0, r.Z)(e).Element;
    return e instanceof t || e instanceof Element;
}
function o(e) {
    var t = (0, r.Z)(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function a(e) {
    if ('undefined' == typeof ShadowRoot) return !1;
    var t = (0, r.Z)(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
