n.d(t, {
    Re: () => a,
    Zq: () => s,
    kK: () => r
});
var i = n(49691);
function r(e) {
    var t = (0, i.Z)(e).Element;
    return e instanceof t || e instanceof Element;
}
function a(e) {
    var t = (0, i.Z)(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function s(e) {
    if ('undefined' == typeof ShadowRoot) return !1;
    var t = (0, i.Z)(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
