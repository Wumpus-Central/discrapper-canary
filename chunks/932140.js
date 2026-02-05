_.d(t, { default: () => u });
var a = _(627968),
    c = _(64700),
    o = _(397927),
    l = _(930932),
    n = _(612479),
    i = _(954571),
    r = _(652215),
    b = _(670455),
    d = _(985018);
let s = ["OTHER"];
function u(e) {
    let { analyticsData: t, transitionState: u, onClose: m } = e;
    return (
        c.useEffect(() => {
            i.default.track(r.HAw.OPEN_MODAL, { type: "Video Background Feedback" });
        }, []),
        (0, a.jsx)(n.A, {
            modalType: "video_background",
            header: d.intl.string(d.t.Wl8qXg),
            body: d.intl.string(d.t.vPw6j0),
            problemTitle: d.intl.string(d.t.UNFF85),
            problems: [
                { value: "BAD_OUTLINE", label: d.intl.string(d.t.pyhS3j) },
                { value: "BACKGROUND_DETECTION_ACCURACY", label: d.intl.string(d.t.cymRTb) },
                { value: "FLICKERING", label: d.intl.string(d.t.xZ60CB) },
                { value: "BACKGROUND_DETECTION_LAG", label: d.intl.string(d.t.DweTcb) },
                { value: "OTHER", label: d.intl.string(d.t.emlT91) },
            ],
            freeformNeededProblems: s,
            onSubmit: function (e) {
                var c;
                let { rating: n, problem: s, dontShowAgain: u, feedback: m } = e;
                u && (0, l.n3)({ feedbackType: b.MW.VIDEO_BACKGROUND, location: "VideoBackgroundFeedbackModal" }),
                    null != n &&
                        ((c = s?.value ?? null),
                        i.default.track(r.HAw.VIDEO_BACKGROUND_FEEDBACK, { ...t, reason: c, rating: n, feedback: m }),
                        null != s &&
                            (0, o.mMO)(async () => {
                                let { default: e } = await _.e("37836").then(_.bind(_, 845671));
                                return (t) => (0, a.jsx)(e, { body: d.intl.string(d.t.aHB11f), ...t });
                            }));
            },
            onClose: m,
            transitionState: u,
            otherKey: "OTHER",
        })
    );
}
