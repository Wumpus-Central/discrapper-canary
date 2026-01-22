n.d(t, {
    A: () => m,
});
var r,
    i = n(133977),
    l = n.n(i),
    s = n(311907),
    a = n(73153);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = ["pct_retained", "new_members", "visitors", "communicators"],
    d = {},
    u = null;

function f(e) {
    let { guildId: t, stats: n } = e;
    u = null;
    let r = {},
        i = {},
        s = n[0],
        a = n[1];
    null != s &&
        o.forEach((e) => {
            if (null != s[e]) {
                let t = l()(e);
                null != a && 0 !== a[e] && (r["".concat(t, "Change")] = ((s[e] - a[e]) * 100) / a[e]), (i[t] = s[e]);
            }
        }),
        (d[t] = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        c(e, t, n[t]);
                    });
            }
            return e;
        })({}, i, r, d[t]));
}

function g(e) {
    let { error: t } = e;
    u = t.code;
}
class b extends (r = s.Ay.Store) {
    getOverviewAnalytics(e) {
        return d[e];
    }
    getError() {
        return u;
    }
}
c(b, "displayName", "GuildSettingsAnalyticsStore");
let m = new b(a.h, {
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: f,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: f,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: f,
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: g,
});
