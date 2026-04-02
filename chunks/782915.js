"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    s = n(736469),
    a = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(775121),
    c = n(251358),
    d = n(485533),
    _ = n(133636),
    f = n(537885),
    p = n(577767),
    h = n(728257),
    m = n(257044),
    E = n(610223),
    g = n(178090),
    A = n(869379),
    I = n(616505),
    T = n(168137),
    S = n(732919),
    y = n(166341),
    v = n(771859),
    N = n(417602),
    C = n(431720),
    R = n(421116),
    O = n(346640),
    b = n(985018),
    D = n(296957),
    L = n(607011);
function w(e) {
    let { onClose: t } = e;
    (0, f.A)(), (0, E.T)(s.A);
    let {
            isFetchingUserData: w,
            combatClass: M,
            craftingClass: x,
        } = (0, o.cf)([_.A], () => ({
            isFetchingUserData: _.A.isFetchingUserData(),
            combatClass: _.A.getCombatClass(),
            craftingClass: _.A.getCraftingClass(),
        })),
        [P, k] = (0, i.useState)(null),
        [U, G] = (0, i.useState)(x),
        [F, V] = (0, i.useState)(M);
    (0, i.useEffect)(() => {
        V(M);
    }, [M]),
        (0, i.useEffect)(() => {
            G(x);
        }, [x]);
    let B = (0, i.useCallback)(
            async (e) => {
                e === O.Q0.MAIN && (await (0, c.nb)({ combatClass: F, craftingClass: U })), k(e);
            },
            [F, U],
        ),
        H = (0, i.useCallback)((e) => F === O.zX[e].invalidCombatClass, [F]);
    (0, i.useEffect)(() => {
        null != P || w || k(O.Q0.PATCH_NOTES);
    }, [w, P]),
        (0, i.useEffect)(
            () => (
                d.A.initialize(),
                () => {
                    d.A.terminate();
                }
            ),
            [],
        );
    let j = (0, i.useCallback)(() => {
            switch (P) {
                case O.Q0.PATCH_NOTES:
                    return (0, r.jsx)(C.A, { setScreen: k });
                case O.Q0.INTRO:
                    return (0, r.jsx)(v.A, { setScreen: k });
                case O.Q0.COMBAT_CLASS_SELECTION:
                    return (0, r.jsx)(S.A, { setScreen: k, handleSelect: V, selectedClass: F });
                case O.Q0.CRAFTING_CLASS_SELECTION:
                    return (0, r.jsx)(y.A, { setScreen: B, handleSelect: G, selectedClass: U, isDisabled: H });
                case O.Q0.CRAFTING:
                    return (0, r.jsx)(A.A, { setScreen: k });
                case O.Q0.COMBAT:
                    return (0, r.jsx)(T.A, { setScreen: k });
                case O.Q0.MAIN:
                    return (0, r.jsx)(N.A, { setScreen: k });
                case O.Q0.STATS:
                    return (0, r.jsx)(R.A, { setScreen: k });
                case O.Q0.ACHIEVEMENTS:
                    return (0, r.jsx)(I.A, { setScreen: k });
            }
        }, [B, P, F, U, H]),
        Y = (0, i.useMemo)(() => (0, p.x)(t), [t]);
    (0, i.useEffect)(() => (u.A.enable(), u.A.enableTemp(Y), () => u.A.disableTemp()), [Y]);
    let W = (0, i.useCallback)(() => {
            (0, p.k)(t);
        }, [t]),
        K = (0, i.useCallback)(() => {
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 740908));
                return (t) => (0, r.jsx)(e, { ...t, setScreen: k });
            });
        }, []);
    return (0, r.jsx)(h.A, {
        children: (0, r.jsxs)("div", {
            className: D.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: D.o1,
                    children: [
                        (0, r.jsx)(m.A, {
                            onClick: K,
                            "aria-label": b.intl.string(b.t["3D5yo/"]),
                            className: D.x6,
                            children: (0, r.jsx)("img", { src: L.A, alt: "" }),
                        }),
                        (0, r.jsx)(m.A, {
                            onClick: W,
                            "aria-label": b.intl.string(b.t.cpT0Cq),
                            className: D.x6,
                            children: (0, r.jsx)(g.A, {
                                color: "always-white",
                                variant: "heading-xl/normal",
                                outlined: !0,
                                children: "X",
                            }),
                        }),
                    ],
                }),
                w ? (0, r.jsx)(a.y$y, {}) : j(),
            ],
        }),
    });
}
