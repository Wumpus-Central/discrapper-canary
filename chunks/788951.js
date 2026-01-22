n.d(t, { Q: () => p });
var r = n(966209),
    i = n(805447),
    a = n(885714),
    s = n(13163),
    o = n(400606),
    l = n(150047),
    c = n(803082),
    u = n(64700),
    d = n(853590),
    f = n(404108);
function p(e, t, n) {
    var p;
    let { node: h, isVirtualized: m, focusMode: g = "child", shouldSelectOnPressUp: E, onAction: b } = e,
        { direction: y } = (0, d.Y)(),
        {
            keyboardDelegate: O,
            actions: { onCellAction: A },
        } = r.B.get(t),
        v = (0, u.useRef)(null),
        S = () => {
            if (n.current) {
                let e = (0, s.N$)(n.current);
                if ("child" === g) {
                    if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
                    let r = "last" === t.selectionManager.childFocusStrategy ? _(e) : e.firstChild();
                    if (r) return void (0, i.l)(r);
                }
                ((null == v.current || h.key === v.current) && n.current.contains(document.activeElement)) ||
                    (0, i.l)(n.current);
            }
        },
        { itemProps: I, isPressed: T } = (0, f.p)({
            selectionManager: t.selectionManager,
            key: h.key,
            ref: n,
            isVirtualized: m,
            focus: S,
            shouldSelectOnPressUp: E,
            onAction: A ? () => A(h.key) : b,
            isDisabled: 0 === t.collection.size,
        }),
        C = (e) => {
            var r, a, c, u, d;
            if (
                !e.currentTarget.contains(e.target) ||
                t.isKeyboardNavigationDisabled ||
                !n.current ||
                !document.activeElement
            )
                return;
            let f = (0, s.N$)(n.current);
            switch (((f.currentNode = document.activeElement), e.key)) {
                case "ArrowLeft": {
                    let t = "rtl" === y ? f.nextNode() : f.previousNode();
                    if (("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t))
                        (0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) });
                    else {
                        if ((null == (r = O.getKeyLeftOf) ? void 0 : r.call(O, h.key)) !== h.key) {
                            null == (a = n.current.parentElement) ||
                                a.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        "cell" === g && "rtl" === y
                            ? ((0, i.l)(n.current), (0, o.o)(n.current, { containingElement: (0, l.m)(n.current) }))
                            : ((f.currentNode = n.current),
                              (t = "rtl" === y ? f.firstChild() : _(f)) &&
                                  ((0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) })));
                    }
                    break;
                }
                case "ArrowRight": {
                    let t = "rtl" === y ? f.previousNode() : f.nextNode();
                    if (("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t))
                        (0, i.l)(t), (0, o.o)(t, { containingElement: (0, l.m)(n.current) });
                    else {
                        if ((null == (c = O.getKeyRightOf) ? void 0 : c.call(O, h.key)) !== h.key) {
                            null == (u = n.current.parentElement) ||
                                u.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        "cell" === g && "ltr" === y
                            ? ((0, i.l)(n.current), (0, o.o)(n.current, { containingElement: (0, l.m)(n.current) }))
                            : ((f.currentNode = n.current),
                              (t = "rtl" === y ? _(f) : f.firstChild()) &&
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
        N = (e) => {
            if (((v.current = h.key), e.target !== n.current)) {
                (0, a.pP)() || t.selectionManager.setFocusedKey(h.key);
                return;
            }
            requestAnimationFrame(() => {
                "child" === g && document.activeElement === n.current && S();
            });
        },
        R = (0, c.v)(I, {
            role: "gridcell",
            onKeyDownCapture: C,
            "aria-colspan": h.colSpan,
            "aria-colindex": null != h.colIndex ? h.colIndex + 1 : void 0,
            colSpan: m ? void 0 : h.colSpan,
            onFocus: N,
        });
    return (
        m && (R["aria-colindex"] = (null != (p = h.colIndex) ? p : h.index) + 1),
        E &&
            null != R.tabIndex &&
            null == R.onPointerDown &&
            (R.onPointerDown = (e) => {
                let t = e.currentTarget,
                    n = t.getAttribute("tabindex");
                t.removeAttribute("tabindex"),
                    requestAnimationFrame(() => {
                        null != n && t.setAttribute("tabindex", n);
                    });
            }),
        {
            gridCellProps: R,
            isPressed: T,
        }
    );
}
function _(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
