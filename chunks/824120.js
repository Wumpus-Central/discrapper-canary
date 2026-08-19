e = r.nmd(e);
var n = (function () {
    "use strict";
    var e = u(0x20000000000000),
        t = "0123456789abcdefghijklmnopqrstuvwxyz",
        r = "function" == typeof BigInt;
    function o(e, t, r, n) {
        return void 0 === e ? o[0] : void 0 !== t && (10 != +t || r) ? j(e, t, r, n) : U(e);
    }
    function i(e, t) {
        (this.value = e), (this.sign = t), (this.isSmall = !1);
    }
    function a(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function s(e) {
        this.value = e;
    }
    function l(e) {
        return -0x20000000000000 < e && e < 0x20000000000000;
    }
    function u(e) {
        return e < 1e7
            ? [e]
            : e < 1e14
              ? [e % 1e7, Math.floor(e / 1e7)]
              : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
    }
    function c(t) {
        f(t);
        var r = t.length;
        if (r < 4 && 0 > C(t, e))
            switch (r) {
                case 0:
                    return 0;
                case 1:
                    return t[0];
                case 2:
                    return t[0] + 1e7 * t[1];
                default:
                    return t[0] + (t[1] + 1e7 * t[2]) * 1e7;
            }
        return t;
    }
    function f(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function p(e) {
        for (var t = Array(e), r = -1; ++r < e; ) t[r] = 0;
        return t;
    }
    function d(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function h(e, t) {
        var r,
            n,
            o = e.length,
            i = t.length,
            a = Array(o),
            s = 0;
        for (n = 0; n < i; n++) (s = +((r = e[n] + t[n] + s) >= 1e7)), (a[n] = r - 1e7 * s);
        for (; n < o; ) (s = +(1e7 === (r = e[n] + s))), (a[n++] = r - 1e7 * s);
        return s > 0 && a.push(s), a;
    }
    function m(e, t) {
        return e.length >= t.length ? h(e, t) : h(t, e);
    }
    function v(e, t) {
        var r,
            n,
            o = e.length,
            i = Array(o);
        for (n = 0; n < o; n++) (t = Math.floor((r = e[n] - 1e7 + t) / 1e7)), (i[n] = r - 1e7 * t), (t += 1);
        for (; t > 0; ) (i[n++] = t % 1e7), (t = Math.floor(t / 1e7));
        return i;
    }
    function y(e, t) {
        var r,
            n,
            o = e.length,
            i = t.length,
            a = Array(o),
            s = 0;
        for (r = 0; r < i; r++) (n = e[r] - s - t[r]) < 0 ? ((n += 1e7), (s = 1)) : (s = 0), (a[r] = n);
        for (r = i; r < o; r++) {
            if ((n = e[r] - s) < 0) n += 1e7;
            else {
                a[r++] = n;
                break;
            }
            a[r] = n;
        }
        for (; r < o; r++) a[r] = e[r];
        return f(a), a;
    }
    function g(e, t, r) {
        var n,
            o,
            s = e.length,
            l = Array(s),
            u = -t;
        for (n = 0; n < s; n++) (u = Math.floor((o = e[n] + u) / 1e7)), (o %= 1e7), (l[n] = o < 0 ? o + 1e7 : o);
        return "number" == typeof (l = c(l)) ? (r && (l = -l), new a(l)) : new i(l, r);
    }
    function b(e, t) {
        var r,
            n,
            o,
            i,
            a = e.length,
            s = t.length,
            l = p(a + s);
        for (o = 0; o < a; ++o) {
            i = e[o];
            for (var u = 0; u < s; ++u)
                (n = Math.floor((r = i * t[u] + l[o + u]) / 1e7)), (l[o + u] = r - 1e7 * n), (l[o + u + 1] += n);
        }
        return f(l), l;
    }
    function w(e, t) {
        var r,
            n,
            o = e.length,
            i = Array(o),
            a = 0;
        for (n = 0; n < o; n++) (a = Math.floor((r = e[n] * t + a) / 1e7)), (i[n] = r - 1e7 * a);
        for (; a > 0; ) (i[n++] = a % 1e7), (a = Math.floor(a / 1e7));
        return i;
    }
    function _(e, t) {
        for (var r = []; t-- > 0; ) r.push(0);
        return r.concat(e);
    }
    function S(e, t, r) {
        return e < 1e7 ? new i(w(t, e), r) : new i(b(t, u(e)), r);
    }
    function E(e) {
        var t,
            r,
            n,
            o,
            i = e.length,
            a = p(i + i);
        for (n = 0; n < i; n++) {
            r = 0 - (o = e[n]) * o;
            for (var s = n; s < i; s++)
                (r = Math.floor((t = o * e[s] * 2 + a[n + s] + r) / 1e7)), (a[n + s] = t - 1e7 * r);
            a[n + i] = r;
        }
        return f(a), a;
    }
    function x(e, t) {
        var r,
            n,
            o,
            i,
            a = e.length,
            s = p(a);
        for (o = 0, r = a - 1; r >= 0; --r) (n = d((i = 1e7 * o + e[r]) / t)), (o = i - n * t), (s[r] = 0 | n);
        return [s, 0 | o];
    }
    function k(e, t) {
        var n,
            l,
            h = U(t);
        if (r) return [new s(e.value / h.value), new s(e.value % h.value)];
        var m = e.value,
            v = h.value;
        if (0 === v) throw Error("Cannot divide by zero");
        if (e.isSmall) return h.isSmall ? [new a(d(m / v)), new a(m % v)] : [o[0], e];
        if (h.isSmall) {
            if (1 === v) return [e, o[0]];
            if (-1 == v) return [e.negate(), o[0]];
            var g = Math.abs(v);
            if (g < 1e7) {
                n = c((l = x(m, g))[0]);
                var b = l[1];
                return (e.sign && (b = -b), "number" == typeof n)
                    ? (e.sign !== h.sign && (n = -n), [new a(n), new a(b)])
                    : [new i(n, e.sign !== h.sign), new a(b)];
            }
            v = u(g);
        }
        var _ = C(m, v);
        if (-1 === _) return [o[0], e];
        if (0 === _) return [o[e.sign === h.sign ? 1 : -1], o[0]];
        n = (l =
            m.length + v.length <= 200
                ? (function (e, t) {
                      var r,
                          n,
                          o,
                          i,
                          a,
                          s,
                          l,
                          u = e.length,
                          f = t.length,
                          d = p(t.length),
                          h = t[f - 1],
                          m = Math.ceil(1e7 / (2 * h)),
                          v = w(e, m),
                          y = w(t, m);
                      for (v.length <= u && v.push(0), y.push(0), h = y[f - 1], n = u - f; n >= 0; n--) {
                          for (
                              r = 1e7 - 1,
                                  v[n + f] !== h && (r = Math.floor((1e7 * v[n + f] + v[n + f - 1]) / h)),
                                  o = 0,
                                  i = 0,
                                  s = y.length,
                                  a = 0;
                              a < s;
                              a++
                          )
                              (o += r * y[a]),
                                  (l = Math.floor(o / 1e7)),
                                  (i += v[n + a] - (o - 1e7 * l)),
                                  (o = l),
                                  i < 0 ? ((v[n + a] = i + 1e7), (i = -1)) : ((v[n + a] = i), (i = 0));
                          for (; 0 !== i; ) {
                              for (r -= 1, o = 0, a = 0; a < s; a++)
                                  (o += v[n + a] - 1e7 + y[a]) < 0
                                      ? ((v[n + a] = o + 1e7), (o = 0))
                                      : ((v[n + a] = o), (o = 1));
                              i += o;
                          }
                          d[n] = r;
                      }
                      return (v = x(v, m)[0]), [c(d), c(v)];
                  })(m, v)
                : (function (e, t) {
                      for (var r, n, o, i, a, s = e.length, l = t.length, u = [], p = []; s; ) {
                          if ((p.unshift(e[--s]), f(p), 0 > C(p, t))) {
                              u.push(0);
                              continue;
                          }
                          (n = p.length),
                              (o = 1e7 * p[n - 1] + p[n - 2]),
                              (i = 1e7 * t[l - 1] + t[l - 2]),
                              n > l && (o = (o + 1) * 1e7),
                              (r = Math.ceil(o / i));
                          do {
                              if (0 >= C((a = w(t, r)), p)) break;
                              r--;
                          } while (r);
                          u.push(r), (p = y(p, a));
                      }
                      return u.reverse(), [c(u), c(p)];
                  })(m, v))[0];
        var S = e.sign !== h.sign,
            E = l[1],
            k = e.sign;
        return (
            "number" == typeof n ? (S && (n = -n), (n = new a(n))) : (n = new i(n, S)),
            "number" == typeof E ? (k && (E = -E), (E = new a(E))) : (E = new i(E, k)),
            [n, E]
        );
    }
    function C(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var r = e.length - 1; r >= 0; r--) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
        return 0;
    }
    function T(e) {
        var t = e.abs();
        return (
            !t.isUnit() &&
            (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)))
        );
    }
    function M(e, t) {
        for (var r, o, i, a = e.prev(), s = a, l = 0; s.isEven(); ) (s = s.divide(2)), l++;
        t: for (o = 0; o < t.length; o++)
            if (!e.lesser(t[o]) && !((i = n(t[o]).modPow(s, e)).isUnit() || i.equals(a))) {
                for (r = l - 1; 0 != r && !(i = i.square().mod(e)).isUnit(); r--) if (i.equals(a)) continue t;
                return !1;
            }
        return !0;
    }
    (i.prototype = Object.create(o.prototype)),
        (a.prototype = Object.create(o.prototype)),
        (s.prototype = Object.create(o.prototype)),
        (i.prototype.add = function (e) {
            var t = U(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var r = this.value,
                n = t.value;
            return t.isSmall ? new i(v(r, Math.abs(n)), this.sign) : new i(m(r, n), this.sign);
        }),
        (i.prototype.plus = i.prototype.add),
        (a.prototype.add = function (e) {
            var t = U(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.subtract(t.negate());
            var n = t.value;
            if (t.isSmall) {
                if (l(r + n)) return new a(r + n);
                n = u(Math.abs(n));
            }
            return new i(v(n, Math.abs(r)), r < 0);
        }),
        (a.prototype.plus = a.prototype.add),
        (s.prototype.add = function (e) {
            return new s(this.value + U(e).value);
        }),
        (s.prototype.plus = s.prototype.add),
        (i.prototype.subtract = function (e) {
            var t,
                r,
                n = U(e);
            if (this.sign !== n.sign) return this.add(n.negate());
            var o = this.value,
                s = n.value;
            return n.isSmall
                ? g(o, Math.abs(s), this.sign)
                : ((t = this.sign),
                  (C(o, s) >= 0 ? (r = y(o, s)) : ((r = y(s, o)), (t = !t)), "number" == typeof (r = c(r)))
                      ? (t && (r = -r), new a(r))
                      : new i(r, t));
        }),
        (i.prototype.minus = i.prototype.subtract),
        (a.prototype.subtract = function (e) {
            var t = U(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.add(t.negate());
            var n = t.value;
            return t.isSmall ? new a(r - n) : g(n, Math.abs(r), r >= 0);
        }),
        (a.prototype.minus = a.prototype.subtract),
        (s.prototype.subtract = function (e) {
            return new s(this.value - U(e).value);
        }),
        (s.prototype.minus = s.prototype.subtract),
        (i.prototype.negate = function () {
            return new i(this.value, !this.sign);
        }),
        (a.prototype.negate = function () {
            var e = this.sign,
                t = new a(-this.value);
            return (t.sign = !e), t;
        }),
        (s.prototype.negate = function () {
            return new s(-this.value);
        }),
        (i.prototype.abs = function () {
            return new i(this.value, !1);
        }),
        (a.prototype.abs = function () {
            return new a(Math.abs(this.value));
        }),
        (s.prototype.abs = function () {
            return new s(this.value >= 0 ? this.value : -this.value);
        }),
        (i.prototype.multiply = function (e) {
            var t,
                r,
                n,
                a = U(e),
                s = this.value,
                l = a.value,
                c = this.sign !== a.sign;
            if (a.isSmall) {
                if (0 === l) return o[0];
                if (1 === l) return this;
                if (-1 === l) return this.negate();
                if ((n = Math.abs(l)) < 1e7) return new i(w(s, n), c);
                l = u(n);
            }
            return -0.012 * (t = s.length) - 0.012 * (r = l.length) + 15e-6 * t * r > 0
                ? new i(
                      (function e(t, r) {
                          var n = Math.max(t.length, r.length);
                          if (n <= 30) return b(t, r);
                          n = Math.ceil(n / 2);
                          var o = t.slice(n),
                              i = t.slice(0, n),
                              a = r.slice(n),
                              s = r.slice(0, n),
                              l = e(i, s),
                              u = e(o, a),
                              c = e(m(i, o), m(s, a)),
                              p = m(m(l, _(y(y(c, l), u), n)), _(u, 2 * n));
                          return f(p), p;
                      })(s, l),
                      c,
                  )
                : new i(b(s, l), c);
        }),
        (i.prototype.times = i.prototype.multiply),
        (a.prototype._multiplyBySmall = function (e) {
            return l(e.value * this.value)
                ? new a(e.value * this.value)
                : S(Math.abs(e.value), u(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (i.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? o[0]
                : 1 === e.value
                  ? this
                  : -1 === e.value
                    ? this.negate()
                    : S(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (a.prototype.multiply = function (e) {
            return U(e)._multiplyBySmall(this);
        }),
        (a.prototype.times = a.prototype.multiply),
        (s.prototype.multiply = function (e) {
            return new s(this.value * U(e).value);
        }),
        (s.prototype.times = s.prototype.multiply),
        (i.prototype.square = function () {
            return new i(E(this.value), !1);
        }),
        (a.prototype.square = function () {
            var e = this.value * this.value;
            return l(e) ? new a(e) : new i(E(u(Math.abs(this.value))), !1);
        }),
        (s.prototype.square = function (e) {
            return new s(this.value * this.value);
        }),
        (i.prototype.divmod = function (e) {
            var t = k(this, e);
            return { quotient: t[0], remainder: t[1] };
        }),
        (s.prototype.divmod = a.prototype.divmod = i.prototype.divmod),
        (i.prototype.divide = function (e) {
            return k(this, e)[0];
        }),
        (s.prototype.over = s.prototype.divide =
            function (e) {
                return new s(this.value / U(e).value);
            }),
        (a.prototype.over = a.prototype.divide = i.prototype.over = i.prototype.divide),
        (i.prototype.mod = function (e) {
            return k(this, e)[1];
        }),
        (s.prototype.mod = s.prototype.remainder =
            function (e) {
                return new s(this.value % U(e).value);
            }),
        (a.prototype.remainder = a.prototype.mod = i.prototype.remainder = i.prototype.mod),
        (i.prototype.pow = function (e) {
            var t,
                r,
                n,
                i = U(e),
                s = this.value,
                u = i.value;
            if (0 === u) return o[1];
            if (0 === s) return o[0];
            if (1 === s) return o[1];
            if (-1 === s) return i.isEven() ? o[1] : o[-1];
            if (i.sign) return o[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && l((t = Math.pow(s, u)))) return new a(d(t));
            for (r = this, n = o[1]; !0 & u && ((n = n.times(r)), --u), 0 !== u; ) (u /= 2), (r = r.square());
            return n;
        }),
        (a.prototype.pow = i.prototype.pow),
        (s.prototype.pow = function (e) {
            var t = U(e),
                r = this.value,
                n = t.value,
                i = BigInt(0),
                a = BigInt(1),
                l = BigInt(2);
            if (n === i) return o[1];
            if (r === i) return o[0];
            if (r === a) return o[1];
            if (r === BigInt(-1)) return t.isEven() ? o[1] : o[-1];
            if (t.isNegative()) return new s(i);
            for (var u = this, c = o[1]; (n & a) === a && ((c = c.times(u)), --n), n !== i; )
                (n /= l), (u = u.square());
            return c;
        }),
        (i.prototype.modPow = function (e, t) {
            if (((e = U(e)), (t = U(t)).isZero())) throw Error("Cannot take modPow with modulus 0");
            var r = o[1],
                n = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(o[-1])), (n = n.modInv(t))); e.isPositive(); ) {
                if (n.isZero()) return o[0];
                e.isOdd() && (r = r.multiply(n).mod(t)), (e = e.divide(2)), (n = n.square().mod(t));
            }
            return r;
        }),
        (s.prototype.modPow = a.prototype.modPow = i.prototype.modPow),
        (i.prototype.compareAbs = function (e) {
            var t = U(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? 1 : C(r, n);
        }),
        (a.prototype.compareAbs = function (e) {
            var t = U(e),
                r = Math.abs(this.value),
                n = t.value;
            return t.isSmall ? (r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1) : -1;
        }),
        (s.prototype.compareAbs = function (e) {
            var t = this.value,
                r = U(e).value;
            return (t = t >= 0 ? t : -t) === (r = r >= 0 ? r : -r) ? 0 : t > r ? 1 : -1;
        }),
        (i.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = U(e),
                r = this.value,
                n = t.value;
            return this.sign !== t.sign
                ? t.sign
                    ? 1
                    : -1
                : t.isSmall
                  ? this.sign
                      ? -1
                      : 1
                  : C(r, n) * (this.sign ? -1 : 1);
        }),
        (i.prototype.compareTo = i.prototype.compare),
        (a.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = U(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? (r == n ? 0 : r > n ? 1 : -1) : r < 0 !== t.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
        }),
        (a.prototype.compareTo = a.prototype.compare),
        (s.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                r = U(e).value;
            return t === r ? 0 : t > r ? 1 : -1;
        }),
        (s.prototype.compareTo = s.prototype.compare),
        (i.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (s.prototype.eq =
            s.prototype.equals =
            a.prototype.eq =
            a.prototype.equals =
            i.prototype.eq =
                i.prototype.equals),
        (i.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (s.prototype.neq =
            s.prototype.notEquals =
            a.prototype.neq =
            a.prototype.notEquals =
            i.prototype.neq =
                i.prototype.notEquals),
        (i.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (s.prototype.gt =
            s.prototype.greater =
            a.prototype.gt =
            a.prototype.greater =
            i.prototype.gt =
                i.prototype.greater),
        (i.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (s.prototype.lt =
            s.prototype.lesser =
            a.prototype.lt =
            a.prototype.lesser =
            i.prototype.lt =
                i.prototype.lesser),
        (i.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (s.prototype.geq =
            s.prototype.greaterOrEquals =
            a.prototype.geq =
            a.prototype.greaterOrEquals =
            i.prototype.geq =
                i.prototype.greaterOrEquals),
        (i.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (s.prototype.leq =
            s.prototype.lesserOrEquals =
            a.prototype.leq =
            a.prototype.lesserOrEquals =
            i.prototype.leq =
                i.prototype.lesserOrEquals),
        (i.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (a.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (s.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (i.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (a.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (s.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (i.prototype.isPositive = function () {
            return !this.sign;
        }),
        (a.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (s.prototype.isPositive = a.prototype.isPositive),
        (i.prototype.isNegative = function () {
            return this.sign;
        }),
        (a.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (s.prototype.isNegative = a.prototype.isNegative),
        (i.prototype.isUnit = function () {
            return !1;
        }),
        (a.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (s.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (i.prototype.isZero = function () {
            return !1;
        }),
        (a.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (s.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (i.prototype.isDivisibleBy = function (e) {
            var t = U(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (s.prototype.isDivisibleBy = a.prototype.isDivisibleBy = i.prototype.isDivisibleBy),
        (i.prototype.isPrime = function (e) {
            var t = T(this);
            if (void 0 !== t) return t;
            var r = this.abs(),
                o = r.bitLength();
            if (o <= 64) return M(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var i = Math.log(2) * o.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(i, 2) : i), s = [], l = 0;
                l < a;
                l++
            )
                s.push(n(l + 2));
            return M(r, s);
        }),
        (s.prototype.isPrime = a.prototype.isPrime = i.prototype.isPrime),
        (i.prototype.isProbablePrime = function (e, t) {
            var r = T(this);
            if (void 0 !== r) return r;
            for (var o = this.abs(), i = void 0 === e ? 5 : e, a = [], s = 0; s < i; s++)
                a.push(n.randBetween(2, o.minus(2), t));
            return M(o, a);
        }),
        (s.prototype.isProbablePrime = a.prototype.isProbablePrime = i.prototype.isProbablePrime),
        (i.prototype.modInv = function (e) {
            for (var t, r, o, i = n.zero, a = n.one, s = U(e), l = this.abs(); !l.isZero(); )
                (t = s.divide(l)),
                    (r = i),
                    (o = s),
                    (i = a),
                    (s = l),
                    (a = r.subtract(t.multiply(a))),
                    (l = o.subtract(t.multiply(l)));
            if (!s.isUnit()) throw Error(this.toString() + " and " + e.toString() + " are not co-prime");
            return (-1 === i.compare(0) && (i = i.add(e)), this.isNegative()) ? i.negate() : i;
        }),
        (s.prototype.modInv = a.prototype.modInv = i.prototype.modInv),
        (i.prototype.next = function () {
            var e = this.value;
            return this.sign ? g(e, 1, this.sign) : new i(v(e, 1), this.sign);
        }),
        (a.prototype.next = function () {
            var t = this.value;
            return t + 1 < 0x20000000000000 ? new a(t + 1) : new i(e, !1);
        }),
        (s.prototype.next = function () {
            return new s(this.value + BigInt(1));
        }),
        (i.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new i(v(e, 1), !0) : g(e, 1, this.sign);
        }),
        (a.prototype.prev = function () {
            var t = this.value;
            return t - 1 > -0x20000000000000 ? new a(t - 1) : new i(e, !0);
        }),
        (s.prototype.prev = function () {
            return new s(this.value - BigInt(1));
        });
    for (var P = [1]; 2 * P[P.length - 1] <= 1e7; ) P.push(2 * P[P.length - 1]);
    var A = P.length,
        O = P[A - 1];
    function I(e) {
        return 1e7 >= Math.abs(e);
    }
    function D(e, t, r) {
        t = U(t);
        for (
            var o = e.isNegative(),
                i = t.isNegative(),
                a = o ? e.not() : e,
                s = i ? t.not() : t,
                l = 0,
                u = 0,
                c = null,
                f = null,
                p = [];
            !a.isZero() || !s.isZero();
        )
            (l = (c = k(a, O))[1].toJSNumber()),
                o && (l = O - 1 - l),
                (u = (f = k(s, O))[1].toJSNumber()),
                i && (u = O - 1 - u),
                (a = c[0]),
                (s = f[0]),
                p.push(r(l, u));
        for (var d = 0 !== r(+!!o, +!!i) ? n(-1) : n(0), h = p.length - 1; h >= 0; h -= 1)
            d = d.multiply(O).add(n(p[h]));
        return d;
    }
    (i.prototype.shiftLeft = function (e) {
        var t = U(e).toJSNumber();
        if (!I(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var r = this;
        if (r.isZero()) return r;
        for (; t >= A; ) (r = r.multiply(O)), (t -= A - 1);
        return r.multiply(P[t]);
    }),
        (s.prototype.shiftLeft = a.prototype.shiftLeft = i.prototype.shiftLeft),
        (i.prototype.shiftRight = function (e) {
            var t,
                r = U(e).toJSNumber();
            if (!I(r)) throw Error(String(r) + " is too large for shifting.");
            if (r < 0) return this.shiftLeft(-r);
            for (var n = this; r >= A; ) {
                if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                (n = (t = k(n, O))[1].isNegative() ? t[0].prev() : t[0]), (r -= A - 1);
            }
            return (t = k(n, P[r]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (s.prototype.shiftRight = a.prototype.shiftRight = i.prototype.shiftRight),
        (i.prototype.not = function () {
            return this.negate().prev();
        }),
        (s.prototype.not = a.prototype.not = i.prototype.not),
        (i.prototype.and = function (e) {
            return D(this, e, function (e, t) {
                return e & t;
            });
        }),
        (s.prototype.and = a.prototype.and = i.prototype.and),
        (i.prototype.or = function (e) {
            return D(this, e, function (e, t) {
                return e | t;
            });
        }),
        (s.prototype.or = a.prototype.or = i.prototype.or),
        (i.prototype.xor = function (e) {
            return D(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (s.prototype.xor = a.prototype.xor = i.prototype.xor);
    function L(e) {
        var t = e.value,
            r =
                "number" == typeof t
                    ? 0x40000000 | t
                    : "bigint" == typeof t
                      ? t | BigInt(0x40000000)
                      : (t[0] + 1e7 * t[1]) | 0x40004000;
        return r & -r;
    }
    function R(e, t) {
        return (e = U(e)), (t = U(t)), e.greater(t) ? e : t;
    }
    function F(e, t) {
        return (e = U(e)), (t = U(t)), e.lesser(t) ? e : t;
    }
    function N(e, t) {
        if (((e = U(e).abs()), (t = U(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var r, n, i = o[1]; e.isEven() && t.isEven(); )
            (r = F(L(e), L(t))), (e = e.divide(r)), (t = t.divide(r)), (i = i.multiply(r));
        for (; e.isEven(); ) e = e.divide(L(e));
        do {
            for (; t.isEven(); ) t = t.divide(L(t));
            e.greater(t) && ((n = t), (t = e), (e = n)), (t = t.subtract(e));
        } while (!t.isZero());
        return i.isUnit() ? e : e.multiply(i);
    }
    (i.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(n(0)) && (e = e.negate().subtract(n(1))), 0 === e.compareTo(n(0)))
            ? n(0)
            : n(
                  (function e(t, r) {
                      if (0 >= r.compareTo(t)) {
                          var o = e(t, r.square(r)),
                              i = o.p,
                              a = o.e,
                              s = i.multiply(r);
                          return 0 >= s.compareTo(t) ? { p: s, e: 2 * a + 1 } : { p: i, e: 2 * a };
                      }
                      return { p: n(1), e: 0 };
                  })(e, n(2)).e,
              ).add(n(1));
    }),
        (s.prototype.bitLength = a.prototype.bitLength = i.prototype.bitLength);
    var j = function (e, r, n, o) {
        (n = n || t), (e = String(e)), o || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var i,
            a = e.length,
            s = Math.abs(r),
            l = {};
        for (i = 0; i < n.length; i++) l[n[i]] = i;
        for (i = 0; i < a; i++) {
            var u = e[i];
            if ("-" !== u && u in l && l[u] >= s) {
                if ("1" === u && 1 === s) continue;
                throw Error(u + " is not a valid digit in base " + r + ".");
            }
        }
        r = U(r);
        var c = [],
            f = "-" === e[0];
        for (i = +!!f; i < e.length; i++) {
            var u = e[i];
            if (u in l) c.push(U(l[u]));
            else if ("<" === u) {
                var p = i;
                do i++;
                while (">" !== e[i] && i < e.length);
                c.push(U(e.slice(p + 1, i)));
            } else throw Error(u + " is not a valid character");
        }
        return B(c, r, f);
    };
    function B(e, t, r) {
        var n,
            i = o[0],
            a = o[1];
        for (n = e.length - 1; n >= 0; n--) (i = i.add(e[n].times(a))), (a = a.times(t));
        return r ? i.negate() : i;
    }
    function $(e, t) {
        if ((t = n(t)).isZero()) {
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
            var r = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return r.unshift([1]), { value: [].concat.apply([], r), isNegative: !1 };
        }
        var o = !1;
        if ((e.isNegative() && t.isPositive() && ((o = !0), (e = e.abs())), t.isUnit()))
            return e.isZero()
                ? { value: [0], isNegative: !1 }
                : { value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1), isNegative: o };
        for (var i, a = [], s = e; s.isNegative() || s.compareAbs(t) >= 0; ) {
            s = (i = s.divmod(t)).quotient;
            var l = i.remainder;
            l.isNegative() && ((l = t.minus(l).abs()), (s = s.next())), a.push(l.toJSNumber());
        }
        return a.push(s.toJSNumber()), { value: a.reverse(), isNegative: o };
    }
    function K(e, r, n) {
        var o = $(e, r);
        return (
            (o.isNegative ? "-" : "") +
            o.value
                .map(function (e) {
                    var r;
                    return e < (r = (r = n) || t).length ? r[e] : "<" + e + ">";
                })
                .join("")
        );
    }
    function V(e) {
        if (l(+e)) {
            var t = +e;
            if (t === d(t)) return r ? new s(BigInt(t)) : new a(t);
            throw Error("Invalid integer: " + e);
        }
        var n = "-" === e[0];
        n && (e = e.slice(1));
        var o = e.split(/e/i);
        if (o.length > 2) throw Error("Invalid integer: " + o.join("e"));
        if (2 === o.length) {
            var u = o[1];
            if (("+" === u[0] && (u = u.slice(1)), (u *= 1) !== d(u) || !l(u)))
                throw Error("Invalid integer: " + u + " is not a valid exponent.");
            var c = o[0],
                p = c.indexOf(".");
            if ((p >= 0 && ((u -= c.length - p - 1), (c = c.slice(0, p) + c.slice(p + 1))), u < 0))
                throw Error("Cannot include negative exponent part for integers");
            (c += Array(u + 1).join("0")), (e = c);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (r) return new s(BigInt(n ? "-" + e : e));
        for (var h = [], m = e.length, v = m - 7; m > 0; ) h.push(+e.slice(v, m)), (v -= 7) < 0 && (v = 0), (m -= 7);
        return f(h), new i(h, n);
    }
    function U(e) {
        if ("number" == typeof e) {
            if (r) return new s(BigInt(e));
            if (l(e)) {
                if (e !== d(e)) throw Error(e + " is not an integer.");
                return new a(e);
            }
            return V(e.toString());
        }
        return "string" == typeof e ? V(e) : "bigint" == typeof e ? new s(e) : e;
    }
    (i.prototype.toArray = function (e) {
        return $(this, e);
    }),
        (a.prototype.toArray = function (e) {
            return $(this, e);
        }),
        (s.prototype.toArray = function (e) {
            return $(this, e);
        }),
        (i.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return K(this, e, t);
            for (var r, n = this.value, o = n.length, i = String(n[--o]); --o >= 0; )
                (r = String(n[o])), (i += "0000000".slice(r.length) + r);
            return (this.sign ? "-" : "") + i;
        }),
        (a.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? K(this, e, t) : String(this.value);
        }),
        (s.prototype.toString = a.prototype.toString),
        (s.prototype.toJSON =
            i.prototype.toJSON =
            a.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (i.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (i.prototype.toJSNumber = i.prototype.valueOf),
        (a.prototype.valueOf = function () {
            return this.value;
        }),
        (a.prototype.toJSNumber = a.prototype.valueOf),
        (s.prototype.valueOf = s.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var z = 0; z < 1e3; z++) (o[z] = U(z)), z > 0 && (o[-z] = U(-z));
    return (
        (o.one = o[1]),
        (o.zero = o[0]),
        (o.minusOne = o[-1]),
        (o.max = R),
        (o.min = F),
        (o.gcd = N),
        (o.lcm = function (e, t) {
            return (e = U(e).abs()), (t = U(t).abs()), e.divide(N(e, t)).multiply(t);
        }),
        (o.isInstance = function (e) {
            return e instanceof i || e instanceof a || e instanceof s;
        }),
        (o.randBetween = function (e, t, r) {
            e = U(e);
            var n = r || Math.random,
                i = F(e, (t = U(t))),
                a = R(e, t).subtract(i).add(1);
            if (a.isSmall) return i.add(Math.floor(n() * a));
            for (var s = $(a, 1e7).value, l = [], u = !0, c = 0; c < s.length; c++) {
                var f = u ? s[c] : 1e7,
                    p = d(n() * f);
                l.push(p), p < f && (u = !1);
            }
            return i.add(o.fromArray(l, 1e7, !1));
        }),
        (o.fromArray = function (e, t, r) {
            return B(e.map(U), U(t || 10), r);
        }),
        o
    );
})();
e.hasOwnProperty("exports") && (e.exports = n),
    "function" == typeof define &&
        define.amd &&
        define(function () {
            return n;
        });
