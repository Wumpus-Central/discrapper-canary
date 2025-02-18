n.d(t, { default: () => m });
var o = n(200651);
n(192379);
var a = n(481060),
    i = n(891802),
    l = n(332664),
    s = n(142497),
    c = n(774378),
    r = n(445102),
    d = n(531578),
    u = n(190378),
    _ = n(388032);
let h = [c.b.OTHER];
function m(e) {
    let { onClose: t, transitionState: m, analyticsData: b } = e,
        { showRefreshedSurvey: x } = (0, i.X)({ location: 'VoiceCallFeedback' }),
        p = x ? _.NW.string(_.t.xv0BJi) : _.NW.string(_.t.Ss6tlZ),
        v = x ? void 0 : _.NW.string(_.t.tLi4cX),
        f = x ? [d.aZ.BAD, d.aZ.GOOD] : void 0,
        g = x
            ? {
                  [d.aZ.BAD]: _.NW.string(_.t['0jP8iY']),
                  [d.aZ.GOOD]: _.NW.string(_.t.B81oy8)
              }
            : void 0;
    return (0, o.jsx)(l.Z, {
        modalType: 'voice',
        header: p,
        body: v,
        ratingOptions: f,
        ratingTextLabels: g,
        problemTitle: _.NW.string(_.t.FJmoxM),
        problems: (0, c.Z)(!1),
        freeformNeededProblems: h,
        onSubmit: function (e) {
            var t, i;
            let { rating: l, problem: d, dontShowAgain: h, feedback: m } = e;
            h && (0, s.Kw)(u.v.VOICE_CALL_FEEDBACK),
                null != l &&
                    ((0, r.Z)(l, null !== (i = null === (t = (0, c.Z)(!1).find((e) => e.label === d)) || void 0 === t ? void 0 : t.code) && void 0 !== i ? i : null, d, m, b),
                    null != d &&
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: _.NW.string(_.t['d9+vQ0']),
                                    ...t
                                });
                        }));
        },
        onClose: t,
        transitionState: m,
        otherKey: c.b.OTHER
    });
}
