"use strict";
r.r(t), r.d(t, { default: () => C });
var n = r(804552),
    s = r(128170),
    a = r(29583),
    o = r(618027),
    i = r(749805),
    u = r(216803),
    c = r(789316),
    l = r(564804);
function d(e, t) {
    for (var r = Math.abs(e).toString(); r.length < t; ) r = "0" + r;
    return (e < 0 ? "-" : "") + r;
}
let f = function (e, t) {
        var r = e.getUTCFullYear(),
            n = r > 0 ? r : 1 - r;
        return d("yy" === t ? n % 100 : n, t.length);
    },
    p = function (e, t) {
        var r = e.getUTCMonth();
        return "M" === t ? String(r + 1) : d(r + 1, 2);
    },
    h = function (e, t) {
        var r = t.length;
        return d(Math.floor(e.getUTCMilliseconds() * Math.pow(10, r - 3)), t.length);
    };
function m(e, t) {
    var r = e > 0 ? "-" : "+",
        n = Math.abs(e),
        s = Math.floor(n / 60),
        a = n % 60;
    return 0 === a ? r + String(s) : r + String(s) + (t || "") + d(a, 2);
}
function v(e, t) {
    return e % 60 == 0 ? (e > 0 ? "-" : "+") + d(Math.abs(e) / 60, 2) : g(e, t);
}
function g(e, t) {
    var r = Math.abs(e);
    return (e > 0 ? "-" : "+") + d(Math.floor(r / 60), 2) + (t || "") + d(r % 60, 2);
}
let y = {
    G: function (e, t, r) {
        var n = +(e.getUTCFullYear() > 0);
        switch (t) {
            case "G":
            case "GG":
            case "GGG":
                return r.era(n, { width: "abbreviated" });
            case "GGGGG":
                return r.era(n, { width: "narrow" });
            default:
                return r.era(n, { width: "wide" });
        }
    },
    y: function (e, t, r) {
        if ("yo" === t) {
            var n = e.getUTCFullYear();
            return r.ordinalNumber(n > 0 ? n : 1 - n, { unit: "year" });
        }
        return f(e, t);
    },
    Y: function (e, t, r, n) {
        var s = (0, l.A)(e, n),
            a = s > 0 ? s : 1 - s;
        return "YY" === t ? d(a % 100, 2) : "Yo" === t ? r.ordinalNumber(a, { unit: "year" }) : d(a, t.length);
    },
    R: function (e, t) {
        return d((0, u.A)(e), t.length);
    },
    u: function (e, t) {
        return d(e.getUTCFullYear(), t.length);
    },
    Q: function (e, t, r) {
        var n = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case "Q":
                return String(n);
            case "QQ":
                return d(n, 2);
            case "Qo":
                return r.ordinalNumber(n, { unit: "quarter" });
            case "QQQ":
                return r.quarter(n, { width: "abbreviated", context: "formatting" });
            case "QQQQQ":
                return r.quarter(n, { width: "narrow", context: "formatting" });
            default:
                return r.quarter(n, { width: "wide", context: "formatting" });
        }
    },
    q: function (e, t, r) {
        var n = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case "q":
                return String(n);
            case "qq":
                return d(n, 2);
            case "qo":
                return r.ordinalNumber(n, { unit: "quarter" });
            case "qqq":
                return r.quarter(n, { width: "abbreviated", context: "standalone" });
            case "qqqqq":
                return r.quarter(n, { width: "narrow", context: "standalone" });
            default:
                return r.quarter(n, { width: "wide", context: "standalone" });
        }
    },
    M: function (e, t, r) {
        var n = e.getUTCMonth();
        switch (t) {
            case "M":
            case "MM":
                return p(e, t);
            case "Mo":
                return r.ordinalNumber(n + 1, { unit: "month" });
            case "MMM":
                return r.month(n, { width: "abbreviated", context: "formatting" });
            case "MMMMM":
                return r.month(n, { width: "narrow", context: "formatting" });
            default:
                return r.month(n, { width: "wide", context: "formatting" });
        }
    },
    L: function (e, t, r) {
        var n = e.getUTCMonth();
        switch (t) {
            case "L":
                return String(n + 1);
            case "LL":
                return d(n + 1, 2);
            case "Lo":
                return r.ordinalNumber(n + 1, { unit: "month" });
            case "LLL":
                return r.month(n, { width: "abbreviated", context: "standalone" });
            case "LLLLL":
                return r.month(n, { width: "narrow", context: "standalone" });
            default:
                return r.month(n, { width: "wide", context: "standalone" });
        }
    },
    w: function (e, t, r, n) {
        var s = (0, c.A)(e, n);
        return "wo" === t ? r.ordinalNumber(s, { unit: "week" }) : d(s, t.length);
    },
    I: function (e, t, r) {
        var n = (0, i.A)(e);
        return "Io" === t ? r.ordinalNumber(n, { unit: "week" }) : d(n, t.length);
    },
    d: function (e, t, r) {
        var n, s;
        return "do" === t
            ? r.ordinalNumber(e.getUTCDate(), { unit: "date" })
            : ((n = e), (s = t), d(n.getUTCDate(), s.length));
    },
    D: function (e, t, r) {
        var n = (function (e) {
            (0, o.A)(1, arguments);
            var t = (0, a.default)(e),
                r = t.getTime();
            return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((r - t.getTime()) / 864e5) + 1;
        })(e);
        return "Do" === t ? r.ordinalNumber(n, { unit: "dayOfYear" }) : d(n, t.length);
    },
    E: function (e, t, r) {
        var n = e.getUTCDay();
        switch (t) {
            case "E":
            case "EE":
            case "EEE":
                return r.day(n, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
                return r.day(n, { width: "narrow", context: "formatting" });
            case "EEEEEE":
                return r.day(n, { width: "short", context: "formatting" });
            default:
                return r.day(n, { width: "wide", context: "formatting" });
        }
    },
    e: function (e, t, r, n) {
        var s = e.getUTCDay(),
            a = (s - n.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "e":
                return String(a);
            case "ee":
                return d(a, 2);
            case "eo":
                return r.ordinalNumber(a, { unit: "day" });
            case "eee":
                return r.day(s, { width: "abbreviated", context: "formatting" });
            case "eeeee":
                return r.day(s, { width: "narrow", context: "formatting" });
            case "eeeeee":
                return r.day(s, { width: "short", context: "formatting" });
            default:
                return r.day(s, { width: "wide", context: "formatting" });
        }
    },
    c: function (e, t, r, n) {
        var s = e.getUTCDay(),
            a = (s - n.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "c":
                return String(a);
            case "cc":
                return d(a, t.length);
            case "co":
                return r.ordinalNumber(a, { unit: "day" });
            case "ccc":
                return r.day(s, { width: "abbreviated", context: "standalone" });
            case "ccccc":
                return r.day(s, { width: "narrow", context: "standalone" });
            case "cccccc":
                return r.day(s, { width: "short", context: "standalone" });
            default:
                return r.day(s, { width: "wide", context: "standalone" });
        }
    },
    i: function (e, t, r) {
        var n = e.getUTCDay(),
            s = 0 === n ? 7 : n;
        switch (t) {
            case "i":
                return String(s);
            case "ii":
                return d(s, t.length);
            case "io":
                return r.ordinalNumber(s, { unit: "day" });
            case "iii":
                return r.day(n, { width: "abbreviated", context: "formatting" });
            case "iiiii":
                return r.day(n, { width: "narrow", context: "formatting" });
            case "iiiiii":
                return r.day(n, { width: "short", context: "formatting" });
            default:
                return r.day(n, { width: "wide", context: "formatting" });
        }
    },
    a: function (e, t, r) {
        var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
            case "a":
            case "aa":
                return r.dayPeriod(n, { width: "abbreviated", context: "formatting" });
            case "aaa":
                return r.dayPeriod(n, { width: "abbreviated", context: "formatting" }).toLowerCase();
            case "aaaaa":
                return r.dayPeriod(n, { width: "narrow", context: "formatting" });
            default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
        }
    },
    b: function (e, t, r) {
        var n,
            s = e.getUTCHours();
        switch (((n = 12 === s ? "noon" : 0 === s ? "midnight" : s / 12 >= 1 ? "pm" : "am"), t)) {
            case "b":
            case "bb":
                return r.dayPeriod(n, { width: "abbreviated", context: "formatting" });
            case "bbb":
                return r.dayPeriod(n, { width: "abbreviated", context: "formatting" }).toLowerCase();
            case "bbbbb":
                return r.dayPeriod(n, { width: "narrow", context: "formatting" });
            default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
        }
    },
    B: function (e, t, r) {
        var n,
            s = e.getUTCHours();
        switch (((n = s >= 17 ? "evening" : s >= 12 ? "afternoon" : s >= 4 ? "morning" : "night"), t)) {
            case "B":
            case "BB":
            case "BBB":
                return r.dayPeriod(n, { width: "abbreviated", context: "formatting" });
            case "BBBBB":
                return r.dayPeriod(n, { width: "narrow", context: "formatting" });
            default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
        }
    },
    h: function (e, t, r) {
        if ("ho" === t) {
            var n,
                s,
                a = e.getUTCHours() % 12;
            return 0 === a && (a = 12), r.ordinalNumber(a, { unit: "hour" });
        }
        return (n = e), (s = t), d(n.getUTCHours() % 12 || 12, s.length);
    },
    H: function (e, t, r) {
        var n, s;
        return "Ho" === t
            ? r.ordinalNumber(e.getUTCHours(), { unit: "hour" })
            : ((n = e), (s = t), d(n.getUTCHours(), s.length));
    },
    K: function (e, t, r) {
        var n = e.getUTCHours() % 12;
        return "Ko" === t ? r.ordinalNumber(n, { unit: "hour" }) : d(n, t.length);
    },
    k: function (e, t, r) {
        var n = e.getUTCHours();
        return (0 === n && (n = 24), "ko" === t) ? r.ordinalNumber(n, { unit: "hour" }) : d(n, t.length);
    },
    m: function (e, t, r) {
        var n, s;
        return "mo" === t
            ? r.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
            : ((n = e), (s = t), d(n.getUTCMinutes(), s.length));
    },
    s: function (e, t, r) {
        var n, s;
        return "so" === t
            ? r.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
            : ((n = e), (s = t), d(n.getUTCSeconds(), s.length));
    },
    S: function (e, t) {
        return h(e, t);
    },
    X: function (e, t, r, n) {
        var s = (n._originalDate || e).getTimezoneOffset();
        if (0 === s) return "Z";
        switch (t) {
            case "X":
                return v(s);
            case "XXXX":
            case "XX":
                return g(s);
            default:
                return g(s, ":");
        }
    },
    x: function (e, t, r, n) {
        var s = (n._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "x":
                return v(s);
            case "xxxx":
            case "xx":
                return g(s);
            default:
                return g(s, ":");
        }
    },
    O: function (e, t, r, n) {
        var s = (n._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + m(s, ":");
            default:
                return "GMT" + g(s, ":");
        }
    },
    z: function (e, t, r, n) {
        var s = (n._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + m(s, ":");
            default:
                return "GMT" + g(s, ":");
        }
    },
    t: function (e, t, r, n) {
        return d(Math.floor((n._originalDate || e).getTime() / 1e3), t.length);
    },
    T: function (e, t, r, n) {
        return d((n._originalDate || e).getTime(), t.length);
    },
};
var b = r(291048),
    _ = r(84776),
    x = r(368617),
    w = r(998280),
    k = r(98430),
    M = r(728898),
    S = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    L = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    T = /^'([^]*?)'?$/,
    E = /''/g,
    D = /[a-zA-Z]/;
