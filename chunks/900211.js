(n.d(t, { Z: () => s }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(347469),
    o = n(955229);
function s(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s, minHeight: l, maxHeight: c } = e,
        [u, d] = i.useState(null);
    i.useEffect(() => {
        var e, n;
        d(null != (n = null == (e = t.current) ? void 0 : e.offsetHeight) ? n : null);
    }, [t]);
    let f = (0, a.Z)({
        initialElementDimension: u,
        minDimension: l,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: s,
        orientation: a.y.VERTICAL_BOTTOM
    });
    return (0, r.jsx)('div', {
        onMouseDown: f,
        className: o.resizeHandle
    });
}
