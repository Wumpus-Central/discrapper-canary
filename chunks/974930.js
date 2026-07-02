"use strict";
n.d(t, {
    CC: () => O,
    CI: () => D,
    DS: () => W,
    G3: () => G,
    IS: () => f,
    N5: () => w,
    Ri: () => P,
    X7: () => U,
    Xx: () => y,
    Xy: () => E,
    Ze: () => p,
    er: () => k,
    j: () => Y,
    jd: () => v,
    nG: () => j,
    p$: () => V,
    sv: () => x,
    z7: () => H,
    zD: () => M,
}),
    n(321073);
var i = n(735438),
    r = n(989349),
    s = n.n(r),
    a = n(902537),
    o = n(287809),
    l = n(58703),
    u = n(927813),
    d = n(935208),
    c = n(604701),
    _ = n(988794),
    h = n(375708);
let f = 365,
    E = 366,
    p = 4,
    m = [a.p3.MO.weekday, a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday, a.p3.FR.weekday],
    g = [a.p3.SU.weekday, a.p3.MO.weekday, a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday],
    A = [a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday, a.p3.FR.weekday, a.p3.SA.weekday],
    I = [a.p3.SA.weekday, a.p3.SU.weekday],
    T = [a.p3.FR.weekday, a.p3.SA.weekday],
    S = [a.p3.SU.weekday, a.p3.MO.weekday],
    N = [
        a.p3.SU.weekday,
        a.p3.MO.weekday,
        a.p3.TU.weekday,
        a.p3.WE.weekday,
        a.p3.TH.weekday,
        a.p3.FR.weekday,
        a.p3.SA.weekday,
    ],
    C = new Set([0, 6]);
