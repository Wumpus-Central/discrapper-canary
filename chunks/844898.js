n.d(t, { C: () => p });
var r = n(606105),
    i = n(132979),
    a = n(39807),
    o = n(885454),
    s = n(586235),
    l = n(716601),
    c = n(361637),
    u = n(146810),
    d = n(347991),
    f = n(373701),
    _ = n(647438);
function p(e) {
    let {
            id: t,
            selectionManager: n,
            key: p,
            ref: g,
            shouldSelectOnPressUp: E,
            shouldUseVirtualFocus: b,
            focus: y,
            isDisabled: O,
            onAction: v,
            allowsDifferentPressOrigin: I,
            linkBehavior: T = "action",
        } = e,
        S = (0, i.tv)();
    t = (0, a.Me)(t);
    let A = (e) => {
        if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(p);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(p)) {
                if ("selection" === T && g.current) {
                    let t = n.getItemProps(p);
                    S.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === T || "none" === T) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(p) && !n.disallowEmptySelection
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p)
                : e && e.shiftKey
                  ? n.extendSelection(p)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, o.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(p)
                    : n.replaceSelection(p);
        }
    };
    (0, _.useEffect)(() => {
        p === n.focusedKey &&
            n.isFocused &&
            (b
                ? (0, f.q6)(g.current)
                : y
                  ? y()
                  : document.activeElement !== g.current && g.current && (0, c.e)(g.current));
    }, [g, p, n.focusedKey, n.childFocusStrategy, n.isFocused, b]),
        (O = O || n.isDisabled(p));
    let C = {};
    b || O
        ? O &&
          (C.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (C = {
              tabIndex: p === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === g.current && n.setFocusedKey(p);
              },
          });
    let N = n.isLink(p) && "override" === T,
        R = n.isLink(p) && "selection" !== T && "none" !== T,
        P = !O && n.canSelectItem(p) && !N,
        w = (v || R) && !O,
        D = w && ("replace" === n.selectionBehavior ? !P : !P || n.isEmpty),
        x = w && P && "replace" === n.selectionBehavior,
        L = D || x,
        j = (0, _.useRef)(null),
        M = L && P,
        k = (0, _.useRef)(!1),
        U = (0, _.useRef)(!1),
        G = n.getItemProps(p),
        B = (e) => {
            v && v(), R && g.current && S.open(g.current, e, G.href, G.routerOptions);
        },
        Z = { ref: g };
    if (
        (E
            ? ((Z.onPressStart = (e) => {
                  (j.current = e.pointerType), (k.current = M), "keyboard" === e.pointerType && (!L || m()) && A(e);
              }),
              I
                  ? ((Z.onPressUp = D
                        ? void 0
                        : (e) => {
                              "mouse" === e.pointerType && P && A(e);
                          }),
                    (Z.onPress = D
                        ? B
                        : (e) => {
                              "keyboard" !== e.pointerType && "mouse" !== e.pointerType && P && A(e);
                          }))
                  : (Z.onPress = (e) => {
                        D || (x && "mouse" !== e.pointerType)
                            ? ("keyboard" !== e.pointerType || h()) && B(e)
                            : "keyboard" !== e.pointerType && P && A(e);
                    }))
            : ((Z.onPressStart = (e) => {
                  (j.current = e.pointerType),
                      (k.current = M),
                      (U.current = D),
                      P && (("mouse" === e.pointerType && !D) || ("keyboard" === e.pointerType && (!w || m()))) && A(e);
              }),
              (Z.onPress = (e) => {
                  ("touch" === e.pointerType ||
                      "pen" === e.pointerType ||
                      "virtual" === e.pointerType ||
                      ("keyboard" === e.pointerType && L && h()) ||
                      ("mouse" === e.pointerType && U.current)) &&
                      (L ? B(e) : P && A(e));
              })),
        (C["data-collection"] = (0, r.Zx)(n.collection)),
        (C["data-key"] = p),
        (Z.preventFocusOnPress = b),
        b &&
            (Z = (0, s.d)(Z, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(p));
                },
            })),
        G)
    )
        for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"])
            G[e] && (Z[e] = (0, l.t)(Z[e], G[e]));
    let { pressProps: F, isPressed: V } = (0, u.r)(Z),
        H = x
            ? (e) => {
                  "mouse" === j.current && (e.stopPropagation(), e.preventDefault(), B(e));
              }
            : void 0,
        { longPressProps: Y } = (0, d.T)({
            isDisabled: !M,
            onLongPress(e) {
                "touch" === e.pointerType && (A(e), n.setSelectionBehavior("toggle"));
            },
        }),
        W = (e) => {
            "touch" === j.current && k.current && e.preventDefault();
        },
        K =
            "none" !== T && n.isLink(p)
                ? (e) => {
                      i.nG.isOpening || e.preventDefault();
                  }
                : void 0;
    return {
        itemProps: (0, s.d)(
            C,
            P || D || (b && !O) ? F : {},
            M ? Y : {},
            {
                onDoubleClick: H,
                onDragStartCapture: W,
                onClick: K,
                id: t,
            },
            b ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: V,
        isSelected: n.isSelected(p),
        isFocused: n.isFocused && n.focusedKey === p,
        isDisabled: O,
        allowsSelection: P,
        hasAction: L,
    };
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function m() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
