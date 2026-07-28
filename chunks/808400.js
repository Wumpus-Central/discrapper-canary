r.d(t, { default: () => N });
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
    x = r(562465),
    I = r(40449),
    f = r(652215);
let C = { [i.mG.FACIAL_AGE_ESTIMATION]: I.VF.FACIAL_AGE_ESTIMATION, [i.mG.ID_SELFIE_MATCH]: I.VF.ID_VERIFICATION },
    T = { [i.dd.K_ID]: I.XM.K_ID, [i.dd.INCODE]: I.XM.INCODE, [i.dd.GOOGLE_WALLET]: I.XM.GOOGLE_WALLET };
async function g() {
    return (await x.Bo.get({ url: f.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var y = r(36149),
    O = r(228366),
    R = r(787301),
    j = r(516761),
    L = r(375708),
    G = r(658103);
let b = { [i.mG.GOOGLE_WALLET]: a.l, [i.mG.FACIAL_AGE_ESTIMATION]: d.r, [i.mG.ID_SELFIE_MATCH]: c.L },
    N = function (e) {
        let { transitionState: t, entryPoint: r, onClose: i, dismissable: a } = e,
            {
                loading: d,
                error: c,
                methods: x,
                refetch: I,
            } = (function () {
                let [e, t] = l.useState(() => R.A.methodsV2 ?? []),
                    [r, s] = l.useState(() => null == R.A.methodsV2),
                    [n, i] = l.useState(!1),
                    a = l.useRef(!0),
                    d = l.useCallback(async (e) => {
                        let r = R.A.methodsV2;
                        if (!e && null != r) {
                            t(r), s(!1), i(!1);
                            return;
                        }
                        s(!0), i(!1);
                        try {
                            let e = await g();
                            O.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
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
            N = x.length > 0,
            { initiateAgeVerification: S } = (0, y.nn)({ onComplete: i, entryPoint: r, shouldShowExpressiveModal: !0 }),
            [k, D] = l.useState(!1),
            M = l.useRef(!1),
            V = l.useCallback(
                async (e) => {
                    if (M.current) return;
                    let t = C[e.method],
                        r = T[e.vendor];
                    if (null == t || null == r) return void D(!0);
                    M.current = !0;
                    try {
                        await S(t, r);
                    } finally {
                        M.current = !1;
                    }
                },
                [S],
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
            title: (0, y.ST)(r),
            subtitle: (0, y.mK)(r, () => {
                _.A.openUrl(A.A.getArticleURL(f.MVz.TIGGER_PAWTECT_LEARN_MORE));
            }),
            children: [
                d && (0, s.jsx)(o.B, { direction: "vertical", align: "center", children: (0, s.jsx)(u.y, {}) }),
                k &&
                    (0, s.jsx)(h.p, {
                        messageType: h.Y.ERROR,
                        action: (0, s.jsx)(m.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: L.intl.string(j.default.b7Oqdu),
                            onClick: () => D(!1),
                        }),
                        children: L.intl.string(j.default["1RD2jW"]),
                    }),
                !k &&
                    !d &&
                    !N &&
                    (0, s.jsx)(h.p, {
                        messageType: h.Y.ERROR,
                        action: (0, s.jsx)(m.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: L.intl.string(j.default.hDvmYP),
                            onClick: I,
                        }),
                        children: L.intl.string(c ? j.default.Bkmk4Y : j.default.cR6336),
                    }),
                !k &&
                    N &&
                    (0, s.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: x.map((e) => {
                            let t = b[e.method];
                            return (0, s.jsxs)(
                                E.D,
                                {
                                    className: G.kZ,
                                    onClick: () => void V(e),
                                    children: [
                                        null != t &&
                                            (0, s.jsx)("div", {
                                                className: G.zc,
                                                children: (0, s.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, s.jsxs)("div", {
                                            className: G.Qq,
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
                                                        className: G.Vp,
                                                        children: (0, s.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, s.jsx)(v._, { className: G.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
