"use strict";
r.d(t, { p3: () => eR, Bw: () => o });
var n,
    s,
    a = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    o = (function () {
        function e(e, t) {
            if (0 === t) throw Error("Can't create weekday with n == 0");
            (this.weekday = e), (this.n = t);
        }
        return (
            (e.fromStr = function (t) {
                return new e(a.indexOf(t));
            }),
            (e.prototype.nth = function (t) {
                return this.n === t ? this : new e(this.weekday, t);
            }),
            (e.prototype.equals = function (e) {
                return this.weekday === e.weekday && this.n === e.n;
            }),
            (e.prototype.toString = function () {
                var e = a[this.weekday];
                return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
            }),
            (e.prototype.getJsWeekday = function () {
                return 6 === this.weekday ? 0 : this.weekday + 1;
            }),
            e
        );
    })(),
    i = function (e) {
        return null != e;
    },
    u = function (e) {
        return "number" == typeof e;
    },
    c = function (e) {
        return "string" == typeof e && a.includes(e);
    },
    l = Array.isArray,
    d = function (e, t) {
        void 0 === t && (t = e), 1 == arguments.length && ((t = e), (e = 0));
        for (var r = [], n = e; n < t; n++) r.push(n);
        return r;
    },
    f = function (e, t) {
        var r = 0,
            n = [];
        if (l(e)) for (; r < t; r++) n[r] = [].concat(e);
        else for (; r < t; r++) n[r] = e;
        return n;
    };
