var i,
    a = r(512969),
    o = r(442837),
    s = r(570140),
    l = r(937111),
    u = r(893607),
    c = r(703656),
    d = r(314897),
    f = r(896797),
    p = r(430824),
    h = r(981631);
function _(e, n, r) {
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
let m = -1,
    g = null,
    E = null,
    v = {};
function y() {
    null != g && null == p.Z.getGuild(g) && null == l.Z.getRequest(g) && (g = null), null != E && null == p.Z.getGuild(E) && null == l.Z.getRequest(E) && (E = null), I(g);
}
function b(e) {
    (g = e.selectedGuildId), (E = void 0), y();
}
function I(e) {
    if (null != e) v[e] = Date.now();
}
function T(e) {
    let { guildId: n } = e;
    if (g === n) return !1;
    I(g), I(n), null != n && (E = n), (g = n);
}
function S(e) {
    let n = !1;
    if ((delete v[e], E === e && ((E = null), (n = !0)), g === e)) {
        Object.values(p.Z.getGuilds()).find((n) => n.id !== e);
        (g = null), (0, c.dL)(h.Z5c.ME), (n = !0);
    }
    return n;
}
function A(e) {
    let {
        guild: { id: n, unavailable: r }
    } = e;
    return !0 !== r && S(n);
}
function C(e) {
    let { guildId: n, user: r } = e;
    return r.id === d.default.getId() && S(n);
}
function N() {
    (g = null), (E = null);
}
class R extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        var n, r, i, o;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(p.Z, d.default, f.Z), (v = null !== (r = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== r ? r : {}), (g = null !== (i = null == e ? void 0 : e.selectedGuildId) && void 0 !== i ? i : null), (E = null !== (o = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== o ? o : null);
        let s = f.Z.lastNonVoiceRoute,
            l = (0, a.LX)(s, { path: h.Z5c.CHANNEL(u.Hw.guildId()) });
        null == l || null === (n = l.params) || void 0 === n || n.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: v,
            selectedGuildId: g,
            lastSelectedGuildId: E
        };
    }
    getGuildId() {
        return g;
    }
    getLastSelectedGuildId() {
        return E;
    }
    getLastSelectedTimestamp(e) {
        return g === e ? m : v[e];
    }
}
_(R, 'displayName', 'SelectedGuildStore'),
    _(R, 'persistKey', 'SelectedGuildStore'),
    (n.Z = new R(s.Z, {
        CONNECTION_OPEN: y,
        OVERLAY_INITIALIZE: b,
        CHANNEL_SELECT: T,
        GUILD_MEMBER_REMOVE: C,
        GUILD_DELETE: A,
        LOGOUT: N
    }));
