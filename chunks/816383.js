function i(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function a(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function o(e, n, r) {
    return n && a(e.prototype, n), r && a(e, r), e;
}
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    I: function () {
        return l;
    }
});
var l = (function () {
    function e(n, r) {
        i(this, e), s(this, 'xs', void 0), s(this, 'ys', void 0), s(this, 'c1s', void 0), s(this, 'c2s', void 0), s(this, 'c3s', void 0);
        for (var a, o, l, u = n.length, c = [], d = 0; d < u; d++) c.push(d);
        c.sort(function (e, r) {
            return n[e] < n[r] ? -1 : 1;
        });
        for (var f = [], p = [], h = [], _ = 0; _ < u - 1; _++) (a = n[_ + 1] - n[_]), (o = r[_ + 1] - r[_]), p.push(a), f.push(o), h.push(o / a);
        for (var m = [h[0]], g = 0; g < p.length - 1; g++) {
            var E = h[g],
                v = h[g + 1];
            if (E * v <= 0) m.push(0);
            else {
                a = p[g];
                var y = p[g + 1],
                    b = a + y;
                m.push((3 * b) / ((b + y) / E + (b + a) / v));
            }
        }
        m.push(h[h.length - 1]);
        for (var I = [], T = [], S = 0; S < m.length - 1; S++) {
            l = h[S];
            var A = m[S],
                C = 1 / p[S],
                N = A + m[S + 1] - l - l;
            I.push((l - A - N) * C), T.push(N * C * C);
        }
        (this.xs = n), (this.ys = r), (this.c1s = m), (this.c2s = I), (this.c3s = T);
    }
    return (
        o(e, [
            {
                key: 'interpolate',
                value: function (e) {
                    var n,
                        r = this.xs,
                        i = this.ys,
                        a = this.c1s,
                        o = this.c2s,
                        s = this.c3s,
                        l = r.length - 1;
                    if (e === r[l]) return i[l];
                    for (var u = 0, c = s.length - 1; u <= c; ) {
                        var d = r[(n = Math.floor(0.5 * (u + c)))];
                        if (d < e) u = n + 1;
                        else {
                            if (!(d > e)) return i[n];
                            c = n - 1;
                        }
                    }
                    var f = e - r[(l = Math.max(0, c))],
                        p = f * f;
                    return i[l] + a[l] * f + o[l] * p + s[l] * f * p;
                }
            }
        ]),
        e
    );
})();
