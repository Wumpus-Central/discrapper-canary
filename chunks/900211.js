n.d(t, { Z: () => s }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(347469),
    a = n(432267);
function s(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s, minHeight: l, maxHeight: c } = e,
        [u, d] = i.useState(null);
    i.useEffect(() => {
        var e, n;
        d(null != (n = null == (e = t.current) ? void 0 : e.offsetHeight) ? n : null);
    }, [t]);
    let f = (0, o.Z)({
        initialElementDimension: u,
        minDimension: l,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: s,
        orientation: o.y.VERTICAL_BOTTOM,
    });
    return (0, r.jsx)("div", {
        onMouseDown: f,
        className: a.resizeHandle,
    });
}
