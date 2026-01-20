n.d(e, { L: () => O }), n(539854);
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(442837),
    r = n(481060),
    a = n(846027),
    o = n(509613),
    T = n(131951),
    S = n(63063),
    c = n(210887),
    E = n(313789),
    d = n(803567),
    _ = n(981631),
    g = n(388032);
let I = n(775322),
    A = n(353385);
function N() {
    let t = (0, u.e7)([c.Z], () => (0, s.apv)(c.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? I : A,
        width: 48,
        height: 32,
        alt: "",
    });
}
let O = (0, o.ON)(E.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, u.e7)([T.Z], () => T.Z.isInputProfileCustom() && T.Z.isNoiseSuppressionSupported());
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
            } = (0, u.cj)([T.Z], () => ({
                noiseCancellation: T.Z.getNoiseCancellation(),
                noiseSuppression: T.Z.getNoiseSuppression(),
                isNoiseSuppressionSupported: T.Z.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: T.Z.isNoiseCancellationSupported(),
            })),
            E = n ? d.Q4.STANDARD : d.Q4.NONE,
            I = e ? d.Q4.KRISP : E,
            A = l.useMemo(() => {
                let t = [];
                return (
                    c &&
                        t.push({
                            id: "krisp",
                            label: g.intl.string(g.t.rdoNzt),
                            value: d.Q4.KRISP,
                        }),
                    o &&
                        t.push({
                            id: "standard",
                            label: g.intl.string(g.t.qXeYHw),
                            value: d.Q4.STANDARD,
                        }),
                    t.push({
                        id: "disabled",
                        label: g.intl.string(g.t.wkYAlz),
                        value: d.Q4.NONE,
                    }),
                    t
                );
            }, [c, o]),
            O = c
                ? g.intl.format(g.t["1q5aTp"], { helpArticle: S.Z.getArticleURL(_.BhN.NOISE_SUPPRESSION) })
                : g.intl.string(g.t.OWKjw5);
        return (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, i.jsx)(r.PhF, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: O,
                    layout: "horizontal",
                    value: I,
                    onSelectionChange: t,
                    options: A,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                c && (0, i.jsx)(N, {}),
            ],
        });
    },
});
