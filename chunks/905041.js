l.d(t, { Z: () => _ });
var e = l(200651);
l(192379);
var i = l(481060),
    a = l(378409),
    r = l(976853),
    o = l(902676),
    u = l(626135),
    d = l(49012),
    s = l(358085),
    c = l(998502),
    v = l(36998),
    h = l(981631),
    p = l(388032);
function _(n, t, l, _) {
    let f = (0, r.Z)(null == l ? void 0 : l.getChannelId());
    if (!s.isPlatformEmbedded || null == n || '' === n || f || (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 || !(0, a.Jj)(n)) return null;
    let C = (0, o.F)(n),
        Z = (l) => {
            u.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: C,
                ...(0, v.v)()
            }),
                (0, d.q)(
                    {
                        href: n,
                        trusted: (0, d.r)(n, t),
                        shouldConfirm: !0
                    },
                    l
                );
        };
    return [
        (0, e.jsx)(
            i.sNh,
            {
                id: 'copy-native-link',
                label: p.intl.string(p.t.WqhZsr),
                action: () => {
                    u.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: C,
                        ...(0, v.v)()
                    }),
                        c.ZP.copy(n),
                        (0, i.showToast)((0, i.createToast)(p.intl.string(p.t['L/PwZW']), i.ToastType.SUCCESS));
                }
            },
            'copy-native-link'
        ),
        (0, e.jsx)(
            i.sNh,
            {
                id: 'open-native-link',
                label: p.intl.string(p.t.wuRE8P),
                action: (n) => Z(n)
            },
            'open-native-link'
        )
    ];
}
