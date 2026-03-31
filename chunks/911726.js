n.d(t, { Ay: () => H });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(106778),
    c = n(835245),
    d = n(23339),
    u = n(319060),
    _ = n(397927),
    m = n(21161),
    A = n(943961),
    E = n(513609),
    I = n(928830),
    T = n(567771),
    f = n(780964),
    N = n(840065),
    C = n(473145),
    g = n(763754),
    h = n(888675),
    p = n(921066),
    x = n(652215),
    R = n(985018),
    S = n(699987);
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
    P = (0, d.xI)(u.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    U = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    v = Object.freeze({
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
            ...U,
            getConfettiPosition: (e) => ({ x: e - 11, y: 125 }),
            confettiVelocityDirection: { x: 1, y: -1 },
        },
        BOTTOM_RIGHT: {
            ...U,
            getConfettiPosition: (e) => ({ x: 11, y: 125 }),
            confettiVelocityDirection: { x: -1, y: -1 },
        },
    }),
    L = "falling-leaf",
    j = ["#61D5B2"],
    y = n(80705),
    b = n(232460),
    k = [y, b];
function G() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function F(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: r } = e,
        d = a.useRef(null),
        [u, A] = a.useState(null),
        [E] = a.useState(
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
        { createMultipleConfettiAt: I, confettiCanvas: T } = a.useContext(m.x),
        [f, N] = a.useState(null),
        C = (0, o.f9)(T, f),
        g = (function (e, t) {
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
        })(u, E),
        h = D.includes(E),
        p = h && "exit" === u,
        x = a.useCallback((e) => {
            A(e);
        }, []),
        R = a.useCallback(() => {
            "exit" === u && t?.();
        }, [t, u]),
        U = a.useCallback((e) => {
            d.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ("confetti" === u) {
                let { confettiVelocityDirection: e } = v[E],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let l = v[t].getConfettiPosition(n);
                        return { x: i.left + l.x, y: i.top + l.y };
                    })(d.current, E, r);
                I(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: { x: 10 * e.x, y: 80 * e.y },
                        maxValue: { x: 80 * e.x, y: 180 * e.y },
                    },
                });
            }
        }, [I, E, u, r]),
        a.useEffect(() => {
            if (h && "leaf_fall" === u) {
                let e = v[E].leafRotationDirection;
                C.createConfetti(
                    {
                        id: `${L}-${(0, c.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = v[t];
                                return { x: n.left + i.leafPosition.x, y: n.top + i.leafPosition.y };
                            })(d.current, E),
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
                    { sprite: "TOP_LEFT" === E ? y : b },
                );
            }
        }, [h, C, E, u]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.K_, { ref: N, sprites: k, colors: j, spriteWidth: 45, spriteHeight: 45 }),
                (0, l.jsx)(_.DUT, {
                    onClick: n,
                    className: s()(S.FT, {
                        [S.FZ]: "TOP_LEFT" === E,
                        [S.S]: "TOP_RIGHT" === E,
                        [S.Re]: "BOTTOM_LEFT" === E,
                        [S._t]: "BOTTOM_RIGHT" === E,
                    }),
                    children: (0, l.jsx)(_.tvC, {
                        animationRef: U,
                        className: s()(S.oQ, { [S.EG]: p }),
                        nextScene: g,
                        sceneSegments: O,
                        onScenePlay: x,
                        onSceneComplete: R,
                        importData: G,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function B(e) {
    let t,
        { message: n, compact: i, guild: r, usernameHook: s, onClickMessage: o } = e,
        c = (function (e) {
            switch (e.type) {
                case x.lAJ.GUILD_BOOST_TIER_1:
                    return x.TVA.TIER_1;
                case x.lAJ.GUILD_BOOST_TIER_2:
                    return x.TVA.TIER_2;
                case x.lAJ.GUILD_BOOST_TIER_3:
                    return x.TVA.TIER_3;
            }
            return null;
        })(n),
        d = (0, T.A)(n),
        { createMultipleConfettiAt: u, addClickListener: A } = a.useContext(m.x),
        [p, O] = a.useState(!1),
        M = a.useRef(null),
        { reducedMotion: D } = a.useContext(_.CZY),
        P = (0, g.Ay)(n),
        U = P.nick,
        v = s(P);
    t =
        null == c || null == r
            ? d > 1
                ? R.intl.format(R.t.yfC9ds, { username: U, usernameHook: v, numSubscriptions: d })
                : R.intl.format(R.t["57St/7"], { username: U, usernameHook: v })
            : d > 1
              ? R.intl.format(R.t.PO9uJD, {
                    username: U,
                    usernameHook: v,
                    numSubscriptions: d,
                    guildName: r.name,
                    newTierName: (0, C.gb)(c),
                })
              : R.intl.format(R.t.cUfTTE, {
                    username: U,
                    usernameHook: v,
                    guildName: r.name,
                    newTierName: (0, C.gb)(c),
                });
    let j = a.useCallback(() => {
            if (!D.enabled)
                if (p || 0 !== Math.floor(50 * Math.random())) {
                    let e = M.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2);
                } else O(!0);
        }, [u, D, p]),
        y = a.useCallback(() => {
            O(!1);
        }, []),
        b = a.useCallback(() => {
            (0, I.O9)({ settingsVisible: !0 }), (0, N.openUserSettings)(f.X.POGGERMODE_PANEL), O(!1);
        }, []),
        k = a.useCallback(
            (e, t) => {
                t?.id.startsWith(L) && b();
            },
            [b],
        );
    a.useEffect(() => A(k));
    let G = a.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        B = (0, l.jsx)(_.DUT, {
            className: S.P0,
            innerRef: M,
            onClick: o,
            children: (0, l.jsx)(_._Jp, {
                color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: S.Kk,
                onMouseEnter: j,
            }),
        });
    return (0, l.jsxs)(h.A, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, l.jsx)("div", { onClick: G, className: S.iU, children: t }),
            p
                ? (0, l.jsx)(E.Ay, {
                      children: (0, l.jsx)("div", {
                          className: S.LK,
                          children: (0, l.jsx)(F, { onAnimationComplete: y, onClick: b }),
                      }),
                  })
                : null,
        ],
    });
}
function H(e) {
    let { message: t, compact: n, guild: i, usernameHook: a } = e,
        { enabled: r, compact: s } = A.X.useConfig({ location: "UserPremiumGuildSubscription" });
    return t.type === x.lAJ.GUILD_BOOST && r && !n
        ? (0, l.jsx)(p.A, { message: t, guild: i, usernameHook: a, compact: s })
        : (0, l.jsx)(B, { ...e });
}
