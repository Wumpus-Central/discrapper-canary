"use strict";
n.d(t, { A: () => h });
var i = n(228366),
    r = n(439372),
    a = n(280450),
    s = n(131319),
    l = n(734057),
    o = n(309010),
    d = n(117549),
    c = n(652215);
function u() {
    !(function () {
        let e = o.Ay.getVoiceChannelId(),
            t = s.A.bitrate;
        if (null == e) return;
        let n = l.A.getChannel(e);
        null == n || (t !== n.bitrate && i.h.dispatch({ type: "SET_CHANNEL_BITRATE", bitrate: n.bitrate }));
    })(),
        (function () {
            let e = o.Ay.getVoiceChannelId(),
                t = d.A.mode;
            if (null == e) return;
            let n = l.A.getChannel(e);
            if (null == n) return;
            let r = n.videoQualityMode ?? c.K3c.AUTO;
            t !== r && i.h.dispatch({ type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: r });
        })();
}
function _(e) {
    let { channels: t } = e;
    for (let e of t) o.Ay.getVoiceChannelId() === e.id && u();
}
function E(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
        a.default.getSessionId() === e.sessionId && u();
    });
}
class A extends r.A {
    actions = { CHANNEL_UPDATES: _, VOICE_STATE_UPDATES: E };
}
let h = new A();
