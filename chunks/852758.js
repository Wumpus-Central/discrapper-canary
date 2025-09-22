n.d(t, { Z: () => O }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(990547),
    l = n(442837),
    s = n(544891),
    o = n(481060),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    m = n(110924),
    h = n(714338),
    p = n(213609),
    x = n(429142),
    f = n(144114),
    b = n(210887),
    g = n(23434),
    v = n(1964),
    j = n(762756),
    _ = n(308569),
    y = n(981631),
    C = n(815660),
    N = n(388032);
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
function S(e, t) {
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
function O() {
    let { action: e, theme: t } = (0, l.cj)([g.Z, b.Z], () => ({
            action: g.Z.getAction(),
            theme: b.Z.theme,
        })),
        O = v.Z.getVerificationTypes(e),
        [T, k] = r.useState(0),
        P = (0, m.Z)(O);
    (0, p.Z)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: O[0],
                verification_types: O,
            },
        },
        {},
        [O.toString()],
    );
    let R = () => {
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
        r.useEffect(
            () => (
                h.Z.disable(),
                () => {
                    h.Z.enable();
                }
            ),
            [],
        ),
        r.useEffect(() => {
            (null == P ? void 0 : P[0]) === y.PUi.PHONE &&
                (null == O ? void 0 : O[0]) === y.PUi.EMAIL &&
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, a.jsx)(
                                e,
                                S(E({}, t), {
                                    title: N.intl.string(N.t.KLnLIC),
                                    body: N.intl.string(N.t.XGbCq6),
                                    confirmText: N.intl.string(N.t["3oK4q6"]),
                                }),
                            );
                    },
                    {
                        modalKey: _.HR,
                        Layer: x.ZP,
                        onCloseCallback: R,
                    },
                );
        }, [O, P]),
        (0, a.jsx)(j.Z, {
            types: O,
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
                        k((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === y.PUi.EMAIL_OR_PHONE || e === y.PUi.EMAIL || e === y.PUi.REVERIFY_EMAIL
                    ? R()
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
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                S(
                                    E(
                                        {
                                            header: N.intl.string(N.t["2jxGen"]),
                                            confirmText: N.intl.string(N.t["2jxGen"]),
                                            cancelText: N.intl.string(N.t["ETE/oK"]),
                                            onConfirm: () => c.Z.logout("verification"),
                                        },
                                        n,
                                    ),
                                    {
                                        children: (0, a.jsx)(t, {
                                            variant: "text-md/normal",
                                            children: N.intl.string(N.t.SUnWBA),
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
