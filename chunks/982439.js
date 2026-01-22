n.d(t, {
    a: () => a,
});
var r = n(224507),
    i = n(788951);

function a(e, t, n) {
    var a;
    let { gridCellProps: s, isPressed: o } = (0, i.Q)(e, t, n),
        l = null == (a = e.node.column) ? void 0 : a.key;
    return (
        null != l &&
            t.collection.rowHeaderColumnKeys.has(l) &&
            ((s.role = "rowheader"), (s.id = (0, r.un)(t, e.node.parentKey, l))),
        {
            gridCellProps: s,
            isPressed: o,
        }
    );
}
