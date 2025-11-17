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
    p = n(501431),
    g = n(888302),
    f = n(193227),
    h = n(426171),
    C = n(845796),
    m = n(841875),
    _ = n(312030),
    b = n(795343),
    v = n(763891),
    x = n(215023),
    E = n(981631),
    O = n(388032),
    S = n(452785);
function y(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, showFilterInitially: c = !0, onUnmount: u } = e;
    (0, p.A)();
    let g = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: C } = (0, s.z)(f, t),
        { setCategoryRef: _, handleScrollToCategory: b } = (0, h.xV)(f.current),
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
                        ref: f,
                        onScroll: C,
                        children: (0, r.jsx)(j, {
                            isSmallScreen: E,
                            filterBarOpen: v,
                            setFilterBarOpen: x,
                            tab: t,
                            scrollerRef: f,
                            sortedCategories: n,
                            setCategoryRef: _,
                        }),
                    }),
                    v && !E && (0, r.jsx)("div", { className: S.divider }),
                    v &&
                        !E &&
                        (0, r.jsx)(o.Ttm, {
                            className: S.filterBar,
                            children: (0, r.jsx)(m.Z, {}),
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
            scrollerRef: h,
            sortedCategories: y,
            setCategoryRef: j,
        } = e,
        k = (0, d.FF)("CollectiblesBrowse"),
        I = l.useRef(null),
        T = (0, p.S)((e) => e.hasDefaultFilters()),
        L = (0, u.sp)(),
        { handlePageChange: B, currentPage: P } = (0, _.h)(h),
        N = l.useCallback(
            (e) => {
                c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                    page_section: null == L ? void 0 : L.pageSection,
                    page_category: null == L ? void 0 : L.pageCategory,
                    page_index: e,
                    page_size: null == L ? void 0 : L.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    B(e);
            },
            [L, B],
        ),
        A = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === I.current ||
                    null === A.current ||
                    I.current.contains(t) ||
                    A.current.contains(t) ||
                    (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                        page_section: null == L ? void 0 : L.pageSection,
                        page_category: null == L ? void 0 : L.pageCategory,
                        page_index: null == L ? void 0 : L.pageIndex,
                        page_size: null == L ? void 0 : L.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    i(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, n, i, L]),
        (0, r.jsx)("div", {
            className: S.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: a()(S.inventory, { [S.inventoryFilter]: k }),
                children: [
                    k &&
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
                                                (0, r.jsx)(C.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: A,
                                            children: (0, r.jsx)(o.Button, {
                                                onClick: () => {
                                                    let e = !n;
                                                    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                                                        page_section: null == L ? void 0 : L.pageSection,
                                                        page_category: null == L ? void 0 : L.pageCategory,
                                                        page_index: null == L ? void 0 : L.pageIndex,
                                                        page_size: null == L ? void 0 : L.pageSize,
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
                                        ref: I,
                                        children: (0, r.jsx)(o.Den, {
                                            className: S.filterOverlayContent,
                                            children: (0, r.jsx)(m.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    k && !T
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  scrollerRef: h,
                                  tab: s,
                              },
                              s,
                          )
                        : (0, x.RE)(s)
                          ? (0, r.jsx)(
                                v.Z,
                                {
                                    scrollerRef: h,
                                    tab: s,
                                },
                                s,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: P },
                                children: (0, r.jsx)(f.Z, {
                                    sortedCategories: y,
                                    setCategoryRef: j,
                                    currentPage: P,
                                    handlePageChange: N,
                                }),
                            }),
                ],
            }),
        })
    );
};
