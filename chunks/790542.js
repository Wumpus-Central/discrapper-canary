n.d(t, { A: () => a });
var i = n(192379),
    s = n(442837),
    r = n(751648),
    l = n(479766);
function a() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, s.cj)([l.Z], () => ({
        balance: l.Z.balance,
        isFetching: l.Z.isFetchingBalance,
        error: l.Z.fetchBalanceError
    }));
    return (
        (0, i.useEffect)(() => {
            null !== e || null !== n || t || (0, r.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n
        }
    );
}
