e.d(a, { f: () => s });
var n = e(64700),
    r = e(575593);
let s = (t) => {
    let [a, e] = (0, n.useState)(null);
    return {
        previewingVariantIndex: a,
        handleEntering: (0, n.useCallback)(
            (a) => {
                t?.type !== r.R.VARIANTS_GROUP || e(a);
            },
            [t?.type],
        ),
        handleLeaving: (0, n.useCallback)(() => {
            t?.type !== r.R.VARIANTS_GROUP || e(null);
        }, [t?.type]),
    };
};
