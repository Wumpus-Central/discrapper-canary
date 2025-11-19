n.d(t, { ZP: () => k }), n(388685);
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
    m = n(590415),
    g = n(430104);
function E(e, t, n) {
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
let b = {},
    y = {
        speaker: !1,
        moderator: !1,
    };
function O(e, t) {
    let n = _.Z.getVoiceStateForChannel(t, e);
    return (0, m.gf)(n) === m.xO.ON_STAGE;
}
function v(e, t, n) {
    return p.BT({
        permission: h.yP,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: u.Z.getUnsafeMutableRoles(t.id),
    });
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = l.Z.getChannel(t),
        i = null == r ? void 0 : r.getGuildId(),
        a = d.Z.getGuild(i);
    return null != a && null != r && r.isGuildStageVoice()
        ? {
              speaker: O(e, t),
              moderator: n ? v(e, a, r) : null,
          }
        : y;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == b[t] && (b[t] = {});
    let r = I(e, t, n);
    return (b[t][e] = r), r;
}
function S(e, t) {
    var n;
    if (null == t) return !1;
    let r = l.Z.getChannel(t);
    return null != r && !!r.isGuildStageVoice() && (null == (n = b[t]) || delete n[e], !0);
}
function A(e, t) {
    for (let n in b) {
        let r = l.Z.getBasicChannel(n);
        null != r && r.guild_id === t && delete b[n][e];
    }
    return !0;
}
function C(e) {
    let t = Object.values(l.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete b[e.id];
    return t.length > 0;
}
function N(e) {
    let { channels: t } = e;
    for (let e of t) delete b[e.id];
}
function R(e) {
    let { guildId: t } = e;
    C(t);
}
function P(e) {
    let { guildId: t, user: n } = e;
    return null != n && null != t && A(n.id, t);
}
function D(e) {
    let { voiceStates: t } = e;
    return (
        !a().isEmpty(b) &&
        t.reduce((e, t) => {
            let { userId: n, channelId: r } = t;
            return S(n, r) || e;
        }, !1)
    );
}
function w(e) {
    return C(e.guildId);
}
function L() {
    b = {};
}
function x(e) {
    let { guild: t } = e;
    for (let e in b) {
        let n = l.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete b[e];
    }
}
class M extends (r = o.ZP.Store) {
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
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t || (e === (null == (n = f.default.getCurrentUser()) ? void 0 : n.id) && (0, g.NE)()))
            return y;
        let a = null == (r = b[t]) ? void 0 : r[e];
        if (null != a)
            if (i && null == a.moderator) return T(e, t, !0);
            else return a;
        return T(e, t, i);
    }
}
E(M, "displayName", "StageChannelRoleStore");
let k = new M(s.Z, {
    CHANNEL_UPDATES: N,
    CONNECTION_OPEN: L,
    GUILD_MEMBER_REMOVE: P,
    GUILD_MEMBER_UPDATE: P,
    GUILD_ROLE_UPDATE: R,
    PASSIVE_UPDATE_V2: w,
    VOICE_STATE_UPDATES: D,
    GUILD_CREATE: x,
    GUILD_DELETE: x,
});
