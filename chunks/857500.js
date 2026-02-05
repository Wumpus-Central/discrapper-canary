"use strict";
n.d(t, { A: () => g });
var r = n(73153),
    i = n(439372),
    a = n(961350),
    s = n(131319),
    o = n(734057),
    l = n(309010),
    u = n(117549),
    c = n(652215);
function d() {
    let e = l.A.getVoiceChannelId(),
        t = s.A.bitrate;
    if (null == e) return;
    let n = o.A.getChannel(e);
    null == n || (t !== n.bitrate && r.h.dispatch({ type: "SET_CHANNEL_BITRATE", bitrate: n.bitrate }));
}
function _() {
    let e = l.A.getVoiceChannelId(),
        t = u.A.mode;
    if (null == e) return;
    let n = o.A.getChannel(e);
    if (null == n) return;
    let i = n.videoQualityMode ?? c.K3c.AUTO;
    t !== i && r.h.dispatch({ type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: i });
}
function f() {
    d(), _();
}
function p(e) {
    let { channels: t } = e;
    for (let e of t) l.A.getVoiceChannelId() === e.id && f();
}
function h(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
        a.default.getSessionId() === e.sessionId && f();
    });
}
class m extends i.A {
    actions = { CHANNEL_UPDATES: p, VOICE_STATE_UPDATES: h };
}
let g = new m();
