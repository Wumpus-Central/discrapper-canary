n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(481060),
    o = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(870289),
    g = n(501431),
    f = n(888302),
    p = n(193227),
    h = n(426171),
    m = n(845796),
    _ = n(841875),
    C = n(312030),
    b = n(795343),
    E = n(763891),
    S = n(215023),
    v = n(981631),
    O = n(388032),
    x = n(25616);
function y(e) {
    let { isFullScreen: t, tab: n, sortedCategories: a, initialCategoryId: c, onUnmount: u } = e;
    (0, g.A)();
    let f = (0, d.FF)("CollectiblesBrowse"),
        p = l.useRef(null),
        { handleScroll: m } = (0, o.z)(p, n),
        { setCategoryRef: C, handleScrollToCategory: b } = (0, h.xV)(p.current),
        [E, S] = l.useState(f),
        [v, O] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != c && b(c);
        }, [c, b]),
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
            f || S(!1);
        }, [f, S]),
        (0, r.jsx)("div", {
            className: s()(x.pageWrapper, { [x.pageWrapperFilter]: f }),
            children: (0, r.jsxs)("main", {
                className: s()(x.page, { [x.pageFilter]: f }),
                children: [
                    (0, r.jsx)(i.yWw, {
                        className: x.shopScroll,
                        ref: p,
                        onScroll: m,
                        children: (0, r.jsx)(T, {
                            isFullScreen: t,
                            isSmallScreen: v,
                            filterBarOpen: E,
                            setFilterBarOpen: S,
                            tab: n,
                            scrollerRef: p,
                            sortedCategories: a,
                            setCategoryRef: C,
                        }),
                    }),
                    E && !v && (0, r.jsx)("div", { className: x.divider }),
                    E &&
                        !v &&
                        (0, r.jsx)(i.Ttm, {
                            className: x.filterBar,
                            children: (0, r.jsx)(_.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let T = (e) => {
    let {
            isFullScreen: t,
            isSmallScreen: n,
            filterBarOpen: a,
            setFilterBarOpen: o,
            tab: h,
            scrollerRef: y,
            sortedCategories: T,
            setCategoryRef: L,
        } = e,
        j = (0, d.FF)("CollectiblesBrowse"),
        k = l.useRef(null),
        B = (0, g.S)((e) => e.hasDefaultFilters()),
        I = (0, u.sp)(),
        { handlePageChange: N, currentPage: A } = (0, C.h)({
            scrollerRef: y,
            sortedCategories: T,
        }),
        P = l.useCallback(
            (e) => {
                c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        R = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!n || !a) return;
            let e = (e) => {
                let t = e.target;
                null === k.current ||
                    null === R.current ||
                    k.current.contains(t) ||
                    R.current.contains(t) ||
                    (c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: null == I ? void 0 : I.pageCategory,
                        page_index: null == I ? void 0 : I.pageIndex,
                        page_size: null == I ? void 0 : I.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    o(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [n, a, o, I]),
        (0, r.jsx)("div", {
            className: x.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: s()(x.inventory, {
                    [x.inventoryFilter]: j,
                    [x.pageFullscreen]: t,
                }),
                children: [
                    j &&
                        (0, r.jsxs)("div", {
                            className: x.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: x.controlsLeftSide,
                                    children: (0, r.jsx)(f.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: s()(x.controlsRightSide, { [x.controlsRightSideResponsive]: n }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: x.sortBy,
                                            children: [
                                                (0, r.jsx)(i.Text, {
                                                    variant: "text-md/semibold",
                                                    children: O.intl.string(O.t.uaX709),
                                                }),
                                                (0, r.jsx)(m.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: R,
                                            children: (0, r.jsx)(i.zxk, {
                                                onClick: () => {
                                                    let e = !a;
                                                    c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                        page_section: null == I ? void 0 : I.pageSection,
                                                        page_category: null == I ? void 0 : I.pageCategory,
                                                        page_index: null == I ? void 0 : I.pageIndex,
                                                        page_size: null == I ? void 0 : I.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        o(e);
                                                },
                                                variant: "secondary",
                                                text: O.intl.string(a ? O.t.fYtm6e : O.t.TeTYEx),
                                                icon: i.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                a &&
                                    n &&
                                    (0, r.jsx)("div", {
                                        className: x.filterOverlay,
                                        ref: k,
                                        children: (0, r.jsx)(i.Den, {
                                            className: x.filterOverlayContent,
                                            children: (0, r.jsx)(_.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    j && !B
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: y,
                                  tab: h,
                              },
                              h,
                          )
                        : (0, S.RE)(h)
                          ? (0, r.jsx)(
                                E.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: y,
                                    tab: h,
                                },
                                h,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: A },
                                children: (0, r.jsx)(p.Z, {
                                    isFullScreen: t,
                                    sortedCategories: T,
                                    setCategoryRef: L,
                                    currentPage: A,
                                    handlePageChange: P,
                                }),
                            }),
                ],
            }),
        })
    );
};
