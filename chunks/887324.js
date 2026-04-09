"use strict";
n.d(t, { IK: () => v, Kz: () => C });
var i,
    s = n(627968),
    r = n(64700),
    l = n(189213),
    a = n(311907),
    o = n(397927),
    c = n(830215),
    d = n(803306),
    u = n(49463),
    h = n(17372),
    _ = n(369053),
    p = n(961350),
    g = n(975571),
    m = n(204173),
    A = n(19992),
    f = n(501334),
    E = n(759788),
    x = n(652215),
    I = n(985018),
    N = n(366616);
a.Ay.initialize();
var v = (((i = {}).SELECTION = "selection"), (i.DSA = "dsa"), (i.TIDA = "tida"), i);
let T = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, v] = r.useState(!0),
            [C, j] = r.useState([]),
            [S, y] = r.useState(null),
            b = (0, a.bG)([p.default], () => p.default.isAuthenticated()),
            R = (0, a.bG)([u.A], () => u.A.hasLoadedExperiments),
            O = r.useCallback(() => {
                (0, _.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        v(!1), j(t);
                    })
                    .catch(() => {
                        v(!1), j([]);
                    });
            }, []);
        r.useEffect(() => {
            b
                ? (v(!0),
                  d
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => O())
                      .catch(() => v(!1)))
                : O();
        }, [b, O]),
            r.useEffect(() => {
                (async () => {
                    R || (await c.A.getLocationMetadata(), c.A.getExperiments());
                })();
            }, [R]);
        let L = C.filter((e) => e !== h.tY.MEDIA_TAKEDOWN),
            w = C.includes(h.tY.MEDIA_TAKEDOWN),
            k = L.length > 0,
            D = k && w,
            B = i || !R;
        r.useEffect(() => {
            B || k || w || n();
        }, [B, k, w, n]);
        let P = r.useCallback(() => {
                (0, o.mMO)(() => Promise.resolve((e) => (0, s.jsx)(T, { ...e })), { dismissable: !1 });
            }, []),
            U = r.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? y("selection") : y(e);
            }, []),
            G = r.useMemo(() => (0, m.i)(h.tY.MEDIA_TAKEDOWN, P), [P]),
            F = S ?? (D ? "selection" : k ? "dsa" : "tida");
        if (B || (!k && !w))
            return (0, s.jsx)(l.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, s.jsx)(o.BJc, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, s.jsx)(o.y$y, {}),
                }),
            });
        if (!D) {
            if (k)
                return (0, s.jsx)(l.Modal, {
                    title: I.intl.string(I.t.Z11w18),
                    subtitle: I.intl.format(I.t["532l+q"], {
                        supportURL: g.A.getArticleURL(x.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, s.jsx)(A.c, { dsaCapabilities: L, onReopen: P }),
                });
            if (w)
                return (0, s.jsx)(l.Modal, {
                    title: I.intl.string(I.t.YignUm),
                    actions: [{ text: I.intl.string(I.t.D5Czbu), variant: "primary", onClick: G }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, s.jsx)(E.K, {}),
                });
        }
        let M = [
            { stepKey: "selection", modalProps: { title: I.intl.string(I.t.Z11w18) }, body: (0, s.jsx)(f.u, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: I.intl.string(I.t.Z11w18),
                    subtitle: I.intl.format(I.t["532l+q"], {
                        supportURL: g.A.getArticleURL(x.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, s.jsx)(A.c, { dsaCapabilities: L, onReopen: P }),
            },
            {
                stepKey: "tida",
                modalProps: { title: I.intl.string(I.t.YignUm) },
                body: (0, s.jsx)(E.K, {}),
                nextButtonProps: { text: I.intl.string(I.t.D5Czbu) },
                onNext: () => (G(), !1),
            },
        ];
        return (0, s.jsx)("div", {
            className: { selection: N.a, dsa: N.q, tida: void 0 }[F],
            children: (0, s.jsx)(o.t04, {
                steps: M,
                currentStepKey: F,
                onStepChange: U,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    C = () => (
        r.useEffect(() => {
            (0, o.mMO)(() => Promise.resolve((e) => (0, s.jsx)(T, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
