e.d(t, {
    Z: function () {
        return p;
    }
});
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(378409),
    u = e(976853),
    a = e(902676),
    o = e(626135),
    d = e(49012),
    c = e(358085),
    s = e(998502),
    v = e(36998),
    f = e(981631),
    h = e(388032);
function p(n, t, e, p) {
    let _ = (0, u.Z)(null == e ? void 0 : e.getChannelId());
    if (!c.isPlatformEmbedded || null == n || '' === n || _ || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || !(0, r.Jj)(n)) return null;
    let C = (0, a.F)(n),
        Z = (e) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: C,
                ...(0, v.v)()
            }),
                (0, d.q)(
                    {
                        href: n,
                        trusted: (0, d.r)(n, t),
                        shouldConfirm: !0
                    },
                    e
                );
        };
    return [
        (0, l.jsx)(
            i.MenuItem,
            {
                id: 'copy-native-link',
                label: h.intl.string(h.t.WqhZsr),
                action: () => {
                    o.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: C,
                        ...(0, v.v)()
                    }),
                        s.ZP.copy(n),
                        (0, i.showToast)((0, i.createToast)(h.intl.string(h.t['L/PwZW']), i.ToastType.SUCCESS));
                }
            },
            'copy-native-link'
        ),
        (0, l.jsx)(
            i.MenuItem,
            {
                id: 'open-native-link',
                label: h.intl.string(h.t.wuRE8P),
                action: (n) => Z(n)
            },
            'open-native-link'
        )
    ];
}
