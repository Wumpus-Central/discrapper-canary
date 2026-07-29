r.d(t, { default: () => b });
var s = r(477900),
    l = r(582128),
    n = r(772707),
    i = r(441574),
    a = r(428103),
    d = r(26137),
    c = r(473935),
    o = r(331322),
    u = r(289873),
    h = r(512950),
    m = r(821609),
    E = r(939249),
    p = r(834730),
    v = r(320448),
    A = r(975571),
    _ = r(31720),
    I = r(562465),
    x = r(40449),
    C = r(652215);
let f = {
        [i.mG.FACIAL_AGE_ESTIMATION]: x.VF.FACIAL_AGE_ESTIMATION,
        [i.mG.ID_SELFIE_MATCH]: x.VF.ID_VERIFICATION,
        [i.mG.CREDIT_CARD]: x.VF.CREDIT_CARD,
    },
    T = { [i.dd.K_ID]: x.XM.K_ID, [i.dd.INCODE]: x.XM.INCODE, [i.dd.GOOGLE_WALLET]: x.XM.GOOGLE_WALLET };
async function R() {
    return (await I.Bo.get({ url: C.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var g = r(36149),
    y = r(228366),
    O = r(787301),
    j = r(516761),
    G = r(375708),
    L = r(658103);
let D = { [i.mG.GOOGLE_WALLET]: a.l, [i.mG.FACIAL_AGE_ESTIMATION]: d.r, [i.mG.ID_SELFIE_MATCH]: c.L },
    b = function (e) {
        let { transitionState: t, entryPoint: r, onClose: i, dismissable: a } = e,
            {
                loading: d,
                error: c,
                methods: I,
                refetch: x,
            } = (function () {
                let [e, t] = l.useState(() => O.A.methodsV2 ?? []),
                    [r, s] = l.useState(() => null == O.A.methodsV2),
                    [n, i] = l.useState(!1),
                    a = l.useRef(!0),
                    d = l.useCallback(async (e) => {
                        let r = O.A.methodsV2;
                        if (!e && null != r) {
                            t(r), s(!1), i(!1);
                            return;
                        }
                        s(!0), i(!1);
                        try {
                            let e = await R();
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
            b = I.length > 0,
            { initiateAgeVerification: N } = (0, g.nn)({ onComplete: i, entryPoint: r, shouldShowExpressiveModal: !0 }),
            [S, V] = l.useState(!1),
            k = l.useRef(!1),
            M = l.useCallback(
                async (e) => {
                    if (k.current) return;
                    let t = f[e.method],
                        r = T[e.vendor];
                    if (null == t || null == r) return void V(!0);
                    k.current = !0;
                    try {
                        await N(t, r);
                    } finally {
                        k.current = !1;
                    }
                },
                [N],
            );
        return (0, s.jsxs)(n.k, {
            transitionState: t,
            onClose: i,
            gradientColor: "blue",
            dismissable: a,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, g.ST)(r),
            subtitle: (0, g.mK)(r, () => {
                _.A.openUrl(A.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE));
            }),
            children: [
                d && (0, s.jsx)(o.B, { direction: "vertical", align: "center", children: (0, s.jsx)(u.y, {}) }),
                S &&
                    (0, s.jsx)(h.p, {
                        messageType: h.Y.ERROR,
                        action: (0, s.jsx)(m.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: G.intl.string(j.default.b7Oqdu),
                            onClick: () => V(!1),
                        }),
                        children: G.intl.string(j.default["1RD2jW"]),
                    }),
                !S &&
                    !d &&
                    !b &&
                    (0, s.jsx)(h.p, {
                        messageType: h.Y.ERROR,
                        action: (0, s.jsx)(m.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: G.intl.string(j.default.hDvmYP),
                            onClick: x,
                        }),
                        children: G.intl.string(c ? j.default.Bkmk4Y : j.default.cR6336),
                    }),
                !S &&
                    b &&
                    (0, s.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: I.map((e) => {
                            let t = D[e.method];
                            return (0, s.jsxs)(
                                E.D,
                                {
                                    className: L.kZ,
                                    onClick: () => void M(e),
                                    children: [
                                        null != t &&
                                            (0, s.jsx)("div", {
                                                className: L.zc,
                                                children: (0, s.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, s.jsxs)("div", {
                                            className: L.Qq,
                                            children: [
                                                (0, s.jsx)(p.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: e.title,
                                                }),
                                                (0, s.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                                null != e.providedBy &&
                                                    (0, s.jsx)("div", {
                                                        className: L.Vp,
                                                        children: (0, s.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, s.jsx)(v._, { className: L.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
