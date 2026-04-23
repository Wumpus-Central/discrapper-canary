"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    s = n(212455),
    a = n(463347),
    o = n(334465),
    l = n(976860),
    d = n(495544),
    _ = n(650048),
    u = n(71393),
    c = n(652215);
let E = null,
    h = null,
    m = {};
function f() {
    null != E && null == u.A.getGuild(E) && null == s.A.getRequest(E) && (E = null),
        null != h && null == u.A.getGuild(h) && null == s.A.getRequest(h) && (h = null),
        g(E);
}
function g(e) {
    null != e && (m[e] = Date.now());
}
function p(e) {
    let t = !1;
    return (
        delete m[e],
        h === e && ((h = null), (t = !0)),
        E === e && (u.A.getGuildsArray().find((t) => t.id !== e), (E = null), (0, l.bG)(c.BVt.ME), (t = !0)),
        t
    );
}
class A extends i.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(d.default, _.A, u.A, s.A),
            (m = e?.selectedGuildTimestampMillis ?? {}),
            (E = e?.selectedGuildId ?? null),
            (h = e?.lastSelectedGuildId ?? null);
        let t = _.A.lastNonVoiceRoute,
            n = (0, o.B)(t, { path: c.BVt.CHANNEL(a.pv.guildId()) });
        n?.params?.guildId, c.ME;
    }
    getState() {
        return { selectedGuildTimestampMillis: m, selectedGuildId: E, lastSelectedGuildId: h };
    }
    getGuildId() {
        return E;
    }
    getLastSelectedGuildId() {
        return h;
    }
    getLastSelectedTimestamp(e) {
        return E === e ? -1 : m[e];
    }
}
let I = new A(r.h, {
    CONNECTION_OPEN: f,
    OVERLAY_INITIALIZE: function (e) {
        (E = e.selectedGuildId), (h = void 0), f();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (E === t) return !1;
        g(E), g(t), null != t && (h = t), (E = t);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === d.default.getId() && p(t);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        return !0 !== n && p(t);
    },
    LOGOUT: function () {
        (E = null), (h = null);
    },
});
