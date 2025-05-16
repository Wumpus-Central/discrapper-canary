n.d(t, { default: () => _ });
var o = n(255367);
n(73800);
var i = n(990547),
    r = n(481060),
    a = n(957115),
    l = n(891802),
    s = n(332664),
    c = n(774378),
    u = n(882542),
    d = n(981631),
    b = n(531578),
    p = n(388032);
let m = [c.b.OTHER];
function _(e) {
    let { onClose: t, transitionState: _, analyticsData: f } = e,
        { showVibesHoneypot: h } = (0, l.X)({ location: 'VoiceCallFeedback' }),
        O = p.intl.string(p.t.Ss6tlZ),
        g = p.intl.string(p.t.tLi4cX);
    return (0, o.jsx)(s.Z, {
        modalType: 'voice',
        header: O,
        body: g,
        impression: {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: f.rtc_connection_id,
                media_session_id: f.media_session_id
            }
        },
        problemTitle: p.intl.string(p.t.FJmoxM),
        problems: (0, c.Z)({
            isMobile: !1,
            showVibesHoneypot: h
        }),
        freeformNeededProblems: m,
        onSubmit: function (e) {
            var t, i;
            let { rating: l, problem: s, dontShowAgain: c, feedback: m } = e;
            c &&
                (0, a.U)({
                    feedbackType: b.nw.VOICE,
                    location: 'VoiceCallFeedbackModal'
                }),
                null != l &&
                    ((0, u.Z)(d.rMx.CALL_REPORT_PROBLEM, {
                        rating: l,
                        reasonCode: null != (t = null == s ? void 0 : s.code) ? t : null,
                        reasonDescription: null != (i = null == s ? void 0 : s.value) ? i : null,
                        feedback: m,
                        analyticsData: f
                    }),
                    null != s &&
                        (0, r.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                o = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (o = o.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                o.forEach(function (t) {
                                                    var o;
                                                    (o = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: o,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = o);
                                                });
                                        }
                                        return e;
                                    })({ body: p.intl.string(p.t['d9+vQ0']) }, t)
                                );
                        }));
        },
        onClose: t,
        transitionState: _,
        otherKey: c.b.OTHER
    });
}
