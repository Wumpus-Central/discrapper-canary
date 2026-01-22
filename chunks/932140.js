a.d(t, { default: () => O });
var r = a(627968),
    n = a(64700),
    c = a(397927),
    b = a(930932),
    l = a(612479),
    d = a(954571),
    o = a(652215),
    f = a(670455),
    i = a(985018);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let s = ["OTHER"];
function O(e) {
    let { analyticsData: t, transitionState: O, onClose: p } = e;
    return (
        n.useEffect(() => {
            d.default.track(o.HAw.OPEN_MODAL, { type: "Video Background Feedback" });
        }, []),
        (0, r.jsx)(l.A, {
            modalType: "video_background",
            header: i.intl.string(i.t.Wl8qXg),
            body: i.intl.string(i.t.vPw6j0),
            problemTitle: i.intl.string(i.t.UNFF85),
            problems: [
                {
                    value: "BAD_OUTLINE",
                    label: i.intl.string(i.t.pyhS3j),
                },
                {
                    value: "BACKGROUND_DETECTION_ACCURACY",
                    label: i.intl.string(i.t.cymRTb),
                },
                {
                    value: "FLICKERING",
                    label: i.intl.string(i.t.xZ60CB),
                },
                {
                    value: "BACKGROUND_DETECTION_LAG",
                    label: i.intl.string(i.t.DweTcb),
                },
                {
                    value: "OTHER",
                    label: i.intl.string(i.t.emlT91),
                },
            ],
            freeformNeededProblems: s,
            onSubmit: function (e) {
                var n, l, s, O;
                let { rating: p, problem: y, dontShowAgain: g, feedback: _ } = e;
                g &&
                    (0, b.n3)({
                        feedbackType: f.MW.VIDEO_BACKGROUND,
                        location: "VideoBackgroundFeedbackModal",
                    }),
                    null != p &&
                        ((l = null != (n = null == y ? void 0 : y.value) ? n : null),
                        d.default.track(
                            o.HAw.VIDEO_BACKGROUND_FEEDBACK,
                            ((s = u({}, t)),
                            (O = O =
                                {
                                    reason: l,
                                    rating: p,
                                    feedback: _,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(O))
                                : (function (e, t) {
                                      var a = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          a.push.apply(a, r);
                                      }
                                      return a;
                                  })(Object(O)).forEach(function (e) {
                                      Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(O, e));
                                  }),
                            s),
                        ),
                        null != y &&
                            (0, c.mMO)(async () => {
                                let { default: e } = await a.e("37836").then(a.bind(a, 845671));
                                return (t) => (0, r.jsx)(e, u({ body: i.intl.string(i.t.aHB11f) }, t));
                            }));
            },
            onClose: p,
            transitionState: O,
            otherKey: "OTHER",
        })
    );
}
