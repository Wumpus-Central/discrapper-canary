l.d(t, { Q: () => p });
var n = l(966209),
    o = l(805447),
    r = l(885714),
    i = l(13163),
    s = l(400606),
    u = l(150047),
    a = l(803082),
    c = l(64700),
    d = l(853590),
    g = l(404108);
function p(e, t, l) {
    var p;
    let { node: h, isVirtualized: y, focusMode: v = "child", shouldSelectOnPressUp: f, onAction: k } = e,
        { direction: b } = (0, d.Y)(),
        {
            keyboardDelegate: S,
            actions: { onCellAction: C },
        } = n.B.get(t),
        D = (0, c.useRef)(null),
        x = () => {
            if (l.current) {
                let e = (0, i.N$)(l.current);
                if ("child" === v) {
                    if (l.current.contains(document.activeElement) && l.current !== document.activeElement) return;
                    let n = "last" === t.selectionManager.childFocusStrategy ? m(e) : e.firstChild();
                    if (n) return void (0, o.l)(n);
                }
                ((null == D.current || h.key === D.current) && l.current.contains(document.activeElement)) ||
                    (0, o.l)(l.current);
            }
        },
        { itemProps: A, isPressed: w } = (0, g.p)({
            selectionManager: t.selectionManager,
            key: h.key,
            ref: l,
            isVirtualized: y,
            focus: x,
            shouldSelectOnPressUp: f,
            onAction: C ? () => C(h.key) : k,
            isDisabled: 0 === t.collection.size,
        }),
        E = (0, a.v)(A, {
            role: "gridcell",
            onKeyDownCapture: (e) => {
                var n, r, a, c, d;
                if (
                    !e.currentTarget.contains(e.target) ||
                    t.isKeyboardNavigationDisabled ||
                    !l.current ||
                    !document.activeElement
                )
                    return;
                let g = (0, i.N$)(l.current);
                switch (((g.currentNode = document.activeElement), e.key)) {
                    case "ArrowLeft": {
                        let t = "rtl" === b ? g.nextNode() : g.previousNode();
                        if (
                            ("child" === v && t === l.current && (t = null), e.preventDefault(), e.stopPropagation(), t)
                        )
                            (0, o.l)(t), (0, s.o)(t, { containingElement: (0, u.m)(l.current) });
                        else {
                            if ((null == (n = S.getKeyLeftOf) ? void 0 : n.call(S, h.key)) !== h.key) {
                                null == (r = l.current.parentElement) ||
                                    r.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                                break;
                            }
                            "cell" === v && "rtl" === b
                                ? ((0, o.l)(l.current), (0, s.o)(l.current, { containingElement: (0, u.m)(l.current) }))
                                : ((g.currentNode = l.current),
                                  (t = "rtl" === b ? g.firstChild() : m(g)) &&
                                      ((0, o.l)(t), (0, s.o)(t, { containingElement: (0, u.m)(l.current) })));
                        }
                        break;
                    }
                    case "ArrowRight": {
                        let t = "rtl" === b ? g.previousNode() : g.nextNode();
                        if (
                            ("child" === v && t === l.current && (t = null), e.preventDefault(), e.stopPropagation(), t)
                        )
                            (0, o.l)(t), (0, s.o)(t, { containingElement: (0, u.m)(l.current) });
                        else {
                            if ((null == (a = S.getKeyRightOf) ? void 0 : a.call(S, h.key)) !== h.key) {
                                null == (c = l.current.parentElement) ||
                                    c.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                                break;
                            }
                            "cell" === v && "ltr" === b
                                ? ((0, o.l)(l.current), (0, s.o)(l.current, { containingElement: (0, u.m)(l.current) }))
                                : ((g.currentNode = l.current),
                                  (t = "rtl" === b ? m(g) : g.firstChild()) &&
                                      ((0, o.l)(t), (0, s.o)(t, { containingElement: (0, u.m)(l.current) })));
                        }
                        break;
                    }
                    case "ArrowUp":
                    case "ArrowDown":
                        !e.altKey &&
                            l.current.contains(e.target) &&
                            (e.stopPropagation(),
                            e.preventDefault(),
                            null == (d = l.current.parentElement) ||
                                d.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
                }
            },
            "aria-colspan": h.colSpan,
            "aria-colindex": null != h.colIndex ? h.colIndex + 1 : void 0,
            colSpan: y ? void 0 : h.colSpan,
            onFocus: (e) => {
                if (((D.current = h.key), e.target !== l.current)) {
                    (0, r.pP)() || t.selectionManager.setFocusedKey(h.key);
                    return;
                }
                requestAnimationFrame(() => {
                    "child" === v && document.activeElement === l.current && x();
                });
            },
        });
    return (
        y && (E["aria-colindex"] = (null != (p = h.colIndex) ? p : h.index) + 1),
        f &&
            null != E.tabIndex &&
            null == E.onPointerDown &&
            (E.onPointerDown = (e) => {
                let t = e.currentTarget,
                    l = t.getAttribute("tabindex");
                t.removeAttribute("tabindex"),
                    requestAnimationFrame(() => {
                        null != l && t.setAttribute("tabindex", l);
                    });
            }),
        { gridCellProps: E, isPressed: w }
    );
}
function m(e) {
    let t = null,
        l = null;
    do (l = e.lastChild()) && (t = l);
    while (l);
    return t;
}
