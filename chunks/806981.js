var r = n(814033),
    i = n(685053),
    o = i.getNAF,
    a = i.getJSF,
    s = i.assert;
function l(e, t) {
    (this.type = e), (this.p = new r(t.p, 16)), (this.red = t.prime ? r.red(t.prime) : r.mont(this.p)), (this.zero = new r(0).toRed(this.red)), (this.one = new r(1).toRed(this.red)), (this.two = new r(2).toRed(this.red)), (this.n = t.n && new r(t.n, 16)), (this.g = t.g && this.pointFromJSON(t.g, t.gRed)), (this._wnafT1 = [, , , ,]), (this._wnafT2 = [, , , ,]), (this._wnafT3 = [, , , ,]), (this._wnafT4 = [, , , ,]), (this._bitLength = this.n ? this.n.bitLength() : 0);
    var n = this.n && this.p.div(this.n);
    !n || n.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
function c(e, t) {
    (this.curve = e), (this.type = t), (this.precomputed = null);
}
(e.exports = l),
    (l.prototype.point = function () {
        throw Error('Not implemented');
    }),
    (l.prototype.validate = function () {
        throw Error('Not implemented');
    }),
    (l.prototype._fixedNafMul = function (e, t) {
        s(e.precomputed);
        var n,
            r,
            i = e._getDoubles(),
            a = o(t, 1, this._bitLength),
            l = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
        l /= 3;
        var c = [];
        for (n = 0; n < a.length; n += i.step) {
            r = 0;
            for (var u = n + i.step - 1; u >= n; u--) r = (r << 1) + a[u];
            c.push(r);
        }
        for (var d = this.jpoint(null, null, null), f = this.jpoint(null, null, null), p = l; p > 0; p--) {
            for (n = 0; n < c.length; n++) (r = c[n]) === p ? (f = f.mixedAdd(i.points[n])) : r === -p && (f = f.mixedAdd(i.points[n].neg()));
            d = d.add(f);
        }
        return d.toP();
    }),
    (l.prototype._wnafMul = function (e, t) {
        var n = 4,
            r = e._getNAFPoints(n);
        n = r.wnd;
        for (var i = r.points, a = o(t, n, this._bitLength), l = this.jpoint(null, null, null), c = a.length - 1; c >= 0; c--) {
            for (var u = 0; c >= 0 && 0 === a[c]; c--) u++;
            if ((c >= 0 && u++, (l = l.dblp(u)), c < 0)) break;
            var d = a[c];
            s(0 !== d), (l = 'affine' === e.type ? (d > 0 ? l.mixedAdd(i[(d - 1) >> 1]) : l.mixedAdd(i[(-d - 1) >> 1].neg())) : d > 0 ? l.add(i[(d - 1) >> 1]) : l.add(i[(-d - 1) >> 1].neg()));
        }
        return 'affine' === e.type ? l.toP() : l;
    }),
    (l.prototype._wnafMulAdd = function (e, t, n, r, i) {
        var s,
            l,
            c,
            u = this._wnafT1,
            d = this._wnafT2,
            f = this._wnafT3,
            p = 0;
        for (s = 0; s < r; s++) {
            var _ = (c = t[s])._getNAFPoints(e);
            (u[s] = _.wnd), (d[s] = _.points);
        }
        for (s = r - 1; s >= 1; s -= 2) {
            var h = s - 1,
                m = s;
            if (1 !== u[h] || 1 !== u[m]) {
                (f[h] = o(n[h], u[h], this._bitLength)), (f[m] = o(n[m], u[m], this._bitLength)), (p = Math.max(f[h].length, p)), (p = Math.max(f[m].length, p));
                continue;
            }
            var g = [t[h], null, null, t[m]];
            0 === t[h].y.cmp(t[m].y) ? ((g[1] = t[h].add(t[m])), (g[2] = t[h].toJ().mixedAdd(t[m].neg()))) : 0 === t[h].y.cmp(t[m].y.redNeg()) ? ((g[1] = t[h].toJ().mixedAdd(t[m])), (g[2] = t[h].add(t[m].neg()))) : ((g[1] = t[h].toJ().mixedAdd(t[m])), (g[2] = t[h].toJ().mixedAdd(t[m].neg())));
            var E = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = a(n[h], n[m]);
            for (l = 0, p = Math.max(v[0].length, p), f[h] = Array(p), f[m] = Array(p); l < p; l++) {
                var b = 0 | v[0][l],
                    y = 0 | v[1][l];
                (f[h][l] = E[(b + 1) * 3 + (y + 1)]), (f[m][l] = 0), (d[h] = g);
            }
        }
        var O = this.jpoint(null, null, null),
            S = this._wnafT4;
        for (s = p; s >= 0; s--) {
            for (var I = 0; s >= 0; ) {
                var T = !0;
                for (l = 0; l < r; l++) (S[l] = 0 | f[l][s]), 0 !== S[l] && (T = !1);
                if (!T) break;
                I++, s--;
            }
            if ((s >= 0 && I++, (O = O.dblp(I)), s < 0)) break;
            for (l = 0; l < r; l++) {
                var N = S[l];
                0 !== N && (N > 0 ? (c = d[l][(N - 1) >> 1]) : N < 0 && (c = d[l][(-N - 1) >> 1].neg()), (O = 'affine' === c.type ? O.mixedAdd(c) : O.add(c)));
            }
        }
        for (s = 0; s < r; s++) d[s] = null;
        return i ? O : O.toP();
    }),
    (l.BasePoint = c),
    (c.prototype.eq = function () {
        throw Error('Not implemented');
    }),
    (c.prototype.validate = function () {
        return this.curve.validate(this);
    }),
    (l.prototype.decodePoint = function (e, t) {
        e = i.toArray(e, t);
        var n = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
        throw Error('Unknown point format');
    }),
    (c.prototype.encodeCompressed = function (e) {
        return this.encode(e, !0);
    }),
    (c.prototype._encode = function (e) {
        var t = this.curve.p.byteLength(),
            n = this.getX().toArray('be', t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray('be', t));
    }),
    (c.prototype.encode = function (e, t) {
        return i.encode(this._encode(t), e);
    }),
    (c.prototype.precompute = function (e) {
        if (this.precomputed) return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return (t.naf = this._getNAFPoints(8)), (t.doubles = this._getDoubles(4, e)), (t.beta = this._getBeta()), (this.precomputed = t), this;
    }),
    (c.prototype._hasDoubles = function (e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
    }),
    (c.prototype._getDoubles = function (e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var n = [this], r = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) r = r.dbl();
            n.push(r);
        }
        return {
            step: e,
            points: n
        };
    }),
    (c.prototype._getNAFPoints = function (e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], n = (1 << e) - 1, r = 1 === n ? null : this.dbl(), i = 1; i < n; i++) t[i] = t[i - 1].add(r);
        return {
            wnd: e,
            points: t
        };
    }),
    (c.prototype._getBeta = function () {
        return null;
    }),
    (c.prototype.dblp = function (e) {
        for (var t = this, n = 0; n < e; n++) t = t.dbl();
        return t;
    });
