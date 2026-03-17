r.d(t, { e: () => o });
var n = r(321733),
    i = r(64700);
function o(e) {
    var t = e.accept;
    return (0, i.useMemo)(
        function () {
            return (0, n.V)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t];
        },
        [t],
    );
}
