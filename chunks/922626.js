(n.d(t, { Z: () => s }), n(388685));
var i = n(73800),
    r = n(809206);
function s(e) {
    let { onSuccess: t, onError: n } = e,
        [s, a] = i.useState(!1);
    return {
        handleApplyDisplayNameStyles: i.useCallback(
            async (e) => {
                a(!0);
                try {
                    (await (0, r.Mn)({ displayNameStyles: e }), null == t || t());
                } catch (e) {
                    null == n || n(e);
                } finally {
                    a(!1);
                }
            },
            [t, n]
        ),
        isApplying: s
    };
}
