var r = n(700312).charAt,
    i = n(714050),
    o = n(644659),
    a = n(828114),
    s = n(535586),
    l = 'String Iterator',
    c = o.set,
    u = o.getterFor(l);
a(
    String,
    'String',
    function (e) {
        c(this, {
            type: l,
            string: i(e),
            index: 0
        });
    },
    function () {
        var e,
            t = u(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? s(void 0, !0) : ((e = r(n, i)), (t.index += e.length), s(e, !1));
    }
);
