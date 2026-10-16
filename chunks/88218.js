n.d(t, { A: () => A, J: () => h });
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
function h(e) {
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
var g = n(652215),
    p = n(14753);
let A = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: l,
            store: d,
            children: A,
            emojiPacksHeader: _,
            className: N,
            listPadding: C,
            rowCount: S,
            getScrollOffsetForIndex: x,
            categoryHeight: O,
            onScroll: T,
            renderCategoryListItem: j,
            rowCountBySection: y,
            renderSection: b,
            navId: R,
            itemIdPrefix: v,
        } = e,
        L = d.useStore((e) => e.activeCategoryIndex),
        M = null != R && null != v,
        { itemIdForIndex: P, parseIndex: D } = s.useMemo(() => h(v ?? "expression-category-"), [v]),
        w = (function (e) {
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
                h = s.useRef(null),
                g = s.useRef(0),
                p = c && d;
            s.useEffect(
                () => () => {
                    g.current += 1;
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
                        let s = l(n);
                        if (null != s) {
                            let e = E(l) ?? h.current;
                            (A(s, null == e || s >= e), (h.current = s));
                        }
                        let r = document.querySelector(e);
                        if (null != r) {
                            ((g.current += 1), r.focus());
                            return;
                        }
                        null != s && I(t, i(s), g);
                    },
                    [i, t, l, A],
                ),
                N = s.useCallback(
                    (e, n) => {
                        (A(e, n), (h.current = e), I(t, i(e), g));
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
                S = s.useCallback(
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
                x = s.useCallback(() => {
                    let e = E(l) ?? h.current;
                    null == e || e >= r - 1 || N(e + 1, !0);
                }, [N, l, r]),
                O = s.useCallback(() => {
                    let e = E(l) ?? h.current;
                    null == e || e <= 0 || N(e - 1, !1);
                }, [N, l]),
                T = (0, u.Ay)({
                    id: t,
                    isEnabled: p,
                    setFocus: _,
                    scrollToStart: C,
                    scrollToEnd: S,
                    onNavigateNextAtEnd: x,
                    onNavigatePreviousAtStart: O,
                }),
                j = T.setFocus;
            return (
                s.useEffect(() => {
                    if (!c || a < 0 || a >= r) return;
                    let e = n.current?.getScrollerNode();
                    if (null != e && e.contains(document.activeElement)) return;
                    let t = 0,
                        s = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((h.current = a), j(i(a)));
                            });
                        });
                    return () => {
                        (cancelAnimationFrame(s), cancelAnimationFrame(t));
                    };
                }, [a, n, c, i, j, r]),
                T
            );
        })({
            navId: R ?? "expression-picker-categories-disabled",
            categoryListRef: t,
            itemIdForIndex: P,
            parseIndex: D,
            rowCount: S,
            activeIndex: L,
            getScrollOffsetForIndex: x,
            enabled: M,
        });
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            l = s.useRef(g.An1),
            r = s.useRef(t);
        s.useEffect(() => {
            null != t &&
                t !== r.current &&
                (l.current !== g.An1 && window.cancelAnimationFrame(l.current),
                (l.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (r.current ?? -1),
                        s = null != i ? i(t, e) : 0;
                    (n.current.scrollRowIntoView(t, { animate: !0, offset: s }), (l.current = g.An1), (r.current = t));
                })));
        }, [t, n, i]);
    })({ activeIndex: L, categoryListRef: t, getScrollOffsetForIndex: x });
    let k = s.useCallback(
            (e) => {
                let { searchQuery: t } = c.RQ.getState();
                (d.setActiveCategoryIndex(e), "" !== t ? (0, c.Ri)("") : n.current?.scrollToSectionTop(e));
            },
            [n, d],
        ),
        U = s.useCallback((e) => j(l[e], e, () => k(e), L === e), [L, l, k, j]),
        G = s.useMemo(() => ("function" == typeof O ? (e) => O(l[e], e) : O), [l, O]),
        F = (0, i.jsx)(o.A, {
            listPadding: C,
            onScroll: T,
            ref: t,
            renderRow: U,
            rowCount: S,
            rowHeight: G,
            hideScrollbar: !0,
            rowCountBySection: y,
            renderSection: b,
            role: M ? "none presentation" : void 0,
        }),
        J = (0, i.jsxs)("div", {
            className: r()(p.iE, { [p.bx]: null != _ }, N),
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
