r.d(t, { A: () => o });
var n = r(73800),
    a = r(442837),
    l = r(751648),
    i = r(479766);
function o() {
    let {
        balance: e,
        isFetching: t,
        error: r
    } = (0, a.cj)([i.Z], () => ({
        balance: i.Z.balance,
        isFetching: i.Z.isFetchingBalance,
        error: i.Z.fetchBalanceError
    }));
    return (
        (0, n.useEffect)(() => {
            null !== e || null !== r || t || (0, l.ZO)();
        }, [e, r, t]),
        {
            balance: e,
            isFetching: t,
            error: r
        }
    );
}
