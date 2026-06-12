"use strict";
n.d(t, { A: () => p });
var i = n(228366),
    r = n(439372),
    s = n(495544),
    a = n(131319),
    o = n(734057),
    l = n(309010),
    u = n(117549),
    c = n(652215);
function d() {
    !(function () {
        let e = l.A.getVoiceChannelId(),
            t = a.A.bitrate;
        if (null == e) return;
        let n = o.A.getChannel(e);
        null == n || (t !== n.bitrate && i.h.dispatch({ type: "SET_CHANNEL_BITRATE", bitrate: n.bitrate }));
    })(),
        (function () {
            let e = l.A.getVoiceChannelId(),
                t = u.A.mode;
            if (null == e) return;
            let n = o.A.getChannel(e);
            if (null == n) return;
            let r = n.videoQualityMode ?? c.K3c.AUTO;
            t !== r && i.h.dispatch({ type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: r });
        })();
}
function _(e) {
    let { channels: t } = e;
    for (let e of t) l.A.getVoiceChannelId() === e.id && d();
}
function h(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
        s.default.getSessionId() === e.sessionId && d();
    });
}
class f extends r.A {
    actions = { CHANNEL_UPDATES: _, VOICE_STATE_UPDATES: h };
}
let p = new f();
