a.r(t), a.d(t, { default: () => y }), a(47120);
var n = a(200651),
    i = a(192379),
    s = a(120356),
    o = a.n(s),
    l = a(846519),
    r = a(481060),
    c = a(376641),
    d = a(714338),
    u = a(585483),
    m = a(254109),
    _ = a(212459),
    p = a(73249),
    g = a(730606),
    h = a(369171),
    C = a(860153),
    S = a(981631),
    E = a(388032),
    T = a(854092);
function y(e) {
    let { onClose: t, items: a, startingIndex: s, shouldRedactExplicitContent: y, shouldHideMediaOptions: v = !1, className: x, transitionState: f, ...I } = e,
        [M, O] = i.useState(null != s ? s : 0),
        [A, b] = i.useState(!1),
        [D, L] = i.useState(!0),
        R = i.useRef(null);
    i.useEffect(() => {
        if (null != t)
            return (
                u.S.subscribe(S.CkL.MEDIA_MODAL_CLOSE, t),
                () => {
                    u.S.unsubscribe(S.CkL.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]),
        i.useEffect(
            () => (
                f === r.Dvm.ENTERED && (d.Z.disable(), d.Z.enableTemp(c.P)),
                f === r.Dvm.HIDDEN && (d.Z.disable(), d.Z.enableTemp(c.v)),
                () => {
                    d.Z.disableTemp();
                }
            ),
            [f]
        );
    let N = i.useCallback((e) => {
            O(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        }, []),
        P = i.useMemo(() => {
            var e, t, a;
            return {
                zoomed: A,
                setZoomed: b,
                accessoryVisibility: ((e = null != f ? f : void 0), (t = D), (a = A), (null != e || (e = r.Dvm.HIDDEN), e === r.Dvm.ENTERING || e >= r.Dvm.EXITING) ? h.UE.FORCE_HIDDEN : !a || t ? h.UE.VISIBLE : h.UE.INACTIVE)
            };
        }, [A, f, D]),
        k = i.useCallback(() => {
            var e;
            L(!0), (null !== (e = R.current) && void 0 !== e) || (R.current = new l.sW(1000, () => L(!1))), R.current.delay();
        }, []),
        j = i.useCallback(() => {
            k(), null == t || t();
        }, [k, t]),
        B = a[M];
    return (0, n.jsx)(r.f6W, {
        theme: S.BRd.DARK,
        children: (e) =>
            (0, n.jsx)(r.Y0X, {
                hideShadow: !0,
                className: o()(T.carouselModal, e),
                transitionState: f,
                ...I,
                size: r.CgR.DYNAMIC,
                fullscreenOnMobile: !1,
                onMouseMove: k,
                onMouseDown: j,
                'aria-label': E.intl.string(E.t.AMTX3t),
                children: (0, n.jsxs)(_.z.Provider, {
                    value: P,
                    children: [
                        (0, n.jsx)(C.Z, {
                            item: B,
                            onClose: t
                        }),
                        (0, n.jsxs)(h.c7, {
                            children: [
                                (0, n.jsx)(g.ZP, {
                                    items: a,
                                    startIndex: M,
                                    onIndexChange: N,
                                    shouldRedactExplicitContent: y,
                                    shouldHideMediaOptions: v
                                }),
                                (0, n.jsx)(p.Z, {
                                    item: B,
                                    hideMediaOptions: v
                                })
                            ]
                        })
                    ]
                })
            })
    });
}
