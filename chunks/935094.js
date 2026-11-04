var r = n(582128),
    i = n(575593);
n.d(
    t,
    {},
    {
        f: function (e) {
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
        },
    },
);
