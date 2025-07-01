o.d(t, { default: () => d });
var r = o(255367),
    n = o(73800),
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
            r = Object.keys(o);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = o[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let p = ['OTHER'];
function d(e) {
    let { analyticsData: t, transitionState: d, onClose: m } = e;
    return (
        n.useEffect(() => {
            l.default.track(_.rMx.OPEN_MODAL, { type: 'Video Background Feedback' });
        }, []),
        (0, r.jsx)(i.Z, {
            modalType: 'video_background',
            header: s.intl.string(s.t.Wl8qXl),
            body: s.intl.string(s.t.vPw6j4),
            problemTitle: s.intl.string(s.t['UNFF8/']),
            problems: [
                {
                    value: 'BAD_OUTLINE',
                    label: s.intl.string(s.t.pyhS3t)
                },
                {
                    value: 'BACKGROUND_DETECTION_ACCURACY',
                    label: s.intl.string(s.t.cymRTU)
                },
                {
                    value: 'FLICKERING',
                    label: s.intl.string(s.t.xZ60CA)
                },
                {
                    value: 'BACKGROUND_DETECTION_LAG',
                    label: s.intl.string(s.t.DweTcX)
                },
                {
                    value: 'OTHER',
                    label: s.intl.string(s.t['emlT9/'])
                }
            ],
            freeformNeededProblems: p,
            onSubmit: function (e) {
                var n, i, p, d;
                let { rating: m, problem: f, dontShowAgain: O, feedback: y } = e;
                (O &&
                    (0, a.Uv)({
                        feedbackType: b.nw.VIDEO_BACKGROUND,
                        location: 'VideoBackgroundFeedbackModal'
                    }),
                    null != m &&
                        ((i = null != (n = null == f ? void 0 : f.value) ? n : null),
                        l.default.track(
                            _.rMx.VIDEO_BACKGROUND_FEEDBACK,
                            ((p = u({}, t)),
                            (d = d =
                                {
                                    reason: i,
                                    rating: m,
                                    feedback: y
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(d))
                                : (function (e, t) {
                                      var o = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          o.push.apply(o, r);
                                      }
                                      return o;
                                  })(Object(d)).forEach(function (e) {
                                      Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(d, e));
                                  }),
                            p)
                        ),
                        null != f &&
                            (0, c.ZDy)(async () => {
                                let { default: e } = await o.e('14466').then(o.bind(o, 729328));
                                return (t) => (0, r.jsx)(e, u({ body: s.intl.string(s.t.aHB11d) }, t));
                            })));
            },
            onClose: m,
            transitionState: d,
            otherKey: 'OTHER'
        })
    );
}
