e.d(n, { Z: () => N }), e(301563), e(653041), e(47120);
var l = e(200651);
e(192379);
var r = e(481060),
    i = e(378409),
    a = e(976853),
    o = e(902676),
    u = e(626135),
    c = e(49012),
    s = e(358085),
    d = e(998502),
    v = e(36998),
    f = e(981631),
    h = e(388032);
function p(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(e);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[n] = l);
            });
    }
    return t;
}
let b = /^(tel|sms|mailto):([^?;]+)/;
function N(t, n, e, N) {
    let O = (0, a.Z)(null == e ? void 0 : e.getChannelId());
    if (!s.isPlatformEmbedded || null == t || '' === t || O || (null == N ? void 0 : N.shouldHideMediaOptions) === !0 || !(0, i.Jj)(t)) return null;
    let g = (0, o.F)(t),
        y = (t) => {
            u.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, p({ hostname: g }, (0, v.v)())), d.ZP.copy(t), (0, r.showToast)((0, r.createToast)(h.NW.string(h.t['L/PwZW']), r.ToastType.SUCCESS));
        },
        _ = (e) => {
            u.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, p({ hostname: g }, (0, v.v)())),
                (0, c.q)(
                    {
                        href: t,
                        trusted: (0, c.r)(t, n),
                        shouldConfirm: !0
                    },
                    e
                );
        },
        m = [],
        Z = t.match(b);
    if (null != Z) {
        let t = h.NW.string('mailto' === Z[1] ? h.t.ZYLVKi : h.t['3zozoa']);
        m.push(
            (0, l.jsx)(
                r.sNh,
                {
                    id: 'copy-native-contact',
                    label: t,
                    action: () => {
                        y(Z[2]);
                    }
                },
                'copy-native-contact'
            )
        );
    }
    return [
        (0, l.jsx)(
            r.sNh,
            {
                id: 'copy-native-link',
                label: h.NW.string(h.t.WqhZsr),
                action: () => {
                    y(t);
                }
            },
            'copy-native-link'
        ),
        ...m,
        (0, l.jsx)(
            r.sNh,
            {
                id: 'open-native-link',
                label: h.NW.string(h.t.wuRE8P),
                action: (t) => _(t)
            },
            'open-native-link'
        )
    ];
}
