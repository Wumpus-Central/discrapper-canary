n.d(t, { A: () => l }), n(896048);
var r = n(64700),
    i = n(695825);
function l(e) {
    let [t, n] = r.useState(!0),
        [l, s] = r.useState(),
        [a, c] = r.useState(),
        o = r.useCallback(async (e) => {
            n(!0), s(void 0);
            try {
                let t = await i.zW(e);
                c(t);
            } catch (e) {
                s(e);
            } finally {
                n(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            o(e);
        }, [e, o]),
        {
            isLoading: t,
            error: l,
            highlightedCreatorDetails: a,
        }
    );
}
