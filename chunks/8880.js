"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153);
let l = { speechRate: 1, currentMessage: null },
    r = l;
class a extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        r = { ...l, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: n } = r;
        return null !== n && n.channelId === e && n.messageId === t;
    }
    get currentMessage() {
        return r.currentMessage;
    }
    get speechRate() {
        return r.speechRate;
    }
    getUserAgnosticState() {
        return r;
    }
}
let o = new a(
    s.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: n } = e;
                  r = { ...r, currentMessage: { messageId: t, channelId: n } };
              },
              STOP_SPEAKING: function () {
                  r = { ...r, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  r = { ...r, speechRate: e.speechRate };
              },
          },
);
