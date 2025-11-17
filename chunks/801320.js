o.d(t, { default: () => p });
var n = o(54381),
    r = o(473749),
    c = o(481060),
    a = o(957115),
    i = o(332664),
    l = o(626135),
    _ = o(981631),
    b = o(531578),
    s = o(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = o[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let d = ["OTHER"];
function p(e) {
    let { analyticsData: t, transitionState: p, onClose: m } = e;
    return (
        r.useEffect(() => {
            l.default.track(_.rMx.OPEN_MODAL, { type: "Video Background Feedback" });
        }, []),
        (0, n.jsx)(i.Z, {
            modalType: "video_background",
            header: s.intl.string(s.t.Wl8qXg),
            body: s.intl.string(s.t.vPw6j0),
            problemTitle: s.intl.string(s.t.UNFF85),
            problems: [
                {
                    value: "BAD_OUTLINE",
                    label: s.intl.string(s.t.pyhS3j),
                },
                {
                    value: "BACKGROUND_DETECTION_ACCURACY",
                    label: s.intl.string(s.t.cymRTb),
                },
                {
                    value: "FLICKERING",
                    label: s.intl.string(s.t.xZ60CB),
                },
                {
                    value: "BACKGROUND_DETECTION_LAG",
                    label: s.intl.string(s.t.DweTcb),
                },
                {
                    value: "OTHER",
                    label: s.intl.string(s.t.emlT91),
                },
            ],
            freeformNeededProblems: d,
            onSubmit: function (e) {
                var r, i, d, p;
                let { rating: m, problem: f, dontShowAgain: O, feedback: y } = e;
                O &&
                    (0, a.Uv)({
                        feedbackType: b.nw.VIDEO_BACKGROUND,
                        location: "VideoBackgroundFeedbackModal",
                    }),
                    null != m &&
                        ((i = null != (r = null == f ? void 0 : f.value) ? r : null),
                        l.default.track(
                            _.rMx.VIDEO_BACKGROUND_FEEDBACK,
                            ((d = u({}, t)),
                            (p = p =
                                {
                                    reason: i,
                                    rating: m,
                                    feedback: y,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                                : (function (e, t) {
                                      var o = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          o.push.apply(o, n);
                                      }
                                      return o;
                                  })(Object(p)).forEach(function (e) {
                                      Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                                  }),
                            d),
                        ),
                        null != f &&
                            (0, c.ZDy)(async () => {
                                let { default: e } = await o.e("14466").then(o.bind(o, 729328));
                                return (t) => (0, n.jsx)(e, u({ body: s.intl.string(s.t.aHB11f) }, t));
                            }));
            },
            onClose: m,
            transitionState: p,
            otherKey: "OTHER",
        })
    );
}
