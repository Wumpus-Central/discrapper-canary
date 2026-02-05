"use strict";
n.d(t, { Q: () => f });
var r = n(966209),
    i = n(805447),
    a = n(885714),
    s = n(13163),
    o = n(400606),
    l = n(150047),
    u = n(803082),
    c = n(64700),
    d = n(853590),
    _ = n(404108);
function f(e, t, n) {
    var f;
    let { node: h, isVirtualized: m, focusMode: g = "child", shouldSelectOnPressUp: E, onAction: A } = e,
        { direction: I } = (0, d.Y)(),
        {
            keyboardDelegate: T,
            actions: { onCellAction: y },
        } = r.B.get(t),
        S = (0, c.useRef)(null),
        v = () => {
            if (n.current) {
                let e = (0, s.N$)(n.current);
                if ("child" === g) {
                    if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
                    let r = "last" === t.selectionManager.childFocusStrategy ? p(e) : e.firstChild();
                    if (r) return void (0, i.l)(r);
                }
                ((null == S.current || h.key === S.current) && n.current.contains(document.activeElement)) ||
                    (0, i.l)(n.current);
            }
        },
        { itemProps: C, isPressed: b } = (0, _.p)({
            selectionManager: t.selectionManager,
            key: h.key,
            ref: n,
            isVirtualized: m,
            focus: v,
            shouldSelectOnPressUp: E,
            onAction: y ? () => y(h.key) : A,
            isDisabled: 0 === t.collection.size,
        }),
        N = (e) => {
            var r, a, u, c, d;
            if (
                !e.currentTarget.contains(e.target) ||
                t.isKeyboardNavigationDisabled ||
                !n.current ||
                !document.activeElement
            )
                return;
            let _ = (0, s.N$)(n.current);
            switch (((_.currentNode = document.activeElement), e.key)) {
                case "ArrowLeft": {
                    let t = "rtl" === I ? _.nextNode() : _.previousNode();
                    if (("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t))
                        (0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) });
                    else {
                        if ((null == (r = T.getKeyLeftOf) ? void 0 : r.call(T, h.key)) !== h.key) {
                            null == (a = n.current.parentElement) ||
                                a.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        "cell" === g && "rtl" === I
                            ? ((0, i.l)(n.current), (0, o.o)(n.current, { containingElement: (0, l.m)(n.current) }))
                            : ((_.currentNode = n.current),
                              (t = "rtl" === I ? _.firstChild() : p(_)) &&
                                  ((0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) })));
                    }
                    break;
                }
                case "ArrowRight": {
                    let t = "rtl" === I ? _.previousNode() : _.nextNode();
                    if (("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t))
                        (0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) });
                    else {
                        if ((null == (u = T.getKeyRightOf) ? void 0 : u.call(T, h.key)) !== h.key) {
                            null == (c = n.current.parentElement) ||
                                c.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        "cell" === g && "ltr" === I
                            ? ((0, i.l)(n.current), (0, o.o)(n.current, { containingElement: (0, l.m)(n.current) }))
                            : ((_.currentNode = n.current),
                              (t = "rtl" === I ? p(_) : _.firstChild()) &&
                                  ((0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) })));
                    }
                    break;
                }
                case "ArrowUp":
                case "ArrowDown":
                    !e.altKey &&
                        n.current.contains(e.target) &&
                        (e.stopPropagation(),
                        e.preventDefault(),
                        null == (d = n.current.parentElement) ||
                            d.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
            }
        },
        R = (e) => {
            if (((S.current = h.key), e.target !== n.current)) {
                (0, a.pP)() || t.selectionManager.setFocusedKey(h.key);
                return;
            }
            requestAnimationFrame(() => {
                "child" === g && document.activeElement === n.current && v();
            });
        },
        O = (0, u.v)(C, {
            role: "gridcell",
            onKeyDownCapture: N,
            "aria-colspan": h.colSpan,
            "aria-colindex": null != h.colIndex ? h.colIndex + 1 : void 0,
            colSpan: m ? void 0 : h.colSpan,
            onFocus: R,
        });
    return (
        m && (O["aria-colindex"] = (null != (f = h.colIndex) ? f : h.index) + 1),
        E &&
            null != O.tabIndex &&
            null == O.onPointerDown &&
            (O.onPointerDown = (e) => {
                let t = e.currentTarget,
                    n = t.getAttribute("tabindex");
                t.removeAttribute("tabindex"),
                    requestAnimationFrame(() => {
                        null != n && t.setAttribute("tabindex", n);
                    });
            }),
        { gridCellProps: O, isPressed: b }
    );
}
function p(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
