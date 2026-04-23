"use strict";
n.d(t, {
    CC: () => R,
    CI: () => L,
    DS: () => Y,
    G3: () => G,
    IS: () => p,
    N5: () => M,
    Ri: () => w,
    X7: () => k,
    Xx: () => v,
    Xy: () => h,
    Ze: () => E,
    er: () => U,
    j: () => W,
    jd: () => C,
    nG: () => H,
    p$: () => F,
    sv: () => x,
    z7: () => j,
    zD: () => P,
}),
    n(321073);
var r = n(735438),
    i = n(989349),
    s = n.n(i),
    a = n(471691),
    o = n(287809),
    l = n(405269),
    u = n(927813),
    c = n(661191),
    d = n(604701),
    _ = n(988794),
    f = n(985018);
let p = 365,
    h = 366,
    E = 4,
    m = [a.p3.MO.weekday, a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday, a.p3.FR.weekday],
    g = [a.p3.SU.weekday, a.p3.MO.weekday, a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday],
    A = [a.p3.TU.weekday, a.p3.WE.weekday, a.p3.TH.weekday, a.p3.FR.weekday, a.p3.SA.weekday],
    I = [a.p3.SA.weekday, a.p3.SU.weekday],
    T = [a.p3.FR.weekday, a.p3.SA.weekday],
    S = [a.p3.SU.weekday, a.p3.MO.weekday],
    y = [
        a.p3.SU.weekday,
        a.p3.MO.weekday,
        a.p3.TU.weekday,
        a.p3.WE.weekday,
        a.p3.TH.weekday,
        a.p3.FR.weekday,
        a.p3.SA.weekday,
    ],
    N = new Set([0, 6]);
function v(e) {
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
let C = () => {
        let e = s()().add(1, "hour"),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    O = (e, t) => (0, l.i$)(e, e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT");
function R(e, t, n) {
    var r;
    let i;
    null == n && (n = s()());
    let a = s()(e),
        o = null != t && "" !== t ? s()(t) : void 0,
        u = null != t && a.isSame(o, "day");
    return {
        startDateTimeString:
            ((r = n),
            (i = (0, l.m_)(a.toDate(), r.toDate())) > 1 || i < 0
                ? O(a, r)
                : (0, l.i$)(a, a.localeData().calendar(i < 1 ? "sameDay" : "nextDay", a, r))),
        endDateTimeString: null != o ? (u ? o.format("LT") : O(o, n)) : void 0,
        currentOrPastEvent: a <= n,
        upcomingEvent: a <= s()().add(1, "hour"),
        withinStartWindow: a <= s()().add(15, "minute"),
        diffMinutes: a.diff(n, "minutes"),
    };
}
function b(e) {
    return new a.Bw(y[e]);
}
function D(e, t) {
    let n;
    return null != e && ((n = { startDate: s()(e), endDate: void 0 }), null != t && (n.endDate = s()(t))), n;
}
function L(e, t) {
    var n;
    let r = D((n = t).scheduled_start_time, n.scheduled_end_time),
        i = s()(c.default.extractTimestamp(e)),
        a = r?.endDate != null ? i.clone().add(r.endDate.diff(r.startDate)) : void 0;
    return { startDate: i, endDate: a };
}
function w(e, t) {
    if (null == t) return e;
    let n = t.scheduled_end_time ?? e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
        endDate: null != n ? s()(n) : void 0,
    };
}
function M(e) {
    return D(e.scheduledStartTime, e.scheduledEndTime);
}
function P(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function x(e, t) {
    return null == e || null == t ? null == e && null == t : P(e.startDate, t.startDate) && P(e.endDate, t.endDate);
}
function k(e) {
    let t = null != e.byWeekday ? [...e.byWeekday] : null,
        n = e.byNWeekday?.map((e) => new a.Bw(e.day, e.n)),
        r = new Date(e.start);
    return (
        r.setMilliseconds(0),
        new a.p3({
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
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n > new Date() ? n : new Date(),
        s = new Date();
    s.setFullYear(s.getFullYear() + E);
    let a = t.between(i, s, !0, (t, n) => n < e + 1);
    return r && a.length > 0 && n.getTime() === a[0].getTime() ? a.slice(1) : a.slice(0, e);
}
function G(e) {
    if (null == e) return null;
    let t = null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
    return null != t ? c.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND) : null;
}
function F(e, t) {
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
        case a.p3.WEEKLY:
            return n.getUTCDay() === r.getUTCDay();
        case a.p3.YEARLY:
            return n.getUTCDate() === r.getUTCDate();
        default:
            return !0;
    }
}
function V(e) {
    let t = b(e.toDate().getDay()),
        n = b(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? A : n.weekday - t.weekday < 0 ? g : m;
}
function B(e) {
    let t = b(e.toDate().getDay()),
        n = b(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? T : I;
}
function H(e, t) {
    let n = (function (e, t) {
        let n = V(t),
            r = B(t),
            i = b(t.toDate().getUTCDay()),
            s = Math.ceil(t.toDate().getUTCDate() / 7),
            o = t.toDate();
        switch ((o.setMilliseconds(0), e)) {
            case d.z.NONE:
                return null;
            case d.z.WEEKLY:
                return new a.p3({ dtstart: o, freq: a.p3.WEEKLY });
            case d.z.BIWEEKLY:
                return new a.p3({ dtstart: o, freq: a.p3.WEEKLY, interval: 2 });
            case d.z.MONTHLY:
                return new a.p3({ dtstart: o, freq: a.p3.MONTHLY, byweekday: [i.nth(s)] });
            case d.z.YEARLY:
                return new a.p3({ dtstart: o, freq: a.p3.YEARLY });
            case d.z.WEEKDAY_ONLY:
                return new a.p3({ dtstart: o, freq: a.p3.DAILY, byweekday: n });
            case d.z.WEEKEND_ONLY:
                return new a.p3({ dtstart: o, freq: a.p3.DAILY, byweekday: r });
        }
    })(e, t);
    if (null == n) return null;
    let {
            dtstart: r,
            until: i,
            freq: s,
            interval: o,
            byweekday: l,
            bynweekday: u,
            bymonth: c,
            bymonthday: _,
            byyearday: f,
            count: p,
        } = n.options,
        h = u?.map((e) => ({ n: e[1], day: e[0] }));
    return {
        start: r.toISOString(),
        end: i?.toISOString(),
        frequency: s,
        interval: o,
        byWeekday: l,
        byNWeekday: h,
        byMonth: c,
        byMonthDay: _,
        byYearDay: f,
        count: p,
    };
}
function j(e, t) {
    if (null == t) return d.z.NONE;
    let n = k(t);
    switch (n.options.freq) {
        case a.p3.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
            return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
        case a.p3.YEARLY:
            return d.z.YEARLY;
        case a.p3.MONTHLY:
            return d.z.MONTHLY;
        case a.p3.DAILY:
            if ((0, r.isEqual)(n.options.byweekday, V(e))) return d.z.WEEKDAY_ONLY;
            if ((0, r.isEqual)(n.options.byweekday, B(e))) return d.z.WEEKEND_ONLY;
            return d.z.NONE;
        default:
            return d.z.NONE;
    }
}
function Y(e, t) {
    return (
        e?.scheduled_start_time !== t.scheduledStartTime ||
        e.scheduled_end_time !== t.scheduledEndTime ||
        !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule)
    );
}
function W(e, t, n) {
    return e?.is_canceled ? _.XG.CANCELED : t < n ? _.XG.COMPLETED : null != e ? _.XG.SCHEDULED : null;
}
