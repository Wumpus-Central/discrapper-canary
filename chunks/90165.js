"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(73153),
    s = n(652215);
let a = {},
    o = null,
    l = 864e5,
    u = 36e5;
function c() {
    (a = {}), (o = null);
}
function d(e) {
    let { statistics: t } = e;
    t.forEach((e) => {
        a[e.application_id] = e;
    }),
        (o = Date.now());
}
function _(e) {
    let { duration: t, applicationId: n, distributor: r } = e,
        i = a[n],
        o = new Date().toISOString(),
        l = 0,
        u = 0;
    null != i && ((l = i.total_duration), (u = i.total_discord_sku_duration ?? 0)),
        (l += t),
        r === s.d3x.DISCORD && (u += t),
        (a[n] = { application_id: n, total_duration: l, last_played_at: o, total_discord_sku_duration: u });
}
class f extends r.Ay.Store {
    static displayName = "LibraryApplicationStatisticsStore";
    get applicationStatistics() {
        return a;
    }
    get lastFetched() {
        return o;
    }
    getGameDuration(e) {
        let t = a[e];
        return null != t ? t.total_duration : 0;
    }
    getLastPlayedDateTime(e) {
        let t = a[e];
        return null != t ? new Date(t.last_played_at).getTime() : null;
    }
    hasApplicationStatistic(e) {
        return null != a[e];
    }
    getCurrentUserStatisticsForApplication(e) {
        return a[e];
    }
    getQuickSwitcherScoreForApplication(e) {
        let t = a[e],
            n = 0;
        if (null != t) {
            let e = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / l),
                r = Math.floor((1e3 * t.total_duration) / u);
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
let p = new f(i.h, { USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: d, ACTIVITY_UPDATE_START: _, LOGOUT: c });
