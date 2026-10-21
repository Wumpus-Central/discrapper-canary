n.d(t, { A: () => A, J: () => g });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
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
        r = s ?? ++n.current;
    if (r !== n.current) return;
    let l = document.querySelector((0, d.Mz)((0, d.t$)(e, t)));
    null != l ? l.focus() : i > 0 && requestAnimationFrame(() => I(e, t, n, i - 1, r));
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
    p = n(14753);
let A = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: r,
            store: d,
            children: A,
            emojiPacksHeader: _,
            className: N,
            listPadding: C,
            rowCount: x,
            getScrollOffsetForIndex: T,
            categoryHeight: y,
            onScroll: O,
            renderCategoryListItem: j,
            rowCountBySection: S,
            renderSection: b,
            navId: R,
            itemIdPrefix: v,
        } = e,
        L = d.useStore((e) => e.activeCategoryIndex),
        M = null != R && null != v,
        { itemIdForIndex: P, parseIndex: D } = s.useMemo(() => g(v ?? "expression-category-"), [v]),
        w = (function (e) {
            let {
                    navId: t,
                    categoryListRef: n,
                    itemIdForIndex: i,
                    parseIndex: r,
                    rowCount: l,
                    activeIndex: a,
                    getScrollOffsetForIndex: o,
                    enabled: c = !0,
                } = e,
                d = (0, m.bG)([f.Ay], () => f.Ay.keyboardModeEnabled),
                g = s.useRef(null),
                h = s.useRef(0),
                p = c && d;
            s.useEffect(
                () => () => {
                    h.current += 1;
                },
                [],
            );
            let A = s.useCallback(
                    (e, t) => {
                        let i = o?.(e, t) ?? 0;
                        n.current?.scrollRowIntoView(e, { animate: !1, offset: i });
                    },
                    [n, o],
                ),
                _ = s.useCallback(
                    (e, n) => {
                        let s = r(n);
                        if (null != s) {
                            let e = E(r) ?? g.current;
                            (A(s, null == e || s >= e), (g.current = s));
                        }
                        let l = document.querySelector(e);
                        if (null != l) {
                            ((h.current += 1), l.focus());
                            return;
                        }
                        null != s && I(t, i(s), h);
                    },
                    [i, t, r, A],
                ),
                N = s.useCallback(
                    (e, n) => {
                        (A(e, n), (g.current = e), I(t, i(e), h));
                    },
                    [i, t, A],
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
                x = s.useCallback(
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
                T = s.useCallback(() => {
                    let e = E(r) ?? g.current;
                    null == e || e >= l - 1 || N(e + 1, !0);
                }, [N, r, l]),
                y = s.useCallback(() => {
                    let e = E(r) ?? g.current;
                    null == e || e <= 0 || N(e - 1, !1);
                }, [N, r]),
                O = (0, u.Ay)({
                    id: t,
                    isEnabled: p,
                    setFocus: _,
                    scrollToStart: C,
                    scrollToEnd: x,
                    onNavigateNextAtEnd: T,
                    onNavigatePreviousAtStart: y,
                }),
                j = O.setFocus;
            return (
                s.useEffect(() => {
                    if (!c || a < 0 || a >= l) return;
                    let e = n.current?.getScrollerNode();
                    if (null != e && e.contains(document.activeElement)) return;
                    let t = 0,
                        s = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((g.current = a), j(i(a)));
                            });
                        });
                    return () => {
                        (cancelAnimationFrame(s), cancelAnimationFrame(t));
                    };
                }, [a, n, c, i, j, l]),
                O
            );
        })({
            navId: R ?? "expression-picker-categories-disabled",
            categoryListRef: t,
            itemIdForIndex: P,
            parseIndex: D,
            rowCount: x,
            activeIndex: L,
            getScrollOffsetForIndex: T,
            enabled: M,
        });
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            r = s.useRef(h.An1),
            l = s.useRef(t);
        s.useEffect(() => {
            null != t &&
                t !== l.current &&
                (r.current !== h.An1 && window.cancelAnimationFrame(r.current),
                (r.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (l.current ?? -1),
                        s = null != i ? i(t, e) : 0;
                    (n.current.scrollRowIntoView(t, { animate: !0, offset: s }), (r.current = h.An1), (l.current = t));
                })));
        }, [t, n, i]);
    })({ activeIndex: L, categoryListRef: t, getScrollOffsetForIndex: T });
    let k = s.useCallback(
            (e) => {
                let { searchQuery: t } = c.RQ.getState();
                (d.setActiveCategoryIndex(e), "" !== t ? (0, c.Ri)("") : n.current?.scrollToSectionTop(e));
            },
            [n, d],
        ),
        U = s.useCallback((e) => j(r[e], e, () => k(e), L === e), [L, r, k, j]),
        G = s.useMemo(() => ("function" == typeof y ? (e) => y(r[e], e) : y), [r, y]),
        F = (0, i.jsx)(o.A, {
            listPadding: C,
            onScroll: O,
            ref: t,
            renderRow: U,
            rowCount: x,
            rowHeight: G,
            hideScrollbar: !0,
            rowCountBySection: S,
            renderSection: b,
            role: M ? "none presentation" : void 0,
        }),
        J = (0, i.jsxs)("div", {
            className: l()(p.iE, { [p.bx]: null != _ }, N),
            children: [
                _,
                M
                    ? (0, i.jsx)(a.PR, {
                          children: (e) => {
                              let { ref: t, ...n } = e;
                              return (0, i.jsx)("div", { className: p.en, ...n, ref: t, children: F });
                          },
                      })
                    : F,
                A?.(k),
            ],
        });
    return M ? (0, i.jsx)(a.hD, { navigator: w, children: J }) : J;
};
