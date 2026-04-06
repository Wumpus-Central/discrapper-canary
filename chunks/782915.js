"use strict";
n.d(t, { A: () => k });
var r = n(627968),
    i = n(64700),
    s = n(736469),
    a = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(775121),
    c = n(251358),
    d = n(352306),
    _ = n(485533),
    f = n(133636),
    p = n(537885),
    h = n(577767),
    m = n(728257),
    E = n(257044),
    g = n(610223),
    A = n(178090),
    I = n(869379),
    T = n(616505),
    S = n(168137),
    y = n(732919),
    v = n(166341),
    N = n(797842),
    C = n(771859),
    R = n(417602),
    O = n(431720),
    b = n(421116),
    D = n(346640),
    L = n(985018),
    w = n(393144),
    M = n(607011);
function x(e) {
    let { onClose: t } = e;
    (0, p.A)(), (0, g.T)(s.A);
    let {
            isFetchingUserData: d,
            combatClass: N,
            craftingClass: x,
        } = (0, o.cf)([f.A], () => ({
            isFetchingUserData: f.A.isFetchingUserData(),
            combatClass: f.A.getCombatClass(),
            craftingClass: f.A.getCraftingClass(),
        })),
        [P, k] = (0, i.useState)(null),
        [U, G] = (0, i.useState)(x),
        [F, V] = (0, i.useState)(N);
    (0, i.useEffect)(() => {
        V(N);
    }, [N]),
        (0, i.useEffect)(() => {
            G(x);
        }, [x]);
    let B = (0, i.useCallback)(
            async (e) => {
                e === D.Q0.MAIN && (await (0, c.nb)({ combatClass: F, craftingClass: U })), k(e);
            },
            [F, U],
        ),
        H = (0, i.useCallback)((e) => F === D.zX[e].invalidCombatClass, [F]);
    (0, i.useEffect)(() => {
        null != P || d || k(D.Q0.PATCH_NOTES);
    }, [d, P]),
        (0, i.useEffect)(
            () => (
                _.A.initialize(),
                () => {
                    _.A.terminate();
                }
            ),
            [],
        );
    let j = (0, i.useCallback)(() => {
            switch (P) {
                case D.Q0.PATCH_NOTES:
                    return (0, r.jsx)(O.A, { setScreen: k });
                case D.Q0.INTRO:
                    return (0, r.jsx)(C.A, { setScreen: k });
                case D.Q0.COMBAT_CLASS_SELECTION:
                    return (0, r.jsx)(y.A, { setScreen: k, handleSelect: V, selectedClass: F });
                case D.Q0.CRAFTING_CLASS_SELECTION:
                    return (0, r.jsx)(v.A, { setScreen: B, handleSelect: G, selectedClass: U, isDisabled: H });
                case D.Q0.CRAFTING:
                    return (0, r.jsx)(I.A, { setScreen: k });
                case D.Q0.COMBAT:
                    return (0, r.jsx)(S.A, { setScreen: k });
                case D.Q0.MAIN:
                    return (0, r.jsx)(R.A, { setScreen: k });
                case D.Q0.STATS:
                    return (0, r.jsx)(b.A, { setScreen: k });
                case D.Q0.ACHIEVEMENTS:
                    return (0, r.jsx)(T.A, { setScreen: k });
            }
        }, [B, P, F, U, H]),
        Y = (0, i.useMemo)(() => (0, h.x)(t), [t]);
    (0, i.useEffect)(() => (u.A.enable(), u.A.enableTemp(Y), () => u.A.disableTemp()), [Y]);
    let W = (0, i.useCallback)(() => {
            (0, h.k)(t);
        }, [t]),
        K = (0, i.useCallback)(() => {
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 740908));
                return (t) => (0, r.jsx)(e, { ...t, setScreen: k });
            });
        }, []);
    return (0, r.jsx)(m.A, {
        children: (0, r.jsxs)("div", {
            className: w.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: w.o1,
                    children: [
                        (0, r.jsx)(E.A, {
                            onClick: K,
                            "aria-label": L.intl.string(L.t["3D5yo/"]),
                            className: w.x6,
                            children: (0, r.jsx)("img", { src: M.A, alt: "" }),
                        }),
                        (0, r.jsx)(E.A, {
                            onClick: W,
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            className: w.x6,
                            children: (0, r.jsx)(A.A, {
                                color: "always-white",
                                variant: "heading-xl/normal",
                                outlined: !0,
                                children: "X",
                            }),
                        }),
                    ],
                }),
                d ? (0, r.jsx)(a.y$y, {}) : j(),
            ],
        }),
    });
}
function P(e) {
    let { onClose: t } = e,
        [n, s] = (0, i.useState)(D.Q0.END),
        a = (0, i.useCallback)(() => {
            switch (n) {
                case D.Q0.STATS:
                    return (0, r.jsx)(b.A, { setScreen: s });
                case D.Q0.ACHIEVEMENTS:
                    return (0, r.jsx)(T.A, { setScreen: s });
                case D.Q0.END:
                default:
                    return (0, r.jsx)(N.A, { setScreen: s });
            }
        }, [n]);
    return (0, r.jsx)(m.A, {
        children: (0, r.jsxs)("div", {
            className: w.kL,
            children: [
                (0, r.jsx)("div", {
                    className: w.o1,
                    children: (0, r.jsx)(E.A, {
                        onClick: t,
                        "aria-label": L.intl.string(L.t.cpT0Cq),
                        className: w.x6,
                        children: (0, r.jsx)(A.A, {
                            color: "always-white",
                            variant: "heading-xl/normal",
                            outlined: !0,
                            children: "X",
                        }),
                    }),
                }),
                a(),
            ],
        }),
    });
}
function k(e) {
    let { onClose: t } = e,
        { eventOver: n } = d.s.useConfig({ location: "gorilla" });
    return n ? (0, r.jsx)(P, { onClose: t }) : (0, r.jsx)(x, { onClose: t });
}
