function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function a(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
}
function o(e, t, n) {
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
        r(this, e), o(this, 'xs', void 0), o(this, 'ys', void 0), o(this, 'c1s', void 0), o(this, 'c2s', void 0), o(this, 'c3s', void 0);
        for (var i, a, s, l = t.length, c = [], u = 0; u < l; u++) c.push(u);
        c.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
        });
        for (var d = [], _ = [], f = [], p = 0; p < l - 1; p++) (i = t[p + 1] - t[p]), (a = n[p + 1] - n[p]), _.push(i), d.push(a), f.push(a / i);
        for (var h = [f[0]], m = 0; m < _.length - 1; m++) {
            var g = f[m],
                E = f[m + 1];
            if (g * E <= 0) h.push(0);
            else {
                i = _[m];
                var b = _[m + 1],
                    y = i + b;
                h.push((3 * y) / ((y + b) / g + (y + i) / E));
            }
        }
        h.push(f[f.length - 1]);
        for (var O = [], v = [], I = 0; I < h.length - 1; I++) {
            s = f[I];
            var T = h[I],
                S = 1 / _[I],
                A = T + h[I + 1] - s - s;
            O.push((s - T - A) * S), v.push(A * S * S);
        }
        (this.xs = t), (this.ys = n), (this.c1s = h), (this.c2s = O), (this.c3s = v);
    }
    return (
        a(e, [
            {
                key: 'interpolate',
                value: function (e) {
                    var t,
                        n = this.xs,
                        r = this.ys,
                        i = this.c1s,
                        a = this.c2s,
                        o = this.c3s,
                        s = n.length - 1;
                    if (e === n[s]) return r[s];
                    for (var l = 0, c = o.length - 1; l <= c; ) {
                        var u = n[(t = Math.floor(0.5 * (l + c)))];
                        if (u < e) l = t + 1;
                        else {
                            if (!(u > e)) return r[t];
                            c = t - 1;
                        }
                    }
                    var d = e - n[(s = Math.max(0, c))],
                        _ = d * d;
                    return r[s] + i[s] * d + a[s] * _ + o[s] * d * _;
                }
            }
        ]),
        e
    );
})();
