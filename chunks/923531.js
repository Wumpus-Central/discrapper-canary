"use strict";
n.d(t, {
    Is: () => h,
    Mo: () => g,
    VE: () => T,
    aq: () => E,
    cV: () => c,
    fq: () => S,
    hO: () => I,
    i6: () => _,
    jp: () => d,
    k5: () => m,
    kN: () => A,
    mV: () => f,
    u7: () => p,
});
var r = n(989349),
    i = n.n(r),
    s = n(899847),
    a = n(695515),
    o = n(191627),
    l = n(602339),
    u = n(985018);
let d = () => ({
        today: u.intl.string(l.default.VjIAQQ),
        yesterday: u.intl.string(l.default["2a8xHY"]),
        days: l.default.Xt6oND,
    }),
    c = (e) =>
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
    _ = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            s = t(),
            a = i()(e).format("LL");
        return r < 86400
            ? s.today
            : r < 172800
              ? s.yesterday
              : u.intl.formatToPlainString(s.days, { days: Math.min(Math.floor(r / 86400), n ?? 999) });
    },
    f = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            s = i()(e).format("LL");
        return n < 60
            ? r.seconds
            : n < 3600
              ? u.intl.formatToPlainString(r.minutes, { count: Math.floor(n / 60) })
              : n < 86400
                ? u.intl.formatToPlainString(r.hours, { count: Math.floor(n / 3600) })
                : n < 172800
                  ? r.yesterday
                  : n < 604800
                    ? u.intl.formatToPlainString(r.days, { count: Math.floor(n / 86400) })
                    : u.intl.formatToPlainString(r.date, { date: s });
    },
    E = (e) =>
        e.display_type === o.NV.USER_ADD ||
        e.display_type === o.NV.USER_INTERACTION ||
        e.display_type === o.NV.USER_CALLED,
    h = (e) => e.display_type === o.NV.GUILD_ADD || e.display_type === o.NV.GUILD_INTERACTION,
    p = (e) => e.display_type === o.NV.PURCHASES,
    m = (e) => {
        for (let t of Object.values(o.NV)) if (t.toString() === e) return t;
    },
    g = () => {
        let e = A();
        return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    A = () => new Map(o.ly),
    I = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? `${t}h ${n}m` : `${n}m`;
    },
    T = () => {
        if (a.A.getAreLinkedUsersProcessed()) return a.A.getLinkedUsers();
        s.Ay.fetchLinkedUsers();
    },
    S = (e, t) =>
        t > 0 && 0 === e
            ? u.intl.formatToPlainString(l.default["L/Cj7S"], { callCount: t })
            : e > 0 && 0 === t
              ? u.intl.formatToPlainString(l.default["6X1F0i"], { messageCount: e })
              : u.intl.formatToPlainString(l.default.IYqGMG, { messageCount: e, callCount: t });
