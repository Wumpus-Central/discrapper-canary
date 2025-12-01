n.d(e, { Z: () => A }), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    u = n(442837),
    s = n(481060),
    a = n(846027),
    o = n(509613),
    c = n(131951),
    d = n(63063),
    E = n(210887),
    S = n(313789),
    T = n(803567),
    I = n(981631),
    g = n(388032);
let O = n(775322),
    _ = n(353385);
function N() {
    let t = (0, u.e7)([E.Z], () => (0, l.apv)(E.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? O : _,
        width: 48,
        height: 32,
        alt: "",
    });
}
function f() {
    let t = r.useCallback((t) => {
            a.Z.setNoiseCancellation(t === T.Q4.KRISP, T.MP), a.Z.setNoiseSuppression(t === T.Q4.STANDARD, T.MP);
        }, []),
        {
            noiseCancellation: e,
            noiseSuppression: n,
            isNoiseSuppressionSupported: o,
            isNoiseCancellationSupported: E,
        } = (0, u.cj)([c.Z], () => ({
            noiseCancellation: c.Z.getNoiseCancellation(),
            noiseSuppression: c.Z.getNoiseSuppression(),
            isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
            isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
        })),
        S = n ? T.Q4.STANDARD : T.Q4.NONE,
        O = e ? T.Q4.KRISP : S,
        _ = r.useMemo(() => {
            let t = [];
            return (
                E &&
                    t.push({
                        label: g.intl.string(g.t.rdoNzt),
                        value: T.Q4.KRISP,
                    }),
                o &&
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
        }, [E, o]),
        f = E
            ? g.intl.format(g.t["1q5aTp"], { helpArticle: d.Z.getArticleURL(I.BhN.NOISE_SUPPRESSION) })
            : g.intl.string(g.t.OWKjw5);
    return (0, i.jsxs)(l.Kqy, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, i.jsx)(s.q4e, {
                label: g.intl.string(g.t.t8Qhib),
                description: f,
                layout: "horizontal",
                value: O,
                onChange: t,
                options: _,
            }),
            E && (0, i.jsx)(N, {}),
        ],
    });
}
let A = (0, o.ON)(S.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    usePredicate: function () {
        return (0, u.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    render: () => (0, i.jsx)(f, {}),
});
