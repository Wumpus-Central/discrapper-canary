n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(990547),
    a = n(442837),
    s = n(544891),
    o = n(481060),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    h = n(110924),
    m = n(714338),
    p = n(213609),
    g = n(429142),
    _ = n(144114),
    f = n(210887),
    E = n(23434),
    I = n(1964),
    C = n(762756),
    v = n(308569),
    N = n(981631),
    T = n(815660),
    S = n(388032);
function Z() {
    let { action: e, theme: t } = (0, a.cj)([E.Z, f.Z], () => ({
            action: E.Z.getAction(),
            theme: f.Z.theme
        })),
        Z = I.Z.getVerificationTypes(e),
        [x, A] = l.useState(0),
        b = (0, h.Z)(Z);
    (0, p.Z)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: Z[0],
                verification_types: Z
            }
        },
        {},
        [Z.toString()]
    );
    let L = () => {
            (0, u.FD)(),
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await n.e('35401').then(n.bind(n, 284549));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    {
                        modalKey: v.F0,
                        Layer: g.ZP
                    }
                );
        },
        y = () => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                    return (t) =>
                        (0, i.jsx)(e, {
                            reason: _.L.USER_ACTION_REQUIRED,
                            ...t
                        });
                },
                {
                    modalKey: T.M,
                    Layer: g.ZP
                }
            );
        };
    return (
        l.useEffect(
            () => (
                m.Z.disable(),
                () => {
                    m.Z.enable();
                }
            ),
            []
        ),
        l.useEffect(() => {
            (null == b ? void 0 : b[0]) === N.PUi.PHONE &&
                (null == Z ? void 0 : Z[0]) === N.PUi.EMAIL &&
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: S.intl.string(S.t.KLnLIC),
                                body: S.intl.string(S.t.XGbCq6),
                                confirmText: S.intl.string(S.t['3oK4q6'])
                            });
                    },
                    {
                        modalKey: v.HR,
                        Layer: g.ZP,
                        onCloseCallback: L
                    }
                );
        }, [Z, b]),
        (0, i.jsx)(C.Z, {
            types: Z,
            captchaKey: x,
            onCaptchaVerify: (e) => {
                s.tn
                    .post({
                        url: N.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(d.xf, () => {
                        A((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === N.PUi.EMAIL_OR_PHONE || e === N.PUi.EMAIL || e === N.PUi.REVERIFY_EMAIL ? L() : y();
            },
            onLogout: () => {
                (0, o.ZDy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, i.jsx)(e, {
                                header: S.intl.string(S.t['2jxGen']),
                                confirmText: S.intl.string(S.t['2jxGen']),
                                cancelText: S.intl.string(S.t['ETE/oK']),
                                onConfirm: () => c.Z.logout(),
                                ...n,
                                children: (0, i.jsx)(t, {
                                    variant: 'text-md/normal',
                                    children: S.intl.string(S.t.SUnWBA)
                                })
                            });
                    },
                    { Layer: g.ZP }
                );
            }
        })
    );
}
