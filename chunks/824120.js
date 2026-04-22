e = n.nmd(e);
var r = (function () {
    "use strict";
    var e = u(0x20000000000000),
        t = "0123456789abcdefghijklmnopqrstuvwxyz",
        n = "function" == typeof BigInt;
    function i(e, t, n, r) {
        return void 0 === e ? i[0] : void 0 !== t && (10 != +t || n) ? G(e, t, n, r) : Y(e);
    }
    function s(e, t) {
        (this.value = e), (this.sign = t), (this.isSmall = !1);
    }
    function a(e) {
        (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
    }
    function o(e) {
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
    function d(t) {
        c(t);
        var n = t.length;
        if (n < 4 && 0 > R(t, e))
            switch (n) {
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
    function c(e) {
        for (var t = e.length; 0 === e[--t]; );
        e.length = t + 1;
    }
    function _(e) {
        for (var t = Array(e), n = -1; ++n < e; ) t[n] = 0;
        return t;
    }
    function f(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
    }
    function E(e, t) {
        var n,
            r,
            i = e.length,
            s = t.length,
            a = Array(i),
            o = 0;
        for (r = 0; r < s; r++) (o = +((n = e[r] + t[r] + o) >= 1e7)), (a[r] = n - 1e7 * o);
        for (; r < i; ) (o = +(1e7 === (n = e[r] + o))), (a[r++] = n - 1e7 * o);
        return o > 0 && a.push(o), a;
    }
    function h(e, t) {
        return e.length >= t.length ? E(e, t) : E(t, e);
    }
    function p(e, t) {
        var n,
            r,
            i = e.length,
            s = Array(i);
        for (r = 0; r < i; r++) (t = Math.floor((n = e[r] - 1e7 + t) / 1e7)), (s[r] = n - 1e7 * t), (t += 1);
        for (; t > 0; ) (s[r++] = t % 1e7), (t = Math.floor(t / 1e7));
        return s;
    }
    function m(e, t) {
        var n,
            r,
            i = e.length,
            s = t.length,
            a = Array(i),
            o = 0;
        for (n = 0; n < s; n++) (r = e[n] - o - t[n]) < 0 ? ((r += 1e7), (o = 1)) : (o = 0), (a[n] = r);
        for (n = s; n < i; n++) {
            if ((r = e[n] - o) < 0) r += 1e7;
            else {
                a[n++] = r;
                break;
            }
            a[n] = r;
        }
        for (; n < i; n++) a[n] = e[n];
        return c(a), a;
    }
    function g(e, t, n) {
        var r,
            i,
            o = e.length,
            l = Array(o),
            u = -t;
        for (r = 0; r < o; r++) (u = Math.floor((i = e[r] + u) / 1e7)), (i %= 1e7), (l[r] = i < 0 ? i + 1e7 : i);
        return "number" == typeof (l = d(l)) ? (n && (l = -l), new a(l)) : new s(l, n);
    }
    function A(e, t) {
        var n,
            r,
            i,
            s,
            a = e.length,
            o = t.length,
            l = _(a + o);
        for (i = 0; i < a; ++i) {
            s = e[i];
            for (var u = 0; u < o; ++u)
                (r = Math.floor((n = s * t[u] + l[i + u]) / 1e7)), (l[i + u] = n - 1e7 * r), (l[i + u + 1] += r);
        }
        return c(l), l;
    }
    function I(e, t) {
        var n,
            r,
            i = e.length,
            s = Array(i),
            a = 0;
        for (r = 0; r < i; r++) (a = Math.floor((n = e[r] * t + a) / 1e7)), (s[r] = n - 1e7 * a);
        for (; a > 0; ) (s[r++] = a % 1e7), (a = Math.floor(a / 1e7));
        return s;
    }
    function T(e, t) {
        for (var n = []; t-- > 0; ) n.push(0);
        return n.concat(e);
    }
    function S(e, t, n) {
        return e < 1e7 ? new s(I(t, e), n) : new s(A(t, u(e)), n);
    }
    function y(e) {
        var t,
            n,
            r,
            i,
            s = e.length,
            a = _(s + s);
        for (r = 0; r < s; r++) {
            n = 0 - (i = e[r]) * i;
            for (var o = r; o < s; o++)
                (n = Math.floor((t = i * e[o] * 2 + a[r + o] + n) / 1e7)), (a[r + o] = t - 1e7 * n);
            a[r + s] = n;
        }
        return c(a), a;
    }
    function N(e, t) {
        var n,
            r,
            i,
            s,
            a = e.length,
            o = _(a);
        for (i = 0, n = a - 1; n >= 0; --n) (r = f((s = 1e7 * i + e[n]) / t)), (i = s - r * t), (o[n] = 0 | r);
        return [o, 0 | i];
    }
    function O(e, t) {
        var r,
            l,
            E = Y(t);
        if (n) return [new o(e.value / E.value), new o(e.value % E.value)];
        var h = e.value,
            p = E.value;
        if (0 === p) throw Error("Cannot divide by zero");
        if (e.isSmall) return E.isSmall ? [new a(f(h / p)), new a(h % p)] : [i[0], e];
        if (E.isSmall) {
            if (1 === p) return [e, i[0]];
            if (-1 == p) return [e.negate(), i[0]];
            var g = Math.abs(p);
            if (g < 1e7) {
                r = d((l = N(h, g))[0]);
                var A = l[1];
                return (e.sign && (A = -A), "number" == typeof r)
                    ? (e.sign !== E.sign && (r = -r), [new a(r), new a(A)])
                    : [new s(r, e.sign !== E.sign), new a(A)];
            }
            p = u(g);
        }
        var T = R(h, p);
        if (-1 === T) return [i[0], e];
        if (0 === T) return [i[e.sign === E.sign ? 1 : -1], i[0]];
        r = (l =
            h.length + p.length <= 200
                ? (function (e, t) {
                      var n,
                          r,
                          i,
                          s,
                          a,
                          o,
                          l,
                          u = e.length,
                          c = t.length,
                          f = _(t.length),
                          E = t[c - 1],
                          h = Math.ceil(1e7 / (2 * E)),
                          p = I(e, h),
                          m = I(t, h);
                      for (p.length <= u && p.push(0), m.push(0), E = m[c - 1], r = u - c; r >= 0; r--) {
                          for (
                              n = 1e7 - 1,
                                  p[r + c] !== E && (n = Math.floor((1e7 * p[r + c] + p[r + c - 1]) / E)),
                                  i = 0,
                                  s = 0,
                                  o = m.length,
                                  a = 0;
                              a < o;
                              a++
                          )
                              (i += n * m[a]),
                                  (l = Math.floor(i / 1e7)),
                                  (s += p[r + a] - (i - 1e7 * l)),
                                  (i = l),
                                  s < 0 ? ((p[r + a] = s + 1e7), (s = -1)) : ((p[r + a] = s), (s = 0));
                          for (; 0 !== s; ) {
                              for (n -= 1, i = 0, a = 0; a < o; a++)
                                  (i += p[r + a] - 1e7 + m[a]) < 0
                                      ? ((p[r + a] = i + 1e7), (i = 0))
                                      : ((p[r + a] = i), (i = 1));
                              s += i;
                          }
                          f[r] = n;
                      }
                      return (p = N(p, h)[0]), [d(f), d(p)];
                  })(h, p)
                : (function (e, t) {
                      for (var n, r, i, s, a, o = e.length, l = t.length, u = [], _ = []; o; ) {
                          if ((_.unshift(e[--o]), c(_), 0 > R(_, t))) {
                              u.push(0);
                              continue;
                          }
                          (r = _.length),
                              (i = 1e7 * _[r - 1] + _[r - 2]),
                              (s = 1e7 * t[l - 1] + t[l - 2]),
                              r > l && (i = (i + 1) * 1e7),
                              (n = Math.ceil(i / s));
                          do {
                              if (0 >= R((a = I(t, n)), _)) break;
                              n--;
                          } while (n);
                          u.push(n), (_ = m(_, a));
                      }
                      return u.reverse(), [d(u), d(_)];
                  })(h, p))[0];
        var S = e.sign !== E.sign,
            y = l[1],
            O = e.sign;
        return (
            "number" == typeof r ? (S && (r = -r), (r = new a(r))) : (r = new s(r, S)),
            "number" == typeof y ? (O && (y = -y), (y = new a(y))) : (y = new s(y, O)),
            [r, y]
        );
    }
    function R(e, t) {
        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
        for (var n = e.length - 1; n >= 0; n--) if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
        return 0;
    }
    function v(e) {
        var t = e.abs();
        return (
            !t.isUnit() &&
            (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)))
        );
    }
    function C(e, t) {
        for (var n, i, s, a = e.prev(), o = a, l = 0; o.isEven(); ) (o = o.divide(2)), l++;
        t: for (i = 0; i < t.length; i++)
            if (!e.lesser(t[i]) && !((s = r(t[i]).modPow(o, e)).isUnit() || s.equals(a))) {
                for (n = l - 1; 0 != n && !(s = s.square().mod(e)).isUnit(); n--) if (s.equals(a)) continue t;
                return !1;
            }
        return !0;
    }
    (s.prototype = Object.create(i.prototype)),
        (a.prototype = Object.create(i.prototype)),
        (o.prototype = Object.create(i.prototype)),
        (s.prototype.add = function (e) {
            var t = Y(e);
            if (this.sign !== t.sign) return this.subtract(t.negate());
            var n = this.value,
                r = t.value;
            return t.isSmall ? new s(p(n, Math.abs(r)), this.sign) : new s(h(n, r), this.sign);
        }),
        (s.prototype.plus = s.prototype.add),
        (a.prototype.add = function (e) {
            var t = Y(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.subtract(t.negate());
            var r = t.value;
            if (t.isSmall) {
                if (l(n + r)) return new a(n + r);
                r = u(Math.abs(r));
            }
            return new s(p(r, Math.abs(n)), n < 0);
        }),
        (a.prototype.plus = a.prototype.add),
        (o.prototype.add = function (e) {
            return new o(this.value + Y(e).value);
        }),
        (o.prototype.plus = o.prototype.add),
        (s.prototype.subtract = function (e) {
            var t,
                n,
                r = Y(e);
            if (this.sign !== r.sign) return this.add(r.negate());
            var i = this.value,
                o = r.value;
            return r.isSmall
                ? g(i, Math.abs(o), this.sign)
                : ((t = this.sign),
                  (R(i, o) >= 0 ? (n = m(i, o)) : ((n = m(o, i)), (t = !t)), "number" == typeof (n = d(n)))
                      ? (t && (n = -n), new a(n))
                      : new s(n, t));
        }),
        (s.prototype.minus = s.prototype.subtract),
        (a.prototype.subtract = function (e) {
            var t = Y(e),
                n = this.value;
            if (n < 0 !== t.sign) return this.add(t.negate());
            var r = t.value;
            return t.isSmall ? new a(n - r) : g(r, Math.abs(n), n >= 0);
        }),
        (a.prototype.minus = a.prototype.subtract),
        (o.prototype.subtract = function (e) {
            return new o(this.value - Y(e).value);
        }),
        (o.prototype.minus = o.prototype.subtract),
        (s.prototype.negate = function () {
            return new s(this.value, !this.sign);
        }),
        (a.prototype.negate = function () {
            var e = this.sign,
                t = new a(-this.value);
            return (t.sign = !e), t;
        }),
        (o.prototype.negate = function () {
            return new o(-this.value);
        }),
        (s.prototype.abs = function () {
            return new s(this.value, !1);
        }),
        (a.prototype.abs = function () {
            return new a(Math.abs(this.value));
        }),
        (o.prototype.abs = function () {
            return new o(this.value >= 0 ? this.value : -this.value);
        }),
        (s.prototype.multiply = function (e) {
            var t,
                n,
                r,
                a = Y(e),
                o = this.value,
                l = a.value,
                d = this.sign !== a.sign;
            if (a.isSmall) {
                if (0 === l) return i[0];
                if (1 === l) return this;
                if (-1 === l) return this.negate();
                if ((r = Math.abs(l)) < 1e7) return new s(I(o, r), d);
                l = u(r);
            }
            return -0.012 * (t = o.length) - 0.012 * (n = l.length) + 15e-6 * t * n > 0
                ? new s(
                      (function e(t, n) {
                          var r = Math.max(t.length, n.length);
                          if (r <= 30) return A(t, n);
                          r = Math.ceil(r / 2);
                          var i = t.slice(r),
                              s = t.slice(0, r),
                              a = n.slice(r),
                              o = n.slice(0, r),
                              l = e(s, o),
                              u = e(i, a),
                              d = e(h(s, i), h(o, a)),
                              _ = h(h(l, T(m(m(d, l), u), r)), T(u, 2 * r));
                          return c(_), _;
                      })(o, l),
                      d,
                  )
                : new s(A(o, l), d);
        }),
        (s.prototype.times = s.prototype.multiply),
        (a.prototype._multiplyBySmall = function (e) {
            return l(e.value * this.value)
                ? new a(e.value * this.value)
                : S(Math.abs(e.value), u(Math.abs(this.value)), this.sign !== e.sign);
        }),
        (s.prototype._multiplyBySmall = function (e) {
            return 0 === e.value
                ? i[0]
                : 1 === e.value
                  ? this
                  : -1 === e.value
                    ? this.negate()
                    : S(Math.abs(e.value), this.value, this.sign !== e.sign);
        }),
        (a.prototype.multiply = function (e) {
            return Y(e)._multiplyBySmall(this);
        }),
        (a.prototype.times = a.prototype.multiply),
        (o.prototype.multiply = function (e) {
            return new o(this.value * Y(e).value);
        }),
        (o.prototype.times = o.prototype.multiply),
        (s.prototype.square = function () {
            return new s(y(this.value), !1);
        }),
        (a.prototype.square = function () {
            var e = this.value * this.value;
            return l(e) ? new a(e) : new s(y(u(Math.abs(this.value))), !1);
        }),
        (o.prototype.square = function (e) {
            return new o(this.value * this.value);
        }),
        (s.prototype.divmod = function (e) {
            var t = O(this, e);
            return { quotient: t[0], remainder: t[1] };
        }),
        (o.prototype.divmod = a.prototype.divmod = s.prototype.divmod),
        (s.prototype.divide = function (e) {
            return O(this, e)[0];
        }),
        (o.prototype.over = o.prototype.divide =
            function (e) {
                return new o(this.value / Y(e).value);
            }),
        (a.prototype.over = a.prototype.divide = s.prototype.over = s.prototype.divide),
        (s.prototype.mod = function (e) {
            return O(this, e)[1];
        }),
        (o.prototype.mod = o.prototype.remainder =
            function (e) {
                return new o(this.value % Y(e).value);
            }),
        (a.prototype.remainder = a.prototype.mod = s.prototype.remainder = s.prototype.mod),
        (s.prototype.pow = function (e) {
            var t,
                n,
                r,
                s = Y(e),
                o = this.value,
                u = s.value;
            if (0 === u) return i[1];
            if (0 === o) return i[0];
            if (1 === o) return i[1];
            if (-1 === o) return s.isEven() ? i[1] : i[-1];
            if (s.sign) return i[0];
            if (!s.isSmall) throw Error("The exponent " + s.toString() + " is too large.");
            if (this.isSmall && l((t = Math.pow(o, u)))) return new a(f(t));
            for (n = this, r = i[1]; !0 & u && ((r = r.times(n)), --u), 0 !== u; ) (u /= 2), (n = n.square());
            return r;
        }),
        (a.prototype.pow = s.prototype.pow),
        (o.prototype.pow = function (e) {
            var t = Y(e),
                n = this.value,
                r = t.value,
                s = BigInt(0),
                a = BigInt(1),
                l = BigInt(2);
            if (r === s) return i[1];
            if (n === s) return i[0];
            if (n === a) return i[1];
            if (n === BigInt(-1)) return t.isEven() ? i[1] : i[-1];
            if (t.isNegative()) return new o(s);
            for (var u = this, d = i[1]; (r & a) === a && ((d = d.times(u)), --r), r !== s; )
                (r /= l), (u = u.square());
            return d;
        }),
        (s.prototype.modPow = function (e, t) {
            if (((e = Y(e)), (t = Y(t)).isZero())) throw Error("Cannot take modPow with modulus 0");
            var n = i[1],
                r = this.mod(t);
            for (e.isNegative() && ((e = e.multiply(i[-1])), (r = r.modInv(t))); e.isPositive(); ) {
                if (r.isZero()) return i[0];
                e.isOdd() && (n = n.multiply(r).mod(t)), (e = e.divide(2)), (r = r.square().mod(t));
            }
            return n;
        }),
        (o.prototype.modPow = a.prototype.modPow = s.prototype.modPow),
        (s.prototype.compareAbs = function (e) {
            var t = Y(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? 1 : R(n, r);
        }),
        (a.prototype.compareAbs = function (e) {
            var t = Y(e),
                n = Math.abs(this.value),
                r = t.value;
            return t.isSmall ? (n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1) : -1;
        }),
        (o.prototype.compareAbs = function (e) {
            var t = this.value,
                n = Y(e).value;
            return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n) ? 0 : t > n ? 1 : -1;
        }),
        (s.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = Y(e),
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
                  : R(n, r) * (this.sign ? -1 : 1);
        }),
        (s.prototype.compareTo = s.prototype.compare),
        (a.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = Y(e),
                n = this.value,
                r = t.value;
            return t.isSmall ? (n == r ? 0 : n > r ? 1 : -1) : n < 0 !== t.sign ? (n < 0 ? -1 : 1) : n < 0 ? 1 : -1;
        }),
        (a.prototype.compareTo = a.prototype.compare),
        (o.prototype.compare = function (e) {
            if (e === 1 / 0) return -1;
            if (e === -1 / 0) return 1;
            var t = this.value,
                n = Y(e).value;
            return t === n ? 0 : t > n ? 1 : -1;
        }),
        (o.prototype.compareTo = o.prototype.compare),
        (s.prototype.equals = function (e) {
            return 0 === this.compare(e);
        }),
        (o.prototype.eq =
            o.prototype.equals =
            a.prototype.eq =
            a.prototype.equals =
            s.prototype.eq =
                s.prototype.equals),
        (s.prototype.notEquals = function (e) {
            return 0 !== this.compare(e);
        }),
        (o.prototype.neq =
            o.prototype.notEquals =
            a.prototype.neq =
            a.prototype.notEquals =
            s.prototype.neq =
                s.prototype.notEquals),
        (s.prototype.greater = function (e) {
            return this.compare(e) > 0;
        }),
        (o.prototype.gt =
            o.prototype.greater =
            a.prototype.gt =
            a.prototype.greater =
            s.prototype.gt =
                s.prototype.greater),
        (s.prototype.lesser = function (e) {
            return 0 > this.compare(e);
        }),
        (o.prototype.lt =
            o.prototype.lesser =
            a.prototype.lt =
            a.prototype.lesser =
            s.prototype.lt =
                s.prototype.lesser),
        (s.prototype.greaterOrEquals = function (e) {
            return this.compare(e) >= 0;
        }),
        (o.prototype.geq =
            o.prototype.greaterOrEquals =
            a.prototype.geq =
            a.prototype.greaterOrEquals =
            s.prototype.geq =
                s.prototype.greaterOrEquals),
        (s.prototype.lesserOrEquals = function (e) {
            return 0 >= this.compare(e);
        }),
        (o.prototype.leq =
            o.prototype.lesserOrEquals =
            a.prototype.leq =
            a.prototype.lesserOrEquals =
            s.prototype.leq =
                s.prototype.lesserOrEquals),
        (s.prototype.isEven = function () {
            return (1 & this.value[0]) == 0;
        }),
        (a.prototype.isEven = function () {
            return (1 & this.value) == 0;
        }),
        (o.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0);
        }),
        (s.prototype.isOdd = function () {
            return (1 & this.value[0]) == 1;
        }),
        (a.prototype.isOdd = function () {
            return (1 & this.value) == 1;
        }),
        (o.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1);
        }),
        (s.prototype.isPositive = function () {
            return !this.sign;
        }),
        (a.prototype.isPositive = function () {
            return this.value > 0;
        }),
        (o.prototype.isPositive = a.prototype.isPositive),
        (s.prototype.isNegative = function () {
            return this.sign;
        }),
        (a.prototype.isNegative = function () {
            return this.value < 0;
        }),
        (o.prototype.isNegative = a.prototype.isNegative),
        (s.prototype.isUnit = function () {
            return !1;
        }),
        (a.prototype.isUnit = function () {
            return 1 === Math.abs(this.value);
        }),
        (o.prototype.isUnit = function () {
            return this.abs().value === BigInt(1);
        }),
        (s.prototype.isZero = function () {
            return !1;
        }),
        (a.prototype.isZero = function () {
            return 0 === this.value;
        }),
        (o.prototype.isZero = function () {
            return this.value === BigInt(0);
        }),
        (s.prototype.isDivisibleBy = function (e) {
            var t = Y(e);
            return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
        }),
        (o.prototype.isDivisibleBy = a.prototype.isDivisibleBy = s.prototype.isDivisibleBy),
        (s.prototype.isPrime = function (e) {
            var t = v(this);
            if (void 0 !== t) return t;
            var n = this.abs(),
                i = n.bitLength();
            if (i <= 64) return C(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (
                var s = Math.log(2) * i.toJSNumber(), a = Math.ceil(!0 === e ? 2 * Math.pow(s, 2) : s), o = [], l = 0;
                l < a;
                l++
            )
                o.push(r(l + 2));
            return C(n, o);
        }),
        (o.prototype.isPrime = a.prototype.isPrime = s.prototype.isPrime),
        (s.prototype.isProbablePrime = function (e, t) {
            var n = v(this);
            if (void 0 !== n) return n;
            for (var i = this.abs(), s = void 0 === e ? 5 : e, a = [], o = 0; o < s; o++)
                a.push(r.randBetween(2, i.minus(2), t));
            return C(i, a);
        }),
        (o.prototype.isProbablePrime = a.prototype.isProbablePrime = s.prototype.isProbablePrime),
        (s.prototype.modInv = function (e) {
            for (var t, n, i, s = r.zero, a = r.one, o = Y(e), l = this.abs(); !l.isZero(); )
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
        (o.prototype.modInv = a.prototype.modInv = s.prototype.modInv),
        (s.prototype.next = function () {
            var e = this.value;
            return this.sign ? g(e, 1, this.sign) : new s(p(e, 1), this.sign);
        }),
        (a.prototype.next = function () {
            var t = this.value;
            return t + 1 < 0x20000000000000 ? new a(t + 1) : new s(e, !1);
        }),
        (o.prototype.next = function () {
            return new o(this.value + BigInt(1));
        }),
        (s.prototype.prev = function () {
            var e = this.value;
            return this.sign ? new s(p(e, 1), !0) : g(e, 1, this.sign);
        }),
        (a.prototype.prev = function () {
            var t = this.value;
            return t - 1 > -0x20000000000000 ? new a(t - 1) : new s(e, !0);
        }),
        (o.prototype.prev = function () {
            return new o(this.value - BigInt(1));
        });
    for (var b = [1]; 2 * b[b.length - 1] <= 1e7; ) b.push(2 * b[b.length - 1]);
    var D = b.length,
        L = b[D - 1];
    function w(e) {
        return 1e7 >= Math.abs(e);
    }
    function M(e, t, n) {
        t = Y(t);
        for (
            var i = e.isNegative(),
                s = t.isNegative(),
                a = i ? e.not() : e,
                o = s ? t.not() : t,
                l = 0,
                u = 0,
                d = null,
                c = null,
                _ = [];
            !a.isZero() || !o.isZero();
        )
            (l = (d = O(a, L))[1].toJSNumber()),
                i && (l = L - 1 - l),
                (u = (c = O(o, L))[1].toJSNumber()),
                s && (u = L - 1 - u),
                (a = d[0]),
                (o = c[0]),
                _.push(n(l, u));
        for (var f = 0 !== n(+!!i, +!!s) ? r(-1) : r(0), E = _.length - 1; E >= 0; E -= 1)
            f = f.multiply(L).add(r(_[E]));
        return f;
    }
    (s.prototype.shiftLeft = function (e) {
        var t = Y(e).toJSNumber();
        if (!w(t)) throw Error(String(t) + " is too large for shifting.");
        if (t < 0) return this.shiftRight(-t);
        var n = this;
        if (n.isZero()) return n;
        for (; t >= D; ) (n = n.multiply(L)), (t -= D - 1);
        return n.multiply(b[t]);
    }),
        (o.prototype.shiftLeft = a.prototype.shiftLeft = s.prototype.shiftLeft),
        (s.prototype.shiftRight = function (e) {
            var t,
                n = Y(e).toJSNumber();
            if (!w(n)) throw Error(String(n) + " is too large for shifting.");
            if (n < 0) return this.shiftLeft(-n);
            for (var r = this; n >= D; ) {
                if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                (r = (t = O(r, L))[1].isNegative() ? t[0].prev() : t[0]), (n -= D - 1);
            }
            return (t = O(r, b[n]))[1].isNegative() ? t[0].prev() : t[0];
        }),
        (o.prototype.shiftRight = a.prototype.shiftRight = s.prototype.shiftRight),
        (s.prototype.not = function () {
            return this.negate().prev();
        }),
        (o.prototype.not = a.prototype.not = s.prototype.not),
        (s.prototype.and = function (e) {
            return M(this, e, function (e, t) {
                return e & t;
            });
        }),
        (o.prototype.and = a.prototype.and = s.prototype.and),
        (s.prototype.or = function (e) {
            return M(this, e, function (e, t) {
                return e | t;
            });
        }),
        (o.prototype.or = a.prototype.or = s.prototype.or),
        (s.prototype.xor = function (e) {
            return M(this, e, function (e, t) {
                return e ^ t;
            });
        }),
        (o.prototype.xor = a.prototype.xor = s.prototype.xor);
    function P(e) {
        var t = e.value,
            n =
                "number" == typeof t
                    ? 0x40000000 | t
                    : "bigint" == typeof t
                      ? t | BigInt(0x40000000)
                      : (t[0] + 1e7 * t[1]) | 0x40004000;
        return n & -n;
    }
    function U(e, t) {
        return (e = Y(e)), (t = Y(t)), e.greater(t) ? e : t;
    }
    function k(e, t) {
        return (e = Y(e)), (t = Y(t)), e.lesser(t) ? e : t;
    }
    function x(e, t) {
        if (((e = Y(e).abs()), (t = Y(t).abs()), e.equals(t))) return e;
        if (e.isZero()) return t;
        if (t.isZero()) return e;
        for (var n, r, s = i[1]; e.isEven() && t.isEven(); )
            (n = k(P(e), P(t))), (e = e.divide(n)), (t = t.divide(n)), (s = s.multiply(n));
        for (; e.isEven(); ) e = e.divide(P(e));
        do {
            for (; t.isEven(); ) t = t.divide(P(t));
            e.greater(t) && ((r = t), (t = e), (e = r)), (t = t.subtract(e));
        } while (!t.isZero());
        return s.isUnit() ? e : e.multiply(s);
    }
    (s.prototype.bitLength = function () {
        var e = this;
        return (0 > e.compareTo(r(0)) && (e = e.negate().subtract(r(1))), 0 === e.compareTo(r(0)))
            ? r(0)
            : r(
                  (function e(t, n) {
                      if (0 >= n.compareTo(t)) {
                          var i = e(t, n.square(n)),
                              s = i.p,
                              a = i.e,
                              o = s.multiply(n);
                          return 0 >= o.compareTo(t) ? { p: o, e: 2 * a + 1 } : { p: s, e: 2 * a };
                      }
                      return { p: r(1), e: 0 };
                  })(e, r(2)).e,
              ).add(r(1));
    }),
        (o.prototype.bitLength = a.prototype.bitLength = s.prototype.bitLength);
    var G = function (e, n, r, i) {
        (r = r || t), (e = String(e)), i || ((e = e.toLowerCase()), (r = r.toLowerCase()));
        var s,
            a = e.length,
            o = Math.abs(n),
            l = {};
        for (s = 0; s < r.length; s++) l[r[s]] = s;
        for (s = 0; s < a; s++) {
            var u = e[s];
            if ("-" !== u && u in l && l[u] >= o) {
                if ("1" === u && 1 === o) continue;
                throw Error(u + " is not a valid digit in base " + n + ".");
            }
        }
        n = Y(n);
        var d = [],
            c = "-" === e[0];
        for (s = +!!c; s < e.length; s++) {
            var u = e[s];
            if (u in l) d.push(Y(l[u]));
            else if ("<" === u) {
                var _ = s;
                do s++;
                while (">" !== e[s] && s < e.length);
                d.push(Y(e.slice(_ + 1, s)));
            } else throw Error(u + " is not a valid character");
        }
        return V(d, n, c);
    };
    function V(e, t, n) {
        var r,
            s = i[0],
            a = i[1];
        for (r = e.length - 1; r >= 0; r--) (s = s.add(e[r].times(a))), (a = a.times(t));
        return n ? s.negate() : s;
    }
    function F(e, t) {
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
    function B(e, n, r) {
        var i = F(e, n);
        return (
            (i.isNegative ? "-" : "") +
            i.value
                .map(function (e) {
                    var n;
                    return e < (n = (n = r) || t).length ? n[e] : "<" + e + ">";
                })
                .join("")
        );
    }
    function H(e) {
        if (l(+e)) {
            var t = +e;
            if (t === f(t)) return n ? new o(BigInt(t)) : new a(t);
            throw Error("Invalid integer: " + e);
        }
        var r = "-" === e[0];
        r && (e = e.slice(1));
        var i = e.split(/e/i);
        if (i.length > 2) throw Error("Invalid integer: " + i.join("e"));
        if (2 === i.length) {
            var u = i[1];
            if (("+" === u[0] && (u = u.slice(1)), (u *= 1) !== f(u) || !l(u)))
                throw Error("Invalid integer: " + u + " is not a valid exponent.");
            var d = i[0],
                _ = d.indexOf(".");
            if ((_ >= 0 && ((u -= d.length - _ - 1), (d = d.slice(0, _) + d.slice(_ + 1))), u < 0))
                throw Error("Cannot include negative exponent part for integers");
            (d += Array(u + 1).join("0")), (e = d);
        }
        if (!/^([0-9][0-9]*)$/.test(e)) throw Error("Invalid integer: " + e);
        if (n) return new o(BigInt(r ? "-" + e : e));
        for (var E = [], h = e.length, p = h - 7; h > 0; ) E.push(+e.slice(p, h)), (p -= 7) < 0 && (p = 0), (h -= 7);
        return c(E), new s(E, r);
    }
    function Y(e) {
        if ("number" == typeof e) {
            if (n) return new o(BigInt(e));
            if (l(e)) {
                if (e !== f(e)) throw Error(e + " is not an integer.");
                return new a(e);
            }
            return H(e.toString());
        }
        return "string" == typeof e ? H(e) : "bigint" == typeof e ? new o(e) : e;
    }
    (s.prototype.toArray = function (e) {
        return F(this, e);
    }),
        (a.prototype.toArray = function (e) {
            return F(this, e);
        }),
        (o.prototype.toArray = function (e) {
            return F(this, e);
        }),
        (s.prototype.toString = function (e, t) {
            if ((void 0 === e && (e = 10), 10 !== e)) return B(this, e, t);
            for (var n, r = this.value, i = r.length, s = String(r[--i]); --i >= 0; )
                (n = String(r[i])), (s += "0000000".slice(n.length) + n);
            return (this.sign ? "-" : "") + s;
        }),
        (a.prototype.toString = function (e, t) {
            return (void 0 === e && (e = 10), 10 != e) ? B(this, e, t) : String(this.value);
        }),
        (o.prototype.toString = a.prototype.toString),
        (o.prototype.toJSON =
            s.prototype.toJSON =
            a.prototype.toJSON =
                function () {
                    return this.toString();
                }),
        (s.prototype.valueOf = function () {
            return parseInt(this.toString(), 10);
        }),
        (s.prototype.toJSNumber = s.prototype.valueOf),
        (a.prototype.valueOf = function () {
            return this.value;
        }),
        (a.prototype.toJSNumber = a.prototype.valueOf),
        (o.prototype.valueOf = o.prototype.toJSNumber =
            function () {
                return parseInt(this.toString(), 10);
            });
    for (var W = 0; W < 1e3; W++) (i[W] = Y(W)), W > 0 && (i[-W] = Y(-W));
    return (
        (i.one = i[1]),
        (i.zero = i[0]),
        (i.minusOne = i[-1]),
        (i.max = U),
        (i.min = k),
        (i.gcd = x),
        (i.lcm = function (e, t) {
            return (e = Y(e).abs()), (t = Y(t).abs()), e.divide(x(e, t)).multiply(t);
        }),
        (i.isInstance = function (e) {
            return e instanceof s || e instanceof a || e instanceof o;
        }),
        (i.randBetween = function (e, t, n) {
            e = Y(e);
            var r = n || Math.random,
                s = k(e, (t = Y(t))),
                a = U(e, t).subtract(s).add(1);
            if (a.isSmall) return s.add(Math.floor(r() * a));
            for (var o = F(a, 1e7).value, l = [], u = !0, d = 0; d < o.length; d++) {
                var c = u ? o[d] : 1e7,
                    _ = f(r() * c);
                l.push(_), _ < c && (u = !1);
            }
            return s.add(i.fromArray(l, 1e7, !1));
        }),
        (i.fromArray = function (e, t, n) {
            return V(e.map(Y), Y(t || 10), n);
        }),
        i
    );
})();
e.hasOwnProperty("exports") && (e.exports = r),
    "function" == typeof define &&
        define.amd &&
        define(function () {
            return r;
        });
