var t,
    n = 'function' == typeof Map && Map.prototype ? Map : null,
    r = 'function' == typeof Set && Set.prototype ? Set : null;
n ||
    (t = function (e) {
        return !1;
    });
var i = n ? Map.prototype.has : null,
    o = r ? Set.prototype.has : null;
t ||
    i ||
    (t = function (e) {
        return !1;
    }),
    (e.exports =
        t ||
        function (e) {
            if (!e || 'object' != typeof e) return !1;
            try {
                if ((i.call(e), o))
                    try {
                        o.call(e);
                    } catch (e) {
                        return !0;
                    }
                return e instanceof n;
            } catch (e) {}
            return !1;
        });
