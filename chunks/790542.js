n.d(t, { A: () => o });
var a = n(647438),
    r = n(442837),
    i = n(751648),
    s = n(479766);
function o() {
    let {
        balance: e,
        isFetching: t,
        error: n,
    } = (0, r.cj)([s.Z], () => ({
        balance: s.Z.balance,
        isFetching: s.Z.isFetchingBalance,
        error: s.Z.fetchBalanceError,
    }));
    return (
        (0, a.useEffect)(() => {
            null !== e || null !== n || t || (0, i.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n,
        }
    );
}
