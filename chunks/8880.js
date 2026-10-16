a.d(t, { A: () => c });
var s = a(17928),
    l = a(73153);
let i = { speechRate: 1, currentMessage: null },
    n = i;
class h extends s.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        n = { ...i, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: a } = n;
        return null !== a && a.channelId === e && a.messageId === t;
    }
    get currentMessage() {
        return n.currentMessage;
    }
    get speechRate() {
        return n.speechRate;
    }
    getUserAgnosticState() {
        return n;
    }
}
let c = new h(
    l.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: a } = e;
                  n = { ...n, currentMessage: { messageId: t, channelId: a } };
              },
              STOP_SPEAKING: function () {
                  n = { ...n, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  n = { ...n, speechRate: e.speechRate };
              },
          },
);
