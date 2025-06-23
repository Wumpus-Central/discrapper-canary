n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(570140),
    s = n(493773),
    a = n(585483),
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
        O = i.useCallback(() => {
            m(!g);
        }, [g]);
    return (
        (0, s.ZP)(() => {
            let e = () => {
                m(!1);
            };
            return o.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => o.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e);
        }),
        i.useEffect(() => (a.S.subscribe(u.CkL.TOGGLE_INBOX, O), () => void a.S.unsubscribe(u.CkL.TOGGLE_INBOX, O)), [O]),
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
                return t(O, r, e);
            }
        })
    );
}
