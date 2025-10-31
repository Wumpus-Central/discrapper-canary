n.d(t, { Z: () => S }), n(704826), n(35282), n(539854), n(388685);
var i = n(951288);
n(647438);
var l = n(481060),
    s = n(296182),
    r = n(976853),
    a = n(902676),
    o = n(626135),
    u = n(49012),
    c = n(358085),
    d = n(998502),
    E = n(36998),
    f = n(981631),
    m = n(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let g = /^(tel|sms|mailto):([^?;]+)/;
function S(e, t, n, S) {
    let N = (0, r.Z)(null == n ? void 0 : n.getChannelId());
    if (
        !c.isPlatformEmbedded ||
        null == e ||
        "" === e ||
        N ||
        (null == S ? void 0 : S.shouldHideMediaOptions) === !0 ||
        !(0, s.Jj)(e)
    )
        return null;
    let A = (0, a.F)(e),
        D = (e) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, _({ hostname: A }, (0, E.v)())),
                d.ZP.copy(e),
                (0, l.showToast)((0, l.createToast)(m.intl.string(m.t["L/PwZf"]), l.ToastType.SUCCESS));
        },
        h = (n, i) => {
            let l = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, _({ hostname: A }, (0, E.v)())),
                (0, u.q)(
                    {
                        href: l,
                        trusted: (0, u.r)(e, t),
                        shouldConfirm: !0,
                    },
                    n,
                );
        },
        p = [],
        O = e.match(g);
    if (null != O) {
        let e = m.intl.string("mailto" === O[1] ? m.t.ZYLVKo : m.t["3zozoR"]);
        p.push(
            (0, i.jsx)(
                l.sNh,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        D(O[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === O[1] &&
                p.push(
                    (0, i.jsx)(
                        l.sNh,
                        {
                            id: "native-send-sms",
                            label: m.intl.string(m.t["+wbjMW"]),
                            action: (e) => h(e, !0),
                        },
                        "native-send-sms",
                    ),
                );
    }
    return [
        (0, i.jsx)(
            l.sNh,
            {
                id: "copy-native-link",
                label: m.intl.string(m.t.WqhZss),
                action: () => {
                    D(e);
                },
            },
            "copy-native-link",
        ),
        ...p,
        (0, i.jsx)(
            l.sNh,
            {
                id: "open-native-link",
                label: m.intl.string(m.t.wuRE8M),
                action: (e) => h(e),
            },
            "open-native-link",
        ),
    ];
}
