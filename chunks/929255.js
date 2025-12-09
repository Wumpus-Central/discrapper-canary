n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(870289),
    g = n(501431),
    f = n(888302),
    p = n(193227),
    m = n(426171),
    C = n(845796),
    h = n(841875),
    _ = n(312030),
    b = n(795343),
    E = n(763891),
    v = n(215023),
    S = n(981631),
    x = n(388032),
    O = n(452785);
function y(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, showFilterInitially: c = !0, onUnmount: u } = e;
    (0, g.A)();
    let f = (0, d.FF)("CollectiblesBrowse"),
        p = l.useRef(null),
        { handleScroll: C } = (0, a.z)(p, t),
        { setCategoryRef: _, handleScrollToCategory: b } = (0, m.xV)(p.current),
        [E, v] = l.useState(f && c),
        [S, x] = l.useState(!1);
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
                x(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        l.useEffect(() => {
            f || v(!1);
        }, [f, v]),
        (0, r.jsx)("div", {
            className: s()(O.pageWrapper, { [O.pageWrapperFilter]: f }),
            children: (0, r.jsxs)("main", {
                className: s()(O.page, { [O.pageFilter]: f }),
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: O.shopScroll,
                        ref: p,
                        onScroll: C,
                        children: (0, r.jsx)(k, {
                            isSmallScreen: S,
                            filterBarOpen: E,
                            setFilterBarOpen: v,
                            tab: t,
                            scrollerRef: p,
                            sortedCategories: n,
                            setCategoryRef: _,
                            initialCategoryId: i,
                        }),
                    }),
                    E && !S && (0, r.jsx)("div", { className: O.divider }),
                    E &&
                        !S &&
                        (0, r.jsx)(o.Ttm, {
                            className: O.filterBar,
                            children: (0, r.jsx)(h.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let k = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: i,
            tab: a,
            scrollerRef: m,
            sortedCategories: y,
            setCategoryRef: k,
            initialCategoryId: T,
        } = e,
        j = (0, d.FF)("CollectiblesBrowse"),
        I = l.useRef(null),
        L = (0, g.S)((e) => e.hasDefaultFilters()),
        B = (0, u.sp)(),
        { handlePageChange: N, currentPage: A } = (0, _.h)(m),
        P = l.useCallback(
            (e) => {
                c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                    page_section: null == B ? void 0 : B.pageSection,
                    page_category: null == B ? void 0 : B.pageCategory,
                    page_index: e,
                    page_size: null == B ? void 0 : B.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    N(e);
            },
            [B, N],
        ),
        R = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === I.current ||
                    null === R.current ||
                    I.current.contains(t) ||
                    R.current.contains(t) ||
                    (c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                        page_section: null == B ? void 0 : B.pageSection,
                        page_category: null == B ? void 0 : B.pageCategory,
                        page_index: null == B ? void 0 : B.pageIndex,
                        page_size: null == B ? void 0 : B.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    i(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, n, i, B]),
        (0, r.jsx)("div", {
            className: O.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: s()(O.inventory, { [O.inventoryFilter]: j }),
                children: [
                    j &&
                        (0, r.jsxs)("div", {
                            className: O.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: O.controlsLeftSide,
                                    children: (0, r.jsx)(f.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: s()(O.controlsRightSide, { [O.controlsRightSideResponsive]: t }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: O.sortBy,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: x.intl.string(x.t.uaX705),
                                                }),
                                                (0, r.jsx)(C.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: R,
                                            children: (0, r.jsx)(o.Button, {
                                                onClick: () => {
                                                    let e = !n;
                                                    c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                                        page_section: null == B ? void 0 : B.pageSection,
                                                        page_category: null == B ? void 0 : B.pageCategory,
                                                        page_index: null == B ? void 0 : B.pageIndex,
                                                        page_size: null == B ? void 0 : B.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        i(e);
                                                },
                                                variant: "secondary",
                                                text: x.intl.string(n ? x.t.fYtm6f : x.t["TeTYE+"]),
                                                icon: o.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                n &&
                                    t &&
                                    (0, r.jsx)("div", {
                                        className: O.filterOverlay,
                                        ref: I,
                                        children: (0, r.jsx)(o.Den, {
                                            className: O.filterOverlayContent,
                                            children: (0, r.jsx)(h.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    j && !L
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  scrollerRef: m,
                                  tab: a,
                              },
                              a,
                          )
                        : (0, v.RE)(a)
                          ? (0, r.jsx)(
                                E.Z,
                                {
                                    scrollerRef: m,
                                    tab: a,
                                },
                                a,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: A },
                                children: (0, r.jsx)(p.Z, {
                                    sortedCategories: y,
                                    setCategoryRef: k,
                                    currentPage: A,
                                    handlePageChange: P,
                                    initialCategoryId: T,
                                }),
                            }),
                ],
            }),
        })
    );
};
