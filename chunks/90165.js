"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(73153),
    a = n(661439),
    s = n(352505),
    o = n(652215);
let l = {},
    u = null,
    c = 864e5,
    d = 36e5;
function _() {
    s.m.getCurrentConfig({ location: "LibraryApplicationStatisticsStore.handleConnectionOpen" }).enabled && (0, a.X)();
}
function f() {
    (l = {}), (u = null);
}
function p(e) {
    let { statistics: t } = e;
    t.forEach((e) => {
        l[e.application_id] = e;
    }),
        (u = Date.now());
}
function h(e) {
    let { duration: t, applicationId: n, distributor: r } = e,
        i = l[n],
        a = new Date().toISOString(),
        s = 0,
        u = 0;
    null != i && ((s = i.total_duration), (u = i.total_discord_sku_duration ?? 0)),
        (s += t),
        r === o.d3x.DISCORD && (u += t),
        (l[n] = { application_id: n, total_duration: s, last_played_at: a, total_discord_sku_duration: u });
}
class m extends r.Ay.Store {
    static displayName = "LibraryApplicationStatisticsStore";
    get applicationStatistics() {
        return l;
    }
    get lastFetched() {
        return u;
    }
    getGameDuration(e) {
        let t = l[e];
        return null != t ? t.total_duration : 0;
    }
    getLastPlayedDateTime(e) {
        let t = l[e];
        return null != t ? new Date(t.last_played_at).getTime() : null;
    }
    hasApplicationStatistic(e) {
        return null != l[e];
    }
    getCurrentUserStatisticsForApplication(e) {
        return l[e];
    }
    getQuickSwitcherScoreForApplication(e) {
        let t = l[e],
            n = 0;
        if (null != t) {
            let e = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / c),
                r = Math.floor((1e3 * t.total_duration) / d);
            0 === e
                ? (n += 50)
                : e >= 1 && e < 2
                  ? (n += 40)
                  : e >= 2 && e < 4
                    ? (n += 30)
                    : e >= 4 && e < 7
                      ? (n += 20)
                      : e >= 7 && (n += 10),
                0 === r
                    ? (n += 0)
                    : r >= 1 && r < 12
                      ? (n += 10)
                      : r >= 12 && r < 168
                        ? (n += 20)
                        : r >= 168 && r < 720
                          ? (n += 40)
                          : r >= 720 && (n += 50);
        }
        return n;
    }
}
let g = new m(i.h, {
    USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: p,
    ACTIVITY_UPDATE_START: h,
    LOGOUT: f,
    CONNECTION_OPEN: _,
});
