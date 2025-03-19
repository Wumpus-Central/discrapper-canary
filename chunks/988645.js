n.d(t, { default: () => p });
var o = n(200651);
n(192379);
var i = n(990547),
    a = n(481060),
    s = n(891802),
    l = n(332664),
    r = n(142497),
    c = n(774378),
    u = n(445102),
    d = n(981631),
    _ = n(531578),
    m = n(190378),
    b = n(388032);
let h = [c.b.OTHER];
function p(e) {
    let { onClose: t, transitionState: p, analyticsData: f } = e,
        { showRefreshedSurvey: v } = (0, s.X)({ location: 'VoiceCallFeedback' }),
        x = v ? b.NW.string(b.t.xv0BJi) : b.NW.string(b.t.Ss6tlZ),
        g = v ? void 0 : b.NW.string(b.t.tLi4cX),
        O = v ? [_.aZ.BAD, _.aZ.GOOD] : void 0,
        N = v
            ? {
                  [_.aZ.BAD]: b.NW.string(b.t['0jP8iY']),
                  [_.aZ.GOOD]: b.NW.string(b.t.B81oy8)
              }
            : void 0;
    return (0, o.jsx)(l.Z, {
        modalType: 'voice',
        header: x,
        body: g,
        impression: {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: f.rtc_connection_id,
                media_session_id: f.media_session_id
            }
        },
        ratingOptions: O,
        ratingTextLabels: N,
        problemTitle: b.NW.string(b.t.FJmoxM),
        problems: (0, c.Z)(!1),
        freeformNeededProblems: h,
        onSubmit: function (e) {
            var t, i;
            let { rating: s, problem: l, dontShowAgain: _, feedback: h } = e;
            _ && (0, r.Kw)(m.v.VOICE_CALL_FEEDBACK),
                null != s &&
                    ((0, u.Z)(d.rMx.CALL_REPORT_PROBLEM, {
                        rating: s,
                        reasonCode: null !== (i = null === (t = (0, c.Z)(!1).find((e) => e.label === l)) || void 0 === t ? void 0 : t.code) && void 0 !== i ? i : null,
                        reasonDescription: l,
                        feedback: h,
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
                                    })({ body: b.NW.string(b.t['d9+vQ0']) }, t)
                                );
                        }));
        },
        onClose: t,
        transitionState: p,
        otherKey: c.b.OTHER
    });
}
