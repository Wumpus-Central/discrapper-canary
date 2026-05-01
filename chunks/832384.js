"use strict";
n.d(t, {
    Pv: () => x,
    uw: () => z,
    BZ: () => q,
    CZ: () => X,
    ty: () => V,
    iy: () => $,
    I5: () => G,
    Pj: () => Z,
    Hd: () => F,
    aJ: () => M,
    As: () => P,
    TQ: () => B,
    kR: () => W,
    JM: () => U,
    us: () => Y,
    L7: () => H,
    Rf: () => k,
    W6: () => b,
    U3: () => L,
    XK: () => D,
    KH: () => j,
    gF: () => K,
}),
    n(321073);
var i = n(29583),
    r = n(618027);
function s(e, t) {
    (0, r.A)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, i.default)(t),
        a = n.getTime() - s.getTime();
    return a < 0 ? -1 : a > 0 ? 1 : a;
}
var a = n(410530),
    o = n(228378),
    l = n(998280);
function u(e) {
    return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function c(e, t) {
    if (((0, r.A)(2, arguments), !t || "object" !== u(t))) return new Date(NaN);
    var n = t.years ? (0, l.A)(t.years) : 0,
        s = t.months ? (0, l.A)(t.months) : 0,
        c = t.weeks ? (0, l.A)(t.weeks) : 0,
        d = t.days ? (0, l.A)(t.days) : 0,
        _ = t.hours ? (0, l.A)(t.hours) : 0,
        f = t.minutes ? (0, l.A)(t.minutes) : 0,
        h = t.seconds ? (0, l.A)(t.seconds) : 0,
        p = (0, i.default)(e),
        E = s || n ? (0, o.default)(p, s + 12 * n) : p;
    return new Date((d || c ? (0, a.default)(E, d + 7 * c) : E).getTime() + 1e3 * (h + 60 * (f + 60 * _)));
}
var d = n(194537),
    _ = n(575223),
    f = n(582972),
    h = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        },
    };
function p(e) {
    return e ? h[e] : h.trunc;
}
var E = n(992663),
    m = n(290656),
    g = n(514356),
    A = n(918494),
    I = n(989349),
    T = n.n(I),
    S = n(974690),
    N = n(681154),
    y = n(927813),
    C = n(935208),
    v = n(375708);
let O = (e, t) => {
        let n = Math.max(e - t, 0) / y.A.Millis.SECOND,
            i = Math.floor(n) % y.A.Seconds.MINUTE,
            r = Math.floor(n / y.A.Seconds.MINUTE) % y.A.Seconds.MINUTE;
        return {
            seconds: i,
            minutes: r,
            hours: Math.floor(n / y.A.Seconds.HOUR),
            days: Math.floor(n / y.A.Seconds.DAY),
        };
    },
    R = (e, t) => {
        let n = "end" in e ? e.end : void 0,
            i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
        return i && null != n && n > t
            ? O(n, t)
            : O(null == n || i ? t : Math.min(n, t), "id" in e ? C.default.extractTimestamp(e.id) : e.start);
    },
    b = (e, t) => {
        let { seconds: n, minutes: i, hours: r } = R(e, t);
        function s(e) {
            return String(e).padStart(2, "0");
        }
        let a = r > 0 ? s(i) : i,
            o = s(n);
        return r > 0 ? `${r}:${a}:${o}` : `${a}:${o}`;
    },
    D = (e) => {
        let { hours: t, minutes: n, seconds: i } = e,
            r = [];
        return (
            t > 0 && r.push(v.intl.formatToPlainString(v.t.xCjYxK, { hours: t })),
            r.push(v.intl.formatToPlainString(v.t.iXLF9W, { minutes: n })),
            r.push(v.intl.formatToPlainString(v.t.geSp4K, { seconds: i })),
            r.join(", ")
        );
    },
    L = (e, t) => {
        let { seconds: n, minutes: i, hours: r } = R(e, t);
        return D({ hours: r, minutes: i, seconds: n });
    },
    w = {
        secondsAgo: (e) => v.intl.formatToPlainString(v.t.EOrEJl, { count: e }),
        minutesAgo: (e) => v.intl.formatToPlainString(v.t.LRNgHp, { count: e }),
        hoursAgo: (e) => v.intl.formatToPlainString(v.t.raJpz3, { count: e }),
        daysAgo: (e) => v.intl.formatToPlainString(v.t.KkvKhi, { count: e }),
        weeksAgo: (e) => v.intl.formatToPlainString(v.t.sDtO6D, { count: e }),
        monthsAgo: (e) => v.intl.formatToPlainString(v.t.ITymou, { count: e }),
    },
    M = function (e, t, n) {
        let { formatSet: i = w } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = T()(n),
            s = T()(C.default.extractTimestamp(e.id)),
            a = r.diff(s, "s"),
            o = Math.abs(a);
        if (o < y.A.Seconds.MINUTE) return i.secondsAgo(a);
        if (o < y.A.Seconds.HOUR) {
            let e = Math.round(a / y.A.Seconds.MINUTE);
            return i.minutesAgo(e);
        }
        if (o < 12 * y.A.Seconds.HOUR) {
            let e = Math.round(a / y.A.Seconds.HOUR);
            return i.hoursAgo(e);
        }
        if (o < 9 * y.A.Seconds.DAY) {
            let e = Math.round(a / y.A.Seconds.DAY);
            return i.daysAgo(e);
        }
        if (o < 4 * y.A.Seconds.WEEK) {
            let e = Math.round(a / (7 * y.A.Seconds.DAY));
            return i.weeksAgo(e);
        }
        let l = Math.round(a / y.A.Seconds.DAYS_30);
        return i.monthsAgo(l);
    },
    P = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return U(e) ? b(e, n) : M(e, t, n, i);
    };
