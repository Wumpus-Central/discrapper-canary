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
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: b, spacing: _ = 0 } = e,
        { isOpen: O, setIsOpen: y } = (0, h.Z)(),
        v = i.useCallback(() => {
            y(!1);
        }, [y]),
        C = i.useCallback(() => {
            y(!O);
        }, [O, y]);
    ((0, c.ZP)(() => {
        let e = () => {
            y(!1);
        };
        return (s.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => s.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e));
    }),
        i.useEffect(() => (u.S.subscribe(f.CkL.TOGGLE_INBOX, C), () => void u.S.unsubscribe(f.CkL.TOGGLE_INBOX, C)), [C]));
    let { entrypoint: j } = d.Lk.useExperiment({ location: 'NotificationsInboxPopout' });
    return (0, r.jsx)(a.yRy, {
        targetElementRef: b,
        shouldShow: O,
        align: l,
        animation: j === d.u3.TITLE_BAR_LEFT ? a.yRy.Animation.TRANSLATE : a.yRy.Animation.FADE,
        animationPosition: j === d.u3.TITLE_BAR_LEFT ? 'bottom' : 'left',
        position: n,
        onRequestClose: v,
        spacing: _,
        renderPopout: function () {
            return (0, r.jsx)(a.VqE, {
                'aria-label': g.intl.string(g.t.GSmTKC),
                className: j !== d.u3.TITLE_BAR_LEFT ? m.repositionLayerSidebarPopout : void 0,
                children: (0, r.jsxs)('div', {
                    className: o()(m.container, { [m.titleBarEntrypointVariant]: j === d.u3.TITLE_BAR_LEFT }),
                    children: [
                        (0, r.jsx)('div', {
                            className: m.backgroundContainer,
                            children: (0, r.jsx)('span', { className: m.background })
                        }),
                        (0, r.jsx)(p.Z, {})
                    ]
                })
            });
        },
        children: (e, n) => {
            let { isShown: r } = n;
            return t(C, r, e);
        }
    });
}
