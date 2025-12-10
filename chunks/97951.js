n.d(e, { F: () => g });
var i = n(54381),
    l = n(399606),
    s = n(481060),
    u = n(509613),
    r = n(131951),
    a = n(63063),
    o = n(313789),
    c = n(823087),
    d = n(981631),
    S = n(65154),
    T = n(388032);
let E = "".concat(
        a.Z.getArticleURL(d.BhN.VOICE_VIDEO_TROUBLESHOOTING),
        "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
    ),
    g = (0, u.ON)(o.n.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [T.intl.string(T.t.nuFtHH)],
        usePredicate: function () {
            return (0, l.e7)([r.Z], () => r.Z.supports(S.AN.LOOPBACK));
        },
        Component: function () {
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.Z, {}),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: T.intl.format(T.t["V+B3FH"], { guideURL: E }),
                    }),
                ],
            });
        },
    });
