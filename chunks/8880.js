a.d(t, { A: () => n });
var s = a(17928),
    l = a(228366);
let i = { speechRate: 1, currentMessage: null },
    c = i;
class h extends s.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        c = { ...i, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: a } = c;
        return null !== a && a.channelId === e && a.messageId === t;
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
let n = new h(
    l.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: a } = e;
                  c = { ...c, currentMessage: { messageId: t, channelId: a } };
              },
              STOP_SPEAKING: function () {
                  c = { ...c, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  c = { ...c, speechRate: e.speechRate };
              },
          },
);
