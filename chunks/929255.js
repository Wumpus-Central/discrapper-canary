r.d(t, { Z: () => x }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(481060),
    s = r(702486),
    c = r(626135),
    u = r(381585),
    d = r(870289),
    p = r(501431),
    f = r(888302),
    g = r(193227),
    b = r(426171),
    h = r(845796),
    m = r(841875),
    _ = r(312030),
    v = r(795343),
    C = r(763891),
    O = r(215023),
    E = r(981631),
    S = r(388032),
    y = r(95368);
function x(e) {
    let { isFullScreen: t, tab: r, sortedCategories: a, initialCategoryId: c, onUnmount: u } = e;
    (0, p.A)();
    let f = (0, d.FF)("CollectiblesBrowse"),
        g = l.useRef(null),
        { handleScroll: h } = (0, s.z)(g, r),
        { setCategoryRef: _, handleScrollToCategory: v } = (0, b.xV)(g.current),
        [C, O] = l.useState(f),
        [E, S] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != c && v(c);
        }, [c, v]),
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
            f || O(!1);
        }, [f, O]),
        (0, n.jsx)("div", {
            className: i()(y.pageWrapper, { [y.pageWrapperFilter]: f }),
            children: (0, n.jsxs)("main", {
                className: i()(y.page, { [y.pageFilter]: f }),
                children: [
                    (0, n.jsx)(o.yWw, {
                        className: y.shopScroll,
                        ref: g,
                        onScroll: h,
                        children: (0, n.jsx)(j, {
                            isFullScreen: t,
                            isSmallScreen: E,
                            filterBarOpen: C,
                            setFilterBarOpen: O,
                            tab: r,
                            scrollerRef: g,
                            sortedCategories: a,
                            setCategoryRef: _,
                        }),
                    }),
                    C && !E && (0, n.jsx)("div", { className: y.divider }),
                    C &&
                        !E &&
                        (0, n.jsx)(o.Ttm, {
                            className: y.filterBar,
                            children: (0, n.jsx)(m.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let j = (e) => {
    let {
            isFullScreen: t,
            isSmallScreen: r,
            filterBarOpen: a,
            setFilterBarOpen: s,
            tab: b,
            scrollerRef: x,
            sortedCategories: j,
            setCategoryRef: T,
        } = e,
        P = (0, d.FF)("CollectiblesBrowse"),
        L = l.useRef(null),
        k = (0, p.S)((e) => e.hasDefaultFilters()),
        I = (0, u.sp)(),
        { handlePageChange: N, currentPage: A } = (0, _.h)({
            scrollerRef: x,
            sortedCategories: j,
        }),
        w = l.useCallback(
            (e) => {
                c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: null == I ? void 0 : I.pageCategory,
                    page_index: e,
                    page_size: null == I ? void 0 : I.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    N(e);
            },
            [I, N],
        ),
        B = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!r || !a) return;
            let e = (e) => {
                let t = e.target;
                null === L.current ||
                    null === B.current ||
                    L.current.contains(t) ||
                    B.current.contains(t) ||
                    (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: null == I ? void 0 : I.pageCategory,
                        page_index: null == I ? void 0 : I.pageIndex,
                        page_size: null == I ? void 0 : I.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [r, a, s, I]),
        (0, n.jsx)("div", {
            className: y.inventoryWrapper,
            children: (0, n.jsxs)("div", {
                className: i()(y.inventory, {
                    [y.inventoryFilter]: P,
                    [y.pageFullscreen]: t,
                }),
                children: [
                    P &&
                        (0, n.jsxs)("div", {
                            className: y.controls,
                            children: [
                                (0, n.jsx)("div", {
                                    className: y.controlsLeftSide,
                                    children: (0, n.jsx)(f.Z, {}),
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(y.controlsRightSide, { [y.controlsRightSideResponsive]: r }),
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: y.sortBy,
                                            children: [
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: S.intl.string(S.t.uaX709),
                                                }),
                                                (0, n.jsx)(h.Z, {}),
                                            ],
                                        }),
                                        (0, n.jsx)("div", {
                                            ref: B,
                                            children: (0, n.jsx)(o.zxk, {
                                                onClick: () => {
                                                    let e = !a;
                                                    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                        page_section: null == I ? void 0 : I.pageSection,
                                                        page_category: null == I ? void 0 : I.pageCategory,
                                                        page_index: null == I ? void 0 : I.pageIndex,
                                                        page_size: null == I ? void 0 : I.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        s(e);
                                                },
                                                variant: "secondary",
                                                text: S.intl.string(a ? S.t.fYtm6e : S.t.TeTYEx),
                                                icon: o.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                a &&
                                    r &&
                                    (0, n.jsx)("div", {
                                        className: y.filterOverlay,
                                        ref: L,
                                        children: (0, n.jsx)(o.Den, {
                                            className: y.filterOverlayContent,
                                            children: (0, n.jsx)(m.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    P && !k
                        ? (0, n.jsx)(
                              v.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: x,
                                  tab: b,
                              },
                              b,
                          )
                        : (0, O.RE)(b)
                          ? (0, n.jsx)(
                                C.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: x,
                                    tab: b,
                                },
                                b,
                            )
                          : (0, n.jsx)(u.k0, {
                                newValue: { pageIndex: A },
                                children: (0, n.jsx)(g.Z, {
                                    isFullScreen: t,
                                    sortedCategories: j,
                                    setCategoryRef: T,
                                    currentPage: A,
                                    handlePageChange: w,
                                }),
                            }),
                ],
            }),
        })
    );
};
