"use strict";
n.d(t, {
    FT: () => f,
    Is: () => h,
    Mo: () => m,
    Nv: () => T,
    VE: () => N,
    aq: () => A,
    cV: () => u,
    fq: () => C,
    hO: () => S,
    i6: () => _,
    jp: () => c,
    k5: () => p,
    kN: () => g,
    mV: () => E,
    u7: () => I,
});
var i = n(989349),
    r = n.n(i),
    a = n(899847),
    s = n(695515),
    l = n(191627),
    o = n(602339),
    d = n(375708);
function c() {
    return {
        today: d.intl.string(o.default.VjIAQQ),
        yesterday: d.intl.string(o.default["2a8xHY"]),
        days: o.default.Xt6oND,
    };
}
function u(e) {
    return e
        ? {
              today: d.intl.string(o.default["2AtcIs"]),
              yesterday: d.intl.string(o.default.stOECr),
              days: o.default.n8n5Ba,
          }
        : {
              today: d.intl.string(o.default.g1ZX6m),
              yesterday: d.intl.string(o.default.s3qSVt),
              days: o.default.f1UJiC,
          };
}
function _(e, t, n) {
    let i = r()().diff(r()(e), "s"),
        a = t(),
        s = r()(e).format("LL");
    return i < 86400
        ? a.today
        : i < 172800
          ? a.yesterday
          : d.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(i / 86400), n ?? 999) });
}
function E(e, t) {
    let n = r()().diff(r()(e), "s"),
        i = t(),
        a = r()(e).format("LL");
    return n < 60
        ? i.seconds
        : n < 3600
          ? d.intl.formatToPlainString(i.minutes, { count: Math.floor(n / 60) })
          : n < 86400
            ? d.intl.formatToPlainString(i.hours, { count: Math.floor(n / 3600) })
            : n < 172800
              ? i.yesterday
              : n < 604800
                ? d.intl.formatToPlainString(i.days, { count: Math.floor(n / 86400) })
                : d.intl.formatToPlainString(i.date, { date: a });
}
function A(e) {
    return (
        e.display_type === l.NV.USER_ADD ||
        e.display_type === l.NV.USER_INTERACTION ||
        e.display_type === l.NV.USER_CALLED
    );
}
function h(e) {
    return e.display_type === l.NV.GUILD_ADD || e.display_type === l.NV.GUILD_INTERACTION;
}
function I(e) {
    return e.display_type === l.NV.PURCHASES;
}
function f(e) {
    return e.display_type === l.NV.GIFTS;
}
function p(e) {
    for (let t of Object.values(l.NV)) if (t.toString() === e) return t;
}
function T(e) {
    return l.bo[e.code] ?? l.vW.GENERIC_ERROR;
}
function m() {
    let e = g();
    return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
}
function g() {
    return new Map(l.ly);
}
function S(e) {
    let t = Math.floor(e / 60),
        n = e % 60;
    return t > 0 ? `${t}h ${n}m` : `${n}m`;
}
function N() {
    if (s.A.getAreLinkedUsersProcessed()) return s.A.getLinkedUsers();
    a.Ay.fetchLinkedUsers();
}
function C(e, t) {
    return t > 0 && 0 === e
        ? d.intl.formatToPlainString(o.default["L/Cj7S"], { callCount: t })
        : e > 0 && 0 === t
          ? d.intl.formatToPlainString(o.default["6X1F0i"], { messageCount: e })
          : d.intl.formatToPlainString(o.default.IYqGMG, { messageCount: e, callCount: t });
}
