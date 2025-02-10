n.d(t, {
    BP: () => X,
    DK: () => H,
    G3: () => p,
    Ho: () => F,
    Ib: () => h,
    P8: () => R,
    PJ: () => V,
    Rp: () => Y,
    Uq: () => B,
    Y4: () => Z,
    hn: () => v,
    iA: () => M,
    ib: () => O,
    lh: () => J,
    mF: () => q,
    ub: () => x,
    v1: () => U,
    x6: () => k,
    zi: () => Q
}),
    n(47120),
    n(653041);
var i = n(392711),
    r = n(913527),
    a = n.n(r),
    s = n(859334),
    o = n(594174),
    l = n(55935),
    u = n(70956),
    c = n(709054),
    d = n(849464),
    f = n(765305),
    _ = n(388032);
let p = 365,
    h = 366,
    m = 'ddd MMM Do \xB7 LT',
    g = 'ddd MMM Do, YYYY \xB7 LT',
    E = 'LT',
    v = 4,
    y = [s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday],
    I = [s.Ci.SU.weekday, s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday],
    T = [s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday, s.Ci.SA.weekday],
    b = [s.Ci.SA.weekday, s.Ci.SU.weekday],
    S = [s.Ci.FR.weekday, s.Ci.SA.weekday],
    A = [s.Ci.SU.weekday, s.Ci.MO.weekday],
    N = [s.Ci.SU.weekday, s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday, s.Ci.SA.weekday],
    C = new Set([0, 6]);
