n.d(t, {
    l: () => o,
});
var r = n(485756),
    i = n(222367),
    a = n(391898);

function s(e, t) {
    return Array.isArray(e)
        ? !!Array.isArray(t) &&
              e.length === t.length &&
              e.every(function (e, n) {
                  return e.getTime() === t[n].getTime();
              })
        : e instanceof Date
          ? t instanceof Date && e.getTime() === t.getTime()
          : e === t;
}
var o = (function () {
    function e() {
        (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
    }
    return (
        (e.prototype._cacheAdd = function (e, t, n) {
            t && (t = t instanceof Date ? (0, i.o8)(t) : (0, i.bc)(t)),
                "all" === e ? (this.all = t) : ((n._value = t), this[e].push(n));
        }),
        (e.prototype._cacheGet = function (e, t) {
            var n = !1,
                o = t ? Object.keys(t) : [],
                l = function (e) {
                    for (var n = 0; n < o.length; n++) {
                        var r = o[n];
                        if (!s(t[r], e[r])) return !0;
                    }
                    return !1;
                },
                c = this[e];
            if ("all" === e) n = this.all;
            else if ((0, a.cy)(c))
                for (var u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (!(o.length && l(d))) {
                        n = d._value;
                        break;
                    }
                }
            if (!n && this.all) {
                for (var f = new r.A(e, t), u = 0; u < this.all.length && f.accept(this.all[u]); u++);
                (n = f.getValue()), this._cacheAdd(e, n, t);
            }
            return (0, a.cy)(n) ? (0, i.bc)(n) : n instanceof Date ? (0, i.o8)(n) : n;
        }),
        e
    );
})();
