(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(570140),
    a = n(493773),
    s = n(585483),
    c = n(82409),
    u = n(981631),
    d = n(388032),
    h = n(614147);
function p(e) {
    let { children: t, popoutPosition: n, popoutAlign: p, targetElementRef: f } = e,
        [g, m] = i.useState(!1),
        b = i.useCallback(() => {
            m(!1);
        }, []),
        _ = i.useCallback(() => {
            m(!g);
        }, [g]);
    return (
        (0, a.ZP)(() => {
            let e = () => {
                m(!1);
            };
            return (o.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => o.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e));
        }),
        i.useEffect(() => (s.S.subscribe(u.CkL.TOGGLE_INBOX, _), () => void s.S.unsubscribe(u.CkL.TOGGLE_INBOX, _)), [_]),
        (0, r.jsx)(l.yRy, {
            targetElementRef: f,
            shouldShow: g,
            align: p,
            animation: l.yRy.Animation.FADE,
            animationPosition: 'left',
            position: n,
            onRequestClose: b,
            spacing: 0,
            renderPopout: function () {
                return (0, r.jsx)(l.VqE, {
                    'aria-label': d.intl.string(d.t.GSmTKC),
                    className: h.positionLayer,
                    children: (0, r.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, r.jsx)('div', {
                                className: h.backgroundContainer,
                                children: (0, r.jsx)('span', { className: h.background })
                            }),
                            (0, r.jsx)(c.Z, {})
                        ]
                    })
                });
            },
            children: (e, n) => {
                let { isShown: r } = n;
                return t(_, r, e);
            }
        })
    );
}
