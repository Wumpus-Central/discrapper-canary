n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
    a = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(501431),
    g = n(888302),
    f = n(193227),
    p = n(426171),
    m = n(845796),
    h = n(841875),
    C = n(312030),
    _ = n(795343),
    b = n(763891),
    v = n(215023),
    E = n(981631),
    S = n(388032),
    O = n(452785);
function x(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, showFilterInitially: o = !0, onUnmount: c } = e;
    (0, d.A)();
    let u = l.useRef(null),
        { handleScroll: g } = (0, a.z)(u, t),
        { setCategoryRef: f, handleScrollToCategory: m } = (0, p.xV)(u.current),
        [C, _] = l.useState(o),
        [b, v] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != i && m(i);
        }, [i, m]),
        l.useEffect(
            () => () => {
                null != c && c();
            },
            [],
        ),
        l.useEffect(() => {
            let e = () => {
                v(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, r.jsx)("div", {
            className: O.pageWrapper,
            children: (0, r.jsxs)("main", {
                className: O.page,
                children: [
                    (0, r.jsx)(s.yWw, {
                        className: O.shopScroll,
                        ref: u,
                        onScroll: g,
                        children: (0, r.jsx)(y, {
                            isSmallScreen: b,
                            filterBarOpen: C,
                            setFilterBarOpen: _,
                            tab: t,
                            scrollerRef: u,
                            sortedCategories: n,
                            setCategoryRef: f,
                            initialCategoryId: i,
                        }),
                    }),
                    C && !b && (0, r.jsx)("div", { className: O.divider }),
                    C &&
                        !b &&
                        (0, r.jsx)(s.Ttm, {
                            className: O.filterBar,
                            children: (0, r.jsx)(h.Z, {}),
                        }),
                ],
            }),
        })
    );
}
let y = (e) => {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: i,
            tab: a,
            scrollerRef: p,
            sortedCategories: x,
            setCategoryRef: y,
            initialCategoryId: j,
        } = e,
        k = l.useRef(null),
        T = (0, d.S)((e) => e.hasDefaultFilters()),
        I = (0, u.sp)(),
        { handlePageChange: L, currentPage: B } = (0, C.h)(p),
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
                    L(e);
            },
            [I, L],
        ),
        N = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === k.current ||
                    null === N.current ||
                    k.current.contains(t) ||
                    N.current.contains(t) ||
                    (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                        page_section: null == I ? void 0 : I.pageSection,
                        page_category: null == I ? void 0 : I.pageCategory,
                        page_index: null == I ? void 0 : I.pageIndex,
                        page_size: null == I ? void 0 : I.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    i(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, n, i, I]),
        (0, r.jsx)("div", {
            className: O.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: O.inventory,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.controls,
                        children: [
                            (0, r.jsx)("div", {
                                className: O.controlsLeftSide,
                                children: (0, r.jsx)(g.Z, {}),
                            }),
                            (0, r.jsxs)("div", {
                                className: o()(O.controlsRightSide, { [O.controlsRightSideResponsive]: t }),
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: O.sortBy,
                                        children: [
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/semibold",
                                                children: S.intl.string(S.t.uaX705),
                                            }),
                                            (0, r.jsx)(m.Z, {}),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        ref: N,
                                        children: (0, r.jsx)(s.Button, {
                                            onClick: () => {
                                                let e = !n;
                                                c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                                                    page_section: null == I ? void 0 : I.pageSection,
                                                    page_category: null == I ? void 0 : I.pageCategory,
                                                    page_index: null == I ? void 0 : I.pageIndex,
                                                    page_size: null == I ? void 0 : I.pageSize,
                                                    cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                    page_type: "catalog",
                                                }),
                                                    i(e);
                                            },
                                            variant: "secondary",
                                            text: S.intl.string(n ? S.t.fYtm6f : S.t["TeTYE+"]),
                                            icon: s.gXV,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, r.jsx)("div", {
                                    className: O.filterOverlay,
                                    ref: k,
                                    children: (0, r.jsx)(s.Den, {
                                        className: O.filterOverlayContent,
                                        children: (0, r.jsx)(h.Z, {}),
                                    }),
                                }),
                        ],
                    }),
                    T
                        ? (0, v.RE)(a)
                            ? (0, r.jsx)(
                                  b.Z,
                                  {
                                      scrollerRef: p,
                                      tab: a,
                                  },
                                  a,
                              )
                            : (0, r.jsx)(u.k0, {
                                  newValue: { pageIndex: B },
                                  children: (0, r.jsx)(f.Z, {
                                      sortedCategories: x,
                                      setCategoryRef: y,
                                      currentPage: B,
                                      handlePageChange: A,
                                      initialCategoryId: j,
                                  }),
                              })
                        : (0, r.jsx)(
                              _.Z,
                              {
                                  scrollerRef: p,
                                  tab: a,
                              },
                              a,
                          ),
                ],
            }),
        })
    );
};
