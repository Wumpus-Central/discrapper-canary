n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(870289),
    f = n(501431),
    g = n(888302),
    p = n(193227),
    m = n(426171),
    h = n(845796),
    C = n(841875),
    _ = n(312030),
    b = n(795343),
    v = n(763891),
    x = n(215023),
    E = n(981631),
    O = n(388032),
    S = n(452785);
function y(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, showFilterInitially: c = !0, onUnmount: u } = e;
    (0, f.A)();
    let g = (0, d.FF)("CollectiblesBrowse"),
        p = l.useRef(null),
        { handleScroll: h } = (0, s.z)(p, t),
        { setCategoryRef: _, handleScrollToCategory: b } = (0, m.xV)(p.current),
        [v, x] = l.useState(g && c),
        [E, O] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != i && b(i);
        }, [i, b]),
        l.useEffect(
            () => () => {
                null != u && u();
            },
            [],
        ),
        l.useEffect(() => {
            let e = () => {
                O(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        l.useEffect(() => {
            g || x(!1);
        }, [g, x]),
        (0, r.jsx)("div", {
            className: a()(S.pageWrapper, { [S.pageWrapperFilter]: g }),
            children: (0, r.jsxs)("main", {
                className: a()(S.page, { [S.pageFilter]: g }),
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: S.shopScroll,
                        ref: p,
                        onScroll: h,
                        children: (0, r.jsx)(j, {
                            isSmallScreen: E,
                            filterBarOpen: v,
                            setFilterBarOpen: x,
                            tab: t,
                            scrollerRef: p,
                            sortedCategories: n,
                            setCategoryRef: _,
                            initialCategoryId: i,
                        }),
                    }),
                    v && !E && (0, r.jsx)("div", { className: S.divider }),
                    v &&
                        !E &&
                        (0, r.jsx)(o.Ttm, {
                            className: S.filterBar,
                            children: (0, r.jsx)(C.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let j = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: i,
            tab: s,
            scrollerRef: m,
            sortedCategories: y,
            setCategoryRef: j,
            initialCategoryId: k,
        } = e,
        I = (0, d.FF)("CollectiblesBrowse"),
        T = l.useRef(null),
        L = (0, f.S)((e) => e.hasDefaultFilters()),
        P = (0, u.sp)(),
        { handlePageChange: B, currentPage: N } = (0, _.h)(m),
        A = l.useCallback(
            (e) => {
                c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                    page_section: null == P ? void 0 : P.pageSection,
                    page_category: null == P ? void 0 : P.pageCategory,
                    page_index: e,
                    page_size: null == P ? void 0 : P.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    B(e);
            },
            [P, B],
        ),
        R = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === T.current ||
                    null === R.current ||
                    T.current.contains(t) ||
                    R.current.contains(t) ||
                    (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                        page_section: null == P ? void 0 : P.pageSection,
                        page_category: null == P ? void 0 : P.pageCategory,
                        page_index: null == P ? void 0 : P.pageIndex,
                        page_size: null == P ? void 0 : P.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    i(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, n, i, P]),
        (0, r.jsx)("div", {
            className: S.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: a()(S.inventory, { [S.inventoryFilter]: I }),
                children: [
                    I &&
                        (0, r.jsxs)("div", {
                            className: S.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: S.controlsLeftSide,
                                    children: (0, r.jsx)(g.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: a()(S.controlsRightSide, { [S.controlsRightSideResponsive]: t }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: S.sortBy,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: O.intl.string(O.t.uaX705),
                                                }),
                                                (0, r.jsx)(h.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: R,
                                            children: (0, r.jsx)(o.Button, {
                                                onClick: () => {
                                                    let e = !n;
                                                    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                                                        page_section: null == P ? void 0 : P.pageSection,
                                                        page_category: null == P ? void 0 : P.pageCategory,
                                                        page_index: null == P ? void 0 : P.pageIndex,
                                                        page_size: null == P ? void 0 : P.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        i(e);
                                                },
                                                variant: "secondary",
                                                text: O.intl.string(n ? O.t.fYtm6f : O.t["TeTYE+"]),
                                                icon: o.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                n &&
                                    t &&
                                    (0, r.jsx)("div", {
                                        className: S.filterOverlay,
                                        ref: T,
                                        children: (0, r.jsx)(o.Den, {
                                            className: S.filterOverlayContent,
                                            children: (0, r.jsx)(C.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    I && !L
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  scrollerRef: m,
                                  tab: s,
                              },
                              s,
                          )
                        : (0, x.RE)(s)
                          ? (0, r.jsx)(
                                v.Z,
                                {
                                    scrollerRef: m,
                                    tab: s,
                                },
                                s,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: N },
                                children: (0, r.jsx)(p.Z, {
                                    sortedCategories: y,
                                    setCategoryRef: j,
                                    currentPage: N,
                                    handlePageChange: A,
                                    initialCategoryId: k,
                                }),
                            }),
                ],
            }),
        })
    );
};
