n.r(t),
    n.d(t, {
        VideoBackgroundIssue: function () {
            return a;
        },
        default: function () {
            return f;
        }
    });
var l,
    a,
    i = n(200651),
    o = n(192379),
    r = n(481060),
    s = n(332664),
    c = n(142497),
    u = n(626135),
    d = n(981631),
    b = n(190378),
    m = n(388032);
((l = a || (a = {})).BAD_OUTLINE = 'BAD_OUTLINE'), (l.BACKGROUND_DETECTION_ACCURACY = 'BACKGROUND_DETECTION_ACCURACY'), (l.FLICKERING = 'FLICKERING'), (l.BACKGROUND_DETECTION_LAG = 'BACKGROUND_DETECTION_LAG'), (l.OTHER = 'OTHER');
let x = ['OTHER'];
function f(e) {
    let { analyticsData: t, transitionState: l, onClose: a } = e;
    return (
        o.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, { type: 'Video Background Feedback' });
        }, []),
        (0, i.jsx)(s.Z, {
            modalType: 'video_background',
            header: m.intl.string(m.t.Wl8qXl),
            body: m.intl.string(m.t.vPw6j4),
            problemTitle: m.intl.string(m.t['UNFF8/']),
            problems: [
                {
                    value: 'BAD_OUTLINE',
                    label: m.intl.string(m.t.pyhS3t)
                },
                {
                    value: 'BACKGROUND_DETECTION_ACCURACY',
                    label: m.intl.string(m.t.cymRTU)
                },
                {
                    value: 'FLICKERING',
                    label: m.intl.string(m.t.xZ60CA)
                },
                {
                    value: 'BACKGROUND_DETECTION_LAG',
                    label: m.intl.string(m.t.DweTcX)
                },
                {
                    value: 'OTHER',
                    label: m.intl.string(m.t['emlT9/'])
                }
            ],
            feedbackProblems: x,
            onSubmit: function (e) {
                var l, a, o, s;
                let { rating: x, problem: f, dontShowAgain: C, feedback: N } = e;
                if ((C && (0, c.Kw)(b.v.VIDEO_BACKGROUND_FEEDBACK), null != x))
                    (l = x),
                        (a = f),
                        (o = N),
                        (s = t),
                        u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                            ...s,
                            reason: a,
                            rating: l,
                            feedback: o
                        }),
                        null != f &&
                            (0, r.openModalLazy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        body: m.intl.string(m.t.aHB11d),
                                        ...t
                                    });
                            });
            },
            onClose: a,
            transitionState: l,
            otherKey: 'OTHER'
        })
    );
}
