var i,
    a = r(47120);
var o = r(442837),
    s = r(433517),
    l = r(570140),
    u = r(706454),
    c = r(695346),
    d = r(581883),
    f = r(596401);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = {},
    _ = {},
    m = null,
    g = null,
    E = null,
    v = 'lastChangeLogDate',
    y = null,
    b = null,
    I = new Set();
function T(e) {
    let { key: n } = e;
    if (I.has(n)) return !1;
    (I = new Set(I)).add(n);
}
function S(e) {
    let { key: n } = e;
    if (!I.has(n)) return !1;
    (I = new Set(I)).delete(n);
}
function A(e) {
    let { config: n, latestChangelogId: r } = e;
    (m = r), (E = n);
}
function C(e) {
    let { id: n, changelog: r } = e;
    null == h[n] && (h[n] = {}),
        (h[n][r.locale] = {
            id: n,
            date: r.date,
            body: r.content,
            revision: 1,
            locale: r.locale,
            [r.asset_type === f.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: r.asset
        }),
        null == _[n] && (_[n] = {}),
        (_[n][r.locale] = f.LU.LOADED_SUCCESS);
}
function N(e) {
    let { id: n, locale: r } = e;
    if (null != h[n] && null != h[n][r]) return !1;
    null == _[n] && (_[n] = {}), (_[n][r] = f.LU.LOADED_FAILURE);
}
function R(e) {
    let { id: n } = e;
    g = n;
}
function O(e) {
    let { changelogDate: n } = e;
    (b = new Date(n)), s.K.set(v, n);
}
function D() {
    y = c.l4.getSetting();
}
class x extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default, d.Z), this.syncWith([u.default], () => !0), this.syncWith([d.Z], D);
        let e = s.K.get(v);
        if (null != e)
            try {
                b = new Date(e);
            } catch {
                s.K.remove(v);
            }
    }
    getChangelog(e, n) {
        var r, i;
        return null !== (i = null === (r = h[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== i ? i : null;
    }
    latestChangelogId() {
        return m;
    }
    getChangelogLoadStatus(e, n) {
        var r, i;
        return null !== (i = null === (r = _[e]) || void 0 === r ? void 0 : r[n]) && void 0 !== i ? i : f.LU.NOT_LOADED;
    }
    hasLoadedConfig() {
        return null != E;
    }
    getConfig() {
        return E;
    }
    overrideId() {
        return g;
    }
    lastSeenChangelogId() {
        return y;
    }
    lastSeenChangelogDate() {
        return b;
    }
    getStateForDebugging() {
        return {
            changelogConfig: E,
            loadedChangelogs: _,
            lastSeenChangelogId: y,
            lastSeenChangelogDate: b
        };
    }
    isLocked() {
        return I.size > 0;
    }
}
p(x, 'displayName', 'ChangelogStore'),
    (n.Z = new x(l.Z, {
        CHANGE_LOG_LOCK: T,
        CHANGE_LOG_UNLOCK: S,
        CHANGE_LOG_SET_CONFIG: A,
        CHANGE_LOG_FETCH_SUCCESS: C,
        CHANGE_LOG_FETCH_FAILED: N,
        CHANGE_LOG_SET_OVERRIDE: R,
        CHANGE_LOG_MARK_SEEN: O
    }));
