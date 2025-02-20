n.d(t, { A: () => s });
var r = n(192379),
    i = n(442837),
    l = n(751648),
    o = n(479766);
function s() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, i.cj)([o.Z], () => ({
        balance: o.Z.balance,
        isFetching: o.Z.isFetchingBalance,
        error: o.Z.fetchBalanceError
    }));
    return (
        (0, r.useEffect)(() => {
            null !== e || null !== n || t || (0, l.ZO)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n
        }
    );
}
