n.d(t, { s: () => l });
var r = n(192379),
    i = n(820282),
    o = n.n(i),
    a = n(298503),
    s = n(632590);
function l(e) {
    var t = e.children,
        n = e.innerRef,
        i = r.useContext(a.mq),
        l = r.useCallback(
            function (e) {
                (0, s.k$)(n, e), (0, s.DL)(i, e);
            },
            [n, i]
        );
    return (
        r.useEffect(function () {
            return function () {
                return (0, s.k$)(n, null);
            };
        }, []),
        r.useEffect(
            function () {
                o()(!!i, '`Reference` should not be used outside of a `Manager` component.');
            },
            [i]
        ),
        (0, s.$p)(t)({ ref: l })
    );
}
