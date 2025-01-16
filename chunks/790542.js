n.d(t, {
    A: function () {
        return l;
    }
});
var i = n(192379),
    r = n(442837),
    s = n(751648),
    a = n(479766);
function l() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, r.cj)([a.Z], () => ({
        balance: a.Z.balance,
        isFetching: a.Z.isFetchingBalance,
        error: a.Z.fetchBalanceError
    }));
    return (
        (0, i.useEffect)(() => {
            null === e && null === n && !t && (0, s.Z)();
        }, [e, n, t]),
        {
            balance: e,
            isFetching: t,
            error: n
        }
    );
}
