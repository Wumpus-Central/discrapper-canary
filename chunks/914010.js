n.d(t, { Z: () => C });
var r,
    i = n(512969),
    o = n(442837),
    a = n(570140),
    s = n(937111),
    l = n(893607),
    c = n(703656),
    u = n(314897),
    d = n(896797),
    f = n(430824),
    p = n(981631);
function _(e, t, n) {
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
    null != m && null == f.Z.getGuild(m) && null == s.Z.getRequest(m) && (m = null), null != g && null == f.Z.getGuild(g) && null == s.Z.getRequest(g) && (g = null), y(m);
}
function b(e) {
    (m = e.selectedGuildId), (g = void 0), v();
}
function y(e) {
    null != e && (E[e] = Date.now());
}
function O(e) {
    let { guildId: t } = e;
    if (m === t) return !1;
    y(m), y(t), null != t && (g = t), (m = t);
}
function S(e) {
    let t = !1;
    return delete E[e], g === e && ((g = null), (t = !0)), m === e && (Object.values(f.Z.getGuilds()).find((t) => t.id !== e), (m = null), (0, c.dL)(p.Z5c.ME), (t = !0)), t;
}
function I(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    return !0 !== n && S(t);
}
function T(e) {
    let { guildId: t, user: n } = e;
    return n.id === u.default.getId() && S(t);
}
function N() {
    (m = null), (g = null);
}
class A extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r, o;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(f.Z, u.default, d.Z), (E = null !== (n = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== n ? n : {}), (m = null !== (r = null == e ? void 0 : e.selectedGuildId) && void 0 !== r ? r : null), (g = null !== (o = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== o ? o : null);
        let a = d.Z.lastNonVoiceRoute,
            s = (0, i.LX)(a, { path: p.Z5c.CHANNEL(l.Hw.guildId()) });
        null == s || null === (t = s.params) || void 0 === t || t.guildId;
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
_(A, 'displayName', 'SelectedGuildStore'), _(A, 'persistKey', 'SelectedGuildStore');
let C = new A(a.Z, {
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: b,
    CHANNEL_SELECT: O,
    GUILD_MEMBER_REMOVE: T,
    GUILD_DELETE: I,
    LOGOUT: N
});
