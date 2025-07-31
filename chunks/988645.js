n.d(t, { default: () => v });
var o = n(255367);
n(73800);
var r = n(990547),
    i = n(481060),
    l = n(347935),
    a = n(957115),
    s = n(328171),
    c = n(891802),
    u = n(332664),
    d = n(13137),
    b = n(774378),
    m = n(445102),
    p = n(626135),
    f = n(981631),
    _ = n(531578),
    O = n(388032),
    g = n(760359);
let h = [b.b.OTHER];
function v(e) {
    let { onClose: t, transitionState: v, analyticsData: y } = e,
        { showVibesHoneypot: j } = (0, c.X)({ location: 'VoiceCallFeedback' }),
        { showRefreshedCallTaxonomy: w } = (0, l.D)({ location: 'VoiceCallFeedback' }),
        { surveyEmojiKind: x } = (0, s.R)({ location: 'VoiceCallFeedback' });
    function C(e) {
        var t, r, l, s;
        let { dontShowAgain: c, rating: u, feedback: d } = e;
        if (
            (c &&
                (0, a.Uv)({
                    feedbackType: _.nw.VOICE,
                    location: 'VoiceCallFeedbackModal'
                }),
            null != u)
        ) {
            if (w) {
                let { category: n, problem: o } = e;
                (0, m.Z)(f.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    category: n,
                    reasonDescription: null != (t = null == o ? void 0 : o.value) ? t : null,
                    variant: null != (r = null == o ? void 0 : o.variant) ? r : null,
                    feedback: d,
                    analyticsData: y
                });
            } else {
                let { problem: t } = e;
                (0, m.Z)(f.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    reasonCode: null != (l = null == t ? void 0 : t.code) ? l : null,
                    reasonDescription: null != (s = null == t ? void 0 : t.value) ? s : null,
                    feedback: d,
                    analyticsData: y
                });
            }
            null != e.problem &&
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, o.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        o = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (o = o.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        o.forEach(function (t) {
                                            var o;
                                            ((o = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: o,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = o));
                                        }));
                                }
                                return e;
                            })({ body: O.intl.string(O.t['d9+vQ0']) }, t)
                        );
                });
        }
    }
    let E = O.intl.string(O.t.Ss6tlZ),
        P = O.intl.string(O.t.tLi4cX),
        k = {
            impressionName: r.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: y.rtc_connection_id,
                media_session_id: y.media_session_id
            }
        };
    if (w) {
        let e = {
                value: _.tX.CONNECTION,
                label: O.intl.string(g.default.FVhMw8),
                problemsHeader: O.intl.string(O.t.FJmoxM),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: _.T_.FREEFORM,
                    label: O.intl.string(O.t['emlT9/'])
                }
            },
            n = {
                value: _.tX.AUDIO,
                label: O.intl.string(g.default.PL2l6O),
                problemsHeader: O.intl.string(O.t.FJmoxM),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: _.b9.FREEFORM,
                    label: O.intl.string(O.t['emlT9/'])
                }
            },
            r = {
                value: _.tX.VIDEO,
                label: O.intl.string(g.default['0WFzPj']),
                problemsHeader: O.intl.string(O.t.FJmoxM),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: _.ct.FREEFORM,
                    label: O.intl.string(O.t['emlT9/'])
                }
            },
            i = {
                value: _.tX.PEOPLE,
                label: O.intl.string(g.default.Moa3W1),
                problemsHeader: O.intl.string(O.t.FJmoxM),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: _.s_.FREEFORM,
                    label: O.intl.string(O.t['emlT9/'])
                }
            };
        return (0, o.jsx)(d.Z, {
            onMount: () => {
                p.default.track(f.rMx.OPEN_MODAL, {
                    type: 'voice',
                    source: 'Feedback Modal'
                });
            },
            onSubmit: C,
            onClose: t,
            ratingHeader: E,
            ratingEmojiKind: x,
            ratingBody: P,
            categoriesHeader: O.intl.string(g.default['tq859/']),
            optionsTree: [e, n, r, i],
            impression: k,
            transitionState: v
        });
    }
    return (0, o.jsx)(u.Z, {
        modalType: 'voice',
        header: E,
        ratingEmojiKind: x,
        body: P,
        impression: k,
        problemTitle: O.intl.string(O.t.FJmoxM),
        problems: (0, b.Z)({
            isMobile: !1,
            showVibesHoneypot: j
        }),
        freeformNeededProblems: h,
        onSubmit: C,
        onClose: t,
        transitionState: v,
        otherKey: b.b.OTHER
    });
}
