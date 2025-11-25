n.d(e, { Z: () => A }), n(539854);
var i = n(54381),
    l = n(473749),
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
    I = n(981631),
    O = n(388032);
let g = n(775322),
    _ = n(353385);
function N() {
    let t = (0, u.e7)([d.Z], () => (0, r.apv)(d.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? g : _,
        width: 48,
        height: 32,
        alt: "",
    });
}
function f() {
    let t = l.useCallback((t) => {
            a.Z.setNoiseCancellation(t === T.Q4.KRISP, T.MP), a.Z.setNoiseSuppression(t === T.Q4.STANDARD, T.MP);
        }, []),
        {
            noiseCancellation: e,
            noiseSuppression: n,
            isNoiseSuppressionSupported: o,
            isNoiseCancellationSupported: d,
        } = (0, u.cj)([c.Z], () => ({
            noiseCancellation: c.Z.getNoiseCancellation(),
            noiseSuppression: c.Z.getNoiseSuppression(),
            isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
            isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
        })),
        S = n ? T.Q4.STANDARD : T.Q4.NONE,
        g = e ? T.Q4.KRISP : S,
        _ = l.useMemo(() => {
            let t = [];
            return (
                d &&
                    t.push({
                        label: O.intl.string(O.t.rdoNzt),
                        value: T.Q4.KRISP,
                    }),
                o &&
                    t.push({
                        label: O.intl.string(O.t.qXeYHw),
                        value: T.Q4.STANDARD,
                    }),
                t.push({
                    label: O.intl.string(O.t.wkYAlz),
                    value: T.Q4.NONE,
                }),
                t
            );
        }, [d, o]),
        f = d
            ? O.intl.format(O.t["1q5aTp"], { helpArticle: E.Z.getArticleURL(I.BhN.NOISE_SUPPRESSION) })
            : O.intl.string(O.t.OWKjw5);
    return (0, i.jsxs)(r.Kqy, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, i.jsx)(s.q4e, {
                label: O.intl.string(O.t.t8Qhib),
                description: f,
                layout: "horizontal",
                value: g,
                onChange: t,
                options: _,
            }),
            d && (0, i.jsx)(N, {}),
        ],
    });
}
let A = (0, o.ON)(S.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    usePredicate: function () {
        return (0, u.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    useSearchTerms: () => [O.intl.string(O.t.t8Qhib), O.intl.string(O.t.hmfkCi)],
    render: () => (0, i.jsx)(f, {}),
});
