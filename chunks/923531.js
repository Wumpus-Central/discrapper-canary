n.d(t, {
    $h: () => N,
    Is: () => b,
    Mo: () => A,
    VE: () => T,
    aq: () => y,
    cV: () => m,
    fq: () => w,
    hO: () => S,
    i6: () => g,
    jp: () => h,
    k5: () => v,
    kN: () => I,
    mV: () => E,
    u7: () => O,
}),
    n(896048),
    n(638769);
var r = n(989349),
    i = n.n(r),
    a = n(899847),
    s = n(695515),
    o = n(191627),
    l = n(842130),
    c = n(985018);
let u = 60,
    d = 3600,
    f = 86400,
    p = 172800,
    _ = 604800,
    h = () => ({
        today: c.intl.string(l.default.VjIAQQ),
        yesterday: c.intl.string(l.default["2a8xHY"]),
        days: l.default.Xt6oND,
    }),
    m = (e) =>
        e
            ? {
                  today: c.intl.string(l.default["2AtcIs"]),
                  yesterday: c.intl.string(l.default.stOECr),
                  days: l.default.n8n5Ba,
              }
            : {
                  today: c.intl.string(l.default.g1ZX6m),
                  yesterday: c.intl.string(l.default.s3qSVt),
                  days: l.default.f1UJiC,
              },
    g = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            a = t(),
            s = i()(e).format("LL");
        return r < f
            ? a.today
            : r < p
              ? a.yesterday
              : c.intl.formatToPlainString(a.days, {
                    days: Math.min(Math.floor(r / f), null != n ? n : 999),
                });
    },
    E = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            a = i()(e).format("LL");
        return n < u
            ? r.seconds
            : n < d
              ? c.intl.formatToPlainString(r.minutes, {
                    count: Math.floor(n / u),
                })
              : n < f
                ? c.intl.formatToPlainString(r.hours, {
                      count: Math.floor(n / d),
                  })
                : n < p
                  ? r.yesterday
                  : n < _
                    ? c.intl.formatToPlainString(r.days, {
                          count: Math.floor(n / f),
                      })
                    : c.intl.formatToPlainString(r.date, {
                          date: a,
                      });
    },
    y = (e) =>
        e.display_type === o.NV.USER_ADD ||
        e.display_type === o.NV.USER_INTERACTION ||
        e.display_type === o.NV.USER_CALLED,
    b = (e) => e.display_type === o.NV.GUILD_ADD || e.display_type === o.NV.GUILD_INTERACTION,
    O = (e) => e.display_type === o.NV.PURCHASES,
    v = (e) => {
        for (let t of Object.values(o.NV)) if (t.toString() === e) return t;
    },
    A = () => {
        let e = I();
        return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    I = () => new Map(o.ly),
    S = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m");
    },
    T = () => {
        if (s.A.getAreLinkedUsersProcessed()) return s.A.getLinkedUsers();
        a.Ay.fetchLinkedUsers();
    },
    C = () =>
        Object.values(s.A.getLinkedUsers()).some((e) => e.link_status === o.Ef.ACTIVE && e.link_type === o.QM.PARENT),
    N = () => C(),
    w = (e, t) =>
        t > 0 && 0 === e
            ? c.intl.formatToPlainString(l.default["L/Cj7S"], {
                  callCount: t,
              })
            : e > 0 && 0 === t
              ? c.intl.formatToPlainString(l.default["6X1F0i"], {
                    messageCount: e,
                })
              : c.intl.formatToPlainString(l.default.IYqGMG, {
                    messageCount: e,
                    callCount: t,
                });
