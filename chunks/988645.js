n.d(t, { default: () => m });
var o = n(200651);
n(192379);
var a = n(481060),
    i = n(891802),
    l = n(332664),
    s = n(142497),
    r = n(774378),
    c = n(445102),
    u = n(531578),
    d = n(190378),
    b = n(388032);
let _ = [r.b.OTHER];
function m(e) {
    let { onClose: t, transitionState: m, analyticsData: h } = e,
        { showRefreshedSurvey: f } = (0, i.X)({ location: 'VoiceCallFeedback' }),
        p = f ? b.NW.string(b.t.xv0BJi) : b.NW.string(b.t.Ss6tlZ),
        v = f ? void 0 : b.NW.string(b.t.tLi4cX),
        x = f ? [u.aZ.BAD, u.aZ.GOOD] : void 0,
        g = f
            ? {
                  [u.aZ.BAD]: b.NW.string(b.t['0jP8iY']),
                  [u.aZ.GOOD]: b.NW.string(b.t.B81oy8)
              }
            : void 0;
    return (0, o.jsx)(l.Z, {
        modalType: 'voice',
        header: p,
        body: v,
        ratingOptions: x,
        ratingTextLabels: g,
        problemTitle: b.NW.string(b.t.FJmoxM),
        problems: (0, r.Z)(!1),
        freeformNeededProblems: _,
        onSubmit: function (e) {
            var t, i;
            let { rating: l, problem: u, dontShowAgain: _, feedback: m } = e;
            _ && (0, s.Kw)(d.v.VOICE_CALL_FEEDBACK),
                null != l &&
                    ((0, c.Z)(l, null !== (i = null === (t = (0, r.Z)(!1).find((e) => e.label === u)) || void 0 === t ? void 0 : t.code) && void 0 !== i ? i : null, u, m, h),
                    null != u &&
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
        transitionState: m,
        otherKey: r.b.OTHER
    });
}
