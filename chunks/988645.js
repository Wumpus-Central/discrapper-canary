n.d(t, { default: () => O });
var o = n(255367);
n(73800);
var i = n(990547),
    r = n(481060),
    l = n(503935),
    a = n(957115),
    s = n(328171),
    c = n(891802),
    u = n(332664),
    d = n(13137),
    m = n(774378),
    b = n(445102),
    p = n(626135),
    _ = n(981631),
    f = n(531578),
    g = n(388032),
    h = n(760359);
let v = [m.b.OTHER];
function O(e) {
    let { onClose: t, transitionState: O, analyticsData: y } = e,
        { showVibesHoneypot: j } = (0, c.X)({ location: 'VoiceCallFeedback' }),
        { showRefreshedTaxonomy: x } = (0, l.m)({ location: 'VoiceCallFeedback' }),
        { surveyEmojiKind: w } = (0, s.R)({ location: 'VoiceCallFeedback' });
    function C(e) {
        var t, i, l, s;
        let { dontShowAgain: c, rating: u, feedback: d } = e;
        if (
            (c &&
                (0, a.Uv)({
                    feedbackType: f.nw.VOICE,
                    location: 'VoiceCallFeedbackModal'
                }),
            null != u)
        ) {
            if (x) {
                let { category: n, problem: o } = e;
                (0, b.Z)(_.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    category: n,
                    reasonDescription: null != (t = null == o ? void 0 : o.value) ? t : null,
                    variant: null != (i = null == o ? void 0 : o.variant) ? i : null,
                    feedback: d,
                    analyticsData: y
                });
            } else {
                let { problem: t } = e;
                (0, b.Z)(_.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    reasonCode: null != (l = null == t ? void 0 : t.code) ? l : null,
                    reasonDescription: null != (s = null == t ? void 0 : t.value) ? s : null,
                    feedback: d,
                    analyticsData: y
                });
            }
            null != e.problem &&
                (0, r.ZDy)(async () => {
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
                            })({ body: g.intl.string(g.t['d9+vQ0']) }, t)
                        );
                });
        }
    }
    let E = g.intl.string(g.t.Ss6tlZ),
        k = g.intl.string(g.t.tLi4cX),
        S = {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: y.rtc_connection_id,
                media_session_id: y.media_session_id
            }
        };
    if (x) {
        let e = {
                value: f.tX.CONNECTION,
                label: g.intl.string(h.default.FVhMw8),
                problemsHeader: g.intl.string(g.t.FJmoxM),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: f.T_.FREEFORM,
                    label: g.intl.string(g.t['emlT9/'])
                }
            },
            n = {
                value: f.tX.AUDIO,
                label: g.intl.string(h.default.PL2l6O),
                problemsHeader: g.intl.string(g.t.FJmoxM),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: f.b9.FREEFORM,
                    label: g.intl.string(g.t['emlT9/'])
                }
            },
            i = {
                value: f.tX.VIDEO,
                label: g.intl.string(h.default['0WFzPj']),
                problemsHeader: g.intl.string(g.t.FJmoxM),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: f.ct.FREEFORM,
                    label: g.intl.string(g.t['emlT9/'])
                }
            },
            r = {
                value: f.tX.PEOPLE,
                label: g.intl.string(h.default.Moa3W1),
                problemsHeader: g.intl.string(g.t.FJmoxM),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: f.s_.FREEFORM,
                    label: g.intl.string(g.t['emlT9/'])
                }
            };
        return (0, o.jsx)(d.Z, {
            onMount: () => {
                p.default.track(_.rMx.OPEN_MODAL, {
                    type: 'voice',
                    source: 'Feedback Modal'
                });
            },
            onSubmit: C,
            onClose: t,
            ratingHeader: E,
            ratingEmojiKind: w,
            ratingBody: k,
            categoriesHeader: g.intl.string(h.default['tq859/']),
            optionsTree: [e, n, i, r],
            impression: S,
            transitionState: O
        });
    }
    return (0, o.jsx)(u.Z, {
        modalType: 'voice',
        header: E,
        ratingEmojiKind: w,
        body: k,
        impression: S,
        problemTitle: g.intl.string(g.t.FJmoxM),
        problems: (0, m.Z)({
            isMobile: !1,
            showVibesHoneypot: j
        }),
        freeformNeededProblems: v,
        onSubmit: C,
        onClose: t,
        transitionState: O,
        otherKey: m.b.OTHER
    });
}