function p(e, t, r) {
    void 0 === r && (r = " ");
    var n = String(e);
    return ((t |= 0), n.length > t)
        ? String(n)
        : ((t -= n.length) > r.length && (r += f(r, t / r.length)), r.slice(0, t) + String(n));
}
var h = function (e, t, r) {
        var n = e.split(t);
        return r ? n.slice(0, r).concat([n.slice(r).join(t)]) : n;
    },
    m = function (e, t) {
        var r = e % t;
        return r * t < 0 ? r + t : r;
    },
    v = function (e, t) {
        return { div: Math.floor(e / t), mod: m(e, t) };
    },
    g = function (e) {
        return !i(e) || 0 === e.length;
    },
    y = function (e) {
        return !g(e);
    },
    b = function (e, t) {
        return y(e) && -1 !== e.indexOf(t);
    },
    _ = function (e, t, r, n, s, a) {
        return (
            void 0 === n && (n = 0),
            void 0 === s && (s = 0),
            void 0 === a && (a = 0),
            new Date(Date.UTC(e, t - 1, r, n, s, a))
        );
    },
    x = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    w = _(1970, 1, 1),
    k = [6, 0, 1, 2, 3, 4, 5],
    M = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    S = function (e) {
        return e instanceof Date;
    },
    L = function (e) {
        return S(e) && !isNaN(e.getTime());
    },
    T = function (e) {
        return 60 * e.getTimezoneOffset() * 1e3;
    },
    E = function (e) {
        var t, r;
        return (t = e), (r = w), Math.round((t.getTime() - T(t) - (r.getTime() - T(r))) / 864e5);
    },
    D = function (e) {
        return new Date(w.getTime() + 864e5 * e);
    },
    C = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && M(e.getUTCFullYear()) ? 29 : x[t];
    },
    O = function (e) {
        return k[e.getUTCDay()];
    },
    P = function (e, t) {
        var r = _(e, t + 1, 1);
        return [O(r), C(r)];
    },
    A = function (e, t) {
        return (
            (t = t || e),
            new Date(
                Date.UTC(
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate(),
                    t.getHours(),
                    t.getMinutes(),
                    t.getSeconds(),
                    t.getMilliseconds(),
                ),
            )
        );
    },
    j = function (e) {
        return new Date(e.getTime());
    },
    R = function (e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(j(e[r]));
        return t;
    },
    I = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    Y = function (e, t) {
        void 0 === t && (t = !0);
        var r = new Date(e);
        return [
            p(r.getUTCFullYear().toString(), 4, "0"),
            p(r.getUTCMonth() + 1, 2, "0"),
            p(r.getUTCDate(), 2, "0"),
            "T",
            p(r.getUTCHours(), 2, "0"),
            p(r.getUTCMinutes(), 2, "0"),
            p(r.getUTCSeconds(), 2, "0"),
            t ? "Z" : "",
        ].join("");
    },
    N = function (e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!t) throw Error("Invalid UNTIL value: ".concat(e));
        return new Date(
            Date.UTC(
                parseInt(t[1], 10),
                parseInt(t[2], 10) - 1,
                parseInt(t[3], 10),
                parseInt(t[5], 10) || 0,
                parseInt(t[6], 10) || 0,
                parseInt(t[7], 10) || 0,
            ),
        );
    },
    F = function (e, t) {
        return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
    },
    H = function (e, t) {
        var r = new Date(F(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            n = new Date(F(e, null != t ? t : "UTC")).getTime() - r.getTime();
        return new Date(e.getTime() - n);
    },
    z = (function () {
        function e(e, t) {
            (this.minDate = null),
                (this.maxDate = null),
                (this._result = []),
                (this.total = 0),
                (this.method = e),
                (this.args = t),
                "between" === e
                    ? ((this.maxDate = t.inc ? t.before : new Date(t.before.getTime() - 1)),
                      (this.minDate = t.inc ? t.after : new Date(t.after.getTime() + 1)))
                    : "before" === e
                      ? (this.maxDate = t.inc ? t.dt : new Date(t.dt.getTime() - 1))
                      : "after" === e && (this.minDate = t.inc ? t.dt : new Date(t.dt.getTime() + 1));
        }
        return (
            (e.prototype.accept = function (e) {
                ++this.total;
                var t = this.minDate && e < this.minDate,
                    r = this.maxDate && e > this.maxDate;
                if ("between" === this.method) {
                    if (t) return !0;
                    if (r) return !1;
                } else if ("before" === this.method) {
                    if (r) return !1;
                } else if ("after" === this.method) return !!t || (this.add(e), !1);
                return this.add(e);
            }),
            (e.prototype.add = function (e) {
                return this._result.push(e), !0;
            }),
            (e.prototype.getValue = function () {
                var e = this._result;
                switch (this.method) {
                    case "all":
                    case "between":
                        return e;
                    default:
                        return e.length ? e[e.length - 1] : null;
                }
            }),
            (e.prototype.clone = function () {
                return new e(this.method, this.args);
            }),
            e
        );
    })(),
    B = r(56636),
    U = (function (e) {
        function t(t, r, n) {
            var s = e.call(this, t, r) || this;
            return (s.iterator = n), s;
        }
        return (
            (0, B.C6)(t, e),
            (t.prototype.add = function (e) {
                return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
            }),
            t
        );
    })(z);
let W = {
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    tokens: {
        SKIP: /^[ \r\n\t]+|^\.$/,
        number: /^[1-9][0-9]*/,
        numberAsText: /^(one|two|three)/i,
        every: /^every/i,
        "day(s)": /^days?/i,
        "weekday(s)": /^weekdays?/i,
        "week(s)": /^weeks?/i,
        "hour(s)": /^hours?/i,
        "minute(s)": /^minutes?/i,
        "month(s)": /^months?/i,
        "year(s)": /^years?/i,
        on: /^(on|in)/i,
        at: /^(at)/i,
        the: /^the/i,
        first: /^first/i,
        second: /^second/i,
        third: /^third/i,
        nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
        last: /^last/i,
        for: /^for/i,
        "time(s)": /^times?/i,
        until: /^(un)?til/i,
        monday: /^mo(n(day)?)?/i,
        tuesday: /^tu(e(s(day)?)?)?/i,
        wednesday: /^we(d(n(esday)?)?)?/i,
        thursday: /^th(u(r(sday)?)?)?/i,
        friday: /^fr(i(day)?)?/i,
        saturday: /^sa(t(urday)?)?/i,
        sunday: /^su(n(day)?)?/i,
        january: /^jan(uary)?/i,
        february: /^feb(ruary)?/i,
        march: /^mar(ch)?/i,
        april: /^apr(il)?/i,
        may: /^may/i,
        june: /^june?/i,
        july: /^july?/i,
        august: /^aug(ust)?/i,
        september: /^sep(t(ember)?)?/i,
        october: /^oct(ober)?/i,
        november: /^nov(ember)?/i,
        december: /^dec(ember)?/i,
        comma: /^(,\s*|(and|or)\s*)+/i,
    },
};
var $ = function (e, t) {
        return -1 !== e.indexOf(t);
    },
    V = function (e) {
        return e.toString();
    },
    K = function (e, t, r) {
        return "".concat(t, " ").concat(r, ", ").concat(e);
    },
    q = (function () {
        function e(e, t, r, n) {
            if (
                (void 0 === t && (t = V),
                void 0 === r && (r = W),
                void 0 === n && (n = K),
                (this.text = []),
                (this.language = r || W),
                (this.gettext = t),
                (this.dateFormatter = n),
                (this.rrule = e),
                (this.options = e.options),
                (this.origOptions = e.origOptions),
                this.origOptions.bymonthday)
            ) {
                var s = [].concat(this.options.bymonthday),
                    a = [].concat(this.options.bynmonthday);
                s.sort(function (e, t) {
                    return e - t;
                }),
                    a.sort(function (e, t) {
                        return t - e;
                    }),
                    (this.bymonthday = s.concat(a)),
                    this.bymonthday.length || (this.bymonthday = null);
            }
            if (i(this.origOptions.byweekday)) {
                var o = l(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                    u = String(o);
                this.byweekday = {
                    allWeeks: o.filter(function (e) {
                        return !e.n;
                    }),
                    someWeeks: o.filter(function (e) {
                        return !!e.n;
                    }),
                    isWeekdays:
                        -1 !== u.indexOf("MO") &&
                        -1 !== u.indexOf("TU") &&
                        -1 !== u.indexOf("WE") &&
                        -1 !== u.indexOf("TH") &&
                        -1 !== u.indexOf("FR") &&
                        -1 === u.indexOf("SA") &&
                        -1 === u.indexOf("SU"),
                    isEveryDay:
                        -1 !== u.indexOf("MO") &&
                        -1 !== u.indexOf("TU") &&
                        -1 !== u.indexOf("WE") &&
                        -1 !== u.indexOf("TH") &&
                        -1 !== u.indexOf("FR") &&
                        -1 !== u.indexOf("SA") &&
                        -1 !== u.indexOf("SU"),
                };
                var c = function (e, t) {
                    return e.weekday - t.weekday;
                };
                this.byweekday.allWeeks.sort(c),
                    this.byweekday.someWeeks.sort(c),
                    this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null),
                    this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
            } else this.byweekday = null;
        }
        return (
            (e.isFullyConvertible = function (t) {
                if (!(t.options.freq in e.IMPLEMENTED) || (t.origOptions.until && t.origOptions.count)) return !1;
                for (var r in t.origOptions) {
                    if ($(["dtstart", "wkst", "freq"], r)) break;
                    if (!$(e.IMPLEMENTED[t.options.freq], r)) return !1;
                }
                return !0;
            }),
            (e.prototype.isFullyConvertible = function () {
                return e.isFullyConvertible(this.rrule);
            }),
            (e.prototype.toString = function () {
                var t = this.gettext;
                if (!(this.options.freq in e.IMPLEMENTED))
                    return t("RRule error: Unable to fully convert this rrule to text");
                if (((this.text = [t("every")]), this[eR.FREQUENCIES[this.options.freq]](), this.options.until)) {
                    this.add(t("until"));
                    var r = this.options.until;
                    this.add(
                        this.dateFormatter(
                            r.getUTCFullYear(),
                            this.language.monthNames[r.getUTCMonth()],
                            r.getUTCDate(),
                        ),
                    );
                } else
                    this.options.count &&
                        this.add(t("for"))
                            .add(this.options.count.toString())
                            .add(t(this.plural(this.options.count) ? "times" : "time"));
                return this.isFullyConvertible() || this.add(t("(~ approximate)")), this.text.join("");
            }),
            (e.prototype.HOURLY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()),
                    this.add(e(this.plural(this.options.interval) ? "hours" : "hour"));
            }),
            (e.prototype.MINUTELY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()),
                    this.add(e(this.plural(this.options.interval) ? "minutes" : "minute"));
            }),
            (e.prototype.DAILY = function () {
                var e = this.gettext;
                1 !== this.options.interval && this.add(this.options.interval.toString()),
                    this.byweekday && this.byweekday.isWeekdays
                        ? this.add(e(this.plural(this.options.interval) ? "weekdays" : "weekday"))
                        : this.add(e(this.plural(this.options.interval) ? "days" : "day")),
                    this.origOptions.bymonth && (this.add(e("in")), this._bymonth()),
                    this.bymonthday
                        ? this._bymonthday()
                        : this.byweekday
                          ? this._byweekday()
                          : this.origOptions.byhour && this._byhour();
            }),
            (e.prototype.WEEKLY = function () {
                var e = this.gettext;
                1 !== this.options.interval &&
                    this.add(this.options.interval.toString()).add(
                        e(this.plural(this.options.interval) ? "weeks" : "week"),
                    ),
                    this.byweekday && this.byweekday.isWeekdays
                        ? 1 === this.options.interval
                            ? this.add(e(this.plural(this.options.interval) ? "weekdays" : "weekday"))
                            : this.add(e("on")).add(e("weekdays"))
                        : this.byweekday && this.byweekday.isEveryDay
                          ? this.add(e(this.plural(this.options.interval) ? "days" : "day"))
                          : (1 === this.options.interval && this.add(e("week")),
                            this.origOptions.bymonth && (this.add(e("in")), this._bymonth()),
                            this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday());
            }),
            (e.prototype.MONTHLY = function () {
                var e = this.gettext;
                this.origOptions.bymonth
                    ? (1 !== this.options.interval &&
                          (this.add(this.options.interval.toString()).add(e("months")),
                          this.plural(this.options.interval) && this.add(e("in"))),
                      this._bymonth())
                    : (1 !== this.options.interval && this.add(this.options.interval.toString()),
                      this.add(e(this.plural(this.options.interval) ? "months" : "month"))),
                    this.bymonthday
                        ? this._bymonthday()
                        : this.byweekday && this.byweekday.isWeekdays
                          ? this.add(e("on")).add(e("weekdays"))
                          : this.byweekday && this._byweekday();
            }),
            (e.prototype.YEARLY = function () {
                var e = this.gettext;
                this.origOptions.bymonth
                    ? (1 !== this.options.interval &&
                          (this.add(this.options.interval.toString()), this.add(e("years"))),
                      this._bymonth())
                    : (1 !== this.options.interval && this.add(this.options.interval.toString()),
                      this.add(e(this.plural(this.options.interval) ? "years" : "year"))),
                    this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(),
                    this.options.byyearday &&
                        this.add(e("on the"))
                            .add(this.list(this.options.byyearday, this.nth, e("and")))
                            .add(e("day")),
                    this.options.byweekno &&
                        this.add(e("in"))
                            .add(e(this.plural(this.options.byweekno.length) ? "weeks" : "week"))
                            .add(this.list(this.options.byweekno, void 0, e("and")));
            }),
            (e.prototype._bymonthday = function () {
                var e = this.gettext;
                this.byweekday && this.byweekday.allWeeks
                    ? this.add(e("on"))
                          .add(this.list(this.byweekday.allWeeks, this.weekdaytext, e("or")))
                          .add(e("the"))
                          .add(this.list(this.bymonthday, this.nth, e("or")))
                    : this.add(e("on the")).add(this.list(this.bymonthday, this.nth, e("and")));
            }),
            (e.prototype._byweekday = function () {
                var e = this.gettext;
                this.byweekday.allWeeks &&
                    !this.byweekday.isWeekdays &&
                    this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)),
                    this.byweekday.someWeeks &&
                        (this.byweekday.allWeeks && this.add(e("and")),
                        this.add(e("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, e("and"))));
            }),
            (e.prototype._byhour = function () {
                var e = this.gettext;
                this.add(e("at")).add(this.list(this.origOptions.byhour, void 0, e("and")));
            }),
            (e.prototype._bymonth = function () {
                this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
            }),
            (e.prototype.nth = function (e) {
                e = parseInt(e.toString(), 10);
                var t,
                    r = this.gettext;
                if (-1 === e) return r("last");
                var n = Math.abs(e);
                switch (n) {
                    case 1:
                    case 21:
                    case 31:
                        t = n + r("st");
                        break;
                    case 2:
                    case 22:
                        t = n + r("nd");
                        break;
                    case 3:
                    case 23:
                        t = n + r("rd");
                        break;
                    default:
                        t = n + r("th");
                }
                return e < 0 ? t + " " + r("last") : t;
            }),
            (e.prototype.monthtext = function (e) {
                return this.language.monthNames[e - 1];
            }),
            (e.prototype.weekdaytext = function (e) {
                var t = u(e) ? (e + 1) % 7 : e.getJsWeekday();
                return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
            }),
            (e.prototype.plural = function (e) {
                return e % 100 != 1;
            }),
            (e.prototype.add = function (e) {
                return this.text.push(" "), this.text.push(e), this;
            }),
            (e.prototype.list = function (e, t, r, n) {
                var s = this;
                void 0 === n && (n = ","),
                    l(e) || (e = [e]),
                    (t =
                        t ||
                        function (e) {
                            return e.toString();
                        });
                var a = function (e) {
                    return t && t.call(s, e);
                };
                if (!r) return e.map(a).join(n + " ");
                for (var o = e.map(a), i = n, u = "", c = 0; c < o.length; c++)
                    0 !== c && (c === o.length - 1 ? (u += " " + r + " ") : (u += i + " ")), (u += o[c]);
                return u;
            }),
            e
        );
    })(),
    G = (function () {
        function e(e) {
            (this.done = !0), (this.rules = e);
        }
        return (
            (e.prototype.start = function (e) {
                return (this.text = e), (this.done = !1), this.nextSymbol();
            }),
            (e.prototype.isDone = function () {
                return this.done && null === this.symbol;
            }),
            (e.prototype.nextSymbol = function () {
                (this.symbol = null), (this.value = null);
                do {
                    if (this.done) return !1;
                    for (var e in ((t = null), this.rules)) {
                        var t,
                            r,
                            n = this.rules[e].exec(this.text);
                        n && (null === t || n[0].length > t[0].length) && ((t = n), (r = e));
                    }
                    if (
                        (null != t &&
                            ((this.text = this.text.substr(t[0].length)), "" === this.text && (this.done = !0)),
                        null == t)
                    ) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ("SKIP" === r);
                return (this.symbol = r), (this.value = t), !0;
            }),
            (e.prototype.accept = function (e) {
                if (this.symbol === e) {
                    if (this.value) {
                        var t = this.value;
                        return this.nextSymbol(), t;
                    }
                    return this.nextSymbol(), !0;
                }
                return !1;
            }),
            (e.prototype.acceptNumber = function () {
                return this.accept("number");
            }),
            (e.prototype.expect = function (e) {
                if (this.accept(e)) return !0;
                throw Error("expected " + e + " but found " + this.symbol);
            }),
            e
        );
    })();
function J(e, t) {
    void 0 === t && (t = W);
    var r = {},
        n = new G(t.tokens);
    if (!n.start(e)) return null;
    return (
        (function () {
            n.expect("every");
            var e = n.acceptNumber();
            if ((e && (r.interval = parseInt(e[0], 10)), n.isDone())) throw Error("Unexpected end");
            switch (n.symbol) {
                case "day(s)":
                    (r.freq = eR.DAILY),
                        n.nextSymbol() &&
                            ((function () {
                                if (n.accept("at"))
                                    do {
                                        var e = n.acceptNumber();
                                        if (!e) throw Error("Unexpected symbol " + n.symbol + ", expected hour");
                                        for (r.byhour = [parseInt(e[0], 10)]; n.accept("comma"); ) {
                                            if (!(e = n.acceptNumber()))
                                                throw Error("Unexpected symbol " + n.symbol + "; expected hour");
                                            r.byhour.push(parseInt(e[0], 10));
                                        }
                                    } while (n.accept("comma") || n.accept("at"));
                            })(),
                            u());
                    break;
                case "weekday(s)":
                    (r.freq = eR.WEEKLY), (r.byweekday = [eR.MO, eR.TU, eR.WE, eR.TH, eR.FR]), n.nextSymbol(), u();
                    break;
                case "week(s)":
                    (r.freq = eR.WEEKLY), n.nextSymbol() && (s(), u());
                    break;
                case "hour(s)":
                    (r.freq = eR.HOURLY), n.nextSymbol() && (s(), u());
                    break;
                case "minute(s)":
                    (r.freq = eR.MINUTELY), n.nextSymbol() && (s(), u());
                    break;
                case "month(s)":
                    (r.freq = eR.MONTHLY), n.nextSymbol() && (s(), u());
                    break;
                case "year(s)":
                    (r.freq = eR.YEARLY), n.nextSymbol() && (s(), u());
                    break;
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    if (
                        ((r.freq = eR.WEEKLY),
                        (r.byweekday = [eR[n.symbol.substr(0, 2).toUpperCase()]]),
                        !n.nextSymbol())
                    )
                        return;
                    for (; n.accept("comma"); ) {
                        if (n.isDone()) throw Error("Unexpected end");
                        var t = o();
                        if (!t) throw Error("Unexpected symbol " + n.symbol + ", expected weekday");
                        r.byweekday.push(eR[t]), n.nextSymbol();
                    }
                    (function () {
                        n.accept("on"), n.accept("the");
                        var e = i();
                        if (e)
                            for (r.bymonthday = [e], n.nextSymbol(); n.accept("comma"); ) {
                                if (!(e = i())) throw Error("Unexpected symbol " + n.symbol + "; expected monthday");
                                r.bymonthday.push(e), n.nextSymbol();
                            }
                    })(),
                        u();
                    break;
                case "january":
                case "february":
                case "march":
                case "april":
                case "may":
                case "june":
                case "july":
                case "august":
                case "september":
                case "october":
                case "november":
                case "december":
                    if (((r.freq = eR.YEARLY), (r.bymonth = [a()]), !n.nextSymbol())) return;
                    for (; n.accept("comma"); ) {
                        if (n.isDone()) throw Error("Unexpected end");
                        var c = a();
                        if (!c) throw Error("Unexpected symbol " + n.symbol + ", expected month");
                        r.bymonth.push(c), n.nextSymbol();
                    }
                    s(), u();
                    break;
                default:
                    throw Error("Unknown symbol");
            }
        })(),
        r
    );
    function s() {
        var e = n.accept("on"),
            t = n.accept("the");
        if (e || t)
            do {
                var s = i(),
                    u = o(),
                    c = a();
                if (s)
                    u
                        ? (n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(eR[u].nth(s)))
                        : (r.bymonthday || (r.bymonthday = []), r.bymonthday.push(s), n.accept("day(s)"));
                else if (u) n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(eR[u]);
                else if ("weekday(s)" === n.symbol)
                    n.nextSymbol(), r.byweekday || (r.byweekday = [eR.MO, eR.TU, eR.WE, eR.TH, eR.FR]);
                else if ("week(s)" === n.symbol) {
                    n.nextSymbol();
                    var l = n.acceptNumber();
                    if (!l) throw Error("Unexpected symbol " + n.symbol + ", expected week number");
                    for (r.byweekno = [parseInt(l[0], 10)]; n.accept("comma"); ) {
                        if (!(l = n.acceptNumber()))
                            throw Error("Unexpected symbol " + n.symbol + "; expected monthday");
                        r.byweekno.push(parseInt(l[0], 10));
                    }
                } else {
                    if (!c) return;
                    n.nextSymbol(), r.bymonth || (r.bymonth = []), r.bymonth.push(c);
                }
            } while (n.accept("comma") || n.accept("the") || n.accept("on"));
    }
    function a() {
        switch (n.symbol) {
            case "january":
                return 1;
            case "february":
                return 2;
            case "march":
                return 3;
            case "april":
                return 4;
            case "may":
                return 5;
            case "june":
                return 6;
            case "july":
                return 7;
            case "august":
                return 8;
            case "september":
                return 9;
            case "october":
                return 10;
            case "november":
                return 11;
            case "december":
                return 12;
            default:
                return !1;
        }
    }
    function o() {
        switch (n.symbol) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                return n.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function i() {
        switch (n.symbol) {
            case "last":
                return n.nextSymbol(), -1;
            case "first":
                return n.nextSymbol(), 1;
            case "second":
                return n.nextSymbol(), n.accept("last") ? -2 : 2;
            case "third":
                return n.nextSymbol(), n.accept("last") ? -3 : 3;
            case "nth":
                var e = parseInt(n.value[1], 10);
                if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
                return n.nextSymbol(), n.accept("last") ? -e : e;
            default:
                return !1;
        }
    }
    function u() {
        if ("until" === n.symbol) {
            var e = Date.parse(n.text);
            if (!e) throw Error("Cannot parse until date:" + n.text);
            r.until = new Date(e);
        } else n.accept("for") && ((r.count = parseInt(n.value[0], 10)), n.expect("number"));
    }
}
function X(e) {
    return e < s.HOURLY;
}
((n = s || (s = {}))[(n.YEARLY = 0)] = "YEARLY"),
    (n[(n.MONTHLY = 1)] = "MONTHLY"),
    (n[(n.WEEKLY = 2)] = "WEEKLY"),
    (n[(n.DAILY = 3)] = "DAILY"),
    (n[(n.HOURLY = 4)] = "HOURLY"),
    (n[(n.MINUTELY = 5)] = "MINUTELY"),
    (n[(n.SECONDLY = 6)] = "SECONDLY");
var Z = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
(q.IMPLEMENTED = []),
    (q.IMPLEMENTED[s.HOURLY] = Z),
    (q.IMPLEMENTED[s.MINUTELY] = Z),
    (q.IMPLEMENTED[s.DAILY] = ["byhour"].concat(Z)),
    (q.IMPLEMENTED[s.WEEKLY] = Z),
    (q.IMPLEMENTED[s.MONTHLY] = Z),
    (q.IMPLEMENTED[s.YEARLY] = ["byweekno", "byyearday"].concat(Z));
var Q = q.isFullyConvertible,
    ee = (function () {
        function e(e, t, r, n) {
            (this.hour = e), (this.minute = t), (this.second = r), (this.millisecond = n || 0);
        }
        return (
            (e.prototype.getHours = function () {
                return this.hour;
            }),
            (e.prototype.getMinutes = function () {
                return this.minute;
            }),
            (e.prototype.getSeconds = function () {
                return this.second;
            }),
            (e.prototype.getMilliseconds = function () {
                return this.millisecond;
            }),
            (e.prototype.getTime = function () {
                return (60 * this.hour * 60 + 60 * this.minute + this.second) * 1e3 + this.millisecond;
            }),
            e
        );
    })(),
    et = (function (e) {
        function t(t, r, n, s, a, o, i) {
            var u = e.call(this, s, a, o, i) || this;
            return (u.year = t), (u.month = r), (u.day = n), u;
        }
        return (
            (0, B.C6)(t, e),
            (t.fromDate = function (e) {
                return new this(
                    e.getUTCFullYear(),
                    e.getUTCMonth() + 1,
                    e.getUTCDate(),
                    e.getUTCHours(),
                    e.getUTCMinutes(),
                    e.getUTCSeconds(),
                    e.valueOf() % 1e3,
                );
            }),
            (t.prototype.getWeekday = function () {
                return O(new Date(this.getTime()));
            }),
            (t.prototype.getTime = function () {
                return new Date(
                    Date.UTC(
                        this.year,
                        this.month - 1,
                        this.day,
                        this.hour,
                        this.minute,
                        this.second,
                        this.millisecond,
                    ),
                ).getTime();
            }),
            (t.prototype.getDay = function () {
                return this.day;
            }),
            (t.prototype.getMonth = function () {
                return this.month;
            }),
            (t.prototype.getYear = function () {
                return this.year;
            }),
            (t.prototype.addYears = function (e) {
                this.year += e;
            }),
            (t.prototype.addMonths = function (e) {
                if (((this.month += e), this.month > 12)) {
                    var t = Math.floor(this.month / 12),
                        r = m(this.month, 12);
                    (this.month = r), (this.year += t), 0 === this.month && ((this.month = 12), --this.year);
                }
            }),
            (t.prototype.addWeekly = function (e, t) {
                t > this.getWeekday()
                    ? (this.day += -(this.getWeekday() + 1 + (6 - t)) + 7 * e)
                    : (this.day += -(this.getWeekday() - t) + 7 * e),
                    this.fixDay();
            }),
            (t.prototype.addDaily = function (e) {
                (this.day += e), this.fixDay();
            }),
            (t.prototype.addHours = function (e, t, r) {
                for (t && (this.hour += Math.floor((23 - this.hour) / e) * e); ; ) {
                    this.hour += e;
                    var n = v(this.hour, 24),
                        s = n.div,
                        a = n.mod;
                    if ((s && ((this.hour = a), this.addDaily(s)), g(r) || b(r, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, r, n) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var s = v(this.minute, 60),
                        a = s.div,
                        o = s.mod;
                    if (
                        (a && ((this.minute = o), this.addHours(a, !1, r)),
                        (g(r) || b(r, this.hour)) && (g(n) || b(n, this.minute)))
                    )
                        break;
                }
            }),
            (t.prototype.addSeconds = function (e, t, r, n, s) {
                for (
                    t &&
                    (this.second += Math.floor((86399 - (3600 * this.hour + 60 * this.minute + this.second)) / e) * e);
                    ;
                ) {
                    this.second += e;
                    var a = v(this.second, 60),
                        o = a.div,
                        i = a.mod;
                    if (
                        (o && ((this.second = i), this.addMinutes(o, !1, r, n)),
                        (g(r) || b(r, this.hour)) && (g(n) || b(n, this.minute)) && (g(s) || b(s, this.second)))
                    )
                        break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = P(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (
                                ((this.day -= e),
                                ++this.month,
                                13 === this.month && ((this.month = 1), ++this.year, this.year > 9999))
                            )
                                return;
                            e = P(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var r = e.freq,
                    n = e.interval,
                    a = e.wkst,
                    o = e.byhour,
                    i = e.byminute,
                    u = e.bysecond;
                switch (r) {
                    case s.YEARLY:
                        return this.addYears(n);
                    case s.MONTHLY:
                        return this.addMonths(n);
                    case s.WEEKLY:
                        return this.addWeekly(n, a);
                    case s.DAILY:
                        return this.addDaily(n);
                    case s.HOURLY:
                        return this.addHours(n, t, o);
                    case s.MINUTELY:
                        return this.addMinutes(n, t, o, i);
                    case s.SECONDLY:
                        return this.addSeconds(n, t, o, i, u);
                }
            }),
            t
        );
    })(ee);
function er(e) {
    for (var t = [], r = Object.keys(e), n = 0; n < r.length; n++) {
        var s = r[n];
        b(ej, s) || t.push(s), S(e[s]) && !L(e[s]) && t.push(s);
    }
    if (t.length) throw Error("Invalid options: " + t.join(", "));
    return (0, B.Cl)({}, e);
}
function en(e) {
    var t = e
        .split("\n")
        .map(ea)
        .filter(function (e) {
            return null !== e;
        });
    return (0, B.Cl)((0, B.Cl)({}, t[0]), t[1]);
}
function es(e) {
    var t = {},
        r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!r) return t;
    var n = r[1],
        s = r[2];
    return n && (t.tzid = n), (t.dtstart = N(s)), t;
}
function ea(e) {
    if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return eo(e);
    var r = t[1];
    switch (r.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return eo(e);
        case "DTSTART":
            return es(e);
        default:
            throw Error("Unsupported RFC prop ".concat(r, " in ").concat(e));
    }
}
function eo(e) {
    var t = es(e.replace(/^RRULE:/i, ""));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, "")
            .split(";")
            .forEach(function (r) {
                var n = r.split("="),
                    a = n[0],
                    i = n[1];
                switch (a.toUpperCase()) {
                    case "FREQ":
                        t.freq = s[i.toUpperCase()];
                        break;
                    case "WKST":
                        t.wkst = eP[i.toUpperCase()];
                        break;
                    case "COUNT":
                    case "INTERVAL":
                    case "BYSETPOS":
                    case "BYMONTH":
                    case "BYMONTHDAY":
                    case "BYYEARDAY":
                    case "BYWEEKNO":
                    case "BYHOUR":
                    case "BYMINUTE":
                    case "BYSECOND":
                        var u,
                            c = -1 !== (u = i).indexOf(",") ? u.split(",").map(ei) : ei(u);
                        t[a.toLowerCase()] = c;
                        break;
                    case "BYWEEKDAY":
                    case "BYDAY":
                        t.byweekday = i.split(",").map(function (e) {
                            if (2 === e.length) return eP[e];
                            var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                            if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
                            var r = Number(t[1]);
                            return new o(eP[t[2]].weekday, r);
                        });
                        break;
                    case "DTSTART":
                    case "TZID":
                        var l = es(e);
                        (t.tzid = l.tzid), (t.dtstart = l.dtstart);
                        break;
                    case "UNTIL":
                        t.until = N(i);
                        break;
                    case "BYEASTER":
                        t.byeaster = Number(i);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + a + "'");
                }
            }),
        t
    );
}
function ei(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
var eu = (function () {
    function e(e, t) {
        if (isNaN(e.getTime())) throw RangeError("Invalid date passed to DateWithZone");
        (this.date = e), (this.tzid = t);
    }
    return (
        Object.defineProperty(e.prototype, "isUTC", {
            get: function () {
                return !this.tzid || "UTC" === this.tzid.toUpperCase();
            },
            enumerable: !1,
            configurable: !0,
        }),
        (e.prototype.toString = function () {
            var e = Y(this.date.getTime(), this.isUTC);
            return this.isUTC ? ":".concat(e) : ";TZID=".concat(this.tzid, ":").concat(e);
        }),
        (e.prototype.getTime = function () {
            return this.date.getTime();
        }),
        (e.prototype.rezonedDate = function () {
            return this.isUTC ? this.date : H(this.date, this.tzid);
        }),
        e
    );
})();
function ec(e) {
    for (var t = [], r = "", n = Object.keys(e), s = Object.keys(eA), a = 0; a < n.length; a++)
        if ("tzid" !== n[a] && b(s, n[a])) {
            var c,
                d,
                f = n[a].toUpperCase(),
                p = e[n[a]],
                h = "";
            if (!(!i(p) || (l(p) && !p.length))) {
                switch (f) {
                    case "FREQ":
                        h = eR.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        h = u(p) ? new o(p).toString() : p.toString();
                        break;
                    case "BYWEEKDAY":
                        (f = "BYDAY"),
                            (h = (l(p) ? p : [p])
                                .map(function (e) {
                                    return e instanceof o ? e : l(e) ? new o(e[0], e[1]) : new o(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        (c = p), (d = e.tzid), (r = c ? "DTSTART" + new eu(new Date(c), d).toString() : "");
                        break;
                    case "UNTIL":
                        h = Y(p, !e.tzid);
                        break;
                    default:
                        if (l(p)) {
                            for (var m = [], v = 0; v < p.length; v++) m[v] = String(p[v]);
                            h = m.toString();
                        } else h = String(p);
                }
                h && t.push([f, h]);
            }
        }
    var g = t
            .map(function (e) {
                var t = e[0],
                    r = e[1];
                return "".concat(t, "=").concat(r.toString());
            })
            .join(";"),
        y = "";
    return (
        "" !== g && (y = "RRULE:".concat(g)),
        [r, y]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}
var el = (function () {
        function e() {
            (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
        }
        return (
            (e.prototype._cacheAdd = function (e, t, r) {
                t && (t = t instanceof Date ? j(t) : R(t)),
                    "all" === e ? (this.all = t) : ((r._value = t), this[e].push(r));
            }),
            (e.prototype._cacheGet = function (e, t) {
                var r = !1,
                    n = t ? Object.keys(t) : [],
                    s = this[e];
                if ("all" === e) r = this.all;
                else if (l(s))
                    for (var a = 0; a < s.length; a++) {
                        var o = s[a];
                        if (
                            !(
                                n.length &&
                                (function (e) {
                                    for (var r = 0; r < n.length; r++) {
                                        var s = n[r];
                                        if (
                                            !(function (e, t) {
                                                return Array.isArray(e)
                                                    ? !!Array.isArray(t) &&
                                                          e.length === t.length &&
                                                          e.every(function (e, r) {
                                                              return e.getTime() === t[r].getTime();
                                                          })
                                                    : e instanceof Date
                                                      ? t instanceof Date && e.getTime() === t.getTime()
                                                      : e === t;
                                            })(t[s], e[s])
                                        )
                                            return !0;
                                    }
                                    return !1;
                                })(o)
                            )
                        ) {
                            r = o._value;
                            break;
                        }
                    }
                if (!r && this.all) {
                    for (var i = new z(e, t), a = 0; a < this.all.length && i.accept(this.all[a]); a++);
                    (r = i.getValue()), this._cacheAdd(e, r, t);
                }
                return l(r) ? R(r) : r instanceof Date ? j(r) : r;
            }),
            e
        );
    })(),
    ed = (0, B.fX)(
        (0, B.fX)(
            (0, B.fX)(
                (0, B.fX)(
                    (0, B.fX)(
                        (0, B.fX)(
                            (0, B.fX)(
                                (0, B.fX)(
                                    (0, B.fX)(
                                        (0, B.fX)(
                                            (0, B.fX)(
                                                (0, B.fX)((0, B.fX)([], f(1, 31), !0), f(2, 28), !0),
                                                f(3, 31),
                                                !0,
                                            ),
                                            f(4, 30),
                                            !0,
                                        ),
                                        f(5, 31),
                                        !0,
                                    ),
                                    f(6, 30),
                                    !0,
                                ),
                                f(7, 31),
                                !0,
                            ),
                            f(8, 31),
                            !0,
                        ),
                        f(9, 30),
                        !0,
                    ),
                    f(10, 31),
                    !0,
                ),
                f(11, 30),
                !0,
            ),
            f(12, 31),
            !0,
        ),
        f(1, 7),
        !0,
    ),
    ef = (0, B.fX)(
        (0, B.fX)(
            (0, B.fX)(
                (0, B.fX)(
                    (0, B.fX)(
                        (0, B.fX)(
                            (0, B.fX)(
                                (0, B.fX)(
                                    (0, B.fX)(
                                        (0, B.fX)(
                                            (0, B.fX)(
                                                (0, B.fX)((0, B.fX)([], f(1, 31), !0), f(2, 29), !0),
                                                f(3, 31),
                                                !0,
                                            ),
                                            f(4, 30),
                                            !0,
                                        ),
                                        f(5, 31),
                                        !0,
                                    ),
                                    f(6, 30),
                                    !0,
                                ),
                                f(7, 31),
                                !0,
                            ),
                            f(8, 31),
                            !0,
                        ),
                        f(9, 30),
                        !0,
                    ),
                    f(10, 31),
                    !0,
                ),
                f(11, 30),
                !0,
            ),
            f(12, 31),
            !0,
        ),
        f(1, 7),
        !0,
    ),
    ep = d(1, 29),
    eh = d(1, 30),
    em = d(1, 31),
    ev = d(1, 32),
    eg = (0, B.fX)(
        (0, B.fX)(
            (0, B.fX)(
                (0, B.fX)(
                    (0, B.fX)(
                        (0, B.fX)(
                            (0, B.fX)(
                                (0, B.fX)(
                                    (0, B.fX)(
                                        (0, B.fX)((0, B.fX)((0, B.fX)((0, B.fX)([], ev, !0), eh, !0), ev, !0), em, !0),
                                        ev,
                                        !0,
                                    ),
                                    em,
                                    !0,
                                ),
                                ev,
                                !0,
                            ),
                            ev,
                            !0,
                        ),
                        em,
                        !0,
                    ),
                    ev,
                    !0,
                ),
                em,
                !0,
            ),
            ev,
            !0,
        ),
        ev.slice(0, 7),
        !0,
    ),
    ey = (0, B.fX)(
        (0, B.fX)(
            (0, B.fX)(
                (0, B.fX)(
                    (0, B.fX)(
                        (0, B.fX)(
                            (0, B.fX)(
                                (0, B.fX)(
                                    (0, B.fX)(
                                        (0, B.fX)((0, B.fX)((0, B.fX)((0, B.fX)([], ev, !0), ep, !0), ev, !0), em, !0),
                                        ev,
                                        !0,
                                    ),
                                    em,
                                    !0,
                                ),
                                ev,
                                !0,
                            ),
                            ev,
                            !0,
                        ),
                        em,
                        !0,
                    ),
                    ev,
                    !0,
                ),
                em,
                !0,
            ),
            ev,
            !0,
        ),
        ev.slice(0, 7),
        !0,
    ),
    eb = d(-28, 0),
    e_ = d(-29, 0),
    ex = d(-30, 0),
    ew = d(-31, 0),
    ek = (0, B.fX)(
        (0, B.fX)(
            (0, B.fX)(
                (0, B.fX)(
                    (0, B.fX)(
                        (0, B.fX)(
                            (0, B.fX)(
                                (0, B.fX)(
                                    (0, B.fX)(
                                        (0, B.fX)((0, B.fX)((0, B.fX)((0, B.fX)([], ew, !0), e_, !0), ew, !0), ex, !0),
                                        ew,
                                        !0,
                                    ),
                                    ex,
                                    !0,
                                ),
                                ew,
                                !0,
                            ),
                            ew,
                            !0,
                        ),
                        ex,
                        !0,
                    ),
                    ew,
                    !0,
                ),
                ex,
                !0,
            ),
            ew,
            !0,
        ),
        ew.slice(0, 7),
        !0,
    ),
    eM = (0, B.fX)(
        (0, B.fX)(
            (0, B.fX)(
                (0, B.fX)(
                    (0, B.fX)(
                        (0, B.fX)(
                            (0, B.fX)(
                                (0, B.fX)(
                                    (0, B.fX)(
                                        (0, B.fX)((0, B.fX)((0, B.fX)((0, B.fX)([], ew, !0), eb, !0), ew, !0), ex, !0),
                                        ew,
                                        !0,
                                    ),
                                    ex,
                                    !0,
                                ),
                                ew,
                                !0,
                            ),
                            ew,
                            !0,
                        ),
                        ex,
                        !0,
                    ),
                    ew,
                    !0,
                ),
                ex,
                !0,
            ),
            ew,
            !0,
        ),
        ew.slice(0, 7),
        !0,
    ),
    eS = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
    eL = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    eT = (function () {
        for (var e = [], t = 0; t < 55; t++) e = e.concat(d(7));
        return e;
    })(),
    eE = (function () {
        function e(e) {
            this.options = e;
        }
        return (
            (e.prototype.rebuild = function (e, t) {
                var r,
                    n,
                    s,
                    a,
                    o,
                    u,
                    c,
                    l,
                    d,
                    p,
                    h = this.options;
                if (
                    (e !== this.lastyear &&
                        (this.yearinfo = (function (e, t) {
                            var r,
                                n,
                                s,
                                a,
                                o,
                                i = _(e, 1, 1),
                                u = M(e) ? 366 : 365,
                                c = M(e + 1) ? 366 : 365,
                                l = E(i),
                                d = O(i),
                                p = (0, B.Cl)(
                                    (0, B.Cl)(
                                        { yearlen: u, nextyearlen: c, yearordinal: l, yearweekday: d },
                                        ((n = M((r = e)) ? 366 : 365),
                                        (s = O(_(r, 1, 1))),
                                        365 === n
                                            ? {
                                                  mmask: ed,
                                                  mdaymask: ey,
                                                  nmdaymask: eM,
                                                  wdaymask: eT.slice(s),
                                                  mrange: eL,
                                              }
                                            : {
                                                  mmask: ef,
                                                  mdaymask: eg,
                                                  nmdaymask: ek,
                                                  wdaymask: eT.slice(s),
                                                  mrange: eS,
                                              }),
                                    ),
                                    { wnomask: null },
                                );
                            if (g(t.byweekno)) return p;
                            p.wnomask = f(0, u + 7);
                            var h = (a = m(7 - d + t.wkst, 7));
                            h >= 4 ? ((h = 0), (o = p.yearlen + m(d - t.wkst, 7))) : (o = u - h);
                            for (
                                var v = Math.floor(Math.floor(o / 7) + m(o, 7) / 4), y = 0;
                                y < t.byweekno.length;
                                y++
                            ) {
                                var x = t.byweekno[y];
                                if ((x < 0 && (x += v + 1), x > 0 && x <= v)) {
                                    var w = void 0;
                                    x > 1 ? ((w = h + (x - 1) * 7), h !== a && (w -= 7 - a)) : (w = h);
                                    for (var k = 0; k < 7 && ((p.wnomask[w] = 1), w++, p.wdaymask[w] !== t.wkst); k++);
                                }
                            }
                            if (b(t.byweekno, 1)) {
                                var w = h + 7 * v;
                                if ((h !== a && (w -= 7 - a), w < u))
                                    for (
                                        var y = 0;
                                        y < 7 && ((p.wnomask[w] = 1), (w += 1), p.wdaymask[w] !== t.wkst);
                                        y++
                                    );
                            }
                            if (h) {
                                var S = void 0;
                                if (b(t.byweekno, -1)) S = -1;
                                else {
                                    var L = O(_(e - 1, 1, 1)),
                                        T = m(7 - L.valueOf() + t.wkst, 7),
                                        D = M(e - 1) ? 366 : 365,
                                        C = void 0;
                                    T >= 4 ? ((T = 0), (C = D + m(L - t.wkst, 7))) : (C = u - h),
                                        (S = Math.floor(52 + m(C, 7) / 4));
                                }
                                if (b(t.byweekno, S)) for (var w = 0; w < h; w++) p.wnomask[w] = 1;
                            }
                            return p;
                        })(e, h)),
                    y(h.bynweekday) && (t !== this.lastmonth || e !== this.lastyear))
                ) {
                    var v = this.yearinfo,
                        x = v.yearlen,
                        w = v.mrange,
                        k = v.wdaymask;
                    this.monthinfo = (function (e, t, r, n, s, a) {
                        var o = { lastyear: e, lastmonth: t, nwdaymask: [] },
                            i = [];
                        if (a.freq === eR.YEARLY)
                            if (g(a.bymonth)) i = [[0, r]];
                            else
                                for (var u = 0; u < a.bymonth.length; u++)
                                    (t = a.bymonth[u]), i.push(n.slice(t - 1, t + 1));
                        else a.freq === eR.MONTHLY && (i = [n.slice(t - 1, t + 1)]);
                        if (g(i)) return o;
                        o.nwdaymask = f(0, r);
                        for (var u = 0; u < i.length; u++)
                            for (var c = i[u], l = c[0], d = c[1] - 1, p = 0; p < a.bynweekday.length; p++) {
                                var h = void 0,
                                    v = a.bynweekday[p],
                                    y = v[0],
                                    b = v[1];
                                b < 0
                                    ? ((h = d + (b + 1) * 7), (h -= m(s[h] - y, 7)))
                                    : ((h = l + (b - 1) * 7), (h += m(7 - s[h] + y, 7))),
                                    l <= h && h <= d && (o.nwdaymask[h] = 1);
                            }
                        return o;
                    })(e, t, x, w, k, h);
                }
                i(h.byeaster) &&
                    (this.eastermask =
                        (void 0 === (r = h.byeaster) && (r = 0),
                        (n = e % 19),
                        (s = Math.floor(e / 100)),
                        (a = e % 100),
                        (o = Math.floor(s / 4)),
                        (u = Math.floor((s + 8) / 25)),
                        (c = Math.floor((s - u + 1) / 3)),
                        (l = Math.floor(19 * n + s - o - c + 15) % 30),
                        (d = Math.floor(32 + (s % 4) * 2 + 2 * Math.floor(a / 4) - l - (a % 4)) % 7),
                        (p = Math.floor((n + 11 * l + 22 * d) / 451)),
                        [
                            Math.ceil(
                                (Date.UTC(
                                    e,
                                    Math.floor((l + d - 7 * p + 114) / 31) - 1,
                                    ((l + d - 7 * p + 114) % 31) + 1 + r,
                                ) -
                                    Date.UTC(e, 0, 1)) /
                                    864e5,
                            ),
                        ]));
            }),
            Object.defineProperty(e.prototype, "lastyear", {
                get: function () {
                    return this.monthinfo ? this.monthinfo.lastyear : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "lastmonth", {
                get: function () {
                    return this.monthinfo ? this.monthinfo.lastmonth : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "yearlen", {
                get: function () {
                    return this.yearinfo.yearlen;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "yearordinal", {
                get: function () {
                    return this.yearinfo.yearordinal;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mrange", {
                get: function () {
                    return this.yearinfo.mrange;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "wdaymask", {
                get: function () {
                    return this.yearinfo.wdaymask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mmask", {
                get: function () {
                    return this.yearinfo.mmask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "wnomask", {
                get: function () {
                    return this.yearinfo.wnomask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nwdaymask", {
                get: function () {
                    return this.monthinfo ? this.monthinfo.nwdaymask : [];
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nextyearlen", {
                get: function () {
                    return this.yearinfo.nextyearlen;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mdaymask", {
                get: function () {
                    return this.yearinfo.mdaymask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nmdaymask", {
                get: function () {
                    return this.yearinfo.nmdaymask;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.ydayset = function () {
                return [d(this.yearlen), 0, this.yearlen];
            }),
            (e.prototype.mdayset = function (e, t) {
                for (var r = this.mrange[t - 1], n = this.mrange[t], s = f(null, this.yearlen), a = r; a < n; a++)
                    s[a] = a;
                return [s, r, n];
            }),
            (e.prototype.wdayset = function (e, t, r) {
                for (
                    var n = f(null, this.yearlen + 7), s = E(_(e, t, r)) - this.yearordinal, a = s, o = 0;
                    o < 7 && ((n[s] = s), ++s, this.wdaymask[s] !== this.options.wkst);
                    o++
                );
                return [n, a, s];
            }),
            (e.prototype.ddayset = function (e, t, r) {
                var n = f(null, this.yearlen),
                    s = E(_(e, t, r)) - this.yearordinal;
                return (n[s] = s), [n, s, s + 1];
            }),
            (e.prototype.htimeset = function (e, t, r, n) {
                var s = this,
                    a = [];
                return (
                    this.options.byminute.forEach(function (t) {
                        a = a.concat(s.mtimeset(e, t, r, n));
                    }),
                    I(a),
                    a
                );
            }),
            (e.prototype.mtimeset = function (e, t, r, n) {
                var s = this.options.bysecond.map(function (r) {
                    return new ee(e, t, r, n);
                });
                return I(s), s;
            }),
            (e.prototype.stimeset = function (e, t, r, n) {
                return [new ee(e, t, r, n)];
            }),
            (e.prototype.getdayset = function (e) {
                switch (e) {
                    case s.YEARLY:
                        return this.ydayset.bind(this);
                    case s.MONTHLY:
                        return this.mdayset.bind(this);
                    case s.WEEKLY:
                        return this.wdayset.bind(this);
                    case s.DAILY:
                    default:
                        return this.ddayset.bind(this);
                }
            }),
            (e.prototype.gettimeset = function (e) {
                switch (e) {
                    case s.HOURLY:
                        return this.htimeset.bind(this);
                    case s.MINUTELY:
                        return this.mtimeset.bind(this);
                    case s.SECONDLY:
                        return this.stimeset.bind(this);
                }
            }),
            e
        );
    })();
function eD(e, t) {
    var r = t.dtstart,
        n = t.freq,
        s = t.interval,
        a = t.until,
        o = t.bysetpos,
        u = t.count;
    if (0 === u || 0 === s) return eO(e);
    var c = et.fromDate(r),
        l = new eE(t);
    l.rebuild(c.year, c.month);
    for (
        var d = (function (e, t, r) {
            var n = r.freq,
                s = r.byhour,
                a = r.byminute,
                o = r.bysecond;
            if (X(n)) {
                var i = r.dtstart.getTime() % 1e3;
                if (!X(r.freq)) return [];
                var u = [];
                return (
                    r.byhour.forEach(function (e) {
                        r.byminute.forEach(function (t) {
                            r.bysecond.forEach(function (r) {
                                u.push(new ee(e, t, r, i));
                            });
                        });
                    }),
                    u
                );
            }
            return (n >= eR.HOURLY && y(s) && !b(s, t.hour)) ||
                (n >= eR.MINUTELY && y(a) && !b(a, t.minute)) ||
                (n >= eR.SECONDLY && y(o) && !b(o, t.second))
                ? []
                : e.gettimeset(n)(t.hour, t.minute, t.second, t.millisecond);
        })(l, c, t);
        ;
    ) {
        var f = l.getdayset(n)(c.year, c.month, c.day),
            p = f[0],
            h = f[1],
            v = f[2],
            g = (function (e, t, r, n, s) {
                for (var a = !1, o = t; o < r; o++) {
                    var i = e[o];
                    (a = (function (e, t, r) {
                        var n = r.bymonth,
                            s = r.byweekno,
                            a = r.byweekday,
                            o = r.byeaster,
                            i = r.bymonthday,
                            u = r.bynmonthday,
                            c = r.byyearday;
                        return (
                            (y(n) && !b(n, e.mmask[t])) ||
                            (y(s) && !e.wnomask[t]) ||
                            (y(a) && !b(a, e.wdaymask[t])) ||
                            (y(e.nwdaymask) && !e.nwdaymask[t]) ||
                            (null !== o && !b(e.eastermask, t)) ||
                            ((y(i) || y(u)) && !b(i, e.mdaymask[t]) && !b(u, e.nmdaymask[t])) ||
                            (y(c) &&
                                ((t < e.yearlen && !b(c, t + 1) && !b(c, -e.yearlen + t)) ||
                                    (t >= e.yearlen &&
                                        !b(c, t + 1 - e.yearlen) &&
                                        !b(c, -e.nextyearlen + t - e.yearlen))))
                        );
                    })(n, i, s)) && (e[i] = null);
                }
                return a;
            })(p, h, v, l, t);
        if (y(o))
            for (
                var _ = (function (e, t, r, n, s, a) {
                        for (var o = [], u = 0; u < e.length; u++) {
                            var c = void 0,
                                l = void 0,
                                d = e[u];
                            d < 0
                                ? ((c = Math.floor(d / t.length)), (l = m(d, t.length)))
                                : ((c = Math.floor((d - 1) / t.length)), (l = m(d - 1, t.length)));
                            for (var f = [], p = r; p < n; p++) {
                                var h = a[p];
                                i(h) && f.push(h);
                            }
                            var v = void 0;
                            v = c < 0 ? f.slice(c)[0] : f[c];
                            var g = t[l],
                                y = A(D(s.yearordinal + v), g);
                            b(o, y) || o.push(y);
                        }
                        return I(o), o;
                    })(o, d, h, v, l, p),
                    x = 0;
                x < _.length;
                x++
            ) {
                var w = _[x];
                if (a && w > a) return eO(e);
                if (w >= r) {
                    var k = eC(w, t);
                    if (!e.accept(k) || (u && !--u)) return eO(e);
                }
            }
        else
            for (var x = h; x < v; x++) {
                var M = p[x];
                if (i(M))
                    for (var S = D(l.yearordinal + M), L = 0; L < d.length; L++) {
                        var w = A(S, d[L]);
                        if (a && w > a) return eO(e);
                        if (w >= r) {
                            var k = eC(w, t);
                            if (!e.accept(k) || (u && !--u)) return eO(e);
                        }
                    }
            }
        if (0 === t.interval || (c.add(t, g), c.year > 9999)) return eO(e);
        X(n) || (d = l.gettimeset(n)(c.hour, c.minute, c.second, 0)), l.rebuild(c.year, c.month);
    }
}
function eC(e, t) {
    return new eu(e, t.tzid).rezonedDate();
}
function eO(e) {
    return e.getValue();
}
var eP = { MO: new o(0), TU: new o(1), WE: new o(2), TH: new o(3), FR: new o(4), SA: new o(5), SU: new o(6) },
    eA = {
        freq: s.YEARLY,
        dtstart: null,
        interval: 1,
        wkst: eP.MO,
        count: null,
        until: null,
        tzid: null,
        bysetpos: null,
        bymonth: null,
        bymonthday: null,
        bynmonthday: null,
        byyearday: null,
        byweekno: null,
        byweekday: null,
        bynweekday: null,
        byhour: null,
        byminute: null,
        bysecond: null,
        byeaster: null,
    },
    ej = Object.keys(eA),
    eR = (function () {
        function e(e, t) {
            void 0 === e && (e = {}),
                void 0 === t && (t = !1),
                (this._cache = t ? null : new el()),
                (this.origOptions = er(e));
            var r = (function (e) {
                var t = (0, B.Cl)((0, B.Cl)({}, eA), er(e));
                if ((i(t.byeaster) && (t.freq = eR.YEARLY), !(i(t.freq) && eR.FREQUENCIES[t.freq])))
                    throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
                if (
                    (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))),
                    i(t.wkst) ? u(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = eR.MO.weekday),
                    i(t.bysetpos))
                ) {
                    u(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
                    for (var r = 0; r < t.bysetpos.length; r++) {
                        var n = t.bysetpos[r];
                        if (0 === n || !(n >= -366 && n <= 366))
                            throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
                    }
                }
                if (
                    !(
                        t.byweekno ||
                        y(t.byweekno) ||
                        y(t.byyearday) ||
                        t.bymonthday ||
                        y(t.bymonthday) ||
                        i(t.byweekday) ||
                        i(t.byeaster)
                    )
                )
                    switch (t.freq) {
                        case eR.YEARLY:
                            t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1),
                                (t.bymonthday = t.dtstart.getUTCDate());
                            break;
                        case eR.MONTHLY:
                            t.bymonthday = t.dtstart.getUTCDate();
                            break;
                        case eR.WEEKLY:
                            t.byweekday = [O(t.dtstart)];
                    }
                if (
                    (i(t.bymonth) && !l(t.bymonth) && (t.bymonth = [t.bymonth]),
                    i(t.byyearday) && !l(t.byyearday) && u(t.byyearday) && (t.byyearday = [t.byyearday]),
                    i(t.bymonthday))
                )
                    if (l(t.bymonthday)) {
                        for (var s = [], a = [], r = 0; r < t.bymonthday.length; r++) {
                            var n = t.bymonthday[r];
                            n > 0 ? s.push(n) : n < 0 && a.push(n);
                        }
                        (t.bymonthday = s), (t.bynmonthday = a);
                    } else
                        t.bymonthday < 0
                            ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = []))
                            : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
                else (t.bymonthday = []), (t.bynmonthday = []);
                if ((i(t.byweekno) && !l(t.byweekno) && (t.byweekno = [t.byweekno]), i(t.byweekday)))
                    if (u(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
                    else if (c(t.byweekday)) (t.byweekday = [o.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
                    else if (t.byweekday instanceof o)
                        !t.byweekday.n || t.freq > eR.MONTHLY
                            ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null))
                            : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
                    else {
                        for (var d = [], f = [], r = 0; r < t.byweekday.length; r++) {
                            var p = t.byweekday[r];
                            if (u(p)) {
                                d.push(p);
                                continue;
                            }
                            if (c(p)) {
                                d.push(o.fromStr(p).weekday);
                                continue;
                            }
                            !p.n || t.freq > eR.MONTHLY ? d.push(p.weekday) : f.push([p.weekday, p.n]);
                        }
                        (t.byweekday = y(d) ? d : null), (t.bynweekday = y(f) ? f : null);
                    }
                else t.bynweekday = null;
                return (
                    i(t.byhour)
                        ? u(t.byhour) && (t.byhour = [t.byhour])
                        : (t.byhour = t.freq < eR.HOURLY ? [t.dtstart.getUTCHours()] : null),
                    i(t.byminute)
                        ? u(t.byminute) && (t.byminute = [t.byminute])
                        : (t.byminute = t.freq < eR.MINUTELY ? [t.dtstart.getUTCMinutes()] : null),
                    i(t.bysecond)
                        ? u(t.bysecond) && (t.bysecond = [t.bysecond])
                        : (t.bysecond = t.freq < eR.SECONDLY ? [t.dtstart.getUTCSeconds()] : null),
                    { parsedOptions: t }
                );
            })(e).parsedOptions;
            this.options = r;
        }
        return (
            (e.parseText = function (e, t) {
                return J(e, t);
            }),
            (e.fromText = function (e, t) {
                var r;
                return void 0 === (r = t) && (r = W), new eR(J(e, r) || void 0);
            }),
            (e.fromString = function (t) {
                return new e(e.parseString(t) || void 0);
            }),
            (e.prototype._iter = function (e) {
                return eD(e, this.options);
            }),
            (e.prototype._cacheGet = function (e, t) {
                return !!this._cache && this._cache._cacheGet(e, t);
            }),
            (e.prototype._cacheAdd = function (e, t, r) {
                if (this._cache) return this._cache._cacheAdd(e, t, r);
            }),
            (e.prototype.all = function (e) {
                if (e) return this._iter(new U("all", {}, e));
                var t = this._cacheGet("all");
                return !1 === t && ((t = this._iter(new z("all", {}))), this._cacheAdd("all", t)), t;
            }),
            (e.prototype.between = function (e, t, r, n) {
                if ((void 0 === r && (r = !1), !L(e) || !L(t))) throw Error("Invalid date passed in to RRule.between");
                var s = { before: t, after: e, inc: r };
                if (n) return this._iter(new U("between", s, n));
                var a = this._cacheGet("between", s);
                return !1 === a && ((a = this._iter(new z("between", s))), this._cacheAdd("between", a, s)), a;
            }),
            (e.prototype.before = function (e, t) {
                if ((void 0 === t && (t = !1), !L(e))) throw Error("Invalid date passed in to RRule.before");
                var r = { dt: e, inc: t },
                    n = this._cacheGet("before", r);
                return !1 === n && ((n = this._iter(new z("before", r))), this._cacheAdd("before", n, r)), n;
            }),
            (e.prototype.after = function (e, t) {
                if ((void 0 === t && (t = !1), !L(e))) throw Error("Invalid date passed in to RRule.after");
                var r = { dt: e, inc: t },
                    n = this._cacheGet("after", r);
                return !1 === n && ((n = this._iter(new z("after", r))), this._cacheAdd("after", n, r)), n;
            }),
            (e.prototype.count = function () {
                return this.all().length;
            }),
            (e.prototype.toString = function () {
                return ec(this.origOptions);
            }),
            (e.prototype.toText = function (e, t, r) {
                return new q(this, e, t, r).toString();
            }),
            (e.prototype.isFullyConvertibleToText = function () {
                return Q(this);
            }),
            (e.prototype.clone = function () {
                return new e(this.origOptions);
            }),
            (e.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"]),
            (e.YEARLY = s.YEARLY),
            (e.MONTHLY = s.MONTHLY),
            (e.WEEKLY = s.WEEKLY),
            (e.DAILY = s.DAILY),
            (e.HOURLY = s.HOURLY),
            (e.MINUTELY = s.MINUTELY),
            (e.SECONDLY = s.SECONDLY),
            (e.MO = eP.MO),
            (e.TU = eP.TU),
            (e.WE = eP.WE),
            (e.TH = eP.TH),
            (e.FR = eP.FR),
            (e.SA = eP.SA),
            (e.SU = eP.SU),
            (e.parseString = en),
            (e.optionsToString = ec),
            e
        );
    })(),
    eI = { dtstart: null, cache: !1, unfold: !1, forceset: !1, compatible: !1, tzid: null };
function eY(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var r,
                n,
                s,
                a,
                o,
                i,
                u,
                c =
                    ((r = []),
                    (n = []),
                    (s = []),
                    (a = []),
                    (i = (o = es(e)).dtstart),
                    (u = o.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error("Invalid empty string");
                        if (!t) return e.split(/\s/);
                        for (var r = e.split("\n"), n = 0; n < r.length; ) {
                            var s = (r[n] = r[n].replace(/\s+$/g, ""));
                            s
                                ? n > 0 && " " === s[0]
                                    ? ((r[n - 1] += s.slice(1)), r.splice(n, 1))
                                    : (n += 1)
                                : r.splice(n, 1);
                        }
                        return r;
                    })(e, t.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                o = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(":")) return { name: "RRULE", value: e };
                                            var t = h(e, ":", 1);
                                            return { name: t[0], value: t[1] };
                                        })(e),
                                        r = t.name,
                                        n = t.value,
                                        s = r.split(";");
                                    if (!s) throw Error("empty property name");
                                    return { name: s[0].toUpperCase(), parms: s.slice(1), value: n };
                                })(e),
                                i = o.name,
                                c = o.parms,
                                l = o.value;
                            switch (i.toUpperCase()) {
                                case "RRULE":
                                    if (c.length) throw Error("unsupported RRULE parm: ".concat(c.join(",")));
                                    r.push(en(e));
                                    break;
                                case "RDATE":
                                    var d = (null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [])[1];
                                    d && !u && (u = d), (n = n.concat(eF(l, c)));
                                    break;
                                case "EXRULE":
                                    if (c.length) throw Error("unsupported EXRULE parm: ".concat(c.join(",")));
                                    s.push(en(l));
                                    break;
                                case "EXDATE":
                                    a = a.concat(eF(l, c));
                                    break;
                                case "DTSTART":
                                    break;
                                default:
                                    throw Error("unsupported property: " + i);
                            }
                        }
                    }),
                    { dtstart: i, tzid: u, rrulevals: r, rdatevals: n, exrulevals: s, exdatevals: a }),
                l = c.rrulevals,
                d = c.rdatevals,
                f = c.exrulevals,
                p = c.exdatevals,
                m = c.dtstart,
                v = c.tzid,
                g = !1 === t.cache;
            if (
                (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
                t.forceset || l.length > 1 || d.length || f.length || p.length)
            ) {
                var y = new ez(g);
                return (
                    y.dtstart(m),
                    y.tzid(v || void 0),
                    l.forEach(function (e) {
                        y.rrule(new eR(eN(e, m, v), g));
                    }),
                    d.forEach(function (e) {
                        y.rdate(e);
                    }),
                    f.forEach(function (e) {
                        y.exrule(new eR(eN(e, m, v), g));
                    }),
                    p.forEach(function (e) {
                        y.exdate(e);
                    }),
                    t.compatible && t.dtstart && y.rdate(m),
                    y
                );
            }
            var b = l[0] || {};
            return new eR(eN(b, b.dtstart || t.dtstart || m, b.tzid || t.tzid || v), g);
        })(
            e,
            (function (e) {
                var t = [],
                    r = Object.keys(e),
                    n = Object.keys(eI);
                if (
                    (r.forEach(function (e) {
                        b(n, e) || t.push(e);
                    }),
                    t.length)
                )
                    throw Error("Invalid options: " + t.join(", "));
                return (0, B.Cl)((0, B.Cl)({}, eI), e);
            })(t),
        )
    );
}
function eN(e, t, r) {
    return (0, B.Cl)((0, B.Cl)({}, e), { dtstart: t, tzid: r });
}
function eF(e, t) {
    return (
        t.forEach(function (e) {
            if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
        }),
        e.split(",").map(function (e) {
            return N(e);
        })
    );
}
function eH(e) {
    var t = this;
    return function (r) {
        if ((void 0 !== r && (t["_".concat(e)] = r), void 0 !== t["_".concat(e)])) return t["_".concat(e)];
        for (var n = 0; n < t._rrule.length; n++) {
            var s = t._rrule[n].origOptions[e];
            if (s) return s;
        }
    };
}
var ez = (function (e) {
    function t(t) {
        void 0 === t && (t = !1);
        var r = e.call(this, {}, t) || this;
        return (
            (r.dtstart = eH.apply(r, ["dtstart"])),
            (r.tzid = eH.apply(r, ["tzid"])),
            (r._rrule = []),
            (r._rdate = []),
            (r._exrule = []),
            (r._exdate = []),
            r
        );
    }
    return (
        (0, B.C6)(t, e),
        (t.prototype._iter = function (e) {
            return (function (e, t, r, n, s, a) {
                var o = {},
                    i = e.accept;
                function u(e, t) {
                    r.forEach(function (r) {
                        r.between(e, t, !0).forEach(function (e) {
                            o[Number(e)] = !0;
                        });
                    });
                }
                s.forEach(function (e) {
                    o[Number(new eu(e, a).rezonedDate())] = !0;
                }),
                    (e.accept = function (e) {
                        var t = Number(e);
                        return isNaN(t)
                            ? i.call(this, e)
                            : !!o[t] || (u(new Date(t - 1), new Date(t + 1)), !!o[t]) || ((o[t] = !0), i.call(this, e));
                    }),
                    "between" === e.method &&
                        (u(e.args.after, e.args.before),
                        (e.accept = function (e) {
                            var t = Number(e);
                            return !!o[t] || ((o[t] = !0), i.call(this, e));
                        }));
                for (var c = 0; c < n.length; c++) {
                    var l = new eu(n[c], a).rezonedDate();
                    if (!e.accept(new Date(l.getTime()))) break;
                }
                t.forEach(function (t) {
                    eD(e, t.options);
                });
                var d = e._result;
                switch ((I(d), e.method)) {
                    case "all":
                    case "between":
                        return d;
                    case "before":
                        return (d.length && d[d.length - 1]) || null;
                    default:
                        return (d.length && d[0]) || null;
                }
            })(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
        }),
        (t.prototype.rrule = function (e) {
            eB(e, this._rrule);
        }),
        (t.prototype.exrule = function (e) {
            eB(e, this._exrule);
        }),
        (t.prototype.rdate = function (e) {
            eU(e, this._rdate);
        }),
        (t.prototype.exdate = function (e) {
            eU(e, this._exdate);
        }),
        (t.prototype.rrules = function () {
            return this._rrule.map(function (e) {
                return eY(e.toString());
            });
        }),
        (t.prototype.exrules = function () {
            return this._exrule.map(function (e) {
                return eY(e.toString());
            });
        }),
        (t.prototype.rdates = function () {
            return this._rdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (t.prototype.exdates = function () {
            return this._exdate.map(function (e) {
                return new Date(e.getTime());
            });
        }),
        (t.prototype.valueOf = function () {
            var e = [];
            return (
                !this._rrule.length && this._dtstart && (e = e.concat(ec({ dtstart: this._dtstart }))),
                this._rrule.forEach(function (t) {
                    e = e.concat(t.toString().split("\n"));
                }),
                this._exrule.forEach(function (t) {
                    e = e.concat(
                        t
                            .toString()
                            .split("\n")
                            .map(function (e) {
                                return e.replace(/^RRULE:/, "EXRULE:");
                            })
                            .filter(function (e) {
                                return !/^DTSTART/.test(e);
                            }),
                    );
                }),
                this._rdate.length && e.push(eW("RDATE", this._rdate, this.tzid())),
                this._exdate.length && e.push(eW("EXDATE", this._exdate, this.tzid())),
                e
            );
        }),
        (t.prototype.toString = function () {
            return this.valueOf().join("\n");
        }),
        (t.prototype.clone = function () {
            var e = new t(!!this._cache);
            return (
                this._rrule.forEach(function (t) {
                    return e.rrule(t.clone());
                }),
                this._exrule.forEach(function (t) {
                    return e.exrule(t.clone());
                }),
                this._rdate.forEach(function (t) {
                    return e.rdate(new Date(t.getTime()));
                }),
                this._exdate.forEach(function (t) {
                    return e.exdate(new Date(t.getTime()));
                }),
                e
            );
        }),
        t
    );
})(eR);
function eB(e, t) {
    if (!(e instanceof eR)) throw TypeError(String(e) + " is not RRule instance");
    b(t.map(String), String(e)) || t.push(e);
}
function eU(e, t) {
    if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
    b(t.map(Number), Number(e)) || (t.push(e), I(t));
}
function eW(e, t, r) {
    var n = !r || "UTC" === r.toUpperCase(),
        s = n ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(r, ":"),
        a = t
            .map(function (e) {
                return Y(e.valueOf(), n);
            })
            .join(",");
    return "".concat(s).concat(a);
}
