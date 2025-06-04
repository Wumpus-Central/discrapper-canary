n.d(t, {
    Re: () => a,
    Zq: () => o,
    kK: () => i
});
var r = n(49691);
function i(e) {
    var t = (0, r.Z)(e).Element;
    return e instanceof t || e instanceof Element;
}
function a(e) {
    var t = (0, r.Z)(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function o(e) {
    if ('undefined' == typeof ShadowRoot) return !1;
    var t = (0, r.Z)(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
