a.d(e, { A: () => c });
var s = a(17928),
    l = a(228366);
let i = { speechRate: 1, currentMessage: null },
    h = i;
class n extends s.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(t) {
        h = { ...i, ...(t ?? null) };
    }
    isSpeakingMessage(t, e) {
        let { currentMessage: a } = h;
        return null !== a && a.channelId === t && a.messageId === e;
    }
    get currentMessage() {
        return h.currentMessage;
    }
    get speechRate() {
        return h.speechRate;
    }
    getUserAgnosticState() {
        return h;
    }
}
let c = new n(
    l.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (t) {
                  let { messageId: e, channelId: a } = t;
                  h = { ...h, currentMessage: { messageId: e, channelId: a } };
              },
              STOP_SPEAKING: function () {
                  h = { ...h, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (t) {
                  h = { ...h, speechRate: t.speechRate };
              },
          },
);
