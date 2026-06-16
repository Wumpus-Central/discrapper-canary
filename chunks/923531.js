"use strict";
n.d(t, {
    FT: () => m,
    Is: () => p,
    Mo: () => A,
    VE: () => S,
    aq: () => f,
    cV: () => d,
    fq: () => y,
    hO: () => T,
    i6: () => _,
    jp: () => c,
    k5: () => g,
    kN: () => I,
    mV: () => h,
    u7: () => E,
});
var i = n(989349),
    r = n.n(i),
    s = n(899847),
    a = n(695515),
    o = n(191627),
    l = n(602339),
    u = n(375708);
let c = () => ({
        today: u.intl.string(l.default.VjIAQQ),
        yesterday: u.intl.string(l.default["2a8xHY"]),
        days: l.default.Xt6oND,
    }),
    d = (e) =>
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
        let i = r()().diff(r()(e), "s"),
            s = t(),
            a = r()(e).format("LL");
        return i < 86400
            ? s.today
            : i < 172800
              ? s.yesterday
              : u.intl.formatToPlainString(s.days, { days: Math.min(Math.floor(i / 86400), n ?? 999) });
    },
    h = (e, t) => {
        let n = r()().diff(r()(e), "s"),
            i = t(),
            s = r()(e).format("LL");
        return n < 60
            ? i.seconds
            : n < 3600
              ? u.intl.formatToPlainString(i.minutes, { count: Math.floor(n / 60) })
              : n < 86400
                ? u.intl.formatToPlainString(i.hours, { count: Math.floor(n / 3600) })
                : n < 172800
                  ? i.yesterday
                  : n < 604800
                    ? u.intl.formatToPlainString(i.days, { count: Math.floor(n / 86400) })
                    : u.intl.formatToPlainString(i.date, { date: s });
    },
    f = (e) =>
        e.display_type === o.NV.USER_ADD ||
        e.display_type === o.NV.USER_INTERACTION ||
        e.display_type === o.NV.USER_CALLED,
    p = (e) => e.display_type === o.NV.GUILD_ADD || e.display_type === o.NV.GUILD_INTERACTION,
    E = (e) => e.display_type === o.NV.PURCHASES,
    m = (e) => e.display_type === o.NV.GIFTS,
    g = (e) => {
        for (let t of Object.values(o.NV)) if (t.toString() === e) return t;
    },
    A = () => {
        let e = I();
        return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    I = () => new Map(o.ly),
    T = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? `${t}h ${n}m` : `${n}m`;
    },
    S = () => {
        if (a.A.getAreLinkedUsersProcessed()) return a.A.getLinkedUsers();
        s.Ay.fetchLinkedUsers();
    },
    y = (e, t) =>
        t > 0 && 0 === e
            ? u.intl.formatToPlainString(l.default["L/Cj7S"], { callCount: t })
            : e > 0 && 0 === t
              ? u.intl.formatToPlainString(l.default["6X1F0i"], { messageCount: e })
              : u.intl.formatToPlainString(l.default.IYqGMG, { messageCount: e, callCount: t });
