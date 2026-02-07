"use strict";
s.d(t, { A: () => c });
var n = s(311907),
    i = s(73153);
let r = { speechRate: 1, currentMessage: null },
    a = r;
class l extends n.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        a = { ...r, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: s } = a;
        return null !== s && s.channelId === e && s.messageId === t;
    }
    get currentMessage() {
        return a.currentMessage;
    }
    get speechRate() {
        return a.speechRate;
    }
    getUserAgnosticState() {
        return a;
    }
}
let c = new l(
    i.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: s } = e;
                  a = { ...a, currentMessage: { messageId: t, channelId: s } };
              },
              STOP_SPEAKING: function () {
                  a = { ...a, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  a = { ...a, speechRate: e.speechRate };
              },
          },
);
