"use strict";
n.d(t, { A: () => b });
var r = n(960488),
    i = n(311907),
    a = n(73153),
    s = n(212455),
    o = n(463347),
    l = n(976860),
    u = n(961350),
    c = n(650048),
    d = n(71393),
    _ = n(652215);
let f = -1,
    p = null,
    h = null,
    m = {};
function g() {
    null != p && null == d.A.getGuild(p) && null == s.A.getRequest(p) && (p = null),
        null != h && null == d.A.getGuild(h) && null == s.A.getRequest(h) && (h = null),
        A(p);
}
function E(e) {
    (p = e.selectedGuildId), (h = void 0), g();
}
function A(e) {
    null != e && (m[e] = Date.now());
}
function I(e) {
    let { guildId: t } = e;
    if (p === t) return !1;
    A(p), A(t), null != t && (h = t), (p = t);
}
function T(e) {
    let t = !1;
    return (
        delete m[e],
        h === e && ((h = null), (t = !0)),
        p === e && (d.A.getGuildsArray().find((t) => t.id !== e), (p = null), (0, l.bG)(_.BVt.ME), (t = !0)),
        t
    );
}
function y(e) {
    let {
        guild: { id: t, unavailable: n },
    } = e;
    return !0 !== n && T(t);
}
function S(e) {
    let { guildId: t, user: n } = e;
    return n.id === u.default.getId() && T(t);
}
function v() {
    (p = null), (h = null);
}
class C extends i.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(u.default, c.A, d.A, s.A),
            (m = e?.selectedGuildTimestampMillis ?? {}),
            (p = e?.selectedGuildId ?? null),
            (h = e?.lastSelectedGuildId ?? null);
        let t = c.A.lastNonVoiceRoute,
            n = (0, r.B6)(t, { path: _.BVt.CHANNEL(o.pv.guildId()) });
        n?.params?.guildId;
    }
    getState() {
        return { selectedGuildTimestampMillis: m, selectedGuildId: p, lastSelectedGuildId: h };
    }
    getGuildId() {
        return p;
    }
    getLastSelectedGuildId() {
        return h;
    }
    getLastSelectedTimestamp(e) {
        return p === e ? f : m[e];
    }
}
let b = new C(a.h, {
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: E,
    CHANNEL_SELECT: I,
    GUILD_MEMBER_REMOVE: S,
    GUILD_DELETE: y,
    LOGOUT: v,
});
