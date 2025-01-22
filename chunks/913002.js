r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(906732),
    f = r(951394),
    p = r(695346),
    h = r(785717),
    _ = r(388032),
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
        { analyticsLocations: o } = (0, d.ZP)(),
        { trackUserProfileAction: v } = (0, h.KZ)(),
        [y, b] = (0, l.Wu)([c.Z], () => [c.Z.useReducedMotion, c.Z.keyboardModeEnabled]),
        I = !r || y || b ? 0 : g,
        T = () => {
            v({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), E(o), null == i || i();
        },
        S = () => {
            v({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), p.Ok.updateSetting(void 0);
        };
    return (0, a.jsxs)(f.ZP, {
        className: s()(m.popover, {
            [m.visible]: n,
            [m.expandable]: r
        }),
        children: [
            (0, a.jsx)(u.TooltipContainer, {
                text: _.intl.string(_.t.bt75u7),
                delay: I,
                'aria-label': !1,
                children: (0, a.jsx)(f.zx, {
                    className: s()(m.button, m.left),
                    'aria-label': _.intl.string(_.t.QdHxoq),
                    'aria-haspopup': 'dialog',
                    onClick: T,
                    children: (0, a.jsx)(u.PencilIcon, {
                        size: 'xs',
                        colorClass: m.icon
                    })
                })
            }),
            (0, a.jsx)(u.TooltipContainer, {
                text: _.intl.string(_.t.VkKicX),
                delay: I,
                'aria-label': !1,
                children: (0, a.jsx)(f.zx, {
                    className: s()(m.button, m.right),
                    'aria-label': _.intl.string(_.t.wfYTHR),
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
