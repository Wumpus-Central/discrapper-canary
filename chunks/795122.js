"use strict";
n.d(t, { n: () => E });
var r = n(625557),
    i = n(723906),
    a = n(260431),
    s = n(400606),
    o = n(150047),
    l = n(132716),
    u = n(803082),
    c = n(805447),
    d = n(13163),
    _ = n(64700),
    f = n(885714),
    p = n(404108),
    h = n(853590);
let m = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    g = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function E(e, t, n) {
    var E, I, T, y, S, v;
    let { node: C, isVirtualized: b } = e,
        { direction: N } = (0, h.Y)(),
        { onAction: R, linkBehavior: O, keyboardNavigationBehavior: D, shouldSelectOnPressUp: L } = r.nV.get(t),
        w = (0, i.X1)(),
        x = (0, _.useRef)(null),
        P = () => {
            var e;
            null === n.current ||
                ((null == x.current || C.key === x.current) &&
                    (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                (0, c.l)(n.current);
        },
        M = {},
        k = e.hasChildItems,
        U = t.selectionManager.isLink(C.key);
    if (null != C && "expandedKeys" in t) {
        let e = null == (T = (y = t.collection).getChildren) ? void 0 : T.call(y, C.key);
        (k = k || [...(null != e ? e : [])].length > 1),
            null == R && !U && "none" === t.selectionManager.selectionMode && k && (R = () => t.toggleKey(C.key));
        let n = k ? t.expandedKeys.has(C.key) : void 0,
            r = 1;
        if (C.level > 0 && (null == C ? void 0 : C.parentKey) != null) {
            let e = t.collection.getItem(C.parentKey);
            e &&
                (r = [...(null == (S = (v = t.collection).getChildren) ? void 0 : S.call(v, e.key))].filter(
                    (e) => "item" === e.type,
                ).length);
        } else r = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
        M = {
            "aria-expanded": n,
            "aria-level": C.level + 1,
            "aria-posinset": (null == C ? void 0 : C.index) + 1,
            "aria-setsize": r,
        };
    }
    let { itemProps: G, ...V } = (0, p.p)({
            selectionManager: t.selectionManager,
            key: C.key,
            ref: n,
            isVirtualized: b,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp || L,
            onAction:
                R || (null == (E = C.props) ? void 0 : E.onAction)
                    ? (0, a.c)(null == (I = C.props) ? void 0 : I.onAction, R ? () => R(C.key) : void 0)
                    : void 0,
            focus: P,
            linkBehavior: O,
        }),
        F = (e) => {
            if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
            let r = (0, d.N$)(n.current);
            if (
                ((r.currentNode = document.activeElement), "expandedKeys" in t && document.activeElement === n.current)
            ) {
                if (e.key === m[N] && t.selectionManager.focusedKey === C.key && k && !t.expandedKeys.has(C.key)) {
                    t.toggleKey(C.key), e.stopPropagation();
                    return;
                } else if (
                    e.key === g[N] &&
                    t.selectionManager.focusedKey === C.key &&
                    k &&
                    t.expandedKeys.has(C.key)
                ) {
                    t.toggleKey(C.key), e.stopPropagation();
                    return;
                }
            }
            switch (e.key) {
                case "ArrowLeft":
                    if ("arrow" === D) {
                        let t = "rtl" === N ? r.nextNode() : r.previousNode();
                        if (t)
                            e.preventDefault(),
                                e.stopPropagation(),
                                (0, c.l)(t),
                                (0, s.o)(t, { containingElement: (0, o.m)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), "rtl" === N))
                            (0, c.l)(n.current), (0, s.o)(n.current, { containingElement: (0, o.m)(n.current) });
                        else {
                            r.currentNode = n.current;
                            let e = A(r);
                            e && ((0, c.l)(e), (0, s.o)(e, { containingElement: (0, o.m)(n.current) }));
                        }
                    }
                    break;
                case "ArrowRight":
                    if ("arrow" === D) {
                        let t = "rtl" === N ? r.previousNode() : r.nextNode();
                        if (t)
                            e.preventDefault(),
                                e.stopPropagation(),
                                (0, c.l)(t),
                                (0, s.o)(t, { containingElement: (0, o.m)(n.current) });
                        else if ((e.preventDefault(), e.stopPropagation(), "ltr" === N))
                            (0, c.l)(n.current), (0, s.o)(n.current, { containingElement: (0, o.m)(n.current) });
                        else {
                            r.currentNode = n.current;
                            let e = A(r);
                            e && ((0, c.l)(e), (0, s.o)(e, { containingElement: (0, o.m)(n.current) }));
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
        B = (e) => {
            if (((x.current = C.key), e.target !== n.current)) {
                (0, f.pP)() || t.selectionManager.setFocusedKey(C.key);
                return;
            }
        },
        j = (e) => {
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
        H = (0, l.HI)(C.props),
        Y = V.hasAction ? H : {},
        W = (0, u.v)(G, Y, {
            role: "row",
            onKeyDownCapture: F,
            onKeyDown: j,
            onFocus: B,
            "aria-label": C.textValue || void 0,
            "aria-selected": t.selectionManager.canSelectItem(C.key) ? t.selectionManager.isSelected(C.key) : void 0,
            "aria-disabled": t.selectionManager.isDisabled(C.key) || void 0,
            "aria-labelledby": w && C.textValue ? `${(0, r.uk)(t, C.key)} ${w}` : void 0,
            id: (0, r.uk)(t, C.key),
        });
    if (b) {
        let { collection: e } = t,
            n = [...e];
        W["aria-rowindex"] = n.find((e) => "section" === e.type)
            ? [...e.getKeys()]
                  .filter((t) => {
                      var n;
                      return (null == (n = e.getItem(t)) ? void 0 : n.type) !== "section";
                  })
                  .findIndex((e) => e === C.key) + 1
            : C.index + 1;
    }
    let K = { role: "gridcell", "aria-colindex": 1 };
    return { rowProps: { ...(0, u.v)(W, M) }, gridCellProps: K, descriptionProps: { id: w }, ...V };
}
function A(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
