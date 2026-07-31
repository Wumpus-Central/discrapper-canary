a.d(t, { default: () => S });
var s = a(477900),
    r = a(582128),
    i = a(132500),
    l = a(772707),
    n = a(441574),
    c = a(991049),
    d = a(280645),
    o = a(952146),
    h = a(109112),
    u = a(331322),
    m = a(289873),
    v = a(512950),
    E = a(821609),
    p = a(939249),
    A = a(834730),
    f = a(320448),
    x = a(975571),
    _ = a(31720),
    g = a(847599),
    w = a(36149),
    C = a(228366),
    I = a(562465),
    R = a(652215);
async function T() {
    return (await I.Bo.get({ url: R.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var j = a(787301),
    y = a(516761),
    V = a(375708),
    N = a(658103);
let S = function (e) {
    let { transitionState: t, entryPoint: a, onClose: I, dismissable: S } = e,
        {
            loading: M,
            error: b,
            methods: O,
            refetch: Z,
        } = (function () {
            let [e, t] = r.useState(() => j.A.methodsV2 ?? []),
                [a, s] = r.useState(() => null == j.A.methodsV2),
                [i, l] = r.useState(!1),
                n = r.useRef(!0),
                c = r.useCallback(async (e) => {
                    let a = j.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(!1), l(!1);
                        return;
                    }
                    s(!0), l(!1);
                    try {
                        let e = await T();
                        C.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
                            n.current && t(e);
                    } catch {
                        n.current && l(!0);
                    } finally {
                        n.current && s(!1);
                    }
                }, []);
            return (
                r.useEffect(
                    () => (
                        (n.current = !0),
                        c(!1),
                        () => {
                            n.current = !1;
                        }
                    ),
                    [c],
                ),
                { loading: a, error: i, methods: e, refetch: r.useCallback(() => void c(!0), [c]) }
            );
        })(),
        k = O.length > 0,
        { initiateAgeVerificationV2: L } = (0, w.Ny)({ onComplete: I, entryPoint: a }),
        B = r.useRef(!1),
        H = r.useMemo(() => (0, i.A)(), []);
    r.useEffect(() => {
        (0, g.Bs)(H, g.WU.EXPRESSIVE_V2, a);
    }, [H, a]);
    let D = r.useCallback(
        async (e) => {
            if (!B.current) {
                (0, g.St)(H, g.WU.EXPRESSIVE_V2, g._7.METHOD_SELECT, e.method), (B.current = !0);
                try {
                    await L(e.method, e.vendor);
                } finally {
                    B.current = !1;
                }
            }
        },
        [L, H],
    );
    return (0, s.jsxs)(l.k, {
        transitionState: t,
        onClose: I,
        gradientColor: "blue",
        dismissable: S,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
            aspectRatio: "21/9",
        },
        title: (0, w.ST)(a),
        subtitle: (0, w.mK)(a, () => {
            _.A.openUrl(x.A.getArticleURL(R.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                (0, g.St)(H, g.WU.EXPRESSIVE_V2, g._7.LEARN_MORE);
        }),
        children: [
            M && (0, s.jsx)(u.B, { direction: "vertical", align: "center", children: (0, s.jsx)(m.y, {}) }),
            !M &&
                !k &&
                (0, s.jsx)(v.p, {
                    messageType: v.Y.ERROR,
                    action: (0, s.jsx)(E.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: V.intl.string(y.default.hDvmYP),
                        onClick: Z,
                    }),
                    children: V.intl.string(b ? y.default.Bkmk4Y : y.default.cR6336),
                }),
            k &&
                (0, s.jsx)(u.B, {
                    direction: "vertical",
                    gap: 8,
                    children: O.map((e) => {
                        let t = (function (e) {
                            switch (e) {
                                case n.mG.FACIAL_AGE_ESTIMATION:
                                    return c.t;
                                case n.mG.ID_SELFIE_MATCH:
                                    return d.H;
                                case n.mG.GOOGLE_WALLET:
                                    return o.A;
                                default:
                                    return h._;
                            }
                        })(e.method);
                        return (0, s.jsxs)(
                            p.D,
                            {
                                className: N.kZ,
                                onClick: () => void D(e),
                                children: [
                                    (0, s.jsx)("div", {
                                        className: N.zc,
                                        children: (0, s.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: N.Qq,
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
                                                    className: N.Vp,
                                                    children: (0, s.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, s.jsx)(f._, { className: N.ai }),
                                ],
                            },
                            `${e.method}-${e.vendor}`,
                        );
                    }),
                }),
        ],
    });
};
