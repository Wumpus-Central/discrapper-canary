e.r(t),
    e.d(t, {
        default: function () {
            return I;
        }
    }),
    e(47120);
var i = e(200651),
    o = e(192379),
    l = e(120356),
    a = e.n(l),
    s = e(846519),
    r = e(481060),
    u = e(376641),
    c = e(714338),
    d = e(585483),
    f = e(254109),
    _ = e(212459),
    E = e(73249),
    m = e(730606),
    S = e(369171),
    h = e(860153),
    p = e(981631),
    g = e(388032),
    C = e(176598);
function I(n) {
    let { onClose: t, items: e, startingIndex: l, shouldRedactExplicitContent: I, shouldHideMediaOptions: M = !1, className: O, transitionState: T, ...y } = n,
        [x, L] = o.useState(null != l ? l : 0),
        [v, A] = o.useState(!1),
        [D, b] = o.useState(!0),
        R = o.useRef(null);
    o.useEffect(() => {
        if (null != t)
            return (
                d.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    d.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        o.useEffect(
            () => (
                T === r.ModalTransitionState.ENTERED && (c.Z.disable(), c.Z.enableTemp(u.P)),
                T === r.ModalTransitionState.HIDDEN && (c.Z.disable(), c.Z.enableTemp(u.v)),
                () => {
                    c.Z.disableTemp();
                }
            ),
            [T]
        );
    let N = o.useCallback((n) => {
            L(n), (0, f.yg)(f.uG.SELECTED_ITEM_CHANGE);
        }, []),
        j = o.useMemo(
            () => ({
                zoomed: v,
                setZoomed: A,
                accessoryVisibility: (function (n, t, e) {
                    return (null != n || (n = r.ModalTransitionState.HIDDEN), n === r.ModalTransitionState.ENTERING || n >= r.ModalTransitionState.EXITING) ? S.UE.FORCE_HIDDEN : !e || t ? S.UE.VISIBLE : S.UE.INACTIVE;
                })(null != T ? T : void 0, D, v)
            }),
            [v, T, D]
        ),
        P = o.useCallback(() => {
            var n;
            b(!0), (null !== (n = R.current) && void 0 !== n) || (R.current = new s.sW(1000, () => b(!1))), R.current.delay();
        }, []),
        k = o.useCallback(() => {
            P(), null == t || t();
        }, [P, t]),
        B = e[x];
    return (0, i.jsx)(r.ThemeProvider, {
        theme: p.BRd.DARK,
        children: (n) =>
            (0, i.jsx)(r.ModalRoot, {
                hideShadow: !0,
                className: a()(C.carouselModal, n),
                transitionState: T,
                ...y,
                size: r.ModalSize.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: P,
                onMouseDown: k,
                'aria-label': g.intl.string(g.t.AMTX3t),
                children: (0, i.jsxs)(_.z.Provider, {
                    value: j,
                    children: [
                        (0, i.jsx)(h.Z, {
                            item: B,
                            onClose: t
                        }),
                        (0, i.jsxs)(S.c7, {
                            children: [
                                (0, i.jsx)(m.ZP, {
                                    items: e,
                                    startIndex: x,
                                    onIndexChange: N,
                                    shouldRedactExplicitContent: I,
                                    shouldHideMediaOptions: M
                                }),
                                (0, i.jsx)(E.Z, {
                                    item: B,
                                    hideMediaOptions: M
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
