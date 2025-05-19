n.d(t, { A: () => a });
var i = n(73800),
    r = n(442837),
    s = n(751648),
    l = n(479766);
function a() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, r.cj)([l.Z], () => ({
        balance: l.Z.balance,
        isFetching: l.Z.isFetchingBalance,
        error: l.Z.fetchBalanceError
    }));
    return (
        (0, i.useEffect)(() => {
            null !== e || null !== n || t || (0, s.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n
        }
    );
}
