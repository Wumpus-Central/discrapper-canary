n.d(t, { A: () => S });
var i = n(17928),
    r = n(506774),
    l = n(228366),
    a = n(773669),
    s = n(253932),
    o = n(617617),
    d = n(559868);
let u = {},
    c = {},
    h = null,
    E = null,
    _ = null,
    p = "lastChangeLogDate",
    A = null,
    f = null,
    g = new Set();
function I() {
    A = s.pK.getSetting();
}
class T extends i.Ay.Store {
    static displayName = "ChangelogStore";
    initialize() {
        this.waitFor(a.default, o.A), this.syncWith([a.default], () => !0), this.syncWith([o.A], I);
        let e = r.w.get(p);
        if (null != e)
            try {
                f = new Date(e);
            } catch {
                r.w.remove(p);
            }
    }
    getChangelog(e, t) {
        return u[e]?.[t] ?? null;
    }
    latestChangelogId() {
        return h;
    }
    getChangelogLoadStatus(e, t) {
        return c[e]?.[t] ?? d._f.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != _;
    }
    getConfig() {
        return _;
    }
    overrideId() {
        return E;
    }
    lastSeenChangelogId() {
        return A;
    }
    lastSeenChangelogDate() {
        return f;
    }
    getStateForDebugging() {
        return { changelogConfig: _, loadedChangelogs: c, lastSeenChangelogId: A, lastSeenChangelogDate: f };
    }
    isLocked() {
        return g.size > 0;
    }
}
let S = new T(l.h, {
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
        (h = n), (_ = t);
    },
    CHANGE_LOG_FETCH_SUCCESS: function (e) {
        let { id: t, changelog: n } = e;
        null == u[t] && (u[t] = {}),
            (u[t][n.locale] = {
                id: t,
                date: n.date,
                body: n.content,
                revision: 1,
                locale: n.locale,
                [n.asset_type === d.PW.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset,
            }),
            null == c[t] && (c[t] = {}),
            (c[t][n.locale] = d._f.LOADED_SUCCESS);
    },
    CHANGE_LOG_FETCH_FAILED: function (e) {
        let { id: t, locale: n } = e;
        if (null != u[t] && null != u[t][n]) return !1;
        null == c[t] && (c[t] = {}), (c[t][n] = d._f.LOADED_FAILURE);
    },
    CHANGE_LOG_SET_OVERRIDE: function (e) {
        let { id: t } = e;
        E = t;
    },
    CHANGE_LOG_MARK_SEEN: function (e) {
        let { changelogDate: t } = e;
        (f = new Date(t)), r.w.set(p, t);
    },
});
