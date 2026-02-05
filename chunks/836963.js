"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(151271),
    s = n(887695),
    o = n(770171),
    l = n(101024),
    u = n(990675);
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
            defaultSearchPlaceholder: m,
            emptySearchPlaceholder: g,
            renderEmptyState: E,
            renderRow: A,
            renderSection: I,
            renderSectionHeader: T,
            renderSectionFooter: y,
            renderInspector: S,
            renderEmptySearchState: v,
            renderCategoryList: C,
            renderHeaderAccessories: b,
            rowHeight: N,
            sectionHeaderHeight: R,
            sectionFooterHeight: O,
            itemNodeWidth: D,
            listPaddingRight: L,
            itemNodeMargin: w,
            listPadding: x,
            gridNavigatorId: P,
            gridNotice: M,
            renderHeader: k,
            renderUpsell: U,
        } = e,
        G = i.useRef(null),
        V = i.useRef(null),
        F = i.useRef(null),
        B = 0 === t.length,
        j = (0, a.RQ)((e) => e.searchQuery),
        H = d.useStore((e) => e.inspectedExpressionPosition),
        Y = (0, s.oV)({ gridWrapperRef: G, containerWidth: c, showingEmptyState: B }),
        {
            expressionsGrid: W,
            rowCount: K,
            rowCountBySection: z,
            columnCounts: $,
            gutterWidth: q,
        } = (0, s.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: Y,
            listPaddingRight: L,
            itemNodeWidth: D,
            itemNodeMargin: w,
        }),
        {
            getItemProps: Z,
            getRowProps: Q,
            gridContainerProps: X,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, s.JZ)({
            columnCounts: $,
            expressionsListRef: V,
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
                    (t) => Z(e, t),
                    (t) => d.setInspectedExpressionPosition(t, e),
                ),
            [W, Z, Q, q, ee, A, d, K],
        ),
        en = i.useCallback((e) => T?.(t[e], e), [t, T]),
        er = i.useCallback((e) => y?.(t[e], e), [t, y]),
        ei = i.useCallback(() => S?.(W?.[H.rowIndex]?.[H.columnIndex]), [W, H.columnIndex, H.rowIndex, S]);
    i.useEffect(() => {
        f(j);
    }, [f, j]),
        i.useEffect(() => {
            d.setBottomPosition(G.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => d.resetStoreState, [d.resetStoreState]),
        i.useLayoutEffect(() => {
            F.current?.focus();
        }, []);
    let ea = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.A, {
                ref: F,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: V,
                gridNavigatorId: P,
                defaultSearchPlaceholder: m,
                emptySearchPlaceholder: g,
            }),
            b?.(),
        ],
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != k ? k(ea) : (0, r.jsxs)("div", { className: u.wx, children: [" ", ea, " "] }),
            B && null != E
                ? E(u.p$)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          C(V),
                          null != M && (0, r.jsx)("div", { className: u.Eb, children: M }),
                          (0, r.jsx)("div", {
                              ref: G,
                              className: u.AD,
                              id: P,
                              ...X,
                              children:
                                  null != Y
                                      ? (0, r.jsx)(o.A, {
                                            categories: t,
                                            ref: V,
                                            store: d,
                                            hasSearchResults: h,
                                            listPadding: x,
                                            renderRow: et,
                                            renderSection: I,
                                            renderSectionHeader: null != T ? en : void 0,
                                            renderSectionFooter: null != y ? er : void 0,
                                            renderInspector: null != S ? ei : void 0,
                                            renderEmptySearchState: v,
                                            rowCount: K,
                                            rowCountBySection: z,
                                            rowHeight: N,
                                            sectionHeaderHeight: R,
                                            sectionFooterHeight: O,
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
