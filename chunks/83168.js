"use strict";
n.d(t, { A: () => c }), n(321073);
var r = n(989349),
    i = n.n(r),
    s = n(873298),
    a = n(151258),
    o = n(253932),
    l = n(343246);
function u(e, t) {
    if ("function" == typeof t) {
        let n = i().localeData(),
            r = t.bind(n);
        return (t, n) => r({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function d(e, t, n) {
    return e < 12 ? (n ? "am" : "AM") : n ? "pm" : "PM";
}
function c(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c =
            t ??
            (function () {
                let {
                    months: e,
                    monthsShort: t,
                    weekdays: n,
                    weekdaysShort: r,
                    weekdaysMin: s,
                    meridiem: a = d,
                    ordinal: o,
                    longDateFormat: l,
                    week: c = { dow: 0, doy: 6 },
                } = i().localeData()._config;
                return {
                    months: u("month", e),
                    monthsShort: u("month", t),
                    weekdays: u("day", n),
                    weekdaysShort: u("day", r),
                    weekdaysMin: u("day", s),
                    meridiem: a,
                    ordinal: "string" == typeof o ? (e) => o.replace("%d", `${e}`) : o,
                    longDateFormat: l,
                    longFormatters: [],
                    week: c,
                };
            })();
    (void 0 !== t || r || !(0, a.A)()) &&
        (e = (n = e).replace(/L[L|T|S]{0,3}/g, (e, t) => {
            if (/^LLLL/.test(e)) return c.longDateFormat.LLLL;
            if (/^LLL/.test(e)) return c.longDateFormat.LLL + e.slice(3);
            if (/^LL/.test(e)) return c.longDateFormat.LL + e.slice(2);
            if (/^LTS/.test(e)) return c.longDateFormat.LTS + e.slice(3);
            if (/^LT/.test(e)) return c.longDateFormat.LT + e.slice(2);
            else if (/^L/.test(e) && "[" !== n[t - 1]) return c.longDateFormat.L + e.slice(1);
            return e;
        }));
    let _ = [],
        f = {
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
        E = e;
    function h(e) {
        _.push("(" + e + ")");
    }
    function p(e) {
        E = E.slice(e);
    }
    for (; E.length > 0; ) {
        switch (E.charAt(0)) {
            case "M":
                if (((f.month = !0), /^MMMM/.test(E))) {
                    h(`localeData.months(_month, "${e}")`), p(4);
                    continue;
                }
                if (/^MMM/.test(E)) {
                    h(`localeData.monthsShort(_month, "${e}")`), p(3);
                    continue;
                }
                if (/^MM/.test(E)) {
                    h('_month+1 < 10 ? "0" : ""'), h("_month+1"), p(2);
                    continue;
                }
                if (/^Mo/.test(E)) {
                    h('localeData.ordinal(_month, "M")'), p(2);
                    continue;
                }
                h("_month + 1"), p(1);
                continue;
            case "Q":
                if (((f.month = !0), /^Qo/.test(E))) {
                    h('localeData.ordinal((_month + 1) / 3, "Q")'), p(2);
                    continue;
                }
                h("Math.ceil((_month + 1) / 3)"), p(1);
                continue;
            case "D":
                if (/^DDD/.test(E)) {
                    if (((f.dayOfYear = !0), /^DDDD/.test(E))) {
                        h('_doy < 100 ? "0" : ""'), h('_doy < 10 ? "0" : ""'), h("_doy"), p(4);
                        continue;
                    }
                    if (/^DDDo/.test(E)) {
                        h('localeData.ordinal(_doy, "DDD")'), p(4);
                        continue;
                    }
                    h("_doy"), p(3);
                    continue;
                }
                if (((f.date = !0), /^DD/.test(E))) {
                    h('_date < 10 ? "0" : ""'), h("_date"), p(2);
                    continue;
                }
                if (/^Do/.test(E)) {
                    h('localeData.ordinal(_date, "D")'), p(2);
                    continue;
                }
                h("_date"), p(1);
                continue;
            case "d":
                if (((f.day = !0), /^dddd/.test(E))) {
                    h(`localeData.weekdays(_day, "${e}")`), p(4);
                    continue;
                }
                if (/^ddd/.test(E)) {
                    h(`localeData.weekdaysShort(_day, "${e}")`), p(3);
                    continue;
                }
                if (/^dd/.test(E)) {
                    h(`localeData.weekdaysMin(_day, "${e}")`), p(2);
                    continue;
                }
                if (/^do/.test(E)) {
                    h('localeData.ordinal(_day, "d")'), p(2);
                    continue;
                }
                h("_day"), p(1);
                continue;
            case "e":
                (f.day = !0), h("(_day + 7 - " + +c.week.dow + ") % 7"), p(1);
                continue;
            case "E":
                (f.day = !0), h("_day === 0 ? 7 : _day"), p(1);
                continue;
            case "w":
                if (((f.week = !0), /^ww/.test(E))) {
                    h('_week < 10 ? "0" : ""'), h("_week"), p(2);
                    continue;
                }
                if (/^wo/.test(E)) {
                    h('localeData.ordinal(_week, "w")'), p(2);
                    continue;
                }
                h("_week"), p(1);
                continue;
            case "W":
                if (((f.isoweek = !0), /^WW/.test(E))) {
                    h('_i_week < 10 ? "0" : ""'), h("_i_week"), p(2);
                    continue;
                }
                if (/^Wo/.test(E)) {
                    h('localeData.ordinal(_i_week, "W")'), p(2);
                    continue;
                }
                h("_i_week"), p(1);
                continue;
            case "Y":
                if (((f.year = !0), /^YYYY/.test(E))) {
                    h("_year"), p(4);
                    continue;
                }
                if (/^YY/.test(E)) {
                    h('(_year % 100) < 10 ? "0" : ""'), h("_year % 100"), p(2);
                    continue;
                }
                h('_year < 9999 ? _year : "+" + _year'), p(1);
                continue;
            case "g":
                if (((f.week = !0), /^gggg/.test(E))) {
                    h("_weekYear"), p(4);
                    continue;
                }
                if (/^gg/.test(E)) {
                    h('(_weekYear % 100) < 10 ? "0" : ""'), h("_weekYear % 100"), p(2);
                    continue;
                }
                break;
            case "G":
                if (((f.isoweek = !0), /^GGGG/.test(E))) {
                    h("_i_weekYear"), p(4);
                    continue;
                }
                if (/^GG/.test(E)) {
                    h('(_i_weekYear % 100) < 10 ? "0" : ""'), h("_i_weekYear % 100"), p(2);
                    continue;
                }
                break;
            case "A":
                (f.hour = !0), (f.minutes = !0), h("localeData.meridiem(_hour, _mins, false)"), p(1);
                continue;
            case "a":
                (f.hour = !0), (f.minutes = !0), h("localeData.meridiem(_hour, _mins, true)"), p(1);
                continue;
            case "H":
                if (((f.hour = !0), /^HH/.test(E))) {
                    h('_hour < 10 ? "0" : ""'), h("_hour"), p(2);
                    continue;
                }
                h("_hour"), p(1);
                continue;
            case "h":
                if (((f.hour = !0), /^hh/.test(E))) {
                    h('((_hour+11) % 12) < 9 ? "0" : ""'), h("((_hour+11) % 12) + 1"), p(2);
                    continue;
                }
                h("((_hour+11) % 12) + 1"), p(1);
                continue;
            case "k":
                if (((f.hour = !0), /^kk/.test(E))) {
                    h('_hour > 0 && _hour < 10 ? "0" : ""'), h('_hour === 0 ? "24" : _hour'), p(2);
                    continue;
                }
                h('_hour === 0 ? "24" : _hour'), p(1);
                continue;
            case "m":
                if (((f.minutes = !0), /^mm/.test(E))) {
                    h('_mins < 10 ? "0" : ""'), h("_mins"), p(2);
                    continue;
                }
                h("_mins"), p(1);
                continue;
            case "s":
                if (((f.seconds = !0), /^ss/.test(E))) {
                    h('_secs < 10 ? "0" : ""'), h("_secs"), p(2);
                    continue;
                }
                h("_secs"), p(1);
                continue;
            case "S":
                if (((f.millis = !0), /^SSS/.test(E))) {
                    h('_ms < 100 ? "0" : ""'), h('_ms < 10 ? "0" : ""'), h("_ms");
                    let e = /^S{3,9}/.exec(E);
                    if (null == e) throw Error("ms len regex failed");
                    let t = e[0].length;
                    t > 3 && h(`"${Array(t - 2).join("0")}"`), p(t);
                    continue;
                }
                if (/^SS/.test(E)) {
                    h('_ms < 100 ? "0" : ""'), h("Math.floor(_ms/10)"), p(2);
                    continue;
                }
                h("Math.floor(_ms / 100)"), p(1);
                continue;
            case "Z":
                if (((f.offset = !0), /^ZZ/.test(E))) {
                    h('_offs >= 0 ? "+" : "-"'),
                        h('_offH < 10 ? "0" : ""'),
                        h("_offH"),
                        h('_offM < 10 ? "0" : ""'),
                        h("_offM"),
                        p(2);
                    continue;
                }
                h('_offs >= 0 ? "+" : "-"'),
                    h('_offH < 10 ? "0" : ""'),
                    h("_offH"),
                    h('":"'),
                    h('_offM < 10 ? "0" : ""'),
                    h("_offM"),
                    p(1);
                continue;
            case "X":
                h("Math.floor(d / 1000)"), p(1);
                continue;
            case "x":
                h("d.valueOf()"), p(1);
                continue;
            case "L":
                let t = /^L(?:TS?|L*(?: LTS?)?)/.exec(E)?.[0] ?? "L";
                c.longFormatters.push(
                    (function (e) {
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
                    })(t),
                ),
                    h(`localeData.longFormatters[${c.longFormatters.length - 1}](d)`),
                    p(t.length);
                continue;
            case "[":
                let n = E.indexOf("]");
                if (-1 === n) {
                    h('"["'), p(1);
                    continue;
                }
                h(JSON.stringify(E.slice(1, n))), p(n + 1);
                continue;
        }
        h(JSON.stringify(E.charAt(0))), p(1);
    }
    let m = "";
    f.date && (m += "var _date = d.get" + (r ? "UTC" : "") + "Date();\n"),
        f.month && (m += "var _month = d.get" + (r ? "UTC" : "") + "Month();\n"),
        f.dayOfYear &&
            (m +=
                "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" +
                (r ? "UTC" : "") +
                "Month(0);\n_startOfYear.set" +
                (r ? "UTC" : "") +
                "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n"),
        f.day && (m += "var _day = d.get" + (r ? "UTC" : "") + "Day();\n"),
        f.year && (m += "var _year = d.get" + (r ? "UTC" : "") + "FullYear();\n"),
        f.hour && (m += "var _hour = d.get" + (r ? "UTC" : "") + "Hours();\n"),
        f.minutes && (m += "var _mins = d.get" + (r ? "UTC" : "") + "Minutes();\n"),
        f.seconds && (m += "var _secs = d.get" + (r ? "UTC" : "") + "Seconds();\n"),
        f.millis && (m += "var _ms = d.get" + (r ? "UTC" : "") + "Milliseconds();\n"),
        f.offset &&
            (r
                ? (m += "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;")
                : (m +=
                      "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n")),
        f.week &&
            (m +=
                "var _wend = " +
                (c.week.doy - c.week.dow) +
                ";\nvar _ddw = " +
                +c.week.doy +
                " - d.get" +
                (r ? "UTC" : "") +
                "Day();\nif(_ddw > _wend) _ddw -= 7;\nif(_ddw < _wend - 7) _ddw += 7;\nvar _d2 = new Date(d.valueOf());\n_d2.set" +
                (r ? "UTC" : "") +
                "Date(d.get" +
                (r ? "UTC" : "") +
                "Date() + _ddw);\nvar _soy2 = new Date(_d2.valueOf());\n_soy2.set" +
                (r ? "UTC" : "") +
                "Month(0);\n_soy2.set" +
                (r ? "UTC" : "") +
                "Date(1);\nvar _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;\nvar _week = Math.ceil(_doy2 / 7);\nvar _weekYear = _d2.get" +
                (r ? "UTC" : "") +
                "FullYear();\n"),
        f.isoweek &&
            (m +=
                "var _i_wend = 3;\nvar _i_ddw = 4 - d.get" +
                (r ? "UTC" : "") +
                "Day();\nif(_i_ddw > _i_wend) _i_ddw -= 7;\nif(_i_ddw < _i_wend - 7) _i_ddw += 7;\nvar _i_d2 = new Date(d.valueOf());\n_i_d2.set" +
                (r ? "UTC" : "") +
                "Date(d.get" +
                (r ? "UTC" : "") +
                "Date() + _i_ddw);\nvar _i_soy2 = new Date(_i_d2.valueOf());\n_i_soy2.set" +
                (r ? "UTC" : "") +
                "Month(0);\n_i_soy2.set" +
                (r ? "UTC" : "") +
                "Date(1);\nvar _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;\nvar _i_week = Math.ceil(_i_doy2 / 7);\nvar _i_weekYear = _i_d2.get" +
                (r ? "UTC" : "") +
                "FullYear();\n");
    let g = Function(
        "d",
        "localeData",
        (m += `return (
"" +
${_.join(" +\n")}
);`),
    );
    return (e) => g(e, c);
}
