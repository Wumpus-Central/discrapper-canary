n.r(t),
    n.d(t, {
        default: () => s,
    });
var r = n(575223),
    i = n(618027),
    a = n(998280);

function s(e, t) {
    (0, i.A)(1, arguments);
    var n,
        r,
        s,
        o = (0, a.A)(null != (n = null == t ? void 0 : t.additionalDigits) ? n : 2);
    if (2 !== o && 1 !== o && 0 !== o) throw RangeError("additionalDigits must be 0, 1 or 2");
    if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e)) return new Date(NaN);
    var l = p(e);
    if (l.date) {
        var c = _(l.date, o);
        r = h(c.restDateString, c.year);
    }
    if (!r || isNaN(r.getTime())) return new Date(NaN);
    var u = r.getTime(),
        d = 0;
    if (l.time && isNaN((d = g(l.time)))) return new Date(NaN);
    if (l.timezone) {
        if (isNaN((s = b(l.timezone)))) return new Date(NaN);
    } else {
        var f = new Date(u + d),
            m = new Date(0);
        return (
            m.setFullYear(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate()),
            m.setHours(f.getUTCHours(), f.getUTCMinutes(), f.getUTCSeconds(), f.getUTCMilliseconds()),
            m
        );
    }
    return new Date(u + d + s);
}
var o = /[T ]/,
    l = /[Z ]/i,
    c = /([Z+-].*)$/,
    u = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    d = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    f = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function p(e) {
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
        var i = c.exec(t);
        i ? ((n.time = t.replace(i[1], "")), (n.timezone = i[1])) : (n.time = t);
    }
    return n;
}

function _(e, t) {
    var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
        r = e.match(n);
    if (!r)
        return {
            year: NaN,
            restDateString: "",
        };
    var i = r[1] ? parseInt(r[1]) : null,
        a = r[2] ? parseInt(r[2]) : null;
    return {
        year: null === a ? i : 100 * a,
        restDateString: e.slice((r[1] || r[2]).length),
    };
}

function h(e, t) {
    if (null === t) return new Date(NaN);
    var n = e.match(u);
    if (!n) return new Date(NaN);
    var r = !!n[4],
        i = m(n[1]),
        a = m(n[2]) - 1,
        s = m(n[3]),
        o = m(n[4]),
        l = m(n[5]) - 1;
    if (r) return I(t, o, l) ? y(t, o, l) : new Date(NaN);
    var c = new Date(0);
    return v(t, a, s) && S(t, i) ? (c.setUTCFullYear(t, a, Math.max(i, s)), c) : new Date(NaN);
}

function m(e) {
    return e ? parseInt(e) : 1;
}

function g(e) {
    var t = e.match(d);
    if (!t) return NaN;
    var n = E(t[1]),
        i = E(t[2]),
        a = E(t[3]);
    return T(n, i, a) ? n * r.s0 + i * r.Cg + 1e3 * a : NaN;
}

function E(e) {
    return (e && parseFloat(e.replace(",", "."))) || 0;
}

function b(e) {
    if ("Z" === e) return 0;
    var t = e.match(f);
    if (!t) return 0;
    var n = "+" === t[1] ? -1 : 1,
        i = parseInt(t[2]),
        a = (t[3] && parseInt(t[3])) || 0;
    return C(i, a) ? n * (i * r.s0 + a * r.Cg) : NaN;
}

function y(e, t, n) {
    var r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    var i = (t - 1) * 7 + n + 1 - (r.getUTCDay() || 7);
    return r.setUTCDate(r.getUTCDate() + i), r;
}
var O = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function A(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}

function v(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (O[t] || (A(e) ? 29 : 28));
}

function S(e, t) {
    return t >= 1 && t <= (A(e) ? 366 : 365);
}

function I(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}

function T(e, t, n) {
    return 24 === e ? 0 === t && 0 === n : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}

function C(e, t) {
    return t >= 0 && t <= 59;
}
