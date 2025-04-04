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
            _ = 38,
            p = 700,
            h = 72,
            m = 128,
            g = '-',
            E = /^xn--/,
            b = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            v = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input'
            },
            O = 35,
            I = Math.floor,
            S = String.fromCharCode;
        function T(e) {
            throw RangeError(v[e]);
        }
        function N(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function A(e, t) {
            var n = e.split('@'),
                r = '';
            return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + N((e = e.replace(y, '.')).split('.'), t).join('.');
        }
        function C(e) {
            for (var t, n, r = [], i = 0, o = e.length; i < o; ) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? ((64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
            return r;
        }
        function R(e) {
            return N(e, function (e) {
                var t = '';
                return e > 65535 && ((e -= 65536), (t += S(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += S(e));
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
            for (e = n ? I(e / p) : e >> 1, e += I(e / t); e > (O * f) >> 1; r += u) e = I(e / O);
            return I(r + ((O + 1) * e) / (e + _));
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
                _,
                p,
                E = [],
                b = e.length,
                y = 0,
                v = m,
                O = h;
            for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && T('not-basic'), E.push(e.charCodeAt(r));
            for (i = n > 0 ? n + 1 : 0; i < b; ) {
                for (o = y, a = 1, s = u; i >= b && T('invalid-input'), ((l = P(e.charCodeAt(i++))) >= u || l > I((c - y) / a)) && T('overflow'), (y += l * a), !(l < (_ = s <= O ? d : s >= O + f ? f : s - O)); s += u) a > I(c / (p = u - _)) && T('overflow'), (a *= p);
                (O = D(y - o, (t = E.length + 1), 0 == o)), I(y / t) > c - v && T('overflow'), (v += I(y / t)), (y %= t), E.splice(y++, 0, v);
            }
            return R(E);
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
                _,
                p,
                E,
                b,
                y,
                v,
                O,
                N = [];
            for (a = 0, b = (e = C(e)).length, t = m, n = 0, o = h; a < b; ++a) (E = e[a]) < 128 && N.push(S(E));
            for (r = i = N.length, i && N.push(g); r < b; ) {
                for (s = c, a = 0; a < b; ++a) (E = e[a]) >= t && E < s && (s = E);
                for (s - t > I((c - n) / (y = r + 1)) && T('overflow'), n += (s - t) * y, t = s, a = 0; a < b; ++a)
                    if (((E = e[a]) < t && ++n > c && T('overflow'), E == t)) {
                        for (l = n, _ = u; !(l < (p = _ <= o ? d : _ >= o + f ? f : _ - o)); _ += u) (O = l - p), (v = u - p), N.push(S(w(p + (O % v), 0))), (l = I(O / v));
                        N.push(S(w(l, 0))), (o = D(n, y, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return N.join('');
        }
        function M(e) {
            return A(e, function (e) {
                return E.test(e) ? L(e.slice(4).toLowerCase()) : e;
            });
        }
        function k(e) {
            return A(e, function (e) {
                return b.test(e) ? 'xn--' + x(e) : e;
            });
        }
        if (
            ((s = {
                version: '1.4.1',
                ucs2: {
                    decode: C,
                    encode: R
                },
                decode: L,
                encode: x,
                toASCII: k,
                toUnicode: M
            }),
            'function' == typeof define && 'object' == typeof define.amd && define.amd)
        )
            define('punycode', function () {
                return s;
            });
        else if (i && o)
            if (e.exports == i) o.exports = s;
            else for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
        else r.punycode = s;
    })(this);
