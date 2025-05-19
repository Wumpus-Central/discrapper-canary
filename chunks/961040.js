n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(570140),
    s = n(493773),
    a = n(82409),
    c = n(388032),
    u = n(745208);
function d(e) {
    let { children: t, popoutPosition: n, popoutAlign: d } = e,
        [h, p] = (0, i.useState)(!1),
        f = (0, i.useCallback)(() => {
            p(!1);
        }, []),
        g = (0, i.useCallback)(() => {
            p(!h);
        }, [h]);
    return (
        (0, s.ZP)(() => {
            let e = () => {
                p(!1);
            };
            return o.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => o.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e);
        }),
        (0, r.jsx)(l.yRy, {
            shouldShow: h,
            align: d,
            animation: l.yRy.Animation.FADE,
            animationPosition: 'left',
            position: n,
            onRequestClose: f,
            spacing: 0,
            renderPopout: function () {
                return (0, r.jsx)(l.VqE, {
                    'aria-label': c.intl.string(c.t.GSmTKC),
                    className: u.positionLayer,
                    children: (0, r.jsxs)('div', {
                        className: u.container,
                        children: [
                            (0, r.jsx)('div', {
                                className: u.backgroundContainer,
                                children: (0, r.jsx)('span', { className: u.background })
                            }),
                            (0, r.jsx)(a.Z, {})
                        ]
                    })
                });
            },
            children: (e, n) => {
                let { isShown: r } = n;
                return t(g, r, e);
            }
        })
    );
}
