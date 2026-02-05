"use strict";
n.d(t, { f: () => a });
var r = n(64700),
    i = n(575593);
let a = (e) => {
    let [t, n] = (0, r.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, r.useCallback)(
            (t) => {
                e?.type !== i.R.VARIANTS_GROUP || n(t);
            },
            [e?.type],
        ),
        handleLeaving: (0, r.useCallback)(() => {
            e?.type !== i.R.VARIANTS_GROUP || n(null);
        }, [e?.type]),
    };
};
