(r.d(t, { Z: () => E }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(755721),
    s = r(481060),
    c = r(381585),
    u = r(870289),
    d = r(501431),
    p = r(888302),
    f = r(193227),
    g = r(845796),
    h = r(841875),
    b = r(312030),
    m = r(795343),
    _ = r(763891),
    O = r(215023),
    C = r(388032),
    v = r(484920);
function E(e) {
    let { isFullScreen: t, scrollerRef: r, tab: i, sortedCategories: E, setCategoryRef: S, advancedScroller: y } = e,
        { handlePageChange: x, currentPage: j } = (0, b.h)({
            scrollerRef: r,
            sortedCategories: E
        });
    (0, d.A)();
    let T = (0, u.F)('CollectiblesBrowse'),
        [P, L] = l.useState(T),
        [I, k] = l.useState(!1),
        B = l.useRef(null),
        N = l.useRef(null);
    (l.useEffect(() => {
        let e = () => {
            k(window.innerWidth < 1400);
        };
        return (e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
    }, []),
        l.useEffect(() => {
            if (!I || !P) return;
            let e = (e) => {
                let t = e.target;
                null === N.current || null === B.current || N.current.contains(t) || B.current.contains(t) || L(!1);
            };
            return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e));
        }, [I, P]),
        l.useEffect(() => {
            T || L(!1);
        }, [T, L]));
    let A = (0, d.S)((e) => e.hasDefaultFilters()),
        w = (0, n.jsxs)('div', {
            className: o()(v.inventory, {
                [v.inventoryFilter]: T,
                [v.pageFullscreen]: t
            }),
            children: [
                T &&
                    (0, n.jsxs)('div', {
                        className: v.controls,
                        children: [
                            (0, n.jsx)('div', {
                                className: v.controlsLeftSide,
                                children: (0, n.jsx)(p.Z, {})
                            }),
                            (0, n.jsxs)('div', {
                                className: o()(v.controlsRightSide, { [v.controlsRightSideResponsive]: I }),
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: v.sortBy,
                                        children: [
                                            (0, n.jsx)(s.Text, {
                                                variant: 'text-md/semibold',
                                                children: C.intl.string(C.t.uaX709)
                                            }),
                                            (0, n.jsx)(g.Z, {})
                                        ]
                                    }),
                                    (0, n.jsx)('div', {
                                        ref: B,
                                        children: (0, n.jsx)(a.zx, {
                                            onClick: () => L((e) => !e),
                                            look: a.iL.OUTLINED,
                                            color: a.Tt.PRIMARY,
                                            className: o()({
                                                [v.responsiveFilterButton]: I,
                                                [v.filterButtonActive]: P
                                            }),
                                            children: (0, n.jsxs)('div', {
                                                className: v.filterButton,
                                                children: [
                                                    C.intl.string(P ? C.t.fYtm6e : C.t.TeTYEx),
                                                    (0, n.jsx)(s.gXV, {
                                                        size: 'xs',
                                                        color: 'var(--button-outline-primary-text)'
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            P &&
                                I &&
                                (0, n.jsx)('div', {
                                    className: v.filterOverlay,
                                    ref: N,
                                    children: (0, n.jsx)(s.Den, {
                                        className: v.filterOverlayContent,
                                        children: (0, n.jsx)(h.Z, {})
                                    })
                                })
                        ]
                    }),
                T && !A
                    ? (0, n.jsx)(
                          m.Z,
                          {
                              isFullScreen: t,
                              scrollerRef: r,
                              tab: i
                          },
                          i
                      )
                    : (0, O.RE)(i)
                      ? (0, n.jsx)(
                            _.Z,
                            {
                                isFullScreen: t,
                                scrollerRef: r,
                                tab: i
                            },
                            i
                        )
                      : (0, n.jsx)(c.k0, {
                            newValue: { pageIndex: j },
                            children: (0, n.jsx)(f.Z, {
                                isFullScreen: t,
                                sortedCategories: E,
                                setCategoryRef: S,
                                currentPage: j,
                                handlePageChange: x
                            })
                        })
            ]
        });
    return (0, n.jsx)('div', {
        className: o()(v.pageWrapper, { [v.pageWrapperFilter]: T }),
        children: (0, n.jsxs)('main', {
            className: o()(v.page, { [v.pageFilter]: T }),
            children: [
                null != y
                    ? y(
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('div', {
                                      className: v.inventoryWrapper,
                                      children: w
                                  }),
                                  P && !I && (0, n.jsx)('div', { className: v.divider })
                              ]
                          })
                      )
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)('div', {
                                  className: v.inventoryWrapper,
                                  children: w
                              }),
                              P && !I && (0, n.jsx)('div', { className: v.divider })
                          ]
                      }),
                P &&
                    !I &&
                    (0, n.jsx)(s.Ttm, {
                        className: v.filterBar,
                        children: (0, n.jsx)(h.Z, {})
                    })
            ]
        })
    });
}
