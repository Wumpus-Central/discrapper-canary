"use strict";
n.d(t, { n: () => g });
var r = n(625557),
    i = n(723906),
    s = n(260431),
    a = n(400606),
    o = n(150047),
    l = n(132716),
    u = n(803082),
    c = n(805447),
    d = n(13163),
    _ = n(64700),
    f = n(885714),
    p = n(404108),
    h = n(853590);
let E = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    m = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function g(e, t, n) {
    var g, I, T, S, y, N;
    let { node: v, isVirtualized: C } = e,
        { direction: O } = (0, h.Y)(),
        { onAction: R, linkBehavior: b, keyboardNavigationBehavior: D, shouldSelectOnPressUp: L } = r.nV.get(t),
        w = (0, i.X1)(),
        M = (0, _.useRef)(null),
        P = {},
        x = e.hasChildItems,
        k = t.selectionManager.isLink(v.key);
    if (null != v && "expandedKeys" in t) {
        let e = null == (T = (S = t.collection).getChildren) ? void 0 : T.call(S, v.key);
        (x = x || [...(null != e ? e : [])].length > 1),
            null == R && !k && "none" === t.selectionManager.selectionMode && x && (R = () => t.toggleKey(v.key));
        let n = x ? t.expandedKeys.has(v.key) : void 0,
            r = 1;
        if (v.level > 0 && (null == v ? void 0 : v.parentKey) != null) {
            let e = t.collection.getItem(v.parentKey);
            e &&
                (r = [...(null == (y = (N = t.collection).getChildren) ? void 0 : y.call(N, e.key))].filter(
                    (e) => "item" === e.type,
                ).length);
        } else r = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
        P = {
            "aria-expanded": n,
            "aria-level": v.level + 1,
            "aria-posinset": (null == v ? void 0 : v.index) + 1,
            "aria-setsize": r,
        };
    }
    let { itemProps: U, ...G } = (0, p.p)({
            selectionManager: t.selectionManager,
            key: v.key,
            ref: n,
            isVirtualized: C,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp || L,
            onAction:
                R || (null == (g = v.props) ? void 0 : g.onAction)
                    ? (0, s.c)(null == (I = v.props) ? void 0 : I.onAction, R ? () => R(v.key) : void 0)
                    : void 0,
            focus: () => {
                var e;
                null === n.current ||
                    ((null == M.current || v.key === M.current) &&
                        (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                    (0, c.l)(n.current);
            },
            linkBehavior: b,
        }),
        F = (0, l.HI)(v.props),
        V = G.hasAction ? F : {},
        B = (0, u.v)(U, V, {
            role: "row",
            onKeyDownCapture: (e) => {
                if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
                let r = (0, d.N$)(n.current);
                if (
                    ((r.currentNode = document.activeElement),
                    "expandedKeys" in t && document.activeElement === n.current)
                ) {
                    if (e.key === E[O] && t.selectionManager.focusedKey === v.key && x && !t.expandedKeys.has(v.key)) {
                        t.toggleKey(v.key), e.stopPropagation();
                        return;
                    } else if (
                        e.key === m[O] &&
                        t.selectionManager.focusedKey === v.key &&
                        x &&
                        t.expandedKeys.has(v.key)
                    ) {
                        t.toggleKey(v.key), e.stopPropagation();
                        return;
                    }
                }
                switch (e.key) {
                    case "ArrowLeft":
                        if ("arrow" === D) {
                            let t = "rtl" === O ? r.nextNode() : r.previousNode();
                            if (t)
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    (0, c.l)(t),
                                    (0, a.o)(t, { containingElement: (0, o.m)(n.current) });
                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === O))
                                (0, c.l)(n.current), (0, a.o)(n.current, { containingElement: (0, o.m)(n.current) });
                            else {
                                r.currentNode = n.current;
                                let e = A(r);
                                e && ((0, c.l)(e), (0, a.o)(e, { containingElement: (0, o.m)(n.current) }));
                            }
                        }
                        break;
                    case "ArrowRight":
                        if ("arrow" === D) {
                            let t = "rtl" === O ? r.previousNode() : r.nextNode();
                            if (t)
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    (0, c.l)(t),
                                    (0, a.o)(t, { containingElement: (0, o.m)(n.current) });
                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === O))
                                (0, c.l)(n.current), (0, a.o)(n.current, { containingElement: (0, o.m)(n.current) });
                            else {
                                r.currentNode = n.current;
                                let e = A(r);
                                e && ((0, c.l)(e), (0, a.o)(e, { containingElement: (0, o.m)(n.current) }));
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
                    let t = (0, d.N$)(n.current, { tabbable: !0 });
                    (t.currentNode = document.activeElement),
                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                }
            },
            onFocus: (e) => {
                if (((M.current = v.key), e.target !== n.current)) {
                    (0, f.pP)() || t.selectionManager.setFocusedKey(v.key);
                    return;
                }
            },
            "aria-label": v.textValue || void 0,
            "aria-selected": t.selectionManager.canSelectItem(v.key) ? t.selectionManager.isSelected(v.key) : void 0,
            "aria-disabled": t.selectionManager.isDisabled(v.key) || void 0,
            "aria-labelledby": w && v.textValue ? `${(0, r.uk)(t, v.key)} ${w}` : void 0,
            id: (0, r.uk)(t, v.key),
        });
    if (C) {
        let { collection: e } = t,
            n = [...e];
        B["aria-rowindex"] = n.find((e) => "section" === e.type)
            ? [...e.getKeys()]
                  .filter((t) => {
                      var n;
                      return (null == (n = e.getItem(t)) ? void 0 : n.type) !== "section";
                  })
                  .findIndex((e) => e === v.key) + 1
            : v.index + 1;
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
