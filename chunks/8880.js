t.d(a, { A: () => c });
var s = t(17928),
    l = t(73153);
let i = { speechRate: 1, currentMessage: null },
    h = i;
class n extends s.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        h = { ...i, ...(e ?? null) };
    }
    isSpeakingMessage(e, a) {
        let { currentMessage: t } = h;
        return null !== t && t.channelId === e && t.messageId === a;
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
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: a, channelId: t } = e;
                  h = { ...h, currentMessage: { messageId: a, channelId: t } };
              },
              STOP_SPEAKING: function () {
                  h = { ...h, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  h = { ...h, speechRate: e.speechRate };
              },
          },
);
