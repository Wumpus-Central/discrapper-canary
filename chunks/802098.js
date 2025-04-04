n.d(t, { Z: () => P }), n(47120);
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = {},
    _ = {},
    p = null,
    h = null,
    m = null,
    g = 'lastChangeLogDate',
    E = null,
    b = null,
    y = new Set();
function v(e) {
    let { key: t } = e;
    if (y.has(t)) return !1;
    (y = new Set(y)).add(t);
}
function O(e) {
    let { key: t } = e;
    if (!y.has(t)) return !1;
    (y = new Set(y)).delete(t);
}
function I(e) {
    let { config: t, latestChangelogId: n } = e;
    (p = n), (m = t);
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
            [n.asset_type === u.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: n.asset
        }),
        null == _[t] && (_[t] = {}),
        (_[t][n.locale] = u.LU.LOADED_SUCCESS);
}
function T(e) {
    let { id: t, locale: n } = e;
    if (null != f[t] && null != f[t][n]) return !1;
    null == _[t] && (_[t] = {}), (_[t][n] = u.LU.LOADED_FAILURE);
}
function N(e) {
    let { id: t } = e;
    h = t;
}
function A(e) {
    let { changelogDate: t } = e;
    (b = new Date(t)), o.K.set(g, t);
}
function C() {
    E = l.l4.getSetting();
}
class R extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default, c.Z), this.syncWith([s.default], () => !0), this.syncWith([c.Z], C);
        let e = o.K.get(g);
        if (null != e)
            try {
                b = new Date(e);
            } catch (e) {
                o.K.remove(g);
            }
    }
    getChangelog(e, t) {
        var n, r;
        return null != (r = null == (n = f[e]) ? void 0 : n[t]) ? r : null;
    }
    latestChangelogId() {
        return p;
    }
    getChangelogLoadStatus(e, t) {
        var n, r;
        return null != (r = null == (n = _[e]) ? void 0 : n[t]) ? r : u.LU.NOT_LOADED;
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
            loadedChangelogs: _,
            lastSeenChangelogId: E,
            lastSeenChangelogDate: b
        };
    }
    isLocked() {
        return y.size > 0;
    }
}
d(R, 'displayName', 'ChangelogStore');
let P = new R(a.Z, {
    CHANGE_LOG_LOCK: v,
    CHANGE_LOG_UNLOCK: O,
    CHANGE_LOG_SET_CONFIG: I,
    CHANGE_LOG_FETCH_SUCCESS: S,
    CHANGE_LOG_FETCH_FAILED: T,
    CHANGE_LOG_SET_OVERRIDE: N,
    CHANGE_LOG_MARK_SEEN: A
});
