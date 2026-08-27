"use strict";
r.d(t, { p: () => b });
var n = r(241453),
    i = r(64480),
    o = r(256062),
    a = r(1576),
    s = r(499401),
    l = r(979347),
    u = r(184093),
    c = r(330976),
    f = r(993558),
    d = r(114218),
    p = r(295551),
    h = r(346711),
    m = r(143761),
    v = r(383491),
    y = r(635597),
    g = r(582128);
function b(e) {
    let {
            id: t,
            selectionManager: r,
            key: b,
            ref: w,
            shouldSelectOnPressUp: _,
            shouldUseVirtualFocus: S,
            focus: x,
            isDisabled: E,
            onAction: k,
            allowsDifferentPressOrigin: C,
            linkBehavior: T = "action",
        } = e,
        M = (0, f.rd)();
    t = (0, p.Bi)(t);
    let P = (e) => {
        if ("keyboard" === e.pointerType && (0, a.N9)(e)) r.toggleSelection(b);
        else {
            if ("none" === r.selectionMode) return;
            if (r.isLink(b)) {
                if ("selection" === T && w.current) {
                    let t = r.getItemProps(b);
                    M.open(w.current, e, t.href, t.routerOptions), r.setSelectedKeys(r.selectedKeys);
                    return;
                } else if ("override" === T || "none" === T) return;
            }
            "single" === r.selectionMode
                ? r.isSelected(b) && !r.disallowEmptySelection
                    ? r.toggleSelection(b)
                    : r.replaceSelection(b)
                : e && e.shiftKey
                  ? r.extendSelection(b)
                  : "toggle" === r.selectionBehavior ||
                      (e && ((0, s.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? r.toggleSelection(b)
                    : r.replaceSelection(b);
        }
    };
    (0, g.useEffect)(() => {
        b === r.focusedKey &&
            r.isFocused &&
            (S ? (0, c.vX)(w.current) : x ? x() : (0, o.bq)() !== w.current && w.current && (0, i.l)(w.current));
    }, [w, b, r.focusedKey, r.childFocusStrategy, r.isFocused, S]),
        (E = E || r.isDisabled(b));
    let A = {};
    S || E
        ? E &&
          (A.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (A = {
              tabIndex: b === r.focusedKey ? 0 : -1,
              onFocus(e) {
                  (0, o.wt)(e) === w.current && r.setFocusedKey(b);
              },
          }),
        (0, g.useEffect)(() => {
            E && r.focusedKey === b && r.setFocusedKey(null);
        }, [r, E, b]);
    let I = r.isLink(b) && "override" === T,
        O = k && "action" === e.UNSTABLE_itemBehavior,
        D = r.isLink(b) && "selection" !== T && "none" !== T,
        R = !E && r.canSelectItem(b) && !I && !O,
        L = (k || D) && !E,
        F = L && ("replace" === r.selectionBehavior ? !R : !R || r.isEmpty),
        N = L && R && "replace" === r.selectionBehavior,
        j = F || N,
        B = (0, g.useRef)(null),
        K = j && R,
        $ = (0, g.useRef)(!1),
        V = (0, g.useRef)(!1),
        U = r.getItemProps(b),
        z = (e) => {
            k && (k(), w.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }))),
                D && w.current && M.open(w.current, e, U.href, U.routerOptions);
        },
        W = { ref: w };
    _
        ? ((W.onPressStart = (e) => {
              (B.current = e.pointerType),
                  ($.current = K),
                  "keyboard" !== e.pointerType || (j && " " !== e.key) || P(e);
          }),
          C
              ? ((W.onPressUp = F
                    ? void 0
                    : (e) => {
                          "mouse" === e.pointerType && R && P(e);
                      }),
                (W.onPress = F
                    ? z
                    : (e) => {
                          "keyboard" !== e.pointerType && "mouse" !== e.pointerType && R && P(e);
                      }))
              : (W.onPress = (e) => {
                    F || (N && "mouse" !== e.pointerType)
                        ? ("keyboard" !== e.pointerType || "Enter" === e.key) && z(e)
                        : "keyboard" !== e.pointerType && R && P(e);
                }))
        : ((W.onPressStart = (e) => {
              (B.current = e.pointerType),
                  ($.current = K),
                  (V.current = F),
                  !R ||
                      (("mouse" !== e.pointerType || F) && ("keyboard" !== e.pointerType || (L && " " !== e.key))) ||
                      P(e);
          }),
          (W.onPress = (e) => {
              ("touch" === e.pointerType ||
                  "pen" === e.pointerType ||
                  "virtual" === e.pointerType ||
                  ("keyboard" === e.pointerType && j && "Enter" === e.key) ||
                  ("mouse" === e.pointerType && V.current)) &&
                  (j ? z(e) : R && P(e));
          }));
    let H = (0, a.EG)(r.collection);
    if (
        ((A["data-collection"] = H),
        (A["data-key"] = b),
        (W.preventFocusOnPress = S),
        S &&
            (W = (0, u.v)(W, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (r.setFocused(!0), r.setFocusedKey(b));
                },
                onPress(e) {
                    "touch" === e.pointerType && (r.setFocused(!0), r.setFocusedKey(b));
                },
            })),
        U)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            U[e] && (W[e] = (0, n.c)(W[e], U[e]));
    let { pressProps: G, isPressed: q } = (0, d.d)(W),
        Y = N
            ? (e) => {
                  "mouse" === B.current && (e.stopPropagation(), e.preventDefault(), z(e));
              }
            : void 0,
        { longPressProps: X } = (function (e) {
            let {
                    isDisabled: t,
                    pointerType: r,
                    onLongPressStart: n,
                    onLongPressEnd: i,
                    onLongPress: o,
                    threshold: a = 500,
                    accessibilityDescription: s,
                } = e,
                l = (0, g.useRef)(void 0),
                { addGlobalListener: c, removeAllGlobalListeners: f } = (0, y.A)(),
                p = (e) => (r ? e.pointerType === r : "mouse" === e.pointerType || "touch" === e.pointerType),
                { pressProps: b } = (0, d.d)({
                    isDisabled: t,
                    onPressStart(e) {
                        e.continuePropagation(),
                            p(e) &&
                                (n && n({ ...e, type: "longpressstart" }),
                                (l.current = setTimeout(() => {
                                    e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })),
                                        c(e.target, "click", (e) => e.preventDefault(), { once: !0 }),
                                        (0, m.TW)(e.target).activeElement !== e.target && (0, h.e)(e.target),
                                        o && o({ ...e, type: "longpress" }),
                                        (l.current = void 0);
                                }, a)),
                                "touch" === e.pointerType &&
                                    c(e.target, "contextmenu", (e) => e.preventDefault(), { once: !0 }),
                                c(
                                    (0, m.mD)(e.target),
                                    "pointerup",
                                    () => {
                                        setTimeout(() => {
                                            f();
                                        }, 100);
                                    },
                                    { once: !0 },
                                ));
                    },
                    onPressEnd(e) {
                        l.current && clearTimeout(l.current), i && p(e) && i({ ...e, type: "longpressend" });
                    },
                }),
                w = (0, v.I)(o && !t ? s : void 0);
            return { longPressProps: (0, u.v)(b, w) };
        })({
            isDisabled: !K,
            onLongPress(e) {
                "touch" === e.pointerType && (P(e), r.setSelectionBehavior("toggle"));
            },
        }),
        J =
            "none" !== T && r.isLink(b)
                ? (e) => {
                      f.Fe.isOpening || e.preventDefault();
                  }
                : void 0,
        Q = (0, u.v)(
            A,
            R || F || (S && !E) ? G : {},
            K ? X : {},
            {
                onDoubleClick: Y,
                onDragStartCapture: (e) => {
                    "touch" === B.current && $.current && e.preventDefault();
                },
                onClick: J,
                id: t,
            },
            S ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        Z = (e) => {
            let t = e;
            for (; t && t !== w.current; ) {
                let e = t.getAttribute("data-collection");
                if (null != e) return e !== H;
                t = t.parentElement;
            }
            return (0, l.A)(e);
        },
        ee = Q.onPointerDown;
    Q.onPointerDown = (e) => {
        let t = (0, o.wt)(e);
        t && t !== w.current && Z(t) ? e.stopPropagation() : ee?.(e);
    };
    let et = Q.onMouseDown;
    return (
        (Q.onMouseDown = (e) => {
            let t = (0, o.wt)(e);
            t && t !== w.current && Z(t) ? e.stopPropagation() : et?.(e);
        }),
        {
            itemProps: Q,
            isPressed: q,
            isSelected: r.isSelected(b),
            isFocused: r.isFocused && r.focusedKey === b,
            isDisabled: E,
            allowsSelection: R,
            hasAction: j,
        }
    );
}
