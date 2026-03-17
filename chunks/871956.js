r.d(t, { e: () => u });
var n = r(64700),
    i = r(541163),
    o = r(190334),
    a = r(218436);
function u(e, t) {
    var r = (0, o.u)(),
        u = (0, n.useMemo)(
            function () {
                return new i.b(r.getBackend());
            },
            [r],
        );
    return (
        (0, a.E)(
            function () {
                return (
                    (u.dragSourceOptions = e || null),
                    u.reconnect(),
                    function () {
                        return u.disconnectDragSource();
                    }
                );
            },
            [u, e],
        ),
        (0, a.E)(
            function () {
                return (
                    (u.dragPreviewOptions = t || null),
                    u.reconnect(),
                    function () {
                        return u.disconnectDragPreview();
                    }
                );
            },
            [u, t],
        ),
        u
    );
}
