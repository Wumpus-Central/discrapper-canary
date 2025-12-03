n.d(t, { Z: () => N }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(990547),
    r = n(442837),
    s = n(544891),
    o = n(481060),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    m = n(110924),
    p = n(714338),
    h = n(213609),
    x = n(429142),
    f = n(144114),
    g = n(210887),
    b = n(23434),
    v = n(1964),
    j = n(762756),
    _ = n(308569),
    y = n(981631),
    C = n(815660),
    S = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function N() {
    let { action: e, theme: t } = (0, r.cj)([b.Z, g.Z], () => ({
            action: b.Z.getAction(),
            theme: g.Z.theme,
        })),
        N = v.Z.getVerificationTypes(e),
        [T, O] = l.useState(0),
        P = (0, m.Z)(N);
    (0, h.Z)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: N[0],
                verification_types: N,
            },
        },
        {},
        [N.toString()],
    );
    let I = () => {
        (0, u.FD)(),
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await n.e("35401").then(n.bind(n, 284549));
                    return (t) => (0, a.jsx)(e, E({}, t));
                },
                {
                    modalKey: _.F0,
                    Layer: x.ZP,
                },
            );
    };
    return (
        l.useEffect(
            () => (
                p.Z.disable(),
                () => {
                    p.Z.enable();
                }
            ),
            [],
        ),
        l.useEffect(() => {
            (null == P ? void 0 : P[0]) === y.PUi.PHONE &&
                (null == N ? void 0 : N[0]) === y.PUi.EMAIL &&
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await n.e("84112").then(n.bind(n, 273352));
                        return (t) => {
                            var n, l;
                            return (0, a.jsx)(
                                e,
                                ((n = E({}, t)),
                                (l = l =
                                    {
                                        title: S.intl.string(S.t.KLnLIP),
                                        body: S.intl.string(S.t.XGbCq3),
                                        confirmText: S.intl.string(S.t["3oK4qw"]),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            );
                        };
                    },
                    {
                        modalKey: _.HR,
                        Layer: x.ZP,
                        onCloseCallback: I,
                    },
                );
        }, [N, P]),
        (0, a.jsx)(j.Z, {
            types: N,
            captchaKey: T,
            onCaptchaVerify: (e) => {
                s.tn
                    .post({
                        url: y.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(d.xf, () => {
                        O((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === y.PUi.EMAIL_OR_PHONE || e === y.PUi.EMAIL || e === y.PUi.REVERIFY_EMAIL
                    ? I()
                    : (0, o.ZDy)(
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                              return (t) =>
                                  (0, a.jsx)(
                                      e,
                                      E(
                                          {
                                              layerContext: x.mK,
                                              reason: f.L.USER_ACTION_REQUIRED,
                                          },
                                          t,
                                      ),
                                  );
                          },
                          {
                              modalKey: C.M,
                              Layer: x.ZP,
                          },
                      );
            },
            onLogout: () => {
                (0, o.ZDy)(
                    async () => {
                        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 201265));
                        return (t) =>
                            (0, a.jsx)(
                                e,
                                E(
                                    {
                                        title: S.intl.string(S.t["2jxGer"]),
                                        subtitle: S.intl.string(S.t.SUnWBB),
                                        confirmText: S.intl.string(S.t["2jxGer"]),
                                        cancelText: S.intl.string(S.t["ETE/oC"]),
                                        onConfirm: () => c.Z.logout("verification"),
                                    },
                                    t,
                                ),
                            );
                    },
                    { Layer: x.ZP },
                );
            },
        })
    );
}
