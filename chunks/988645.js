n.d(t, { default: () => v });
var a = n(54381);
n(473749);
var l = n(990547),
    i = n(481060),
    r = n(957115),
    o = n(328171),
    d = n(13137),
    s = n(445102),
    u = n(626135),
    c = n(981631),
    b = n(531578),
    f = n(388032),
    O = n(801485);
function v(e) {
    let { onClose: t, transitionState: v, analyticsData: m } = e,
        { surveyEmojiKind: E } = (0, o.R)({ location: "VoiceCallFeedback" }),
        p = f.intl.string(f.t.Ss6tlb),
        g = f.intl.string(f.t.tLi4cR),
        _ = {
            impressionName: l.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: m.rtc_connection_id,
                media_session_id: m.media_session_id,
            },
        },
        h = {
            value: b.tX.CONNECTION,
            label: f.intl.string(O.default.FVhMw6),
            problemsHeader: f.intl.string(f.t.FJmoxF),
            problemOptions: (0, r.Z1)(),
            freeformConfig: {
                value: b.T_.FREEFORM,
                label: f.intl.string(f.t.emlT91),
            },
        },
        S = {
            value: b.tX.AUDIO,
            label: f.intl.string(O.default.PL2l6A),
            problemsHeader: f.intl.string(f.t.FJmoxF),
            problemOptions: (0, r.w9)({ isMobile: !1 }),
            freeformConfig: {
                value: b.b9.FREEFORM,
                label: f.intl.string(f.t.emlT91),
            },
        },
        j = {
            value: b.tX.VIDEO,
            label: f.intl.string(O.default["0WFzPh"]),
            problemsHeader: f.intl.string(f.t.FJmoxF),
            problemOptions: (0, r.NX)(),
            freeformConfig: {
                value: b.ct.FREEFORM,
                label: f.intl.string(f.t.emlT91),
            },
        },
        y = {
            value: b.tX.PEOPLE,
            label: f.intl.string(O.default.Moa3W9),
            problemsHeader: f.intl.string(f.t.FJmoxF),
            problemOptions: (0, r.hP)(),
            freeformConfig: {
                value: b.s_.FREEFORM,
                label: f.intl.string(f.t.emlT91),
            },
        };
    return (0, a.jsx)(d.Z, {
        onMount: () => {
            u.default.track(c.rMx.OPEN_MODAL, {
                type: "voice",
                source: "Feedback Modal",
            });
        },
        onSubmit: function (e) {
            var t, l;
            let { dontShowAgain: o, rating: d, feedback: u, category: O, problem: v } = e;
            o &&
                (0, r.Uv)({
                    feedbackType: b.nw.VOICE,
                    location: "VoiceCallFeedbackModal",
                }),
                null != d &&
                    ((0, s.Z)(c.rMx.CALL_REPORT_PROBLEM, {
                        rating: d,
                        category: O,
                        reasonDescription: null != (t = null == v ? void 0 : v.value) ? t : null,
                        variant: null != (l = null == v ? void 0 : v.variant) ? l : null,
                        feedback: u,
                        analyticsData: m,
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
                                    })({ body: f.intl.string(f.t["d9+vQ8"]) }, t),
                                );
                        }));
        },
        onClose: t,
        ratingHeader: p,
        ratingEmojiKind: E,
        ratingBody: g,
        categoriesHeader: f.intl.string(O.default.tq8598),
        optionsTree: [h, S, j, y],
        impression: _,
        transitionState: v,
    });
}
