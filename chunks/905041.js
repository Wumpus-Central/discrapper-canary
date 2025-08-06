n.d(t, { Z: () => E }), n(704826), n(35282), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(296182),
    a = n(976853),
    s = n(902676),
    l = n(626135),
    c = n(49012),
    u = n(358085),
    d = n(998502),
    f = n(36998),
    _ = n(981631),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = /^(tel|sms|mailto):([^?;]+)/;
function E(e, t, n, h) {
    let E = (0, a.Z)(null == n ? void 0 : n.getChannelId());
    if (
        !u.isPlatformEmbedded ||
        null == e ||
        "" === e ||
        E ||
        (null == h ? void 0 : h.shouldHideMediaOptions) === !0 ||
        !(0, o.Jj)(e)
    )
        return null;
    let b = (0, s.F)(e),
        y = (e) => {
            l.default.track(_.rMx.CONTEXT_MENU_LINK_COPIED, m({ hostname: b }, (0, f.v)())),
                d.ZP.copy(e),
                (0, i.showToast)((0, i.createToast)(p.intl.string(p.t["L/PwZW"]), i.ToastType.SUCCESS));
        },
        O = () => {
            y(e);
        },
        v = (n, r) => {
            let i = !0 === r ? e.replace("tel:", "sms:") : e;
            l.default.track(_.rMx.CONTEXT_MENU_LINK_OPENED, m({ hostname: b }, (0, f.v)())),
                (0, c.q)(
                    {
                        href: i,
                        trusted: (0, c.r)(e, t),
                        shouldConfirm: !0,
                    },
                    n,
                );
        },
        I = [],
        T = e.match(g);
    if (null != T) {
        let e = () => {
                y(T[2]);
            },
            t = p.intl.string("mailto" === T[1] ? p.t.ZYLVKi : p.t["3zozoa"]);
        I.push(
            (0, r.jsx)(
                i.sNh,
                {
                    id: "copy-native-contact",
                    label: t,
                    action: e,
                },
                "copy-native-contact",
            ),
        ),
            "tel" === T[1] &&
                I.push(
                    (0, r.jsx)(
                        i.sNh,
                        {
                            id: "native-send-sms",
                            label: p.intl.string(p.t["+wbjMT"]),
                            action: (e) => v(e, !0),
                        },
                        "native-send-sms",
                    ),
                );
    }
    return [
        (0, r.jsx)(
            i.sNh,
            {
                id: "copy-native-link",
                label: p.intl.string(p.t.WqhZsr),
                action: O,
            },
            "copy-native-link",
        ),
        ...I,
        (0, r.jsx)(
            i.sNh,
            {
                id: "open-native-link",
                label: p.intl.string(p.t.wuRE8P),
                action: (e) => v(e),
            },
            "open-native-link",
        ),
    ];
}
