n.d(t, { Ay: () => w });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(106778),
    d = n(835245),
    c = n(23339),
    u = n(319060),
    m = n(397927),
    _ = n(21161),
    h = n(513609),
    p = n(928830),
    g = n(567771),
    A = n(780964),
    f = n(840065),
    x = n(473145),
    E = n(763754),
    C = n(888675),
    I = n(652215),
    T = n(985018),
    v = n(811336);
let N = {
    enter: { BEG: 0, END: 22 },
    confetti: { BEG: 23, END: 119 },
    leaf_peel: { BEG: 120, END: 160 },
    leaf_fall: { BEG: 161, END: 163 },
    exit: { BEG: 164, END: 200 },
};
var S =
    (((i = {}).TOP_LEFT = "TOP_LEFT"),
    (i.TOP_RIGHT = "TOP_RIGHT"),
    (i.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (i.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    i);
let b = ["TOP_LEFT", "TOP_RIGHT"],
    y = (0, c.xI)(u.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    j = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    R = Object.freeze({
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
    L = "falling-leaf",
    M = ["#61D5B2"],
    O = n(80705),
    P = n(232460),
    D = [O, P];
function k() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function U(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: r } = e,
        c = a.useRef(null),
        [u, h] = a.useState(null),
        [p] = a.useState(
            i ??
                (function () {
                    switch (Math.floor(Math.random() * Object.keys(S).length)) {
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
        { createMultipleConfettiAt: g, confettiCanvas: A } = a.useContext(_.x),
        [f, x] = a.useState(null),
        E = (0, o.f9)(A, f),
        C = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (b.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(u, p),
        I = b.includes(p),
        T = I && "exit" === u,
        j = a.useCallback((e) => {
            h(e);
        }, []),
        U = a.useCallback(() => {
            "exit" === u && t?.();
        }, [t, u]),
        w = a.useCallback((e) => {
            c.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ("confetti" === u) {
                let { confettiVelocityDirection: e } = R[p],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let l = R[t].getConfettiPosition(n);
                        return { x: i.left + l.x, y: i.top + l.y };
                    })(c.current, p, r);
                g(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: { x: 10 * e.x, y: 80 * e.y },
                        maxValue: { x: 80 * e.x, y: 180 * e.y },
                    },
                });
            }
        }, [g, p, u, r]),
        a.useEffect(() => {
            if (I && "leaf_fall" === u) {
                let e = R[p].leafRotationDirection;
                E.createConfetti(
                    {
                        id: `${L}-${(0, d.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = R[t];
                                return { x: n.left + i.leafPosition.x, y: n.top + i.leafPosition.y };
                            })(c.current, p),
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
                    { sprite: "TOP_LEFT" === p ? O : P },
                );
            }
        }, [I, E, p, u]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.K_, { ref: x, sprites: D, colors: M, spriteWidth: 45, spriteHeight: 45 }),
                (0, l.jsx)(m.DUT, {
                    onClick: n,
                    className: s()(v.FT, {
                        [v.FZ]: "TOP_LEFT" === p,
                        [v.S]: "TOP_RIGHT" === p,
                        [v.Re]: "BOTTOM_LEFT" === p,
                        [v._t]: "BOTTOM_RIGHT" === p,
                    }),
                    children: (0, l.jsx)(m.tvC, {
                        animationRef: w,
                        className: s()(v.oQ, { [v.EG]: T }),
                        nextScene: C,
                        sceneSegments: N,
                        onScenePlay: j,
                        onSceneComplete: U,
                        importData: k,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function w(e) {
    let t,
        { message: n, compact: i, guild: r, usernameHook: s, onClickMessage: o } = e,
        d = (function (e) {
            switch (e.type) {
                case I.lAJ.GUILD_BOOST_TIER_1:
                    return I.TVA.TIER_1;
                case I.lAJ.GUILD_BOOST_TIER_2:
                    return I.TVA.TIER_2;
                case I.lAJ.GUILD_BOOST_TIER_3:
                    return I.TVA.TIER_3;
            }
            return null;
        })(n),
        c = (0, g.A)(n),
        { createMultipleConfettiAt: u, addClickListener: N } = a.useContext(_.x),
        [S, b] = a.useState(!1),
        y = a.useRef(null),
        { reducedMotion: j } = a.useContext(m.CZY),
        R = (0, E.Ay)(n),
        M = R.nick,
        O = s(R);
    t =
        null == d || null == r
            ? c > 1
                ? T.intl.format(T.t.yfC9ds, { username: M, usernameHook: O, numSubscriptions: c })
                : T.intl.format(T.t["57St/7"], { username: M, usernameHook: O })
            : c > 1
              ? T.intl.format(T.t.PO9uJD, {
                    username: M,
                    usernameHook: O,
                    numSubscriptions: c,
                    guildName: r.name,
                    newTierName: (0, x.gb)(d),
                })
              : T.intl.format(T.t.cUfTTE, {
                    username: M,
                    usernameHook: O,
                    guildName: r.name,
                    newTierName: (0, x.gb)(d),
                });
    let P = a.useCallback(() => {
            if (!j.enabled)
                if (S || 0 !== Math.floor(50 * Math.random())) {
                    let e = y.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2);
                } else b(!0);
        }, [u, j, S]),
        D = a.useCallback(() => {
            b(!1);
        }, []),
        k = a.useCallback(() => {
            (0, p.O9)({ settingsVisible: !0 }),
                (0, f.openUserSettings)(A.X.POGGERMODE_PANEL, { section: I.nc_.POGGERMODE }),
                b(!1);
        }, []),
        w = a.useCallback(
            (e, t) => {
                t?.id.startsWith(L) && k();
            },
            [k],
        );
    a.useEffect(() => N(w));
    let G = a.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        B = (0, l.jsx)(m.DUT, {
            className: v.P0,
            innerRef: y,
            onClick: o,
            children: (0, l.jsx)(m._Jp, {
                color: m.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: v.Kk,
                onMouseEnter: P,
            }),
        });
    return (0, l.jsxs)(C.A, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, l.jsx)("div", { onClick: G, className: v.iU, children: t }),
            S
                ? (0, l.jsx)(h.Ay, {
                      children: (0, l.jsx)("div", {
                          className: v.LK,
                          children: (0, l.jsx)(U, { onAnimationComplete: D, onClick: k }),
                      }),
                  })
                : null,
        ],
    });
}
