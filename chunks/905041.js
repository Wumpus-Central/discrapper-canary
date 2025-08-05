(e.d(n, { Z: () => m }), e(704826), e(35282), e(539854), e(388685));
var l = e(255367);
e(73800);
var i = e(481060),
    r = e(296182),
    a = e(976853),
    o = e(902676),
    s = e(626135),
    u = e(49012),
    c = e(358085),
    d = e(998502),
    v = e(36998),
    h = e(981631),
    f = e(388032);
function p(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(e);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[n] = l));
            }));
    }
    return t;
}
let b = /^(tel|sms|mailto):([^?;]+)/;
function m(t, n, e, m) {
    let g = (0, a.Z)(null == e ? void 0 : e.getChannelId());
    if (!c.isPlatformEmbedded || null == t || '' === t || g || (null == m ? void 0 : m.shouldHideMediaOptions) === !0 || !(0, r.Jj)(t)) return null;
    let O = (0, o.F)(t),
        y = (t) => {
            (s.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, p({ hostname: O }, (0, v.v)())), d.ZP.copy(t), (0, i.showToast)((0, i.createToast)(f.intl.string(f.t['L/PwZW']), i.ToastType.SUCCESS)));
        },
        _ = (e, l) => {
            let i = !0 === l ? t.replace('tel:', 'sms:') : t;
            (s.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, p({ hostname: O }, (0, v.v)())),
                (0, u.q)(
                    {
                        href: i,
                        trusted: (0, u.r)(t, n),
                        shouldConfirm: !0
                    },
                    e
                ));
        },
        Z = [],
        C = t.match(b);
    if (null != C) {
        let t = f.intl.string('mailto' === C[1] ? f.t.ZYLVKi : f.t['3zozoa']);
        (Z.push(
            (0, l.jsx)(
                i.sNh,
                {
                    id: 'copy-native-contact',
                    label: t,
                    action: () => {
                        y(C[2]);
                    }
                },
                'copy-native-contact'
            )
        ),
            'tel' === C[1] &&
                Z.push(
                    (0, l.jsx)(
                        i.sNh,
                        {
                            id: 'native-send-sms',
                            label: f.intl.string(f.t['+wbjMT']),
                            action: (t) => _(t, !0)
                        },
                        'native-send-sms'
                    )
                ));
    }
    return [
        (0, l.jsx)(
            i.sNh,
            {
                id: 'copy-native-link',
                label: f.intl.string(f.t.WqhZsr),
                action: () => {
                    y(t);
                }
            },
            'copy-native-link'
        ),
        ...Z,
        (0, l.jsx)(
            i.sNh,
            {
                id: 'open-native-link',
                label: f.intl.string(f.t.wuRE8P),
                action: (t) => _(t)
            },
            'open-native-link'
        )
    ];
}
