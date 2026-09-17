a.d(t, { A: () => n });
var s = a(17928),
    l = a(228366);
let i = { speechRate: 1, currentMessage: null },
    h = i;
class c extends s.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        h = { ...i, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: a } = h;
        return null !== a && a.channelId === e && a.messageId === t;
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
let n = new c(
    l.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: a } = e;
                  h = { ...h, currentMessage: { messageId: t, channelId: a } };
              },
              STOP_SPEAKING: function () {
                  h = { ...h, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  h = { ...h, speechRate: e.speechRate };
              },
          },
);
