r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(906732),
    f = r(951394),
    _ = r(695346),
    h = r(785717),
    p = r(388032),
    m = r(119231);
let g = 300,
    E = (e) =>
        (0, u.openModalLazy)(async () => {
            let { default: n } = await r.e('51714').then(r.bind(r, 211065));
            return (r) =>
                (0, a.jsx)(n, {
                    ...r,
                    sourceAnalyticsLocations: e
                });
        });
function v(e) {
    let { isVisible: n, isExpandable: r, onCloseProfile: i } = e,
        { analyticsLocations: s } = (0, d.ZP)(),
        { trackUserProfileAction: v } = (0, h.KZ)(),
        [I, T] = (0, l.Wu)([c.Z], () => [c.Z.useReducedMotion, c.Z.keyboardModeEnabled]),
        b = !r || I || T ? 0 : g,
        y = () => {
            v({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), E(s), null == i || i();
        },
        S = () => {
            v({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), _.Ok.updateSetting(void 0);
        };
    return (0, a.jsxs)(f.ZP, {
        className: o()(m.popover, {
            [m.visible]: n,
            [m.expandable]: r
        }),
        children: [
            (0, a.jsx)(u.TooltipContainer, {
                text: p.intl.string(p.t.bt75u7),
                delay: b,
                'aria-label': !1,
                children: (0, a.jsx)(f.zx, {
                    className: o()(m.button, m.left),
                    'aria-label': p.intl.string(p.t.QdHxoq),
                    'aria-haspopup': 'dialog',
                    onClick: y,
                    children: (0, a.jsx)(u.PencilIcon, {
                        size: 'xs',
                        colorClass: m.icon
                    })
                })
            }),
            (0, a.jsx)(u.TooltipContainer, {
                text: p.intl.string(p.t.VkKicX),
                delay: b,
                'aria-label': !1,
                children: (0, a.jsx)(f.zx, {
                    className: o()(m.button, m.right),
                    'aria-label': p.intl.string(p.t.wfYTHR),
                    onClick: S,
                    children: (0, a.jsx)(u.TrashIcon, {
                        size: 'xs',
                        colorClass: m.icon
                    })
                })
            })
        ]
    });
}
