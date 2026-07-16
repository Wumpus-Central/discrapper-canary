"use strict";
n.d(t, { CH: () => L, jA: () => v, cy: () => y, av: () => D });
var i = n(66834),
    r = n(730852),
    a = n(401843),
    s = n(389234),
    l = n(271004),
    o = n(616356),
    d = n(734057),
    c = n(71393),
    u = n(576705),
    _ = n(309010),
    E = n(993838),
    A = n(506774),
    h = n(228366),
    I = n(272355),
    f = n(280450),
    p = n(312006),
    T = n(516607);
class m extends I.A {
    _initialize() {
        h.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        h.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            if (null == e.channelId || e.userId !== f.default.getId() || (this.terminate(), A.w.get(T.zh, !1))) return;
            let t = _.Ay.getVoiceChannelId();
            null != t && e.channelId === t && p.Ay.isAudienceMember(e.userId, t) && (A.w.set(T.zh, !0), E.H2(t));
        });
    };
}
let g = new m();
var S = n(233993),
    N = n(967198),
    C = n(403362);
class R extends I.A {
    _initialize() {
        h.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            h.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        h.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            h.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, guildId: n } = e;
        if (null != t) {
            let e = d.A.getChannel(t);
            if (null == e || e.isGuildStageVoice()) return;
        }
        this.terminate(), this.handleDisconnectFromStageChannel(null == t ? null : (n ?? null));
    };
    handleDisconnectFromStageChannel = (e) => {
        let t = N.A.getGuildId();
        (0, l.As)([t, e].filter(C.Vq));
    };
    handleLogout = () => {
        this.terminate(), this.handleDisconnectFromStageChannel(null);
    };
}
let O = new R();
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (r) => {
        let a = d.A.getChannel(t);
        if (null != a) return y(a, n), r(a);
        await (0, l.As)([e]),
            await i.A.joinGuild(e, { lurker: !0 }),
            c.A.addConditionalChangeListener(() => {
                let e = d.A.getChannel(t);
                return null == e || (y(e), O.initialize(), r(e), !1);
            });
    });
}
function y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = _.Ay.getVoiceChannelId();
    if (
        (!n && ((t = i), !u.A.can(S.Gk, e) || (E.j6(e.id) && t !== e.id && (E.W0(e, () => D(e, !0)), 1)))) ||
        (g.initialize(), r.default.selectVoiceChannel(e.id), (i = _.Ay.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let s = o.A.getAllApplicationStreamsForChannel(e.id);
    return s.length > 0 && (0, a.A9)(s[0], { noFocus: !1 }), !0;
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = _.Ay.getVoiceChannelId();
    (!i && r !== e.id && (0, s.H)(e) && E.E9(e, () => D(e, t, n, !0))) || (y(e, t) && v(e, r));
}
function v(e, t) {
    E.jA(e, t);
}
