var n = s(855986),
    a = s(73153);
let i = { speechRate: 1, currentMessage: null },
    c = i;
class r extends n.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        c = { ...i, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: s } = c;
        return null !== s && s.channelId === e && s.messageId === t;
    }
    get currentMessage() {
        return c.currentMessage;
    }
    get speechRate() {
        return c.speechRate;
    }
    getUserAgnosticState() {
        return c;
    }
}
let h = new r(
    a.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: s } = e;
                  c = { ...c, currentMessage: { messageId: t, channelId: s } };
              },
              STOP_SPEAKING: function () {
                  c = { ...c, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  c = { ...c, speechRate: e.speechRate };
              },
          },
);
s.d(t, {}, { A: h });
