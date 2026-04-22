r.d(t, { default: () => _ });
var l = r(627968),
    a = r(64700),
    o = r(192308),
    n = r(930932),
    i = r(612479),
    d = r(954571),
    s = r(652215),
    u = r(670455),
    c = r(985018);
let b = ["OTHER"];
function _(e) {
    let { analyticsData: t, transitionState: _, onClose: g } = e;
    return (
        a.useEffect(() => {
            d.default.track(s.HAw.OPEN_MODAL, { type: "Video Background Feedback" });
        }, []),
        (0, l.jsx)(i.A, {
            modalType: "video_background",
            header: c.intl.string(c.t.Wl8qXg),
            body: c.intl.string(c.t.vPw6j0),
            problemTitle: c.intl.string(c.t.UNFF85),
            problems: [
                { value: "BAD_OUTLINE", label: c.intl.string(c.t.pyhS3j) },
                { value: "BACKGROUND_DETECTION_ACCURACY", label: c.intl.string(c.t.cymRTb) },
                { value: "FLICKERING", label: c.intl.string(c.t.xZ60CB) },
                { value: "BACKGROUND_DETECTION_LAG", label: c.intl.string(c.t.DweTcb) },
                { value: "OTHER", label: c.intl.string(c.t.emlT91) },
            ],
            freeformNeededProblems: b,
            onSubmit: function (e) {
                var a;
                let { rating: i, problem: b, dontShowAgain: _, feedback: g } = e;
                _ && (0, n.n3)({ feedbackType: u.MW.VIDEO_BACKGROUND, location: "VideoBackgroundFeedbackModal" }),
                    null != i &&
                        ((a = b?.value ?? null),
                        d.default.track(s.HAw.VIDEO_BACKGROUND_FEEDBACK, { ...t, reason: a, rating: i, feedback: g }),
                        null != b &&
                            (0, o.openModalLazy)(async () => {
                                let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                                return (t) => (0, l.jsx)(e, { body: c.intl.string(c.t.aHB11f), ...t });
                            }));
            },
            onClose: g,
            transitionState: _,
            otherKey: "OTHER",
        })
    );
}
