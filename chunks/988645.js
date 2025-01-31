n.d(t, { default: () => m });
var i = n(200651);
n(192379);
var l = n(481060),
    o = n(144535),
    a = n(332664),
    s = n(142497),
    c = n(774378),
    r = n(445102),
    u = n(190378),
    d = n(388032);
function m(e) {
    let { onClose: t, transitionState: m, analyticsData: _ } = e,
        h = (0, o.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, i.jsx)(a.Z, {
        modalType: 'voice',
        header: d.intl.string(d.t.Ss6tlZ),
        body: d.intl.string(d.t.tLi4cX),
        problemTitle: d.intl.string(d.t.FJmoxM),
        problems: (0, c.Z)(!1),
        feedbackProblems: [h],
        onSubmit: function (e) {
            var t, o;
            let { rating: a, problem: m, dontShowAgain: h, feedback: g } = e;
            h && (0, s.Kw)(u.v.VOICE_CALL_FEEDBACK),
                null != a &&
                    ((0, r.Z)(a, null !== (o = null === (t = (0, c.Z)(!1).find((e) => e.label === m)) || void 0 === t ? void 0 : t.code) && void 0 !== o ? o : null, m, g, _),
                    null != m &&
                        (0, l.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    body: d.intl.string(d.t['d9+vQ0']),
                                    ...t
                                });
                        }));
        },
        onClose: t,
        transitionState: m,
        otherKey: h
    });
}
