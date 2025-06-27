n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(990547),
    l = n(442837),
    o = n(544891),
    c = n(481060),
    s = n(893776),
    u = n(37234),
    d = n(809206),
    f = n(110924),
    p = n(714338),
    m = n(213609),
    h = n(429142),
    y = n(144114),
    g = n(210887),
    b = n(23434),
    E = n(1964),
    v = n(762756),
    j = n(308569),
    O = n(981631),
    A = n(815660),
    w = n(388032);
function _(e) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P() {
    let { action: e, theme: t } = (0, l.cj)([b.Z, g.Z], () => ({
            action: b.Z.getAction(),
            theme: g.Z.theme
        })),
        P = E.Z.getVerificationTypes(e),
        [N, R] = i.useState(0),
        k = (0, f.Z)(P);
    (0, m.Z)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: P[0],
                verification_types: P
            }
        },
        {},
        [P.toString()]
    );
    let S = () => {
            (0, d.FD)(),
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await n.e('35401').then(n.bind(n, 284549));
                        return (t) => (0, r.jsx)(e, _({}, t));
                    },
                    {
                        modalKey: j.F0,
                        Layer: h.ZP
                    }
                );
        },
        C = () => {
            (0, c.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                    return (t) => (0, r.jsx)(e, _({ reason: y.L.USER_ACTION_REQUIRED }, t));
                },
                {
                    modalKey: A.M,
                    Layer: h.ZP
                }
            );
        };
    return (
        i.useEffect(
            () => (
                p.Z.disable(),
                () => {
                    p.Z.enable();
                }
            ),
            []
        ),
        i.useEffect(() => {
            (null == k ? void 0 : k[0]) === O.PUi.PHONE &&
                (null == P ? void 0 : P[0]) === O.PUi.EMAIL &&
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                x(_({}, t), {
                                    title: w.intl.string(w.t.KLnLIC),
                                    body: w.intl.string(w.t.XGbCq6),
                                    confirmText: w.intl.string(w.t['3oK4q6'])
                                })
                            );
                    },
                    {
                        modalKey: j.HR,
                        Layer: h.ZP,
                        onCloseCallback: S
                    }
                );
        }, [P, k]),
        (0, r.jsx)(v.Z, {
            types: P,
            captchaKey: N,
            onCaptchaVerify: (e) => {
                o.tn
                    .post({
                        url: O.ANM.CAPTCHA,
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
                e === O.PUi.EMAIL_OR_PHONE || e === O.PUi.EMAIL || e === O.PUi.REVERIFY_EMAIL ? S() : C();
            },
            onLogout: () => {
                (0, c.ZDy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                x(
                                    _(
                                        {
                                            header: w.intl.string(w.t['2jxGen']),
                                            confirmText: w.intl.string(w.t['2jxGen']),
                                            cancelText: w.intl.string(w.t['ETE/oK']),
                                            onConfirm: () => s.Z.logout('verification')
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, r.jsx)(t, {
                                            variant: 'text-md/normal',
                                            children: w.intl.string(w.t.SUnWBA)
                                        })
                                    }
                                )
                            );
                    },
                    { Layer: h.ZP }
                );
            }
        })
    );
}
