n.d(t, {
    BP: () => X,
    DK: () => H,
    G3: () => p,
    Ho: () => F,
    Ib: () => h,
    P8: () => C,
    PJ: () => V,
    Rp: () => W,
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
    n(47120),
    n(653041);
var r = n(392711),
    i = n(913527),
    o = n.n(i),
    a = n(859334),
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
    y = [a.Ci.MO.weekday, a.Ci.TU.weekday, a.Ci.WE.weekday, a.Ci.TH.weekday, a.Ci.FR.weekday],
    v = [a.Ci.SU.weekday, a.Ci.MO.weekday, a.Ci.TU.weekday, a.Ci.WE.weekday, a.Ci.TH.weekday],
    O = [a.Ci.TU.weekday, a.Ci.WE.weekday, a.Ci.TH.weekday, a.Ci.FR.weekday, a.Ci.SA.weekday],
    I = [a.Ci.SA.weekday, a.Ci.SU.weekday],
    S = [a.Ci.FR.weekday, a.Ci.SA.weekday],
    T = [a.Ci.SU.weekday, a.Ci.MO.weekday],
    N = [a.Ci.SU.weekday, a.Ci.MO.weekday, a.Ci.TU.weekday, a.Ci.WE.weekday, a.Ci.TH.weekday, a.Ci.FR.weekday, a.Ci.SA.weekday],
    A = new Set([0, 6]);
function C(e) {
    var t;
    let n = e.toDate(),
        r = Math.ceil(n.getDate() / 7),
        i = e.format('dddd'),
        o = [
            {
                value: d.z.NONE,
                label: _.NW.string(_.t['0bK0Bw'])
            },
            {
                value: d.z.WEEKLY,
                label: _.NW.formatToPlainString(_.t['B8/yfn'], { weekday: i })
            },
            {
                value: d.z.BIWEEKLY,
                label: _.NW.formatToPlainString(_.t['z+aIub'], { weekday: i })
            },
            {
                value: d.z.MONTHLY,
                label: _.NW.formatToPlainString(_.t.mjOEBg, {
                    nth: r,
                    weekday: i
                })
            },
            {
                value: d.z.YEARLY,
                label: _.NW.formatToPlainString(_.t['5DFcVl'], {
                    date: n.toLocaleString(_.NW.currentLocale, {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return (
        A.has(n.getDay())
            ? (null == (t = s.default.getCurrentUser()) ? void 0 : t.isStaff()) &&
              o.push({
                  value: d.z.WEEKEND_ONLY,
                  label: _.NW.string(_.t.hRpynZ)
              })
            : o.push({
                  value: d.z.WEEKDAY_ONLY,
                  label: _.NW.string(_.t['jYR/MT'])
              }),
        o
    );
}
let R = () => {
        let e = o()().add(1, 'hour'),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    P = (e, t) => (0, l.vc)(e, e.get('years') === t.get('years') ? m : g),
    w = (e, t) => {
        let n = (0, l.wY)(e.toDate(), t.toDate());
        return n > 1 || n < 0 ? P(e, t) : (0, l.vc)(e, e.localeData().calendar(n < 1 ? 'sameDay' : 'nextDay', e, t));
    };
function D(e, t, n) {
    null == n && (n = o()());
    let r = o()(e),
        i = null != t && '' !== t ? o()(t) : void 0,
        a = null != t && r.isSame(i, 'day');
    return {
        startDateTimeString: w(r, n),
        endDateTimeString: null != i ? (a ? i.format(E) : P(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= o()().add(1, 'hour'),
        withinStartWindow: r <= o()().add(15, 'minute'),
        diffMinutes: r.diff(n, 'minutes')
    };
}
function L(e) {
    return new a.OG(N[e]);
}
function x(e, t) {
    let n;
    return (
        null != e &&
            ((n = {
                startDate: o()(e),
                endDate: void 0
            }),
            null != t && (n.endDate = o()(t))),
        n
    );
}
function M(e, t) {
    let n = U(t),
        r = o()(u.default.extractTimestamp(e)),
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
        startDate: null != t.scheduled_start_time ? o()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? o()(r) : void 0
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
function F(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null,
        r = null == (t = e.byNWeekday) ? void 0 : t.map((e) => new a.OG(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new a.Ci({
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
function V(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n > new Date() ? n : new Date(),
        o = new Date();
    o.setFullYear(o.getFullYear() + b);
    let a = t.between(i, o, !0, (t, n) => n < e + 1);
    return r && a.length > 0 && n.getTime() === a[0].getTime() ? a.slice(1) : a.slice(0, e);
}
function Z(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function H(e) {
    if (null == e) return null;
    let t = Z(e);
    return null != t ? u.default.fromTimestamp(Math.floor(t.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND) : null;
}
function W(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(u.default.extractTimestamp(t));
    if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) return !1;
    switch (e.frequency) {
        case a.Ci.WEEKLY:
            return n.getUTCDay() === r.getUTCDay();
        case a.Ci.YEARLY:
            return n.getUTCDate() === r.getUTCDate();
        default:
            return !0;
    }
}
function Y(e) {
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
    let n = Y(t),
        r = K(t),
        i = L(t.toDate().getUTCDay()),
        o = Math.ceil(t.toDate().getUTCDate() / 7),
        s = t.toDate();
    switch ((s.setMilliseconds(0), e)) {
        case d.z.NONE:
            return null;
        case d.z.WEEKLY:
            return new a.Ci({
                dtstart: s,
                freq: a.Ci.WEEKLY
            });
        case d.z.BIWEEKLY:
            return new a.Ci({
                dtstart: s,
                freq: a.Ci.WEEKLY,
                interval: 2
            });
        case d.z.MONTHLY:
            return new a.Ci({
                dtstart: s,
                freq: a.Ci.MONTHLY,
                byweekday: [i.nth(o)]
            });
        case d.z.YEARLY:
            return new a.Ci({
                dtstart: s,
                freq: a.Ci.YEARLY
            });
        case d.z.WEEKDAY_ONLY:
            return new a.Ci({
                dtstart: s,
                freq: a.Ci.DAILY,
                byweekday: n
            });
        case d.z.WEEKEND_ONLY:
            return new a.Ci({
                dtstart: s,
                freq: a.Ci.DAILY,
                byweekday: r
            });
    }
}
function q(e, t) {
    let n = z(e, t);
    if (null == n) return null;
    let { dtstart: r, until: i, freq: o, interval: a, byweekday: s, bynweekday: l, bymonth: c, bymonthday: u, byyearday: d, count: f } = n.options,
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
        frequency: o,
        interval: a,
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
    let n = F(t);
    switch (n.options.freq) {
        case a.Ci.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
            return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
        case a.Ci.YEARLY:
            return d.z.YEARLY;
        case a.Ci.MONTHLY:
            return d.z.MONTHLY;
        case a.Ci.DAILY:
            if ((0, r.isEqual)(n.options.byweekday, Y(e))) return d.z.WEEKDAY_ONLY;
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
