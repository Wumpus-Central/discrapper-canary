n.d(e, { Z: () => g });
var i = n(54381),
    r = n(399606),
    l = n(481060),
    s = n(509613),
    u = n(131951),
    a = n(63063),
    o = n(313789),
    c = n(823087),
    d = n(981631),
    E = n(65154),
    S = n(388032);
let T = "".concat(
    a.Z.getArticleURL(d.BhN.VOICE_VIDEO_TROUBLESHOOTING),
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
);
function I() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: S.intl.format(S.t["V+B3FH"], { guideURL: T }),
            }),
        ],
    });
}
let g = (0, s.ON)(o.n.VOICE_MICROPHONE_TEST_SETTING, {
    render: () => (0, i.jsx)(I, {}),
    usePredicate: function () {
        return (0, r.e7)([u.Z], () => u.Z.supports(E.AN.LOOPBACK));
    },
    useSearchTerms: () => [S.intl.string(S.t.nuFtHH)],
});
