r.d(t, { Ec: () => l, Tm: () => a, Zv: () => s, aq: () => u, at: () => i, oq: () => o });
var n = Symbol.for("FluidValue:config"),
    i = function (e) {
        return !!a(e);
    };
function o(e) {
    var t = a(e);
    return t ? t.get() : e;
}
function a(e) {
    if (e) return e[n];
}
function s(e, t) {
    Object.defineProperty(e, n, { value: t, configurable: !0 });
}
function l(e, t) {
    var r = a(e);
    if (r)
        return (
            r.addChild(t),
            function () {
                return r.removeChild(t);
            }
        );
}
var u = function () {
    s(this, this);
};
