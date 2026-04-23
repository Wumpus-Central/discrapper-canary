"use strict";
n.d(t, { IK: () => T, Kz: () => b });
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
    g = n(17372),
    p = n(369053),
    A = n(961350),
    f = n(975571),
    E = n(204173),
    x = n(19992),
    I = n(501334),
    v = n(759788),
    N = n(652215),
    j = n(985018),
    C = n(725925);
a.Ay.initialize();
var T = (((i = {}).SELECTION = "selection"), (i.DSA = "dsa"), (i.TIDA = "tida"), i);
let y = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, T] = r.useState(!0),
            [b, S] = r.useState([]),
            [R, O] = r.useState(null),
            L = (0, a.bG)([A.default], () => A.default.isAuthenticated()),
            w = (0, a.bG)([m.A], () => m.A.hasLoadedExperiments),
            k = r.useCallback(() => {
                (0, p.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        T(!1), S(t);
                    })
                    .catch(() => {
                        T(!1), S([]);
                    });
            }, []);
        r.useEffect(() => {
            L
                ? (T(!0),
                  h
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => k())
                      .catch(() => T(!1)))
                : k();
        }, [L, k]),
            r.useEffect(() => {
                (async () => {
                    w || (await _.A.getLocationMetadata(), _.A.getExperiments());
                })();
            }, [w]);
        let G = b.filter((e) => e !== g.tY.MEDIA_TAKEDOWN),
            D = b.includes(g.tY.MEDIA_TAKEDOWN),
            P = G.length > 0,
            U = P && D,
            B = i || !w;
        r.useEffect(() => {
            B || P || D || n();
        }, [B, P, D, n]);
        let M = r.useCallback(() => {
                (0, o.openModalLazy)(() => Promise.resolve((e) => (0, s.jsx)(y, { ...e })), { dismissable: !1 });
            }, []),
            V = r.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? O("selection") : O(e);
            }, []),
            F = r.useMemo(() => (0, E.i)(g.tY.MEDIA_TAKEDOWN, M), [M]),
            W = R ?? (U ? "selection" : P ? "dsa" : "tida");
        if (B || (!P && !D))
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
        if (!U) {
            if (P)
                return (0, s.jsx)(l.Modal, {
                    title: j.intl.string(j.t.Z11w18),
                    subtitle: j.intl.format(j.t["532l+q"], {
                        supportURL: f.A.getArticleURL(N.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, s.jsx)(x.c, { dsaCapabilities: G, onReopen: M }),
                });
            if (D)
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
                body: (0, s.jsx)(x.c, { dsaCapabilities: G, onReopen: M }),
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
    b = () => (
        r.useEffect(() => {
            (0, o.openModalLazy)(() => Promise.resolve((e) => (0, s.jsx)(y, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
