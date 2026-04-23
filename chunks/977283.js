"use strict";
r.d(t, { y: () => E });
var n = r(869795),
    a = r(64700),
    s = r(132716),
    i = r(2799),
    o = r(401705),
    l = r(248215),
    u = r(518665),
    c = r(959462),
    d = r(241827),
    f = r(3388);
function p(e, t) {
    let r = (0, a.useRef)(!0),
        n = (0, a.useRef)(null);
    (0, f.N)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    ),
        (0, f.N)(() => {
            r.current ? (r.current = !1) : (!n.current || t.some((e, t) => !Object.is(e, n[t]))) && e(),
                (n.current = t);
        }, t);
}
var h = r(318473),
    m = r(693321),
    _ = r(862836),
    g = r(340287),
    v = r(885714),
    b = r(805447),
    y = r(402112);
function E(e) {
    let t,
        {
            selectionManager: r,
            keyboardDelegate: f,
            ref: E,
            autoFocus: S = !1,
            shouldFocusWrap: T = !1,
            disallowEmptySelection: x = !1,
            disallowSelectAll: w = !1,
            escapeKeyBehavior: C = "clearSelection",
            selectOnFocus: D = "replace" === r.selectionBehavior,
            disallowTypeAhead: O = !1,
            shouldUseVirtualFocus: A,
            allowsTabNavigation: M = !1,
            isVirtualized: R,
            scrollRef: k = E,
            linkBehavior: N = "action",
        } = e,
        { direction: L } = (0, y.Y)(),
        I = (0, s.rd)(),
        P = (0, a.useRef)({ top: 0, left: 0 });
    (0, l._)(
        k,
        "scroll",
        R
            ? void 0
            : () => {
                  var e, t, r, n;
                  P.current = {
                      top: null != (r = null == (e = k.current) ? void 0 : e.scrollTop) ? r : 0,
                      left: null != (n = null == (t = k.current) ? void 0 : t.scrollLeft) ? n : 0,
                  };
              },
    );
    let F = (0, a.useRef)(!1);
    (0, l._)(
        E,
        "react-aria-focus",
        A
            ? (e) => {
                  let { detail: t } = e;
                  e.stopPropagation(),
                      r.setFocused(!0),
                      (null == t ? void 0 : t.focusStrategy) === "first" && (F.current = !0);
              }
            : void 0,
    );
    let B = (0, c.J)(() => {
        var e, t;
        let n = null != (t = null == (e = f.getFirstKey) ? void 0 : e.call(f)) ? t : null;
        if (null == n) {
            let e = (0, d.bq)();
            (0, _.vX)(E.current), (0, _.Ig)(e, null), r.collection.size > 0 && (F.current = !1);
        } else r.setFocusedKey(n), (F.current = !1);
    });
    p(() => {
        F.current && B();
    }, [r.collection, B]);
    let Y = (0, c.J)(() => {
        r.collection.size > 0 && (F.current = !1);
    });
    p(() => {
        Y();
    }, [r.focusedKey, Y]),
        (0, l._)(
            E,
            "react-aria-clear-focus",
            A
                ? (e) => {
                      var t;
                      e.stopPropagation(),
                          r.setFocused(!1),
                          (null == (t = e.detail) ? void 0 : t.clearFocusKey) && r.setFocusedKey(null);
                  }
                : void 0,
        );
    let U = (0, a.useRef)(S),
        j = (0, a.useRef)(!1);
    (0, a.useEffect)(() => {
        if (U.current) {
            var e, t, n, a;
            let s = null;
            "first" === S && (s = null != (n = null == (e = f.getFirstKey) ? void 0 : e.call(f)) ? n : null),
                "last" === S && (s = null != (a = null == (t = f.getLastKey) ? void 0 : t.call(f)) ? a : null);
            let i = r.selectedKeys;
            if (i.size) {
                for (let e of i)
                    if (r.canSelectItem(e)) {
                        s = e;
                        break;
                    }
            }
            r.setFocused(!0),
                r.setFocusedKey(s),
                null == s && !A && E.current && (0, b.l)(E.current),
                r.collection.size > 0 && ((U.current = !1), (j.current = !0));
        }
    });
    let V = (0, a.useRef)(r.focusedKey),
        H = (0, a.useRef)(null);
    (0, a.useEffect)(() => {
        if (
            r.isFocused &&
            null != r.focusedKey &&
            (r.focusedKey !== V.current || j.current) &&
            k.current &&
            E.current
        ) {
            let e = (0, v.ME)(),
                t = (0, n.au)(E, r.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || j.current) &&
                (H.current && cancelAnimationFrame(H.current),
                (H.current = requestAnimationFrame(() => {
                    k.current &&
                        ((0, u.R)(k.current, t), "virtual" !== e && (0, u.o)(t, { containingElement: E.current }));
                })));
        }
        !A && r.isFocused && null == r.focusedKey && null != V.current && E.current && (0, b.l)(E.current),
            (V.current = r.focusedKey),
            (j.current = !1);
    }),
        (0, a.useEffect)(
            () => () => {
                H.current && cancelAnimationFrame(H.current);
            },
            [],
        ),
        (0, l._)(E, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), r.setFocused(!0);
        });
    let G = {
            onKeyDown: (e) => {
                var t, a, s, l, u, c, d, p, h, _, v, b, y;
                if (
                    (e.altKey && "Tab" === e.key && e.preventDefault(),
                    !(null == (t = E.current) ? void 0 : t.contains(e.target)))
                )
                    return;
                let S = (t, a) => {
                    if (null != t) {
                        if (r.isLink(t) && "selection" === N && D && !(0, n.N9)(e)) {
                            (0, g.flushSync)(() => {
                                r.setFocusedKey(t, a);
                            });
                            let s = (0, n.au)(E, t),
                                i = r.getItemProps(t);
                            s && I.open(s, e, i.href, i.routerOptions);
                            return;
                        }
                        r.setFocusedKey(t, a),
                            (r.isLink(t) && "override" === N) ||
                                (e.shiftKey && "multiple" === r.selectionMode
                                    ? r.extendSelection(t)
                                    : D && !(0, n.N9)(e) && r.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case "ArrowDown":
                        if (f.getKeyBelow) {
                            let t =
                                null != r.focusedKey
                                    ? null == (a = f.getKeyBelow)
                                        ? void 0
                                        : a.call(f, r.focusedKey)
                                    : null == (s = f.getFirstKey)
                                      ? void 0
                                      : s.call(f);
                            null == t && T && (t = null == (l = f.getFirstKey) ? void 0 : l.call(f, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowUp":
                        if (f.getKeyAbove) {
                            let t =
                                null != r.focusedKey
                                    ? null == (u = f.getKeyAbove)
                                        ? void 0
                                        : u.call(f, r.focusedKey)
                                    : null == (c = f.getLastKey)
                                      ? void 0
                                      : c.call(f);
                            null == t && T && (t = null == (d = f.getLastKey) ? void 0 : d.call(f, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "ArrowLeft":
                        if (f.getKeyLeftOf) {
                            let t =
                                null != r.focusedKey
                                    ? null == (p = f.getKeyLeftOf)
                                        ? void 0
                                        : p.call(f, r.focusedKey)
                                    : null;
                            null == t &&
                                T &&
                                (t =
                                    "rtl" === L
                                        ? null == (h = f.getFirstKey)
                                            ? void 0
                                            : h.call(f, r.focusedKey)
                                        : null == (_ = f.getLastKey)
                                          ? void 0
                                          : _.call(f, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === L ? "first" : "last"));
                        }
                        break;
                    case "ArrowRight":
                        if (f.getKeyRightOf) {
                            let t =
                                null != r.focusedKey
                                    ? null == (v = f.getKeyRightOf)
                                        ? void 0
                                        : v.call(f, r.focusedKey)
                                    : null;
                            null == t &&
                                T &&
                                (t =
                                    "rtl" === L
                                        ? null == (b = f.getLastKey)
                                            ? void 0
                                            : b.call(f, r.focusedKey)
                                        : null == (y = f.getFirstKey)
                                          ? void 0
                                          : y.call(f, r.focusedKey)),
                                null != t && (e.preventDefault(), S(t, "rtl" === L ? "last" : "first"));
                        }
                        break;
                    case "Home":
                        if (f.getFirstKey) {
                            if (null === r.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = f.getFirstKey(r.focusedKey, (0, i.B)(e));
                            r.setFocusedKey(t),
                                null != t &&
                                    ((0, i.B)(e) && e.shiftKey && "multiple" === r.selectionMode
                                        ? r.extendSelection(t)
                                        : D && r.replaceSelection(t));
                        }
                        break;
                    case "End":
                        if (f.getLastKey) {
                            if (null === r.focusedKey && e.shiftKey) return;
                            e.preventDefault();
                            let t = f.getLastKey(r.focusedKey, (0, i.B)(e));
                            r.setFocusedKey(t),
                                null != t &&
                                    ((0, i.B)(e) && e.shiftKey && "multiple" === r.selectionMode
                                        ? r.extendSelection(t)
                                        : D && r.replaceSelection(t));
                        }
                        break;
                    case "PageDown":
                        if (f.getKeyPageBelow && null != r.focusedKey) {
                            let t = f.getKeyPageBelow(r.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "PageUp":
                        if (f.getKeyPageAbove && null != r.focusedKey) {
                            let t = f.getKeyPageAbove(r.focusedKey);
                            null != t && (e.preventDefault(), S(t));
                        }
                        break;
                    case "a":
                        (0, i.B)(e) &&
                            "multiple" === r.selectionMode &&
                            !0 !== w &&
                            (e.preventDefault(), r.selectAll());
                        break;
                    case "Escape":
                        "clearSelection" !== C ||
                            x ||
                            0 === r.selectedKeys.size ||
                            (e.stopPropagation(), e.preventDefault(), r.clearSelection());
                        break;
                    case "Tab":
                        if (!M)
                            if (e.shiftKey) E.current.focus();
                            else {
                                let e,
                                    t,
                                    r = (0, m.N$)(E.current, { tabbable: !0 });
                                do (t = r.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, o.e)(e);
                            }
                }
            },
            onFocus: (e) => {
                if (r.isFocused) {
                    e.currentTarget.contains(e.target) || r.setFocused(!1);
                    return;
                }
                if (e.currentTarget.contains(e.target)) {
                    if ((r.setFocused(!0), null == r.focusedKey)) {
                        var t, a, s, i;
                        let n = (e) => {
                                null != e && (r.setFocusedKey(e), D && !r.isSelected(e) && r.replaceSelection(e));
                            },
                            o = e.relatedTarget;
                        o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING
                            ? n(null != (s = r.lastSelectedKey) ? s : null == (t = f.getLastKey) ? void 0 : t.call(f))
                            : n(
                                  null != (i = r.firstSelectedKey)
                                      ? i
                                      : null == (a = f.getFirstKey)
                                        ? void 0
                                        : a.call(f),
                              );
                    } else
                        !R &&
                            k.current &&
                            ((k.current.scrollTop = P.current.top), (k.current.scrollLeft = P.current.left));
                    if (null != r.focusedKey && k.current) {
                        let e = (0, n.au)(E, r.focusedKey);
                        e instanceof HTMLElement &&
                            (e.contains(document.activeElement) || A || (0, o.e)(e),
                            "keyboard" === (0, v.ME)() && (0, u.o)(e, { containingElement: E.current }));
                    }
                }
            },
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || r.setFocused(!1);
            },
            onMouseDown(e) {
                k.current === e.target && e.preventDefault();
            },
        },
        { typeSelectProps: z } = (function (e) {
            let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e,
                s = (0, a.useRef)({ search: "", timeout: void 0 }).current;
            return {
                typeSelectProps: {
                    onKeyDownCapture: t.getKeyForSearch
                        ? (e) => {
                              var a;
                              let i = 1 !== (a = e.key).length && /^[A-Z]/i.test(a) ? "" : a;
                              if (
                                  i &&
                                  !e.ctrlKey &&
                                  !e.metaKey &&
                                  e.currentTarget.contains(e.target) &&
                                  (0 !== s.search.length || " " !== i)
                              ) {
                                  if (
                                      (" " === i &&
                                          s.search.trim().length > 0 &&
                                          (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                                      (s.search += i),
                                      null != t.getKeyForSearch)
                                  ) {
                                      let e = t.getKeyForSearch(s.search, r.focusedKey);
                                      null == e && (e = t.getKeyForSearch(s.search)),
                                          null != e && (r.setFocusedKey(e), n && n(e));
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
        })({ keyboardDelegate: f, selectionManager: r });
    O || (G = (0, h.v)(z, G)), A || (t = null == r.focusedKey ? 0 : -1);
    let W = (0, n.j5)(r.collection);
    return { collectionProps: (0, h.v)(G, { tabIndex: t, "data-collection": W }) };
}
