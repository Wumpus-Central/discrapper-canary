r.d(n, {
    BP: function () {
        return et;
    },
    DK: function () {
        return z;
    },
    G3: function () {
        return g;
    },
    Ho: function () {
        return Y;
    },
    Ib: function () {
        return E;
    },
    P8: function () {
        return L;
    },
    PJ: function () {
        return W;
    },
    Rp: function () {
        return q;
    },
    Uq: function () {
        return j;
    },
    Y4: function () {
        return H;
    },
    hn: function () {
        return b;
    },
    iA: function () {
        return G;
    },
    ib: function () {
        return x;
    },
    lh: function () {
        return en;
    },
    mF: function () {
        return $;
    },
    ub: function () {
        return k;
    },
    v1: function () {
        return F;
    },
    x6: function () {
        return Z;
    },
    zi: function () {
        return ee;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(392711);
var o = r(913527),
    l = r.n(o),
    u = r(859334),
    c = r(594174),
    d = r(55935),
    f = r(70956),
    _ = r(709054),
    h = r(849464),
    p = r(765305),
    m = r(388032);
let g = 365,
    E = 366,
    v = 'ddd MMM Do \xB7 LT',
    I = 'ddd MMM Do, YYYY \xB7 LT',
    T = 'LT',
    b = 4,
    y = [u.Ci.MO.weekday, u.Ci.TU.weekday, u.Ci.WE.weekday, u.Ci.TH.weekday, u.Ci.FR.weekday],
    S = [u.Ci.SU.weekday, u.Ci.MO.weekday, u.Ci.TU.weekday, u.Ci.WE.weekday, u.Ci.TH.weekday],
    A = [u.Ci.TU.weekday, u.Ci.WE.weekday, u.Ci.TH.weekday, u.Ci.FR.weekday, u.Ci.SA.weekday],
    N = [u.Ci.SA.weekday, u.Ci.SU.weekday],
    C = [u.Ci.FR.weekday, u.Ci.SA.weekday],
    R = [u.Ci.SU.weekday, u.Ci.MO.weekday],
    O = [u.Ci.SU.weekday, u.Ci.MO.weekday, u.Ci.TU.weekday, u.Ci.WE.weekday, u.Ci.TH.weekday, u.Ci.FR.weekday, u.Ci.SA.weekday],
    D = new Set([0, 6]);
function L(e) {
    var n;
    let r = e.toDate(),
        i = Math.ceil(r.getDate() / 7),
        a = e.format('dddd'),
        s = [
            {
                value: h.z.NONE,
                label: m.intl.string(m.t['0bK0Bw'])
            },
            {
                value: h.z.WEEKLY,
                label: m.intl.formatToPlainString(m.t['B8/yfn'], { weekday: a })
            },
            {
                value: h.z.BIWEEKLY,
                label: m.intl.formatToPlainString(m.t['z+aIub'], { weekday: a })
            },
            {
                value: h.z.MONTHLY,
                label: m.intl.formatToPlainString(m.t.mjOEBg, {
                    nth: i,
                    weekday: a
                })
            },
            {
                value: h.z.YEARLY,
                label: m.intl.formatToPlainString(m.t['5DFcVl'], {
                    date: r.toLocaleString(m.intl.currentLocale, {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return (
        D.has(r.getDay())
            ? (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) &&
              s.push({
                  value: h.z.WEEKEND_ONLY,
                  label: m.intl.string(m.t.hRpynZ)
              })
            : s.push({
                  value: h.z.WEEKDAY_ONLY,
                  label: m.intl.string(m.t['jYR/MT'])
              }),
        s
    );
}
let x = () => {
    let e = l()().add(1, 'hour'),
        n = e.hour();
    return e.minutes() >= 30 && (n += 1), e.hour(n).minutes(0).seconds(0);
};
function w(e, n) {
    let r = n - (e.minutes() % n);
    return moment(e).add(r, 'minutes').seconds(0);
}
let P = (e, n) => (0, d.vc)(e, e.get('years') === n.get('years') ? v : I),
    M = (e, n) => {
        let r = (0, d.wY)(e.toDate(), n.toDate());
        return r > 1 || r < 0 ? P(e, n) : (0, d.vc)(e, e.localeData().calendar(r < 1 ? 'sameDay' : 'nextDay', e, n));
    };
function k(e, n, r) {
    null == r && (r = l()());
    let i = l()(e),
        a = null != n && '' !== n ? l()(n) : void 0,
        s = null != n && i.isSame(a, 'day');
    return {
        startDateTimeString: M(i, r),
        endDateTimeString: null != a ? (s ? a.format(T) : P(a, r)) : void 0,
        currentOrPastEvent: i <= r,
        upcomingEvent: i <= l()().add(1, 'hour'),
        withinStartWindow: i <= l()().add(15, 'minute'),
        diffMinutes: i.diff(r, 'minutes')
    };
}
function U(e) {
    return new u.OG(O[e]);
}
function B(e, n) {
    let r;
    return (
        null != e &&
            ((r = {
                startDate: l()(e),
                endDate: void 0
            }),
            null != n && (r.endDate = l()(n))),
        r
    );
}
function G(e, n) {
    let r = V(n),
        i = l()(_.default.extractTimestamp(e)),
        a = (null == r ? void 0 : r.endDate) != null ? i.clone().add(r.endDate.diff(r.startDate)) : void 0;
    return {
        startDate: i,
        endDate: a
    };
}
function Z(e, n) {
    var r;
    if (null == n) return e;
    let i = null !== (r = n.scheduled_end_time) && void 0 !== r ? r : e.endDate;
    return {
        startDate: null != n.scheduled_start_time ? l()(n.scheduled_start_time) : e.startDate,
        endDate: null != i ? l()(i) : void 0
    };
}
function F(e) {
    return B(e.scheduledStartTime, e.scheduledEndTime);
}
function V(e) {
    return B(e.scheduled_start_time, e.scheduled_end_time);
}
function j(e, n) {
    return null == e || null == n ? null == e && null == n : e.isSame(n);
}
function H(e, n) {
    return null == e || null == n ? null == e && null == n : j(e.startDate, n.startDate) && j(e.endDate, n.endDate);
}
function Y(e) {
    var n;
    let r = null != e.byWeekday ? [...e.byWeekday] : null,
        i = null === (n = e.byNWeekday) || void 0 === n ? void 0 : n.map((e) => new u.OG(e.day, e.n)),
        a = new Date(e.start);
    return (
        a.setMilliseconds(0),
        new u.Ci({
            dtstart: a,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != r ? r : i,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count
        })
    );
}
function W(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = r > new Date() ? r : new Date(),
        s = new Date();
    s.setFullYear(s.getFullYear() + b);
    let o = n.between(a, s, !0, (n, r) => r < e + 1);
    return i && o.length > 0 && r.getTime() === o[0].getTime() ? o.slice(1) : o.slice(0, e);
}
function K(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function z(e) {
    if (null == e) return null;
    let n = K(e);
    return null != n ? _.default.fromTimestamp(Math.floor(n.getTime() / f.Z.Millis.SECOND) * f.Z.Millis.SECOND) : null;
}
function q(e, n) {
    if (null == n || null == e) return !1;
    let r = new Date(e.start),
        i = new Date(_.default.extractTimestamp(n));
    if (r.getUTCHours() !== i.getUTCHours() || r.getUTCMinutes() !== i.getUTCMinutes() || r.getUTCSeconds() !== i.getUTCSeconds()) return !1;
    switch (e.frequency) {
        case u.Ci.WEEKLY:
            return r.getUTCDay() === i.getUTCDay();
        case u.Ci.YEARLY:
            return r.getUTCDate() === i.getUTCDate();
        default:
            return !0;
    }
}
function Q(e) {
    let n = U(e.toDate().getDay()),
        r = U(e.toDate().getUTCDay());
    return r.weekday - n.weekday > 0 ? A : r.weekday - n.weekday < 0 ? S : y;
}
function X(e) {
    let n = U(e.toDate().getDay()),
        r = U(e.toDate().getUTCDay());
    return r.weekday - n.weekday > 0 ? R : r.weekday - n.weekday < 0 ? C : N;
}
function J(e, n) {
    let r = Q(n),
        i = X(n),
        a = U(n.toDate().getUTCDay()),
        s = Math.ceil(n.toDate().getUTCDate() / 7),
        o = n.toDate();
    switch ((o.setMilliseconds(0), e)) {
        case h.z.NONE:
            return null;
        case h.z.WEEKLY:
            return new u.Ci({
                dtstart: o,
                freq: u.Ci.WEEKLY
            });
        case h.z.BIWEEKLY:
            return new u.Ci({
                dtstart: o,
                freq: u.Ci.WEEKLY,
                interval: 2
            });
        case h.z.MONTHLY:
            return new u.Ci({
                dtstart: o,
                freq: u.Ci.MONTHLY,
                byweekday: [a.nth(s)]
            });
        case h.z.YEARLY:
            return new u.Ci({
                dtstart: o,
                freq: u.Ci.YEARLY
            });
        case h.z.WEEKDAY_ONLY:
            return new u.Ci({
                dtstart: o,
                freq: u.Ci.DAILY,
                byweekday: r
            });
        case h.z.WEEKEND_ONLY:
            return new u.Ci({
                dtstart: o,
                freq: u.Ci.DAILY,
                byweekday: i
            });
    }
}
function $(e, n) {
    let r = J(e, n);
    if (null == r) return null;
    let { dtstart: i, until: a, freq: s, interval: o, byweekday: l, bynweekday: u, bymonth: c, bymonthday: d, byyearday: f, count: _ } = r.options,
        h =
            null == u
                ? void 0
                : u.map((e) => ({
                      n: e[1],
                      day: e[0]
                  }));
    return {
        start: i.toISOString(),
        end: null == a ? void 0 : a.toISOString(),
        frequency: s,
        interval: o,
        byWeekday: l,
        byNWeekday: h,
        byMonth: c,
        byMonthDay: d,
        byYearDay: f,
        count: _
    };
}
function ee(e, n) {
    if (null == n) return h.z.NONE;
    let r = Y(n);
    switch (r.options.freq) {
        case u.Ci.WEEKLY:
            if (r.options.interval < 1 || r.options.interval > 2) return h.z.NONE;
            return 1 === r.options.interval ? h.z.WEEKLY : h.z.BIWEEKLY;
        case u.Ci.YEARLY:
            return h.z.YEARLY;
        case u.Ci.MONTHLY:
            return h.z.MONTHLY;
        case u.Ci.DAILY:
            if ((0, s.isEqual)(r.options.byweekday, Q(e))) return h.z.WEEKDAY_ONLY;
            if ((0, s.isEqual)(r.options.byweekday, X(e))) return h.z.WEEKEND_ONLY;
            return h.z.NONE;
        default:
            return h.z.NONE;
    }
}
function et(e, n) {
    return (null == e ? void 0 : e.scheduled_start_time) !== n.scheduledStartTime || e.scheduled_end_time !== n.scheduledEndTime || !(0, s.isEqual)(e.recurrence_rule, n.recurrenceRule);
}
function en(e, n, r) {
    return (null == e ? void 0 : e.is_canceled) ? p.p1.CANCELED : n < r ? p.p1.COMPLETED : null != e ? p.p1.SCHEDULED : null;
}
