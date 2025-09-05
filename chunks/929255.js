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
    p = n(888302),
    f = n(193227),
    m = n(426171),
    _ = n(845796),
    h = n(841875),
    C = n(312030),
    b = n(795343),
    E = n(763891),
    S = n(215023),
    O = n(981631),
    v = n(388032),
    x = n(25616);
function y(e) {
    let { isFullScreen: t, tab: n, sortedCategories: a, initialCategoryId: c, onUnmount: u } = e;
    (0, g.A)();
    let p = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: _ } = (0, o.z)(f, n),
        { setCategoryRef: C, handleScrollToCategory: b } = (0, m.xV)(f.current),
        [E, S] = l.useState(p),
        [O, v] = l.useState(!1);
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
                v(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        l.useEffect(() => {
            p || S(!1);
        }, [p, S]),
        (0, r.jsx)("div", {
            className: s()(x.pageWrapper, { [x.pageWrapperFilter]: p }),
            children: (0, r.jsxs)("main", {
                className: s()(x.page, { [x.pageFilter]: p }),
                children: [
                    (0, r.jsx)(i.yWw, {
                        className: x.shopScroll,
                        ref: f,
                        onScroll: _,
                        children: (0, r.jsx)(T, {
                            isFullScreen: t,
                            isSmallScreen: O,
                            filterBarOpen: E,
                            setFilterBarOpen: S,
                            tab: n,
                            scrollerRef: f,
                            sortedCategories: a,
                            setCategoryRef: C,
                        }),
                    }),
                    E && !O && (0, r.jsx)("div", { className: x.divider }),
                    E &&
                        !O &&
                        (0, r.jsx)(i.Ttm, {
                            className: x.filterBar,
                            children: (0, r.jsx)(h.Z, {}),
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
            tab: m,
            scrollerRef: y,
            sortedCategories: T,
            setCategoryRef: L,
        } = e,
        j = (0, d.FF)("CollectiblesBrowse"),
        k = l.useRef(null),
        I = (0, g.S)((e) => e.hasDefaultFilters()),
        N = (0, u.sp)(),
        { handlePageChange: B, currentPage: P } = (0, C.h)({
            scrollerRef: y,
            sortedCategories: T,
        }),
        A = l.useCallback(
            (e) => {
                c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == N ? void 0 : N.sessionId,
                    page_section: null == N ? void 0 : N.pageSection,
                    page_category: null == N ? void 0 : N.pageCategory,
                    page_index: e,
                    page_size: null == N ? void 0 : N.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    B(e);
            },
            [N, B],
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
                    (c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == N ? void 0 : N.sessionId,
                        page_section: null == N ? void 0 : N.pageSection,
                        page_category: null == N ? void 0 : N.pageCategory,
                        page_index: null == N ? void 0 : N.pageIndex,
                        page_size: null == N ? void 0 : N.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    o(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [n, a, o, N]),
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
                                    children: (0, r.jsx)(p.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: s()(x.controlsRightSide, { [x.controlsRightSideResponsive]: n }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: x.sortBy,
                                            children: [
                                                (0, r.jsx)(i.Text, {
                                                    variant: "text-md/semibold",
                                                    children: v.intl.string(v.t.uaX709),
                                                }),
                                                (0, r.jsx)(_.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: R,
                                            children: (0, r.jsx)(i.zxk, {
                                                onClick: () => {
                                                    let e = !a;
                                                    c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: null == N ? void 0 : N.sessionId,
                                                        page_section: null == N ? void 0 : N.pageSection,
                                                        page_category: null == N ? void 0 : N.pageCategory,
                                                        page_index: null == N ? void 0 : N.pageIndex,
                                                        page_size: null == N ? void 0 : N.pageSize,
                                                        cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                        page_type: "catalog",
                                                    }),
                                                        o(e);
                                                },
                                                variant: "secondary",
                                                text: v.intl.string(a ? v.t.fYtm6e : v.t.TeTYEx),
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
                                            children: (0, r.jsx)(h.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    j && !I
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: y,
                                  tab: m,
                              },
                              m,
                          )
                        : (0, S.RE)(m)
                          ? (0, r.jsx)(
                                E.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: y,
                                    tab: m,
                                },
                                m,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: P },
                                children: (0, r.jsx)(f.Z, {
                                    isFullScreen: t,
                                    sortedCategories: T,
                                    setCategoryRef: L,
                                    currentPage: P,
                                    handlePageChange: A,
                                }),
                            }),
                ],
            }),
        })
    );
};
