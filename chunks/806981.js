var i = r(814033),
    a = r(685053),
    o = a.getNAF,
    s = a.getJSF,
    l = a.assert;
function u(e, n) {
    (this.type = e), (this.p = new i(n.p, 16)), (this.red = n.prime ? i.red(n.prime) : i.mont(this.p)), (this.zero = new i(0).toRed(this.red)), (this.one = new i(1).toRed(this.red)), (this.two = new i(2).toRed(this.red)), (this.n = n.n && new i(n.n, 16)), (this.g = n.g && this.pointFromJSON(n.g, n.gRed)), (this._wnafT1 = [, , , ,]), (this._wnafT2 = [, , , ,]), (this._wnafT3 = [, , , ,]), (this._wnafT4 = [, , , ,]), (this._bitLength = this.n ? this.n.bitLength() : 0);
    var r = this.n && this.p.div(this.n);
    !r || r.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
function c(e, n) {
    (this.curve = e), (this.type = n), (this.precomputed = null);
}
(e.exports = u),
    (u.prototype.point = function () {
        throw Error('Not implemented');
    }),
    (u.prototype.validate = function () {
        throw Error('Not implemented');
    }),
    (u.prototype._fixedNafMul = function (e, n) {
        l(e.precomputed);
        var r,
            i,
            a = e._getDoubles(),
            s = o(n, 1, this._bitLength),
            u = (1 << (a.step + 1)) - (a.step % 2 == 0 ? 2 : 1);
        u /= 3;
        var c = [];
        for (r = 0; r < s.length; r += a.step) {
            i = 0;
            for (var d = r + a.step - 1; d >= r; d--) i = (i << 1) + s[d];
            c.push(i);
        }
        for (var f = this.jpoint(null, null, null), p = this.jpoint(null, null, null), h = u; h > 0; h--) {
            for (r = 0; r < c.length; r++) (i = c[r]) === h ? (p = p.mixedAdd(a.points[r])) : i === -h && (p = p.mixedAdd(a.points[r].neg()));
            f = f.add(p);
        }
        return f.toP();
    }),
    (u.prototype._wnafMul = function (e, n) {
        var r = 4,
            i = e._getNAFPoints(r);
        r = i.wnd;
        for (var a = i.points, s = o(n, r, this._bitLength), u = this.jpoint(null, null, null), c = s.length - 1; c >= 0; c--) {
            for (var d = 0; c >= 0 && 0 === s[c]; c--) d++;
            if ((c >= 0 && d++, (u = u.dblp(d)), c < 0)) break;
            var f = s[c];
            l(0 !== f), (u = 'affine' === e.type ? (f > 0 ? u.mixedAdd(a[(f - 1) >> 1]) : u.mixedAdd(a[(-f - 1) >> 1].neg())) : f > 0 ? u.add(a[(f - 1) >> 1]) : u.add(a[(-f - 1) >> 1].neg()));
        }
        return 'affine' === e.type ? u.toP() : u;
    }),
    (u.prototype._wnafMulAdd = function (e, n, r, i, a) {
        var l,
            u,
            c,
            d = this._wnafT1,
            f = this._wnafT2,
            p = this._wnafT3,
            h = 0;
        for (l = 0; l < i; l++) {
            var _ = (c = n[l])._getNAFPoints(e);
            (d[l] = _.wnd), (f[l] = _.points);
        }
        for (l = i - 1; l >= 1; l -= 2) {
            var m = l - 1,
                g = l;
            if (1 !== d[m] || 1 !== d[g]) {
                (p[m] = o(r[m], d[m], this._bitLength)), (p[g] = o(r[g], d[g], this._bitLength)), (h = Math.max(p[m].length, h)), (h = Math.max(p[g].length, h));
                continue;
            }
            var E = [n[m], null, null, n[g]];
            0 === n[m].y.cmp(n[g].y) ? ((E[1] = n[m].add(n[g])), (E[2] = n[m].toJ().mixedAdd(n[g].neg()))) : 0 === n[m].y.cmp(n[g].y.redNeg()) ? ((E[1] = n[m].toJ().mixedAdd(n[g])), (E[2] = n[m].add(n[g].neg()))) : ((E[1] = n[m].toJ().mixedAdd(n[g])), (E[2] = n[m].toJ().mixedAdd(n[g].neg())));
            var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = s(r[m], r[g]);
            for (u = 0, h = Math.max(y[0].length, h), p[m] = Array(h), p[g] = Array(h); u < h; u++) {
                var b = 0 | y[0][u],
                    I = 0 | y[1][u];
                (p[m][u] = v[(b + 1) * 3 + (I + 1)]), (p[g][u] = 0), (f[m] = E);
            }
        }
        var T = this.jpoint(null, null, null),
            S = this._wnafT4;
        for (l = h; l >= 0; l--) {
            for (var A = 0; l >= 0; ) {
                var C = !0;
                for (u = 0; u < i; u++) (S[u] = 0 | p[u][l]), 0 !== S[u] && (C = !1);
                if (!C) break;
                A++, l--;
            }
            if ((l >= 0 && A++, (T = T.dblp(A)), l < 0)) break;
            for (u = 0; u < i; u++) {
                var N = S[u];
                if (0 !== N) {
                    N > 0 ? (c = f[u][(N - 1) >> 1]) : N < 0 && (c = f[u][(-N - 1) >> 1].neg());
                    T = 'affine' === c.type ? T.mixedAdd(c) : T.add(c);
                }
            }
        }
        for (l = 0; l < i; l++) f[l] = null;
        return a ? T : T.toP();
    }),
    (u.BasePoint = c),
    (c.prototype.eq = function () {
        throw Error('Not implemented');
    }),
    (c.prototype.validate = function () {
        return this.curve.validate(this);
    }),
    (u.prototype.decodePoint = function (e, n) {
        e = a.toArray(e, n);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? l(e[e.length - 1] % 2 == 0) : 7 === e[0] && l(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw Error('Unknown point format');
    }),
    (c.prototype.encodeCompressed = function (e) {
        return this.encode(e, !0);
    }),
    (c.prototype._encode = function (e) {
        var n = this.curve.p.byteLength(),
            r = this.getX().toArray('be', n);
        return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray('be', n));
    }),
    (c.prototype.encode = function (e, n) {
        return a.encode(this._encode(n), e);
    }),
    (c.prototype.precompute = function (e) {
        if (this.precomputed) return this;
        var n = {
            doubles: null,
            naf: null,
            beta: null
        };
        return (n.naf = this._getNAFPoints(8)), (n.doubles = this._getDoubles(4, e)), (n.beta = this._getBeta()), (this.precomputed = n), this;
    }),
    (c.prototype._hasDoubles = function (e) {
        if (!this.precomputed) return !1;
        var n = this.precomputed.doubles;
        return !!n && n.points.length >= Math.ceil((e.bitLength() + 1) / n.step);
    }),
    (c.prototype._getDoubles = function (e, n) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var r = [this], i = this, a = 0; a < n; a += e) {
            for (var o = 0; o < e; o++) i = i.dbl();
            r.push(i);
        }
        return {
            step: e,
            points: r
        };
    }),
    (c.prototype._getNAFPoints = function (e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var n = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), a = 1; a < r; a++) n[a] = n[a - 1].add(i);
        return {
            wnd: e,
            points: n
        };
    }),
    (c.prototype._getBeta = function () {
        return null;
    }),
    (c.prototype.dblp = function (e) {
        for (var n = this, r = 0; r < e; r++) n = n.dbl();
        return n;
    });
