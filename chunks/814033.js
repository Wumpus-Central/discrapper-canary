!(function (e, t) {
    function i(e, t) {
        if (!e) throw Error(t || 'Assertion failed');
    }
    function r(e, t) {
        e.super_ = t;
        var n = function () {};
        (n.prototype = t.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
    }
    function a(e, t, n) {
        if (a.isBN(e)) return e;
        (this.negative = 0), (this.words = null), (this.length = 0), (this.red = null), null !== e && (('le' === t || 'be' === t) && ((n = t), (t = 10)), this._init(e || 0, t || 10, n || 'be'));
    }
    'object' == typeof e ? (e.exports = a) : (t.BN = a), (a.BN = a), (a.wordSize = 26);
    try {
        u = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : n(603882).Buffer;
    } catch (e) {}
    function s(e, t) {
        var n = e.charCodeAt(t);
        return n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : (n - 48) & 15;
    }
    function o(e, t, n) {
        var i = s(e, n);
        return n - 1 >= t && (i |= s(e, n - 1) << 4), i;
    }
    function l(e, t, n, i) {
        for (var r = 0, a = Math.min(e.length, n), s = t; s < a; s++) {
            var o = e.charCodeAt(s) - 48;
            (r *= i), o >= 49 ? (r += o - 49 + 10) : o >= 17 ? (r += o - 17 + 10) : (r += o);
        }
        return r;
    }
    (a.isBN = function (e) {
        return e instanceof a || (null !== e && 'object' == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words));
    }),
        (a.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
        }),
        (a.min = function (e, t) {
            return 0 > e.cmp(t) ? e : t;
        }),
        (a.prototype._init = function (e, t, n) {
            if ('number' == typeof e) return this._initNumber(e, t, n);
            if ('object' == typeof e) return this._initArray(e, t, n);
            'hex' === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36);
            var r = 0;
            '-' === (e = e.toString().replace(/\s+/g, ''))[0] && (r++, (this.negative = 1)), r < e.length && (16 === t ? this._parseHex(e, r, n) : (this._parseBase(e, t, r), 'le' === n && this._initArray(this.toArray(), t, n)));
        }),
        (a.prototype._initNumber = function (e, t, n) {
            e < 0 && ((this.negative = 1), (e = -e)), e < 67108864 ? ((this.words = [67108863 & e]), (this.length = 1)) : e < 4503599627370496 ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]), (this.length = 2)) : (i(e < 9007199254740992), (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]), (this.length = 3)), 'le' === n && this._initArray(this.toArray(), t, n);
        }),
        (a.prototype._initArray = function (e, t, n) {
            if ((i('number' == typeof e.length), e.length <= 0)) return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)), (this.words = Array(this.length));
            for (var r, a, s = 0; s < this.length; s++) this.words[s] = 0;
            var o = 0;
            if ('be' === n) for (s = e.length - 1, r = 0; s >= 0; s -= 3) (a = e[s] | (e[s - 1] << 8) | (e[s - 2] << 16)), (this.words[r] |= (a << o) & 67108863), (this.words[r + 1] = (a >>> (26 - o)) & 67108863), (o += 24) >= 26 && ((o -= 26), r++);
            else if ('le' === n) for (s = 0, r = 0; s < e.length; s += 3) (a = e[s] | (e[s + 1] << 8) | (e[s + 2] << 16)), (this.words[r] |= (a << o) & 67108863), (this.words[r + 1] = (a >>> (26 - o)) & 67108863), (o += 24) >= 26 && ((o -= 26), r++);
            return this.strip();
        }),
        (a.prototype._parseHex = function (e, t, n) {
            (this.length = Math.ceil((e.length - t) / 6)), (this.words = Array(this.length));
            for (var i, r = 0; r < this.length; r++) this.words[r] = 0;
            var a = 0,
                s = 0;
            if ('be' === n) for (r = e.length - 1; r >= t; r -= 2) (i = o(e, t, r) << a), (this.words[s] |= 67108863 & i), a >= 18 ? ((a -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (a += 8);
            else for (r = (e.length - t) % 2 == 0 ? t + 1 : t; r < e.length; r += 2) (i = o(e, t, r) << a), (this.words[s] |= 67108863 & i), a >= 18 ? ((a -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (a += 8);
            this.strip();
        }),
        (a.prototype._parseBase = function (e, t, n) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, r = 1; r <= 67108863; r *= t) i++;
            i--, (r = (r / t) | 0);
            for (var a = e.length - n, s = a % i, o = Math.min(a, a - s) + n, u = 0, c = n; c < o; c += i) (u = l(e, c, c + i, t)), this.imuln(r), this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
            if (0 !== s) {
                var d = 1;
                for (u = l(e, c, e.length, t), c = 0; c < s; c++) d *= t;
                this.imuln(d), this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
            }
            this.strip();
        }),
        (a.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length), (e.negative = this.negative), (e.red = this.red);
        }),
        (a.prototype.clone = function () {
            var e = new a(null);
            return this.copy(e), e;
        }),
        (a.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
        }),
        (a.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
            return this._normSign();
        }),
        (a.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }),
        (a.prototype.inspect = function () {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        });
    var u,
        c = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'],
        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    function _(e) {
        for (var t = Array(e.bitLength()), n = 0; n < t.length; n++) {
            var i = (n / 26) | 0,
                r = n % 26;
            t[n] = (e.words[i] & (1 << r)) >>> r;
        }
        return t;
    }
    function p(e, t, n) {
        n.negative = t.negative ^ e.negative;
        var i = (e.length + t.length) | 0;
        (n.length = i), (i = (i - 1) | 0);
        var r = 0 | e.words[0],
            a = 0 | t.words[0],
            s = r * a,
            o = 67108863 & s,
            l = (s / 67108864) | 0;
        n.words[0] = o;
        for (var u = 1; u < i; u++) {
            for (var c = l >>> 26, d = 67108863 & l, f = Math.min(u, t.length - 1), _ = Math.max(0, u - e.length + 1); _ <= f; _++) {
                var p = (u - _) | 0;
                (c += ((s = (r = 0 | e.words[p]) * (a = 0 | t.words[_]) + d) / 67108864) | 0), (d = 67108863 & s);
            }
            (n.words[u] = 0 | d), (l = 0 | c);
        }
        return 0 !== l ? (n.words[u] = 0 | l) : n.length--, n.strip();
    }
    (a.prototype.toString = function (e, t) {
        if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
            n = '';
            for (var n, r = 0, a = 0, s = 0; s < this.length; s++) {
                var o = this.words[s],
                    l = (((o << r) | a) & 16777215).toString(16);
                (n = 0 != (a = (o >>> (24 - r)) & 16777215) || s !== this.length - 1 ? c[6 - l.length] + l + n : l + n), (r += 2) >= 26 && ((r -= 26), s--);
            }
            for (0 !== a && (n = a.toString(16) + n); n.length % t != 0; ) n = '0' + n;
            return 0 !== this.negative && (n = '-' + n), n;
        }
        if (e === (0 | e) && e >= 2 && e <= 36) {
            var u = d[e],
                _ = f[e];
            n = '';
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
                var h = p.modn(_).toString(e);
                n = (p = p.idivn(_)).isZero() ? h + n : c[u - h.length] + h + n;
            }
            for (this.isZero() && (n = '0' + n); n.length % t != 0; ) n = '0' + n;
            return 0 !== this.negative && (n = '-' + n), n;
        }
        i(!1, 'Base should be between 2 and 36');
    }),
        (a.prototype.toNumber = function () {
            var e = this.words[0];
            return 2 === this.length ? (e += 67108864 * this.words[1]) : 3 === this.length && 1 === this.words[2] ? (e += 4503599627370496 + 67108864 * this.words[1]) : this.length > 2 && i(!1, 'Number can only safely store up to 53 bits'), 0 !== this.negative ? -e : e;
        }),
        (a.prototype.toJSON = function () {
            return this.toString(16);
        }),
        (a.prototype.toBuffer = function (e, t) {
            return i(void 0 !== u), this.toArrayLike(u, e, t);
        }),
        (a.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
        }),
        (a.prototype.toArrayLike = function (e, t, n) {
            var r,
                a,
                s = this.byteLength(),
                o = n || Math.max(1, s);
            i(s <= o, 'byte array longer than desired length'), i(o > 0, 'Requested array length <= 0'), this.strip();
            var l = 'le' === t,
                u = new e(o),
                c = this.clone();
            if (l) {
                for (a = 0; !c.isZero(); a++) (r = c.andln(255)), c.iushrn(8), (u[a] = r);
                for (; a < o; a++) u[a] = 0;
            } else {
                for (a = 0; a < o - s; a++) u[a] = 0;
                for (a = 0; !c.isZero(); a++) (r = c.andln(255)), c.iushrn(8), (u[o - a - 1] = r);
            }
            return u;
        }),
        Math.clz32
            ? (a.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
              })
            : (a.prototype._countBits = function (e) {
                  var t = e,
                      n = 0;
                  return t >= 4096 && ((n += 13), (t >>>= 13)), t >= 64 && ((n += 7), (t >>>= 7)), t >= 8 && ((n += 4), (t >>>= 4)), t >= 2 && ((n += 2), (t >>>= 2)), n + t;
              }),
        (a.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
                n = 0;
            return (8191 & t) == 0 && ((n += 13), (t >>>= 13)), (127 & t) == 0 && ((n += 7), (t >>>= 7)), (15 & t) == 0 && ((n += 4), (t >>>= 4)), (3 & t) == 0 && ((n += 2), (t >>>= 2)), (1 & t) == 0 && n++, n;
        }),
        (a.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
                t = this._countBits(e);
            return (this.length - 1) * 26 + t;
        }),
        (a.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
                var n = this._zeroBits(this.words[t]);
                if (((e += n), 26 !== n)) break;
            }
            return e;
        }),
        (a.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
        }),
        (a.prototype.toTwos = function (e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
        }),
        (a.prototype.fromTwos = function (e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
        }),
        (a.prototype.isNeg = function () {
            return 0 !== this.negative;
        }),
        (a.prototype.neg = function () {
            return this.clone().ineg();
        }),
        (a.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
        }),
        (a.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
            return this.strip();
        }),
        (a.prototype.ior = function (e) {
            return i((this.negative | e.negative) == 0), this.iuor(e);
        }),
        (a.prototype.or = function (e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
        }),
        (a.prototype.uor = function (e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
        }),
        (a.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] & e.words[n];
            return (this.length = t.length), this.strip();
        }),
        (a.prototype.iand = function (e) {
            return i((this.negative | e.negative) == 0), this.iuand(e);
        }),
        (a.prototype.and = function (e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
        }),
        (a.prototype.uand = function (e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
        }),
        (a.prototype.iuxor = function (e) {
            this.length > e.length ? ((t = this), (n = e)) : ((t = e), (n = this));
            for (var t, n, i = 0; i < n.length; i++) this.words[i] = t.words[i] ^ n.words[i];
            if (this !== t) for (; i < t.length; i++) this.words[i] = t.words[i];
            return (this.length = t.length), this.strip();
        }),
        (a.prototype.ixor = function (e) {
            return i((this.negative | e.negative) == 0), this.iuxor(e);
        }),
        (a.prototype.xor = function (e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
        }),
        (a.prototype.uxor = function (e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
        }),
        (a.prototype.inotn = function (e) {
            i('number' == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
                n = e % 26;
            this._expand(t), n > 0 && t--;
            for (var r = 0; r < t; r++) this.words[r] = 67108863 & ~this.words[r];
            return n > 0 && (this.words[r] = ~this.words[r] & (67108863 >> (26 - n))), this.strip();
        }),
        (a.prototype.notn = function (e) {
            return this.clone().inotn(e);
        }),
        (a.prototype.setn = function (e, t) {
            i('number' == typeof e && e >= 0);
            var n = (e / 26) | 0,
                r = e % 26;
            return this._expand(n + 1), t ? (this.words[n] = this.words[n] | (1 << r)) : (this.words[n] = this.words[n] & ~(1 << r)), this.strip();
        }),
        (a.prototype.iadd = function (e) {
            if (0 !== this.negative && 0 === e.negative) return (this.negative = 0), (t = this.isub(e)), (this.negative ^= 1), this._normSign();
            if (0 === this.negative && 0 !== e.negative) return (e.negative = 0), (t = this.isub(e)), (e.negative = 1), t._normSign();
            this.length > e.length ? ((n = this), (i = e)) : ((n = e), (i = this));
            for (var t, n, i, r = 0, a = 0; a < i.length; a++) (t = (0 | n.words[a]) + (0 | i.words[a]) + r), (this.words[a] = 67108863 & t), (r = t >>> 26);
            for (; 0 !== r && a < n.length; a++) (t = (0 | n.words[a]) + r), (this.words[a] = 67108863 & t), (r = t >>> 26);
            if (((this.length = n.length), 0 !== r)) (this.words[this.length] = r), this.length++;
            else if (n !== this) for (; a < n.length; a++) this.words[a] = n.words[a];
            return this;
        }),
        (a.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t) : 0 === e.negative && 0 !== this.negative ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
        }),
        (a.prototype.isub = function (e) {
            if (0 !== e.negative) {
                e.negative = 0;
                var t,
                    n,
                    i = this.iadd(e);
                return (e.negative = 1), i._normSign();
            }
            if (0 !== this.negative) return (this.negative = 0), this.iadd(e), (this.negative = 1), this._normSign();
            var r = this.cmp(e);
            if (0 === r) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
            r > 0 ? ((t = this), (n = e)) : ((t = e), (n = this));
            for (var a = 0, s = 0; s < n.length; s++) (a = (i = (0 | t.words[s]) - (0 | n.words[s]) + a) >> 26), (this.words[s] = 67108863 & i);
            for (; 0 !== a && s < t.length; s++) (a = (i = (0 | t.words[s]) + a) >> 26), (this.words[s] = 67108863 & i);
            if (0 === a && s < t.length && t !== this) for (; s < t.length; s++) this.words[s] = t.words[s];
            return (this.length = Math.max(this.length, s)), t !== this && (this.negative = 1), this.strip();
        }),
        (a.prototype.sub = function (e) {
            return this.clone().isub(e);
        });
    var h = function (e, t, n) {
        var i,
            r,
            a,
            s = e.words,
            o = t.words,
            l = n.words,
            u = 0,
            c = 0 | s[0],
            d = 8191 & c,
            f = c >>> 13,
            _ = 0 | s[1],
            p = 8191 & _,
            h = _ >>> 13,
            m = 0 | s[2],
            g = 8191 & m,
            E = m >>> 13,
            v = 0 | s[3],
            y = 8191 & v,
            I = v >>> 13,
            T = 0 | s[4],
            b = 8191 & T,
            S = T >>> 13,
            A = 0 | s[5],
            N = 8191 & A,
            C = A >>> 13,
            R = 0 | s[6],
            O = 8191 & R,
            D = R >>> 13,
            L = 0 | s[7],
            x = 8191 & L,
            P = L >>> 13,
            w = 0 | s[8],
            M = 8191 & w,
            k = w >>> 13,
            U = 0 | s[9],
            G = 8191 & U,
            B = U >>> 13,
            Z = 0 | o[0],
            F = 8191 & Z,
            V = Z >>> 13,
            j = 0 | o[1],
            H = 8191 & j,
            Y = j >>> 13,
            W = 0 | o[2],
            K = 8191 & W,
            z = W >>> 13,
            q = 0 | o[3],
            Q = 8191 & q,
            X = q >>> 13,
            J = 0 | o[4],
            $ = 8191 & J,
            ee = J >>> 13,
            et = 0 | o[5],
            en = 8191 & et,
            ei = et >>> 13,
            er = 0 | o[6],
            ea = 8191 & er,
            es = er >>> 13,
            eo = 0 | o[7],
            el = 8191 & eo,
            eu = eo >>> 13,
            ec = 0 | o[8],
            ed = 8191 & ec,
            ef = ec >>> 13,
            e_ = 0 | o[9],
            ep = 8191 & e_,
            eh = e_ >>> 13;
        (n.negative = e.negative ^ t.negative), (n.length = 19), (i = Math.imul(d, F));
        var em = (((u + i) | 0) + ((8191 & (r = ((r = Math.imul(d, V)) + Math.imul(f, F)) | 0)) << 13)) | 0;
        (u = ((((a = Math.imul(f, V)) + (r >>> 13)) | 0) + (em >>> 26)) | 0), (em &= 67108863), (i = Math.imul(p, F)), (r = ((r = Math.imul(p, V)) + Math.imul(h, F)) | 0), (a = Math.imul(h, V)), (i = (i + Math.imul(d, H)) | 0);
        var eg = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, Y)) | 0) + Math.imul(f, H)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, Y)) | 0) + (r >>> 13)) | 0) + (eg >>> 26)) | 0), (eg &= 67108863), (i = Math.imul(g, F)), (r = ((r = Math.imul(g, V)) + Math.imul(E, F)) | 0), (a = Math.imul(E, V)), (i = (i + Math.imul(p, H)) | 0), (r = ((r = (r + Math.imul(p, Y)) | 0) + Math.imul(h, H)) | 0), (a = (a + Math.imul(h, Y)) | 0), (i = (i + Math.imul(d, K)) | 0);
        var eE = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, z)) | 0) + Math.imul(f, K)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, z)) | 0) + (r >>> 13)) | 0) + (eE >>> 26)) | 0), (eE &= 67108863), (i = Math.imul(y, F)), (r = ((r = Math.imul(y, V)) + Math.imul(I, F)) | 0), (a = Math.imul(I, V)), (i = (i + Math.imul(g, H)) | 0), (r = ((r = (r + Math.imul(g, Y)) | 0) + Math.imul(E, H)) | 0), (a = (a + Math.imul(E, Y)) | 0), (i = (i + Math.imul(p, K)) | 0), (r = ((r = (r + Math.imul(p, z)) | 0) + Math.imul(h, K)) | 0), (a = (a + Math.imul(h, z)) | 0), (i = (i + Math.imul(d, Q)) | 0);
        var ev = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, X)) | 0) + Math.imul(f, Q)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, X)) | 0) + (r >>> 13)) | 0) + (ev >>> 26)) | 0), (ev &= 67108863), (i = Math.imul(b, F)), (r = ((r = Math.imul(b, V)) + Math.imul(S, F)) | 0), (a = Math.imul(S, V)), (i = (i + Math.imul(y, H)) | 0), (r = ((r = (r + Math.imul(y, Y)) | 0) + Math.imul(I, H)) | 0), (a = (a + Math.imul(I, Y)) | 0), (i = (i + Math.imul(g, K)) | 0), (r = ((r = (r + Math.imul(g, z)) | 0) + Math.imul(E, K)) | 0), (a = (a + Math.imul(E, z)) | 0), (i = (i + Math.imul(p, Q)) | 0), (r = ((r = (r + Math.imul(p, X)) | 0) + Math.imul(h, Q)) | 0), (a = (a + Math.imul(h, X)) | 0), (i = (i + Math.imul(d, $)) | 0);
        var ey = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, ee)) | 0) + Math.imul(f, $)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, ee)) | 0) + (r >>> 13)) | 0) + (ey >>> 26)) | 0), (ey &= 67108863), (i = Math.imul(N, F)), (r = ((r = Math.imul(N, V)) + Math.imul(C, F)) | 0), (a = Math.imul(C, V)), (i = (i + Math.imul(b, H)) | 0), (r = ((r = (r + Math.imul(b, Y)) | 0) + Math.imul(S, H)) | 0), (a = (a + Math.imul(S, Y)) | 0), (i = (i + Math.imul(y, K)) | 0), (r = ((r = (r + Math.imul(y, z)) | 0) + Math.imul(I, K)) | 0), (a = (a + Math.imul(I, z)) | 0), (i = (i + Math.imul(g, Q)) | 0), (r = ((r = (r + Math.imul(g, X)) | 0) + Math.imul(E, Q)) | 0), (a = (a + Math.imul(E, X)) | 0), (i = (i + Math.imul(p, $)) | 0), (r = ((r = (r + Math.imul(p, ee)) | 0) + Math.imul(h, $)) | 0), (a = (a + Math.imul(h, ee)) | 0), (i = (i + Math.imul(d, en)) | 0);
        var eI = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, ei)) | 0) + Math.imul(f, en)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, ei)) | 0) + (r >>> 13)) | 0) + (eI >>> 26)) | 0), (eI &= 67108863), (i = Math.imul(O, F)), (r = ((r = Math.imul(O, V)) + Math.imul(D, F)) | 0), (a = Math.imul(D, V)), (i = (i + Math.imul(N, H)) | 0), (r = ((r = (r + Math.imul(N, Y)) | 0) + Math.imul(C, H)) | 0), (a = (a + Math.imul(C, Y)) | 0), (i = (i + Math.imul(b, K)) | 0), (r = ((r = (r + Math.imul(b, z)) | 0) + Math.imul(S, K)) | 0), (a = (a + Math.imul(S, z)) | 0), (i = (i + Math.imul(y, Q)) | 0), (r = ((r = (r + Math.imul(y, X)) | 0) + Math.imul(I, Q)) | 0), (a = (a + Math.imul(I, X)) | 0), (i = (i + Math.imul(g, $)) | 0), (r = ((r = (r + Math.imul(g, ee)) | 0) + Math.imul(E, $)) | 0), (a = (a + Math.imul(E, ee)) | 0), (i = (i + Math.imul(p, en)) | 0), (r = ((r = (r + Math.imul(p, ei)) | 0) + Math.imul(h, en)) | 0), (a = (a + Math.imul(h, ei)) | 0), (i = (i + Math.imul(d, ea)) | 0);
        var eT = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, es)) | 0) + Math.imul(f, ea)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, es)) | 0) + (r >>> 13)) | 0) + (eT >>> 26)) | 0), (eT &= 67108863), (i = Math.imul(x, F)), (r = ((r = Math.imul(x, V)) + Math.imul(P, F)) | 0), (a = Math.imul(P, V)), (i = (i + Math.imul(O, H)) | 0), (r = ((r = (r + Math.imul(O, Y)) | 0) + Math.imul(D, H)) | 0), (a = (a + Math.imul(D, Y)) | 0), (i = (i + Math.imul(N, K)) | 0), (r = ((r = (r + Math.imul(N, z)) | 0) + Math.imul(C, K)) | 0), (a = (a + Math.imul(C, z)) | 0), (i = (i + Math.imul(b, Q)) | 0), (r = ((r = (r + Math.imul(b, X)) | 0) + Math.imul(S, Q)) | 0), (a = (a + Math.imul(S, X)) | 0), (i = (i + Math.imul(y, $)) | 0), (r = ((r = (r + Math.imul(y, ee)) | 0) + Math.imul(I, $)) | 0), (a = (a + Math.imul(I, ee)) | 0), (i = (i + Math.imul(g, en)) | 0), (r = ((r = (r + Math.imul(g, ei)) | 0) + Math.imul(E, en)) | 0), (a = (a + Math.imul(E, ei)) | 0), (i = (i + Math.imul(p, ea)) | 0), (r = ((r = (r + Math.imul(p, es)) | 0) + Math.imul(h, ea)) | 0), (a = (a + Math.imul(h, es)) | 0), (i = (i + Math.imul(d, el)) | 0);
        var eb = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, eu)) | 0) + Math.imul(f, el)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, eu)) | 0) + (r >>> 13)) | 0) + (eb >>> 26)) | 0), (eb &= 67108863), (i = Math.imul(M, F)), (r = ((r = Math.imul(M, V)) + Math.imul(k, F)) | 0), (a = Math.imul(k, V)), (i = (i + Math.imul(x, H)) | 0), (r = ((r = (r + Math.imul(x, Y)) | 0) + Math.imul(P, H)) | 0), (a = (a + Math.imul(P, Y)) | 0), (i = (i + Math.imul(O, K)) | 0), (r = ((r = (r + Math.imul(O, z)) | 0) + Math.imul(D, K)) | 0), (a = (a + Math.imul(D, z)) | 0), (i = (i + Math.imul(N, Q)) | 0), (r = ((r = (r + Math.imul(N, X)) | 0) + Math.imul(C, Q)) | 0), (a = (a + Math.imul(C, X)) | 0), (i = (i + Math.imul(b, $)) | 0), (r = ((r = (r + Math.imul(b, ee)) | 0) + Math.imul(S, $)) | 0), (a = (a + Math.imul(S, ee)) | 0), (i = (i + Math.imul(y, en)) | 0), (r = ((r = (r + Math.imul(y, ei)) | 0) + Math.imul(I, en)) | 0), (a = (a + Math.imul(I, ei)) | 0), (i = (i + Math.imul(g, ea)) | 0), (r = ((r = (r + Math.imul(g, es)) | 0) + Math.imul(E, ea)) | 0), (a = (a + Math.imul(E, es)) | 0), (i = (i + Math.imul(p, el)) | 0), (r = ((r = (r + Math.imul(p, eu)) | 0) + Math.imul(h, el)) | 0), (a = (a + Math.imul(h, eu)) | 0), (i = (i + Math.imul(d, ed)) | 0);
        var eS = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, ef)) | 0) + Math.imul(f, ed)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, ef)) | 0) + (r >>> 13)) | 0) + (eS >>> 26)) | 0), (eS &= 67108863), (i = Math.imul(G, F)), (r = ((r = Math.imul(G, V)) + Math.imul(B, F)) | 0), (a = Math.imul(B, V)), (i = (i + Math.imul(M, H)) | 0), (r = ((r = (r + Math.imul(M, Y)) | 0) + Math.imul(k, H)) | 0), (a = (a + Math.imul(k, Y)) | 0), (i = (i + Math.imul(x, K)) | 0), (r = ((r = (r + Math.imul(x, z)) | 0) + Math.imul(P, K)) | 0), (a = (a + Math.imul(P, z)) | 0), (i = (i + Math.imul(O, Q)) | 0), (r = ((r = (r + Math.imul(O, X)) | 0) + Math.imul(D, Q)) | 0), (a = (a + Math.imul(D, X)) | 0), (i = (i + Math.imul(N, $)) | 0), (r = ((r = (r + Math.imul(N, ee)) | 0) + Math.imul(C, $)) | 0), (a = (a + Math.imul(C, ee)) | 0), (i = (i + Math.imul(b, en)) | 0), (r = ((r = (r + Math.imul(b, ei)) | 0) + Math.imul(S, en)) | 0), (a = (a + Math.imul(S, ei)) | 0), (i = (i + Math.imul(y, ea)) | 0), (r = ((r = (r + Math.imul(y, es)) | 0) + Math.imul(I, ea)) | 0), (a = (a + Math.imul(I, es)) | 0), (i = (i + Math.imul(g, el)) | 0), (r = ((r = (r + Math.imul(g, eu)) | 0) + Math.imul(E, el)) | 0), (a = (a + Math.imul(E, eu)) | 0), (i = (i + Math.imul(p, ed)) | 0), (r = ((r = (r + Math.imul(p, ef)) | 0) + Math.imul(h, ed)) | 0), (a = (a + Math.imul(h, ef)) | 0), (i = (i + Math.imul(d, ep)) | 0);
        var eA = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(d, eh)) | 0) + Math.imul(f, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(f, eh)) | 0) + (r >>> 13)) | 0) + (eA >>> 26)) | 0), (eA &= 67108863), (i = Math.imul(G, H)), (r = ((r = Math.imul(G, Y)) + Math.imul(B, H)) | 0), (a = Math.imul(B, Y)), (i = (i + Math.imul(M, K)) | 0), (r = ((r = (r + Math.imul(M, z)) | 0) + Math.imul(k, K)) | 0), (a = (a + Math.imul(k, z)) | 0), (i = (i + Math.imul(x, Q)) | 0), (r = ((r = (r + Math.imul(x, X)) | 0) + Math.imul(P, Q)) | 0), (a = (a + Math.imul(P, X)) | 0), (i = (i + Math.imul(O, $)) | 0), (r = ((r = (r + Math.imul(O, ee)) | 0) + Math.imul(D, $)) | 0), (a = (a + Math.imul(D, ee)) | 0), (i = (i + Math.imul(N, en)) | 0), (r = ((r = (r + Math.imul(N, ei)) | 0) + Math.imul(C, en)) | 0), (a = (a + Math.imul(C, ei)) | 0), (i = (i + Math.imul(b, ea)) | 0), (r = ((r = (r + Math.imul(b, es)) | 0) + Math.imul(S, ea)) | 0), (a = (a + Math.imul(S, es)) | 0), (i = (i + Math.imul(y, el)) | 0), (r = ((r = (r + Math.imul(y, eu)) | 0) + Math.imul(I, el)) | 0), (a = (a + Math.imul(I, eu)) | 0), (i = (i + Math.imul(g, ed)) | 0), (r = ((r = (r + Math.imul(g, ef)) | 0) + Math.imul(E, ed)) | 0), (a = (a + Math.imul(E, ef)) | 0), (i = (i + Math.imul(p, ep)) | 0);
        var eN = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(p, eh)) | 0) + Math.imul(h, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(h, eh)) | 0) + (r >>> 13)) | 0) + (eN >>> 26)) | 0), (eN &= 67108863), (i = Math.imul(G, K)), (r = ((r = Math.imul(G, z)) + Math.imul(B, K)) | 0), (a = Math.imul(B, z)), (i = (i + Math.imul(M, Q)) | 0), (r = ((r = (r + Math.imul(M, X)) | 0) + Math.imul(k, Q)) | 0), (a = (a + Math.imul(k, X)) | 0), (i = (i + Math.imul(x, $)) | 0), (r = ((r = (r + Math.imul(x, ee)) | 0) + Math.imul(P, $)) | 0), (a = (a + Math.imul(P, ee)) | 0), (i = (i + Math.imul(O, en)) | 0), (r = ((r = (r + Math.imul(O, ei)) | 0) + Math.imul(D, en)) | 0), (a = (a + Math.imul(D, ei)) | 0), (i = (i + Math.imul(N, ea)) | 0), (r = ((r = (r + Math.imul(N, es)) | 0) + Math.imul(C, ea)) | 0), (a = (a + Math.imul(C, es)) | 0), (i = (i + Math.imul(b, el)) | 0), (r = ((r = (r + Math.imul(b, eu)) | 0) + Math.imul(S, el)) | 0), (a = (a + Math.imul(S, eu)) | 0), (i = (i + Math.imul(y, ed)) | 0), (r = ((r = (r + Math.imul(y, ef)) | 0) + Math.imul(I, ed)) | 0), (a = (a + Math.imul(I, ef)) | 0), (i = (i + Math.imul(g, ep)) | 0);
        var eC = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(g, eh)) | 0) + Math.imul(E, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(E, eh)) | 0) + (r >>> 13)) | 0) + (eC >>> 26)) | 0), (eC &= 67108863), (i = Math.imul(G, Q)), (r = ((r = Math.imul(G, X)) + Math.imul(B, Q)) | 0), (a = Math.imul(B, X)), (i = (i + Math.imul(M, $)) | 0), (r = ((r = (r + Math.imul(M, ee)) | 0) + Math.imul(k, $)) | 0), (a = (a + Math.imul(k, ee)) | 0), (i = (i + Math.imul(x, en)) | 0), (r = ((r = (r + Math.imul(x, ei)) | 0) + Math.imul(P, en)) | 0), (a = (a + Math.imul(P, ei)) | 0), (i = (i + Math.imul(O, ea)) | 0), (r = ((r = (r + Math.imul(O, es)) | 0) + Math.imul(D, ea)) | 0), (a = (a + Math.imul(D, es)) | 0), (i = (i + Math.imul(N, el)) | 0), (r = ((r = (r + Math.imul(N, eu)) | 0) + Math.imul(C, el)) | 0), (a = (a + Math.imul(C, eu)) | 0), (i = (i + Math.imul(b, ed)) | 0), (r = ((r = (r + Math.imul(b, ef)) | 0) + Math.imul(S, ed)) | 0), (a = (a + Math.imul(S, ef)) | 0), (i = (i + Math.imul(y, ep)) | 0);
        var eR = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(y, eh)) | 0) + Math.imul(I, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(I, eh)) | 0) + (r >>> 13)) | 0) + (eR >>> 26)) | 0), (eR &= 67108863), (i = Math.imul(G, $)), (r = ((r = Math.imul(G, ee)) + Math.imul(B, $)) | 0), (a = Math.imul(B, ee)), (i = (i + Math.imul(M, en)) | 0), (r = ((r = (r + Math.imul(M, ei)) | 0) + Math.imul(k, en)) | 0), (a = (a + Math.imul(k, ei)) | 0), (i = (i + Math.imul(x, ea)) | 0), (r = ((r = (r + Math.imul(x, es)) | 0) + Math.imul(P, ea)) | 0), (a = (a + Math.imul(P, es)) | 0), (i = (i + Math.imul(O, el)) | 0), (r = ((r = (r + Math.imul(O, eu)) | 0) + Math.imul(D, el)) | 0), (a = (a + Math.imul(D, eu)) | 0), (i = (i + Math.imul(N, ed)) | 0), (r = ((r = (r + Math.imul(N, ef)) | 0) + Math.imul(C, ed)) | 0), (a = (a + Math.imul(C, ef)) | 0), (i = (i + Math.imul(b, ep)) | 0);
        var eO = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(b, eh)) | 0) + Math.imul(S, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(S, eh)) | 0) + (r >>> 13)) | 0) + (eO >>> 26)) | 0), (eO &= 67108863), (i = Math.imul(G, en)), (r = ((r = Math.imul(G, ei)) + Math.imul(B, en)) | 0), (a = Math.imul(B, ei)), (i = (i + Math.imul(M, ea)) | 0), (r = ((r = (r + Math.imul(M, es)) | 0) + Math.imul(k, ea)) | 0), (a = (a + Math.imul(k, es)) | 0), (i = (i + Math.imul(x, el)) | 0), (r = ((r = (r + Math.imul(x, eu)) | 0) + Math.imul(P, el)) | 0), (a = (a + Math.imul(P, eu)) | 0), (i = (i + Math.imul(O, ed)) | 0), (r = ((r = (r + Math.imul(O, ef)) | 0) + Math.imul(D, ed)) | 0), (a = (a + Math.imul(D, ef)) | 0), (i = (i + Math.imul(N, ep)) | 0);
        var eD = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(N, eh)) | 0) + Math.imul(C, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(C, eh)) | 0) + (r >>> 13)) | 0) + (eD >>> 26)) | 0), (eD &= 67108863), (i = Math.imul(G, ea)), (r = ((r = Math.imul(G, es)) + Math.imul(B, ea)) | 0), (a = Math.imul(B, es)), (i = (i + Math.imul(M, el)) | 0), (r = ((r = (r + Math.imul(M, eu)) | 0) + Math.imul(k, el)) | 0), (a = (a + Math.imul(k, eu)) | 0), (i = (i + Math.imul(x, ed)) | 0), (r = ((r = (r + Math.imul(x, ef)) | 0) + Math.imul(P, ed)) | 0), (a = (a + Math.imul(P, ef)) | 0), (i = (i + Math.imul(O, ep)) | 0);
        var eL = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(O, eh)) | 0) + Math.imul(D, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(D, eh)) | 0) + (r >>> 13)) | 0) + (eL >>> 26)) | 0), (eL &= 67108863), (i = Math.imul(G, el)), (r = ((r = Math.imul(G, eu)) + Math.imul(B, el)) | 0), (a = Math.imul(B, eu)), (i = (i + Math.imul(M, ed)) | 0), (r = ((r = (r + Math.imul(M, ef)) | 0) + Math.imul(k, ed)) | 0), (a = (a + Math.imul(k, ef)) | 0), (i = (i + Math.imul(x, ep)) | 0);
        var ex = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(x, eh)) | 0) + Math.imul(P, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(P, eh)) | 0) + (r >>> 13)) | 0) + (ex >>> 26)) | 0), (ex &= 67108863), (i = Math.imul(G, ed)), (r = ((r = Math.imul(G, ef)) + Math.imul(B, ed)) | 0), (a = Math.imul(B, ef)), (i = (i + Math.imul(M, ep)) | 0);
        var eP = (((u + i) | 0) + ((8191 & (r = ((r = (r + Math.imul(M, eh)) | 0) + Math.imul(k, ep)) | 0)) << 13)) | 0;
        (u = ((((a = (a + Math.imul(k, eh)) | 0) + (r >>> 13)) | 0) + (eP >>> 26)) | 0), (eP &= 67108863), (i = Math.imul(G, ep));
        var ew = (((u + i) | 0) + ((8191 & (r = ((r = Math.imul(G, eh)) + Math.imul(B, ep)) | 0)) << 13)) | 0;
        return (u = ((((a = Math.imul(B, eh)) + (r >>> 13)) | 0) + (ew >>> 26)) | 0), (ew &= 67108863), (l[0] = em), (l[1] = eg), (l[2] = eE), (l[3] = ev), (l[4] = ey), (l[5] = eI), (l[6] = eT), (l[7] = eb), (l[8] = eS), (l[9] = eA), (l[10] = eN), (l[11] = eC), (l[12] = eR), (l[13] = eO), (l[14] = eD), (l[15] = eL), (l[16] = ex), (l[17] = eP), (l[18] = ew), 0 !== u && ((l[19] = u), n.length++), n;
    };
    function m(e, t, n) {
        (n.negative = t.negative ^ e.negative), (n.length = e.length + t.length);
        for (var i = 0, r = 0, a = 0; a < n.length - 1; a++) {
            var s = r;
            r = 0;
            for (var o = 67108863 & i, l = Math.min(a, t.length - 1), u = Math.max(0, a - e.length + 1); u <= l; u++) {
                var c = a - u,
                    d = (0 | e.words[c]) * (0 | t.words[u]),
                    f = 67108863 & d;
                (s = (s + ((d / 67108864) | 0)) | 0), (o = 67108863 & (f = (f + o) | 0)), (r += (s = (s + (f >>> 26)) | 0) >>> 26), (s &= 67108863);
            }
            (n.words[a] = o), (i = s), (s = r);
        }
        return 0 !== i ? (n.words[a] = i) : n.length--, n.strip();
    }
    function g(e, t, n) {
        return new E().mulp(e, t, n);
    }
    function E(e, t) {
        (this.x = e), (this.y = t);
    }
    Math.imul || (h = p),
        (a.prototype.mulTo = function (e, t) {
            var n,
                i = this.length + e.length;
            return 10 === this.length && 10 === e.length ? h(this, e, t) : i < 63 ? p(this, e, t) : i < 1024 ? m(this, e, t) : g(this, e, t);
        }),
        (E.prototype.makeRBT = function (e) {
            for (var t = Array(e), n = a.prototype._countBits(e) - 1, i = 0; i < e; i++) t[i] = this.revBin(i, n, e);
            return t;
        }),
        (E.prototype.revBin = function (e, t, n) {
            if (0 === e || e === n - 1) return e;
            for (var i = 0, r = 0; r < t; r++) (i |= (1 & e) << (t - r - 1)), (e >>= 1);
            return i;
        }),
        (E.prototype.permute = function (e, t, n, i, r, a) {
            for (var s = 0; s < a; s++) (i[s] = t[e[s]]), (r[s] = n[e[s]]);
        }),
        (E.prototype.transform = function (e, t, n, i, r, a) {
            this.permute(a, e, t, n, i, r);
            for (var s = 1; s < r; s <<= 1)
                for (var o = s << 1, l = Math.cos((2 * Math.PI) / o), u = Math.sin((2 * Math.PI) / o), c = 0; c < r; c += o)
                    for (var d = l, f = u, _ = 0; _ < s; _++) {
                        var p = n[c + _],
                            h = i[c + _],
                            m = n[c + _ + s],
                            g = i[c + _ + s],
                            E = d * m - f * g;
                        (g = d * g + f * m), (m = E), (n[c + _] = p + m), (i[c + _] = h + g), (n[c + _ + s] = p - m), (i[c + _ + s] = h - g), _ !== o && ((E = l * d - u * f), (f = l * f + u * d), (d = E));
                    }
        }),
        (E.prototype.guessLen13b = function (e, t) {
            var n = 1 | Math.max(t, e),
                i = 1 & n,
                r = 0;
            for (n = (n / 2) | 0; n; n >>>= 1) r++;
            return 1 << (r + 1 + i);
        }),
        (E.prototype.conjugate = function (e, t, n) {
            if (!(n <= 1))
                for (var i = 0; i < n / 2; i++) {
                    var r = e[i];
                    (e[i] = e[n - i - 1]), (e[n - i - 1] = r), (r = t[i]), (t[i] = -t[n - i - 1]), (t[n - i - 1] = -r);
                }
        }),
        (E.prototype.normalize13b = function (e, t) {
            for (var n = 0, i = 0; i < t / 2; i++) {
                var r = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + n;
                (e[i] = 67108863 & r), (n = r < 67108864 ? 0 : (r / 67108864) | 0);
            }
            return e;
        }),
        (E.prototype.convert13b = function (e, t, n, r) {
            for (var a = 0, s = 0; s < t; s++) (a += 0 | e[s]), (n[2 * s] = 8191 & a), (a >>>= 13), (n[2 * s + 1] = 8191 & a), (a >>>= 13);
            for (s = 2 * t; s < r; ++s) n[s] = 0;
            i(0 === a), i((-8192 & a) == 0);
        }),
        (E.prototype.stub = function (e) {
            for (var t = Array(e), n = 0; n < e; n++) t[n] = 0;
            return t;
        }),
        (E.prototype.mulp = function (e, t, n) {
            var i = 2 * this.guessLen13b(e.length, t.length),
                r = this.makeRBT(i),
                a = this.stub(i),
                s = Array(i),
                o = Array(i),
                l = Array(i),
                u = Array(i),
                c = Array(i),
                d = Array(i),
                f = n.words;
            (f.length = i), this.convert13b(e.words, e.length, s, i), this.convert13b(t.words, t.length, u, i), this.transform(s, a, o, l, i, r), this.transform(u, a, c, d, i, r);
            for (var _ = 0; _ < i; _++) {
                var p = o[_] * c[_] - l[_] * d[_];
                (l[_] = o[_] * d[_] + l[_] * c[_]), (o[_] = p);
            }
            return this.conjugate(o, l, i), this.transform(o, l, f, a, i, r), this.conjugate(f, a, i), this.normalize13b(f, i), (n.negative = e.negative ^ t.negative), (n.length = e.length + t.length), n.strip();
        }),
        (a.prototype.mul = function (e) {
            var t = new a(null);
            return (t.words = Array(this.length + e.length)), this.mulTo(e, t);
        }),
        (a.prototype.mulf = function (e) {
            var t = new a(null);
            return (t.words = Array(this.length + e.length)), g(this, e, t);
        }),
        (a.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
        }),
        (a.prototype.imuln = function (e) {
            i('number' == typeof e), i(e < 67108864);
            for (var t = 0, n = 0; n < this.length; n++) {
                var r = (0 | this.words[n]) * e,
                    a = (67108863 & r) + (67108863 & t);
                (t >>= 26), (t += ((r / 67108864) | 0) + (a >>> 26)), (this.words[n] = 67108863 & a);
            }
            return 0 !== t && ((this.words[n] = t), this.length++), this;
        }),
        (a.prototype.muln = function (e) {
            return this.clone().imuln(e);
        }),
        (a.prototype.sqr = function () {
            return this.mul(this);
        }),
        (a.prototype.isqr = function () {
            return this.imul(this.clone());
        }),
        (a.prototype.pow = function (e) {
            var t = _(e);
            if (0 === t.length) return new a(1);
            for (var n = this, i = 0; i < t.length && 0 === t[i]; i++, n = n.sqr());
            if (++i < t.length) for (var r = n.sqr(); i < t.length; i++, r = r.sqr()) 0 !== t[i] && (n = n.mul(r));
            return n;
        }),
        (a.prototype.iushln = function (e) {
            i('number' == typeof e && e >= 0);
            var t,
                n = e % 26,
                r = (e - n) / 26,
                a = (67108863 >>> (26 - n)) << (26 - n);
            if (0 !== n) {
                var s = 0;
                for (t = 0; t < this.length; t++) {
                    var o = this.words[t] & a,
                        l = ((0 | this.words[t]) - o) << n;
                    (this.words[t] = l | s), (s = o >>> (26 - n));
                }
                s && ((this.words[t] = s), this.length++);
            }
            if (0 !== r) {
                for (t = this.length - 1; t >= 0; t--) this.words[t + r] = this.words[t];
                for (t = 0; t < r; t++) this.words[t] = 0;
                this.length += r;
            }
            return this.strip();
        }),
        (a.prototype.ishln = function (e) {
            return i(0 === this.negative), this.iushln(e);
        }),
        (a.prototype.iushrn = function (e, t, n) {
            i('number' == typeof e && e >= 0), (r = t ? (t - (t % 26)) / 26 : 0);
            var r,
                a = e % 26,
                s = Math.min((e - a) / 26, this.length),
                o = 67108863 ^ ((67108863 >>> a) << a),
                l = n;
            if (((r -= s), (r = Math.max(0, r)), l)) {
                for (var u = 0; u < s; u++) l.words[u] = this.words[u];
                l.length = s;
            }
            if (0 === s);
            else if (this.length > s) for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
            else (this.words[0] = 0), (this.length = 1);
            var c = 0;
            for (u = this.length - 1; u >= 0 && (0 !== c || u >= r); u--) {
                var d = 0 | this.words[u];
                (this.words[u] = (c << (26 - a)) | (d >>> a)), (c = d & o);
            }
            return l && 0 !== c && (l.words[l.length++] = c), 0 === this.length && ((this.words[0] = 0), (this.length = 1)), this.strip();
        }),
        (a.prototype.ishrn = function (e, t, n) {
            return i(0 === this.negative), this.iushrn(e, t, n);
        }),
        (a.prototype.shln = function (e) {
            return this.clone().ishln(e);
        }),
        (a.prototype.ushln = function (e) {
            return this.clone().iushln(e);
        }),
        (a.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
        }),
        (a.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
        }),
        (a.prototype.testn = function (e) {
            i('number' == typeof e && e >= 0);
            var t = e % 26,
                n = (e - t) / 26,
                r = 1 << t;
            return !(this.length <= n) && !!(this.words[n] & r);
        }),
        (a.prototype.imaskn = function (e) {
            i('number' == typeof e && e >= 0);
            var t = e % 26,
                n = (e - t) / 26;
            if ((i(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= n)) return this;
            if ((0 !== t && n++, (this.length = Math.min(n, this.length)), 0 !== t)) {
                var r = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= r;
            }
            return this.strip();
        }),
        (a.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
        }),
        (a.prototype.iaddn = function (e) {
            return (i('number' == typeof e), i(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e ? ((this.words[0] = e - (0 | this.words[0])), (this.negative = 0)) : ((this.negative = 0), this.isubn(e), (this.negative = 1)), this) : this._iaddn(e);
        }),
        (a.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) (this.words[t] -= 67108864), t === this.length - 1 ? (this.words[t + 1] = 1) : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
        }),
        (a.prototype.isubn = function (e) {
            if ((i('number' == typeof e), i(e < 67108864), e < 0)) return this.iaddn(-e);
            if (0 !== this.negative) return (this.negative = 0), this.iaddn(e), (this.negative = 1), this;
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1);
            else for (var t = 0; t < this.length && this.words[t] < 0; t++) (this.words[t] += 67108864), (this.words[t + 1] -= 1);
            return this.strip();
        }),
        (a.prototype.addn = function (e) {
            return this.clone().iaddn(e);
        }),
        (a.prototype.subn = function (e) {
            return this.clone().isubn(e);
        }),
        (a.prototype.iabs = function () {
            return (this.negative = 0), this;
        }),
        (a.prototype.abs = function () {
            return this.clone().iabs();
        }),
        (a.prototype._ishlnsubmul = function (e, t, n) {
            var r,
                a,
                s = e.length + n;
            this._expand(s);
            var o = 0;
            for (r = 0; r < e.length; r++) {
                a = (0 | this.words[r + n]) + o;
                var l = (0 | e.words[r]) * t;
                (a -= 67108863 & l), (o = (a >> 26) - ((l / 67108864) | 0)), (this.words[r + n] = 67108863 & a);
            }
            for (; r < this.length - n; r++) (o = (a = (0 | this.words[r + n]) + o) >> 26), (this.words[r + n] = 67108863 & a);
            if (0 === o) return this.strip();
            for (i(-1 === o), o = 0, r = 0; r < this.length; r++) (o = (a = -(0 | this.words[r]) + o) >> 26), (this.words[r] = 67108863 & a);
            return (this.negative = 1), this.strip();
        }),
        (a.prototype._wordDiv = function (e, t) {
            var n,
                i = this.length - e.length,
                r = this.clone(),
                s = e,
                o = 0 | s.words[s.length - 1];
            0 != (i = 26 - this._countBits(o)) && ((s = s.ushln(i)), r.iushln(i), (o = 0 | s.words[s.length - 1]));
            var l = r.length - s.length;
            if ('mod' !== t) {
                ((n = new a(null)).length = l + 1), (n.words = Array(n.length));
                for (var u = 0; u < n.length; u++) n.words[u] = 0;
            }
            var c = r.clone()._ishlnsubmul(s, 1, l);
            0 === c.negative && ((r = c), n && (n.words[l] = 1));
            for (var d = l - 1; d >= 0; d--) {
                var f = (0 | r.words[s.length + d]) * 67108864 + (0 | r.words[s.length + d - 1]);
                for (f = Math.min((f / o) | 0, 67108863), r._ishlnsubmul(s, f, d); 0 !== r.negative; ) f--, (r.negative = 0), r._ishlnsubmul(s, 1, d), r.isZero() || (r.negative ^= 1);
                n && (n.words[d] = f);
            }
            return (
                n && n.strip(),
                r.strip(),
                'div' !== t && 0 !== i && r.iushrn(i),
                {
                    div: n || null,
                    mod: r
                }
            );
        }),
        (a.prototype.divmod = function (e, t, n) {
            var r, s, o;
            return (i(!e.isZero()), this.isZero())
                ? {
                      div: new a(0),
                      mod: new a(0)
                  }
                : 0 !== this.negative && 0 === e.negative
                  ? ((o = this.neg().divmod(e, t)),
                    'mod' !== t && (r = o.div.neg()),
                    'div' !== t && ((s = o.mod.neg()), n && 0 !== s.negative && s.iadd(e)),
                    {
                        div: r,
                        mod: s
                    })
                  : 0 === this.negative && 0 !== e.negative
                    ? ((o = this.divmod(e.neg(), t)),
                      'mod' !== t && (r = o.div.neg()),
                      {
                          div: r,
                          mod: o.mod
                      })
                    : (this.negative & e.negative) != 0
                      ? ((o = this.neg().divmod(e.neg(), t)),
                        'div' !== t && ((s = o.mod.neg()), n && 0 !== s.negative && s.isub(e)),
                        {
                            div: o.div,
                            mod: s
                        })
                      : e.length > this.length || 0 > this.cmp(e)
                        ? {
                              div: new a(0),
                              mod: this
                          }
                        : 1 === e.length
                          ? 'div' === t
                              ? {
                                    div: this.divn(e.words[0]),
                                    mod: null
                                }
                              : 'mod' === t
                                ? {
                                      div: null,
                                      mod: new a(this.modn(e.words[0]))
                                  }
                                : {
                                      div: this.divn(e.words[0]),
                                      mod: new a(this.modn(e.words[0]))
                                  }
                          : this._wordDiv(e, t);
        }),
        (a.prototype.div = function (e) {
            return this.divmod(e, 'div', !1).div;
        }),
        (a.prototype.mod = function (e) {
            return this.divmod(e, 'mod', !1).mod;
        }),
        (a.prototype.umod = function (e) {
            return this.divmod(e, 'mod', !0).mod;
        }),
        (a.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                i = e.ushrn(1),
                r = e.andln(1),
                a = n.cmp(i);
            return a < 0 || (1 === r && 0 === a) ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
        }),
        (a.prototype.modn = function (e) {
            i(e <= 67108863);
            for (var t = 67108864 % e, n = 0, r = this.length - 1; r >= 0; r--) n = (t * n + (0 | this.words[r])) % e;
            return n;
        }),
        (a.prototype.idivn = function (e) {
            i(e <= 67108863);
            for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var r = (0 | this.words[n]) + 67108864 * t;
                (this.words[n] = (r / e) | 0), (t = r % e);
            }
            return this.strip();
        }),
        (a.prototype.divn = function (e) {
            return this.clone().idivn(e);
        }),
        (a.prototype.egcd = function (e) {
            i(0 === e.negative), i(!e.isZero());
            var t = this,
                n = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (var r = new a(1), s = new a(0), o = new a(0), l = new a(1), u = 0; t.isEven() && n.isEven(); ) t.iushrn(1), n.iushrn(1), ++u;
            for (var c = n.clone(), d = t.clone(); !t.isZero(); ) {
                for (var f = 0, _ = 1; (t.words[0] & _) == 0 && f < 26; ++f, _ <<= 1);
                if (f > 0) for (t.iushrn(f); f-- > 0; ) (r.isOdd() || s.isOdd()) && (r.iadd(c), s.isub(d)), r.iushrn(1), s.iushrn(1);
                for (var p = 0, h = 1; (n.words[0] & h) == 0 && p < 26; ++p, h <<= 1);
                if (p > 0) for (n.iushrn(p); p-- > 0; ) (o.isOdd() || l.isOdd()) && (o.iadd(c), l.isub(d)), o.iushrn(1), l.iushrn(1);
                t.cmp(n) >= 0 ? (t.isub(n), r.isub(o), s.isub(l)) : (n.isub(t), o.isub(r), l.isub(s));
            }
            return {
                a: o,
                b: l,
                gcd: n.iushln(u)
            };
        }),
        (a.prototype._invmp = function (e) {
            i(0 === e.negative), i(!e.isZero());
            var t,
                n = this,
                r = e.clone();
            n = 0 !== n.negative ? n.umod(e) : n.clone();
            for (var s = new a(1), o = new a(0), l = r.clone(); n.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                for (var u = 0, c = 1; (n.words[0] & c) == 0 && u < 26; ++u, c <<= 1);
                if (u > 0) for (n.iushrn(u); u-- > 0; ) s.isOdd() && s.iadd(l), s.iushrn(1);
                for (var d = 0, f = 1; (r.words[0] & f) == 0 && d < 26; ++d, f <<= 1);
                if (d > 0) for (r.iushrn(d); d-- > 0; ) o.isOdd() && o.iadd(l), o.iushrn(1);
                n.cmp(r) >= 0 ? (n.isub(r), s.isub(o)) : (r.isub(n), o.isub(s));
            }
            return 0 > (t = 0 === n.cmpn(1) ? s : o).cmpn(0) && t.iadd(e), t;
        }),
        (a.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
                n = e.clone();
            (t.negative = 0), (n.negative = 0);
            for (var i = 0; t.isEven() && n.isEven(); i++) t.iushrn(1), n.iushrn(1);
            for (;;) {
                for (; t.isEven(); ) t.iushrn(1);
                for (; n.isEven(); ) n.iushrn(1);
                var r = t.cmp(n);
                if (r < 0) {
                    var a = t;
                    (t = n), (n = a);
                } else if (0 === r || 0 === n.cmpn(1)) break;
                t.isub(n);
            }
            return n.iushln(i);
        }),
        (a.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
        }),
        (a.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
        }),
        (a.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
        }),
        (a.prototype.andln = function (e) {
            return this.words[0] & e;
        }),
        (a.prototype.bincn = function (e) {
            i('number' == typeof e);
            var t = e % 26,
                n = (e - t) / 26,
                r = 1 << t;
            if (this.length <= n) return this._expand(n + 1), (this.words[n] |= r), this;
            for (var a = r, s = n; 0 !== a && s < this.length; s++) {
                var o = 0 | this.words[s];
                (o += a), (a = o >>> 26), (o &= 67108863), (this.words[s] = o);
            }
            return 0 !== a && ((this.words[s] = a), this.length++), this;
        }),
        (a.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
        }),
        (a.prototype.cmpn = function (e) {
            var t,
                n = e < 0;
            if (0 !== this.negative && !n) return -1;
            if (0 === this.negative && n) return 1;
            if ((this.strip(), this.length > 1)) t = 1;
            else {
                n && (e = -e), i(e <= 67108863, 'Number is too big');
                var r = 0 | this.words[0];
                t = r === e ? 0 : r < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
        }),
        (a.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
        }),
        (a.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var i = 0 | this.words[n],
                    r = 0 | e.words[n];
                if (i !== r) {
                    i < r ? (t = -1) : i > r && (t = 1);
                    break;
                }
            }
            return t;
        }),
        (a.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
        }),
        (a.prototype.gt = function (e) {
            return 1 === this.cmp(e);
        }),
        (a.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
        }),
        (a.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
        }),
        (a.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
        }),
        (a.prototype.lt = function (e) {
            return -1 === this.cmp(e);
        }),
        (a.prototype.lten = function (e) {
            return 0 >= this.cmpn(e);
        }),
        (a.prototype.lte = function (e) {
            return 0 >= this.cmp(e);
        }),
        (a.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
        }),
        (a.prototype.eq = function (e) {
            return 0 === this.cmp(e);
        }),
        (a.red = function (e) {
            return new A(e);
        }),
        (a.prototype.toRed = function (e) {
            return i(!this.red, 'Already a number in reduction context'), i(0 === this.negative, 'red works only with positives'), e.convertTo(this)._forceRed(e);
        }),
        (a.prototype.fromRed = function () {
            return i(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
        }),
        (a.prototype._forceRed = function (e) {
            return (this.red = e), this;
        }),
        (a.prototype.forceRed = function (e) {
            return i(!this.red, 'Already a number in reduction context'), this._forceRed(e);
        }),
        (a.prototype.redAdd = function (e) {
            return i(this.red, 'redAdd works only with red numbers'), this.red.add(this, e);
        }),
        (a.prototype.redIAdd = function (e) {
            return i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, e);
        }),
        (a.prototype.redSub = function (e) {
            return i(this.red, 'redSub works only with red numbers'), this.red.sub(this, e);
        }),
        (a.prototype.redISub = function (e) {
            return i(this.red, 'redISub works only with red numbers'), this.red.isub(this, e);
        }),
        (a.prototype.redShl = function (e) {
            return i(this.red, 'redShl works only with red numbers'), this.red.shl(this, e);
        }),
        (a.prototype.redMul = function (e) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.mul(this, e);
        }),
        (a.prototype.redIMul = function (e) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.imul(this, e);
        }),
        (a.prototype.redSqr = function () {
            return i(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
        }),
        (a.prototype.redISqr = function () {
            return i(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
        }),
        (a.prototype.redSqrt = function () {
            return i(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
        }),
        (a.prototype.redInvm = function () {
            return i(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
        }),
        (a.prototype.redNeg = function () {
            return i(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
        }),
        (a.prototype.redPow = function (e) {
            return i(this.red && !e.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, e);
        });
    var v = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    function y(e, t) {
        (this.name = e), (this.p = new a(t, 16)), (this.n = this.p.bitLength()), (this.k = new a(1).iushln(this.n).isub(this.p)), (this.tmp = this._tmp());
    }
    function I() {
        y.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    function T() {
        y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    function b() {
        y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    function S() {
        y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    function A(e) {
        if ('string' == typeof e) {
            var t = a._prime(e);
            (this.m = t.p), (this.prime = t);
        } else i(e.gtn(1), 'modulus must be greater than 1'), (this.m = e), (this.prime = null);
    }
    function N(e) {
        A.call(this, e), (this.shift = this.m.bitLength()), this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)), (this.r = new a(1).iushln(this.shift)), (this.r2 = this.imod(this.r.sqr())), (this.rinv = this.r._invmp(this.m)), (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)), (this.minv = this.minv.umod(this.r)), (this.minv = this.r.sub(this.minv));
    }
    (y.prototype._tmp = function () {
        var e = new a(null);
        return (e.words = Array(Math.ceil(this.n / 13))), e;
    }),
        (y.prototype.ireduce = function (e) {
            var t,
                n = e;
            do this.split(n, this.tmp), (t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
            while (t > this.n);
            var i = t < this.n ? -1 : n.ucmp(this.p);
            return 0 === i ? ((n.words[0] = 0), (n.length = 1)) : i > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n;
        }),
        (y.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
        }),
        (y.prototype.imulK = function (e) {
            return e.imul(this.k);
        }),
        r(I, y),
        (I.prototype.split = function (e, t) {
            for (var n = 4194303, i = Math.min(e.length, 9), r = 0; r < i; r++) t.words[r] = e.words[r];
            if (((t.length = i), e.length <= 9)) {
                (e.words[0] = 0), (e.length = 1);
                return;
            }
            var a = e.words[9];
            for (r = 10, t.words[t.length++] = a & n; r < e.length; r++) {
                var s = 0 | e.words[r];
                (e.words[r - 10] = ((s & n) << 4) | (a >>> 22)), (a = s);
            }
            (a >>>= 22), (e.words[r - 10] = a), 0 === a && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
        }),
        (I.prototype.imulK = function (e) {
            (e.words[e.length] = 0), (e.words[e.length + 1] = 0), (e.length += 2);
            for (var t = 0, n = 0; n < e.length; n++) {
                var i = 0 | e.words[n];
                (t += 977 * i), (e.words[n] = 67108863 & t), (t = 64 * i + ((t / 67108864) | 0));
            }
            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
        }),
        r(T, y),
        r(b, y),
        r(S, y),
        (S.prototype.imulK = function (e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                var i = (0 | e.words[n]) * 19 + t,
                    r = 67108863 & i;
                (i >>>= 26), (e.words[n] = r), (t = i);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
        }),
        (a._prime = function (e) {
            var t;
            if (v[e]) return v[e];
            if ('k256' === e) t = new I();
            else if ('p224' === e) t = new T();
            else if ('p192' === e) t = new b();
            else if ('p25519' === e) t = new S();
            else throw Error('Unknown prime ' + e);
            return (v[e] = t), t;
        }),
        (A.prototype._verify1 = function (e) {
            i(0 === e.negative, 'red works only with positives'), i(e.red, 'red works only with red numbers');
        }),
        (A.prototype._verify2 = function (e, t) {
            i((e.negative | t.negative) == 0, 'red works only with positives'), i(e.red && e.red === t.red, 'red works only with red numbers');
        }),
        (A.prototype.imod = function (e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
        }),
        (A.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
        }),
        (A.prototype.add = function (e, t) {
            this._verify2(e, t);
            var n = e.add(t);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
        }),
        (A.prototype.iadd = function (e, t) {
            this._verify2(e, t);
            var n = e.iadd(t);
            return n.cmp(this.m) >= 0 && n.isub(this.m), n;
        }),
        (A.prototype.sub = function (e, t) {
            this._verify2(e, t);
            var n = e.sub(t);
            return 0 > n.cmpn(0) && n.iadd(this.m), n._forceRed(this);
        }),
        (A.prototype.isub = function (e, t) {
            this._verify2(e, t);
            var n = e.isub(t);
            return 0 > n.cmpn(0) && n.iadd(this.m), n;
        }),
        (A.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
        }),
        (A.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
        }),
        (A.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
        }),
        (A.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
        }),
        (A.prototype.sqr = function (e) {
            return this.mul(e, e);
        }),
        (A.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((i(t % 2 == 1), 3 === t)) {
                var n = this.m.add(new a(1)).iushrn(2);
                return this.pow(e, n);
            }
            for (var r = this.m.subn(1), s = 0; !r.isZero() && 0 === r.andln(1); ) s++, r.iushrn(1);
            i(!r.isZero());
            var o = new a(1).toRed(this),
                l = o.redNeg(),
                u = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();
            for (c = new a(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(l); ) c.redIAdd(l);
            for (var d = this.pow(c, r), f = this.pow(e, r.addn(1).iushrn(1)), _ = this.pow(e, r), p = s; 0 !== _.cmp(o); ) {
                for (var h = _, m = 0; 0 !== h.cmp(o); m++) h = h.redSqr();
                i(m < p);
                var g = this.pow(d, new a(1).iushln(p - m - 1));
                (f = f.redMul(g)), (d = g.redSqr()), (_ = _.redMul(d)), (p = m);
            }
            return f;
        }),
        (A.prototype.invm = function (e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative ? ((t.negative = 0), this.imod(t).redNeg()) : this.imod(t);
        }),
        (A.prototype.pow = function (e, t) {
            if (t.isZero()) return new a(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var n = 4,
                i = Array(16);
            (i[0] = new a(1).toRed(this)), (i[1] = e);
            for (var r = 2; r < i.length; r++) i[r] = this.mul(i[r - 1], e);
            var s = i[0],
                o = 0,
                l = 0,
                u = t.bitLength() % 26;
            for (0 === u && (u = 26), r = t.length - 1; r >= 0; r--) {
                for (var c = t.words[r], d = u - 1; d >= 0; d--) {
                    var f = (c >> d) & 1;
                    if ((s !== i[0] && (s = this.sqr(s)), 0 === f && 0 === o)) {
                        l = 0;
                        continue;
                    }
                    (o <<= 1), (o |= f), (++l === n || (0 === r && 0 === d)) && ((s = this.mul(s, i[o])), (l = 0), (o = 0));
                }
                u = 26;
            }
            return s;
        }),
        (A.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
        }),
        (A.prototype.convertFrom = function (e) {
            var t = e.clone();
            return (t.red = null), t;
        }),
        (a.mont = function (e) {
            return new N(e);
        }),
        r(N, A),
        (N.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
        }),
        (N.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
        }),
        (N.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero()) return (e.words[0] = 0), (e.length = 1), e;
            var n = e.imul(t),
                i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                r = n.isub(i).iushrn(this.shift),
                a = r;
            return r.cmp(this.m) >= 0 ? (a = r.isub(this.m)) : 0 > r.cmpn(0) && (a = r.iadd(this.m)), a._forceRed(this);
        }),
        (N.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
            var n = e.mul(t),
                i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                r = n.isub(i).iushrn(this.shift),
                s = r;
            return r.cmp(this.m) >= 0 ? (s = r.isub(this.m)) : 0 > r.cmpn(0) && (s = r.iadd(this.m)), s._forceRed(this);
        }),
        (N.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
        });
})((e = n.nmd(e)), this);
