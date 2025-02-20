(e = n.nmd(e)),
    (function (r) {
        var i = t && !t.nodeType && t,
            o = e && !e.nodeType && e,
            a = 'object' == typeof n.g && n.g;
        (a.global === a || a.window === a || a.self === a) && (r = a);
        var s,
            l,
            c = 2147483647,
            u = 36,
            d = 1,
            f = 26,
            p = 38,
            _ = 700,
            h = 72,
            m = 128,
            g = '-',
            E = /^xn--/,
            v = /[^\x20-\x7E]/,
            b = /[\x2E\u3002\uFF0E\uFF61]/g,
            y = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            O = 35,
            S = Math.floor,
            I = String.fromCharCode;
        function T(e) {
            throw RangeError(y[e]);
        }
        function N(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function A(e, t) {
            var n = e.split('@'),
                r = '';
            return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + N((e = e.replace(b, '.')).split('.'), t).join('.');
        }
        function C(e) {
            for (var t, n, r = [], i = 0, o = e.length; i < o; ) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? ((64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
            return r;
        }
        function R(e) {
            return N(e, function (e) {
                var t = '';
                return e > 65535 && ((e -= 65536), (t += I(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += I(e));
            }).join('');
        }
        function P(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : u;
        }
        function w(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function D(e, t, n) {
            var r = 0;
            for (e = n ? S(e / _) : e >> 1, e += S(e / t); e > (O * f) >> 1; r += u) e = S(e / O);
            return S(r + ((O + 1) * e) / (e + p));
        }
        function x(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l,
                p,
                _,
                E = [],
                v = e.length,
                b = 0,
                y = m,
                O = h;
            for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && T('not-basic'), E.push(e.charCodeAt(r));
            for (i = n > 0 ? n + 1 : 0; i < v; ) {
                for (o = b, a = 1, s = u; i >= v && T('invalid-input'), ((l = P(e.charCodeAt(i++))) >= u || l > S((c - b) / a)) && T('overflow'), (b += l * a), !(l < (p = s <= O ? d : s >= O + f ? f : s - O)); s += u) a > S(c / (_ = u - p)) && T('overflow'), (a *= _);
                (O = D(b - o, (t = E.length + 1), 0 == o)), S(b / t) > c - y && T('overflow'), (y += S(b / t)), (b %= t), E.splice(b++, 0, y);
            }
            return R(E);
        }
        function L(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l,
                p,
                _,
                E,
                v,
                b,
                y,
                O,
                N = [];
            for (a = 0, v = (e = C(e)).length, t = m, n = 0, o = h; a < v; ++a) (E = e[a]) < 128 && N.push(I(E));
            for (r = i = N.length, i && N.push(g); r < v; ) {
                for (s = c, a = 0; a < v; ++a) (E = e[a]) >= t && E < s && (s = E);
                for (s - t > S((c - n) / (b = r + 1)) && T('overflow'), n += (s - t) * b, t = s, a = 0; a < v; ++a)
                    if (((E = e[a]) < t && ++n > c && T('overflow'), E == t)) {
                        for (l = n, p = u; !(l < (_ = p <= o ? d : p >= o + f ? f : p - o)); p += u) (O = l - _), (y = u - _), N.push(I(w(_ + (O % y), 0))), (l = S(O / y));
                        N.push(I(w(l, 0))), (o = D(n, b, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return N.join('');
        }
        function M(e) {
            return A(e, function (e) {
                return E.test(e) ? x(e.slice(4).toLowerCase()) : e;
            });
        }
        function k(e) {
            return A(e, function (e) {
                return v.test(e) ? 'xn--' + L(e) : e;
            });
        }
        if (
            ((s = {
                version: '1.4.1',
                ucs2: {
                    decode: C,
                    encode: R
                },
                decode: x,
                encode: L,
                toASCII: k,
                toUnicode: M
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return s;
            });
        else if (i && o) {
            if (e.exports == i) o.exports = s;
            else for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
        } else r.punycode = s;
    })(this);
