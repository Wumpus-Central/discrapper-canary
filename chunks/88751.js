n.d(t, { ZP: () => w }), n(47120), n(724458);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(592125),
    u = n(271383),
    c = n(430824),
    d = n(594174),
    f = n(979651),
    _ = n(700785),
    p = n(146085),
    h = n(590415);
function m(e, t, n) {
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
let g = {},
    E = {
        speaker: !1,
        moderator: !1
    };
function v(e, t) {
    let n = f.Z.getVoiceStateForChannel(t, e);
    return (0, h.gf)(n) === h.xO.ON_STAGE;
}
function y(e, t, n) {
    return _.BT({
        permission: p.yP,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: c.Z.getRoles(t.id)
    });
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = l.Z.getChannel(t),
        r = null == i ? void 0 : i.getGuildId(),
        a = c.Z.getGuild(r);
    return null != a && null != i && i.isGuildStageVoice()
        ? {
              speaker: v(e, t),
              moderator: n ? y(e, a, i) : null
          }
        : E;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == g[t] && (g[t] = {});
    let i = I(e, t, n);
    return (g[t][e] = i), i;
}
function b(e, t) {
    var n;
    if (null == t) return !1;
    let i = l.Z.getChannel(t);
    return !!(null != i && i.isGuildStageVoice()) && (null === (n = g[t]) || void 0 === n || delete n[e], !0);
}
function S(e, t) {
    for (let n in g) {
        let i = l.Z.getBasicChannel(n);
        null != i && i.guild_id === t && delete g[n][e];
    }
    return !0;
}
function A(e) {
    let t = Object.values(l.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete g[e.id];
    return t.length > 0;
}
function N(e) {
    let { channels: t } = e;
    for (let e of t) delete g[e.id];
}
function C(e) {
    let { guildId: t } = e;
    A(t);
}
function R(e) {
    let { guildId: t, user: n } = e;
    return null != n && null != t && S(n.id, t);
}
function O(e) {
    let { voiceStates: t } = e;
    return (
        !a().isEmpty(g) &&
        t.reduce((e, t) => {
            let { userId: n, channelId: i } = t;
            return b(n, i) || e;
        }, !1)
    );
}
function D(e) {
    return A(e.guildId);
}
function x() {
    g = {};
}
function L(e) {
    let { guild: t } = e;
    for (let e in g) {
        let n = l.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete g[e];
    }
}
class P extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, l.Z, c.Z, d.default, f.Z);
    }
    isSpeaker(e, t) {
        return this.getPermissionsForUser(e, t).speaker;
    }
    isModerator(e, t) {
        var n;
        return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n;
    }
    isAudienceMember(e, t) {
        let n = this.getPermissionsForUser(e, t);
        return !n.speaker && !n.moderator;
    }
    getPermissionsForUser(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t) return E;
        let r = null === (n = g[t]) || void 0 === n ? void 0 : n[e];
        return null != r ? (i && null == r.moderator ? T(e, t, !0) : r) : T(e, t, i);
    }
}
m(P, 'displayName', 'StageChannelRoleStore');
let w = new P(o.Z, {
    CHANNEL_UPDATES: N,
    CONNECTION_OPEN: x,
    GUILD_MEMBER_REMOVE: R,
    GUILD_MEMBER_UPDATE: R,
    GUILD_ROLE_UPDATE: C,
    PASSIVE_UPDATE_V2: D,
    VOICE_STATE_UPDATES: O,
    GUILD_CREATE: L,
    GUILD_DELETE: L
});
