e = r.nmd(e);
var n = (function () {
    var e = p(0x20000000000000),
        t = "0123456789abcdefghijklmnopqrstuvwxyz",
        r = "function" == typeof BigInt;
    function o(e, t, r, n) {
        return void 0 === e ? o[0] : void 0 !== t && (10 != +t || r) ? _(e, t, r, n) : j(e);
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
    function u(e) {
        return -0x20000000000000 < e && e < 0x20000000000000;
    }
    function p(e) {
        return e < 1e7
            ? [e]
            : e < 1e14
              ? [e % 1e7, Math.floor(e / 1e7)]
              : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
    }
    function l(t) {
        f(t);
        var r = t.length;
        if (r < 4 && 0 > P(t, e))
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
    function c(e) {
        for (var t = Array(e), r = -1; ++r < e; ) t[r] = 0;
        return t;
    }
    function h(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function v(e, t) {
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
    function d(e, t) {
        return e.length >= t.length ? v(e, t) : v(t, e);
    }
    function y(e, t) {
        var r,
            n,
            o = e.length,
            i = Array(o);
        for (n = 0; n < o; n++) (t = Math.floor((r = e[n] - 1e7 + t) / 1e7)), (i[n] = r - 1e7 * t), (t += 1);
        for (; t > 0; ) (i[n++] = t % 1e7), (t = Math.floor(t / 1e7));
        return i;
    }
    function b(e, t) {
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
            u = Array(s),
            p = -t;
        for (n = 0; n < s; n++) (p = Math.floor((o = e[n] + p) / 1e7)), (o %= 1e7), (u[n] = o < 0 ? o + 1e7 : o);
        return "number" == typeof (u = l(u)) ? (r && (u = -u), new a(u)) : new i(u, r);
    }
    function m(e, t) {
        var r,
            n,
            o,
            i,
            a = e.length,
            s = t.length,
            u = c(a + s);
        for (o = 0; o < a; ++o) {
            i = e[o];
            for (var p = 0; p < s; ++p)
                (n = Math.floor((r = i * t[p] + u[o + p]) / 1e7)), (u[o + p] = r - 1e7 * n), (u[o + p + 1] += n);
        }
        return f(u), u;
    }
    function S(e, t) {
        var r,
            n,
            o = e.length,
            i = Array(o),
            a = 0;
        for (n = 0; n < o; n++) (a = Math.floor((r = e[n] * t + a) / 1e7)), (i[n] = r - 1e7 * a);
        for (; a > 0; ) (i[n++] = a % 1e7), (a = Math.floor(a / 1e7));
        return i;
    }
    function x(e, t) {
        for (var r = []; t-- > 0; ) r.push(0);
        return r.concat(e);
    }
    function w(e, t, r) {
        return e < 1e7 ? new i(S(t, e), r) : new i(m(t, p(e)), r);
    }
    function O(e) {
        var t,
            r,
            n,
            o,
            i = e.length,
            a = c(i + i);
        for (n = 0; n < i; n++) {
            r = 0 - (o = e[n]) * o;
            for (var s = n; s < i; s++)
                (r = Math.floor((t = o * e[s] * 2 + a[n + s] + r) / 1e7)), (a[n + s] = t - 1e7 * r);
            a[n + i] = r;
        }
        return f(a), a;
    }
    function E(e, t) {
        var r,
            n,
            o,
            i,
            a = e.length,
            s = c(a);
        for (o = 0, r = a - 1; r >= 0; --r) (n = h((i = 1e7 * o + e[r]) / t)), (o = i - n * t), (s[r] = 0 | n);
        return [s, 0 | o];
    }
    function M(e, t) {
        var n,
            u,
            v = j(t);
        if (r) return [new s(e.value / v.value), new s(e.value % v.value)];
        var d = e.value,
            y = v.value;
        if (0 === y) throw Error("Cannot divide by zero");
        if (e.isSmall) return v.isSmall ? [new a(h(d / y)), new a(d % y)] : [o[0], e];
        if (v.isSmall) {
            if (1 === y) return [e, o[0]];
            if (-1 == y) return [e.negate(), o[0]];
            var g = Math.abs(y);
            if (g < 1e7) {
                n = l((u = E(d, g))[0]);
                var m = u[1];
                return (e.sign && (m = -m), "number" == typeof n)
                    ? (e.sign !== v.sign && (n = -n), [new a(n), new a(m)])
                    : [new i(n, e.sign !== v.sign), new a(m)];
            }
            y = p(g);
        }
        var x = P(d, y);
        if (-1 === x) return [o[0], e];
        if (0 === x) return [o[e.sign === v.sign ? 1 : -1], o[0]];
        n = (u =
            d.length + y.length <= 200
                ? (function (e, t) {
                      var r,
                          n,
                          o,
                          i,
                          a,
                          s,
                          u,
                          p = e.length,
                          f = t.length,
                          h = c(t.length),
                          v = t[f - 1],
                          d = Math.ceil(1e7 / (2 * v)),
                          y = S(e, d),
                          b = S(t, d);
                      for (y.length <= p && y.push(0), b.push(0), v = b[f - 1], n = p - f; n >= 0; n--) {
                          for (
                              r = 1e7 - 1,
                                  y[n + f] !== v && (r = Math.floor((1e7 * y[n + f] + y[n + f - 1]) / v)),
                                  o = 0,
                                  i = 0,
                                  s = b.length,
                                  a = 0;
                              a < s;
                              a++
                          )
                              (o += r * b[a]),
                                  (u = Math.floor(o / 1e7)),
                                  (i += y[n + a] - (o - 1e7 * u)),
                                  (o = u),
                                  i < 0 ? ((y[n + a] = i + 1e7), (i = -1)) : ((y[n + a] = i), (i = 0));
                          for (; 0 !== i; ) {
                              for (r -= 1, o = 0, a = 0; a < s; a++)
                                  (o += y[n + a] - 1e7 + b[a]) < 0
                                      ? ((y[n + a] = o + 1e7), (o = 0))
                                      : ((y[n + a] = o), (o = 1));
                              i += o;
                          }
                          h[n] = r;
                      }
                      return (y = E(y, d)[0]), [l(h), l(y)];
                  })(d, y)
                : (function (e, t) {
                      for (var r, n, o, i, a, s = e.length, u = t.length, p = [], c = []; s; ) {
                          if ((c.unshift(e[--s]), f(c), 0 > P(c, t))) {
                              p.push(0);
                              continue;
                          }
                          (n = c.length),
                              (o = 1e7 * c[n - 1] + c[n - 2]),
                              (i = 1e7 * t[u - 1] + t[u - 2]),
                              n > u && (o = (o + 1) * 1e7),
                              (r = Math.ceil(o / i));
                          do {
                              if (0 >= P((a = S(t, r)), c)) break;
                              r--;
                          } while (r);
                          p.push(r), (c = b(c, a));
                      }
                      return p.reverse(), [l(p), l(c)];
                  })(d, y))[0];
        var w = e.sign !== v.sign,
            O = u[1],
            M = e.sign;
        return (
            "number" == typeof n ? (w && (n = -n), (n = new a(n))) : (n = new i(n, w)),
            "number" == typeof O ? (M && (O = -O), (O = new a(O))) : (O = new i(O, M)),
            [n, O]
        );
    }
    function P(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var r = e.length - 1; r >= 0; r--) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
        return 0;
    }
    function A(e) {
        var t = e.abs();
        return (
            !t.isUnit() &&
            (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)))
        );
    }
    function B(e, t) {
        for (var r, o, i, a = e.prev(), s = a, u = 0; s.isEven(); ) (s = s.divide(2)), u++;
        e: for (o = 0; o < t.length; o++)
            if (!e.lesser(t[o]) && !((i = n(t[o]).modPow(s, e)).isUnit() || i.equals(a))) {
                for (r = u - 1; 0 != r && !(i = i.square().mod(e)).isUnit(); r--) if (i.equals(a)) continue e;
                return !1;
            }
        return !0;
    }
    (i.prototype = Object.create(o.prototype)),
        (a.prototype = Object.create(o.prototype)),
        (s.prototype = Object.create(o.prototype)),
        (i.prototype.add = function (e) {
            var t = j(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var r = this.value,
                n = t.value;
            return t.isSmall ? new i(y(r, Math.abs(n)), this.sign) : new i(d(r, n), this.sign);
        }),
        (i.prototype.plus = i.prototype.add),
        (a.prototype.add = function (e) {
            var t = j(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.subtract(t.negate());
            var n = t.value;
            if (t.isSmall) {
                if (u(r + n)) return new a(r + n);
                n = p(Math.abs(n));
            }
            return new i(y(n, Math.abs(r)), r < 0);
        }),
        (a.prototype.plus = a.prototype.add),
        (s.prototype.add = function (e) {
            return new s(this.value + j(e).value);
        }),
        (s.prototype.plus = s.prototype.add),
        (i.prototype.subtract = function (e) {
            var t,
                r,
                n = j(e);
            if (this.sign !== n.sign) return this.add(n.negate());
            var o = this.value,
                s = n.value;
            return n.isSmall
                ? g(o, Math.abs(s), this.sign)
                : ((t = this.sign),
                  (P(o, s) >= 0 ? (r = b(o, s)) : ((r = b(s, o)), (t = !t)), "number" == typeof (r = l(r)))
                      ? (t && (r = -r), new a(r))
                      : new i(r, t));
        }),
        (i.prototype.minus = i.prototype.subtract),
        (a.prototype.subtract = function (e) {
            var t = j(e),
                r = this.value;
            if (r < 0 !== t.sign) return this.add(t.negate());
            var n = t.value;
            return t.isSmall ? new a(r - n) : g(n, Math.abs(r), r >= 0);
        }),
        (a.prototype.minus = a.prototype.subtract),
        (s.prototype.subtract = function (e) {
            return new s(this.value - j(e).value);
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
                a = j(e),
                s = this.value,
                u = a.value,
                l = this.sign !== a.sign;
            if (a.isSmall) {
                if (0 === u) return o[0];
                if (1 === u) return this;
                if (-1 === u) return this.negate();
                if ((n = Math.abs(u)) < 1e7) return new i(S(s, n), l);
                u = p(n);
            }
            return -0.012 * (t = s.length) - 0.012 * (r = u.length) + 15e-6 * t * r > 0
                ? new i(
                      (function e(t, r) {
                          var n = Math.max(t.length, r.length);
                          if (n <= 30) return m(t, r);
                          n = Math.ceil(n / 2);
                          var o = t.slice(n),
                              i = t.slice(0, n),
                              a = r.slice(n),
                              s = r.slice(0, n),
                              u = e(i, s),
                              p = e(o, a),
                              l = e(d(i, o), d(s, a)),
                              c = d(d(u, x(b(b(l, u), p), n)), x(p, 2 * n));
                          return f(c), c;
                      })(s, u),
                      l,
                  )
                : new i(m(s, u), l);
        }),
        (i.prototype.times = i.prototype.multiply),
        (a.prototype._multiplyBySmall = function (e) {
            return u(e.value * this.value)
                ? new a(e.value * this.value)
                : w(Math.abs(e.value), p(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (i.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? o[0]
                : 1 === e.value
                  ? this
                  : -1 === e.value
                    ? this.negate()
                    : w(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (a.prototype.multiply = function (e) {
            return j(e)._multiplyBySmall(this);
        }),
        (a.prototype.times = a.prototype.multiply),
        (s.prototype.multiply = function (e) {
            return new s(this.value * j(e).value);
        }),
        (s.prototype.times = s.prototype.multiply),
        (i.prototype.square = function () {
            return new i(O(this.value), !1);
        }),
        (a.prototype.square = function () {
            var e = this.value * this.value;
            return u(e) ? new a(e) : new i(O(p(Math.abs(this.value))), !1);
        }),
        (s.prototype.square = function (e) {
            return new s(this.value * this.value);
        }),
        (i.prototype.divmod = function (e) {
            var t = M(this, e);
            return { quotient: t[0], remainder: t[1] };
        }),
        (s.prototype.divmod = a.prototype.divmod = i.prototype.divmod),
        (i.prototype.divide = function (e) {
            return M(this, e)[0];
        }),
        (s.prototype.over = s.prototype.divide =
            function (e) {
                return new s(this.value / j(e).value);
            }),
        (a.prototype.over = a.prototype.divide = i.prototype.over = i.prototype.divide),
        (i.prototype.mod = function (e) {
            return M(this, e)[1];
        }),
        (s.prototype.mod = s.prototype.remainder =
            function (e) {
                return new s(this.value % j(e).value);
            }),
        (a.prototype.remainder = a.prototype.mod = i.prototype.remainder = i.prototype.mod),
        (i.prototype.pow = function (e) {
            var t,
                r,
                n,
                i = j(e),
                s = this.value,
                p = i.value;
            if (0 === p) return o[1];
            if (0 === s) return o[0];
            if (1 === s) return o[1];
            if (-1 === s) return i.isEven() ? o[1] : o[-1];
            if (i.sign) return o[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && u((t = Math.pow(s, p)))) return new a(h(t));
            for (r = this, n = o[1]; !0 & p && ((n = n.times(r)), --p), 0 !== p; ) (p /= 2), (r = r.square());
            return n;
        }),
        (a.prototype.pow = i.prototype.pow),
        (s.prototype.pow = function (e) {
            var t = j(e),
                r = this.value,
                n = t.value,
                i = BigInt(0),
                a = BigInt(1),
                u = BigInt(2);
            if (n === i) return o[1];
            if (r === i) return o[0];
            if (r === a) return o[1];
            if (r === BigInt(-1)) return t.isEven() ? o[1] : o[-1];
            if (t.isNegative()) return new s(i);
            for (var p = this, l = o[1]; (n & a) === a && ((l = l.times(p)), --n), n !== i; )
                (n /= u), (p = p.square());
            return l;
        }),
        (i.prototype.modPow = function (e, t) {
            if (((e = j(e)), (t = j(t)).isZero())) throw Error("Cannot take modPow with modulus 0");
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
            var t = j(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? 1 : P(r, n);
        }),
        (a.prototype.compareAbs = function (e) {
            var t = j(e),
                r = Math.abs(this.value),
                n = t.value;
            return t.isSmall ? (r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1) : -1;
        }),
        (s.prototype.compareAbs = function (e) {
            var t = this.value,
                r = j(e).value;
            return (t = t >= 0 ? t : -t) === (r = r >= 0 ? r : -r) ? 0 : t > r ? 1 : -1;
        }),
        (i.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = j(e),
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
                  : P(r, n) * (this.sign ? -1 : 1);
        }),
        (i.prototype.compareTo = i.prototype.compare),
        (a.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = j(e),
                r = this.value,
                n = t.value;
            return t.isSmall ? (r == n ? 0 : r > n ? 1 : -1) : r < 0 !== t.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
        }),
        (a.prototype.compareTo = a.prototype.compare),
        (s.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                r = j(e).value;
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
            var t = j(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (s.prototype.isDivisibleBy = a.prototype.isDivisibleBy = i.prototype.isDivisibleBy),
        (i.prototype.isPrime = function (e) {
            var t = A(this);
            if (void 0 !== t) return t;
            var r = this.abs(),
                o = r.bitLength();
            if (o <= 64) return B(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var i = Math.log(2) * o.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(i, 2) : i), s = [], u = 0;
                u < a;
                u++
            )
                s.push(n(u + 2));
            return B(r, s);
        }),
        (s.prototype.isPrime = a.prototype.isPrime = i.prototype.isPrime),
        (i.prototype.isProbablePrime = function (e, t) {
            var r = A(this);
            if (void 0 !== r) return r;
            for (var o = this.abs(), i = void 0 === e ? 5 : e, a = [], s = 0; s < i; s++)
                a.push(n.randBetween(2, o.minus(2), t));
            return B(o, a);
        }),
        (s.prototype.isProbablePrime = a.prototype.isProbablePrime = i.prototype.isProbablePrime),
        (i.prototype.modInv = function (e) {
            for (var t, r, o, i = n.zero, a = n.one, s = j(e), u = this.abs(); !u.isZero(); )
                (t = s.divide(u)),
                    (r = i),
                    (o = s),
                    (i = a),
                    (s = u),
                    (a = r.subtract(t.multiply(a))),
                    (u = o.subtract(t.multiply(u)));
            if (!s.isUnit()) throw Error(this.toString() + " and " + e.toString() + " are not co-prime");
            return (-1 === i.compare(0) && (i = i.add(e)), this.isNegative()) ? i.negate() : i;
        }),
        (s.prototype.modInv = a.prototype.modInv = i.prototype.modInv),
        (i.prototype.next = function () {
            var e = this.value;
            return this.sign ? g(e, 1, this.sign) : new i(y(e, 1), this.sign);
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
            return this.sign ? new i(y(e, 1), !0) : g(e, 1, this.sign);
        }),
        (a.prototype.prev = function () {
            var t = this.value;
            return t - 1 > -0x20000000000000 ? new a(t - 1) : new i(e, !0);
        }),
        (s.prototype.prev = function () {
            return new s(this.value - BigInt(1));
        });
    for (var C = [1]; 2 * C[C.length - 1] <= 1e7; ) C.push(2 * C[C.length - 1]);
    var I = C.length,
        N = C[I - 1];
    function k(e) {
        return 1e7 >= Math.abs(e);
    }
    function q(e, t, r) {
        t = j(t);
        for (
            var o = e.isNegative(),
                i = t.isNegative(),
                a = o ? e.not() : e,
                s = i ? t.not() : t,
                u = 0,
                p = 0,
                l = null,
                f = null,
                c = [];
            !a.isZero() || !s.isZero();
        )
            (u = (l = M(a, N))[1].toJSNumber()),
                o && (u = N - 1 - u),
                (p = (f = M(s, N))[1].toJSNumber()),
                i && (p = N - 1 - p),
                (a = l[0]),
                (s = f[0]),
                c.push(r(u, p));
        for (var h = 0 !== r(+!!o, +!!i) ? n(-1) : n(0), v = c.length - 1; v >= 0; v -= 1)
            h = h.multiply(N).add(n(c[v]));
        return h;
    }
    (i.prototype.shiftLeft = function (e) {
        var t = j(e).toJSNumber();
        if (!k(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var r = this;
        if (r.isZero()) return r;
        for (; t >= I; ) (r = r.multiply(N)), (t -= I - 1);
        return r.multiply(C[t]);
    }),
        (s.prototype.shiftLeft = a.prototype.shiftLeft = i.prototype.shiftLeft),
        (i.prototype.shiftRight = function (e) {
            var t,
                r = j(e).toJSNumber();
            if (!k(r)) throw Error(String(r) + " is too large for shifting.");
            if (r < 0) return this.shiftLeft(-r);
            for (var n = this; r >= I; ) {
                if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                (n = (t = M(n, N))[1].isNegative() ? t[0].prev() : t[0]), (r -= I - 1);
            }
            return (t = M(n, C[r]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (s.prototype.shiftRight = a.prototype.shiftRight = i.prototype.shiftRight),
        (i.prototype.not = function () {
            return this.negate().prev();
        }),
        (s.prototype.not = a.prototype.not = i.prototype.not),
        (i.prototype.and = function (e) {
            return q(this, e, function (e, t) {
                return e & t;
            });
        }),
        (s.prototype.and = a.prototype.and = i.prototype.and),
        (i.prototype.or = function (e) {
            return q(this, e, function (e, t) {
                return e | t;
            });
        }),
        (s.prototype.or = a.prototype.or = i.prototype.or),
        (i.prototype.xor = function (e) {
            return q(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (s.prototype.xor = a.prototype.xor = i.prototype.xor);
    function T(e) {
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
        return (e = j(e)), (t = j(t)), e.greater(t) ? e : t;
    }
    function W(e, t) {
        return (e = j(e)), (t = j(t)), e.lesser(t) ? e : t;
    }
    function F(e, t) {
        if (((e = j(e).abs()), (t = j(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var r, n, i = o[1]; e.isEven() && t.isEven(); )
            (r = W(T(e), T(t))), (e = e.divide(r)), (t = t.divide(r)), (i = i.multiply(r));
        for (; e.isEven(); ) e = e.divide(T(e));
        do {
            for (; t.isEven(); ) t = t.divide(T(t));
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
    var _ = function (e, r, n, o) {
        (n = n || t), (e = String(e)), o || ((e = e.toLowerCase()), (n = n.toLowerCase()));
        var i,
            a = e.length,
            s = Math.abs(r),
            u = {};
        for (i = 0; i < n.length; i++) u[n[i]] = i;
        for (i = 0; i < a; i++) {
            var p = e[i];
            if ("-" !== p && p in u && u[p] >= s) {
                if ("1" === p && 1 === s) continue;
                throw Error(p + " is not a valid digit in base " + r + ".");
            }
        }
        r = j(r);
        var l = [],
            f = "-" === e[0];
        for (i = +!!f; i < e.length; i++) {
            var p = e[i];
            if (p in u) l.push(j(u[p]));
            else if ("<" === p) {
                var c = i;
                do i++;
                while (">" !== e[i] && i < e.length);
                l.push(j(e.slice(c + 1, i)));
            } else throw Error(p + " is not a valid character");
        }
        return G(l, r, f);
    };
    function G(e, t, r) {
        var n,
            i = o[0],
            a = o[1];
        for (n = e.length - 1; n >= 0; n--) (i = i.add(e[n].times(a))), (a = a.times(t));
        return r ? i.negate() : i;
    }
    function L(e, t) {
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
            var u = i.remainder;
            u.isNegative() && ((u = t.minus(u).abs()), (s = s.next())), a.push(u.toJSNumber());
        }
        return a.push(s.toJSNumber()), { value: a.reverse(), isNegative: o };
    }
    function U(e, r, n) {
        var o = L(e, r);
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
    function $(e) {
        if (u(+e)) {
            var t = +e;
            if (t === h(t)) return r ? new s(BigInt(t)) : new a(t);
            throw Error("Invalid integer: " + e);
        }
        var n = "-" === e[0];
        n && (e = e.slice(1));
        var o = e.split(/e/i);
        if (o.length > 2) throw Error("Invalid integer: " + o.join("e"));
        if (2 === o.length) {
            var p = o[1];
            if (("+" === p[0] && (p = p.slice(1)), (p *= 1) !== h(p) || !u(p)))
                throw Error("Invalid integer: " + p + " is not a valid exponent.");
            var l = o[0],
                c = l.indexOf(".");
            if ((c >= 0 && ((p -= l.length - c - 1), (l = l.slice(0, c) + l.slice(c + 1))), p < 0))
                throw Error("Cannot include negative exponent part for integers");
            (l += Array(p + 1).join("0")), (e = l);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (r) return new s(BigInt(n ? "-" + e : e));
        for (var v = [], d = e.length, y = d - 7; d > 0; ) v.push(+e.slice(y, d)), (y -= 7) < 0 && (y = 0), (d -= 7);
        return f(v), new i(v, n);
    }
    function j(e) {
        if ("number" == typeof e) {
            if (r) return new s(BigInt(e));
            if (u(e)) {
                if (e !== h(e)) throw Error(e + " is not an integer.");
                return new a(e);
            }
            return $(e.toString());
        }
        return "string" == typeof e ? $(e) : "bigint" == typeof e ? new s(e) : e;
    }
    (i.prototype.toArray = function (e) {
        return L(this, e);
    }),
        (a.prototype.toArray = function (e) {
            return L(this, e);
        }),
        (s.prototype.toArray = function (e) {
            return L(this, e);
        }),
        (i.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return U(this, e, t);
            for (var r, n = this.value, o = n.length, i = String(n[--o]); --o >= 0; )
                (r = String(n[o])), (i += "0000000".slice(r.length) + r);
            return (this.sign ? "-" : "") + i;
        }),
        (a.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? U(this, e, t) : String(this.value);
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
    for (var J = 0; J < 1e3; J++) (o[J] = j(J)), J > 0 && (o[-J] = j(-J));
    return (
        (o.one = o[1]),
        (o.zero = o[0]),
        (o.minusOne = o[-1]),
        (o.max = R),
        (o.min = W),
        (o.gcd = F),
        (o.lcm = function (e, t) {
            return (e = j(e).abs()), (t = j(t).abs()), e.divide(F(e, t)).multiply(t);
        }),
        (o.isInstance = function (e) {
            return e instanceof i || e instanceof a || e instanceof s;
        }),
        (o.randBetween = function (e, t, r) {
            e = j(e);
            var n = r || Math.random,
                i = W(e, (t = j(t))),
                a = R(e, t).subtract(i).add(1);
            if (a.isSmall) return i.add(Math.floor(n() * a));
            for (var s = L(a, 1e7).value, u = [], p = !0, l = 0; l < s.length; l++) {
                var f = p ? s[l] : 1e7,
                    c = h(n() * f);
                u.push(c), c < f && (p = !1);
            }
            return i.add(o.fromArray(u, 1e7, !1));
        }),
        (o.fromArray = function (e, t, r) {
            return G(e.map(j), j(t || 10), r);
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
