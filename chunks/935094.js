"use strict";
r.d(t, { f: () => s });
var n = r(64700),
    i = r(575593);
let s = (e) => {
    let [t, r] = (0, n.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, n.useCallback)(
            (t) => {
                e?.type !== i.R.VARIANTS_GROUP || r(t);
            },
            [e?.type],
        ),
        handleLeaving: (0, n.useCallback)(() => {
            e?.type !== i.R.VARIANTS_GROUP || r(null);
        }, [e?.type]),
    };
};
