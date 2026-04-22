"use strict";
n.d(t, { Ec: () => l, Tm: () => a, Zv: () => o, aq: () => u, at: () => i, oq: () => s });
var r = Symbol.for("FluidValue:config"),
    i = function (e) {
        return !!a(e);
    };
function s(e) {
    var t = a(e);
    return t ? t.get() : e;
}
function a(e) {
    if (e) return e[r];
}
function o(e, t) {
    Object.defineProperty(e, r, { value: t, configurable: !0 });
}
function l(e, t) {
    var n = a(e);
    if (n)
        return (
            n.addChild(t),
            function () {
                return n.removeChild(t);
            }
        );
}
var u = function () {
    o(this, this);
};
