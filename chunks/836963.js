"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(151271),
    s = n(887695),
    o = n(770171),
    l = n(101024),
    u = n(76269);
function c(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: c,
            store: d,
            onSelectItem: _,
            onSearchExpressions: f,
            onScroll: h,
            hasSearchResults: p,
            defaultSearchPlaceholder: g,
            emptySearchPlaceholder: E,
            renderEmptyState: A,
            renderRow: I,
            renderSection: T,
            renderSectionHeader: y,
            renderSectionFooter: S,
            renderInspector: v,
            renderEmptySearchState: C,
            renderCategoryList: b,
            renderHeaderAccessories: N,
            rowHeight: R,
            sectionHeaderHeight: O,
            sectionFooterHeight: D,
            itemNodeWidth: L,
            listPaddingRight: w,
            itemNodeMargin: x,
            listPadding: P,
            gridNavigatorId: M,
            gridNotice: k,
            renderHeader: U,
            renderUpsell: G,
        } = e,
        F = i.useRef(null),
        V = i.useRef(null),
        B = i.useRef(null),
        j = 0 === t.length,
        H = (0, a.RQ)((e) => e.searchQuery),
        Y = d.useStore((e) => e.inspectedExpressionPosition),
        W = (0, s.oV)({ gridWrapperRef: F, containerWidth: c, showingEmptyState: j }),
        {
            expressionsGrid: K,
            rowCount: $,
            rowCountBySection: z,
            columnCounts: q,
            gutterWidth: X,
        } = (0, s.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: W,
            listPaddingRight: w,
            itemNodeWidth: L,
            itemNodeMargin: x,
        }),
        {
            getItemProps: Z,
            getRowProps: Q,
            gridContainerProps: J,
            handleGridContainerKeyDown: ee,
            isUsingKeyboardNavigation: et,
        } = (0, s.JZ)({
            columnCounts: q,
            expressionsListRef: V,
            expressionsGrid: K,
            onSelectItem: _,
            store: d,
            gridNavigatorId: M,
        }),
        en = i.useCallback(
            (e, t) =>
                I(
                    K[e],
                    Q(e),
                    {
                        isUsingKeyboardNavigation: et.current,
                        gutterWidth: X,
                        rowIndex: e,
                        totalRowCount: $,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => d.setInspectedExpressionPosition(t, e),
                ),
            [K, Z, Q, X, et, I, d, $],
        ),
        er = i.useCallback((e) => y?.(t[e], e), [t, y]),
        ei = i.useCallback((e) => S?.(t[e], e), [t, S]),
        ea = i.useCallback(() => v?.(K?.[Y.rowIndex]?.[Y.columnIndex]), [K, Y.columnIndex, Y.rowIndex, v]);
    i.useEffect(() => {
        f(H);
    }, [f, H]),
        i.useEffect(() => {
            d.setBottomPosition(F.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => d.resetStoreState, [d.resetStoreState]),
        i.useLayoutEffect(() => {
            B.current?.focus();
        }, []);
    let es = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.A, {
                ref: B,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: ee,
                expressionsListRef: V,
                gridNavigatorId: M,
                defaultSearchPlaceholder: g,
                emptySearchPlaceholder: E,
            }),
            N?.(),
        ],
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != U ? U(es) : (0, r.jsxs)("div", { className: u.wx, children: [" ", es, " "] }),
            j && null != A
                ? A(u.p$)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          b(V),
                          null != k && (0, r.jsx)("div", { className: u.Eb, children: k }),
                          (0, r.jsx)("div", {
                              ref: F,
                              className: u.AD,
                              id: M,
                              ...J,
                              children:
                                  null != W
                                      ? (0, r.jsx)(o.A, {
                                            categories: t,
                                            ref: V,
                                            store: d,
                                            hasSearchResults: p,
                                            listPadding: P,
                                            renderRow: en,
                                            renderSection: T,
                                            renderSectionHeader: null != y ? er : void 0,
                                            renderSectionFooter: null != S ? ei : void 0,
                                            renderInspector: null != v ? ea : void 0,
                                            renderEmptySearchState: C,
                                            rowCount: $,
                                            rowCountBySection: z,
                                            rowHeight: R,
                                            sectionHeaderHeight: O,
                                            sectionFooterHeight: D,
                                            renderUpsell: G,
                                            onScroll: h,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
