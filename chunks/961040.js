n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(570140),
    c = n(493773),
    u = n(585483),
    d = n(821020),
    h = n(736670),
    p = n(82409),
    f = n(981631),
    g = n(388032),
    m = n(614147);
function b(e) {
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: o, spacing: p = 0 } = e,
        { isOpen: m, setIsOpen: b } = (0, h.Z)(),
        O = i.useCallback(() => {
            b(!1);
        }, [b]),
        y = i.useCallback(() => {
            b(!m);
        }, [m, b]);
    ((0, c.ZP)(() => {
        let e = () => {
            b(!1);
        };
        return (s.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => s.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e));
    }),
        i.useEffect(() => (u.S.subscribe(f.CkL.TOGGLE_INBOX, y), () => void u.S.unsubscribe(f.CkL.TOGGLE_INBOX, y)), [y]));
    let { entrypoint: C } = d.Lk.useExperiment({ location: 'NotificationsInboxPopout' });
    return (0, r.jsx)(a.yRy, {
        targetElementRef: o,
        shouldShow: m,
        align: l,
        animation: C === d.u3.TITLE_BAR_LEFT ? a.yRy.Animation.TRANSLATE : a.yRy.Animation.FADE,
        animationPosition: C === d.u3.TITLE_BAR_LEFT ? 'bottom' : 'left',
        position: n,
        onRequestClose: O,
        spacing: p,
        renderPopout: () =>
            (0, r.jsx)(a.VqE, {
                'aria-label': g.intl.string(g.t.GSmTKC),
                children: (0, r.jsx)(_, {})
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(y, r, e);
        }
    });
}
function _() {
    let { entrypoint: e } = d.Lk.useExperiment({ location: 'NotificationsInboxPopout' });
    return (0, r.jsxs)('div', {
        className: o()(m.container, {
            [m.repositionLayerTitlebarPopout]: e === d.u3.TITLE_BAR_LEFT,
            [m.repositionLayerSidebarPopout]: e === d.u3.SERVER_RAIL_TOP
        }),
        children: [
            (0, r.jsx)('div', {
                className: m.backgroundContainer,
                children: (0, r.jsx)('span', { className: m.background })
            }),
            (0, r.jsx)(p.Z, {})
        ]
    });
}
