"use strict";
n.d(t, { n: () => g });
var r = n(625557),
    i = n(723906),
    s = n(260431),
    a = n(400606),
    o = n(150047),
    l = n(132716),
    u = n(803082),
    d = n(805447),
    c = n(13163),
    _ = n(64700),
    f = n(885714),
    E = n(404108),
    h = n(853590);
let p = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    m = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function g(e, t, n) {
    var g, I, T, S, y, N;
    let { node: O, isVirtualized: R } = e,
        { direction: v } = (0, h.Y)(),
        { onAction: C, linkBehavior: b, keyboardNavigationBehavior: D, shouldSelectOnPressUp: L } = r.nV.get(t),
        w = (0, i.X1)(),
        M = (0, _.useRef)(null),
        P = {},
        U = e.hasChildItems,
        k = t.selectionManager.isLink(O.key);
    if (null != O && "expandedKeys" in t) {
        let e = null == (T = (S = t.collection).getChildren) ? void 0 : T.call(S, O.key);
        (U = U || [...(null != e ? e : [])].length > 1),
            null == C && !k && "none" === t.selectionManager.selectionMode && U && (C = () => t.toggleKey(O.key));
        let n = U ? t.expandedKeys.has(O.key) : void 0,
            r = 1;
        if (O.level > 0 && (null == O ? void 0 : O.parentKey) != null) {
            let e = t.collection.getItem(O.parentKey);
            e &&
                (r = [...(null == (y = (N = t.collection).getChildren) ? void 0 : y.call(N, e.key))].filter(
                    (e) => "item" === e.type,
                ).length);
        } else r = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
        P = {
            "aria-expanded": n,
            "aria-level": O.level + 1,
            "aria-posinset": (null == O ? void 0 : O.index) + 1,
            "aria-setsize": r,
        };
    }
    let { itemProps: x, ...G } = (0, E.p)({
            selectionManager: t.selectionManager,
            key: O.key,
            ref: n,
            isVirtualized: R,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp || L,
            onAction:
                C || (null == (g = O.props) ? void 0 : g.onAction)
                    ? (0, s.c)(null == (I = O.props) ? void 0 : I.onAction, C ? () => C(O.key) : void 0)
                    : void 0,
            focus: () => {
                var e;
                null === n.current ||
                    ((null == M.current || O.key === M.current) &&
                        (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                    (0, d.l)(n.current);
            },
            linkBehavior: b,
        }),
        V = (0, l.HI)(O.props),
        F = G.hasAction ? V : {},
        B = (0, u.v)(x, F, {
            role: "row",
            onKeyDownCapture: (e) => {
                if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
                let r = (0, c.N$)(n.current);
                if (
                    ((r.currentNode = document.activeElement),
                    "expandedKeys" in t && document.activeElement === n.current)
                ) {
                    if (e.key === p[v] && t.selectionManager.focusedKey === O.key && U && !t.expandedKeys.has(O.key)) {
                        t.toggleKey(O.key), e.stopPropagation();
                        return;
                    } else if (
                        e.key === m[v] &&
                        t.selectionManager.focusedKey === O.key &&
                        U &&
                        t.expandedKeys.has(O.key)
                    ) {
                        t.toggleKey(O.key), e.stopPropagation();
                        return;
                    }
                }
                switch (e.key) {
                    case "ArrowLeft":
                        if ("arrow" === D) {
                            let t = "rtl" === v ? r.nextNode() : r.previousNode();
                            if (t)
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    (0, d.l)(t),
                                    (0, a.o)(t, { containingElement: (0, o.m)(n.current) });
                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === v))
                                (0, d.l)(n.current), (0, a.o)(n.current, { containingElement: (0, o.m)(n.current) });
                            else {
                                r.currentNode = n.current;
                                let e = A(r);
                                e && ((0, d.l)(e), (0, a.o)(e, { containingElement: (0, o.m)(n.current) }));
                            }
                        }
                        break;
                    case "ArrowRight":
                        if ("arrow" === D) {
                            let t = "rtl" === v ? r.previousNode() : r.nextNode();
                            if (t)
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    (0, d.l)(t),
                                    (0, a.o)(t, { containingElement: (0, o.m)(n.current) });
                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === v))
                                (0, d.l)(n.current), (0, a.o)(n.current, { containingElement: (0, o.m)(n.current) });
                            else {
                                r.currentNode = n.current;
                                let e = A(r);
                                e && ((0, d.l)(e), (0, a.o)(e, { containingElement: (0, o.m)(n.current) }));
                            }
                        }
                        break;
                    case "ArrowUp":
                    case "ArrowDown":
                        if (!e.altKey && n.current.contains(e.target)) {
                            var i;
                            e.stopPropagation(),
                                e.preventDefault(),
                                null == (i = n.current.parentElement) ||
                                    i.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                        }
                }
            },
            onKeyDown: (e) => {
                if (
                    e.currentTarget.contains(e.target) &&
                    n.current &&
                    document.activeElement &&
                    "Tab" === e.key &&
                    "tab" === D
                ) {
                    let t = (0, c.N$)(n.current, { tabbable: !0 });
                    (t.currentNode = document.activeElement),
                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                }
            },
            onFocus: (e) => {
                if (((M.current = O.key), e.target !== n.current)) {
                    (0, f.pP)() || t.selectionManager.setFocusedKey(O.key);
                    return;
                }
            },
            "aria-label": O.textValue || void 0,
            "aria-selected": t.selectionManager.canSelectItem(O.key) ? t.selectionManager.isSelected(O.key) : void 0,
            "aria-disabled": t.selectionManager.isDisabled(O.key) || void 0,
            "aria-labelledby": w && O.textValue ? `${(0, r.uk)(t, O.key)} ${w}` : void 0,
            id: (0, r.uk)(t, O.key),
        });
    if (R) {
        let { collection: e } = t,
            n = [...e];
        B["aria-rowindex"] = n.find((e) => "section" === e.type)
            ? [...e.getKeys()]
                  .filter((t) => {
                      var n;
                      return (null == (n = e.getItem(t)) ? void 0 : n.type) !== "section";
                  })
                  .findIndex((e) => e === O.key) + 1
            : O.index + 1;
    }
    return {
        rowProps: { ...(0, u.v)(B, P) },
        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
        descriptionProps: { id: w },
        ...G,
    };
}
function A(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
