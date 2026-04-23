l.d(t, { E: () => h });
var n = l(403992),
    o = l(966209),
    r = l(227510),
    i = l(406985),
    s = l(723906),
    u = l(290424),
    a = l(803082),
    c = l(64700),
    d = l(74172),
    g = l(853590),
    p = l(510281),
    m = l(564949);
function h(e, t, l) {
    let {
            isVirtualized: h,
            disallowTypeAhead: y,
            keyboardDelegate: v,
            focusMode: f,
            scrollRef: k,
            getRowText: b,
            onRowAction: S,
            onCellAction: C,
            escapeKeyBehavior: D = "clearSelection",
            shouldSelectOnPressUp: x,
        } = e,
        { selectionManager: A } = t;
    e["aria-label"] ||
        e["aria-labelledby"] ||
        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let w = (0, d.Q)({ usage: "search", sensitivity: "base" }),
        { direction: E } = (0, g.Y)(),
        K = t.selectionManager.disabledBehavior,
        z = (0, c.useMemo)(
            () =>
                v ||
                new (0, n.J)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: K,
                    ref: l,
                    direction: E,
                    collator: w,
                    focusMode: f,
                }),
            [v, t.collection, t.disabledKeys, K, l, E, w, f],
        ),
        { collectionProps: N } = (0, m.y)({
            ref: l,
            selectionManager: A,
            keyboardDelegate: z,
            isVirtualized: h,
            scrollRef: k,
            disallowTypeAhead: y,
            escapeKeyBehavior: D,
        }),
        B = (0, s.Bi)(e.id);
    o.B.set(t, { keyboardDelegate: z, actions: { onRowAction: S, onCellAction: C }, shouldSelectOnPressUp: x });
    let $ = (0, i.m)({ selectionManager: A, hasItemActions: !!(S || C) }),
        M = (0, u.$)(e, { labelable: !0 }),
        P = (0, c.useCallback)(
            (e) => {
                if (A.isFocused) {
                    e.currentTarget.contains(e.target) || A.setFocused(!1);
                    return;
                }
                e.currentTarget.contains(e.target) && A.setFocused(!0);
            },
            [A],
        ),
        F = (0, c.useMemo)(() => ({ onBlur: N.onBlur, onFocus: P }), [P, N.onBlur]),
        I = (0, p.$)(l, { isDisabled: 0 !== t.collection.size }),
        R = (0, a.v)(
            M,
            { role: "grid", id: B, "aria-multiselectable": "multiple" === A.selectionMode ? "true" : void 0 },
            t.isKeyboardNavigationDisabled ? F : N,
            (0 === t.collection.size && { tabIndex: I ? -1 : 0 }) || void 0,
            $,
        );
    return (
        h && ((R["aria-rowcount"] = t.collection.size), (R["aria-colcount"] = t.collection.columnCount)),
        (0, r.H)({ getRowText: b }, t),
        { gridProps: R }
    );
}
