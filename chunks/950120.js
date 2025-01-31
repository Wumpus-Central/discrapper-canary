t.r(n), t.d(n, { default: () => E });
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(873546),
    s = t(481060),
    c = t(425493),
    u = t(376641),
    d = t(714338),
    _ = t(585483),
    h = t(288229),
    f = t(981631),
    p = t(388032),
    C = t(230569);
function m(e) {
    let { onClose: n } = e,
        t = i.useRef(null);
    return (0, a.jsx)('div', {
        className: C.mobileCloseWrapper,
        ref: t,
        children: (0, a.jsx)(s.JcV, {
            containerRef: t,
            children: (0, a.jsx)('div', {
                children: (0, a.jsx)(c.Z, {
                    closeAction: n,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function E(e) {
    let { onClose: n, items: t, startingIndex: r, fit: c, shouldRedactExplicitContent: E, shouldHideMediaOptions: S, shouldAnimateCarousel: g, className: L, transitionState: x, ...O } = e,
        v = o.tq && null != n;
    return (
        i.useEffect(() => {
            if (null != n)
                return (
                    _.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, n),
                    () => {
                        _.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, n);
                    }
                );
        }, [n]),
        i.useEffect(
            () => (
                x === s.Dvm.ENTERED && (d.Z.disable(), d.Z.enableTemp(u.P)),
                x === s.Dvm.HIDDEN && (d.Z.disable(), d.Z.enableTemp(u.v)),
                () => {
                    d.Z.disableTemp();
                }
            ),
            [x]
        ),
        (0, a.jsxs)(s.Y0X, {
            hideShadow: !0,
            className: l()(C.carouselModal, L),
            transitionState: x,
            ...O,
            size: s.CgR.DYNAMIC,
            'aria-label': p.intl.string(p.t.AMTX3t),
            onClick: n,
            children: [
                v ? (0, a.jsx)(m, { onClose: n }) : null,
                (0, a.jsx)(h.Z, {
                    items: t,
                    startIndex: r,
                    fit: c,
                    shouldRedactExplicitContent: E,
                    shouldHideMediaOptions: S,
                    shouldAnimateCarousel: g
                })
            ]
        })
    );
}
