n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    l = n(647438),
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
    C = n(426171),
    h = n(845796),
    _ = n(841875),
    m = n(312030),
    b = n(795343),
    E = n(763891),
    v = n(215023),
    S = n(981631),
    O = n(388032),
    x = n(452785);
function y(e) {
    let { isFullScreen: t, tab: n, sortedCategories: i, initialCategoryId: c, onUnmount: u } = e;
    (0, g.A)();
    let f = (0, d.FF)("CollectiblesBrowse"),
        p = l.useRef(null),
        { handleScroll: h } = (0, a.z)(p, n),
        { setCategoryRef: m, handleScrollToCategory: b } = (0, C.xV)(p.current),
        [E, v] = l.useState(f),
        [S, O] = l.useState(!1);
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
            f || v(!1);
        }, [f, v]),
        (0, r.jsx)("div", {
            className: s()(x.pageWrapper, { [x.pageWrapperFilter]: f }),
            children: (0, r.jsxs)("main", {
                className: s()(x.page, { [x.pageFilter]: f }),
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: x.shopScroll,
                        ref: p,
                        onScroll: h,
                        children: (0, r.jsx)(j, {
                            isFullScreen: t,
                            isSmallScreen: S,
                            filterBarOpen: E,
                            setFilterBarOpen: v,
                            tab: n,
                            scrollerRef: p,
                            sortedCategories: i,
                            setCategoryRef: m,
                        }),
                    }),
                    E && !S && (0, r.jsx)("div", { className: x.divider }),
                    E &&
                        !S &&
                        (0, r.jsx)(o.Ttm, {
                            className: x.filterBar,
                            children: (0, r.jsx)(_.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let j = (e) => {
    let {
            isFullScreen: t,
            isSmallScreen: n,
            filterBarOpen: i,
            setFilterBarOpen: a,
            tab: C,
            scrollerRef: y,
            sortedCategories: j,
            setCategoryRef: T,
        } = e,
        L = (0, d.FF)("CollectiblesBrowse"),
        k = l.useRef(null),
        I = (0, g.S)((e) => e.hasDefaultFilters()),
        B = (0, u.sp)(),
        { handlePageChange: N, currentPage: P } = (0, m.h)({
            scrollerRef: y,
            sortedCategories: j,
        }),
        A = l.useCallback(
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
            if (!n || !i) return;
            let e = (e) => {
                let t = e.target;
                null === k.current ||
                    null === R.current ||
                    k.current.contains(t) ||
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
                    a(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [n, i, a, B]),
        (0, r.jsx)("div", {
            className: x.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: s()(x.inventory, {
                    [x.inventoryFilter]: L,
                    [x.pageFullscreen]: t,
                }),
                children: [
                    L &&
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
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: O.intl.string(O.t.uaX709),
                                                }),
                                                (0, r.jsx)(h.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: R,
                                            children: (0, r.jsx)(o.Button, {
                                                onClick: () => {
                                                    let e = !i;
                                                    c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                                        page_section: null == B ? void 0 : B.pageSection,
                                                        page_category: null == B ? void 0 : B.pageCategory,
                                                        page_index: null == B ? void 0 : B.pageIndex,
                                                        page_size: null == B ? void 0 : B.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        a(e);
                                                },
                                                variant: "secondary",
                                                text: O.intl.string(i ? O.t.fYtm6e : O.t.TeTYEx),
                                                icon: o.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                i &&
                                    n &&
                                    (0, r.jsx)("div", {
                                        className: x.filterOverlay,
                                        ref: k,
                                        children: (0, r.jsx)(o.Den, {
                                            className: x.filterOverlayContent,
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
                                  scrollerRef: y,
                                  tab: C,
                              },
                              C,
                          )
                        : (0, v.RE)(C)
                          ? (0, r.jsx)(
                                E.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: y,
                                    tab: C,
                                },
                                C,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: P },
                                children: (0, r.jsx)(p.Z, {
                                    isFullScreen: t,
                                    sortedCategories: j,
                                    setCategoryRef: T,
                                    currentPage: P,
                                    handlePageChange: A,
                                }),
                            }),
                ],
            }),
        })
    );
};
