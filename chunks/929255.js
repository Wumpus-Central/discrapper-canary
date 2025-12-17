n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    i = n(702486),
    c = n(626135),
    u = n(381585),
    d = n(501431),
    f = n(888302),
    g = n(193227),
    b = n(426171),
    p = n(845796),
    m = n(841875),
    h = n(312030),
    C = n(795343),
    E = n(763891),
    v = n(215023),
    S = n(981631),
    _ = n(388032),
    x = n(785614);
function O(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: a, showFilterInitially: s = !0, onUnmount: c } = e;
    (0, d.A)();
    let u = l.useRef(null),
        { handleScroll: f } = (0, i.z)(u, t),
        { setCategoryRef: g, handleScrollToCategory: p } = (0, b.xV)(u.current),
        [h, C] = l.useState(s),
        [E, v] = l.useState(!1);
    return (
        l.useEffect(() => {
            null != a && p(a);
        }, [a, p]),
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
            className: x.pageWrapper,
            children: (0, r.jsxs)("main", {
                className: x.page,
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: x.shopScroll,
                        ref: u,
                        onScroll: f,
                        children: (0, r.jsx)(y, {
                            isSmallScreen: E,
                            filterBarOpen: h,
                            setFilterBarOpen: C,
                            tab: t,
                            scrollerRef: u,
                            sortedCategories: n,
                            setCategoryRef: g,
                            initialCategoryId: a,
                        }),
                    }),
                    h && !E && (0, r.jsx)("div", { className: x.divider }),
                    h &&
                        !E &&
                        (0, r.jsx)(o.Ttm, {
                            className: x.filterBar,
                            children: (0, r.jsx)(m.Z, {}),
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
            setFilterBarOpen: a,
            tab: i,
            scrollerRef: b,
            sortedCategories: O,
            setCategoryRef: y,
            initialCategoryId: k,
        } = e,
        T = l.useRef(null),
        j = (0, d.S)((e) => e.hasDefaultFilters()),
        L = (0, u.sp)(),
        { handlePageChange: I, currentPage: A } = (0, h.h)(b),
        B = l.useCallback(
            (e) => {
                c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                    page_section: null == L ? void 0 : L.pageSection,
                    page_category: null == L ? void 0 : L.pageCategory,
                    page_index: e,
                    page_size: null == L ? void 0 : L.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    I(e);
            },
            [L, I],
        ),
        N = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === T.current ||
                    null === N.current ||
                    T.current.contains(t) ||
                    N.current.contains(t) ||
                    (c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                        page_section: null == L ? void 0 : L.pageSection,
                        page_category: null == L ? void 0 : L.pageCategory,
                        page_index: null == L ? void 0 : L.pageIndex,
                        page_size: null == L ? void 0 : L.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    a(!1));
            };
            return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
        }, [t, n, a, L]),
        (0, r.jsx)("div", {
            className: x.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: x.inventory,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.controls,
                        children: [
                            (0, r.jsx)("div", {
                                className: x.controlsLeftSide,
                                children: (0, r.jsx)(f.Z, {}),
                            }),
                            (0, r.jsxs)("div", {
                                className: s()(x.controlsRightSide, { [x.controlsRightSideResponsive]: t }),
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.sortBy,
                                        children: [
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-md/semibold",
                                                children: _.intl.string(_.t.uaX705),
                                            }),
                                            (0, r.jsx)(p.Z, {}),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        ref: N,
                                        children: (0, r.jsx)(o.Button, {
                                            onClick: () => {
                                                let e = !n;
                                                c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                                                    page_section: null == L ? void 0 : L.pageSection,
                                                    page_category: null == L ? void 0 : L.pageCategory,
                                                    page_index: null == L ? void 0 : L.pageIndex,
                                                    page_size: null == L ? void 0 : L.pageSize,
                                                    cta_name: "filter bar ".concat(e ? "show" : "hide"),
                                                    page_type: "catalog",
                                                }),
                                                    a(e);
                                            },
                                            variant: "secondary",
                                            text: _.intl.string(n ? _.t.fYtm6f : _.t["TeTYE+"]),
                                            icon: o.gXV,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, r.jsx)("div", {
                                    className: x.filterOverlay,
                                    ref: T,
                                    children: (0, r.jsx)(o.Den, {
                                        className: x.filterOverlayContent,
                                        children: (0, r.jsx)(m.Z, {}),
                                    }),
                                }),
                        ],
                    }),
                    j
                        ? (0, v.RE)(i)
                            ? (0, r.jsx)(
                                  E.Z,
                                  {
                                      scrollerRef: b,
                                      tab: i,
                                  },
                                  i,
                              )
                            : (0, r.jsx)(u.k0, {
                                  newValue: { pageIndex: A },
                                  children: (0, r.jsx)(g.Z, {
                                      sortedCategories: O,
                                      setCategoryRef: y,
                                      currentPage: A,
                                      handlePageChange: B,
                                      initialCategoryId: k,
                                  }),
                              })
                        : (0, r.jsx)(
                              C.Z,
                              {
                                  scrollerRef: b,
                                  tab: i,
                              },
                              i,
                          ),
                ],
            }),
        })
    );
};