function x(e, t) {
    return e.traits.find((e) => e.type === t);
}
function U(e) {
    return x(e, S.K.IS_LIVE)?.is_live ?? !1;
}
function k(e) {
    return x(e, S.K.FIRST_TIME)?.first_time ?? !1;
}
function G(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function F(e) {
    return U(e) && !G(e);
}
function V(e) {
    return x(e, S.K.DURATION_SECONDS)?.duration_seconds;
}
function B(e) {
    return x(e, S.K.AGGREGATE_RANGE)?.range;
}
function H(e) {
    return x(e, S.K.MARATHON)?.marathon;
}
function j(e) {
    let t = x(e, S.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function Y(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: a = 0,
    } = (function (e) {
        (0, r.A)(1, arguments);
        var t = (0, i.default)(e.start),
            n = (0, i.default)(e.end);
        if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
        if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
        var a = {};
        a.years = Math.abs(
            (function (e, t) {
                (0, r.A)(2, arguments);
                var n = (0, i.default)(e),
                    a = (0, i.default)(t),
                    o = s(n, a),
                    l = Math.abs((0, A.default)(n, a));
                n.setFullYear(1584), a.setFullYear(1584);
                var u = s(n, a) === -o,
                    c = o * (l - Number(u));
                return 0 === c ? 0 : c;
            })(n, t),
        );
        var o = s(n, t),
            l = c(t, { years: o * a.years });
        a.months = Math.abs(
            (function (e, t) {
                (0, r.A)(2, arguments);
                var n,
                    a = (0, i.default)(e),
                    o = (0, i.default)(t),
                    l = s(a, o),
                    u = Math.abs((0, E.default)(a, o));
                if (u < 1) n = 0;
                else {
                    1 === a.getMonth() && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - l * u);
                    var c = s(a, o) === -l;
                    (function (e) {
                        (0, r.A)(1, arguments);
                        var t = (0, i.default)(e);
                        return (0, m.default)(t).getTime() === (0, g.default)(t).getTime();
                    })((0, i.default)(e)) &&
                        1 === u &&
                        1 === s(e, o) &&
                        (c = !1),
                        (n = l * (u - Number(c)));
                }
                return 0 === n ? 0 : n;
            })(n, l),
        );
        var u = c(l, { months: o * a.months });
        a.days = Math.abs((0, d.A)(n, u));
        var h = c(u, { days: o * a.days });
        a.hours = Math.abs(
            (function (e, t, n) {
                (0, r.A)(2, arguments);
                var i = (0, f.A)(e, t) / _.s0;
                return p(null == n ? void 0 : n.roundingMethod)(i);
            })(n, h),
        );
        var I = c(h, { hours: o * a.hours });
        a.minutes = Math.abs(
            (function (e, t, n) {
                (0, r.A)(2, arguments);
                var i = (0, f.A)(e, t) / _.Cg;
                return p(null == n ? void 0 : n.roundingMethod)(i);
            })(n, I),
        );
        var T = c(I, { minutes: o * a.minutes });
        return (
            (a.seconds = Math.abs(
                (function (e, t, n) {
                    (0, r.A)(2, arguments);
                    var i = (0, f.A)(e, t) / 1e3;
                    return p(null == n ? void 0 : n.roundingMethod)(i);
                })(n, T),
            )),
            a
        );
    })({ start: e, end: new Date() });
    return v.intl.formatToPlainString(v.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : a });
}
function W(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : v.intl.formatToPlainString(v.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function K(e, t) {
    let n,
        i = t?.size?.[0] ?? void 0,
        r = t?.size?.[1] ?? void 0;
    return (
        null != i && null != r && i > 0 && r > 0
            ? (n = v.intl.formatToPlainString(v.t.wmUSiy, { count: i, max: r }))
            : null != i && i > 0 && (n = v.intl.formatToPlainString(v.t.UTYMsa, { count: i })),
        null != n && null != e ? `${e} (${n})` : (e ?? n)
    );
}
function z(e) {
    return e.content_type === N.ContentInventoryEntryType.TOP_GAME;
}
function $(e) {
    return x(e, S.K.STREAK_DAYS)?.streak_count_days;
}
function q(e) {
    let t = $(e);
    if (null == t || t < 3) return !1;
    let n = C.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * y.A.Millis.HOUR);
}
function Z(e) {
    let t = V(e);
    if (null == t) return { text: null, tooltipText: null };
    let n = Math.round(t / y.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null }
        : {
              text: v.intl.formatToPlainString(v.t.vZaMem, { hours: n }),
              tooltipText: v.intl.formatToPlainString(v.t.S5F485, { hours: n }),
          };
}
function X(e) {
    return x(e, S.K.TRENDING_CONTENT)?.trending;
}
