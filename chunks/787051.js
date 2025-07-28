(n.d(t, { Z: () => a }), n(388685));
var r = n(73800),
    i = n(881052),
    l = n(53365);
function a(e) {
    let [t, n] = r.useState(!0),
        [a, s] = r.useState(),
        [o, c] = r.useState(),
        d = r.useCallback(async (e) => {
            (n(!0), s(void 0));
            try {
                let t = await l.wZ(e);
                c(t);
            } catch (e) {
                s(new i.Hx(e));
            } finally {
                n(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            d(e);
        }, [e, d]),
        {
            isLoading: t,
            error: a,
            creatorMonetizationOnboardingMarketing: o
        }
    );
}
