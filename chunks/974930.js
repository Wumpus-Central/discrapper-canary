"use strict";
n.d(t, {
    CC: () => w,
    CI: () => M,
    DS: () => Q,
    G3: () => Y,
    IS: () => p,
    N5: () => U,
    Ri: () => k,
    X7: () => B,
    Xx: () => R,
    Xy: () => h,
    Ze: () => A,
    er: () => j,
    j: () => X,
    jd: () => O,
    nG: () => q,
    p$: () => W,
    sv: () => F,
    z7: () => Z,
    zD: () => V,
}),
    n(321073);
var r = n(735438),
    i = n(989349),
    a = n.n(i),
    s = n(471691),
    o = n(287809),
    l = n(405269),
    u = n(927813),
    c = n(661191),
    d = n(604701),
    _ = n(988794),
    f = n(985018);
let p = 365,
    h = 366,
    m = "ddd MMM Do \xb7 LT",
    g = "ddd MMM Do, YYYY \xb7 LT",
    E = "LT",
    A = 4,
    I = [s.p3.MO.weekday, s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday, s.p3.FR.weekday],
    T = [s.p3.SU.weekday, s.p3.MO.weekday, s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday],
    y = [s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday, s.p3.FR.weekday, s.p3.SA.weekday],
    S = [s.p3.SA.weekday, s.p3.SU.weekday],
    v = [s.p3.FR.weekday, s.p3.SA.weekday],
    C = [s.p3.SU.weekday, s.p3.MO.weekday],
    b = [
        s.p3.SU.weekday,
        s.p3.MO.weekday,
        s.p3.TU.weekday,
        s.p3.WE.weekday,
        s.p3.TH.weekday,
        s.p3.FR.weekday,
        s.p3.SA.weekday,
    ],
    N = new Set([0, 6]);
