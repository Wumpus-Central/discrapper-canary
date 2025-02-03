n.d(t, { Z: () => D }), n(47120);
var i,
    r = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(706454),
    l = n(695346),
    u = n(581883),
    c = n(596401);
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
    v = null,
    y = new Set();
function I(e) {
    let { key: t } = e;
    if (y.has(t)) return !1;
    (y = new Set(y)).add(t);
}
function b(e) {
    let { key: t } = e;
    if (!y.has(t)) return !1;
    (y = new Set(y)).delete(t);
}
function T(e) {
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
            [n.asset_type === c.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: n.asset
        }),
        null == _[t] && (_[t] = {}),
        (_[t][n.locale] = c.LU.LOADED_SUCCESS);
}
function A(e) {
    let { id: t, locale: n } = e;
    if (null != f[t] && null != f[t][n]) return !1;
    null == _[t] && (_[t] = {}), (_[t][n] = c.LU.LOADED_FAILURE);
}
function N(e) {
    let { id: t } = e;
    h = t;
}
function C(e) {
    let { changelogDate: t } = e;
    (v = new Date(t)), a.K.set(g, t);
}
function R() {
    E = l.l4.getSetting();
}
class O extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.default, u.Z), this.syncWith([o.default], () => !0), this.syncWith([u.Z], R);
        let e = a.K.get(g);
        if (null != e)
            try {
                v = new Date(e);
            } catch {
                a.K.remove(g);
            }
    }
    getChangelog(e, t) {
        var n, i;
        return null !== (i = null === (n = f[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : null;
    }
    latestChangelogId() {
        return p;
    }
    getChangelogLoadStatus(e, t) {
        var n, i;
        return null !== (i = null === (n = _[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : c.LU.NOT_LOADED;
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
        return v;
    }
    getStateForDebugging() {
        return {
            changelogConfig: m,
            loadedChangelogs: _,
            lastSeenChangelogId: E,
            lastSeenChangelogDate: v
        };
    }
    isLocked() {
        return y.size > 0;
    }
}
d(O, 'displayName', 'ChangelogStore');
let D = new O(s.Z, {
    CHANGE_LOG_LOCK: I,
    CHANGE_LOG_UNLOCK: b,
    CHANGE_LOG_SET_CONFIG: T,
    CHANGE_LOG_FETCH_SUCCESS: S,
    CHANGE_LOG_FETCH_FAILED: A,
    CHANGE_LOG_SET_OVERRIDE: N,
    CHANGE_LOG_MARK_SEEN: C
});
