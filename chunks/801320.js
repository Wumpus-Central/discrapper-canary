n.d(t, { default: () => m });
var r = n(255367),
    o = n(73800),
    a = n(481060),
    l = n(957115),
    c = n(332664),
    i = n(626135),
    s = n(981631),
    u = n(531578),
    d = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let p = ['OTHER'];
function m(e) {
    let { analyticsData: t, transitionState: m, onClose: f } = e;
    return (
        o.useEffect(() => {
            i.default.track(s.rMx.OPEN_MODAL, { type: 'Video Background Feedback' });
        }, []),
        (0, r.jsx)(c.Z, {
            modalType: 'video_background',
            header: d.intl.string(d.t.Wl8qXl),
            body: d.intl.string(d.t.vPw6j4),
            problemTitle: d.intl.string(d.t['UNFF8/']),
            problems: [
                {
                    value: 'BAD_OUTLINE',
                    label: d.intl.string(d.t.pyhS3t)
                },
                {
                    value: 'BACKGROUND_DETECTION_ACCURACY',
                    label: d.intl.string(d.t.cymRTU)
                },
                {
                    value: 'FLICKERING',
                    label: d.intl.string(d.t.xZ60CA)
                },
                {
                    value: 'BACKGROUND_DETECTION_LAG',
                    label: d.intl.string(d.t.DweTcX)
                },
                {
                    value: 'OTHER',
                    label: d.intl.string(d.t['emlT9/'])
                }
            ],
            freeformNeededProblems: p,
            onSubmit: function (e) {
                var o, c, p, m;
                let { rating: f, problem: _, dontShowAgain: x, feedback: O } = e;
                x &&
                    (0, l.U)({
                        feedbackType: u.nw.VIDEO_BACKGROUND,
                        location: 'VideoBackgroundFeedbackModal'
                    }),
                    null != f &&
                        ((c = null != (o = null == _ ? void 0 : _.value) ? o : null),
                        i.default.track(
                            s.rMx.VIDEO_BACKGROUND_FEEDBACK,
                            ((p = b({}, t)),
                            (m = m =
                                {
                                    reason: c,
                                    rating: f,
                                    feedback: O
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(m))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(m)).forEach(function (e) {
                                      Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(m, e));
                                  }),
                            p)
                        ),
                        null != _ &&
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) => (0, r.jsx)(e, b({ body: d.intl.string(d.t.aHB11d) }, t));
                            }));
            },
            onClose: f,
            transitionState: m,
            otherKey: 'OTHER'
        })
    );
}
