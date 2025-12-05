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
    E = n(210887),
    S = n(313789),
    I = n(803567),
    T = n(981631),
    g = n(388032);
let _ = n(775322),
    O = n(353385);
function N() {
    let t = (0, r.e7)([E.Z], () => (0, s.apv)(E.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? _ : O,
        width: 48,
        height: 32,
        alt: "",
    });
}
function A() {
    let t = l.useCallback((t) => {
            a.Z.setNoiseCancellation(t === I.Q4.KRISP, I.MP), a.Z.setNoiseSuppression(t === I.Q4.STANDARD, I.MP);
        }, []),
        {
            noiseCancellation: e,
            noiseSuppression: n,
            isNoiseSuppressionSupported: o,
            isNoiseCancellationSupported: E,
        } = (0, r.cj)([c.Z], () => ({
            noiseCancellation: c.Z.getNoiseCancellation(),
            noiseSuppression: c.Z.getNoiseSuppression(),
            isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
            isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
        })),
        S = n ? I.Q4.STANDARD : I.Q4.NONE,
        _ = e ? I.Q4.KRISP : S,
        O = l.useMemo(() => {
            let t = [];
            return (
                E &&
                    t.push({
                        label: g.intl.string(g.t.rdoNzt),
                        value: I.Q4.KRISP,
                    }),
                o &&
                    t.push({
                        label: g.intl.string(g.t.qXeYHw),
                        value: I.Q4.STANDARD,
                    }),
                t.push({
                    label: g.intl.string(g.t.wkYAlz),
                    value: I.Q4.NONE,
                }),
                t
            );
        }, [E, o]),
        A = E
            ? g.intl.format(g.t["1q5aTp"], { helpArticle: d.Z.getArticleURL(T.BhN.NOISE_SUPPRESSION) })
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
            E && (0, i.jsx)(N, {}),
        ],
    });
}
let f = (0, o.ON)(S.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, r.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    render: () => (0, i.jsx)(A, {}),
});
