if (!t)
    var t = {
        map: function (e, t) {
            var n = {};
            return t
                ? e.map(function (e, r) {
                      return (n.index = r), t.call(n, e);
                  })
                : e.slice();
        },
        naturalOrder: function (e, t) {
            return e < t ? -1 : +(e > t);
        },
        sum: function (e, t) {
            var n = {};
            return e.reduce(
                t
                    ? function (e, r, i) {
                          return (n.index = i), e + t.call(n, r);
                      }
                    : function (e, t) {
                          return e + t;
                      },
                0
            );
        },
        max: function (e, n) {
            return Math.max.apply(null, n ? t.map(e, n) : e);
        }
    };
e.exports = (function () {
    var e = 5,
        n = 3,
        r = 1000,
        i = 0.75;
    function o(t, n, r) {
        return (t << (2 * e)) + (n << e) + r;
    }
    function a(e) {
        var t = [],
            n = !1;
        function r() {
            t.sort(e), (n = !0);
        }
        return {
            push: function (e) {
                t.push(e), (n = !1);
            },
            peek: function (e) {
                return n || r(), void 0 === e && (e = t.length - 1), t[e];
            },
            pop: function () {
                return n || r(), t.pop();
            },
            size: function () {
                return t.length;
            },
            map: function (e) {
                return t.map(e);
            },
            debug: function () {
                return n || r(), t;
            }
        };
    }
    function s(e, t, n, r, i, o, a) {
        var s = this;
        (s.r1 = e), (s.r2 = t), (s.g1 = n), (s.g2 = r), (s.b1 = i), (s.b2 = o), (s.histo = a);
    }
    function l() {
        this.vboxes = new a(function (e, n) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    function c(t) {
        var r,
            i,
            a = Array(1 << (3 * e));
        return (
            t.forEach(function (e) {
                (i = e[0] >> n), (a[(r = o(i, e[1] >> n, e[2] >> n))] = (a[r] || 0) + 1);
            }),
            a
        );
    }
    function u(e, t) {
        var r,
            i,
            o,
            a = 1000000,
            l = 0,
            c = 1000000,
            u = 0,
            d = 1000000,
            f = 0;
        return (
            e.forEach(function (e) {
                (r = e[0] >> n), (i = e[1] >> n), (o = e[2] >> n), r < a ? (a = r) : r > l && (l = r), i < c ? (c = i) : i > u && (u = i), o < d ? (d = o) : o > f && (f = o);
            }),
            new s(a, l, c, u, d, f, t)
        );
    }
    function d(e, n) {
        if (n.count()) {
            var r = n.r2 - n.r1 + 1,
                i = n.g2 - n.g1 + 1,
                a = n.b2 - n.b1 + 1,
                s = t.max([r, i, a]);
            if (1 == n.count()) return [n.copy()];
            var l,
                c,
                u,
                d,
                f,
                _ = 0,
                p = [],
                h = [];
            if (s == r)
                for (l = n.r1; l <= n.r2; l++) {
                    for (d = 0, c = n.g1; c <= n.g2; c++) for (u = n.b1; u <= n.b2; u++) d += e[(f = o(l, c, u))] || 0;
                    (_ += d), (p[l] = _);
                }
            else if (s == i)
                for (l = n.g1; l <= n.g2; l++) {
                    for (d = 0, c = n.r1; c <= n.r2; c++) for (u = n.b1; u <= n.b2; u++) d += e[(f = o(c, l, u))] || 0;
                    (_ += d), (p[l] = _);
                }
            else
                for (l = n.b1; l <= n.b2; l++) {
                    for (d = 0, c = n.r1; c <= n.r2; c++) for (u = n.g1; u <= n.g2; u++) d += e[(f = o(c, u, l))] || 0;
                    (_ += d), (p[l] = _);
                }
            return (
                p.forEach(function (e, t) {
                    h[t] = _ - e;
                }),
                m(s == r ? 'r' : s == i ? 'g' : 'b')
            );
        }
        function m(e) {
            var t,
                r,
                i,
                o,
                a,
                s = e + '1',
                c = e + '2',
                u = 0;
            for (l = n[s]; l <= n[c]; l++)
                if (p[l] > _ / 2) {
                    for (i = n.copy(), o = n.copy(), a = (t = l - n[s]) <= (r = n[c] - l) ? Math.min(n[c] - 1, ~~(l + r / 2)) : Math.max(n[s], ~~(l - 1 - t / 2)); !p[a]; ) a++;
                    for (u = h[a]; !u && p[a - 1]; ) u = h[--a];
                    return (i[c] = a), (o[s] = i[c] + 1), [i, o];
                }
        }
    }
    return (
        (s.prototype = {
            volume: function (e) {
                var t = this;
                return (!t._volume || e) && (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1)), t._volume;
            },
            count: function (e) {
                var t = this,
                    n = t.histo;
                if (!t._count_set || e) {
                    var r,
                        i,
                        a,
                        s = 0;
                    for (r = t.r1; r <= t.r2; r++) for (i = t.g1; i <= t.g2; i++) for (a = t.b1; a <= t.b2; a++) s += n[o(r, i, a)] || 0;
                    (t._count = s), (t._count_set = !0);
                }
                return t._count;
            },
            copy: function () {
                var e = this;
                return new s(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo);
            },
            avg: function (t) {
                var n = this,
                    r = n.histo;
                if (!n._avg || t) {
                    var i,
                        a,
                        s,
                        l,
                        c = 0,
                        u = 1 << (8 - e),
                        d = 0,
                        f = 0,
                        _ = 0;
                    for (a = n.r1; a <= n.r2; a++) for (s = n.g1; s <= n.g2; s++) for (l = n.b1; l <= n.b2; l++) (c += i = r[o(a, s, l)] || 0), (d += i * (a + 0.5) * u), (f += i * (s + 0.5) * u), (_ += i * (l + 0.5) * u);
                    c ? (n._avg = [~~(d / c), ~~(f / c), ~~(_ / c)]) : (n._avg = [~~((u * (n.r1 + n.r2 + 1)) / 2), ~~((u * (n.g1 + n.g2 + 1)) / 2), ~~((u * (n.b1 + n.b2 + 1)) / 2)]);
                }
                return n._avg;
            },
            contains: function (e) {
                var t = this,
                    r = e[0] >> n;
                return (gval = e[1] >> n), (bval = e[2] >> n), r >= t.r1 && r <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2;
            }
        }),
        (l.prototype = {
            push: function (e) {
                this.vboxes.push({
                    vbox: e,
                    color: e.avg()
                });
            },
            palette: function () {
                return this.vboxes.map(function (e) {
                    return e.color;
                });
            },
            size: function () {
                return this.vboxes.size();
            },
            map: function (e) {
                for (var t = this.vboxes, n = 0; n < t.size(); n++) if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                return this.nearest(e);
            },
            nearest: function (e) {
                for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++) ((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) && ((t = n), (r = i.peek(o).color));
                return r;
            },
            forcebw: function () {
                var e = this.vboxes;
                e.sort(function (e, n) {
                    return t.naturalOrder(t.sum(e.color), t.sum(n.color));
                });
                var n = e[0].color;
                n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                var r = e.length - 1,
                    i = e[r].color;
                i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255]);
            }
        }),
        {
            quantize: function (e, n) {
                if (!e.length || n < 2 || n > 256) return !1;
                var o = c(e),
                    s = 0;
                o.forEach(function () {
                    s++;
                });
                var f = u(e, o),
                    _ = new a(function (e, n) {
                        return t.naturalOrder(e.count(), n.count());
                    });
                function p(e, t) {
                    for (var n, i = 1, a = 0; a < r; ) {
                        if (!(n = e.pop()).count()) {
                            e.push(n), a++;
                            continue;
                        }
                        var s = d(o, n),
                            l = s[0],
                            c = s[1];
                        if (!l || (e.push(l), c && (e.push(c), i++), i >= t || a++ > r)) return;
                    }
                }
                _.push(f), p(_, i * n);
                for (
                    var h = new a(function (e, n) {
                        return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume());
                    });
                    _.size();

                )
                    h.push(_.pop());
                p(h, n - h.size());
                for (var m = new l(); h.size(); ) m.push(h.pop());
                return m;
            }
        }
    );
})().quantize;
