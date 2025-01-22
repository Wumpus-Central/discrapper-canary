r.d(n, {
    s: function () {
        return u;
    }
});
var i = r(192379),
    a = r(820282),
    o = r.n(a),
    s = r(298503),
    l = r(632590);
function u(e) {
    var n = e.children,
        r = e.innerRef,
        a = i.useContext(s.mq),
        u = i.useCallback(
            function (e) {
                (0, l.k$)(r, e), (0, l.DL)(a, e);
            },
            [r, a]
        );
    return (
        i.useEffect(function () {
            return function () {
                return (0, l.k$)(r, null);
            };
        }, []),
        i.useEffect(
            function () {
                o()(!!a, '`Reference` should not be used outside of a `Manager` component.');
            },
            [a]
        ),
        (0, l.$p)(n)({ ref: u })
    );
}
