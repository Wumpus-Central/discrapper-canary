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
function b() {
    null != m && null == f.Z.getGuild(m) && null == s.Z.getRequest(m) && (m = null), null != g && null == f.Z.getGuild(g) && null == s.Z.getRequest(g) && (g = null), v(m);
}
function y(e) {
    (m = e.selectedGuildId), (g = void 0), b();
}
function v(e) {
    null != e && (E[e] = Date.now());
}
function O(e) {
    let { guildId: t } = e;
    if (m === t) return !1;
    v(m), v(t), null != t && (g = t), (m = t);
}
function I(e) {
    let t = !1;
    return delete E[e], g === e && ((g = null), (t = !0)), m === e && (Object.values(f.Z.getGuilds()).find((t) => t.id !== e), (m = null), (0, c.dL)(_.Z5c.ME), (t = !0)), t;
}
function S(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    return !0 !== n && I(t);
}
function T(e) {
    let { guildId: t, user: n } = e;
    return n.id === u.default.getId() && I(t);
}
function N() {
    (m = null), (g = null);
}
class A extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r, o;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(f.Z, u.default, d.Z), (E = null != (n = null == e ? void 0 : e.selectedGuildTimestampMillis) ? n : {}), (m = null != (r = null == e ? void 0 : e.selectedGuildId) ? r : null), (g = null != (o = null == e ? void 0 : e.lastSelectedGuildId) ? o : null);
        let a = d.Z.lastNonVoiceRoute,
            s = (0, i.LX)(a, { path: _.Z5c.CHANNEL(l.Hw.guildId()) });
        null == s || null == (t = s.params) || t.guildId;
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
p(A, 'displayName', 'SelectedGuildStore'), p(A, 'persistKey', 'SelectedGuildStore');
let C = new A(a.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: y,
    CHANNEL_SELECT: O,
    GUILD_MEMBER_REMOVE: T,
    GUILD_DELETE: S,
    LOGOUT: N
});
