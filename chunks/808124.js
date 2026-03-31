n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(517461),
    d = n(770178),
    u = n(418126),
    h = n(266626),
    A = n(998740),
    _ = n(732777),
    m = n(709382),
    g = n(287245),
    p = n(615658),
    f = n(592044),
    x = n(100449),
    E = n(588703),
    I = n(985018),
    C = n(181039);
let N = (e) => {
        let { channel: t, idle: n, className: s, participants: r } = e,
            h = (0, _.A)(t.id),
            [A, N] = l.useState(!1),
            T = l.useCallback(
                (e) => {
                    u.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [S, b] = (0, c.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                N(!0);
            }, 2500);
        }, []);
        let [y, v] = l.useState(0.65),
            [j, R] = l.useState(0.65),
            [O, L] = l.useState(0.65),
            [M, D] = l.useState({ x: 0, y: 0 }),
            [U, G] = l.useState(!1),
            [P, k] = l.useState(0),
            [w, B] = l.useState({ x: 0, y: 0 }),
            [V, H] = l.useState({ x: 0, y: 0 }),
            [F, K] = l.useState(!1),
            W = l.useRef(null),
            [Y, z] = l.useState(null),
            q = (0, d.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    l = t.width,
                    s = t.height,
                    a = (l / m.i.width) * 1.5,
                    r = (s / m.i.height) * 1.5,
                    o = (l / m.i.width) * 1.1,
                    c = (s / m.i.height) * 1.1;
                B({ x: l / 2 + i.x, y: s / 2 + i.y });
                let d = Math.max(a, r);
                if ((v(Math.max(o, c)), L(d), null != W.current)) {
                    let e = W.current.getBoundingClientRect();
                    z({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            X = l.useCallback(
                (e) => {
                    let t = Math.max(e, y),
                        n = q.current?.getBoundingClientRect();
                    if (null == n) return;
                    let i = { x: 1156, y: 1110 },
                        l = !0,
                        s = 0,
                        a = n.height / t;
                    for (; l && s < 10; ) (l = i.y + a / 2 > 1536) && (i.y -= 32), s++;
                    let r = i.x * t,
                        o = i.y * t,
                        c = n.width / 2 - r,
                        d = n.height / 2 - o;
                    R(t), D({ x: c, y: d });
                },
                [q, y],
            );
        l.useEffect(() => {
            X(O);
        }, [O, X]);
        let J = l.useCallback(
            (e) => {
                let t = q.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / j,
                    i = t.width / j,
                    l = { x: e.x / j, y: e.y / j },
                    s = e.y / j > 0,
                    a = e.x / j > 0,
                    r = l.y - n < -1536,
                    o = l.x - i < -2180;
                r || s || a || o || D(e);
            },
            [q, j],
        );
        return (0, i.jsx)(o.vN3, {
            children: (0, i.jsxs)("div", {
                ref: q,
                className: a()(C.km, s),
                onClick: () => {
                    k(0);
                },
                onMouseDown: () => G(Date.now()),
                onMouseUp: (e) => {
                    if (null != q.current) {
                        if (P < 2) {
                            let n = Date.now(),
                                i = q.current.getBoundingClientRect(),
                                l = { x: (e.pageX - i.x - M.x) / j, y: (e.pageY - i.y - M.y) / j };
                            !1 !== U && n - U > 250 && u.Ay.update(t.id, { position: l });
                        }
                        G(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== U &&
                        (k(P + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        J({ x: M.x + e.movementX, y: M.y + e.movementY })),
                        H({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: C.VT,
                        style: { transform: `translate(${M.x}px, ${M.y}px) scale(${j}) ` },
                        children: (0, i.jsx)(m.A, {
                            roomSeats: h.seats,
                            roomParticipants: h.participants,
                            participants: r,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !A,
                            onSeatClick: T,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(C.nM, C.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(C.nM, { [C.R]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: W,
                                        children: (0, i.jsx)(o.K0, {
                                            variant: "icon-only",
                                            "aria-label": I.intl.string(E.default.W7TAH4),
                                            icon: o.T7G,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), K(!F);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": I.intl.string(E.default.O7EDNk),
                                        icon: S ? o._mZ : o.oyn,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), b(!S);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.A, { channel: t, idle: n, showChat: S ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: a()(C.nM, { [C.R]: n }),
                                children: [
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: o.V0_,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), X(j - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: o.r1u,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), X(j + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.A, { channel: t, participants: r }),
                    (0, i.jsx)(f.A, {
                        open: F,
                        close: () => K(!1),
                        triggerRef: W,
                        style: null != Y ? { left: Y.x, top: Y.y } : void 0,
                    }),
                    (0, i.jsx)(p.A, {}),
                    (0, i.jsx)("div", {
                        className: a()(C.Lw, { [C.FD]: A }),
                        children: (0, i.jsx)("div", {
                            className: C.dH,
                            children: (0, i.jsx)(o.Text, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    T = (e) => {
        let t = h.s.useConfig({ location: "Haven" }).enabled,
            n = (0, r.bG)([A.A], () => A.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || u.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(N, { ...e })
            : null;
    };
