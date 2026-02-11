e = n.nmd(e);
var r = (function (e) {
    "use strict";
    var t = 1e7,
        n = 7,
        i = 0x20000000000000,
        a = f(0x20000000000000),
        s = "0123456789abcdefghijklmnopqrstuvwxyz",
        o = "function" == typeof BigInt;
    function l(e, t, n, r) {
        return void 0 === e ? l[0] : void 0 !== t && (10 != +t || n) ? J(e, t, n, r) : es(e);
    }
    function u(e, t) {
        (this.value = e), (this.sign = t), (this.isSmall = !1);
    }
    function c(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function d(e) {
        this.value = e;
    }
    function _(e) {
        return -i < e && e < i;
    }
    function f(e) {
        return e < 1e7
            ? [e]
            : e < 1e14
              ? [e % 1e7, Math.floor(e / 1e7)]
              : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
    }
    function h(e) {
        p(e);
        var n = e.length;
        if (n < 4 && 0 > k(e, a))
            switch (n) {
                case 0:
                    return 0;
                case 1:
                    return e[0];
                case 2:
                    return e[0] + e[1] * t;
                default:
                    return e[0] + (e[1] + e[2] * t) * t;
            }
        return e;
    }
    function p(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function g(e) {
        for (var t = Array(e), n = -1; ++n < e; ) t[n] = 0;
        return t;
    }
    function E(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function A(e, n) {
        var r,
            i,
            a = e.length,
            s = n.length,
            o = Array(a),
            l = 0,
            u = t;
        for (i = 0; i < s; i++) (l = +((r = e[i] + n[i] + l) >= u)), (o[i] = r - l * u);
        for (; i < a; ) (l = +((r = e[i] + l) === u)), (o[i++] = r - l * u);
        return l > 0 && o.push(l), o;
    }
    function I(e, t) {
        return e.length >= t.length ? A(e, t) : A(t, e);
    }
    function T(e, n) {
        var r,
            i,
            a = e.length,
            s = Array(a),
            o = t;
        for (i = 0; i < a; i++) (n = Math.floor((r = e[i] - o + n) / o)), (s[i] = r - n * o), (n += 1);
        for (; n > 0; ) (s[i++] = n % o), (n = Math.floor(n / o));
        return s;
    }
    function y(e, n) {
        var r,
            i,
            a = e.length,
            s = n.length,
            o = Array(a),
            l = 0,
            u = t;
        for (r = 0; r < s; r++) (i = e[r] - l - n[r]) < 0 ? ((i += u), (l = 1)) : (l = 0), (o[r] = i);
        for (r = s; r < a; r++) {
            if ((i = e[r] - l) < 0) i += u;
            else {
                o[r++] = i;
                break;
            }
            o[r] = i;
        }
        for (; r < a; r++) o[r] = e[r];
        return p(o), o;
    }
    function S(e, t, n) {
        var r;
        return (k(e, t) >= 0 ? (r = y(e, t)) : ((r = y(t, e)), (n = !n)), "number" == typeof (r = h(r)))
            ? (n && (r = -r), new c(r))
            : new u(r, n);
    }
    function v(e, n, r) {
        var i,
            a,
            s = e.length,
            o = Array(s),
            l = -n,
            d = t;
        for (i = 0; i < s; i++) (l = Math.floor((a = e[i] + l) / d)), (a %= d), (o[i] = a < 0 ? a + d : a);
        return "number" == typeof (o = h(o)) ? (r && (o = -o), new c(o)) : new u(o, r);
    }
    function C(e, n) {
        var r,
            i,
            a,
            s,
            o = e.length,
            l = n.length,
            u = g(o + l),
            c = t;
        for (a = 0; a < o; ++a) {
            s = e[a];
            for (var d = 0; d < l; ++d)
                (i = Math.floor((r = s * n[d] + u[a + d]) / c)), (u[a + d] = r - i * c), (u[a + d + 1] += i);
        }
        return p(u), u;
    }
    function b(e, n) {
        var r,
            i,
            a = e.length,
            s = Array(a),
            o = t,
            l = 0;
        for (i = 0; i < a; i++) (l = Math.floor((r = e[i] * n + l) / o)), (s[i] = r - l * o);
        for (; l > 0; ) (s[i++] = l % o), (l = Math.floor(l / o));
        return s;
    }
    function N(e, t) {
        for (var n = []; t-- > 0; ) n.push(0);
        return n.concat(e);
    }
    function R(e, t) {
        var n = Math.max(e.length, t.length);
        if (n <= 30) return C(e, t);
        n = Math.ceil(n / 2);
        var r = e.slice(n),
            i = e.slice(0, n),
            a = t.slice(n),
            s = t.slice(0, n),
            o = R(i, s),
            l = R(r, a),
            u = R(I(i, r), I(s, a)),
            c = I(I(o, N(y(y(u, o), l), n)), N(l, 2 * n));
        return p(c), c;
    }
    function O(e, t) {
        return -0.012 * e - 0.012 * t + 15e-6 * e * t > 0;
    }
    function D(e, n, r) {
        return e < t ? new u(b(n, e), r) : new u(C(n, f(e)), r);
    }
    function L(e) {
        var n,
            r,
            i,
            a,
            s = e.length,
            o = g(s + s),
            l = t;
        for (i = 0; i < s; i++) {
            r = 0 - (a = e[i]) * a;
            for (var u = i; u < s; u++) (r = Math.floor((n = a * e[u] * 2 + o[i + u] + r) / l)), (o[i + u] = n - r * l);
            o[i + s] = r;
        }
        return p(o), o;
    }
    function w(e, n) {
        var r,
            i,
            a,
            s,
            o,
            l,
            u,
            c = e.length,
            d = n.length,
            _ = t,
            f = g(n.length),
            p = n[d - 1],
            E = Math.ceil(_ / (2 * p)),
            A = b(e, E),
            I = b(n, E);
        for (A.length <= c && A.push(0), I.push(0), p = I[d - 1], i = c - d; i >= 0; i--) {
            for (
                r = _ - 1,
                    A[i + d] !== p && (r = Math.floor((A[i + d] * _ + A[i + d - 1]) / p)),
                    a = 0,
                    s = 0,
                    l = I.length,
                    o = 0;
                o < l;
                o++
            )
                (a += r * I[o]),
                    (u = Math.floor(a / _)),
                    (s += A[i + o] - (a - u * _)),
                    (a = u),
                    s < 0 ? ((A[i + o] = s + _), (s = -1)) : ((A[i + o] = s), (s = 0));
            for (; 0 !== s; ) {
                for (r -= 1, a = 0, o = 0; o < l; o++)
                    (a += A[i + o] - _ + I[o]) < 0 ? ((A[i + o] = a + _), (a = 0)) : ((A[i + o] = a), (a = 1));
                s += a;
            }
            f[i] = r;
        }
        return (A = P(A, E)[0]), [h(f), h(A)];
    }
    function x(e, n) {
        for (var r, i, a, s, o, l = e.length, u = n.length, c = [], d = [], _ = t; l; ) {
            if ((d.unshift(e[--l]), p(d), 0 > k(d, n))) {
                c.push(0);
                continue;
            }
            (i = d.length),
                (a = d[i - 1] * _ + d[i - 2]),
                (s = n[u - 1] * _ + n[u - 2]),
                i > u && (a = (a + 1) * _),
                (r = Math.ceil(a / s));
            do {
                if (0 >= k((o = b(n, r)), d)) break;
                r--;
            } while (r);
            c.push(r), (d = y(d, o));
        }
        return c.reverse(), [h(c), h(d)];
    }
    function P(e, n) {
        var r,
            i,
            a,
            s,
            o = e.length,
            l = g(o),
            u = t;
        for (a = 0, r = o - 1; r >= 0; --r) (i = E((s = a * u + e[r]) / n)), (a = s - i * n), (l[r] = 0 | i);
        return [l, 0 | a];
    }
    function M(e, n) {
        var r,
            i,
            a = es(n);
        if (o) return [new d(e.value / a.value), new d(e.value % a.value)];
        var s = e.value,
            _ = a.value;
        if (0 === _) throw Error("Cannot divide by zero");
        if (e.isSmall) return a.isSmall ? [new c(E(s / _)), new c(s % _)] : [l[0], e];
        if (a.isSmall) {
            if (1 === _) return [e, l[0]];
            if (-1 == _) return [e.negate(), l[0]];
            var p = Math.abs(_);
            if (p < t) {
                r = h((i = P(s, p))[0]);
                var g = i[1];
                return (e.sign && (g = -g), "number" == typeof r)
                    ? (e.sign !== a.sign && (r = -r), [new c(r), new c(g)])
                    : [new u(r, e.sign !== a.sign), new c(g)];
            }
            _ = f(p);
        }
        var A = k(s, _);
        if (-1 === A) return [l[0], e];
        if (0 === A) return [l[e.sign === a.sign ? 1 : -1], l[0]];
        r = (i = s.length + _.length <= 200 ? w(s, _) : x(s, _))[0];
        var I = e.sign !== a.sign,
            T = i[1],
            y = e.sign;
        return (
            "number" == typeof r ? (I && (r = -r), (r = new c(r))) : (r = new u(r, I)),
            "number" == typeof T ? (y && (T = -T), (T = new c(T))) : (T = new u(T, y)),
            [r, T]
        );
    }
    function k(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var n = e.length - 1; n >= 0; n--) if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0;
    }
    function U(e) {
        var t = e.abs();
        return (
            !t.isUnit() &&
            (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)))
        );
    }
    function G(e, t) {
        for (var n, i, a, s = e.prev(), o = s, l = 0; o.isEven(); ) (o = o.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((a = r(t[i]).modPow(o, e)).isUnit() || a.equals(s))) {
                for (n = l - 1; 0 != n && !(a = a.square().mod(e)).isUnit(); n--) if (a.equals(s)) continue t;
                return !1;
            }
        return !0;
    }
    (u.prototype = Object.create(l.prototype)),
        (c.prototype = Object.create(l.prototype)),
        (d.prototype = Object.create(l.prototype)),
        (u.prototype.add = function (e) {
            var t = es(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? new u(T(n, Math.abs(r)), this.sign) : new u(I(n, r), this.sign);
        }),
        (u.prototype.plus = u.prototype.add),
        (c.prototype.add = function (e) {
            var t = es(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.subtract(t.negate());
            var r = t.value;
            if (t.isSmall) {
                if (_(n + r)) return new c(n + r);
                r = f(Math.abs(r));
            }
            return new u(T(r, Math.abs(n)), n < 0);
        }),
        (c.prototype.plus = c.prototype.add),
        (d.prototype.add = function (e) {
            return new d(this.value + es(e).value);
        }),
        (d.prototype.plus = d.prototype.add),
        (u.prototype.subtract = function (e) {
            var t = es(e);
            if (this.sign !== t.sign) return this.add(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? v(n, Math.abs(r), this.sign) : S(n, r, this.sign);
        }),
        (u.prototype.minus = u.prototype.subtract),
        (c.prototype.subtract = function (e) {
            var t = es(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.add(t.negate());
            var r = t.value;
            return t.isSmall ? new c(n - r) : v(r, Math.abs(n), n >= 0);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (d.prototype.subtract = function (e) {
            return new d(this.value - es(e).value);
        }),
        (d.prototype.minus = d.prototype.subtract),
        (u.prototype.negate = function () {
            return new u(this.value, !this.sign);
        }),
        (c.prototype.negate = function () {
            var e = this.sign,
                t = new c(-this.value);
            return (t.sign = !e), t;
        }),
        (d.prototype.negate = function () {
            return new d(-this.value);
        }),
        (u.prototype.abs = function () {
            return new u(this.value, !1);
        }),
        (c.prototype.abs = function () {
            return new c(Math.abs(this.value));
        }),
        (d.prototype.abs = function () {
            return new d(this.value >= 0 ? this.value : -this.value);
        }),
        (u.prototype.multiply = function (e) {
            var n,
                r = es(e),
                i = this.value,
                a = r.value,
                s = this.sign !== r.sign;
            if (r.isSmall) {
                if (0 === a) return l[0];
                if (1 === a) return this;
                if (-1 === a) return this.negate();
                if ((n = Math.abs(a)) < t) return new u(b(i, n), s);
                a = f(n);
            }
            return O(i.length, a.length) ? new u(R(i, a), s) : new u(C(i, a), s);
        }),
        (u.prototype.times = u.prototype.multiply),
        (c.prototype._multiplyBySmall = function (e) {
            return _(e.value * this.value)
                ? new c(e.value * this.value)
                : D(Math.abs(e.value), f(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (u.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? l[0]
                : 1 === e.value
                  ? this
                  : -1 === e.value
                    ? this.negate()
                    : D(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (c.prototype.multiply = function (e) {
            return es(e)._multiplyBySmall(this);
        }),
        (c.prototype.times = c.prototype.multiply),
        (d.prototype.multiply = function (e) {
            return new d(this.value * es(e).value);
        }),
        (d.prototype.times = d.prototype.multiply),
        (u.prototype.square = function () {
            return new u(L(this.value), !1);
        }),
        (c.prototype.square = function () {
            var e = this.value * this.value;
            return _(e) ? new c(e) : new u(L(f(Math.abs(this.value))), !1);
        }),
        (d.prototype.square = function (e) {
            return new d(this.value * this.value);
        }),
        (u.prototype.divmod = function (e) {
            var t = M(this, e);
            return { quotient: t[0], remainder: t[1] };
        }),
        (d.prototype.divmod = c.prototype.divmod = u.prototype.divmod),
        (u.prototype.divide = function (e) {
            return M(this, e)[0];
        }),
        (d.prototype.over = d.prototype.divide =
            function (e) {
                return new d(this.value / es(e).value);
            }),
        (c.prototype.over = c.prototype.divide = u.prototype.over = u.prototype.divide),
        (u.prototype.mod = function (e) {
            return M(this, e)[1];
        }),
        (d.prototype.mod = d.prototype.remainder =
            function (e) {
                return new d(this.value % es(e).value);
            }),
        (c.prototype.remainder = c.prototype.mod = u.prototype.remainder = u.prototype.mod),
        (u.prototype.pow = function (e) {
            var t,
                n,
                r,
                i = es(e),
                a = this.value,
                s = i.value;
            if (0 === s) return l[1];
            if (0 === a) return l[0];
            if (1 === a) return l[1];
            if (-1 === a) return i.isEven() ? l[1] : l[-1];
            if (i.sign) return l[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && _((t = Math.pow(a, s)))) return new c(E(t));
            for (n = this, r = l[1]; !0 & s && ((r = r.times(n)), --s), 0 !== s; ) (s /= 2), (n = n.square());
            return r;
        }),
        (c.prototype.pow = u.prototype.pow),
        (d.prototype.pow = function (e) {
            var t = es(e),
                n = this.value,
                r = t.value,
                i = BigInt(0),
                a = BigInt(1),
                s = BigInt(2);
            if (r === i) return l[1];
            if (n === i) return l[0];
            if (n === a) return l[1];
            if (n === BigInt(-1)) return t.isEven() ? l[1] : l[-1];
            if (t.isNegative()) return new d(i);
            for (var o = this, u = l[1]; (r & a) === a && ((u = u.times(o)), --r), r !== i; )
                (r /= s), (o = o.square());
            return u;
        }),
        (u.prototype.modPow = function (e, t) {
            if (((e = es(e)), (t = es(t)).isZero())) throw Error("Cannot take modPow with modulus 0");
            var n = l[1],
                r = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(l[-1])), (r = r.modInv(t))); e.isPositive(); ) {
                if (r.isZero()) return l[0];
                e.isOdd() && (n = n.multiply(r).mod(t)), (e = e.divide(2)), (r = r.square().mod(t));
            }
            return n;
        }),
        (d.prototype.modPow = c.prototype.modPow = u.prototype.modPow),
        (u.prototype.compareAbs = function (e) {
            var t = es(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? 1 : k(n, r);
        }),
        (c.prototype.compareAbs = function (e) {
            var t = es(e),
                n = Math.abs(this.value),
                r = t.value;
            return t.isSmall ? (n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1) : -1;
        }),
        (d.prototype.compareAbs = function (e) {
            var t = this.value,
                n = es(e).value;
            return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1;
        }),
        (u.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = es(e),
                n = this.value,
                r = t.value;
            return this.sign !== t.sign
                ? t.sign
                    ? 1
                    : -1
                : t.isSmall
                  ? this.sign
                      ? -1
                      : 1
                  : k(n, r) * (this.sign ? -1 : 1);
        }),
        (u.prototype.compareTo = u.prototype.compare),
        (c.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = es(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? (n == r ? 0 : n > r ? 1 : -1) : n < 0 !== t.sign ? (n < 0 ? -1 : 1) : n < 0 ? 1 : -1;
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (d.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                n = es(e).value;
            return t === n ? 0 : t > n ? 1 : -1;
        }),
        (d.prototype.compareTo = d.prototype.compare),
        (u.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (d.prototype.eq =
            d.prototype.equals =
            c.prototype.eq =
            c.prototype.equals =
            u.prototype.eq =
                u.prototype.equals),
        (u.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (d.prototype.neq =
            d.prototype.notEquals =
            c.prototype.neq =
            c.prototype.notEquals =
            u.prototype.neq =
                u.prototype.notEquals),
        (u.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (d.prototype.gt =
            d.prototype.greater =
            c.prototype.gt =
            c.prototype.greater =
            u.prototype.gt =
                u.prototype.greater),
        (u.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (d.prototype.lt =
            d.prototype.lesser =
            c.prototype.lt =
            c.prototype.lesser =
            u.prototype.lt =
                u.prototype.lesser),
        (u.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (d.prototype.geq =
            d.prototype.greaterOrEquals =
            c.prototype.geq =
            c.prototype.greaterOrEquals =
            u.prototype.geq =
                u.prototype.greaterOrEquals),
        (u.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (d.prototype.leq =
            d.prototype.lesserOrEquals =
            c.prototype.leq =
            c.prototype.lesserOrEquals =
            u.prototype.leq =
                u.prototype.lesserOrEquals),
        (u.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (c.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (d.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (u.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (c.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (d.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (u.prototype.isPositive = function () {
            return !this.sign;
        }),
        (c.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (d.prototype.isPositive = c.prototype.isPositive),
        (u.prototype.isNegative = function () {
            return this.sign;
        }),
        (c.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (d.prototype.isNegative = c.prototype.isNegative),
        (u.prototype.isUnit = function () {
            return !1;
        }),
        (c.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (d.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (u.prototype.isZero = function () {
            return !1;
        }),
        (c.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (d.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (u.prototype.isDivisibleBy = function (e) {
            var t = es(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (d.prototype.isDivisibleBy = c.prototype.isDivisibleBy = u.prototype.isDivisibleBy),
        (u.prototype.isPrime = function (e) {
            var t = U(this);
            if (void 0 !== t) return t;
            var n = this.abs(),
                i = n.bitLength();
            if (i <= 64) return G(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var a = Math.log(2) * i.toJSNumber(), s = Math.ceil(!0 === e ? 2 * Math.pow(a, 2) : a), o = [], l = 0;
                l < s;
                l++
            )
                o.push(r(l + 2));
            return G(n, o);
        }),
        (d.prototype.isPrime = c.prototype.isPrime = u.prototype.isPrime),
        (u.prototype.isProbablePrime = function (e, t) {
            var n = U(this);
            if (void 0 !== n) return n;
            for (var i = this.abs(), a = void 0 === e ? 5 : e, s = [], o = 0; o < a; o++)
                s.push(r.randBetween(2, i.minus(2), t));
            return G(i, s);
        }),
        (d.prototype.isProbablePrime = c.prototype.isProbablePrime = u.prototype.isProbablePrime),
        (u.prototype.modInv = function (e) {
            for (var t, n, i, a = r.zero, s = r.one, o = es(e), l = this.abs(); !l.isZero(); )
                (t = o.divide(l)),
                    (n = a),
                    (i = o),
                    (a = s),
                    (o = l),
                    (s = n.subtract(t.multiply(s))),
                    (l = i.subtract(t.multiply(l)));
            if (!o.isUnit()) throw Error(this.toString() + " and " + e.toString() + " are not co-prime");
            return (-1 === a.compare(0) && (a = a.add(e)), this.isNegative()) ? a.negate() : a;
        }),
        (d.prototype.modInv = c.prototype.modInv = u.prototype.modInv),
        (u.prototype.next = function () {
            var e = this.value;
            return this.sign ? v(e, 1, this.sign) : new u(T(e, 1), this.sign);
        }),
        (c.prototype.next = function () {
            var e = this.value;
            return e + 1 < i ? new c(e + 1) : new u(a, !1);
        }),
        (d.prototype.next = function () {
            return new d(this.value + BigInt(1));
        }),
        (u.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new u(T(e, 1), !0) : v(e, 1, this.sign);
        }),
        (c.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -i ? new c(e - 1) : new u(a, !0);
        }),
        (d.prototype.prev = function () {
            return new d(this.value - BigInt(1));
        });
    for (var F = [1]; 2 * F[F.length - 1] <= t; ) F.push(2 * F[F.length - 1]);
    var V = F.length,
        B = F[V - 1];
    function j(e) {
        return Math.abs(e) <= t;
    }
    function H(e, t, n) {
        t = es(t);
        for (
            var i = e.isNegative(),
                a = t.isNegative(),
                s = i ? e.not() : e,
                o = a ? t.not() : t,
                l = 0,
                u = 0,
                c = null,
                d = null,
                _ = [];
            !s.isZero() || !o.isZero();
        )
            (l = (c = M(s, B))[1].toJSNumber()),
                i && (l = B - 1 - l),
                (u = (d = M(o, B))[1].toJSNumber()),
                a && (u = B - 1 - u),
                (s = c[0]),
                (o = d[0]),
                _.push(n(l, u));
        for (var f = 0 !== n(+!!i, +!!a) ? r(-1) : r(0), h = _.length - 1; h >= 0; h -= 1)
            f = f.multiply(B).add(r(_[h]));
        return f;
    }
    (u.prototype.shiftLeft = function (e) {
        var t = es(e).toJSNumber();
        if (!j(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var n = this;
        if (n.isZero()) return n;
        for (; t >= V; ) (n = n.multiply(B)), (t -= V - 1);
        return n.multiply(F[t]);
    }),
        (d.prototype.shiftLeft = c.prototype.shiftLeft = u.prototype.shiftLeft),
        (u.prototype.shiftRight = function (e) {
            var t,
                n = es(e).toJSNumber();
            if (!j(n)) throw Error(String(n) + " is too large for shifting.");
            if (n < 0) return this.shiftLeft(-n);
            for (var r = this; n >= V; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (t = M(r, B))[1].isNegative() ? t[0].prev() : t[0]), (n -= V - 1);
            }
            return (t = M(r, F[n]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (d.prototype.shiftRight = c.prototype.shiftRight = u.prototype.shiftRight),
        (u.prototype.not = function () {
            return this.negate().prev();
        }),
        (d.prototype.not = c.prototype.not = u.prototype.not),
        (u.prototype.and = function (e) {
            return H(this, e, function (e, t) {
                return e & t;
            });
        }),
        (d.prototype.and = c.prototype.and = u.prototype.and),
        (u.prototype.or = function (e) {
            return H(this, e, function (e, t) {
                return e | t;
            });
        }),
        (d.prototype.or = c.prototype.or = u.prototype.or),
        (u.prototype.xor = function (e) {
            return H(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (d.prototype.xor = c.prototype.xor = u.prototype.xor);
    var Y = 0x40000000,
        W = ((t & -t) * (t & -t)) | 0x40000000;
    function K(e) {
        var n = e.value,
            r = "number" == typeof n ? n | Y : "bigint" == typeof n ? n | BigInt(Y) : (n[0] + n[1] * t) | W;
        return r & -r;
    }
    function $(e, t) {
        if (0 >= t.compareTo(e)) {
            var n = $(e, t.square(t)),
                i = n.p,
                a = n.e,
                s = i.multiply(t);
            return 0 >= s.compareTo(e) ? { p: s, e: 2 * a + 1 } : { p: i, e: 2 * a };
        }
        return { p: r(1), e: 0 };
    }
    function z(e, t) {
        return (e = es(e)), (t = es(t)), e.greater(t) ? e : t;
    }
    function q(e, t) {
        return (e = es(e)), (t = es(t)), e.lesser(t) ? e : t;
    }
    function X(e, t) {
        if (((e = es(e).abs()), (t = es(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var n, r, i = l[1]; e.isEven() && t.isEven(); )
            (n = q(K(e), K(t))), (e = e.divide(n)), (t = t.divide(n)), (i = i.multiply(n));
        for (; e.isEven(); ) e = e.divide(K(e));
        do {
            for (; t.isEven(); ) t = t.divide(K(t));
            e.greater(t) && ((r = t), (t = e), (e = r)), (t = t.subtract(e));
        } while (!t.isZero());
        return i.isUnit() ? e : e.multiply(i);
    }
    function Z(e, t) {
        return (e = es(e).abs()), (t = es(t).abs()), e.divide(X(e, t)).multiply(t);
    }
    function Q(e, n, r) {
        e = es(e);
        var i = r || Math.random,
            a = q(e, (n = es(n))),
            s = z(e, n).subtract(a).add(1);
        if (s.isSmall) return a.add(Math.floor(i() * s));
        for (var o = en(s, t).value, u = [], c = !0, d = 0; d < o.length; d++) {
            var _ = c ? o[d] : t,
                f = E(i() * _);
            u.push(f), f < _ && (c = !1);
        }
        return a.add(l.fromArray(u, t, !1));
    }
    (u.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0)))
            ? r(0)
            : r($(e, r(2)).e).add(r(1));
    }),
        (d.prototype.bitLength = c.prototype.bitLength = u.prototype.bitLength);
    var J = function (e, t, n, r) {
        (n = n || s), (e = String(e)), r || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var i,
            a = e.length,
            o = Math.abs(t),
            l = {};
        for (i = 0; i < n.length; i++) l[n[i]] = i;
        for (i = 0; i < a; i++) {
            var u = e[i];
            if ("-" !== u && u in l && l[u] >= o) {
                if ("1" === u && 1 === o) continue;
                throw Error(u + " is not a valid digit in base " + t + ".");
            }
        }
        t = es(t);
        var c = [],
            d = "-" === e[0];
        for (i = +!!d; i < e.length; i++) {
            var u = e[i];
            if (u in l) c.push(es(l[u]));
            else if ("<" === u) {
                var _ = i;
                do i++;
                while (">" !== e[i] && i < e.length);
                c.push(es(e.slice(_ + 1, i)));
            } else throw Error(u + " is not a valid character");
        }
        return ee(c, t, d);
    };
    function ee(e, t, n) {
        var r,
            i = l[0],
            a = l[1];
        for (r = e.length - 1; r >= 0; r--) (i = i.add(e[r].times(a))), (a = a.times(t));
        return n ? i.negate() : i;
    }
    function et(e, t) {
        return e < (t = t || s).length ? t[e] : "<" + e + ">";
    }
    function en(e, t) {
        if ((t = r(t)).isZero()) {
            if (e.isZero()) return { value: [0], isNegative: !1 };
            throw Error("Cannot convert nonzero numbers to base 0.");
        }
        if (t.equals(-1)) {
            if (e.isZero()) return { value: [0], isNegative: !1 };
            if (e.isNegative())
                return {
                    value: [].concat.apply(
                        [],
                        Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0]),
                    ),
                    isNegative: !1,
                };
            var n = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return n.unshift([1]), { value: [].concat.apply([], n), isNegative: !1 };
        }
        var i = !1;
        if ((e.isNegative() && t.isPositive() && ((i = !0), (e = e.abs())), t.isUnit()))
            return e.isZero()
                ? { value: [0], isNegative: !1 }
                : { value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1), isNegative: i };
        for (var a, s = [], o = e; o.isNegative() || o.compareAbs(t) >= 0; ) {
            o = (a = o.divmod(t)).quotient;
            var l = a.remainder;
            l.isNegative() && ((l = t.minus(l).abs()), (o = o.next())), s.push(l.toJSNumber());
        }
        return s.push(o.toJSNumber()), { value: s.reverse(), isNegative: i };
    }
    function er(e, t, n) {
        var r = en(e, t);
        return (
            (r.isNegative ? "-" : "") +
            r.value
                .map(function (e) {
                    return et(e, n);
                })
                .join("")
        );
    }
    function ei(e) {
        if (_(+e)) {
            var t = +e;
            if (t === E(t)) return o ? new d(BigInt(t)) : new c(t);
            throw Error("Invalid integer: " + e);
        }
        var r = "-" === e[0];
        r && (e = e.slice(1));
        var i = e.split(/e/i);
        if (i.length > 2) throw Error("Invalid integer: " + i.join("e"));
        if (2 === i.length) {
            var a = i[1];
            if (("+" === a[0] && (a = a.slice(1)), (a *= 1) !== E(a) || !_(a)))
                throw Error("Invalid integer: " + a + " is not a valid exponent.");
            var s = i[0],
                l = s.indexOf(".");
            if ((l >= 0 && ((a -= s.length - l - 1), (s = s.slice(0, l) + s.slice(l + 1))), a < 0))
                throw Error("Cannot include negative exponent part for integers");
            (s += Array(a + 1).join("0")), (e = s);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (o) return new d(BigInt(r ? "-" + e : e));
        for (var f = [], h = e.length, g = n, A = h - g; h > 0; )
            f.push(+e.slice(A, h)), (A -= g) < 0 && (A = 0), (h -= g);
        return p(f), new u(f, r);
    }
    function ea(e) {
        if (o) return new d(BigInt(e));
        if (_(e)) {
            if (e !== E(e)) throw Error(e + " is not an integer.");
            return new c(e);
        }
        return ei(e.toString());
    }
    function es(e) {
        return "number" == typeof e ? ea(e) : "string" == typeof e ? ei(e) : "bigint" == typeof e ? new d(e) : e;
    }
    (u.prototype.toArray = function (e) {
        return en(this, e);
    }),
        (c.prototype.toArray = function (e) {
            return en(this, e);
        }),
        (d.prototype.toArray = function (e) {
            return en(this, e);
        }),
        (u.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return er(this, e, t);
            for (var n, r = this.value, i = r.length, a = String(r[--i]), s = "0000000"; --i >= 0; )
                a += s.slice((n = String(r[i])).length) + n;
            return (this.sign ? "-" : "") + a;
        }),
        (c.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? er(this, e, t) : String(this.value);
        }),
        (d.prototype.toString = c.prototype.toString),
        (d.prototype.toJSON =
            u.prototype.toJSON =
            c.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (u.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (u.prototype.toJSNumber = u.prototype.valueOf),
        (c.prototype.valueOf = function () {
            return this.value;
        }),
        (c.prototype.toJSNumber = c.prototype.valueOf),
        (d.prototype.valueOf = d.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var eo = 0; eo < 1e3; eo++) (l[eo] = es(eo)), eo > 0 && (l[-eo] = es(-eo));
    return (
        (l.one = l[1]),
        (l.zero = l[0]),
        (l.minusOne = l[-1]),
        (l.max = z),
        (l.min = q),
        (l.gcd = X),
        (l.lcm = Z),
        (l.isInstance = function (e) {
            return e instanceof u || e instanceof c || e instanceof d;
        }),
        (l.randBetween = Q),
        (l.fromArray = function (e, t, n) {
            return ee(e.map(es), es(t || 10), n);
        }),
        l
    );
})();
e.hasOwnProperty("exports") && (e.exports = r),
    "function" == typeof define &&
        define.amd &&
        define(function () {
            return r;
        });
