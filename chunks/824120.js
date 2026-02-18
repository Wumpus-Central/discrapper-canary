e = n.nmd(e);
var r = (function (e) {
    "use strict";
    var t = 1e7,
        n = 7,
        i = 0x20000000000000,
        s = f(0x20000000000000),
        a = "0123456789abcdefghijklmnopqrstuvwxyz",
        o = "function" == typeof BigInt;
    function l(e, t, n, r) {
        return void 0 === e ? l[0] : void 0 !== t && (10 != +t || n) ? Q(e, t, n, r) : es(e);
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
    function p(e) {
        h(e);
        var n = e.length;
        if (n < 4 && 0 > P(e, s))
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
    function h(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function m(e) {
        for (var t = Array(e), n = -1; ++n < e; ) t[n] = 0;
        return t;
    }
    function E(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function g(e, n) {
        var r,
            i,
            s = e.length,
            a = n.length,
            o = Array(s),
            l = 0,
            u = t;
        for (i = 0; i < a; i++) (l = +((r = e[i] + n[i] + l) >= u)), (o[i] = r - l * u);
        for (; i < s; ) (l = +((r = e[i] + l) === u)), (o[i++] = r - l * u);
        return l > 0 && o.push(l), o;
    }
    function A(e, t) {
        return e.length >= t.length ? g(e, t) : g(t, e);
    }
    function I(e, n) {
        var r,
            i,
            s = e.length,
            a = Array(s),
            o = t;
        for (i = 0; i < s; i++) (n = Math.floor((r = e[i] - o + n) / o)), (a[i] = r - n * o), (n += 1);
        for (; n > 0; ) (a[i++] = n % o), (n = Math.floor(n / o));
        return a;
    }
    function T(e, n) {
        var r,
            i,
            s = e.length,
            a = n.length,
            o = Array(s),
            l = 0,
            u = t;
        for (r = 0; r < a; r++) (i = e[r] - l - n[r]) < 0 ? ((i += u), (l = 1)) : (l = 0), (o[r] = i);
        for (r = a; r < s; r++) {
            if ((i = e[r] - l) < 0) i += u;
            else {
                o[r++] = i;
                break;
            }
            o[r] = i;
        }
        for (; r < s; r++) o[r] = e[r];
        return h(o), o;
    }
    function S(e, t, n) {
        var r;
        return (P(e, t) >= 0 ? (r = T(e, t)) : ((r = T(t, e)), (n = !n)), "number" == typeof (r = p(r)))
            ? (n && (r = -r), new c(r))
            : new u(r, n);
    }
    function y(e, n, r) {
        var i,
            s,
            a = e.length,
            o = Array(a),
            l = -n,
            d = t;
        for (i = 0; i < a; i++) (l = Math.floor((s = e[i] + l) / d)), (s %= d), (o[i] = s < 0 ? s + d : s);
        return "number" == typeof (o = p(o)) ? (r && (o = -o), new c(o)) : new u(o, r);
    }
    function v(e, n) {
        var r,
            i,
            s,
            a,
            o = e.length,
            l = n.length,
            u = m(o + l),
            c = t;
        for (s = 0; s < o; ++s) {
            a = e[s];
            for (var d = 0; d < l; ++d)
                (i = Math.floor((r = a * n[d] + u[s + d]) / c)), (u[s + d] = r - i * c), (u[s + d + 1] += i);
        }
        return h(u), u;
    }
    function N(e, n) {
        var r,
            i,
            s = e.length,
            a = Array(s),
            o = t,
            l = 0;
        for (i = 0; i < s; i++) (l = Math.floor((r = e[i] * n + l) / o)), (a[i] = r - l * o);
        for (; l > 0; ) (a[i++] = l % o), (l = Math.floor(l / o));
        return a;
    }
    function C(e, t) {
        for (var n = []; t-- > 0; ) n.push(0);
        return n.concat(e);
    }
    function b(e, t) {
        var n = Math.max(e.length, t.length);
        if (n <= 30) return v(e, t);
        n = Math.ceil(n / 2);
        var r = e.slice(n),
            i = e.slice(0, n),
            s = t.slice(n),
            a = t.slice(0, n),
            o = b(i, a),
            l = b(r, s),
            u = b(A(i, r), A(a, s)),
            c = A(A(o, C(T(T(u, o), l), n)), C(l, 2 * n));
        return h(c), c;
    }
    function R(e, t) {
        return -0.012 * e - 0.012 * t + 15e-6 * e * t > 0;
    }
    function O(e, n, r) {
        return e < t ? new u(N(n, e), r) : new u(v(n, f(e)), r);
    }
    function D(e) {
        var n,
            r,
            i,
            s,
            a = e.length,
            o = m(a + a),
            l = t;
        for (i = 0; i < a; i++) {
            r = 0 - (s = e[i]) * s;
            for (var u = i; u < a; u++) (r = Math.floor((n = s * e[u] * 2 + o[i + u] + r) / l)), (o[i + u] = n - r * l);
            o[i + a] = r;
        }
        return h(o), o;
    }
    function L(e, n) {
        var r,
            i,
            s,
            a,
            o,
            l,
            u,
            c = e.length,
            d = n.length,
            _ = t,
            f = m(n.length),
            h = n[d - 1],
            E = Math.ceil(_ / (2 * h)),
            g = N(e, E),
            A = N(n, E);
        for (g.length <= c && g.push(0), A.push(0), h = A[d - 1], i = c - d; i >= 0; i--) {
            for (
                r = _ - 1,
                    g[i + d] !== h && (r = Math.floor((g[i + d] * _ + g[i + d - 1]) / h)),
                    s = 0,
                    a = 0,
                    l = A.length,
                    o = 0;
                o < l;
                o++
            )
                (s += r * A[o]),
                    (u = Math.floor(s / _)),
                    (a += g[i + o] - (s - u * _)),
                    (s = u),
                    a < 0 ? ((g[i + o] = a + _), (a = -1)) : ((g[i + o] = a), (a = 0));
            for (; 0 !== a; ) {
                for (r -= 1, s = 0, o = 0; o < l; o++)
                    (s += g[i + o] - _ + A[o]) < 0 ? ((g[i + o] = s + _), (s = 0)) : ((g[i + o] = s), (s = 1));
                a += s;
            }
            f[i] = r;
        }
        return (g = x(g, E)[0]), [p(f), p(g)];
    }
    function w(e, n) {
        for (var r, i, s, a, o, l = e.length, u = n.length, c = [], d = [], _ = t; l; ) {
            if ((d.unshift(e[--l]), h(d), 0 > P(d, n))) {
                c.push(0);
                continue;
            }
            (i = d.length),
                (s = d[i - 1] * _ + d[i - 2]),
                (a = n[u - 1] * _ + n[u - 2]),
                i > u && (s = (s + 1) * _),
                (r = Math.ceil(s / a));
            do {
                if (0 >= P((o = N(n, r)), d)) break;
                r--;
            } while (r);
            c.push(r), (d = T(d, o));
        }
        return c.reverse(), [p(c), p(d)];
    }
    function x(e, n) {
        var r,
            i,
            s,
            a,
            o = e.length,
            l = m(o),
            u = t;
        for (s = 0, r = o - 1; r >= 0; --r) (i = E((a = s * u + e[r]) / n)), (s = a - i * n), (l[r] = 0 | i);
        return [l, 0 | s];
    }
    function M(e, n) {
        var r,
            i,
            s = es(n);
        if (o) return [new d(e.value / s.value), new d(e.value % s.value)];
        var a = e.value,
            _ = s.value;
        if (0 === _) throw Error("Cannot divide by zero");
        if (e.isSmall) return s.isSmall ? [new c(E(a / _)), new c(a % _)] : [l[0], e];
        if (s.isSmall) {
            if (1 === _) return [e, l[0]];
            if (-1 == _) return [e.negate(), l[0]];
            var h = Math.abs(_);
            if (h < t) {
                r = p((i = x(a, h))[0]);
                var m = i[1];
                return (e.sign && (m = -m), "number" == typeof r)
                    ? (e.sign !== s.sign && (r = -r), [new c(r), new c(m)])
                    : [new u(r, e.sign !== s.sign), new c(m)];
            }
            _ = f(h);
        }
        var g = P(a, _);
        if (-1 === g) return [l[0], e];
        if (0 === g) return [l[e.sign === s.sign ? 1 : -1], l[0]];
        r = (i = a.length + _.length <= 200 ? L(a, _) : w(a, _))[0];
        var A = e.sign !== s.sign,
            I = i[1],
            T = e.sign;
        return (
            "number" == typeof r ? (A && (r = -r), (r = new c(r))) : (r = new u(r, A)),
            "number" == typeof I ? (T && (I = -I), (I = new c(I))) : (I = new u(I, T)),
            [r, I]
        );
    }
    function P(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var n = e.length - 1; n >= 0; n--) if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0;
    }
    function k(e) {
        var t = e.abs();
        return (
            !t.isUnit() &&
            (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)))
        );
    }
    function U(e, t) {
        for (var n, i, s, a = e.prev(), o = a, l = 0; o.isEven(); ) (o = o.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((s = r(t[i]).modPow(o, e)).isUnit() || s.equals(a))) {
                for (n = l - 1; 0 != n && !(s = s.square().mod(e)).isUnit(); n--) if (s.equals(a)) continue t;
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
            return t.isSmall ? new u(I(n, Math.abs(r)), this.sign) : new u(A(n, r), this.sign);
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
            return new u(I(r, Math.abs(n)), n < 0);
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
            return t.isSmall ? y(n, Math.abs(r), this.sign) : S(n, r, this.sign);
        }),
        (u.prototype.minus = u.prototype.subtract),
        (c.prototype.subtract = function (e) {
            var t = es(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.add(t.negate());
            var r = t.value;
            return t.isSmall ? new c(n - r) : y(r, Math.abs(n), n >= 0);
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
                s = r.value,
                a = this.sign !== r.sign;
            if (r.isSmall) {
                if (0 === s) return l[0];
                if (1 === s) return this;
                if (-1 === s) return this.negate();
                if ((n = Math.abs(s)) < t) return new u(N(i, n), a);
                s = f(n);
            }
            return R(i.length, s.length) ? new u(b(i, s), a) : new u(v(i, s), a);
        }),
        (u.prototype.times = u.prototype.multiply),
        (c.prototype._multiplyBySmall = function (e) {
            return _(e.value * this.value)
                ? new c(e.value * this.value)
                : O(Math.abs(e.value), f(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (u.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? l[0]
                : 1 === e.value
                  ? this
                  : -1 === e.value
                    ? this.negate()
                    : O(Math.abs(e.value), this.value, this.sign !== e.sign);
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
            return new u(D(this.value), !1);
        }),
        (c.prototype.square = function () {
            var e = this.value * this.value;
            return _(e) ? new c(e) : new u(D(f(Math.abs(this.value))), !1);
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
                s = this.value,
                a = i.value;
            if (0 === a) return l[1];
            if (0 === s) return l[0];
            if (1 === s) return l[1];
            if (-1 === s) return i.isEven() ? l[1] : l[-1];
            if (i.sign) return l[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && _((t = Math.pow(s, a)))) return new c(E(t));
            for (n = this, r = l[1]; !0 & a && ((r = r.times(n)), --a), 0 !== a; ) (a /= 2), (n = n.square());
            return r;
        }),
        (c.prototype.pow = u.prototype.pow),
        (d.prototype.pow = function (e) {
            var t = es(e),
                n = this.value,
                r = t.value,
                i = BigInt(0),
                s = BigInt(1),
                a = BigInt(2);
            if (r === i) return l[1];
            if (n === i) return l[0];
            if (n === s) return l[1];
            if (n === BigInt(-1)) return t.isEven() ? l[1] : l[-1];
            if (t.isNegative()) return new d(i);
            for (var o = this, u = l[1]; (r & s) === s && ((u = u.times(o)), --r), r !== i; )
                (r /= a), (o = o.square());
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
            return t.isSmall ? 1 : P(n, r);
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
                  : P(n, r) * (this.sign ? -1 : 1);
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
            var t = k(this);
            if (void 0 !== t) return t;
            var n = this.abs(),
                i = n.bitLength();
            if (i <= 64) return U(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var s = Math.log(2) * i.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(s, 2) : s), o = [], l = 0;
                l < a;
                l++
            )
                o.push(r(l + 2));
            return U(n, o);
        }),
        (d.prototype.isPrime = c.prototype.isPrime = u.prototype.isPrime),
        (u.prototype.isProbablePrime = function (e, t) {
            var n = k(this);
            if (void 0 !== n) return n;
            for (var i = this.abs(), s = void 0 === e ? 5 : e, a = [], o = 0; o < s; o++)
                a.push(r.randBetween(2, i.minus(2), t));
            return U(i, a);
        }),
        (d.prototype.isProbablePrime = c.prototype.isProbablePrime = u.prototype.isProbablePrime),
        (u.prototype.modInv = function (e) {
            for (var t, n, i, s = r.zero, a = r.one, o = es(e), l = this.abs(); !l.isZero(); )
                (t = o.divide(l)),
                    (n = s),
                    (i = o),
                    (s = a),
                    (o = l),
                    (a = n.subtract(t.multiply(a))),
                    (l = i.subtract(t.multiply(l)));
            if (!o.isUnit()) throw Error(this.toString() + " and " + e.toString() + " are not co-prime");
            return (-1 === s.compare(0) && (s = s.add(e)), this.isNegative()) ? s.negate() : s;
        }),
        (d.prototype.modInv = c.prototype.modInv = u.prototype.modInv),
        (u.prototype.next = function () {
            var e = this.value;
            return this.sign ? y(e, 1, this.sign) : new u(I(e, 1), this.sign);
        }),
        (c.prototype.next = function () {
            var e = this.value;
            return e + 1 < i ? new c(e + 1) : new u(s, !1);
        }),
        (d.prototype.next = function () {
            return new d(this.value + BigInt(1));
        }),
        (u.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new u(I(e, 1), !0) : y(e, 1, this.sign);
        }),
        (c.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -i ? new c(e - 1) : new u(s, !0);
        }),
        (d.prototype.prev = function () {
            return new d(this.value - BigInt(1));
        });
    for (var G = [1]; 2 * G[G.length - 1] <= t; ) G.push(2 * G[G.length - 1]);
    var F = G.length,
        V = G[F - 1];
    function B(e) {
        return Math.abs(e) <= t;
    }
    function H(e, t, n) {
        t = es(t);
        for (
            var i = e.isNegative(),
                s = t.isNegative(),
                a = i ? e.not() : e,
                o = s ? t.not() : t,
                l = 0,
                u = 0,
                c = null,
                d = null,
                _ = [];
            !a.isZero() || !o.isZero();
        )
            (l = (c = M(a, V))[1].toJSNumber()),
                i && (l = V - 1 - l),
                (u = (d = M(o, V))[1].toJSNumber()),
                s && (u = V - 1 - u),
                (a = c[0]),
                (o = d[0]),
                _.push(n(l, u));
        for (var f = 0 !== n(+!!i, +!!s) ? r(-1) : r(0), p = _.length - 1; p >= 0; p -= 1)
            f = f.multiply(V).add(r(_[p]));
        return f;
    }
    (u.prototype.shiftLeft = function (e) {
        var t = es(e).toJSNumber();
        if (!B(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var n = this;
        if (n.isZero()) return n;
        for (; t >= F; ) (n = n.multiply(V)), (t -= F - 1);
        return n.multiply(G[t]);
    }),
        (d.prototype.shiftLeft = c.prototype.shiftLeft = u.prototype.shiftLeft),
        (u.prototype.shiftRight = function (e) {
            var t,
                n = es(e).toJSNumber();
            if (!B(n)) throw Error(String(n) + " is too large for shifting.");
            if (n < 0) return this.shiftLeft(-n);
            for (var r = this; n >= F; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (t = M(r, V))[1].isNegative() ? t[0].prev() : t[0]), (n -= F - 1);
            }
            return (t = M(r, G[n]))[1].isNegative() ? t[0].prev() : t[0];
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
    var j = 0x40000000,
        Y = ((t & -t) * (t & -t)) | 0x40000000;
    function W(e) {
        var n = e.value,
            r = "number" == typeof n ? n | j : "bigint" == typeof n ? n | BigInt(j) : (n[0] + n[1] * t) | Y;
        return r & -r;
    }
    function K(e, t) {
        if (0 >= t.compareTo(e)) {
            var n = K(e, t.square(t)),
                i = n.p,
                s = n.e,
                a = i.multiply(t);
            return 0 >= a.compareTo(e) ? { p: a, e: 2 * s + 1 } : { p: i, e: 2 * s };
        }
        return { p: r(1), e: 0 };
    }
    function z(e, t) {
        return (e = es(e)), (t = es(t)), e.greater(t) ? e : t;
    }
    function $(e, t) {
        return (e = es(e)), (t = es(t)), e.lesser(t) ? e : t;
    }
    function q(e, t) {
        if (((e = es(e).abs()), (t = es(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var n, r, i = l[1]; e.isEven() && t.isEven(); )
            (n = $(W(e), W(t))), (e = e.divide(n)), (t = t.divide(n)), (i = i.multiply(n));
        for (; e.isEven(); ) e = e.divide(W(e));
        do {
            for (; t.isEven(); ) t = t.divide(W(t));
            e.greater(t) && ((r = t), (t = e), (e = r)), (t = t.subtract(e));
        } while (!t.isZero());
        return i.isUnit() ? e : e.multiply(i);
    }
    function Z(e, t) {
        return (e = es(e).abs()), (t = es(t).abs()), e.divide(q(e, t)).multiply(t);
    }
    function X(e, n, r) {
        e = es(e);
        var i = r || Math.random,
            s = $(e, (n = es(n))),
            a = z(e, n).subtract(s).add(1);
        if (a.isSmall) return s.add(Math.floor(i() * a));
        for (var o = et(a, t).value, u = [], c = !0, d = 0; d < o.length; d++) {
            var _ = c ? o[d] : t,
                f = E(i() * _);
            u.push(f), f < _ && (c = !1);
        }
        return s.add(l.fromArray(u, t, !1));
    }
    (u.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0)))
            ? r(0)
            : r(K(e, r(2)).e).add(r(1));
    }),
        (d.prototype.bitLength = c.prototype.bitLength = u.prototype.bitLength);
    var Q = function (e, t, n, r) {
        (n = n || a), (e = String(e)), r || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var i,
            s = e.length,
            o = Math.abs(t),
            l = {};
        for (i = 0; i < n.length; i++) l[n[i]] = i;
        for (i = 0; i < s; i++) {
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
        return J(c, t, d);
    };
    function J(e, t, n) {
        var r,
            i = l[0],
            s = l[1];
        for (r = e.length - 1; r >= 0; r--) (i = i.add(e[r].times(s))), (s = s.times(t));
        return n ? i.negate() : i;
    }
    function ee(e, t) {
        return e < (t = t || a).length ? t[e] : "<" + e + ">";
    }
    function et(e, t) {
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
        for (var s, a = [], o = e; o.isNegative() || o.compareAbs(t) >= 0; ) {
            o = (s = o.divmod(t)).quotient;
            var l = s.remainder;
            l.isNegative() && ((l = t.minus(l).abs()), (o = o.next())), a.push(l.toJSNumber());
        }
        return a.push(o.toJSNumber()), { value: a.reverse(), isNegative: i };
    }
    function en(e, t, n) {
        var r = et(e, t);
        return (
            (r.isNegative ? "-" : "") +
            r.value
                .map(function (e) {
                    return ee(e, n);
                })
                .join("")
        );
    }
    function er(e) {
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
            var s = i[1];
            if (("+" === s[0] && (s = s.slice(1)), (s *= 1) !== E(s) || !_(s)))
                throw Error("Invalid integer: " + s + " is not a valid exponent.");
            var a = i[0],
                l = a.indexOf(".");
            if ((l >= 0 && ((s -= a.length - l - 1), (a = a.slice(0, l) + a.slice(l + 1))), s < 0))
                throw Error("Cannot include negative exponent part for integers");
            (a += Array(s + 1).join("0")), (e = a);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (o) return new d(BigInt(r ? "-" + e : e));
        for (var f = [], p = e.length, m = n, g = p - m; p > 0; )
            f.push(+e.slice(g, p)), (g -= m) < 0 && (g = 0), (p -= m);
        return h(f), new u(f, r);
    }
    function ei(e) {
        if (o) return new d(BigInt(e));
        if (_(e)) {
            if (e !== E(e)) throw Error(e + " is not an integer.");
            return new c(e);
        }
        return er(e.toString());
    }
    function es(e) {
        return "number" == typeof e ? ei(e) : "string" == typeof e ? er(e) : "bigint" == typeof e ? new d(e) : e;
    }
    (u.prototype.toArray = function (e) {
        return et(this, e);
    }),
        (c.prototype.toArray = function (e) {
            return et(this, e);
        }),
        (d.prototype.toArray = function (e) {
            return et(this, e);
        }),
        (u.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return en(this, e, t);
            for (var n, r = this.value, i = r.length, s = String(r[--i]), a = "0000000"; --i >= 0; )
                s += a.slice((n = String(r[i])).length) + n;
            return (this.sign ? "-" : "") + s;
        }),
        (c.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? en(this, e, t) : String(this.value);
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
    for (var ea = 0; ea < 1e3; ea++) (l[ea] = es(ea)), ea > 0 && (l[-ea] = es(-ea));
    return (
        (l.one = l[1]),
        (l.zero = l[0]),
        (l.minusOne = l[-1]),
        (l.max = z),
        (l.min = $),
        (l.gcd = q),
        (l.lcm = Z),
        (l.isInstance = function (e) {
            return e instanceof u || e instanceof c || e instanceof d;
        }),
        (l.randBetween = X),
        (l.fromArray = function (e, t, n) {
            return J(e.map(es), es(t || 10), n);
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
