n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(347469),
    r = n(76872);
function s(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s, minHeight: o, maxHeight: c } = e,
        [d, u] = l.useState(null);
    l.useEffect(() => {
        var e, n;
        u(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null);
    }, [t]);
    let h = (0, a.Z)({
        initialElementDimension: d,
        minDimension: o,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: s,
        orientation: a.y.VERTICAL_BOTTOM
    });
    return (0, i.jsx)('div', {
        onMouseDown: h,
        className: r.resizeHandle
    });
}
