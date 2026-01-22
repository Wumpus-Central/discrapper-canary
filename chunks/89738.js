(e = n.nmd(e)),
    (function (r) {
        var i = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            s = "object" == typeof n.g && n.g;
        (s.global === s || s.window === s || s.self === s) && (r = s);
        var o,
            l,
            c = 0x7fffffff,
            u = 36,
            d = 1,
            f = 26,
            p = 38,
            _ = 700,
            h = 72,
            m = 128,
            g = "-",
            E = /^xn--/,
            b = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            O = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
            },
            A = 35,
            v = Math.floor,
            S = String.fromCharCode;

        function I(e) {
            throw RangeError(O[e]);
        }

        function T(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }

        function C(e, t) {
            var n = e.split("@"),
                r = "";
            return (
                n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + T((e = e.replace(y, ".")).split("."), t).join(".")
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

        function R(e) {
            return T(e, function (e) {
                var t = "";
                return (
                    e > 65535 && ((e -= 65536), (t += S(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
                    (t += S(e))
                );
            }).join("");
        }

        function w(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : u;
        }

        function P(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }

        function D(e, t, n) {
            var r = 0;
            for (e = n ? v(e / _) : e >> 1, e += v(e / t); e > (A * f) >> 1; r += u) e = v(e / A);
            return v(r + ((A + 1) * e) / (e + p));
        }

        function x(e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                l,
                p,
                _,
                E = [],
                b = e.length,
                y = 0,
                O = m,
                A = h;
            for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r)
                e.charCodeAt(r) >= 128 && I("not-basic"), E.push(e.charCodeAt(r));
            for (i = n > 0 ? n + 1 : 0; i < b; ) {
                for (
                    a = y, s = 1, o = u;
                    i >= b && I("invalid-input"),
                        ((l = w(e.charCodeAt(i++))) >= u || l > v((c - y) / s)) && I("overflow"),
                        (y += l * s),
                        !(l < (p = o <= A ? d : o >= A + f ? f : o - A));
                    o += u
                )
                    s > v(c / (_ = u - p)) && I("overflow"), (s *= _);
                (A = D(y - a, (t = E.length + 1), 0 == a)),
                    v(y / t) > c - O && I("overflow"),
                    (O += v(y / t)),
                    (y %= t),
                    E.splice(y++, 0, O);
            }
            return R(E);
        }

        function L(e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                l,
                p,
                _,
                E,
                b,
                y,
                O,
                A,
                T = [];
            for (s = 0, b = (e = N(e)).length, t = m, n = 0, a = h; s < b; ++s) (E = e[s]) < 128 && T.push(S(E));
            for (r = i = T.length, i && T.push(g); r < b; ) {
                for (o = c, s = 0; s < b; ++s) (E = e[s]) >= t && E < o && (o = E);
                for (o - t > v((c - n) / (y = r + 1)) && I("overflow"), n += (o - t) * y, t = o, s = 0; s < b; ++s)
                    if (((E = e[s]) < t && ++n > c && I("overflow"), E == t)) {
                        for (l = n, p = u; !(l < (_ = p <= a ? d : p >= a + f ? f : p - a)); p += u)
                            (A = l - _), (O = u - _), T.push(S(P(_ + (A % O), 0))), (l = v(A / O));
                        T.push(S(P(l, 0))), (a = D(n, y, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return T.join("");
        }

        function j(e) {
            return C(e, function (e) {
                return E.test(e) ? x(e.slice(4).toLowerCase()) : e;
            });
        }

        function M(e) {
            return C(e, function (e) {
                return b.test(e) ? "xn--" + L(e) : e;
            });
        }
        if (
            ((o = {
                version: "1.4.1",
                ucs2: {
                    decode: N,
                    encode: R,
                },
                decode: x,
                encode: L,
                toASCII: M,
                toUnicode: j,
            }),
            "function" == typeof define && "object" == typeof define.amd && define.amd)
        )
            define("punycode", function () {
                return o;
            });
        else if (i && a)
            if (e.exports == i) a.exports = o;
            else for (l in o) o.hasOwnProperty(l) && (i[l] = o[l]);
        else r.punycode = o;
    })(this);
