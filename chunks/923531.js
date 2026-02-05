n.d(e, {
    $h: () => g,
    Is: () => S,
    Mo: () => I,
    VE: () => p,
    aq: () => c,
    cV: () => E,
    fq: () => h,
    hO: () => f,
    i6: () => _,
    jp: () => u,
    k5: () => C,
    kN: () => N,
    mV: () => T,
    u7: () => A,
});
var i = n(989349),
    r = n.n(i),
    l = n(899847),
    a = n(695515),
    s = n(191627),
    o = n(842130),
    d = n(985018);
let u = () => ({
        today: d.intl.string(o.default.VjIAQQ),
        yesterday: d.intl.string(o.default["2a8xHY"]),
        days: o.default.Xt6oND,
    }),
    E = (t) =>
        t
            ? {
                  today: d.intl.string(o.default["2AtcIs"]),
                  yesterday: d.intl.string(o.default.stOECr),
                  days: o.default.n8n5Ba,
              }
            : {
                  today: d.intl.string(o.default.g1ZX6m),
                  yesterday: d.intl.string(o.default.s3qSVt),
                  days: o.default.f1UJiC,
              },
    _ = (t, e, n) => {
        let i = r()().diff(r()(t), "s"),
            l = e(),
            a = r()(t).format("LL");
        return i < 86400
            ? l.today
            : i < 172800
              ? l.yesterday
              : d.intl.formatToPlainString(l.days, { days: Math.min(Math.floor(i / 86400), n ?? 999) });
    },
    T = (t, e) => {
        let n = r()().diff(r()(t), "s"),
            i = e(),
            l = r()(t).format("LL");
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
                    : d.intl.formatToPlainString(i.date, { date: l });
    },
    c = (t) =>
        t.display_type === s.NV.USER_ADD ||
        t.display_type === s.NV.USER_INTERACTION ||
        t.display_type === s.NV.USER_CALLED,
    S = (t) => t.display_type === s.NV.GUILD_ADD || t.display_type === s.NV.GUILD_INTERACTION,
    A = (t) => t.display_type === s.NV.PURCHASES,
    C = (t) => {
        for (let e of Object.values(s.NV)) if (e.toString() === t) return e;
    },
    I = () => {
        let t = N();
        return 0 === t.size ? [] : Array.from(t.entries()).sort((t, e) => t[1].priority - e[1].priority);
    },
    N = () => new Map(s.ly),
    f = (t) => {
        let e = Math.floor(t / 60),
            n = t % 60;
        return e > 0 ? `${e}h ${n}m` : `${n}m`;
    },
    p = () => {
        if (a.A.getAreLinkedUsersProcessed()) return a.A.getLinkedUsers();
        l.Ay.fetchLinkedUsers();
    },
    g = () =>
        Object.values(a.A.getLinkedUsers()).some((t) => t.link_status === s.Ef.ACTIVE && t.link_type === s.QM.PARENT),
    h = (t, e) =>
        e > 0 && 0 === t
            ? d.intl.formatToPlainString(o.default["L/Cj7S"], { callCount: e })
            : t > 0 && 0 === e
              ? d.intl.formatToPlainString(o.default["6X1F0i"], { messageCount: t })
              : d.intl.formatToPlainString(o.default.IYqGMG, { messageCount: t, callCount: e });
