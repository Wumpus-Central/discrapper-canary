"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(652215);
let a = {},
    o = null;
class l extends i.Ay.Store {
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
            let e = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / 864e5),
                i = Math.floor((1e3 * t.total_duration) / 36e5);
            0 === e
                ? (n += 50)
                : e >= 1 && e < 2
                  ? (n += 40)
                  : e >= 2 && e < 4
                    ? (n += 30)
                    : e >= 4 && e < 7
                      ? (n += 20)
                      : e >= 7 && (n += 10),
                0 === i
                    ? (n += 0)
                    : i >= 1 && i < 12
                      ? (n += 10)
                      : i >= 12 && i < 168
                        ? (n += 20)
                        : i >= 168 && i < 720
                          ? (n += 40)
                          : i >= 720 && (n += 50);
        }
        return n;
    }
}
let d = new l(r.h, {
    USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
        let { statistics: t } = e;
        t.forEach((e) => {
            a[e.application_id] = e;
        }),
            (o = Date.now());
    },
    ACTIVITY_UPDATE_START: function (e) {
        let { duration: t, applicationId: n, distributor: i } = e,
            r = a[n],
            o = new Date().toISOString(),
            l = 0,
            d = 0;
        null != r && ((l = r.total_duration), (d = r.total_discord_sku_duration ?? 0)),
            (l += t),
            i === s.d3x.DISCORD && (d += t),
            (a[n] = { application_id: n, total_duration: l, last_played_at: o, total_discord_sku_duration: d });
    },
    LOGOUT: function () {
        (a = {}), (o = null);
    },
});
