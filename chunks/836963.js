"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(151271),
    a = n(887695),
    o = n(770171),
    l = n(101024),
    u = n(456908);
function c(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: c,
            store: d,
            onSelectItem: _,
            onSearchExpressions: f,
            onScroll: p,
            hasSearchResults: h,
            defaultSearchPlaceholder: E,
            emptySearchPlaceholder: m,
            renderEmptyState: g,
            renderRow: A,
            renderSection: I,
            renderSectionHeader: T,
            renderSectionFooter: S,
            renderInspector: y,
            renderEmptySearchState: N,
            renderCategoryList: v,
            renderHeaderAccessories: C,
            rowHeight: O,
            sectionHeaderHeight: R,
            sectionFooterHeight: b,
            itemNodeWidth: D,
            listPaddingRight: L,
            itemNodeMargin: w,
            listPadding: M,
            gridNavigatorId: P,
            gridNotice: x,
            renderHeader: k,
            renderUpsell: U,
        } = e,
        G = i.useRef(null),
        F = i.useRef(null),
        V = i.useRef(null),
        B = 0 === t.length,
        H = (0, s.RQ)((e) => e.searchQuery),
        j = d.useStore((e) => e.inspectedExpressionPosition),
        Y = (0, a.oV)({ gridWrapperRef: G, containerWidth: c, showingEmptyState: B }),
        {
            expressionsGrid: W,
            rowCount: K,
            rowCountBySection: $,
            columnCounts: z,
            gutterWidth: q,
        } = (0, a.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: Y,
            listPaddingRight: L,
            itemNodeWidth: D,
            itemNodeMargin: w,
        }),
        {
            getItemProps: X,
            getRowProps: Q,
            gridContainerProps: Z,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, a.JZ)({
            columnCounts: z,
            expressionsListRef: F,
            expressionsGrid: W,
            onSelectItem: _,
            store: d,
            gridNavigatorId: P,
        }),
        et = i.useCallback(
            (e, t) =>
                A(
                    W[e],
                    Q(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: K,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => X(e, t),
                    (t) => d.setInspectedExpressionPosition(t, e),
                ),
            [W, X, Q, q, ee, A, d, K],
        ),
        en = i.useCallback((e) => T?.(t[e], e), [t, T]),
        er = i.useCallback((e) => S?.(t[e], e), [t, S]),
        ei = i.useCallback(() => y?.(W?.[j.rowIndex]?.[j.columnIndex]), [W, j.columnIndex, j.rowIndex, y]);
    i.useEffect(() => {
        f(H);
    }, [f, H]),
        i.useEffect(() => {
            d.setBottomPosition(G.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => d.resetStoreState, [d.resetStoreState]),
        i.useLayoutEffect(() => {
            V.current?.focus();
        }, []);
    let es = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.A, {
                ref: V,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: F,
                gridNavigatorId: P,
                defaultSearchPlaceholder: E,
                emptySearchPlaceholder: m,
            }),
            C?.(),
        ],
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != k ? k(es) : (0, r.jsxs)("div", { className: u.wx, children: [" ", es, " "] }),
            B && null != g
                ? g(u.p$)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          v(F),
                          null != x && (0, r.jsx)("div", { className: u.Eb, children: x }),
                          (0, r.jsx)("div", {
                              ref: G,
                              className: u.AD,
                              id: P,
                              ...Z,
                              children:
                                  null != Y
                                      ? (0, r.jsx)(o.A, {
                                            categories: t,
                                            ref: F,
                                            store: d,
                                            hasSearchResults: h,
                                            listPadding: M,
                                            renderRow: et,
                                            renderSection: I,
                                            renderSectionHeader: null != T ? en : void 0,
                                            renderSectionFooter: null != S ? er : void 0,
                                            renderInspector: null != y ? ei : void 0,
                                            renderEmptySearchState: N,
                                            rowCount: K,
                                            rowCountBySection: $,
                                            rowHeight: O,
                                            sectionHeaderHeight: R,
                                            sectionFooterHeight: b,
                                            renderUpsell: U,
                                            onScroll: p,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
