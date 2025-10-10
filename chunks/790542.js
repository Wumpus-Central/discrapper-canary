n.d(t, { A: () => o });
var r = n(647438),
    l = n(442837),
    i = n(751648),
    a = n(479766);
function o() {
    let {
        balance: e,
        isFetching: t,
        error: n,
    } = (0, l.cj)([a.Z], () => ({
        balance: a.Z.balance,
        isFetching: a.Z.isFetchingBalance,
        error: a.Z.fetchBalanceError,
    }));
    return (
        (0, r.useEffect)(() => {
            null !== e || null !== n || t || (0, i.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n,
        }
    );
}
