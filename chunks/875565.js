"use strict";
n.d(t, {
    Kg: () => a,
    L2: () => f,
    Qd: () => o,
    Qg: () => c,
    bJ: () => i,
    mE: () => d,
    tH: () => _,
    vq: () => u,
    xH: () => l,
});
let r = Object.prototype.toString;
function i(e) {
    switch (r.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return _(e, Error);
    }
}
function s(e, t) {
    return r.call(e) === `[object ${t}]`;
}
function a(e) {
    return s(e, "String");
}
function o(e) {
    return s(e, "Object");
}
function l(e) {
    return "u" > typeof Event && _(e, Event);
}
function u(e) {
    return "u" > typeof Element && _(e, Element);
}
function c(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
function d(e) {
    return o(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function _(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
function f(e) {
    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
}
