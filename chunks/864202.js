"use strict";
n.r(t), n.d(t, { default: () => a });
var r = n(575223),
    i = n(618027),
    s = n(998280);
function a(e, t) {
    (0, i.A)(1, arguments);
    var n,
        a,
        m,
        g = (0, s.A)(null != (n = null == t ? void 0 : t.additionalDigits) ? n : 2);
    if (2 !== g && 1 !== g && 0 !== g) throw RangeError("additionalDigits must be 0, 1 or 2");
    if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e)) return new Date(NaN);
    var A = (function (e) {
        var t,
            n = {},
            r = e.split(o);
        if (r.length > 2) return n;
        if (
            (/:/.test(r[0])
                ? (t = r[0])
                : ((n.date = r[0]),
                  (t = r[1]),
                  l.test(n.date) && ((n.date = e.split(l)[0]), (t = e.substr(n.date.length, e.length)))),
            t)
        ) {
            var i = u.exec(t);
            i ? ((n.time = t.replace(i[1], "")), (n.timezone = i[1])) : (n.time = t);
        }
        return n;
    })(e);
    if (A.date) {
        var I = (function (e, t) {
            var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
                r = e.match(n);
            if (!r) return { year: NaN, restDateString: "" };
            var i = r[1] ? parseInt(r[1]) : null,
                s = r[2] ? parseInt(r[2]) : null;
            return { year: null === s ? i : 100 * s, restDateString: e.slice((r[1] || r[2]).length) };
        })(A.date, g);
        a = (function (e, t) {
            if (null === t) return new Date(NaN);
            var n,
                r,
                i,
                s,
                a,
                o,
                l,
                u,
                c,
                _,
                E,
                m,
                g = e.match(d);
            if (!g) return new Date(NaN);
            var A = !!g[4],
                I = f(g[1]),
                T = f(g[2]) - 1,
                S = f(g[3]),
                y = f(g[4]),
                N = f(g[5]) - 1;
            if (A) {
                return ((n = y), (r = N), n >= 1 && n <= 53 && r >= 0 && r <= 6)
                    ? ((i = t),
                      (s = y),
                      (a = N),
                      (o = new Date(0)).setUTCFullYear(i, 0, 4),
                      (l = o.getUTCDay() || 7),
                      o.setUTCDate(o.getUTCDate() + ((s - 1) * 7 + a + 1 - l)),
                      o)
                    : new Date(NaN);
            }
            var O = new Date(0);
            return ((u = t),
            (c = T),
            (_ = S),
            c >= 0 &&
                c <= 11 &&
                _ >= 1 &&
                _ <= (h[c] || (p(u) ? 29 : 28)) &&
                ((E = t), (m = I) >= 1 && m <= (p(E) ? 366 : 365)))
                ? (O.setUTCFullYear(t, T, Math.max(I, S)), O)
                : new Date(NaN);
        })(I.restDateString, I.year);
    }
    if (!a || isNaN(a.getTime())) return new Date(NaN);
    var T = a.getTime(),
        S = 0;
    if (
        A.time &&
        isNaN(
            (S = (function (e) {
                var t,
                    n,
                    i,
                    s = e.match(c);
                if (!s) return NaN;
                var a = E(s[1]),
                    o = E(s[2]),
                    l = E(s[3]);
                return ((t = a),
                (n = o),
                (i = l),
                24 === t ? 0 === n && 0 === i : i >= 0 && i < 60 && n >= 0 && n < 60 && t >= 0 && t < 25)
                    ? a * r.s0 + o * r.Cg + 1e3 * l
                    : NaN;
            })(A.time)),
        )
    )
        return new Date(NaN);
    if (A.timezone) {
        if (
            isNaN(
                (m = (function (e) {
                    if ("Z" === e) return 0;
                    var t,
                        n = e.match(_);
                    if (!n) return 0;
                    var i = "+" === n[1] ? -1 : 1,
                        s = parseInt(n[2]),
                        a = (n[3] && parseInt(n[3])) || 0;
                    return (t = a) >= 0 && t <= 59 ? i * (s * r.s0 + a * r.Cg) : NaN;
                })(A.timezone)),
            )
        )
            return new Date(NaN);
    } else {
        var y = new Date(T + S),
            N = new Date(0);
        return (
            N.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()),
            N.setHours(y.getUTCHours(), y.getUTCMinutes(), y.getUTCSeconds(), y.getUTCMilliseconds()),
            N
        );
    }
    return new Date(T + S + m);
}
var o = /[T ]/,
    l = /[Z ]/i,
    u = /([Z+-].*)$/,
    d = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    c = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    _ = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function f(e) {
    return e ? parseInt(e) : 1;
}
function E(e) {
    return (e && parseFloat(e.replace(",", "."))) || 0;
}
var h = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function p(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
