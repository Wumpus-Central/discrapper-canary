"use strict";
n.d(t, {
    Is: () => I,
    Mo: () => y,
    VE: () => C,
    aq: () => A,
    cV: () => m,
    fq: () => R,
    hO: () => N,
    i6: () => E,
    jp: () => h,
    k5: () => S,
    kN: () => v,
    mV: () => g,
    u7: () => T,
});
var r = n(989349),
    i = n.n(r),
    s = n(899847),
    a = n(695515),
    o = n(191627),
    l = n(842130),
    u = n(985018);
let c = 60,
    d = 3600,
    _ = 86400,
    f = 172800,
    p = 604800,
    h = () => ({
        today: u.intl.string(l.default.VjIAQQ),
        yesterday: u.intl.string(l.default["2a8xHY"]),
        days: l.default.Xt6oND,
    }),
    m = (e) =>
        e
            ? {
                  today: u.intl.string(l.default["2AtcIs"]),
                  yesterday: u.intl.string(l.default.stOECr),
                  days: l.default.n8n5Ba,
              }
            : {
                  today: u.intl.string(l.default.g1ZX6m),
                  yesterday: u.intl.string(l.default.s3qSVt),
                  days: l.default.f1UJiC,
              },
    E = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            s = t(),
            a = i()(e).format("LL");
        return r < _
            ? s.today
            : r < f
              ? s.yesterday
              : u.intl.formatToPlainString(s.days, { days: Math.min(Math.floor(r / _), n ?? 999) });
    },
    g = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            s = i()(e).format("LL");
        return n < c
            ? r.seconds
            : n < d
              ? u.intl.formatToPlainString(r.minutes, { count: Math.floor(n / c) })
              : n < _
                ? u.intl.formatToPlainString(r.hours, { count: Math.floor(n / d) })
                : n < f
                  ? r.yesterday
                  : n < p
                    ? u.intl.formatToPlainString(r.days, { count: Math.floor(n / _) })
                    : u.intl.formatToPlainString(r.date, { date: s });
    },
    A = (e) =>
        e.display_type === o.NV.USER_ADD ||
        e.display_type === o.NV.USER_INTERACTION ||
        e.display_type === o.NV.USER_CALLED,
    I = (e) => e.display_type === o.NV.GUILD_ADD || e.display_type === o.NV.GUILD_INTERACTION,
    T = (e) => e.display_type === o.NV.PURCHASES,
    S = (e) => {
        for (let t of Object.values(o.NV)) if (t.toString() === e) return t;
    },
    y = () => {
        let e = v();
        return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    v = () => new Map(o.ly),
    N = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? `${t}h ${n}m` : `${n}m`;
    },
    C = () => {
        if (a.A.getAreLinkedUsersProcessed()) return a.A.getLinkedUsers();
        s.Ay.fetchLinkedUsers();
    },
    R = (e, t) =>
        t > 0 && 0 === e
            ? u.intl.formatToPlainString(l.default["L/Cj7S"], { callCount: t })
            : e > 0 && 0 === t
              ? u.intl.formatToPlainString(l.default["6X1F0i"], { messageCount: e })
              : u.intl.formatToPlainString(l.default.IYqGMG, { messageCount: e, callCount: t });
