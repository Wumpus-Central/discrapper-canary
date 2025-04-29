n.d(t, { Z: () => p }), n(35282), n(539854), n(388685);
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
function h(e) {
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
function p(e, t, n, p) {
    let O = (0, a.Z)(null == n ? void 0 : n.getChannelId());
    if (!u.isPlatformEmbedded || null == e || '' === e || O || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || !(0, l.Jj)(e)) return null;
    let y = (0, o.F)(e),
        E = (e) => {
            s.default.track(g.rMx.CONTEXT_MENU_LINK_COPIED, h({ hostname: y }, (0, f.v)())), d.ZP.copy(e), (0, r.showToast)((0, r.createToast)(m.intl.string(m.t['L/PwZW']), r.ToastType.SUCCESS));
        },
        v = (n) => {
            s.default.track(g.rMx.CONTEXT_MENU_LINK_OPENED, h({ hostname: y }, (0, f.v)())),
                (0, c.q)(
                    {
                        href: e,
                        trusted: (0, c.r)(e, t),
                        shouldConfirm: !0
                    },
                    n
                );
        },
        j = [],
        S = e.match(b);
    if (null != S) {
        let e = m.intl.string('mailto' === S[1] ? m.t.ZYLVKi : m.t['3zozoa']);
        j.push(
            (0, i.jsx)(
                r.sNh,
                {
                    id: 'copy-native-contact',
                    label: e,
                    action: () => {
                        E(S[2]);
                    }
                },
                'copy-native-contact'
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
                    E(e);
                }
            },
            'copy-native-link'
        ),
        ...j,
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
