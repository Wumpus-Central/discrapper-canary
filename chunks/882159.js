r.d(n, {
    Re: function () {
        return o;
    },
    Zq: function () {
        return s;
    },
    kK: function () {
        return a;
    }
});
var i = r(49691);
function a(e) {
    var n = (0, i.Z)(e).Element;
    return e instanceof n || e instanceof Element;
}
function o(e) {
    var n = (0, i.Z)(e).HTMLElement;
    return e instanceof n || e instanceof HTMLElement;
}
function s(e) {
    if ('undefined' == typeof ShadowRoot) return !1;
    var n = (0, i.Z)(e).ShadowRoot;
    return e instanceof n || e instanceof ShadowRoot;
}
