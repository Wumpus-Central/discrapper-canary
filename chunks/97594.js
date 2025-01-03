t.r(n),
    t.d(n, {
        default: function () {
            return C;
        }
    }),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(846519),
    s = t(481060),
    u = t(376641),
    c = t(714338),
    d = t(585483),
    h = t(254109),
    f = t(212459),
    m = t(73249),
    p = t(730606),
    _ = t(369171),
    E = t(860153),
    g = t(981631),
    S = t(388032),
    x = t(176598);
function C(e) {
    let { onClose: n, items: t, startingIndex: l, shouldRedactExplicitContent: C, shouldHideMediaOptions: I = !1, className: y, transitionState: v, ...O } = e,
        [b, M] = r.useState(null != l ? l : 0),
        [L, A] = r.useState(!1),
        [T, R] = r.useState(!0),
        j = r.useRef(null);
    r.useEffect(() => {
        if (null != n)
            return (
                d.S.subscribe(g.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                    d.S.unsubscribe(g.CkL.MEDIA_MODAL_CLOSE, n);
                }
            );
    }, [n]),
        r.useEffect(
            () => (
                v === s.ModalTransitionState.ENTERED && (c.Z.disable(), c.Z.enableTemp(u.P)),
                v === s.ModalTransitionState.HIDDEN && (c.Z.disable(), c.Z.enableTemp(u.v)),
                () => {
                    c.Z.disableTemp();
                }
            ),
            [v]
        );
    let N = r.useCallback((e) => {
            M(e), (0, h.yg)(h.uG.SELECTED_ITEM_CHANGE);
        }, []),
        D = r.useMemo(
            () => ({
                zoomed: L,
                setZoomed: A,
                accessoryVisibility: (function (e, n, t) {
                    return (null != e || (e = s.ModalTransitionState.HIDDEN), e === s.ModalTransitionState.ENTERING || e >= s.ModalTransitionState.EXITING) ? _.UE.FORCE_HIDDEN : !t || n ? _.UE.VISIBLE : _.UE.INACTIVE;
                })(null != v ? v : void 0, T, L)
            }),
            [L, v, T]
        ),
        P = r.useCallback(() => {
            var e;
            R(!0), (null !== (e = j.current) && void 0 !== e) || (j.current = new o.sW(1000, () => R(!1))), j.current.delay();
        }, []),
        w = r.useCallback(() => {
            P(), null == n || n();
        }, [P, n]),
        k = t[b];
    return (0, i.jsx)(s.ThemeProvider, {
        theme: g.BRd.DARK,
        children: (e) =>
            (0, i.jsx)(s.ModalRoot, {
                hideShadow: !0,
                className: a()(x.carouselModal, e),
                transitionState: v,
                ...O,
                size: s.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: P,
                onClick: w,
                'aria-label': S.intl.string(S.t.AMTX3t),
                children: (0, i.jsxs)(f.z.Provider, {
                    value: D,
                    children: [
                        (0, i.jsx)(E.Z, {
                            item: k,
                            onClose: n
                        }),
                        (0, i.jsxs)(_.c7, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    items: t,
                                    startIndex: b,
                                    onIndexChange: N,
                                    shouldRedactExplicitContent: C,
                                    shouldHideMediaOptions: I
                                }),
                                (0, i.jsx)(m.Z, {
                                    item: k,
                                    hideMediaOptions: I
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
