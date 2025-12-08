n.d(e, { F: () => g });
var i = n(54381),
    l = n(399606),
    s = n(481060),
    r = n(509613),
    u = n(131951),
    a = n(63063),
    o = n(313789),
    c = n(823087),
    d = n(981631),
    T = n(65154),
    E = n(388032);
let S = "".concat(
    a.Z.getArticleURL(d.BhN.VOICE_VIDEO_TROUBLESHOOTING),
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
);
function I() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: E.intl.format(E.t["V+B3FH"], { guideURL: S }),
            }),
        ],
    });
}
let g = (0, r.ON)(o.n.VOICE_MICROPHONE_TEST_SETTING, {
    useSearchTerms: () => [E.intl.string(E.t.nuFtHH)],
    usePredicate: function () {
        return (0, l.e7)([u.Z], () => u.Z.supports(T.AN.LOOPBACK));
    },
    render: () => (0, i.jsx)(I, {}),
});
