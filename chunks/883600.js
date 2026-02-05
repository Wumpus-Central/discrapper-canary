"use strict";
n.d(t, { A: () => R });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(773669),
    o = n(253932),
    l = n(617617),
    u = n(559868);
let c = {},
    d = {},
    _ = null,
    f = null,
    p = null,
    h = "lastChangeLogDate",
    m = null,
    g = null,
    E = new Set();
function A(e) {
    let { key: t } = e;
    if (E.has(t)) return !1;
    (E = new Set(E)).add(t);
}
function I(e) {
    let { key: t } = e;
    if (!E.has(t)) return !1;
    (E = new Set(E)).delete(t);
}
function T(e) {
    let { config: t, latestChangelogId: n } = e;
    (_ = n), (p = t);
}
function y(e) {
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
}
function S(e) {
    let { id: t, locale: n } = e;
    if (null != c[t] && null != c[t][n]) return !1;
    null == d[t] && (d[t] = {}), (d[t][n] = u._f.LOADED_FAILURE);
}
function v(e) {
    let { id: t } = e;
    f = t;
}
function C(e) {
    let { changelogDate: t } = e;
    (g = new Date(t)), i.w.set(h, t);
}
function b() {
    m = o.pK.getSetting();
}
class N extends r.Ay.Store {
    static displayName = "ChangelogStore";
    initialize() {
        this.waitFor(s.default, l.A), this.syncWith([s.default], () => !0), this.syncWith([l.A], b);
        let e = i.w.get(h);
        if (null != e)
            try {
                g = new Date(e);
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
        return m;
    }
    lastSeenChangelogDate() {
        return g;
    }
    getStateForDebugging() {
        return { changelogConfig: p, loadedChangelogs: d, lastSeenChangelogId: m, lastSeenChangelogDate: g };
    }
    isLocked() {
        return E.size > 0;
    }
}
let R = new N(a.h, {
    CHANGE_LOG_LOCK: A,
    CHANGE_LOG_UNLOCK: I,
    CHANGE_LOG_SET_CONFIG: T,
    CHANGE_LOG_FETCH_SUCCESS: y,
    CHANGE_LOG_FETCH_FAILED: S,
    CHANGE_LOG_SET_OVERRIDE: v,
    CHANGE_LOG_MARK_SEEN: C,
});
