if (!t)
    var t = {
        map: function (e, t) {
            var n = {};
            return t
                ? e.map(function (e, i) {
                      return (n.index = i), t.call(n, e);
                  })
                : e.slice();
        },
        naturalOrder: function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
        },
        sum: function (e, t) {
            var n = {};
            return e.reduce(
                t
                    ? function (e, i, r) {
                          return (n.index = r), e + t.call(n, i);
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
var n = (function () {
    var e = 5,
        n = 3,
        i = 1000,
        r = 0.75;
    function a(t, n, i) {
        return (t << (2 * e)) + (n << e) + i;
    }
    function s(e) {
        var t = [],
            n = !1;
        function i() {
            t.sort(e), (n = !0);
        }
        return {
            push: function (e) {
                t.push(e), (n = !1);
            },
            peek: function (e) {
                return n || i(), void 0 === e && (e = t.length - 1), t[e];
            },
            pop: function () {
                return n || i(), t.pop();
            },
            size: function () {
                return t.length;
            },
            map: function (e) {
                return t.map(e);
            },
            debug: function () {
                return n || i(), t;
            }
        };
    }
    function o(e, t, n, i, r, a, s) {
        var o = this;
        (o.r1 = e), (o.r2 = t), (o.g1 = n), (o.g2 = i), (o.b1 = r), (o.b2 = a), (o.histo = s);
    }
    function l() {
        this.vboxes = new s(function (e, n) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    function u(t) {
        var i,
            r,
            s = Array(1 << (3 * e));
        return (
            t.forEach(function (e) {
                (r = e[0] >> n), (s[(i = a(r, e[1] >> n, e[2] >> n))] = (s[i] || 0) + 1);
            }),
            s
        );
    }
    function c(e, t) {
        var i,
            r,
            a,
            s = 1000000,
            l = 0,
            u = 1000000,
            c = 0,
            d = 1000000,
            f = 0;
        return (
            e.forEach(function (e) {
                (i = e[0] >> n), (r = e[1] >> n), (a = e[2] >> n), i < s ? (s = i) : i > l && (l = i), r < u ? (u = r) : r > c && (c = r), a < d ? (d = a) : a > f && (f = a);
            }),
            new o(s, l, u, c, d, f, t)
        );
    }
    function d(e, n) {
        if (n.count()) {
            var i = n.r2 - n.r1 + 1,
                r = n.g2 - n.g1 + 1,
                s = n.b2 - n.b1 + 1,
                o = t.max([i, r, s]);
            if (1 == n.count()) return [n.copy()];
            var l,
                u,
                c,
                d,
                f,
                _ = 0,
                p = [],
                h = [];
            if (o == i)
                for (l = n.r1; l <= n.r2; l++) {
                    for (d = 0, u = n.g1; u <= n.g2; u++) for (c = n.b1; c <= n.b2; c++) d += e[(f = a(l, u, c))] || 0;
                    (_ += d), (p[l] = _);
                }
            else if (o == r)
                for (l = n.g1; l <= n.g2; l++) {
                    for (d = 0, u = n.r1; u <= n.r2; u++) for (c = n.b1; c <= n.b2; c++) d += e[(f = a(u, l, c))] || 0;
                    (_ += d), (p[l] = _);
                }
            else
                for (l = n.b1; l <= n.b2; l++) {
                    for (d = 0, u = n.r1; u <= n.r2; u++) for (c = n.g1; c <= n.g2; c++) d += e[(f = a(u, c, l))] || 0;
                    (_ += d), (p[l] = _);
                }
            return (
                p.forEach(function (e, t) {
                    h[t] = _ - e;
                }),
                m(o == i ? 'r' : o == r ? 'g' : 'b')
            );
        }
        function m(e) {
            var t,
                i,
                r,
                a,
                s,
                o = e + '1',
                u = e + '2',
                c = 0;
            for (l = n[o]; l <= n[u]; l++)
                if (p[l] > _ / 2) {
                    for (r = n.copy(), a = n.copy(), s = (t = l - n[o]) <= (i = n[u] - l) ? Math.min(n[u] - 1, ~~(l + i / 2)) : Math.max(n[o], ~~(l - 1 - t / 2)); !p[s]; ) s++;
                    for (c = h[s]; !c && p[s - 1]; ) c = h[--s];
                    return (r[u] = s), (a[o] = r[u] + 1), [r, a];
                }
        }
    }
    return (
        (o.prototype = {
            volume: function (e) {
                var t = this;
                return (!t._volume || e) && (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1)), t._volume;
            },
            count: function (e) {
                var t = this,
                    n = t.histo;
                if (!t._count_set || e) {
                    var i,
                        r,
                        s,
                        o = 0;
                    for (i = t.r1; i <= t.r2; i++) for (r = t.g1; r <= t.g2; r++) for (s = t.b1; s <= t.b2; s++) o += n[a(i, r, s)] || 0;
                    (t._count = o), (t._count_set = !0);
                }
                return t._count;
            },
            copy: function () {
                var e = this;
                return new o(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo);
            },
            avg: function (t) {
                var n = this,
                    i = n.histo;
                if (!n._avg || t) {
                    var r,
                        s,
                        o,
                        l,
                        u = 0,
                        c = 1 << (8 - e),
                        d = 0,
                        f = 0,
                        _ = 0;
                    for (s = n.r1; s <= n.r2; s++) for (o = n.g1; o <= n.g2; o++) for (l = n.b1; l <= n.b2; l++) (u += r = i[a(s, o, l)] || 0), (d += r * (s + 0.5) * c), (f += r * (o + 0.5) * c), (_ += r * (l + 0.5) * c);
                    u ? (n._avg = [~~(d / u), ~~(f / u), ~~(_ / u)]) : (n._avg = [~~((c * (n.r1 + n.r2 + 1)) / 2), ~~((c * (n.g1 + n.g2 + 1)) / 2), ~~((c * (n.b1 + n.b2 + 1)) / 2)]);
                }
                return n._avg;
            },
            contains: function (e) {
                var t = this,
                    i = e[0] >> n;
                return (gval = e[1] >> n), (bval = e[2] >> n), i >= t.r1 && i <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2;
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
                for (var t, n, i, r = this.vboxes, a = 0; a < r.size(); a++) ((n = Math.sqrt(Math.pow(e[0] - r.peek(a).color[0], 2) + Math.pow(e[1] - r.peek(a).color[1], 2) + Math.pow(e[2] - r.peek(a).color[2], 2))) < t || void 0 === t) && ((t = n), (i = r.peek(a).color));
                return i;
            },
            forcebw: function () {
                var e = this.vboxes;
                e.sort(function (e, n) {
                    return t.naturalOrder(t.sum(e.color), t.sum(n.color));
                });
                var n = e[0].color;
                n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                var i = e.length - 1,
                    r = e[i].color;
                r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[i].color = [255, 255, 255]);
            }
        }),
        {
            quantize: function (e, n) {
                if (!e.length || n < 2 || n > 256) return !1;
                var a = u(e),
                    o = 0;
                a.forEach(function () {
                    o++;
                });
                var f = c(e, a),
                    _ = new s(function (e, n) {
                        return t.naturalOrder(e.count(), n.count());
                    });
                function p(e, t) {
                    for (var n, r = 1, s = 0; s < i; ) {
                        if (!(n = e.pop()).count()) {
                            e.push(n), s++;
                            continue;
                        }
                        var o = d(a, n),
                            l = o[0],
                            u = o[1];
                        if (!l || (e.push(l), u && (e.push(u), r++), r >= t || s++ > i)) return;
                    }
                }
                _.push(f), p(_, r * n);
                for (
                    var h = new s(function (e, n) {
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
})();
e.exports = n.quantize;
