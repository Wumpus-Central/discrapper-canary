n.d(e, { Z: () => f }), n(539854);
var i = n(951288),
    l = n(647438),
    r = n(793030),
    u = n(442837),
    s = n(481060),
    a = n(846027),
    o = n(509613),
    c = n(131951),
    E = n(63063),
    d = n(210887),
    S = n(313789),
    T = n(803567),
    O = n(981631),
    g = n(388032);
let I = n(775322),
    _ = n(853453);
function A() {
    let t = (0, u.e7)([d.Z], () => (0, r.apv)(d.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? I : _,
        width: 48,
        height: 27,
        alt: "",
    });
}
function N() {
    let t = l.useCallback((t) => {
            a.Z.setNoiseCancellation(t === T.Q4.KRISP, T.MP), a.Z.setNoiseSuppression(t === T.Q4.STANDARD, T.MP);
        }, []),
        {
            noiseCancellation: e,
            noiseSuppression: n,
            isNoiseSuppressionSupported: r,
            isNoiseCancellationSupported: o,
        } = (0, u.cj)([c.Z], () => ({
            noiseCancellation: c.Z.getNoiseCancellation(),
            noiseSuppression: c.Z.getNoiseSuppression(),
            isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
            isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
        })),
        d = n ? T.Q4.STANDARD : T.Q4.NONE,
        S = e ? T.Q4.KRISP : d,
        I = l.useMemo(() => {
            let t = [];
            return (
                o &&
                    t.push({
                        label: g.intl.string(g.t.rdoNzt),
                        value: T.Q4.KRISP,
                    }),
                r &&
                    t.push({
                        label: g.intl.string(g.t.qXeYHw),
                        value: T.Q4.STANDARD,
                    }),
                t.push({
                    label: g.intl.string(g.t.wkYAlz),
                    value: T.Q4.NONE,
                }),
                t
            );
        }, [o, r]),
        _ = o
            ? g.intl.format(g.t["1q5aTp"], { helpArticle: E.Z.getArticleURL(O.BhN.NOISE_SUPPRESSION) })
            : g.intl.string(g.t.OWKjw5);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.q4e, {
                label: g.intl.string(g.t.t8Qhib),
                description: _,
                layout: "horizontal",
                value: S,
                onChange: t,
                options: I,
            }),
            o && (0, i.jsx)(A, {}),
        ],
    });
}
let f = (0, o.ON)(S.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    usePredicate: function () {
        return (0, u.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    render: () => (0, i.jsx)(N, {}),
});
