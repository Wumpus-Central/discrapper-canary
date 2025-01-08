n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
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
    f = n(144114),
    _ = n(210887),
    E = n(23434),
    I = n(1964),
    C = n(762756),
    N = n(308569),
    v = n(981631),
    S = n(815660),
    T = n(388032);
function b() {
    let { action: e, theme: t } = (0, a.cj)([E.Z, _.Z], () => ({
            action: E.Z.getAction(),
            theme: _.Z.theme
        })),
        b = I.Z.getVerificationTypes(e),
        [A, Z] = r.useState(0),
        x = (0, h.Z)(b);
    (0, p.Z)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
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
                (0, o.openModalLazy)(
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
        P = () => {
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('76540'), n.e('75970')]).then(n.bind(n, 607018));
                    return (t) =>
                        (0, i.jsx)(e, {
                            reason: f.L.USER_ACTION_REQUIRED,
                            ...t
                        });
                },
                {
                    modalKey: S.M,
                    Layer: g.ZP
                }
            );
        };
    return (
        r.useEffect(
            () => (
                m.Z.disable(),
                () => {
                    m.Z.enable();
                }
            ),
            []
        ),
        r.useEffect(() => {
            (null == x ? void 0 : x[0]) === v.PUi.PHONE &&
                (null == b ? void 0 : b[0]) === v.PUi.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: T.intl.string(T.t.KLnLIC),
                                body: T.intl.string(T.t.XGbCq6),
                                confirmText: T.intl.string(T.t['3oK4q6'])
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
                e === v.PUi.EMAIL_OR_PHONE || e === v.PUi.EMAIL || e === v.PUi.REVERIFY_EMAIL ? L() : P();
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, i.jsx)(e, {
                                header: T.intl.string(T.t['2jxGen']),
                                confirmText: T.intl.string(T.t['2jxGen']),
                                cancelText: T.intl.string(T.t['ETE/oK']),
                                onConfirm: () => c.Z.logout(),
                                ...n,
                                children: (0, i.jsx)(t, {
                                    variant: 'text-md/normal',
                                    children: T.intl.string(T.t.SUnWBA)
                                })
                            });
                    },
                    { Layer: g.ZP }
                );
            }
        })
    );
}
