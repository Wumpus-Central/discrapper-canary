n.d(t, { ZP: () => L }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    f = n(979651),
    p = n(700785),
    _ = n(146085),
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
function b(e, t, n) {
    return p.BT({
        permission: _.yP,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: u.Z.getRoles(t.id)
    });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = l.Z.getChannel(t),
        i = null == r ? void 0 : r.getGuildId(),
        o = u.Z.getGuild(i);
    return null != o && null != r && r.isGuildStageVoice()
        ? {
              speaker: v(e, t),
              moderator: n ? b(e, o, r) : null
          }
        : E;
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == g[t] && (g[t] = {});
    let r = y(e, t, n);
    return (g[t][e] = r), r;
}
function S(e, t) {
    var n;
    if (null == t) return !1;
    let r = l.Z.getChannel(t);
    return !!(null != r && r.isGuildStageVoice()) && (null === (n = g[t]) || void 0 === n || delete n[e], !0);
}
function I(e, t) {
    for (let n in g) {
        let r = l.Z.getBasicChannel(n);
        null != r && r.guild_id === t && delete g[n][e];
    }
    return !0;
}
function T(e) {
    let t = Object.values(l.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete g[e.id];
    return t.length > 0;
}
function N(e) {
    let { channels: t } = e;
    for (let e of t) delete g[e.id];
}
function A(e) {
    let { guildId: t } = e;
    T(t);
}
function C(e) {
    let { guildId: t, user: n } = e;
    return null != n && null != t && I(n.id, t);
}
function R(e) {
    let { voiceStates: t } = e;
    return (
        !o().isEmpty(g) &&
        t.reduce((e, t) => {
            let { userId: n, channelId: r } = t;
            return S(n, r) || e;
        }, !1)
    );
}
function P(e) {
    return T(e.guildId);
}
function w() {
    g = {};
}
function D(e) {
    let { guild: t } = e;
    for (let e in g) {
        let n = l.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete g[e];
    }
}
class x extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.ZP, l.Z, u.Z, d.default, f.Z);
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
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t) return E;
        let i = null === (n = g[t]) || void 0 === n ? void 0 : n[e];
        return null != i ? (r && null == i.moderator ? O(e, t, !0) : i) : O(e, t, r);
    }
}
m(x, 'displayName', 'StageChannelRoleStore');
let L = new x(s.Z, {
    CHANNEL_UPDATES: N,
    CONNECTION_OPEN: w,
    GUILD_MEMBER_REMOVE: C,
    GUILD_MEMBER_UPDATE: C,
    GUILD_ROLE_UPDATE: A,
    PASSIVE_UPDATE_V2: P,
    VOICE_STATE_UPDATES: R,
    GUILD_CREATE: D,
    GUILD_DELETE: D
});
