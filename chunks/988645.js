o.d(t, { default: () => O });
var n = o(255367);
o(73800);
var r = o(990547),
    i = o(481060),
    l = o(503935),
    a = o(957115),
    s = o(891802),
    c = o(332664),
    u = o(13137),
    d = o(774378),
    b = o(445102),
    p = o(626135),
    m = o(981631),
    _ = o(531578),
    f = o(388032),
    h = o(574379);
let g = [d.b.OTHER];
function O(e) {
    let { onClose: t, transitionState: O, analyticsData: v } = e,
        { showVibesHoneypot: y } = (0, s.X)({ location: 'VoiceCallFeedback' }),
        { showRefreshedTaxonomy: x } = (0, l.m)({ location: 'VoiceCallFeedback' });
    function j(e) {
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
            if (x) {
                let { category: o, problem: n } = e;
                (0, b.Z)(m.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    category: o,
                    reasonDescription: null != (t = null == n ? void 0 : n.value) ? t : null,
                    variant: null != (r = null == n ? void 0 : n.variant) ? r : null,
                    feedback: d,
                    analyticsData: v
                });
            } else {
                let { problem: t } = e;
                (0, b.Z)(m.rMx.CALL_REPORT_PROBLEM, {
                    rating: u,
                    reasonCode: null != (l = null == t ? void 0 : t.code) ? l : null,
                    reasonDescription: null != (s = null == t ? void 0 : t.value) ? s : null,
                    feedback: d,
                    analyticsData: v
                });
            }
            null != e.problem &&
                (0, i.ZDy)(async () => {
                    let { default: e } = await o.e('14466').then(o.bind(o, 729328));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(o);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(o).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(o, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = o[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({ body: f.intl.string(f.t['d9+vQ0']) }, t)
                        );
                });
        }
    }
    let w = f.intl.string(f.t.Ss6tlZ),
        C = f.intl.string(f.t.tLi4cX),
        k = {
            impressionName: r.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: v.rtc_connection_id,
                media_session_id: v.media_session_id
            }
        };
    if (x) {
        let e = {
                value: _.tX.CONNECTION,
                label: f.intl.string(h.default.FVhMw8),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: _.T_.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            },
            o = {
                value: _.tX.AUDIO,
                label: f.intl.string(h.default.PL2l6O),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: _.b9.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            },
            r = {
                value: _.tX.VIDEO,
                label: f.intl.string(h.default['0WFzPj']),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: _.ct.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            },
            i = {
                value: _.tX.PEOPLE,
                label: f.intl.string(h.default.Moa3W1),
                problemsHeader: f.intl.string(f.t.FJmoxM),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: _.s_.FREEFORM,
                    label: f.intl.string(f.t['emlT9/'])
                }
            };
        return (0, n.jsx)(u.Z, {
            onMount: () => {
                p.default.track(m.rMx.OPEN_MODAL, {
                    type: 'voice',
                    source: 'Feedback Modal'
                });
            },
            onSubmit: j,
            onClose: t,
            ratingHeader: w,
            ratingBody: C,
            categoriesHeader: f.intl.string(h.default['tq859/']),
            optionsTree: [e, o, r, i],
            impression: k,
            transitionState: O
        });
    }
    return (0, n.jsx)(c.Z, {
        modalType: 'voice',
        header: w,
        body: C,
        impression: k,
        problemTitle: f.intl.string(f.t.FJmoxM),
        problems: (0, d.Z)({
            isMobile: !1,
            showVibesHoneypot: y
        }),
        freeformNeededProblems: g,
        onSubmit: j,
        onClose: t,
        transitionState: O,
        otherKey: d.b.OTHER
    });
}
