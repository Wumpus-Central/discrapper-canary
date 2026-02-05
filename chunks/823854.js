"use strict";
n.d(t, { A: () => M });
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(961350),
    l = n(430363),
    u = n(659416),
    c = n(4149),
    d = n(276976),
    _ = n(652215);
let f = {},
    p = {};
function h() {
    return o.default.getId();
}
function m(e) {
    let { updates: t } = e;
    if (!x()) return w();
    let n = !1,
        r = { ...p },
        a = Date.now(),
        s = h();
    for (let e of t) {
        let t = e.user?.id;
        if (null == t) continue;
        let o = N(e);
        if (null == o || !R(t, o)) {
            t !== s && null != r[t] && (delete r[t], (n = !0));
            continue;
        }
        let l = O(o, a, r[t] ?? null);
        i()(r[t], l) || ((r[t] = l), (n = !0));
    }
    return n && (p = r), n;
}
function g(e) {
    let { voiceStates: t } = e,
        n = !1,
        r = { ...f },
        a = { ...p };
    for (let e of t) {
        let { userId: t, guildId: a, channelId: s } = e,
            o = { guildId: a, channelId: s };
        i()(r[t], o) || ((r[t] = o), (n = !0));
    }
    return n && ((f = r), (p = a)), n;
}
function E(e) {
    let { nowMs: t, activeElapsedMsByTargetId: n } = e;
    if (!x()) return w();
    let r = !1,
        i = { ...p };
    for (let [e, a] of Object.entries(i)) {
        let s = n?.[e],
            o = null != s ? s : a.activeElapsedMs,
            l = D(a.presence, o);
        (l !== a.progress || o !== a.activeElapsedMs) &&
            ((i[e] = { ...a, progress: l, lastUpdatedAtMs: t, activeElapsedMs: o }), (r = !0));
    }
    return r && (p = i), r;
}
function A() {
    return (f = {}), w();
}
function I(e) {
    let { voiceDare: t } = e,
        n = h();
    if (null == n) return !1;
    let r = Date.now(),
        i = O({ ...t, messageKind: u.cn.STATE, phase: u.Ob.RUNNING, startedAtMs: r }, r, null);
    return (p = { ...p, [n]: i }), !0;
}
function T(e) {
    let { voiceDare: t } = e,
        n = h();
    if (null == n || null == p[n]) return !1;
    let r = { ...p };
    return delete r[n], (p = r), !0;
}
function y(e) {
    let { voiceDare: t } = e;
    return b(t.dareId, u.Ob.COMPLETED);
}
function S(e) {
    let { voiceDare: t } = e;
    return b(t.dareId, u.Ob.FAILED);
}
function v(e) {
    return C(null);
}
function C(e) {
    let t = h();
    if (null == t) return !1;
    let n = p[t];
    if (null == n || (null != e && n.presence.dareId !== e)) return !1;
    let r = { ...p };
    return delete r[t], (p = r), !0;
}
function b(e, t) {
    let n = h();
    if (null == n) return !1;
    let r = p[n];
    if (null == r || r.presence.dareId !== e || r.presence.phase === t) return !1;
    let i = Date.now(),
        a = { ...r.presence, phase: t },
        s = { presence: a, progress: D(a, r.activeElapsedMs), lastUpdatedAtMs: i, activeElapsedMs: r.activeElapsedMs };
    return (p = { ...p, [n]: s }), !0;
}
function N(e) {
    let t = e.activities?.find((e) => e.type === _.$pd.CUSTOM_STATUS);
    if (null == t) return null;
    let n = (0, c.aF)(t);
    return null == n || n.messageKind !== u.cn.STATE ? null : n;
}
function R(e, t) {
    return t.targetId === e;
}
function O(e, t, n) {
    let r =
        null != n && n.presence.dareId === e.dareId && n.presence.phase === u.Ob.RUNNING && e.phase === u.Ob.RUNNING
            ? n.activeElapsedMs
            : 0;
    return { presence: e, progress: D(e, r), lastUpdatedAtMs: t, activeElapsedMs: r };
}
function D(e, t) {
    switch (e.phase) {
        case u.Ob.COMPLETED:
            return 1;
        case u.Ob.FAILED:
        case u.Ob.CANCELLED:
            return 0;
        case u.Ob.RUNNING:
            if (!(0, d.x)(e.kind)) return 0;
            return L(t / Math.max(1, 1e3 * e.durationSec));
        case u.Ob.OFFERED:
        case u.Ob.ACCEPTED:
            return 0;
    }
}
function L(e) {
    return Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
}
function w() {
    return 0 !== Object.keys(p).length && ((p = {}), !0);
}
function x() {
    return (0, l.PA)("VoiceDareTrackingStore").enabled;
}
class P extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "VoiceDareTrackingStore";
    getProgressForUserId(e) {
        let t = p[e];
        return null == t
            ? null
            : t.presence.phase !== u.Ob.RUNNING && t.presence.phase !== u.Ob.COMPLETED
              ? 0
              : t.progress;
    }
    getTrackingEntryForUserId(e) {
        return p[e] ?? null;
    }
    hasVoiceDareForUserId(e) {
        return null != p[e];
    }
    getProgressForDareId(e) {
        let t = Object.values(p).find((t) => t.presence.dareId === e);
        return null == t
            ? null
            : t.presence.phase !== u.Ob.RUNNING && t.presence.phase !== u.Ob.COMPLETED
              ? 0
              : t.progress;
    }
    getActiveDareForUserId(e) {
        let t = p[e];
        return null == t ? null : t.presence;
    }
}
let M = new P(s.h, {
    PRESENCE_UPDATES: m,
    VOICE_STATE_UPDATES: g,
    VOICE_DARES_TRACKING_TICK: E,
    VOICE_DARES_LOCAL_ACCEPT_OFFER: I,
    VOICE_DARES_LOCAL_DECLINE_OFFER: T,
    VOICE_DARES_LOCAL_COMPLETE: y,
    VOICE_DARES_LOCAL_CHICKEN_OUT: S,
    VOICE_DARES_LOCAL_CLEARED: v,
    LOGOUT: A,
});
