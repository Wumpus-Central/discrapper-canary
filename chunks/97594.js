t.r(n),
    t.d(n, {
        default: function () {
            return v;
        }
    }),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(846519),
    s = t(481060),
    u = t(376641),
    c = t(714338),
    d = t(585483),
    f = t(254109),
    m = t(212459),
    h = t(73249),
    p = t(730606),
    g = t(369171),
    _ = t(860153),
    E = t(981631),
    S = t(388032),
    x = t(176598);
function v(e) {
    let { onClose: n, items: t, startingIndex: r, shouldRedactExplicitContent: v, shouldHideMediaOptions: C = !1, className: y, transitionState: I, ...b } = e,
        [M, O] = l.useState(null != r ? r : 0),
        [L, T] = l.useState(!1),
        [A, R] = l.useState(!0),
        j = l.useRef(null);
    l.useEffect(() => {
        if (null != n)
            return (
                d.S.subscribe(E.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    d.S.unsubscribe(E.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]),
        l.useEffect(
            () => (
                I === s.ModalTransitionState.ENTERED && (c.Z.disable(), c.Z.enableTemp(u.P)),
                I === s.ModalTransitionState.HIDDEN && (c.Z.disable(), c.Z.enableTemp(u.v)),
                () => {
                    c.Z.disableTemp();
                }
            ),
            [I]
        );
    let D = l.useCallback((e) => {
            O(e), (0, f.yg)(f.uG.SELECTED_ITEM_CHANGE);
        }, []),
        N = l.useMemo(
            () => ({
                zoomed: L,
                setZoomed: T,
                accessoryVisibility: (function (e, n, t) {
                    return (null != e || (e = s.ModalTransitionState.HIDDEN), e === s.ModalTransitionState.ENTERING || e >= s.ModalTransitionState.EXITING) ? g.UE.FORCE_HIDDEN : !t || n ? g.UE.VISIBLE : g.UE.INACTIVE;
                })(null != I ? I : void 0, A, L)
            }),
            [L, I, A]
        ),
        w = l.useCallback(() => {
            var e;
            R(!0), (null !== (e = j.current) && void 0 !== e) || (j.current = new o.sW(1000, () => R(!1))), j.current.delay();
        }, []),
        P = l.useCallback(() => {
            w(), null == n || n();
        }, [w, n]),
        Z = t[M];
    return (0, i.jsx)(s.ThemeProvider, {
        theme: E.BRd.DARK,
        children: (e) =>
            (0, i.jsx)(s.ModalRoot, {
                hideShadow: !0,
                className: a()(x.carouselModal, e),
                transitionState: I,
                ...b,
                size: s.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: w,
                onMouseDown: P,
                'aria-label': S.intl.string(S.t.AMTX3t),
                children: (0, i.jsxs)(m.z.Provider, {
                    value: N,
                    children: [
                        (0, i.jsx)(_.Z, {
                            item: Z,
                            onClose: n
                        }),
                        (0, i.jsxs)(g.c7, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    items: t,
                                    startIndex: M,
                                    onIndexChange: D,
                                    shouldRedactExplicitContent: v,
                                    shouldHideMediaOptions: C
                                }),
                                (0, i.jsx)(h.Z, {
                                    item: Z,
                                    hideMediaOptions: C
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
