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
    A = r(36149),
    I = r(562465),
    _ = r(652215);
async function f() {
    return (await I.Bo.get({ url: _.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => ({
        method: e.method,
        vendor: e.vendor,
        title: e.title,
        description: e.description,
        providedBy: e.provided_by ?? null,
    }));
}
var g = r(40449),
    j = r(516761),
    C = r(375708),
    T = r(658103);
let L = { [a.mG.GOOGLE_WALLET]: s.l, [a.mG.FACIAL_AGE_ESTIMATION]: d.r, [a.mG.ID_SELFIE_MATCH]: c.L },
    b = { [a.mG.FACIAL_AGE_ESTIMATION]: g.VF.FACIAL_AGE_ESTIMATION, [a.mG.ID_SELFIE_MATCH]: g.VF.ID_VERIFICATION },
    y = { [a.dd.K_ID]: g.XM.K_ID, [a.dd.INCODE]: g.XM.INCODE, [a.dd.GOOGLE_WALLET]: g.XM.GOOGLE_WALLET },
    G = function (e) {
        let { transitionState: t, entryPoint: r, onClose: a, dismissable: s } = e,
            {
                loading: d,
                error: c,
                methods: I,
                refetch: g,
            } = (function () {
                let [e, t] = l.useState([]),
                    [r, i] = l.useState(!0),
                    [n, a] = l.useState(!1),
                    s = l.useRef(!0),
                    d = l.useCallback(async () => {
                        i(!0), a(!1);
                        try {
                            let e = await f();
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
            G = I.length > 0,
            { initiateAgeVerification: O } = (0, A.nn)({ onComplete: a, entryPoint: r, shouldShowExpressiveModal: !0 }),
            [N, R] = l.useState(!1),
            k = l.useRef(!1),
            w = l.useCallback(
                async (e) => {
                    if (k.current) return;
                    let t = b[e.method],
                        r = y[e.vendor];
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
            title: (0, A.ST)(r),
            subtitle: (0, A.mK)(r, () => {
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
                                children: C.intl.string(j.default["1RD2jW"]),
                            }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: C.intl.string(j.default.b7Oqdu),
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
                                children: C.intl.string(c ? j.default.Bkmk4Y : j.default.cR6336),
                            }),
                            (0, i.jsx)(m.$, {
                                variant: "primary",
                                size: "sm",
                                text: C.intl.string(j.default.hDvmYP),
                                onClick: g,
                            }),
                        ],
                    }),
                !N &&
                    G &&
                    (0, i.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: I.map((e) => {
                            let t = L[e.method];
                            return (0, i.jsxs)(
                                v.D,
                                {
                                    className: T.kZ,
                                    onClick: () => void w(e),
                                    children: [
                                        null != t &&
                                            (0, i.jsx)("div", {
                                                className: T.zc,
                                                children: (0, i.jsx)(t, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, i.jsxs)("div", {
                                            className: T.Qq,
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
                                                        className: T.Vp,
                                                        children: (0, i.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsx)(x._, { className: T.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
