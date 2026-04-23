l.d(t, { a: () => r });
var n = l(224507),
    o = l(788951);
function r(e, t, l) {
    var r;
    let { gridCellProps: i, isPressed: s } = (0, o.Q)(e, t, l),
        u = null == (r = e.node.column) ? void 0 : r.key;
    return (
        null != u &&
            t.collection.rowHeaderColumnKeys.has(u) &&
            ((i.role = "rowheader"), (i.id = (0, n.un)(t, e.node.parentKey, u))),
        { gridCellProps: i, isPressed: s }
    );
}
