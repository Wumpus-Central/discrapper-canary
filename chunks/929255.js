n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(870289),
    g = n(501431),
    p = n(888302),
    f = n(193227),
    h = n(426171),
    C = n(845796),
    m = n(841875),
    _ = n(312030),
    b = n(795343),
    v = n(763891),
    x = n(215023),
    E = n(981631),
    S = n(388032),
    O = n(452785);
function y(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, showFilterInitially: c = !0, onUnmount: u } = e;
    (0, g.A)();
    let p = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: C } = (0, s.z)(f, t),
        { setCategoryRef: _, handleScrollToCategory: b } = (0, h.xV)(f.current),
        [v, x] = l.useState(p && c),
        [E, S] = l.useState(!1);
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
                S(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        l.useEffect(() => {
            p || x(!1);
        }, [p, x]),
        (0, r.jsx)("div", {
            className: a()(O.pageWrapper, { [O.pageWrapperFilter]: p }),
            children: (0, r.jsxs)("main", {
                className: a()(O.page, { [O.pageFilter]: p }),
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: O.shopScroll,
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
                    v && !E && (0, r.jsx)("div", { className: O.divider }),
                    v &&
                        !E &&
                        (0, r.jsx)(o.Ttm, {
                            className: O.filterBar,
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
        T = (0, g.S)((e) => e.hasDefaultFilters()),
        L = (0, u.sp)(),
        { handlePageChange: B, currentPage: P } = (0, _.h)(h),
        A = l.useCallback(
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
            className: O.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: a()(O.inventory, { [O.inventoryFilter]: k }),
                children: [
                    k &&
                        (0, r.jsxs)("div", {
                            className: O.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: O.controlsLeftSide,
                                    children: (0, r.jsx)(p.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: a()(O.controlsRightSide, { [O.controlsRightSideResponsive]: t }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: O.sortBy,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: S.intl.string(S.t.uaX705),
                                                }),
                                                (0, r.jsx)(C.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: N,
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
                                                text: S.intl.string(n ? S.t.fYtm6f : S.t["TeTYE+"]),
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
                                    handlePageChange: A,
                                }),
                            }),
                ],
            }),
        })
    );
};
