n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(990547),
    l = n(442837),
    c = n(544891),
    o = n(481060),
    s = n(893776),
    u = n(37234),
    d = n(809206),
    f = n(110924),
    p = n(714338),
    y = n(213609),
    m = n(429142),
    g = n(144114),
    h = n(210887),
    b = n(23434),
    v = n(1964),
    j = n(762756),
    O = n(308569),
    x = n(981631),
    E = n(815660),
    w = n(388032);
function _(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
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
function A() {
    let { action: e, theme: t } = (0, l.cj)([b.Z, h.Z], () => ({
            action: b.Z.getAction(),
            theme: h.Z.theme,
        })),
        A = v.Z.getVerificationTypes(e),
        [S, N] = i.useState(0),
        k = (0, f.Z)(A);
    (0, y.Z)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: A[0],
                verification_types: A,
            },
        },
        {},
        [A.toString()],
    );
    let R = () => {
            (0, d.FD)(),
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await n.e("35401").then(n.bind(n, 284549));
                        return (t) => (0, r.jsx)(e, _({}, t));
                    },
                    {
                        modalKey: O.F0,
                        Layer: m.ZP,
                    },
                );
        },
        I = () => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                    return (t) => (0, r.jsx)(e, _({ reason: g.L.USER_ACTION_REQUIRED }, t));
                },
                {
                    modalKey: E.M,
                    Layer: m.ZP,
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
            (null == k ? void 0 : k[0]) === x.PUi.PHONE &&
                (null == A ? void 0 : A[0]) === x.PUi.EMAIL &&
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                P(_({}, t), {
                                    title: w.intl.string(w.t.KLnLIC),
                                    body: w.intl.string(w.t.XGbCq6),
                                    confirmText: w.intl.string(w.t["3oK4q6"]),
                                }),
                            );
                    },
                    {
                        modalKey: O.HR,
                        Layer: m.ZP,
                        onCloseCallback: R,
                    },
                );
        }, [A, k]),
        (0, r.jsx)(j.Z, {
            types: A,
            captchaKey: S,
            onCaptchaVerify: (e) => {
                c.tn
                    .post({
                        url: x.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(u.xf, () => {
                        N((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === x.PUi.EMAIL_OR_PHONE || e === x.PUi.EMAIL || e === x.PUi.REVERIFY_EMAIL ? R() : I();
            },
            onLogout: () => {
                (0, o.ZDy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                P(
                                    _(
                                        {
                                            header: w.intl.string(w.t["2jxGen"]),
                                            confirmText: w.intl.string(w.t["2jxGen"]),
                                            cancelText: w.intl.string(w.t["ETE/oK"]),
                                            onConfirm: () => s.Z.logout("verification"),
                                        },
                                        n,
                                    ),
                                    {
                                        children: (0, r.jsx)(t, {
                                            variant: "text-md/normal",
                                            children: w.intl.string(w.t.SUnWBA),
                                        }),
                                    },
                                ),
                            );
                    },
                    { Layer: m.ZP },
                );
            },
        })
    );
}
