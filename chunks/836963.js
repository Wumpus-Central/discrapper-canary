n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(151271),
    s = n(887695),
    o = n(770171),
    l = n(101024),
    c = n(990675);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: u,
            store: f,
            onSelectItem: _,
            onSearchExpressions: h,
            onScroll: m,
            hasSearchResults: g,
            defaultSearchPlaceholder: E,
            emptySearchPlaceholder: b,
            renderEmptyState: y,
            renderRow: O,
            renderSection: A,
            renderSectionHeader: v,
            renderSectionFooter: S,
            renderInspector: I,
            renderEmptySearchState: T,
            renderCategoryList: C,
            renderHeaderAccessories: N,
            rowHeight: R,
            sectionHeaderHeight: w,
            sectionFooterHeight: P,
            itemNodeWidth: D,
            listPaddingRight: x,
            itemNodeMargin: L,
            listPadding: j,
            gridNavigatorId: M,
            gridNotice: k,
            renderHeader: U,
            renderUpsell: G,
        } = e,
        V = i.useRef(null),
        F = i.useRef(null),
        B = i.useRef(null),
        H = 0 === t.length,
        Y = (0, a.RQ)((e) => e.searchQuery),
        W = f.useStore((e) => e.inspectedExpressionPosition),
        K = (0, s.oV)({
            gridWrapperRef: V,
            containerWidth: u,
            showingEmptyState: H,
        }),
        {
            expressionsGrid: z,
            rowCount: q,
            rowCountBySection: X,
            columnCounts: Z,
            gutterWidth: Q,
        } = (0, s.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: K,
            listPaddingRight: x,
            itemNodeWidth: D,
            itemNodeMargin: L,
        }),
        {
            getItemProps: $,
            getRowProps: J,
            gridContainerProps: ee,
            handleGridContainerKeyDown: et,
            isUsingKeyboardNavigation: en,
        } = (0, s.JZ)({
            columnCounts: Z,
            expressionsListRef: F,
            expressionsGrid: z,
            onSelectItem: _,
            store: f,
            gridNavigatorId: M,
        }),
        er = i.useCallback(
            (e, t) =>
                O(
                    z[e],
                    J(e),
                    {
                        isUsingKeyboardNavigation: en.current,
                        gutterWidth: Q,
                        rowIndex: e,
                        totalRowCount: q,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => $(e, t),
                    (t) => f.setInspectedExpressionPosition(t, e),
                ),
            [z, $, J, Q, en, O, f, q],
        ),
        ei = i.useCallback((e) => (null == v ? void 0 : v(t[e], e)), [t, v]),
        ea = i.useCallback((e) => (null == S ? void 0 : S(t[e], e)), [t, S]),
        es = i.useCallback(() => {
            var e;
            return null == I ? void 0 : I(null == z || null == (e = z[W.rowIndex]) ? void 0 : e[W.columnIndex]);
        }, [z, W.columnIndex, W.rowIndex, I]);
    i.useEffect(() => {
        h(Y);
    }, [h, Y]),
        i.useEffect(() => {
            var e, t;
            f.setBottomPosition(
                null != (e = null == (t = V.current) ? void 0 : t.getBoundingClientRect().bottom) ? e : null,
            );
        }),
        i.useEffect(() => f.resetStoreState, [f.resetStoreState]),
        i.useLayoutEffect(() => {
            var e;
            null == (e = B.current) || e.focus();
        }, []);
    let eo = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.A, {
                ref: B,
                store: f,
                hasSendableExpressions: !0,
                onKeyDown: et,
                expressionsListRef: F,
                gridNavigatorId: M,
                defaultSearchPlaceholder: E,
                emptySearchPlaceholder: b,
            }),
            null == N ? void 0 : N(),
        ],
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != U
                ? U(eo)
                : (0, r.jsxs)("div", {
                      className: c.wx,
                      children: [" ", eo, " "],
                  }),
            H && null != y
                ? y(c.p$)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          C(F),
                          null != k &&
                              (0, r.jsx)("div", {
                                  className: c.Eb,
                                  children: k,
                              }),
                          (0, r.jsx)(
                              "div",
                              p(
                                  d(
                                      {
                                          ref: V,
                                          className: c.AD,
                                          id: M,
                                      },
                                      ee,
                                  ),
                                  {
                                      children:
                                          null != K
                                              ? (0, r.jsx)(o.A, {
                                                    categories: t,
                                                    ref: F,
                                                    store: f,
                                                    hasSearchResults: g,
                                                    listPadding: j,
                                                    renderRow: er,
                                                    renderSection: A,
                                                    renderSectionHeader: null != v ? ei : void 0,
                                                    renderSectionFooter: null != S ? ea : void 0,
                                                    renderInspector: null != I ? es : void 0,
                                                    renderEmptySearchState: T,
                                                    rowCount: q,
                                                    rowCountBySection: X,
                                                    rowHeight: R,
                                                    sectionHeaderHeight: w,
                                                    sectionFooterHeight: P,
                                                    renderUpsell: G,
                                                    onScroll: m,
                                                })
                                              : null,
                                  },
                              ),
                          ),
                      ],
                  }),
        ],
    });
}
