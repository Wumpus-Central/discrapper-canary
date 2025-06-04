r.d(t, { Z: () => Z }), r(388685);
var n = r(255367),
    i = r(73800),
    c = r(990547),
    o = r(442837),
    l = r(544891),
    a = r(481060),
    s = r(893776),
    u = r(37234),
    f = r(809206),
    p = r(110924),
    d = r(714338),
    y = r(213609),
    g = r(429142),
    m = r(144114),
    b = r(210887),
    h = r(23434),
    O = r(1964),
    j = r(762756),
    E = r(308569),
    v = r(981631),
    P = r(815660),
    w = r(388032);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function Z() {
    let { action: e, theme: t } = (0, o.cj)([h.Z, b.Z], () => ({
            action: h.Z.getAction(),
            theme: b.Z.theme
        })),
        Z = O.Z.getVerificationTypes(e),
        [x, R] = i.useState(0),
        L = (0, p.Z)(Z);
    (0, y.Z)(
        {
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: Z[0],
                verification_types: Z
            }
        },
        {},
        [Z.toString()]
    );
    let N = () => {
            (0, f.FD)(),
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await r.e('35401').then(r.bind(r, 284549));
                        return (t) => (0, n.jsx)(e, A({}, t));
                    },
                    {
                        modalKey: E.F0,
                        Layer: g.ZP
                    }
                );
        },
        k = () => {
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(r.bind(r, 607018));
                    return (t) => (0, n.jsx)(e, A({ reason: m.L.USER_ACTION_REQUIRED }, t));
                },
                {
                    modalKey: P.M,
                    Layer: g.ZP
                }
            );
        };
    return (
        i.useEffect(
            () => (
                d.Z.disable(),
                () => {
                    d.Z.enable();
                }
            ),
            []
        ),
        i.useEffect(() => {
            (null == L ? void 0 : L[0]) === v.PUi.PHONE &&
                (null == Z ? void 0 : Z[0]) === v.PUi.EMAIL &&
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(r.bind(r, 468026));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                C(A({}, t), {
                                    title: w.intl.string(w.t.KLnLIC),
                                    body: w.intl.string(w.t.XGbCq6),
                                    confirmText: w.intl.string(w.t['3oK4q6'])
                                })
                            );
                    },
                    {
                        modalKey: E.HR,
                        Layer: g.ZP,
                        onCloseCallback: N
                    }
                );
        }, [Z, L]),
        (0, n.jsx)(j.Z, {
            types: Z,
            captchaKey: x,
            onCaptchaVerify: (e) => {
                l.tn
                    .post({
                        url: v.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(u.xf, () => {
                        R((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === v.PUi.EMAIL_OR_PHONE || e === v.PUi.EMAIL || e === v.PUi.REVERIFY_EMAIL ? N() : k();
            },
            onLogout: () => {
                (0, a.ZDy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(r.bind(r, 481060));
                        return (r) =>
                            (0, n.jsx)(
                                e,
                                C(
                                    A(
                                        {
                                            header: w.intl.string(w.t['2jxGen']),
                                            confirmText: w.intl.string(w.t['2jxGen']),
                                            cancelText: w.intl.string(w.t['ETE/oK']),
                                            onConfirm: () => s.Z.logout('verification')
                                        },
                                        r
                                    ),
                                    {
                                        children: (0, n.jsx)(t, {
                                            variant: 'text-md/normal',
                                            children: w.intl.string(w.t.SUnWBA)
                                        })
                                    }
                                )
                            );
                    },
                    { Layer: g.ZP }
                );
            }
        })
    );
}
