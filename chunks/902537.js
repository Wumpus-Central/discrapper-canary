"use strict";
n.d(t, { p3: () => eI, Bw: () => o });
var r,
    a,
    i = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    o = (function () {
        function e(e, t) {
            if (0 === t) throw Error("Can't create weekday with n == 0");
            (this.weekday = e), (this.n = t);
        }
        return (
            (e.fromStr = function (t) {
                return new e(i.indexOf(t));
            }),
            (e.prototype.nth = function (t) {
                return this.n === t ? this : new e(this.weekday, t);
            }),
            (e.prototype.equals = function (e) {
                return this.weekday === e.weekday && this.n === e.n;
            }),
            (e.prototype.toString = function () {
                var e = i[this.weekday];
                return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
            }),
            (e.prototype.getJsWeekday = function () {
                return 6 === this.weekday ? 0 : this.weekday + 1;
            }),
            e
        );
    })(),
    s = function (e) {
        return null != e;
    },
    l = function (e) {
        return "number" == typeof e;
    },
    c = function (e) {
        return "string" == typeof e && i.includes(e);
    },
    u = Array.isArray,
    d = function (e, t) {
        void 0 === t && (t = e), 1 == arguments.length && ((t = e), (e = 0));
        for (var n = [], r = e; r < t; r++) n.push(r);
        return n;
    },
    _ = function (e, t) {
        var n = 0,
            r = [];
        if (u(e)) for (; n < t; n++) r[n] = [].concat(e);
        else for (; n < t; n++) r[n] = e;
        return r;
    };
