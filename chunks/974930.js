n.d(t, {
    CC: () => D,
    CI: () => j,
    DS: () => Q,
    G3: () => Y,
    IS: () => _,
    N5: () => k,
    Ri: () => M,
    X7: () => F,
    Xx: () => N,
    Xy: () => h,
    Ze: () => b,
    er: () => B,
    j: () => $,
    jd: () => R,
    nG: () => X,
    p$: () => W,
    sv: () => V,
    z7: () => Z,
    zD: () => G,
}),
    n(896048),
    n(321073);
var r = n(735438),
    i = n(989349),
    a = n.n(i),
    s = n(471691),
    o = n(287809),
    l = n(405269),
    c = n(927813),
    u = n(661191),
    d = n(604701),
    f = n(988794),
    p = n(985018);
let _ = 365,
    h = 366,
    m = "ddd MMM Do \xB7 LT",
    g = "ddd MMM Do, YYYY \xB7 LT",
    E = "LT",
    b = 4,
    y = [s.p3.MO.weekday, s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday, s.p3.FR.weekday],
    O = [s.p3.SU.weekday, s.p3.MO.weekday, s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday],
    A = [s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday, s.p3.FR.weekday, s.p3.SA.weekday],
    v = [s.p3.SA.weekday, s.p3.SU.weekday],
    S = [s.p3.FR.weekday, s.p3.SA.weekday],
    I = [s.p3.SU.weekday, s.p3.MO.weekday],
    T = [
        s.p3.SU.weekday,
        s.p3.MO.weekday,
        s.p3.TU.weekday,
        s.p3.WE.weekday,
        s.p3.TH.weekday,
        s.p3.FR.weekday,
        s.p3.SA.weekday,
    ],
    C = new Set([0, 6]);
