r.d(t, { y: () => E });
var n = r(330976),
    i = r(64480),
    o = r(346711),
    a = r(256062),
    s = r(117530),
    l = r(225801),
    u = r(1576),
    c = r(499401),
    f = r(644255),
    p = r(979347),
    d = r(184093),
    h = r(691719),
    m = r(924949),
    v = r(668310),
    y = r(366632),
    g = r(993558),
    b = r(582128),
    w = r(361854);
function _(e, t) {
    let r = (0, b.useRef)(!0),
        n = (0, b.useRef)(null);
    ((0, w.N)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    ),
        (0, w.N)(() => {
            (r.current ? (r.current = !1) : (!n.current || t.some((e, t) => !Object.is(e, n[t]))) && e(),
                (n.current = t));
        }, t));
}
var S = r(333007);
function E(e) {
    let t,
        {
            selectionManager: r,
            keyboardDelegate: w,
            ref: E,
            autoFocus: x = !1,
            shouldFocusWrap: C = !1,
            disallowEmptySelection: k = !1,
            disallowSelectAll: T = !1,
            escapeKeyBehavior: M = "clearSelection",
            selectOnFocus: P = "replace" === r.selectionBehavior,
            disallowTypeAhead: A = !1,
            shouldUseVirtualFocus: I,
            allowsTabNavigation: O = !1,
            scrollRef: R = E,
            linkBehavior: L = "action",
            UNSTABLE_focusOnEntry: D,
        } = e,
        { direction: F } = (0, y.Y)(),
        N = (0, g.rd)(),
        j = (e, t, n) => {
            if (null != t) {
                if (r.isLink(t) && "selection" === L && P && !(0, u.N9)(e)) {
                    (0, S.flushSync)(() => {
                        r.setFocusedKey(t, n);
                    });
                    let i = (0, u.au)(E, t),
                        o = r.getItemProps(t);
                    return !!i && void N.open(i, e, o.href, o.routerOptions);
                }
                if ((r.setFocusedKey(t, n), r.isLink(t) && "override" === L)) return !1;
                if (e.shiftKey && "multiple" === r.selectionMode) return void r.extendSelection(t);
                if (P && !(0, u.N9)(e)) return void r.replaceSelection(t);
            }
            return !1;
        },
        B = (e, t) => ({
            [(0, f.cX)() ? e + "+Shift+Alt" : e + "+Shift+Control"]: t,
            [e + "+Shift"]: t,
            [(0, f.cX)() ? e + "+Alt" : e + "+Control"]: t,
            [e]: t,
        }),
        { keyboardProps: K } = (0, v.d)({
            shortcuts: {
                ...B("ArrowDown", (e) => {
                    if (w.getKeyBelow) {
                        let t = null != r.focusedKey ? w.getKeyBelow?.(r.focusedKey) : w.getFirstKey?.();
                        if ((null == t && C && (t = w.getFirstKey?.(r.focusedKey)), null != t)) return void j(e, t);
                    }
                    return !1;
                }),
                ...B("ArrowUp", (e) => {
                    if (w.getKeyAbove) {
                        let t = null != r.focusedKey ? w.getKeyAbove?.(r.focusedKey) : w.getLastKey?.();
                        if ((null == t && C && (t = w.getLastKey?.(r.focusedKey)), null != t)) return void j(e, t);
                    }
                    return !1;
                }),
                ...B("ArrowLeft", (e) => {
                    if (w.getKeyLeftOf) {
                        let t = null != r.focusedKey ? w.getKeyLeftOf?.(r.focusedKey) : w.getFirstKey?.();
                        if (
                            (null == t &&
                                C &&
                                (t = "rtl" === F ? w.getFirstKey?.(r.focusedKey) : w.getLastKey?.(r.focusedKey)),
                            null != t)
                        )
                            return void j(e, t, "rtl" === F ? "first" : "last");
                    }
                    return !1;
                }),
                ...B("ArrowRight", (e) => {
                    if (w.getKeyRightOf) {
                        let t = null != r.focusedKey ? w.getKeyRightOf?.(r.focusedKey) : w.getFirstKey?.();
                        if (
                            (null == t &&
                                C &&
                                (t = "rtl" === F ? w.getLastKey?.(r.focusedKey) : w.getFirstKey?.(r.focusedKey)),
                            null != t)
                        )
                            return void j(e, t, "rtl" === F ? "last" : "first");
                    }
                    return !1;
                }),
                ...B("PageDown", (e) => {
                    if (w.getKeyPageBelow && null != r.focusedKey) {
                        let t = w.getKeyPageBelow(r.focusedKey);
                        if (null != t) return j(e, t);
                    }
                    return !1;
                }),
                ...B("PageUp", (e) => {
                    if (w.getKeyPageAbove && null != r.focusedKey) {
                        let t = w.getKeyPageAbove(r.focusedKey);
                        if (null != t) return j(e, t);
                    }
                    return !1;
                }),
            },
            allowRepeats: !0,
        }),
        { keyboardProps: U } = (0, v.d)({
            shortcuts: {
                ...B("Home", (e) => {
                    if (w.getFirstKey) {
                        if (null === r.focusedKey && e.shiftKey) return !1;
                        let t = w.getFirstKey(r.focusedKey, (0, c.B)(e));
                        if ((r.setFocusedKey(t), null != t)) {
                            if ((0, c.B)(e) && e.shiftKey && "multiple" === r.selectionMode)
                                return void r.extendSelection(t);
                            else if (P) return void r.replaceSelection(t);
                        }
                    }
                    return !1;
                }),
                ...B("End", (e) => {
                    if (w.getLastKey) {
                        if (null === r.focusedKey && e.shiftKey) return !1;
                        let t = w.getLastKey(r.focusedKey, (0, c.B)(e));
                        if ((r.setFocusedKey(t), null != t)) {
                            if ((0, c.B)(e) && e.shiftKey && "multiple" === r.selectionMode)
                                return void r.extendSelection(t);
                            else if (P) return void r.replaceSelection(t);
                        }
                    }
                    return !1;
                }),
                "Mod+A": () => "multiple" === r.selectionMode && !0 !== T && void r.selectAll(),
                Escape: () => "clearSelection" === M && !k && 0 !== r.selectedKeys.size && void r.clearSelection(),
                Tab: () => {
                    if (!O && E.current) {
                        let e,
                            t,
                            r = (0, s.N$)(E.current, { tabbable: !0 });
                        do (t = r.lastChild()) && (e = t);
                        while (t);
                        let n = (0, a.bq)();
                        e && (!(0, a.ae)(e) || (n && !(0, p.A)(n))) && (0, o.e)(e);
                    }
                    return { shouldContinuePropagation: !0, shouldPreventDefault: !1 };
                },
                "Tab+Shift": () => (
                    !O && E.current && E.current.focus(),
                    { shouldContinuePropagation: !0, shouldPreventDefault: !1 }
                ),
            },
        }),
        V = (0, b.useRef)({ top: 0, left: 0 });
    (0, m._)(R, "scroll", () => {
        V.current = { top: R.current?.scrollTop ?? 0, left: R.current?.scrollLeft ?? 0 };
    });
    let $ = (0, b.useRef)(!1);
    (0, m._)(
        E,
        "react-aria-focus",
        I
            ? (e) => {
                  let { detail: t } = e;
                  (e.stopPropagation(), r.setFocused(!0), t?.focusStrategy === "first" && ($.current = !0));
              }
            : void 0,
    );
    let H = w.getFirstKey?.() ?? null;
    (_(() => {
        if ($.current)
            if (null == H) {
                let e = (0, a.bq)();
                ((0, n.vX)(E.current), (0, n.Ig)(e, null), r.collection.size > 0 && ($.current = !1));
            } else (r.setFocusedKey(H), ($.current = !1));
    }, [H, r.collection.size]),
        _(() => {
            r.collection.size > 0 && ($.current = !1);
        }, [r.focusedKey]),
        (0, m._)(
            E,
            "react-aria-clear-focus",
            I
                ? (e) => {
                      (e.stopPropagation(), r.setFocused(!1), e.detail?.clearFocusKey && r.setFocusedKey(null));
                  }
                : void 0,
        ));
    let z = (0, b.useRef)(x),
        G = (0, b.useRef)(!1);
    (0, b.useEffect)(() => {
        if (z.current) {
            let e = null;
            ("first" === x && (e = w.getFirstKey?.() ?? null), "last" === x && (e = w.getLastKey?.() ?? null));
            let t = r.selectedKeys;
            if (t.size) {
                for (let n of t)
                    if (r.canSelectItem(n)) {
                        e = n;
                        break;
                    }
            }
            (r.setFocused(!0),
                r.setFocusedKey(e),
                null == e && !I && E.current && (0, i.l)(E.current),
                r.collection.size > 0 && ((z.current = !1), (G.current = !0)));
        }
    });
    let W = (0, b.useRef)(r.focusedKey),
        q = (0, b.useRef)(null);
    ((0, b.useEffect)(() => {
        if (
            r.isFocused &&
            null != r.focusedKey &&
            (r.focusedKey !== W.current || G.current) &&
            R.current &&
            E.current
        ) {
            let e = (0, l.ME)(),
                t = (0, u.au)(E, r.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || G.current) &&
                (q.current && cancelAnimationFrame(q.current),
                (q.current = requestAnimationFrame(() => {
                    R.current &&
                        ((0, h.R)(R.current, t), "virtual" !== e && (0, h.o)(t, { containingElement: E.current }));
                })));
        }
        (!I && r.isFocused && null == r.focusedKey && null != W.current && E.current && (0, i.l)(E.current),
            (W.current = r.focusedKey),
            (G.current = !1));
    }),
        (0, b.useEffect)(
            () => () => {
                q.current && cancelAnimationFrame(q.current);
            },
            [],
        ),
        (0, m._)(E, "react-aria-focus-scope-restore", (e) => {
            (e.preventDefault(), r.setFocused(!0));
        }));
    let Y = {
            ...(0, d.v)(U, K),
            onFocus: (e) => {
                if (r.isFocused) {
                    (0, a.sD)(e.currentTarget, (0, a.wt)(e)) || r.setFocused(!1);
                    return;
                }
                if (!(0, a.sD)(e.currentTarget, (0, a.wt)(e))) return;
                let t = (0, l.ME)();
                r.setFocused(!0);
                let n = (e) => {
                    null != e && (r.setFocusedKey(e), P && !r.isSelected(e) && r.replaceSelection(e));
                };
                if (D && ("keyboard" === t || "virtual" === t)) n("first" === D ? w.getFirstKey?.() : w.getLastKey?.());
                else if (null == r.focusedKey) {
                    let t = e.relatedTarget;
                    t && e.currentTarget.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
                        ? n(r.lastSelectedKey ?? w.getLastKey?.())
                        : n(r.firstSelectedKey ?? w.getFirstKey?.());
                } else R.current && ((R.current.scrollTop = V.current.top), (R.current.scrollLeft = V.current.left));
                if (null != r.focusedKey && R.current) {
                    let e = (0, u.au)(E, r.focusedKey);
                    e instanceof HTMLElement &&
                        ((0, a.ae)(e) || I || (0, o.e)(e),
                        ("keyboard" === t || (D && "virtual" === t)) && (0, h.o)(e, { containingElement: E.current }));
                }
            },
            onBlur: (e) => {
                (0, a.sD)(e.currentTarget, e.relatedTarget) || r.setFocused(!1);
            },
            onMouseDown(e) {
                R.current === (0, a.wt)(e) && e.preventDefault();
            },
        },
        { typeSelectProps: X } = (function (e) {
            let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e,
                i = (0, b.useRef)({ search: "", timeout: void 0 });
            return (
                (0, b.useEffect)(() => {
                    let e = i.current.timeout;
                    return () => {
                        clearTimeout(e);
                    };
                }, [i]),
                {
                    typeSelectProps: {
                        onKeyDownCapture: t.getKeyForSearch
                            ? (e) => {
                                  if (i.current.search.length > 0 && " " === e.key) {
                                      if (
                                          (e.preventDefault(),
                                          ("continuePropagation" in e &&
                                              (!("continuePropagation" in e) || e.isPropagationStopped())) ||
                                              e.stopPropagation(),
                                          (i.current.search += " "),
                                          null != t.getKeyForSearch)
                                      ) {
                                          let e = t.getKeyForSearch(i.current.search, r.focusedKey);
                                          (null == e && (e = t.getKeyForSearch(i.current.search)),
                                              null != e && (r.setFocusedKey(e), n && n(e)));
                                      }
                                      (clearTimeout(i.current.timeout),
                                          (i.current.timeout = setTimeout(() => {
                                              i.current.search = "";
                                          }, 1e3)));
                                  }
                              }
                            : void 0,
                        onKeyDown: t.getKeyForSearch
                            ? (e) => {
                                  var o;
                                  let s = 1 !== (o = e.key).length && /^[A-Z]/i.test(o) ? "" : o;
                                  if (
                                      s &&
                                      !e.ctrlKey &&
                                      !e.metaKey &&
                                      !e.altKey &&
                                      (0, a.sD)(e.currentTarget, (0, a.wt)(e)) &&
                                      (0 !== i.current.search.length || " " !== s)
                                  ) {
                                      if (((i.current.search += s), null != t.getKeyForSearch)) {
                                          let o = t.getKeyForSearch(i.current.search, r.focusedKey);
                                          if ((null == o && (o = t.getKeyForSearch(i.current.search)), null != o))
                                              (r.setFocusedKey(o),
                                                  n && n(o),
                                                  e.preventDefault(),
                                                  "continuePropagation" in e || e.stopPropagation());
                                          else {
                                              ((i.current.search = ""),
                                                  clearTimeout(i.current.timeout),
                                                  (i.current.timeout = void 0));
                                              return;
                                          }
                                      }
                                      (clearTimeout(i.current.timeout),
                                          (i.current.timeout = setTimeout(() => {
                                              i.current.search = "";
                                          }, 1e3)));
                                  }
                              }
                            : void 0,
                    },
                }
            );
        })({ keyboardDelegate: w, selectionManager: r });
    (A || (Y = (0, d.v)(X, Y)), I || (t = null == r.focusedKey ? 0 : -1));
    let J = (0, u.j5)(r.collection);
    return { collectionProps: (0, d.v)(Y, { tabIndex: t, "data-collection": J }) };
}
