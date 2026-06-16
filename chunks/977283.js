"use strict";
n.d(t, { y: () => T });
var i = n(869795),
    r = n(64700),
    s = n(132716),
    a = n(2799),
    o = n(401705),
    l = n(248215),
    u = n(518665),
    c = n(959462),
    d = n(241827),
    _ = n(3388);
function h(e, t) {
    let n = (0, r.useRef)(!0),
        i = (0, r.useRef)(null);
    (0, _.N)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        [],
    ),
        (0, _.N)(() => {
            n.current ? (n.current = !1) : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(),
                (i.current = t);
        }, t);
}
var f = n(318473),
    p = n(693321),
    E = n(862836),
    m = n(340287),
    g = n(885714),
    A = n(805447),
    I = n(402112);
function T(e) {
    let t,
        {
            selectionManager: n,
            keyboardDelegate: _,
            ref: T,
            autoFocus: S = !1,
            shouldFocusWrap: y = !1,
            disallowEmptySelection: C = !1,
            disallowSelectAll: N = !1,
            escapeKeyBehavior: v = "clearSelection",
            selectOnFocus: R = "replace" === n.selectionBehavior,
            disallowTypeAhead: O = !1,
            shouldUseVirtualFocus: b,
            allowsTabNavigation: D = !1,
            isVirtualized: L,
            scrollRef: w = T,
            linkBehavior: M = "action",
        } = e,
        { direction: P } = (0, I.Y)(),
        x = (0, s.rd)(),
        k = (0, r.useRef)({ top: 0, left: 0 });
    (0, l._)(
        w,
        "scroll",
        L
            ? void 0
            : () => {
                  var e, t, n, i;
                  k.current = {
                      top: null != (n = null == (e = w.current) ? void 0 : e.scrollTop) ? n : 0,
                      left: null != (i = null == (t = w.current) ? void 0 : t.scrollLeft) ? i : 0,
                  };
              },
    );
    let U = (0, r.useRef)(!1);
    (0, l._)(
        T,
        "react-aria-focus",
        b
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      n.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (U.current = !0);
              }
            : void 0,
    );
    let G = (0, c.J)(() => {
        var e, t;
        let i = null != (t = null == (e = _.getFirstKey) ? void 0 : e.call(_)) ? t : null;
        if (null == i) {
            let e = (0, d.bq)();
            (0, E.vX)(T.current), (0, E.Ig)(e, null), n.collection.size > 0 && (U.current = !1);
        } else n.setFocusedKey(i), (U.current = !1);
    });
    h(() => {
        U.current && G();
    }, [n.collection, G]);
    let F = (0, c.J)(() => {
        n.collection.size > 0 && (U.current = !1);
    });
    h(() => {
        F();
    }, [n.focusedKey, F]),
        (0, l._)(
            T,
            "react-aria-clear-focus",
            b
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          n.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null);
                  }
                : void 0,
        );
    let V = (0, r.useRef)(S),
        B = (0, r.useRef)(!1);
    (0, r.useEffect)(() => {
        if (V.current) {
            var e, t, i, r;
            let s = null;
            "first" === S && (s = null != (i = null == (e = _.getFirstKey) ? void 0 : e.call(_)) ? i : null),
                "last" === S && (s = null != (r = null == (t = _.getLastKey) ? void 0 : t.call(_)) ? r : null);
            let a = n.selectedKeys;
            if (a.size) {
                for (let e of a)
                    if (n.canSelectItem(e)) {
                        s = e;
                        break;
                    }
            }
            n.setFocused(!0),
                n.setFocusedKey(s),
                null == s && !b && T.current && (0, A.l)(T.current),
                n.collection.size > 0 && ((V.current = !1), (B.current = !0));
        }
    });
    let j = (0, r.useRef)(n.focusedKey),
        H = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== j.current || B.current) &&
            w.current &&
            T.current
        ) {
            let e = (0, g.ME)(),
                t = (0, i.au)(T, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || B.current) &&
                (H.current && cancelAnimationFrame(H.current),
                (H.current = requestAnimationFrame(() => {
                    w.current &&
                        ((0, u.R)(w.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: T.current }));
                })));
        }
        !b && n.isFocused && null == n.focusedKey && null != j.current && T.current && (0, A.l)(T.current),
            (j.current = n.focusedKey),
            (B.current = !1);
    }),
        (0, r.useEffect)(
            () => () => {
                H.current && cancelAnimationFrame(H.current);
            },
            [],
        ),
        (0, l._)(T, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let Y = {
            onKeyDown: (e) => {
                var t, r, s, l, u, c, d, h, f, E, g, A, I;
                if (
                    (e.altKey && "Tab" === e.key && e.preventDefault(),
                    !(null == (t = T.current) ? void 0 : t.contains(e.target)))
                )
                    return;
                let S = (t, r) => {
                    if (null != t) {
                        if (n.isLink(t) && "selection" === M && R && !(0, i.N9)(e)) {
                            (0, m.flushSync)(() => {
                                n.setFocusedKey(t, r);
                            });
                            let s = (0, i.au)(T, t),
                                a = n.getItemProps(t);
                            s && x.open(s, e, a.href, a.routerOptions);
                            return;
                        }
                        n.setFocusedKey(t, r),
                            (n.isLink(t) && "override" === M) ||
                                (e.shiftKey && "multiple" === n.selectionMode
                                    ? n.extendSelection(t)
                                    : R && !(0, i.N9)(e) && n.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case "ArrowDown":
                        if (_.getKeyBelow) {
                            let t =
                                null != n.focusedKey
                                    ? null == (r = _.getKeyBelow)
                                        ? void 0
                                        : r.call(_, n.focusedKey)
                                    : null == (s = _.getFirstKey)
                                      ? void 0
                                      : s.call(_);
                            null == t && y && (t = null == (l = _.getFirstKey) ? void 0 : l.call(_, n.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowUp":
                        if (_.getKeyAbove) {
                            let t =
                                null != n.focusedKey
                                    ? null == (u = _.getKeyAbove)
                                        ? void 0
                                        : u.call(_, n.focusedKey)
                                    : null == (c = _.getLastKey)
                                      ? void 0
                                      : c.call(_);
                            null == t && y && (t = null == (d = _.getLastKey) ? void 0 : d.call(_, n.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowLeft":
                        if (_.getKeyLeftOf) {
                            let t =
                                null != n.focusedKey
                                    ? null == (h = _.getKeyLeftOf)
                                        ? void 0
                                        : h.call(_, n.focusedKey)
                                    : null;
                            null == t &&
                                y &&
                                (t =
                                    "rtl" === P
                                        ? null == (f = _.getFirstKey)
                                            ? void 0
                                            : f.call(_, n.focusedKey)
                                        : null == (E = _.getLastKey)
                                          ? void 0
                                          : E.call(_, n.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === P ? "first" : "last"));
                        }
                        break;
                    case "ArrowRight":
                        if (_.getKeyRightOf) {
                            let t =
                                null != n.focusedKey
                                    ? null == (g = _.getKeyRightOf)
                                        ? void 0
                                        : g.call(_, n.focusedKey)
                                    : null;
                            null == t &&
                                y &&
                                (t =
                                    "rtl" === P
                                        ? null == (A = _.getLastKey)
                                            ? void 0
                                            : A.call(_, n.focusedKey)
                                        : null == (I = _.getFirstKey)
                                          ? void 0
                                          : I.call(_, n.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === P ? "last" : "first"));
                        }
                        break;
                    case "Home":
                        if (_.getFirstKey) {
                            if (null === n.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = _.getFirstKey(n.focusedKey, (0, a.B)(e));
                            n.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                        ? n.extendSelection(t)
                                        : R && n.replaceSelection(t));
                        }
                        break;
                    case "End":
                        if (_.getLastKey) {
                            if (null === n.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = _.getLastKey(n.focusedKey, (0, a.B)(e));
                            n.setFocusedKey(t),
                                null != t &&
                                    ((0, a.B)(e) && e.shiftKey && "multiple" === n.selectionMode
                                        ? n.extendSelection(t)
                                        : R && n.replaceSelection(t));
                        }
                        break;
                    case "PageDown":
                        if (_.getKeyPageBelow && null != n.focusedKey) {
                            let t = _.getKeyPageBelow(n.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "PageUp":
                        if (_.getKeyPageAbove && null != n.focusedKey) {
                            let t = _.getKeyPageAbove(n.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "a":
                        (0, a.B)(e) &&
                            "multiple" === n.selectionMode &&
                            !0 !== N &&
                            (e.preventDefault(), n.selectAll());
                        break;
                    case "Escape":
                        "clearSelection" !== v ||
                            C ||
                            0 === n.selectedKeys.size ||
                            (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                        break;
                    case "Tab":
                        if (!D)
                            if (e.shiftKey) T.current.focus();
                            else {
                                let e,
                                    t,
                                    n = (0, p.N$)(T.current, { tabbable: !0 });
                                do (t = n.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, o.e)(e);
                            }
                }
            },
            onFocus: (e) => {
                if (n.isFocused) {
                    e.currentTarget.contains(e.target) || n.setFocused(!1);
                    return;
                }
                if (e.currentTarget.contains(e.target)) {
                    if ((n.setFocused(!0), null == n.focusedKey)) {
                        var t, r, s, a;
                        let i = (e) => {
                                null != e && (n.setFocusedKey(e), R && !n.isSelected(e) && n.replaceSelection(e));
                            },
                            o = e.relatedTarget;
                        o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? i(null != (s = n.lastSelectedKey) ? s : null == (t = _.getLastKey) ? void 0 : t.call(_))
                            : i(
                                  null != (a = n.firstSelectedKey)
                                      ? a
                                      : null == (r = _.getFirstKey)
                                        ? void 0
                                        : r.call(_),
                              );
                    } else
                        !L &&
                            w.current &&
                            ((w.current.scrollTop = k.current.top), (w.current.scrollLeft = k.current.left));
                    if (null != n.focusedKey && w.current) {
                        let e = (0, i.au)(T, n.focusedKey);
                        e instanceof HTMLElement &&
                            (e.contains(document.activeElement) || b || (0, o.e)(e),
                            "keyboard" === (0, g.ME)() && (0, u.o)(e, { containingElement: T.current }));
                    }
                }
            },
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
            },
            onMouseDown(e) {
                w.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: W } = (function (e) {
            let { keyboardDelegate: t, selectionManager: n, onTypeSelect: i } = e,
                s = (0, r.useRef)({ search: "", timeout: void 0 }).current;
            return {
                typeSelectProps: {
                    onKeyDownCapture: t.getKeyForSearch
                        ? (e) => {
                              var r;
                              let a = 1 !== (r = e.key).length && /^[A-Z]/i.test(r) ? "" : r;
                              if (
                                  a &&
                                  !e.ctrlKey &&
                                  !e.metaKey &&
                                  e.currentTarget.contains(e.target) &&
                                  (0 !== s.search.length || " " !== a)
                              ) {
                                  if (
                                      (" " === a &&
                                          s.search.trim().length > 0 &&
                                          (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                                      (s.search += a),
                                      null != t.getKeyForSearch)
                                  ) {
                                      let e = t.getKeyForSearch(s.search, n.focusedKey);
                                      null == e && (e = t.getKeyForSearch(s.search)),
                                          null != e && (n.setFocusedKey(e), i && i(e));
                                  }
                                  clearTimeout(s.timeout),
                                      (s.timeout = setTimeout(() => {
                                          s.search = "";
                                      }, 1e3));
                              }
                          }
                        : void 0,
                },
            };
        })({ keyboardDelegate: _, selectionManager: n });
    O || (Y = (0, f.v)(W, Y)), b || (t = null == n.focusedKey ? 0 : -1);
    let K = (0, i.j5)(n.collection);
    return { collectionProps: (0, f.v)(Y, { tabIndex: t, "data-collection": K }) };
}