function p(e, t, n) {
    void 0 === n && (n = " ");
    var r = String(e);
    return ((t |= 0), r.length > t)
        ? String(r)
        : ((t -= r.length) > n.length && (n += _(n, t / n.length)), n.slice(0, t) + String(r));
}
var m = function (e, t, n) {
        var r = e.split(t);
        return n ? r.slice(0, n).concat([r.slice(n).join(t)]) : r;
    },
    f = function (e, t) {
        var n = e % t;
        return n * t < 0 ? n + t : n;
    },
    g = function (e, t) {
        return { div: Math.floor(e / t), mod: f(e, t) };
    },
    h = function (e) {
        return !s(e) || 0 === e.length;
    },
    b = function (e) {
        return !h(e);
    },
    E = function (e, t) {
        return b(e) && -1 !== e.indexOf(t);
    },
    y = function (e, t, n, r, a, i) {
        return (
            void 0 === r && (r = 0),
            void 0 === a && (a = 0),
            void 0 === i && (i = 0),
            new Date(Date.UTC(e, t - 1, n, r, a, i))
        );
    },
    v = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    S = y(1970, 1, 1),
    T = [6, 0, 1, 2, 3, 4, 5],
    C = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    D = function (e) {
        return e instanceof Date;
    },
    O = function (e) {
        return D(e) && !isNaN(e.getTime());
    },
    w = function (e) {
        return 60 * e.getTimezoneOffset() * 1e3;
    },
    A = function (e) {
        var t, n;
        return (t = e), (n = S), Math.round((t.getTime() - w(t) - (n.getTime() - w(n))) / 864e5);
    },
    R = function (e) {
        return new Date(S.getTime() + 864e5 * e);
    },
    M = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && C(e.getUTCFullYear()) ? 29 : v[t];
    },
    N = function (e) {
        return T[e.getUTCDay()];
    },
    x = function (e, t) {
        var n = y(e, t + 1, 1);
        return [N(n), M(n)];
    },
    L = function (e, t) {
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
    k = function (e) {
        return new Date(e.getTime());
    },
    I = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(k(e[n]));
        return t;
    },
    P = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    F = function (e, t) {
        void 0 === t && (t = !0);
        var n = new Date(e);
        return [
            p(n.getUTCFullYear().toString(), 4, "0"),
            p(n.getUTCMonth() + 1, 2, "0"),
            p(n.getUTCDate(), 2, "0"),
            "T",
            p(n.getUTCHours(), 2, "0"),
            p(n.getUTCMinutes(), 2, "0"),
            p(n.getUTCSeconds(), 2, "0"),
            t ? "Z" : "",
        ].join("");
    },
    Y = function (e) {
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
    B = function (e, t) {
        return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
    },
    U = function (e, t) {
        var n = new Date(B(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            r = new Date(B(e, null != t ? t : "UTC")).getTime() - n.getTime();
        return new Date(e.getTime() - r);
    },
    j = (function () {
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
                    n = this.maxDate && e > this.maxDate;
                if ("between" === this.method) {
                    if (t) return !0;
                    if (n) return !1;
                } else if ("before" === this.method) {
                    if (n) return !1;
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
    H = n(56636),
    G = (function (e) {
        function t(t, n, r) {
            var a = e.call(this, t, n) || this;
            return (a.iterator = r), a;
        }
        return (
            (0, H.C6)(t, e),
            (t.prototype.add = function (e) {
                return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
            }),
            t
        );
    })(j);
let z = {
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
var W = function (e, t) {
        return -1 !== e.indexOf(t);
    },
    q = function (e) {
        return e.toString();
    },
    V = function (e, t, n) {
        return "".concat(t, " ").concat(n, ", ").concat(e);
    },
    $ = (function () {
        function e(e, t, n, r) {
            if (
                (void 0 === t && (t = q),
                void 0 === n && (n = z),
                void 0 === r && (r = V),
                (this.text = []),
                (this.language = n || z),
                (this.gettext = t),
                (this.dateFormatter = r),
                (this.rrule = e),
                (this.options = e.options),
                (this.origOptions = e.origOptions),
                this.origOptions.bymonthday)
            ) {
                var a = [].concat(this.options.bymonthday),
                    i = [].concat(this.options.bynmonthday);
                a.sort(function (e, t) {
                    return e - t;
                }),
                    i.sort(function (e, t) {
                        return t - e;
                    }),
                    (this.bymonthday = a.concat(i)),
                    this.bymonthday.length || (this.bymonthday = null);
            }
            if (s(this.origOptions.byweekday)) {
                var o = u(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                    l = String(o);
                this.byweekday = {
                    allWeeks: o.filter(function (e) {
                        return !e.n;
                    }),
                    someWeeks: o.filter(function (e) {
                        return !!e.n;
                    }),
                    isWeekdays:
                        -1 !== l.indexOf("MO") &&
                        -1 !== l.indexOf("TU") &&
                        -1 !== l.indexOf("WE") &&
                        -1 !== l.indexOf("TH") &&
                        -1 !== l.indexOf("FR") &&
                        -1 === l.indexOf("SA") &&
                        -1 === l.indexOf("SU"),
                    isEveryDay:
                        -1 !== l.indexOf("MO") &&
                        -1 !== l.indexOf("TU") &&
                        -1 !== l.indexOf("WE") &&
                        -1 !== l.indexOf("TH") &&
                        -1 !== l.indexOf("FR") &&
                        -1 !== l.indexOf("SA") &&
                        -1 !== l.indexOf("SU"),
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
                for (var n in t.origOptions) {
                    if (W(["dtstart", "wkst", "freq"], n)) break;
                    if (!W(e.IMPLEMENTED[t.options.freq], n)) return !1;
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
                if (((this.text = [t("every")]), this[eI.FREQUENCIES[this.options.freq]](), this.options.until)) {
                    this.add(t("until"));
                    var n = this.options.until;
                    this.add(
                        this.dateFormatter(
                            n.getUTCFullYear(),
                            this.language.monthNames[n.getUTCMonth()],
                            n.getUTCDate(),
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
                    n = this.gettext;
                if (-1 === e) return n("last");
                var r = Math.abs(e);
                switch (r) {
                    case 1:
                    case 21:
                    case 31:
                        t = r + n("st");
                        break;
                    case 2:
                    case 22:
                        t = r + n("nd");
                        break;
                    case 3:
                    case 23:
                        t = r + n("rd");
                        break;
                    default:
                        t = r + n("th");
                }
                return e < 0 ? t + " " + n("last") : t;
            }),
            (e.prototype.monthtext = function (e) {
                return this.language.monthNames[e - 1];
            }),
            (e.prototype.weekdaytext = function (e) {
                var t = l(e) ? (e + 1) % 7 : e.getJsWeekday();
                return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
            }),
            (e.prototype.plural = function (e) {
                return e % 100 != 1;
            }),
            (e.prototype.add = function (e) {
                return this.text.push(" "), this.text.push(e), this;
            }),
            (e.prototype.list = function (e, t, n, r) {
                var a = this;
                void 0 === r && (r = ","),
                    u(e) || (e = [e]),
                    (t =
                        t ||
                        function (e) {
                            return e.toString();
                        });
                var i = function (e) {
                    return t && t.call(a, e);
                };
                if (!n) return e.map(i).join(r + " ");
                for (var o = e.map(i), s = r, l = "", c = 0; c < o.length; c++)
                    0 !== c && (c === o.length - 1 ? (l += " " + n + " ") : (l += s + " ")), (l += o[c]);
                return l;
            }),
            e
        );
    })(),
    Q = (function () {
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
                            n,
                            r = this.rules[e].exec(this.text);
                        r && (null === t || r[0].length > t[0].length) && ((t = r), (n = e));
                    }
                    if (
                        (null != t &&
                            ((this.text = this.text.substr(t[0].length)), "" === this.text && (this.done = !0)),
                        null == t)
                    ) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ("SKIP" === n);
                return (this.symbol = n), (this.value = t), !0;
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
function K(e, t) {
    void 0 === t && (t = z);
    var n = {},
        r = new Q(t.tokens);
    if (!r.start(e)) return null;
    return (
        (function () {
            r.expect("every");
            var e = r.acceptNumber();
            if ((e && (n.interval = parseInt(e[0], 10)), r.isDone())) throw Error("Unexpected end");
            switch (r.symbol) {
                case "day(s)":
                    (n.freq = eI.DAILY),
                        r.nextSymbol() &&
                            ((function () {
                                if (r.accept("at"))
                                    do {
                                        var e = r.acceptNumber();
                                        if (!e) throw Error("Unexpected symbol " + r.symbol + ", expected hour");
                                        for (n.byhour = [parseInt(e[0], 10)]; r.accept("comma"); ) {
                                            if (!(e = r.acceptNumber()))
                                                throw Error("Unexpected symbol " + r.symbol + "; expected hour");
                                            n.byhour.push(parseInt(e[0], 10));
                                        }
                                    } while (r.accept("comma") || r.accept("at"));
                            })(),
                            l());
                    break;
                case "weekday(s)":
                    (n.freq = eI.WEEKLY), (n.byweekday = [eI.MO, eI.TU, eI.WE, eI.TH, eI.FR]), r.nextSymbol(), l();
                    break;
                case "week(s)":
                    (n.freq = eI.WEEKLY), r.nextSymbol() && (a(), l());
                    break;
                case "hour(s)":
                    (n.freq = eI.HOURLY), r.nextSymbol() && (a(), l());
                    break;
                case "minute(s)":
                    (n.freq = eI.MINUTELY), r.nextSymbol() && (a(), l());
                    break;
                case "month(s)":
                    (n.freq = eI.MONTHLY), r.nextSymbol() && (a(), l());
                    break;
                case "year(s)":
                    (n.freq = eI.YEARLY), r.nextSymbol() && (a(), l());
                    break;
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    if (
                        ((n.freq = eI.WEEKLY),
                        (n.byweekday = [eI[r.symbol.substr(0, 2).toUpperCase()]]),
                        !r.nextSymbol())
                    )
                        return;
                    for (; r.accept("comma"); ) {
                        if (r.isDone()) throw Error("Unexpected end");
                        var t = o();
                        if (!t) throw Error("Unexpected symbol " + r.symbol + ", expected weekday");
                        n.byweekday.push(eI[t]), r.nextSymbol();
                    }
                    (function () {
                        r.accept("on"), r.accept("the");
                        var e = s();
                        if (e)
                            for (n.bymonthday = [e], r.nextSymbol(); r.accept("comma"); ) {
                                if (!(e = s())) throw Error("Unexpected symbol " + r.symbol + "; expected monthday");
                                n.bymonthday.push(e), r.nextSymbol();
                            }
                    })(),
                        l();
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
                    if (((n.freq = eI.YEARLY), (n.bymonth = [i()]), !r.nextSymbol())) return;
                    for (; r.accept("comma"); ) {
                        if (r.isDone()) throw Error("Unexpected end");
                        var c = i();
                        if (!c) throw Error("Unexpected symbol " + r.symbol + ", expected month");
                        n.bymonth.push(c), r.nextSymbol();
                    }
                    a(), l();
                    break;
                default:
                    throw Error("Unknown symbol");
            }
        })(),
        n
    );
    function a() {
        var e = r.accept("on"),
            t = r.accept("the");
        if (e || t)
            do {
                var a = s(),
                    l = o(),
                    c = i();
                if (a)
                    l
                        ? (r.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(eI[l].nth(a)))
                        : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(a), r.accept("day(s)"));
                else if (l) r.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(eI[l]);
                else if ("weekday(s)" === r.symbol)
                    r.nextSymbol(), n.byweekday || (n.byweekday = [eI.MO, eI.TU, eI.WE, eI.TH, eI.FR]);
                else if ("week(s)" === r.symbol) {
                    r.nextSymbol();
                    var u = r.acceptNumber();
                    if (!u) throw Error("Unexpected symbol " + r.symbol + ", expected week number");
                    for (n.byweekno = [parseInt(u[0], 10)]; r.accept("comma"); ) {
                        if (!(u = r.acceptNumber()))
                            throw Error("Unexpected symbol " + r.symbol + "; expected monthday");
                        n.byweekno.push(parseInt(u[0], 10));
                    }
                } else {
                    if (!c) return;
                    r.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(c);
                }
            } while (r.accept("comma") || r.accept("the") || r.accept("on"));
    }
    function i() {
        switch (r.symbol) {
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
        switch (r.symbol) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                return r.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function s() {
        switch (r.symbol) {
            case "last":
                return r.nextSymbol(), -1;
            case "first":
                return r.nextSymbol(), 1;
            case "second":
                return r.nextSymbol(), r.accept("last") ? -2 : 2;
            case "third":
                return r.nextSymbol(), r.accept("last") ? -3 : 3;
            case "nth":
                var e = parseInt(r.value[1], 10);
                if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
                return r.nextSymbol(), r.accept("last") ? -e : e;
            default:
                return !1;
        }
    }
    function l() {
        if ("until" === r.symbol) {
            var e = Date.parse(r.text);
            if (!e) throw Error("Cannot parse until date:" + r.text);
            n.until = new Date(e);
        } else r.accept("for") && ((n.count = parseInt(r.value[0], 10)), r.expect("number"));
    }
}
function X(e) {
    return e < a.HOURLY;
}
((r = a || (a = {}))[(r.YEARLY = 0)] = "YEARLY"),
    (r[(r.MONTHLY = 1)] = "MONTHLY"),
    (r[(r.WEEKLY = 2)] = "WEEKLY"),
    (r[(r.DAILY = 3)] = "DAILY"),
    (r[(r.HOURLY = 4)] = "HOURLY"),
    (r[(r.MINUTELY = 5)] = "MINUTELY"),
    (r[(r.SECONDLY = 6)] = "SECONDLY");
var Z = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
($.IMPLEMENTED = []),
    ($.IMPLEMENTED[a.HOURLY] = Z),
    ($.IMPLEMENTED[a.MINUTELY] = Z),
    ($.IMPLEMENTED[a.DAILY] = ["byhour"].concat(Z)),
    ($.IMPLEMENTED[a.WEEKLY] = Z),
    ($.IMPLEMENTED[a.MONTHLY] = Z),
    ($.IMPLEMENTED[a.YEARLY] = ["byweekno", "byyearday"].concat(Z));
var J = $.isFullyConvertible,
    ee = (function () {
        function e(e, t, n, r) {
            (this.hour = e), (this.minute = t), (this.second = n), (this.millisecond = r || 0);
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
        function t(t, n, r, a, i, o, s) {
            var l = e.call(this, a, i, o, s) || this;
            return (l.year = t), (l.month = n), (l.day = r), l;
        }
        return (
            (0, H.C6)(t, e),
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
                return N(new Date(this.getTime()));
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
                        n = f(this.month, 12);
                    (this.month = n), (this.year += t), 0 === this.month && ((this.month = 12), --this.year);
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
            (t.prototype.addHours = function (e, t, n) {
                for (t && (this.hour += Math.floor((23 - this.hour) / e) * e); ; ) {
                    this.hour += e;
                    var r = g(this.hour, 24),
                        a = r.div,
                        i = r.mod;
                    if ((a && ((this.hour = i), this.addDaily(a)), h(n) || E(n, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, n, r) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var a = g(this.minute, 60),
                        i = a.div,
                        o = a.mod;
                    if (
                        (i && ((this.minute = o), this.addHours(i, !1, n)),
                        (h(n) || E(n, this.hour)) && (h(r) || E(r, this.minute)))
                    )
                        break;
                }
            }),
            (t.prototype.addSeconds = function (e, t, n, r, a) {
                for (
                    t &&
                    (this.second += Math.floor((86399 - (3600 * this.hour + 60 * this.minute + this.second)) / e) * e);
                    ;
                ) {
                    this.second += e;
                    var i = g(this.second, 60),
                        o = i.div,
                        s = i.mod;
                    if (
                        (o && ((this.second = s), this.addMinutes(o, !1, n, r)),
                        (h(n) || E(n, this.hour)) && (h(r) || E(r, this.minute)) && (h(a) || E(a, this.second)))
                    )
                        break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = x(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (
                                ((this.day -= e),
                                ++this.month,
                                13 === this.month && ((this.month = 1), ++this.year, this.year > 9999))
                            )
                                return;
                            e = x(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var n = e.freq,
                    r = e.interval,
                    i = e.wkst,
                    o = e.byhour,
                    s = e.byminute,
                    l = e.bysecond;
                switch (n) {
                    case a.YEARLY:
                        return this.addYears(r);
                    case a.MONTHLY:
                        return this.addMonths(r);
                    case a.WEEKLY:
                        return this.addWeekly(r, i);
                    case a.DAILY:
                        return this.addDaily(r);
                    case a.HOURLY:
                        return this.addHours(r, t, o);
                    case a.MINUTELY:
                        return this.addMinutes(r, t, o, s);
                    case a.SECONDLY:
                        return this.addSeconds(r, t, o, s, l);
                }
            }),
            t
        );
    })(ee);
function en(e) {
    for (var t = [], n = Object.keys(e), r = 0; r < n.length; r++) {
        var a = n[r];
        E(ek, a) || t.push(a), D(e[a]) && !O(e[a]) && t.push(a);
    }
    if (t.length) throw Error("Invalid options: " + t.join(", "));
    return (0, H.Cl)({}, e);
}
function er(e) {
    var t = e
        .split("\n")
        .map(ei)
        .filter(function (e) {
            return null !== e;
        });
    return (0, H.Cl)((0, H.Cl)({}, t[0]), t[1]);
}
function ea(e) {
    var t = {},
        n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!n) return t;
    var r = n[1],
        a = n[2];
    return r && (t.tzid = r), (t.dtstart = Y(a)), t;
}
function ei(e) {
    if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return eo(e);
    var n = t[1];
    switch (n.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return eo(e);
        case "DTSTART":
            return ea(e);
        default:
            throw Error("Unsupported RFC prop ".concat(n, " in ").concat(e));
    }
}
function eo(e) {
    var t = ea(e.replace(/^RRULE:/i, ""));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, "")
            .split(";")
            .forEach(function (n) {
                var r = n.split("="),
                    i = r[0],
                    s = r[1];
                switch (i.toUpperCase()) {
                    case "FREQ":
                        t.freq = a[s.toUpperCase()];
                        break;
                    case "WKST":
                        t.wkst = ex[s.toUpperCase()];
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
                        var l,
                            c = -1 !== (l = s).indexOf(",") ? l.split(",").map(es) : es(l);
                        t[i.toLowerCase()] = c;
                        break;
                    case "BYWEEKDAY":
                    case "BYDAY":
                        t.byweekday = s.split(",").map(function (e) {
                            if (2 === e.length) return ex[e];
                            var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                            if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
                            var n = Number(t[1]);
                            return new o(ex[t[2]].weekday, n);
                        });
                        break;
                    case "DTSTART":
                    case "TZID":
                        var u = ea(e);
                        (t.tzid = u.tzid), (t.dtstart = u.dtstart);
                        break;
                    case "UNTIL":
                        t.until = Y(s);
                        break;
                    case "BYEASTER":
                        t.byeaster = Number(s);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + i + "'");
                }
            }),
        t
    );
}
function es(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
var el = (function () {
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
            var e = F(this.date.getTime(), this.isUTC);
            return this.isUTC ? ":".concat(e) : ";TZID=".concat(this.tzid, ":").concat(e);
        }),
        (e.prototype.getTime = function () {
            return this.date.getTime();
        }),
        (e.prototype.rezonedDate = function () {
            return this.isUTC ? this.date : U(this.date, this.tzid);
        }),
        e
    );
})();
function ec(e) {
    for (var t = [], n = "", r = Object.keys(e), a = Object.keys(eL), i = 0; i < r.length; i++)
        if ("tzid" !== r[i] && E(a, r[i])) {
            var c,
                d,
                _ = r[i].toUpperCase(),
                p = e[r[i]],
                m = "";
            if (!(!s(p) || (u(p) && !p.length))) {
                switch (_) {
                    case "FREQ":
                        m = eI.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        m = l(p) ? new o(p).toString() : p.toString();
                        break;
                    case "BYWEEKDAY":
                        (_ = "BYDAY"),
                            (m = (u(p) ? p : [p])
                                .map(function (e) {
                                    return e instanceof o ? e : u(e) ? new o(e[0], e[1]) : new o(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        (c = p), (d = e.tzid), (n = c ? "DTSTART" + new el(new Date(c), d).toString() : "");
                        break;
                    case "UNTIL":
                        m = F(p, !e.tzid);
                        break;
                    default:
                        if (u(p)) {
                            for (var f = [], g = 0; g < p.length; g++) f[g] = String(p[g]);
                            m = f.toString();
                        } else m = String(p);
                }
                m && t.push([_, m]);
            }
        }
    var h = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return "".concat(t, "=").concat(n.toString());
            })
            .join(";"),
        b = "";
    return (
        "" !== h && (b = "RRULE:".concat(h)),
        [n, b]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}
var eu = (function () {
        function e() {
            (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
        }
        return (
            (e.prototype._cacheAdd = function (e, t, n) {
                t && (t = t instanceof Date ? k(t) : I(t)),
                    "all" === e ? (this.all = t) : ((n._value = t), this[e].push(n));
            }),
            (e.prototype._cacheGet = function (e, t) {
                var n = !1,
                    r = t ? Object.keys(t) : [],
                    a = this[e];
                if ("all" === e) n = this.all;
                else if (u(a))
                    for (var i = 0; i < a.length; i++) {
                        var o = a[i];
                        if (
                            !(
                                r.length &&
                                (function (e) {
                                    for (var n = 0; n < r.length; n++) {
                                        var a = r[n];
                                        if (
                                            !(function (e, t) {
                                                return Array.isArray(e)
                                                    ? !!Array.isArray(t) &&
                                                          e.length === t.length &&
                                                          e.every(function (e, n) {
                                                              return e.getTime() === t[n].getTime();
                                                          })
                                                    : e instanceof Date
                                                      ? t instanceof Date && e.getTime() === t.getTime()
                                                      : e === t;
                                            })(t[a], e[a])
                                        )
                                            return !0;
                                    }
                                    return !1;
                                })(o)
                            )
                        ) {
                            n = o._value;
                            break;
                        }
                    }
                if (!n && this.all) {
                    for (var s = new j(e, t), i = 0; i < this.all.length && s.accept(this.all[i]); i++);
                    (n = s.getValue()), this._cacheAdd(e, n, t);
                }
                return u(n) ? I(n) : n instanceof Date ? k(n) : n;
            }),
            e
        );
    })(),
    ed = (0, H.fX)(
        (0, H.fX)(
            (0, H.fX)(
                (0, H.fX)(
                    (0, H.fX)(
                        (0, H.fX)(
                            (0, H.fX)(
                                (0, H.fX)(
                                    (0, H.fX)(
                                        (0, H.fX)(
                                            (0, H.fX)(
                                                (0, H.fX)((0, H.fX)([], _(1, 31), !0), _(2, 28), !0),
                                                _(3, 31),
                                                !0,
                                            ),
                                            _(4, 30),
                                            !0,
                                        ),
                                        _(5, 31),
                                        !0,
                                    ),
                                    _(6, 30),
                                    !0,
                                ),
                                _(7, 31),
                                !0,
                            ),
                            _(8, 31),
                            !0,
                        ),
                        _(9, 30),
                        !0,
                    ),
                    _(10, 31),
                    !0,
                ),
                _(11, 30),
                !0,
            ),
            _(12, 31),
            !0,
        ),
        _(1, 7),
        !0,
    ),
    e_ = (0, H.fX)(
        (0, H.fX)(
            (0, H.fX)(
                (0, H.fX)(
                    (0, H.fX)(
                        (0, H.fX)(
                            (0, H.fX)(
                                (0, H.fX)(
                                    (0, H.fX)(
                                        (0, H.fX)(
                                            (0, H.fX)(
                                                (0, H.fX)((0, H.fX)([], _(1, 31), !0), _(2, 29), !0),
                                                _(3, 31),
                                                !0,
                                            ),
                                            _(4, 30),
                                            !0,
                                        ),
                                        _(5, 31),
                                        !0,
                                    ),
                                    _(6, 30),
                                    !0,
                                ),
                                _(7, 31),
                                !0,
                            ),
                            _(8, 31),
                            !0,
                        ),
                        _(9, 30),
                        !0,
                    ),
                    _(10, 31),
                    !0,
                ),
                _(11, 30),
                !0,
            ),
            _(12, 31),
            !0,
        ),
        _(1, 7),
        !0,
    ),
    ep = d(1, 29),
    em = d(1, 30),
    ef = d(1, 31),
    eg = d(1, 32),
    eh = (0, H.fX)(
        (0, H.fX)(
            (0, H.fX)(
                (0, H.fX)(
                    (0, H.fX)(
                        (0, H.fX)(
                            (0, H.fX)(
                                (0, H.fX)(
                                    (0, H.fX)(
                                        (0, H.fX)((0, H.fX)((0, H.fX)((0, H.fX)([], eg, !0), em, !0), eg, !0), ef, !0),
                                        eg,
                                        !0,
                                    ),
                                    ef,
                                    !0,
                                ),
                                eg,
                                !0,
                            ),
                            eg,
                            !0,
                        ),
                        ef,
                        !0,
                    ),
                    eg,
                    !0,
                ),
                ef,
                !0,
            ),
            eg,
            !0,
        ),
        eg.slice(0, 7),
        !0,
    ),
    eb = (0, H.fX)(
        (0, H.fX)(
            (0, H.fX)(
                (0, H.fX)(
                    (0, H.fX)(
                        (0, H.fX)(
                            (0, H.fX)(
                                (0, H.fX)(
                                    (0, H.fX)(
                                        (0, H.fX)((0, H.fX)((0, H.fX)((0, H.fX)([], eg, !0), ep, !0), eg, !0), ef, !0),
                                        eg,
                                        !0,
                                    ),
                                    ef,
                                    !0,
                                ),
                                eg,
                                !0,
                            ),
                            eg,
                            !0,
                        ),
                        ef,
                        !0,
                    ),
                    eg,
                    !0,
                ),
                ef,
                !0,
            ),
            eg,
            !0,
        ),
        eg.slice(0, 7),
        !0,
    ),
    eE = d(-28, 0),
    ey = d(-29, 0),
    ev = d(-30, 0),
    eS = d(-31, 0),
    eT = (0, H.fX)(
        (0, H.fX)(
            (0, H.fX)(
                (0, H.fX)(
                    (0, H.fX)(
                        (0, H.fX)(
                            (0, H.fX)(
                                (0, H.fX)(
                                    (0, H.fX)(
                                        (0, H.fX)((0, H.fX)((0, H.fX)((0, H.fX)([], eS, !0), ey, !0), eS, !0), ev, !0),
                                        eS,
                                        !0,
                                    ),
                                    ev,
                                    !0,
                                ),
                                eS,
                                !0,
                            ),
                            eS,
                            !0,
                        ),
                        ev,
                        !0,
                    ),
                    eS,
                    !0,
                ),
                ev,
                !0,
            ),
            eS,
            !0,
        ),
        eS.slice(0, 7),
        !0,
    ),
    eC = (0, H.fX)(
        (0, H.fX)(
            (0, H.fX)(
                (0, H.fX)(
                    (0, H.fX)(
                        (0, H.fX)(
                            (0, H.fX)(
                                (0, H.fX)(
                                    (0, H.fX)(
                                        (0, H.fX)((0, H.fX)((0, H.fX)((0, H.fX)([], eS, !0), eE, !0), eS, !0), ev, !0),
                                        eS,
                                        !0,
                                    ),
                                    ev,
                                    !0,
                                ),
                                eS,
                                !0,
                            ),
                            eS,
                            !0,
                        ),
                        ev,
                        !0,
                    ),
                    eS,
                    !0,
                ),
                ev,
                !0,
            ),
            eS,
            !0,
        ),
        eS.slice(0, 7),
        !0,
    ),
    eD = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
    eO = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    ew = (function () {
        for (var e = [], t = 0; t < 55; t++) e = e.concat(d(7));
        return e;
    })(),
    eA = (function () {
        function e(e) {
            this.options = e;
        }
        return (
            (e.prototype.rebuild = function (e, t) {
                var n,
                    r,
                    a,
                    i,
                    o,
                    l,
                    c,
                    u,
                    d,
                    p,
                    m = this.options;
                if (
                    (e !== this.lastyear &&
                        (this.yearinfo = (function (e, t) {
                            var n,
                                r,
                                a,
                                i,
                                o,
                                s = y(e, 1, 1),
                                l = C(e) ? 366 : 365,
                                c = C(e + 1) ? 366 : 365,
                                u = A(s),
                                d = N(s),
                                p = (0, H.Cl)(
                                    (0, H.Cl)(
                                        { yearlen: l, nextyearlen: c, yearordinal: u, yearweekday: d },
                                        ((r = C((n = e)) ? 366 : 365),
                                        (a = N(y(n, 1, 1))),
                                        365 === r
                                            ? {
                                                  mmask: ed,
                                                  mdaymask: eb,
                                                  nmdaymask: eC,
                                                  wdaymask: ew.slice(a),
                                                  mrange: eO,
                                              }
                                            : {
                                                  mmask: e_,
                                                  mdaymask: eh,
                                                  nmdaymask: eT,
                                                  wdaymask: ew.slice(a),
                                                  mrange: eD,
                                              }),
                                    ),
                                    { wnomask: null },
                                );
                            if (h(t.byweekno)) return p;
                            p.wnomask = _(0, l + 7);
                            var m = (i = f(7 - d + t.wkst, 7));
                            m >= 4 ? ((m = 0), (o = p.yearlen + f(d - t.wkst, 7))) : (o = l - m);
                            for (
                                var g = Math.floor(Math.floor(o / 7) + f(o, 7) / 4), b = 0;
                                b < t.byweekno.length;
                                b++
                            ) {
                                var v = t.byweekno[b];
                                if ((v < 0 && (v += g + 1), v > 0 && v <= g)) {
                                    var S = void 0;
                                    v > 1 ? ((S = m + (v - 1) * 7), m !== i && (S -= 7 - i)) : (S = m);
                                    for (var T = 0; T < 7 && ((p.wnomask[S] = 1), S++, p.wdaymask[S] !== t.wkst); T++);
                                }
                            }
                            if (E(t.byweekno, 1)) {
                                var S = m + 7 * g;
                                if ((m !== i && (S -= 7 - i), S < l))
                                    for (
                                        var b = 0;
                                        b < 7 && ((p.wnomask[S] = 1), (S += 1), p.wdaymask[S] !== t.wkst);
                                        b++
                                    );
                            }
                            if (m) {
                                var D = void 0;
                                if (E(t.byweekno, -1)) D = -1;
                                else {
                                    var O = N(y(e - 1, 1, 1)),
                                        w = f(7 - O.valueOf() + t.wkst, 7),
                                        R = C(e - 1) ? 366 : 365,
                                        M = void 0;
                                    w >= 4 ? ((w = 0), (M = R + f(O - t.wkst, 7))) : (M = l - m),
                                        (D = Math.floor(52 + f(M, 7) / 4));
                                }
                                if (E(t.byweekno, D)) for (var S = 0; S < m; S++) p.wnomask[S] = 1;
                            }
                            return p;
                        })(e, m)),
                    b(m.bynweekday) && (t !== this.lastmonth || e !== this.lastyear))
                ) {
                    var g = this.yearinfo,
                        v = g.yearlen,
                        S = g.mrange,
                        T = g.wdaymask;
                    this.monthinfo = (function (e, t, n, r, a, i) {
                        var o = { lastyear: e, lastmonth: t, nwdaymask: [] },
                            s = [];
                        if (i.freq === eI.YEARLY)
                            if (h(i.bymonth)) s = [[0, n]];
                            else
                                for (var l = 0; l < i.bymonth.length; l++)
                                    (t = i.bymonth[l]), s.push(r.slice(t - 1, t + 1));
                        else i.freq === eI.MONTHLY && (s = [r.slice(t - 1, t + 1)]);
                        if (h(s)) return o;
                        o.nwdaymask = _(0, n);
                        for (var l = 0; l < s.length; l++)
                            for (var c = s[l], u = c[0], d = c[1] - 1, p = 0; p < i.bynweekday.length; p++) {
                                var m = void 0,
                                    g = i.bynweekday[p],
                                    b = g[0],
                                    E = g[1];
                                E < 0
                                    ? ((m = d + (E + 1) * 7), (m -= f(a[m] - b, 7)))
                                    : ((m = u + (E - 1) * 7), (m += f(7 - a[m] + b, 7))),
                                    u <= m && m <= d && (o.nwdaymask[m] = 1);
                            }
                        return o;
                    })(e, t, v, S, T, m);
                }
                s(m.byeaster) &&
                    (this.eastermask =
                        (void 0 === (n = m.byeaster) && (n = 0),
                        (r = e % 19),
                        (a = Math.floor(e / 100)),
                        (i = e % 100),
                        (o = Math.floor(a / 4)),
                        (l = Math.floor((a + 8) / 25)),
                        (c = Math.floor((a - l + 1) / 3)),
                        (u = Math.floor(19 * r + a - o - c + 15) % 30),
                        (d = Math.floor(32 + (a % 4) * 2 + 2 * Math.floor(i / 4) - u - (i % 4)) % 7),
                        (p = Math.floor((r + 11 * u + 22 * d) / 451)),
                        [
                            Math.ceil(
                                (Date.UTC(
                                    e,
                                    Math.floor((u + d - 7 * p + 114) / 31) - 1,
                                    ((u + d - 7 * p + 114) % 31) + 1 + n,
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
                for (var n = this.mrange[t - 1], r = this.mrange[t], a = _(null, this.yearlen), i = n; i < r; i++)
                    a[i] = i;
                return [a, n, r];
            }),
            (e.prototype.wdayset = function (e, t, n) {
                for (
                    var r = _(null, this.yearlen + 7), a = A(y(e, t, n)) - this.yearordinal, i = a, o = 0;
                    o < 7 && ((r[a] = a), ++a, this.wdaymask[a] !== this.options.wkst);
                    o++
                );
                return [r, i, a];
            }),
            (e.prototype.ddayset = function (e, t, n) {
                var r = _(null, this.yearlen),
                    a = A(y(e, t, n)) - this.yearordinal;
                return (r[a] = a), [r, a, a + 1];
            }),
            (e.prototype.htimeset = function (e, t, n, r) {
                var a = this,
                    i = [];
                return (
                    this.options.byminute.forEach(function (t) {
                        i = i.concat(a.mtimeset(e, t, n, r));
                    }),
                    P(i),
                    i
                );
            }),
            (e.prototype.mtimeset = function (e, t, n, r) {
                var a = this.options.bysecond.map(function (n) {
                    return new ee(e, t, n, r);
                });
                return P(a), a;
            }),
            (e.prototype.stimeset = function (e, t, n, r) {
                return [new ee(e, t, n, r)];
            }),
            (e.prototype.getdayset = function (e) {
                switch (e) {
                    case a.YEARLY:
                        return this.ydayset.bind(this);
                    case a.MONTHLY:
                        return this.mdayset.bind(this);
                    case a.WEEKLY:
                        return this.wdayset.bind(this);
                    case a.DAILY:
                    default:
                        return this.ddayset.bind(this);
                }
            }),
            (e.prototype.gettimeset = function (e) {
                switch (e) {
                    case a.HOURLY:
                        return this.htimeset.bind(this);
                    case a.MINUTELY:
                        return this.mtimeset.bind(this);
                    case a.SECONDLY:
                        return this.stimeset.bind(this);
                }
            }),
            e
        );
    })();
function eR(e, t) {
    var n = t.dtstart,
        r = t.freq,
        a = t.interval,
        i = t.until,
        o = t.bysetpos,
        l = t.count;
    if (0 === l || 0 === a) return eN(e);
    var c = et.fromDate(n),
        u = new eA(t);
    u.rebuild(c.year, c.month);
    for (
        var d = (function (e, t, n) {
            var r = n.freq,
                a = n.byhour,
                i = n.byminute,
                o = n.bysecond;
            if (X(r)) {
                var s = n.dtstart.getTime() % 1e3;
                if (!X(n.freq)) return [];
                var l = [];
                return (
                    n.byhour.forEach(function (e) {
                        n.byminute.forEach(function (t) {
                            n.bysecond.forEach(function (n) {
                                l.push(new ee(e, t, n, s));
                            });
                        });
                    }),
                    l
                );
            }
            return (r >= eI.HOURLY && b(a) && !E(a, t.hour)) ||
                (r >= eI.MINUTELY && b(i) && !E(i, t.minute)) ||
                (r >= eI.SECONDLY && b(o) && !E(o, t.second))
                ? []
                : e.gettimeset(r)(t.hour, t.minute, t.second, t.millisecond);
        })(u, c, t);
        ;
    ) {
        var _ = u.getdayset(r)(c.year, c.month, c.day),
            p = _[0],
            m = _[1],
            g = _[2],
            h = (function (e, t, n, r, a) {
                for (var i = !1, o = t; o < n; o++) {
                    var s = e[o];
                    (i = (function (e, t, n) {
                        var r = n.bymonth,
                            a = n.byweekno,
                            i = n.byweekday,
                            o = n.byeaster,
                            s = n.bymonthday,
                            l = n.bynmonthday,
                            c = n.byyearday;
                        return (
                            (b(r) && !E(r, e.mmask[t])) ||
                            (b(a) && !e.wnomask[t]) ||
                            (b(i) && !E(i, e.wdaymask[t])) ||
                            (b(e.nwdaymask) && !e.nwdaymask[t]) ||
                            (null !== o && !E(e.eastermask, t)) ||
                            ((b(s) || b(l)) && !E(s, e.mdaymask[t]) && !E(l, e.nmdaymask[t])) ||
                            (b(c) &&
                                ((t < e.yearlen && !E(c, t + 1) && !E(c, -e.yearlen + t)) ||
                                    (t >= e.yearlen &&
                                        !E(c, t + 1 - e.yearlen) &&
                                        !E(c, -e.nextyearlen + t - e.yearlen))))
                        );
                    })(r, s, a)) && (e[s] = null);
                }
                return i;
            })(p, m, g, u, t);
        if (b(o))
            for (
                var y = (function (e, t, n, r, a, i) {
                        for (var o = [], l = 0; l < e.length; l++) {
                            var c = void 0,
                                u = void 0,
                                d = e[l];
                            d < 0
                                ? ((c = Math.floor(d / t.length)), (u = f(d, t.length)))
                                : ((c = Math.floor((d - 1) / t.length)), (u = f(d - 1, t.length)));
                            for (var _ = [], p = n; p < r; p++) {
                                var m = i[p];
                                s(m) && _.push(m);
                            }
                            var g = void 0;
                            g = c < 0 ? _.slice(c)[0] : _[c];
                            var h = t[u],
                                b = L(R(a.yearordinal + g), h);
                            E(o, b) || o.push(b);
                        }
                        return P(o), o;
                    })(o, d, m, g, u, p),
                    v = 0;
                v < y.length;
                v++
            ) {
                var S = y[v];
                if (i && S > i) return eN(e);
                if (S >= n) {
                    var T = eM(S, t);
                    if (!e.accept(T) || (l && !--l)) return eN(e);
                }
            }
        else
            for (var v = m; v < g; v++) {
                var C = p[v];
                if (s(C))
                    for (var D = R(u.yearordinal + C), O = 0; O < d.length; O++) {
                        var S = L(D, d[O]);
                        if (i && S > i) return eN(e);
                        if (S >= n) {
                            var T = eM(S, t);
                            if (!e.accept(T) || (l && !--l)) return eN(e);
                        }
                    }
            }
        if (0 === t.interval || (c.add(t, h), c.year > 9999)) return eN(e);
        X(r) || (d = u.gettimeset(r)(c.hour, c.minute, c.second, 0)), u.rebuild(c.year, c.month);
    }
}
function eM(e, t) {
    return new el(e, t.tzid).rezonedDate();
}
function eN(e) {
    return e.getValue();
}
var ex = { MO: new o(0), TU: new o(1), WE: new o(2), TH: new o(3), FR: new o(4), SA: new o(5), SU: new o(6) },
    eL = {
        freq: a.YEARLY,
        dtstart: null,
        interval: 1,
        wkst: ex.MO,
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
    ek = Object.keys(eL),
    eI = (function () {
        function e(e, t) {
            void 0 === e && (e = {}),
                void 0 === t && (t = !1),
                (this._cache = t ? null : new eu()),
                (this.origOptions = en(e));
            var n = (function (e) {
                var t = (0, H.Cl)((0, H.Cl)({}, eL), en(e));
                if ((s(t.byeaster) && (t.freq = eI.YEARLY), !(s(t.freq) && eI.FREQUENCIES[t.freq])))
                    throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
                if (
                    (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))),
                    s(t.wkst) ? l(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = eI.MO.weekday),
                    s(t.bysetpos))
                ) {
                    l(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
                    for (var n = 0; n < t.bysetpos.length; n++) {
                        var r = t.bysetpos[n];
                        if (0 === r || !(r >= -366 && r <= 366))
                            throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
                    }
                }
                if (
                    !(
                        t.byweekno ||
                        b(t.byweekno) ||
                        b(t.byyearday) ||
                        t.bymonthday ||
                        b(t.bymonthday) ||
                        s(t.byweekday) ||
                        s(t.byeaster)
                    )
                )
                    switch (t.freq) {
                        case eI.YEARLY:
                            t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1),
                                (t.bymonthday = t.dtstart.getUTCDate());
                            break;
                        case eI.MONTHLY:
                            t.bymonthday = t.dtstart.getUTCDate();
                            break;
                        case eI.WEEKLY:
                            t.byweekday = [N(t.dtstart)];
                    }
                if (
                    (s(t.bymonth) && !u(t.bymonth) && (t.bymonth = [t.bymonth]),
                    s(t.byyearday) && !u(t.byyearday) && l(t.byyearday) && (t.byyearday = [t.byyearday]),
                    s(t.bymonthday))
                )
                    if (u(t.bymonthday)) {
                        for (var a = [], i = [], n = 0; n < t.bymonthday.length; n++) {
                            var r = t.bymonthday[n];
                            r > 0 ? a.push(r) : r < 0 && i.push(r);
                        }
                        (t.bymonthday = a), (t.bynmonthday = i);
                    } else
                        t.bymonthday < 0
                            ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = []))
                            : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
                else (t.bymonthday = []), (t.bynmonthday = []);
                if ((s(t.byweekno) && !u(t.byweekno) && (t.byweekno = [t.byweekno]), s(t.byweekday)))
                    if (l(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
                    else if (c(t.byweekday)) (t.byweekday = [o.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
                    else if (t.byweekday instanceof o)
                        !t.byweekday.n || t.freq > eI.MONTHLY
                            ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null))
                            : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
                    else {
                        for (var d = [], _ = [], n = 0; n < t.byweekday.length; n++) {
                            var p = t.byweekday[n];
                            if (l(p)) {
                                d.push(p);
                                continue;
                            }
                            if (c(p)) {
                                d.push(o.fromStr(p).weekday);
                                continue;
                            }
                            !p.n || t.freq > eI.MONTHLY ? d.push(p.weekday) : _.push([p.weekday, p.n]);
                        }
                        (t.byweekday = b(d) ? d : null), (t.bynweekday = b(_) ? _ : null);
                    }
                else t.bynweekday = null;
                return (
                    s(t.byhour)
                        ? l(t.byhour) && (t.byhour = [t.byhour])
                        : (t.byhour = t.freq < eI.HOURLY ? [t.dtstart.getUTCHours()] : null),
                    s(t.byminute)
                        ? l(t.byminute) && (t.byminute = [t.byminute])
                        : (t.byminute = t.freq < eI.MINUTELY ? [t.dtstart.getUTCMinutes()] : null),
                    s(t.bysecond)
                        ? l(t.bysecond) && (t.bysecond = [t.bysecond])
                        : (t.bysecond = t.freq < eI.SECONDLY ? [t.dtstart.getUTCSeconds()] : null),
                    { parsedOptions: t }
                );
            })(e).parsedOptions;
            this.options = n;
        }
        return (
            (e.parseText = function (e, t) {
                return K(e, t);
            }),
            (e.fromText = function (e, t) {
                var n;
                return void 0 === (n = t) && (n = z), new eI(K(e, n) || void 0);
            }),
            (e.fromString = function (t) {
                return new e(e.parseString(t) || void 0);
            }),
            (e.prototype._iter = function (e) {
                return eR(e, this.options);
            }),
            (e.prototype._cacheGet = function (e, t) {
                return !!this._cache && this._cache._cacheGet(e, t);
            }),
            (e.prototype._cacheAdd = function (e, t, n) {
                if (this._cache) return this._cache._cacheAdd(e, t, n);
            }),
            (e.prototype.all = function (e) {
                if (e) return this._iter(new G("all", {}, e));
                var t = this._cacheGet("all");
                return !1 === t && ((t = this._iter(new j("all", {}))), this._cacheAdd("all", t)), t;
            }),
            (e.prototype.between = function (e, t, n, r) {
                if ((void 0 === n && (n = !1), !O(e) || !O(t))) throw Error("Invalid date passed in to RRule.between");
                var a = { before: t, after: e, inc: n };
                if (r) return this._iter(new G("between", a, r));
                var i = this._cacheGet("between", a);
                return !1 === i && ((i = this._iter(new j("between", a))), this._cacheAdd("between", i, a)), i;
            }),
            (e.prototype.before = function (e, t) {
                if ((void 0 === t && (t = !1), !O(e))) throw Error("Invalid date passed in to RRule.before");
                var n = { dt: e, inc: t },
                    r = this._cacheGet("before", n);
                return !1 === r && ((r = this._iter(new j("before", n))), this._cacheAdd("before", r, n)), r;
            }),
            (e.prototype.after = function (e, t) {
                if ((void 0 === t && (t = !1), !O(e))) throw Error("Invalid date passed in to RRule.after");
                var n = { dt: e, inc: t },
                    r = this._cacheGet("after", n);
                return !1 === r && ((r = this._iter(new j("after", n))), this._cacheAdd("after", r, n)), r;
            }),
            (e.prototype.count = function () {
                return this.all().length;
            }),
            (e.prototype.toString = function () {
                return ec(this.origOptions);
            }),
            (e.prototype.toText = function (e, t, n) {
                return new $(this, e, t, n).toString();
            }),
            (e.prototype.isFullyConvertibleToText = function () {
                return J(this);
            }),
            (e.prototype.clone = function () {
                return new e(this.origOptions);
            }),
            (e.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"]),
            (e.YEARLY = a.YEARLY),
            (e.MONTHLY = a.MONTHLY),
            (e.WEEKLY = a.WEEKLY),
            (e.DAILY = a.DAILY),
            (e.HOURLY = a.HOURLY),
            (e.MINUTELY = a.MINUTELY),
            (e.SECONDLY = a.SECONDLY),
            (e.MO = ex.MO),
            (e.TU = ex.TU),
            (e.WE = ex.WE),
            (e.TH = ex.TH),
            (e.FR = ex.FR),
            (e.SA = ex.SA),
            (e.SU = ex.SU),
            (e.parseString = er),
            (e.optionsToString = ec),
            e
        );
    })(),
    eP = { dtstart: null, cache: !1, unfold: !1, forceset: !1, compatible: !1, tzid: null };
function eF(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var n,
                r,
                a,
                i,
                o,
                s,
                l,
                c =
                    ((n = []),
                    (r = []),
                    (a = []),
                    (i = []),
                    (s = (o = ea(e)).dtstart),
                    (l = o.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error("Invalid empty string");
                        if (!t) return e.split(/\s/);
                        for (var n = e.split("\n"), r = 0; r < n.length; ) {
                            var a = (n[r] = n[r].replace(/\s+$/g, ""));
                            a
                                ? r > 0 && " " === a[0]
                                    ? ((n[r - 1] += a.slice(1)), n.splice(r, 1))
                                    : (r += 1)
                                : n.splice(r, 1);
                        }
                        return n;
                    })(e, t.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                o = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(":")) return { name: "RRULE", value: e };
                                            var t = m(e, ":", 1);
                                            return { name: t[0], value: t[1] };
                                        })(e),
                                        n = t.name,
                                        r = t.value,
                                        a = n.split(";");
                                    if (!a) throw Error("empty property name");
                                    return { name: a[0].toUpperCase(), parms: a.slice(1), value: r };
                                })(e),
                                s = o.name,
                                c = o.parms,
                                u = o.value;
                            switch (s.toUpperCase()) {
                                case "RRULE":
                                    if (c.length) throw Error("unsupported RRULE parm: ".concat(c.join(",")));
                                    n.push(er(e));
                                    break;
                                case "RDATE":
                                    var d = (null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [])[1];
                                    d && !l && (l = d), (r = r.concat(eB(u, c)));
                                    break;
                                case "EXRULE":
                                    if (c.length) throw Error("unsupported EXRULE parm: ".concat(c.join(",")));
                                    a.push(er(u));
                                    break;
                                case "EXDATE":
                                    i = i.concat(eB(u, c));
                                    break;
                                case "DTSTART":
                                    break;
                                default:
                                    throw Error("unsupported property: " + s);
                            }
                        }
                    }),
                    { dtstart: s, tzid: l, rrulevals: n, rdatevals: r, exrulevals: a, exdatevals: i }),
                u = c.rrulevals,
                d = c.rdatevals,
                _ = c.exrulevals,
                p = c.exdatevals,
                f = c.dtstart,
                g = c.tzid,
                h = !1 === t.cache;
            if (
                (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
                t.forceset || u.length > 1 || d.length || _.length || p.length)
            ) {
                var b = new ej(h);
                return (
                    b.dtstart(f),
                    b.tzid(g || void 0),
                    u.forEach(function (e) {
                        b.rrule(new eI(eY(e, f, g), h));
                    }),
                    d.forEach(function (e) {
                        b.rdate(e);
                    }),
                    _.forEach(function (e) {
                        b.exrule(new eI(eY(e, f, g), h));
                    }),
                    p.forEach(function (e) {
                        b.exdate(e);
                    }),
                    t.compatible && t.dtstart && b.rdate(f),
                    b
                );
            }
            var E = u[0] || {};
            return new eI(eY(E, E.dtstart || t.dtstart || f, E.tzid || t.tzid || g), h);
        })(
            e,
            (function (e) {
                var t = [],
                    n = Object.keys(e),
                    r = Object.keys(eP);
                if (
                    (n.forEach(function (e) {
                        E(r, e) || t.push(e);
                    }),
                    t.length)
                )
                    throw Error("Invalid options: " + t.join(", "));
                return (0, H.Cl)((0, H.Cl)({}, eP), e);
            })(t),
        )
    );
}
function eY(e, t, n) {
    return (0, H.Cl)((0, H.Cl)({}, e), { dtstart: t, tzid: n });
}
function eB(e, t) {
    return (
        t.forEach(function (e) {
            if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
        }),
        e.split(",").map(function (e) {
            return Y(e);
        })
    );
}
function eU(e) {
    var t = this;
    return function (n) {
        if ((void 0 !== n && (t["_".concat(e)] = n), void 0 !== t["_".concat(e)])) return t["_".concat(e)];
        for (var r = 0; r < t._rrule.length; r++) {
            var a = t._rrule[r].origOptions[e];
            if (a) return a;
        }
    };
}
var ej = (function (e) {
    function t(t) {
        void 0 === t && (t = !1);
        var n = e.call(this, {}, t) || this;
        return (
            (n.dtstart = eU.apply(n, ["dtstart"])),
            (n.tzid = eU.apply(n, ["tzid"])),
            (n._rrule = []),
            (n._rdate = []),
            (n._exrule = []),
            (n._exdate = []),
            n
        );
    }
    return (
        (0, H.C6)(t, e),
        (t.prototype._iter = function (e) {
            return (function (e, t, n, r, a, i) {
                var o = {},
                    s = e.accept;
                function l(e, t) {
                    n.forEach(function (n) {
                        n.between(e, t, !0).forEach(function (e) {
                            o[Number(e)] = !0;
                        });
                    });
                }
                a.forEach(function (e) {
                    o[Number(new el(e, i).rezonedDate())] = !0;
                }),
                    (e.accept = function (e) {
                        var t = Number(e);
                        return isNaN(t)
                            ? s.call(this, e)
                            : !!o[t] || (l(new Date(t - 1), new Date(t + 1)), !!o[t]) || ((o[t] = !0), s.call(this, e));
                    }),
                    "between" === e.method &&
                        (l(e.args.after, e.args.before),
                        (e.accept = function (e) {
                            var t = Number(e);
                            return !!o[t] || ((o[t] = !0), s.call(this, e));
                        }));
                for (var c = 0; c < r.length; c++) {
                    var u = new el(r[c], i).rezonedDate();
                    if (!e.accept(new Date(u.getTime()))) break;
                }
                t.forEach(function (t) {
                    eR(e, t.options);
                });
                var d = e._result;
                switch ((P(d), e.method)) {
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
            eH(e, this._rrule);
        }),
        (t.prototype.exrule = function (e) {
            eH(e, this._exrule);
        }),
        (t.prototype.rdate = function (e) {
            eG(e, this._rdate);
        }),
        (t.prototype.exdate = function (e) {
            eG(e, this._exdate);
        }),
        (t.prototype.rrules = function () {
            return this._rrule.map(function (e) {
                return eF(e.toString());
            });
        }),
        (t.prototype.exrules = function () {
            return this._exrule.map(function (e) {
                return eF(e.toString());
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
                this._rdate.length && e.push(ez("RDATE", this._rdate, this.tzid())),
                this._exdate.length && e.push(ez("EXDATE", this._exdate, this.tzid())),
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
})(eI);
function eH(e, t) {
    if (!(e instanceof eI)) throw TypeError(String(e) + " is not RRule instance");
    E(t.map(String), String(e)) || t.push(e);
}
function eG(e, t) {
    if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
    E(t.map(Number), Number(e)) || (t.push(e), P(t));
}
function ez(e, t, n) {
    var r = !n || "UTC" === n.toUpperCase(),
        a = r ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(n, ":"),
        i = t
            .map(function (e) {
                return F(e.valueOf(), r);
            })
            .join(",");
    return "".concat(a).concat(i);
}
