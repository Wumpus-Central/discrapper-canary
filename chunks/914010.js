n.d(t, { Z: () => R });
var i,
    r = n(512969),
    a = n(442837),
    s = n(570140),
    o = n(937111),
    l = n(893607),
    u = n(703656),
    c = n(314897),
    d = n(896797),
    f = n(430824),
    _ = n(981631);
function p(e, t, n) {
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
let h = -1,
    m = null,
    g = null,
    E = {};
function v() {
    null != m && null == f.Z.getGuild(m) && null == o.Z.getRequest(m) && (m = null), null != g && null == f.Z.getGuild(g) && null == o.Z.getRequest(g) && (g = null), I(m);
}
function y(e) {
    (m = e.selectedGuildId), (g = void 0), v();
}
function I(e) {
    null != e && (E[e] = Date.now());
}
function b(e) {
    let { guildId: t } = e;
    if (m === t) return !1;
    I(m), I(t), null != t && (g = t), (m = t);
}
function T(e) {
    let t = !1;
    return delete E[e], g === e && ((g = null), (t = !0)), m === e && (Object.values(f.Z.getGuilds()).find((t) => t.id !== e), (m = null), (0, u.dL)(_.Z5c.ME), (t = !0)), t;
}
function S(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    return !0 !== n && T(t);
}
function A(e) {
    let { guildId: t, user: n } = e;
    return n.id === c.default.getId() && T(t);
}
function N() {
    (m = null), (g = null);
}
class C extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n, i, a;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(f.Z, c.default, d.Z), (E = null !== (n = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== n ? n : {}), (m = null !== (i = null == e ? void 0 : e.selectedGuildId) && void 0 !== i ? i : null), (g = null !== (a = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== a ? a : null);
        let s = d.Z.lastNonVoiceRoute,
            o = (0, r.LX)(s, { path: _.Z5c.CHANNEL(l.Hw.guildId()) });
        null == o || null === (t = o.params) || void 0 === t || t.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: E,
            selectedGuildId: m,
            lastSelectedGuildId: g
        };
    }
    getGuildId() {
        return m;
    }
    getLastSelectedGuildId() {
        return g;
    }
    getLastSelectedTimestamp(e) {
        return m === e ? h : E[e];
    }
}
p(C, 'displayName', 'SelectedGuildStore'), p(C, 'persistKey', 'SelectedGuildStore');
let R = new C(s.Z, {
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: y,
    CHANNEL_SELECT: b,
    GUILD_MEMBER_REMOVE: A,
    GUILD_DELETE: S,
    LOGOUT: N
});
