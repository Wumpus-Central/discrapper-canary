e.d(t, { A: () => h });
var s = e(17928),
    l = e(73153);
let i = { speechRate: 1, currentMessage: null },
    n = i;
class c extends s.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(a) {
        n = { ...i, ...(a ?? null) };
    }
    isSpeakingMessage(a, t) {
        let { currentMessage: e } = n;
        return null !== e && e.channelId === a && e.messageId === t;
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
let h = new c(
    l.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (a) {
                  let { messageId: t, channelId: e } = a;
                  n = { ...n, currentMessage: { messageId: t, channelId: e } };
              },
              STOP_SPEAKING: function () {
                  n = { ...n, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (a) {
                  n = { ...n, speechRate: a.speechRate };
              },
          },
);
