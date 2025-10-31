n.d(t, { Z: () => N }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(990547),
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
    g = n(144114),
    f = n(210887),
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N() {
    let { action: e, theme: t } = (0, r.cj)([b.Z, f.Z], () => ({
            action: b.Z.getAction(),
            theme: f.Z.theme,
        })),
        N = v.Z.getVerificationTypes(e),
        [O, P] = i.useState(0),
        w = (0, m.Z)(N);
    (0, h.Z)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
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
        i.useEffect(
            () => (
                p.Z.disable(),
                () => {
                    p.Z.enable();
                }
            ),
            [],
        ),
        i.useEffect(() => {
            (null == w ? void 0 : w[0]) === y.PUi.PHONE &&
                (null == N ? void 0 : N[0]) === y.PUi.EMAIL &&
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 273352));
                        return (t) =>
                            (0, a.jsx)(
                                e,
                                T(E({}, t), {
                                    title: S.intl.string(S.t.KLnLIP),
                                    body: S.intl.string(S.t.XGbCq3),
                                    confirmText: S.intl.string(S.t["3oK4qw"]),
                                }),
                            );
                    },
                    {
                        modalKey: _.HR,
                        Layer: x.ZP,
                        onCloseCallback: I,
                    },
                );
        }, [N, w]),
        (0, a.jsx)(j.Z, {
            types: N,
            captchaKey: O,
            onCaptchaVerify: (e) => {
                s.tn
                    .post({
                        url: y.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(d.xf, () => {
                        P((e) => e + 1);
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
                                              reason: g.L.USER_ACTION_REQUIRED,
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
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                T(
                                    E(
                                        {
                                            header: S.intl.string(S.t["2jxGer"]),
                                            confirmText: S.intl.string(S.t["2jxGer"]),
                                            cancelText: S.intl.string(S.t["ETE/oC"]),
                                            onConfirm: () => c.Z.logout("verification"),
                                        },
                                        n,
                                    ),
                                    {
                                        children: (0, a.jsx)(t, {
                                            variant: "text-md/normal",
                                            children: S.intl.string(S.t.SUnWBB),
                                        }),
                                    },
                                ),
                            );
                    },
                    { Layer: x.ZP },
                );
            },
        })
    );
}
