"use strict";
n.d(t, {
    CC: () => v,
    CI: () => b,
    DS: () => W,
    G3: () => G,
    IS: () => h,
    N5: () => P,
    Ri: () => w,
    X7: () => U,
    Xx: () => R,
    Xy: () => m,
    Ze: () => f,
    er: () => x,
    j: () => Y,
    jd: () => O,
    nG: () => H,
    p$: () => V,
    sv: () => M,
    z7: () => j,
    zD: () => k,
}),
    n(321073);
var i = n(735438),
    r = n(989349),
    s = n.n(r),
    a = n(902537),
    o = n(287809),
    l = n(58703),
    d = n(927813),
    _ = n(935208),
    u = n(604701),
    c = n(988794),
    E = n(985018);
let h = 365,
    m = 366,
    f = 4,
    g = [a.p3.MO.weekday, a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday, a.p3.FR.weekday],
    p = [a.p3.SU.weekday, a.p3.MO.weekday, a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday],
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
        ];
    return (
        C.has(t.getDay())
            ? o.default.getCurrentUser()?.isStaff() &&
              r.push({ id: "weekendOnly", value: u.z.WEEKEND_ONLY, label: E.intl.string(E.t.hRpynV) })
            : r.push({ id: "weekdayOnly", value: u.z.WEEKDAY_ONLY, label: E.intl.string(E.t["jYR/MY"]) }),
        r
    );
}
let O = () => {
        let e = s()().add(1, "hour"),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    y = (e, t) => (0, l.i$)(e, e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT");
function v(e, t, n) {
    var i;
    let r;
    null == n && (n = s()());
    let a = s()(e),
        o = null != t && "" !== t ? s()(t) : void 0,
        d = null != t && a.isSame(o, "day");
    return {
        startDateTimeString:
            ((i = n),
            (r = (0, l.m_)(a.toDate(), i.toDate())) > 1 || r < 0
                ? y(a, i)
                : (0, l.i$)(a, a.localeData().calendar(r < 1 ? "sameDay" : "nextDay", a, i))),
        endDateTimeString: null != o ? (d ? o.format("LT") : y(o, n)) : void 0,
        currentOrPastEvent: a <= n,
        upcomingEvent: a <= s()().add(1, "hour"),
        withinStartWindow: a <= s()().add(15, "minute"),
        diffMinutes: a.diff(n, "minutes"),
    };
}
function D(e) {
    return new a.Bw(N[e]);
}
function L(e, t) {
    let n;
    return null != e && ((n = { startDate: s()(e), endDate: void 0 }), null != t && (n.endDate = s()(t))), n;
}
function b(e, t) {
    var n;
    let i = L((n = t).scheduled_start_time, n.scheduled_end_time),
        r = s()(_.default.extractTimestamp(e)),
        a = i?.endDate != null ? r.clone().add(i.endDate.diff(i.startDate)) : void 0;
    return { startDate: r, endDate: a };
}
function w(e, t) {
    if (null == t) return e;
    let n = t.scheduled_end_time ?? e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
        endDate: null != n ? s()(n) : void 0,
    };
}
function P(e) {
    return L(e.scheduledStartTime, e.scheduledEndTime);
}
function k(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function M(e, t) {
    return null == e || null == t ? null == e && null == t : k(e.startDate, t.startDate) && k(e.endDate, t.endDate);
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
function x(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = n > new Date() ? n : new Date(),
        s = new Date();
    s.setFullYear(s.getFullYear() + f);
    let a = t.between(r, s, !0, (t, n) => n < e + 1);
    return i && a.length > 0 && n.getTime() === a[0].getTime() ? a.slice(1) : a.slice(0, e);
}
function G(e) {
    if (null == e) return null;
    let t = null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
    return null != t ? _.default.fromTimestamp(Math.floor(t.getTime() / d.A.Millis.SECOND) * d.A.Millis.SECOND) : null;
}
function V(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        i = new Date(_.default.extractTimestamp(t));
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
    let t = D(e.toDate().getDay()),
        n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? A : n.weekday - t.weekday < 0 ? p : g;
}
function B(e) {
    let t = D(e.toDate().getDay()),
        n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? T : I;
}
function H(e, t) {
    let n = (function (e, t) {
        let n = F(t),
            i = B(t),
            r = D(t.toDate().getUTCDay()),
            s = Math.ceil(t.toDate().getUTCDate() / 7),
            o = t.toDate();
        switch ((o.setMilliseconds(0), e)) {
            case u.z.NONE:
                return null;
            case u.z.WEEKLY:
                return new a.p3({ dtstart: o, freq: a.p3.WEEKLY });
            case u.z.BIWEEKLY:
                return new a.p3({ dtstart: o, freq: a.p3.WEEKLY, interval: 2 });
            case u.z.MONTHLY:
                return new a.p3({ dtstart: o, freq: a.p3.MONTHLY, byweekday: [r.nth(s)] });
            case u.z.YEARLY:
                return new a.p3({ dtstart: o, freq: a.p3.YEARLY });
            case u.z.WEEKDAY_ONLY:
                return new a.p3({ dtstart: o, freq: a.p3.DAILY, byweekday: n });
            case u.z.WEEKEND_ONLY:
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
            bynweekday: d,
            bymonth: _,
            bymonthday: c,
            byyearday: E,
            count: h,
        } = n.options,
        m = d?.map((e) => ({ n: e[1], day: e[0] }));
    return {
        start: i.toISOString(),
        end: r?.toISOString(),
        frequency: s,
        interval: o,
        byWeekday: l,
        byNWeekday: m,
        byMonth: _,
        byMonthDay: c,
        byYearDay: E,
        count: h,
    };
}
function j(e, t) {
    if (null == t) return u.z.NONE;
    let n = U(t);
    switch (n.options.freq) {
        case a.p3.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return u.z.NONE;
            return 1 === n.options.interval ? u.z.WEEKLY : u.z.BIWEEKLY;
        case a.p3.YEARLY:
            return u.z.YEARLY;
        case a.p3.MONTHLY:
            return u.z.MONTHLY;
        case a.p3.DAILY:
            if ((0, i.isEqual)(n.options.byweekday, F(e))) return u.z.WEEKDAY_ONLY;
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
    return e?.is_canceled ? c.XG.CANCELED : t < n ? c.XG.COMPLETED : null != e ? c.XG.SCHEDULED : null;
}
