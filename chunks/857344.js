n.d(t, {
    o: () => l,
    w: () => c,
});
var r = n(172534),
    i = n(486507),
    a = n(473749),
    o = n(780667);
let s = {
    ascending: "descending",
    descending: "ascending",
};
function l(e) {
    var t;
    let [n, l] = (0, a.useState)(!1),
        { selectionMode: c = "none", showSelectionCheckboxes: u, showDragButtons: d } = e,
        f = (0, a.useMemo)(
            () => ({
                showSelectionCheckboxes: u && "none" !== c,
                showDragButtons: d,
                selectionMode: c,
                columns: [],
            }),
            [e.children, u, c, d],
        ),
        p = (0, o.K)(
            e,
            (0, a.useCallback)((e) => new (0, r.J)(e, null, f), [f]),
            f,
        ),
        { disabledKeys: _, selectionManager: m } = (0, i.S)({
            ...e,
            collection: p,
            disabledBehavior: e.disabledBehavior || "selection",
        });
    return {
        collection: p,
        disabledKeys: _,
        selectionManager: m,
        showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
        sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
        isKeyboardNavigationDisabled: 0 === p.size || n,
        setKeyboardNavigationDisabled: l,
        sort(t, n) {
            var r, i;
            null == (i = e.onSortChange) ||
                i.call(e, {
                    column: t,
                    direction:
                        null != n
                            ? n
                            : (null == (r = e.sortDescriptor) ? void 0 : r.column) === t
                              ? s[e.sortDescriptor.direction]
                              : "ascending",
                });
        },
    };
}
function c(e, t) {
    let n = (0, a.useMemo)(() => (t ? e.collection.filter(t) : e.collection), [e.collection, t]),
        r = e.selectionManager.withCollection(n);
    return {
        ...e,
        collection: n,
        selectionManager: r,
    };
}
