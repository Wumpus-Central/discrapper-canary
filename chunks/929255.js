n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    s = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(870289),
    p = n(501431),
    g = n(888302),
    f = n(193227),
    b = n(426171),
    h = n(845796),
    m = n(841875),
    _ = n(312030),
    v = n(795343),
    O = n(763891),
    C = n(215023),
    E = n(981631),
    S = n(388032),
    y = n(95368);
function x(e) {
    let { isFullScreen: t, tab: n, sortedCategories: a, initialCategoryId: c, onUnmount: u } = e;
    (0, p.A)();
    let g = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: h } = (0, s.z)(f, n),
        { setCategoryRef: _, handleScrollToCategory: v } = (0, b.xV)(f.current),
        [O, C] = l.useState(g),
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
            g || C(!1);
        }, [g, C]),
        (0, r.jsx)("div", {
            className: i()(y.pageWrapper, { [y.pageWrapperFilter]: g }),
            children: (0, r.jsxs)("main", {
                className: i()(y.page, { [y.pageFilter]: g }),
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: y.shopScroll,
                        ref: f,
                        onScroll: h,
                        children: (0, r.jsx)(j, {
                            isFullScreen: t,
                            isSmallScreen: E,
                            filterBarOpen: O,
                            setFilterBarOpen: C,
                            tab: n,
                            scrollerRef: f,
                            sortedCategories: a,
                            setCategoryRef: _,
                        }),
                    }),
                    O && !E && (0, r.jsx)("div", { className: y.divider }),
                    O &&
                        !E &&
                        (0, r.jsx)(o.Ttm, {
                            className: y.filterBar,
                            children: (0, r.jsx)(m.Z, {}),
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
        { handlePageChange: N, currentPage: w } = (0, _.h)({
            scrollerRef: x,
            sortedCategories: j,
        }),
        A = l.useCallback(
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
            if (!n || !a) return;
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
        }, [n, a, s, I]),
        (0, r.jsx)("div", {
            className: y.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: i()(y.inventory, {
                    [y.inventoryFilter]: P,
                    [y.pageFullscreen]: t,
                }),
                children: [
                    P &&
                        (0, r.jsxs)("div", {
                            className: y.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: y.controlsLeftSide,
                                    children: (0, r.jsx)(g.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: i()(y.controlsRightSide, { [y.controlsRightSideResponsive]: n }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: y.sortBy,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/semibold",
                                                    children: S.intl.string(S.t.uaX709),
                                                }),
                                                (0, r.jsx)(h.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: B,
                                            children: (0, r.jsx)(o.zxk, {
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
                                    n &&
                                    (0, r.jsx)("div", {
                                        className: y.filterOverlay,
                                        ref: L,
                                        children: (0, r.jsx)(o.Den, {
                                            className: y.filterOverlayContent,
                                            children: (0, r.jsx)(m.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    P && !k
                        ? (0, r.jsx)(
                              v.Z,
                              {
                                  isFullScreen: t,
                                  scrollerRef: x,
                                  tab: b,
                              },
                              b,
                          )
                        : (0, C.RE)(b)
                          ? (0, r.jsx)(
                                O.Z,
                                {
                                    isFullScreen: t,
                                    scrollerRef: x,
                                    tab: b,
                                },
                                b,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: w },
                                children: (0, r.jsx)(f.Z, {
                                    isFullScreen: t,
                                    sortedCategories: j,
                                    setCategoryRef: T,
                                    currentPage: w,
                                    handlePageChange: A,
                                }),
                            }),
                ],
            }),
        })
    );
};
