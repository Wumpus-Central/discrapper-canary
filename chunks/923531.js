n.d(e, {
    $h: () => g,
    Is: () => S,
    Mo: () => f,
    VE: () => p,
    aq: () => T,
    cV: () => E,
    fq: () => y,
    hO: () => N,
    i6: () => _,
    jp: () => d,
    k5: () => C,
    kN: () => I,
    mV: () => c,
    u7: () => A,
}),
    n(896048),
    n(638769);
var i = n(989349),
    l = n.n(i),
    r = n(899847),
    a = n(695515),
    o = n(191627),
    u = n(842130),
    s = n(985018);
let d = () => ({
        today: s.intl.string(u.default.VjIAQQ),
        yesterday: s.intl.string(u.default["2a8xHY"]),
        days: u.default.Xt6oND,
    }),
    E = (t) =>
        t
            ? {
                  today: s.intl.string(u.default["2AtcIs"]),
                  yesterday: s.intl.string(u.default.stOECr),
                  days: u.default.n8n5Ba,
              }
            : {
                  today: s.intl.string(u.default.g1ZX6m),
                  yesterday: s.intl.string(u.default.s3qSVt),
                  days: u.default.f1UJiC,
              },
    _ = (t, e, n) => {
        let i = l()().diff(l()(t), "s"),
            r = e(),
            a = l()(t).format("LL");
        return i < 86400
            ? r.today
            : i < 172800
              ? r.yesterday
              : s.intl.formatToPlainString(r.days, {
                    days: Math.min(Math.floor(i / 86400), null != n ? n : 999),
                });
    },
    c = (t, e) => {
        let n = l()().diff(l()(t), "s"),
            i = e(),
            r = l()(t).format("LL");
        return n < 60
            ? i.seconds
            : n < 3600
              ? s.intl.formatToPlainString(i.minutes, {
                    count: Math.floor(n / 60),
                })
              : n < 86400
                ? s.intl.formatToPlainString(i.hours, {
                      count: Math.floor(n / 3600),
                  })
                : n < 172800
                  ? i.yesterday
                  : n < 604800
                    ? s.intl.formatToPlainString(i.days, {
                          count: Math.floor(n / 86400),
                      })
                    : s.intl.formatToPlainString(i.date, {
                          date: r,
                      });
    },
    T = (t) =>
        t.display_type === o.NV.USER_ADD ||
        t.display_type === o.NV.USER_INTERACTION ||
        t.display_type === o.NV.USER_CALLED,
    S = (t) => t.display_type === o.NV.GUILD_ADD || t.display_type === o.NV.GUILD_INTERACTION,
    A = (t) => t.display_type === o.NV.PURCHASES,
    C = (t) => {
        for (let e of Object.values(o.NV)) if (e.toString() === t) return e;
    },
    f = () => {
        let t = I();
        return 0 === t.size ? [] : Array.from(t.entries()).sort((t, e) => t[1].priority - e[1].priority);
    },
    I = () => new Map(o.ly),
    N = (t) => {
        let e = Math.floor(t / 60),
            n = t % 60;
        return e > 0 ? "".concat(e, "h ").concat(n, "m") : "".concat(n, "m");
    },
    p = () => {
        if (a.A.getAreLinkedUsersProcessed()) return a.A.getLinkedUsers();
        r.Ay.fetchLinkedUsers();
    },
    g = () =>
        Object.values(a.A.getLinkedUsers()).some((t) => t.link_status === o.Ef.ACTIVE && t.link_type === o.QM.PARENT),
    y = (t, e) =>
        e > 0 && 0 === t
            ? s.intl.formatToPlainString(u.default["L/Cj7S"], {
                  callCount: e,
              })
            : t > 0 && 0 === e
              ? s.intl.formatToPlainString(u.default["6X1F0i"], {
                    messageCount: t,
                })
              : s.intl.formatToPlainString(u.default.IYqGMG, {
                    messageCount: t,
                    callCount: e,
                });
