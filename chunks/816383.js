function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function a(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
}
function s(e, t, n) {
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
n.d(t, { I: () => o });
var o = (function () {
    function e(t, n) {
        i(this, e), s(this, 'xs', void 0), s(this, 'ys', void 0), s(this, 'c1s', void 0), s(this, 'c2s', void 0), s(this, 'c3s', void 0);
        for (var r, a, o, l = t.length, u = [], c = 0; c < l; c++) u.push(c);
        u.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
        });
        for (var d = [], f = [], _ = [], p = 0; p < l - 1; p++) (r = t[p + 1] - t[p]), (a = n[p + 1] - n[p]), f.push(r), d.push(a), _.push(a / r);
        for (var h = [_[0]], m = 0; m < f.length - 1; m++) {
            var g = _[m],
                E = _[m + 1];
            if (g * E <= 0) h.push(0);
            else {
                r = f[m];
                var v = f[m + 1],
                    y = r + v;
                h.push((3 * y) / ((y + v) / g + (y + r) / E));
            }
        }
        h.push(_[_.length - 1]);
        for (var I = [], T = [], b = 0; b < h.length - 1; b++) {
            o = _[b];
            var S = h[b],
                A = 1 / f[b],
                N = S + h[b + 1] - o - o;
            I.push((o - S - N) * A), T.push(N * A * A);
        }
        (this.xs = t), (this.ys = n), (this.c1s = h), (this.c2s = I), (this.c3s = T);
    }
    return (
        a(e, [
            {
                key: 'interpolate',
                value: function (e) {
                    var t,
                        n = this.xs,
                        i = this.ys,
                        r = this.c1s,
                        a = this.c2s,
                        s = this.c3s,
                        o = n.length - 1;
                    if (e === n[o]) return i[o];
                    for (var l = 0, u = s.length - 1; l <= u; ) {
                        var c = n[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return i[t];
                            u = t - 1;
                        }
                    }
                    var d = e - n[(o = Math.max(0, u))],
                        f = d * d;
                    return i[o] + r[o] * d + a[o] * f + s[o] * d * f;
                }
            }
        ]),
        e
    );
})();
