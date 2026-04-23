"use strict";
n.d(t, { A: () => m });
var i = n(228366),
    r = n(439372),
    s = n(495544),
    a = n(131319),
    o = n(734057),
    l = n(309010),
    d = n(117549),
    _ = n(652215);
function u() {
    !(function () {
        let e = l.A.getVoiceChannelId(),
            t = a.A.bitrate;
        if (null == e) return;
        let n = o.A.getChannel(e);
        null == n || (t !== n.bitrate && i.h.dispatch({ type: "SET_CHANNEL_BITRATE", bitrate: n.bitrate }));
    })(),
        (function () {
            let e = l.A.getVoiceChannelId(),
                t = d.A.mode;
            if (null == e) return;
            let n = o.A.getChannel(e);
            if (null == n) return;
            let r = n.videoQualityMode ?? _.K3c.AUTO;
            t !== r && i.h.dispatch({ type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: r });
        })();
}
function c(e) {
    let { channels: t } = e;
    for (let e of t) l.A.getVoiceChannelId() === e.id && u();
}
function E(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
        s.default.getSessionId() === e.sessionId && u();
    });
}
class h extends r.A {
    actions = { CHANNEL_UPDATES: c, VOICE_STATE_UPDATES: E };
}
let m = new h();
