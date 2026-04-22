"use strict";
n.d(t, { IK: () => T, Kz: () => S });
var i,
    s = n(627968),
    r = n(64700),
    l = n(189213),
    a = n(311907),
    o = n(192308),
    c = n(331322),
    d = n(289873),
    u = n(347704),
    _ = n(830215),
    h = n(803306),
    m = n(49463),
    p = n(17372),
    g = n(369053),
    A = n(961350),
    f = n(975571),
    x = n(204173),
    E = n(19992),
    I = n(501334),
    v = n(759788),
    N = n(652215),
    j = n(985018),
    C = n(725925);
a.Ay.initialize();
var T = (((i = {}).SELECTION = "selection"), (i.DSA = "dsa"), (i.TIDA = "tida"), i);
let b = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, T] = r.useState(!0),
            [S, y] = r.useState([]),
            [R, w] = r.useState(null),
            O = (0, a.bG)([A.default], () => A.default.isAuthenticated()),
            L = (0, a.bG)([m.A], () => m.A.hasLoadedExperiments),
            k = r.useCallback(() => {
                (0, g.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        T(!1), y(t);
                    })
                    .catch(() => {
                        T(!1), y([]);
                    });
            }, []);
        r.useEffect(() => {
            O
                ? (T(!0),
                  h
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => k())
                      .catch(() => T(!1)))
                : k();
        }, [O, k]),
            r.useEffect(() => {
                (async () => {
                    L || (await _.A.getLocationMetadata(), _.A.getExperiments());
                })();
            }, [L]);
        let G = S.filter((e) => e !== p.tY.MEDIA_TAKEDOWN),
            U = S.includes(p.tY.MEDIA_TAKEDOWN),
            D = G.length > 0,
            P = D && U,
            B = i || !L;
        r.useEffect(() => {
            B || D || U || n();
        }, [B, D, U, n]);
        let M = r.useCallback(() => {
                (0, o.openModalLazy)(() => Promise.resolve((e) => (0, s.jsx)(b, { ...e })), { dismissable: !1 });
            }, []),
            V = r.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? w("selection") : w(e);
            }, []),
            F = r.useMemo(() => (0, x.i)(p.tY.MEDIA_TAKEDOWN, M), [M]),
            W = R ?? (P ? "selection" : D ? "dsa" : "tida");
        if (B || (!D && !U))
            return (0, s.jsx)(l.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, s.jsx)(c.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, s.jsx)(d.y, {}),
                }),
            });
        if (!P) {
            if (D)
                return (0, s.jsx)(l.Modal, {
                    title: j.intl.string(j.t.Z11w18),
                    subtitle: j.intl.format(j.t["532l+q"], {
                        supportURL: f.A.getArticleURL(N.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, s.jsx)(E.c, { dsaCapabilities: G, onReopen: M }),
                });
            if (U)
                return (0, s.jsx)(l.Modal, {
                    title: j.intl.string(j.t.YignUm),
                    actions: [{ text: j.intl.string(j.t.D5Czbu), variant: "primary", onClick: F }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, s.jsx)(v.K, {}),
                });
        }
        let H = [
            { stepKey: "selection", modalProps: { title: j.intl.string(j.t.Z11w18) }, body: (0, s.jsx)(I.u, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: j.intl.string(j.t.Z11w18),
                    subtitle: j.intl.format(j.t["532l+q"], {
                        supportURL: f.A.getArticleURL(N.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, s.jsx)(E.c, { dsaCapabilities: G, onReopen: M }),
            },
            {
                stepKey: "tida",
                modalProps: { title: j.intl.string(j.t.YignUm) },
                body: (0, s.jsx)(v.K, {}),
                nextButtonProps: { text: j.intl.string(j.t.D5Czbu) },
                onNext: () => (F(), !1),
            },
        ];
        return (0, s.jsx)("div", {
            className: { selection: C.a, dsa: C.q, tida: void 0 }[W],
            children: (0, s.jsx)(u.t, {
                steps: H,
                currentStepKey: W,
                onStepChange: V,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    S = () => (
        r.useEffect(() => {
            (0, o.openModalLazy)(() => Promise.resolve((e) => (0, s.jsx)(b, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
