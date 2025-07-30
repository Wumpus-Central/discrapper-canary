(n.d(t, { ZP: () => M }), n(388685));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(592125),
    c = n(271383),
    u = n(485386),
    d = n(430824),
    f = n(594174),
    _ = n(979651),
    p = n(700785),
    h = n(146085),
    m = n(590415);
function g(e, t, n) {
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
let E = {},
    b = {
        speaker: !1,
        moderator: !1
    };
function y(e, t) {
    let n = _.Z.getVoiceStateForChannel(t, e);
    return (0, m.gf)(n) === m.xO.ON_STAGE;
}
function O(e, t, n) {
    return p.BT({
        permission: h.yP,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: u.Z.getUnsafeMutableRoles(t.id)
    });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = l.Z.getChannel(t),
        i = null == r ? void 0 : r.getGuildId(),
        a = d.Z.getGuild(i);
    return null != a && null != r && r.isGuildStageVoice()
        ? {
              speaker: y(e, t),
              moderator: n ? O(e, a, r) : null
          }
        : b;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == E[t] && (E[t] = {});
    let r = v(e, t, n);
    return ((E[t][e] = r), r);
}
function T(e, t) {
    var n;
    if (null == t) return !1;
    let r = l.Z.getChannel(t);
    return null != r && !!r.isGuildStageVoice() && (null == (n = E[t]) || delete n[e], !0);
}
function S(e, t) {
    for (let n in E) {
        let r = l.Z.getBasicChannel(n);
        null != r && r.guild_id === t && delete E[n][e];
    }
    return !0;
}
function A(e) {
    let t = Object.values(l.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete E[e.id];
    return t.length > 0;
}
function N(e) {
    let { channels: t } = e;
    for (let e of t) delete E[e.id];
}
function C(e) {
    let { guildId: t } = e;
    A(t);
}
function R(e) {
    let { guildId: t, user: n } = e;
    return null != n && null != t && S(n.id, t);
}
function P(e) {
    let { voiceStates: t } = e;
    return (
        !a().isEmpty(E) &&
        t.reduce((e, t) => {
            let { userId: n, channelId: r } = t;
            return T(n, r) || e;
        }, !1)
    );
}
function w(e) {
    return A(e.guildId);
}
function D() {
    E = {};
}
function L(e) {
    let { guild: t } = e;
    for (let e in E) {
        let n = l.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete E[e];
    }
}
class x extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.ZP, l.Z, d.Z, f.default, _.Z, u.Z);
    }
    isSpeaker(e, t) {
        return this.getPermissionsForUser(e, t).speaker;
    }
    isModerator(e, t) {
        var n;
        return null != (n = this.getPermissionsForUser(e, t, !0).moderator) && n;
    }
    isAudienceMember(e, t) {
        let n = this.getPermissionsForUser(e, t);
        return !n.speaker && !n.moderator;
    }
    getPermissionsForUser(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t) return b;
        let i = null == (n = E[t]) ? void 0 : n[e];
        if (null != i)
            if (r && null == i.moderator) return I(e, t, !0);
            else return i;
        return I(e, t, r);
    }
}
g(x, 'displayName', 'StageChannelRoleStore');
let M = new x(s.Z, {
    CHANNEL_UPDATES: N,
    CONNECTION_OPEN: D,
    GUILD_MEMBER_REMOVE: R,
    GUILD_MEMBER_UPDATE: R,
    GUILD_ROLE_UPDATE: C,
    PASSIVE_UPDATE_V2: w,
    VOICE_STATE_UPDATES: P,
    GUILD_CREATE: L,
    GUILD_DELETE: L
});
