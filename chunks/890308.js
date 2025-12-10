(e = n.nmd(e)),
    (function (r) {
        var i = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            o = "object" == typeof n.g && n.g;
        (o.global === o || o.window === o || o.self === o) && (r = o);
        var s,
            l,
            c = 2147483647,
            u = 36,
            d = 1,
            f = 26,
            p = 38,
            _ = 700,
            m = 72,
            h = 128,
            g = "-",
            E = /^xn--/,
            b = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            O = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
            },
            v = 35,
            S = Math.floor,
            I = String.fromCharCode;
        function T(e) {
            throw RangeError(O[e]);
        }
        function C(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function A(e, t) {
            var n = e.split("@"),
                r = "";
            return (
                n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + C((e = e.replace(y, ".")).split("."), t).join(".")
            );
        }
        function N(e) {
            for (var t, n, r = [], i = 0, a = e.length; i < a; )
                (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a
                    ? (64512 & (n = e.charCodeAt(i++))) == 56320
                        ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                        : (r.push(t), i--)
                    : r.push(t);
            return r;
        }
        function P(e) {
            return C(e, function (e) {
                var t = "";
                return (
                    e > 65535 && ((e -= 65536), (t += I(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
                    (t += I(e))
                );
            }).join("");
        }
        function R(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : u;
        }
        function D(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function w(e, t, n) {
            var r = 0;
            for (e = n ? S(e / _) : e >> 1, e += S(e / t); e > (v * f) >> 1; r += u) e = S(e / v);
            return S(r + ((v + 1) * e) / (e + p));
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
                p,
                _,
                E = [],
                b = e.length,
                y = 0,
                O = h,
                v = m;
            for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r)
                e.charCodeAt(r) >= 128 && T("not-basic"), E.push(e.charCodeAt(r));
            for (i = n > 0 ? n + 1 : 0; i < b; ) {
                for (
                    a = y, o = 1, s = u;
                    i >= b && T("invalid-input"),
                        ((l = R(e.charCodeAt(i++))) >= u || l > S((c - y) / o)) && T("overflow"),
                        (y += l * o),
                        !(l < (p = s <= v ? d : s >= v + f ? f : s - v));
                    s += u
                )
                    o > S(c / (_ = u - p)) && T("overflow"), (o *= _);
                (v = w(y - a, (t = E.length + 1), 0 == a)),
                    S(y / t) > c - O && T("overflow"),
                    (O += S(y / t)),
                    (y %= t),
                    E.splice(y++, 0, O);
            }
            return P(E);
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
                p,
                _,
                E,
                b,
                y,
                O,
                v,
                C = [];
            for (o = 0, b = (e = N(e)).length, t = h, n = 0, a = m; o < b; ++o) (E = e[o]) < 128 && C.push(I(E));
            for (r = i = C.length, i && C.push(g); r < b; ) {
                for (s = c, o = 0; o < b; ++o) (E = e[o]) >= t && E < s && (s = E);
                for (s - t > S((c - n) / (y = r + 1)) && T("overflow"), n += (s - t) * y, t = s, o = 0; o < b; ++o)
                    if (((E = e[o]) < t && ++n > c && T("overflow"), E == t)) {
                        for (l = n, p = u; !(l < (_ = p <= a ? d : p >= a + f ? f : p - a)); p += u)
                            (v = l - _), (O = u - _), C.push(I(D(_ + (v % O), 0))), (l = S(v / O));
                        C.push(I(D(l, 0))), (a = w(n, y, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return C.join("");
        }
        function j(e) {
            return A(e, function (e) {
                return E.test(e) ? x(e.slice(4).toLowerCase()) : e;
            });
        }
        function M(e) {
            return A(e, function (e) {
                return b.test(e) ? "xn--" + L(e) : e;
            });
        }
        if (
            ((s = {
                version: "1.4.1",
                ucs2: {
                    decode: N,
                    encode: P,
                },
                decode: x,
                encode: L,
                toASCII: M,
                toUnicode: j,
            }),
            "function" == typeof define && "object" == typeof define.amd && define.amd)
        )
            define("punycode", function () {
                return s;
            });
        else if (i && a)
            if (e.exports == i) a.exports = s;
            else for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
        else r.punycode = s;
    })(this);
