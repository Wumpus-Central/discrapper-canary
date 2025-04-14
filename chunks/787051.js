n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(881052),
    s = n(53365);
function l(e) {
    let [t, n] = r.useState(!0),
        [l, a] = r.useState(),
        [o, c] = r.useState(),
        d = r.useCallback(async (e) => {
            n(!0), a(void 0);
            try {
                let t = await s.wZ(e);
                c(t);
            } catch (e) {
                a(new i.Hx(e));
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
            error: l,
            creatorMonetizationOnboardingMarketing: o
        }
    );
}
