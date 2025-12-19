n.d(t, { Z: () => T }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(990547),
    l = n(442837),
    s = n(544891),
    o = n(481060),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    m = n(110924),
    p = n(714338),
    h = n(213609),
    f = n(429142),
    x = n(144114),
    b = n(210887),
    g = n(23434),
    v = n(1964),
    j = n(762756),
    y = n(308569),
    C = n(981631),
    _ = n(815660),
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
function T() {
    let { action: e, theme: t } = (0, l.cj)([g.Z, b.Z], () => ({
            action: g.Z.getAction(),
            theme: b.Z.theme,
        })),
        T = v.Z.getVerificationTypes(e),
        [O, N] = r.useState(0),
        P = (0, m.Z)(T);
    (0, h.Z)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: T[0],
                verification_types: T,
            },
        },
        {},
        [T.toString()],
    );
    let w = () => {
        (0, u.FD)(),
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await n.e("35401").then(n.bind(n, 284549));
                    return (t) => (0, a.jsx)(e, E({}, t));
                },
                {
                    modalKey: y.F0,
                    Layer: f.ZP,
                },
            );
    };
    return (
        r.useEffect(
            () => (
                p.Z.disable(),
                () => {
                    p.Z.enable();
                }
            ),
            [],
        ),
        r.useEffect(() => {
            (null == P ? void 0 : P[0]) === C.PUi.PHONE &&
                (null == T ? void 0 : T[0]) === C.PUi.EMAIL &&
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await n.e("84112").then(n.bind(n, 273352));
                        return (t) => {
                            var n, r;
                            return (0, a.jsx)(
                                e,
                                ((n = E({}, t)),
                                (r = r =
                                    {
                                        title: S.intl.string(S.t.KLnLIP),
                                        body: S.intl.string(S.t.XGbCq3),
                                        confirmText: S.intl.string(S.t["3oK4qw"]),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                n),
                            );
                        };
                    },
                    {
                        modalKey: y.HR,
                        Layer: f.ZP,
                        onCloseCallback: w,
                    },
                );
        }, [T, P]),
        (0, a.jsx)(j.Z, {
            types: T,
            captchaKey: O,
            onCaptchaVerify: (e) => {
                s.tn
                    .post({
                        url: C.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(d.xf, () => {
                        N((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === C.PUi.EMAIL_OR_PHONE || e === C.PUi.EMAIL || e === C.PUi.REVERIFY_EMAIL
                    ? w()
                    : (0, o.ZDy)(
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                              return (t) =>
                                  (0, a.jsx)(
                                      e,
                                      E(
                                          {
                                              layerContext: f.mK,
                                              reason: x.L.USER_ACTION_REQUIRED,
                                          },
                                          t,
                                      ),
                                  );
                          },
                          {
                              modalKey: _.M,
                              Layer: f.ZP,
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
                    { Layer: f.ZP },
                );
            },
        })
    );
}
