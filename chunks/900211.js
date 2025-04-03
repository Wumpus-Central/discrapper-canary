n.d(t, { Z: () => a }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(347469),
    o = n(955229);
function a(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a, minHeight: s, maxHeight: c } = e,
        [u, d] = i.useState(null);
    i.useEffect(() => {
        var e, n;
        d(null != (n = null == (e = t.current) ? void 0 : e.offsetHeight) ? n : null);
    }, [t]);
    let p = (0, l.Z)({
        initialElementDimension: u,
        minDimension: s,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: a,
        orientation: l.y.VERTICAL_BOTTOM
    });
    return (0, r.jsx)('div', {
        onMouseDown: p,
        className: o.resizeHandle
    });
}
