"use strict";
n.d(t, { CH: () => y, jA: () => L, cy: () => v, av: () => D });
var i = n(686956),
    r = n(956793),
    s = n(401843),
    a = n(389234),
    o = n(854492),
    l = n(616356),
    d = n(734057),
    _ = n(71393),
    u = n(576705),
    c = n(309010),
    E = n(993838),
    h = n(506774),
    m = n(228366),
    f = n(272355),
    g = n(495544),
    p = n(312006),
    A = n(516607);
class I extends f.A {
    _initialize() {
        m.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        m.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            if (null == e.channelId || e.userId !== g.default.getId() || (this.terminate(), h.w.get(A.zh, !1))) return;
            let t = c.A.getVoiceChannelId();
            null != t && e.channelId === t && p.Ay.isAudienceMember(e.userId, t) && (h.w.set(A.zh, !0), E.H2(t));
        });
    };
}
let T = new I();
var S = n(233993),
    N = n(967198),
    C = n(403362);
class R extends f.A {
    _initialize() {
        m.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            m.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        m.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            m.h.unsubscribe("LOGOUT", this.handleLogout);
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
        (0, o.A)([t, e].filter(C.Vq));
    };
    handleLogout = () => {
        this.terminate(), this.handleDisconnectFromStageChannel(null);
    };
}
let O = new R();
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (r) => {
        let s = d.A.getChannel(t);
        if (null != s) return v(s, n), r(s);
        await (0, o.A)([e]),
            await i.A.joinGuild(e, { lurker: !0 }),
            _.A.addConditionalChangeListener(() => {
                let e = d.A.getChannel(t);
                return null == e || (v(e), O.initialize(), r(e), !1);
            });
    });
}
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = c.A.getVoiceChannelId();
    if (
        (!n && ((t = i), !u.A.can(S.Gk, e) || (E.j6(e.id) && t !== e.id && (E.W0(e, () => D(e, !0)), 1)))) ||
        (T.initialize(), r.default.selectVoiceChannel(e.id), (i = c.A.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let a = l.A.getAllApplicationStreamsForChannel(e.id);
    return a.length > 0 && (0, s.A9)(a[0], { noFocus: !1 }), !0;
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = c.A.getVoiceChannelId();
    (!i && r !== e.id && (0, a.H)(e) && E.E9(e, () => D(e, t, n, !0))) || (v(e, t) && L(e, r));
}
function L(e, t) {
    E.jA(e, t);
}
