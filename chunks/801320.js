r.d(t, { default: () => d });
var n = r(54381),
    o = r(473749),
    c = r(481060),
    a = r(957115),
    i = r(332664),
    l = r(626135),
    b = r(981631),
    _ = r(531578),
    s = r(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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
let p = ["OTHER"];
function d(e) {
    let { analyticsData: t, transitionState: d, onClose: f } = e;
    return (
        o.useEffect(() => {
            l.default.track(b.rMx.OPEN_MODAL, { type: "Video Background Feedback" });
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
            freeformNeededProblems: p,
            onSubmit: function (e) {
                var o, i, p, d;
                let { rating: f, problem: m, dontShowAgain: O, feedback: y } = e;
                O &&
                    (0, a.Uv)({
                        feedbackType: _.nw.VIDEO_BACKGROUND,
                        location: "VideoBackgroundFeedbackModal",
                    }),
                    null != f &&
                        ((i = null != (o = null == m ? void 0 : m.value) ? o : null),
                        l.default.track(
                            b.rMx.VIDEO_BACKGROUND_FEEDBACK,
                            ((p = u({}, t)),
                            (d = d =
                                {
                                    reason: i,
                                    rating: f,
                                    feedback: y,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(d))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(d)).forEach(function (e) {
                                      Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(d, e));
                                  }),
                            p),
                        ),
                        null != m &&
                            (0, c.ZDy)(async () => {
                                let { default: e } = await r.e("14466").then(r.bind(r, 729328));
                                return (t) => (0, n.jsx)(e, u({ body: s.intl.string(s.t.aHB11f) }, t));
                            }));
            },
            onClose: f,
            transitionState: d,
            otherKey: "OTHER",
        })
    );
}
