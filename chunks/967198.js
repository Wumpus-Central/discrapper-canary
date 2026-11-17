var i = n(855986),
    r = n(73153),
    a = n(212455),
    s = n(463347),
    l = n(334465),
    o = n(976860),
    d = n(46653),
    c = n(650048),
    u = n(71393),
    _ = n(652215);
let E = null,
    A = null,
    f = {};
function h(e) {
    return e === _.qxG || e === _.GAA;
}
function I() {
    (null == E || h(E) || null != u.A.getGuild(E) || null != a.A.getRequest(E) || (E = null),
        null == A || h(A) || null != u.A.getGuild(A) || null != a.A.getRequest(A) || (A = null),
        p(E));
}
function p(e) {
    null != e && (f[e] = Date.now());
}
function m(e) {
    let t = !1;
    return (delete f[e], A === e && ((A = null), (t = !0)), E === e && ((E = null), (0, o.bG)(_.BVt.ME), (t = !0)), t);
}
class g extends i.Ay.PersistedStore {
    static displayName = "SelectedGuildStore";
    static persistKey = "SelectedGuildStore";
    initialize(e) {
        (this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type),
            this.waitFor(d.default, c.A, u.A, a.A),
            (f = e?.selectedGuildTimestampMillis ?? {}),
            (E = e?.selectedGuildId ?? null),
            (A = e?.lastSelectedGuildId ?? null));
        let t = c.A.lastNonVoiceRoute,
            n = (0, l.B)(t, { path: _.BVt.CHANNEL(s.pv.guildId()) });
        (n?.params?.guildId, _.ME);
    }
    getState() {
        return { selectedGuildTimestampMillis: f, selectedGuildId: E, lastSelectedGuildId: A };
    }
    getGuildId() {
        return E;
    }
    getLastSelectedGuildId() {
        return A;
    }
    getLastSelectedTimestamp(e) {
        return E === e ? -1 : f[e];
    }
}
let T = new g(r.h, {
    CONNECTION_OPEN: I,
    OVERLAY_INITIALIZE: function (e) {
        ((E = e.selectedGuildId), (A = void 0), I());
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (E === t) return !1;
        (p(E), p(t), null != t && (A = t), (E = t));
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === d.default.getId() && m(t);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        return !0 !== n && m(t);
    },
    LOGOUT: function () {
        ((E = null), (A = null));
    },
});
n.d(t, {}, { A: T });
