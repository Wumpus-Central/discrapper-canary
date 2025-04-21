(e = n.nmd(e)),
    (function (r) {
        var i = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            o = 'object' == typeof n.g && n.g;
        (o.global === o || o.window === o || o.self === o) && (r = o);
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
        function A(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function N(e, t) {
            var n = e.split('@'),
                r = '';
            return n.length > 1 && ((r = n[0] + '@'), (e = n[1])), r + A((e = e.replace(y, '.')).split('.'), t).join('.');
        }
        function C(e) {
            for (var t, n, r = [], i = 0, a = e.length; i < a; ) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? ((64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
            return r;
        }
        function R(e) {
            return A(e, function (e) {
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
                a,
                o,
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
                for (a = y, o = 1, s = u; i >= b && T('invalid-input'), ((l = P(e.charCodeAt(i++))) >= u || l > I((c - y) / o)) && T('overflow'), (y += l * o), !(l < (_ = s <= O ? d : s >= O + f ? f : s - O)); s += u) o > I(c / (p = u - _)) && T('overflow'), (o *= p);
                (O = D(y - a, (t = E.length + 1), 0 == a)), I(y / t) > c - v && T('overflow'), (v += I(y / t)), (y %= t), E.splice(y++, 0, v);
            }
            return R(E);
        }
        function x(e) {
            var t,
                n,
                r,
                i,
                a,
                o,
                s,
                l,
                _,
                p,
                E,
                b,
                y,
                v,
                O,
                A = [];
            for (o = 0, b = (e = C(e)).length, t = m, n = 0, a = h; o < b; ++o) (E = e[o]) < 128 && A.push(S(E));
            for (r = i = A.length, i && A.push(g); r < b; ) {
                for (s = c, o = 0; o < b; ++o) (E = e[o]) >= t && E < s && (s = E);
                for (s - t > I((c - n) / (y = r + 1)) && T('overflow'), n += (s - t) * y, t = s, o = 0; o < b; ++o)
                    if (((E = e[o]) < t && ++n > c && T('overflow'), E == t)) {
                        for (l = n, _ = u; !(l < (p = _ <= a ? d : _ >= a + f ? f : _ - a)); _ += u) (O = l - p), (v = u - p), A.push(S(w(p + (O % v), 0))), (l = I(O / v));
                        A.push(S(w(l, 0))), (a = D(n, y, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return A.join('');
        }
        function M(e) {
            return N(e, function (e) {
                return E.test(e) ? L(e.slice(4).toLowerCase()) : e;
            });
        }
        function k(e) {
            return N(e, function (e) {
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
        else if (i && a)
            if (e.exports == i) a.exports = s;
            else for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
        else r.punycode = s;
    })(this);
