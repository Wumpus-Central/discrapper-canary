(e = r.nmd(e)),
    !(function (i) {
        var a = n && !n.nodeType && n,
            o = e && !e.nodeType && e,
            s = 'object' == typeof r.g && r.g;
        (s.global === s || s.window === s || s.self === s) && (i = s);
        var l,
            u,
            c = 2147483647,
            d = 36,
            f = 1,
            p = 26,
            h = 38,
            _ = 700,
            m = 72,
            g = 128,
            E = '-',
            v = /^xn--/,
            y = /[^\x20-\x7E]/,
            b = /[\x2E\u3002\uFF0E\uFF61]/g,
            I = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            T = 35,
            S = Math.floor,
            A = String.fromCharCode;
        function C(e) {
            throw RangeError(I[e]);
        }
        function N(e, n) {
            for (var r = e.length, i = []; r--; ) i[r] = n(e[r]);
            return i;
        }
        function R(e, n) {
            var r = e.split('@'),
                i = '';
            return r.length > 1 && ((i = r[0] + '@'), (e = r[1])), i + N((e = e.replace(b, '.')).split('.'), n).join('.');
        }
        function O(e) {
            for (var n, r, i = [], a = 0, o = e.length; a < o; ) (n = e.charCodeAt(a++)) >= 55296 && n <= 56319 && a < o ? ((64512 & (r = e.charCodeAt(a++))) == 56320 ? i.push(((1023 & n) << 10) + (1023 & r) + 65536) : (i.push(n), a--)) : i.push(n);
            return i;
        }
        function D(e) {
            return N(e, function (e) {
                var n = '';
                return e > 65535 && ((e -= 65536), (n += A(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (n += A(e));
            }).join('');
        }
        function L(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : d;
        }
        function x(e, n) {
            return e + 22 + 75 * (e < 26) - ((0 != n) << 5);
        }
        function w(e, n, r) {
            var i = 0;
            for (e = r ? S(e / _) : e >> 1, e += S(e / n); e > (T * p) >> 1; i += d) e = S(e / T);
            return S(i + ((T + 1) * e) / (e + h));
        }
        function P(e) {
            var n,
                r,
                i,
                a,
                o,
                s,
                l,
                u,
                h,
                _,
                v = [],
                y = e.length,
                b = 0,
                I = g,
                T = m;
            for ((r = e.lastIndexOf(E)) < 0 && (r = 0), i = 0; i < r; ++i) e.charCodeAt(i) >= 128 && C('not-basic'), v.push(e.charCodeAt(i));
            for (a = r > 0 ? r + 1 : 0; a < y; ) {
                for (o = b, s = 1, l = d; a >= y && C('invalid-input'), ((u = L(e.charCodeAt(a++))) >= d || u > S((c - b) / s)) && C('overflow'), (b += u * s), !(u < (h = l <= T ? f : l >= T + p ? p : l - T)); l += d) {
                    s > S(c / (_ = d - h)) && C('overflow'), (s *= _);
                }
                (T = w(b - o, (n = v.length + 1), 0 == o)), S(b / n) > c - I && C('overflow'), (I += S(b / n)), (b %= n), v.splice(b++, 0, I);
            }
            return D(v);
        }
        function M(e) {
            var n,
                r,
                i,
                a,
                o,
                s,
                l,
                u,
                h,
                _,
                v,
                y,
                b,
                I,
                T,
                N = [];
            for (s = 0, y = (e = O(e)).length, n = g, r = 0, o = m; s < y; ++s) (v = e[s]) < 128 && N.push(A(v));
            for (i = a = N.length, a && N.push(E); i < y; ) {
                for (l = c, s = 0; s < y; ++s) (v = e[s]) >= n && v < l && (l = v);
                for (l - n > S((c - r) / (b = i + 1)) && C('overflow'), r += (l - n) * b, n = l, s = 0; s < y; ++s)
                    if (((v = e[s]) < n && ++r > c && C('overflow'), v == n)) {
                        for (u = r, h = d; !(u < (_ = h <= o ? f : h >= o + p ? p : h - o)); h += d) {
                            (T = u - _), (I = d - _), N.push(A(x(_ + (T % I), 0))), (u = S(T / I));
                        }
                        N.push(A(x(u, 0))), (o = w(r, b, i == a)), (r = 0), ++i;
                    }
                ++r, ++n;
            }
            return N.join('');
        }
        function k(e) {
            return R(e, function (e) {
                return v.test(e) ? P(e.slice(4).toLowerCase()) : e;
            });
        }
        function U(e) {
            return R(e, function (e) {
                return y.test(e) ? 'xn--' + M(e) : e;
            });
        }
        if (
            ((l = {
                version: '1.4.1',
                ucs2: {
                    decode: O,
                    encode: D
                },
                decode: P,
                encode: M,
                toASCII: U,
                toUnicode: k
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return l;
            });
        else if (a && o) {
            if (e.exports == a) o.exports = l;
            else for (u in l) l.hasOwnProperty(u) && (a[u] = l[u]);
        } else i.punycode = l;
    })(this);
