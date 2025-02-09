n.d(t, { A: () => l });
var i = n(192379),
    r = n(442837),
    a = n(751648),
    s = n(479766);
function l() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, r.cj)([s.Z], () => ({
        balance: s.Z.balance,
        isFetching: s.Z.isFetchingBalance,
        error: s.Z.fetchBalanceError
    }));
    return (
        (0, i.useEffect)(() => {
            null !== e || null !== n || t || (0, a.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n
        }
    );
}
