n.d(e, {
    FT: () => m,
    Is: () => A,
    Mo: () => _,
    Nv: () => T,
    VE: () => G,
    aq: () => g,
    cV: () => d,
    fq: () => C,
    hO: () => k,
    i6: () => c,
    jp: () => f,
    kN: () => E,
    mV: () => y,
    u7: () => p,
});
var r = n(536637),
    l = n.n(r),
    u = n(899847),
    i = n(695515),
    a = n(191627),
    o = n(513687),
    s = n(375708);
function f() {
    return {
        today: s.intl.string(o.default.VjIAQQ),
        yesterday: s.intl.string(o.default["2a8xHY"]),
        days: o.default.Xt6oND,
    };
}
function d(t) {
    return t
        ? {
              today: s.intl.string(o.default["2AtcIs"]),
              yesterday: s.intl.string(o.default.stOECr),
              days: o.default.n8n5Ba,
          }
        : {
              today: s.intl.string(o.default.g1ZX6m),
              yesterday: s.intl.string(o.default.s3qSVt),
              days: o.default.f1UJiC,
          };
}
function c(t, e, n) {
    let r = l()().diff(l()(t), "s"),
        u = e(),
        i = l()(t).format("LL");
    return r < 86400
        ? u.today
        : r < 172800
          ? u.yesterday
          : s.intl.formatToPlainString(u.days, { days: Math.min(Math.floor(r / 86400), n ?? 999) });
}
function y(t, e) {
    let n = l()().diff(l()(t), "s"),
        r = e(),
        u = l()(t).format("LL");
    return n < 60
        ? r.seconds
        : n < 3600
          ? s.intl.formatToPlainString(r.minutes, { count: Math.floor(n / 60) })
          : n < 86400
            ? s.intl.formatToPlainString(r.hours, { count: Math.floor(n / 3600) })
            : n < 172800
              ? r.yesterday
              : n < 604800
                ? s.intl.formatToPlainString(r.days, { count: Math.floor(n / 86400) })
                : s.intl.formatToPlainString(r.date, { date: u });
}
function g(t) {
    return (
        t.display_type === a.NV.USER_ADD ||
        t.display_type === a.NV.USER_INTERACTION ||
        t.display_type === a.NV.USER_CALLED
    );
}
function A(t) {
    return t.display_type === a.NV.GUILD_ADD || t.display_type === a.NV.GUILD_INTERACTION;
}
function p(t) {
    return t.display_type === a.NV.PURCHASES;
}
function m(t) {
    return t.display_type === a.NV.GIFTS;
}
function T(t) {
    return a.bo[t.code] ?? a.vW.GENERIC_ERROR;
}
function _() {
    let t = E();
    return 0 === t.size ? [] : Array.from(t.entries()).sort((t, e) => t[1].priority - e[1].priority);
}
function E() {
    return new Map(a.ly);
}
function k(t) {
    let e = Math.floor(t / 60),
        n = t % 60;
    return e > 0 ? `${e}h ${n}m` : `${n}m`;
}
function G() {
    if (i.A.getAreLinkedUsersProcessed()) return i.A.getLinkedUsers();
    u.Ay.fetchLinkedUsers();
}
function C(t, e) {
    return e > 0 && 0 === t
        ? s.intl.formatToPlainString(o.default["L/Cj7S"], { callCount: e })
        : t > 0 && 0 === e
          ? s.intl.formatToPlainString(o.default["6X1F0i"], { messageCount: t })
          : s.intl.formatToPlainString(o.default.IYqGMG, { messageCount: t, callCount: e });
}
