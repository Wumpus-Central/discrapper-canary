var n = l(477900),
    a = l(582128),
    i = l(192308),
    r = l(930932),
    d = l(612479),
    o = l(129230),
    u = l(652215),
    s = l(670455),
    b = l(792996);
let c = ["OTHER"];
l.d(
    t,
    {},
    {
        default: function (e) {
            let { analyticsData: t, transitionState: C, onClose: E } = e;
            return (
                a.useEffect(() => {
                    o.default.track(u.HAw.OPEN_MODAL, { type: "Video Background Feedback" });
                }, []),
                (0, n.jsx)(d.A, {
                    modalType: "video_background",
                    header: b.intl.string(b.t.Wl8qXg),
                    body: b.intl.string(b.t.vPw6j0),
                    problemTitle: b.intl.string(b.t.UNFF85),
                    problems: [
                        { value: "BAD_OUTLINE", label: b.intl.string(b.t.pyhS3j) },
                        { value: "BACKGROUND_DETECTION_ACCURACY", label: b.intl.string(b.t.cymRTb) },
                        { value: "FLICKERING", label: b.intl.string(b.t.xZ60CB) },
                        { value: "BACKGROUND_DETECTION_LAG", label: b.intl.string(b.t.DweTcb) },
                        { value: "OTHER", label: b.intl.string(b.t.emlT91) },
                    ],
                    freeformNeededProblems: c,
                    onSubmit: function (e) {
                        var a;
                        let { rating: d, problem: c, dontShowAgain: C, feedback: E } = e;
                        (C &&
                            (0, r.n3)({
                                feedbackType: s.MW.VIDEO_BACKGROUND,
                                location: "VideoBackgroundFeedbackModal",
                            }),
                            null != d &&
                                ((a = c?.value ?? null),
                                o.default.track(u.HAw.VIDEO_BACKGROUND_FEEDBACK, {
                                    ...t,
                                    reason: a,
                                    rating: d,
                                    feedback: E,
                                }),
                                null != c &&
                                    (0, i.mM)(async () => {
                                        let { default: e } = await l.e(137836).then(l.bind(l, 845671));
                                        return (t) => (0, n.jsx)(e, { body: b.intl.string(b.t.aHB11f), ...t });
                                    })));
                    },
                    onClose: E,
                    transitionState: C,
                    otherKey: "OTHER",
                })
            );
        },
    },
);
