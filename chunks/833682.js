n.d(e, { L: () => O }), n(539854);
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(442837),
    r = n(199849),
    a = n(846027),
    o = n(509613),
    S = n(131951),
    T = n(63063),
    c = n(210887),
    E = n(313789),
    d = n(803567),
    g = n(981631),
    _ = n(388032);
let I = n(775322),
    N = n(353385);
function A() {
    let t = (0, u.e7)([c.Z], () => (0, s.apv)(c.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? I : N,
        width: 48,
        height: 32,
        alt: "",
    });
}
let O = (0, o.ON)(E.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.t8Qhib), _.intl.string(_.t.hmfkCi)],
    usePredicate: function () {
        return (0, u.e7)([S.Z], () => S.Z.isInputProfileCustom() && S.Z.isNoiseSuppressionSupported());
    },
    Component: function () {
        let t = l.useCallback((t) => {
                a.Z.setNoiseCancellation(t === d.Q4.KRISP, d.MP), a.Z.setNoiseSuppression(t === d.Q4.STANDARD, d.MP);
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: n,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: c,
            } = (0, u.cj)([S.Z], () => ({
                noiseCancellation: S.Z.getNoiseCancellation(),
                noiseSuppression: S.Z.getNoiseSuppression(),
                isNoiseSuppressionSupported: S.Z.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: S.Z.isNoiseCancellationSupported(),
            })),
            E = n ? d.Q4.STANDARD : d.Q4.NONE,
            I = e ? d.Q4.KRISP : E,
            N = l.useMemo(() => {
                let t = [];
                return (
                    c &&
                        t.push({
                            label: _.intl.string(_.t.rdoNzt),
                            value: d.Q4.KRISP,
                        }),
                    o &&
                        t.push({
                            label: _.intl.string(_.t.qXeYHw),
                            value: d.Q4.STANDARD,
                        }),
                    t.push({
                        label: _.intl.string(_.t.wkYAlz),
                        value: d.Q4.NONE,
                    }),
                    t
                );
            }, [c, o]),
            O = c
                ? _.intl.format(_.t["1q5aTp"], { helpArticle: T.Z.getArticleURL(g.BhN.NOISE_SUPPRESSION) })
                : _.intl.string(_.t.OWKjw5);
        return (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, i.jsx)(r.y6, {
                    label: _.intl.string(_.t.t8Qhib),
                    description: O,
                    layout: "horizontal",
                    value: I,
                    onChange: t,
                    options: N,
                }),
                c && (0, i.jsx)(A, {}),
            ],
        });
    },
});
