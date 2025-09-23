n.d(t, { default: () => v });
var a = n(951288);
n(647438);
var l = n(990547),
    i = n(481060),
    r = n(957115),
    o = n(328171),
    s = n(13137),
    u = n(882542),
    c = n(626135),
    d = n(981631),
    b = n(531578),
    f = n(388032),
    O = n(178167);
function v(e) {
    let { onClose: t, transitionState: v, analyticsData: _ } = e,
        { surveyEmojiKind: m } = (0, o.R)({ location: "VoiceCallFeedback" }),
        E = f.intl.string(f.t.Ss6tlZ),
        p = f.intl.string(f.t.tLi4cX),
        g = {
            impressionName: l.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: _.rtc_connection_id,
                media_session_id: _.media_session_id,
            },
        },
        h = {
            value: b.tX.CONNECTION,
            label: f.intl.string(O.default.FVhMw8),
            problemsHeader: f.intl.string(f.t.FJmoxM),
            problemOptions: (0, r.Z1)(),
            freeformConfig: {
                value: b.T_.FREEFORM,
                label: f.intl.string(f.t["emlT9/"]),
            },
        },
        S = {
            value: b.tX.AUDIO,
            label: f.intl.string(O.default.PL2l6O),
            problemsHeader: f.intl.string(f.t.FJmoxM),
            problemOptions: (0, r.w9)({ isMobile: !1 }),
            freeformConfig: {
                value: b.b9.FREEFORM,
                label: f.intl.string(f.t["emlT9/"]),
            },
        },
        N = {
            value: b.tX.VIDEO,
            label: f.intl.string(O.default["0WFzPj"]),
            problemsHeader: f.intl.string(f.t.FJmoxM),
            problemOptions: (0, r.NX)(),
            freeformConfig: {
                value: b.ct.FREEFORM,
                label: f.intl.string(f.t["emlT9/"]),
            },
        },
        j = {
            value: b.tX.PEOPLE,
            label: f.intl.string(O.default.Moa3W1),
            problemsHeader: f.intl.string(f.t.FJmoxM),
            problemOptions: (0, r.hP)(),
            freeformConfig: {
                value: b.s_.FREEFORM,
                label: f.intl.string(f.t["emlT9/"]),
            },
        };
    return (0, a.jsx)(s.Z, {
        onMount: () => {
            c.default.track(d.rMx.OPEN_MODAL, {
                type: "voice",
                source: "Feedback Modal",
            });
        },
        onSubmit: function (e) {
            var t, l;
            let { dontShowAgain: o, rating: s, feedback: c, category: O, problem: v } = e;
            o &&
                (0, r.Uv)({
                    feedbackType: b.nw.VOICE,
                    location: "VoiceCallFeedbackModal",
                }),
                null != s &&
                    ((0, u.Z)(d.rMx.CALL_REPORT_PROBLEM, {
                        rating: s,
                        category: O,
                        reasonDescription: null != (t = null == v ? void 0 : v.value) ? t : null,
                        variant: null != (l = null == v ? void 0 : v.variant) ? l : null,
                        feedback: c,
                        analyticsData: _,
                    }),
                    null != v &&
                        (0, i.ZDy)(async () => {
                            let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({ body: f.intl.string(f.t["d9+vQ0"]) }, t),
                                );
                        }));
        },
        onClose: t,
        ratingHeader: E,
        ratingEmojiKind: m,
        ratingBody: p,
        categoriesHeader: f.intl.string(O.default["tq859/"]),
        optionsTree: [h, S, N, j],
        impression: g,
        transitionState: v,
    });
}
