n.d(t, { A: () => T });
var i = n(17928),
    l = n(506774),
    a = n(228366),
    r = n(773669),
    s = n(253932),
    o = n(617617),
    d = n(559868);
let u = {},
    c = {},
    h = null,
    E = null,
    A = null,
    _ = "lastChangeLogDate",
    p = null,
    g = null,
    f = new Set();
function I() {
    p = s.pK.getSetting();
}
class S extends i.Ay.Store {
    static displayName = "ChangelogStore";
    initialize() {
        this.waitFor(r.default, o.A), this.syncWith([r.default], () => !0), this.syncWith([o.A], I);
        let e = l.w.get(_);
        if (null != e)
            try {
                g = new Date(e);
            } catch {
                l.w.remove(_);
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
        return null != A;
    }
    getConfig() {
        return A;
    }
    overrideId() {
        return E;
    }
    lastSeenChangelogId() {
        return p;
    }
    lastSeenChangelogDate() {
        return g;
    }
    getStateForDebugging() {
        return { changelogConfig: A, loadedChangelogs: c, lastSeenChangelogId: p, lastSeenChangelogDate: g };
    }
    isLocked() {
        return f.size > 0;
    }
}
let T = new S(a.h, {
    CHANGE_LOG_LOCK: function (e) {
        let { key: t } = e;
        if (f.has(t)) return !1;
        (f = new Set(f)).add(t);
    },
    CHANGE_LOG_UNLOCK: function (e) {
        let { key: t } = e;
        if (!f.has(t)) return !1;
        (f = new Set(f)).delete(t);
    },
    CHANGE_LOG_SET_CONFIG: function (e) {
        let { config: t, latestChangelogId: n } = e;
        (h = n), (A = t);
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
        (g = new Date(t)), l.w.set(_, t);
    },
});
