"use strict";
n.d(t, { A: () => ef });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(687498),
    c = n(158954),
    d = n(311907),
    _ = n(21161),
    f = n(133636),
    p = n(471296),
    h = n(178090),
    m = n(631899),
    E = n(961402),
    g = n(21086),
    A = n(346640),
    I = n(75772),
    T = n(985018),
    S = n(13636),
    y = n(980447),
    v = n(951797),
    N = n(860805),
    C = n(966059),
    R = n(864750),
    O = n(78169),
    b = n(971569),
    D = n(54704),
    L = n(133177),
    w = n(103544),
    M = n(732295),
    x = n(315830),
    P = n(758284),
    k = n(67565),
    U = n(20966),
    G = n(498039),
    F = n(735193),
    V = n(34888);
let B = -30,
    H = 30,
    j = -20,
    Y = 20,
    W = 20,
    K = 10,
    $ = -30,
    z = -10,
    q = 1e3,
    Z = [I.default.fNMuJd, I.default.uria72, I.default.nYZ5FX, I.default.H1gVyZ],
    X = [I.default.v3wzbo, I.default["8SdXIN"], I.default.lzwbIy, I.default.uM89A9],
    Q = { [E.dw.UP]: 0, [E.dw.RIGHT]: 90, [E.dw.DOWN]: 180, [E.dw.LEFT]: 270 },
    J = { duration: 100 },
    ee = 10,
    et = 20,
    en = { [A.xO.ARMOR_CRAFTER]: v.A, [A.xO.MAGIC_CRAFTER]: F.A, [A.xO.WEAPON_CRAFTER]: V.A },
    er = { [A.xO.ARMOR_CRAFTER]: b.A, [A.xO.MAGIC_CRAFTER]: L.A, [A.xO.WEAPON_CRAFTER]: P.A },
    ei = { [A.xO.ARMOR_CRAFTER]: D.A, [A.xO.MAGIC_CRAFTER]: w.A, [A.xO.WEAPON_CRAFTER]: k.A },
    es = { [A.xO.ARMOR_CRAFTER]: D.A, [A.xO.MAGIC_CRAFTER]: M.A, [A.xO.WEAPON_CRAFTER]: U.A },
    ea = { [A.xO.ARMOR_CRAFTER]: b.A, [A.xO.MAGIC_CRAFTER]: x.A, [A.xO.WEAPON_CRAFTER]: G.A },
    eo = {
        [A.xO.ARMOR_CRAFTER]: I.default.FfA72S,
        [A.xO.MAGIC_CRAFTER]: I.default.dxRSa3,
        [A.xO.WEAPON_CRAFTER]: I.default.qhlwZu,
    },
    el = {
        [A.xO.ARMOR_CRAFTER]: I.default.J2WFMP,
        [A.xO.MAGIC_CRAFTER]: I.default.oG7kLN,
        [A.xO.WEAPON_CRAFTER]: I.default.kxSKFU,
    };
