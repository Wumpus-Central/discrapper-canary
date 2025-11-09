n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(702486),
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
    E = n(215023),
    x = n(981631),
    O = n(388032),
    S = n(25616);
function y(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, showFilterInitially: c = !0, onUnmount: u } = e;
    (0, p.A)();
    let g = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: C } = (0, o.z)(f, t),
        { setCategoryRef: _, handleScrollToCategory: b } = (0, h.xV)(f.current),
        [v, E] = l.useState(g && c),
        [x, O] = l.useState(!1);
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
            g || E(!1);
        }, [g, E]),
        (0, r.jsx)("div", {
            className: s()(S.pageWrapper, { [S.pageWrapperFilter]: g }),
            children: (0, r.jsxs)("main", {
                className: s()(S.page, { [S.pageFilter]: g }),
                children: [
                    (0, r.jsx)(a.yWw, {
                        className: S.shopScroll,
                        ref: f,
                        onScroll: C,
                        children: (0, r.jsx)(j, {
                            isSmallScreen: x,
                            filterBarOpen: v,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: f,
                            sortedCategories: n,
                            setCategoryRef: _,
                        }),
                    }),
                    v && !x && (0, r.jsx)("div", { className: S.divider }),
                    v &&
                        !x &&
                        (0, r.jsx)(a.Ttm, {
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
            tab: o,
            scrollerRef: h,
            sortedCategories: y,
            setCategoryRef: j,
        } = e,
        k = (0, d.FF)("CollectiblesBrowse"),
        I = l.useRef(null),
        T = (0, p.S)((e) => e.hasDefaultFilters()),
        L = (0, u.sp)(),
        { handlePageChange: B, currentPage: P } = (0, _.h)(h),
        A = l.useCallback(
            (e) => {
                c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        N = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === I.current ||
                    null === N.current ||
                    I.current.contains(t) ||
                    N.current.contains(t) ||
                    (c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                className: s()(S.inventory, { [S.inventoryFilter]: k }),
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
                                    className: s()(S.controlsRightSide, { [S.controlsRightSideResponsive]: t }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: S.sortBy,
                                            children: [
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-md/semibold",
                                                    children: O.intl.string(O.t.uaX705),
                                                }),
                                                (0, r.jsx)(C.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: N,
                                            children: (0, r.jsx)(a.Button, {
                                                onClick: () => {
                                                    let e = !n;
                                                    c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                                icon: a.gXV,
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
                                        children: (0, r.jsx)(a.Den, {
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
                                  tab: o,
                              },
                              o,
                          )
                        : (0, E.RE)(o)
                          ? (0, r.jsx)(
                                v.Z,
                                {
                                    scrollerRef: h,
                                    tab: o,
                                },
                                o,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: P },
                                children: (0, r.jsx)(f.Z, {
                                    sortedCategories: y,
                                    setCategoryRef: j,
                                    currentPage: P,
                                    handlePageChange: A,
                                }),
                            }),
                ],
            }),
        })
    );
};