function y(e) {
    let t = e.toDate(),
        n = Math.ceil(t.getDate() / 7),
        i = e.format("dddd"),
        r = [
            { id: "none", value: c.z.NONE, label: h.intl.string(h.t["0bK0B1"]) },
            { id: "weekly", value: c.z.WEEKLY, label: h.intl.formatToPlainString(h.t["B8/yfp"], { weekday: i }) },
            { id: "biweekly", value: c.z.BIWEEKLY, label: h.intl.formatToPlainString(h.t["z+aIuX"], { weekday: i }) },
            {
                id: "monthly",
                value: c.z.MONTHLY,
                label: h.intl.formatToPlainString(h.t.mjOEBk, { nth: n, weekday: i }),
            },
            {
                id: "yearly",
                value: c.z.YEARLY,
                label: h.intl.formatToPlainString(h.t["5DFcVl"], {
                    date: t.toLocaleString(h.intl.currentLocale, { month: "short", day: "2-digit" }),
                }),
            },
            { id: "daily", value: c.z.DAILY, label: h.intl.string(h.t.JX8E1E) },
        ];
    return (
        C.has(t.getDay())
            ? o.default.getCurrentUser()?.isStaff() &&
              r.push({ id: "weekendOnly", value: c.z.WEEKEND_ONLY, label: h.intl.string(h.t.hRpynV) })
            : r.push({ id: "weekdayOnly", value: c.z.WEEKDAY_ONLY, label: h.intl.string(h.t["jYR/MY"]) }),
        r
    );
}
function v() {
    let e = s()().add(1, "hour"),
        t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
}
let R = (e, t) => (0, l.i$)(e, e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT");
function O(e, t, n) {
    var i;
    let r;
    null == n && (n = s()());
    let a = s()(e),
        o = null != t && "" !== t ? s()(t) : void 0,
        u = null != t && a.isSame(o, "day");
    return {
        startDateTimeString:
            ((i = n),
            (r = (0, l.m_)(a.toDate(), i.toDate())) > 1 || r < 0
                ? R(a, i)
                : (0, l.i$)(a, a.localeData().calendar(r < 1 ? "sameDay" : "nextDay", a, i))),
        endDateTimeString: null != o ? (u ? o.format("LT") : R(o, n)) : void 0,
        currentOrPastEvent: a <= n,
        upcomingEvent: a <= s()().add(1, "hour"),
        withinStartWindow: a <= s()().add(15, "minute"),
        diffMinutes: a.diff(n, "minutes"),
    };
}
function b(e) {
    return new a.Bw(N[e]);
}
function L(e, t) {
    let n;
    return null != e && ((n = { startDate: s()(e), endDate: void 0 }), null != t && (n.endDate = s()(t))), n;
}
function D(e, t) {
    var n;
    let i = L((n = t).scheduled_start_time, n.scheduled_end_time),
        r = s()(d.default.extractTimestamp(e)),
        a = i?.endDate != null ? r.clone().add(i.endDate.diff(i.startDate)) : void 0;
    return { startDate: r, endDate: a };
}
function P(e, t) {
    if (null == t) return e;
    let n = t.scheduled_end_time ?? e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
        endDate: null != n ? s()(n) : void 0,
    };
}
function w(e) {
    return L(e.scheduledStartTime, e.scheduledEndTime);
}
function M(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function x(e, t) {
    return null == e || null == t ? null == e && null == t : M(e.startDate, t.startDate) && M(e.endDate, t.endDate);
}
function U(e) {
    let t = null != e.byWeekday ? [...e.byWeekday] : null,
        n = e.byNWeekday?.map((e) => new a.Bw(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new a.p3({
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
function k(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = n > new Date() ? n : new Date(),
        s = new Date();
    s.setFullYear(s.getFullYear() + p);
    let a = t.between(r, s, !0, (t, n) => n < e + 1);
    return i && a.length > 0 && n.getTime() === a[0].getTime() ? a.slice(1) : a.slice(0, e);
}
function G(e) {
    if (null == e) return null;
    let t = null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
    return null != t ? d.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND) : null;
}
function V(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        i = new Date(d.default.extractTimestamp(t));
    if (
        n.getUTCHours() !== i.getUTCHours() ||
        n.getUTCMinutes() !== i.getUTCMinutes() ||
        n.getUTCSeconds() !== i.getUTCSeconds()
    )
        return !1;
    switch (e.frequency) {
        case a.p3.WEEKLY:
            return n.getUTCDay() === i.getUTCDay();
        case a.p3.YEARLY:
            return n.getUTCDate() === i.getUTCDate();
        default:
            return !0;
    }
}
function F(e) {
    let t = b(e.toDate().getDay()),
        n = b(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? A : n.weekday - t.weekday < 0 ? g : m;
}
function B(e) {
    let t = b(e.toDate().getDay()),
        n = b(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? T : I;
}
function j(e, t) {
    let n = (function (e, t) {
        let n = F(t),
            i = B(t),
            r = b(t.toDate().getUTCDay()),
            s = Math.ceil(t.toDate().getUTCDate() / 7),
            o = t.toDate();
        switch ((o.setMilliseconds(0), e)) {
            case c.z.NONE:
                return null;
            case c.z.WEEKLY:
                return new a.p3({ dtstart: o, freq: a.p3.WEEKLY });
            case c.z.BIWEEKLY:
                return new a.p3({ dtstart: o, freq: a.p3.WEEKLY, interval: 2 });
            case c.z.MONTHLY:
                return new a.p3({ dtstart: o, freq: a.p3.MONTHLY, byweekday: [r.nth(s)] });
            case c.z.YEARLY:
                return new a.p3({ dtstart: o, freq: a.p3.YEARLY });
            case c.z.DAILY:
                return new a.p3({ dtstart: o, freq: a.p3.DAILY });
            case c.z.WEEKDAY_ONLY:
                return new a.p3({ dtstart: o, freq: a.p3.DAILY, byweekday: n });
            case c.z.WEEKEND_ONLY:
                return new a.p3({ dtstart: o, freq: a.p3.DAILY, byweekday: i });
        }
    })(e, t);
    if (null == n) return null;
    let {
            dtstart: i,
            until: r,
            freq: s,
            interval: o,
            byweekday: l,
            bynweekday: u,
            bymonth: d,
            bymonthday: _,
            byyearday: h,
            count: f,
        } = n.options,
        E = u?.map((e) => ({ n: e[1], day: e[0] }));
    return {
        start: i.toISOString(),
        end: r?.toISOString(),
        frequency: s,
        interval: o,
        byWeekday: l,
        byNWeekday: E,
        byMonth: d,
        byMonthDay: _,
        byYearDay: h,
        count: f,
    };
}
function H(e, t) {
    if (null == t) return c.z.NONE;
    let n = U(t);
    switch (n.options.freq) {
        case a.p3.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return c.z.NONE;
            return 1 === n.options.interval ? c.z.WEEKLY : c.z.BIWEEKLY;
        case a.p3.YEARLY:
            return c.z.YEARLY;
        case a.p3.MONTHLY:
            return c.z.MONTHLY;
        case a.p3.DAILY:
            if (null == n.options.byweekday || 0 === n.options.byweekday.length) return c.z.DAILY;
            if ((0, i.isEqual)(n.options.byweekday, F(e))) return c.z.WEEKDAY_ONLY;
            if ((0, i.isEqual)(n.options.byweekday, B(e))) return c.z.WEEKEND_ONLY;
            return c.z.NONE;
        default:
            return c.z.NONE;
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
