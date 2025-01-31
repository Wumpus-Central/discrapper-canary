n.d(t, { s: () => l });
var i = n(192379),
    r = n(820282),
    a = n.n(r),
    s = n(298503),
    o = n(632590);
function l(e) {
    var t = e.children,
        n = e.innerRef,
        r = i.useContext(s.mq),
        l = i.useCallback(
            function (e) {
                (0, o.k$)(n, e), (0, o.DL)(r, e);
            },
            [n, r]
        );
    return (
        i.useEffect(function () {
            return function () {
                return (0, o.k$)(n, null);
            };
        }, []),
        i.useEffect(
            function () {
                a()(!!r, '`Reference` should not be used outside of a `Manager` component.');
            },
            [r]
        ),
        (0, o.$p)(t)({ ref: l })
    );
}
