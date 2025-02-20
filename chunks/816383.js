function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function o(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
}
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { I: () => s });
var s = (function () {
    function e(t, n) {
        r(this, e), a(this, 'xs', void 0), a(this, 'ys', void 0), a(this, 'c1s', void 0), a(this, 'c2s', void 0), a(this, 'c3s', void 0);
        for (var i, o, s, l = t.length, c = [], u = 0; u < l; u++) c.push(u);
        c.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
        });
        for (var d = [], f = [], p = [], _ = 0; _ < l - 1; _++) (i = t[_ + 1] - t[_]), (o = n[_ + 1] - n[_]), f.push(i), d.push(o), p.push(o / i);
        for (var h = [p[0]], m = 0; m < f.length - 1; m++) {
            var g = p[m],
                E = p[m + 1];
            if (g * E <= 0) h.push(0);
            else {
                i = f[m];
                var v = f[m + 1],
                    b = i + v;
                h.push((3 * b) / ((b + v) / g + (b + i) / E));
            }
        }
        h.push(p[p.length - 1]);
        for (var y = [], O = [], S = 0; S < h.length - 1; S++) {
            s = p[S];
            var I = h[S],
                T = 1 / f[S],
                N = I + h[S + 1] - s - s;
            y.push((s - I - N) * T), O.push(N * T * T);
        }
        (this.xs = t), (this.ys = n), (this.c1s = h), (this.c2s = y), (this.c3s = O);
    }
    return (
        o(e, [
            {
                key: 'interpolate',
                value: function (e) {
                    var t,
                        n = this.xs,
                        r = this.ys,
                        i = this.c1s,
                        o = this.c2s,
                        a = this.c3s,
                        s = n.length - 1;
                    if (e === n[s]) return r[s];
                    for (var l = 0, c = a.length - 1; l <= c; ) {
                        var u = n[(t = Math.floor(0.5 * (l + c)))];
                        if (u < e) l = t + 1;
                        else {
                            if (!(u > e)) return r[t];
                            c = t - 1;
                        }
                    }
                    var d = e - n[(s = Math.max(0, c))],
                        f = d * d;
                    return r[s] + i[s] * d + o[s] * f + a[s] * d * f;
                }
            }
        ]),
        e
    );
})();
