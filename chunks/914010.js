n.d(t, { Z: () => N });
var r,
    i = n(828700),
    a = n(442837),
    o = n(570140),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = -1,
    h = null,
    g = null,
    E = {};
function b() {
    null != h && null == f.Z.getGuild(h) && null == s.Z.getRequest(h) && (h = null),
        null != g && null == f.Z.getGuild(g) && null == s.Z.getRequest(g) && (g = null),
        O(h);
}
function y(e) {
    (h = e.selectedGuildId), (g = void 0), b();
}
function O(e) {
    null != e && (E[e] = Date.now());
}
function v(e) {
    let { guildId: t } = e;
    if (h === t) return !1;
    O(h), O(t), null != t && (g = t), (h = t);
}
function S(e) {
    let t = !1;
    return (
        delete E[e],
        g === e && ((g = null), (t = !0)),
        h === e && (f.Z.getGuildsArray().find((t) => t.id !== e), (h = null), (0, c.dL)(p.Z5c.ME), (t = !0)),
        t
    );
}
function I(e) {
    let {
        guild: { id: t, unavailable: n },
    } = e;
    return !0 !== n && S(t);
}
function T(e) {
    let { guildId: t, user: n } = e;
    return n.id === u.default.getId() && S(t);
}
function A() {
    (h = null), (g = null);
}
class C extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r, a;
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(u.default, d.Z, f.Z, s.Z),
            (E = null != (n = null == e ? void 0 : e.selectedGuildTimestampMillis) ? n : {}),
            (h = null != (r = null == e ? void 0 : e.selectedGuildId) ? r : null),
            (g = null != (a = null == e ? void 0 : e.lastSelectedGuildId) ? a : null);
        let o = d.Z.lastNonVoiceRoute,
            c = (0, i.LX)(o, { path: p.Z5c.CHANNEL(l.Hw.guildId()) });
        null == c || null == (t = c.params) || t.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: E,
            selectedGuildId: h,
            lastSelectedGuildId: g,
        };
    }
    getGuildId() {
        return h;
    }
    getLastSelectedGuildId() {
        return g;
    }
    getLastSelectedTimestamp(e) {
        return h === e ? m : E[e];
    }
}
_(C, "displayName", "SelectedGuildStore"), _(C, "persistKey", "SelectedGuildStore");
let N = new C(o.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: y,
    CHANNEL_SELECT: v,
    GUILD_MEMBER_REMOVE: T,
    GUILD_DELETE: I,
    LOGOUT: A,
});
