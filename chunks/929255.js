n.d(t, { Z: () => T }), n(388685);
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
    p = n(888302),
    f = n(193227),
    C = n(426171),
    h = n(845796),
    _ = n(841875),
    m = n(312030),
    b = n(795343),
    E = n(763891),
    S = n(215023),
    v = n(981631),
    x = n(388032),
    O = n(452785);
function T(e) {
    let { isFullScreen: t, tab: n, sortedCategories: a, initialCategoryId: c, onUnmount: u } = e;
    (0, g.A)();
    let p = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: h } = (0, o.z)(f, n),
        { setCategoryRef: m, handleScrollToCategory: b } = (0, C.xV)(f.current),
        [E, S] = l.useState(p),
        [v, x] = l.useState(!1);
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
                x(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        l.useEffect(() => {
            p || S(!1);
        }, [p, S]),
        (0, r.jsx)("div", {
            className: s()(O.pageWrapper, { [O.pageWrapperFilter]: p }),
            children: (0, r.jsxs)("main", {
                className: s()(O.page, { [O.pageFilter]: p }),
                children: [
                    (0, r.jsx)(i.yWw, {
                        className: O.shopScroll,
                        ref: f,
                        onScroll: h,
                        children: (0, r.jsx)(y, {
                            isFullScreen: t,
                            isSmallScreen: v,
                            filterBarOpen: E,
                            setFilterBarOpen: S,
                            tab: n,
                            scrollerRef: f,
                            sortedCategories: a,
                            setCategoryRef: m,
                        }),
                    }),
                    E && !v && (0, r.jsx)("div", { className: O.divider }),
                    E &&
                        !v &&
                        (0, r.jsx)(i.Ttm, {
                            className: O.filterBar,
                            children: (0, r.jsx)(_.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let y = (e) => {
    let {
            isFullScreen: t,
            isSmallScreen: n,
            filterBarOpen: a,
            setFilterBarOpen: o,
            tab: C,
            scrollerRef: T,
            sortedCategories: y,
            setCategoryRef: j,
        } = e,
        L = (0, d.FF)("CollectiblesBrowse"),
        k = l.useRef(null),
        I = (0, g.S)((e) => e.hasDefaultFilters()),
        P = (0, u.sp)(),
        { handlePageChange: N, currentPage: B } = (0, m.h)({
            scrollerRef: T,
            sortedCategories: y,
        }),
        A = l.useCallback(
            (e) => {
                c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                    page_section: null == P ? void 0 : P.pageSection,
                    page_category: null == P ? void 0 : P.pageCategory,
                    page_index: e,
                    page_size: null == P ? void 0 : P.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    N(e);
            },
            [P, N],
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
                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                        page_section: null == P ? void 0 : P.pageSection,
                        page_category: null == P ? void 0 : P.pageCategory,
                        page_index: null == P ? void 0 : P.pageIndex,
                        page_size: null == P ? void 0 : P.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    o(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [n, a, o, P]),
        (0, r.jsx)("div", {
            className: O.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: s()(O.inventory, {
                    [O.inventoryFilter]: L,
                    [O.pageFullscreen]: t,
                }),
                children: [
                    L &&
                        (0, r.jsxs)("div", {
                            className: O.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: O.controlsLeftSide,
                                    children: (0, r.jsx)(p.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: s()(O.controlsRightSide, { [O.controlsRightSideResponsive]: n }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: O.sortBy,
                                            children: [
                                                (0, r.jsx)(i.Text, {
                                                    variant: "text-md/semibold",
                                                    children: x.intl.string(x.t.uaX709),
                                                }),
                                                (0, r.jsx)(h.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: R,
                                            children: (0, r.jsx)(i.zxk, {
                                                onClick: () => {
                                                    let e = !a;
                                                    c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                                                        page_section: null == P ? void 0 : P.pageSection,
                                                        page_category: null == P ? void 0 : P.pageCategory,
                                                        page_index: null == P ? void 0 : P.pageIndex,
                                                        page_size: null == P ? void 0 : P.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        o(e);
                                                },
                                                variant: "secondary",
                                                text: x.intl.string(a ? x.t.fYtm6e : x.t.TeTYEx),
                                                icon: i.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                a &&
                                    n &&
                                    (0, r.jsx)("div", {
                                        className: O.filterOverlay,
                                        ref: k,
                                        children: (0, r.jsx)(i.Den, {
                                            className: O.filterOverlayContent,
                                            children: (0, r.jsx)(_.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    L && !I
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: T,
                                  tab: C,
                              },
                              C,
                          )
                        : (0, S.RE)(C)
                          ? (0, r.jsx)(
                                E.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: T,
                                    tab: C,
                                },
                                C,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: B },
                                children: (0, r.jsx)(f.Z, {
                                    isFullScreen: t,
                                    sortedCategories: y,
                                    setCategoryRef: j,
                                    currentPage: B,
                                    handlePageChange: A,
                                }),
                            }),
                ],
            }),
        })
    );
};
