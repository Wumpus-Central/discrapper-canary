n.d(t, { A: () => s });
var r = n(192379),
    i = n(442837),
    o = n(751648),
    a = n(479766);
function s() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, i.cj)([a.Z], () => ({
        balance: a.Z.balance,
        isFetching: a.Z.isFetchingBalance,
        error: a.Z.fetchBalanceError
    }));
    return (
        (0, r.useEffect)(() => {
            null !== e || null !== n || t || (0, o.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n
        }
    );
}
