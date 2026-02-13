"use strict";
n.d(t, { A: () => R });
var r = n(311907),
    i = n(73153),
    a = n(212455),
    s = n(463347),
    o = n(334465),
    l = n(976860),
    u = n(961350),
    c = n(650048),
    d = n(71393),
    _ = n(652215);
let f = -1,
    h = null,
    p = null,
    g = {};
function E(e) {
    return e === _.ME ? null : (e ?? null);
}
function A() {
    null != h && null == d.A.getGuild(h) && null == a.A.getRequest(h) && (h = null),
        null != p && null == d.A.getGuild(p) && null == a.A.getRequest(p) && (p = null),
        T(h);
}
function I(e) {
    (h = e.selectedGuildId), (p = void 0), A();
}
function T(e) {
    null != e && (g[e] = Date.now());
}
function y(e) {
    let { guildId: t } = e;
    if (h === t) return !1;
    T(h), T(t), null != t && (p = t), (h = t);
}
function S(e) {
    let t = !1;
    return (
        delete g[e],
        p === e && ((p = null), (t = !0)),
        h === e && (d.A.getGuildsArray().find((t) => t.id !== e), (h = null), (0, l.bG)(_.BVt.ME), (t = !0)),
        t
    );
}
function v(e) {
    let {
        guild: { id: t, unavailable: n },
    } = e;
    return !0 !== n && S(t);
}
function C(e) {
    let { guildId: t, user: n } = e;
    return n.id === u.default.getId() && S(t);
}
function b() {
    (h = null), (p = null);
}
class N extends r.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(u.default, c.A, d.A, a.A),
            (g = e?.selectedGuildTimestampMillis ?? {}),
            (h = e?.selectedGuildId ?? null),
            (p = e?.lastSelectedGuildId ?? null);
        let t = c.A.lastNonVoiceRoute,
            n = (0, o.B)(t, { path: _.BVt.CHANNEL(s.pv.guildId()) });
        E(n?.params?.guildId);
    }
    getState() {
        return { selectedGuildTimestampMillis: g, selectedGuildId: h, lastSelectedGuildId: p };
    }
    getGuildId() {
        return h;
    }
    getLastSelectedGuildId() {
        return p;
    }
    getLastSelectedTimestamp(e) {
        return h === e ? f : g[e];
    }
}
let R = new N(i.h, {
    CONNECTION_OPEN: A,
    OVERLAY_INITIALIZE: I,
    CHANNEL_SELECT: y,
    GUILD_MEMBER_REMOVE: C,
    GUILD_DELETE: v,
    LOGOUT: b,
});
