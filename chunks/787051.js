n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(881052),
    l = n(53365);
function s(e) {
    let [t, n] = r.useState(!0),
        [s, a] = r.useState(),
        [o, c] = r.useState(),
        d = r.useCallback(async (e) => {
            n(!0), a(void 0);
            try {
                let t = await l.wZ(e);
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
            error: s,
            creatorMonetizationOnboardingMarketing: o
        }
    );
}
