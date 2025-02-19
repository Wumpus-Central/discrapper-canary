t.d(e, { Z: () => b });
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(378409),
    o = t(976853),
    a = t(902676),
    u = t(626135),
    c = t(49012),
    d = t(358085),
    s = t(998502),
    v = t(36998),
    f = t(981631),
    h = t(388032);
function p(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                (l = t[e]),
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (n[e] = l);
            });
    }
    return n;
}
function b(n, e, t, b) {
    let O = (0, o.Z)(null == t ? void 0 : t.getChannelId());
    if (!d.isPlatformEmbedded || null == n || '' === n || O || (null == b ? void 0 : b.shouldHideMediaOptions) === !0 || !(0, i.Jj)(n)) return null;
    let _ = (0, a.F)(n),
        g = (t) => {
            u.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, p({ hostname: _ }, (0, v.v)())),
                (0, c.q)(
                    {
                        href: n,
                        trusted: (0, c.r)(n, e),
                        shouldConfirm: !0
                    },
                    t
                );
        };
    return [
        (0, l.jsx)(
            r.sNh,
            {
                id: 'copy-native-link',
                label: h.NW.string(h.t.WqhZsr),
                action: () => {
                    u.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, p({ hostname: _ }, (0, v.v)())), s.ZP.copy(n), (0, r.showToast)((0, r.createToast)(h.NW.string(h.t['L/PwZW']), r.ToastType.SUCCESS));
                }
            },
            'copy-native-link'
        ),
        (0, l.jsx)(
            r.sNh,
            {
                id: 'open-native-link',
                label: h.NW.string(h.t.wuRE8P),
                action: (n) => g(n)
            },
            'open-native-link'
        )
    ];
}
