n.d(t, { default: () => O });
var o = n(255367);
n(73800);
var i = n(990547),
    r = n(481060),
    l = n(503935),
    a = n(957115),
    s = n(891802),
    c = n(332664),
    u = n(13137),
    d = n(774378),
    m = n(445102),
    b = n(626135),
    p = n(981631),
    _ = n(531578),
    f = n(388032),
    g = n(760359);
let h = [d.b.OTHER];
function O(e) {
    let { onClose: t, transitionState: O, analyticsData: v } = e,
        { showVibesHoneypot: y } = (0, s.X)({ location: 'VoiceCallFeedback' }),
        { showRefreshedTaxonomy: x } = (0, l.m)({ location: 'VoiceCallFeedback' });
    function j(e) {
        var t, i, l, s;
        let { dontShowAgain: c, rating: u, feedback: d } = e;
        if (
            (c &&
                (0, a.Uv)({
                    feedbackType: _.nw.VOICE,
                    location: 'VoiceCallFeedbackModal'
                }),
            null != u)
        ) {
            if (x) {
                let { category: n, problem: o } = e;
                (0, m.Z)(p.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    category: n,
                    reasonDescription: null != (t = null == o ? void 0 : o.value) ? t : null,
                    variant: null != (i = null == o ? void 0 : o.variant) ? i : null,
                    feedback: d,
                    analyticsData: v
                });
            } else {
                let { problem: t } = e;
                (0, m.Z)(p.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    reasonCode: null != (l = null == t ? void 0 : t.code) ? l : null,
                    reasonDescription: null != (s = null == t ? void 0 : t.value) ? s : null,
                    feedback: d,
                    analyticsData: v
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
                            })({ body: f.intl.string(f.t['d9+vQ0']) }, t)
                        );
                });
        }
    }
    let w = f.intl.string(f.t.Ss6tlZ),
        C = f.intl.string(f.t.tLi4cX),
        E = {
            impressionName: i.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: v.rtc_connection_id,
                media_session_id: v.media_session_id
            }
        };
    if (x) {
        let e = {
                value: _.tX.CONNECTION,
                label: f.intl.string(g.default.FVhMw8),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: _.T_.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            },
            n = {
                value: _.tX.AUDIO,
                label: f.intl.string(g.default.PL2l6O),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: _.b9.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            },
            i = {
                value: _.tX.VIDEO,
                label: f.intl.string(g.default['0WFzPj']),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: _.ct.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            },
            r = {
                value: _.tX.PEOPLE,
                label: f.intl.string(g.default.Moa3W1),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: _.s_.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            };
        return (0, o.jsx)(u.Z, {
            onMount: () => {
                b.default.track(p.rMx.OPEN_MODAL, {
                    type: 'voice',
                    source: 'Feedback Modal'
                });
            },
            onSubmit: j,
            onClose: t,
            ratingHeader: w,
            ratingBody: C,
            categoriesHeader: f.intl.string(g.default['tq859/']),
            optionsTree: [e, n, i, r],
            impression: E,
            transitionState: O
        });
    }
    return (0, o.jsx)(c.Z, {
        modalType: 'voice',
        header: w,
        body: C,
        impression: E,
        problemTitle: f.intl.string(f.t.FJmoxM),
        problems: (0, d.Z)({
            isMobile: !1,
            showVibesHoneypot: y
        }),
        freeformNeededProblems: h,
        onSubmit: j,
        onClose: t,
        transitionState: O,
        otherKey: d.b.OTHER
    });
}
