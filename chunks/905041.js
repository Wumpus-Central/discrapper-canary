n.d(t, { Z: () => m }), n(704826), n(35282), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(296182),
    a = n(976853),
    o = n(902676),
    s = n(626135),
    c = n(49012),
    u = n(358085),
    d = n(998502),
    f = n(36998),
    g = n(981631),
    b = n(388032);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let O = /^(tel|sms|mailto):([^?;]+)/;
function m(e, t, n, m) {
    let h = (0, a.Z)(null == n ? void 0 : n.getChannelId());
    if (!u.isPlatformEmbedded || null == e || '' === e || h || (null == m ? void 0 : m.shouldHideMediaOptions) === !0 || !(0, l.Jj)(e)) return null;
    let y = (0, o.F)(e),
        v = (e) => {
            s.default.track(g.rMx.CONTEXT_MENU_LINK_COPIED, p({ hostname: y }, (0, f.v)())), d.ZP.copy(e), (0, i.showToast)((0, i.createToast)(b.intl.string(b.t['L/PwZW']), i.ToastType.SUCCESS));
        },
        E = (n, r) => {
            let i = !0 === r ? e.replace('tel:', 'sms:') : e;
            s.default.track(g.rMx.CONTEXT_MENU_LINK_OPENED, p({ hostname: y }, (0, f.v)())),
                (0, c.q)(
                    {
                        href: i,
                        trusted: (0, c.r)(e, t),
                        shouldConfirm: !0
                    },
                    n
                );
        },
        j = [],
        S = e.match(O);
    if (null != S) {
        let e = b.intl.string('mailto' === S[1] ? b.t.ZYLVKi : b.t['3zozoa']);
        j.push(
            (0, r.jsx)(
                i.sNh,
                {
                    id: 'copy-native-contact',
                    label: e,
                    action: () => {
                        v(S[2]);
                    }
                },
                'copy-native-contact'
            )
        ),
            'tel' === S[1] &&
                j.push(
                    (0, r.jsx)(
                        i.sNh,
                        {
                            id: 'native-send-sms',
                            label: b.intl.string(b.t['+wbjMT']),
                            action: (e) => E(e, !0)
                        },
                        'native-send-sms'
                    )
                );
    }
    return [
        (0, r.jsx)(
            i.sNh,
            {
                id: 'copy-native-link',
                label: b.intl.string(b.t.WqhZsr),
                action: () => {
                    v(e);
                }
            },
            'copy-native-link'
        ),
        ...j,
        (0, r.jsx)(
            i.sNh,
            {
                id: 'open-native-link',
                label: b.intl.string(b.t.wuRE8P),
                action: (e) => E(e)
            },
            'open-native-link'
        )
    ];
}