function R(e) {
    var t;
    let n = e.toDate(),
        i = Math.ceil(n.getDate() / 7),
        r = e.format('dddd'),
        a = [
            {
                value: d.z.NONE,
                label: _.intl.string(_.t['0bK0Bw'])
            },
            {
                value: d.z.WEEKLY,
                label: _.intl.formatToPlainString(_.t['B8/yfn'], { weekday: r })
            },
            {
                value: d.z.BIWEEKLY,
                label: _.intl.formatToPlainString(_.t['z+aIub'], { weekday: r })
            },
            {
                value: d.z.MONTHLY,
                label: _.intl.formatToPlainString(_.t.mjOEBg, {
                    nth: i,
                    weekday: r
                })
            },
            {
                value: d.z.YEARLY,
                label: _.intl.formatToPlainString(_.t['5DFcVl'], {
                    date: n.toLocaleString(_.intl.currentLocale, {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return (
        C.has(n.getDay())
            ? (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) &&
              a.push({
                  value: d.z.WEEKEND_ONLY,
                  label: _.intl.string(_.t.hRpynZ)
              })
            : a.push({
                  value: d.z.WEEKDAY_ONLY,
                  label: _.intl.string(_.t['jYR/MT'])
              }),
        a
    );
}
let O = () => {
        let e = a()().add(1, 'hour'),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    D = (e, t) => (0, l.vc)(e, e.get('years') === t.get('years') ? m : g),
    L = (e, t) => {
        let n = (0, l.wY)(e.toDate(), t.toDate());
        return n > 1 || n < 0 ? D(e, t) : (0, l.vc)(e, e.localeData().calendar(n < 1 ? 'sameDay' : 'nextDay', e, t));
    };
function x(e, t, n) {
    null == n && (n = a()());
    let i = a()(e),
        r = null != t && '' !== t ? a()(t) : void 0,
        s = null != t && i.isSame(r, 'day');
    return {
        startDateTimeString: L(i, n),
        endDateTimeString: null != r ? (s ? r.format(E) : D(r, n)) : void 0,
        currentOrPastEvent: i <= n,
        upcomingEvent: i <= a()().add(1, 'hour'),
        withinStartWindow: i <= a()().add(15, 'minute'),
        diffMinutes: i.diff(n, 'minutes')
    };
}
function P(e) {
    return new s.OG(N[e]);
}
function w(e, t) {
    let n;
    return (
        null != e &&
            ((n = {
                startDate: a()(e),
                endDate: void 0
            }),
            null != t && (n.endDate = a()(t))),
        n
    );
}
function M(e, t) {
    let n = G(t),
        i = a()(c.default.extractTimestamp(e)),
        r = (null == n ? void 0 : n.endDate) != null ? i.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: i,
        endDate: r
    };
}
function k(e, t) {
    var n;
    if (null == t) return e;
    let i = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != i ? a()(i) : void 0
    };
}
function U(e) {
    return w(e.scheduledStartTime, e.scheduledEndTime);
}
function G(e) {
    return w(e.scheduled_start_time, e.scheduled_end_time);
}
function B(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function Z(e, t) {
    return null == e || null == t ? null == e && null == t : B(e.startDate, t.startDate) && B(e.endDate, t.endDate);
}
function F(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null,
        i = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map((e) => new s.OG(e.day, e.n)),
        r = new Date(e.start);
    return (
        r.setMilliseconds(0),
        new s.Ci({
            dtstart: r,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != n ? n : i,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count
        })
    );
}
function V(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = n > new Date() ? n : new Date(),
        a = new Date();
    a.setFullYear(a.getFullYear() + v);
    let s = t.between(r, a, !0, (t, n) => n < e + 1);
    return i && s.length > 0 && n.getTime() === s[0].getTime() ? s.slice(1) : s.slice(0, e);
}
function j(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function H(e) {
    if (null == e) return null;
    let t = j(e);
    return null != t ? c.default.fromTimestamp(Math.floor(t.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND) : null;
}
function Y(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        i = new Date(c.default.extractTimestamp(t));
    if (n.getUTCHours() !== i.getUTCHours() || n.getUTCMinutes() !== i.getUTCMinutes() || n.getUTCSeconds() !== i.getUTCSeconds()) return !1;
    switch (e.frequency) {
        case s.Ci.WEEKLY:
            return n.getUTCDay() === i.getUTCDay();
        case s.Ci.YEARLY:
            return n.getUTCDate() === i.getUTCDate();
        default:
            return !0;
    }
}
function W(e) {
    let t = P(e.toDate().getDay()),
        n = P(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? T : n.weekday - t.weekday < 0 ? I : y;
}
function K(e) {
    let t = P(e.toDate().getDay()),
        n = P(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? A : n.weekday - t.weekday < 0 ? S : b;
}
function z(e, t) {
    let n = W(t),
        i = K(t),
        r = P(t.toDate().getUTCDay()),
        a = Math.ceil(t.toDate().getUTCDate() / 7),
        o = t.toDate();
    switch ((o.setMilliseconds(0), e)) {
        case d.z.NONE:
            return null;
        case d.z.WEEKLY:
            return new s.Ci({
                dtstart: o,
                freq: s.Ci.WEEKLY
            });
        case d.z.BIWEEKLY:
            return new s.Ci({
                dtstart: o,
                freq: s.Ci.WEEKLY,
                interval: 2
            });
        case d.z.MONTHLY:
            return new s.Ci({
                dtstart: o,
                freq: s.Ci.MONTHLY,
                byweekday: [r.nth(a)]
            });
        case d.z.YEARLY:
            return new s.Ci({
                dtstart: o,
                freq: s.Ci.YEARLY
            });
        case d.z.WEEKDAY_ONLY:
            return new s.Ci({
                dtstart: o,
                freq: s.Ci.DAILY,
                byweekday: n
            });
        case d.z.WEEKEND_ONLY:
            return new s.Ci({
                dtstart: o,
                freq: s.Ci.DAILY,
                byweekday: i
            });
    }
}
function q(e, t) {
    let n = z(e, t);
    if (null == n) return null;
    let { dtstart: i, until: r, freq: a, interval: s, byweekday: o, bynweekday: l, bymonth: u, bymonthday: c, byyearday: d, count: f } = n.options,
        _ =
            null == l
                ? void 0
                : l.map((e) => ({
                      n: e[1],
                      day: e[0]
                  }));
    return {
        start: i.toISOString(),
        end: null == r ? void 0 : r.toISOString(),
        frequency: a,
        interval: s,
        byWeekday: o,
        byNWeekday: _,
        byMonth: u,
        byMonthDay: c,
        byYearDay: d,
        count: f
    };
}
function Q(e, t) {
    if (null == t) return d.z.NONE;
    let n = F(t);
    switch (n.options.freq) {
        case s.Ci.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
            return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
        case s.Ci.YEARLY:
            return d.z.YEARLY;
        case s.Ci.MONTHLY:
            return d.z.MONTHLY;
        case s.Ci.DAILY:
            if ((0, i.isEqual)(n.options.byweekday, W(e))) return d.z.WEEKDAY_ONLY;
            if ((0, i.isEqual)(n.options.byweekday, K(e))) return d.z.WEEKEND_ONLY;
            return d.z.NONE;
        default:
            return d.z.NONE;
    }
}
function X(e, t) {
    return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, i.isEqual)(e.recurrence_rule, t.recurrenceRule);
}
function J(e, t, n) {
    return (null == e ? void 0 : e.is_canceled) ? f.p1.CANCELED : t < n ? f.p1.COMPLETED : null != e ? f.p1.SCHEDULED : null;
}
