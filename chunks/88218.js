n.d(t, { A: () => E, J: () => g });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(962125),
    u = n(151271),
    c = n(887129),
    d = n(602034),
    h = n(17928),
    m = n(775602);
function f(e) {
    let t = document.activeElement?.getAttribute(d.eM);
    return null == t ? null : e((0, d.HP)(t));
}
function p(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
        i = arguments.length > 4 ? arguments[4] : void 0,
        s = i ?? ++n.current;
    if (s !== n.current) return;
    let r = document.querySelector((0, d.Mz)((0, d.t$)(e, t)));
    null != r ? r.focus() : l > 0 && requestAnimationFrame(() => p(e, t, n, l - 1, s));
}
function g(e) {
    return {
        itemIdForIndex: (t) => `${e}${t}`,
        parseIndex: (t) => {
            if (null == t || !t.startsWith(e)) return null;
            let n = t.slice(e.length);
            if ("" === n) return null;
            let l = Number(n);
            return Number.isInteger(l) ? l : null;
        },
    };
}
var x = n(652215),
    A = n(14753);
let E = function (e) {
    let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: s,
            store: d,
            children: E,
            className: C,
            listPadding: I,
            rowCount: y,
            getScrollOffsetForIndex: S,
            categoryHeight: N,
            onScroll: v,
            renderCategoryListItem: _,
            rowCountBySection: T,
            renderSection: j,
            navId: b,
            itemIdPrefix: R,
        } = e,
        O = d.useStore((e) => e.activeCategoryIndex),
        M = null != b && null != R,
        { itemIdForIndex: L, parseIndex: k } = i.useMemo(() => g(R ?? "expression-category-"), [R]),
        w = (function (e) {
            let {
                    navId: t,
                    categoryListRef: n,
                    itemIdForIndex: l,
                    parseIndex: s,
                    rowCount: r,
                    activeIndex: a,
                    getScrollOffsetForIndex: o,
                    enabled: u = !0,
                } = e,
                d = (0, h.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
                g = i.useRef(null),
                x = i.useRef(0),
                A = u && d;
            i.useEffect(
                () => () => {
                    x.current += 1;
                },
                [],
            );
            let E = i.useCallback(
                    (e, t) => {
                        let l = o?.(e, t) ?? 0;
                        n.current?.scrollRowIntoView(e, { animate: !1, offset: l });
                    },
                    [n, o],
                ),
                C = i.useCallback(
                    (e, n) => {
                        let i = s(n);
                        if (null != i) {
                            let e = f(s) ?? g.current;
                            E(i, null == e || i >= e), (g.current = i);
                        }
                        let r = document.querySelector(e);
                        if (null != r) {
                            (x.current += 1), r.focus();
                            return;
                        }
                        null != i && p(t, l(i), x);
                    },
                    [l, t, s, E],
                ),
                I = i.useCallback(
                    (e, n) => {
                        E(e, n), (g.current = e), p(t, l(e), x);
                    },
                    [l, t, E],
                ),
                y = i.useCallback(
                    () =>
                        new Promise((e) => {
                            n.current?.scrollTo(0),
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => e());
                                });
                        }),
                    [n],
                ),
                S = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let t = n.current?.getListDimensions().totalHeight ?? Number.MAX_SAFE_INTEGER;
                            n.current?.scrollTo(t),
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => e());
                                });
                        }),
                    [n],
                ),
                N = i.useCallback(() => {
                    let e = f(s) ?? g.current;
                    null == e || e >= r - 1 || I(e + 1, !0);
                }, [I, s, r]),
                v = i.useCallback(() => {
                    let e = f(s) ?? g.current;
                    null == e || e <= 0 || I(e - 1, !1);
                }, [I, s]),
                _ = (0, c.Ay)({
                    id: t,
                    isEnabled: A,
                    setFocus: C,
                    scrollToStart: y,
                    scrollToEnd: S,
                    onNavigateNextAtEnd: N,
                    onNavigatePreviousAtStart: v,
                }),
                T = _.setFocus;
            return (
                i.useEffect(() => {
                    if (!u || a < 0 || a >= r) return;
                    let e = n.current?.getScrollerNode();
                    if (null != e && e.contains(document.activeElement)) return;
                    let t = 0,
                        i = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                (g.current = a), T(l(a));
                            });
                        });
                    return () => {
                        cancelAnimationFrame(i), cancelAnimationFrame(t);
                    };
                }, [a, n, u, l, T, r]),
                _
            );
        })({
            navId: b ?? "expression-picker-categories-disabled",
            categoryListRef: t,
            itemIdForIndex: L,
            parseIndex: k,
            rowCount: y,
            activeIndex: O,
            getScrollOffsetForIndex: S,
            enabled: M,
        });
    !(function (e) {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: l } = e,
            s = i.useRef(x.An1),
            r = i.useRef(t);
        i.useEffect(() => {
            null != t &&
                t !== r.current &&
                (s.current !== x.An1 && window.cancelAnimationFrame(s.current),
                (s.current = window.requestAnimationFrame(() => {
                    if (null == n.current) return;
                    let e = t > (r.current ?? -1),
                        i = null != l ? l(t, e) : 0;
                    n.current.scrollRowIntoView(t, { animate: !0, offset: i }), (s.current = x.An1), (r.current = t);
                })));
        }, [t, n, l]);
    })({ activeIndex: O, categoryListRef: t, getScrollOffsetForIndex: S });
    let P = i.useCallback(
            (e) => {
                let { searchQuery: t } = u.RQ.getState();
                d.setActiveCategoryIndex(e), "" !== t ? (0, u.Ri)("") : n.current?.scrollToSectionTop(e);
            },
            [n, d],
        ),
        D = i.useCallback((e) => _(s[e], e, () => P(e), O === e), [O, s, P, _]),
        U = i.useMemo(() => ("function" == typeof N ? (e) => N(s[e], e) : N), [s, N]),
        G = (0, l.jsx)(o.A, {
            listPadding: I,
            onScroll: v,
            ref: t,
            renderRow: D,
            rowCount: y,
            rowHeight: U,
            hideScrollbar: !0,
            rowCountBySection: T,
            renderSection: j,
            role: M ? "none presentation" : void 0,
        }),
        V = (0, l.jsxs)("div", {
            className: r()(A.i, C),
            children: [
                M
                    ? (0, l.jsx)(a.PR, {
                          children: (e) => {
                              let { ref: t, ...n } = e;
                              return (0, l.jsx)("div", { className: A.e, ...n, ref: t, children: G });
                          },
                      })
                    : G,
                E?.(P),
            ],
        });
    return M ? (0, l.jsx)(a.hD, { navigator: w, children: V }) : V;
};