function eu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    return (0, i.useMemo)(() => l().random(e, t), [t, e, ...n]);
}
function ec(e) {
    let { characterState: t } = e,
        [n, s] = (0, i.useState)(t === E.oi.SUCCESS ? "NICE!" : "OOPS!"),
        [a, o] = (0, i.useState)(!1),
        l = eu(B, H, [t]),
        d = eu(j, Y, [t]),
        _ = eu(W, K, [t]),
        f = eu($, z, [t]),
        p = eu(0, X.length - 1, [t]),
        m = eu(0, Z.length - 1, [t]),
        g = T.intl.string(X[p]),
        A = T.intl.string(Z[m]);
    return (
        (0, i.useEffect)(() => {
            if (t !== E.oi.PENDING) {
                o(!0);
                let e = setTimeout(() => {
                    o(!1);
                }, q);
                return () => {
                    clearTimeout(e);
                };
            }
            o(!1);
        }, [t]),
        (0, i.useEffect)(() => {
            t === E.oi.SUCCESS ? s(A) : t === E.oi.FAILURE && s(g);
        }, [g, t, A]),
        (0, c.pnh)(a ? [!0] : [!1], {
            from: { rotateZ: l, x: d, y: _, opacity: 0 },
            enter: { rotateZ: l, x: d, y: f, opacity: 1 },
            leave: { rotateZ: l, x: d, y: f, opacity: 0 },
        })((e, t) =>
            t
                ? (0, r.jsx)(u.animated.div, {
                      className: S.iU,
                      style: e,
                      children: (0, r.jsx)(h.A, { variant: "text-lg/bold", className: S.Lo, children: n }),
                  })
                : null,
        )
    );
}
function ed(e) {
    let { character: t } = e,
        n = Q[t.key],
        s = (0, i.useRef)(null),
        o = (0, i.useRef)(null),
        [d] = (0, c.zhh)(() => ({ ref: o, rotateZ: n }));
    (0, i.useEffect)(() => {
        (async () => {
            t.state === E.oi.FAILURE &&
                (await o.current?.start({ rotateZ: n - l().random(ee, et), config: J }),
                await o.current?.start({ rotateZ: n + l().random(ee, et), config: J }),
                await o.current?.start({ rotateZ: n, config: J }));
        })();
    }, [t.state, n]),
        (0, i.useEffect)(() => {
            o.current?.start({ rotateZ: n, config: J });
        }, [n]);
    let { createMultipleConfettiAt: f } = (0, i.useContext)(_.x);
    return (
        (0, i.useEffect)(() => {
            let e = s.current?.getBoundingClientRect();
            null != e && t.state === E.oi.SUCCESS && f(e.x + e.width / 2, e.y + e.height / 2);
        }, [t.state, f]),
        (0, r.jsxs)("div", {
            className: S.GG,
            children: [
                (0, r.jsx)(ec, { characterState: t.state }),
                (0, r.jsx)(u.animated.img, {
                    ref: s,
                    src: y.A,
                    alt: t.key,
                    className: a()({ [S.RC]: t.state === E.oi.SUCCESS }),
                    style: d,
                }),
            ],
        })
    );
}
function e_(e) {
    let { borderSrc: t, decoration1Src: n, decoration2Src: i } = e;
    return (0, r.jsxs)("div", {
        className: S.PQ,
        children: [
            (0, r.jsx)("img", { className: S.uq, src: t, alt: "" }),
            (0, r.jsxs)("div", {
                className: S.aW,
                children: [
                    (0, r.jsx)("img", { src: n, alt: "", className: S.e3 }),
                    (0, r.jsx)("img", { src: i, alt: "", className: S.De }),
                ],
            }),
        ],
    });
}
function ef(e) {
    let { setScreen: t } = e,
        { onSuccess: n, rewards: i } = (0, g.A)(A.$p.CRAFTING, t),
        s = (0, d.bG)([f.A], () => f.A.getCraftingClass() ?? A.xO.ARMOR_CRAFTER),
        { sequence: a, totalSequences: o, sequencesCompleted: l } = (0, E.Ay)(n, s),
        u = A.zX[s];
    return (0, r.jsx)(m.A, {
        rewardTitle: T.intl.string(I.default["dNV/IS"]),
        rewards: i,
        background: (0, r.jsx)("img", { src: en[s], alt: "", className: S.Tp }),
        setScreen: t,
        children: (0, r.jsxs)("div", {
            className: S.LO,
            children: [
                null == i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(p.A, {
                                  className: S.wx,
                                  textVariant: "heading-xxl/normal",
                                  children: T.intl.string(eo[s]),
                              }),
                              (0, r.jsx)(h.A, {
                                  className: S.VA,
                                  variant: "text-lg/normal",
                                  children: T.intl.string(el[s]),
                              }),
                          ],
                      })
                    : null,
                a.length > 0
                    ? (0, r.jsxs)("div", {
                          className: S.aD,
                          children: [
                              (0, r.jsx)(e_, { borderSrc: C.A, decoration1Src: er[s], decoration2Src: ei[s] }),
                              (0, r.jsx)("div", {
                                  className: S.X7,
                                  children: a.map((e, t) => (0, r.jsx)(ed, { character: e }, "key-" + t)),
                              }),
                              (0, r.jsx)(e_, { borderSrc: N.A, decoration1Src: es[s], decoration2Src: ea[s] }),
                              (0, r.jsx)(h.A, {
                                  className: S.GA,
                                  variant: "heading-xxl/normal",
                                  outlined: !0,
                                  children: T.intl.string(I.default["+wfQgQ"]),
                              }),
                              (0, r.jsx)("div", {
                                  className: S.Q2,
                                  children: Array.from({ length: o }).map((e, t) =>
                                      (0, r.jsx)(
                                          "img",
                                          { className: S.hX, src: t < l ? R.A : O.A, alt: "" },
                                          `win-indicator-${t}`,
                                      ),
                                  ),
                              }),
                          ],
                      })
                    : null,
                null == i ? (0, r.jsx)("img", { src: u.asset, alt: "", className: S.UY }) : null,
            ],
        }),
    });
}
