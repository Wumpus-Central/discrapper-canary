!(function (e, n) {
    n(t);
})(0, function (e) {
    function t(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e || 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || (e >= 5760 && e4.indexOf(e) >= 0);
    }
    function n(e) {
        switch (32 | e) {
            case 109:
            case 122:
            case 108:
            case 104:
            case 118:
            case 99:
            case 115:
            case 113:
            case 116:
            case 97:
            case 114:
                return !0;
        }
        return !1;
    }
    function i(e) {
        return e >= 48 && e <= 57;
    }
    function r(e) {
        return (e >= 48 && e <= 57) || 43 === e || 45 === e || 46 === e;
    }
    function a(e) {
        (this.index = 0), (this.path = e), (this.max = e.length), (this.result = []), (this.param = 0), (this.err = ''), (this.segmentStart = 0), (this.data = []);
    }
    function s(e) {
        for (; e.index < e.max && t(e.path.charCodeAt(e.index)); ) e.index++;
    }
    function o(e) {
        var t,
            n = e.index,
            r = n,
            a = e.max,
            s = !1,
            o = !1,
            l = !1,
            u = !1;
        if (r >= a) return void (e.err = 'SvgPath: missed param (at pos ' + r + ')');
        if (((43 !== (t = e.path.charCodeAt(r)) && 45 !== t) || (t = ++r < a ? e.path.charCodeAt(r) : 0), !i(t) && 46 !== t)) return void (e.err = 'SvgPath: param should start with 0..9 or `.` (at pos ' + r + ')');
        if (46 !== t) {
            if (((s = 48 === t), (t = ++r < a ? e.path.charCodeAt(r) : 0), s && r < a && t && i(t))) return void (e.err = 'SvgPath: numbers started with `0` such as `09` are ilegal (at pos ' + n + ')');
            for (; r < a && i(e.path.charCodeAt(r)); ) r++, (o = !0);
            t = r < a ? e.path.charCodeAt(r) : 0;
        }
        if (46 === t) {
            for (u = !0, r++; i(e.path.charCodeAt(r)); ) r++, (l = !0);
            t = r < a ? e.path.charCodeAt(r) : 0;
        }
        if (101 === t || 69 === t) {
            if ((u && !o && !l) || ((43 !== (t = ++r < a ? e.path.charCodeAt(r) : 0) && 45 !== t) || r++, !(r < a && i(e.path.charCodeAt(r))))) return void (e.err = 'SvgPath: invalid float exponent (at pos ' + r + ')');
            for (; r < a && i(e.path.charCodeAt(r)); ) r++;
        }
        (e.index = r), (e.param = parseFloat(e.path.slice(n, r)) + 0);
    }
    function l(e) {
        n = (t = e.path[e.segmentStart]).toLowerCase();
        var t,
            n,
            i = e.data;
        if (('m' === n && i.length > 2 && (e.result.push([t, i[0], i[1]]), (i = i.slice(2)), (n = 'l'), (t = 'm' === t ? 'l' : 'L')), 'r' === n)) e.result.push([t].concat(i));
        else for (; i.length >= e3[n] && (e.result.push([t].concat(i.splice(0, e3[n]))), e3[n]); );
    }
    function u(e) {
        var t,
            i,
            a,
            u = e.max;
        if (((e.segmentStart = e.index), !n(e.path.charCodeAt(e.index)))) return void (e.err = 'SvgPath: bad command ' + e.path[e.index] + ' (at pos ' + e.index + ')');
        if (((i = e3[e.path[e.index].toLowerCase()]), e.index++, s(e), (e.data = []), !i)) return void l(e);
        for (t = !1; ; ) {
            for (a = i; a > 0; a--) {
                if ((o(e), e.err.length)) return;
                e.data.push(e.param), s(e), (t = !1), e.index < u && 44 === e.path.charCodeAt(e.index) && (e.index++, s(e), (t = !0));
            }
            if (!t && (e.index >= e.max || !r(e.path.charCodeAt(e.index)))) break;
        }
        l(e);
    }
    function c(e, t) {
        return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
    }
    function d() {
        if (!(this instanceof d)) return new d();
        (this.queue = []), (this.cache = null);
    }
    function f(e, t, n, i) {
        var r = e * i - t * n < 0 ? -1 : 1,
            a = Math.sqrt(e * e + t * t),
            s = Math.sqrt(e * e + t * t),
            o = (e * n + t * i) / (a * s);
        return o > 1 && (o = 1), o < -1 && (o = -1), r * Math.acos(o);
    }
    function _(e, t, n, i, r, a, s, o, l, u) {
        var c = (u * (e - n)) / 2 + (l * (t - i)) / 2,
            d = (-l * (e - n)) / 2 + (u * (t - i)) / 2,
            _ = s * s,
            p = o * o,
            h = c * c,
            m = d * d,
            g = _ * p - _ * m - p * h;
        g < 0 && (g = 0), (g /= _ * m + p * h);
        var E = (((g = Math.sqrt(g) * (r === a ? -1 : 1)) * s) / o) * d,
            v = (-(g * o) / s) * c,
            y = u * E - l * v + (e + n) / 2,
            I = l * E + u * v + (t + i) / 2,
            T = (c - E) / s,
            b = (d - v) / o,
            S = (-c - E) / s,
            A = (-d - v) / o,
            N = f(1, 0, T, b),
            C = f(T, b, S, A);
        return 0 === a && C > 0 && (C -= tt), 1 === a && C < 0 && (C += tt), [y, I, N, C];
    }
    function p(e, t) {
        var n = (4 / 3) * Math.tan(t / 4),
            i = Math.cos(e),
            r = Math.sin(e),
            a = Math.cos(e + t),
            s = Math.sin(e + t);
        return [i, r, i - r * n, r + i * n, a + s * n, s - a * n, a, s];
    }
    function h(e, t, n) {
        if (!(this instanceof h)) return new h(e, t, n);
        (this.rx = e), (this.ry = t), (this.ax = n);
    }
    function m(e) {
        if (!(this instanceof m)) return new m(e);
        var t = e6(e);
        (this.segments = t.segments), (this.err = t.err), (this.__stack = []);
    }
    function g(e) {
        var t = e.match(tu);
        return t ? t.map(Number) : [];
    }
    function E(e, t, n, i, r, a, s, o) {
        (this.a = {
            x: e,
            y: t
        }),
            (this.b = {
                x: n,
                y: i
            }),
            (this.c = {
                x: r,
                y: a
            }),
            (this.d = {
                x: s,
                y: o
            }),
            null != s && null != o ? ((this.getArcLength = R), (this.getPoint = b), (this.getDerivative = y)) : ((this.getArcLength = S), (this.getPoint = T), (this.getDerivative = v)),
            this.init();
    }
    function v(e, t, n) {
        return {
            x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
            y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
        };
    }
    function y(e, t, n) {
        return T([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], n);
    }
    function I(e, t, n, i, r) {
        for (var a = 1, s = e / t, o = (e - n(i, r, s)) / t; a > 0.001; ) {
            var l = n(i, r, s + o),
                u = n(i, r, s - o),
                c = Math.abs(e - l) / t,
                d = Math.abs(e - u) / t;
            c < a ? ((a = c), (s += o)) : d < a ? ((a = d), (s -= o)) : (o /= 2);
        }
        return s;
    }
    function T(e, t, n) {
        return {
            x: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
            y: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2]
        };
    }
    function b(e, t, n) {
        return {
            x: (1 - n) * (1 - n) * (1 - n) * e[0] + 3 * (1 - n) * (1 - n) * n * e[1] + 3 * (1 - n) * n * n * e[2] + n * n * n * e[3],
            y: (1 - n) * (1 - n) * (1 - n) * t[0] + 3 * (1 - n) * (1 - n) * n * t[1] + 3 * (1 - n) * n * n * t[2] + n * n * n * t[3]
        };
    }
    function S(e, t, n) {
        void 0 === n && (n = 1);
        var i = e[0] - 2 * e[1] + e[2],
            r = t[0] - 2 * t[1] + t[2],
            a = 2 * e[1] - 2 * e[0],
            s = 2 * t[1] - 2 * t[0],
            o = 4 * (i * i + r * r),
            l = 4 * (i * a + r * s),
            u = a * a + s * s;
        if (0 === o) return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
        var c = l / (2 * o),
            d = n + c,
            f = u / o - c * c;
        return (Math.sqrt(o) / 2) * (d * Math.sqrt(d * d + f) - c * Math.sqrt(c * c + f) + f * Math.log(Math.abs((d + Math.sqrt(d * d + f)) / (c + Math.sqrt(c * c + f)))));
    }
    function A(e, t) {
        return t_[e][t];
    }
    function N(e, t, n) {
        var i,
            r,
            a,
            s = n.length - 1;
        if (0 === s) return 0;
        if (0 === e) {
            for (r = 0, a = 0; a <= s; a++) r += A(s, a) * Math.pow(1 - t, s - a) * Math.pow(t, a) * n[a];
            return r;
        }
        for (i = Array(s), a = 0; a < s; a++) i[a] = s * (n[a + 1] - n[a]);
        return N(e - 1, t, i);
    }
    function C(e, t, n) {
        var i = N(1, n, e),
            r = N(1, n, t);
        return Math.sqrt(i * i + r * r);
    }
    function R(e, t, n) {
        var i, r, a, s;
        for (void 0 === n && (n = 1), i = n / 2, r = 0, a = 0; a < 20; a++) (s = i * td[20][a] + i), (r += tf[20][a] * C(e, t, s));
        return i * r;
    }
    function O(e, t, n, i) {
        var r = e * i - t * n < 0 ? -1 : 1,
            a = e * n + t * i;
        return a > 1 && (a = 1), a < -1 && (a = -1), r * Math.acos(a);
    }
    function D(e, t, n, i, r, a, s, o, l, u) {
        var c = (u * (e - n)) / 2 + (l * (t - i)) / 2,
            d = (-l * (e - n)) / 2 + (u * (t - i)) / 2,
            f = s * s,
            _ = o * o,
            p = c * c,
            h = d * d,
            m = f * _ - f * h - _ * p;
        m < 0 && (m = 0), (m /= f * h + _ * p);
        var g = (((m = Math.sqrt(m) * (r === a ? -1 : 1)) * s) / o) * d,
            E = (-(m * o) / s) * c,
            v = u * g - l * E + (e + n) / 2,
            y = l * g + u * E + (t + i) / 2,
            I = (c - g) / s,
            T = (d - E) / o,
            b = (-c - g) / s,
            S = (-d - E) / o,
            A = O(1, 0, I, T),
            N = O(I, T, b, S);
        return 0 === a && N > 0 && (N -= tp), 1 === a && N < 0 && (N += tp), [v, y, A, N];
    }
    function x(e, t) {
        var n = (4 / 3) * Math.tan(t / 4),
            i = Math.cos(e),
            r = Math.sin(e),
            a = Math.cos(e + t),
            s = Math.sin(e + t);
        return [i, r, i - r * n, r + i * n, a + s * n, s - a * n, a, s];
    }
    function L(e, t, n, i, r, a, s, o, l) {
        var u = 0,
            c = [],
            d = [];
        th(e, t, n, i, r, a, s, o, l).forEach(function (e) {
            var t = new tc(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
                n = t.getTotalLength();
            (u += n), c.push(n), d.push(t);
        }),
            (this.length = u),
            (this.partialLengths = c),
            (this.curves = d);
    }
    function P(e, t, n, i) {
        (this.x0 = e), (this.x1 = t), (this.y0 = n), (this.y1 = i);
    }
    function w(e, t) {
        return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
    }
    function M(e, t, n) {
        return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
    }
    function k(e, t) {
        return 1e-9 > w(e, t);
    }
    function U(e, t, n) {
        var i = e.map(function (e, n) {
            return G(e, t[n]);
        });
        return function (e) {
            var t = i.map(function (t) {
                return t(e);
            });
            return n ? H(t) : t;
        };
    }
    function G(e, t) {
        return function (n) {
            return e.map(function (e, i) {
                return e + n * (t[i] - e);
            });
        };
    }
    function B(e) {
        return 'number' == typeof e && isFinite(e);
    }
    function Z(e) {
        return F(e) ? e1(e) : [(e[0][0] + e[e.length - 1][0]) / 2, (e[0][1] + e[e.length - 1][1]) / 2];
    }
    function F(e) {
        for (var t = 0; t < e.length - 2; t++) {
            var n = e[t],
                i = e[t + 1],
                r = e[t + 2];
            if (n[0] * (i[1] - r[1]) + i[0] * (r[1] - n[1]) + r[0] * (n[1] - i[1])) return !0;
        }
        return !1;
    }
    function V(e) {
        return new ta(e).abs();
    }
    function j(e) {
        return e
            .toString()
            .split('M')
            .map(function (e, t) {
                return (e = e.trim()), t && e ? 'M' + e : e;
            })
            .filter(function (e) {
                return e;
            });
    }
    function H(e) {
        return 'M' + e.join('L') + 'Z';
    }
    function Y(e) {
        return j(V(e));
    }
    function W(e, t) {
        var n = V(e);
        return K(n) || z(n, t);
    }
    function K(e) {
        var t = e.segments || [],
            n = [];
        if (!t.length || 'M' !== t[0][0]) return !1;
        for (var i = 0; i < t.length; i++) {
            var r = t[i],
                a = r[0],
                s = r[1],
                o = r[2];
            if (('M' === a && i) || 'Z' === a) break;
            if ('M' === a || 'L' === a) n.push([s, o]);
            else if ('H' === a) n.push([s, n[n.length - 1][1]]);
            else {
                if ('V' !== a) return !1;
                n.push([n[n.length - 1][0], s]);
            }
        }
        return !!n.length && { ring: n };
    }
    function z(e, t) {
        var n,
            i,
            r = j(e)[0],
            a = [],
            s = 3;
        if (!r) throw TypeError(tv);
        (n = (i = q(r)).getTotalLength()), t && B(t) && t > 0 && (s = Math.max(s, Math.ceil(n / t)));
        for (var o = 0; o < s; o++) {
            var l = i.getPointAtLength((n * o) / s);
            a.push([l.x, l.y]);
        }
        return {
            ring: a,
            skipBisect: !0
        };
    }
    function q(e) {
        if ('undefined' != typeof window && window && window.document)
            try {
                var t = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');
                return t.setAttributeNS(null, 'd', e), t;
            } catch (e) {}
        return tE(e);
    }
    function Q(e, t) {
        for (var n = e.length + t, i = e2(e) / t, r = 0, a = 0, s = i / 2; e.length < n; ) {
            var o = e[r],
                l = e[(r + 1) % e.length],
                u = w(o, l);
            s <= a + u ? (e.splice(r + 1, 0, u ? M(o, l, (s - a) / u) : o.slice(0)), (s += i)) : ((a += u), r++);
        }
    }
    function X(e, t) {
        void 0 === t && (t = 1 / 0);
        for (var n = 0; n < e.length; n++) for (var i = e[n], r = n === e.length - 1 ? e[0] : e[n + 1]; w(i, r) > t; ) (r = M(i, r, 0.5)), e.splice(n + 1, 0, r);
    }
    function J(e, t) {
        var n, i;
        if ('string' == typeof e) {
            var r = W(e, t);
            (e = r.ring), (i = r.skipBisect);
        } else if (!Array.isArray(e)) throw TypeError(tv);
        if (!$((n = e.slice(0)))) throw TypeError(tv);
        return n.length > 1 && k(n[0], n[n.length - 1]) && n.pop(), e0(n) > 0 && n.reverse(), !i && t && B(t) && t > 0 && X(n, t), n;
    }
    function $(e) {
        return e.every(function (e) {
            return Array.isArray(e) && e.length >= 2 && B(e[0]) && B(e[1]);
        });
    }
    function ee(e, t, n) {
        var i;
        return (i = e.length - t.length), Q(e, i < 0 ? -1 * i : 0), Q(t, i > 0 ? i : 0), tI(e, t), U(e, t, n);
    }
    function et(e, t, n) {
        n = n || 2;
        var i,
            r,
            a,
            s,
            o,
            l,
            u,
            c = t && t.length,
            d = c ? t[0] * n : e.length,
            f = en(e, 0, d, n, !0),
            _ = [];
        if (!f) return _;
        if ((c && (f = eu(e, t, f, n)), e.length > 80 * n)) {
            (i = a = e[0]), (r = s = e[1]);
            for (var p = n; p < d; p += n) (o = e[p]), (l = e[p + 1]), o < i && (i = o), l < r && (r = l), o > a && (a = o), l > s && (s = l);
            u = Math.max(a - i, s - r);
        }
        return er(f, _, n, i, r, u), _;
    }
    function en(e, t, n, i, r) {
        var a, s;
        if (r === eO(e, t, n, i) > 0) for (a = t; a < n; a += i) s = eN(a, e[a], e[a + 1], s);
        else for (a = n - i; a >= t; a -= i) s = eN(a, e[a], e[a + 1], s);
        return s && ey(s, s.next) && (eC(s), (s = s.next)), s;
    }
    function ei(e, t) {
        if (!e) return e;
        t || (t = e);
        var n,
            i = e;
        do
            if (((n = !1), i.steiner || (!ey(i, i.next) && 0 !== ev(i.prev, i, i.next)))) i = i.next;
            else {
                if ((eC(i), (i = t = i.prev) === i.next)) return null;
                n = !0;
            }
        while (n || i !== t);
        return t;
    }
    function er(e, t, n, i, r, a, s) {
        if (e) {
            !s && a && e_(e, i, r, a);
            for (var o, l, u = e; e.prev !== e.next; )
                if (((o = e.prev), (l = e.next), a ? es(e, i, r, a) : ea(e))) t.push(o.i / n), t.push(e.i / n), t.push(l.i / n), eC(e), (e = l.next), (u = l.next);
                else if ((e = l) === u) {
                    s ? (1 === s ? er((e = eo(e, t, n)), t, n, i, r, a, 2) : 2 === s && el(e, t, n, i, r, a)) : er(ei(e), t, n, i, r, a, 1);
                    break;
                }
        }
    }
    function ea(e) {
        var t = e.prev,
            n = e,
            i = e.next;
        if (ev(t, n, i) >= 0) return !1;
        for (var r = e.next.next; r !== e.prev; ) {
            if (eg(t.x, t.y, n.x, n.y, i.x, i.y, r.x, r.y) && ev(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function es(e, t, n, i) {
        var r = e.prev,
            a = e,
            s = e.next;
        if (ev(r, a, s) >= 0) return !1;
        for (var o = r.x < a.x ? (r.x < s.x ? r.x : s.x) : a.x < s.x ? a.x : s.x, l = r.y < a.y ? (r.y < s.y ? r.y : s.y) : a.y < s.y ? a.y : s.y, u = r.x > a.x ? (r.x > s.x ? r.x : s.x) : a.x > s.x ? a.x : s.x, c = r.y > a.y ? (r.y > s.y ? r.y : s.y) : a.y > s.y ? a.y : s.y, d = eh(o, l, t, n, i), f = eh(u, c, t, n, i), _ = e.nextZ; _ && _.z <= f; ) {
            if (_ !== e.prev && _ !== e.next && eg(r.x, r.y, a.x, a.y, s.x, s.y, _.x, _.y) && ev(_.prev, _, _.next) >= 0) return !1;
            _ = _.nextZ;
        }
        for (_ = e.prevZ; _ && _.z >= d; ) {
            if (_ !== e.prev && _ !== e.next && eg(r.x, r.y, a.x, a.y, s.x, s.y, _.x, _.y) && ev(_.prev, _, _.next) >= 0) return !1;
            _ = _.prevZ;
        }
        return !0;
    }
    function eo(e, t, n) {
        var i = e;
        do {
            var r = i.prev,
                a = i.next.next;
            !ey(r, a) && eI(r, i, i.next, a) && eb(r, a) && eb(a, r) && (t.push(r.i / n), t.push(i.i / n), t.push(a.i / n), eC(i), eC(i.next), (i = e = a)), (i = i.next);
        } while (i !== e);
        return i;
    }
    function el(e, t, n, i, r, a) {
        var s = e;
        do {
            for (var o = s.next.next; o !== s.prev; ) {
                if (s.i !== o.i && eE(s, o)) {
                    var l = eA(s, o);
                    return (s = ei(s, s.next)), (l = ei(l, l.next)), er(s, t, n, i, r, a), void er(l, t, n, i, r, a);
                }
                o = o.next;
            }
            s = s.next;
        } while (s !== e);
    }
    function eu(e, t, n, i) {
        var r,
            a,
            s,
            o,
            l,
            u = [];
        for (r = 0, a = t.length; r < a; r++) (s = t[r] * i), (o = r < a - 1 ? t[r + 1] * i : e.length), (l = en(e, s, o, i, !1)) === l.next && (l.steiner = !0), u.push(em(l));
        for (u.sort(ec), r = 0; r < u.length; r++) ed(u[r], n), (n = ei(n, n.next));
        return n;
    }
    function ec(e, t) {
        return e.x - t.x;
    }
    function ed(e, t) {
        if ((t = ef(e, t))) {
            var n = eA(t, e);
            ei(n, n.next);
        }
    }
    function ef(e, t) {
        var n,
            i = t,
            r = e.x,
            a = e.y,
            s = -1 / 0;
        do {
            if (a <= i.y && a >= i.next.y) {
                var o = i.x + ((a - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
                if (o <= r && o > s) {
                    if (((s = o), o === r)) {
                        if (a === i.y) return i;
                        if (a === i.next.y) return i.next;
                    }
                    n = i.x < i.next.x ? i : i.next;
                }
            }
            i = i.next;
        } while (i !== t);
        if (!n) return null;
        if (r === s) return n.prev;
        var l,
            u = n,
            c = n.x,
            d = n.y,
            f = 1 / 0;
        for (i = n.next; i !== u; ) r >= i.x && i.x >= c && eg(a < d ? r : s, a, c, d, a < d ? s : r, a, i.x, i.y) && ((l = Math.abs(a - i.y) / (r - i.x)) < f || (l === f && i.x > n.x)) && eb(i, e) && ((n = i), (f = l)), (i = i.next);
        return n;
    }
    function e_(e, t, n, i) {
        var r = e;
        do null === r.z && (r.z = eh(r.x, r.y, t, n, i)), (r.prevZ = r.prev), (r.nextZ = r.next), (r = r.next);
        while (r !== e);
        (r.prevZ.nextZ = null), (r.prevZ = null), ep(r);
    }
    function ep(e) {
        var t,
            n,
            i,
            r,
            a,
            s,
            o,
            l,
            u = 1;
        do {
            for (n = e, e = null, a = null, s = 0; n; ) {
                for (s++, i = n, o = 0, t = 0; t < u && (o++, (i = i.nextZ)); t++);
                for (l = u; o > 0 || (l > 0 && i); ) 0 === o ? ((r = i), (i = i.nextZ), l--) : 0 !== l && i ? (n.z <= i.z ? ((r = n), (n = n.nextZ), o--) : ((r = i), (i = i.nextZ), l--)) : ((r = n), (n = n.nextZ), o--), a ? (a.nextZ = r) : (e = r), (r.prevZ = a), (a = r);
                n = i;
            }
            (a.nextZ = null), (u *= 2);
        } while (s > 1);
        return e;
    }
    function eh(e, t, n, i, r) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (32767 * (e - n)) / r) | (e << 8))) | (e << 4))) | (e << 2))) | (e << 1))) | ((t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (32767 * (t - i)) / r) | (t << 8))) | (t << 4))) | (t << 2))) | (t << 1))) << 1);
    }
    function em(e) {
        var t = e,
            n = e;
        do t.x < n.x && (n = t), (t = t.next);
        while (t !== e);
        return n;
    }
    function eg(e, t, n, i, r, a, s, o) {
        return (r - s) * (t - o) - (e - s) * (a - o) >= 0 && (e - s) * (i - o) - (n - s) * (t - o) >= 0 && (n - s) * (a - o) - (r - s) * (i - o) >= 0;
    }
    function eE(e, t) {
        return e.next.i !== t.i && e.prev.i !== t.i && !eT(e, t) && eb(e, t) && eb(t, e) && eS(e, t);
    }
    function ev(e, t, n) {
        return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
    }
    function ey(e, t) {
        return e.x === t.x && e.y === t.y;
    }
    function eI(e, t, n, i) {
        return !!((ey(e, t) && ey(n, i)) || (ey(e, i) && ey(n, t))) || (ev(e, t, n) > 0 != ev(e, t, i) > 0 && ev(n, i, e) > 0 != ev(n, i, t) > 0);
    }
    function eT(e, t) {
        var n = e;
        do {
            if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && eI(n, n.next, e, t)) return !0;
            n = n.next;
        } while (n !== e);
        return !1;
    }
    function eb(e, t) {
        return 0 > ev(e.prev, e, e.next) ? ev(e, t, e.next) >= 0 && ev(e, e.prev, t) >= 0 : 0 > ev(e, t, e.prev) || 0 > ev(e, e.next, t);
    }
    function eS(e, t) {
        var n = e,
            i = !1,
            r = (e.x + t.x) / 2,
            a = (e.y + t.y) / 2;
        do n.y > a != n.next.y > a && r < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x && (i = !i), (n = n.next);
        while (n !== e);
        return i;
    }
    function eA(e, t) {
        var n = new eR(e.i, e.x, e.y),
            i = new eR(t.i, t.x, t.y),
            r = e.next,
            a = t.prev;
        return (e.next = t), (t.prev = e), (n.next = r), (r.prev = n), (i.next = n), (n.prev = i), (a.next = i), (i.prev = a), i;
    }
    function eN(e, t, n, i) {
        var r = new eR(e, t, n);
        return i ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r)) : ((r.prev = r), (r.next = r)), r;
    }
    function eC(e) {
        (e.next.prev = e.prev), (e.prev.next = e.next), e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
    }
    function eR(e, t, n) {
        (this.i = e), (this.x = t), (this.y = n), (this.prev = null), (this.next = null), (this.z = null), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
    }
    function eO(e, t, n, i) {
        for (var r = 0, a = t, s = n - i; a < n; a += i) (r += (e[s] - e[a]) * (e[a + 1] + e[s + 1])), (s = a);
        return r;
    }
    function eD(e, t) {
        var n = t.id,
            i = t.bbox,
            r = null == t.properties ? {} : t.properties,
            a = ex(e, t);
        return null == n && null == i
            ? {
                  type: 'Feature',
                  properties: r,
                  geometry: a
              }
            : null == i
              ? {
                    type: 'Feature',
                    id: n,
                    properties: r,
                    geometry: a
                }
              : {
                    type: 'Feature',
                    id: n,
                    bbox: i,
                    properties: r,
                    geometry: a
                };
    }
    function ex(e, t) {
        function n(e, t) {
            t.length && t.pop();
            for (var n = u[e < 0 ? ~e : e], i = 0, r = n.length; i < r; ++i) t.push(l(n[i], i));
            e < 0 && tN(t, r);
        }
        function i(e) {
            return l(e);
        }
        function r(e) {
            for (var t = [], i = 0, r = e.length; i < r; ++i) n(e[i], t);
            return t.length < 2 && t.push(t[0]), t;
        }
        function a(e) {
            for (var t = r(e); t.length < 4; ) t.push(t[0]);
            return t;
        }
        function s(e) {
            return e.map(a);
        }
        function o(e) {
            var t,
                n = e.type;
            switch (n) {
                case 'GeometryCollection':
                    return {
                        type: n,
                        geometries: e.geometries.map(o)
                    };
                case 'Point':
                    t = i(e.coordinates);
                    break;
                case 'MultiPoint':
                    t = e.coordinates.map(i);
                    break;
                case 'LineString':
                    t = r(e.arcs);
                    break;
                case 'MultiLineString':
                    t = e.arcs.map(r);
                    break;
                case 'Polygon':
                    t = s(e.arcs);
                    break;
                case 'MultiPolygon':
                    t = e.arcs.map(s);
                    break;
                default:
                    return null;
            }
            return {
                type: n,
                coordinates: t
            };
        }
        var l = tA(e.transform),
            u = e.arcs;
        return o(t);
    }
    function eL(e) {
        for (var t, n = -1, i = e.length, r = e[i - 1], a = 0; ++n < i; ) (t = r), (r = e[n]), (a += t[0] * r[1] - t[1] * r[0]);
        return Math.abs(a);
    }
    function eP(e, t) {
        function n(e) {
            switch (e.type) {
                case 'GeometryCollection':
                    e.geometries.forEach(n);
                    break;
                case 'Polygon':
                    i(e.arcs);
                    break;
                case 'MultiPolygon':
                    e.arcs.forEach(i);
            }
        }
        function i(e) {
            e.forEach(function (t) {
                t.forEach(function (t) {
                    (a[(t = t < 0 ? ~t : t)] || (a[t] = [])).push(e);
                });
            }),
                s.push(e);
        }
        function r(t) {
            return eL(
                ex(e, {
                    type: 'Polygon',
                    arcs: [t]
                }).coordinates[0]
            );
        }
        var a = {},
            s = [],
            o = [];
        return (
            t.forEach(n),
            s.forEach(function (e) {
                if (!e._) {
                    var t = [],
                        n = [e];
                    for (e._ = 1, o.push(t); (e = n.pop()); )
                        t.push(e),
                            e.forEach(function (e) {
                                e.forEach(function (e) {
                                    a[e < 0 ? ~e : e].forEach(function (e) {
                                        e._ || ((e._ = 1), n.push(e));
                                    });
                                });
                            });
                }
            }),
            s.forEach(function (e) {
                delete e._;
            }),
            {
                type: 'MultiPolygon',
                arcs: o.map(function (t) {
                    var n,
                        i = [];
                    if (
                        (t.forEach(function (e) {
                            e.forEach(function (e) {
                                e.forEach(function (e) {
                                    a[e < 0 ? ~e : e].length < 2 && i.push(e);
                                });
                            });
                        }),
                        (n = (i = tR(e, i)).length) > 1)
                    )
                        for (var s, o, l = 1, u = r(i[0]); l < n; ++l) (s = r(i[l])) > u && ((o = i[0]), (i[0] = i[l]), (i[l] = o), (u = s));
                    return i;
                })
            }
        );
    }
    function ew(e) {
        return function (t, n) {
            return tx(e(t), n);
        };
    }
    function eM(e, t) {
        var n = {},
            i = {
                type: 'Topology',
                objects: {
                    triangles: {
                        type: 'GeometryCollection',
                        geometries: []
                    }
                },
                arcs: []
            };
        return (
            e.forEach(function (e) {
                var r = [];
                e.forEach(function (e, a) {
                    var s = e[0] < e[1] ? e.join(',') : e[1] + ',' + e[0],
                        o = e.map(function (e) {
                            return t[e];
                        });
                    s in n ? r.push(~n[s]) : (r.push((n[s] = i.arcs.length)), i.arcs.push(o));
                }),
                    i.objects.triangles.geometries.push({
                        type: 'Polygon',
                        area: Math.abs(
                            e0(
                                e.map(function (e) {
                                    return t[e[0]];
                                })
                            )
                        ),
                        arcs: [r]
                    });
            }),
            i.objects.triangles.geometries.sort(function (e, t) {
                return e.area - t.area;
            }),
            i
        );
    }
    function ek(e, t) {
        for (
            var n = e.objects.triangles.geometries,
                i = tL(function (e) {
                    return e.area;
                }).left;
            n.length > t;

        )
            !(function () {
                var t = n[0],
                    r = tD(n)[0][0],
                    a = n[r],
                    s = eP(e, [t, a]);
                (s.area = t.area + a.area), (s.type = 'Polygon'), (s.arcs = s.arcs[0]), n.splice(r, 1), n.shift(), n.splice(i(n, s.area), 0, s);
            })();
        if (t > n.length) throw RangeError("Can't collapse topology into " + t + ' pieces.');
        return tC(e, e.objects.triangles).features.map(function (e) {
            return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0];
        });
    }
    function eU(e) {
        for (
            var t = tb(
                    e.reduce(function (e, t) {
                        return e.concat([t[0]], [t[1]]);
                    }, [])
                ),
                n = [],
                i = 0,
                r = t.length;
            i < r;
            i += 3
        )
            n.push([
                [t[i], t[i + 1]],
                [t[i + 1], t[i + 2]],
                [t[i + 2], t[i]]
            ]);
        return n;
    }
    function eG(e, t, n) {
        function i(e, t, s) {
            void 0 === t && (t = []), void 0 === s && (s = 0);
            for (var o = 0; o < e.length; o++) {
                var l = e.splice(o, 1),
                    u = n[l[0]][t.length];
                s + u < r && (e.length ? i(e.slice(), t.concat(l), s + u) : ((r = s + u), (a = t.concat(l)))), e.length && e.splice(o, 0, l[0]);
            }
        }
        var r = 1 / 0,
            a = e.map(function (e, t) {
                return t;
            });
        return i(a), a;
    }
    function eB(e, t) {
        var n = w(Z(e), Z(t));
        return n * n;
    }
    function eZ(e, t, n) {
        void 0 === n && (n = {});
        var i = n.maxSegmentLength;
        void 0 === i && (i = 10);
        var r = n.string;
        void 0 === r && (r = !0);
        var a = n.single;
        void 0 === a && (a = !1);
        var s = J(e, i);
        s.length < t.length + 2 && Q(s, t.length + 2 - s.length);
        var o,
            l = tP(s, t.length),
            u = t.map(function (e) {
                return J(e, i);
            }),
            c = 'string' == typeof e && e;
        return (
            (a &&
                !t.every(function (e) {
                    return 'string' == typeof e;
                })) ||
                (o = t.slice(0)),
            ej(l, u, {
                match: !0,
                string: r,
                single: a,
                t0: c,
                t1: o
            })
        );
    }
    function eF(e, t, n) {
        void 0 === n && (n = {});
        var i = n.maxSegmentLength;
        void 0 === i && (i = 10);
        var r = n.string;
        void 0 === r && (r = !0);
        var a = n.single;
        void 0 === a && (a = !1);
        var s = eZ(t, e, {
            maxSegmentLength: i,
            string: r,
            single: a
        });
        return a
            ? function (e) {
                  return s(1 - e);
              }
            : s.map(function (e) {
                  return function (t) {
                      return e(1 - t);
                  };
              });
    }
    function eV(e, t, n) {
        void 0 === n && (n = {});
        var i = n.maxSegmentLength;
        void 0 === i && (i = 10);
        var r = n.string;
        void 0 === r && (r = !0);
        var a = n.single;
        if ((void 0 === a && (a = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length)) throw TypeError(ty);
        var s,
            o,
            l = function (e) {
                return J(e, i);
            },
            u = e.map(l),
            c = t.map(l);
        return (
            a
                ? (e.every(function (e) {
                      return 'string' == typeof e;
                  }) && (s = e.slice(0)),
                  t.every(function (e) {
                      return 'string' == typeof e;
                  }) && (o = t.slice(0)))
                : ((s = e.slice(0)), (o = t.slice(0))),
            ej(u, c, {
                string: r,
                single: a,
                t0: s,
                t1: o,
                match: !1
            })
        );
    }
    function ej(e, t, n) {
        void 0 === n && (n = {});
        var i = n.string,
            r = n.single,
            a = n.t0,
            s = n.t1,
            o = n.match,
            l = o
                ? tw(e, t)
                : e.map(function (e, t) {
                      return t;
                  }),
            u = l.map(function (n, r) {
                return ee(e[n], t[r], i);
            });
        if (
            (o &&
                Array.isArray(a) &&
                (a = l.map(function (e) {
                    return a[e];
                })),
            r && i && (Array.isArray(a) && (a = a.join(' ')), Array.isArray(s) && (s = s.join(' '))),
            r)
        ) {
            var c = i
                ? function (e) {
                      return u
                          .map(function (t) {
                              return t(e);
                          })
                          .join(' ');
                  }
                : function (e) {
                      return u.map(function (t) {
                          return t(e);
                      });
                  };
            return i && (a || s)
                ? function (e) {
                      return (e < 0.0001 && a) || (1 - e < 0.0001 && s) || c(e);
                  }
                : c;
        }
        return i
            ? ((a = Array.isArray(a)
                  ? a.map(function (e) {
                        return 'string' == typeof e && e;
                    })
                  : []),
              (s = Array.isArray(s)
                  ? s.map(function (e) {
                        return 'string' == typeof e && e;
                    })
                  : []),
              u.map(function (e, t) {
                  return a[t] || s[t]
                      ? function (n) {
                            return (n < 0.0001 && a[t]) || (1 - n < 0.0001 && s[t]) || e(n);
                        }
                      : e;
              }))
            : u;
    }
    function eH(e, t, n, i, r) {
        return ez(eq(e, t, n), i, eJ(e, t, n), 2 * Math.PI * n, r);
    }
    function eY(e, t, n, i, r) {
        var a = eH(t, n, i, e, r);
        return function (e) {
            return a(1 - e);
        };
    }
    function eW(e, t, n, i, r, a) {
        return ez(eQ(e, t, n, i), r, e$(e, t, n, i), 2 * n + 2 * i, a);
    }
    function eK(e, t, n, i, r, a) {
        var s = eW(t, n, i, r, e, a);
        return function (e) {
            return s(1 - e);
        };
    }
    function ez(e, t, n, i, r) {
        void 0 === r && (r = {});
        var a = r.maxSegmentLength;
        void 0 === a && (a = 10);
        var s = r.string;
        void 0 === s && (s = !0);
        var o,
            l = J(t, a);
        return (
            B(i) && l.length < i / a && Q(l, Math.ceil(i / a - l.length)),
            (o = U(e(l), l, s)),
            s
                ? function (e) {
                      return e < 0.0001 ? n : o(e);
                  }
                : o
        );
    }
    function eq(e, t, n) {
        return function (i) {
            var r = Z(i),
                a = e2(i.concat([i[0]])),
                s = Math.atan2(i[0][1] - r[1], i[0][0] - r[0]),
                o = 0;
            return i.map(function (r, l) {
                var u;
                return l && (o += w(r, i[l - 1])), [Math.cos((u = s + 2 * Math.PI * (a ? o / a : l / i.length))) * n + e, Math.sin(u) * n + t];
            });
        };
    }
    function eQ(e, t, n, i) {
        return function (r) {
            var a = Z(r),
                s = e2(r.concat([r[0]])),
                o = Math.atan2(r[0][1] - a[1], r[0][0] - a[0]),
                l = 0;
            o < 0 && (o = 2 * Math.PI + o);
            var u = o / (2 * Math.PI);
            return r.map(function (a, o) {
                o && (l += w(a, r[o - 1]));
                var c = eX((u + (s ? l / s : o / r.length)) % 1);
                return [e + c[0] * n, t + c[1] * i];
            });
        };
    }
    function eX(e) {
        return e <= 1 / 8 ? [1, 0.5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5];
    }
    function eJ(e, t, n) {
        var i = e - n + ',' + t,
            r = e + n + ',' + t,
            a = 'A' + n + ',' + n + ',0,1,1,';
        return 'M' + i + a + r + a + i + 'Z';
    }
    function e$(e, t, n, i) {
        var r = e + n,
            a = t + i;
        return 'M' + e + ',' + t + 'L' + r + ',' + t + 'L' + r + ',' + a + 'L' + e + ',' + a + 'Z';
    }
    var e0 = function (e) {
            for (var t, n = -1, i = e.length, r = e[i - 1], a = 0; ++n < i; ) (t = r), (r = e[n]), (a += t[1] * r[0] - t[0] * r[1]);
            return a / 2;
        },
        e1 = function (e) {
            for (var t, n, i = -1, r = e.length, a = 0, s = 0, o = e[r - 1], l = 0; ++i < r; ) (t = o), (o = e[i]), (l += n = t[0] * o[1] - o[0] * t[1]), (a += (t[0] + o[0]) * n), (s += (t[1] + o[1]) * n);
            return [a / (l *= 3), s / l];
        },
        e2 = function (e) {
            for (var t, n, i = -1, r = e.length, a = e[r - 1], s = a[0], o = a[1], l = 0; ++i < r; ) (t = s), (n = o), (s = (a = e[i])[0]), (o = a[1]), (t -= s), (n -= o), (l += Math.sqrt(t * t + n * n));
            return l;
        },
        e3 = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        },
        e4 = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
        e6 = function (e) {
            var t = new a(e),
                n = t.max;
            for (s(t); t.index < n && !t.err.length; ) u(t);
            return (
                t.err.length ? (t.result = []) : t.result.length && (0 > 'mM'.indexOf(t.result[0][0]) ? ((t.err = 'SvgPath: string should start with `M` or `m`'), (t.result = [])) : (t.result[0][0] = 'M')),
                {
                    err: t.err,
                    segments: t.result
                }
            );
        };
    (d.prototype.matrix = function (e) {
        return (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5]) || ((this.cache = null), this.queue.push(e)), this;
    }),
        (d.prototype.translate = function (e, t) {
            return (0 === e && 0 === t) || ((this.cache = null), this.queue.push([1, 0, 0, 1, e, t])), this;
        }),
        (d.prototype.scale = function (e, t) {
            return (1 === e && 1 === t) || ((this.cache = null), this.queue.push([e, 0, 0, t, 0, 0])), this;
        }),
        (d.prototype.rotate = function (e, t, n) {
            var i, r, a;
            return 0 !== e && (this.translate(t, n), (r = Math.cos((i = (e * Math.PI) / 180))), (a = Math.sin(i)), this.queue.push([r, a, -a, r, 0, 0]), (this.cache = null), this.translate(-t, -n)), this;
        }),
        (d.prototype.skewX = function (e) {
            return 0 !== e && ((this.cache = null), this.queue.push([1, 0, Math.tan((e * Math.PI) / 180), 1, 0, 0])), this;
        }),
        (d.prototype.skewY = function (e) {
            return 0 !== e && ((this.cache = null), this.queue.push([1, Math.tan((e * Math.PI) / 180), 0, 1, 0, 0])), this;
        }),
        (d.prototype.toArray = function () {
            var e = this;
            if (this.cache) return this.cache;
            if (!this.queue.length) return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
            if (((this.cache = this.queue[0]), 1 === this.queue.length)) return this.cache;
            for (var t = 1; t < this.queue.length; t++) e.cache = c(e.cache, e.queue[t]);
            return this.cache;
        }),
        (d.prototype.calc = function (e, t, n) {
            var i;
            return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (i = this.cache)[0] + t * i[2] + (n ? 0 : i[4]), e * i[1] + t * i[3] + (n ? 0 : i[5])]) : [e, t];
        });
    var e5 = d,
        e7 = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0
        },
        e8 = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
        e9 = /[\s,]+/,
        te = function (e) {
            var t,
                n,
                i = new e5();
            return (
                e.split(e8).forEach(function (e) {
                    if (e.length) {
                        if (void 0 !== e7[e]) return void (t = e);
                        switch (
                            ((n = e.split(e9).map(function (e) {
                                return +e || 0;
                            })),
                            t)
                        ) {
                            case 'matrix':
                                return void (6 === n.length && i.matrix(n));
                            case 'scale':
                                return void (1 === n.length ? i.scale(n[0], n[0]) : 2 === n.length && i.scale(n[0], n[1]));
                            case 'rotate':
                                return void (1 === n.length ? i.rotate(n[0], 0, 0) : 3 === n.length && i.rotate(n[0], n[1], n[2]));
                            case 'translate':
                                return void (1 === n.length ? i.translate(n[0], 0) : 2 === n.length && i.translate(n[0], n[1]));
                            case 'skewX':
                                return void (1 === n.length && i.skewX(n[0]));
                            case 'skewY':
                                return void (1 === n.length && i.skewY(n[0]));
                        }
                    }
                }),
                i
            );
        },
        tt = 2 * Math.PI,
        tn = function (e, t, n, i, r, a, s, o, l) {
            var u = Math.sin((l * tt) / 360),
                c = Math.cos((l * tt) / 360),
                d = (c * (e - n)) / 2 + (u * (t - i)) / 2,
                f = (-u * (e - n)) / 2 + (c * (t - i)) / 2;
            if ((0 === d && 0 === f) || 0 === s || 0 === o) return [];
            var h = (d * d) / ((s = Math.abs(s)) * s) + (f * f) / ((o = Math.abs(o)) * o);
            h > 1 && ((s *= Math.sqrt(h)), (o *= Math.sqrt(h)));
            var m = _(e, t, n, i, r, a, s, o, u, c),
                g = [],
                E = m[2],
                v = m[3],
                y = Math.max(Math.ceil(Math.abs(v) / (tt / 4)), 1);
            v /= y;
            for (var I = 0; I < y; I++) g.push(p(E, v)), (E += v);
            return g.map(function (e) {
                for (var t = 0; t < e.length; t += 2) {
                    var n = e[t + 0],
                        i = e[t + 1],
                        r = c * (n *= s) - u * (i *= o),
                        a = u * n + c * i;
                    (e[t + 0] = r + m[0]), (e[t + 1] = a + m[1]);
                }
                return e;
            });
        },
        ti = Math.PI / 180;
    (h.prototype.transform = function (e) {
        var t = Math.cos(this.ax * ti),
            n = Math.sin(this.ax * ti),
            i = [this.rx * (e[0] * t + e[2] * n), this.rx * (e[1] * t + e[3] * n), this.ry * (-e[0] * n + e[2] * t), this.ry * (-e[1] * n + e[3] * t)],
            r = i[0] * i[0] + i[2] * i[2],
            a = i[1] * i[1] + i[3] * i[3],
            s = ((i[0] - i[3]) * (i[0] - i[3]) + (i[2] + i[1]) * (i[2] + i[1])) * ((i[0] + i[3]) * (i[0] + i[3]) + (i[2] - i[1]) * (i[2] - i[1])),
            o = (r + a) / 2;
        if (s < 1e-10 * o) return (this.rx = this.ry = Math.sqrt(o)), (this.ax = 0), this;
        var l = i[0] * i[1] + i[2] * i[3],
            u = o + (s = Math.sqrt(s)) / 2,
            c = o - s / 2;
        return (this.ax = 1e-10 > Math.abs(l) && 1e-10 > Math.abs(u - a) ? 90 : (180 * Math.atan(Math.abs(l) > Math.abs(u - a) ? (u - r) / l : l / (u - a))) / Math.PI), this.ax >= 0 ? ((this.rx = Math.sqrt(u)), (this.ry = Math.sqrt(c))) : ((this.ax += 90), (this.rx = Math.sqrt(c)), (this.ry = Math.sqrt(u))), this;
    }),
        (h.prototype.isDegenerate = function () {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx;
        });
    var tr = h;
    (m.prototype.__matrix = function (e) {
        var t,
            n = this;
        e.queue.length &&
            this.iterate(function (i, r, a, s) {
                var o, l, u, c;
                switch (i[0]) {
                    case 'v':
                        l = 0 === (o = e.calc(0, i[1], !0))[0] ? ['v', o[1]] : ['l', o[0], o[1]];
                        break;
                    case 'V':
                        l = (o = e.calc(a, i[1], !1))[0] === e.calc(a, s, !1)[0] ? ['V', o[1]] : ['L', o[0], o[1]];
                        break;
                    case 'h':
                        l = 0 === (o = e.calc(i[1], 0, !0))[1] ? ['h', o[0]] : ['l', o[0], o[1]];
                        break;
                    case 'H':
                        l = (o = e.calc(i[1], s, !1))[1] === e.calc(a, s, !1)[1] ? ['H', o[0]] : ['L', o[0], o[1]];
                        break;
                    case 'a':
                    case 'A':
                        var d = e.toArray(),
                            f = tr(i[1], i[2], i[3]).transform(d);
                        if ((d[0] * d[3] - d[1] * d[2] < 0 && (i[5] = i[5] ? '0' : '1'), (o = e.calc(i[6], i[7], 'a' === i[0])), ('A' === i[0] && i[6] === a && i[7] === s) || ('a' === i[0] && 0 === i[6] && 0 === i[7]))) {
                            l = ['a' === i[0] ? 'l' : 'L', o[0], o[1]];
                            break;
                        }
                        l = f.isDegenerate() ? ['a' === i[0] ? 'l' : 'L', o[0], o[1]] : [i[0], f.rx, f.ry, f.ax, i[4], i[5], o[0], o[1]];
                        break;
                    case 'm':
                        (c = r > 0), (l = ['m', (o = e.calc(i[1], i[2], c))[0], o[1]]);
                        break;
                    default:
                        for (l = [(u = i[0])], c = u.toLowerCase() === u, t = 1; t < i.length; t += 2) (o = e.calc(i[t], i[t + 1], c)), l.push(o[0], o[1]);
                }
                n.segments[r] = l;
            }, !0);
    }),
        (m.prototype.__evaluateStack = function () {
            var e,
                t,
                n = this;
            if (this.__stack.length) {
                if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void (this.__stack = []);
                for (e = e5(), t = this.__stack.length; --t >= 0; ) e.matrix(n.__stack[t].toArray());
                this.__matrix(e), (this.__stack = []);
            }
        }),
        (m.prototype.toString = function () {
            var e,
                t,
                n = this,
                i = [];
            this.__evaluateStack();
            for (var r = 0; r < this.segments.length; r++) (t = n.segments[r][0]), (e = r > 0 && 'm' !== t && 'M' !== t && t === n.segments[r - 1][0]), (i = i.concat(e ? n.segments[r].slice(1) : n.segments[r]));
            return i
                .join(' ')
                .replace(/ ?([achlmqrstvz]) ?/gi, '$1')
                .replace(/ \-/g, '-')
                .replace(/zm/g, 'z m');
        }),
        (m.prototype.translate = function (e, t) {
            return this.__stack.push(e5().translate(e, t || 0)), this;
        }),
        (m.prototype.scale = function (e, t) {
            return this.__stack.push(e5().scale(e, t || 0 === t ? t : e)), this;
        }),
        (m.prototype.rotate = function (e, t, n) {
            return this.__stack.push(e5().rotate(e, t || 0, n || 0)), this;
        }),
        (m.prototype.skewX = function (e) {
            return this.__stack.push(e5().skewX(e)), this;
        }),
        (m.prototype.skewY = function (e) {
            return this.__stack.push(e5().skewY(e)), this;
        }),
        (m.prototype.matrix = function (e) {
            return this.__stack.push(e5().matrix(e)), this;
        }),
        (m.prototype.transform = function (e) {
            return e.trim() && this.__stack.push(te(e)), this;
        }),
        (m.prototype.round = function (e) {
            var t,
                n = 0,
                i = 0,
                r = 0,
                a = 0;
            return (
                (e = e || 0),
                this.__evaluateStack(),
                this.segments.forEach(function (s) {
                    var o = s[0].toLowerCase() === s[0];
                    switch (s[0]) {
                        case 'H':
                        case 'h':
                            return o && (s[1] += r), (r = s[1] - s[1].toFixed(e)), void (s[1] = +s[1].toFixed(e));
                        case 'V':
                        case 'v':
                            return o && (s[1] += a), (a = s[1] - s[1].toFixed(e)), void (s[1] = +s[1].toFixed(e));
                        case 'Z':
                        case 'z':
                            return (r = n), void (a = i);
                        case 'M':
                        case 'm':
                            return o && ((s[1] += r), (s[2] += a)), (r = s[1] - s[1].toFixed(e)), (a = s[2] - s[2].toFixed(e)), (n = r), (i = a), (s[1] = +s[1].toFixed(e)), void (s[2] = +s[2].toFixed(e));
                        case 'A':
                        case 'a':
                            return o && ((s[6] += r), (s[7] += a)), (r = s[6] - s[6].toFixed(e)), (a = s[7] - s[7].toFixed(e)), (s[1] = +s[1].toFixed(e)), (s[2] = +s[2].toFixed(e)), (s[3] = +s[3].toFixed(e + 2)), (s[6] = +s[6].toFixed(e)), void (s[7] = +s[7].toFixed(e));
                        default:
                            return (
                                (t = s.length),
                                o && ((s[t - 2] += r), (s[t - 1] += a)),
                                (r = s[t - 2] - s[t - 2].toFixed(e)),
                                (a = s[t - 1] - s[t - 1].toFixed(e)),
                                void s.forEach(function (t, n) {
                                    n && (s[n] = +s[n].toFixed(e));
                                })
                            );
                    }
                }),
                this
            );
        }),
        (m.prototype.iterate = function (e, t) {
            var n,
                i,
                r,
                a = this.segments,
                s = {},
                o = !1,
                l = 0,
                u = 0,
                c = 0,
                d = 0;
            if (
                (t || this.__evaluateStack(),
                a.forEach(function (t, n) {
                    var i = e(t, n, l, u);
                    Array.isArray(i) && ((s[n] = i), (o = !0));
                    var r = t[0] === t[0].toLowerCase();
                    switch (t[0]) {
                        case 'm':
                        case 'M':
                            return (l = t[1] + (r ? l : 0)), (u = t[2] + (r ? u : 0)), (c = l), void (d = u);
                        case 'h':
                        case 'H':
                            return void (l = t[1] + (r ? l : 0));
                        case 'v':
                        case 'V':
                            return void (u = t[1] + (r ? u : 0));
                        case 'z':
                        case 'Z':
                            return (l = c), void (u = d);
                        default:
                            (l = t[t.length - 2] + (r ? l : 0)), (u = t[t.length - 1] + (r ? u : 0));
                    }
                }),
                !o)
            )
                return this;
            for (r = [], n = 0; n < a.length; n++)
                if (void 0 !== s[n]) for (i = 0; i < s[n].length; i++) r.push(s[n][i]);
                else r.push(a[n]);
            return (this.segments = r), this;
        }),
        (m.prototype.abs = function () {
            return (
                this.iterate(function (e, t, n, i) {
                    var r,
                        a = e[0],
                        s = a.toUpperCase();
                    if (a !== s)
                        switch (((e[0] = s), a)) {
                            case 'v':
                                return void (e[1] += i);
                            case 'a':
                                return (e[6] += n), void (e[7] += i);
                            default:
                                for (r = 1; r < e.length; r++) e[r] += r % 2 ? n : i;
                        }
                }, !0),
                this
            );
        }),
        (m.prototype.rel = function () {
            return (
                this.iterate(function (e, t, n, i) {
                    var r,
                        a = e[0],
                        s = a.toLowerCase();
                    if (a !== s && (0 !== t || 'M' !== a))
                        switch (((e[0] = s), a)) {
                            case 'V':
                                return void (e[1] -= i);
                            case 'A':
                                return (e[6] -= n), void (e[7] -= i);
                            default:
                                for (r = 1; r < e.length; r++) e[r] -= r % 2 ? n : i;
                        }
                }, !0),
                this
            );
        }),
        (m.prototype.unarc = function () {
            return (
                this.iterate(function (e, t, n, i) {
                    var r,
                        a,
                        s,
                        o = [],
                        l = e[0];
                    return 'A' !== l && 'a' !== l
                        ? null
                        : ('a' === l ? ((a = n + e[6]), (s = i + e[7])) : ((a = e[6]), (s = e[7])),
                          0 === (r = tn(n, i, a, s, e[4], e[5], e[1], e[2], e[3])).length
                              ? [['a' === e[0] ? 'l' : 'L', e[6], e[7]]]
                              : (r.forEach(function (e) {
                                    o.push(['C', e[2], e[3], e[4], e[5], e[6], e[7]]);
                                }),
                                o));
                }),
                this
            );
        }),
        (m.prototype.unshort = function () {
            var e,
                t,
                n,
                i,
                r,
                a = this.segments;
            return (
                this.iterate(function (s, o, l, u) {
                    var c,
                        d = s[0],
                        f = d.toUpperCase();
                    o && ('T' === f ? ((c = 't' === d), 'Q' === (n = a[o - 1])[0] ? ((e = n[1] - l), (t = n[2] - u)) : 'q' === n[0] ? ((e = n[1] - n[3]), (t = n[2] - n[4])) : ((e = 0), (t = 0)), (i = -e), (r = -t), c || ((i += l), (r += u)), (a[o] = [c ? 'q' : 'Q', i, r, s[1], s[2]])) : 'S' === f && ((c = 's' === d), 'C' === (n = a[o - 1])[0] ? ((e = n[3] - l), (t = n[4] - u)) : 'c' === n[0] ? ((e = n[3] - n[5]), (t = n[4] - n[6])) : ((e = 0), (t = 0)), (i = -e), (r = -t), c || ((i += l), (r += u)), (a[o] = [c ? 'c' : 'C', i, r, s[1], s[2], s[3], s[4]])));
                }),
                this
            );
        });
    var ta = m,
        ts = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        },
        to = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
        tl = function (e) {
            var t = [];
            return (
                e.replace(to, function (e, n, i) {
                    var r = n.toLowerCase();
                    for (i = g(i), 'm' === r && i.length > 2 && (t.push([n].concat(i.splice(0, 2))), (r = 'l'), (n = 'm' === n ? 'l' : 'L')); i.length >= 0; ) {
                        if (i.length === ts[r]) return i.unshift(n), t.push(i);
                        if (i.length < ts[r]) throw Error('malformed path data');
                        t.push([n].concat(i.splice(0, ts[r])));
                    }
                }),
                t
            );
        },
        tu = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
        tc = function (e, t, n, i, r, a, s, o) {
            return new E(e, t, n, i, r, a, s, o);
        };
    E.prototype = {
        constructor: E,
        init: function () {
            this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
        },
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var t = I(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
            return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
        },
        getTangentAtLength: function (e) {
            var t = I(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                n = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t),
                i = Math.sqrt(n.x * n.x + n.y * n.y);
            return i > 0
                ? {
                      x: n.x / i,
                      y: n.y / i
                  }
                : {
                      x: 0,
                      y: 0
                  };
        },
        getPropertiesAtLength: function (e) {
            var t,
                n = I(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                i = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n),
                r = Math.sqrt(i.x * i.x + i.y * i.y);
            t =
                r > 0
                    ? {
                          x: i.x / r,
                          y: i.y / r
                      }
                    : {
                          x: 0,
                          y: 0
                      };
            var a = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
            return {
                x: a.x,
                y: a.y,
                tangentX: t.x,
                tangentY: t.y
            };
        }
    };
    var td = [
            [],
            [],
            [-0.5773502691896257, 0.5773502691896257],
            [0, -0.7745966692414834, 0.7745966692414834],
            [-0.33998104358485626, 0.33998104358485626, -0.8611363115940526, 0.8611363115940526],
            [0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664, 0.906179845938664],
            [0.6612093864662645, -0.6612093864662645, -0.2386191860831969, 0.2386191860831969, -0.932469514203152, 0.932469514203152],
            [0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945, 0.7415311855993945, -0.9491079123427585, 0.9491079123427585],
            [-0.1834346424956498, 0.1834346424956498, -0.525532409916329, 0.525532409916329, -0.7966664774136267, 0.7966664774136267, -0.9602898564975363, 0.9602898564975363],
            [0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261, 0.9681602395076261, -0.3242534234038089, 0.3242534234038089, -0.6133714327005904, 0.6133714327005904],
            [-0.14887433898163122, 0.14887433898163122, -0.4333953941292472, 0.4333953941292472, -0.6794095682990244, 0.6794095682990244, -0.8650633666889845, 0.8650633666889845, -0.9739065285171717, 0.9739065285171717],
            [0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118, 0.5190961292068118, -0.7301520055740494, 0.7301520055740494, -0.8870625997680953, 0.8870625997680953, -0.978228658146057, 0.978228658146057],
            [-0.1252334085114689, 0.1252334085114689, -0.3678314989981802, 0.3678314989981802, -0.5873179542866175, 0.5873179542866175, -0.7699026741943047, 0.7699026741943047, -0.9041172563704749, 0.9041172563704749, -0.9815606342467192, 0.9815606342467192],
            [0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687, 0.44849275103644687, -0.6423493394403402, 0.6423493394403402, -0.8015780907333099, 0.8015780907333099, -0.9175983992229779, 0.9175983992229779, -0.9841830547185881, 0.9841830547185881],
            [-0.10805494870734367, 0.10805494870734367, -0.31911236892788974, 0.31911236892788974, -0.5152486363581541, 0.5152486363581541, -0.6872929048116855, 0.6872929048116855, -0.827201315069765, 0.827201315069765, -0.9284348836635735, 0.9284348836635735, -0.9862838086968123, 0.9862838086968123],
            [0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634, 0.3941513470775634, -0.5709721726085388, 0.5709721726085388, -0.7244177313601701, 0.7244177313601701, -0.8482065834104272, 0.8482065834104272, -0.937273392400706, 0.937273392400706, -0.9879925180204854, 0.9879925180204854],
            [-0.09501250983763744, 0.09501250983763744, -0.2816035507792589, 0.2816035507792589, -0.45801677765722737, 0.45801677765722737, -0.6178762444026438, 0.6178762444026438, -0.755404408355003, 0.755404408355003, -0.8656312023878318, 0.8656312023878318, -0.9445750230732326, 0.9445750230732326, -0.9894009349916499, 0.9894009349916499],
            [0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763, 0.3512317634538763, -0.5126905370864769, 0.5126905370864769, -0.6576711592166907, 0.6576711592166907, -0.7815140038968014, 0.7815140038968014, -0.8802391537269859, 0.8802391537269859, -0.9506755217687678, 0.9506755217687678, -0.9905754753144174, 0.9905754753144174],
            [-0.0847750130417353, 0.0847750130417353, -0.2518862256915055, 0.2518862256915055, -0.41175116146284263, 0.41175116146284263, -0.5597708310739475, 0.5597708310739475, -0.6916870430603532, 0.6916870430603532, -0.8037049589725231, 0.8037049589725231, -0.8926024664975557, 0.8926024664975557, -0.9558239495713977, 0.9558239495713977, -0.9915651684209309, 0.9915651684209309],
            [0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983, 0.31656409996362983, -0.46457074137596094, 0.46457074137596094, -0.600545304661681, 0.600545304661681, -0.7209661773352294, 0.7209661773352294, -0.8227146565371428, 0.8227146565371428, -0.9031559036148179, 0.9031559036148179, -0.96020815213483, 0.96020815213483, -0.9924068438435844, 0.9924068438435844],
            [-0.07652652113349734, 0.07652652113349734, -0.22778585114164507, 0.22778585114164507, -0.37370608871541955, 0.37370608871541955, -0.5108670019508271, 0.5108670019508271, -0.636053680726515, 0.636053680726515, -0.7463319064601508, 0.7463319064601508, -0.8391169718222188, 0.8391169718222188, -0.912234428251326, 0.912234428251326, -0.9639719272779138, 0.9639719272779138, -0.9931285991850949, 0.9931285991850949],
            [0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011, 0.2880213168024011, -0.4243421202074388, 0.4243421202074388, -0.5516188358872198, 0.5516188358872198, -0.6671388041974123, 0.6671388041974123, -0.7684399634756779, 0.7684399634756779, -0.8533633645833173, 0.8533633645833173, -0.9200993341504008, 0.9200993341504008, -0.9672268385663063, 0.9672268385663063, -0.9937521706203895, 0.9937521706203895],
            [-0.06973927331972223, 0.06973927331972223, -0.20786042668822127, 0.20786042668822127, -0.34193582089208424, 0.34193582089208424, -0.469355837986757, 0.469355837986757, -0.5876404035069116, 0.5876404035069116, -0.6944872631866827, 0.6944872631866827, -0.7878168059792081, 0.7878168059792081, -0.8658125777203002, 0.8658125777203002, -0.926956772187174, 0.926956772187174, -0.9700604978354287, 0.9700604978354287, -0.9942945854823992, 0.9942945854823992],
            [0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495, 0.26413568097034495, -0.3903010380302908, 0.3903010380302908, -0.5095014778460075, 0.5095014778460075, -0.6196098757636461, 0.6196098757636461, -0.7186613631319502, 0.7186613631319502, -0.8048884016188399, 0.8048884016188399, -0.8767523582704416, 0.8767523582704416, -0.9329710868260161, 0.9329710868260161, -0.9725424712181152, 0.9725424712181152, -0.9947693349975522, 0.9947693349975522],
            [-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213]
        ],
        tf = [
            [],
            [],
            [1, 1],
            [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
            [0.6521451548625461, 0.6521451548625461, 0.34785484513745385, 0.34785484513745385],
            [0.5688888888888889, 0.47862867049936647, 0.47862867049936647, 0.23692688505618908, 0.23692688505618908],
            [0.3607615730481386, 0.3607615730481386, 0.46791393457269104, 0.46791393457269104, 0.17132449237917036, 0.17132449237917036],
            [0.4179591836734694, 0.3818300505051189, 0.3818300505051189, 0.27970539148927664, 0.27970539148927664, 0.1294849661688697, 0.1294849661688697],
            [0.362683783378362, 0.362683783378362, 0.31370664587788727, 0.31370664587788727, 0.22238103445337448, 0.22238103445337448, 0.10122853629037626, 0.10122853629037626],
            [0.3302393550012598, 0.1806481606948574, 0.1806481606948574, 0.08127438836157441, 0.08127438836157441, 0.31234707704000286, 0.31234707704000286, 0.26061069640293544, 0.26061069640293544],
            [0.29552422471475287, 0.29552422471475287, 0.26926671930999635, 0.26926671930999635, 0.21908636251598204, 0.21908636251598204, 0.1494513491505806, 0.1494513491505806, 0.06667134430868814, 0.06667134430868814],
            [0.2729250867779006, 0.26280454451024665, 0.26280454451024665, 0.23319376459199048, 0.23319376459199048, 0.18629021092773426, 0.18629021092773426, 0.1255803694649046, 0.1255803694649046, 0.05566856711617366, 0.05566856711617366],
            [0.24914704581340277, 0.24914704581340277, 0.2334925365383548, 0.2334925365383548, 0.20316742672306592, 0.20316742672306592, 0.16007832854334622, 0.16007832854334622, 0.10693932599531843, 0.10693932599531843, 0.04717533638651183, 0.04717533638651183],
            [0.2325515532308739, 0.22628318026289723, 0.22628318026289723, 0.2078160475368885, 0.2078160475368885, 0.17814598076194574, 0.17814598076194574, 0.13887351021978725, 0.13887351021978725, 0.09212149983772845, 0.09212149983772845, 0.04048400476531588, 0.04048400476531588],
            [0.2152638534631578, 0.2152638534631578, 0.2051984637212956, 0.2051984637212956, 0.18553839747793782, 0.18553839747793782, 0.15720316715819355, 0.15720316715819355, 0.12151857068790319, 0.12151857068790319, 0.08015808715976021, 0.08015808715976021, 0.03511946033175186, 0.03511946033175186],
            [0.2025782419255613, 0.19843148532711158, 0.19843148532711158, 0.1861610000155622, 0.1861610000155622, 0.16626920581699392, 0.16626920581699392, 0.13957067792615432, 0.13957067792615432, 0.10715922046717194, 0.10715922046717194, 0.07036604748810812, 0.07036604748810812, 0.03075324199611727, 0.03075324199611727],
            [0.1894506104550685, 0.1894506104550685, 0.18260341504492358, 0.18260341504492358, 0.16915651939500254, 0.16915651939500254, 0.14959598881657674, 0.14959598881657674, 0.12462897125553388, 0.12462897125553388, 0.09515851168249279, 0.09515851168249279, 0.062253523938647894, 0.062253523938647894, 0.027152459411754096, 0.027152459411754096],
            [0.17944647035620653, 0.17656270536699264, 0.17656270536699264, 0.16800410215645004, 0.16800410215645004, 0.15404576107681028, 0.15404576107681028, 0.13513636846852548, 0.13513636846852548, 0.11188384719340397, 0.11188384719340397, 0.08503614831717918, 0.08503614831717918, 0.0554595293739872, 0.0554595293739872, 0.02414830286854793, 0.02414830286854793],
            [0.1691423829631436, 0.1691423829631436, 0.16427648374583273, 0.16427648374583273, 0.15468467512626524, 0.15468467512626524, 0.14064291467065065, 0.14064291467065065, 0.12255520671147846, 0.12255520671147846, 0.10094204410628717, 0.10094204410628717, 0.07642573025488905, 0.07642573025488905, 0.0497145488949698, 0.0497145488949698, 0.02161601352648331, 0.02161601352648331],
            [0.1610544498487837, 0.15896884339395434, 0.15896884339395434, 0.15276604206585967, 0.15276604206585967, 0.1426067021736066, 0.1426067021736066, 0.12875396253933621, 0.12875396253933621, 0.11156664554733399, 0.11156664554733399, 0.09149002162245, 0.09149002162245, 0.06904454273764123, 0.06904454273764123, 0.0448142267656996, 0.0448142267656996, 0.019461788229726478, 0.019461788229726478],
            [0.15275338713072584, 0.15275338713072584, 0.14917298647260374, 0.14917298647260374, 0.14209610931838204, 0.14209610931838204, 0.13168863844917664, 0.13168863844917664, 0.11819453196151841, 0.11819453196151841, 0.10193011981724044, 0.10193011981724044, 0.08327674157670475, 0.08327674157670475, 0.06267204833410907, 0.06267204833410907, 0.04060142980038694, 0.04060142980038694, 0.017614007139152118, 0.017614007139152118],
            [0.14608113364969041, 0.14452440398997005, 0.14452440398997005, 0.13988739479107315, 0.13988739479107315, 0.13226893863333747, 0.13226893863333747, 0.12183141605372853, 0.12183141605372853, 0.10879729916714838, 0.10879729916714838, 0.09344442345603386, 0.09344442345603386, 0.0761001136283793, 0.0761001136283793, 0.057134425426857205, 0.057134425426857205, 0.036953789770852494, 0.036953789770852494, 0.016017228257774335, 0.016017228257774335],
            [0.13925187285563198, 0.13925187285563198, 0.13654149834601517, 0.13654149834601517, 0.13117350478706238, 0.13117350478706238, 0.12325237681051242, 0.12325237681051242, 0.11293229608053922, 0.11293229608053922, 0.10041414444288096, 0.10041414444288096, 0.08594160621706773, 0.08594160621706773, 0.06979646842452049, 0.06979646842452049, 0.052293335152683286, 0.052293335152683286, 0.03377490158481415, 0.03377490158481415, 0.0146279952982722, 0.0146279952982722],
            [0.13365457218610619, 0.1324620394046966, 0.1324620394046966, 0.12890572218808216, 0.12890572218808216, 0.12304908430672953, 0.12304908430672953, 0.11499664022241136, 0.11499664022241136, 0.10489209146454141, 0.10489209146454141, 0.09291576606003515, 0.09291576606003515, 0.07928141177671895, 0.07928141177671895, 0.06423242140852585, 0.06423242140852585, 0.04803767173108467, 0.04803767173108467, 0.030988005856979445, 0.030988005856979445, 0.013411859487141771, 0.013411859487141771],
            [0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872]
        ],
        t_ = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
        tp = 2 * Math.PI,
        th = function (e, t, n, i, r, a, s, o, l) {
            var u = Math.sin((r * tp) / 360),
                c = Math.cos((r * tp) / 360),
                d = (c * (e - o)) / 2 + (u * (t - l)) / 2,
                f = (-u * (e - o)) / 2 + (c * (t - l)) / 2;
            if ((0 === d && 0 === f) || 0 === n || 0 === i) return [];
            var _ = (d * d) / ((n = Math.abs(n)) * n) + (f * f) / ((i = Math.abs(i)) * i);
            _ > 1 && ((n *= Math.sqrt(_)), (i *= Math.sqrt(_)));
            var p = D(e, t, o, l, a, s, n, i, u, c),
                h = [],
                m = p[2],
                g = p[3],
                E = Math.max(Math.ceil(Math.abs(g) / (tp / 4)), 1);
            g /= E;
            for (var v = 0; v < E; v++) h.push(x(m, g)), (m += g);
            return h.map(function (e) {
                for (var t = 0; t < e.length; t += 2) {
                    var r = e[t + 0],
                        a = e[t + 1],
                        s = c * (r *= n) - u * (a *= i),
                        o = u * r + c * a;
                    (e[t + 0] = s + p[0]), (e[t + 1] = o + p[1]);
                }
                return e;
            });
        },
        tm = function (e, t, n, i, r, a, s, o, l) {
            return new L(e, t, n, i, r, a, s, o, l);
        };
    L.prototype = {
        constructor: L,
        init: function () {},
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var t = this;
            e < 0 ? (e = 0) : e > this.length && (e = this.length);
            for (var n = this.partialLengths.length - 1; this.partialLengths[n] >= e && this.partialLengths[n] > 0; ) n--;
            n < this.partialLengths.length - 1 && n++;
            for (var i = 0, r = 0; r < n; r++) i += t.partialLengths[r];
            return this.curves[n].getPointAtLength(e - i);
        },
        getTangentAtLength: function (e) {
            var t = this;
            e < 0 ? (e = 0) : e > this.length && (e = this.length);
            for (var n = this.partialLengths.length - 1; this.partialLengths[n] >= e && this.partialLengths[n] > 0; ) n--;
            n < this.partialLengths.length - 1 && n++;
            for (var i = 0, r = 0; r < n; r++) i += t.partialLengths[r];
            return this.curves[n].getTangentAtLength(e - i);
        },
        getPropertiesAtLength: function (e) {
            var t = this.getTangentAtLength(e),
                n = this.getPointAtLength(e);
            return {
                x: n.x,
                y: n.y,
                tangentX: t.x,
                tangentY: t.y
            };
        }
    };
    var tg = function (e, t, n, i) {
        return new P(e, t, n, i);
    };
    (P.prototype.getTotalLength = function () {
        return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
    }),
        (P.prototype.getPointAtLength = function (e) {
            var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
                n = (this.x1 - this.x0) * t,
                i = (this.y1 - this.y0) * t;
            return {
                x: this.x0 + n,
                y: this.y0 + i
            };
        }),
        (P.prototype.getTangentAtLength = function () {
            var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
            return {
                x: (this.x1 - this.x0) / e,
                y: (this.y1 - this.y0) / e
            };
        }),
        (P.prototype.getPropertiesAtLength = function (e) {
            var t = this.getPointAtLength(e),
                n = this.getTangentAtLength();
            return {
                x: t.x,
                y: t.y,
                tangentX: n.x,
                tangentY: n.y
            };
        });
    var tE = function (e) {
            function t(e) {
                if (!e) return null;
                for (var a, s = tl(e), o = [0, 0], l = [0, 0], u = 0; u < s.length; u++) 'M' === s[u][0] ? ((o = [s[u][1], s[u][2]]), r.push(null)) : 'm' === s[u][0] ? ((o = [s[u][1] + o[0], s[u][2] + o[1]]), r.push(null)) : 'L' === s[u][0] ? ((n += Math.sqrt(Math.pow(o[0] - s[u][1], 2) + Math.pow(o[1] - s[u][2], 2))), r.push(new tg(o[0], s[u][1], o[1], s[u][2])), (o = [s[u][1], s[u][2]])) : 'l' === s[u][0] ? ((n += Math.sqrt(Math.pow(s[u][1], 2) + Math.pow(s[u][2], 2))), r.push(new tg(o[0], s[u][1] + o[0], o[1], s[u][2] + o[1])), (o = [s[u][1] + o[0], s[u][2] + o[1]])) : 'H' === s[u][0] ? ((n += Math.abs(o[0] - s[u][1])), r.push(new tg(o[0], s[u][1], o[1], o[1])), (o[0] = s[u][1])) : 'h' === s[u][0] ? ((n += Math.abs(s[u][1])), r.push(new tg(o[0], o[0] + s[u][1], o[1], o[1])), (o[0] = s[u][1] + o[0])) : 'V' === s[u][0] ? ((n += Math.abs(o[1] - s[u][1])), r.push(new tg(o[0], o[0], o[1], s[u][1])), (o[1] = s[u][1])) : 'v' === s[u][0] ? ((n += Math.abs(s[u][1])), r.push(new tg(o[0], o[0], o[1], o[1] + s[u][1])), (o[1] = s[u][1] + o[1])) : 'z' === s[u][0] || 'Z' === s[u][0] ? ((n += Math.sqrt(Math.pow(s[0][1] - o[0], 2) + Math.pow(s[0][2] - o[1], 2))), r.push(new tg(o[0], s[0][1], o[1], s[0][2])), (o = [s[0][1], s[0][2]])) : 'C' === s[u][0] ? ((a = new tc(o[0], o[1], s[u][1], s[u][2], s[u][3], s[u][4], s[u][5], s[u][6])), (n += a.getTotalLength()), (o = [s[u][5], s[u][6]]), r.push(a)) : 'c' === s[u][0] ? ((a = new tc(o[0], o[1], o[0] + s[u][1], o[1] + s[u][2], o[0] + s[u][3], o[1] + s[u][4], o[0] + s[u][5], o[1] + s[u][6])), (n += a.getTotalLength()), (o = [s[u][5] + o[0], s[u][6] + o[1]]), r.push(a)) : 'S' === s[u][0] ? ((a = u > 0 && ['C', 'c', 'S', 's'].indexOf(s[u - 1][0]) > -1 ? new tc(o[0], o[1], 2 * o[0] - s[u - 1][s[u - 1].length - 4], 2 * o[1] - s[u - 1][s[u - 1].length - 3], s[u][1], s[u][2], s[u][3], s[u][4]) : new tc(o[0], o[1], o[0], o[1], s[u][1], s[u][2], s[u][3], s[u][4])), (n += a.getTotalLength()), (o = [s[u][3], s[u][4]]), r.push(a)) : 's' === s[u][0] ? ((a = u > 0 && ['C', 'c', 'S', 's'].indexOf(s[u - 1][0]) > -1 ? new tc(o[0], o[1], o[0] + a.d.x - a.c.x, o[1] + a.d.y - a.c.y, o[0] + s[u][1], o[1] + s[u][2], o[0] + s[u][3], o[1] + s[u][4]) : new tc(o[0], o[1], o[0], o[1], o[0] + s[u][1], o[1] + s[u][2], o[0] + s[u][3], o[1] + s[u][4])), (n += a.getTotalLength()), (o = [s[u][3] + o[0], s[u][4] + o[1]]), r.push(a)) : 'Q' === s[u][0] ? ((a = new tc(o[0], o[1], s[u][1], s[u][2], s[u][3], s[u][4])), (n += a.getTotalLength()), r.push(a), (o = [s[u][3], s[u][4]]), (l = [s[u][1], s[u][2]])) : 'q' === s[u][0] ? ((a = new tc(o[0], o[1], o[0] + s[u][1], o[1] + s[u][2], o[0] + s[u][3], o[1] + s[u][4])), (n += a.getTotalLength()), (l = [o[0] + s[u][1], o[1] + s[u][2]]), (o = [s[u][3] + o[0], s[u][4] + o[1]]), r.push(a)) : 'T' === s[u][0] ? ((a = u > 0 && ['Q', 'q', 'T', 't'].indexOf(s[u - 1][0]) > -1 ? new tc(o[0], o[1], 2 * o[0] - l[0], 2 * o[1] - l[1], s[u][1], s[u][2]) : new tg(o[0], s[u][1], o[1], s[u][2])), r.push(a), (n += a.getTotalLength()), (l = [2 * o[0] - l[0], 2 * o[1] - l[1]]), (o = [s[u][1], s[u][2]])) : 't' === s[u][0] ? ((a = u > 0 && ['Q', 'q', 'T', 't'].indexOf(s[u - 1][0]) > -1 ? new tc(o[0], o[1], 2 * o[0] - l[0], 2 * o[1] - l[1], o[0] + s[u][1], o[1] + s[u][2]) : new tg(o[0], o[0] + s[u][1], o[1], o[1] + s[u][2])), (n += a.getTotalLength()), (l = [2 * o[0] - l[0], 2 * o[1] - l[1]]), (o = [s[u][1] + o[0], s[u][2] + o[0]]), r.push(a)) : 'A' === s[u][0] ? ((a = new tm(o[0], o[1], s[u][1], s[u][2], s[u][3], s[u][4], s[u][5], s[u][6], s[u][7])), (n += a.getTotalLength()), (o = [s[u][6], s[u][7]]), r.push(a)) : 'a' === s[u][0] && ((a = new tm(o[0], o[1], s[u][1], s[u][2], s[u][3], s[u][4], s[u][5], o[0] + s[u][6], o[1] + s[u][7])), (n += a.getTotalLength()), (o = [o[0] + s[u][6], o[1] + s[u][7]]), r.push(a)), i.push(n);
                return t;
            }
            var n = 0,
                i = [],
                r = [];
            (t.getTotalLength = function () {
                return n;
            }),
                (t.getPointAtLength = function (e) {
                    var t = a(e);
                    return r[t.i].getPointAtLength(t.fraction);
                }),
                (t.getTangentAtLength = function (e) {
                    var t = a(e);
                    return r[t.i].getTangentAtLength(t.fraction);
                }),
                (t.getPropertiesAtLength = function (e) {
                    var t = a(e);
                    return r[t.i].getPropertiesAtLength(t.fraction);
                });
            var a = function (e) {
                e < 0 ? (e = 0) : e > n && (e = n);
                for (var t = i.length - 1; i[t] >= e && i[t] > 0; ) t--;
                return {
                    fraction: e - i[++t - 1],
                    i: t
                };
            };
            return t(e);
        },
        tv = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
        ty = 'flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).',
        tI = function (e, t) {
            for (var n, i, r, a = e.length, s = 1 / 0, o = 0; o < a; o++)
                !(function (r) {
                    (i = 0),
                        t.forEach(function (t, n) {
                            var s = w(e[(r + n) % a], t);
                            i += s * s;
                        }),
                        i < s && ((s = i), (n = r));
                })(o);
            n && ((r = e.splice(0, n)), e.splice.apply(e, [e.length, 0].concat(r)));
        },
        tT = function (e, t, n) {
            void 0 === n && (n = {});
            var i = n.maxSegmentLength;
            void 0 === i && (i = 10);
            var r = n.string;
            void 0 === r && (r = !0);
            var a = ee(J(e, i), J(t, i), r);
            return r && ('string' == typeof e || 'string' == typeof t)
                ? function (n) {
                      return n < 0.0001 && 'string' == typeof e ? e : 1 - n < 0.0001 && 'string' == typeof t ? t : a(n);
                  }
                : a;
        },
        tb = et;
    (et.deviation = function (e, t, n, i) {
        var r = t && t.length,
            a = r ? t[0] * n : e.length,
            s = Math.abs(eO(e, 0, a, n));
        if (r)
            for (var o = 0, l = t.length; o < l; o++) {
                var u = t[o] * n,
                    c = o < l - 1 ? t[o + 1] * n : e.length;
                s -= Math.abs(eO(e, u, c, n));
            }
        var d = 0;
        for (o = 0; o < i.length; o += 3) {
            var f = i[o] * n,
                _ = i[o + 1] * n,
                p = i[o + 2] * n;
            d += Math.abs((e[f] - e[p]) * (e[_ + 1] - e[f + 1]) - (e[f] - e[_]) * (e[p + 1] - e[f + 1]));
        }
        return 0 === s && 0 === d ? 0 : Math.abs((d - s) / s);
    }),
        (et.flatten = function (e) {
            for (
                var t = e[0][0].length,
                    n = {
                        vertices: [],
                        holes: [],
                        dimensions: t
                    },
                    i = 0,
                    r = 0;
                r < e.length;
                r++
            ) {
                for (var a = 0; a < e[r].length; a++) for (var s = 0; s < t; s++) n.vertices.push(e[r][a][s]);
                r > 0 && ((i += e[r - 1].length), n.holes.push(i));
            }
            return n;
        });
    var tS = function (e) {
            return e;
        },
        tA = function (e) {
            if (null == e) return tS;
            var t,
                n,
                i = e.scale[0],
                r = e.scale[1],
                a = e.translate[0],
                s = e.translate[1];
            return function (e, o) {
                o || (t = n = 0);
                var l = 2,
                    u = e.length,
                    c = Array(u);
                for (c[0] = (t += e[0]) * i + a, c[1] = (n += e[1]) * r + s; l < u; ) (c[l] = e[l]), ++l;
                return c;
            };
        },
        tN = function (e, t) {
            for (var n, i = e.length, r = i - t; r < --i; ) (n = e[r]), (e[r++] = e[i]), (e[i] = n);
        },
        tC = function (e, t) {
            return 'GeometryCollection' === t.type
                ? {
                      type: 'FeatureCollection',
                      features: t.geometries.map(function (t) {
                          return eD(e, t);
                      })
                  }
                : eD(e, t);
        },
        tR = function (e, t) {
            function n(t) {
                var n,
                    i = e.arcs[t < 0 ? ~t : t],
                    r = i[0];
                return (
                    e.transform
                        ? ((n = [0, 0]),
                          i.forEach(function (e) {
                              (n[0] += e[0]), (n[1] += e[1]);
                          }))
                        : (n = i[i.length - 1]),
                    t < 0 ? [n, r] : [r, n]
                );
            }
            function i(e, t) {
                for (var n in e) {
                    var i = e[n];
                    delete t[i.start],
                        delete i.start,
                        delete i.end,
                        i.forEach(function (e) {
                            r[e < 0 ? ~e : e] = 1;
                        }),
                        o.push(i);
                }
            }
            var r = {},
                a = {},
                s = {},
                o = [],
                l = -1;
            return (
                t.forEach(function (n, i) {
                    var r,
                        a = e.arcs[n < 0 ? ~n : n];
                    !(a.length < 3) || a[1][0] || a[1][1] || ((r = t[++l]), (t[l] = n), (t[i] = r));
                }),
                t.forEach(function (e) {
                    var t,
                        i,
                        r = n(e),
                        o = r[0],
                        l = r[1];
                    if ((t = s[o])) {
                        if ((delete s[t.end], t.push(e), (t.end = l), (i = a[l]))) {
                            delete a[i.start];
                            var u = i === t ? t : t.concat(i);
                            a[(u.start = t.start)] = s[(u.end = i.end)] = u;
                        } else a[t.start] = s[t.end] = t;
                    } else if ((t = a[l])) {
                        if ((delete a[t.start], t.unshift(e), (t.start = o), (i = s[o]))) {
                            delete s[i.end];
                            var c = i === t ? t : i.concat(t);
                            a[(c.start = i.start)] = s[(c.end = t.end)] = c;
                        } else a[t.start] = s[t.end] = t;
                    } else a[((t = [e]).start = o)] = s[(t.end = l)] = t;
                }),
                i(s, a),
                i(a, s),
                t.forEach(function (e) {
                    r[e < 0 ? ~e : e] || o.push([e]);
                }),
                o
            );
        },
        tO = function (e, t) {
            for (var n = 0, i = e.length; n < i; ) {
                var r = (n + i) >>> 1;
                e[r] < t ? (n = r + 1) : (i = r);
            }
            return n;
        },
        tD = function (e) {
            function t(e, t) {
                e.forEach(function (e) {
                    e < 0 && (e = ~e);
                    var n = r[e];
                    n ? n.push(t) : (r[e] = [t]);
                });
            }
            function n(e, n) {
                e.forEach(function (e) {
                    t(e, n);
                });
            }
            function i(e, t) {
                'GeometryCollection' === e.type
                    ? e.geometries.forEach(function (e) {
                          i(e, t);
                      })
                    : e.type in s && s[e.type](e.arcs, t);
            }
            var r = {},
                a = e.map(function () {
                    return [];
                }),
                s = {
                    LineString: t,
                    MultiLineString: n,
                    Polygon: n,
                    MultiPolygon: function (e, t) {
                        e.forEach(function (e) {
                            n(e, t);
                        });
                    }
                };
            for (var o in (e.forEach(i), r))
                for (var l = r[o], u = l.length, c = 0; c < u; ++c)
                    for (var d = c + 1; d < u; ++d) {
                        var f,
                            _ = l[c],
                            p = l[d];
                        (f = a[_])[(o = tO(f, p))] !== p && f.splice(o, 0, p), (f = a[p])[(o = tO(f, _))] !== _ && f.splice(o, 0, _);
                    }
            return a;
        },
        tx = function (e, t) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        },
        tL = function (e) {
            return (
                1 === e.length && (e = ew(e)),
                {
                    left: function (t, n, i, r) {
                        for (null == i && (i = 0), null == r && (r = t.length); i < r; ) {
                            var a = (i + r) >>> 1;
                            0 > e(t[a], n) ? (i = a + 1) : (r = a);
                        }
                        return i;
                    },
                    right: function (t, n, i, r) {
                        for (null == i && (i = 0), null == r && (r = t.length); i < r; ) {
                            var a = (i + r) >>> 1;
                            e(t[a], n) > 0 ? (r = a) : (i = a + 1);
                        }
                        return i;
                    }
                }
            );
        },
        tP =
            (tL(tx).right,
            function (e, t) {
                return ek(eM(eU(e), e), t);
            }),
        tw = function (e, t) {
            if (e.length > 8)
                return e.map(function (e, t) {
                    return t;
                });
            var n = e.map(function (e) {
                return t.map(function (t) {
                    return eB(e, t);
                });
            });
            return eG(e, t, n);
        };
    (e.interpolate = tT), (e.separate = eZ), (e.combine = eF), (e.interpolateAll = eV), (e.splitPathString = Y), (e.toPathString = H), (e.fromCircle = eH), (e.toCircle = eY), (e.fromRect = eW), (e.toRect = eK), Object.defineProperty(e, '__esModule', { value: !0 });
});
