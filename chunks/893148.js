n.d(t, { A: () => s }), n(896048);
var r = n(64700),
    i = n(198982),
    l = n(493540);
function s(e) {
    let [t, n] = r.useState(!0),
        [s, a] = r.useState(),
        [c, o] = r.useState(),
        d = r.useCallback(async (e) => {
            n(!0), a(void 0);
            try {
                let t = await l.P(e);
                o(t);
            } catch (e) {
                a(new i.LG(e));
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
            creatorMonetizationOnboardingMarketing: c,
        }
    );
}
