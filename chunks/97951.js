n.d(e, { Z: () => O });
var i = n(54381),
    l = n(399606),
    r = n(481060),
    u = n(509613),
    s = n(131951),
    a = n(63063),
    o = n(313789),
    c = n(823087),
    E = n(981631),
    d = n(65154),
    S = n(388032);
let T = "".concat(
    a.Z.getArticleURL(E.BhN.VOICE_VIDEO_TROUBLESHOOTING),
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
);
function I() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: S.intl.format(S.t["V+B3FH"], { guideURL: T }),
            }),
        ],
    });
}
let O = (0, u.ON)(o.n.VOICE_MICROPHONE_TEST_SETTING, {
    render: () => (0, i.jsx)(I, {}),
    usePredicate: function () {
        return (0, l.e7)([s.Z], () => s.Z.supports(d.AN.LOOPBACK));
    },
    useSearchTerms: () => [S.intl.string(S.t.nuFtHH)],
});
