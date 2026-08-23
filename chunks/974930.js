"use strict";
n.d(t, {
    CC: () => y,
    CI: () => b,
    DS: () => W,
    G3: () => k,
    IS: () => A,
    N5: () => P,
    Ri: () => M,
    X7: () => G,
    Xx: () => R,
    Xy: () => h,
    Ze: () => I,
    er: () => x,
    j: () => Y,
    jd: () => O,
    nG: () => H,
    p$: () => F,
    sv: () => w,
    z7: () => j,
    zD: () => U,
}),
    n(321073);
var i = n(435558),
    r = n(989349),
    a = n.n(r),
    s = n(902537),
    l = n(287809),
    o = n(58703),
    d = n(927813),
    c = n(935208),
    u = n(604701),
    _ = n(988794),
    E = n(375708);
let A = 365,
    h = 366,
    I = 4,
    f = [s.p3.MO.weekday, s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday, s.p3.FR.weekday],
    p = [s.p3.SU.weekday, s.p3.MO.weekday, s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday],
    T = [s.p3.TU.weekday, s.p3.WE.weekday, s.p3.TH.weekday, s.p3.FR.weekday, s.p3.SA.weekday],
    m = [s.p3.SA.weekday, s.p3.SU.weekday],
    g = [s.p3.FR.weekday, s.p3.SA.weekday],
    S = [s.p3.SU.weekday, s.p3.MO.weekday],
    N = [
        s.p3.SU.weekday,
        s.p3.MO.weekday,
        s.p3.TU.weekday,
        s.p3.WE.weekday,
        s.p3.TH.weekday,
        s.p3.FR.weekday,
        s.p3.SA.weekday,
    ],
    C = new Set([0, 6]);
