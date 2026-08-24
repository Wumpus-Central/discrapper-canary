e = r.nmd(e);
var n = (function () {
    "use strict";
    var e = u(0x20000000000000),
        t = "0123456789abcdefghijklmnopqrstuvwxyz",
        r = "function" == typeof BigInt;
    function i(e, t, r, n) {
        return void 0 === e ? i[0] : void 0 !== t && (10 != +t || r) ? j(e, t, r, n) : U(e);
    }
    function o(e, t) {
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
    function d(e) {
        for (var t = Array(e), r = -1; ++r < e; ) t[r] = 0;
        return t;
    }
    function p(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function h(e, t) {
        var r,
            n,
            i = e.length,
            o = t.length,
            a = Array(i),
            s = 0;
        for (n = 0; n < o; n++) (s = +((r = e[n] + t[n] + s) >= 1e7)), (a[n] = r - 1e7 * s);
        for (; n < i; ) (s = +(1e7 === (r = e[n] + s))), (a[n++] = r - 1e7 * s);
        return s > 0 && a.push(s), a;
    }
    function m(e, t) {
        return e.length >= t.length ? h(e, t) : h(t, e);
    }
    function v(e, t) {
        var r,
            n,
            i = e.length,
            o = Array(i);
        for (n = 0; n < i; n++) (t = Math.floor((r = e[n] - 1e7 + t) / 1e7)), (o[n] = r - 1e7 * t), (t += 1);
        for (; t > 0; ) (o[n++] = t % 1e7), (t = Math.floor(t / 1e7));
        return o;
    }
    function y(e, t) {
        var r,
            n,
            i = e.length,
            o = t.length,
            a = Array(i),
            s = 0;
        for (r = 0; r < o; r++) (n = e[r] - s - t[r]) < 0 ? ((n += 1e7), (s = 1)) : (s = 0), (a[r] = n);
        for (r = o; r < i; r++) {
            if ((n = e[r] - s) < 0) n += 1e7;
            else {
                a[r++] = n;
                break;
            }
            a[r] = n;
        }
        for (; r < i; r++) a[r] = e[r];
        return f(a), a;
    }
    function g(e, t, r) {
        var n,
            i,
            s = e.length,
            l = Array(s),
            u = -t;
        for (n = 0; n < s; n++) (u = Math.floor((i = e[n] + u) / 1e7)), (i %= 1e7), (l[n] = i < 0 ? i + 1e7 : i);
        return "number" == typeof (l = c(l)) ? (r && (l = -l), new a(l)) : new o(l, r);
    }
    function b(e, t) {
        var r,
            n,
            i,
            o,
            a = e.length,
            s = t.length,
            l = d(a + s);
        for (i = 0; i < a; ++i) {
            o = e[i];
            for (var u = 0; u < s; ++u)
                (n = Math.floor((r = o * t[u] + l[i + u]) / 1e7)), (l[i + u] = r - 1e7 * n), (l[i + u + 1] += n);
        }
        return f(l), l;
    }
    function w(e, t) {
        var r,
            n,
            i = e.length,
            o = Array(i),
            a = 0;
        for (n = 0; n < i; n++) (a = Math.floor((r = e[n] * t + a) / 1e7)), (o[n] = r - 1e7 * a);
        for (; a > 0; ) (o[n++] = a % 1e7), (a = Math.floor(a / 1e7));
        return o;
    }
    function _(e, t) {
        for (var r = []; t-- > 0; ) r.push(0);
        return r.concat(e);
    }
    function S(e, t, r) {
        return e < 1e7 ? new o(w(t, e), r) : new o(b(t, u(e)), r);
    }
    function x(e) {
        var t,
            r,
            n,
            i,
            o = e.length,
            a = d(o + o);
        for (n = 0; n < o; n++) {
            r = 0 - (i = e[n]) * i;
            for (var s = n; s < o; s++)
                (r = Math.floor((t = i * e[s] * 2 + a[n + s] + r) / 1e7)), (a[n + s] = t - 1e7 * r);
            a[n + o] = r;
        }
        return f(a), a;
    }
    function E(e, t) {
        var r,
            n,
            i,
            o,
            a = e.length,
            s = d(a);
        for (i = 0, r = a - 1; r >= 0; --r) (n = p((o = 1e7 * i + e[r]) / t)), (i = o - n * t), (s[r] = 0 | n);
        return [s, 0 | i];
    }
    function k(e, t) {
        var n,
            l,
            h = U(t);
        if (r) return [new s(e.value / h.value), new s(e.value % h.value)];
        var m = e.value,
            v = h.value;
        if (0 === v) throw Error("Cannot divide by zero");
        if (e.isSmall) return h.isSmall ? [new a(p(m / v)), new a(m % v)] : [i[0], e];
        if (h.isSmall) {
            if (1 === v) return [e, i[0]];
            if (-1 == v) return [e.negate(), i[0]];
            var g = Math.abs(v);
            if (g < 1e7) {
                n = c((l = E(m, g))[0]);
                var b = l[1];
                return (e.sign && (b = -b), "number" == typeof n)
                    ? (e.sign !== h.sign && (n = -n), [new a(n), new a(b)])
                    : [new o(n, e.sign !== h.sign), new a(b)];
            }
            v = u(g);
        }
        var _ = C(m, v);
        if (-1 === _) return [i[0], e];
        if (0 === _) return [i[e.sign === h.sign ? 1 : -1], i[0]];
        n = (l =
            m.length + v.length <= 200
                ? (function (e, t) {
                      var r,
                          n,
                          i,
                          o,
                          a,
                          s,
                          l,
                          u = e.length,
                          f = t.length,
                          p = d(t.length),
                          h = t[f - 1],
                          m = Math.ceil(1e7 / (2 * h)),
                          v = w(e, m),
                          y = w(t, m);
                      for (v.length <= u && v.push(0), y.push(0), h = y[f - 1], n = u - f; n >= 0; n--) {
                          for (
                              r = 1e7 - 1,
                                  v[n + f] !== h && (r = Math.floor((1e7 * v[n + f] + v[n + f - 1]) / h)),
                                  i = 0,
                                  o = 0,
                                  s = y.length,
                                  a = 0;
                              a < s;
                              a++
                          )
                              (i += r * y[a]),
                                  (l = Math.floor(i / 1e7)),
                                  (o += v[n + a] - (i - 1e7 * l)),
                                  (i = l),
                                  o < 0 ? ((v[n + a] = o + 1e7), (o = -1)) : ((v[n + a] = o), (o = 0));
                          for (; 0 !== o; ) {
                              for (r -= 1, i = 0, a = 0; a < s; a++)
                                  (i += v[n + a] - 1e7 + y[a]) < 0
                                      ? ((v[n + a] = i + 1e7), (i = 0))
                                      : ((v[n + a] = i), (i = 1));
                              o += i;
                          }
                          p[n] = r;
                      }
                      return (v = E(v, m)[0]), [c(p), c(v)];
                  })(m, v)
                : (function (e, t) {
                      for (var r, n, i, o, a, s = e.length, l = t.length, u = [], d = []; s; ) {
                          if ((d.unshift(e[--s]), f(d), 0 > C(d, t))) {
                              u.push(0);
                              continue;
                          }
                          (n = d.length),
                              (i = 1e7 * d[n - 1] + d[n - 2]),
                              (o = 1e7 * t[l - 1] + t[l - 2]),
                              n > l && (i = (i + 1) * 1e7),
                              (r = Math.ceil(i / o));
                          do {
                              if (0 >= C((a = w(t, r)), d)) break;
                              r--;
                          } while (r);
                          u.push(r), (d = y(d, a));
                      }
                      return u.reverse(), [c(u), c(d)];
                  })(m, v))[0];
        var S = e.sign !== h.sign,
            x = l[1],
            k = e.sign;
        return (
            "number" == typeof n ? (S && (n = -n), (n = new a(n))) : (n = new o(n, S)),
            "number" == typeof x ? (k && (x = -x), (x = new a(x))) : (x = new o(x, k)),
            [n, x]
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
        for (var r, i, o, a = e.prev(), s = a, l = 0; s.isEven(); ) (s = s.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((o = n(t[i]).modPow(s, e)).isUnit() || o.equals(a))) {
                for (r = l - 1; 0 != r && !(o = o.square().mod(e)).isUnit(); r--) if (o.equals(a)) continue t;
                return !1;
            }
        return !0;
    }
    (o.prototype = Object.create(i.prototype)),
        (a.prototype = Object.create(i.prototype)),
        (s.prototype = Object.create(i.prototype)),
        (o.prototype.add = function (e) {
            var t = U(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var r = this.value,
                n = t.value;
            return t.isSmall ? new o(v(r, Math.abs(n)), this.sign) : new o(m(r, n), this.sign);
        }),
        (o.prototype.plus = o.prototype.add),
        (a.prototype.add = function (e) {
            var t = U(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.subtract(t.negate());
            var n = t.value;
            if (t.isSmall) {
                if (l(r + n)) return new a(r + n);
                n = u(Math.abs(n));
            }
            return new o(v(n, Math.abs(r)), r < 0);
        }),
        (a.prototype.plus = a.prototype.add),
        (s.prototype.add = function (e) {
            return new s(this.value + U(e).value);
        }),
        (s.prototype.plus = s.prototype.add),
        (o.prototype.subtract = function (e) {
            var t,
                r,
                n = U(e);
            if (this.sign !== n.sign) return this.add(n.negate());
            var i = this.value,
                s = n.value;
            return n.isSmall
                ? g(i, Math.abs(s), this.sign)
                : ((t = this.sign),
                  (C(i, s) >= 0 ? (r = y(i, s)) : ((r = y(s, i)), (t = !t)), "number" == typeof (r = c(r)))
                      ? (t && (r = -r), new a(r))
                      : new o(r, t));
        }),
        (o.prototype.minus = o.prototype.subtract),
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
        (o.prototype.negate = function () {
            return new o(this.value, !this.sign);
        }),
        (a.prototype.negate = function () {
            var e = this.sign,
                t = new a(-this.value);
            return (t.sign = !e), t;
        }),
        (s.prototype.negate = function () {
            return new s(-this.value);
        }),
        (o.prototype.abs = function () {
            return new o(this.value, !1);
        }),
        (a.prototype.abs = function () {
            return new a(Math.abs(this.value));
        }),
        (s.prototype.abs = function () {
            return new s(this.value >= 0 ? this.value : -this.value);
        }),
        (o.prototype.multiply = function (e) {
            var t,
                r,
                n,
                a = U(e),
                s = this.value,
                l = a.value,
                c = this.sign !== a.sign;
            if (a.isSmall) {
                if (0 === l) return i[0];
                if (1 === l) return this;
                if (-1 === l) return this.negate();
                if ((n = Math.abs(l)) < 1e7) return new o(w(s, n), c);
                l = u(n);
            }
            return -0.012 * (t = s.length) - 0.012 * (r = l.length) + 15e-6 * t * r > 0
                ? new o(
                      (function e(t, r) {
                          var n = Math.max(t.length, r.length);
                          if (n <= 30) return b(t, r);
                          n = Math.ceil(n / 2);
                          var i = t.slice(n),
                              o = t.slice(0, n),
                              a = r.slice(n),
                              s = r.slice(0, n),
                              l = e(o, s),
                              u = e(i, a),
                              c = e(m(o, i), m(s, a)),
                              d = m(m(l, _(y(y(c, l), u), n)), _(u, 2 * n));
                          return f(d), d;
                      })(s, l),
                      c,
                  )
                : new o(b(s, l), c);
        }),
        (o.prototype.times = o.prototype.multiply),
        (a.prototype._multiplyBySmall = function (e) {
            return l(e.value * this.value)
                ? new a(e.value * this.value)
                : S(Math.abs(e.value), u(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (o.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? i[0]
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
        (o.prototype.square = function () {
            return new o(x(this.value), !1);
        }),
        (a.prototype.square = function () {
            var e = this.value * this.value;
            return l(e) ? new a(e) : new o(x(u(Math.abs(this.value))), !1);
        }),
        (s.prototype.square = function (e) {
            return new s(this.value * this.value);
        }),
        (o.prototype.divmod = function (e) {
            var t = k(this, e);
            return { quotient: t[0], remainder: t[1] };
        }),
        (s.prototype.divmod = a.prototype.divmod = o.prototype.divmod),
        (o.prototype.divide = function (e) {
            return k(this, e)[0];
        }),
        (s.prototype.over = s.prototype.divide =
            function (e) {
                return new s(this.value / U(e).value);
            }),
        (a.prototype.over = a.prototype.divide = o.prototype.over = o.prototype.divide),
        (o.prototype.mod = function (e) {
            return k(this, e)[1];
        }),
        (s.prototype.mod = s.prototype.remainder =
            function (e) {
                return new s(this.value % U(e).value);
            }),
        (a.prototype.remainder = a.prototype.mod = o.prototype.remainder = o.prototype.mod),
        (o.prototype.pow = function (e) {
            var t,
                r,
                n,
                o = U(e),
                s = this.value,
                u = o.value;
            if (0 === u) return i[1];
            if (0 === s) return i[0];
            if (1 === s) return i[1];
            if (-1 === s) return o.isEven() ? i[1] : i[-1];
            if (o.sign) return i[0];
            if (!o.isSmall) throw Error("The exponent " + o.toString() + " is too large.");
            if (this.isSmall && l((t = Math.pow(s, u)))) return new a(p(t));
            for (r = this, n = i[1]; !0 & u && ((n = n.times(r)), --u), 0 !== u; ) (u /= 2), (r = r.square());
            return n;
        }),
        (a.prototype.pow = o.prototype.pow),
        (s.prototype.pow = function (e) {
            var t = U(e),
                r = this.value,
                n = t.value,
                o = BigInt(0),
                a = BigInt(1),
                l = BigInt(2);
            if (n === o) return i[1];
            if (r === o) return i[0];
            if (r === a) return i[1];
            if (r === BigInt(-1)) return t.isEven() ? i[1] : i[-1];
            if (t.isNegative()) return new s(o);
            for (var u = this, c = i[1]; (n & a) === a && ((c = c.times(u)), --n), n !== o; )
                (n /= l), (u = u.square());
            return c;
        }),
        (o.prototype.modPow = function (e, t) {
            if (((e = U(e)), (t = U(t)).isZero())) throw Error("Cannot take modPow with modulus 0");
            var r = i[1],
                n = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(i[-1])), (n = n.modInv(t))); e.isPositive(); ) {
                if (n.isZero()) return i[0];
                e.isOdd() && (r = r.multiply(n).mod(t)), (e = e.divide(2)), (n = n.square().mod(t));
            }
            return r;
        }),
        (s.prototype.modPow = a.prototype.modPow = o.prototype.modPow),
        (o.prototype.compareAbs = function (e) {
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
        (o.prototype.compare = function (e) {
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
        (o.prototype.compareTo = o.prototype.compare),
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
        (o.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (s.prototype.eq =
            s.prototype.equals =
            a.prototype.eq =
            a.prototype.equals =
            o.prototype.eq =
                o.prototype.equals),
        (o.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (s.prototype.neq =
            s.prototype.notEquals =
            a.prototype.neq =
            a.prototype.notEquals =
            o.prototype.neq =
                o.prototype.notEquals),
        (o.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (s.prototype.gt =
            s.prototype.greater =
            a.prototype.gt =
            a.prototype.greater =
            o.prototype.gt =
                o.prototype.greater),
        (o.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (s.prototype.lt =
            s.prototype.lesser =
            a.prototype.lt =
            a.prototype.lesser =
            o.prototype.lt =
                o.prototype.lesser),
        (o.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (s.prototype.geq =
            s.prototype.greaterOrEquals =
            a.prototype.geq =
            a.prototype.greaterOrEquals =
            o.prototype.geq =
                o.prototype.greaterOrEquals),
        (o.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (s.prototype.leq =
            s.prototype.lesserOrEquals =
            a.prototype.leq =
            a.prototype.lesserOrEquals =
            o.prototype.leq =
                o.prototype.lesserOrEquals),
        (o.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (a.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (s.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (o.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (a.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (s.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (o.prototype.isPositive = function () {
            return !this.sign;
        }),
        (a.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (s.prototype.isPositive = a.prototype.isPositive),
        (o.prototype.isNegative = function () {
            return this.sign;
        }),
        (a.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (s.prototype.isNegative = a.prototype.isNegative),
        (o.prototype.isUnit = function () {
            return !1;
        }),
        (a.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (s.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (o.prototype.isZero = function () {
            return !1;
        }),
        (a.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (s.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (o.prototype.isDivisibleBy = function (e) {
            var t = U(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (s.prototype.isDivisibleBy = a.prototype.isDivisibleBy = o.prototype.isDivisibleBy),
        (o.prototype.isPrime = function (e) {
            var t = T(this);
            if (void 0 !== t) return t;
            var r = this.abs(),
                i = r.bitLength();
            if (i <= 64) return M(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var o = Math.log(2) * i.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(o, 2) : o), s = [], l = 0;
                l < a;
                l++
            )
                s.push(n(l + 2));
            return M(r, s);
        }),
        (s.prototype.isPrime = a.prototype.isPrime = o.prototype.isPrime),
        (o.prototype.isProbablePrime = function (e, t) {
            var r = T(this);
            if (void 0 !== r) return r;
            for (var i = this.abs(), o = void 0 === e ? 5 : e, a = [], s = 0; s < o; s++)
                a.push(n.randBetween(2, i.minus(2), t));
            return M(i, a);
        }),
        (s.prototype.isProbablePrime = a.prototype.isProbablePrime = o.prototype.isProbablePrime),
        (o.prototype.modInv = function (e) {
            for (var t, r, i, o = n.zero, a = n.one, s = U(e), l = this.abs(); !l.isZero(); )
                (t = s.divide(l)),
                    (r = o),
                    (i = s),
                    (o = a),
                    (s = l),
                    (a = r.subtract(t.multiply(a))),
                    (l = i.subtract(t.multiply(l)));
            if (!s.isUnit()) throw Error(this.toString() + " and " + e.toString() + " are not co-prime");
            return (-1 === o.compare(0) && (o = o.add(e)), this.isNegative()) ? o.negate() : o;
        }),
        (s.prototype.modInv = a.prototype.modInv = o.prototype.modInv),
        (o.prototype.next = function () {
            var e = this.value;
            return this.sign ? g(e, 1, this.sign) : new o(v(e, 1), this.sign);
        }),
        (a.prototype.next = function () {
            var t = this.value;
            return t + 1 < 0x20000000000000 ? new a(t + 1) : new o(e, !1);
        }),
        (s.prototype.next = function () {
            return new s(this.value + BigInt(1));
        }),
        (o.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new o(v(e, 1), !0) : g(e, 1, this.sign);
        }),
        (a.prototype.prev = function () {
            var t = this.value;
            return t - 1 > -0x20000000000000 ? new a(t - 1) : new o(e, !0);
        }),
        (s.prototype.prev = function () {
            return new s(this.value - BigInt(1));
        });
    for (var P = [1]; 2 * P[P.length - 1] <= 1e7; ) P.push(2 * P[P.length - 1]);
    var A = P.length,
        I = P[A - 1];
    function O(e) {
        return 1e7 >= Math.abs(e);
    }
    function D(e, t, r) {
        t = U(t);
        for (
            var i = e.isNegative(),
                o = t.isNegative(),
                a = i ? e.not() : e,
                s = o ? t.not() : t,
                l = 0,
                u = 0,
                c = null,
                f = null,
                d = [];
            !a.isZero() || !s.isZero();
        )
            (l = (c = k(a, I))[1].toJSNumber()),
                i && (l = I - 1 - l),
                (u = (f = k(s, I))[1].toJSNumber()),
                o && (u = I - 1 - u),
                (a = c[0]),
                (s = f[0]),
                d.push(r(l, u));
        for (var p = 0 !== r(+!!i, +!!o) ? n(-1) : n(0), h = d.length - 1; h >= 0; h -= 1)
            p = p.multiply(I).add(n(d[h]));
        return p;
    }
    (o.prototype.shiftLeft = function (e) {
        var t = U(e).toJSNumber();
        if (!O(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var r = this;
        if (r.isZero()) return r;
        for (; t >= A; ) (r = r.multiply(I)), (t -= A - 1);
        return r.multiply(P[t]);
    }),
        (s.prototype.shiftLeft = a.prototype.shiftLeft = o.prototype.shiftLeft),
        (o.prototype.shiftRight = function (e) {
            var t,
                r = U(e).toJSNumber();
            if (!O(r)) throw Error(String(r) + " is too large for shifting.");
            if (r < 0) return this.shiftLeft(-r);
            for (var n = this; r >= A; ) {
                if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                (n = (t = k(n, I))[1].isNegative() ? t[0].prev() : t[0]), (r -= A - 1);
            }
            return (t = k(n, P[r]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (s.prototype.shiftRight = a.prototype.shiftRight = o.prototype.shiftRight),
        (o.prototype.not = function () {
            return this.negate().prev();
        }),
        (s.prototype.not = a.prototype.not = o.prototype.not),
        (o.prototype.and = function (e) {
            return D(this, e, function (e, t) {
                return e & t;
            });
        }),
        (s.prototype.and = a.prototype.and = o.prototype.and),
        (o.prototype.or = function (e) {
            return D(this, e, function (e, t) {
                return e | t;
            });
        }),
        (s.prototype.or = a.prototype.or = o.prototype.or),
        (o.prototype.xor = function (e) {
            return D(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (s.prototype.xor = a.prototype.xor = o.prototype.xor);
    function R(e) {
        var t = e.value,
            r =
                "number" == typeof t
                    ? 0x40000000 | t
                    : "bigint" == typeof t
                      ? t | BigInt(0x40000000)
                      : (t[0] + 1e7 * t[1]) | 0x40004000;
        return r & -r;
    }
    function L(e, t) {
        return (e = U(e)), (t = U(t)), e.greater(t) ? e : t;
    }
    function F(e, t) {
        return (e = U(e)), (t = U(t)), e.lesser(t) ? e : t;
    }
    function N(e, t) {
        if (((e = U(e).abs()), (t = U(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var r, n, o = i[1]; e.isEven() && t.isEven(); )
            (r = F(R(e), R(t))), (e = e.divide(r)), (t = t.divide(r)), (o = o.multiply(r));
        for (; e.isEven(); ) e = e.divide(R(e));
        do {
            for (; t.isEven(); ) t = t.divide(R(t));
            e.greater(t) && ((n = t), (t = e), (e = n)), (t = t.subtract(e));
        } while (!t.isZero());
        return o.isUnit() ? e : e.multiply(o);
    }
    (o.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(n(0)) && (e = e.negate().subtract(n(1))), 0 === e.compareTo(n(0)))
            ? n(0)
            : n(
                  (function e(t, r) {
                      if (0 >= r.compareTo(t)) {
                          var i = e(t, r.square(r)),
                              o = i.p,
                              a = i.e,
                              s = o.multiply(r);
                          return 0 >= s.compareTo(t) ? { p: s, e: 2 * a + 1 } : { p: o, e: 2 * a };
                      }
                      return { p: n(1), e: 0 };
                  })(e, n(2)).e,
              ).add(n(1));
    }),
        (s.prototype.bitLength = a.prototype.bitLength = o.prototype.bitLength);
    var j = function (e, r, n, i) {
        (n = n || t), (e = String(e)), i || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var o,
            a = e.length,
            s = Math.abs(r),
            l = {};
        for (o = 0; o < n.length; o++) l[n[o]] = o;
        for (o = 0; o < a; o++) {
            var u = e[o];
            if ("-" !== u && u in l && l[u] >= s) {
                if ("1" === u && 1 === s) continue;
                throw Error(u + " is not a valid digit in base " + r + ".");
            }
        }
        r = U(r);
        var c = [],
            f = "-" === e[0];
        for (o = +!!f; o < e.length; o++) {
            var u = e[o];
            if (u in l) c.push(U(l[u]));
            else if ("<" === u) {
                var d = o;
                do o++;
                while (">" !== e[o] && o < e.length);
                c.push(U(e.slice(d + 1, o)));
            } else throw Error(u + " is not a valid character");
        }
        return B(c, r, f);
    };
    function B(e, t, r) {
        var n,
            o = i[0],
            a = i[1];
        for (n = e.length - 1; n >= 0; n--) (o = o.add(e[n].times(a))), (a = a.times(t));
        return r ? o.negate() : o;
    }
    function K(e, t) {
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
        var i = !1;
        if ((e.isNegative() && t.isPositive() && ((i = !0), (e = e.abs())), t.isUnit()))
            return e.isZero()
                ? { value: [0], isNegative: !1 }
                : { value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1), isNegative: i };
        for (var o, a = [], s = e; s.isNegative() || s.compareAbs(t) >= 0; ) {
            s = (o = s.divmod(t)).quotient;
            var l = o.remainder;
            l.isNegative() && ((l = t.minus(l).abs()), (s = s.next())), a.push(l.toJSNumber());
        }
        return a.push(s.toJSNumber()), { value: a.reverse(), isNegative: i };
    }
    function $(e, r, n) {
        var i = K(e, r);
        return (
            (i.isNegative ? "-" : "") +
            i.value
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
            if (t === p(t)) return r ? new s(BigInt(t)) : new a(t);
            throw Error("Invalid integer: " + e);
        }
        var n = "-" === e[0];
        n && (e = e.slice(1));
        var i = e.split(/e/i);
        if (i.length > 2) throw Error("Invalid integer: " + i.join("e"));
        if (2 === i.length) {
            var u = i[1];
            if (("+" === u[0] && (u = u.slice(1)), (u *= 1) !== p(u) || !l(u)))
                throw Error("Invalid integer: " + u + " is not a valid exponent.");
            var c = i[0],
                d = c.indexOf(".");
            if ((d >= 0 && ((u -= c.length - d - 1), (c = c.slice(0, d) + c.slice(d + 1))), u < 0))
                throw Error("Cannot include negative exponent part for integers");
            (c += Array(u + 1).join("0")), (e = c);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (r) return new s(BigInt(n ? "-" + e : e));
        for (var h = [], m = e.length, v = m - 7; m > 0; ) h.push(+e.slice(v, m)), (v -= 7) < 0 && (v = 0), (m -= 7);
        return f(h), new o(h, n);
    }
    function U(e) {
        if ("number" == typeof e) {
            if (r) return new s(BigInt(e));
            if (l(e)) {
                if (e !== p(e)) throw Error(e + " is not an integer.");
                return new a(e);
            }
            return V(e.toString());
        }
        return "string" == typeof e ? V(e) : "bigint" == typeof e ? new s(e) : e;
    }
    (o.prototype.toArray = function (e) {
        return K(this, e);
    }),
        (a.prototype.toArray = function (e) {
            return K(this, e);
        }),
        (s.prototype.toArray = function (e) {
            return K(this, e);
        }),
        (o.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return $(this, e, t);
            for (var r, n = this.value, i = n.length, o = String(n[--i]); --i >= 0; )
                (r = String(n[i])), (o += "0000000".slice(r.length) + r);
            return (this.sign ? "-" : "") + o;
        }),
        (a.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? $(this, e, t) : String(this.value);
        }),
        (s.prototype.toString = a.prototype.toString),
        (s.prototype.toJSON =
            o.prototype.toJSON =
            a.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (o.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (o.prototype.toJSNumber = o.prototype.valueOf),
        (a.prototype.valueOf = function () {
            return this.value;
        }),
        (a.prototype.toJSNumber = a.prototype.valueOf),
        (s.prototype.valueOf = s.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var z = 0; z < 1e3; z++) (i[z] = U(z)), z > 0 && (i[-z] = U(-z));
    return (
        (i.one = i[1]),
        (i.zero = i[0]),
        (i.minusOne = i[-1]),
        (i.max = L),
        (i.min = F),
        (i.gcd = N),
        (i.lcm = function (e, t) {
            return (e = U(e).abs()), (t = U(t).abs()), e.divide(N(e, t)).multiply(t);
        }),
        (i.isInstance = function (e) {
            return e instanceof o || e instanceof a || e instanceof s;
        }),
        (i.randBetween = function (e, t, r) {
            e = U(e);
            var n = r || Math.random,
                o = F(e, (t = U(t))),
                a = L(e, t).subtract(o).add(1);
            if (a.isSmall) return o.add(Math.floor(n() * a));
            for (var s = K(a, 1e7).value, l = [], u = !0, c = 0; c < s.length; c++) {
                var f = u ? s[c] : 1e7,
                    d = p(n() * f);
                l.push(d), d < f && (u = !1);
            }
            return o.add(i.fromArray(l, 1e7, !1));
        }),
        (i.fromArray = function (e, t, r) {
            return B(e.map(U), U(t || 10), r);
        }),
        i
    );
})();
e.hasOwnProperty("exports") && (e.exports = n),
    "function" == typeof define &&
        define.amd &&
        define(function () {
            return n;
        });
