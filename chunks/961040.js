n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(570140),
    c = n(493773),
    u = n(585483),
    d = n(821020),
    h = n(736670),
    p = n(82409),
    f = n(981631),
    g = n(614147);
function m(e) {
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: o, spacing: p = 0 } = e,
        { isOpen: g, setIsOpen: m } = (0, h.Z)(),
        _ = i.useCallback(() => {
            m(!1);
        }, [m]),
        O = i.useCallback(() => {
            m(!g);
        }, [g, m]);
    ((0, c.ZP)(() => {
        let e = () => {
            m(!1);
        };
        return (a.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => a.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e));
    }),
        i.useEffect(() => (u.S.subscribe(f.CkL.TOGGLE_INBOX, O), () => void u.S.unsubscribe(f.CkL.TOGGLE_INBOX, O)), [O]));
    let { entrypoint: y } = d.Lk.useExperiment({ location: 'NotificationsInboxPopout' });
    return (0, r.jsx)(s.yRy, {
        targetElementRef: o,
        shouldShow: g,
        align: l,
        animation: y === d.u3.TITLE_BAR_LEFT ? s.yRy.Animation.TRANSLATE : s.yRy.Animation.FADE,
        animationPosition: y === d.u3.TITLE_BAR_LEFT ? 'bottom' : 'left',
        position: n,
        onRequestClose: _,
        spacing: p,
        renderPopout: b,
        children: (e, n) => {
            let { isShown: r } = n;
            return t(O, r, e);
        }
    });
}
function b() {
    let { entrypoint: e } = d.Lk.useExperiment({ location: 'NotificationsInboxPopout' });
    return (0, r.jsxs)('div', {
        className: o()(g.container, {
            [g.repositionLayerTitlebarPopout]: e === d.u3.TITLE_BAR_LEFT,
            [g.repositionLayerSidebarPopout]: e === d.u3.SERVER_RAIL_TOP
        }),
        children: [
            (0, r.jsx)('div', {
                className: g.backgroundContainer,
                children: (0, r.jsx)('span', { className: g.background })
            }),
            (0, r.jsx)(p.Z, {})
        ]
    });
}
