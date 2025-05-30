n.d(t, { Z: () => h }), n(704826), n(35282), n(539854), n(388685);
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(296182),
    a = n(976853),
    o = n(902676),
    s = n(626135),
    c = n(49012),
    u = n(358085),
    d = n(998502),
    f = n(36998),
    g = n(981631),
    m = n(388032);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let b = /^(tel|sms|mailto):([^?;]+)/;
function h(e, t, n, h) {
    let O = (0, a.Z)(null == n ? void 0 : n.getChannelId());
    if (!u.isPlatformEmbedded || null == e || '' === e || O || (null == h ? void 0 : h.shouldHideMediaOptions) === !0 || !(0, l.Jj)(e)) return null;
    let E = (0, o.F)(e),
        y = (e) => {
            s.default.track(g.rMx.CONTEXT_MENU_LINK_COPIED, p({ hostname: E }, (0, f.v)())), d.ZP.copy(e), (0, r.showToast)((0, r.createToast)(m.intl.string(m.t['L/PwZW']), r.ToastType.SUCCESS));
        },
        v = (n, i) => {
            let r = !0 === i ? e.replace('tel:', 'sms:') : e;
            s.default.track(g.rMx.CONTEXT_MENU_LINK_OPENED, p({ hostname: E }, (0, f.v)())),
                (0, c.q)(
                    {
                        href: r,
                        trusted: (0, c.r)(e, t),
                        shouldConfirm: !0
                    },
                    n
                );
        },
        S = [],
        j = e.match(b);
    if (null != j) {
        let e = m.intl.string('mailto' === j[1] ? m.t.ZYLVKi : m.t['3zozoa']);
        S.push(
            (0, i.jsx)(
                r.sNh,
                {
                    id: 'copy-native-contact',
                    label: e,
                    action: () => {
                        y(j[2]);
                    }
                },
                'copy-native-contact'
            )
        ),
            'tel' === j[1] &&
                S.push(
                    (0, i.jsx)(
                        r.sNh,
                        {
                            id: 'native-send-sms',
                            label: m.intl.string(m.t['+wbjMT']),
                            action: (e) => v(e, !0)
                        },
                        'native-send-sms'
                    )
                );
    }
    return [
        (0, i.jsx)(
            r.sNh,
            {
                id: 'copy-native-link',
                label: m.intl.string(m.t.WqhZsr),
                action: () => {
                    y(e);
                }
            },
            'copy-native-link'
        ),
        ...S,
        (0, i.jsx)(
            r.sNh,
            {
                id: 'open-native-link',
                label: m.intl.string(m.t.wuRE8P),
                action: (e) => v(e)
            },
            'open-native-link'
        )
    ];
}
