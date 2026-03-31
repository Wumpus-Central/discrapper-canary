n.d(t, { f: () => i });
var r = n(64700),
    a = n(575593);
let i = (e) => {
    let [t, n] = (0, r.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, r.useCallback)(
            (t) => {
                e?.type !== a.R.VARIANTS_GROUP || n(t);
            },
            [e?.type],
        ),
        handleLeaving: (0, r.useCallback)(() => {
            e?.type !== a.R.VARIANTS_GROUP || n(null);
        }, [e?.type]),
    };
};
