"use strict";
n.d(t, { Ay: () => V });
var i,
    r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(106778),
    c = n(835245),
    u = n(23339),
    d = n(319060),
    _ = n(939249),
    E = n(544048),
    A = n(844222),
    m = n(104510),
    I = n(827734),
    T = n(21161),
    N = n(943961),
    g = n(513609),
    p = n(928830),
    C = n(567771),
    f = n(780964),
    h = n(858897),
    R = n(473145),
    S = n(763754),
    O = n(888675),
    x = n(921066),
    M = n(652215),
    D = n(985018),
    P = n(746979);
let U = {
    enter: { BEG: 0, END: 22 },
    confetti: { BEG: 23, END: 119 },
    leaf_peel: { BEG: 120, END: 160 },
    leaf_fall: { BEG: 161, END: 163 },
    exit: { BEG: 164, END: 200 },
};
var y =
    (((i = {}).TOP_LEFT = "TOP_LEFT"),
    (i.TOP_RIGHT = "TOP_RIGHT"),
    (i.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (i.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    i);
let L = ["TOP_LEFT", "TOP_RIGHT"],
    v = (0, u.xI)(d.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    j = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    k = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({ x: e - 11, y: e - 125 }),
            confettiVelocityDirection: { x: 1, y: 1 },
            leafPosition: { x: 100, y: 144 },
            leafRotationDirection: 1,
        },
        TOP_RIGHT: {
            getConfettiPosition: (e) => ({ x: 11, y: e - 125 }),
            confettiVelocityDirection: { x: -1, y: 1 },
            leafPosition: { x: 90, y: 144 },
            leafRotationDirection: -1,
        },
        BOTTOM_LEFT: {
            ...j,
            getConfettiPosition: (e) => ({ x: e - 11, y: 125 }),
            confettiVelocityDirection: { x: 1, y: -1 },
        },
        BOTTOM_RIGHT: {
            ...j,
            getConfettiPosition: (e) => ({ x: 11, y: 125 }),
            confettiVelocityDirection: { x: -1, y: -1 },
        },
    }),
    b = "falling-leaf",
    G = ["#61D5B2"],
    w = n(80705),
    B = n(232460),
    H = [w, B];
