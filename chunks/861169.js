var r = n(992366).charAt,
    i = n(304880),
    a = n(883972),
    s = n(661495),
    o = n(503902),
    l = "String Iterator",
    c = a.set,
    u = a.getterFor(l);
s(
    String,
    "String",
    function (e) {
        c(this, {
            type: l,
            string: i(e),
            index: 0,
        });
    },
    function () {
        var e,
            t = u(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? o(void 0, !0) : ((e = r(n, i)), (t.index += e.length), o(e, !1));
    },
);
