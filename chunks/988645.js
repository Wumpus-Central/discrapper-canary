n.d(t, { default: () => m });
var a = n(54381);
n(473749);
var o = n(990547),
    i = n(481060),
    r = n(957115),
    l = n(13137),
    c = n(445102),
    d = n(626135),
    s = n(981631),
    u = n(531578),
    b = n(388032),
    _ = n(40207);
function m(e) {
    let { onClose: t, transitionState: m, analyticsData: p } = e,
        f = b.intl.string(b.t.Ss6tlb),
        g = b.intl.string(b.t.tLi4cR),
        v = {
            impressionName: o.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id,
            },
        },
        O = {
            value: u.tX.CONNECTION,
            label: b.intl.string(_.default.FVhMw6),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.Z1)(),
            freeformConfig: {
                value: u.T_.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        },
        y = {
            value: u.tX.AUDIO,
            label: b.intl.string(_.default.PL2l6A),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.w9)({ isMobile: !1 }),
            freeformConfig: {
                value: u.b9.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        },
        F = {
            value: u.tX.VIDEO,
            label: b.intl.string(_.default["0WFzPh"]),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.NX)(),
            freeformConfig: {
                value: u.ct.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        },
        h = {
            value: u.tX.PEOPLE,
            label: b.intl.string(_.default.Moa3W9),
            problemsHeader: b.intl.string(b.t.FJmoxF),
            problemOptions: (0, r.hP)(),
            freeformConfig: {
                value: u.s_.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        };
    return (0, a.jsx)(l.Z, {
        onMount: () => {
            d.default.track(s.rMx.OPEN_MODAL, {
                type: "voice",
                source: "Feedback Modal",
            });
        },
        onSubmit: function (e) {
            var t, o;
            let { dontShowAgain: l, rating: d, feedback: _, category: m, problem: f } = e;
            l &&
                (0, r.Uv)({
                    feedbackType: u.nw.VOICE,
                    location: "VoiceCallFeedbackModal",
                }),
                null != d &&
                    ((0, c.Z)(s.rMx.CALL_REPORT_PROBLEM, {
                        rating: d,
                        category: m,
                        reasonDescription: null != (t = null == f ? void 0 : f.value) ? t : null,
                        variant: null != (o = null == f ? void 0 : f.variant) ? o : null,
                        feedback: _,
                        analyticsData: p,
                    }),
                    null != f &&
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
                                    })({ body: b.intl.string(b.t["d9+vQ8"]) }, t),
                                );
                        }));
        },
        onClose: t,
        ratingHeader: f,
        ratingEmojiKind: "face",
        ratingBody: g,
        categoriesHeader: b.intl.string(_.default.tq8598),
        optionsTree: [O, y, F, h],
        impression: v,
        transitionState: m,
    });
}