function N(e) {
    var t;
    let n = e.toDate(),
        r = Math.ceil(n.getDate() / 7),
        i = e.format("dddd"),
        a = [
            {
                id: "none",
                value: d.z.NONE,
                label: p.intl.string(p.t["0bK0B1"]),
            },
            {
                id: "weekly",
                value: d.z.WEEKLY,
                label: p.intl.formatToPlainString(p.t["B8/yfp"], { weekday: i }),
            },
            {
                id: "biweekly",
                value: d.z.BIWEEKLY,
                label: p.intl.formatToPlainString(p.t["z+aIuX"], { weekday: i }),
            },
            {
                id: "monthly",
                value: d.z.MONTHLY,
                label: p.intl.formatToPlainString(p.t.mjOEBk, {
                    nth: r,
                    weekday: i,
                }),
            },
            {
                id: "yearly",
                value: d.z.YEARLY,
                label: p.intl.formatToPlainString(p.t["5DFcVl"], {
                    date: n.toLocaleString(p.intl.currentLocale, {
                        month: "short",
                        day: "2-digit",
                    }),
                }),
            },
        ];
    return (
        C.has(n.getDay())
            ? (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) &&
              a.push({
                  id: "weekendOnly",
                  value: d.z.WEEKEND_ONLY,
                  label: p.intl.string(p.t.hRpynV),
              })
            : a.push({
                  id: "weekdayOnly",
                  value: d.z.WEEKDAY_ONLY,
                  label: p.intl.string(p.t["jYR/MY"]),
              }),
        a
    );
}
let R = () => {
        let e = a()().add(1, "hour"),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    w = (e, t) => (0, l.i$)(e, e.get("years") === t.get("years") ? m : g),
    P = (e, t) => {
        let n = (0, l.m_)(e.toDate(), t.toDate());
        return n > 1 || n < 0 ? w(e, t) : (0, l.i$)(e, e.localeData().calendar(n < 1 ? "sameDay" : "nextDay", e, t));
    };
function D(e, t, n) {
    null == n && (n = a()());
    let r = a()(e),
        i = null != t && "" !== t ? a()(t) : void 0,
        s = null != t && r.isSame(i, "day");
    return {
        startDateTimeString: P(r, n),
        endDateTimeString: null != i ? (s ? i.format(E) : w(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= a()().add(1, "hour"),
        withinStartWindow: r <= a()().add(15, "minute"),
        diffMinutes: r.diff(n, "minutes"),
    };
}
function x(e) {
    return new s.Bw(T[e]);
}
function L(e, t) {
    let n;
    return (
        null != e &&
            ((n = {
                startDate: a()(e),
                endDate: void 0,
            }),
            null != t && (n.endDate = a()(t))),
        n
    );
}
function j(e, t) {
    let n = U(t),
        r = a()(u.default.extractTimestamp(e)),
        i = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: r,
        endDate: i,
    };
}
function M(e, t) {
    var n;
    if (null == t) return e;
    let r = null != (n = t.scheduled_end_time) ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? a()(r) : void 0,
    };
}
function k(e) {
    return L(e.scheduledStartTime, e.scheduledEndTime);
}
function U(e) {
    return L(e.scheduled_start_time, e.scheduled_end_time);
}
function G(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function V(e, t) {
    return null == e || null == t ? null == e && null == t : G(e.startDate, t.startDate) && G(e.endDate, t.endDate);
}
function F(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null,
        r = null == (t = e.byNWeekday) ? void 0 : t.map((e) => new s.Bw(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new s.p3({
            dtstart: i,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != n ? n : r,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count,
        })
    );
}
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n > new Date() ? n : new Date(),
        a = new Date();
    a.setFullYear(a.getFullYear() + b);
    let s = t.between(i, a, !0, (t, n) => n < e + 1);
    return r && s.length > 0 && n.getTime() === s[0].getTime() ? s.slice(1) : s.slice(0, e);
}
function H(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function Y(e) {
    if (null == e) return null;
    let t = H(e);
    return null != t ? u.default.fromTimestamp(Math.floor(t.getTime() / c.A.Millis.SECOND) * c.A.Millis.SECOND) : null;
}
function W(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(u.default.extractTimestamp(t));
    if (
        n.getUTCHours() !== r.getUTCHours() ||
        n.getUTCMinutes() !== r.getUTCMinutes() ||
        n.getUTCSeconds() !== r.getUTCSeconds()
    )
        return !1;
    switch (e.frequency) {
        case s.p3.WEEKLY:
            return n.getUTCDay() === r.getUTCDay();
        case s.p3.YEARLY:
            return n.getUTCDate() === r.getUTCDate();
        default:
            return !0;
    }
}
function K(e) {
    let t = x(e.toDate().getDay()),
        n = x(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? A : n.weekday - t.weekday < 0 ? O : y;
}
function z(e) {
    let t = x(e.toDate().getDay()),
        n = x(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? I : n.weekday - t.weekday < 0 ? S : v;
}
function q(e, t) {
    let n = K(t),
        r = z(t),
        i = x(t.toDate().getUTCDay()),
        a = Math.ceil(t.toDate().getUTCDate() / 7),
        o = t.toDate();
    switch ((o.setMilliseconds(0), e)) {
        case d.z.NONE:
            return null;
        case d.z.WEEKLY:
            return new s.p3({
                dtstart: o,
                freq: s.p3.WEEKLY,
            });
        case d.z.BIWEEKLY:
            return new s.p3({
                dtstart: o,
                freq: s.p3.WEEKLY,
                interval: 2,
            });
        case d.z.MONTHLY:
            return new s.p3({
                dtstart: o,
                freq: s.p3.MONTHLY,
                byweekday: [i.nth(a)],
            });
        case d.z.YEARLY:
            return new s.p3({
                dtstart: o,
                freq: s.p3.YEARLY,
            });
        case d.z.WEEKDAY_ONLY:
            return new s.p3({
                dtstart: o,
                freq: s.p3.DAILY,
                byweekday: n,
            });
        case d.z.WEEKEND_ONLY:
            return new s.p3({
                dtstart: o,
                freq: s.p3.DAILY,
                byweekday: r,
            });
    }
}
function X(e, t) {
    let n = q(e, t);
    if (null == n) return null;
    let {
            dtstart: r,
            until: i,
            freq: a,
            interval: s,
            byweekday: o,
            bynweekday: l,
            bymonth: c,
            bymonthday: u,
            byyearday: d,
            count: f,
        } = n.options,
        p =
            null == l
                ? void 0
                : l.map((e) => ({
                      n: e[1],
                      day: e[0],
                  }));
    return {
        start: r.toISOString(),
        end: null == i ? void 0 : i.toISOString(),
        frequency: a,
        interval: s,
        byWeekday: o,
        byNWeekday: p,
        byMonth: c,
        byMonthDay: u,
        byYearDay: d,
        count: f,
    };
}
function Z(e, t) {
    if (null == t) return d.z.NONE;
    let n = F(t);
    switch (n.options.freq) {
        case s.p3.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
            return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
        case s.p3.YEARLY:
            return d.z.YEARLY;
        case s.p3.MONTHLY:
            return d.z.MONTHLY;
        case s.p3.DAILY:
            if ((0, r.isEqual)(n.options.byweekday, K(e))) return d.z.WEEKDAY_ONLY;
            if ((0, r.isEqual)(n.options.byweekday, z(e))) return d.z.WEEKEND_ONLY;
            return d.z.NONE;
        default:
            return d.z.NONE;
    }
}
function Q(e, t) {
    return (
        (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime ||
        e.scheduled_end_time !== t.scheduledEndTime ||
        !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule)
    );
}
function $(e, t, n) {
    return (null == e ? void 0 : e.is_canceled)
        ? f.XG.CANCELED
        : t < n
          ? f.XG.COMPLETED
          : null != e
            ? f.XG.SCHEDULED
            : null;
}
