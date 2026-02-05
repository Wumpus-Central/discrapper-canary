"use strict";
n.d(t, { E: () => h });
var r = n(403992),
    i = n(966209),
    a = n(227510),
    s = n(406985),
    o = n(723906),
    l = n(290424),
    u = n(803082),
    c = n(64700),
    d = n(74172),
    _ = n(853590),
    f = n(510281),
    p = n(564949);
function h(e, t, n) {
    let {
            isVirtualized: h,
            disallowTypeAhead: m,
            keyboardDelegate: g,
            focusMode: E,
            scrollRef: A,
            getRowText: I,
            onRowAction: T,
            onCellAction: y,
            escapeKeyBehavior: S = "clearSelection",
            shouldSelectOnPressUp: v,
        } = e,
        { selectionManager: C } = t;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let b = (0, d.Q)({ usage: "search", sensitivity: "base" }),
        { direction: N } = (0, _.Y)(),
        R = t.selectionManager.disabledBehavior,
        O = (0, c.useMemo)(
            () =>
                g ||
                new (0, r.J)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: R,
                    ref: n,
                    direction: N,
                    collator: b,
                    focusMode: E,
                }),
            [g, t.collection, t.disabledKeys, R, n, N, b, E],
        ),
        { collectionProps: D } = (0, p.y)({
            ref: n,
            selectionManager: C,
            keyboardDelegate: O,
            isVirtualized: h,
            scrollRef: A,
            disallowTypeAhead: m,
            escapeKeyBehavior: S,
        }),
        L = (0, o.Bi)(e.id);
    i.B.set(t, { keyboardDelegate: O, actions: { onRowAction: T, onCellAction: y }, shouldSelectOnPressUp: v });
    let w = (0, s.m)({ selectionManager: C, hasItemActions: !!(T || y) }),
        x = (0, l.$)(e, { labelable: !0 }),
        P = (0, c.useCallback)(
            (e) => {
                if (C.isFocused) {
                    e.currentTarget.contains(e.target) || C.setFocused(!1);
                    return;
                }
                e.currentTarget.contains(e.target) && C.setFocused(!0);
            },
            [C],
        ),
        M = (0, c.useMemo)(() => ({ onBlur: D.onBlur, onFocus: P }), [P, D.onBlur]),
        k = (0, f.$)(n, { isDisabled: 0 !== t.collection.size }),
        U = (0, u.v)(
            x,
            { role: "grid", id: L, "aria-multiselectable": "multiple" === C.selectionMode ? "true" : void 0 },
            t.isKeyboardNavigationDisabled ? M : D,
            (0 === t.collection.size && { tabIndex: k ? -1 : 0 }) || void 0,
            w,
        );
    return (
        h && ((U["aria-rowcount"] = t.collection.size), (U["aria-colcount"] = t.collection.columnCount)),
        (0, a.H)({ getRowText: I }, t),
        { gridProps: U }
    );
}
