var n = Symbol.for("FluidValue:config");
function i(e) {
    if (e) return e[n];
}
function o(e, t) {
    Object.defineProperty(e, n, { value: t, configurable: !0 });
}
r.d(
    t,
    {},
    {
        Ec: function (e, t) {
            var r = i(e);
            if (r)
                return (
                    r.addChild(t),
                    function () {
                        return r.removeChild(t);
                    }
                );
        },
        Tm: i,
        Zv: o,
        aq: function () {
            o(this, this);
        },
        at: function (e) {
            return !!i(e);
        },
        oq: function (e) {
            var t = i(e);
            return t ? t.get() : e;
        },
    },
);
