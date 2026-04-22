"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    s = n(212455),
    a = n(463347),
    o = n(334465),
    l = n(976860),
    u = n(961350),
    d = n(650048),
    c = n(71393),
    _ = n(652215);
let f = null,
    E = null,
    h = {};
function p() {
    null != f && null == c.A.getGuild(f) && null == s.A.getRequest(f) && (f = null),
        null != E && null == c.A.getGuild(E) && null == s.A.getRequest(E) && (E = null),
        m(f);
}
function m(e) {
    null != e && (h[e] = Date.now());
}
function g(e) {
    let t = !1;
    return (
        delete h[e],
        E === e && ((E = null), (t = !0)),
        f === e && (c.A.getGuildsArray().find((t) => t.id !== e), (f = null), (0, l.bG)(_.BVt.ME), (t = !0)),
        t
    );
}
class A extends r.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(u.default, d.A, c.A, s.A),
            (h = e?.selectedGuildTimestampMillis ?? {}),
            (f = e?.selectedGuildId ?? null),
            (E = e?.lastSelectedGuildId ?? null);
        let t = d.A.lastNonVoiceRoute,
            n = (0, o.B)(t, { path: _.BVt.CHANNEL(a.pv.guildId()) });
        n?.params?.guildId, _.ME;
    }
    getState() {
        return { selectedGuildTimestampMillis: h, selectedGuildId: f, lastSelectedGuildId: E };
    }
    getGuildId() {
        return f;
    }
    getLastSelectedGuildId() {
        return E;
    }
    getLastSelectedTimestamp(e) {
        return f === e ? -1 : h[e];
    }
}
let I = new A(i.h, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: function (e) {
        (f = e.selectedGuildId), (E = void 0), p();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (f === t) return !1;
        m(f), m(t), null != t && (E = t), (f = t);
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
        (f = null), (E = null);
    },
});
