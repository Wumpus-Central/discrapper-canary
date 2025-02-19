n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(990547),
    o = n(442837),
    a = n(544891),
    s = n(481060),
    c = n(893776),
    u = n(37234),
    d = n(809206),
    p = n(110924),
    h = n(714338),
    g = n(213609),
    f = n(429142),
    m = n(144114),
    b = n(210887),
    _ = n(23434),
    E = n(1964),
    O = n(762756),
    N = n(308569),
    v = n(981631),
    y = n(815660),
    I = n(388032);
function C(e) {
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
function S(e, t) {
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
function T() {
    let { action: e, theme: t } = (0, o.cj)([_.Z, b.Z], () => ({
            action: _.Z.getAction(),
            theme: b.Z.theme
        })),
        T = E.Z.getVerificationTypes(e),
        [P, j] = i.useState(0),
        A = (0, p.Z)(T);
    (0, g.Z)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: T[0],
                verification_types: T
            }
        },
        {},
        [T.toString()]
    );
    let Z = () => {
            (0, d.FD)(),
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e('35401').then(n.bind(n, 284549));
                        return (t) => (0, r.jsx)(e, C({}, t));
                    },
                    {
                        modalKey: N.F0,
                        Layer: f.ZP
                    }
                );
        },
        x = () => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                    return (t) => (0, r.jsx)(e, C({ reason: m.L.USER_ACTION_REQUIRED }, t));
                },
                {
                    modalKey: y.M,
                    Layer: f.ZP
                }
            );
        };
    return (
        i.useEffect(
            () => (
                h.Z.disable(),
                () => {
                    h.Z.enable();
                }
            ),
            []
        ),
        i.useEffect(() => {
            (null == A ? void 0 : A[0]) === v.PUi.PHONE &&
                (null == T ? void 0 : T[0]) === v.PUi.EMAIL &&
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                S(C({}, t), {
                                    title: I.NW.string(I.t.KLnLIC),
                                    body: I.NW.string(I.t.XGbCq6),
                                    confirmText: I.NW.string(I.t['3oK4q6'])
                                })
                            );
                    },
                    {
                        modalKey: N.HR,
                        Layer: f.ZP,
                        onCloseCallback: Z
                    }
                );
        }, [T, A]),
        (0, r.jsx)(O.Z, {
            types: T,
            captchaKey: P,
            onCaptchaVerify: (e) => {
                a.tn
                    .post({
                        url: v.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(u.xf, () => {
                        j((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === v.PUi.EMAIL_OR_PHONE || e === v.PUi.EMAIL || e === v.PUi.REVERIFY_EMAIL ? Z() : x();
            },
            onLogout: () => {
                (0, s.ZDy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                S(
                                    C(
                                        {
                                            header: I.NW.string(I.t['2jxGen']),
                                            confirmText: I.NW.string(I.t['2jxGen']),
                                            cancelText: I.NW.string(I.t['ETE/oK']),
                                            onConfirm: () => c.Z.logout()
                                        },
                                        n
                                    ),
                                    {
                                        children: (0, r.jsx)(t, {
                                            variant: 'text-md/normal',
                                            children: I.NW.string(I.t.SUnWBA)
                                        })
                                    }
                                )
                            );
                    },
                    { Layer: f.ZP }
                );
            }
        })
    );
}
