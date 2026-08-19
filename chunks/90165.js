"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(652215);
let s = {},
    l = null;
class o extends i.Ay.Store {
    static displayName = "LibraryApplicationStatisticsStore";
    get applicationStatistics() {
        return s;
    }
    get lastFetched() {
        return l;
    }
    getGameDuration(e) {
        let t = s[e];
        return null != t ? t.total_duration : 0;
    }
    getLastPlayedDateTime(e) {
        let t = s[e];
        return null != t ? new Date(t.last_played_at).getTime() : null;
    }
    hasApplicationStatistic(e) {
        return null != s[e];
    }
    getCurrentUserStatisticsForApplication(e) {
        return s[e];
    }
    getQuickSwitcherScoreForApplication(e) {
        let t = s[e],
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
let d = new o(r.h, {
    USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
        let { statistics: t } = e;
        t.forEach((e) => {
            s[e.application_id] = e;
        }),
            (l = Date.now());
    },
    ACTIVITY_UPDATE_START: function (e) {
        let { duration: t, applicationId: n, distributor: i } = e,
            r = s[n],
            l = new Date().toISOString(),
            o = 0,
            d = 0;
        null != r && ((o = r.total_duration), (d = r.total_discord_sku_duration ?? 0)),
            (o += t),
            i === a.d3x.DISCORD && (d += t),
            (s[n] = { application_id: n, total_duration: o, last_played_at: l, total_discord_sku_duration: d });
    },
    LOGOUT: function () {
        (s = {}), (l = null);
    },
});
