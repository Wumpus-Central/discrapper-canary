n.d(t, { H: () => u });
var r = n(647438),
    i = n(257439),
    o = n(338972),
    a = n(219384);
function u(e) {
    var t = (0, o.N)(),
        n = (0, r.useMemo)(
            function () {
                return new i.Y(t.getBackend());
            },
            [t],
        );
    return (
        (0, a.L)(
            function () {
                return (
                    (n.dropTargetOptions = e || null),
                    n.reconnect(),
                    function () {
                        return n.disconnectDropTarget();
                    }
                );
            },
            [e],
        ),
        n
    );
}
