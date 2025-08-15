r.d(t, { A: () => o });
var n = r(647438),
    a = r(442837),
    i = r(751648),
    l = r(479766);
function o() {
    let {
        balance: e,
        isFetching: t,
        error: r,
    } = (0, a.cj)([l.Z], () => ({
        balance: l.Z.balance,
        isFetching: l.Z.isFetchingBalance,
        error: l.Z.fetchBalanceError,
    }));
    return (
        (0, n.useEffect)(() => {
            null !== e || null !== r || t || (0, i.ZO)();
        }, [e, r, t]),
        {
            balance: e,
            isFetching: t,
            error: r,
        }
    );
}
