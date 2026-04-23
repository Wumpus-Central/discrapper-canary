"use strict";
n.d(t, { l: () => a });
var r = n(485756),
    i = n(222367),
    s = n(391898),
    a = (function () {
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
                    a = t ? Object.keys(t) : [],
                    o = this[e];
                if ("all" === e) n = this.all;
                else if ((0, s.cy)(o))
                    for (var l = 0; l < o.length; l++) {
                        var u = o[l];
                        if (
                            !(
                                a.length &&
                                (function (e) {
                                    for (var n = 0; n < a.length; n++) {
                                        var r = a[n];
                                        if (
                                            !(function (e, t) {
                                                return Array.isArray(e)
                                                    ? !!Array.isArray(t) &&
                                                          e.length === t.length &&
                                                          e.every(function (e, n) {
                                                              return e.getTime() === t[n].getTime();
                                                          })
                                                    : e instanceof Date
                                                      ? t instanceof Date && e.getTime() === t.getTime()
                                                      : e === t;
                                            })(t[r], e[r])
                                        )
                                            return !0;
                                    }
                                    return !1;
                                })(u)
                            )
                        ) {
                            n = u._value;
                            break;
                        }
                    }
                if (!n && this.all) {
                    for (var c = new r.A(e, t), l = 0; l < this.all.length && c.accept(this.all[l]); l++);
                    (n = c.getValue()), this._cacheAdd(e, n, t);
                }
                return (0, s.cy)(n) ? (0, i.bc)(n) : n instanceof Date ? (0, i.o8)(n) : n;
            }),
            e
        );
    })();
