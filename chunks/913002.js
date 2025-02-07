n.d(t, { Z: () => g }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(906732),
    c = n(951394),
    d = n(695346),
    f = n(785717),
    _ = n(388032),
    p = n(119231);
let h = 300,
    m = (e) =>
        (0, o.ZDy)(async () => {
            let { default: t } = await n.e('31649').then(n.bind(n, 475613));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    sourceAnalyticsLocations: e,
                    location: 'UserProfileCustomStatusBubbleEditBar'
                });
        });
function g(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: r } = e,
        { analyticsLocations: g } = (0, u.ZP)(),
        { trackUserProfileAction: E } = (0, f.KZ)(),
        [v, y] = (0, s.Wu)([l.Z], () => [l.Z.useReducedMotion, l.Z.keyboardModeEnabled]),
        I = !n || v || y ? 0 : h,
        b = () => {
            E({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), m(g), null == r || r();
        },
        T = () => {
            E({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), d.Ok.updateSetting(void 0);
        };
    return (0, i.jsxs)(c.ZP, {
        className: a()(p.popover, {
            [p.visible]: t,
            [p.expandable]: n
        }),
        children: [
            (0, i.jsx)(o.DY3, {
                text: _.intl.string(_.t.bt75u7),
                delay: I,
                'aria-label': !1,
                children: (0, i.jsx)(c.zx, {
                    className: a()(p.button, p.left),
                    'aria-label': _.intl.string(_.t.QdHxoq),
                    'aria-haspopup': 'dialog',
                    onClick: b,
                    children: (0, i.jsx)(o.vdY, {
                        size: 'xs',
                        colorClass: p.icon
                    })
                })
            }),
            (0, i.jsx)(o.DY3, {
                text: _.intl.string(_.t.VkKicX),
                delay: I,
                'aria-label': !1,
                children: (0, i.jsx)(c.zx, {
                    className: a()(p.button, p.right),
                    'aria-label': _.intl.string(_.t.wfYTHR),
                    onClick: T,
                    children: (0, i.jsx)(o.XHJ, {
                        size: 'xs',
                        colorClass: p.icon
                    })
                })
            })
        ]
    });
}
