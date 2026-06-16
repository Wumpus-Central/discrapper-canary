"use strict";
n.r(t), n.d(t, { default: () => a });
var i = n(575223),
    r = n(618027),
    s = n(998280);
function a(e, t) {
    (0, r.A)(1, arguments);
    var n,
        a,
        m,
        g = (0, s.A)(null != (n = null == t ? void 0 : t.additionalDigits) ? n : 2);
    if (2 !== g && 1 !== g && 0 !== g) throw RangeError("additionalDigits must be 0, 1 or 2");
    if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e)) return new Date(NaN);
    var A = (function (e) {
        var t,
            n = {},
            i = e.split(o);
        if (i.length > 2) return n;
        if (
            (/:/.test(i[0])
                ? (t = i[0])
                : ((n.date = i[0]),
                  (t = i[1]),
                  l.test(n.date) && ((n.date = e.split(l)[0]), (t = e.substr(n.date.length, e.length)))),
            t)
        ) {
            var r = u.exec(t);
            r ? ((n.time = t.replace(r[1], "")), (n.timezone = r[1])) : (n.time = t);
        }
        return n;
    })(e);
    if (A.date) {
        var I = (function (e, t) {
            var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
                i = e.match(n);
            if (!i) return { year: NaN, restDateString: "" };
            var r = i[1] ? parseInt(i[1]) : null,
                s = i[2] ? parseInt(i[2]) : null;
            return { year: null === s ? r : 100 * s, restDateString: e.slice((i[1] || i[2]).length) };
        })(A.date, g);
        a = (function (e, t) {
            if (null === t) return new Date(NaN);
            var n,
                i,
                r,
                s,
                a,
                o,
                l,
                u,
                d,
                _,
                f,
                m,
                g = e.match(c);
            if (!g) return new Date(NaN);
            var A = !!g[4],
                I = h(g[1]),
                T = h(g[2]) - 1,
                S = h(g[3]),
                y = h(g[4]),
                C = h(g[5]) - 1;
            if (A) {
                return ((n = y), (i = C), n >= 1 && n <= 53 && i >= 0 && i <= 6)
                    ? ((r = t),
                      (s = y),
                      (a = C),
                      (o = new Date(0)).setUTCFullYear(r, 0, 4),
                      (l = o.getUTCDay() || 7),
                      o.setUTCDate(o.getUTCDate() + ((s - 1) * 7 + a + 1 - l)),
                      o)
                    : new Date(NaN);
            }
            var N = new Date(0);
            return ((u = t),
            (d = T),
            (_ = S),
            d >= 0 &&
                d <= 11 &&
                _ >= 1 &&
                _ <= (p[d] || (E(u) ? 29 : 28)) &&
                ((f = t), (m = I) >= 1 && m <= (E(f) ? 366 : 365)))
                ? (N.setUTCFullYear(t, T, Math.max(I, S)), N)
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
                    r,
                    s = e.match(d);
                if (!s) return NaN;
                var a = f(s[1]),
                    o = f(s[2]),
                    l = f(s[3]);
                return ((t = a),
                (n = o),
                (r = l),
                24 === t ? 0 === n && 0 === r : r >= 0 && r < 60 && n >= 0 && n < 60 && t >= 0 && t < 25)
                    ? a * i.s0 + o * i.Cg + 1e3 * l
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
                    var r = "+" === n[1] ? -1 : 1,
                        s = parseInt(n[2]),
                        a = (n[3] && parseInt(n[3])) || 0;
                    return (t = a) >= 0 && t <= 59 ? r * (s * i.s0 + a * i.Cg) : NaN;
                })(A.timezone)),
            )
        )
            return new Date(NaN);
    } else {
        var y = new Date(T + S),
            C = new Date(0);
        return (
            C.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()),
            C.setHours(y.getUTCHours(), y.getUTCMinutes(), y.getUTCSeconds(), y.getUTCMilliseconds()),
            C
        );
    }
    return new Date(T + S + m);
}
var o = /[T ]/,
    l = /[Z ]/i,
    u = /([Z+-].*)$/,
    c = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    d = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    _ = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function h(e) {
    return e ? parseInt(e) : 1;
}
function f(e) {
    return (e && parseFloat(e.replace(",", "."))) || 0;
}
var p = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function E(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
