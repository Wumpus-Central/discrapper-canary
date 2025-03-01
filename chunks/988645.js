n.d(t, { default: () => h });
var o = n(200651);
n(192379);
var i = n(990547),
    a = n(481060),
    s = n(891802),
    l = n(332664),
    r = n(142497),
    c = n(774378),
    u = n(445102),
    d = n(531578),
    _ = n(190378),
    m = n(388032);
let b = [c.b.OTHER];
function h(e) {
    let { onClose: t, transitionState: h, analyticsData: p } = e,
        { showRefreshedSurvey: f } = (0, s.X)({ location: 'VoiceCallFeedback' }),
        v = f ? m.NW.string(m.t.xv0BJi) : m.NW.string(m.t.Ss6tlZ),
        x = f ? void 0 : m.NW.string(m.t.tLi4cX),
        g = f ? [d.aZ.BAD, d.aZ.GOOD] : void 0,
        O = f
            ? {
                  [d.aZ.BAD]: m.NW.string(m.t['0jP8iY']),
                  [d.aZ.GOOD]: m.NW.string(m.t.B81oy8)
              }
            : void 0;
    return (0, o.jsx)(l.Z, {
        modalType: 'voice',
        header: v,
        body: x,
        impression: {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id
            }
        },
        ratingOptions: g,
        ratingTextLabels: O,
        problemTitle: m.NW.string(m.t.FJmoxM),
        problems: (0, c.Z)(!1),
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t, i;
            let { rating: s, problem: l, dontShowAgain: d, feedback: b } = e;
            d && (0, r.Kw)(_.v.VOICE_CALL_FEEDBACK),
                null != s &&
                    ((0, u.Z)(s, null !== (i = null === (t = (0, c.Z)(!1).find((e) => e.label === l)) || void 0 === t ? void 0 : t.code) && void 0 !== i ? i : null, l, b, p),
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
