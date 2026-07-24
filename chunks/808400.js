r.d(t, { default: () => G });
var i = r(627968),
    l = r(64700),
    n = r(772707),
    a = r(441574),
    s = r(428103),
    d = r(26137),
    c = r(473935),
    o = r(331322),
    u = r(289873),
    h = r(834730),
    m = r(821609),
    v = r(939249),
    x = r(320448),
    E = r(975571),
    p = r(31720),
    A = r(562465),
    I = r(40449),
    _ = r(652215);
let f = { [a.mG.FACIAL_AGE_ESTIMATION]: I.VF.FACIAL_AGE_ESTIMATION, [a.mG.ID_SELFIE_MATCH]: I.VF.ID_VERIFICATION },
    g = { [a.dd.K_ID]: I.XM.K_ID, [a.dd.INCODE]: I.XM.INCODE, [a.dd.GOOGLE_WALLET]: I.XM.GOOGLE_WALLET };
async function j() {
    return (await A.Bo.get({ url: _.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var C = r(36149),
    T = r(516761),
    L = r(375708),
    b = r(658103);
let y = { [a.mG.GOOGLE_WALLET]: s.l, [a.mG.FACIAL_AGE_ESTIMATION]: d.r, [a.mG.ID_SELFIE_MATCH]: c.L },
    G = function (e) {
        let { transitionState: t, entryPoint: r, onClose: a, dismissable: s } = e,
            {
                loading: d,
                error: c,
                methods: A,
                refetch: I,
            } = (function () {
                let [e, t] = l.useState([]),
                    [r, i] = l.useState(!0),
                    [n, a] = l.useState(!1),
                    s = l.useRef(!0),
                    d = l.useCallback(async () => {
                        i(!0), a(!1);
                        try {
                            let e = await j();
                            s.current && t(e);
                        } catch {
                            s.current && a(!0);
                        } finally {
                            s.current && i(!1);
                        }
                    }, []);
                return (
                    l.useEffect(
                        () => (
                            (s.current = !0),
                            d(),
                            () => {
                                s.current = !1;
                            }
                        ),
                        [d],
                    ),
                    { loading: r, error: n, methods: e, refetch: d }
                );
            })(),
            G = A.length > 0,
            { initiateAgeVerification: O } = (0, C.nn)({ onComplete: a, entryPoint: r, shouldShowExpressiveModal: !0 }),
            [N, R] = l.useState(!1),
            k = l.useRef(!1),
            w = l.useCallback(
                async (e) => {
                    if (k.current) return;
                    let t = f[e.method],
                        r = g[e.vendor];
                    if (null == t || null == r) return void R(!0);
                    k.current = !0;
                    try {
                        await O(t, r);
                    } finally {
                        k.current = !1;
                    }
                },
                [O],
            );
        return (0, i.jsxs)(n.k, {
            transitionState: t,
            onClose: a,
            gradientColor: "blue",
            dismissable: s,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, C.ST)(r),
            subtitle: (0, C.mK)(r, () => {
                p.A.openUrl(E.A.getArticleURL(_.MVz.TIGGER_PAWTECT_LEARN_MORE));
            }),
            children: [
                d && (0, i.jsx)(o.B, { direction: "vertical", align: "center", children: (0, i.jsx)(u.y, {}) }),
                N &&
                    (0, i.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "center",
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: L.intl.string(T.default["1RD2jW"]),
                            }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: L.intl.string(T.default.b7Oqdu),
                                onClick: () => R(!1),
                            }),
                        ],
                    }),
                !N &&
                    !d &&
                    !G &&
                    (0, i.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "center",
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: L.intl.string(c ? T.default.Bkmk4Y : T.default.cR6336),
                            }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: L.intl.string(T.default.hDvmYP),
                                onClick: I,
                            }),
                        ],
                    }),
                !N &&
                    G &&
                    (0, i.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: A.map((e) => {
                            let t = y[e.method];
                            return (0, i.jsxs)(
                                v.D,
                                {
                                    className: b.kZ,
                                    onClick: () => void w(e),
                                    children: [
                                        null != t &&
                                            (0, i.jsx)("div", {
                                                className: b.zc,
                                                children: (0, i.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, i.jsxs)("div", {
                                            className: b.Qq,
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
                                                        className: b.Vp,
                                                        children: (0, i.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsx)(x._, { className: b.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
