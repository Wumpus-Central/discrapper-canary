n.d(t, { default: () => _ });
var a = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(332664),
    o = n(142497),
    c = n(626135),
    i = n(981631),
    u = n(190378),
    d = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let m = ['OTHER'];
function _(e) {
    let { analyticsData: t, transitionState: _, onClose: x } = e;
    return (
        r.useEffect(() => {
            c.default.track(i.rMx.OPEN_MODAL, { type: 'Video Background Feedback' });
        }, []),
        (0, a.jsx)(s.Z, {
            modalType: 'video_background',
            header: d.NW.string(d.t.Wl8qXl),
            body: d.NW.string(d.t.vPw6j4),
            problemTitle: d.NW.string(d.t['UNFF8/']),
            problems: [
                {
                    value: 'BAD_OUTLINE',
                    label: d.NW.string(d.t.pyhS3t)
                },
                {
                    value: 'BACKGROUND_DETECTION_ACCURACY',
                    label: d.NW.string(d.t.cymRTU)
                },
                {
                    value: 'FLICKERING',
                    label: d.NW.string(d.t.xZ60CA)
                },
                {
                    value: 'BACKGROUND_DETECTION_LAG',
                    label: d.NW.string(d.t.DweTcX)
                },
                {
                    value: 'OTHER',
                    label: d.NW.string(d.t['emlT9/'])
                }
            ],
            freeformNeededProblems: m,
            onSubmit: function (e) {
                var r, s, m, _;
                let { rating: x, problem: p, dontShowAgain: f, feedback: h } = e;
                f && (0, o.Kw)(u.v.VIDEO_BACKGROUND_FEEDBACK),
                    null != x &&
                        ((s = null != (r = null == p ? void 0 : p.value) ? r : null),
                        c.default.track(
                            i.rMx.VIDEO_BACKGROUND_FEEDBACK,
                            ((m = b({}, t)),
                            (_ = _ =
                                {
                                    reason: s,
                                    rating: x,
                                    feedback: h
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(_))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var a = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, a);
                                      }
                                      return n;
                                  })(Object(_)).forEach(function (e) {
                                      Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(_, e));
                                  }),
                            m)
                        ),
                        null != p &&
                            (0, l.ZDy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) => (0, a.jsx)(e, b({ body: d.NW.string(d.t.aHB11d) }, t));
                            }));
            },
            onClose: x,
            transitionState: _,
            otherKey: 'OTHER'
        })
    );
}
