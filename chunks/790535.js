"use strict";
n.d(t, { CH: () => y, jA: () => b, cy: () => D, av: () => v });
var i = n(66834),
    r = n(730852),
    a = n(401843),
    s = n(389234),
    l = n(652896),
    o = n(854492),
    d = n(616356),
    c = n(734057),
    u = n(71393),
    _ = n(576705),
    E = n(309010),
    A = n(993838),
    h = n(506774),
    I = n(228366),
    f = n(272355),
    p = n(280450),
    T = n(312006),
    m = n(516607);
class g extends f.A {
    _initialize() {
        I.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        I.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            if (null == e.channelId || e.userId !== p.default.getId() || (this.terminate(), h.w.get(m.zh, !1))) return;
            let t = E.Ay.getVoiceChannelId();
            null != t && e.channelId === t && T.Ay.isAudienceMember(e.userId, t) && (h.w.set(m.zh, !0), A.H2(t));
        });
    };
}
let S = new g();
var N = n(233993),
    C = n(967198),
    R = n(403362);
class O extends f.A {
    _initialize() {
        I.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            I.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        I.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            I.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, guildId: n } = e;
        if (null != t) {
            let e = c.A.getChannel(t);
            if (null == e || e.isGuildStageVoice()) return;
        }
        this.terminate(), this.handleDisconnectFromStageChannel(null == t ? null : (n ?? null));
    };
    handleDisconnectFromStageChannel = (e) => {
        let t = C.A.getGuildId();
        (0, o.A)([t, e].filter(R.Vq));
    };
    handleLogout = () => {
        this.terminate(), this.handleDisconnectFromStageChannel(null);
    };
}
let L = new O();
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (r) => {
        let a = c.A.getChannel(t);
        if (null != a) return D(a, n), r(a);
        await (0, o.A)([e]),
            await i.A.joinGuild(e, { lurker: !0 }),
            u.A.addConditionalChangeListener(() => {
                let e = c.A.getChannel(t);
                return null == e || (D(e), L.initialize(), r(e), !1);
            });
    });
}
function D(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = E.Ay.getVoiceChannelId();
    if (
        (!n && ((t = i), !_.A.can(N.Gk, e) || (A.j6(e.id) && t !== e.id && (A.W0(e, () => v(e, !0)), 1)))) ||
        (S.initialize(), r.default.selectVoiceChannel(e.id), (i = E.Ay.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let s = d.A.getAllApplicationStreamsForChannel(e.id).find((e) => !d.A.isStreamMarkedFull((0, l._z)(e)));
    return null != s && (0, a.A9)(s, { noFocus: !1 }), !0;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = E.Ay.getVoiceChannelId();
    (!i && r !== e.id && (0, s.H)(e) && A.E9(e, () => v(e, t, n, !0))) || (D(e, t) && b(e, r));
}
function b(e, t) {
    A.jA(e, t);
}
