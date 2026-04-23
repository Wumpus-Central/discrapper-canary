n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366);
let s = { speechRate: 1, currentMessage: null },
    r = s;
class a extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        r = { ...s, ...(e ?? null) };
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
    l.h,
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
