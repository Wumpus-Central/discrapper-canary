n.d(t, { default: () => _ });
var l = n(255367),
    a = n(73800),
    r = n(481060),
    o = n(332664),
    i = n(142497),
    s = n(626135),
    c = n(981631),
    u = n(190378),
    d = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let b = ['OTHER'];
function _(e) {
    let { analyticsData: t, transitionState: _, onClose: x } = e;
    return (
        a.useEffect(() => {
            s.default.track(c.rMx.OPEN_MODAL, { type: 'Video Background Feedback' });
        }, []),
        (0, l.jsx)(o.Z, {
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
            freeformNeededProblems: b,
            onSubmit: function (e) {
                var a, o, b, _;
                let { rating: x, problem: p, dontShowAgain: f, feedback: h } = e;
                f && (0, i.Kw)(u.v.VIDEO_BACKGROUND_FEEDBACK),
                    null != x &&
                        ((o = null != (a = null == p ? void 0 : p.value) ? a : null),
                        s.default.track(
                            c.rMx.VIDEO_BACKGROUND_FEEDBACK,
                            ((b = m({}, t)),
                            (_ = _ =
                                {
                                    reason: o,
                                    rating: x,
                                    feedback: h
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(_))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var l = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, l);
                                      }
                                      return n;
                                  })(Object(_)).forEach(function (e) {
                                      Object.defineProperty(b, e, Object.getOwnPropertyDescriptor(_, e));
                                  }),
                            b)
                        ),
                        null != p &&
                            (0, r.ZDy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) => (0, l.jsx)(e, m({ body: d.intl.string(d.t.aHB11d) }, t));
                            }));
            },
            onClose: x,
            transitionState: _,
            otherKey: 'OTHER'
        })
    );
}
