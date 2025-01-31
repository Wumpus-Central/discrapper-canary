n.d(t, { default: () => x });
var l = n(200651),
    a = n(192379),
    i = n(481060),
    s = n(332664),
    c = n(142497),
    r = n(626135),
    o = n(981631),
    d = n(190378),
    u = n(388032);
let m = ['OTHER'];
function x(e) {
    let { analyticsData: t, transitionState: x, onClose: _ } = e;
    return (
        a.useEffect(() => {
            r.default.track(o.rMx.OPEN_MODAL, { type: 'Video Background Feedback' });
        }, []),
        (0, l.jsx)(s.Z, {
            modalType: 'video_background',
            header: u.intl.string(u.t.Wl8qXl),
            body: u.intl.string(u.t.vPw6j4),
            problemTitle: u.intl.string(u.t['UNFF8/']),
            problems: [
                {
                    value: 'BAD_OUTLINE',
                    label: u.intl.string(u.t.pyhS3t)
                },
                {
                    value: 'BACKGROUND_DETECTION_ACCURACY',
                    label: u.intl.string(u.t.cymRTU)
                },
                {
                    value: 'FLICKERING',
                    label: u.intl.string(u.t.xZ60CA)
                },
                {
                    value: 'BACKGROUND_DETECTION_LAG',
                    label: u.intl.string(u.t.DweTcX)
                },
                {
                    value: 'OTHER',
                    label: u.intl.string(u.t['emlT9/'])
                }
            ],
            feedbackProblems: m,
            onSubmit: function (e) {
                let { rating: a, problem: s, dontShowAgain: m, feedback: x } = e;
                m && (0, c.Kw)(d.v.VIDEO_BACKGROUND_FEEDBACK),
                    null != a &&
                        (r.default.track(o.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                            ...t,
                            reason: s,
                            rating: a,
                            feedback: x
                        }),
                        null != s &&
                            (0, i.ZDy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        body: u.intl.string(u.t.aHB11d),
                                        ...t
                                    });
                            }));
            },
            onClose: _,
            transitionState: x,
            otherKey: 'OTHER'
        })
    );
}
