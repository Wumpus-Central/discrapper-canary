var i,
    a,
    o = r(47120);
var s = r(724458);
var l = r(392711),
    u = r.n(l),
    c = r(442837),
    d = r(570140),
    f = r(592125),
    p = r(271383),
    h = r(430824),
    _ = r(594174),
    m = r(979651),
    g = r(700785),
    E = r(146085),
    v = r(590415);
function y(e, n, r) {
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
!(function (e) {
    (e.SPEAKER = 'speaker'), (e.MODERATOR = 'moderator');
})(i || (i = {}));
let b = {},
    I = {
        speaker: !1,
        moderator: !1
    };
function T(e, n) {
    let r = m.Z.getVoiceStateForChannel(n, e);
    return (0, v.gf)(r) === v.xO.ON_STAGE;
}
function S(e, n, r) {
    return g.BT({
        permission: E.yP,
        user: e,
        context: n,
        overwrites: r.permissionOverwrites,
        roles: h.Z.getRoles(n.id)
    });
}
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = f.Z.getChannel(n),
        a = null == i ? void 0 : i.getGuildId(),
        o = h.Z.getGuild(a);
    return null != o && null != i && i.isGuildStageVoice()
        ? {
              speaker: T(e, n),
              moderator: r ? S(e, o, i) : null
          }
        : I;
}
function C(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == b[n] && (b[n] = {});
    let i = A(e, n, r);
    return (b[n][e] = i), i;
}
function N(e, n) {
    var r;
    if (null == n) return !1;
    let i = f.Z.getChannel(n);
    return !!(null != i && i.isGuildStageVoice()) && (null === (r = b[n]) || void 0 === r || delete r[e], !0);
}
function R(e, n) {
    for (let r in b) {
        let i = f.Z.getBasicChannel(r);
        if (null != i && i.guild_id === n) delete b[r][e];
    }
    return !0;
}
function O(e) {
    let n = Object.values(f.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of n) delete b[e.id];
    return n.length > 0;
}
function D(e) {
    let { channels: n } = e;
    for (let e of n) delete b[e.id];
}
function x(e) {
    let { guildId: n } = e;
    O(n);
}
function L(e) {
    let { guildId: n, user: r } = e;
    return null != r && null != n && R(r.id, n);
}
function w(e) {
    let { voiceStates: n } = e;
    return (
        !u().isEmpty(b) &&
        n.reduce((e, n) => {
            let { userId: r, channelId: i } = n;
            return N(r, i) || e;
        }, !1)
    );
}
function P(e) {
    return O(e.guildId);
}
function M() {
    b = {};
}
function k(e) {
    let { guild: n } = e;
    for (let e in b) {
        let r = f.Z.getBasicChannel(e);
        (null == r || r.guild_id === n.id) && delete b[e];
    }
}
class U extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, f.Z, h.Z, _.default, m.Z);
    }
    isSpeaker(e, n) {
        return this.getPermissionsForUser(e, n).speaker;
    }
    isModerator(e, n) {
        var r;
        return null !== (r = this.getPermissionsForUser(e, n, !0).moderator) && void 0 !== r && r;
    }
    isAudienceMember(e, n) {
        let r = this.getPermissionsForUser(e, n);
        return !r.speaker && !r.moderator;
    }
    getPermissionsForUser(e, n) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == n) return I;
        let a = null === (r = b[n]) || void 0 === r ? void 0 : r[e];
        if (null != a) return i && null == a.moderator ? C(e, n, !0) : a;
        return C(e, n, i);
    }
}
y(U, 'displayName', 'StageChannelRoleStore'),
    (n.ZP = new U(d.Z, {
        CHANNEL_UPDATES: D,
        CONNECTION_OPEN: M,
        GUILD_MEMBER_REMOVE: L,
        GUILD_MEMBER_UPDATE: L,
        GUILD_ROLE_UPDATE: x,
        PASSIVE_UPDATE_V2: P,
        VOICE_STATE_UPDATES: w,
        GUILD_CREATE: k,
        GUILD_DELETE: k
    }));
