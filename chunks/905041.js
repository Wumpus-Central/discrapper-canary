e.d(n, {
    Z: function () {
        return v;
    }
});
var r = e(200651);
e(192379);
var l = e(481060),
    i = e(378409),
    a = e(976853),
    u = e(902676),
    o = e(626135),
    s = e(49012),
    d = e(358085),
    c = e(998502),
    f = e(36998),
    h = e(981631),
    p = e(388032);
function v(t, n, e, v) {
    let m = (0, a.Z)(null == e ? void 0 : e.getChannelId());
    if (!d.isPlatformEmbedded || null == t || '' === t || m || (null == v ? void 0 : v.shouldHideMediaOptions) === !0 || !(0, i.Jj)(t)) return null;
    let g = (0, u.F)(t),
        Z = (e) => {
            o.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: g,
                ...(0, f.v)()
            }),
                (0, s.q)(
                    {
                        href: t,
                        trusted: (0, s.r)(t, n),
                        shouldConfirm: !0
                    },
                    e
                );
        };
    return [
        (0, r.jsx)(
            l.MenuItem,
            {
                id: 'copy-native-link',
                label: p.intl.string(p.t.WqhZsr),
                action: () => {
                    o.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: g,
                        ...(0, f.v)()
                    }),
                        c.ZP.copy(t),
                        (0, l.showToast)((0, l.createToast)(p.intl.string(p.t['L/PwZW']), l.ToastType.SUCCESS));
                }
            },
            'copy-native-link'
        ),
        (0, r.jsx)(
            l.MenuItem,
            {
                id: 'open-native-link',
                label: p.intl.string(p.t.wuRE8P),
                action: (t) => Z(t)
            },
            'open-native-link'
        )
    ];
}
