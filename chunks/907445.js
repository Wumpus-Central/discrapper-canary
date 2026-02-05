"use strict";
n.d(t, { A: () => g });
var i = n(133977),
    s = n.n(i),
    l = n(311907),
    r = n(73153);
let a = ["pct_retained", "new_members", "visitors", "communicators"],
    o = {},
    d = null;
function c(e) {
    let { guildId: t, stats: n } = e;
    d = null;
    let i = {},
        l = {},
        r = n[0],
        c = n[1];
    null != r &&
        a.forEach((e) => {
            if (null != r[e]) {
                let t = s()(e);
                null != c && 0 !== c[e] && (i[`${t}Change`] = ((r[e] - c[e]) * 100) / c[e]), (l[t] = r[e]);
            }
        }),
        (o[t] = { ...l, ...i, ...o[t] });
}
function u(e) {
    let { error: t } = e;
    d = t.code;
}
class m extends l.Ay.Store {
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
