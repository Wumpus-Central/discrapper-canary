n.d(t, { A: () => s });
var i = n(64700),
    l = n(695825);
function s(e) {
    let [t, n] = i.useState(!0),
        [s, r] = i.useState(),
        [a, o] = i.useState(),
        d = i.useCallback(async (e) => {
            n(!0), r(void 0);
            try {
                let t = await l.zW(e);
                o(t);
            } catch (e) {
                r(e);
            } finally {
                n(!1);
            }
        }, []);
    return (
        i.useEffect(() => {
            d(e);
        }, [e, d]),
        { isLoading: t, error: s, highlightedCreatorDetails: a }
    );
}
