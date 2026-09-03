n.d(t, { A: () => g });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(773669),
    l = n(885386),
    o = n(617617),
    d = n(559868);
let c = {},
    u = {},
    _ = null,
    E = null,
    A = null,
    h = "lastChangeLogDate",
    I = null,
    f = null,
    p = new Set();
function T() {
    I = l.pK.getSetting();
}
class m extends i.Ay.Store {
    static displayName = "ChangelogStore";
    initialize() {
        this.waitFor(s.default, o.A), this.syncWith([s.default], () => !0), this.syncWith([o.A], T);
        let e = r.w.get(h);
        if (null != e)
            try {
                f = new Date(e);
            } catch {
                r.w.remove(h);
            }
    }
    getChangelog(e, t) {
        return c[e]?.[t] ?? null;
    }
    latestChangelogId() {
        return _;
    }
    getChangelogLoadStatus(e, t) {
        return u[e]?.[t] ?? d._f.NOT_LOADED;
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
        return I;
    }
    lastSeenChangelogDate() {
        return f;
    }
    getStateForDebugging() {
        return { changelogConfig: A, loadedChangelogs: u, lastSeenChangelogId: I, lastSeenChangelogDate: f };
    }
    isLocked() {
        return p.size > 0;
    }
}
let g = new m(a.h, {
    CHANGE_LOG_LOCK: function (e) {
        let { key: t } = e;
        if (p.has(t)) return !1;
        (p = new Set(p)).add(t);
    },
    CHANGE_LOG_UNLOCK: function (e) {
        let { key: t } = e;
        if (!p.has(t)) return !1;
        (p = new Set(p)).delete(t);
    },
    CHANGE_LOG_SET_CONFIG: function (e) {
        let { config: t, latestChangelogId: n } = e;
        (_ = n), (A = t);
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
                [n.asset_type === d.PW.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset,
            }),
            null == u[t] && (u[t] = {}),
            (u[t][n.locale] = d._f.LOADED_SUCCESS);
    },
    CHANGE_LOG_FETCH_FAILED: function (e) {
        let { id: t, locale: n } = e;
        if (null != c[t] && null != c[t][n]) return !1;
        null == u[t] && (u[t] = {}), (u[t][n] = d._f.LOADED_FAILURE);
    },
    CHANGE_LOG_SET_OVERRIDE: function (e) {
        let { id: t } = e;
        E = t;
    },
    CHANGE_LOG_MARK_SEEN: function (e) {
        let { changelogDate: t } = e;
        (f = new Date(t)), r.w.set(h, t);
    },
});
