"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(517461),
    d = n(770178),
    u = n(418126),
    h = n(266626),
    A = n(998740),
    p = n(732777),
    g = n(709382),
    m = n(287245),
    _ = n(615658),
    f = n(592044),
    x = n(100449),
    C = n(588703),
    E = n(985018),
    I = n(185014);
let b = (e) => {
        let { channel: t, idle: n, className: l, participants: a } = e,
            h = (0, p.A)(t.id),
            [A, b] = s.useState(!1),
            N = s.useCallback(
                (e) => {
                    u.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [S, T] = (0, c.V)("haven-show-chat", !1);
        s.useEffect(() => {
            setTimeout(() => {
                b(!0);
            }, 2500);
        }, []);
        let [v, y] = s.useState(0.65),
            [j, R] = s.useState(0.65),
            [O, L] = s.useState(0.65),
            [M, D] = s.useState({ x: 0, y: 0 }),
            [G, U] = s.useState(!1),
            [P, w] = s.useState(0),
            [k, V] = s.useState({ x: 0, y: 0 }),
            [B, H] = s.useState({ x: 0, y: 0 }),
            [F, K] = s.useState(!1),
            W = s.useRef(null),
            [Y, z] = s.useState(null),
            X = (0, d.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    s = t.width,
                    l = t.height,
                    r = (s / g.i.width) * 1.5,
                    a = (l / g.i.height) * 1.5,
                    o = (s / g.i.width) * 1.1,
                    c = (l / g.i.height) * 1.1;
                V({ x: s / 2 + i.x, y: l / 2 + i.y });
                let d = Math.max(r, a);
                if ((y(Math.max(o, c)), L(d), null != W.current)) {
                    let e = W.current.getBoundingClientRect();
                    z({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            q = s.useCallback(
                (e) => {
                    let t = Math.max(e, v),
                        n = X.current?.getBoundingClientRect();
                    if (null == n) return;
                    let i = { x: 1156, y: 1110 },
                        s = !0,
                        l = 0,
                        r = n.height / t;
                    for (; s && l < 10; ) (s = i.y + r / 2 > 1536) && (i.y -= 32), l++;
                    let a = i.x * t,
                        o = i.y * t,
                        c = n.width / 2 - a,
                        d = n.height / 2 - o;
                    R(t), D({ x: c, y: d });
                },
                [X, v],
            );
        s.useEffect(() => {
            q(O);
        }, [O, q]);
        let J = s.useCallback(
            (e) => {
                let t = X.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / j,
                    i = t.width / j,
                    s = { x: e.x / j, y: e.y / j },
                    l = e.y / j > 0,
                    r = e.x / j > 0,
                    a = s.y - n < -1536,
                    o = s.x - i < -2180;
                a || l || r || o || D(e);
            },
            [X, j],
        );
        return (0, i.jsx)(o.vN3, {
            children: (0, i.jsxs)("div", {
                ref: X,
                className: r()(I.km, l),
                onClick: () => {
                    w(0);
                },
                onMouseDown: () => U(Date.now()),
                onMouseUp: (e) => {
                    if (null != X.current) {
                        if (P < 2) {
                            let n = Date.now(),
                                i = X.current.getBoundingClientRect(),
                                s = { x: (e.pageX - i.x - M.x) / j, y: (e.pageY - i.y - M.y) / j };
                            !1 !== G && n - G > 250 && u.Ay.update(t.id, { position: s });
                        }
                        U(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== G &&
                        (w(P + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        J({ x: M.x + e.movementX, y: M.y + e.movementY })),
                        H({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: I.VT,
                        style: { transform: `translate(${M.x}px, ${M.y}px) scale(${j}) ` },
                        children: (0, i.jsx)(g.A, {
                            roomSeats: h.seats,
                            roomParticipants: h.participants,
                            participants: a,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !A,
                            onSeatClick: N,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: r()(I.nM, I.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: r()(I.nM, { [I.R]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: W,
                                        children: (0, i.jsx)(o.K0, {
                                            variant: "icon-only",
                                            "aria-label": E.intl.string(C.default.W7TAH4),
                                            icon: o.T7G,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), K(!F);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": E.intl.string(C.default.O7EDNk),
                                        icon: S ? o._mZ : o.oyn,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), T(!S);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(m.A, { channel: t, idle: n, showChat: S ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: r()(I.nM, { [I.R]: n }),
                                children: [
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: o.V0_,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), q(j - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: o.r1u,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), q(j + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.A, { channel: t, participants: a }),
                    (0, i.jsx)(f.A, {
                        open: F,
                        close: () => K(!1),
                        triggerRef: W,
                        style: null != Y ? { left: Y.x, top: Y.y } : void 0,
                    }),
                    (0, i.jsx)(_.A, {}),
                    (0, i.jsx)("div", {
                        className: r()(I.Lw, { [I.FD]: A }),
                        children: (0, i.jsx)("div", {
                            className: I.dH,
                            children: (0, i.jsx)(o.Text, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    N = (e) => {
        let t = h.s.useConfig({ location: "Haven" }).enabled,
            n = (0, a.bG)([A.A], () => A.A.isUserConnected(e.channel.id));
        return (s.useEffect(() => {
            !t || n || u.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(b, { ...e })
            : null;
    };
