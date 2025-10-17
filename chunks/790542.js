n.d(t, { A: () => o });
var r = n(647438),
    l = n(442837),
    a = n(751648),
    i = n(479766);
function o() {
    let {
        balance: e,
        isFetching: t,
        error: n,
    } = (0, l.cj)([i.Z], () => ({
        balance: i.Z.balance,
        isFetching: i.Z.isFetchingBalance,
        error: i.Z.fetchBalanceError,
    }));
    return (
        (0, r.useEffect)(() => {
            null !== e || null !== n || t || (0, a.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n,
        }
    );
}
