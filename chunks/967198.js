"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    s = n(212455),
    a = n(463347),
    o = n(334465),
    l = n(976860),
    u = n(961350),
    c = n(650048),
    d = n(71393),
    _ = n(652215);
let f = null,
    p = null,
    h = {};
function E() {
    null != f && null == d.A.getGuild(f) && null == s.A.getRequest(f) && (f = null),
        null != p && null == d.A.getGuild(p) && null == s.A.getRequest(p) && (p = null),
        m(f);
}
function m(e) {
    null != e && (h[e] = Date.now());
}
function g(e) {
    let t = !1;
    return (
        delete h[e],
        p === e && ((p = null), (t = !0)),
        f === e && (d.A.getGuildsArray().find((t) => t.id !== e), (f = null), (0, l.bG)(_.BVt.ME), (t = !0)),
        t
    );
}
class A extends r.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(u.default, c.A, d.A, s.A),
            (h = e?.selectedGuildTimestampMillis ?? {}),
            (f = e?.selectedGuildId ?? null),
            (p = e?.lastSelectedGuildId ?? null);
        let t = c.A.lastNonVoiceRoute,
            n = (0, o.B)(t, { path: _.BVt.CHANNEL(a.pv.guildId()) });
        n?.params?.guildId, _.ME;
    }
    getState() {
        return { selectedGuildTimestampMillis: h, selectedGuildId: f, lastSelectedGuildId: p };
    }
    getGuildId() {
        return f;
    }
    getLastSelectedGuildId() {
        return p;
    }
    getLastSelectedTimestamp(e) {
        return f === e ? -1 : h[e];
    }
}
let I = new A(i.h, {
    CONNECTION_OPEN: E,
    OVERLAY_INITIALIZE: function (e) {
        (f = e.selectedGuildId), (p = void 0), E();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (f === t) return !1;
        m(f), m(t), null != t && (p = t), (f = t);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === u.default.getId() && g(t);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        return !0 !== n && g(t);
    },
    LOGOUT: function () {
        (f = null), (p = null);
    },
});
