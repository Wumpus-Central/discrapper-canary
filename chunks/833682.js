n.d(e, { L: () => f }), n(539854);
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(442837),
    u = n(199849),
    a = n(846027),
    o = n(509613),
    c = n(131951),
    d = n(63063),
    T = n(210887),
    E = n(313789),
    S = n(803567),
    I = n(981631),
    g = n(388032);
let _ = n(775322),
    O = n(353385);
function N() {
    let t = (0, r.e7)([T.Z], () => (0, s.apv)(T.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? _ : O,
        width: 48,
        height: 32,
        alt: "",
    });
}
function A() {
    let t = l.useCallback((t) => {
            a.Z.setNoiseCancellation(t === S.Q4.KRISP, S.MP), a.Z.setNoiseSuppression(t === S.Q4.STANDARD, S.MP);
        }, []),
        {
            noiseCancellation: e,
            noiseSuppression: n,
            isNoiseSuppressionSupported: o,
            isNoiseCancellationSupported: T,
        } = (0, r.cj)([c.Z], () => ({
            noiseCancellation: c.Z.getNoiseCancellation(),
            noiseSuppression: c.Z.getNoiseSuppression(),
            isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
            isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
        })),
        E = n ? S.Q4.STANDARD : S.Q4.NONE,
        _ = e ? S.Q4.KRISP : E,
        O = l.useMemo(() => {
            let t = [];
            return (
                T &&
                    t.push({
                        label: g.intl.string(g.t.rdoNzt),
                        value: S.Q4.KRISP,
                    }),
                o &&
                    t.push({
                        label: g.intl.string(g.t.qXeYHw),
                        value: S.Q4.STANDARD,
                    }),
                t.push({
                    label: g.intl.string(g.t.wkYAlz),
                    value: S.Q4.NONE,
                }),
                t
            );
        }, [T, o]),
        A = T
            ? g.intl.format(g.t["1q5aTp"], { helpArticle: d.Z.getArticleURL(I.BhN.NOISE_SUPPRESSION) })
            : g.intl.string(g.t.OWKjw5);
    return (0, i.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, i.jsx)(u.y6, {
                label: g.intl.string(g.t.t8Qhib),
                description: A,
                layout: "horizontal",
                value: _,
                onChange: t,
                options: O,
            }),
            T && (0, i.jsx)(N, {}),
        ],
    });
}
let f = (0, o.ON)(E.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    render: () => (0, i.jsx)(A, {}),
});
