"use strict";
r.r(t), r.d(t, { default: () => M });
var n = r(804552),
    a = r(128170),
    s = r(29583),
    i = r(618027),
    o = r(749805),
    l = r(216803),
    u = r(789316),
    c = r(564804);
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
        a = Math.floor(n / 60),
        s = n % 60;
    return 0 === s ? r + String(a) : r + String(a) + (t || "") + d(s, 2);
}
function _(e, t) {
    return e % 60 == 0 ? (e > 0 ? "-" : "+") + d(Math.abs(e) / 60, 2) : g(e, t);
}
function g(e, t) {
    var r = Math.abs(e);
    return (e > 0 ? "-" : "+") + d(Math.floor(r / 60), 2) + (t || "") + d(r % 60, 2);
}
let v = {
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
        var a = (0, c.A)(e, n),
            s = a > 0 ? a : 1 - a;
        return "YY" === t ? d(s % 100, 2) : "Yo" === t ? r.ordinalNumber(s, { unit: "year" }) : d(s, t.length);
    },
    R: function (e, t) {
        return d((0, l.A)(e), t.length);
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
        var a = (0, u.A)(e, n);
        return "wo" === t ? r.ordinalNumber(a, { unit: "week" }) : d(a, t.length);
    },
    I: function (e, t, r) {
        var n = (0, o.A)(e);
        return "Io" === t ? r.ordinalNumber(n, { unit: "week" }) : d(n, t.length);
    },
    d: function (e, t, r) {
        var n, a;
        return "do" === t
            ? r.ordinalNumber(e.getUTCDate(), { unit: "date" })
            : ((n = e), (a = t), d(n.getUTCDate(), a.length));
    },
    D: function (e, t, r) {
        var n = (function (e) {
            (0, i.A)(1, arguments);
            var t = (0, s.default)(e),
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
        var a = e.getUTCDay(),
            s = (a - n.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "e":
                return String(s);
            case "ee":
                return d(s, 2);
            case "eo":
                return r.ordinalNumber(s, { unit: "day" });
            case "eee":
                return r.day(a, { width: "abbreviated", context: "formatting" });
            case "eeeee":
                return r.day(a, { width: "narrow", context: "formatting" });
            case "eeeeee":
                return r.day(a, { width: "short", context: "formatting" });
            default:
                return r.day(a, { width: "wide", context: "formatting" });
        }
    },
    c: function (e, t, r, n) {
        var a = e.getUTCDay(),
            s = (a - n.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "c":
                return String(s);
            case "cc":
                return d(s, t.length);
            case "co":
                return r.ordinalNumber(s, { unit: "day" });
            case "ccc":
                return r.day(a, { width: "abbreviated", context: "standalone" });
            case "ccccc":
                return r.day(a, { width: "narrow", context: "standalone" });
            case "cccccc":
                return r.day(a, { width: "short", context: "standalone" });
            default:
                return r.day(a, { width: "wide", context: "standalone" });
        }
    },
    i: function (e, t, r) {
        var n = e.getUTCDay(),
            a = 0 === n ? 7 : n;
        switch (t) {
            case "i":
                return String(a);
            case "ii":
                return d(a, t.length);
            case "io":
                return r.ordinalNumber(a, { unit: "day" });
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
            a = e.getUTCHours();
        switch (((n = 12 === a ? "noon" : 0 === a ? "midnight" : a / 12 >= 1 ? "pm" : "am"), t)) {
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
            a = e.getUTCHours();
        switch (((n = a >= 17 ? "evening" : a >= 12 ? "afternoon" : a >= 4 ? "morning" : "night"), t)) {
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
                a,
                s = e.getUTCHours() % 12;
            return 0 === s && (s = 12), r.ordinalNumber(s, { unit: "hour" });
        }
        return (n = e), (a = t), d(n.getUTCHours() % 12 || 12, a.length);
    },
    H: function (e, t, r) {
        var n, a;
        return "Ho" === t
            ? r.ordinalNumber(e.getUTCHours(), { unit: "hour" })
            : ((n = e), (a = t), d(n.getUTCHours(), a.length));
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
        var n, a;
        return "mo" === t
            ? r.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
            : ((n = e), (a = t), d(n.getUTCMinutes(), a.length));
    },
    s: function (e, t, r) {
        var n, a;
        return "so" === t
            ? r.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
            : ((n = e), (a = t), d(n.getUTCSeconds(), a.length));
    },
    S: function (e, t) {
        return h(e, t);
    },
    X: function (e, t, r, n) {
        var a = (n._originalDate || e).getTimezoneOffset();
        if (0 === a) return "Z";
        switch (t) {
            case "X":
                return _(a);
            case "XXXX":
            case "XX":
                return g(a);
            default:
                return g(a, ":");
        }
    },
    x: function (e, t, r, n) {
        var a = (n._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "x":
                return _(a);
            case "xxxx":
            case "xx":
                return g(a);
            default:
                return g(a, ":");
        }
    },
    O: function (e, t, r, n) {
        var a = (n._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + m(a, ":");
            default:
                return "GMT" + g(a, ":");
        }
    },
    z: function (e, t, r, n) {
        var a = (n._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + m(a, ":");
            default:
                return "GMT" + g(a, ":");
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
    y = r(84776),
    E = r(368617),
    S = r(998280),
    T = r(98430),
    x = r(728898),
    w = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    C = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    D = /^'([^]*?)'?$/,
    O = /''/g,
    A = /[a-zA-Z]/;
function M(e, t, r) {
    (0, i.A)(2, arguments);
    var o,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        _,
        g,
        M,
        R,
        k,
        N,
        L,
        I,
        P,
        F = String(t),
        B = (0, T.q)(),
        Y = null != (o = null != (l = null == r ? void 0 : r.locale) ? l : B.locale) ? o : x.A,
        U = (0, S.A)(
            null !=
                (u =
                    null !=
                    (c =
                        null !=
                        (d =
                            null != (f = null == r ? void 0 : r.firstWeekContainsDate)
                                ? f
                                : null == r || null == (p = r.locale) || null == (h = p.options)
                                  ? void 0
                                  : h.firstWeekContainsDate)
                            ? d
                            : B.firstWeekContainsDate)
                        ? c
                        : null == (m = B.locale) || null == (_ = m.options)
                          ? void 0
                          : _.firstWeekContainsDate)
                ? u
                : 1,
        );
    if (!(U >= 1 && U <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var j = (0, S.A)(
        null !=
            (g =
                null !=
                (M =
                    null !=
                    (R =
                        null != (k = null == r ? void 0 : r.weekStartsOn)
                            ? k
                            : null == r || null == (N = r.locale) || null == (L = N.options)
                              ? void 0
                              : L.weekStartsOn)
                        ? R
                        : B.weekStartsOn)
                    ? M
                    : null == (I = B.locale) || null == (P = I.options)
                      ? void 0
                      : P.weekStartsOn)
            ? g
            : 0,
    );
    if (!(j >= 0 && j <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!Y.localize) throw RangeError("locale must contain localize property");
    if (!Y.formatLong) throw RangeError("locale must contain formatLong property");
    var V = (0, s.default)(e);
    if (!(0, n.default)(V)) throw RangeError("Invalid time value");
    var H = (0, y.A)(V),
        G = (0, a.A)(V, H),
        z = { firstWeekContainsDate: U, weekStartsOn: j, locale: Y, _originalDate: V };
    return F.match(C)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, b.A[t])(e, Y.formatLong) : e;
        })
        .join("")
        .match(w)
        .map(function (n) {
            if ("''" === n) return "'";
            var a,
                s,
                i = n[0];
            if ("'" === i) {
                return (s = (a = n).match(D)) ? s[1].replace(O, "'") : a;
            }
            var o = v[i];
            if (o)
                return (
                    !(null != r && r.useAdditionalWeekYearTokens) && (0, E.xM)(n) && (0, E.lJ)(n, t, String(e)),
                    !(null != r && r.useAdditionalDayOfYearTokens) && (0, E.ef)(n) && (0, E.lJ)(n, t, String(e)),
                    o(G, n, Y.localize, z)
                );
            if (i.match(A))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return n;
        })
        .join("");
}
