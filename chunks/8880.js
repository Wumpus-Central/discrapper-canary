n.d(t, {
    A: () => p,
});
var r,
    l = n(311907),
    i = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = {
        speechRate: 1,
        currentMessage: null,
    },
    u = c;
class d extends (r = l.Ay.DeviceSettingsStore) {
    initialize(e) {
        u = a({}, c, null != e ? e : null);
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: n } = u;
        return null !== n && n.channelId === e && n.messageId === t;
    }
    get currentMessage() {
        return u.currentMessage;
    }
    get speechRate() {
        return u.speechRate;
    }
    getUserAgnosticState() {
        return u;
    }
}
s(d, "displayName", "TTSStore"), s(d, "persistKey", "TTSStore"), s(d, "migrations", []);
let p = new d(
    i.h,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: n } = e;
                  u = o(a({}, u), {
                      currentMessage: {
                          messageId: t,
                          channelId: n,
                      },
                  });
              },
              STOP_SPEAKING: function () {
                  u = o(a({}, u), {
                      currentMessage: null,
                  });
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  u = o(a({}, u), {
                      speechRate: e.speechRate,
                  });
              },
          },
);
