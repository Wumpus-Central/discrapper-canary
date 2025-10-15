n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
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
    O = n(981631),
    x = n(388032),
    S = n(452785);
function y(e) {
    let { tab: t, sortedCategories: n, initialCategoryId: i, onUnmount: c } = e;
    (0, g.A)();
    let u = (0, d.FF)("CollectiblesBrowse"),
        f = l.useRef(null),
        { handleScroll: p } = (0, a.z)(f, t),
        { setCategoryRef: h, handleScrollToCategory: m } = (0, C.xV)(f.current),
        [b, E] = l.useState(u),
        [v, O] = l.useState(!1);
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
                O(window.innerWidth < 1400);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        l.useEffect(() => {
            u || E(!1);
        }, [u, E]),
        (0, r.jsx)("div", {
            className: o()(S.pageWrapper, { [S.pageWrapperFilter]: u }),
            children: (0, r.jsxs)("main", {
                className: o()(S.page, { [S.pageFilter]: u }),
                children: [
                    (0, r.jsx)(s.yWw, {
                        className: S.shopScroll,
                        ref: f,
                        onScroll: p,
                        children: (0, r.jsx)(j, {
                            isSmallScreen: v,
                            filterBarOpen: b,
                            setFilterBarOpen: E,
                            tab: t,
                            scrollerRef: f,
                            sortedCategories: n,
                            setCategoryRef: h,
                        }),
                    }),
                    b && !v && (0, r.jsx)("div", { className: S.divider }),
                    b &&
                        !v &&
                        (0, r.jsx)(s.Ttm, {
                            className: S.filterBar,
                            children: (0, r.jsx)(_.Z, {}),
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
            tab: a,
            scrollerRef: C,
            sortedCategories: y,
            setCategoryRef: j,
        } = e,
        k = (0, d.FF)("CollectiblesBrowse"),
        T = l.useRef(null),
        L = (0, g.S)((e) => e.hasDefaultFilters()),
        I = (0, u.sp)(),
        { handlePageChange: B, currentPage: A } = (0, m.h)({
            scrollerRef: C,
            sortedCategories: y,
        }),
        N = l.useCallback(
            (e) => {
                c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: null == I ? void 0 : I.pageCategory,
                    page_index: e,
                    page_size: null == I ? void 0 : I.pageSize,
                    cta_name: "catalog page ".concat(e),
                    page_type: "catalog",
                }),
                    B(e);
            },
            [I, B],
        ),
        P = l.useRef(null);
    return (
        l.useEffect(() => {
            if (!t || !n) return;
            let e = (e) => {
                let t = e.target;
                null === T.current ||
                    null === P.current ||
                    T.current.contains(t) ||
                    P.current.contains(t) ||
                    (c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            className: S.inventoryWrapper,
            children: (0, r.jsxs)("div", {
                className: o()(S.inventory, { [S.inventoryFilter]: k }),
                children: [
                    k &&
                        (0, r.jsxs)("div", {
                            className: S.controls,
                            children: [
                                (0, r.jsx)("div", {
                                    className: S.controlsLeftSide,
                                    children: (0, r.jsx)(f.Z, {}),
                                }),
                                (0, r.jsxs)("div", {
                                    className: o()(S.controlsRightSide, { [S.controlsRightSideResponsive]: t }),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: S.sortBy,
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-md/semibold",
                                                    children: x.intl.string(x.t.uaX705),
                                                }),
                                                (0, r.jsx)(h.Z, {}),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: P,
                                            children: (0, r.jsx)(s.Button, {
                                                onClick: () => {
                                                    let e = !n;
                                                    c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                                text: x.intl.string(n ? x.t.fYtm6f : x.t["TeTYE+"]),
                                                icon: s.gXV,
                                                iconPosition: "end",
                                            }),
                                        }),
                                    ],
                                }),
                                n &&
                                    t &&
                                    (0, r.jsx)("div", {
                                        className: S.filterOverlay,
                                        ref: T,
                                        children: (0, r.jsx)(s.Den, {
                                            className: S.filterOverlayContent,
                                            children: (0, r.jsx)(_.Z, {}),
                                        }),
                                    }),
                            ],
                        }),
                    k && !L
                        ? (0, r.jsx)(
                              b.Z,
                              {
                                  scrollerRef: C,
                                  tab: a,
                              },
                              a,
                          )
                        : (0, v.RE)(a)
                          ? (0, r.jsx)(
                                E.Z,
                                {
                                    scrollerRef: C,
                                    tab: a,
                                },
                                a,
                            )
                          : (0, r.jsx)(u.k0, {
                                newValue: { pageIndex: A },
                                children: (0, r.jsx)(p.Z, {
                                    sortedCategories: y,
                                    setCategoryRef: j,
                                    currentPage: A,
                                    handlePageChange: N,
                                }),
                            }),
                ],
            }),
        })
    );
};
