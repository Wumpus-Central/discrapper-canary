n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(881052),
    s = n(53365);
function a(e) {
    let [t, n] = r.useState(!0),
        [a, l] = r.useState(),
        [o, c] = r.useState(),
        d = r.useCallback(async (e) => {
            n(!0), l(void 0);
            try {
                let t = await s.wZ(e);
                c(t);
            } catch (e) {
                l(new i.Hx(e));
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
