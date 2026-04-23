"use strict";
r.d(t, { p3: () => eI, Bw: () => i });
var n,
    a,
    s = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    i = (function () {
        function e(e, t) {
            if (0 === t) throw Error("Can't create weekday with n == 0");
            (this.weekday = e), (this.n = t);
        }
        return (
            (e.fromStr = function (t) {
                return new e(s.indexOf(t));
            }),
            (e.prototype.nth = function (t) {
                return this.n === t ? this : new e(this.weekday, t);
            }),
            (e.prototype.equals = function (e) {
                return this.weekday === e.weekday && this.n === e.n;
            }),
            (e.prototype.toString = function () {
                var e = s[this.weekday];
                return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
            }),
            (e.prototype.getJsWeekday = function () {
                return 6 === this.weekday ? 0 : this.weekday + 1;
            }),
            e
        );
    })(),
    o = function (e) {
        return null != e;
    },
    l = function (e) {
        return "number" == typeof e;
    },
    u = function (e) {
        return "string" == typeof e && s.includes(e);
    },
    c = Array.isArray,
    d = function (e, t) {
        void 0 === t && (t = e), 1 == arguments.length && ((t = e), (e = 0));
        for (var r = [], n = e; n < t; n++) r.push(n);
        return r;
    },
    f = function (e, t) {
        var r = 0,
            n = [];
        if (c(e)) for (; r < t; r++) n[r] = [].concat(e);
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
    _ = function (e, t) {
        return { div: Math.floor(e / t), mod: m(e, t) };
    },
    g = function (e) {
        return !o(e) || 0 === e.length;
    },
    v = function (e) {
        return !g(e);
    },
    b = function (e, t) {
        return v(e) && -1 !== e.indexOf(t);
    },
    y = function (e, t, r, n, a, s) {
        return (
            void 0 === n && (n = 0),
            void 0 === a && (a = 0),
            void 0 === s && (s = 0),
            new Date(Date.UTC(e, t - 1, r, n, a, s))
        );
    },
    E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    S = y(1970, 1, 1),
    T = [6, 0, 1, 2, 3, 4, 5],
    x = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    w = function (e) {
        return e instanceof Date;
    },
    C = function (e) {
        return w(e) && !isNaN(e.getTime());
    },
    D = function (e) {
        return 60 * e.getTimezoneOffset() * 1e3;
    },
    O = function (e) {
        var t, r;
        return (t = e), (r = S), Math.round((t.getTime() - D(t) - (r.getTime() - D(r))) / 864e5);
    },
    A = function (e) {
        return new Date(S.getTime() + 864e5 * e);
    },
    M = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && x(e.getUTCFullYear()) ? 29 : E[t];
    },
    R = function (e) {
        return T[e.getUTCDay()];
    },
    k = function (e, t) {
        var r = y(e, t + 1, 1);
        return [R(r), M(r)];
    },
    N = function (e, t) {
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
    L = function (e) {
        return new Date(e.getTime());
    },
    I = function (e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(L(e[r]));
        return t;
    },
    P = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    F = function (e, t) {
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
    B = function (e) {
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
    Y = function (e, t) {
        return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
    },
    U = function (e, t) {
        var r = new Date(Y(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            n = new Date(Y(e, null != t ? t : "UTC")).getTime() - r.getTime();
        return new Date(e.getTime() - n);
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
    V = r(56636),
    H = (function (e) {
        function t(t, r, n) {
            var a = e.call(this, t, r) || this;
            return (a.iterator = n), a;
        }
        return (
            (0, V.C6)(t, e),
            (t.prototype.add = function (e) {
                return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
            }),
            t
        );
    })(j);
let G = {
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
var z = function (e, t) {
        return -1 !== e.indexOf(t);
    },
    W = function (e) {
        return e.toString();
    },
    q = function (e, t, r) {
        return "".concat(t, " ").concat(r, ", ").concat(e);
    },
    $ = (function () {
        function e(e, t, r, n) {
            if (
                (void 0 === t && (t = W),
                void 0 === r && (r = G),
                void 0 === n && (n = q),
                (this.text = []),
                (this.language = r || G),
                (this.gettext = t),
                (this.dateFormatter = n),
                (this.rrule = e),
                (this.options = e.options),
                (this.origOptions = e.origOptions),
                this.origOptions.bymonthday)
            ) {
                var a = [].concat(this.options.bymonthday),
                    s = [].concat(this.options.bynmonthday);
                a.sort(function (e, t) {
                    return e - t;
                }),
                    s.sort(function (e, t) {
                        return t - e;
                    }),
                    (this.bymonthday = a.concat(s)),
                    this.bymonthday.length || (this.bymonthday = null);
            }
            if (o(this.origOptions.byweekday)) {
                var i = c(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                    l = String(i);
                this.byweekday = {
                    allWeeks: i.filter(function (e) {
                        return !e.n;
                    }),
                    someWeeks: i.filter(function (e) {
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
                var u = function (e, t) {
                    return e.weekday - t.weekday;
                };
                this.byweekday.allWeeks.sort(u),
                    this.byweekday.someWeeks.sort(u),
                    this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null),
                    this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
            } else this.byweekday = null;
        }
        return (
            (e.isFullyConvertible = function (t) {
                if (!(t.options.freq in e.IMPLEMENTED) || (t.origOptions.until && t.origOptions.count)) return !1;
                for (var r in t.origOptions) {
                    if (z(["dtstart", "wkst", "freq"], r)) break;
                    if (!z(e.IMPLEMENTED[t.options.freq], r)) return !1;
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
                var t = l(e) ? (e + 1) % 7 : e.getJsWeekday();
                return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
            }),
            (e.prototype.plural = function (e) {
                return e % 100 != 1;
            }),
            (e.prototype.add = function (e) {
                return this.text.push(" "), this.text.push(e), this;
            }),
            (e.prototype.list = function (e, t, r, n) {
                var a = this;
                void 0 === n && (n = ","),
                    c(e) || (e = [e]),
                    (t =
                        t ||
                        function (e) {
                            return e.toString();
                        });
                var s = function (e) {
                    return t && t.call(a, e);
                };
                if (!r) return e.map(s).join(n + " ");
                for (var i = e.map(s), o = n, l = "", u = 0; u < i.length; u++)
                    0 !== u && (u === i.length - 1 ? (l += " " + r + " ") : (l += o + " ")), (l += i[u]);
                return l;
            }),
            e
        );
    })(),
    K = (function () {
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
function Q(e, t) {
    void 0 === t && (t = G);
    var r = {},
        n = new K(t.tokens);
    if (!n.start(e)) return null;
    return (
        (function () {
            n.expect("every");
            var e = n.acceptNumber();
            if ((e && (r.interval = parseInt(e[0], 10)), n.isDone())) throw Error("Unexpected end");
            switch (n.symbol) {
                case "day(s)":
                    (r.freq = eI.DAILY),
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
                            l());
                    break;
                case "weekday(s)":
                    (r.freq = eI.WEEKLY), (r.byweekday = [eI.MO, eI.TU, eI.WE, eI.TH, eI.FR]), n.nextSymbol(), l();
                    break;
                case "week(s)":
                    (r.freq = eI.WEEKLY), n.nextSymbol() && (a(), l());
                    break;
                case "hour(s)":
                    (r.freq = eI.HOURLY), n.nextSymbol() && (a(), l());
                    break;
                case "minute(s)":
                    (r.freq = eI.MINUTELY), n.nextSymbol() && (a(), l());
                    break;
                case "month(s)":
                    (r.freq = eI.MONTHLY), n.nextSymbol() && (a(), l());
                    break;
                case "year(s)":
                    (r.freq = eI.YEARLY), n.nextSymbol() && (a(), l());
                    break;
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    if (
                        ((r.freq = eI.WEEKLY),
                        (r.byweekday = [eI[n.symbol.substr(0, 2).toUpperCase()]]),
                        !n.nextSymbol())
                    )
                        return;
                    for (; n.accept("comma"); ) {
                        if (n.isDone()) throw Error("Unexpected end");
                        var t = i();
                        if (!t) throw Error("Unexpected symbol " + n.symbol + ", expected weekday");
                        r.byweekday.push(eI[t]), n.nextSymbol();
                    }
                    (function () {
                        n.accept("on"), n.accept("the");
                        var e = o();
                        if (e)
                            for (r.bymonthday = [e], n.nextSymbol(); n.accept("comma"); ) {
                                if (!(e = o())) throw Error("Unexpected symbol " + n.symbol + "; expected monthday");
                                r.bymonthday.push(e), n.nextSymbol();
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
                    if (((r.freq = eI.YEARLY), (r.bymonth = [s()]), !n.nextSymbol())) return;
                    for (; n.accept("comma"); ) {
                        if (n.isDone()) throw Error("Unexpected end");
                        var u = s();
                        if (!u) throw Error("Unexpected symbol " + n.symbol + ", expected month");
                        r.bymonth.push(u), n.nextSymbol();
                    }
                    a(), l();
                    break;
                default:
                    throw Error("Unknown symbol");
            }
        })(),
        r
    );
    function a() {
        var e = n.accept("on"),
            t = n.accept("the");
        if (e || t)
            do {
                var a = o(),
                    l = i(),
                    u = s();
                if (a)
                    l
                        ? (n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(eI[l].nth(a)))
                        : (r.bymonthday || (r.bymonthday = []), r.bymonthday.push(a), n.accept("day(s)"));
                else if (l) n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(eI[l]);
                else if ("weekday(s)" === n.symbol)
                    n.nextSymbol(), r.byweekday || (r.byweekday = [eI.MO, eI.TU, eI.WE, eI.TH, eI.FR]);
                else if ("week(s)" === n.symbol) {
                    n.nextSymbol();
                    var c = n.acceptNumber();
                    if (!c) throw Error("Unexpected symbol " + n.symbol + ", expected week number");
                    for (r.byweekno = [parseInt(c[0], 10)]; n.accept("comma"); ) {
                        if (!(c = n.acceptNumber()))
                            throw Error("Unexpected symbol " + n.symbol + "; expected monthday");
                        r.byweekno.push(parseInt(c[0], 10));
                    }
                } else {
                    if (!u) return;
                    n.nextSymbol(), r.bymonth || (r.bymonth = []), r.bymonth.push(u);
                }
            } while (n.accept("comma") || n.accept("the") || n.accept("on"));
    }
    function s() {
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
    function i() {
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
    function o() {
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
    function l() {
        if ("until" === n.symbol) {
            var e = Date.parse(n.text);
            if (!e) throw Error("Cannot parse until date:" + n.text);
            r.until = new Date(e);
        } else n.accept("for") && ((r.count = parseInt(n.value[0], 10)), n.expect("number"));
    }
}
function X(e) {
    return e < a.HOURLY;
}
((n = a || (a = {}))[(n.YEARLY = 0)] = "YEARLY"),
    (n[(n.MONTHLY = 1)] = "MONTHLY"),
    (n[(n.WEEKLY = 2)] = "WEEKLY"),
    (n[(n.DAILY = 3)] = "DAILY"),
    (n[(n.HOURLY = 4)] = "HOURLY"),
    (n[(n.MINUTELY = 5)] = "MINUTELY"),
    (n[(n.SECONDLY = 6)] = "SECONDLY");
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
        function t(t, r, n, a, s, i, o) {
            var l = e.call(this, a, s, i, o) || this;
            return (l.year = t), (l.month = r), (l.day = n), l;
        }
        return (
            (0, V.C6)(t, e),
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
                return R(new Date(this.getTime()));
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
                    var n = _(this.hour, 24),
                        a = n.div,
                        s = n.mod;
                    if ((a && ((this.hour = s), this.addDaily(a)), g(r) || b(r, this.hour))) break;
                }
            }),
            (t.prototype.addMinutes = function (e, t, r, n) {
                for (t && (this.minute += Math.floor((1439 - (60 * this.hour + this.minute)) / e) * e); ; ) {
                    this.minute += e;
                    var a = _(this.minute, 60),
                        s = a.div,
                        i = a.mod;
                    if (
                        (s && ((this.minute = i), this.addHours(s, !1, r)),
                        (g(r) || b(r, this.hour)) && (g(n) || b(n, this.minute)))
                    )
                        break;
                }
            }),
            (t.prototype.addSeconds = function (e, t, r, n, a) {
                for (
                    t &&
                    (this.second += Math.floor((86399 - (3600 * this.hour + 60 * this.minute + this.second)) / e) * e);
                    ;
                ) {
                    this.second += e;
                    var s = _(this.second, 60),
                        i = s.div,
                        o = s.mod;
                    if (
                        (i && ((this.second = o), this.addMinutes(i, !1, r, n)),
                        (g(r) || b(r, this.hour)) && (g(n) || b(n, this.minute)) && (g(a) || b(a, this.second)))
                    )
                        break;
                }
            }),
            (t.prototype.fixDay = function () {
                if (!(this.day <= 28)) {
                    var e = k(this.year, this.month - 1)[1];
                    if (!(this.day <= e))
                        for (; this.day > e; ) {
                            if (
                                ((this.day -= e),
                                ++this.month,
                                13 === this.month && ((this.month = 1), ++this.year, this.year > 9999))
                            )
                                return;
                            e = k(this.year, this.month - 1)[1];
                        }
                }
            }),
            (t.prototype.add = function (e, t) {
                var r = e.freq,
                    n = e.interval,
                    s = e.wkst,
                    i = e.byhour,
                    o = e.byminute,
                    l = e.bysecond;
                switch (r) {
                    case a.YEARLY:
                        return this.addYears(n);
                    case a.MONTHLY:
                        return this.addMonths(n);
                    case a.WEEKLY:
                        return this.addWeekly(n, s);
                    case a.DAILY:
                        return this.addDaily(n);
                    case a.HOURLY:
                        return this.addHours(n, t, i);
                    case a.MINUTELY:
                        return this.addMinutes(n, t, i, o);
                    case a.SECONDLY:
                        return this.addSeconds(n, t, i, o, l);
                }
            }),
            t
        );
    })(ee);
function er(e) {
    for (var t = [], r = Object.keys(e), n = 0; n < r.length; n++) {
        var a = r[n];
        b(eL, a) || t.push(a), w(e[a]) && !C(e[a]) && t.push(a);
    }
    if (t.length) throw Error("Invalid options: " + t.join(", "));
    return (0, V.Cl)({}, e);
}
function en(e) {
    var t = e
        .split("\n")
        .map(es)
        .filter(function (e) {
            return null !== e;
        });
    return (0, V.Cl)((0, V.Cl)({}, t[0]), t[1]);
}
function ea(e) {
    var t = {},
        r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!r) return t;
    var n = r[1],
        a = r[2];
    return n && (t.tzid = n), (t.dtstart = B(a)), t;
}
function es(e) {
    if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return ei(e);
    var r = t[1];
    switch (r.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return ei(e);
        case "DTSTART":
            return ea(e);
        default:
            throw Error("Unsupported RFC prop ".concat(r, " in ").concat(e));
    }
}
function ei(e) {
    var t = ea(e.replace(/^RRULE:/i, ""));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, "")
            .split(";")
            .forEach(function (r) {
                var n = r.split("="),
                    s = n[0],
                    o = n[1];
                switch (s.toUpperCase()) {
                    case "FREQ":
                        t.freq = a[o.toUpperCase()];
                        break;
                    case "WKST":
                        t.wkst = ek[o.toUpperCase()];
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
                            u = -1 !== (l = o).indexOf(",") ? l.split(",").map(eo) : eo(l);
                        t[s.toLowerCase()] = u;
                        break;
                    case "BYWEEKDAY":
                    case "BYDAY":
                        t.byweekday = o.split(",").map(function (e) {
                            if (2 === e.length) return ek[e];
                            var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                            if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
                            var r = Number(t[1]);
                            return new i(ek[t[2]].weekday, r);
                        });
                        break;
                    case "DTSTART":
                    case "TZID":
                        var c = ea(e);
                        (t.tzid = c.tzid), (t.dtstart = c.dtstart);
                        break;
                    case "UNTIL":
                        t.until = B(o);
                        break;
                    case "BYEASTER":
                        t.byeaster = Number(o);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + s + "'");
                }
            }),
        t
    );
}
function eo(e) {
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
function eu(e) {
    for (var t = [], r = "", n = Object.keys(e), a = Object.keys(eN), s = 0; s < n.length; s++)
        if ("tzid" !== n[s] && b(a, n[s])) {
            var u,
                d,
                f = n[s].toUpperCase(),
                p = e[n[s]],
                h = "";
            if (!(!o(p) || (c(p) && !p.length))) {
                switch (f) {
                    case "FREQ":
                        h = eI.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        h = l(p) ? new i(p).toString() : p.toString();
                        break;
                    case "BYWEEKDAY":
                        (f = "BYDAY"),
                            (h = (c(p) ? p : [p])
                                .map(function (e) {
                                    return e instanceof i ? e : c(e) ? new i(e[0], e[1]) : new i(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        (u = p), (d = e.tzid), (r = u ? "DTSTART" + new el(new Date(u), d).toString() : "");
                        break;
                    case "UNTIL":
                        h = F(p, !e.tzid);
                        break;
                    default:
                        if (c(p)) {
                            for (var m = [], _ = 0; _ < p.length; _++) m[_] = String(p[_]);
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
        v = "";
    return (
        "" !== g && (v = "RRULE:".concat(g)),
        [r, v]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}
var ec = (function () {
        function e() {
            (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
        }
        return (
            (e.prototype._cacheAdd = function (e, t, r) {
                t && (t = t instanceof Date ? L(t) : I(t)),
                    "all" === e ? (this.all = t) : ((r._value = t), this[e].push(r));
            }),
            (e.prototype._cacheGet = function (e, t) {
                var r = !1,
                    n = t ? Object.keys(t) : [],
                    a = this[e];
                if ("all" === e) r = this.all;
                else if (c(a))
                    for (var s = 0; s < a.length; s++) {
                        var i = a[s];
                        if (
                            !(
                                n.length &&
                                (function (e) {
                                    for (var r = 0; r < n.length; r++) {
                                        var a = n[r];
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
                                            })(t[a], e[a])
                                        )
                                            return !0;
                                    }
                                    return !1;
                                })(i)
                            )
                        ) {
                            r = i._value;
                            break;
                        }
                    }
                if (!r && this.all) {
                    for (var o = new j(e, t), s = 0; s < this.all.length && o.accept(this.all[s]); s++);
                    (r = o.getValue()), this._cacheAdd(e, r, t);
                }
                return c(r) ? I(r) : r instanceof Date ? L(r) : r;
            }),
            e
        );
    })(),
    ed = (0, V.fX)(
        (0, V.fX)(
            (0, V.fX)(
                (0, V.fX)(
                    (0, V.fX)(
                        (0, V.fX)(
                            (0, V.fX)(
                                (0, V.fX)(
                                    (0, V.fX)(
                                        (0, V.fX)(
                                            (0, V.fX)(
                                                (0, V.fX)((0, V.fX)([], f(1, 31), !0), f(2, 28), !0),
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
    ef = (0, V.fX)(
        (0, V.fX)(
            (0, V.fX)(
                (0, V.fX)(
                    (0, V.fX)(
                        (0, V.fX)(
                            (0, V.fX)(
                                (0, V.fX)(
                                    (0, V.fX)(
                                        (0, V.fX)(
                                            (0, V.fX)(
                                                (0, V.fX)((0, V.fX)([], f(1, 31), !0), f(2, 29), !0),
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
    e_ = d(1, 32),
    eg = (0, V.fX)(
        (0, V.fX)(
            (0, V.fX)(
                (0, V.fX)(
                    (0, V.fX)(
                        (0, V.fX)(
                            (0, V.fX)(
                                (0, V.fX)(
                                    (0, V.fX)(
                                        (0, V.fX)((0, V.fX)((0, V.fX)((0, V.fX)([], e_, !0), eh, !0), e_, !0), em, !0),
                                        e_,
                                        !0,
                                    ),
                                    em,
                                    !0,
                                ),
                                e_,
                                !0,
                            ),
                            e_,
                            !0,
                        ),
                        em,
                        !0,
                    ),
                    e_,
                    !0,
                ),
                em,
                !0,
            ),
            e_,
            !0,
        ),
        e_.slice(0, 7),
        !0,
    ),
    ev = (0, V.fX)(
        (0, V.fX)(
            (0, V.fX)(
                (0, V.fX)(
                    (0, V.fX)(
                        (0, V.fX)(
                            (0, V.fX)(
                                (0, V.fX)(
                                    (0, V.fX)(
                                        (0, V.fX)((0, V.fX)((0, V.fX)((0, V.fX)([], e_, !0), ep, !0), e_, !0), em, !0),
                                        e_,
                                        !0,
                                    ),
                                    em,
                                    !0,
                                ),
                                e_,
                                !0,
                            ),
                            e_,
                            !0,
                        ),
                        em,
                        !0,
                    ),
                    e_,
                    !0,
                ),
                em,
                !0,
            ),
            e_,
            !0,
        ),
        e_.slice(0, 7),
        !0,
    ),
    eb = d(-28, 0),
    ey = d(-29, 0),
    eE = d(-30, 0),
    eS = d(-31, 0),
    eT = (0, V.fX)(
        (0, V.fX)(
            (0, V.fX)(
                (0, V.fX)(
                    (0, V.fX)(
                        (0, V.fX)(
                            (0, V.fX)(
                                (0, V.fX)(
                                    (0, V.fX)(
                                        (0, V.fX)((0, V.fX)((0, V.fX)((0, V.fX)([], eS, !0), ey, !0), eS, !0), eE, !0),
                                        eS,
                                        !0,
                                    ),
                                    eE,
                                    !0,
                                ),
                                eS,
                                !0,
                            ),
                            eS,
                            !0,
                        ),
                        eE,
                        !0,
                    ),
                    eS,
                    !0,
                ),
                eE,
                !0,
            ),
            eS,
            !0,
        ),
        eS.slice(0, 7),
        !0,
    ),
    ex = (0, V.fX)(
        (0, V.fX)(
            (0, V.fX)(
                (0, V.fX)(
                    (0, V.fX)(
                        (0, V.fX)(
                            (0, V.fX)(
                                (0, V.fX)(
                                    (0, V.fX)(
                                        (0, V.fX)((0, V.fX)((0, V.fX)((0, V.fX)([], eS, !0), eb, !0), eS, !0), eE, !0),
                                        eS,
                                        !0,
                                    ),
                                    eE,
                                    !0,
                                ),
                                eS,
                                !0,
                            ),
                            eS,
                            !0,
                        ),
                        eE,
                        !0,
                    ),
                    eS,
                    !0,
                ),
                eE,
                !0,
            ),
            eS,
            !0,
        ),
        eS.slice(0, 7),
        !0,
    ),
    ew = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
    eC = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    eD = (function () {
        for (var e = [], t = 0; t < 55; t++) e = e.concat(d(7));
        return e;
    })(),
    eO = (function () {
        function e(e) {
            this.options = e;
        }
        return (
            (e.prototype.rebuild = function (e, t) {
                var r,
                    n,
                    a,
                    s,
                    i,
                    l,
                    u,
                    c,
                    d,
                    p,
                    h = this.options;
                if (
                    (e !== this.lastyear &&
                        (this.yearinfo = (function (e, t) {
                            var r,
                                n,
                                a,
                                s,
                                i,
                                o = y(e, 1, 1),
                                l = x(e) ? 366 : 365,
                                u = x(e + 1) ? 366 : 365,
                                c = O(o),
                                d = R(o),
                                p = (0, V.Cl)(
                                    (0, V.Cl)(
                                        { yearlen: l, nextyearlen: u, yearordinal: c, yearweekday: d },
                                        ((n = x((r = e)) ? 366 : 365),
                                        (a = R(y(r, 1, 1))),
                                        365 === n
                                            ? {
                                                  mmask: ed,
                                                  mdaymask: ev,
                                                  nmdaymask: ex,
                                                  wdaymask: eD.slice(a),
                                                  mrange: eC,
                                              }
                                            : {
                                                  mmask: ef,
                                                  mdaymask: eg,
                                                  nmdaymask: eT,
                                                  wdaymask: eD.slice(a),
                                                  mrange: ew,
                                              }),
                                    ),
                                    { wnomask: null },
                                );
                            if (g(t.byweekno)) return p;
                            p.wnomask = f(0, l + 7);
                            var h = (s = m(7 - d + t.wkst, 7));
                            h >= 4 ? ((h = 0), (i = p.yearlen + m(d - t.wkst, 7))) : (i = l - h);
                            for (
                                var _ = Math.floor(Math.floor(i / 7) + m(i, 7) / 4), v = 0;
                                v < t.byweekno.length;
                                v++
                            ) {
                                var E = t.byweekno[v];
                                if ((E < 0 && (E += _ + 1), E > 0 && E <= _)) {
                                    var S = void 0;
                                    E > 1 ? ((S = h + (E - 1) * 7), h !== s && (S -= 7 - s)) : (S = h);
                                    for (var T = 0; T < 7 && ((p.wnomask[S] = 1), S++, p.wdaymask[S] !== t.wkst); T++);
                                }
                            }
                            if (b(t.byweekno, 1)) {
                                var S = h + 7 * _;
                                if ((h !== s && (S -= 7 - s), S < l))
                                    for (
                                        var v = 0;
                                        v < 7 && ((p.wnomask[S] = 1), (S += 1), p.wdaymask[S] !== t.wkst);
                                        v++
                                    );
                            }
                            if (h) {
                                var w = void 0;
                                if (b(t.byweekno, -1)) w = -1;
                                else {
                                    var C = R(y(e - 1, 1, 1)),
                                        D = m(7 - C.valueOf() + t.wkst, 7),
                                        A = x(e - 1) ? 366 : 365,
                                        M = void 0;
                                    D >= 4 ? ((D = 0), (M = A + m(C - t.wkst, 7))) : (M = l - h),
                                        (w = Math.floor(52 + m(M, 7) / 4));
                                }
                                if (b(t.byweekno, w)) for (var S = 0; S < h; S++) p.wnomask[S] = 1;
                            }
                            return p;
                        })(e, h)),
                    v(h.bynweekday) && (t !== this.lastmonth || e !== this.lastyear))
                ) {
                    var _ = this.yearinfo,
                        E = _.yearlen,
                        S = _.mrange,
                        T = _.wdaymask;
                    this.monthinfo = (function (e, t, r, n, a, s) {
                        var i = { lastyear: e, lastmonth: t, nwdaymask: [] },
                            o = [];
                        if (s.freq === eI.YEARLY)
                            if (g(s.bymonth)) o = [[0, r]];
                            else
                                for (var l = 0; l < s.bymonth.length; l++)
                                    (t = s.bymonth[l]), o.push(n.slice(t - 1, t + 1));
                        else s.freq === eI.MONTHLY && (o = [n.slice(t - 1, t + 1)]);
                        if (g(o)) return i;
                        i.nwdaymask = f(0, r);
                        for (var l = 0; l < o.length; l++)
                            for (var u = o[l], c = u[0], d = u[1] - 1, p = 0; p < s.bynweekday.length; p++) {
                                var h = void 0,
                                    _ = s.bynweekday[p],
                                    v = _[0],
                                    b = _[1];
                                b < 0
                                    ? ((h = d + (b + 1) * 7), (h -= m(a[h] - v, 7)))
                                    : ((h = c + (b - 1) * 7), (h += m(7 - a[h] + v, 7))),
                                    c <= h && h <= d && (i.nwdaymask[h] = 1);
                            }
                        return i;
                    })(e, t, E, S, T, h);
                }
                o(h.byeaster) &&
                    (this.eastermask =
                        (void 0 === (r = h.byeaster) && (r = 0),
                        (n = e % 19),
                        (a = Math.floor(e / 100)),
                        (s = e % 100),
                        (i = Math.floor(a / 4)),
                        (l = Math.floor((a + 8) / 25)),
                        (u = Math.floor((a - l + 1) / 3)),
                        (c = Math.floor(19 * n + a - i - u + 15) % 30),
                        (d = Math.floor(32 + (a % 4) * 2 + 2 * Math.floor(s / 4) - c - (s % 4)) % 7),
                        (p = Math.floor((n + 11 * c + 22 * d) / 451)),
                        [
                            Math.ceil(
                                (Date.UTC(
                                    e,
                                    Math.floor((c + d - 7 * p + 114) / 31) - 1,
                                    ((c + d - 7 * p + 114) % 31) + 1 + r,
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
                for (var r = this.mrange[t - 1], n = this.mrange[t], a = f(null, this.yearlen), s = r; s < n; s++)
                    a[s] = s;
                return [a, r, n];
            }),
            (e.prototype.wdayset = function (e, t, r) {
                for (
                    var n = f(null, this.yearlen + 7), a = O(y(e, t, r)) - this.yearordinal, s = a, i = 0;
                    i < 7 && ((n[a] = a), ++a, this.wdaymask[a] !== this.options.wkst);
                    i++
                );
                return [n, s, a];
            }),
            (e.prototype.ddayset = function (e, t, r) {
                var n = f(null, this.yearlen),
                    a = O(y(e, t, r)) - this.yearordinal;
                return (n[a] = a), [n, a, a + 1];
            }),
            (e.prototype.htimeset = function (e, t, r, n) {
                var a = this,
                    s = [];
                return (
                    this.options.byminute.forEach(function (t) {
                        s = s.concat(a.mtimeset(e, t, r, n));
                    }),
                    P(s),
                    s
                );
            }),
            (e.prototype.mtimeset = function (e, t, r, n) {
                var a = this.options.bysecond.map(function (r) {
                    return new ee(e, t, r, n);
                });
                return P(a), a;
            }),
            (e.prototype.stimeset = function (e, t, r, n) {
                return [new ee(e, t, r, n)];
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
function eA(e, t) {
    var r = t.dtstart,
        n = t.freq,
        a = t.interval,
        s = t.until,
        i = t.bysetpos,
        l = t.count;
    if (0 === l || 0 === a) return eR(e);
    var u = et.fromDate(r),
        c = new eO(t);
    c.rebuild(u.year, u.month);
    for (
        var d = (function (e, t, r) {
            var n = r.freq,
                a = r.byhour,
                s = r.byminute,
                i = r.bysecond;
            if (X(n)) {
                var o = r.dtstart.getTime() % 1e3;
                if (!X(r.freq)) return [];
                var l = [];
                return (
                    r.byhour.forEach(function (e) {
                        r.byminute.forEach(function (t) {
                            r.bysecond.forEach(function (r) {
                                l.push(new ee(e, t, r, o));
                            });
                        });
                    }),
                    l
                );
            }
            return (n >= eI.HOURLY && v(a) && !b(a, t.hour)) ||
                (n >= eI.MINUTELY && v(s) && !b(s, t.minute)) ||
                (n >= eI.SECONDLY && v(i) && !b(i, t.second))
                ? []
                : e.gettimeset(n)(t.hour, t.minute, t.second, t.millisecond);
        })(c, u, t);
        ;
    ) {
        var f = c.getdayset(n)(u.year, u.month, u.day),
            p = f[0],
            h = f[1],
            _ = f[2],
            g = (function (e, t, r, n, a) {
                for (var s = !1, i = t; i < r; i++) {
                    var o = e[i];
                    (s = (function (e, t, r) {
                        var n = r.bymonth,
                            a = r.byweekno,
                            s = r.byweekday,
                            i = r.byeaster,
                            o = r.bymonthday,
                            l = r.bynmonthday,
                            u = r.byyearday;
                        return (
                            (v(n) && !b(n, e.mmask[t])) ||
                            (v(a) && !e.wnomask[t]) ||
                            (v(s) && !b(s, e.wdaymask[t])) ||
                            (v(e.nwdaymask) && !e.nwdaymask[t]) ||
                            (null !== i && !b(e.eastermask, t)) ||
                            ((v(o) || v(l)) && !b(o, e.mdaymask[t]) && !b(l, e.nmdaymask[t])) ||
                            (v(u) &&
                                ((t < e.yearlen && !b(u, t + 1) && !b(u, -e.yearlen + t)) ||
                                    (t >= e.yearlen &&
                                        !b(u, t + 1 - e.yearlen) &&
                                        !b(u, -e.nextyearlen + t - e.yearlen))))
                        );
                    })(n, o, a)) && (e[o] = null);
                }
                return s;
            })(p, h, _, c, t);
        if (v(i))
            for (
                var y = (function (e, t, r, n, a, s) {
                        for (var i = [], l = 0; l < e.length; l++) {
                            var u = void 0,
                                c = void 0,
                                d = e[l];
                            d < 0
                                ? ((u = Math.floor(d / t.length)), (c = m(d, t.length)))
                                : ((u = Math.floor((d - 1) / t.length)), (c = m(d - 1, t.length)));
                            for (var f = [], p = r; p < n; p++) {
                                var h = s[p];
                                o(h) && f.push(h);
                            }
                            var _ = void 0;
                            _ = u < 0 ? f.slice(u)[0] : f[u];
                            var g = t[c],
                                v = N(A(a.yearordinal + _), g);
                            b(i, v) || i.push(v);
                        }
                        return P(i), i;
                    })(i, d, h, _, c, p),
                    E = 0;
                E < y.length;
                E++
            ) {
                var S = y[E];
                if (s && S > s) return eR(e);
                if (S >= r) {
                    var T = eM(S, t);
                    if (!e.accept(T) || (l && !--l)) return eR(e);
                }
            }
        else
            for (var E = h; E < _; E++) {
                var x = p[E];
                if (o(x))
                    for (var w = A(c.yearordinal + x), C = 0; C < d.length; C++) {
                        var S = N(w, d[C]);
                        if (s && S > s) return eR(e);
                        if (S >= r) {
                            var T = eM(S, t);
                            if (!e.accept(T) || (l && !--l)) return eR(e);
                        }
                    }
            }
        if (0 === t.interval || (u.add(t, g), u.year > 9999)) return eR(e);
        X(n) || (d = c.gettimeset(n)(u.hour, u.minute, u.second, 0)), c.rebuild(u.year, u.month);
    }
}
function eM(e, t) {
    return new el(e, t.tzid).rezonedDate();
}
function eR(e) {
    return e.getValue();
}
var ek = { MO: new i(0), TU: new i(1), WE: new i(2), TH: new i(3), FR: new i(4), SA: new i(5), SU: new i(6) },
    eN = {
        freq: a.YEARLY,
        dtstart: null,
        interval: 1,
        wkst: ek.MO,
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
    eL = Object.keys(eN),
    eI = (function () {
        function e(e, t) {
            void 0 === e && (e = {}),
                void 0 === t && (t = !1),
                (this._cache = t ? null : new ec()),
                (this.origOptions = er(e));
            var r = (function (e) {
                var t = (0, V.Cl)((0, V.Cl)({}, eN), er(e));
                if ((o(t.byeaster) && (t.freq = eI.YEARLY), !(o(t.freq) && eI.FREQUENCIES[t.freq])))
                    throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
                if (
                    (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))),
                    o(t.wkst) ? l(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = eI.MO.weekday),
                    o(t.bysetpos))
                ) {
                    l(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
                    for (var r = 0; r < t.bysetpos.length; r++) {
                        var n = t.bysetpos[r];
                        if (0 === n || !(n >= -366 && n <= 366))
                            throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
                    }
                }
                if (
                    !(
                        t.byweekno ||
                        v(t.byweekno) ||
                        v(t.byyearday) ||
                        t.bymonthday ||
                        v(t.bymonthday) ||
                        o(t.byweekday) ||
                        o(t.byeaster)
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
                            t.byweekday = [R(t.dtstart)];
                    }
                if (
                    (o(t.bymonth) && !c(t.bymonth) && (t.bymonth = [t.bymonth]),
                    o(t.byyearday) && !c(t.byyearday) && l(t.byyearday) && (t.byyearday = [t.byyearday]),
                    o(t.bymonthday))
                )
                    if (c(t.bymonthday)) {
                        for (var a = [], s = [], r = 0; r < t.bymonthday.length; r++) {
                            var n = t.bymonthday[r];
                            n > 0 ? a.push(n) : n < 0 && s.push(n);
                        }
                        (t.bymonthday = a), (t.bynmonthday = s);
                    } else
                        t.bymonthday < 0
                            ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = []))
                            : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
                else (t.bymonthday = []), (t.bynmonthday = []);
                if ((o(t.byweekno) && !c(t.byweekno) && (t.byweekno = [t.byweekno]), o(t.byweekday)))
                    if (l(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
                    else if (u(t.byweekday)) (t.byweekday = [i.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
                    else if (t.byweekday instanceof i)
                        !t.byweekday.n || t.freq > eI.MONTHLY
                            ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null))
                            : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
                    else {
                        for (var d = [], f = [], r = 0; r < t.byweekday.length; r++) {
                            var p = t.byweekday[r];
                            if (l(p)) {
                                d.push(p);
                                continue;
                            }
                            if (u(p)) {
                                d.push(i.fromStr(p).weekday);
                                continue;
                            }
                            !p.n || t.freq > eI.MONTHLY ? d.push(p.weekday) : f.push([p.weekday, p.n]);
                        }
                        (t.byweekday = v(d) ? d : null), (t.bynweekday = v(f) ? f : null);
                    }
                else t.bynweekday = null;
                return (
                    o(t.byhour)
                        ? l(t.byhour) && (t.byhour = [t.byhour])
                        : (t.byhour = t.freq < eI.HOURLY ? [t.dtstart.getUTCHours()] : null),
                    o(t.byminute)
                        ? l(t.byminute) && (t.byminute = [t.byminute])
                        : (t.byminute = t.freq < eI.MINUTELY ? [t.dtstart.getUTCMinutes()] : null),
                    o(t.bysecond)
                        ? l(t.bysecond) && (t.bysecond = [t.bysecond])
                        : (t.bysecond = t.freq < eI.SECONDLY ? [t.dtstart.getUTCSeconds()] : null),
                    { parsedOptions: t }
                );
            })(e).parsedOptions;
            this.options = r;
        }
        return (
            (e.parseText = function (e, t) {
                return Q(e, t);
            }),
            (e.fromText = function (e, t) {
                var r;
                return void 0 === (r = t) && (r = G), new eI(Q(e, r) || void 0);
            }),
            (e.fromString = function (t) {
                return new e(e.parseString(t) || void 0);
            }),
            (e.prototype._iter = function (e) {
                return eA(e, this.options);
            }),
            (e.prototype._cacheGet = function (e, t) {
                return !!this._cache && this._cache._cacheGet(e, t);
            }),
            (e.prototype._cacheAdd = function (e, t, r) {
                if (this._cache) return this._cache._cacheAdd(e, t, r);
            }),
            (e.prototype.all = function (e) {
                if (e) return this._iter(new H("all", {}, e));
                var t = this._cacheGet("all");
                return !1 === t && ((t = this._iter(new j("all", {}))), this._cacheAdd("all", t)), t;
            }),
            (e.prototype.between = function (e, t, r, n) {
                if ((void 0 === r && (r = !1), !C(e) || !C(t))) throw Error("Invalid date passed in to RRule.between");
                var a = { before: t, after: e, inc: r };
                if (n) return this._iter(new H("between", a, n));
                var s = this._cacheGet("between", a);
                return !1 === s && ((s = this._iter(new j("between", a))), this._cacheAdd("between", s, a)), s;
            }),
            (e.prototype.before = function (e, t) {
                if ((void 0 === t && (t = !1), !C(e))) throw Error("Invalid date passed in to RRule.before");
                var r = { dt: e, inc: t },
                    n = this._cacheGet("before", r);
                return !1 === n && ((n = this._iter(new j("before", r))), this._cacheAdd("before", n, r)), n;
            }),
            (e.prototype.after = function (e, t) {
                if ((void 0 === t && (t = !1), !C(e))) throw Error("Invalid date passed in to RRule.after");
                var r = { dt: e, inc: t },
                    n = this._cacheGet("after", r);
                return !1 === n && ((n = this._iter(new j("after", r))), this._cacheAdd("after", n, r)), n;
            }),
            (e.prototype.count = function () {
                return this.all().length;
            }),
            (e.prototype.toString = function () {
                return eu(this.origOptions);
            }),
            (e.prototype.toText = function (e, t, r) {
                return new $(this, e, t, r).toString();
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
            (e.MO = ek.MO),
            (e.TU = ek.TU),
            (e.WE = ek.WE),
            (e.TH = ek.TH),
            (e.FR = ek.FR),
            (e.SA = ek.SA),
            (e.SU = ek.SU),
            (e.parseString = en),
            (e.optionsToString = eu),
            e
        );
    })(),
    eP = { dtstart: null, cache: !1, unfold: !1, forceset: !1, compatible: !1, tzid: null };
function eF(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var r,
                n,
                a,
                s,
                i,
                o,
                l,
                u =
                    ((r = []),
                    (n = []),
                    (a = []),
                    (s = []),
                    (o = (i = ea(e)).dtstart),
                    (l = i.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error("Invalid empty string");
                        if (!t) return e.split(/\s/);
                        for (var r = e.split("\n"), n = 0; n < r.length; ) {
                            var a = (r[n] = r[n].replace(/\s+$/g, ""));
                            a
                                ? n > 0 && " " === a[0]
                                    ? ((r[n - 1] += a.slice(1)), r.splice(n, 1))
                                    : (n += 1)
                                : r.splice(n, 1);
                        }
                        return r;
                    })(e, t.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                i = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(":")) return { name: "RRULE", value: e };
                                            var t = h(e, ":", 1);
                                            return { name: t[0], value: t[1] };
                                        })(e),
                                        r = t.name,
                                        n = t.value,
                                        a = r.split(";");
                                    if (!a) throw Error("empty property name");
                                    return { name: a[0].toUpperCase(), parms: a.slice(1), value: n };
                                })(e),
                                o = i.name,
                                u = i.parms,
                                c = i.value;
                            switch (o.toUpperCase()) {
                                case "RRULE":
                                    if (u.length) throw Error("unsupported RRULE parm: ".concat(u.join(",")));
                                    r.push(en(e));
                                    break;
                                case "RDATE":
                                    var d = (null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [])[1];
                                    d && !l && (l = d), (n = n.concat(eY(c, u)));
                                    break;
                                case "EXRULE":
                                    if (u.length) throw Error("unsupported EXRULE parm: ".concat(u.join(",")));
                                    a.push(en(c));
                                    break;
                                case "EXDATE":
                                    s = s.concat(eY(c, u));
                                    break;
                                case "DTSTART":
                                    break;
                                default:
                                    throw Error("unsupported property: " + o);
                            }
                        }
                    }),
                    { dtstart: o, tzid: l, rrulevals: r, rdatevals: n, exrulevals: a, exdatevals: s }),
                c = u.rrulevals,
                d = u.rdatevals,
                f = u.exrulevals,
                p = u.exdatevals,
                m = u.dtstart,
                _ = u.tzid,
                g = !1 === t.cache;
            if (
                (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
                t.forceset || c.length > 1 || d.length || f.length || p.length)
            ) {
                var v = new ej(g);
                return (
                    v.dtstart(m),
                    v.tzid(_ || void 0),
                    c.forEach(function (e) {
                        v.rrule(new eI(eB(e, m, _), g));
                    }),
                    d.forEach(function (e) {
                        v.rdate(e);
                    }),
                    f.forEach(function (e) {
                        v.exrule(new eI(eB(e, m, _), g));
                    }),
                    p.forEach(function (e) {
                        v.exdate(e);
                    }),
                    t.compatible && t.dtstart && v.rdate(m),
                    v
                );
            }
            var b = c[0] || {};
            return new eI(eB(b, b.dtstart || t.dtstart || m, b.tzid || t.tzid || _), g);
        })(
            e,
            (function (e) {
                var t = [],
                    r = Object.keys(e),
                    n = Object.keys(eP);
                if (
                    (r.forEach(function (e) {
                        b(n, e) || t.push(e);
                    }),
                    t.length)
                )
                    throw Error("Invalid options: " + t.join(", "));
                return (0, V.Cl)((0, V.Cl)({}, eP), e);
            })(t),
        )
    );
}
function eB(e, t, r) {
    return (0, V.Cl)((0, V.Cl)({}, e), { dtstart: t, tzid: r });
}
function eY(e, t) {
    return (
        t.forEach(function (e) {
            if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
        }),
        e.split(",").map(function (e) {
            return B(e);
        })
    );
}
function eU(e) {
    var t = this;
    return function (r) {
        if ((void 0 !== r && (t["_".concat(e)] = r), void 0 !== t["_".concat(e)])) return t["_".concat(e)];
        for (var n = 0; n < t._rrule.length; n++) {
            var a = t._rrule[n].origOptions[e];
            if (a) return a;
        }
    };
}
var ej = (function (e) {
    function t(t) {
        void 0 === t && (t = !1);
        var r = e.call(this, {}, t) || this;
        return (
            (r.dtstart = eU.apply(r, ["dtstart"])),
            (r.tzid = eU.apply(r, ["tzid"])),
            (r._rrule = []),
            (r._rdate = []),
            (r._exrule = []),
            (r._exdate = []),
            r
        );
    }
    return (
        (0, V.C6)(t, e),
        (t.prototype._iter = function (e) {
            return (function (e, t, r, n, a, s) {
                var i = {},
                    o = e.accept;
                function l(e, t) {
                    r.forEach(function (r) {
                        r.between(e, t, !0).forEach(function (e) {
                            i[Number(e)] = !0;
                        });
                    });
                }
                a.forEach(function (e) {
                    i[Number(new el(e, s).rezonedDate())] = !0;
                }),
                    (e.accept = function (e) {
                        var t = Number(e);
                        return isNaN(t)
                            ? o.call(this, e)
                            : !!i[t] || (l(new Date(t - 1), new Date(t + 1)), !!i[t]) || ((i[t] = !0), o.call(this, e));
                    }),
                    "between" === e.method &&
                        (l(e.args.after, e.args.before),
                        (e.accept = function (e) {
                            var t = Number(e);
                            return !!i[t] || ((i[t] = !0), o.call(this, e));
                        }));
                for (var u = 0; u < n.length; u++) {
                    var c = new el(n[u], s).rezonedDate();
                    if (!e.accept(new Date(c.getTime()))) break;
                }
                t.forEach(function (t) {
                    eA(e, t.options);
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
            eV(e, this._rrule);
        }),
        (t.prototype.exrule = function (e) {
            eV(e, this._exrule);
        }),
        (t.prototype.rdate = function (e) {
            eH(e, this._rdate);
        }),
        (t.prototype.exdate = function (e) {
            eH(e, this._exdate);
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
                !this._rrule.length && this._dtstart && (e = e.concat(eu({ dtstart: this._dtstart }))),
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
                this._rdate.length && e.push(eG("RDATE", this._rdate, this.tzid())),
                this._exdate.length && e.push(eG("EXDATE", this._exdate, this.tzid())),
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
function eV(e, t) {
    if (!(e instanceof eI)) throw TypeError(String(e) + " is not RRule instance");
    b(t.map(String), String(e)) || t.push(e);
}
function eH(e, t) {
    if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
    b(t.map(Number), Number(e)) || (t.push(e), P(t));
}
function eG(e, t, r) {
    var n = !r || "UTC" === r.toUpperCase(),
        a = n ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(r, ":"),
        s = t
            .map(function (e) {
                return F(e.valueOf(), n);
            })
            .join(",");
    return "".concat(a).concat(s);
}
