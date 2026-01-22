n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(272355),
    s = n(961350),
    o = n(734057),
    c = n(528767),
    u = n(105530),
    d = n(652215);

function p(e, t, n) {
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
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class h extends a.A {
    _initialize() {
        l.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        l.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            p(this, "handleVoiceStateUpdates", (e) => {
                var t;
                let { voiceStates: l } = e,
                    a = s.default.getId(),
                    h = null == (t = c.A.getSession()) ? void 0 : t.sessionId,
                    A = l.find((e) => e.userId === a && e.sessionId === h);
                if (null == A) return;
                let g = A.channelId;
                if (null == g) {
                    (0, i.kBI)(f) && (0, i.OoC)(f);
                    return;
                }
                let m = o.A.getChannel(g);
                if (!(null == m ? void 0 : m.isGuildStageVoice())) return;
                let b = (0, u.eY)(A) === u.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (null != m && b) {
                    if ((0, i.kBI)(f)) return;
                    (0, i.mMO)(
                        async () => {
                            let { default: e } = await n.e("90037").then(n.bind(n, 427412));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                                    p(e, t, n[t]);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (i = i =
                                        {
                                            channel: m,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n),
                                );
                            };
                        },
                        {
                            modalKey: f,
                            onCloseRequest: d.FXj,
                        },
                    );
                }
            });
    }
}
let A = new h();