function R(e) {
    let t = e.toDate(),
        n = Math.ceil(t.getDate() / 7),
        i = e.format("dddd"),
        r = [
            { id: "none", value: u.z.NONE, label: E.intl.string(E.t["0bK0B1"]) },
            { id: "weekly", value: u.z.WEEKLY, label: E.intl.formatToPlainString(E.t["B8/yfp"], { weekday: i }) },
            { id: "biweekly", value: u.z.BIWEEKLY, label: E.intl.formatToPlainString(E.t["z+aIuX"], { weekday: i }) },
            {
                id: "monthly",
                value: u.z.MONTHLY,
                label: E.intl.formatToPlainString(E.t.mjOEBk, { nth: n, weekday: i }),
            },
            {
                id: "yearly",
                value: u.z.YEARLY,
                label: E.intl.formatToPlainString(E.t["5DFcVl"], {
                    date: t.toLocaleString(E.intl.currentLocale, { month: "short", day: "2-digit" }),
                }),
            },
            { id: "daily", value: u.z.DAILY, label: E.intl.string(E.t.JX8E1E) },
        ];
    return (
        C.has(t.getDay())
            ? l.default.getCurrentUser()?.isStaff() &&
              r.push({ id: "weekendOnly", value: u.z.WEEKEND_ONLY, label: E.intl.string(E.t.hRpynV) })
            : r.push({ id: "weekdayOnly", value: u.z.WEEKDAY_ONLY, label: E.intl.string(E.t["jYR/MY"]) }),
        r
    );
}
function O() {
    let e = a()().add(1, "hour"),
        t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
}
function L(e, t) {
    return (0, o.i$)(e, e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT");
}
function y(e, t, n) {
    var i;
    let r;
    null == n && (n = a()());
    let s = a()(e),
        l = null != t && "" !== t ? a()(t) : void 0,
        d = null != t && s.isSame(l, "day");
    return {
        startDateTimeString:
            ((i = n),
            (r = (0, o.m_)(s.toDate(), i.toDate())) > 1 || r < 0
                ? L(s, i)
                : (0, o.i$)(s, s.localeData().calendar(r < 1 ? "sameDay" : "nextDay", s, i))),
        endDateTimeString: null != l ? (d ? l.format("LT") : L(l, n)) : void 0,
        currentOrPastEvent: s <= n,
        upcomingEvent: s <= a()().add(1, "hour"),
        withinStartWindow: s <= a()().add(15, "minute"),
        diffMinutes: s.diff(n, "minutes"),
    };
}
function D(e) {
    return new s.Bw(N[e]);
}
function v(e, t) {
    let n;
    return null != e && ((n = { startDate: a()(e), endDate: void 0 }), null != t && (n.endDate = a()(t))), n;
}
function b(e, t) {
    var n;
    let i = v((n = t).scheduled_start_time, n.scheduled_end_time),
        r = a()(c.default.extractTimestamp(e)),
        s = i?.endDate != null ? r.clone().add(i.endDate.diff(i.startDate)) : void 0;
    return { startDate: r, endDate: s };
}
function M(e, t) {
    if (null == t) return e;
    let n = t.scheduled_end_time ?? e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != n ? a()(n) : void 0,
    };
}
function P(e) {
    return v(e.scheduledStartTime, e.scheduledEndTime);
}
function U(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function w(e, t) {
    return null == e || null == t ? null == e && null == t : U(e.startDate, t.startDate) && U(e.endDate, t.endDate);
}
function G(e) {
    let t = null != e.byWeekday ? [...e.byWeekday] : null,
        n = e.byNWeekday?.map((e) => new s.Bw(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new s.p3({
            dtstart: i,
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
function x(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = n > new Date() ? n : new Date(),
        a = new Date();
    a.setFullYear(a.getFullYear() + I);
    let s = t.between(r, a, !0, (t, n) => n < e + 1);
    return i && s.length > 0 && n.getTime() === s[0].getTime() ? s.slice(1) : s.slice(0, e);
}
function k(e) {
    if (null == e) return null;
    let t = null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
    return null != t ? c.default.fromTimestamp(Math.floor(t.getTime() / d.A.Millis.SECOND) * d.A.Millis.SECOND) : null;
}
function F(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        i = new Date(c.default.extractTimestamp(t));
    if (
        n.getUTCHours() !== i.getUTCHours() ||
        n.getUTCMinutes() !== i.getUTCMinutes() ||
        n.getUTCSeconds() !== i.getUTCSeconds()
    )
        return !1;
    switch (e.frequency) {
        case s.p3.WEEKLY:
            return n.getUTCDay() === i.getUTCDay();
        case s.p3.YEARLY:
            return n.getUTCDate() === i.getUTCDate();
        default:
            return !0;
    }
}
function V(e) {
    let t = D(e.toDate().getDay()),
        n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? T : n.weekday - t.weekday < 0 ? p : f;
}
function B(e) {
    let t = D(e.toDate().getDay()),
        n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? g : m;
}
function H(e, t) {
    let n = (function (e, t) {
        let n = V(t),
            i = B(t),
            r = D(t.toDate().getUTCDay()),
            a = Math.ceil(t.toDate().getUTCDate() / 7),
            l = t.toDate();
        switch ((l.setMilliseconds(0), e)) {
            case u.z.NONE:
                return null;
            case u.z.WEEKLY:
                return new s.p3({ dtstart: l, freq: s.p3.WEEKLY });
            case u.z.BIWEEKLY:
                return new s.p3({ dtstart: l, freq: s.p3.WEEKLY, interval: 2 });
            case u.z.MONTHLY:
                return new s.p3({ dtstart: l, freq: s.p3.MONTHLY, byweekday: [r.nth(a)] });
            case u.z.YEARLY:
                return new s.p3({ dtstart: l, freq: s.p3.YEARLY });
            case u.z.DAILY:
                return new s.p3({ dtstart: l, freq: s.p3.DAILY });
            case u.z.WEEKDAY_ONLY:
                return new s.p3({ dtstart: l, freq: s.p3.DAILY, byweekday: n });
            case u.z.WEEKEND_ONLY:
                return new s.p3({ dtstart: l, freq: s.p3.DAILY, byweekday: i });
        }
    })(e, t);
    if (null == n) return null;
    let {
            dtstart: i,
            until: r,
            freq: a,
            interval: l,
            byweekday: o,
            bynweekday: d,
            bymonth: c,
            bymonthday: _,
            byyearday: E,
            count: A,
        } = n.options,
        h = d?.map((e) => ({ n: e[1], day: e[0] }));
    return {
        start: i.toISOString(),
        end: r?.toISOString(),
        frequency: a,
        interval: l,
        byWeekday: o,
        byNWeekday: h,
        byMonth: c,
        byMonthDay: _,
        byYearDay: E,
        count: A,
    };
}
function j(e, t) {
    if (null == t) return u.z.NONE;
    let n = G(t);
    switch (n.options.freq) {
        case s.p3.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return u.z.NONE;
            return 1 === n.options.interval ? u.z.WEEKLY : u.z.BIWEEKLY;
        case s.p3.YEARLY:
            return u.z.YEARLY;
        case s.p3.MONTHLY:
            return u.z.MONTHLY;
        case s.p3.DAILY:
            if (null == n.options.byweekday || 0 === n.options.byweekday.length) return u.z.DAILY;
            if ((0, i.isEqual)(n.options.byweekday, V(e))) return u.z.WEEKDAY_ONLY;
            if ((0, i.isEqual)(n.options.byweekday, B(e))) return u.z.WEEKEND_ONLY;
            return u.z.NONE;
        default:
            return u.z.NONE;
    }
}
function W(e, t) {
    return (
        e?.scheduled_start_time !== t.scheduledStartTime ||
        e.scheduled_end_time !== t.scheduledEndTime ||
        !(0, i.isEqual)(e.recurrence_rule, t.recurrenceRule)
    );
}
function Y(e, t, n) {
    return e?.is_canceled ? _.XG.CANCELED : t < n ? _.XG.COMPLETED : null != e ? _.XG.SCHEDULED : null;
}
