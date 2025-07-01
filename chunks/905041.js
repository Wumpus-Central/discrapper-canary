(n.d(t, { Z: () => p }), n(704826), n(35282), n(539854), n(388685));
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(296182),
    s = n(976853),
    a = n(902676),
    o = n(626135),
    c = n(49012),
    d = n(358085),
    u = n(998502),
    g = n(36998),
    h = n(981631),
    f = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let E = /^(tel|sms|mailto):([^?;]+)/;
function p(e, t, n, p) {
    let v = (0, s.Z)(null == n ? void 0 : n.getChannelId());
    if (!d.isPlatformEmbedded || null == e || '' === e || v || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || !(0, r.Jj)(e)) return null;
    let N = (0, a.F)(e),
        O = (e) => {
            (o.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, m({ hostname: N }, (0, g.v)())), u.ZP.copy(e), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t['L/PwZW']), l.ToastType.SUCCESS)));
        },
        x = (n, i) => {
            let l = !0 === i ? e.replace('tel:', 'sms:') : e;
            (o.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, m({ hostname: N }, (0, g.v)())),
                (0, c.q)(
                    {
                        href: l,
                        trusted: (0, c.r)(e, t),
                        shouldConfirm: !0
                    },
                    n
                ));
        },
        S = [],
        D = e.match(E);
    if (null != D) {
        let e = f.intl.string('mailto' === D[1] ? f.t.ZYLVKi : f.t['3zozoa']);
        (S.push(
            (0, i.jsx)(
                l.sNh,
                {
                    id: 'copy-native-contact',
                    label: e,
                    action: () => {
                        O(D[2]);
                    }
                },
                'copy-native-contact'
            )
        ),
            'tel' === D[1] &&
                S.push(
                    (0, i.jsx)(
                        l.sNh,
                        {
                            id: 'native-send-sms',
                            label: f.intl.string(f.t['+wbjMT']),
                            action: (e) => x(e, !0)
                        },
                        'native-send-sms'
                    )
                ));
    }
    return [
        (0, i.jsx)(
            l.sNh,
            {
                id: 'copy-native-link',
                label: f.intl.string(f.t.WqhZsr),
                action: () => {
                    O(e);
                }
            },
            'copy-native-link'
        ),
        ...S,
        (0, i.jsx)(
            l.sNh,
            {
                id: 'open-native-link',
                label: f.intl.string(f.t.wuRE8P),
                action: (e) => x(e)
            },
            'open-native-link'
        )
    ];
}
