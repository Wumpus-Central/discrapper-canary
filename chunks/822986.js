"use strict";
n.r(t), n.d(t, { default: () => D });
var i = n(804552),
    r = n(128170),
    s = n(29583),
    a = n(618027),
    o = n(749805),
    l = n(216803),
    u = n(789316),
    c = n(564804);
function d(e, t) {
    for (var n = Math.abs(e).toString(); n.length < t; ) n = "0" + n;
    return (e < 0 ? "-" : "") + n;
}
let _ = function (e, t) {
        var n = e.getUTCFullYear(),
            i = n > 0 ? n : 1 - n;
        return d("yy" === t ? i % 100 : i, t.length);
    },
    f = function (e, t) {
        var n = e.getUTCMonth();
        return "M" === t ? String(n + 1) : d(n + 1, 2);
    },
    h = function (e, t) {
        var n = t.length;
        return d(Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3)), t.length);
    };
function p(e, t) {
    var n = e > 0 ? "-" : "+",
        i = Math.abs(e),
        r = Math.floor(i / 60),
        s = i % 60;
    return 0 === s ? n + String(r) : n + String(r) + (t || "") + d(s, 2);
}
function E(e, t) {
    return e % 60 == 0 ? (e > 0 ? "-" : "+") + d(Math.abs(e) / 60, 2) : m(e, t);
}
function m(e, t) {
    var n = Math.abs(e);
    return (e > 0 ? "-" : "+") + d(Math.floor(n / 60), 2) + (t || "") + d(n % 60, 2);
}
let g = {
    G: function (e, t, n) {
        var i = +(e.getUTCFullYear() > 0);
        switch (t) {
            case "G":
            case "GG":
            case "GGG":
                return n.era(i, { width: "abbreviated" });
            case "GGGGG":
                return n.era(i, { width: "narrow" });
            default:
                return n.era(i, { width: "wide" });
        }
    },
    y: function (e, t, n) {
        if ("yo" === t) {
            var i = e.getUTCFullYear();
            return n.ordinalNumber(i > 0 ? i : 1 - i, { unit: "year" });
        }
        return _(e, t);
    },
    Y: function (e, t, n, i) {
        var r = (0, c.A)(e, i),
            s = r > 0 ? r : 1 - r;
        return "YY" === t ? d(s % 100, 2) : "Yo" === t ? n.ordinalNumber(s, { unit: "year" }) : d(s, t.length);
    },
    R: function (e, t) {
        return d((0, l.A)(e), t.length);
    },
    u: function (e, t) {
        return d(e.getUTCFullYear(), t.length);
    },
    Q: function (e, t, n) {
        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case "Q":
                return String(i);
            case "QQ":
                return d(i, 2);
            case "Qo":
                return n.ordinalNumber(i, { unit: "quarter" });
            case "QQQ":
                return n.quarter(i, { width: "abbreviated", context: "formatting" });
            case "QQQQQ":
                return n.quarter(i, { width: "narrow", context: "formatting" });
            default:
                return n.quarter(i, { width: "wide", context: "formatting" });
        }
    },
    q: function (e, t, n) {
        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case "q":
                return String(i);
            case "qq":
                return d(i, 2);
            case "qo":
                return n.ordinalNumber(i, { unit: "quarter" });
            case "qqq":
                return n.quarter(i, { width: "abbreviated", context: "standalone" });
            case "qqqqq":
                return n.quarter(i, { width: "narrow", context: "standalone" });
            default:
                return n.quarter(i, { width: "wide", context: "standalone" });
        }
    },
    M: function (e, t, n) {
        var i = e.getUTCMonth();
        switch (t) {
            case "M":
            case "MM":
                return f(e, t);
            case "Mo":
                return n.ordinalNumber(i + 1, { unit: "month" });
            case "MMM":
                return n.month(i, { width: "abbreviated", context: "formatting" });
            case "MMMMM":
                return n.month(i, { width: "narrow", context: "formatting" });
            default:
                return n.month(i, { width: "wide", context: "formatting" });
        }
    },
    L: function (e, t, n) {
        var i = e.getUTCMonth();
        switch (t) {
            case "L":
                return String(i + 1);
            case "LL":
                return d(i + 1, 2);
            case "Lo":
                return n.ordinalNumber(i + 1, { unit: "month" });
            case "LLL":
                return n.month(i, { width: "abbreviated", context: "standalone" });
            case "LLLLL":
                return n.month(i, { width: "narrow", context: "standalone" });
            default:
                return n.month(i, { width: "wide", context: "standalone" });
        }
    },
    w: function (e, t, n, i) {
        var r = (0, u.A)(e, i);
        return "wo" === t ? n.ordinalNumber(r, { unit: "week" }) : d(r, t.length);
    },
    I: function (e, t, n) {
        var i = (0, o.A)(e);
        return "Io" === t ? n.ordinalNumber(i, { unit: "week" }) : d(i, t.length);
    },
    d: function (e, t, n) {
        var i, r;
        return "do" === t
            ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
            : ((i = e), (r = t), d(i.getUTCDate(), r.length));
    },
    D: function (e, t, n) {
        var i = (function (e) {
            (0, a.A)(1, arguments);
            var t = (0, s.default)(e),
                n = t.getTime();
            return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / 864e5) + 1;
        })(e);
        return "Do" === t ? n.ordinalNumber(i, { unit: "dayOfYear" }) : d(i, t.length);
    },
    E: function (e, t, n) {
        var i = e.getUTCDay();
        switch (t) {
            case "E":
            case "EE":
            case "EEE":
                return n.day(i, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
                return n.day(i, { width: "narrow", context: "formatting" });
            case "EEEEEE":
                return n.day(i, { width: "short", context: "formatting" });
            default:
                return n.day(i, { width: "wide", context: "formatting" });
        }
    },
    e: function (e, t, n, i) {
        var r = e.getUTCDay(),
            s = (r - i.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "e":
                return String(s);
            case "ee":
                return d(s, 2);
            case "eo":
                return n.ordinalNumber(s, { unit: "day" });
            case "eee":
                return n.day(r, { width: "abbreviated", context: "formatting" });
            case "eeeee":
                return n.day(r, { width: "narrow", context: "formatting" });
            case "eeeeee":
                return n.day(r, { width: "short", context: "formatting" });
            default:
                return n.day(r, { width: "wide", context: "formatting" });
        }
    },
    c: function (e, t, n, i) {
        var r = e.getUTCDay(),
            s = (r - i.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case "c":
                return String(s);
            case "cc":
                return d(s, t.length);
            case "co":
                return n.ordinalNumber(s, { unit: "day" });
            case "ccc":
                return n.day(r, { width: "abbreviated", context: "standalone" });
            case "ccccc":
                return n.day(r, { width: "narrow", context: "standalone" });
            case "cccccc":
                return n.day(r, { width: "short", context: "standalone" });
            default:
                return n.day(r, { width: "wide", context: "standalone" });
        }
    },
    i: function (e, t, n) {
        var i = e.getUTCDay(),
            r = 0 === i ? 7 : i;
        switch (t) {
            case "i":
                return String(r);
            case "ii":
                return d(r, t.length);
            case "io":
                return n.ordinalNumber(r, { unit: "day" });
            case "iii":
                return n.day(i, { width: "abbreviated", context: "formatting" });
            case "iiiii":
                return n.day(i, { width: "narrow", context: "formatting" });
            case "iiiiii":
                return n.day(i, { width: "short", context: "formatting" });
            default:
                return n.day(i, { width: "wide", context: "formatting" });
        }
    },
    a: function (e, t, n) {
        var i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
            case "a":
            case "aa":
                return n.dayPeriod(i, { width: "abbreviated", context: "formatting" });
            case "aaa":
                return n.dayPeriod(i, { width: "abbreviated", context: "formatting" }).toLowerCase();
            case "aaaaa":
                return n.dayPeriod(i, { width: "narrow", context: "formatting" });
            default:
                return n.dayPeriod(i, { width: "wide", context: "formatting" });
        }
    },
    b: function (e, t, n) {
        var i,
            r = e.getUTCHours();
        switch (((i = 12 === r ? "noon" : 0 === r ? "midnight" : r / 12 >= 1 ? "pm" : "am"), t)) {
            case "b":
            case "bb":
                return n.dayPeriod(i, { width: "abbreviated", context: "formatting" });
            case "bbb":
                return n.dayPeriod(i, { width: "abbreviated", context: "formatting" }).toLowerCase();
            case "bbbbb":
                return n.dayPeriod(i, { width: "narrow", context: "formatting" });
            default:
                return n.dayPeriod(i, { width: "wide", context: "formatting" });
        }
    },
    B: function (e, t, n) {
        var i,
            r = e.getUTCHours();
        switch (((i = r >= 17 ? "evening" : r >= 12 ? "afternoon" : r >= 4 ? "morning" : "night"), t)) {
            case "B":
            case "BB":
            case "BBB":
                return n.dayPeriod(i, { width: "abbreviated", context: "formatting" });
            case "BBBBB":
                return n.dayPeriod(i, { width: "narrow", context: "formatting" });
            default:
                return n.dayPeriod(i, { width: "wide", context: "formatting" });
        }
    },
    h: function (e, t, n) {
        if ("ho" === t) {
            var i,
                r,
                s = e.getUTCHours() % 12;
            return 0 === s && (s = 12), n.ordinalNumber(s, { unit: "hour" });
        }
        return (i = e), (r = t), d(i.getUTCHours() % 12 || 12, r.length);
    },
    H: function (e, t, n) {
        var i, r;
        return "Ho" === t
            ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
            : ((i = e), (r = t), d(i.getUTCHours(), r.length));
    },
    K: function (e, t, n) {
        var i = e.getUTCHours() % 12;
        return "Ko" === t ? n.ordinalNumber(i, { unit: "hour" }) : d(i, t.length);
    },
    k: function (e, t, n) {
        var i = e.getUTCHours();
        return (0 === i && (i = 24), "ko" === t) ? n.ordinalNumber(i, { unit: "hour" }) : d(i, t.length);
    },
    m: function (e, t, n) {
        var i, r;
        return "mo" === t
            ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
            : ((i = e), (r = t), d(i.getUTCMinutes(), r.length));
    },
    s: function (e, t, n) {
        var i, r;
        return "so" === t
            ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
            : ((i = e), (r = t), d(i.getUTCSeconds(), r.length));
    },
    S: function (e, t) {
        return h(e, t);
    },
    X: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        if (0 === r) return "Z";
        switch (t) {
            case "X":
                return E(r);
            case "XXXX":
            case "XX":
                return m(r);
            default:
                return m(r, ":");
        }
    },
    x: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "x":
                return E(r);
            case "xxxx":
            case "xx":
                return m(r);
            default:
                return m(r, ":");
        }
    },
    O: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + p(r, ":");
            default:
                return "GMT" + m(r, ":");
        }
    },
    z: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        switch (t) {
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + p(r, ":");
            default:
                return "GMT" + m(r, ":");
        }
    },
    t: function (e, t, n, i) {
        return d(Math.floor((i._originalDate || e).getTime() / 1e3), t.length);
    },
    T: function (e, t, n, i) {
        return d((i._originalDate || e).getTime(), t.length);
    },
};
var A = n(291048),
    I = n(84776),
    T = n(368617),
    S = n(998280),
    N = n(98430),
    y = n(728898),
    C = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    v = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    O = /^'([^]*?)'?$/,
    R = /''/g,
    b = /[a-zA-Z]/;
