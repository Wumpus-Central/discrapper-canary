n.d(t, {
    BP: () => X,
    DK: () => H,
    G3: () => p,
    Ho: () => V,
    Ib: () => h,
    P8: () => C,
    PJ: () => F,
    Rp: () => Y,
    Uq: () => G,
    Y4: () => B,
    hn: () => b,
    iA: () => M,
    ib: () => R,
    lh: () => J,
    mF: () => q,
    ub: () => D,
    v1: () => j,
    x6: () => k,
    zi: () => Q
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n(913527),
    a = n.n(i),
    o = n(859334),
    s = n(594174),
    l = n(55935),
    c = n(70956),
    u = n(709054),
    d = n(849464),
    f = n(765305),
    _ = n(388032);
let p = 365,
    h = 366,
    m = 'ddd MMM Do \xB7 LT',
    g = 'ddd MMM Do, YYYY \xB7 LT',
    E = 'LT',
    b = 4,
    y = [o.Ci.MO.weekday, o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday, o.Ci.FR.weekday],
    v = [o.Ci.SU.weekday, o.Ci.MO.weekday, o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday],
    O = [o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday, o.Ci.FR.weekday, o.Ci.SA.weekday],
    I = [o.Ci.SA.weekday, o.Ci.SU.weekday],
    S = [o.Ci.FR.weekday, o.Ci.SA.weekday],
    T = [o.Ci.SU.weekday, o.Ci.MO.weekday],
    A = [o.Ci.SU.weekday, o.Ci.MO.weekday, o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday, o.Ci.FR.weekday, o.Ci.SA.weekday],
    N = new Set([0, 6]);
function C(e) {
    var t;
    let n = e.toDate(),
        r = Math.ceil(n.getDate() / 7),
        i = e.format('dddd'),
        a = [
            {
                value: d.z.NONE,
                label: _.intl.string(_.t['0bK0Bw'])
            },
            {
                value: d.z.WEEKLY,
                label: _.intl.formatToPlainString(_.t['B8/yfn'], { weekday: i })
            },
            {
                value: d.z.BIWEEKLY,
                label: _.intl.formatToPlainString(_.t['z+aIub'], { weekday: i })
            },
            {
                value: d.z.MONTHLY,
                label: _.intl.formatToPlainString(_.t.mjOEBg, {
                    nth: r,
                    weekday: i
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
        N.has(n.getDay())
            ? (null == (t = s.default.getCurrentUser()) ? void 0 : t.isStaff()) &&
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
let R = () => {
        let e = a()().add(1, 'hour'),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    P = (e, t) => (0, l.vc)(e, e.get('years') === t.get('years') ? m : g),
    w = (e, t) => {
        let n = (0, l.wY)(e.toDate(), t.toDate());
        return n > 1 || n < 0 ? P(e, t) : (0, l.vc)(e, e.localeData().calendar(n < 1 ? 'sameDay' : 'nextDay', e, t));
    };
function D(e, t, n) {
    null == n && (n = a()());
    let r = a()(e),
        i = null != t && '' !== t ? a()(t) : void 0,
        o = null != t && r.isSame(i, 'day');
    return {
        startDateTimeString: w(r, n),
        endDateTimeString: null != i ? (o ? i.format(E) : P(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= a()().add(1, 'hour'),
        withinStartWindow: r <= a()().add(15, 'minute'),
        diffMinutes: r.diff(n, 'minutes')
    };
}
function L(e) {
    return new o.OG(A[e]);
}
function x(e, t) {
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
    let n = U(t),
        r = a()(u.default.extractTimestamp(e)),
        i = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: r,
        endDate: i
    };
}
function k(e, t) {
    var n;
    if (null == t) return e;
    let r = null != (n = t.scheduled_end_time) ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? a()(r) : void 0
    };
}
function j(e) {
    return x(e.scheduledStartTime, e.scheduledEndTime);
}
function U(e) {
    return x(e.scheduled_start_time, e.scheduled_end_time);
}
function G(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function B(e, t) {
    return null == e || null == t ? null == e && null == t : G(e.startDate, t.startDate) && G(e.endDate, t.endDate);
}
function V(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null,
        r = null == (t = e.byNWeekday) ? void 0 : t.map((e) => new o.OG(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new o.Ci({
            dtstart: i,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != n ? n : r,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count
        })
    );
}
function F(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n > new Date() ? n : new Date(),
        a = new Date();
    a.setFullYear(a.getFullYear() + b);
    let o = t.between(i, a, !0, (t, n) => n < e + 1);
    return r && o.length > 0 && n.getTime() === o[0].getTime() ? o.slice(1) : o.slice(0, e);
}
function Z(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function H(e) {
    if (null == e) return null;
    let t = Z(e);
    return null != t ? u.default.fromTimestamp(Math.floor(t.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND) : null;
}
function Y(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(u.default.extractTimestamp(t));
    if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) return !1;
    switch (e.frequency) {
        case o.Ci.WEEKLY:
            return n.getUTCDay() === r.getUTCDay();
        case o.Ci.YEARLY:
            return n.getUTCDate() === r.getUTCDate();
        default:
            return !0;
    }
}
function W(e) {
    let t = L(e.toDate().getDay()),
        n = L(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? O : n.weekday - t.weekday < 0 ? v : y;
}
function K(e) {
    let t = L(e.toDate().getDay()),
        n = L(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? T : n.weekday - t.weekday < 0 ? S : I;
}
function z(e, t) {
    let n = W(t),
        r = K(t),
        i = L(t.toDate().getUTCDay()),
        a = Math.ceil(t.toDate().getUTCDate() / 7),
        s = t.toDate();
    switch ((s.setMilliseconds(0), e)) {
        case d.z.NONE:
            return null;
        case d.z.WEEKLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.WEEKLY
            });
        case d.z.BIWEEKLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.WEEKLY,
                interval: 2
            });
        case d.z.MONTHLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.MONTHLY,
                byweekday: [i.nth(a)]
            });
        case d.z.YEARLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.YEARLY
            });
        case d.z.WEEKDAY_ONLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.DAILY,
                byweekday: n
            });
        case d.z.WEEKEND_ONLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.DAILY,
                byweekday: r
            });
    }
}
function q(e, t) {
    let n = z(e, t);
    if (null == n) return null;
    let { dtstart: r, until: i, freq: a, interval: o, byweekday: s, bynweekday: l, bymonth: c, bymonthday: u, byyearday: d, count: f } = n.options,
        _ =
            null == l
                ? void 0
                : l.map((e) => ({
                      n: e[1],
                      day: e[0]
                  }));
    return {
        start: r.toISOString(),
        end: null == i ? void 0 : i.toISOString(),
        frequency: a,
        interval: o,
        byWeekday: s,
        byNWeekday: _,
        byMonth: c,
        byMonthDay: u,
        byYearDay: d,
        count: f
    };
}
function Q(e, t) {
    if (null == t) return d.z.NONE;
    let n = V(t);
    switch (n.options.freq) {
        case o.Ci.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
            return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
        case o.Ci.YEARLY:
            return d.z.YEARLY;
        case o.Ci.MONTHLY:
            return d.z.MONTHLY;
        case o.Ci.DAILY:
            if ((0, r.isEqual)(n.options.byweekday, W(e))) return d.z.WEEKDAY_ONLY;
            if ((0, r.isEqual)(n.options.byweekday, K(e))) return d.z.WEEKEND_ONLY;
            return d.z.NONE;
        default:
            return d.z.NONE;
    }
}
function X(e, t) {
    return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule);
}
function J(e, t, n) {
    return (null == e ? void 0 : e.is_canceled) ? f.p1.CANCELED : t < n ? f.p1.COMPLETED : null != e ? f.p1.SCHEDULED : null;
}
