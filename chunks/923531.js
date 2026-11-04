var r = n(536637),
    l = n.n(r),
    u = n(899847),
    i = n(695515),
    a = n(191627),
    o = n(665956),
    s = n(792996);
function f() {
    return new Map(a.ly);
}
n.d(
    e,
    {},
    {
        FT: function (t) {
            return t.display_type === a.NV.GIFTS;
        },
        Is: function (t) {
            return t.display_type === a.NV.GUILD_ADD || t.display_type === a.NV.GUILD_INTERACTION;
        },
        Mo: function () {
            let t = f();
            return 0 === t.size ? [] : Array.from(t.entries()).sort((t, e) => t[1].priority - e[1].priority);
        },
        Nv: function (t) {
            return a.bo[t.code] ?? a.vW.GENERIC_ERROR;
        },
        VE: function () {
            if (i.A.getAreLinkedUsersProcessed()) return i.A.getLinkedUsers();
            u.Ay.fetchLinkedUsers();
        },
        aq: function (t) {
            return (
                t.display_type === a.NV.USER_ADD ||
                t.display_type === a.NV.USER_INTERACTION ||
                t.display_type === a.NV.USER_CALLED
            );
        },
        cV: function (t) {
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
        },
        fq: function (t, e) {
            return e > 0 && 0 === t
                ? s.intl.formatToPlainString(o.default["L/Cj7S"], { callCount: e })
                : t > 0 && 0 === e
                  ? s.intl.formatToPlainString(o.default["6X1F0i"], { messageCount: t })
                  : s.intl.formatToPlainString(o.default.IYqGMG, { messageCount: t, callCount: e });
        },
        hO: function (t) {
            let e = Math.floor(t / 60),
                n = t % 60;
            return e > 0 ? `${e}h ${n}m` : `${n}m`;
        },
        i6: function (t, e, n) {
            let r = l()().diff(l()(t), "s"),
                u = e(),
                i = l()(t).format("LL");
            return r < 86400
                ? u.today
                : r < 172800
                  ? u.yesterday
                  : s.intl.formatToPlainString(u.days, { days: Math.min(Math.floor(r / 86400), n ?? 999) });
        },
        jp: function () {
            return {
                today: s.intl.string(o.default.VjIAQQ),
                yesterday: s.intl.string(o.default["2a8xHY"]),
                days: o.default.Xt6oND,
            };
        },
        kN: f,
        mV: function (t, e) {
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
        },
        u7: function (t) {
            return t.display_type === a.NV.PURCHASES;
        },
    },
);