function C(e, t, r) {
    (0, o.A)(2, arguments);
    var i,
        u,
        c,
        l,
        d,
        f,
        p,
        h,
        m,
        v,
        g,
        C,
        O,
        P,
        A,
        j,
        R,
        I,
        Y = String(t),
        N = (0, k.q)(),
        F = null != (i = null != (u = null == r ? void 0 : r.locale) ? u : N.locale) ? i : M.A,
        H = (0, w.A)(
            null !=
                (c =
                    null !=
                    (l =
                        null !=
                        (d =
                            null != (f = null == r ? void 0 : r.firstWeekContainsDate)
                                ? f
                                : null == r || null == (p = r.locale) || null == (h = p.options)
                                  ? void 0
                                  : h.firstWeekContainsDate)
                            ? d
                            : N.firstWeekContainsDate)
                        ? l
                        : null == (m = N.locale) || null == (v = m.options)
                          ? void 0
                          : v.firstWeekContainsDate)
                ? c
                : 1,
        );
    if (!(H >= 1 && H <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var z = (0, w.A)(
        null !=
            (g =
                null !=
                (C =
                    null !=
                    (O =
                        null != (P = null == r ? void 0 : r.weekStartsOn)
                            ? P
                            : null == r || null == (A = r.locale) || null == (j = A.options)
                              ? void 0
                              : j.weekStartsOn)
                        ? O
                        : N.weekStartsOn)
                    ? C
                    : null == (R = N.locale) || null == (I = R.options)
                      ? void 0
                      : I.weekStartsOn)
            ? g
            : 0,
    );
    if (!(z >= 0 && z <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!F.localize) throw RangeError("locale must contain localize property");
    if (!F.formatLong) throw RangeError("locale must contain formatLong property");
    var B = (0, a.default)(e);
    if (!(0, n.default)(B)) throw RangeError("Invalid time value");
    var U = (0, _.A)(B),
        W = (0, s.A)(B, U),
        $ = { firstWeekContainsDate: H, weekStartsOn: z, locale: F, _originalDate: B };
    return Y.match(L)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, b.A[t])(e, F.formatLong) : e;
        })
        .join("")
        .match(S)
        .map(function (n) {
            if ("''" === n) return "'";
            var s,
                a,
                o = n[0];
            if ("'" === o) {
                return (a = (s = n).match(T)) ? a[1].replace(E, "'") : s;
            }
            var i = y[o];
            if (i)
                return (
                    !(null != r && r.useAdditionalWeekYearTokens) && (0, x.xM)(n) && (0, x.lJ)(n, t, String(e)),
                    !(null != r && r.useAdditionalDayOfYearTokens) && (0, x.ef)(n) && (0, x.lJ)(n, t, String(e)),
                    i(W, n, F.localize, $)
                );
            if (o.match(D))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
            return n;
        })
        .join("");
}
