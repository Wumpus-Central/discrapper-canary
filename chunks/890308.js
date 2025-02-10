(e = n.nmd(e)),
    (function (i) {
        var r = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            s = 'object' == typeof n.g && n.g;
        (s.global === s || s.window === s || s.self === s) && (i = s);
        var o,
            l,
            u = 2147483647,
            c = 36,
            d = 1,
            f = 26,
            _ = 38,
            p = 700,
            h = 72,
            m = 128,
            g = '-',
            E = /^xn--/,
            v = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            I = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            T = 35,
            b = Math.floor,
            S = String.fromCharCode;
        function A(e) {
            throw RangeError(I[e]);
        }
        function N(e, t) {
            for (var n = e.length, i = []; n--; ) i[n] = t(e[n]);
            return i;
        }
        function C(e, t) {
            var n = e.split('@'),
                i = '';
            return n.length > 1 && ((i = n[0] + '@'), (e = n[1])), i + N((e = e.replace(y, '.')).split('.'), t).join('.');
        }
        function R(e) {
            for (var t, n, i = [], r = 0, a = e.length; r < a; ) (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < a ? ((64512 & (n = e.charCodeAt(r++))) == 56320 ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--)) : i.push(t);
            return i;
        }
        function O(e) {
            return N(e, function (e) {
                var t = '';
                return e > 65535 && ((e -= 65536), (t += S(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += S(e));
            }).join('');
        }
        function D(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : c;
        }
        function L(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function x(e, t, n) {
            var i = 0;
            for (e = n ? b(e / p) : e >> 1, e += b(e / t); e > (T * f) >> 1; i += c) e = b(e / T);
            return b(i + ((T + 1) * e) / (e + _));
        }
        function w(e) {
            var t,
                n,
                i,
                r,
                a,
                s,
                o,
                l,
                _,
                p,
                E = [],
                v = e.length,
                y = 0,
                I = m,
                T = h;
            for ((n = e.lastIndexOf(g)) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && A('not-basic'), E.push(e.charCodeAt(i));
            for (r = n > 0 ? n + 1 : 0; r < v; ) {
                for (a = y, s = 1, o = c; r >= v && A('invalid-input'), ((l = D(e.charCodeAt(r++))) >= c || l > b((u - y) / s)) && A('overflow'), (y += l * s), !(l < (_ = o <= T ? d : o >= T + f ? f : o - T)); o += c) s > b(u / (p = c - _)) && A('overflow'), (s *= p);
                (T = x(y - a, (t = E.length + 1), 0 == a)), b(y / t) > u - I && A('overflow'), (I += b(y / t)), (y %= t), E.splice(y++, 0, I);
            }
            return O(E);
        }
        function P(e) {
            var t,
                n,
                i,
                r,
                a,
                s,
                o,
                l,
                _,
                p,
                E,
                v,
                y,
                I,
                T,
                N = [];
            for (s = 0, v = (e = R(e)).length, t = m, n = 0, a = h; s < v; ++s) (E = e[s]) < 128 && N.push(S(E));
            for (i = r = N.length, r && N.push(g); i < v; ) {
                for (o = u, s = 0; s < v; ++s) (E = e[s]) >= t && E < o && (o = E);
                for (o - t > b((u - n) / (y = i + 1)) && A('overflow'), n += (o - t) * y, t = o, s = 0; s < v; ++s)
                    if (((E = e[s]) < t && ++n > u && A('overflow'), E == t)) {
                        for (l = n, _ = c; !(l < (p = _ <= a ? d : _ >= a + f ? f : _ - a)); _ += c) (T = l - p), (I = c - p), N.push(S(L(p + (T % I), 0))), (l = b(T / I));
                        N.push(S(L(l, 0))), (a = x(n, y, i == r)), (n = 0), ++i;
                    }
                ++n, ++t;
            }
            return N.join('');
        }
        function M(e) {
            return C(e, function (e) {
                return E.test(e) ? w(e.slice(4).toLowerCase()) : e;
            });
        }
        function k(e) {
            return C(e, function (e) {
                return v.test(e) ? 'xn--' + P(e) : e;
            });
        }
        if (
            ((o = {
                version: '1.4.1',
                ucs2: {
                    decode: R,
                    encode: O
                },
                decode: w,
                encode: P,
                toASCII: k,
                toUnicode: M
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return o;
            });
        else if (r && a) {
            if (e.exports == r) a.exports = o;
            else for (l in o) o.hasOwnProperty(l) && (r[l] = o[l]);
        } else i.punycode = o;
    })(this);
