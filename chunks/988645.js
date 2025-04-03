n.d(t, { default: () => h });
var o = n(200651);
n(192379);
var i = n(990547),
    a = n(481060),
    r = n(891802),
    l = n(332664),
    s = n(142497),
    c = n(774378),
    u = n(445102),
    d = n(981631),
    b = n(531578),
    p = n(190378),
    m = n(388032);
let _ = [c.b.OTHER];
function h(e) {
    let { onClose: t, transitionState: h, analyticsData: f } = e,
        { showFormStyleSurvey: v, hideNeutralOption: O, showVibesHoneypot: g } = (0, r.X)({ location: 'VoiceCallFeedback' }),
        x = v ? m.NW.string(m.t.xv0BJi) : m.NW.string(m.t.Ss6tlZ),
        y = v ? void 0 : m.NW.string(m.t.tLi4cX),
        j = O ? [b.aZ.BAD, b.aZ.GOOD] : void 0,
        N = v
            ? {
                  [b.aZ.BAD]: m.NW.string(m.t['0jP8iY']),
                  [b.aZ.GOOD]: m.NW.string(m.t.B81oy8)
              }
            : void 0;
    return (0, o.jsx)(l.Z, {
        modalType: 'voice',
        header: x,
        body: y,
        impression: {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: f.rtc_connection_id,
                media_session_id: f.media_session_id
            }
        },
        ratingOptions: j,
        ratingTextLabels: N,
        problemTitle: m.NW.string(m.t.FJmoxM),
        problems: (0, c.Z)({
            isMobile: !1,
            showVibesHoneypot: g
        }),
        freeformNeededProblems: _,
        onSubmit: function (e) {
            var t, i;
            let { rating: r, problem: l, dontShowAgain: c, feedback: b } = e;
            c && (0, s.Kw)(p.v.VOICE_CALL_FEEDBACK),
                null != r &&
                    ((0, u.Z)(d.rMx.CALL_REPORT_PROBLEM, {
                        rating: r,
                        reasonCode: null != (t = null == l ? void 0 : l.code) ? t : null,
                        reasonDescription: null != (i = null == l ? void 0 : l.value) ? i : null,
                        feedback: b,
                        analyticsData: f
                    }),
                    null != l &&
                        (0, a.ZDy)(async () => {
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
                                    })({ body: m.NW.string(m.t['d9+vQ0']) }, t)
                                );
                        }));
        },
        onClose: t,
        transitionState: h,
        otherKey: c.b.OTHER
    });
}
