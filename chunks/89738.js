(e = r.nmd(e)),
    (function (n) {
        var o = t && !t.nodeType && t,
            i = e && !e.nodeType && e,
            a = "object" == typeof r.g && r.g;
        (a.global === a || a.window === a || a.self === a) && (n = a);
        var s,
            l,
            u = /^xn--/,
            c = /[^\x20-\x7E]/,
            f = /[\x2E\u3002\uFF0E\uFF61]/g,
            p = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
            },
            d = Math.floor,
            h = String.fromCharCode;
        function m(e) {
            throw RangeError(p[e]);
        }
        function v(e, t) {
            for (var r = e.length, n = []; r--; ) n[r] = t(e[r]);
            return n;
        }
        function y(e, t) {
            var r = e.split("@"),
                n = "";
            return (
                r.length > 1 && ((n = r[0] + "@"), (e = r[1])), n + v((e = e.replace(f, ".")).split("."), t).join(".")
            );
        }
        function g(e) {
            for (var t, r, n = [], o = 0, i = e.length; o < i; )
                (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
                    ? (64512 & (r = e.charCodeAt(o++))) == 56320
                        ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
                        : (n.push(t), o--)
                    : n.push(t);
            return n;
        }
        function b(e) {
            return v(e, function (e) {
                var t = "";
                return (
                    e > 65535 && ((e -= 65536), (t += h(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
                    (t += h(e))
                );
            }).join("");
        }
        function w(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function _(e, t, r) {
            var n = 0;
            for (e = r ? d(e / 700) : e >> 1, e += d(e / t); e > 455; n += 36) e = d(e / 35);
            return d(n + (36 * e) / (e + 38));
        }
        function S(e) {
            var t,
                r,
                n,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                f,
                p = [],
                h = e.length,
                v = 0,
                y = 128,
                g = 72;
            for ((n = e.lastIndexOf("-")) < 0 && (n = 0), o = 0; o < n; ++o)
                e.charCodeAt(o) >= 128 && m("not-basic"), p.push(e.charCodeAt(o));
            for (i = n > 0 ? n + 1 : 0; i < h; ) {
                for (
                    a = v, s = 1, l = 36;
                    i >= h && m("invalid-input"),
                        ((u =
                            (t = e.charCodeAt(i++)) - 48 < 10
                                ? t - 22
                                : t - 65 < 26
                                  ? t - 65
                                  : t - 97 < 26
                                    ? t - 97
                                    : 36) >= 36 ||
                            u > d((0x7fffffff - v) / s)) &&
                            m("overflow"),
                        (v += u * s),
                        !(u < (c = l <= g ? 1 : l >= g + 26 ? 26 : l - g));
                    l += 36
                ) {
                    s > d(0x7fffffff / (f = 36 - c)) && m("overflow"), (s *= f);
                }
                (g = _(v - a, (r = p.length + 1), 0 == a)),
                    d(v / r) > 0x7fffffff - y && m("overflow"),
                    (y += d(v / r)),
                    (v %= r),
                    p.splice(v++, 0, y);
            }
            return b(p);
        }
        function x(e) {
            var t,
                r,
                n,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                f,
                p,
                v,
                y,
                b,
                S = [];
            for (a = 0, p = (e = g(e)).length, t = 128, r = 0, i = 72; a < p; ++a) (f = e[a]) < 128 && S.push(h(f));
            for (n = o = S.length, o && S.push("-"); n < p; ) {
                for (s = 0x7fffffff, a = 0; a < p; ++a) (f = e[a]) >= t && f < s && (s = f);
                for (
                    s - t > d((0x7fffffff - r) / (v = n + 1)) && m("overflow"), r += (s - t) * v, t = s, a = 0;
                    a < p;
                    ++a
                )
                    if (((f = e[a]) < t && ++r > 0x7fffffff && m("overflow"), f == t)) {
                        for (l = r, u = 36; !(l < (c = u <= i ? 1 : u >= i + 26 ? 26 : u - i)); u += 36)
                            (b = l - c), (y = 36 - c), S.push(h(w(c + (b % y), 0))), (l = d(b / y));
                        S.push(h(w(l, 0))), (i = _(r, v, n == o)), (r = 0), ++n;
                    }
                ++r, ++t;
            }
            return S.join("");
        }
        if (
            ((s = {
                version: "1.4.1",
                ucs2: { decode: g, encode: b },
                decode: S,
                encode: x,
                toASCII: function (e) {
                    return y(e, function (e) {
                        return c.test(e) ? "xn--" + x(e) : e;
                    });
                },
                toUnicode: function (e) {
                    return y(e, function (e) {
                        return u.test(e) ? S(e.slice(4).toLowerCase()) : e;
                    });
                },
            }),
            "function" == typeof define && "object" == typeof define.amd && define.amd)
        )
            define("punycode", function () {
                return s;
            });
        else if (o && i)
            if (e.exports == o) i.exports = s;
            else for (l in s) s.hasOwnProperty(l) && (o[l] = s[l]);
        else n.punycode = s;
    })(this);
