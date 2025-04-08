n.d(t, { Z: () => p }), n(35282), n(539854), n(388685);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(378409),
    l = n(976853),
    o = n(902676),
    s = n(626135),
    c = n(49012),
    u = n(358085),
    d = n(998502),
    f = n(36998),
    g = n(981631),
    m = n(388032);
function b(e) {
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
let h = /^(tel|sms|mailto):([^?;]+)/;
function p(e, t, n, p) {
    let O = (0, l.Z)(null == n ? void 0 : n.getChannelId());
    if (!u.isPlatformEmbedded || null == e || '' === e || O || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || !(0, a.Jj)(e)) return null;
    let y = (0, o.F)(e),
        E = (e) => {
            s.default.track(g.rMx.CONTEXT_MENU_LINK_COPIED, b({ hostname: y }, (0, f.v)())), d.ZP.copy(e), (0, i.showToast)((0, i.createToast)(m.NW.string(m.t['L/PwZW']), i.ToastType.SUCCESS));
        },
        N = (n) => {
            s.default.track(g.rMx.CONTEXT_MENU_LINK_OPENED, b({ hostname: y }, (0, f.v)())),
                (0, c.q)(
                    {
                        href: e,
                        trusted: (0, c.r)(e, t),
                        shouldConfirm: !0
                    },
                    n
                );
        },
        v = [],
        j = e.match(h);
    if (null != j) {
        let e = m.NW.string('mailto' === j[1] ? m.t.ZYLVKi : m.t['3zozoa']);
        v.push(
            (0, r.jsx)(
                i.sNh,
                {
                    id: 'copy-native-contact',
                    label: e,
                    action: () => {
                        E(j[2]);
                    }
                },
                'copy-native-contact'
            )
        );
    }
    return [
        (0, r.jsx)(
            i.sNh,
            {
                id: 'copy-native-link',
                label: m.NW.string(m.t.WqhZsr),
                action: () => {
                    E(e);
                }
            },
            'copy-native-link'
        ),
        ...v,
        (0, r.jsx)(
            i.sNh,
            {
                id: 'open-native-link',
                label: m.NW.string(m.t.wuRE8P),
                action: (e) => N(e)
            },
            'open-native-link'
        )
    ];
}
