n.r(t), n.d(t, { default: () => O }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(846519),
    r = n(481060),
    u = n(376641),
    c = n(714338),
    d = n(585483),
    _ = n(254109),
    E = n(212459),
    m = n(73249),
    S = n(730606),
    h = n(369171),
    f = n(860153),
    p = n(981631),
    C = n(388032),
    g = n(176598);
function O(e) {
    let { onClose: t, items: n, startingIndex: a, shouldRedactExplicitContent: O, shouldHideMediaOptions: y = !1, className: x, transitionState: T, ...v } = e,
        [D, I] = l.useState(null != a ? a : 0),
        [L, M] = l.useState(!1),
        [A, R] = l.useState(!0),
        N = l.useRef(null);
    l.useEffect(() => {
        if (null != t)
            return (
                d.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    d.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        l.useEffect(
            () => (
                T === r.Dvm.ENTERED && (c.Z.disable(), c.Z.enableTemp(u.P)),
                T === r.Dvm.HIDDEN && (c.Z.disable(), c.Z.enableTemp(u.v)),
                () => {
                    c.Z.disableTemp();
                }
            ),
            [T]
        );
    let b = l.useCallback((e) => {
            I(e), (0, _.yg)(_.uG.SELECTED_ITEM_CHANGE);
        }, []),
        j = l.useMemo(() => {
            var e, t, n;
            return {
                zoomed: L,
                setZoomed: M,
                accessoryVisibility: ((e = null != T ? T : void 0), (t = A), (n = L), (null != e || (e = r.Dvm.HIDDEN), e === r.Dvm.ENTERING || e >= r.Dvm.EXITING) ? h.UE.FORCE_HIDDEN : !n || t ? h.UE.VISIBLE : h.UE.INACTIVE)
            };
        }, [L, T, A]),
        P = l.useCallback(() => {
            var e;
            R(!0), (null !== (e = N.current) && void 0 !== e) || (N.current = new o.sW(1000, () => R(!1))), N.current.delay();
        }, []),
        k = l.useCallback(() => {
            P(), null == t || t();
        }, [P, t]),
        Z = n[D];
    return (0, i.jsx)(r.f6W, {
        theme: p.BRd.DARK,
        children: (e) =>
            (0, i.jsx)(r.Y0X, {
                hideShadow: !0,
                className: s()(g.carouselModal, e),
                transitionState: T,
                ...v,
                size: r.CgR.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: P,
                onMouseDown: k,
                'aria-label': C.intl.string(C.t.AMTX3t),
                children: (0, i.jsxs)(E.z.Provider, {
                    value: j,
                    children: [
                        (0, i.jsx)(f.Z, {
                            item: Z,
                            onClose: t
                        }),
                        (0, i.jsxs)(h.c7, {
                            children: [
                                (0, i.jsx)(S.ZP, {
                                    items: n,
                                    startIndex: D,
                                    onIndexChange: b,
                                    shouldRedactExplicitContent: O,
                                    shouldHideMediaOptions: y
                                }),
                                (0, i.jsx)(m.Z, {
                                    item: Z,
                                    hideMediaOptions: y
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