function D(e, t, n) {
    (0, a.A)(2, arguments);
    var o,
        l,
        u,
        c,
        d,
        _,
        f,
        h,
        p,
        E,
        m,
        D,
        L,
        w,
        M,
        P,
        x,
        U,
        k = String(t),
        G = (0, N.q)(),
        F = null != (o = null != (l = null == n ? void 0 : n.locale) ? l : G.locale) ? o : y.A,
        V = (0, S.A)(
            null !=
                (u =
                    null !=
                    (c =
                        null !=
                        (d =
                            null != (_ = null == n ? void 0 : n.firstWeekContainsDate)
                                ? _
                                : null == n || null == (f = n.locale) || null == (h = f.options)
                                  ? void 0
                                  : h.firstWeekContainsDate)
                            ? d
                            : G.firstWeekContainsDate)
                        ? c
                        : null == (p = G.locale) || null == (E = p.options)
                          ? void 0
                          : E.firstWeekContainsDate)
                ? u
                : 1,
        );
    if (!(V >= 1 && V <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var B = (0, S.A)(
        null !=
            (m =
                null !=
                (D =
                    null !=
                    (L =
                        null != (w = null == n ? void 0 : n.weekStartsOn)
                            ? w
                            : null == n || null == (M = n.locale) || null == (P = M.options)
                              ? void 0
                              : P.weekStartsOn)
                        ? L
                        : G.weekStartsOn)
                    ? D
                    : null == (x = G.locale) || null == (U = x.options)
                      ? void 0
                      : U.weekStartsOn)
            ? m
            : 0,
    );
    if (!(B >= 0 && B <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!F.localize) throw RangeError("locale must contain localize property");
    if (!F.formatLong) throw RangeError("locale must contain formatLong property");
    var H = (0, s.default)(e);
    if (!(0, i.default)(H)) throw RangeError("Invalid time value");
    var j = (0, I.A)(H),
        Y = (0, r.A)(H, j),
        W = { firstWeekContainsDate: V, weekStartsOn: B, locale: F, _originalDate: H };
    return k
        .match(v)
        .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, A.A[t])(e, F.formatLong) : e;
        })
        .join("")
        .match(C)
        .map(function (i) {
            if ("''" === i) return "'";
            var r,
                s,
                a = i[0];
            if ("'" === a) {
                return (s = (r = i).match(O)) ? s[1].replace(R, "'") : r;
            }
            var o = g[a];
            if (o)
                return (
                    !(null != n && n.useAdditionalWeekYearTokens) && (0, T.xM)(i) && (0, T.lJ)(i, t, String(e)),
                    !(null != n && n.useAdditionalDayOfYearTokens) && (0, T.ef)(i) && (0, T.lJ)(i, t, String(e)),
                    o(Y, i, F.localize, W)
                );
            if (a.match(b))
                throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
            return i;
        })
        .join("");
}
