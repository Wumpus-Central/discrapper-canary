"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(773669),
    o = n(253932),
    l = n(617617),
    u = n(559868);
let c = {},
    d = {},
    _ = null,
    f = null,
    p = null,
    h = "lastChangeLogDate",
    E = null,
    m = null,
    g = new Set();
function A() {
    E = o.pK.getSetting();
}
class I extends r.Ay.Store {
    static displayName = "ChangelogStore";
    initialize() {
        this.waitFor(a.default, l.A), this.syncWith([a.default], () => !0), this.syncWith([l.A], A);
        let e = i.w.get(h);
        if (null != e)
            try {
                m = new Date(e);
            } catch {
                i.w.remove(h);
            }
    }
    getChangelog(e, t) {
        return c[e]?.[t] ?? null;
    }
    latestChangelogId() {
        return _;
    }
    getChangelogLoadStatus(e, t) {
        return d[e]?.[t] ?? u._f.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != p;
    }
    getConfig() {
        return p;
    }
    overrideId() {
        return f;
    }
    lastSeenChangelogId() {
        return E;
    }
    lastSeenChangelogDate() {
        return m;
    }
    getStateForDebugging() {
        return { changelogConfig: p, loadedChangelogs: d, lastSeenChangelogId: E, lastSeenChangelogDate: m };
    }
    isLocked() {
        return g.size > 0;
    }
}
let T = new I(s.h, {
    CHANGE_LOG_LOCK: function (e) {
        let { key: t } = e;
        if (g.has(t)) return !1;
        (g = new Set(g)).add(t);
    },
    CHANGE_LOG_UNLOCK: function (e) {
        let { key: t } = e;
        if (!g.has(t)) return !1;
        (g = new Set(g)).delete(t);
    },
    CHANGE_LOG_SET_CONFIG: function (e) {
        let { config: t, latestChangelogId: n } = e;
        (_ = n), (p = t);
    },
    CHANGE_LOG_FETCH_SUCCESS: function (e) {
        let { id: t, changelog: n } = e;
        null == c[t] && (c[t] = {}),
            (c[t][n.locale] = {
                id: t,
                date: n.date,
                body: n.content,
                revision: 1,
                locale: n.locale,
                [n.asset_type === u.PW.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset,
            }),
            null == d[t] && (d[t] = {}),
            (d[t][n.locale] = u._f.LOADED_SUCCESS);
    },
    CHANGE_LOG_FETCH_FAILED: function (e) {
        let { id: t, locale: n } = e;
        if (null != c[t] && null != c[t][n]) return !1;
        null == d[t] && (d[t] = {}), (d[t][n] = u._f.LOADED_FAILURE);
    },
    CHANGE_LOG_SET_OVERRIDE: function (e) {
        let { id: t } = e;
        f = t;
    },
    CHANGE_LOG_MARK_SEEN: function (e) {
        let { changelogDate: t } = e;
        (m = new Date(t)), i.w.set(h, t);
    },
});
