n.d(t, { A: () => _, J: () => g });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(962125),
    c = n(151271),
    u = n(887129),
    d = n(602034),
    m = n(17928),
    f = n(775602);
function E(e) {
    let t = document.activeElement?.getAttribute(d.eM);
    return null == t ? null : e((0, d.HP)(t));
}
function I(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
        s = arguments.length > 4 ? arguments[4] : void 0,
        l = s ?? ++n.current;
    if (l !== n.current) return;
    let r = document.querySelector((0, d.Mz)((0, d.t$)(e, t)));
    null != r ? r.focus() : i > 0 && requestAnimationFrame(() => I(e, t, n, i - 1, l));
}
function g(e) {
    return {
        itemIdForIndex: (t) => `${e}${t}`,
        parseIndex: (t) => {
            if (null == t || !t.startsWith(e)) return null;
            let n = t.slice(e.length);
            if ("" === n) return null;
            let i = Number(n);
            return Number.isInteger(i) ? i : null;
        },
    };
}
var h = n(652215),
    A = n(14753);
let _ = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: l,
            store: d,
            children: _,
            className: p,
            listPadding: N,
            rowCount: C,
            getScrollOffsetForIndex: O,
            categoryHeight: S,
            onScroll: x,
            renderCategoryListItem: T,
            rowCountBySection: y,
            renderSection: j,
            navId: R,
            itemIdPrefix: b,
        } = e,
        L = d.useStore((e) => e.activeCategoryIndex),
        v = null != R && null != b,
        { itemIdForIndex: M, parseIndex: D } = s.useMemo(() => g(b ?? "expression-category-"), [b]),
        P = (function (e) {
            let {
                    navId: t,
                    categoryListRef: n,
                    itemIdForIndex: i,
                    parseIndex: l,
                    rowCount: r,
                    activeIndex: a,
                    getScrollOffsetForIndex: o,
                    enabled: c = !0,
                } = e,
                d = (0, m.bG)([f.Ay], () => f.Ay.keyboardModeEnabled),
                g = s.useRef(null),
                h = s.useRef(0),
                A = c && d;
            s.useEffect(
                () => () => {
                    h.current += 1;
                },
                [],
            );
            let _ = s.useCallback(
                    (e, t) => {
                        let i = o?.(e, t) ?? 0;
                        n.current?.scrollRowIntoView(e, { animate: !1, offset: i });
                    },
                    [n, o],
                ),
                p = s.useCallback(
                    (e, n) => {
                        let s = l(n);
                        if (null != s) {
                            let e = E(l) ?? g.current;
                            (_(s, null == e || s >= e), (g.current = s));
                        }
                        let r = document.querySelector(e);
                        if (null != r) {
                            ((h.current += 1), r.focus());
                            return;
                        }
                        null != s && I(t, i(s), h);
                    },
                    [i, t, l, _],
                ),
                N = s.useCallback(
                    (e, n) => {
                        (_(e, n), (g.current = e), I(t, i(e), h));
                    },
                    [i, t, _],
                ),
                C = s.useCallback(
                    () =>
                        new Promise((e) => {
                            (n.current?.scrollTo(0),
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => e());
                                }));
                        }),
                    [n],
                ),
                O = s.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = n.current?.getListDimensions().totalHeight ?? Number.MAX_SAFE_INTEGER;
                            (n.current?.scrollTo(t),
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => e());
                                }));
                        }),
                    [n],
                ),
                S = s.useCallback(() => {
                    let e = E(l) ?? g.current;
                    null == e || e >= r - 1 || N(e + 1, !0);
                }, [N, l, r]),
                x = s.useCallback(() => {
                    let e = E(l) ?? g.current;
                    null == e || e <= 0 || N(e - 1, !1);
                }, [N, l]),
                T = (0, u.Ay)({
                    id: t,
                    isEnabled: A,
                    setFocus: p,
                    scrollToStart: C,
                    scrollToEnd: O,
                    onNavigateNextAtEnd: S,
                    onNavigatePreviousAtStart: x,
                }),
                y = T.setFocus;
            return (
                s.useEffect(() => {
                    if (!c || a < 0 || a >= r) return;
                    let e = n.current?.getScrollerNode();
                    if (null != e && e.contains(document.activeElement)) return;
                    let t = 0,
                        s = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((g.current = a), y(i(a)));
                            });
                        });
                    return () => {
                        (cancelAnimationFrame(s), cancelAnimationFrame(t));
                    };
                }, [a, n, c, i, y, r]),
                T
            );
        })({
            navId: R ?? "expression-picker-categories-disabled",
            categoryListRef: t,
            itemIdForIndex: M,
            parseIndex: D,
            rowCount: C,
            activeIndex: L,
            getScrollOffsetForIndex: O,
            enabled: v,
        });
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            l = s.useRef(h.An1),
            r = s.useRef(t);
        s.useEffect(() => {
            null != t &&
                t !== r.current &&
                (l.current !== h.An1 && window.cancelAnimationFrame(l.current),
                (l.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (r.current ?? -1),
                        s = null != i ? i(t, e) : 0;
                    (n.current.scrollRowIntoView(t, { animate: !0, offset: s }), (l.current = h.An1), (r.current = t));
                })));
        }, [t, n, i]);
    })({ activeIndex: L, categoryListRef: t, getScrollOffsetForIndex: O });
    let w = s.useCallback(
            (e) => {
                let { searchQuery: t } = c.RQ.getState();
                (d.setActiveCategoryIndex(e), "" !== t ? (0, c.Ri)("") : n.current?.scrollToSectionTop(e));
            },
            [n, d],
        ),
        U = s.useCallback((e) => T(l[e], e, () => w(e), L === e), [L, l, w, T]),
        G = s.useMemo(() => ("function" == typeof S ? (e) => S(l[e], e) : S), [l, S]),
        k = (0, i.jsx)(o.A, {
            listPadding: N,
            onScroll: x,
            ref: t,
            renderRow: U,
            rowCount: C,
            rowHeight: G,
            hideScrollbar: !0,
            rowCountBySection: y,
            renderSection: j,
            role: v ? "none presentation" : void 0,
        }),
        F = (0, i.jsxs)("div", {
            className: r()(A.i, p),
            children: [
                v
                    ? (0, i.jsx)(a.PR, {
                          children: (e) => {
                              let { ref: t, ...n } = e;
                              return (0, i.jsx)("div", { className: A.e, ...n, ref: t, children: k });
                          },
                      })
                    : k,
                _?.(w),
            ],
        });
    return v ? (0, i.jsx)(a.hD, { navigator: P, children: F }) : F;
};
