(e = n.nmd(e)),
    (function (r) {
        var i = t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            s = "object" == typeof n.g && n.g;
        (s.global === s || s.window === s || s.self === s) && (r = s);
        var o,
            l,
            u = 0x7fffffff,
            c = 36,
            d = 1,
            _ = 26,
            f = 38,
            p = 700,
            h = 72,
            m = 128,
            g = "-",
            E = /^xn--/,
            A = /[^\x20-\x7E]/,
            I = /[\x2E\u3002\uFF0E\uFF61]/g,
            T = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
            },
            y = 35,
            S = Math.floor,
            v = String.fromCharCode;
        function C(e) {
            throw RangeError(T[e]);
        }
        function b(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function N(e, t) {
            var n = e.split("@"),
                r = "";
            return (
                n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + b((e = e.replace(I, ".")).split("."), t).join(".")
            );
        }
        function R(e) {
            for (var t, n, r = [], i = 0, a = e.length; i < a; )
                (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a
                    ? (64512 & (n = e.charCodeAt(i++))) == 56320
                        ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                        : (r.push(t), i--)
                    : r.push(t);
            return r;
        }
        function O(e) {
            return b(e, function (e) {
                var t = "";
                return (
                    e > 65535 && ((e -= 65536), (t += v(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
                    (t += v(e))
                );
            }).join("");
        }
        function D(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : c;
        }
        function L(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function w(e, t, n) {
            var r = 0;
            for (e = n ? S(e / p) : e >> 1, e += S(e / t); e > (y * _) >> 1; r += c) e = S(e / y);
            return S(r + ((y + 1) * e) / (e + f));
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
                f,
                p,
                E = [],
                A = e.length,
                I = 0,
                T = m,
                y = h;
            for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r)
                e.charCodeAt(r) >= 128 && C("not-basic"), E.push(e.charCodeAt(r));
            for (i = n > 0 ? n + 1 : 0; i < A; ) {
                for (
                    a = I, s = 1, o = c;
                    i >= A && C("invalid-input"),
                        ((l = D(e.charCodeAt(i++))) >= c || l > S((u - I) / s)) && C("overflow"),
                        (I += l * s),
                        !(l < (f = o <= y ? d : o >= y + _ ? _ : o - y));
                    o += c
                )
                    s > S(u / (p = c - f)) && C("overflow"), (s *= p);
                (y = w(I - a, (t = E.length + 1), 0 == a)),
                    S(I / t) > u - T && C("overflow"),
                    (T += S(I / t)),
                    (I %= t),
                    E.splice(I++, 0, T);
            }
            return O(E);
        }
        function P(e) {
            var t,
                n,
                r,
                i,
                a,
                s,
                o,
                l,
                f,
                p,
                E,
                A,
                I,
                T,
                y,
                b = [];
            for (s = 0, A = (e = R(e)).length, t = m, n = 0, a = h; s < A; ++s) (E = e[s]) < 128 && b.push(v(E));
            for (r = i = b.length, i && b.push(g); r < A; ) {
                for (o = u, s = 0; s < A; ++s) (E = e[s]) >= t && E < o && (o = E);
                for (o - t > S((u - n) / (I = r + 1)) && C("overflow"), n += (o - t) * I, t = o, s = 0; s < A; ++s)
                    if (((E = e[s]) < t && ++n > u && C("overflow"), E == t)) {
                        for (l = n, f = c; !(l < (p = f <= a ? d : f >= a + _ ? _ : f - a)); f += c)
                            (y = l - p), (T = c - p), b.push(v(L(p + (y % T), 0))), (l = S(y / T));
                        b.push(v(L(l, 0))), (a = w(n, I, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return b.join("");
        }
        function M(e) {
            return N(e, function (e) {
                return E.test(e) ? x(e.slice(4).toLowerCase()) : e;
            });
        }
        function k(e) {
            return N(e, function (e) {
                return A.test(e) ? "xn--" + P(e) : e;
            });
        }
        if (
            ((o = { version: "1.4.1", ucs2: { decode: R, encode: O }, decode: x, encode: P, toASCII: k, toUnicode: M }),
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
