a.d(e, { f: () => r });
var n = a(64700),
    l = a(575593);
let r = (t) => {
    let [e, a] = (0, n.useState)(null);
    return {
        previewingVariantIndex: e,
        handleEntering: (0, n.useCallback)(
            (e) => {
                t?.type !== l.R.VARIANTS_GROUP || a(e);
            },
            [t?.type],
        ),
        handleLeaving: (0, n.useCallback)(() => {
            t?.type !== l.R.VARIANTS_GROUP || a(null);
        }, [t?.type]),
    };
};
