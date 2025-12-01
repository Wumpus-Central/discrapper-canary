n.d(t, { Z: () => R }), n(388685);
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(706454),
    l = n(695346),
    c = n(581883),
    u = n(596401);
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
    m = null,
    h = null,
    g = "lastChangeLogDate",
    E = null,
    b = null,
    y = new Set();
function O(e) {
    let { key: t } = e;
    if (y.has(t)) return !1;
    (y = new Set(y)).add(t);
}
function v(e) {
    let { key: t } = e;
    if (!y.has(t)) return !1;
    (y = new Set(y)).delete(t);
}
function S(e) {
    let { config: t, latestChangelogId: n } = e;
    (_ = n), (h = t);
}
function I(e) {
    let { id: t, changelog: n } = e;
    null == f[t] && (f[t] = {}),
        (f[t][n.locale] = {
            id: t,
            date: n.date,
            body: n.content,
            revision: 1,
            locale: n.locale,
            [n.asset_type === u.h3.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset,
        }),
        null == p[t] && (p[t] = {}),
        (p[t][n.locale] = u.LU.LOADED_SUCCESS);
}
function T(e) {
    let { id: t, locale: n } = e;
    if (null != f[t] && null != f[t][n]) return !1;
    null == p[t] && (p[t] = {}), (p[t][n] = u.LU.LOADED_FAILURE);
}
function A(e) {
    let { id: t } = e;
    m = t;
}
function C(e) {
    let { changelogDate: t } = e;
    (b = new Date(t)), a.K.set(g, t);
}
function N() {
    E = l.l4.getSetting();
}
class P extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default, c.Z), this.syncWith([s.default], () => !0), this.syncWith([c.Z], N);
        let e = a.K.get(g);
        if (null != e)
            try {
                b = new Date(e);
            } catch (e) {
                a.K.remove(g);
            }
    }
    getChangelog(e, t) {
        var n, r;
        return null != (r = null == (n = f[e]) ? void 0 : n[t]) ? r : null;
    }
    latestChangelogId() {
        return _;
    }
    getChangelogLoadStatus(e, t) {
        var n, r;
        return null != (r = null == (n = p[e]) ? void 0 : n[t]) ? r : u.LU.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != h;
    }
    getConfig() {
        return h;
    }
    overrideId() {
        return m;
    }
    lastSeenChangelogId() {
        return E;
    }
    lastSeenChangelogDate() {
        return b;
    }
    getStateForDebugging() {
        return {
            changelogConfig: h,
            loadedChangelogs: p,
            lastSeenChangelogId: E,
            lastSeenChangelogDate: b,
        };
    }
    isLocked() {
        return y.size > 0;
    }
}
d(P, "displayName", "ChangelogStore");
let R = new P(o.Z, {
    CHANGE_LOG_LOCK: O,
    CHANGE_LOG_UNLOCK: v,
    CHANGE_LOG_SET_CONFIG: S,
    CHANGE_LOG_FETCH_SUCCESS: I,
    CHANGE_LOG_FETCH_FAILED: T,
    CHANGE_LOG_SET_OVERRIDE: A,
    CHANGE_LOG_MARK_SEEN: C,
});
