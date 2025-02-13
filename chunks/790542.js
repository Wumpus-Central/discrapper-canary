i.d(e, { A: () => l });
var n = i(192379),
    r = i(442837),
    s = i(751648),
    o = i(479766);
function l() {
    let {
        balance: t,
        isFetching: e,
        error: i
    } = (0, r.cj)([o.Z], () => ({
        balance: o.Z.balance,
        isFetching: o.Z.isFetchingBalance,
        error: o.Z.fetchBalanceError
    }));
    return (
        (0, n.useEffect)(() => {
            null !== t || null !== i || e || (0, s.ZO)();
        }, [t, i, e]),
        {
            balance: t,
            isFetching: e,
            error: i
        }
    );
}
