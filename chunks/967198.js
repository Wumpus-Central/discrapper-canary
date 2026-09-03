n.d(t, { A: () => m });
var i = n(17928),
    r = n(228366),
    a = n(212455),
    s = n(463347),
    l = n(334465),
    o = n(976860),
    d = n(280450),
    c = n(650048),
    u = n(71393),
    _ = n(652215);
let E = null,
    A = null,
    h = {};
function I() {
    null != E && null == u.A.getGuild(E) && null == a.A.getRequest(E) && (E = null),
        null != A && null == u.A.getGuild(A) && null == a.A.getRequest(A) && (A = null),
        f(E);
}
function f(e) {
    null != e && (h[e] = Date.now());
}
function p(e) {
    let t = !1;
    return delete h[e], A === e && ((A = null), (t = !0)), E === e && ((E = null), (0, o.bG)(_.BVt.ME), (t = !0)), t;
}
class T extends i.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(d.default, c.A, u.A, a.A),
            (h = e?.selectedGuildTimestampMillis ?? {}),
            (E = e?.selectedGuildId ?? null),
            (A = e?.lastSelectedGuildId ?? null);
        let t = c.A.lastNonVoiceRoute,
            n = (0, l.B)(t, { path: _.BVt.CHANNEL(s.pv.guildId()) });
        n?.params?.guildId, _.ME;
    }
    getState() {
        return { selectedGuildTimestampMillis: h, selectedGuildId: E, lastSelectedGuildId: A };
    }
    getGuildId() {
        return E;
    }
    getLastSelectedGuildId() {
        return A;
    }
    getLastSelectedTimestamp(e) {
        return E === e ? -1 : h[e];
    }
}
let m = new T(r.h, {
    CONNECTION_OPEN: I,
    OVERLAY_INITIALIZE: function (e) {
        (E = e.selectedGuildId), (A = void 0), I();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (E === t) return !1;
        f(E), f(t), null != t && (A = t), (E = t);
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
        (E = null), (A = null);
    },
});
