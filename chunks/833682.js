n.d(e, { Z: () => f }), n(539854);
var i = n(951288),
    l = n(647438),
    u = n(793030),
    r = n(442837),
    s = n(481060),
    a = n(846027),
    o = n(509613),
    c = n(131951),
    E = n(63063),
    S = n(210887),
    d = n(313789),
    T = n(803567),
    I = n(981631),
    O = n(388032);
let g = n(775322),
    _ = n(853453);
function N() {
    let t = (0, r.e7)([S.Z], () => (0, u.apv)(S.Z.theme));
    return (0, i.jsx)("img", {
        src: t ? g : _,
        width: 48,
        height: 27,
        alt: "",
    });
}
function A() {
    let t = l.useCallback((t) => {
            a.Z.setNoiseCancellation(t === T.Q4.KRISP, T.MP), a.Z.setNoiseSuppression(t === T.Q4.STANDARD, T.MP);
        }, []),
        {
            noiseCancellation: e,
            noiseSuppression: n,
            isNoiseSuppressionSupported: u,
            isNoiseCancellationSupported: o,
        } = (0, r.cj)([c.Z], () => ({
            noiseCancellation: c.Z.getNoiseCancellation(),
            noiseSuppression: c.Z.getNoiseSuppression(),
            isNoiseSuppressionSupported: c.Z.isNoiseSuppressionSupported(),
            isNoiseCancellationSupported: c.Z.isNoiseCancellationSupported(),
        })),
        S = n ? T.Q4.STANDARD : T.Q4.NONE,
        d = e ? T.Q4.KRISP : S,
        g = l.useMemo(() => {
            let t = [];
            return (
                o &&
                    t.push({
                        label: O.intl.string(O.t.rdoNzt),
                        value: T.Q4.KRISP,
                    }),
                u &&
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
        }, [o, u]),
        _ = o
            ? O.intl.format(O.t["1q5aTp"], { helpArticle: E.Z.getArticleURL(I.BhN.NOISE_SUPPRESSION) })
            : O.intl.string(O.t.OWKjw5);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.q4e, {
                label: O.intl.string(O.t.t8Qhib),
                description: _,
                layout: "horizontal",
                value: d,
                onChange: t,
                options: g,
            }),
            o && (0, i.jsx)(N, {}),
        ],
    });
}
let f = (0, o.ON)(d.n.VOICE_NOISE_SUPPRESSION_SETTING, {
    usePredicate: function () {
        return (0, r.e7)([c.Z], () => c.Z.isInputProfileCustom() && c.Z.isNoiseSuppressionSupported());
    },
    useSearchTerms: () => [O.intl.string(O.t.t8Qhib), O.intl.string(O.t.hmfkCi)],
    render: () => (0, i.jsx)(A, {}),
});