function F() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function X(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: s } = e,
        u = l.useRef(null),
        [d, A] = l.useState(null),
        [m] = l.useState(
            i ??
                (function () {
                    switch (Math.floor(Math.random() * Object.keys(y).length)) {
                        case 0:
                            return "TOP_LEFT";
                        case 2:
                            return "TOP_RIGHT";
                        case 3:
                            return "BOTTOM_LEFT";
                        default:
                            return "BOTTOM_RIGHT";
                    }
                })(),
        ),
        { createMultipleConfettiAt: I, confettiCanvas: N } = l.useContext(T.x),
        [g, p] = l.useState(null),
        C = (0, o.f9)(N, g),
        f = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (L.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(d, m),
        h = L.includes(m),
        R = h && "exit" === d,
        S = l.useCallback((e) => {
            A(e);
        }, []),
        O = l.useCallback(() => {
            "exit" === d && t?.();
        }, [t, d]),
        x = l.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        l.useEffect(() => {
            if ("confetti" === d) {
                let { confettiVelocityDirection: e } = k[m],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let r = k[t].getConfettiPosition(n);
                        return { x: i.left + r.x, y: i.top + r.y };
                    })(u.current, m, s);
                I(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: { x: 10 * e.x, y: 80 * e.y },
                        maxValue: { x: 80 * e.x, y: 180 * e.y },
                    },
                });
            }
        }, [I, m, d, s]),
        l.useEffect(() => {
            if (h && "leaf_fall" === d) {
                let e = k[m].leafRotationDirection;
                C.createConfetti(
                    {
                        id: `${b}-${(0, c.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = k[t];
                                return { x: n.left + i.leafPosition.x, y: n.top + i.leafPosition.y };
                            })(u.current, m),
                        },
                        size: { type: "static", value: 45 },
                        rotation: {
                            type: "linear-random",
                            minValue: { x: 0, y: 0, z: 0 },
                            maxValue: { x: 0, y: 0, z: 0 },
                            minAddValue: { x: 0, y: 0, z: 8 * e },
                            maxAddValue: { x: 0, y: 0, z: 12 * e },
                        },
                    },
                    { sprite: "TOP_LEFT" === m ? w : B },
                );
            }
        }, [h, C, m, d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.K_, { ref: p, sprites: H, colors: G, spriteWidth: 45, spriteHeight: 45 }),
                (0, r.jsx)(_.D, {
                    onClick: n,
                    className: a()(P.FT, {
                        [P.FZ]: "TOP_LEFT" === m,
                        [P.S]: "TOP_RIGHT" === m,
                        [P.Re]: "BOTTOM_LEFT" === m,
                        [P._t]: "BOTTOM_RIGHT" === m,
                    }),
                    children: (0, r.jsx)(E.t, {
                        animationRef: x,
                        className: a()(P.oQ, { [P.EG]: R }),
                        nextScene: f,
                        sceneSegments: U,
                        onScenePlay: S,
                        onSceneComplete: O,
                        importData: F,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function q(e) {
    let t,
        { message: n, compact: i, guild: s, usernameHook: a, onClickMessage: o } = e,
        c = (function (e) {
            switch (e.type) {
                case M.lAJ.GUILD_BOOST_TIER_1:
                    return M.TVA.TIER_1;
                case M.lAJ.GUILD_BOOST_TIER_2:
                    return M.TVA.TIER_2;
                case M.lAJ.GUILD_BOOST_TIER_3:
                    return M.TVA.TIER_3;
            }
            return null;
        })(n),
        u = (0, C.A)(n),
        { createMultipleConfettiAt: d, addClickListener: E } = l.useContext(T.x),
        [N, x] = l.useState(!1),
        U = l.useRef(null),
        { reducedMotion: y } = l.useContext(A.C),
        L = (0, S.Ay)(n),
        v = L.nick,
        j = a(L);
    t =
        null == c || null == s
            ? u > 1
                ? D.intl.format(D.t.yfC9ds, { username: v, usernameHook: j, numSubscriptions: u })
                : D.intl.format(D.t["57St/7"], { username: v, usernameHook: j })
            : u > 1
              ? D.intl.format(D.t.PO9uJD, {
                    username: v,
                    usernameHook: j,
                    numSubscriptions: u,
                    guildName: s.name,
                    newTierName: (0, R.gb)(c),
                })
              : D.intl.format(D.t.cUfTTE, {
                    username: v,
                    usernameHook: j,
                    guildName: s.name,
                    newTierName: (0, R.gb)(c),
                });
    let k = l.useCallback(() => {
            if (!y.enabled)
                if (N || 0 !== Math.floor(50 * Math.random())) {
                    let e = U.current?.getBoundingClientRect();
                    if (null == e) return;
                    d(e.left + e.width / 2, e.top + e.height / 2);
                } else x(!0);
        }, [d, y, N]),
        G = l.useCallback(() => {
            x(!1);
        }, []),
        w = l.useCallback(() => {
            (0, p.O9)({ settingsVisible: !0 }), (0, h.openUserSettings)(f.X.POGGERMODE_PANEL), x(!1);
        }, []),
        B = l.useCallback(
            (e, t) => {
                t?.id.startsWith(b) && w();
            },
            [w],
        );
    l.useEffect(() => E(B));
    let H = l.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        F = (0, r.jsx)(_.D, {
            className: P.P0,
            innerRef: U,
            onClick: o,
            children: (0, r.jsx)(m._, {
                color: I.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: P.Kk,
                onMouseEnter: k,
            }),
        });
    return (0, r.jsxs)(O.A, {
        iconNode: F,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, r.jsx)("div", { onClick: H, className: P.iU, children: t }),
            N
                ? (0, r.jsx)(g.Ay, {
                      children: (0, r.jsx)("div", {
                          className: P.LK,
                          children: (0, r.jsx)(X, { onAnimationComplete: G, onClick: w }),
                      }),
                  })
                : null,
        ],
    });
}
function V(e) {
    let { message: t, compact: n, guild: i, usernameHook: l } = e,
        { enabled: s, showCta: a } = N.X.useConfig({ location: "UserPremiumGuildSubscription" });
    return t.type === M.lAJ.GUILD_BOOST && s && !n
        ? (0, r.jsx)(x.A, { message: t, guild: i, usernameHook: l, showCta: a })
        : (0, r.jsx)(q, { ...e });
}
