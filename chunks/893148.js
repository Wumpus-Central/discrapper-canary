n.d(t, { A: () => r });
var i = n(64700),
    l = n(198982),
    s = n(493540);
function r(e) {
    let [t, n] = i.useState(!0),
        [r, a] = i.useState(),
        [o, d] = i.useState(),
        c = i.useCallback(async (e) => {
            n(!0), a(void 0);
            try {
                let t = await s.P(e);
                d(t);
            } catch (e) {
                a(new l.LG(e));
            } finally {
                n(!1);
            }
        }, []);
    return (
        i.useEffect(() => {
            c(e);
        }, [e, c]),
        { isLoading: t, error: r, creatorMonetizationOnboardingMarketing: o }
    );
}
