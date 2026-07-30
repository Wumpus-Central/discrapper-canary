r.d(t, { default: () => N });
var s = r(477900),
    l = r(582128),
    i = r(132500),
    a = r(772707),
    n = r(441574),
    c = r(428103),
    d = r(26137),
    o = r(473935),
    u = r(331322),
    h = r(289873),
    m = r(512950),
    E = r(821609),
    p = r(939249),
    v = r(834730),
    _ = r(320448),
    x = r(975571),
    f = r(31720),
    A = r(847599),
    R = r(36149),
    S = r(228366),
    g = r(562465),
    y = r(652215);
async function C() {
    return (await g.Bo.get({ url: y.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var j = r(787301),
    I = r(516761),
    T = r(375708),
    V = r(658103);
let b = { [n.mG.GOOGLE_WALLET]: c.l, [n.mG.FACIAL_AGE_ESTIMATION]: d.r, [n.mG.ID_SELFIE_MATCH]: o.L },
    N = function (e) {
        let { transitionState: t, entryPoint: r, onClose: n, dismissable: c } = e,
            {
                loading: d,
                error: o,
                methods: g,
                refetch: N,
            } = (function () {
                let [e, t] = l.useState(() => j.A.methodsV2 ?? []),
                    [r, s] = l.useState(() => null == j.A.methodsV2),
                    [i, a] = l.useState(!1),
                    n = l.useRef(!0),
                    c = l.useCallback(async (e) => {
                        let r = j.A.methodsV2;
                        if (!e && null != r) {
                            t(r), s(!1), a(!1);
                            return;
                        }
                        s(!0), a(!1);
                        try {
                            let e = await C();
                            S.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
                                n.current && t(e);
                        } catch {
                            n.current && a(!0);
                        } finally {
                            n.current && s(!1);
                        }
                    }, []);
                return (
                    l.useEffect(
                        () => (
                            (n.current = !0),
                            c(!1),
                            () => {
                                n.current = !1;
                            }
                        ),
                        [c],
                    ),
                    { loading: r, error: i, methods: e, refetch: l.useCallback(() => void c(!0), [c]) }
                );
            })(),
            k = g.length > 0,
            { initiateAgeVerificationV2: O } = (0, R.Ny)({ onComplete: n, entryPoint: r }),
            w = l.useRef(!1),
            L = l.useMemo(() => (0, i.A)(), []);
        l.useEffect(() => {
            (0, A.Bs)(L, A.WU.EXPRESSIVE_V2, r);
        }, [L, r]);
        let G = l.useCallback(
            async (e) => {
                if (!w.current) {
                    (0, A.St)(L, A.WU.EXPRESSIVE_V2, A._7.METHOD_SELECT, e.method), (w.current = !0);
                    try {
                        await O(e.method, e.vendor);
                    } finally {
                        w.current = !1;
                    }
                }
            },
            [O, L],
        );
        return (0, s.jsxs)(a.k, {
            transitionState: t,
            onClose: n,
            gradientColor: "blue",
            dismissable: c,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, R.ST)(r),
            subtitle: (0, R.mK)(r, () => {
                f.A.openUrl(x.A.getArticleURL(y.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, A.St)(L, A.WU.EXPRESSIVE_V2, A._7.LEARN_MORE);
            }),
            children: [
                d && (0, s.jsx)(u.B, { direction: "vertical", align: "center", children: (0, s.jsx)(h.y, {}) }),
                !d &&
                    !k &&
                    (0, s.jsx)(m.p, {
                        messageType: m.Y.ERROR,
                        action: (0, s.jsx)(E.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            text: T.intl.string(I.default.hDvmYP),
                            onClick: N,
                        }),
                        children: T.intl.string(o ? I.default.Bkmk4Y : I.default.cR6336),
                    }),
                k &&
                    (0, s.jsx)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        children: g.map((e) => {
                            let t = b[e.method];
                            return (0, s.jsxs)(
                                p.D,
                                {
                                    className: V.kZ,
                                    onClick: () => void G(e),
                                    children: [
                                        null != t &&
                                            (0, s.jsx)("div", {
                                                className: V.zc,
                                                children: (0, s.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, s.jsxs)("div", {
                                            className: V.Qq,
                                            children: [
                                                (0, s.jsx)(v.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: e.title,
                                                }),
                                                (0, s.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                                null != e.providedBy &&
                                                    (0, s.jsx)("div", {
                                                        className: V.Vp,
                                                        children: (0, s.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, s.jsx)(_._, { className: V.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
