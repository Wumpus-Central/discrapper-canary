var e = n(998659).charAt,
    o = n(565130),
    i = n(89416),
    u = n(689591),
    s = n(787899),
    c = 'String Iterator',
    f = i.set,
    a = i.getterFor(c);
u(
    String,
    'String',
    function (t) {
        f(this, {
            type: c,
            string: o(t),
            index: 0
        });
    },
    function () {
        var t,
            r = a(this),
            n = r.string,
            o = r.index;
        return o >= n.length ? s(void 0, !0) : ((t = e(n, o)), (r.index += t.length), s(t, !1));
    }
);
