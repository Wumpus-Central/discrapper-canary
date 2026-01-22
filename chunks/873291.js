n.d(t, {
    E: () => h,
});
var r = n(403992),
    i = n(966209),
    a = n(227510),
    s = n(406985),
    o = n(723906),
    l = n(290424),
    c = n(803082),
    u = n(64700),
    d = n(74172),
    f = n(853590),
    p = n(510281),
    _ = n(564949);

function h(e, t, n) {
    let {
            isVirtualized: h,
            disallowTypeAhead: m,
            keyboardDelegate: g,
            focusMode: E,
            scrollRef: b,
            getRowText: y,
            onRowAction: O,
            onCellAction: A,
            escapeKeyBehavior: v = "clearSelection",
            shouldSelectOnPressUp: S,
        } = e,
        { selectionManager: I } = t;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let T = (0, d.Q)({
            usage: "search",
            sensitivity: "base",
        }),
        { direction: C } = (0, f.Y)(),
        N = t.selectionManager.disabledBehavior,
        R = (0, u.useMemo)(
            () =>
                g ||
                new (0, r.J)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: N,
                    ref: n,
                    direction: C,
                    collator: T,
                    focusMode: E,
                }),
            [g, t.collection, t.disabledKeys, N, n, C, T, E],
        ),
        { collectionProps: w } = (0, _.y)({
            ref: n,
            selectionManager: I,
            keyboardDelegate: R,
            isVirtualized: h,
            scrollRef: b,
            disallowTypeAhead: m,
            escapeKeyBehavior: v,
        }),
        P = (0, o.Bi)(e.id);
    i.B.set(t, {
        keyboardDelegate: R,
        actions: {
            onRowAction: O,
            onCellAction: A,
        },
        shouldSelectOnPressUp: S,
    });
    let D = (0, s.m)({
            selectionManager: I,
            hasItemActions: !!(O || A),
        }),
        x = (0, l.$)(e, {
            labelable: !0,
        }),
        L = (0, u.useCallback)(
            (e) => {
                if (I.isFocused) {
                    e.currentTarget.contains(e.target) || I.setFocused(!1);
                    return;
                }
                e.currentTarget.contains(e.target) && I.setFocused(!0);
            },
            [I],
        ),
        j = (0, u.useMemo)(
            () => ({
                onBlur: w.onBlur,
                onFocus: L,
            }),
            [L, w.onBlur],
        ),
        M = (0, p.$)(n, {
            isDisabled: 0 !== t.collection.size,
        }),
        k = (0, c.v)(
            x,
            {
                role: "grid",
                id: P,
                "aria-multiselectable": "multiple" === I.selectionMode ? "true" : void 0,
            },
            t.isKeyboardNavigationDisabled ? j : w,
            (0 === t.collection.size && {
                tabIndex: M ? -1 : 0,
            }) ||
                void 0,
            D,
        );
    return (
        h && ((k["aria-rowcount"] = t.collection.size), (k["aria-colcount"] = t.collection.columnCount)),
        (0, a.H)(
            {
                getRowText: y,
            },
            t,
        ),
        {
            gridProps: k,
        }
    );
}
