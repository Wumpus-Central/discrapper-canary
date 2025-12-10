n.d(e, { L: () => A }), n(539854);
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(442837),
    r = n(199849),
    a = n(846027),
    o = n(509613),
    c = n(131951),
    d = n(63063),
    S = n(210887),
    T = n(313789),
    E = n(803567),
    g = n(981631),
    I = n(388032);
let _ = n(775322),
    O = n(353385);
function N() {
    let t = (0, u.e7)([S.Z], () => (0, s.apv)(S.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? _ : O,
        width: 48,
        height: 32,
        alt: "",
    });
}
let A = (0, o.ON)(T.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [I.intl.string(I.t.t8Qhib), I.intl.string(I.t.hmfkCi)],
    usePredicate: function () {
        return (0, u.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    Component: function () {
        let t = l.useCallback((t) => {
                a.Z.setNoiseCancellation(t === E.Q4.KRISP, E.MP), a.Z.setNoiseSuppression(t === E.Q4.STANDARD, E.MP);
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: n,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: S,
            } = (0, u.cj)([c.Z], () => ({
                noiseCancellation: c.Z.getNoiseCancellation(),
                noiseSuppression: c.Z.getNoiseSuppression(),
                isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
            })),
            T = n ? E.Q4.STANDARD : E.Q4.NONE,
            _ = e ? E.Q4.KRISP : T,
            O = l.useMemo(() => {
                let t = [];
                return (
                    S &&
                        t.push({
                            label: I.intl.string(I.t.rdoNzt),
                            value: E.Q4.KRISP,
                        }),
                    o &&
                        t.push({
                            label: I.intl.string(I.t.qXeYHw),
                            value: E.Q4.STANDARD,
                        }),
                    t.push({
                        label: I.intl.string(I.t.wkYAlz),
                        value: E.Q4.NONE,
                    }),
                    t
                );
            }, [S, o]),
            A = S
                ? I.intl.format(I.t["1q5aTp"], { helpArticle: d.Z.getArticleURL(g.BhN.NOISE_SUPPRESSION) })
                : I.intl.string(I.t.OWKjw5);
        return (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, i.jsx)(r.y6, {
                    label: I.intl.string(I.t.t8Qhib),
                    description: A,
                    layout: "horizontal",
                    value: _,
                    onChange: t,
                    options: O,
                }),
                S && (0, i.jsx)(N, {}),
            ],
        });
    },
});
