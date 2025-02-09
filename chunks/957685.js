n.d(t, { F: () => a });
var i = n(573654),
    r = n(964742);
function a(e) {
    return function () {
        var t = e.getMonitor(),
            n = e.getRegistry();
        s(t);
        var i = t.getSourceId();
        return null != i && (n.getSource(i, !0).endDrag(t, i), n.unpinSource()), { type: r.Bs };
    };
}
function s(e) {
    (0, i.k)(e.isDragging(), 'Cannot call endDrag while not dragging.');
}