function R(e) {
    let t = e.toDate(),
        n = Math.ceil(t.getDate() / 7),
        r = e.format("dddd"),
        i = [
            { id: "none", value: d.z.NONE, label: f.intl.string(f.t["0bK0B1"]) },
            { id: "weekly", value: d.z.WEEKLY, label: f.intl.formatToPlainString(f.t["B8/yfp"], { weekday: r }) },
            { id: "biweekly", value: d.z.BIWEEKLY, label: f.intl.formatToPlainString(f.t["z+aIuX"], { weekday: r }) },
            {
                id: "monthly",
                value: d.z.MONTHLY,
                label: f.intl.formatToPlainString(f.t.mjOEBk, { nth: n, weekday: r }),
            },
            {
                id: "yearly",
                value: d.z.YEARLY,
                label: f.intl.formatToPlainString(f.t["5DFcVl"], {
                    date: t.toLocaleString(f.intl.currentLocale, { month: "short", day: "2-digit" }),
                }),
            },
        ];
    return (
        N.has(t.getDay())
            ? o.default.getCurrentUser()?.isStaff() &&
              i.push({ id: "weekendOnly", value: d.z.WEEKEND_ONLY, label: f.intl.string(f.t.hRpynV) })
            : i.push({ id: "weekdayOnly", value: d.z.WEEKDAY_ONLY, label: f.intl.string(f.t["jYR/MY"]) }),
        i
    );
}
let O = () => {
        let e = a()().add(1, "hour"),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    D = (e, t) => (0, l.i$)(e, e.get("years") === t.get("years") ? m : g),
    L = (e, t) => {
        let n = (0, l.m_)(e.toDate(), t.toDate());
        return n > 1 || n < 0 ? D(e, t) : (0, l.i$)(e, e.localeData().calendar(n < 1 ? "sameDay" : "nextDay", e, t));
    };
function w(e, t, n) {
    null == n && (n = a()());
    let r = a()(e),
        i = null != t && "" !== t ? a()(t) : void 0,
        s = null != t && r.isSame(i, "day");
    return {
        startDateTimeString: L(r, n),
        endDateTimeString: null != i ? (s ? i.format(E) : D(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= a()().add(1, "hour"),
        withinStartWindow: r <= a()().add(15, "minute"),
        diffMinutes: r.diff(n, "minutes"),
    };
}
function x(e) {
    return new s.Bw(b[e]);
}
function P(e, t) {
    let n;
    return null != e && ((n = { startDate: a()(e), endDate: void 0 }), null != t && (n.endDate = a()(t))), n;
}
function M(e, t) {
    let n = G(t),
        r = a()(c.default.extractTimestamp(e)),
        i = n?.endDate != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return { startDate: r, endDate: i };
}
function k(e, t) {
    if (null == t) return e;
    let n = t.scheduled_end_time ?? e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != n ? a()(n) : void 0,
    };
}
function U(e) {
    return P(e.scheduledStartTime, e.scheduledEndTime);
}
function G(e) {
    return P(e.scheduled_start_time, e.scheduled_end_time);
}
function V(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function F(e, t) {
    return null == e || null == t ? null == e && null == t : V(e.startDate, t.startDate) && V(e.endDate, t.endDate);
}
function B(e) {
    let t = null != e.byWeekday ? [...e.byWeekday] : null,
        n = e.byNWeekday?.map((e) => new s.Bw(e.day, e.n)),
        r = new Date(e.start);
    return (
        r.setMilliseconds(0),
        new s.p3({
            dtstart: r,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: t ?? n,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count,
        })
    );
}
function j(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n > new Date() ? n : new Date(),
        a = new Date();
    a.setFullYear(a.getFullYear() + A);
    let s = t.between(i, a, !0, (t, n) => n < e + 1);
    return r && s.length > 0 && n.getTime() === s[0].getTime() ? s.slice(1) : s.slice(0, e);
}
function H(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function Y(e) {
    if (null == e) return null;
    let t = H(e);
    return null != t ? c.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND) : null;
}
function W(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(c.default.extractTimestamp(t));
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
    return n.weekday - t.weekday > 0 ? y : n.weekday - t.weekday < 0 ? T : I;
}
function z(e) {
    let t = x(e.toDate().getDay()),
        n = x(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? C : n.weekday - t.weekday < 0 ? v : S;
}
function $(e, t) {
    let n = K(t),
        r = z(t),
        i = x(t.toDate().getUTCDay()),
        a = Math.ceil(t.toDate().getUTCDate() / 7),
        o = t.toDate();
    switch ((o.setMilliseconds(0), e)) {
        case d.z.NONE:
            return null;
        case d.z.WEEKLY:
            return new s.p3({ dtstart: o, freq: s.p3.WEEKLY });
        case d.z.BIWEEKLY:
            return new s.p3({ dtstart: o, freq: s.p3.WEEKLY, interval: 2 });
        case d.z.MONTHLY:
            return new s.p3({ dtstart: o, freq: s.p3.MONTHLY, byweekday: [i.nth(a)] });
        case d.z.YEARLY:
            return new s.p3({ dtstart: o, freq: s.p3.YEARLY });
        case d.z.WEEKDAY_ONLY:
            return new s.p3({ dtstart: o, freq: s.p3.DAILY, byweekday: n });
        case d.z.WEEKEND_ONLY:
            return new s.p3({ dtstart: o, freq: s.p3.DAILY, byweekday: r });
    }
}
function q(e, t) {
    let n = $(e, t);
    if (null == n) return null;
    let {
            dtstart: r,
            until: i,
            freq: a,
            interval: s,
            byweekday: o,
            bynweekday: l,
            bymonth: u,
            bymonthday: c,
            byyearday: d,
            count: _,
        } = n.options,
        f = l?.map((e) => ({ n: e[1], day: e[0] }));
    return {
        start: r.toISOString(),
        end: i?.toISOString(),
        frequency: a,
        interval: s,
        byWeekday: o,
        byNWeekday: f,
        byMonth: u,
        byMonthDay: c,
        byYearDay: d,
        count: _,
    };
}
function Z(e, t) {
    if (null == t) return d.z.NONE;
    let n = B(t);
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
        e?.scheduled_start_time !== t.scheduledStartTime ||
        e.scheduled_end_time !== t.scheduledEndTime ||
        !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule)
    );
}
function X(e, t, n) {
    return e?.is_canceled ? _.XG.CANCELED : t < n ? _.XG.COMPLETED : null != e ? _.XG.SCHEDULED : null;
}
