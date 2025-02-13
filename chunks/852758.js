n.d(t, { Z: () => b }), n(47120);
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
    N = n(308569),
    v = n(981631),
    T = n(815660),
    S = n(388032);
function b() {
    let { action: e, theme: t } = (0, a.cj)([E.Z, f.Z], () => ({
            action: E.Z.getAction(),
            theme: f.Z.theme
        })),
        b = I.Z.getVerificationTypes(e),
        [A, Z] = l.useState(0),
        x = (0, h.Z)(b);
    (0, p.Z)(
        {
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: b[0],
                verification_types: b
            }
        },
        {},
        [b.toString()]
    );
    let L = () => {
            (0, u.FD)(),
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await n.e('35401').then(n.bind(n, 284549));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    {
                        modalKey: N.F0,
                        Layer: g.ZP
                    }
                );
        },
        y = () => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('76540'), n.e('18442')]).then(n.bind(n, 607018));
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
            (null == x ? void 0 : x[0]) === v.PUi.PHONE &&
                (null == b ? void 0 : b[0]) === v.PUi.EMAIL &&
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
                        modalKey: N.HR,
                        Layer: g.ZP,
                        onCloseCallback: L
                    }
                );
        }, [b, x]),
        (0, i.jsx)(C.Z, {
            types: b,
            captchaKey: A,
            onCaptchaVerify: (e) => {
                s.tn
                    .post({
                        url: v.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(d.xf, () => {
                        Z((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === v.PUi.EMAIL_OR_PHONE || e === v.PUi.EMAIL || e === v.PUi.REVERIFY_EMAIL ? L() : y();
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
