r.d(t, { default: () => N });
var i = r(477900),
    l = r(582128),
    n = r(772707),
    s = r(441574),
    a = r(428103),
    d = r(26137),
    c = r(473935),
    o = r(331322),
    u = r(289873),
    h = r(834730),
    m = r(821609),
    E = r(939249),
    v = r(320448),
    x = r(975571),
    p = r(31720),
    A = r(562465),
    _ = r(40449),
    I = r(652215);
let f = { [s.mG.FACIAL_AGE_ESTIMATION]: _.VF.FACIAL_AGE_ESTIMATION, [s.mG.ID_SELFIE_MATCH]: _.VF.ID_VERIFICATION },
    C = { [s.dd.K_ID]: _.XM.K_ID, [s.dd.INCODE]: _.XM.INCODE, [s.dd.GOOGLE_WALLET]: _.XM.GOOGLE_WALLET };
async function g() {
    return (await A.Bo.get({ url: I.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var j = r(36149),
    T = r(228366),
    O = r(787301),
    L = r(516761),
    b = r(375708),
    y = r(658103);
let G = { [s.mG.GOOGLE_WALLET]: a.l, [s.mG.FACIAL_AGE_ESTIMATION]: d.r, [s.mG.ID_SELFIE_MATCH]: c.L },
    N = function (e) {
        let { transitionState: t, entryPoint: r, onClose: s, dismissable: a } = e,
            {
                loading: d,
                error: c,
                methods: A,
                refetch: _,
            } = (function () {
                let [e, t] = l.useState(() => O.A.methodsV2 ?? []),
                    [r, i] = l.useState(() => null == O.A.methodsV2),
                    [n, s] = l.useState(!1),
                    a = l.useRef(!0),
                    d = l.useCallback(async (e) => {
                        let r = O.A.methodsV2;
                        if (!e && null != r) {
                            t(r), i(!1), s(!1);
                            return;
                        }
                        i(!0), s(!1);
                        try {
                            let e = await g();
                            T.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
                                a.current && t(e);
                        } catch {
                            a.current && s(!0);
                        } finally {
                            a.current && i(!1);
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
            N = A.length > 0,
            { initiateAgeVerification: S } = (0, j.nn)({ onComplete: s, entryPoint: r, shouldShowExpressiveModal: !0 }),
            [R, k] = l.useState(!1),
            D = l.useRef(!1),
            M = l.useCallback(
                async (e) => {
                    if (D.current) return;
                    let t = f[e.method],
                        r = C[e.vendor];
                    if (null == t || null == r) return void k(!0);
                    D.current = !0;
                    try {
                        await S(t, r);
                    } finally {
                        D.current = !1;
                    }
                },
                [S],
            );
        return (0, i.jsxs)(n.k, {
            transitionState: t,
            onClose: s,
            gradientColor: "blue",
            dismissable: a,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, j.ST)(r),
            subtitle: (0, j.mK)(r, () => {
                p.A.openUrl(x.A.getArticleURL(I.MVz.TIGGER_PAWTECT_LEARN_MORE));
            }),
            children: [
                d && (0, i.jsx)(o.B, { direction: "vertical", align: "center", children: (0, i.jsx)(u.y, {}) }),
                R &&
                    (0, i.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "center",
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: b.intl.string(L.default["1RD2jW"]),
                            }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: b.intl.string(L.default.b7Oqdu),
                                onClick: () => k(!1),
                            }),
                        ],
                    }),
                !R &&
                    !d &&
                    !N &&
                    (0, i.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "center",
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: b.intl.string(c ? L.default.Bkmk4Y : L.default.cR6336),
                            }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: b.intl.string(L.default.hDvmYP),
                                onClick: _,
                            }),
                        ],
                    }),
                !R &&
                    N &&
                    (0, i.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: A.map((e) => {
                            let t = G[e.method];
                            return (0, i.jsxs)(
                                E.D,
                                {
                                    className: y.kZ,
                                    onClick: () => void M(e),
                                    children: [
                                        null != t &&
                                            (0, i.jsx)("div", {
                                                className: y.zc,
                                                children: (0, i.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, i.jsxs)("div", {
                                            className: y.Qq,
                                            children: [
                                                (0, i.jsx)(h.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: e.title,
                                                }),
                                                (0, i.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                                null != e.providedBy &&
                                                    (0, i.jsx)("div", {
                                                        className: y.Vp,
                                                        children: (0, i.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsx)(v._, { className: y.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
