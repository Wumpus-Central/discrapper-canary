r.d(t, { default: () => N });
var s = r(477900),
    l = r(582128),
    n = r(132500),
    i = r(772707),
    a = r(441574),
    d = r(428103),
    c = r(26137),
    o = r(473935),
    u = r(331322),
    E = r(289873),
    h = r(512950),
    m = r(821609),
    _ = r(939249),
    A = r(834730),
    p = r(320448),
    v = r(975571),
    I = r(31720),
    x = r(847599),
    C = r(562465),
    R = r(40449),
    f = r(652215);
let T = {
        [a.mG.FACIAL_AGE_ESTIMATION]: R.VF.FACIAL_AGE_ESTIMATION,
        [a.mG.ID_SELFIE_MATCH]: R.VF.ID_VERIFICATION,
        [a.mG.CREDIT_CARD]: R.VF.CREDIT_CARD,
    },
    S = { [a.dd.K_ID]: R.XM.K_ID, [a.dd.INCODE]: R.XM.INCODE, [a.dd.GOOGLE_WALLET]: R.XM.GOOGLE_WALLET };
async function O() {
    return (await C.Bo.get({ url: f.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var g = r(36149),
    y = r(228366),
    j = r(787301),
    L = r(516761),
    V = r(375708),
    D = r(658103);
let G = { [a.mG.GOOGLE_WALLET]: d.l, [a.mG.FACIAL_AGE_ESTIMATION]: c.r, [a.mG.ID_SELFIE_MATCH]: o.L },
    N = function (e) {
        let { transitionState: t, entryPoint: r, onClose: a, dismissable: d } = e,
            {
                loading: c,
                error: o,
                methods: C,
                refetch: R,
            } = (function () {
                let [e, t] = l.useState(() => j.A.methodsV2 ?? []),
                    [r, s] = l.useState(() => null == j.A.methodsV2),
                    [n, i] = l.useState(!1),
                    a = l.useRef(!0),
                    d = l.useCallback(async (e) => {
                        let r = j.A.methodsV2;
                        if (!e && null != r) {
                            t(r), s(!1), i(!1);
                            return;
                        }
                        s(!0), i(!1);
                        try {
                            let e = await O();
                            y.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
                                a.current && t(e);
                        } catch {
                            a.current && i(!0);
                        } finally {
                            a.current && s(!1);
                        }
                    }, []);
                return (
                    l.useEffect(
                        () => (
                            (a.current = !0),
                            d(!1),
                            () => {
                                a.current = !1;
                            }
                        ),
                        [d],
                    ),
                    { loading: r, error: n, methods: e, refetch: l.useCallback(() => void d(!0), [d]) }
                );
            })(),
            N = C.length > 0,
            { initiateAgeVerification: b } = (0, g.nn)({ onComplete: a, entryPoint: r, shouldShowExpressiveModal: !0 }),
            [M, k] = l.useState(!1),
            w = l.useRef(!1),
            F = l.useMemo(() => (0, n.A)(), []);
        l.useEffect(() => {
            (0, x.Bs)(F, x.WU.EXPRESSIVE_V2, r);
        }, [F, r]);
        let B = l.useCallback(
            async (e) => {
                if (w.current) return;
                let t = T[e.method],
                    r = S[e.vendor];
                if (((0, x.St)(F, x.WU.EXPRESSIVE_V2, x._7.METHOD_SELECT, t), null == t || null == r))
                    return void k(!0);
                w.current = !0;
                try {
                    await b(t, r);
                } finally {
                    w.current = !1;
                }
            },
            [b, F],
        );
        return (0, s.jsxs)(i.k, {
            transitionState: t,
            onClose: a,
            gradientColor: "blue",
            dismissable: d,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, g.ST)(r),
            subtitle: (0, g.mK)(r, () => {
                I.A.openUrl(v.A.getArticleURL(f.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, x.St)(F, x.WU.EXPRESSIVE_V2, x._7.LEARN_MORE);
            }),
            children: [
                c && (0, s.jsx)(u.B, { direction: "vertical", align: "center", children: (0, s.jsx)(E.y, {}) }),
                M &&
                    (0, s.jsx)(h.p, {
                        messageType: h.Y.ERROR,
                        action: (0, s.jsx)(m.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: V.intl.string(L.default.b7Oqdu),
                            onClick: () => k(!1),
                        }),
                        children: V.intl.string(L.default["1RD2jW"]),
                    }),
                !M &&
                    !c &&
                    !N &&
                    (0, s.jsx)(h.p, {
                        messageType: h.Y.ERROR,
                        action: (0, s.jsx)(m.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: V.intl.string(L.default.hDvmYP),
                            onClick: R,
                        }),
                        children: V.intl.string(o ? L.default.Bkmk4Y : L.default.cR6336),
                    }),
                !M &&
                    N &&
                    (0, s.jsx)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        children: C.map((e) => {
                            let t = G[e.method];
                            return (0, s.jsxs)(
                                _.D,
                                {
                                    className: D.kZ,
                                    onClick: () => void B(e),
                                    children: [
                                        null != t &&
                                            (0, s.jsx)("div", {
                                                className: D.zc,
                                                children: (0, s.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, s.jsxs)("div", {
                                            className: D.Qq,
                                            children: [
                                                (0, s.jsx)(A.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: e.title,
                                                }),
                                                (0, s.jsx)(A.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                                null != e.providedBy &&
                                                    (0, s.jsx)("div", {
                                                        className: D.Vp,
                                                        children: (0, s.jsx)(A.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, s.jsx)(p._, { className: D.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
