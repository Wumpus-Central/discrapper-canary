n.d(e, { Z: () => g });
var i = n(54381),
    l = n(399606),
    s = n(481060),
    r = n(509613),
    u = n(131951),
    a = n(63063),
    o = n(313789),
    c = n(823087),
    d = n(981631),
    E = n(65154),
    S = n(388032);
let I = "".concat(
    a.Z.getArticleURL(d.BhN.VOICE_VIDEO_TROUBLESHOOTING),
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
);
function T() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: S.intl.format(S.t["V+B3FH"], { guideURL: I }),
            }),
        ],
    });
}
let g = (0, r.ON)(o.n.VOICE_MICROPHONE_TEST_SETTING, {
    render: () => (0, i.jsx)(T, {}),
    usePredicate: function () {
        return (0, l.e7)([u.Z], () => u.Z.supports(E.AN.LOOPBACK));
    },
    useSearchTerms: () => [S.intl.string(S.t.nuFtHH)],
});
