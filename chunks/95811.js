var i = r(700312).charAt,
    a = r(714050),
    o = r(644659),
    s = r(828114),
    l = r(535586),
    u = 'String Iterator',
    c = o.set,
    d = o.getterFor(u);
s(
    String,
    'String',
    function (e) {
        c(this, {
            type: u,
            string: a(e),
            index: 0
        });
    },
    function () {
        var e,
            n = d(this),
            r = n.string,
            a = n.index;
        return a >= r.length ? l(void 0, !0) : ((e = i(r, a)), (n.index += e.length), l(e, !1));
    }
);
