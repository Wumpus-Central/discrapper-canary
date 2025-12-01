n.d(t, { n: () => p });
var r = n(17042),
    i = n(172395),
    a = n(981166),
    o = n(605294),
    s = n(776608),
    l = n(348672),
    c = n(158821),
    u = n(473749),
    d = n(227399),
    f = n(624641);
function p(e, t, n) {
    var p;
    let { node: m, isVirtualized: h, focusMode: g = "child", shouldSelectOnPressUp: E, onAction: b } = e,
        { direction: y } = (0, d.j)(),
        {
            keyboardDelegate: O,
            actions: { onCellAction: v },
        } = r.B.get(t),
        S = (0, u.useRef)(null),
        I = () => {
            if (n.current) {
                let e = (0, o.QL)(n.current);
                if ("child" === g) {
                    if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
                    let r = "last" === t.selectionManager.childFocusStrategy ? _(e) : e.firstChild();
                    if (r) return void (0, i.e)(r);
                }
                ((null == S.current || m.key === S.current) && n.current.contains(document.activeElement)) ||
                    (0, i.e)(n.current);
            }
        },
        { itemProps: T, isPressed: A } = (0, f.C)({
            selectionManager: t.selectionManager,
            key: m.key,
            ref: n,
            isVirtualized: h,
            focus: I,
            shouldSelectOnPressUp: E,
            onAction: v ? () => v(m.key) : b,
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
            let f = (0, o.QL)(n.current);
            switch (((f.currentNode = document.activeElement), e.key)) {
                case "ArrowLeft": {
                    let t = "rtl" === y ? f.nextNode() : f.previousNode();
                    if (("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t))
                        (0, i.e)(t), (0, s.G)(t, { containingElement: (0, l.r)(n.current) });
                    else {
                        if ((null == (r = O.getKeyLeftOf) ? void 0 : r.call(O, m.key)) !== m.key) {
                            null == (a = n.current.parentElement) ||
                                a.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        "cell" === g && "rtl" === y
                            ? ((0, i.e)(n.current), (0, s.G)(n.current, { containingElement: (0, l.r)(n.current) }))
                            : ((f.currentNode = n.current),
                              (t = "rtl" === y ? f.firstChild() : _(f)) &&
                                  ((0, i.e)(t), (0, s.G)(t, { containingElement: (0, l.r)(n.current) })));
                    }
                    break;
                }
                case "ArrowRight": {
                    let t = "rtl" === y ? f.previousNode() : f.nextNode();
                    if (("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t))
                        (0, i.e)(t), (0, s.G)(t, { containingElement: (0, l.r)(n.current) });
                    else {
                        if ((null == (c = O.getKeyRightOf) ? void 0 : c.call(O, m.key)) !== m.key) {
                            null == (u = n.current.parentElement) ||
                                u.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                            break;
                        }
                        "cell" === g && "ltr" === y
                            ? ((0, i.e)(n.current), (0, s.G)(n.current, { containingElement: (0, l.r)(n.current) }))
                            : ((f.currentNode = n.current),
                              (t = "rtl" === y ? _(f) : f.firstChild()) &&
                                  ((0, i.e)(t), (0, s.G)(t, { containingElement: (0, l.r)(n.current) })));
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
            if (((S.current = m.key), e.target !== n.current)) {
                (0, a.E)() || t.selectionManager.setFocusedKey(m.key);
                return;
            }
            requestAnimationFrame(() => {
                "child" === g && document.activeElement === n.current && I();
            });
        },
        P = (0, c.d)(T, {
            role: "gridcell",
            onKeyDownCapture: C,
            "aria-colspan": m.colSpan,
            "aria-colindex": null != m.colIndex ? m.colIndex + 1 : void 0,
            colSpan: h ? void 0 : m.colSpan,
            onFocus: N,
        });
    return (
        h && (P["aria-colindex"] = (null != (p = m.colIndex) ? p : m.index) + 1),
        E &&
            null != P.tabIndex &&
            null == P.onPointerDown &&
            (P.onPointerDown = (e) => {
                let t = e.currentTarget,
                    n = t.getAttribute("tabindex");
                t.removeAttribute("tabindex"),
                    requestAnimationFrame(() => {
                        null != n && t.setAttribute("tabindex", n);
                    });
            }),
        {
            gridCellProps: P,
            isPressed: A,
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
