n.d(t, { Z: () => d }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(347469),
    o = n(880230);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: r } = e,
        i = (0, s.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: r,
            orientation: s.y.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", {
        onPointerDown: i,
        className: o.resizeHandle,
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: i, minHeight: s } = e,
        d = r.useRef(null),
        [u, m] = r.useState(i);
    return (0, a.jsxs)("div", {
        ref: d,
        className: o.container,
        style: {
            minHeight: s,
            height: u,
        },
        children: [
            (0, a.jsx)(c, {
                resizableNode: d,
                minHeight: s,
                onResize: m,
            }),
            (0, a.jsx)("div", {
                className: l()(o.subPanelContent, n),
                children: t,
            }),
        ],
    });
}
