"use strict";
n.d(t, { A: () => _ });
var r = n(506774),
    i = n(73153),
    s = n(272355),
    a = n(961350),
    o = n(309010),
    l = n(525002),
    u = n(312006),
    c = n(516607);
class d extends s.A {
    _initialize() {
        i.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        i.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            if (null == e.channelId || e.userId !== a.default.getId() || (this.terminate(), r.w.get(c.zh, !1))) return;
            let t = o.A.getVoiceChannelId();
            null == t || (e.channelId === t && u.Ay.isAudienceMember(e.userId, t) && (r.w.set(c.zh, !0), l.H(t)));
        });
    };
}
let _ = new d();
