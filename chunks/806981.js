var i = n(814033),
    r = n(685053),
    a = r.getNAF,
    s = r.getJSF,
    o = r.assert;
function l(e, t) {
    (this.type = e), (this.p = new i(t.p, 16)), (this.red = t.prime ? i.red(t.prime) : i.mont(this.p)), (this.zero = new i(0).toRed(this.red)), (this.one = new i(1).toRed(this.red)), (this.two = new i(2).toRed(this.red)), (this.n = t.n && new i(t.n, 16)), (this.g = t.g && this.pointFromJSON(t.g, t.gRed)), (this._wnafT1 = [, , , ,]), (this._wnafT2 = [, , , ,]), (this._wnafT3 = [, , , ,]), (this._wnafT4 = [, , , ,]), (this._bitLength = this.n ? this.n.bitLength() : 0);
    var n = this.n && this.p.div(this.n);
    !n || n.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
function u(e, t) {
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
        o(e.precomputed);
        var n,
            i,
            r = e._getDoubles(),
            s = a(t, 1, this._bitLength),
            l = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
        l /= 3;
        var u = [];
        for (n = 0; n < s.length; n += r.step) {
            i = 0;
            for (var c = n + r.step - 1; c >= n; c--) i = (i << 1) + s[c];
            u.push(i);
        }
        for (var d = this.jpoint(null, null, null), f = this.jpoint(null, null, null), _ = l; _ > 0; _--) {
            for (n = 0; n < u.length; n++) (i = u[n]) === _ ? (f = f.mixedAdd(r.points[n])) : i === -_ && (f = f.mixedAdd(r.points[n].neg()));
            d = d.add(f);
        }
        return d.toP();
    }),
    (l.prototype._wnafMul = function (e, t) {
        var n = 4,
            i = e._getNAFPoints(n);
        n = i.wnd;
        for (var r = i.points, s = a(t, n, this._bitLength), l = this.jpoint(null, null, null), u = s.length - 1; u >= 0; u--) {
            for (var c = 0; u >= 0 && 0 === s[u]; u--) c++;
            if ((u >= 0 && c++, (l = l.dblp(c)), u < 0)) break;
            var d = s[u];
            o(0 !== d), (l = 'affine' === e.type ? (d > 0 ? l.mixedAdd(r[(d - 1) >> 1]) : l.mixedAdd(r[(-d - 1) >> 1].neg())) : d > 0 ? l.add(r[(d - 1) >> 1]) : l.add(r[(-d - 1) >> 1].neg()));
        }
        return 'affine' === e.type ? l.toP() : l;
    }),
    (l.prototype._wnafMulAdd = function (e, t, n, i, r) {
        var o,
            l,
            u,
            c = this._wnafT1,
            d = this._wnafT2,
            f = this._wnafT3,
            _ = 0;
        for (o = 0; o < i; o++) {
            var p = (u = t[o])._getNAFPoints(e);
            (c[o] = p.wnd), (d[o] = p.points);
        }
        for (o = i - 1; o >= 1; o -= 2) {
            var h = o - 1,
                m = o;
            if (1 !== c[h] || 1 !== c[m]) {
                (f[h] = a(n[h], c[h], this._bitLength)), (f[m] = a(n[m], c[m], this._bitLength)), (_ = Math.max(f[h].length, _)), (_ = Math.max(f[m].length, _));
                continue;
            }
            var g = [t[h], null, null, t[m]];
            0 === t[h].y.cmp(t[m].y) ? ((g[1] = t[h].add(t[m])), (g[2] = t[h].toJ().mixedAdd(t[m].neg()))) : 0 === t[h].y.cmp(t[m].y.redNeg()) ? ((g[1] = t[h].toJ().mixedAdd(t[m])), (g[2] = t[h].add(t[m].neg()))) : ((g[1] = t[h].toJ().mixedAdd(t[m])), (g[2] = t[h].toJ().mixedAdd(t[m].neg())));
            var E = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = s(n[h], n[m]);
            for (l = 0, _ = Math.max(v[0].length, _), f[h] = Array(_), f[m] = Array(_); l < _; l++) {
                var y = 0 | v[0][l],
                    I = 0 | v[1][l];
                (f[h][l] = E[(y + 1) * 3 + (I + 1)]), (f[m][l] = 0), (d[h] = g);
            }
        }
        var T = this.jpoint(null, null, null),
            b = this._wnafT4;
        for (o = _; o >= 0; o--) {
            for (var S = 0; o >= 0; ) {
                var A = !0;
                for (l = 0; l < i; l++) (b[l] = 0 | f[l][o]), 0 !== b[l] && (A = !1);
                if (!A) break;
                S++, o--;
            }
            if ((o >= 0 && S++, (T = T.dblp(S)), o < 0)) break;
            for (l = 0; l < i; l++) {
                var N = b[l];
                0 !== N && (N > 0 ? (u = d[l][(N - 1) >> 1]) : N < 0 && (u = d[l][(-N - 1) >> 1].neg()), (T = 'affine' === u.type ? T.mixedAdd(u) : T.add(u)));
            }
        }
        for (o = 0; o < i; o++) d[o] = null;
        return r ? T : T.toP();
    }),
    (l.BasePoint = u),
    (u.prototype.eq = function () {
        throw Error('Not implemented');
    }),
    (u.prototype.validate = function () {
        return this.curve.validate(this);
    }),
    (l.prototype.decodePoint = function (e, t) {
        e = r.toArray(e, t);
        var n = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) return 6 === e[0] ? o(e[e.length - 1] % 2 == 0) : 7 === e[0] && o(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
        throw Error('Unknown point format');
    }),
    (u.prototype.encodeCompressed = function (e) {
        return this.encode(e, !0);
    }),
    (u.prototype._encode = function (e) {
        var t = this.curve.p.byteLength(),
            n = this.getX().toArray('be', t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray('be', t));
    }),
    (u.prototype.encode = function (e, t) {
        return r.encode(this._encode(t), e);
    }),
    (u.prototype.precompute = function (e) {
        if (this.precomputed) return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return (t.naf = this._getNAFPoints(8)), (t.doubles = this._getDoubles(4, e)), (t.beta = this._getBeta()), (this.precomputed = t), this;
    }),
    (u.prototype._hasDoubles = function (e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
    }),
    (u.prototype._getDoubles = function (e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var n = [this], i = this, r = 0; r < t; r += e) {
            for (var a = 0; a < e; a++) i = i.dbl();
            n.push(i);
        }
        return {
            step: e,
            points: n
        };
    }),
    (u.prototype._getNAFPoints = function (e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], n = (1 << e) - 1, i = 1 === n ? null : this.dbl(), r = 1; r < n; r++) t[r] = t[r - 1].add(i);
        return {
            wnd: e,
            points: t
        };
    }),
    (u.prototype._getBeta = function () {
        return null;
    }),
    (u.prototype.dblp = function (e) {
        for (var t = this, n = 0; n < e; n++) t = t.dbl();
        return t;
    });
