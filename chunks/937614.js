e.d(n, { H: () => u });
var r = e(647438),
    o = e(257439),
    i = e(338972),
    a = e(219384);
function u(t) {
    var n = (0, i.N)(),
        e = (0, r.useMemo)(
            function () {
                return new o.Y(n.getBackend());
            },
            [n],
        );
    return (
        (0, a.L)(
            function () {
                return (
                    (e.dropTargetOptions = t || null),
                    e.reconnect(),
                    function () {
                        return e.disconnectDropTarget();
                    }
                );
            },
            [t],
        ),
        e
    );
}
