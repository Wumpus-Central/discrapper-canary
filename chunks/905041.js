e.d(n, { Z: () => m }), e(704826), e(35282), e(539854), e(388685);
var l = e(951288);
e(647438);
var i = e(481060),
    r = e(296182),
    a = e(976853),
    o = e(902676),
    s = e(626135),
    c = e(49012),
    u = e(358085),
    d = e(998502),
    f = e(36998),
    v = e(981631),
    h = e(388032);
function p(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = l);
            });
    }
    return t;
}
let b = /^(tel|sms|mailto):([^?;]+)/;
function m(t, n, e, m) {
    let y = (0, a.Z)(null == e ? void 0 : e.getChannelId());
    if (
        !u.isPlatformEmbedded ||
        null == t ||
        "" === t ||
        y ||
        (null == m ? void 0 : m.shouldHideMediaOptions) === !0 ||
        !(0, r.Jj)(t)
    )
        return null;
    let g = (0, o.F)(t),
        j = (t) => {
            s.default.track(v.rMx.CONTEXT_MENU_LINK_COPIED, p({ hostname: g }, (0, f.v)())),
                d.ZP.copy(t),
                (0, i.showToast)((0, i.createToast)(h.intl.string(h.t["L/PwZf"]), i.ToastType.SUCCESS));
        },
        O = (e, l) => {
            let i = !0 === l ? t.replace("tel:", "sms:") : t;
            s.default.track(v.rMx.CONTEXT_MENU_LINK_OPENED, p({ hostname: g }, (0, f.v)())),
                (0, c.q)(
                    {
                        href: i,
                        trusted: (0, c.r)(t, n),
                        shouldConfirm: !0,
                    },
                    e,
                );
        },
        k = [],
        C = t.match(b);
    if (null != C) {
        let t = h.intl.string("mailto" === C[1] ? h.t.ZYLVKo : h.t["3zozoR"]);
        k.push(
            (0, l.jsx)(
                i.sNh,
                {
                    id: "copy-native-contact",
                    label: t,
                    action: () => {
                        j(C[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === C[1] &&
                k.push(
                    (0, l.jsx)(
                        i.sNh,
                        {
                            id: "native-send-sms",
                            label: h.intl.string(h.t["+wbjMW"]),
                            action: (t) => O(t, !0),
                        },
                        "native-send-sms",
                    ),
                );
    }
    return [
        (0, l.jsx)(
            i.sNh,
            {
                id: "copy-native-link",
                label: h.intl.string(h.t.WqhZss),
                action: () => {
                    j(t);
                },
            },
            "copy-native-link",
        ),
        ...k,
        (0, l.jsx)(
            i.sNh,
            {
                id: "open-native-link",
                label: h.intl.string(h.t.wuRE8M),
                action: (t) => O(t),
            },
            "open-native-link",
        ),
    ];
}
