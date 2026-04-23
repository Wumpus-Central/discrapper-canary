n.d(t, { _z: () => d, fe: () => o, p9: () => a });
var i = n(562465),
    l = n(73153),
    s = n(652215);
function r(e, t) {
    let n = new Date(),
        l = new Date(n.getTime() - (n.getDay() + 1) * 864e5 - 36288e5);
    return i.Bo.get({
        url: t(e),
        query: { start: l.toISOString(), end: n.toISOString(), interval: 2 },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
function a(e) {
    return r(e, s.Rsh.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(
        (t) => {
            let { body: n } = t;
            l.h.dispatch({
                type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS",
                guildId: e,
                stats: n.slice(0, 2),
            });
        },
        (e) => {
            l.h.dispatch({ type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE", error: e.body });
        },
    );
}
function o(e) {
    return r(e, s.Rsh.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(
        (t) => {
            let { body: n } = t;
            l.h.dispatch({
                type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS",
                guildId: e,
                stats: n.slice(0, 2),
            });
        },
        (e) => {
            l.h.dispatch({ type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE", error: e.body });
        },
    );
}
function d(e) {
    return r(e, s.Rsh.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(
        (t) => {
            let { body: n } = t,
                i = n
                    .filter((e) => e.hasOwnProperty("pct_retained"))
                    .map((e) => {
                        let { interval_start_timestamp: t, pct_retained: n, ...i } = e;
                        return { interval_start_timestamp: t, pct_retained: n };
                    });
            l.h.dispatch({
                type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS",
                guildId: e,
                stats: i.slice(0, 2),
            });
        },
        (e) => {
            l.h.dispatch({ type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE", error: e.body });
        },
    );
}
