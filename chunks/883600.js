var i = n(855986),
    r = n(506774),
    a = n(73153),
    s = n(773669),
    l = n(253932),
    o = n(617617),
    d = n(559868);
let c = {},
    u = {},
    _ = null,
    E = null,
    A = null,
    f = "lastChangeLogDate",
    h = null,
    I = null,
    p = new Set();
function m() {
    h = l.pK.getSetting();
}
class g extends i.Ay.Store {
    static displayName = "ChangelogStore";
    initialize() {
        (this.waitFor(s.default, o.A), this.syncWith([s.default], () => !0), this.syncWith([o.A], m));
        let e = r.w.get(f);
        if (null != e)
            try {
                I = new Date(e);
            } catch {
                r.w.remove(f);
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
        return h;
    }
    lastSeenChangelogDate() {
        return I;
    }
    getStateForDebugging() {
        return { changelogConfig: A, loadedChangelogs: u, lastSeenChangelogId: h, lastSeenChangelogDate: I };
    }
    isLocked() {
        return p.size > 0;
    }
}
let T = new g(a.h, {
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
        ((_ = n), (A = t));
    },
    CHANGE_LOG_FETCH_SUCCESS: function (e) {
        let { id: t, changelog: n } = e;
        (null == c[t] && (c[t] = {}),
            (c[t][n.locale] = {
                id: t,
                date: n.date,
                body: n.content,
                revision: 1,
                locale: n.locale,
                [n.asset_type === d.PW.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset,
            }),
            null == u[t] && (u[t] = {}),
            (u[t][n.locale] = d._f.LOADED_SUCCESS));
    },
    CHANGE_LOG_FETCH_FAILED: function (e) {
        let { id: t, locale: n } = e;
        if (null != c[t] && null != c[t][n]) return !1;
        (null == u[t] && (u[t] = {}), (u[t][n] = d._f.LOADED_FAILURE));
    },
    CHANGE_LOG_SET_OVERRIDE: function (e) {
        let { id: t } = e;
        E = t;
    },
    CHANGE_LOG_MARK_SEEN: function (e) {
        let { changelogDate: t } = e;
        ((I = new Date(t)), r.w.set(f, t));
    },
});
n.d(t, {}, { A: T });
