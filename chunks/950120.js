t.r(n),
    t.d(n, {
        default: function () {
            return E;
        }
    });
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(873546),
    s = t(481060),
    u = t(425493),
    c = t(376641),
    d = t(714338),
    f = t(585483),
    _ = t(288229),
    h = t(981631),
    p = t(388032),
    m = t(230569);
function C(e) {
    let { onClose: n } = e,
        t = r.useRef(null);
    return (0, a.jsx)('div', {
        className: m.mobileCloseWrapper,
        ref: t,
        children: (0, a.jsx)(s.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)('div', {
                children: (0, a.jsx)(u.Z, {
                    closeAction: n,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function E(e) {
    let { onClose: n, items: t, startingIndex: i, fit: u, shouldRedactExplicitContent: E, shouldHideMediaOptions: S, shouldAnimateCarousel: g, className: L, transitionState: O, ...x } = e,
        A = o.tq && null != n;
    return (
        r.useEffect(() => {
            if (null != n)
                return (
                    f.S.subscribe(h.CkL.MEDIA_MODAL_CLOSE, n),
                    () => {
                        f.S.unsubscribe(h.CkL.MEDIA_MODAL_CLOSE, n);
                    }
                );
        }, [n]),
        r.useEffect(
            () => (
                O === s.ModalTransitionState.ENTERED && (d.Z.disable(), d.Z.enableTemp(c.P)),
                O === s.ModalTransitionState.HIDDEN && (d.Z.disable(), d.Z.enableTemp(c.v)),
                () => {
                    d.Z.disableTemp();
                }
            ),
            [O]
        ),
        (0, a.jsxs)(s.ModalRoot, {
            hideShadow: !0,
            className: l()(m.carouselModal, L),
            transitionState: O,
            ...x,
            size: s.ModalSize.DYNAMIC,
            'aria-label': p.intl.string(p.t.AMTX3t),
            onClick: n,
            children: [
                A ? (0, a.jsx)(C, { onClose: n }) : null,
                (0, a.jsx)(_.Z, {
                    items: t,
                    startIndex: i,
                    fit: u,
                    shouldRedactExplicitContent: E,
                    shouldHideMediaOptions: S,
                    shouldAnimateCarousel: g
                })
            ]
        })
    );
}
