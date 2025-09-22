n.d(t, { g: () => O });
var r = n(173213),
    i = n(572139),
    a = n(87624),
    o = n(816187),
    s = n(945353),
    l = n(361834),
    c = n(368742),
    u = n(370617),
    d = n(101741),
    f = n(499435),
    _ = n(506364),
    p = n(603113),
    h = n(647438),
    m = n(998925),
    g = n(533339),
    E = n(229114),
    b = n(804970),
    y = n(578206);
function O(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: O,
            ref: v,
            autoFocus: I = !1,
            shouldFocusWrap: T = !1,
            disallowEmptySelection: S = !1,
            disallowSelectAll: A = !1,
            selectOnFocus: C = "replace" === n.selectionBehavior,
            disallowTypeAhead: N = !1,
            shouldUseVirtualFocus: R,
            allowsTabNavigation: P = !1,
            isVirtualized: w,
            scrollRef: D = v,
            linkBehavior: x = "action",
        } = e,
        { direction: L } = (0, y.j)(),
        j = (0, a.tv)(),
        M = (e) => {
            var t, i, a, l, c, u, d, f, _, h, m, g, b;
            if (
                (e.altKey && "Tab" === e.key && e.preventDefault(),
                !(null == (t = v.current) ? void 0 : t.contains(e.target)))
            )
                return;
            let y = (t, i) => {
                if (null != t) {
                    if (n.isLink(t) && "selection" === x && C && !(0, r.FJ)(e)) {
                        (0, p.flushSync)(() => {
                            n.setFocusedKey(t, i);
                        });
                        let a = (0, r.D0)(v, t),
                            o = n.getItemProps(t);
                        a && j.open(a, e, o.href, o.routerOptions);
                        return;
                    }
                    n.setFocusedKey(t, i),
                        (n.isLink(t) && "override" === x) ||
                            (e.shiftKey && "multiple" === n.selectionMode
                                ? n.extendSelection(t)
                                : C && !(0, r.FJ)(e) && n.replaceSelection(t));
                }
            };
            switch (e.key) {
                case "ArrowDown":
                    if (O.getKeyBelow) {
                        let t =
                            null != n.focusedKey
                                ? null == (i = O.getKeyBelow)
                                    ? void 0
                                    : i.call(O, n.focusedKey)
                                : null == (a = O.getFirstKey)
                                  ? void 0
                                  : a.call(O);
                        null == t && T && (t = null == (l = O.getFirstKey) ? void 0 : l.call(O, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "ArrowUp":
                    if (O.getKeyAbove) {
                        let t =
                            null != n.focusedKey
                                ? null == (c = O.getKeyAbove)
                                    ? void 0
                                    : c.call(O, n.focusedKey)
                                : null == (u = O.getLastKey)
                                  ? void 0
                                  : u.call(O);
                        null == t && T && (t = null == (d = O.getLastKey) ? void 0 : d.call(O, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "ArrowLeft":
                    if (O.getKeyLeftOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (f = O.getKeyLeftOf)
                                    ? void 0
                                    : f.call(O, n.focusedKey)
                                : null;
                        null == t &&
                            T &&
                            (t =
                                "rtl" === L
                                    ? null == (_ = O.getFirstKey)
                                        ? void 0
                                        : _.call(O, n.focusedKey)
                                    : null == (h = O.getLastKey)
                                      ? void 0
                                      : h.call(O, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t, "rtl" === L ? "first" : "last"));
                    }
                    break;
                case "ArrowRight":
                    if (O.getKeyRightOf) {
                        let t =
                            null != n.focusedKey
                                ? null == (m = O.getKeyRightOf)
                                    ? void 0
                                    : m.call(O, n.focusedKey)
                                : null;
                        null == t &&
                            T &&
                            (t =
                                "rtl" === L
                                    ? null == (g = O.getLastKey)
                                        ? void 0
                                        : g.call(O, n.focusedKey)
                                    : null == (b = O.getFirstKey)
                                      ? void 0
                                      : b.call(O, n.focusedKey)),
                            null != t && (e.preventDefault(), y(t, "rtl" === L ? "last" : "first"));
                    }
                    break;
                case "Home":
                    if (O.getFirstKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = O.getFirstKey(n.focusedKey, (0, o.y)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : C && n.replaceSelection(t));
                    }
                    break;
                case "End":
                    if (O.getLastKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = O.getLastKey(n.focusedKey, (0, o.y)(e));
                        n.setFocusedKey(t),
                            null != t &&
                                ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : C && n.replaceSelection(t));
                    }
                    break;
                case "PageDown":
                    if (O.getKeyPageBelow && null != n.focusedKey) {
                        let t = O.getKeyPageBelow(n.focusedKey);
                        null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "PageUp":
                    if (O.getKeyPageAbove && null != n.focusedKey) {
                        let t = O.getKeyPageAbove(n.focusedKey);
                        null != t && (e.preventDefault(), y(t));
                    }
                    break;
                case "a":
                    (0, o.y)(e) && "multiple" === n.selectionMode && !0 !== A && (e.preventDefault(), n.selectAll());
                    break;
                case "Escape":
                    S || 0 === n.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                    break;
                case "Tab":
                    if (!P)
                        if (e.shiftKey) v.current.focus();
                        else {
                            let e,
                                t,
                                n = (0, E.QL)(v.current, { tabbable: !0 });
                            do (t = n.lastChild()) && (e = t);
                            while (t);
                            e && !e.contains(document.activeElement) && (0, s.A)(e);
                        }
            }
        },
        k = (0, h.useRef)({
            top: 0,
            left: 0,
        });
    (0, l.z)(
        D,
        "scroll",
        w
            ? void 0
            : () => {
                  var e, t, n, r;
                  k.current = {
                      top: null != (n = null == (e = D.current) ? void 0 : e.scrollTop) ? n : 0,
                      left: null != (r = null == (t = D.current) ? void 0 : t.scrollLeft) ? r : 0,
                  };
              },
    );
    let U = (e) => {
            if (n.isFocused) {
                e.currentTarget.contains(e.target) || n.setFocused(!1);
                return;
            }
            if (e.currentTarget.contains(e.target)) {
                if ((n.setFocused(!0), null == n.focusedKey)) {
                    var t, i, a, o;
                    let r = (e) => {
                            null != e && (n.setFocusedKey(e), C && !n.isSelected(e) && n.replaceSelection(e));
                        },
                        s = e.relatedTarget;
                    s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING
                        ? r(null != (a = n.lastSelectedKey) ? a : null == (t = O.getLastKey) ? void 0 : t.call(O))
                        : r(null != (o = n.firstSelectedKey) ? o : null == (i = O.getFirstKey) ? void 0 : i.call(O));
                } else
                    !w && D.current && ((D.current.scrollTop = k.current.top), (D.current.scrollLeft = k.current.left));
                if (null != n.focusedKey && D.current) {
                    let e = (0, r.D0)(v, n.focusedKey);
                    e instanceof HTMLElement &&
                        (e.contains(document.activeElement) || R || (0, s.A)(e),
                        "keyboard" === (0, m.Jz)() && (0, c.G)(e, { containingElement: v.current }));
                }
            }
        },
        G = (e) => {
            e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
        },
        B = (0, h.useRef)(!1);
    (0, l.z)(
        v,
        u.N,
        R
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (B.current = !0);
              }
            : void 0,
    );
    let Z = (0, d.i)(() => {
        var e, t;
        let r = null != (t = null == (e = O.getFirstKey) ? void 0 : e.call(O)) ? t : null;
        null == r
            ? ((0, b.q6)(v.current), n.collection.size > 0 && (B.current = !1))
            : (n.setFocusedKey(r), (B.current = !1));
    });
    (0, f.i)(() => {
        B.current && Z();
    }, [n.collection, Z]);
    let F = (0, d.i)(() => {
        n.collection.size > 0 && (B.current = !1);
    });
    (0, f.i)(() => {
        F();
    }, [n.focusedKey, F]),
        (0, l.z)(
            v,
            u.o,
            R
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let V = (0, h.useRef)(I),
        H = (0, h.useRef)(!1);
    (0, h.useEffect)(() => {
        if (V.current) {
            var e, t, r, i;
            let a = null;
            "first" === I && (a = null != (r = null == (e = O.getFirstKey) ? void 0 : e.call(O)) ? r : null),
                "last" === I && (a = null != (i = null == (t = O.getLastKey) ? void 0 : t.call(O)) ? i : null);
            let o = n.selectedKeys;
            if (o.size) {
                for (let e of o)
                    if (n.canSelectItem(e)) {
                        a = e;
                        break;
                    }
            }
            n.setFocused(!0),
                n.setFocusedKey(a),
                null == a && !R && v.current && (0, g.e)(v.current),
                n.collection.size > 0 && ((V.current = !1), (H.current = !0));
        }
    });
    let Y = (0, h.useRef)(n.focusedKey);
    (0, h.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== Y.current || H.current) &&
            D.current &&
            v.current
        ) {
            let e = (0, m.Jz)(),
                t = (0, r.D0)(v, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || H.current) &&
                ((0, c.z)(D.current, t), "virtual" !== e && (0, c.G)(t, { containingElement: v.current }));
        }
        !R && n.isFocused && null == n.focusedKey && null != Y.current && v.current && (0, g.e)(v.current),
            (Y.current = n.focusedKey),
            (H.current = !1);
    }),
        (0, l.z)(v, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let W = {
            onKeyDown: M,
            onFocus: U,
            onBlur: G,
            onMouseDown(e) {
                D.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: K } = (0, i.i)({
            keyboardDelegate: O,
            selectionManager: n,
        });
    N || (W = (0, _.d)(K, W)), R || (t = null == n.focusedKey ? 0 : -1);
    let z = (0, r.Mm)(n.collection);
    return {
        collectionProps: (0, _.d)(W, {
            tabIndex: t,
            "data-collection": z,
        }),
    };
}
