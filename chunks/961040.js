n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(570140),
    s = n(493773),
    a = n(82409),
    c = n(388032),
    u = n(614147);
function d(e) {
    let { children: t, popoutPosition: n, popoutAlign: d, targetElementRef: h } = e,
        [p, f] = (0, i.useState)(!1),
        g = (0, i.useCallback)(() => {
            f(!1);
        }, []),
        m = (0, i.useCallback)(() => {
            f(!p);
        }, [p]);
    return (
        (0, s.ZP)(() => {
            let e = () => {
                f(!1);
            };
            return o.Z.subscribe('USER_SETTINGS_MODAL_OPEN', e), () => o.Z.unsubscribe('USER_SETTINGS_MODAL_OPEN', e);
        }),
        (0, r.jsx)(l.yRy, {
            targetElementRef: h,
            shouldShow: p,
            align: d,
            animation: l.yRy.Animation.FADE,
            animationPosition: 'left',
            position: n,
            onRequestClose: g,
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
                return t(m, r, e);
            }
        })
    );
}
