n.d(t, { Z: () => o }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(347469),
    a = n(432267);
function o(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: o, minHeight: s, maxHeight: c } = e,
        [u, d] = r.useState(null);
    r.useEffect(() => {
        var e, n;
        d(null != (n = null == (e = t.current) ? void 0 : e.offsetHeight) ? n : null);
    }, [t]);
    let p = (0, l.Z)({
        initialElementDimension: u,
        minDimension: s,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: o,
        orientation: l.y.VERTICAL_BOTTOM,
    });
    return (0, i.jsx)("div", {
        onMouseDown: p,
        className: a.resizeHandle,
    });
}
