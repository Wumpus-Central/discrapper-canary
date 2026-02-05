n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(517461),
    c = n(770178),
    u = n(418126),
    h = n(266626),
    A = n(998740),
    g = n(732777),
    m = n(709382),
    p = n(287245),
    _ = n(615658),
    x = n(592044),
    f = n(100449),
    E = n(588703),
    C = n(985018),
    I = n(185014);
let S = (e) => {
        let { channel: t, idle: n, className: s, participants: r } = e,
            h = (0, g.A)(t.id),
            [A, S] = l.useState(!1),
            b = l.useCallback(
                (e) => {
                    u.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [N, T] = (0, d.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                S(!0);
            }, 2500);
        }, []);
        let [j, v] = l.useState(0.65),
            [y, R] = l.useState(0.65),
            [O, L] = l.useState(0.65),
            [D, M] = l.useState({ x: 0, y: 0 }),
            [G, U] = l.useState(!1),
            [P, k] = l.useState(0),
            [w, V] = l.useState({ x: 0, y: 0 }),
            [B, H] = l.useState({ x: 0, y: 0 }),
            [F, Y] = l.useState(!1),
            W = l.useRef(null),
            [K, z] = l.useState(null),
            X = (0, c.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    l = t.width,
                    s = t.height,
                    a = (l / m.i.width) * 1.5,
                    r = (s / m.i.height) * 1.5,
                    o = (l / m.i.width) * 1.1,
                    d = (s / m.i.height) * 1.1;
                V({ x: l / 2 + i.x, y: s / 2 + i.y });
                let c = Math.max(a, r);
                if ((v(Math.max(o, d)), L(c), null != W.current)) {
                    let e = W.current.getBoundingClientRect();
                    z({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            q = l.useCallback(
                (e) => {
                    let t = Math.max(e, j),
                        n = X.current?.getBoundingClientRect();
                    if (null == n) return;
                    let i = { x: 1156, y: 1110 },
                        l = !0,
                        s = 0,
                        a = n.height / t;
                    for (; l && s < 10; ) (l = i.y + a / 2 > 1536) && (i.y -= 32), s++;
                    let r = i.x * t,
                        o = i.y * t,
                        d = n.width / 2 - r,
                        c = n.height / 2 - o;
                    R(t), M({ x: d, y: c });
                },
                [X, j],
            );
        l.useEffect(() => {
            q(O);
        }, [O, q]);
        let J = l.useCallback(
            (e) => {
                let t = X.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / y,
                    i = t.width / y,
                    l = { x: e.x / y, y: e.y / y },
                    s = e.y / y > 0,
                    a = e.x / y > 0,
                    r = l.y - n < -1536,
                    o = l.x - i < -2180;
                r || s || a || o || M(e);
            },
            [X, y],
        );
        return (0, i.jsx)(o.vN3, {
            children: (0, i.jsxs)("div", {
                ref: X,
                className: a()(I.km, s),
                onClick: () => {
                    k(0);
                },
                onMouseDown: () => U(Date.now()),
                onMouseUp: (e) => {
                    if (null != X.current) {
                        if (P < 2) {
                            let n = Date.now(),
                                i = X.current.getBoundingClientRect(),
                                l = { x: (e.pageX - i.x - D.x) / y, y: (e.pageY - i.y - D.y) / y };
                            !1 !== G && n - G > 250 && u.Ay.update(t.id, { position: l });
                        }
                        U(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== G &&
                        (k(P + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        J({ x: D.x + e.movementX, y: D.y + e.movementY })),
                        H({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: I.VT,
                        style: { transform: `translate(${D.x}px, ${D.y}px) scale(${y}) ` },
                        children: (0, i.jsx)(m.A, {
                            roomSeats: h.seats,
                            roomParticipants: h.participants,
                            participants: r,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !A,
                            onSeatClick: b,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(I.nM, I.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(I.nM, { [I.R]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: W,
                                        children: (0, i.jsx)(o.K0, {
                                            variant: "icon-only",
                                            "aria-label": C.intl.string(E.default.W7TAH4),
                                            icon: o.T7G,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), Y(!F);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": C.intl.string(E.default.O7EDNk),
                                        icon: N ? o._mZ : o.oyn,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), T(!N);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(p.A, { channel: t, idle: n, showChat: N ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: a()(I.nM, { [I.R]: n }),
                                children: [
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: o.V0_,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), q(y - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: o.r1u,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), q(y + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(f.A, { channel: t, participants: r }),
                    (0, i.jsx)(x.A, {
                        open: F,
                        close: () => Y(!1),
                        triggerRef: W,
                        style: null != K ? { left: K.x, top: K.y } : void 0,
                    }),
                    (0, i.jsx)(_.A, {}),
                    (0, i.jsx)("div", {
                        className: a()(I.Lw, { [I.FD]: A }),
                        children: (0, i.jsx)("div", {
                            className: I.dH,
                            children: (0, i.jsx)(o.Text, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    b = (e) => {
        let t = h.s.useConfig({ location: "Haven" }).enabled,
            n = (0, r.bG)([A.A], () => A.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || u.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(S, { ...e })
            : null;
    };
