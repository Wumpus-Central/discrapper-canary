t.d(r, { Y: () => a });
var e = t(73800),
    o = t(63222),
    i = t(74463),
    u = t(541568);
function a(n, r) {
    var t = (0, i.N)(),
        a = (0, e.useMemo)(
            function () {
                return new o.x(t.getBackend());
            },
            [t]
        );
    return (
        (0, u.L)(
            function () {
                return (
                    (a.dragSourceOptions = n || null),
                    a.reconnect(),
                    function () {
                        return a.disconnectDragSource();
                    }
                );
            },
            [a, n]
        ),
        (0, u.L)(
            function () {
                return (
                    (a.dragPreviewOptions = r || null),
                    a.reconnect(),
                    function () {
                        return a.disconnectDragPreview();
                    }
                );
            },
            [a, r]
        ),
        a
    );
}
