!(function (e, r) {
    r(n);
})(0, function (e) {
    function n(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e || 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || (e >= 5760 && e6.indexOf(e) >= 0);
    }
    function r(e) {
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
    function a(e) {
        return (e >= 48 && e <= 57) || 43 === e || 45 === e || 46 === e;
    }
    function s(e) {
        (this.index = 0), (this.path = e), (this.max = e.length), (this.result = []), (this.param = 0), (this.err = ''), (this.segmentStart = 0), (this.data = []);
    }
    function o(e) {
        for (; e.index < e.max && n(e.path.charCodeAt(e.index)); ) e.index++;
    }
    function l(e) {
        var n,
            r = e.index,
            a = r,
            s = e.max,
            o = !1,
            l = !1,
            u = !1,
            c = !1;
        if (a >= s) return void (e.err = 'SvgPath: missed param (at pos ' + a + ')');
        if (((43 !== (n = e.path.charCodeAt(a)) && 45 !== n) || (n = ++a < s ? e.path.charCodeAt(a) : 0), !i(n) && 46 !== n)) return void (e.err = 'SvgPath: param should start with 0..9 or `.` (at pos ' + a + ')');
        if (46 !== n) {
            if (((o = 48 === n), (n = ++a < s ? e.path.charCodeAt(a) : 0), o && a < s && n && i(n))) return void (e.err = 'SvgPath: numbers started with `0` such as `09` are ilegal (at pos ' + r + ')');
            for (; a < s && i(e.path.charCodeAt(a)); ) a++, (l = !0);
            n = a < s ? e.path.charCodeAt(a) : 0;
        }
        if (46 === n) {
            for (c = !0, a++; i(e.path.charCodeAt(a)); ) a++, (u = !0);
            n = a < s ? e.path.charCodeAt(a) : 0;
        }
        if (101 === n || 69 === n) {
            if ((c && !l && !u) || ((43 !== (n = ++a < s ? e.path.charCodeAt(a) : 0) && 45 !== n) || a++, !(a < s && i(e.path.charCodeAt(a))))) return void (e.err = 'SvgPath: invalid float exponent (at pos ' + a + ')');
            for (; a < s && i(e.path.charCodeAt(a)); ) a++;
        }
        (e.index = a), (e.param = parseFloat(e.path.slice(r, a)) + 0);
    }
    function u(e) {
        r = (n = e.path[e.segmentStart]).toLowerCase();
        var n,
            r,
            i = e.data;
        if (('m' === r && i.length > 2 && (e.result.push([n, i[0], i[1]]), (i = i.slice(2)), (r = 'l'), (n = 'm' === n ? 'l' : 'L')), 'r' === r)) e.result.push([n].concat(i));
        else for (; i.length >= e4[r] && (e.result.push([n].concat(i.splice(0, e4[r]))), e4[r]); );
    }
    function c(e) {
        var n,
            i,
            s,
            c = e.max;
        if (((e.segmentStart = e.index), !r(e.path.charCodeAt(e.index)))) return void (e.err = 'SvgPath: bad command ' + e.path[e.index] + ' (at pos ' + e.index + ')');
        if (((i = e4[e.path[e.index].toLowerCase()]), e.index++, o(e), (e.data = []), !i)) return void u(e);
        for (n = !1; ; ) {
            for (s = i; s > 0; s--) {
                if ((l(e), e.err.length)) return;
                e.data.push(e.param), o(e), (n = !1), e.index < c && 44 === e.path.charCodeAt(e.index) && (e.index++, o(e), (n = !0));
            }
            if (!n && (e.index >= e.max || !a(e.path.charCodeAt(e.index)))) break;
        }
        u(e);
    }
    function d(e, n) {
        return [e[0] * n[0] + e[2] * n[1], e[1] * n[0] + e[3] * n[1], e[0] * n[2] + e[2] * n[3], e[1] * n[2] + e[3] * n[3], e[0] * n[4] + e[2] * n[5] + e[4], e[1] * n[4] + e[3] * n[5] + e[5]];
    }
    function f() {
        if (!(this instanceof f)) return new f();
        (this.queue = []), (this.cache = null);
    }
    function _(e, n, r, i) {
        var a = e * i - n * r < 0 ? -1 : 1,
            s = Math.sqrt(e * e + n * n),
            o = Math.sqrt(e * e + n * n),
            l = (e * r + n * i) / (s * o);
        return l > 1 && (l = 1), l < -1 && (l = -1), a * Math.acos(l);
    }
    function h(e, n, r, i, a, s, o, l, u, c) {
        var d = (c * (e - r)) / 2 + (u * (n - i)) / 2,
            f = (-u * (e - r)) / 2 + (c * (n - i)) / 2,
            h = o * o,
            p = l * l,
            m = d * d,
            g = f * f,
            E = h * p - h * g - p * m;
        E < 0 && (E = 0), (E /= h * g + p * m);
        var v = (((E = Math.sqrt(E) * (a === s ? -1 : 1)) * o) / l) * f,
            I = (-(E * l) / o) * d,
            T = c * v - u * I + (e + r) / 2,
            b = u * v + c * I + (n + i) / 2,
            y = (d - v) / o,
            S = (f - I) / l,
            A = (-d - v) / o,
            N = (-f - I) / l,
            C = _(1, 0, y, S),
            R = _(y, S, A, N);
        return 0 === s && R > 0 && (R -= tn), 1 === s && R < 0 && (R += tn), [T, b, C, R];
    }
    function p(e, n) {
        var r = (4 / 3) * Math.tan(n / 4),
            i = Math.cos(e),
            a = Math.sin(e),
            s = Math.cos(e + n),
            o = Math.sin(e + n);
        return [i, a, i - a * r, a + i * r, s + o * r, o - s * r, s, o];
    }
    function m(e, n, r) {
        if (!(this instanceof m)) return new m(e, n, r);
        (this.rx = e), (this.ry = n), (this.ax = r);
    }
    function g(e) {
        if (!(this instanceof g)) return new g(e);
        var n = e5(e);
        (this.segments = n.segments), (this.err = n.err), (this.__stack = []);
    }
    function E(e) {
        var n = e.match(tc);
        return n ? n.map(Number) : [];
    }
    function v(e, n, r, i, a, s, o, l) {
        (this.a = {
            x: e,
            y: n
        }),
            (this.b = {
                x: r,
                y: i
            }),
            (this.c = {
                x: a,
                y: s
            }),
            (this.d = {
                x: o,
                y: l
            }),
            null != o && null != l ? ((this.getArcLength = O), (this.getPoint = S), (this.getDerivative = T)) : ((this.getArcLength = A), (this.getPoint = y), (this.getDerivative = I)),
            this.init();
    }
    function I(e, n, r) {
        return {
            x: 2 * (1 - r) * (e[1] - e[0]) + 2 * r * (e[2] - e[1]),
            y: 2 * (1 - r) * (n[1] - n[0]) + 2 * r * (n[2] - n[1])
        };
    }
    function T(e, n, r) {
        return y([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (n[1] - n[0]), 3 * (n[2] - n[1]), 3 * (n[3] - n[2])], r);
    }
    function b(e, n, r, i, a) {
        for (var s = 1, o = e / n, l = (e - r(i, a, o)) / n; s > 0.001; ) {
            var u = r(i, a, o + l),
                c = r(i, a, o - l),
                d = Math.abs(e - u) / n,
                f = Math.abs(e - c) / n;
            d < s ? ((s = d), (o += l)) : f < s ? ((s = f), (o -= l)) : (l /= 2);
        }
        return o;
    }
    function y(e, n, r) {
        return {
            x: (1 - r) * (1 - r) * e[0] + 2 * (1 - r) * r * e[1] + r * r * e[2],
            y: (1 - r) * (1 - r) * n[0] + 2 * (1 - r) * r * n[1] + r * r * n[2]
        };
    }
    function S(e, n, r) {
        return {
            x: (1 - r) * (1 - r) * (1 - r) * e[0] + 3 * (1 - r) * (1 - r) * r * e[1] + 3 * (1 - r) * r * r * e[2] + r * r * r * e[3],
            y: (1 - r) * (1 - r) * (1 - r) * n[0] + 3 * (1 - r) * (1 - r) * r * n[1] + 3 * (1 - r) * r * r * n[2] + r * r * r * n[3]
        };
    }
    function A(e, n, r) {
        void 0 === r && (r = 1);
        var i = e[0] - 2 * e[1] + e[2],
            a = n[0] - 2 * n[1] + n[2],
            s = 2 * e[1] - 2 * e[0],
            o = 2 * n[1] - 2 * n[0],
            l = 4 * (i * i + a * a),
            u = 4 * (i * s + a * o),
            c = s * s + o * o;
        if (0 === l) return r * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(n[2] - n[0], 2));
        var d = u / (2 * l),
            f = r + d,
            _ = c / l - d * d;
        return (Math.sqrt(l) / 2) * (f * Math.sqrt(f * f + _) - d * Math.sqrt(d * d + _) + _ * Math.log(Math.abs((f + Math.sqrt(f * f + _)) / (d + Math.sqrt(d * d + _)))));
    }
    function N(e, n) {
        return th[e][n];
    }
    function C(e, n, r) {
        var i,
            a,
            s,
            o = r.length - 1;
        if (0 === o) return 0;
        if (0 === e) {
            for (a = 0, s = 0; s <= o; s++) a += N(o, s) * Math.pow(1 - n, o - s) * Math.pow(n, s) * r[s];
            return a;
        }
        for (i = Array(o), s = 0; s < o; s++) i[s] = o * (r[s + 1] - r[s]);
        return C(e - 1, n, i);
    }
    function R(e, n, r) {
        var i = C(1, r, e),
            a = C(1, r, n);
        return Math.sqrt(i * i + a * a);
    }
    function O(e, n, r) {
        var i, a, s, o;
        for (void 0 === r && (r = 1), i = r / 2, a = 0, s = 0; s < 20; s++) (o = i * tf[20][s] + i), (a += t_[20][s] * R(e, n, o));
        return i * a;
    }
    function D(e, n, r, i) {
        var a = e * i - n * r < 0 ? -1 : 1,
            s = e * r + n * i;
        return s > 1 && (s = 1), s < -1 && (s = -1), a * Math.acos(s);
    }
    function L(e, n, r, i, a, s, o, l, u, c) {
        var d = (c * (e - r)) / 2 + (u * (n - i)) / 2,
            f = (-u * (e - r)) / 2 + (c * (n - i)) / 2,
            _ = o * o,
            h = l * l,
            p = d * d,
            m = f * f,
            g = _ * h - _ * m - h * p;
        g < 0 && (g = 0), (g /= _ * m + h * p);
        var E = (((g = Math.sqrt(g) * (a === s ? -1 : 1)) * o) / l) * f,
            v = (-(g * l) / o) * d,
            I = c * E - u * v + (e + r) / 2,
            T = u * E + c * v + (n + i) / 2,
            b = (d - E) / o,
            y = (f - v) / l,
            S = (-d - E) / o,
            A = (-f - v) / l,
            N = D(1, 0, b, y),
            C = D(b, y, S, A);
        return 0 === s && C > 0 && (C -= tp), 1 === s && C < 0 && (C += tp), [I, T, N, C];
    }
    function x(e, n) {
        var r = (4 / 3) * Math.tan(n / 4),
            i = Math.cos(e),
            a = Math.sin(e),
            s = Math.cos(e + n),
            o = Math.sin(e + n);
        return [i, a, i - a * r, a + i * r, s + o * r, o - s * r, s, o];
    }
    function w(e, n, r, i, a, s, o, l, u) {
        var c = 0,
            d = [],
            f = [];
        tm(e, n, r, i, a, s, o, l, u).forEach(function (e) {
            var n = new td(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
                r = n.getTotalLength();
            (c += r), d.push(r), f.push(n);
        }),
            (this.length = c),
            (this.partialLengths = d),
            (this.curves = f);
    }
    function P(e, n, r, i) {
        (this.x0 = e), (this.x1 = n), (this.y0 = r), (this.y1 = i);
    }
    function M(e, n) {
        return Math.sqrt((e[0] - n[0]) * (e[0] - n[0]) + (e[1] - n[1]) * (e[1] - n[1]));
    }
    function k(e, n, r) {
        return [e[0] + (n[0] - e[0]) * r, e[1] + (n[1] - e[1]) * r];
    }
    function U(e, n) {
        return 1e-9 > M(e, n);
    }
    function B(e, n, r) {
        var i = e.map(function (e, r) {
            return G(e, n[r]);
        });
        return function (e) {
            var n = i.map(function (n) {
                return n(e);
            });
            return r ? Y(n) : n;
        };
    }
    function G(e, n) {
        return function (r) {
            return e.map(function (e, i) {
                return e + r * (n[i] - e);
            });
        };
    }
    function Z(e) {
        return 'number' == typeof e && isFinite(e);
    }
    function F(e) {
        return V(e) ? e2(e) : [(e[0][0] + e[e.length - 1][0]) / 2, (e[0][1] + e[e.length - 1][1]) / 2];
    }
    function V(e) {
        for (var n = 0; n < e.length - 2; n++) {
            var r = e[n],
                i = e[n + 1],
                a = e[n + 2];
            if (r[0] * (i[1] - a[1]) + i[0] * (a[1] - r[1]) + a[0] * (r[1] - i[1])) return !0;
        }
        return !1;
    }
    function j(e) {
        return new ts(e).abs();
    }
    function H(e) {
        return e
            .toString()
            .split('M')
            .map(function (e, n) {
                return (e = e.trim()), n && e ? 'M' + e : e;
            })
            .filter(function (e) {
                return e;
            });
    }
    function Y(e) {
        return 'M' + e.join('L') + 'Z';
    }
    function W(e) {
        return H(j(e));
    }
    function K(e, n) {
        var r = j(e);
        return z(r) || q(r, n);
    }
    function z(e) {
        var n = e.segments || [],
            r = [];
        if (!n.length || 'M' !== n[0][0]) return !1;
        for (var i = 0; i < n.length; i++) {
            var a = n[i],
                s = a[0],
                o = a[1],
                l = a[2];
            if (('M' === s && i) || 'Z' === s) break;
            if ('M' === s || 'L' === s) r.push([o, l]);
            else if ('H' === s) r.push([o, r[r.length - 1][1]]);
            else {
                if ('V' !== s) return !1;
                r.push([r[r.length - 1][0], o]);
            }
        }
        return !!r.length && { ring: r };
    }
    function q(e, n) {
        var r,
            i,
            a = H(e)[0],
            s = [],
            o = 3;
        if (!a) throw TypeError(tI);
        (r = (i = Q(a)).getTotalLength()), n && Z(n) && n > 0 && (o = Math.max(o, Math.ceil(r / n)));
        for (var l = 0; l < o; l++) {
            var u = i.getPointAtLength((r * l) / o);
            s.push([u.x, u.y]);
        }
        return {
            ring: s,
            skipBisect: !0
        };
    }
    function Q(e) {
        if ('undefined' != typeof window && window && window.document)
            try {
                var n = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');
                return n.setAttributeNS(null, 'd', e), n;
            } catch (e) {}
        return tv(e);
    }
    function X(e, n) {
        for (var r = e.length + n, i = e3(e) / n, a = 0, s = 0, o = i / 2; e.length < r; ) {
            var l = e[a],
                u = e[(a + 1) % e.length],
                c = M(l, u);
            o <= s + c ? (e.splice(a + 1, 0, c ? k(l, u, (o - s) / c) : l.slice(0)), (o += i)) : ((s += c), a++);
        }
    }
    function J(e, n) {
        void 0 === n && (n = 1 / 0);
        for (var r = 0; r < e.length; r++) for (var i = e[r], a = r === e.length - 1 ? e[0] : e[r + 1]; M(i, a) > n; ) (a = k(i, a, 0.5)), e.splice(r + 1, 0, a);
    }
    function $(e, n) {
        var r, i;
        if ('string' == typeof e) {
            var a = K(e, n);
            (e = a.ring), (i = a.skipBisect);
        } else if (!Array.isArray(e)) throw TypeError(tI);
        if (!ee((r = e.slice(0)))) throw TypeError(tI);
        return r.length > 1 && U(r[0], r[r.length - 1]) && r.pop(), e1(r) > 0 && r.reverse(), !i && n && Z(n) && n > 0 && J(r, n), r;
    }
    function ee(e) {
        return e.every(function (e) {
            return Array.isArray(e) && e.length >= 2 && Z(e[0]) && Z(e[1]);
        });
    }
    function et(e, n, r) {
        var i;
        return (i = e.length - n.length), X(e, i < 0 ? -1 * i : 0), X(n, i > 0 ? i : 0), tb(e, n), B(e, n, r);
    }
    function en(e, n, r) {
        r = r || 2;
        var i,
            a,
            s,
            o,
            l,
            u,
            c,
            d = n && n.length,
            f = d ? n[0] * r : e.length,
            _ = er(e, 0, f, r, !0),
            h = [];
        if (!_) return h;
        if ((d && (_ = ec(e, n, _, r)), e.length > 80 * r)) {
            (i = s = e[0]), (a = o = e[1]);
            for (var p = r; p < f; p += r) (l = e[p]), (u = e[p + 1]), l < i && (i = l), u < a && (a = u), l > s && (s = l), u > o && (o = u);
            c = Math.max(s - i, o - a);
        }
        return ea(_, h, r, i, a, c), h;
    }
    function er(e, n, r, i, a) {
        var s, o;
        if (a === eD(e, n, r, i) > 0) for (s = n; s < r; s += i) o = eC(s, e[s], e[s + 1], o);
        else for (s = r - i; s >= n; s -= i) o = eC(s, e[s], e[s + 1], o);
        return o && eT(o, o.next) && (eR(o), (o = o.next)), o;
    }
    function ei(e, n) {
        if (!e) return e;
        n || (n = e);
        var r,
            i = e;
        do
            if (((r = !1), i.steiner || (!eT(i, i.next) && 0 !== eI(i.prev, i, i.next)))) i = i.next;
            else {
                if ((eR(i), (i = n = i.prev) === i.next)) return null;
                r = !0;
            }
        while (r || i !== n);
        return n;
    }
    function ea(e, n, r, i, a, s, o) {
        if (e) {
            !o && s && eh(e, i, a, s);
            for (var l, u, c = e; e.prev !== e.next; )
                if (((l = e.prev), (u = e.next), s ? eo(e, i, a, s) : es(e))) n.push(l.i / r), n.push(e.i / r), n.push(u.i / r), eR(e), (e = u.next), (c = u.next);
                else if ((e = u) === c) {
                    o ? (1 === o ? ea((e = el(e, n, r)), n, r, i, a, s, 2) : 2 === o && eu(e, n, r, i, a, s)) : ea(ei(e), n, r, i, a, s, 1);
                    break;
                }
        }
    }
    function es(e) {
        var n = e.prev,
            r = e,
            i = e.next;
        if (eI(n, r, i) >= 0) return !1;
        for (var a = e.next.next; a !== e.prev; ) {
            if (eE(n.x, n.y, r.x, r.y, i.x, i.y, a.x, a.y) && eI(a.prev, a, a.next) >= 0) return !1;
            a = a.next;
        }
        return !0;
    }
    function eo(e, n, r, i) {
        var a = e.prev,
            s = e,
            o = e.next;
        if (eI(a, s, o) >= 0) return !1;
        for (var l = a.x < s.x ? (a.x < o.x ? a.x : o.x) : s.x < o.x ? s.x : o.x, u = a.y < s.y ? (a.y < o.y ? a.y : o.y) : s.y < o.y ? s.y : o.y, c = a.x > s.x ? (a.x > o.x ? a.x : o.x) : s.x > o.x ? s.x : o.x, d = a.y > s.y ? (a.y > o.y ? a.y : o.y) : s.y > o.y ? s.y : o.y, f = em(l, u, n, r, i), _ = em(c, d, n, r, i), h = e.nextZ; h && h.z <= _; ) {
            if (h !== e.prev && h !== e.next && eE(a.x, a.y, s.x, s.y, o.x, o.y, h.x, h.y) && eI(h.prev, h, h.next) >= 0) return !1;
            h = h.nextZ;
        }
        for (h = e.prevZ; h && h.z >= f; ) {
            if (h !== e.prev && h !== e.next && eE(a.x, a.y, s.x, s.y, o.x, o.y, h.x, h.y) && eI(h.prev, h, h.next) >= 0) return !1;
            h = h.prevZ;
        }
        return !0;
    }
    function el(e, n, r) {
        var i = e;
        do {
            var a = i.prev,
                s = i.next.next;
            !eT(a, s) && eb(a, i, i.next, s) && eS(a, s) && eS(s, a) && (n.push(a.i / r), n.push(i.i / r), n.push(s.i / r), eR(i), eR(i.next), (i = e = s)), (i = i.next);
        } while (i !== e);
        return i;
    }
    function eu(e, n, r, i, a, s) {
        var o = e;
        do {
            for (var l = o.next.next; l !== o.prev; ) {
                if (o.i !== l.i && ev(o, l)) {
                    var u = eN(o, l);
                    return (o = ei(o, o.next)), (u = ei(u, u.next)), ea(o, n, r, i, a, s), void ea(u, n, r, i, a, s);
                }
                l = l.next;
            }
            o = o.next;
        } while (o !== e);
    }
    function ec(e, n, r, i) {
        var a,
            s,
            o,
            l,
            u,
            c = [];
        for (a = 0, s = n.length; a < s; a++) (o = n[a] * i), (l = a < s - 1 ? n[a + 1] * i : e.length), (u = er(e, o, l, i, !1)) === u.next && (u.steiner = !0), c.push(eg(u));
        for (c.sort(ed), a = 0; a < c.length; a++) ef(c[a], r), (r = ei(r, r.next));
        return r;
    }
    function ed(e, n) {
        return e.x - n.x;
    }
    function ef(e, n) {
        if ((n = e_(e, n))) {
            var r = eN(n, e);
            ei(r, r.next);
        }
    }
    function e_(e, n) {
        var r,
            i = n,
            a = e.x,
            s = e.y,
            o = -Infinity;
        do {
            if (s <= i.y && s >= i.next.y) {
                var l = i.x + ((s - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
                if (l <= a && l > o) {
                    if (((o = l), l === a)) {
                        if (s === i.y) return i;
                        if (s === i.next.y) return i.next;
                    }
                    r = i.x < i.next.x ? i : i.next;
                }
            }
            i = i.next;
        } while (i !== n);
        if (!r) return null;
        if (a === o) return r.prev;
        var u,
            c = r,
            d = r.x,
            f = r.y,
            _ = 1 / 0;
        for (i = r.next; i !== c; ) a >= i.x && i.x >= d && eE(s < f ? a : o, s, d, f, s < f ? o : a, s, i.x, i.y) && ((u = Math.abs(s - i.y) / (a - i.x)) < _ || (u === _ && i.x > r.x)) && eS(i, e) && ((r = i), (_ = u)), (i = i.next);
        return r;
    }
    function eh(e, n, r, i) {
        var a = e;
        do null === a.z && (a.z = em(a.x, a.y, n, r, i)), (a.prevZ = a.prev), (a.nextZ = a.next), (a = a.next);
        while (a !== e);
        (a.prevZ.nextZ = null), (a.prevZ = null), ep(a);
    }
    function ep(e) {
        var n,
            r,
            i,
            a,
            s,
            o,
            l,
            u,
            c = 1;
        do {
            for (r = e, e = null, s = null, o = 0; r; ) {
                for (o++, i = r, l = 0, n = 0; n < c && (l++, (i = i.nextZ)); n++);
                for (u = c; l > 0 || (u > 0 && i); ) 0 === l ? ((a = i), (i = i.nextZ), u--) : 0 !== u && i ? (r.z <= i.z ? ((a = r), (r = r.nextZ), l--) : ((a = i), (i = i.nextZ), u--)) : ((a = r), (r = r.nextZ), l--), s ? (s.nextZ = a) : (e = a), (a.prevZ = s), (s = a);
                r = i;
            }
            (s.nextZ = null), (c *= 2);
        } while (o > 1);
        return e;
    }
    function em(e, n, r, i, a) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (32767 * (e - r)) / a) | (e << 8))) | (e << 4))) | (e << 2))) | (e << 1))), e | ((n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = (32767 * (n - i)) / a) | (n << 8))) | (n << 4))) | (n << 2))) | (n << 1))) << 1);
    }
    function eg(e) {
        var n = e,
            r = e;
        do n.x < r.x && (r = n), (n = n.next);
        while (n !== e);
        return r;
    }
    function eE(e, n, r, i, a, s, o, l) {
        return (a - o) * (n - l) - (e - o) * (s - l) >= 0 && (e - o) * (i - l) - (r - o) * (n - l) >= 0 && (r - o) * (s - l) - (a - o) * (i - l) >= 0;
    }
    function ev(e, n) {
        return e.next.i !== n.i && e.prev.i !== n.i && !ey(e, n) && eS(e, n) && eS(n, e) && eA(e, n);
    }
    function eI(e, n, r) {
        return (n.y - e.y) * (r.x - n.x) - (n.x - e.x) * (r.y - n.y);
    }
    function eT(e, n) {
        return e.x === n.x && e.y === n.y;
    }
    function eb(e, n, r, i) {
        return !!((eT(e, n) && eT(r, i)) || (eT(e, i) && eT(r, n))) || (eI(e, n, r) > 0 != eI(e, n, i) > 0 && eI(r, i, e) > 0 != eI(r, i, n) > 0);
    }
    function ey(e, n) {
        var r = e;
        do {
            if (r.i !== e.i && r.next.i !== e.i && r.i !== n.i && r.next.i !== n.i && eb(r, r.next, e, n)) return !0;
            r = r.next;
        } while (r !== e);
        return !1;
    }
    function eS(e, n) {
        return 0 > eI(e.prev, e, e.next) ? eI(e, n, e.next) >= 0 && eI(e, e.prev, n) >= 0 : 0 > eI(e, n, e.prev) || 0 > eI(e, e.next, n);
    }
    function eA(e, n) {
        var r = e,
            i = !1,
            a = (e.x + n.x) / 2,
            s = (e.y + n.y) / 2;
        do r.y > s != r.next.y > s && a < ((r.next.x - r.x) * (s - r.y)) / (r.next.y - r.y) + r.x && (i = !i), (r = r.next);
        while (r !== e);
        return i;
    }
    function eN(e, n) {
        var r = new eO(e.i, e.x, e.y),
            i = new eO(n.i, n.x, n.y),
            a = e.next,
            s = n.prev;
        return (e.next = n), (n.prev = e), (r.next = a), (a.prev = r), (i.next = r), (r.prev = i), (s.next = i), (i.prev = s), i;
    }
    function eC(e, n, r, i) {
        var a = new eO(e, n, r);
        return i ? ((a.next = i.next), (a.prev = i), (i.next.prev = a), (i.next = a)) : ((a.prev = a), (a.next = a)), a;
    }
    function eR(e) {
        (e.next.prev = e.prev), (e.prev.next = e.next), e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
    }
    function eO(e, n, r) {
        (this.i = e), (this.x = n), (this.y = r), (this.prev = null), (this.next = null), (this.z = null), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
    }
    function eD(e, n, r, i) {
        for (var a = 0, s = n, o = r - i; s < r; s += i) (a += (e[o] - e[s]) * (e[s + 1] + e[o + 1])), (o = s);
        return a;
    }
    function eL(e, n) {
        var r = n.id,
            i = n.bbox,
            a = null == n.properties ? {} : n.properties,
            s = ex(e, n);
        return null == r && null == i
            ? {
                  type: 'Feature',
                  properties: a,
                  geometry: s
              }
            : null == i
              ? {
                    type: 'Feature',
                    id: r,
                    properties: a,
                    geometry: s
                }
              : {
                    type: 'Feature',
                    id: r,
                    bbox: i,
                    properties: a,
                    geometry: s
                };
    }
    function ex(e, n) {
        function r(e, n) {
            n.length && n.pop();
            for (var r = c[e < 0 ? ~e : e], i = 0, a = r.length; i < a; ++i) n.push(u(r[i], i));
            e < 0 && tC(n, a);
        }
        function i(e) {
            return u(e);
        }
        function a(e) {
            for (var n = [], i = 0, a = e.length; i < a; ++i) r(e[i], n);
            return n.length < 2 && n.push(n[0]), n;
        }
        function s(e) {
            for (var n = a(e); n.length < 4; ) n.push(n[0]);
            return n;
        }
        function o(e) {
            return e.map(s);
        }
        function l(e) {
            var n,
                r = e.type;
            switch (r) {
                case 'GeometryCollection':
                    return {
                        type: r,
                        geometries: e.geometries.map(l)
                    };
                case 'Point':
                    n = i(e.coordinates);
                    break;
                case 'MultiPoint':
                    n = e.coordinates.map(i);
                    break;
                case 'LineString':
                    n = a(e.arcs);
                    break;
                case 'MultiLineString':
                    n = e.arcs.map(a);
                    break;
                case 'Polygon':
                    n = o(e.arcs);
                    break;
                case 'MultiPolygon':
                    n = e.arcs.map(o);
                    break;
                default:
                    return null;
            }
            return {
                type: r,
                coordinates: n
            };
        }
        var u = tN(e.transform),
            c = e.arcs;
        return l(n);
    }
    function ew(e) {
        for (var n, r = -1, i = e.length, a = e[i - 1], s = 0; ++r < i; ) (n = a), (a = e[r]), (s += n[0] * a[1] - n[1] * a[0]);
        return Math.abs(s);
    }
    function eP(e, n) {
        function r(e) {
            switch (e.type) {
                case 'GeometryCollection':
                    e.geometries.forEach(r);
                    break;
                case 'Polygon':
                    i(e.arcs);
                    break;
                case 'MultiPolygon':
                    e.arcs.forEach(i);
            }
        }
        function i(e) {
            e.forEach(function (n) {
                n.forEach(function (n) {
                    (s[(n = n < 0 ? ~n : n)] || (s[n] = [])).push(e);
                });
            }),
                o.push(e);
        }
        function a(n) {
            return ew(
                ex(e, {
                    type: 'Polygon',
                    arcs: [n]
                }).coordinates[0]
            );
        }
        var s = {},
            o = [],
            l = [];
        return (
            n.forEach(r),
            o.forEach(function (e) {
                if (!e._) {
                    var n = [],
                        r = [e];
                    for (e._ = 1, l.push(n); (e = r.pop()); )
                        n.push(e),
                            e.forEach(function (e) {
                                e.forEach(function (e) {
                                    s[e < 0 ? ~e : e].forEach(function (e) {
                                        e._ || ((e._ = 1), r.push(e));
                                    });
                                });
                            });
                }
            }),
            o.forEach(function (e) {
                delete e._;
            }),
            {
                type: 'MultiPolygon',
                arcs: l.map(function (n) {
                    var r,
                        i = [];
                    if (
                        (n.forEach(function (e) {
                            e.forEach(function (e) {
                                e.forEach(function (e) {
                                    s[e < 0 ? ~e : e].length < 2 && i.push(e);
                                });
                            });
                        }),
                        (r = (i = tO(e, i)).length) > 1)
                    )
                        for (var o, l, u = 1, c = a(i[0]); u < r; ++u) (o = a(i[u])) > c && ((l = i[0]), (i[0] = i[u]), (i[u] = l), (c = o));
                    return i;
                })
            }
        );
    }
    function eM(e) {
        return function (n, r) {
            return tx(e(n), r);
        };
    }
    function ek(e, n) {
        var r = {},
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
                var a = [];
                e.forEach(function (e, s) {
                    var o = e[0] < e[1] ? e.join(',') : e[1] + ',' + e[0],
                        l = e.map(function (e) {
                            return n[e];
                        });
                    o in r ? a.push(~r[o]) : (a.push((r[o] = i.arcs.length)), i.arcs.push(l));
                }),
                    i.objects.triangles.geometries.push({
                        type: 'Polygon',
                        area: Math.abs(
                            e1(
                                e.map(function (e) {
                                    return n[e[0]];
                                })
                            )
                        ),
                        arcs: [a]
                    });
            }),
            i.objects.triangles.geometries.sort(function (e, n) {
                return e.area - n.area;
            }),
            i
        );
    }
    function eU(e, n) {
        for (
            var r = e.objects.triangles.geometries,
                i = tw(function (e) {
                    return e.area;
                }).left;
            r.length > n;

        )
            !(function () {
                var n = r[0],
                    a = tL(r)[0][0],
                    s = r[a],
                    o = eP(e, [n, s]);
                (o.area = n.area + s.area), (o.type = 'Polygon'), (o.arcs = o.arcs[0]), r.splice(a, 1), r.shift(), r.splice(i(r, o.area), 0, o);
            })();
        if (n > r.length) throw RangeError("Can't collapse topology into " + n + ' pieces.');
        return tR(e, e.objects.triangles).features.map(function (e) {
            return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0];
        });
    }
    function eB(e) {
        for (
            var n = tS(
                    e.reduce(function (e, n) {
                        return e.concat([n[0]], [n[1]]);
                    }, [])
                ),
                r = [],
                i = 0,
                a = n.length;
            i < a;
            i += 3
        )
            r.push([
                [n[i], n[i + 1]],
                [n[i + 1], n[i + 2]],
                [n[i + 2], n[i]]
            ]);
        return r;
    }
    function eG(e, n, r) {
        function i(e, n, o) {
            void 0 === n && (n = []), void 0 === o && (o = 0);
            for (var l = 0; l < e.length; l++) {
                var u = e.splice(l, 1),
                    c = r[u[0]][n.length];
                o + c < a && (e.length ? i(e.slice(), n.concat(u), o + c) : ((a = o + c), (s = n.concat(u)))), e.length && e.splice(l, 0, u[0]);
            }
        }
        var a = 1 / 0,
            s = e.map(function (e, n) {
                return n;
            });
        return i(s), s;
    }
    function eZ(e, n) {
        var r = M(F(e), F(n));
        return r * r;
    }
    function eF(e, n, r) {
        void 0 === r && (r = {});
        var i = r.maxSegmentLength;
        void 0 === i && (i = 10);
        var a = r.string;
        void 0 === a && (a = !0);
        var s = r.single;
        void 0 === s && (s = !1);
        var o = $(e, i);
        o.length < n.length + 2 && X(o, n.length + 2 - o.length);
        var l,
            u = tP(o, n.length),
            c = n.map(function (e) {
                return $(e, i);
            }),
            d = 'string' == typeof e && e;
        return (
            (s &&
                !n.every(function (e) {
                    return 'string' == typeof e;
                })) ||
                (l = n.slice(0)),
            eH(u, c, {
                match: !0,
                string: a,
                single: s,
                t0: d,
                t1: l
            })
        );
    }
    function eV(e, n, r) {
        void 0 === r && (r = {});
        var i = r.maxSegmentLength;
        void 0 === i && (i = 10);
        var a = r.string;
        void 0 === a && (a = !0);
        var s = r.single;
        void 0 === s && (s = !1);
        var o = eF(n, e, {
            maxSegmentLength: i,
            string: a,
            single: s
        });
        return s
            ? function (e) {
                  return o(1 - e);
              }
            : o.map(function (e) {
                  return function (n) {
                      return e(1 - n);
                  };
              });
    }
    function ej(e, n, r) {
        void 0 === r && (r = {});
        var i = r.maxSegmentLength;
        void 0 === i && (i = 10);
        var a = r.string;
        void 0 === a && (a = !0);
        var s = r.single;
        if ((void 0 === s && (s = !1), !Array.isArray(e) || !Array.isArray(n) || e.length !== n.length || !e.length)) throw TypeError(tT);
        var o,
            l,
            u = function (e) {
                return $(e, i);
            },
            c = e.map(u),
            d = n.map(u);
        return (
            s
                ? (e.every(function (e) {
                      return 'string' == typeof e;
                  }) && (o = e.slice(0)),
                  n.every(function (e) {
                      return 'string' == typeof e;
                  }) && (l = n.slice(0)))
                : ((o = e.slice(0)), (l = n.slice(0))),
            eH(c, d, {
                string: a,
                single: s,
                t0: o,
                t1: l,
                match: !1
            })
        );
    }
    function eH(e, n, r) {
        void 0 === r && (r = {});
        var i = r.string,
            a = r.single,
            s = r.t0,
            o = r.t1,
            l = r.match,
            u = l
                ? tM(e, n)
                : e.map(function (e, n) {
                      return n;
                  }),
            c = u.map(function (r, a) {
                return et(e[r], n[a], i);
            });
        if (
            (l &&
                Array.isArray(s) &&
                (s = u.map(function (e) {
                    return s[e];
                })),
            a && i && (Array.isArray(s) && (s = s.join(' ')), Array.isArray(o) && (o = o.join(' '))),
            a)
        ) {
            var d = i
                ? function (e) {
                      return c
                          .map(function (n) {
                              return n(e);
                          })
                          .join(' ');
                  }
                : function (e) {
                      return c.map(function (n) {
                          return n(e);
                      });
                  };
            return i && (s || o)
                ? function (e) {
                      return (e < 0.0001 && s) || (1 - e < 0.0001 && o) || d(e);
                  }
                : d;
        }
        return i
            ? ((s = Array.isArray(s)
                  ? s.map(function (e) {
                        return 'string' == typeof e && e;
                    })
                  : []),
              (o = Array.isArray(o)
                  ? o.map(function (e) {
                        return 'string' == typeof e && e;
                    })
                  : []),
              c.map(function (e, n) {
                  return s[n] || o[n]
                      ? function (r) {
                            return (r < 0.0001 && s[n]) || (1 - r < 0.0001 && o[n]) || e(r);
                        }
                      : e;
              }))
            : c;
    }
    function eY(e, n, r, i, a) {
        return eq(eQ(e, n, r), i, e$(e, n, r), 2 * Math.PI * r, a);
    }
    function eW(e, n, r, i, a) {
        var s = eY(n, r, i, e, a);
        return function (e) {
            return s(1 - e);
        };
    }
    function eK(e, n, r, i, a, s) {
        return eq(eX(e, n, r, i), a, e0(e, n, r, i), 2 * r + 2 * i, s);
    }
    function ez(e, n, r, i, a, s) {
        var o = eK(n, r, i, a, e, s);
        return function (e) {
            return o(1 - e);
        };
    }
    function eq(e, n, r, i, a) {
        void 0 === a && (a = {});
        var s = a.maxSegmentLength;
        void 0 === s && (s = 10);
        var o = a.string;
        void 0 === o && (o = !0);
        var l,
            u = $(n, s);
        return (
            Z(i) && u.length < i / s && X(u, Math.ceil(i / s - u.length)),
            (l = B(e(u), u, o)),
            o
                ? function (e) {
                      return e < 0.0001 ? r : l(e);
                  }
                : l
        );
    }
    function eQ(e, n, r) {
        return function (i) {
            var a = F(i),
                s = e3(i.concat([i[0]])),
                o = Math.atan2(i[0][1] - a[1], i[0][0] - a[0]),
                l = 0;
            return i.map(function (a, u) {
                var c;
                return u && (l += M(a, i[u - 1])), [Math.cos((c = o + 2 * Math.PI * (s ? l / s : u / i.length))) * r + e, Math.sin(c) * r + n];
            });
        };
    }
    function eX(e, n, r, i) {
        return function (a) {
            var s = F(a),
                o = e3(a.concat([a[0]])),
                l = Math.atan2(a[0][1] - s[1], a[0][0] - s[0]),
                u = 0;
            l < 0 && (l = 2 * Math.PI + l);
            var c = l / (2 * Math.PI);
            return a.map(function (s, l) {
                l && (u += M(s, a[l - 1]));
                var d = eJ((c + (o ? u / o : l / a.length)) % 1);
                return [e + d[0] * r, n + d[1] * i];
            });
        };
    }
    function eJ(e) {
        return e <= 1 / 8 ? [1, 0.5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5];
    }
    function e$(e, n, r) {
        var i = e - r + ',' + n,
            a = e + r + ',' + n,
            s = 'A' + r + ',' + r + ',0,1,1,';
        return 'M' + i + s + a + s + i + 'Z';
    }
    function e0(e, n, r, i) {
        var a = e + r,
            s = n + i;
        return 'M' + e + ',' + n + 'L' + a + ',' + n + 'L' + a + ',' + s + 'L' + e + ',' + s + 'Z';
    }
    var e1 = function (e) {
            for (var n, r = -1, i = e.length, a = e[i - 1], s = 0; ++r < i; ) (n = a), (a = e[r]), (s += n[1] * a[0] - n[0] * a[1]);
            return s / 2;
        },
        e2 = function (e) {
            for (var n, r, i = -1, a = e.length, s = 0, o = 0, l = e[a - 1], u = 0; ++i < a; ) (n = l), (l = e[i]), (u += r = n[0] * l[1] - l[0] * n[1]), (s += (n[0] + l[0]) * r), (o += (n[1] + l[1]) * r);
            return [s / (u *= 3), o / u];
        },
        e3 = function (e) {
            for (var n, r, i = -1, a = e.length, s = e[a - 1], o = s[0], l = s[1], u = 0; ++i < a; ) (n = o), (r = l), (o = (s = e[i])[0]), (l = s[1]), (n -= o), (r -= l), (u += Math.sqrt(n * n + r * r));
            return u;
        },
        e4 = {
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
        e6 = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
        e5 = function (e) {
            var n = new s(e),
                r = n.max;
            for (o(n); n.index < r && !n.err.length; ) c(n);
            return (
                n.err.length ? (n.result = []) : n.result.length && (0 > 'mM'.indexOf(n.result[0][0]) ? ((n.err = 'SvgPath: string should start with `M` or `m`'), (n.result = [])) : (n.result[0][0] = 'M')),
                {
                    err: n.err,
                    segments: n.result
                }
            );
        };
    (f.prototype.matrix = function (e) {
        return (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5]) || ((this.cache = null), this.queue.push(e)), this;
    }),
        (f.prototype.translate = function (e, n) {
            return (0 === e && 0 === n) || ((this.cache = null), this.queue.push([1, 0, 0, 1, e, n])), this;
        }),
        (f.prototype.scale = function (e, n) {
            return (1 === e && 1 === n) || ((this.cache = null), this.queue.push([e, 0, 0, n, 0, 0])), this;
        }),
        (f.prototype.rotate = function (e, n, r) {
            var i, a, s;
            return 0 !== e && (this.translate(n, r), (a = Math.cos((i = (e * Math.PI) / 180))), (s = Math.sin(i)), this.queue.push([a, s, -s, a, 0, 0]), (this.cache = null), this.translate(-n, -r)), this;
        }),
        (f.prototype.skewX = function (e) {
            return 0 !== e && ((this.cache = null), this.queue.push([1, 0, Math.tan((e * Math.PI) / 180), 1, 0, 0])), this;
        }),
        (f.prototype.skewY = function (e) {
            return 0 !== e && ((this.cache = null), this.queue.push([1, Math.tan((e * Math.PI) / 180), 0, 1, 0, 0])), this;
        }),
        (f.prototype.toArray = function () {
            var e = this;
            if (this.cache) return this.cache;
            if (!this.queue.length) return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
            if (((this.cache = this.queue[0]), 1 === this.queue.length)) return this.cache;
            for (var n = 1; n < this.queue.length; n++) e.cache = d(e.cache, e.queue[n]);
            return this.cache;
        }),
        (f.prototype.calc = function (e, n, r) {
            var i;
            return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (i = this.cache)[0] + n * i[2] + (r ? 0 : i[4]), e * i[1] + n * i[3] + (r ? 0 : i[5])]) : [e, n];
        });
    var e7 = f,
        e8 = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0
        },
        e9 = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
        te = /[\s,]+/,
        tt = function (e) {
            var n,
                r,
                i = new e7();
            return (
                e.split(e9).forEach(function (e) {
                    if (e.length) {
                        if (void 0 !== e8[e]) return void (n = e);
                        switch (
                            ((r = e.split(te).map(function (e) {
                                return +e || 0;
                            })),
                            n)
                        ) {
                            case 'matrix':
                                return void (6 === r.length && i.matrix(r));
                            case 'scale':
                                return void (1 === r.length ? i.scale(r[0], r[0]) : 2 === r.length && i.scale(r[0], r[1]));
                            case 'rotate':
                                return void (1 === r.length ? i.rotate(r[0], 0, 0) : 3 === r.length && i.rotate(r[0], r[1], r[2]));
                            case 'translate':
                                return void (1 === r.length ? i.translate(r[0], 0) : 2 === r.length && i.translate(r[0], r[1]));
                            case 'skewX':
                                return void (1 === r.length && i.skewX(r[0]));
                            case 'skewY':
                                return void (1 === r.length && i.skewY(r[0]));
                        }
                    }
                }),
                i
            );
        },
        tn = 2 * Math.PI,
        tr = function (e, n, r, i, a, s, o, l, u) {
            var c = Math.sin((u * tn) / 360),
                d = Math.cos((u * tn) / 360),
                f = (d * (e - r)) / 2 + (c * (n - i)) / 2,
                _ = (-c * (e - r)) / 2 + (d * (n - i)) / 2;
            if ((0 === f && 0 === _) || 0 === o || 0 === l) return [];
            o = Math.abs(o);
            var m = (f * f) / (o * o) + (_ * _) / ((l = Math.abs(l)) * l);
            m > 1 && ((o *= Math.sqrt(m)), (l *= Math.sqrt(m)));
            var g = h(e, n, r, i, a, s, o, l, c, d),
                E = [],
                v = g[2],
                I = g[3],
                T = Math.max(Math.ceil(Math.abs(I) / (tn / 4)), 1);
            I /= T;
            for (var b = 0; b < T; b++) E.push(p(v, I)), (v += I);
            return E.map(function (e) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n + 0],
                        i = e[n + 1];
                    r *= o;
                    var a = d * r - c * (i *= l),
                        s = c * r + d * i;
                    (e[n + 0] = a + g[0]), (e[n + 1] = s + g[1]);
                }
                return e;
            });
        },
        ti = Math.PI / 180;
    (m.prototype.transform = function (e) {
        var n = Math.cos(this.ax * ti),
            r = Math.sin(this.ax * ti),
            i = [this.rx * (e[0] * n + e[2] * r), this.rx * (e[1] * n + e[3] * r), this.ry * (-e[0] * r + e[2] * n), this.ry * (-e[1] * r + e[3] * n)],
            a = i[0] * i[0] + i[2] * i[2],
            s = i[1] * i[1] + i[3] * i[3],
            o = ((i[0] - i[3]) * (i[0] - i[3]) + (i[2] + i[1]) * (i[2] + i[1])) * ((i[0] + i[3]) * (i[0] + i[3]) + (i[2] - i[1]) * (i[2] - i[1])),
            l = (a + s) / 2;
        if (o < 1e-10 * l) return (this.rx = this.ry = Math.sqrt(l)), (this.ax = 0), this;
        var u = i[0] * i[1] + i[2] * i[3],
            c = l + (o = Math.sqrt(o)) / 2,
            d = l - o / 2;
        return (this.ax = 1e-10 > Math.abs(u) && 1e-10 > Math.abs(c - s) ? 90 : (180 * Math.atan(Math.abs(u) > Math.abs(c - s) ? (c - a) / u : u / (c - s))) / Math.PI), this.ax >= 0 ? ((this.rx = Math.sqrt(c)), (this.ry = Math.sqrt(d))) : ((this.ax += 90), (this.rx = Math.sqrt(d)), (this.ry = Math.sqrt(c))), this;
    }),
        (m.prototype.isDegenerate = function () {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx;
        });
    var ta = m;
    (g.prototype.__matrix = function (e) {
        var n,
            r = this;
        e.queue.length &&
            this.iterate(function (i, a, s, o) {
                var l, u, c, d;
                switch (i[0]) {
                    case 'v':
                        u = 0 === (l = e.calc(0, i[1], !0))[0] ? ['v', l[1]] : ['l', l[0], l[1]];
                        break;
                    case 'V':
                        u = (l = e.calc(s, i[1], !1))[0] === e.calc(s, o, !1)[0] ? ['V', l[1]] : ['L', l[0], l[1]];
                        break;
                    case 'h':
                        u = 0 === (l = e.calc(i[1], 0, !0))[1] ? ['h', l[0]] : ['l', l[0], l[1]];
                        break;
                    case 'H':
                        u = (l = e.calc(i[1], o, !1))[1] === e.calc(s, o, !1)[1] ? ['H', l[0]] : ['L', l[0], l[1]];
                        break;
                    case 'a':
                    case 'A':
                        var f = e.toArray(),
                            _ = ta(i[1], i[2], i[3]).transform(f);
                        if ((f[0] * f[3] - f[1] * f[2] < 0 && (i[5] = i[5] ? '0' : '1'), (l = e.calc(i[6], i[7], 'a' === i[0])), ('A' === i[0] && i[6] === s && i[7] === o) || ('a' === i[0] && 0 === i[6] && 0 === i[7]))) {
                            u = ['a' === i[0] ? 'l' : 'L', l[0], l[1]];
                            break;
                        }
                        u = _.isDegenerate() ? ['a' === i[0] ? 'l' : 'L', l[0], l[1]] : [i[0], _.rx, _.ry, _.ax, i[4], i[5], l[0], l[1]];
                        break;
                    case 'm':
                        (d = a > 0), (u = ['m', (l = e.calc(i[1], i[2], d))[0], l[1]]);
                        break;
                    default:
                        for (u = [(c = i[0])], d = c.toLowerCase() === c, n = 1; n < i.length; n += 2) (l = e.calc(i[n], i[n + 1], d)), u.push(l[0], l[1]);
                }
                r.segments[a] = u;
            }, !0);
    }),
        (g.prototype.__evaluateStack = function () {
            var e,
                n,
                r = this;
            if (this.__stack.length) {
                if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void (this.__stack = []);
                for (e = e7(), n = this.__stack.length; --n >= 0; ) e.matrix(r.__stack[n].toArray());
                this.__matrix(e), (this.__stack = []);
            }
        }),
        (g.prototype.toString = function () {
            var e,
                n,
                r = this,
                i = [];
            this.__evaluateStack();
            for (var a = 0; a < this.segments.length; a++) (n = r.segments[a][0]), (e = a > 0 && 'm' !== n && 'M' !== n && n === r.segments[a - 1][0]), (i = i.concat(e ? r.segments[a].slice(1) : r.segments[a]));
            return i
                .join(' ')
                .replace(/ ?([achlmqrstvz]) ?/gi, '$1')
                .replace(/ \-/g, '-')
                .replace(/zm/g, 'z m');
        }),
        (g.prototype.translate = function (e, n) {
            return this.__stack.push(e7().translate(e, n || 0)), this;
        }),
        (g.prototype.scale = function (e, n) {
            return this.__stack.push(e7().scale(e, n || 0 === n ? n : e)), this;
        }),
        (g.prototype.rotate = function (e, n, r) {
            return this.__stack.push(e7().rotate(e, n || 0, r || 0)), this;
        }),
        (g.prototype.skewX = function (e) {
            return this.__stack.push(e7().skewX(e)), this;
        }),
        (g.prototype.skewY = function (e) {
            return this.__stack.push(e7().skewY(e)), this;
        }),
        (g.prototype.matrix = function (e) {
            return this.__stack.push(e7().matrix(e)), this;
        }),
        (g.prototype.transform = function (e) {
            return e.trim() && this.__stack.push(tt(e)), this;
        }),
        (g.prototype.round = function (e) {
            var n,
                r = 0,
                i = 0,
                a = 0,
                s = 0;
            return (
                (e = e || 0),
                this.__evaluateStack(),
                this.segments.forEach(function (o) {
                    var l = o[0].toLowerCase() === o[0];
                    switch (o[0]) {
                        case 'H':
                        case 'h':
                            return l && (o[1] += a), (a = o[1] - o[1].toFixed(e)), void (o[1] = +o[1].toFixed(e));
                        case 'V':
                        case 'v':
                            return l && (o[1] += s), (s = o[1] - o[1].toFixed(e)), void (o[1] = +o[1].toFixed(e));
                        case 'Z':
                        case 'z':
                            return (a = r), void (s = i);
                        case 'M':
                        case 'm':
                            return l && ((o[1] += a), (o[2] += s)), (a = o[1] - o[1].toFixed(e)), (s = o[2] - o[2].toFixed(e)), (r = a), (i = s), (o[1] = +o[1].toFixed(e)), void (o[2] = +o[2].toFixed(e));
                        case 'A':
                        case 'a':
                            return l && ((o[6] += a), (o[7] += s)), (a = o[6] - o[6].toFixed(e)), (s = o[7] - o[7].toFixed(e)), (o[1] = +o[1].toFixed(e)), (o[2] = +o[2].toFixed(e)), (o[3] = +o[3].toFixed(e + 2)), (o[6] = +o[6].toFixed(e)), void (o[7] = +o[7].toFixed(e));
                        default:
                            return (
                                (n = o.length),
                                l && ((o[n - 2] += a), (o[n - 1] += s)),
                                (a = o[n - 2] - o[n - 2].toFixed(e)),
                                (s = o[n - 1] - o[n - 1].toFixed(e)),
                                void o.forEach(function (n, r) {
                                    r && (o[r] = +o[r].toFixed(e));
                                })
                            );
                    }
                }),
                this
            );
        }),
        (g.prototype.iterate = function (e, n) {
            var r,
                i,
                a,
                s = this.segments,
                o = {},
                l = !1,
                u = 0,
                c = 0,
                d = 0,
                f = 0;
            if (
                (n || this.__evaluateStack(),
                s.forEach(function (n, r) {
                    var i = e(n, r, u, c);
                    Array.isArray(i) && ((o[r] = i), (l = !0));
                    var a = n[0] === n[0].toLowerCase();
                    switch (n[0]) {
                        case 'm':
                        case 'M':
                            return (u = n[1] + (a ? u : 0)), (c = n[2] + (a ? c : 0)), (d = u), void (f = c);
                        case 'h':
                        case 'H':
                            return void (u = n[1] + (a ? u : 0));
                        case 'v':
                        case 'V':
                            return void (c = n[1] + (a ? c : 0));
                        case 'z':
                        case 'Z':
                            return (u = d), void (c = f);
                        default:
                            (u = n[n.length - 2] + (a ? u : 0)), (c = n[n.length - 1] + (a ? c : 0));
                    }
                }),
                !l)
            )
                return this;
            for (a = [], r = 0; r < s.length; r++)
                if (void 0 !== o[r]) for (i = 0; i < o[r].length; i++) a.push(o[r][i]);
                else a.push(s[r]);
            return (this.segments = a), this;
        }),
        (g.prototype.abs = function () {
            return (
                this.iterate(function (e, n, r, i) {
                    var a,
                        s = e[0],
                        o = s.toUpperCase();
                    if (s !== o)
                        switch (((e[0] = o), s)) {
                            case 'v':
                                return void (e[1] += i);
                            case 'a':
                                return (e[6] += r), void (e[7] += i);
                            default:
                                for (a = 1; a < e.length; a++) e[a] += a % 2 ? r : i;
                        }
                }, !0),
                this
            );
        }),
        (g.prototype.rel = function () {
            return (
                this.iterate(function (e, n, r, i) {
                    var a,
                        s = e[0],
                        o = s.toLowerCase();
                    if (s !== o && (0 !== n || 'M' !== s))
                        switch (((e[0] = o), s)) {
                            case 'V':
                                return void (e[1] -= i);
                            case 'A':
                                return (e[6] -= r), void (e[7] -= i);
                            default:
                                for (a = 1; a < e.length; a++) e[a] -= a % 2 ? r : i;
                        }
                }, !0),
                this
            );
        }),
        (g.prototype.unarc = function () {
            return (
                this.iterate(function (e, n, r, i) {
                    var a,
                        s,
                        o,
                        l = [],
                        u = e[0];
                    return 'A' !== u && 'a' !== u
                        ? null
                        : ('a' === u ? ((s = r + e[6]), (o = i + e[7])) : ((s = e[6]), (o = e[7])),
                          0 === (a = tr(r, i, s, o, e[4], e[5], e[1], e[2], e[3])).length
                              ? [['a' === e[0] ? 'l' : 'L', e[6], e[7]]]
                              : (a.forEach(function (e) {
                                    l.push(['C', e[2], e[3], e[4], e[5], e[6], e[7]]);
                                }),
                                l));
                }),
                this
            );
        }),
        (g.prototype.unshort = function () {
            var e,
                n,
                r,
                i,
                a,
                s = this.segments;
            return (
                this.iterate(function (o, l, u, c) {
                    var d,
                        f = o[0],
                        _ = f.toUpperCase();
                    l && ('T' === _ ? ((d = 't' === f), 'Q' === (r = s[l - 1])[0] ? ((e = r[1] - u), (n = r[2] - c)) : 'q' === r[0] ? ((e = r[1] - r[3]), (n = r[2] - r[4])) : ((e = 0), (n = 0)), (i = -e), (a = -n), d || ((i += u), (a += c)), (s[l] = [d ? 'q' : 'Q', i, a, o[1], o[2]])) : 'S' === _ && ((d = 's' === f), 'C' === (r = s[l - 1])[0] ? ((e = r[3] - u), (n = r[4] - c)) : 'c' === r[0] ? ((e = r[3] - r[5]), (n = r[4] - r[6])) : ((e = 0), (n = 0)), (i = -e), (a = -n), d || ((i += u), (a += c)), (s[l] = [d ? 'c' : 'C', i, a, o[1], o[2], o[3], o[4]])));
                }),
                this
            );
        });
    var ts = g,
        to = {
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
        tl = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
        tu = function (e) {
            var n = [];
            return (
                e.replace(tl, function (e, r, i) {
                    var a = r.toLowerCase();
                    for (i = E(i), 'm' === a && i.length > 2 && (n.push([r].concat(i.splice(0, 2))), (a = 'l'), (r = 'm' === r ? 'l' : 'L')); i.length >= 0; ) {
                        if (i.length === to[a]) return i.unshift(r), n.push(i);
                        if (i.length < to[a]) throw Error('malformed path data');
                        n.push([r].concat(i.splice(0, to[a])));
                    }
                }),
                n
            );
        },
        tc = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
        td = function (e, n, r, i, a, s, o, l) {
            return new v(e, n, r, i, a, s, o, l);
        };
    v.prototype = {
        constructor: v,
        init: function () {
            this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
        },
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var n = b(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
            return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
        },
        getTangentAtLength: function (e) {
            var n = b(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                r = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n),
                i = Math.sqrt(r.x * r.x + r.y * r.y);
            return i > 0
                ? {
                      x: r.x / i,
                      y: r.y / i
                  }
                : {
                      x: 0,
                      y: 0
                  };
        },
        getPropertiesAtLength: function (e) {
            var n,
                r = b(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                i = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], r),
                a = Math.sqrt(i.x * i.x + i.y * i.y);
            n =
                a > 0
                    ? {
                          x: i.x / a,
                          y: i.y / a
                      }
                    : {
                          x: 0,
                          y: 0
                      };
            var s = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], r);
            return {
                x: s.x,
                y: s.y,
                tangentX: n.x,
                tangentY: n.y
            };
        }
    };
    var tf = [
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
        t_ = [
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
        th = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
        tp = 2 * Math.PI,
        tm = function (e, n, r, i, a, s, o, l, u) {
            var c = Math.sin((a * tp) / 360),
                d = Math.cos((a * tp) / 360),
                f = (d * (e - l)) / 2 + (c * (n - u)) / 2,
                _ = (-c * (e - l)) / 2 + (d * (n - u)) / 2;
            if ((0 === f && 0 === _) || 0 === r || 0 === i) return [];
            r = Math.abs(r);
            var h = (f * f) / (r * r) + (_ * _) / ((i = Math.abs(i)) * i);
            h > 1 && ((r *= Math.sqrt(h)), (i *= Math.sqrt(h)));
            var p = L(e, n, l, u, s, o, r, i, c, d),
                m = [],
                g = p[2],
                E = p[3],
                v = Math.max(Math.ceil(Math.abs(E) / (tp / 4)), 1);
            E /= v;
            for (var I = 0; I < v; I++) m.push(x(g, E)), (g += E);
            return m.map(function (e) {
                for (var n = 0; n < e.length; n += 2) {
                    var a = e[n + 0],
                        s = e[n + 1];
                    a *= r;
                    var o = d * a - c * (s *= i),
                        l = c * a + d * s;
                    (e[n + 0] = o + p[0]), (e[n + 1] = l + p[1]);
                }
                return e;
            });
        },
        tg = function (e, n, r, i, a, s, o, l, u) {
            return new w(e, n, r, i, a, s, o, l, u);
        };
    w.prototype = {
        constructor: w,
        init: function () {},
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var n = this;
            e < 0 ? (e = 0) : e > this.length && (e = this.length);
            for (var r = this.partialLengths.length - 1; this.partialLengths[r] >= e && this.partialLengths[r] > 0; ) r--;
            r < this.partialLengths.length - 1 && r++;
            for (var i = 0, a = 0; a < r; a++) i += n.partialLengths[a];
            return this.curves[r].getPointAtLength(e - i);
        },
        getTangentAtLength: function (e) {
            var n = this;
            e < 0 ? (e = 0) : e > this.length && (e = this.length);
            for (var r = this.partialLengths.length - 1; this.partialLengths[r] >= e && this.partialLengths[r] > 0; ) r--;
            r < this.partialLengths.length - 1 && r++;
            for (var i = 0, a = 0; a < r; a++) i += n.partialLengths[a];
            return this.curves[r].getTangentAtLength(e - i);
        },
        getPropertiesAtLength: function (e) {
            var n = this.getTangentAtLength(e),
                r = this.getPointAtLength(e);
            return {
                x: r.x,
                y: r.y,
                tangentX: n.x,
                tangentY: n.y
            };
        }
    };
    var tE = function (e, n, r, i) {
        return new P(e, n, r, i);
    };
    (P.prototype.getTotalLength = function () {
        return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
    }),
        (P.prototype.getPointAtLength = function (e) {
            var n = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
                r = (this.x1 - this.x0) * n,
                i = (this.y1 - this.y0) * n;
            return {
                x: this.x0 + r,
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
            var n = this.getPointAtLength(e),
                r = this.getTangentAtLength();
            return {
                x: n.x,
                y: n.y,
                tangentX: r.x,
                tangentY: r.y
            };
        });
    var tv = function (e) {
            function n(e) {
                if (!e) return null;
                for (var s, o = tu(e), l = [0, 0], u = [0, 0], c = 0; c < o.length; c++) 'M' === o[c][0] ? ((l = [o[c][1], o[c][2]]), a.push(null)) : 'm' === o[c][0] ? ((l = [o[c][1] + l[0], o[c][2] + l[1]]), a.push(null)) : 'L' === o[c][0] ? ((r += Math.sqrt(Math.pow(l[0] - o[c][1], 2) + Math.pow(l[1] - o[c][2], 2))), a.push(new tE(l[0], o[c][1], l[1], o[c][2])), (l = [o[c][1], o[c][2]])) : 'l' === o[c][0] ? ((r += Math.sqrt(Math.pow(o[c][1], 2) + Math.pow(o[c][2], 2))), a.push(new tE(l[0], o[c][1] + l[0], l[1], o[c][2] + l[1])), (l = [o[c][1] + l[0], o[c][2] + l[1]])) : 'H' === o[c][0] ? ((r += Math.abs(l[0] - o[c][1])), a.push(new tE(l[0], o[c][1], l[1], l[1])), (l[0] = o[c][1])) : 'h' === o[c][0] ? ((r += Math.abs(o[c][1])), a.push(new tE(l[0], l[0] + o[c][1], l[1], l[1])), (l[0] = o[c][1] + l[0])) : 'V' === o[c][0] ? ((r += Math.abs(l[1] - o[c][1])), a.push(new tE(l[0], l[0], l[1], o[c][1])), (l[1] = o[c][1])) : 'v' === o[c][0] ? ((r += Math.abs(o[c][1])), a.push(new tE(l[0], l[0], l[1], l[1] + o[c][1])), (l[1] = o[c][1] + l[1])) : 'z' === o[c][0] || 'Z' === o[c][0] ? ((r += Math.sqrt(Math.pow(o[0][1] - l[0], 2) + Math.pow(o[0][2] - l[1], 2))), a.push(new tE(l[0], o[0][1], l[1], o[0][2])), (l = [o[0][1], o[0][2]])) : 'C' === o[c][0] ? ((s = new td(l[0], l[1], o[c][1], o[c][2], o[c][3], o[c][4], o[c][5], o[c][6])), (r += s.getTotalLength()), (l = [o[c][5], o[c][6]]), a.push(s)) : 'c' === o[c][0] ? ((s = new td(l[0], l[1], l[0] + o[c][1], l[1] + o[c][2], l[0] + o[c][3], l[1] + o[c][4], l[0] + o[c][5], l[1] + o[c][6])), (r += s.getTotalLength()), (l = [o[c][5] + l[0], o[c][6] + l[1]]), a.push(s)) : 'S' === o[c][0] ? ((s = c > 0 && ['C', 'c', 'S', 's'].indexOf(o[c - 1][0]) > -1 ? new td(l[0], l[1], 2 * l[0] - o[c - 1][o[c - 1].length - 4], 2 * l[1] - o[c - 1][o[c - 1].length - 3], o[c][1], o[c][2], o[c][3], o[c][4]) : new td(l[0], l[1], l[0], l[1], o[c][1], o[c][2], o[c][3], o[c][4])), (r += s.getTotalLength()), (l = [o[c][3], o[c][4]]), a.push(s)) : 's' === o[c][0] ? ((s = c > 0 && ['C', 'c', 'S', 's'].indexOf(o[c - 1][0]) > -1 ? new td(l[0], l[1], l[0] + s.d.x - s.c.x, l[1] + s.d.y - s.c.y, l[0] + o[c][1], l[1] + o[c][2], l[0] + o[c][3], l[1] + o[c][4]) : new td(l[0], l[1], l[0], l[1], l[0] + o[c][1], l[1] + o[c][2], l[0] + o[c][3], l[1] + o[c][4])), (r += s.getTotalLength()), (l = [o[c][3] + l[0], o[c][4] + l[1]]), a.push(s)) : 'Q' === o[c][0] ? ((s = new td(l[0], l[1], o[c][1], o[c][2], o[c][3], o[c][4])), (r += s.getTotalLength()), a.push(s), (l = [o[c][3], o[c][4]]), (u = [o[c][1], o[c][2]])) : 'q' === o[c][0] ? ((s = new td(l[0], l[1], l[0] + o[c][1], l[1] + o[c][2], l[0] + o[c][3], l[1] + o[c][4])), (r += s.getTotalLength()), (u = [l[0] + o[c][1], l[1] + o[c][2]]), (l = [o[c][3] + l[0], o[c][4] + l[1]]), a.push(s)) : 'T' === o[c][0] ? ((s = c > 0 && ['Q', 'q', 'T', 't'].indexOf(o[c - 1][0]) > -1 ? new td(l[0], l[1], 2 * l[0] - u[0], 2 * l[1] - u[1], o[c][1], o[c][2]) : new tE(l[0], o[c][1], l[1], o[c][2])), a.push(s), (r += s.getTotalLength()), (u = [2 * l[0] - u[0], 2 * l[1] - u[1]]), (l = [o[c][1], o[c][2]])) : 't' === o[c][0] ? ((s = c > 0 && ['Q', 'q', 'T', 't'].indexOf(o[c - 1][0]) > -1 ? new td(l[0], l[1], 2 * l[0] - u[0], 2 * l[1] - u[1], l[0] + o[c][1], l[1] + o[c][2]) : new tE(l[0], l[0] + o[c][1], l[1], l[1] + o[c][2])), (r += s.getTotalLength()), (u = [2 * l[0] - u[0], 2 * l[1] - u[1]]), (l = [o[c][1] + l[0], o[c][2] + l[0]]), a.push(s)) : 'A' === o[c][0] ? ((s = new tg(l[0], l[1], o[c][1], o[c][2], o[c][3], o[c][4], o[c][5], o[c][6], o[c][7])), (r += s.getTotalLength()), (l = [o[c][6], o[c][7]]), a.push(s)) : 'a' === o[c][0] && ((s = new tg(l[0], l[1], o[c][1], o[c][2], o[c][3], o[c][4], o[c][5], l[0] + o[c][6], l[1] + o[c][7])), (r += s.getTotalLength()), (l = [l[0] + o[c][6], l[1] + o[c][7]]), a.push(s)), i.push(r);
                return n;
            }
            var r = 0,
                i = [],
                a = [];
            (n.getTotalLength = function () {
                return r;
            }),
                (n.getPointAtLength = function (e) {
                    var n = s(e);
                    return a[n.i].getPointAtLength(n.fraction);
                }),
                (n.getTangentAtLength = function (e) {
                    var n = s(e);
                    return a[n.i].getTangentAtLength(n.fraction);
                }),
                (n.getPropertiesAtLength = function (e) {
                    var n = s(e);
                    return a[n.i].getPropertiesAtLength(n.fraction);
                });
            var s = function (e) {
                e < 0 ? (e = 0) : e > r && (e = r);
                for (var n = i.length - 1; i[n] >= e && i[n] > 0; ) n--;
                return {
                    fraction: e - i[++n - 1],
                    i: n
                };
            };
            return n(e);
        },
        tI = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
        tT = 'flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).',
        tb = function (e, n) {
            for (var r, i, a, s = e.length, o = 1 / 0, l = 0; l < s; l++)
                !(function (a) {
                    (i = 0),
                        n.forEach(function (n, r) {
                            var o = M(e[(a + r) % s], n);
                            i += o * o;
                        }),
                        i < o && ((o = i), (r = a));
                })(l);
            r && ((a = e.splice(0, r)), e.splice.apply(e, [e.length, 0].concat(a)));
        },
        ty = function (e, n, r) {
            void 0 === r && (r = {});
            var i = r.maxSegmentLength;
            void 0 === i && (i = 10);
            var a = r.string;
            void 0 === a && (a = !0);
            var s = et($(e, i), $(n, i), a);
            return a && ('string' == typeof e || 'string' == typeof n)
                ? function (r) {
                      return r < 0.0001 && 'string' == typeof e ? e : 1 - r < 0.0001 && 'string' == typeof n ? n : s(r);
                  }
                : s;
        },
        tS = en;
    (en.deviation = function (e, n, r, i) {
        var a = n && n.length,
            s = a ? n[0] * r : e.length,
            o = Math.abs(eD(e, 0, s, r));
        if (a)
            for (var l = 0, u = n.length; l < u; l++) {
                var c = n[l] * r,
                    d = l < u - 1 ? n[l + 1] * r : e.length;
                o -= Math.abs(eD(e, c, d, r));
            }
        var f = 0;
        for (l = 0; l < i.length; l += 3) {
            var _ = i[l] * r,
                h = i[l + 1] * r,
                p = i[l + 2] * r;
            f += Math.abs((e[_] - e[p]) * (e[h + 1] - e[_ + 1]) - (e[_] - e[h]) * (e[p + 1] - e[_ + 1]));
        }
        return 0 === o && 0 === f ? 0 : Math.abs((f - o) / o);
    }),
        (en.flatten = function (e) {
            for (
                var n = e[0][0].length,
                    r = {
                        vertices: [],
                        holes: [],
                        dimensions: n
                    },
                    i = 0,
                    a = 0;
                a < e.length;
                a++
            ) {
                for (var s = 0; s < e[a].length; s++) for (var o = 0; o < n; o++) r.vertices.push(e[a][s][o]);
                a > 0 && ((i += e[a - 1].length), r.holes.push(i));
            }
            return r;
        });
    var tA = function (e) {
            return e;
        },
        tN = function (e) {
            if (null == e) return tA;
            var n,
                r,
                i = e.scale[0],
                a = e.scale[1],
                s = e.translate[0],
                o = e.translate[1];
            return function (e, l) {
                l || (n = r = 0);
                var u = 2,
                    c = e.length,
                    d = Array(c);
                for (d[0] = (n += e[0]) * i + s, d[1] = (r += e[1]) * a + o; u < c; ) (d[u] = e[u]), ++u;
                return d;
            };
        },
        tC = function (e, n) {
            for (var r, i = e.length, a = i - n; a < --i; ) (r = e[a]), (e[a++] = e[i]), (e[i] = r);
        },
        tR = function (e, n) {
            return 'GeometryCollection' === n.type
                ? {
                      type: 'FeatureCollection',
                      features: n.geometries.map(function (n) {
                          return eL(e, n);
                      })
                  }
                : eL(e, n);
        },
        tO = function (e, n) {
            function r(n) {
                var r,
                    i = e.arcs[n < 0 ? ~n : n],
                    a = i[0];
                return (
                    e.transform
                        ? ((r = [0, 0]),
                          i.forEach(function (e) {
                              (r[0] += e[0]), (r[1] += e[1]);
                          }))
                        : (r = i[i.length - 1]),
                    n < 0 ? [r, a] : [a, r]
                );
            }
            function i(e, n) {
                for (var r in e) {
                    var i = e[r];
                    delete n[i.start],
                        delete i.start,
                        delete i.end,
                        i.forEach(function (e) {
                            a[e < 0 ? ~e : e] = 1;
                        }),
                        l.push(i);
                }
            }
            var a = {},
                s = {},
                o = {},
                l = [],
                u = -1;
            return (
                n.forEach(function (r, i) {
                    var a,
                        s = e.arcs[r < 0 ? ~r : r];
                    !(s.length < 3) || s[1][0] || s[1][1] || ((a = n[++u]), (n[u] = r), (n[i] = a));
                }),
                n.forEach(function (e) {
                    var n,
                        i,
                        a = r(e),
                        l = a[0],
                        u = a[1];
                    if ((n = o[l])) {
                        if ((delete o[n.end], n.push(e), (n.end = u), (i = s[u]))) {
                            delete s[i.start];
                            var c = i === n ? n : n.concat(i);
                            s[(c.start = n.start)] = o[(c.end = i.end)] = c;
                        } else s[n.start] = o[n.end] = n;
                    } else if ((n = s[u])) {
                        if ((delete s[n.start], n.unshift(e), (n.start = l), (i = o[l]))) {
                            delete o[i.end];
                            var d = i === n ? n : i.concat(n);
                            s[(d.start = i.start)] = o[(d.end = n.end)] = d;
                        } else s[n.start] = o[n.end] = n;
                    } else s[((n = [e]).start = l)] = o[(n.end = u)] = n;
                }),
                i(o, s),
                i(s, o),
                n.forEach(function (e) {
                    a[e < 0 ? ~e : e] || l.push([e]);
                }),
                l
            );
        },
        tD = function (e, n) {
            for (var r = 0, i = e.length; r < i; ) {
                var a = (r + i) >>> 1;
                e[a] < n ? (r = a + 1) : (i = a);
            }
            return r;
        },
        tL = function (e) {
            function n(e, n) {
                e.forEach(function (e) {
                    e < 0 && (e = ~e);
                    var r = a[e];
                    r ? r.push(n) : (a[e] = [n]);
                });
            }
            function r(e, r) {
                e.forEach(function (e) {
                    n(e, r);
                });
            }
            function i(e, n) {
                'GeometryCollection' === e.type
                    ? e.geometries.forEach(function (e) {
                          i(e, n);
                      })
                    : e.type in o && o[e.type](e.arcs, n);
            }
            var a = {},
                s = e.map(function () {
                    return [];
                }),
                o = {
                    LineString: n,
                    MultiLineString: r,
                    Polygon: r,
                    MultiPolygon: function (e, n) {
                        e.forEach(function (e) {
                            r(e, n);
                        });
                    }
                };
            for (var l in (e.forEach(i), a))
                for (var u = a[l], c = u.length, d = 0; d < c; ++d)
                    for (var f = d + 1; f < c; ++f) {
                        var _,
                            h = u[d],
                            p = u[f];
                        (_ = s[h])[(l = tD(_, p))] !== p && _.splice(l, 0, p), (_ = s[p])[(l = tD(_, h))] !== h && _.splice(l, 0, h);
                    }
            return s;
        },
        tx = function (e, n) {
            return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
        },
        tw = function (e) {
            return (
                1 === e.length && (e = eM(e)),
                {
                    left: function (n, r, i, a) {
                        for (null == i && (i = 0), null == a && (a = n.length); i < a; ) {
                            var s = (i + a) >>> 1;
                            0 > e(n[s], r) ? (i = s + 1) : (a = s);
                        }
                        return i;
                    },
                    right: function (n, r, i, a) {
                        for (null == i && (i = 0), null == a && (a = n.length); i < a; ) {
                            var s = (i + a) >>> 1;
                            e(n[s], r) > 0 ? (a = s) : (i = s + 1);
                        }
                        return i;
                    }
                }
            );
        },
        tP =
            (tw(tx).right,
            function (e, n) {
                return eU(ek(eB(e), e), n);
            }),
        tM = function (e, n) {
            if (e.length > 8)
                return e.map(function (e, n) {
                    return n;
                });
            var r = e.map(function (e) {
                return n.map(function (n) {
                    return eZ(e, n);
                });
            });
            return eG(e, n, r);
        };
    (e.interpolate = ty), (e.separate = eF), (e.combine = eV), (e.interpolateAll = ej), (e.splitPathString = W), (e.toPathString = Y), (e.fromCircle = eY), (e.toCircle = eW), (e.fromRect = eK), (e.toRect = ez), Object.defineProperty(e, '__esModule', { value: !0 });
});
