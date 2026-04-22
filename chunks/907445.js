n.d(t, { A: () => g });
var i = n(133977),
    l = n.n(i),
    s = n(311907),
    r = n(73153);
let a = ["pct_retained", "new_members", "visitors", "communicators"],
    o = {},
    d = null;
function c(e) {
    let { guildId: t, stats: n } = e;
    d = null;
    let i = {},
        s = {},
        r = n[0],
        c = n[1];
    null != r &&
        a.forEach((e) => {
            if (null != r[e]) {
                let t = l()(e);
                null != c && 0 !== c[e] && (i[`${t}Change`] = ((r[e] - c[e]) * 100) / c[e]), (s[t] = r[e]);
            }
        }),
        (o[t] = { ...s, ...i, ...o[t] });
}
function u(e) {
    let { error: t } = e;
    d = t.code;
}
class m extends s.Ay.Store {
    static displayName = "GuildSettingsAnalyticsStore";
    getOverviewAnalytics(e) {
        return o[e];
    }
    getError() {
        return d;
    }
}
let g = new m(r.h, {
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: c,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: c,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: c,
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: u,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: u,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: u,
});
