n.d(t, { A: () => w }), n(896048);
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(773669),
    l = n(253932),
    c = n(617617),
    u = n(559868);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = {},
    p = {},
    _ = null,
    h = null,
    m = null,
    g = "lastChangeLogDate",
    E = null,
    b = null,
    y = new Set();
function O(e) {
    let { key: t } = e;
    if (y.has(t)) return !1;
    (y = new Set(y)).add(t);
}
function A(e) {
    let { key: t } = e;
    if (!y.has(t)) return !1;
    (y = new Set(y)).delete(t);
}
function v(e) {
    let { config: t, latestChangelogId: n } = e;
    (_ = n), (m = t);
}
function S(e) {
    let { id: t, changelog: n } = e;
    null == f[t] && (f[t] = {}),
        (f[t][n.locale] = {
            id: t,
            date: n.date,
            body: n.content,
            revision: 1,
            locale: n.locale,
            [n.asset_type === u.PW.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset,
        }),
        null == p[t] && (p[t] = {}),
        (p[t][n.locale] = u._f.LOADED_SUCCESS);
}
function I(e) {
    let { id: t, locale: n } = e;
    if (null != f[t] && null != f[t][n]) return !1;
    null == p[t] && (p[t] = {}), (p[t][n] = u._f.LOADED_FAILURE);
}
function T(e) {
    let { id: t } = e;
    h = t;
}
function C(e) {
    let { changelogDate: t } = e;
    (b = new Date(t)), a.w.set(g, t);
}
function N() {
    E = l.pK.getSetting();
}
class R extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default, c.A), this.syncWith([o.default], () => !0), this.syncWith([c.A], N);
        let e = a.w.get(g);
        if (null != e)
            try {
                b = new Date(e);
            } catch (e) {
                a.w.remove(g);
            }
    }
    getChangelog(e, t) {
        var n, r;
        return null != (n = null == (r = f[e]) ? void 0 : r[t]) ? n : null;
    }
    latestChangelogId() {
        return _;
    }
    getChangelogLoadStatus(e, t) {
        var n, r;
        return null != (n = null == (r = p[e]) ? void 0 : r[t]) ? n : u._f.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != m;
    }
    getConfig() {
        return m;
    }
    overrideId() {
        return h;
    }
    lastSeenChangelogId() {
        return E;
    }
    lastSeenChangelogDate() {
        return b;
    }
    getStateForDebugging() {
        return {
            changelogConfig: m,
            loadedChangelogs: p,
            lastSeenChangelogId: E,
            lastSeenChangelogDate: b,
        };
    }
    isLocked() {
        return y.size > 0;
    }
}
d(R, "displayName", "ChangelogStore");
let w = new R(s.h, {
    CHANGE_LOG_LOCK: O,
    CHANGE_LOG_UNLOCK: A,
    CHANGE_LOG_SET_CONFIG: v,
    CHANGE_LOG_FETCH_SUCCESS: S,
    CHANGE_LOG_FETCH_FAILED: I,
    CHANGE_LOG_SET_OVERRIDE: T,
    CHANGE_LOG_MARK_SEEN: C,
});
