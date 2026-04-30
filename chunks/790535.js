"use strict";
n.d(t, { CH: () => O, jA: () => D, cy: () => R, av: () => b });
var i = n(66834),
    r = n(730852),
    s = n(401843),
    a = n(389234),
    o = n(854492),
    l = n(616356),
    u = n(734057),
    c = n(71393),
    d = n(576705),
    _ = n(309010),
    f = n(993838),
    h = n(506774),
    p = n(228366),
    E = n(272355),
    m = n(495544),
    g = n(312006),
    A = n(516607);
class I extends E.A {
    _initialize() {
        p.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        p.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            if (null == e.channelId || e.userId !== m.default.getId() || (this.terminate(), h.w.get(A.zh, !1))) return;
            let t = _.A.getVoiceChannelId();
            null != t && e.channelId === t && g.Ay.isAudienceMember(e.userId, t) && (h.w.set(A.zh, !0), f.H2(t));
        });
    };
}
let T = new I();
var S = n(233993),
    N = n(967198),
    y = n(403362);
class C extends E.A {
    _initialize() {
        p.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            p.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        p.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            p.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, guildId: n } = e;
        if (null != t) {
            let e = u.A.getChannel(t);
            if (null == e || e.isGuildStageVoice()) return;
        }
        this.terminate(), this.handleDisconnectFromStageChannel(null == t ? null : (n ?? null));
    };
    handleDisconnectFromStageChannel = (e) => {
        let t = N.A.getGuildId();
        (0, o.A)([t, e].filter(y.Vq));
    };
    handleLogout = () => {
        this.terminate(), this.handleDisconnectFromStageChannel(null);
    };
}
let v = new C();
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (r) => {
        let s = u.A.getChannel(t);
        if (null != s) return R(s, n), r(s);
        await (0, o.A)([e]),
            await i.A.joinGuild(e, { lurker: !0 }),
            c.A.addConditionalChangeListener(() => {
                let e = u.A.getChannel(t);
                return null == e || (R(e), v.initialize(), r(e), !1);
            });
    });
}
function R(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = _.A.getVoiceChannelId();
    if (
        (!n && ((t = i), !d.A.can(S.Gk, e) || (f.j6(e.id) && t !== e.id && (f.W0(e, () => b(e, !0)), 1)))) ||
        (T.initialize(), r.default.selectVoiceChannel(e.id), (i = _.A.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let a = l.A.getAllApplicationStreamsForChannel(e.id);
    return a.length > 0 && (0, s.A9)(a[0], { noFocus: !1 }), !0;
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = _.A.getVoiceChannelId();
    (!i && r !== e.id && (0, a.H)(e) && f.E9(e, () => b(e, t, n, !0))) || (R(e, t) && D(e, r));
}
function D(e, t) {
    f.jA(e, t);
}
