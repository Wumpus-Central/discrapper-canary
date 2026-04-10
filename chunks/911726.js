"use strict";
n.d(t, { Ay: () => w });
var i,
    r = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    c = n(106778),
    o = n(835245),
    u = n(23339),
    d = n(319060),
    _ = n(397927),
    E = n(21161),
    A = n(943961),
    m = n(513609),
    I = n(928830),
    T = n(567771),
    g = n(780964),
    N = n(858897),
    f = n(473145),
    p = n(763754),
    C = n(888675),
    h = n(921066),
    S = n(652215),
    R = n(985018),
    x = n(699987);
let O = {
    enter: { BEG: 0, END: 22 },
    confetti: { BEG: 23, END: 119 },
    leaf_peel: { BEG: 120, END: 160 },
    leaf_fall: { BEG: 161, END: 163 },
    exit: { BEG: 164, END: 200 },
};
var M =
    (((i = {}).TOP_LEFT = "TOP_LEFT"),
    (i.TOP_RIGHT = "TOP_RIGHT"),
    (i.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (i.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    i);
let D = ["TOP_LEFT", "TOP_RIGHT"],
    U = (0, u.xI)(d.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    P = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    L = Object.freeze({
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
            ...P,
            getConfettiPosition: (e) => ({ x: e - 11, y: 125 }),
            confettiVelocityDirection: { x: 1, y: -1 },
        },
        BOTTOM_RIGHT: {
            ...P,
            getConfettiPosition: (e) => ({ x: 11, y: 125 }),
            confettiVelocityDirection: { x: -1, y: -1 },
        },
    }),
    v = "falling-leaf",
    y = ["#61D5B2"],
    j = n(80705),
    k = n(232460),
    b = [j, k];
function G() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function H(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: l } = e,
        u = s.useRef(null),
        [d, A] = s.useState(null),
        [m] = s.useState(
            i ??
                (function () {
                    switch (Math.floor(Math.random() * Object.keys(M).length)) {
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
        { createMultipleConfettiAt: I, confettiCanvas: T } = s.useContext(E.x),
        [g, N] = s.useState(null),
        f = (0, c.f9)(T, g),
        p = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (D.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(d, m),
        C = D.includes(m),
        h = C && "exit" === d,
        S = s.useCallback((e) => {
            A(e);
        }, []),
        R = s.useCallback(() => {
            "exit" === d && t?.();
        }, [t, d]),
        P = s.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        s.useEffect(() => {
            if ("confetti" === d) {
                let { confettiVelocityDirection: e } = L[m],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let r = L[t].getConfettiPosition(n);
                        return { x: i.left + r.x, y: i.top + r.y };
                    })(u.current, m, l);
                I(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: { x: 10 * e.x, y: 80 * e.y },
                        maxValue: { x: 80 * e.x, y: 180 * e.y },
                    },
                });
            }
        }, [I, m, d, l]),
        s.useEffect(() => {
            if (C && "leaf_fall" === d) {
                let e = L[m].leafRotationDirection;
                f.createConfetti(
                    {
                        id: `${v}-${(0, o.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = L[t];
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
                    { sprite: "TOP_LEFT" === m ? j : k },
                );
            }
        }, [C, f, m, d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.K_, { ref: N, sprites: b, colors: y, spriteWidth: 45, spriteHeight: 45 }),
                (0, r.jsx)(_.DUT, {
                    onClick: n,
                    className: a()(x.FT, {
                        [x.FZ]: "TOP_LEFT" === m,
                        [x.S]: "TOP_RIGHT" === m,
                        [x.Re]: "BOTTOM_LEFT" === m,
                        [x._t]: "BOTTOM_RIGHT" === m,
                    }),
                    children: (0, r.jsx)(_.tvC, {
                        animationRef: P,
                        className: a()(x.oQ, { [x.EG]: h }),
                        nextScene: p,
                        sceneSegments: O,
                        onScenePlay: S,
                        onSceneComplete: R,
                        importData: G,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function F(e) {
    let t,
        { message: n, compact: i, guild: l, usernameHook: a, onClickMessage: c } = e,
        o = (function (e) {
            switch (e.type) {
                case S.lAJ.GUILD_BOOST_TIER_1:
                    return S.TVA.TIER_1;
                case S.lAJ.GUILD_BOOST_TIER_2:
                    return S.TVA.TIER_2;
                case S.lAJ.GUILD_BOOST_TIER_3:
                    return S.TVA.TIER_3;
            }
            return null;
        })(n),
        u = (0, T.A)(n),
        { createMultipleConfettiAt: d, addClickListener: A } = s.useContext(E.x),
        [h, O] = s.useState(!1),
        M = s.useRef(null),
        { reducedMotion: D } = s.useContext(_.CZY),
        U = (0, p.Ay)(n),
        P = U.nick,
        L = a(U);
    t =
        null == o || null == l
            ? u > 1
                ? R.intl.format(R.t.yfC9ds, { username: P, usernameHook: L, numSubscriptions: u })
                : R.intl.format(R.t["57St/7"], { username: P, usernameHook: L })
            : u > 1
              ? R.intl.format(R.t.PO9uJD, {
                    username: P,
                    usernameHook: L,
                    numSubscriptions: u,
                    guildName: l.name,
                    newTierName: (0, f.gb)(o),
                })
              : R.intl.format(R.t.cUfTTE, {
                    username: P,
                    usernameHook: L,
                    guildName: l.name,
                    newTierName: (0, f.gb)(o),
                });
    let y = s.useCallback(() => {
            if (!D.enabled)
                if (h || 0 !== Math.floor(50 * Math.random())) {
                    let e = M.current?.getBoundingClientRect();
                    if (null == e) return;
                    d(e.left + e.width / 2, e.top + e.height / 2);
                } else O(!0);
        }, [d, D, h]),
        j = s.useCallback(() => {
            O(!1);
        }, []),
        k = s.useCallback(() => {
            (0, I.O9)({ settingsVisible: !0 }), (0, N.openUserSettings)(g.X.POGGERMODE_PANEL), O(!1);
        }, []),
        b = s.useCallback(
            (e, t) => {
                t?.id.startsWith(v) && k();
            },
            [k],
        );
    s.useEffect(() => A(b));
    let G = s.useCallback(
            (e) => {
                e.target === e.currentTarget && c(e);
            },
            [c],
        ),
        F = (0, r.jsx)(_.DUT, {
            className: x.P0,
            innerRef: M,
            onClick: c,
            children: (0, r.jsx)(_._Jp, {
                color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: x.Kk,
                onMouseEnter: y,
            }),
        });
    return (0, r.jsxs)(C.A, {
        iconNode: F,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, r.jsx)("div", { onClick: G, className: x.iU, children: t }),
            h
                ? (0, r.jsx)(m.Ay, {
                      children: (0, r.jsx)("div", {
                          className: x.LK,
                          children: (0, r.jsx)(H, { onAnimationComplete: j, onClick: k }),
                      }),
                  })
                : null,
        ],
    });
}
function w(e) {
    let { message: t, compact: n, guild: i, usernameHook: s } = e,
        { enabled: l, showCta: a } = A.X.useConfig({ location: "UserPremiumGuildSubscription" });
    return t.type === S.lAJ.GUILD_BOOST && l && !n
        ? (0, r.jsx)(h.A, { message: t, guild: i, usernameHook: s, showCta: a })
        : (0, r.jsx)(F, { ...e });
}
