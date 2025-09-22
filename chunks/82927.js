n.d(t, { C: () => _ });
var r = n(173213),
    i = n(533339),
    a = n(459613),
    o = n(362602),
    s = n(87624),
    l = n(795074),
    c = n(816187),
    u = n(506364),
    d = n(804970),
    f = n(647438);
function _(e) {
    let {
            id: t,
            selectionManager: n,
            key: _,
            ref: m,
            shouldSelectOnPressUp: g,
            shouldUseVirtualFocus: E,
            focus: b,
            isDisabled: y,
            onAction: O,
            allowsDifferentPressOrigin: v,
            linkBehavior: I = "action",
        } = e,
        T = (0, s.tv)();
    t = (0, l.Me)(t);
    let S = (e) => {
        if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(_);
        else {
            if ("none" === n.selectionMode) return;
            if (n.isLink(_)) {
                if ("selection" === I && m.current) {
                    let t = n.getItemProps(_);
                    T.open(m.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
                    return;
                } else if ("override" === I || "none" === I) return;
            }
            "single" === n.selectionMode
                ? n.isSelected(_) && !n.disallowEmptySelection
                    ? n.toggleSelection(_)
                    : n.replaceSelection(_)
                : e && e.shiftKey
                  ? n.extendSelection(_)
                  : "toggle" === n.selectionBehavior ||
                      (e && ((0, c.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType))
                    ? n.toggleSelection(_)
                    : n.replaceSelection(_);
        }
    };
    (0, f.useEffect)(() => {
        _ === n.focusedKey &&
            n.isFocused &&
            (E
                ? (0, d.q6)(m.current)
                : b
                  ? b()
                  : document.activeElement !== m.current && m.current && (0, i.e)(m.current));
    }, [m, _, n.focusedKey, n.childFocusStrategy, n.isFocused, E]),
        (y = y || n.isDisabled(_));
    let A = {};
    E || y
        ? y &&
          (A.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (A = {
              tabIndex: _ === n.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === m.current && n.setFocusedKey(_);
              },
          });
    let C = n.isLink(_) && "override" === I,
        N = n.isLink(_) && "selection" !== I && "none" !== I,
        R = !y && n.canSelectItem(_) && !C,
        P = (O || N) && !y,
        w = P && ("replace" === n.selectionBehavior ? !R : !R || n.isEmpty),
        D = P && R && "replace" === n.selectionBehavior,
        x = w || D,
        L = (0, f.useRef)(null),
        j = x && R,
        M = (0, f.useRef)(!1),
        k = (0, f.useRef)(!1),
        U = (e) => {
            if ((O && O(), N && m.current)) {
                let t = n.getItemProps(_);
                T.open(m.current, e, t.href, t.routerOptions);
            }
        },
        G = {};
    g
        ? ((G.onPressStart = (e) => {
              (L.current = e.pointerType), (M.current = j), "keyboard" === e.pointerType && (!x || h()) && S(e);
          }),
          v
              ? ((G.onPressUp = w
                    ? void 0
                    : (e) => {
                          "mouse" === e.pointerType && R && S(e);
                      }),
                (G.onPress = w
                    ? U
                    : (e) => {
                          "keyboard" !== e.pointerType && "mouse" !== e.pointerType && R && S(e);
                      }))
              : (G.onPress = (e) => {
                    w || (D && "mouse" !== e.pointerType)
                        ? ("keyboard" !== e.pointerType || p()) && U(e)
                        : "keyboard" !== e.pointerType && R && S(e);
                }))
        : ((G.onPressStart = (e) => {
              (L.current = e.pointerType),
                  (M.current = j),
                  (k.current = w),
                  R && (("mouse" === e.pointerType && !w) || ("keyboard" === e.pointerType && (!P || h()))) && S(e);
          }),
          (G.onPress = (e) => {
              ("touch" === e.pointerType ||
                  "pen" === e.pointerType ||
                  "virtual" === e.pointerType ||
                  ("keyboard" === e.pointerType && x && p()) ||
                  ("mouse" === e.pointerType && k.current)) &&
                  (x ? U(e) : R && S(e));
          })),
        (A["data-collection"] = (0, r.Zx)(n.collection)),
        (A["data-key"] = _),
        (G.preventFocusOnPress = E),
        E &&
            (G = (0, u.d)(G, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (n.setFocused(!0), n.setFocusedKey(_));
                },
                onPress(e) {
                    "touch" === e.pointerType && (n.setFocused(!0), n.setFocusedKey(_));
                },
            }));
    let { pressProps: B, isPressed: Z } = (0, a.r)(G),
        F = D
            ? (e) => {
                  "mouse" === L.current && (e.stopPropagation(), e.preventDefault(), U(e));
              }
            : void 0,
        { longPressProps: V } = (0, o.T)({
            isDisabled: !j,
            onLongPress(e) {
                "touch" === e.pointerType && (S(e), n.setSelectionBehavior("toggle"));
            },
        }),
        H = (e) => {
            "touch" === L.current && M.current && e.preventDefault();
        },
        Y = n.isLink(_)
            ? (e) => {
                  s.nG.isOpening || e.preventDefault();
              }
            : void 0;
    return {
        itemProps: (0, u.d)(
            A,
            R || w || E ? B : {},
            j ? V : {},
            {
                onDoubleClick: F,
                onDragStartCapture: H,
                onClick: Y,
                id: t,
            },
            E ? { onMouseDown: (e) => e.preventDefault() } : void 0,
        ),
        isPressed: Z,
        isSelected: n.isSelected(_),
        isFocused: n.isFocused && n.focusedKey === _,
        isDisabled: y,
        allowsSelection: R,
        hasAction: x,
    };
}
function p() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === "Enter";
}
function h() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space";
}
