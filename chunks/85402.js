"use strict";
n.d(t, { Ec: () => l, Tm: () => a, Zv: () => o, aq: () => u, at: () => r, oq: () => s });
var i = Symbol.for("FluidValue:config"),
    r = function (e) {
        return !!a(e);
    };
function s(e) {
    var t = a(e);
    return t ? t.get() : e;
}
function a(e) {
    if (e) return e[i];
}
function o(e, t) {
    Object.defineProperty(e, i, { value: t, configurable: !0 });
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
