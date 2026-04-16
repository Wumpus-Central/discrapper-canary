e = n.nmd(e);
var r = (function () {
    "use strict";
    var e = 1e7,
        t = 7,
        n = 0x20000000000000,
        i = _(0x20000000000000),
        s = "0123456789abcdefghijklmnopqrstuvwxyz",
        a = "function" == typeof BigInt;
    function o(e, t, n, r) {
        return void 0 === e ? o[0] : void 0 !== t && (10 != +t || n) ? X(e, t, n, r) : ei(e);
    }
    function l(e, t) {
        (this.value = e), (this.sign = t), (this.isSmall = !1);
    }
    function u(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function c(e) {
        this.value = e;
    }
    function d(e) {
        return -n < e && e < n;
    }
    function _(e) {
        return e < 1e7
            ? [e]
            : e < 1e14
              ? [e % 1e7, Math.floor(e / 1e7)]
              : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
    }
    function f(t) {
        p(t);
        var n = t.length;
        if (n < 4 && 0 > P(t, i))
            switch (n) {
                case 0:
                    return 0;
                case 1:
                    return t[0];
                case 2:
                    return t[0] + t[1] * e;
                default:
                    return t[0] + (t[1] + t[2] * e) * e;
            }
        return t;
    }
    function p(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function h(e) {
        for (var t = Array(e), n = -1; ++n < e; ) t[n] = 0;
        return t;
    }
    function m(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function E(t, n) {
        var r,
            i,
            s = t.length,
            a = n.length,
            o = Array(s),
            l = 0,
            u = e;
        for (i = 0; i < a; i++) (l = +((r = t[i] + n[i] + l) >= u)), (o[i] = r - l * u);
        for (; i < s; ) (l = +((r = t[i] + l) === u)), (o[i++] = r - l * u);
        return l > 0 && o.push(l), o;
    }
    function g(e, t) {
        return e.length >= t.length ? E(e, t) : E(t, e);
    }
    function A(t, n) {
        var r,
            i,
            s = t.length,
            a = Array(s),
            o = e;
        for (i = 0; i < s; i++) (n = Math.floor((r = t[i] - o + n) / o)), (a[i] = r - n * o), (n += 1);
        for (; n > 0; ) (a[i++] = n % o), (n = Math.floor(n / o));
        return a;
    }
    function I(t, n) {
        var r,
            i,
            s = t.length,
            a = n.length,
            o = Array(s),
            l = 0,
            u = e;
        for (r = 0; r < a; r++) (i = t[r] - l - n[r]) < 0 ? ((i += u), (l = 1)) : (l = 0), (o[r] = i);
        for (r = a; r < s; r++) {
            if ((i = t[r] - l) < 0) i += u;
            else {
                o[r++] = i;
                break;
            }
            o[r] = i;
        }
        for (; r < s; r++) o[r] = t[r];
        return p(o), o;
    }
    function T(e, t, n) {
        var r;
        return (P(e, t) >= 0 ? (r = I(e, t)) : ((r = I(t, e)), (n = !n)), "number" == typeof (r = f(r)))
            ? (n && (r = -r), new u(r))
            : new l(r, n);
    }
    function S(t, n, r) {
        var i,
            s,
            a = t.length,
            o = Array(a),
            c = -n,
            d = e;
        for (i = 0; i < a; i++) (c = Math.floor((s = t[i] + c) / d)), (s %= d), (o[i] = s < 0 ? s + d : s);
        return "number" == typeof (o = f(o)) ? (r && (o = -o), new u(o)) : new l(o, r);
    }
    function y(t, n) {
        var r,
            i,
            s,
            a,
            o = t.length,
            l = n.length,
            u = h(o + l),
            c = e;
        for (s = 0; s < o; ++s) {
            a = t[s];
            for (var d = 0; d < l; ++d)
                (i = Math.floor((r = a * n[d] + u[s + d]) / c)), (u[s + d] = r - i * c), (u[s + d + 1] += i);
        }
        return p(u), u;
    }
    function v(t, n) {
        var r,
            i,
            s = t.length,
            a = Array(s),
            o = e,
            l = 0;
        for (i = 0; i < s; i++) (l = Math.floor((r = t[i] * n + l) / o)), (a[i] = r - l * o);
        for (; l > 0; ) (a[i++] = l % o), (l = Math.floor(l / o));
        return a;
    }
    function N(e, t) {
        for (var n = []; t-- > 0; ) n.push(0);
        return n.concat(e);
    }
    function C(e, t) {
        var n = Math.max(e.length, t.length);
        if (n <= 30) return y(e, t);
        n = Math.ceil(n / 2);
        var r = e.slice(n),
            i = e.slice(0, n),
            s = t.slice(n),
            a = t.slice(0, n),
            o = C(i, a),
            l = C(r, s),
            u = C(g(i, r), g(a, s)),
            c = g(g(o, N(I(I(u, o), l), n)), N(l, 2 * n));
        return p(c), c;
    }
    function R(e, t) {
        return -0.012 * e - 0.012 * t + 15e-6 * e * t > 0;
    }
    function O(t, n, r) {
        return t < e ? new l(v(n, t), r) : new l(y(n, _(t)), r);
    }
    function b(t) {
        var n,
            r,
            i,
            s,
            a = t.length,
            o = h(a + a),
            l = e;
        for (i = 0; i < a; i++) {
            r = 0 - (s = t[i]) * s;
            for (var u = i; u < a; u++) (r = Math.floor((n = s * t[u] * 2 + o[i + u] + r) / l)), (o[i + u] = n - r * l);
            o[i + a] = r;
        }
        return p(o), o;
    }
    function D(t, n) {
        var r,
            i,
            s,
            a,
            o,
            l,
            u,
            c = t.length,
            d = n.length,
            _ = e,
            p = h(n.length),
            m = n[d - 1],
            E = Math.ceil(_ / (2 * m)),
            g = v(t, E),
            A = v(n, E);
        for (g.length <= c && g.push(0), A.push(0), m = A[d - 1], i = c - d; i >= 0; i--) {
            for (
                r = _ - 1,
                    g[i + d] !== m && (r = Math.floor((g[i + d] * _ + g[i + d - 1]) / m)),
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
            p[i] = r;
        }
        return (g = w(g, E)[0]), [f(p), f(g)];
    }
    function L(t, n) {
        for (var r, i, s, a, o, l = t.length, u = n.length, c = [], d = [], _ = e; l; ) {
            if ((d.unshift(t[--l]), p(d), 0 > P(d, n))) {
                c.push(0);
                continue;
            }
            (i = d.length),
                (s = d[i - 1] * _ + d[i - 2]),
                (a = n[u - 1] * _ + n[u - 2]),
                i > u && (s = (s + 1) * _),
                (r = Math.ceil(s / a));
            do {
                if (0 >= P((o = v(n, r)), d)) break;
                r--;
            } while (r);
            c.push(r), (d = I(d, o));
        }
        return c.reverse(), [f(c), f(d)];
    }
    function w(t, n) {
        var r,
            i,
            s,
            a,
            o = t.length,
            l = h(o),
            u = e;
        for (s = 0, r = o - 1; r >= 0; --r) (i = m((a = s * u + t[r]) / n)), (s = a - i * n), (l[r] = 0 | i);
        return [l, 0 | s];
    }
    function M(t, n) {
        var r,
            i,
            s = ei(n);
        if (a) return [new c(t.value / s.value), new c(t.value % s.value)];
        var d = t.value,
            p = s.value;
        if (0 === p) throw Error("Cannot divide by zero");
        if (t.isSmall) return s.isSmall ? [new u(m(d / p)), new u(d % p)] : [o[0], t];
        if (s.isSmall) {
            if (1 === p) return [t, o[0]];
            if (-1 == p) return [t.negate(), o[0]];
            var h = Math.abs(p);
            if (h < e) {
                r = f((i = w(d, h))[0]);
                var E = i[1];
                return (t.sign && (E = -E), "number" == typeof r)
                    ? (t.sign !== s.sign && (r = -r), [new u(r), new u(E)])
                    : [new l(r, t.sign !== s.sign), new u(E)];
            }
            p = _(h);
        }
        var g = P(d, p);
        if (-1 === g) return [o[0], t];
        if (0 === g) return [o[t.sign === s.sign ? 1 : -1], o[0]];
        r = (i = d.length + p.length <= 200 ? D(d, p) : L(d, p))[0];
        var A = t.sign !== s.sign,
            I = i[1],
            T = t.sign;
        return (
            "number" == typeof r ? (A && (r = -r), (r = new u(r))) : (r = new l(r, A)),
            "number" == typeof I ? (T && (I = -I), (I = new u(I))) : (I = new l(I, T)),
            [r, I]
        );
    }
    function P(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var n = e.length - 1; n >= 0; n--) if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0;
    }
    function x(e) {
        var t = e.abs();
        return (
            !t.isUnit() &&
            (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)))
        );
    }
    function k(e, t) {
        for (var n, i, s, a = e.prev(), o = a, l = 0; o.isEven(); ) (o = o.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((s = r(t[i]).modPow(o, e)).isUnit() || s.equals(a))) {
                for (n = l - 1; 0 != n && !(s = s.square().mod(e)).isUnit(); n--) if (s.equals(a)) continue t;
                return !1;
            }
        return !0;
    }
    (l.prototype = Object.create(o.prototype)),
        (u.prototype = Object.create(o.prototype)),
        (c.prototype = Object.create(o.prototype)),
        (l.prototype.add = function (e) {
            var t = ei(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? new l(A(n, Math.abs(r)), this.sign) : new l(g(n, r), this.sign);
        }),
        (l.prototype.plus = l.prototype.add),
        (u.prototype.add = function (e) {
            var t = ei(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.subtract(t.negate());
            var r = t.value;
            if (t.isSmall) {
                if (d(n + r)) return new u(n + r);
                r = _(Math.abs(r));
            }
            return new l(A(r, Math.abs(n)), n < 0);
        }),
        (u.prototype.plus = u.prototype.add),
        (c.prototype.add = function (e) {
            return new c(this.value + ei(e).value);
        }),
        (c.prototype.plus = c.prototype.add),
        (l.prototype.subtract = function (e) {
            var t = ei(e);
            if (this.sign !== t.sign) return this.add(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? S(n, Math.abs(r), this.sign) : T(n, r, this.sign);
        }),
        (l.prototype.minus = l.prototype.subtract),
        (u.prototype.subtract = function (e) {
            var t = ei(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.add(t.negate());
            var r = t.value;
            return t.isSmall ? new u(n - r) : S(r, Math.abs(n), n >= 0);
        }),
        (u.prototype.minus = u.prototype.subtract),
        (c.prototype.subtract = function (e) {
            return new c(this.value - ei(e).value);
        }),
        (c.prototype.minus = c.prototype.subtract),
        (l.prototype.negate = function () {
            return new l(this.value, !this.sign);
        }),
        (u.prototype.negate = function () {
            var e = this.sign,
                t = new u(-this.value);
            return (t.sign = !e), t;
        }),
        (c.prototype.negate = function () {
            return new c(-this.value);
        }),
        (l.prototype.abs = function () {
            return new l(this.value, !1);
        }),
        (u.prototype.abs = function () {
            return new u(Math.abs(this.value));
        }),
        (c.prototype.abs = function () {
            return new c(this.value >= 0 ? this.value : -this.value);
        }),
        (l.prototype.multiply = function (t) {
            var n,
                r = ei(t),
                i = this.value,
                s = r.value,
                a = this.sign !== r.sign;
            if (r.isSmall) {
                if (0 === s) return o[0];
                if (1 === s) return this;
                if (-1 === s) return this.negate();
                if ((n = Math.abs(s)) < e) return new l(v(i, n), a);
                s = _(n);
            }
            return R(i.length, s.length) ? new l(C(i, s), a) : new l(y(i, s), a);
        }),
        (l.prototype.times = l.prototype.multiply),
        (u.prototype._multiplyBySmall = function (e) {
            return d(e.value * this.value)
                ? new u(e.value * this.value)
                : O(Math.abs(e.value), _(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (l.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? o[0]
                : 1 === e.value
                  ? this
                  : -1 === e.value
                    ? this.negate()
                    : O(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (u.prototype.multiply = function (e) {
            return ei(e)._multiplyBySmall(this);
        }),
        (u.prototype.times = u.prototype.multiply),
        (c.prototype.multiply = function (e) {
            return new c(this.value * ei(e).value);
        }),
        (c.prototype.times = c.prototype.multiply),
        (l.prototype.square = function () {
            return new l(b(this.value), !1);
        }),
        (u.prototype.square = function () {
            var e = this.value * this.value;
            return d(e) ? new u(e) : new l(b(_(Math.abs(this.value))), !1);
        }),
        (c.prototype.square = function (e) {
            return new c(this.value * this.value);
        }),
        (l.prototype.divmod = function (e) {
            var t = M(this, e);
            return { quotient: t[0], remainder: t[1] };
        }),
        (c.prototype.divmod = u.prototype.divmod = l.prototype.divmod),
        (l.prototype.divide = function (e) {
            return M(this, e)[0];
        }),
        (c.prototype.over = c.prototype.divide =
            function (e) {
                return new c(this.value / ei(e).value);
            }),
        (u.prototype.over = u.prototype.divide = l.prototype.over = l.prototype.divide),
        (l.prototype.mod = function (e) {
            return M(this, e)[1];
        }),
        (c.prototype.mod = c.prototype.remainder =
            function (e) {
                return new c(this.value % ei(e).value);
            }),
        (u.prototype.remainder = u.prototype.mod = l.prototype.remainder = l.prototype.mod),
        (l.prototype.pow = function (e) {
            var t,
                n,
                r,
                i = ei(e),
                s = this.value,
                a = i.value;
            if (0 === a) return o[1];
            if (0 === s) return o[0];
            if (1 === s) return o[1];
            if (-1 === s) return i.isEven() ? o[1] : o[-1];
            if (i.sign) return o[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && d((t = Math.pow(s, a)))) return new u(m(t));
            for (n = this, r = o[1]; !0 & a && ((r = r.times(n)), --a), 0 !== a; ) (a /= 2), (n = n.square());
            return r;
        }),
        (u.prototype.pow = l.prototype.pow),
        (c.prototype.pow = function (e) {
            var t = ei(e),
                n = this.value,
                r = t.value,
                i = BigInt(0),
                s = BigInt(1),
                a = BigInt(2);
            if (r === i) return o[1];
            if (n === i) return o[0];
            if (n === s) return o[1];
            if (n === BigInt(-1)) return t.isEven() ? o[1] : o[-1];
            if (t.isNegative()) return new c(i);
            for (var l = this, u = o[1]; (r & s) === s && ((u = u.times(l)), --r), r !== i; )
                (r /= a), (l = l.square());
            return u;
        }),
        (l.prototype.modPow = function (e, t) {
            if (((e = ei(e)), (t = ei(t)).isZero())) throw Error("Cannot take modPow with modulus 0");
            var n = o[1],
                r = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(o[-1])), (r = r.modInv(t))); e.isPositive(); ) {
                if (r.isZero()) return o[0];
                e.isOdd() && (n = n.multiply(r).mod(t)), (e = e.divide(2)), (r = r.square().mod(t));
            }
            return n;
        }),
        (c.prototype.modPow = u.prototype.modPow = l.prototype.modPow),
        (l.prototype.compareAbs = function (e) {
            var t = ei(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? 1 : P(n, r);
        }),
        (u.prototype.compareAbs = function (e) {
            var t = ei(e),
                n = Math.abs(this.value),
                r = t.value;
            return t.isSmall ? (n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1) : -1;
        }),
        (c.prototype.compareAbs = function (e) {
            var t = this.value,
                n = ei(e).value;
            return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1;
        }),
        (l.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = ei(e),
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
        (l.prototype.compareTo = l.prototype.compare),
        (u.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = ei(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? (n == r ? 0 : n > r ? 1 : -1) : n < 0 !== t.sign ? (n < 0 ? -1 : 1) : n < 0 ? 1 : -1;
        }),
        (u.prototype.compareTo = u.prototype.compare),
        (c.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                n = ei(e).value;
            return t === n ? 0 : t > n ? 1 : -1;
        }),
        (c.prototype.compareTo = c.prototype.compare),
        (l.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (c.prototype.eq =
            c.prototype.equals =
            u.prototype.eq =
            u.prototype.equals =
            l.prototype.eq =
                l.prototype.equals),
        (l.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (c.prototype.neq =
            c.prototype.notEquals =
            u.prototype.neq =
            u.prototype.notEquals =
            l.prototype.neq =
                l.prototype.notEquals),
        (l.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (c.prototype.gt =
            c.prototype.greater =
            u.prototype.gt =
            u.prototype.greater =
            l.prototype.gt =
                l.prototype.greater),
        (l.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (c.prototype.lt =
            c.prototype.lesser =
            u.prototype.lt =
            u.prototype.lesser =
            l.prototype.lt =
                l.prototype.lesser),
        (l.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (c.prototype.geq =
            c.prototype.greaterOrEquals =
            u.prototype.geq =
            u.prototype.greaterOrEquals =
            l.prototype.geq =
                l.prototype.greaterOrEquals),
        (l.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (c.prototype.leq =
            c.prototype.lesserOrEquals =
            u.prototype.leq =
            u.prototype.lesserOrEquals =
            l.prototype.leq =
                l.prototype.lesserOrEquals),
        (l.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (u.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (c.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (l.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (u.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (c.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (l.prototype.isPositive = function () {
            return !this.sign;
        }),
        (u.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (c.prototype.isPositive = u.prototype.isPositive),
        (l.prototype.isNegative = function () {
            return this.sign;
        }),
        (u.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (c.prototype.isNegative = u.prototype.isNegative),
        (l.prototype.isUnit = function () {
            return !1;
        }),
        (u.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (c.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (l.prototype.isZero = function () {
            return !1;
        }),
        (u.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (c.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (l.prototype.isDivisibleBy = function (e) {
            var t = ei(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (c.prototype.isDivisibleBy = u.prototype.isDivisibleBy = l.prototype.isDivisibleBy),
        (l.prototype.isPrime = function (e) {
            var t = x(this);
            if (void 0 !== t) return t;
            var n = this.abs(),
                i = n.bitLength();
            if (i <= 64) return k(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var s = Math.log(2) * i.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(s, 2) : s), o = [], l = 0;
                l < a;
                l++
            )
                o.push(r(l + 2));
            return k(n, o);
        }),
        (c.prototype.isPrime = u.prototype.isPrime = l.prototype.isPrime),
        (l.prototype.isProbablePrime = function (e, t) {
            var n = x(this);
            if (void 0 !== n) return n;
            for (var i = this.abs(), s = void 0 === e ? 5 : e, a = [], o = 0; o < s; o++)
                a.push(r.randBetween(2, i.minus(2), t));
            return k(i, a);
        }),
        (c.prototype.isProbablePrime = u.prototype.isProbablePrime = l.prototype.isProbablePrime),
        (l.prototype.modInv = function (e) {
            for (var t, n, i, s = r.zero, a = r.one, o = ei(e), l = this.abs(); !l.isZero(); )
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
        (c.prototype.modInv = u.prototype.modInv = l.prototype.modInv),
        (l.prototype.next = function () {
            var e = this.value;
            return this.sign ? S(e, 1, this.sign) : new l(A(e, 1), this.sign);
        }),
        (u.prototype.next = function () {
            var e = this.value;
            return e + 1 < n ? new u(e + 1) : new l(i, !1);
        }),
        (c.prototype.next = function () {
            return new c(this.value + BigInt(1));
        }),
        (l.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new l(A(e, 1), !0) : S(e, 1, this.sign);
        }),
        (u.prototype.prev = function () {
            var e = this.value;
            return e - 1 > -n ? new u(e - 1) : new l(i, !0);
        }),
        (c.prototype.prev = function () {
            return new c(this.value - BigInt(1));
        });
    for (var U = [1]; 2 * U[U.length - 1] <= e; ) U.push(2 * U[U.length - 1]);
    var G = U.length,
        F = U[G - 1];
    function V(t) {
        return Math.abs(t) <= e;
    }
    function B(e, t, n) {
        t = ei(t);
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
            (l = (c = M(a, F))[1].toJSNumber()),
                i && (l = F - 1 - l),
                (u = (d = M(o, F))[1].toJSNumber()),
                s && (u = F - 1 - u),
                (a = c[0]),
                (o = d[0]),
                _.push(n(l, u));
        for (var f = 0 !== n(+!!i, +!!s) ? r(-1) : r(0), p = _.length - 1; p >= 0; p -= 1)
            f = f.multiply(F).add(r(_[p]));
        return f;
    }
    (l.prototype.shiftLeft = function (e) {
        var t = ei(e).toJSNumber();
        if (!V(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var n = this;
        if (n.isZero()) return n;
        for (; t >= G; ) (n = n.multiply(F)), (t -= G - 1);
        return n.multiply(U[t]);
    }),
        (c.prototype.shiftLeft = u.prototype.shiftLeft = l.prototype.shiftLeft),
        (l.prototype.shiftRight = function (e) {
            var t,
                n = ei(e).toJSNumber();
            if (!V(n)) throw Error(String(n) + " is too large for shifting.");
            if (n < 0) return this.shiftLeft(-n);
            for (var r = this; n >= G; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (t = M(r, F))[1].isNegative() ? t[0].prev() : t[0]), (n -= G - 1);
            }
            return (t = M(r, U[n]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (c.prototype.shiftRight = u.prototype.shiftRight = l.prototype.shiftRight),
        (l.prototype.not = function () {
            return this.negate().prev();
        }),
        (c.prototype.not = u.prototype.not = l.prototype.not),
        (l.prototype.and = function (e) {
            return B(this, e, function (e, t) {
                return e & t;
            });
        }),
        (c.prototype.and = u.prototype.and = l.prototype.and),
        (l.prototype.or = function (e) {
            return B(this, e, function (e, t) {
                return e | t;
            });
        }),
        (c.prototype.or = u.prototype.or = l.prototype.or),
        (l.prototype.xor = function (e) {
            return B(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (c.prototype.xor = u.prototype.xor = l.prototype.xor);
    var H = 0x40000000,
        j = ((e & -e) * (e & -e)) | 0x40000000;
    function Y(t) {
        var n = t.value,
            r = "number" == typeof n ? n | H : "bigint" == typeof n ? n | BigInt(H) : (n[0] + n[1] * e) | j;
        return r & -r;
    }
    function W(e, t) {
        if (0 >= t.compareTo(e)) {
            var n = W(e, t.square(t)),
                i = n.p,
                s = n.e,
                a = i.multiply(t);
            return 0 >= a.compareTo(e) ? { p: a, e: 2 * s + 1 } : { p: i, e: 2 * s };
        }
        return { p: r(1), e: 0 };
    }
    function K(e, t) {
        return (e = ei(e)), (t = ei(t)), e.greater(t) ? e : t;
    }
    function $(e, t) {
        return (e = ei(e)), (t = ei(t)), e.lesser(t) ? e : t;
    }
    function z(e, t) {
        if (((e = ei(e).abs()), (t = ei(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var n, r, i = o[1]; e.isEven() && t.isEven(); )
            (n = $(Y(e), Y(t))), (e = e.divide(n)), (t = t.divide(n)), (i = i.multiply(n));
        for (; e.isEven(); ) e = e.divide(Y(e));
        do {
            for (; t.isEven(); ) t = t.divide(Y(t));
            e.greater(t) && ((r = t), (t = e), (e = r)), (t = t.subtract(e));
        } while (!t.isZero());
        return i.isUnit() ? e : e.multiply(i);
    }
    function q(e, t) {
        return (e = ei(e).abs()), (t = ei(t).abs()), e.divide(z(e, t)).multiply(t);
    }
    function Z(t, n, r) {
        t = ei(t);
        var i = r || Math.random,
            s = $(t, (n = ei(n))),
            a = K(t, n).subtract(s).add(1);
        if (a.isSmall) return s.add(Math.floor(i() * a));
        for (var l = ee(a, e).value, u = [], c = !0, d = 0; d < l.length; d++) {
            var _ = c ? l[d] : e,
                f = m(i() * _);
            u.push(f), f < _ && (c = !1);
        }
        return s.add(o.fromArray(u, e, !1));
    }
    (l.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0)))
            ? r(0)
            : r(W(e, r(2)).e).add(r(1));
    }),
        (c.prototype.bitLength = u.prototype.bitLength = l.prototype.bitLength);
    var X = function (e, t, n, r) {
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
        t = ei(t);
        var c = [],
            d = "-" === e[0];
        for (i = +!!d; i < e.length; i++) {
            var u = e[i];
            if (u in l) c.push(ei(l[u]));
            else if ("<" === u) {
                var _ = i;
                do i++;
                while (">" !== e[i] && i < e.length);
                c.push(ei(e.slice(_ + 1, i)));
            } else throw Error(u + " is not a valid character");
        }
        return Q(c, t, d);
    };
    function Q(e, t, n) {
        var r,
            i = o[0],
            s = o[1];
        for (r = e.length - 1; r >= 0; r--) (i = i.add(e[r].times(s))), (s = s.times(t));
        return n ? i.negate() : i;
    }
    function J(e, t) {
        return e < (t = t || s).length ? t[e] : "<" + e + ">";
    }
    function ee(e, t) {
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
    function et(e, t, n) {
        var r = ee(e, t);
        return (
            (r.isNegative ? "-" : "") +
            r.value
                .map(function (e) {
                    return J(e, n);
                })
                .join("")
        );
    }
    function en(e) {
        if (d(+e)) {
            var n = +e;
            if (n === m(n)) return a ? new c(BigInt(n)) : new u(n);
            throw Error("Invalid integer: " + e);
        }
        var r = "-" === e[0];
        r && (e = e.slice(1));
        var i = e.split(/e/i);
        if (i.length > 2) throw Error("Invalid integer: " + i.join("e"));
        if (2 === i.length) {
            var s = i[1];
            if (("+" === s[0] && (s = s.slice(1)), (s *= 1) !== m(s) || !d(s)))
                throw Error("Invalid integer: " + s + " is not a valid exponent.");
            var o = i[0],
                _ = o.indexOf(".");
            if ((_ >= 0 && ((s -= o.length - _ - 1), (o = o.slice(0, _) + o.slice(_ + 1))), s < 0))
                throw Error("Cannot include negative exponent part for integers");
            (o += Array(s + 1).join("0")), (e = o);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (a) return new c(BigInt(r ? "-" + e : e));
        for (var f = [], h = e.length, E = t, g = h - E; h > 0; )
            f.push(+e.slice(g, h)), (g -= E) < 0 && (g = 0), (h -= E);
        return p(f), new l(f, r);
    }
    function er(e) {
        if (a) return new c(BigInt(e));
        if (d(e)) {
            if (e !== m(e)) throw Error(e + " is not an integer.");
            return new u(e);
        }
        return en(e.toString());
    }
    function ei(e) {
        return "number" == typeof e ? er(e) : "string" == typeof e ? en(e) : "bigint" == typeof e ? new c(e) : e;
    }
    (l.prototype.toArray = function (e) {
        return ee(this, e);
    }),
        (u.prototype.toArray = function (e) {
            return ee(this, e);
        }),
        (c.prototype.toArray = function (e) {
            return ee(this, e);
        }),
        (l.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return et(this, e, t);
            for (var n, r = this.value, i = r.length, s = String(r[--i]), a = "0000000"; --i >= 0; )
                s += a.slice((n = String(r[i])).length) + n;
            return (this.sign ? "-" : "") + s;
        }),
        (u.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? et(this, e, t) : String(this.value);
        }),
        (c.prototype.toString = u.prototype.toString),
        (c.prototype.toJSON =
            l.prototype.toJSON =
            u.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (l.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (l.prototype.toJSNumber = l.prototype.valueOf),
        (u.prototype.valueOf = function () {
            return this.value;
        }),
        (u.prototype.toJSNumber = u.prototype.valueOf),
        (c.prototype.valueOf = c.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var es = 0; es < 1e3; es++) (o[es] = ei(es)), es > 0 && (o[-es] = ei(-es));
    return (
        (o.one = o[1]),
        (o.zero = o[0]),
        (o.minusOne = o[-1]),
        (o.max = K),
        (o.min = $),
        (o.gcd = z),
        (o.lcm = q),
        (o.isInstance = function (e) {
            return e instanceof l || e instanceof u || e instanceof c;
        }),
        (o.randBetween = Z),
        (o.fromArray = function (e, t, n) {
            return Q(e.map(ei), ei(t || 10), n);
        }),
        o
    );
})();
e.hasOwnProperty("exports") && (e.exports = r),
    "function" == typeof define &&
        define.amd &&
        define(function () {
            return r;
        });
