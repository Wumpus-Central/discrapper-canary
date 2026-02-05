"use strict";
n.d(t, { A: () => p }), n(321073);
var r = n(989349),
    i = n.n(r),
    a = n(873298);
n(151258), n(382627);
var s = n(253932),
    o = n(343246);
function l(e) {
    let t, n;
    "LLLL" === e
        ? ((t = "full"), (n = "short"))
        : "LLL" === e
          ? ((t = "long"), (n = "short"))
          : "LL" === e
            ? (t = "long")
            : "L" === e
              ? (t = "short")
              : "LT" === e
                ? (n = "short")
                : "LTS" === e
                  ? (n = "medium")
                  : "L LT" === e
                    ? ((t = "short"), (n = "short"))
                    : ((t = "short"), (n = "medium"));
    let r = { dateStyle: t, timeStyle: n },
        i = s.PZ.getSetting();
    return (
        i !== a.PZ.AUTO && (i === a.PZ.H12 ? (r.hourCycle = "h12") : i === a.PZ.H23 && (r.hourCycle = "h23")),
        (0, o.t)(r)
    );
}
function u(e, t) {
    if ("function" == typeof t) {
        let n = i().localeData(),
            r = t.bind(n);
        return (t, n) => r({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function c(e) {
    return "string" == typeof e ? (t) => e.replace("%d", `${t}`) : e;
}
function d(e, t, n) {
    return e < 12 ? (n ? "am" : "AM") : n ? "pm" : "PM";
}
function _() {
    let {
        months: e,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: r,
        weekdaysMin: a,
        meridiem: s = d,
        ordinal: o,
        longDateFormat: l,
        week: _ = { dow: 0, doy: 6 },
    } = i().localeData()._config;
    return {
        months: u("month", e),
        monthsShort: u("month", t),
        weekdays: u("day", n),
        weekdaysShort: u("day", r),
        weekdaysMin: u("day", a),
        meridiem: s,
        ordinal: c(o),
        longDateFormat: l,
        longFormatters: [],
        week: _,
    };
}
function f(e, t) {
    return e.replace(/L[L|T|S]{0,3}/g, (n, r) => {
        if (/^LLLL/.test(n)) return t.longDateFormat.LLLL;
        if (/^LLL/.test(n)) return t.longDateFormat.LLL + n.slice(3);
        if (/^LL/.test(n)) return t.longDateFormat.LL + n.slice(2);
        if (/^LTS/.test(n)) return t.longDateFormat.LTS + n.slice(3);
        if (/^LT/.test(n)) return t.longDateFormat.LT + n.slice(2);
        else if (/^L/.test(n) && "[" !== e[r - 1]) return t.longDateFormat.L + n.slice(1);
        return n;
    });
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = t ?? _();
    (void 0 !== t || n) && (e = f(e, r));
    let i = [],
        a = {
            month: !1,
            dayOfYear: !1,
            date: !1,
            day: !1,
            week: !1,
            isoweek: !1,
            year: !1,
            hour: !1,
            minutes: !1,
            seconds: !1,
            millis: !1,
            offset: !1,
        },
        s = e;
    function o(e) {
        i.push("(" + e + ")");
    }
    function u(e) {
        s = s.slice(e);
    }
    for (; s.length > 0; ) {
        switch (s.charAt(0)) {
            case "M":
                if (((a.month = !0), /^MMMM/.test(s))) {
                    o(`localeData.months(_month, "${e}")`), u(4);
                    continue;
                }
                if (/^MMM/.test(s)) {
                    o(`localeData.monthsShort(_month, "${e}")`), u(3);
                    continue;
                }
                if (/^MM/.test(s)) {
                    o('_month+1 < 10 ? "0" : ""'), o("_month+1"), u(2);
                    continue;
                }
                if (/^Mo/.test(s)) {
                    o('localeData.ordinal(_month, "M")'), u(2);
                    continue;
                }
                o("_month + 1"), u(1);
                continue;
            case "Q":
                if (((a.month = !0), /^Qo/.test(s))) {
                    o('localeData.ordinal((_month + 1) / 3, "Q")'), u(2);
                    continue;
                }
                o("Math.ceil((_month + 1) / 3)"), u(1);
                continue;
            case "D":
                if (/^DDD/.test(s)) {
                    if (((a.dayOfYear = !0), /^DDDD/.test(s))) {
                        o('_doy < 100 ? "0" : ""'), o('_doy < 10 ? "0" : ""'), o("_doy"), u(4);
                        continue;
                    }
                    if (/^DDDo/.test(s)) {
                        o('localeData.ordinal(_doy, "DDD")'), u(4);
                        continue;
                    }
                    o("_doy"), u(3);
                    continue;
                }
                if (((a.date = !0), /^DD/.test(s))) {
                    o('_date < 10 ? "0" : ""'), o("_date"), u(2);
                    continue;
                }
                if (/^Do/.test(s)) {
                    o('localeData.ordinal(_date, "D")'), u(2);
                    continue;
                }
                o("_date"), u(1);
                continue;
            case "d":
                if (((a.day = !0), /^dddd/.test(s))) {
                    o(`localeData.weekdays(_day, "${e}")`), u(4);
                    continue;
                }
                if (/^ddd/.test(s)) {
                    o(`localeData.weekdaysShort(_day, "${e}")`), u(3);
                    continue;
                }
                if (/^dd/.test(s)) {
                    o(`localeData.weekdaysMin(_day, "${e}")`), u(2);
                    continue;
                }
                if (/^do/.test(s)) {
                    o('localeData.ordinal(_day, "d")'), u(2);
                    continue;
                }
                o("_day"), u(1);
                continue;
            case "e":
                (a.day = !0), o("(_day + 7 - " + +r.week.dow + ") % 7"), u(1);
                continue;
            case "E":
                (a.day = !0), o("_day === 0 ? 7 : _day"), u(1);
                continue;
            case "w":
                if (((a.week = !0), /^ww/.test(s))) {
                    o('_week < 10 ? "0" : ""'), o("_week"), u(2);
                    continue;
                }
                if (/^wo/.test(s)) {
                    o('localeData.ordinal(_week, "w")'), u(2);
                    continue;
                }
                o("_week"), u(1);
                continue;
            case "W":
                if (((a.isoweek = !0), /^WW/.test(s))) {
                    o('_i_week < 10 ? "0" : ""'), o("_i_week"), u(2);
                    continue;
                }
                if (/^Wo/.test(s)) {
                    o('localeData.ordinal(_i_week, "W")'), u(2);
                    continue;
                }
                o("_i_week"), u(1);
                continue;
            case "Y":
                if (((a.year = !0), /^YYYY/.test(s))) {
                    o("_year"), u(4);
                    continue;
                }
                if (/^YY/.test(s)) {
                    o('(_year % 100) < 10 ? "0" : ""'), o("_year % 100"), u(2);
                    continue;
                }
                o('_year < 9999 ? _year : "+" + _year'), u(1);
                continue;
            case "g":
                if (((a.week = !0), /^gggg/.test(s))) {
                    o("_weekYear"), u(4);
                    continue;
                }
                if (/^gg/.test(s)) {
                    o('(_weekYear % 100) < 10 ? "0" : ""'), o("_weekYear % 100"), u(2);
                    continue;
                }
                break;
            case "G":
                if (((a.isoweek = !0), /^GGGG/.test(s))) {
                    o("_i_weekYear"), u(4);
                    continue;
                }
                if (/^GG/.test(s)) {
                    o('(_i_weekYear % 100) < 10 ? "0" : ""'), o("_i_weekYear % 100"), u(2);
                    continue;
                }
                break;
            case "A":
                (a.hour = !0), (a.minutes = !0), o("localeData.meridiem(_hour, _mins, false)"), u(1);
                continue;
            case "a":
                (a.hour = !0), (a.minutes = !0), o("localeData.meridiem(_hour, _mins, true)"), u(1);
                continue;
            case "H":
                if (((a.hour = !0), /^HH/.test(s))) {
                    o('_hour < 10 ? "0" : ""'), o("_hour"), u(2);
                    continue;
                }
                o("_hour"), u(1);
                continue;
            case "h":
                if (((a.hour = !0), /^hh/.test(s))) {
                    o('((_hour+11) % 12) < 9 ? "0" : ""'), o("((_hour+11) % 12) + 1"), u(2);
                    continue;
                }
                o("((_hour+11) % 12) + 1"), u(1);
                continue;
            case "k":
                if (((a.hour = !0), /^kk/.test(s))) {
                    o('_hour > 0 && _hour < 10 ? "0" : ""'), o('_hour === 0 ? "24" : _hour'), u(2);
                    continue;
                }
                o('_hour === 0 ? "24" : _hour'), u(1);
                continue;
            case "m":
                if (((a.minutes = !0), /^mm/.test(s))) {
                    o('_mins < 10 ? "0" : ""'), o("_mins"), u(2);
                    continue;
                }
                o("_mins"), u(1);
                continue;
            case "s":
                if (((a.seconds = !0), /^ss/.test(s))) {
                    o('_secs < 10 ? "0" : ""'), o("_secs"), u(2);
                    continue;
                }
                o("_secs"), u(1);
                continue;
            case "S":
                if (((a.millis = !0), /^SSS/.test(s))) {
                    o('_ms < 100 ? "0" : ""'), o('_ms < 10 ? "0" : ""'), o("_ms");
                    let e = /^S{3,9}/.exec(s);
                    if (null == e) throw Error("ms len regex failed");
                    let t = e[0].length;
                    t > 3 && o(`"${Array(t - 2).join("0")}"`), u(t);
                    continue;
                }
                if (/^SS/.test(s)) {
                    o('_ms < 100 ? "0" : ""'), o("Math.floor(_ms/10)"), u(2);
                    continue;
                }
                o("Math.floor(_ms / 100)"), u(1);
                continue;
            case "Z":
                if (((a.offset = !0), /^ZZ/.test(s))) {
                    o('_offs >= 0 ? "+" : "-"'),
                        o('_offH < 10 ? "0" : ""'),
                        o("_offH"),
                        o('_offM < 10 ? "0" : ""'),
                        o("_offM"),
                        u(2);
                    continue;
                }
                o('_offs >= 0 ? "+" : "-"'),
                    o('_offH < 10 ? "0" : ""'),
                    o("_offH"),
                    o('":"'),
                    o('_offM < 10 ? "0" : ""'),
                    o("_offM"),
                    u(1);
                continue;
            case "X":
                o("Math.floor(d / 1000)"), u(1);
                continue;
            case "x":
                o("d.valueOf()"), u(1);
                continue;
            case "L":
                let t = /^L(?:TS?|L*(?: LTS?)?)/.exec(s)?.[0] ?? "L";
                r.longFormatters.push(l(t)),
                    o(`localeData.longFormatters[${r.longFormatters.length - 1}](d)`),
                    u(t.length);
                continue;
            case "[":
                let n = s.indexOf("]");
                if (-1 === n) {
                    o('"["'), u(1);
                    continue;
                }
                o(JSON.stringify(s.slice(1, n))), u(n + 1);
                continue;
        }
        o(JSON.stringify(s.charAt(0))), u(1);
    }
    let c = "";
    a.date && (c += "var _date = d.get" + (n ? "UTC" : "") + "Date();\n"),
        a.month && (c += "var _month = d.get" + (n ? "UTC" : "") + "Month();\n"),
        a.dayOfYear &&
            (c +=
                "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" +
                (n ? "UTC" : "") +
                "Month(0);\n_startOfYear.set" +
                (n ? "UTC" : "") +
                "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n"),
        a.day && (c += "var _day = d.get" + (n ? "UTC" : "") + "Day();\n"),
        a.year && (c += "var _year = d.get" + (n ? "UTC" : "") + "FullYear();\n"),
        a.hour && (c += "var _hour = d.get" + (n ? "UTC" : "") + "Hours();\n"),
        a.minutes && (c += "var _mins = d.get" + (n ? "UTC" : "") + "Minutes();\n"),
        a.seconds && (c += "var _secs = d.get" + (n ? "UTC" : "") + "Seconds();\n"),
        a.millis && (c += "var _ms = d.get" + (n ? "UTC" : "") + "Milliseconds();\n"),
        a.offset &&
            (n
                ? (c += "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;")
                : (c +=
                      "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n")),
        a.week &&
            (c +=
                "var _wend = " +
                (r.week.doy - r.week.dow) +
                ";\nvar _ddw = " +
                +r.week.doy +
                " - d.get" +
                (n ? "UTC" : "") +
                "Day();\nif(_ddw > _wend) _ddw -= 7;\nif(_ddw < _wend - 7) _ddw += 7;\nvar _d2 = new Date(d.valueOf());\n_d2.set" +
                (n ? "UTC" : "") +
                "Date(d.get" +
                (n ? "UTC" : "") +
                "Date() + _ddw);\nvar _soy2 = new Date(_d2.valueOf());\n_soy2.set" +
                (n ? "UTC" : "") +
                "Month(0);\n_soy2.set" +
                (n ? "UTC" : "") +
                "Date(1);\nvar _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;\nvar _week = Math.ceil(_doy2 / 7);\nvar _weekYear = _d2.get" +
                (n ? "UTC" : "") +
                "FullYear();\n"),
        a.isoweek &&
            (c +=
                "var _i_wend = 3;\nvar _i_ddw = 4 - d.get" +
                (n ? "UTC" : "") +
                "Day();\nif(_i_ddw > _i_wend) _i_ddw -= 7;\nif(_i_ddw < _i_wend - 7) _i_ddw += 7;\nvar _i_d2 = new Date(d.valueOf());\n_i_d2.set" +
                (n ? "UTC" : "") +
                "Date(d.get" +
                (n ? "UTC" : "") +
                "Date() + _i_ddw);\nvar _i_soy2 = new Date(_i_d2.valueOf());\n_i_soy2.set" +
                (n ? "UTC" : "") +
                "Month(0);\n_i_soy2.set" +
                (n ? "UTC" : "") +
                "Date(1);\nvar _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;\nvar _i_week = Math.ceil(_i_doy2 / 7);\nvar _i_weekYear = _i_d2.get" +
                (n ? "UTC" : "") +
                "FullYear();\n");
    let d = Function(
        "d",
        "localeData",
        (c += `return (
"" +
${i.join(" +\n")}
);`),
    );
    return (e) => d(e, r);
}
