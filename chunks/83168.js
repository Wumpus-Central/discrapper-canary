"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(989349),
    i = n.n(r),
    s = n(873298),
    a = n(151258),
    o = n(253932),
    l = n(343246);
function u(e) {
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
        i = o.PZ.getSetting();
    return (
        i !== s.PZ.AUTO &&
            (0, a.A)() &&
            (i === s.PZ.H12 ? (r.hourCycle = "h12") : i === s.PZ.H23 && (r.hourCycle = "h23")),
        (0, l.t)(r)
    );
}
function c(e, t) {
    if ("function" == typeof t) {
        let n = i().localeData(),
            r = t.bind(n);
        return (t, n) => r({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function d(e) {
    return "string" == typeof e ? (t) => e.replace("%d", `${t}`) : e;
}
function _(e, t, n) {
    return e < 12 ? (n ? "am" : "AM") : n ? "pm" : "PM";
}
function f() {
    let {
        months: e,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: r,
        weekdaysMin: s,
        meridiem: a = _,
        ordinal: o,
        longDateFormat: l,
        week: u = { dow: 0, doy: 6 },
    } = i().localeData()._config;
    return {
        months: c("month", e),
        monthsShort: c("month", t),
        weekdays: c("day", n),
        weekdaysShort: c("day", r),
        weekdaysMin: c("day", s),
        meridiem: a,
        ordinal: d(o),
        longDateFormat: l,
        longFormatters: [],
        week: u,
    };
}
function p(e, t) {
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
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = t ?? f();
    (void 0 !== t || n || !(0, a.A)()) && (e = p(e, r));
    let i = [],
        s = {
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
        o = e;
    function l(e) {
        i.push("(" + e + ")");
    }
    function c(e) {
        o = o.slice(e);
    }
    for (; o.length > 0; ) {
        switch (o.charAt(0)) {
            case "M":
                if (((s.month = !0), /^MMMM/.test(o))) {
                    l(`localeData.months(_month, "${e}")`), c(4);
                    continue;
                }
                if (/^MMM/.test(o)) {
                    l(`localeData.monthsShort(_month, "${e}")`), c(3);
                    continue;
                }
                if (/^MM/.test(o)) {
                    l('_month+1 < 10 ? "0" : ""'), l("_month+1"), c(2);
                    continue;
                }
                if (/^Mo/.test(o)) {
                    l('localeData.ordinal(_month, "M")'), c(2);
                    continue;
                }
                l("_month + 1"), c(1);
                continue;
            case "Q":
                if (((s.month = !0), /^Qo/.test(o))) {
                    l('localeData.ordinal((_month + 1) / 3, "Q")'), c(2);
                    continue;
                }
                l("Math.ceil((_month + 1) / 3)"), c(1);
                continue;
            case "D":
                if (/^DDD/.test(o)) {
                    if (((s.dayOfYear = !0), /^DDDD/.test(o))) {
                        l('_doy < 100 ? "0" : ""'), l('_doy < 10 ? "0" : ""'), l("_doy"), c(4);
                        continue;
                    }
                    if (/^DDDo/.test(o)) {
                        l('localeData.ordinal(_doy, "DDD")'), c(4);
                        continue;
                    }
                    l("_doy"), c(3);
                    continue;
                }
                if (((s.date = !0), /^DD/.test(o))) {
                    l('_date < 10 ? "0" : ""'), l("_date"), c(2);
                    continue;
                }
                if (/^Do/.test(o)) {
                    l('localeData.ordinal(_date, "D")'), c(2);
                    continue;
                }
                l("_date"), c(1);
                continue;
            case "d":
                if (((s.day = !0), /^dddd/.test(o))) {
                    l(`localeData.weekdays(_day, "${e}")`), c(4);
                    continue;
                }
                if (/^ddd/.test(o)) {
                    l(`localeData.weekdaysShort(_day, "${e}")`), c(3);
                    continue;
                }
                if (/^dd/.test(o)) {
                    l(`localeData.weekdaysMin(_day, "${e}")`), c(2);
                    continue;
                }
                if (/^do/.test(o)) {
                    l('localeData.ordinal(_day, "d")'), c(2);
                    continue;
                }
                l("_day"), c(1);
                continue;
            case "e":
                (s.day = !0), l("(_day + 7 - " + +r.week.dow + ") % 7"), c(1);
                continue;
            case "E":
                (s.day = !0), l("_day === 0 ? 7 : _day"), c(1);
                continue;
            case "w":
                if (((s.week = !0), /^ww/.test(o))) {
                    l('_week < 10 ? "0" : ""'), l("_week"), c(2);
                    continue;
                }
                if (/^wo/.test(o)) {
                    l('localeData.ordinal(_week, "w")'), c(2);
                    continue;
                }
                l("_week"), c(1);
                continue;
            case "W":
                if (((s.isoweek = !0), /^WW/.test(o))) {
                    l('_i_week < 10 ? "0" : ""'), l("_i_week"), c(2);
                    continue;
                }
                if (/^Wo/.test(o)) {
                    l('localeData.ordinal(_i_week, "W")'), c(2);
                    continue;
                }
                l("_i_week"), c(1);
                continue;
            case "Y":
                if (((s.year = !0), /^YYYY/.test(o))) {
                    l("_year"), c(4);
                    continue;
                }
                if (/^YY/.test(o)) {
                    l('(_year % 100) < 10 ? "0" : ""'), l("_year % 100"), c(2);
                    continue;
                }
                l('_year < 9999 ? _year : "+" + _year'), c(1);
                continue;
            case "g":
                if (((s.week = !0), /^gggg/.test(o))) {
                    l("_weekYear"), c(4);
                    continue;
                }
                if (/^gg/.test(o)) {
                    l('(_weekYear % 100) < 10 ? "0" : ""'), l("_weekYear % 100"), c(2);
                    continue;
                }
                break;
            case "G":
                if (((s.isoweek = !0), /^GGGG/.test(o))) {
                    l("_i_weekYear"), c(4);
                    continue;
                }
                if (/^GG/.test(o)) {
                    l('(_i_weekYear % 100) < 10 ? "0" : ""'), l("_i_weekYear % 100"), c(2);
                    continue;
                }
                break;
            case "A":
                (s.hour = !0), (s.minutes = !0), l("localeData.meridiem(_hour, _mins, false)"), c(1);
                continue;
            case "a":
                (s.hour = !0), (s.minutes = !0), l("localeData.meridiem(_hour, _mins, true)"), c(1);
                continue;
            case "H":
                if (((s.hour = !0), /^HH/.test(o))) {
                    l('_hour < 10 ? "0" : ""'), l("_hour"), c(2);
                    continue;
                }
                l("_hour"), c(1);
                continue;
            case "h":
                if (((s.hour = !0), /^hh/.test(o))) {
                    l('((_hour+11) % 12) < 9 ? "0" : ""'), l("((_hour+11) % 12) + 1"), c(2);
                    continue;
                }
                l("((_hour+11) % 12) + 1"), c(1);
                continue;
            case "k":
                if (((s.hour = !0), /^kk/.test(o))) {
                    l('_hour > 0 && _hour < 10 ? "0" : ""'), l('_hour === 0 ? "24" : _hour'), c(2);
                    continue;
                }
                l('_hour === 0 ? "24" : _hour'), c(1);
                continue;
            case "m":
                if (((s.minutes = !0), /^mm/.test(o))) {
                    l('_mins < 10 ? "0" : ""'), l("_mins"), c(2);
                    continue;
                }
                l("_mins"), c(1);
                continue;
            case "s":
                if (((s.seconds = !0), /^ss/.test(o))) {
                    l('_secs < 10 ? "0" : ""'), l("_secs"), c(2);
                    continue;
                }
                l("_secs"), c(1);
                continue;
            case "S":
                if (((s.millis = !0), /^SSS/.test(o))) {
                    l('_ms < 100 ? "0" : ""'), l('_ms < 10 ? "0" : ""'), l("_ms");
                    let e = /^S{3,9}/.exec(o);
                    if (null == e) throw Error("ms len regex failed");
                    let t = e[0].length;
                    t > 3 && l(`"${Array(t - 2).join("0")}"`), c(t);
                    continue;
                }
                if (/^SS/.test(o)) {
                    l('_ms < 100 ? "0" : ""'), l("Math.floor(_ms/10)"), c(2);
                    continue;
                }
                l("Math.floor(_ms / 100)"), c(1);
                continue;
            case "Z":
                if (((s.offset = !0), /^ZZ/.test(o))) {
                    l('_offs >= 0 ? "+" : "-"'),
                        l('_offH < 10 ? "0" : ""'),
                        l("_offH"),
                        l('_offM < 10 ? "0" : ""'),
                        l("_offM"),
                        c(2);
                    continue;
                }
                l('_offs >= 0 ? "+" : "-"'),
                    l('_offH < 10 ? "0" : ""'),
                    l("_offH"),
                    l('":"'),
                    l('_offM < 10 ? "0" : ""'),
                    l("_offM"),
                    c(1);
                continue;
            case "X":
                l("Math.floor(d / 1000)"), c(1);
                continue;
            case "x":
                l("d.valueOf()"), c(1);
                continue;
            case "L":
                let t = /^L(?:TS?|L*(?: LTS?)?)/.exec(o)?.[0] ?? "L";
                r.longFormatters.push(u(t)),
                    l(`localeData.longFormatters[${r.longFormatters.length - 1}](d)`),
                    c(t.length);
                continue;
            case "[":
                let n = o.indexOf("]");
                if (-1 === n) {
                    l('"["'), c(1);
                    continue;
                }
                l(JSON.stringify(o.slice(1, n))), c(n + 1);
                continue;
        }
        l(JSON.stringify(o.charAt(0))), c(1);
    }
    let d = "";
    s.date && (d += "var _date = d.get" + (n ? "UTC" : "") + "Date();\n"),
        s.month && (d += "var _month = d.get" + (n ? "UTC" : "") + "Month();\n"),
        s.dayOfYear &&
            (d +=
                "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" +
                (n ? "UTC" : "") +
                "Month(0);\n_startOfYear.set" +
                (n ? "UTC" : "") +
                "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n"),
        s.day && (d += "var _day = d.get" + (n ? "UTC" : "") + "Day();\n"),
        s.year && (d += "var _year = d.get" + (n ? "UTC" : "") + "FullYear();\n"),
        s.hour && (d += "var _hour = d.get" + (n ? "UTC" : "") + "Hours();\n"),
        s.minutes && (d += "var _mins = d.get" + (n ? "UTC" : "") + "Minutes();\n"),
        s.seconds && (d += "var _secs = d.get" + (n ? "UTC" : "") + "Seconds();\n"),
        s.millis && (d += "var _ms = d.get" + (n ? "UTC" : "") + "Milliseconds();\n"),
        s.offset &&
            (n
                ? (d += "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;")
                : (d +=
                      "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n")),
        s.week &&
            (d +=
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
        s.isoweek &&
            (d +=
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
    let _ = Function(
        "d",
        "localeData",
        (d += `return (
"" +
${i.join(" +\n")}
);`),
    );
    return (e) => _(e, r);
}
