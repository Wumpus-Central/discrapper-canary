(e = n.nmd(e)),
    (function (r) {
        var i = t && !t.nodeType && t,
            s = e && !e.nodeType && e,
            a = "object" == typeof n.g && n.g;
        (a.global === a || a.window === a || a.self === a) && (r = a);
        var o,
            l,
            u = /^xn--/,
            d = /[^\x20-\x7E]/,
            c = /[\x2E\u3002\uFF0E\uFF61]/g,
            _ = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
            },
            f = Math.floor,
            E = String.fromCharCode;
        function h(e) {
            throw RangeError(_[e]);
        }
        function p(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
        }
        function m(e, t) {
            var n = e.split("@"),
                r = "";
            return (
                n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + p((e = e.replace(c, ".")).split("."), t).join(".")
            );
        }
        function g(e) {
            for (var t, n, r = [], i = 0, s = e.length; i < s; )
                (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < s
                    ? (64512 & (n = e.charCodeAt(i++))) == 56320
                        ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                        : (r.push(t), i--)
                    : r.push(t);
            return r;
        }
        function A(e) {
            return p(e, function (e) {
                var t = "";
                return (
                    e > 65535 && ((e -= 65536), (t += E(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
                    (t += E(e))
                );
            }).join("");
        }
        function I(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function T(e, t, n) {
            var r = 0;
            for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; r += 36) e = f(e / 35);
            return f(r + (36 * e) / (e + 38));
        }
        function S(e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                d,
                c,
                _ = [],
                E = e.length,
                p = 0,
                m = 128,
                g = 72;
            for ((r = e.lastIndexOf("-")) < 0 && (r = 0), i = 0; i < r; ++i)
                e.charCodeAt(i) >= 128 && h("not-basic"), _.push(e.charCodeAt(i));
            for (s = r > 0 ? r + 1 : 0; s < E; ) {
                for (
                    a = p, o = 1, l = 36;
                    s >= E && h("invalid-input"),
                        ((u =
                            (t = e.charCodeAt(s++)) - 48 < 10
                                ? t - 22
                                : t - 65 < 26
                                  ? t - 65
                                  : t - 97 < 26
                                    ? t - 97
                                    : 36) >= 36 ||
                            u > f((0x7fffffff - p) / o)) &&
                            h("overflow"),
                        (p += u * o),
                        !(u < (d = l <= g ? 1 : l >= g + 26 ? 26 : l - g));
                    l += 36
                ) {
                    o > f(0x7fffffff / (c = 36 - d)) && h("overflow"), (o *= c);
                }
                (g = T(p - a, (n = _.length + 1), 0 == a)),
                    f(p / n) > 0x7fffffff - m && h("overflow"),
                    (m += f(p / n)),
                    (p %= n),
                    _.splice(p++, 0, m);
            }
            return A(_);
        }
        function y(e) {
            var t,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                d,
                c,
                _,
                p,
                m,
                A,
                S = [];
            for (a = 0, _ = (e = g(e)).length, t = 128, n = 0, s = 72; a < _; ++a) (c = e[a]) < 128 && S.push(E(c));
            for (r = i = S.length, i && S.push("-"); r < _; ) {
                for (o = 0x7fffffff, a = 0; a < _; ++a) (c = e[a]) >= t && c < o && (o = c);
                for (
                    o - t > f((0x7fffffff - n) / (p = r + 1)) && h("overflow"), n += (o - t) * p, t = o, a = 0;
                    a < _;
                    ++a
                )
                    if (((c = e[a]) < t && ++n > 0x7fffffff && h("overflow"), c == t)) {
                        for (l = n, u = 36; !(l < (d = u <= s ? 1 : u >= s + 26 ? 26 : u - s)); u += 36)
                            (A = l - d), (m = 36 - d), S.push(E(I(d + (A % m), 0))), (l = f(A / m));
                        S.push(E(I(l, 0))), (s = T(n, p, r == i)), (n = 0), ++r;
                    }
                ++n, ++t;
            }
            return S.join("");
        }
        if (
            ((o = {
                version: "1.4.1",
                ucs2: { decode: g, encode: A },
                decode: S,
                encode: y,
                toASCII: function (e) {
                    return m(e, function (e) {
                        return d.test(e) ? "xn--" + y(e) : e;
                    });
                },
                toUnicode: function (e) {
                    return m(e, function (e) {
                        return u.test(e) ? S(e.slice(4).toLowerCase()) : e;
                    });
                },
            }),
            "function" == typeof define && "object" == typeof define.amd && define.amd)
        )
            define("punycode", function () {
                return o;
            });
        else if (i && s)
            if (e.exports == i) s.exports = o;
            else for (l in o) o.hasOwnProperty(l) && (i[l] = o[l]);
        else r.punycode = o;
    })(this);
