n.d(t, { A: () => P });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(187322),
    c = n(408278),
    d = n(432017),
    u = n(353182),
    p = n(534890),
    h = n(92259),
    _ = n(218429),
    m = n(834730),
    A = n(517461),
    x = n(770178),
    f = n(418126),
    g = n(266626),
    C = n(998740),
    y = n(732777),
    v = n(709382),
    E = n(287245),
    N = n(615658),
    I = n(592044),
    j = n(100449),
    T = n(368662),
    b = n(985018),
    S = n(683807);
let R = (e) => {
        let { channel: t, idle: n, className: l, participants: r } = e,
            g = (0, y.A)(t.id),
            [C, R] = a.useState(!1),
            P = a.useCallback(
                (e) => {
                    f.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [O, w] = (0, A.V)("haven-show-chat", !1);
        a.useEffect(() => {
            setTimeout(() => {
                R(!0);
            }, 2500);
        }, []);
        let [L, D] = a.useState(0.65),
            [M, U] = a.useState(0.65),
            [V, k] = a.useState(0.65),
            [B, H] = a.useState({ x: 0, y: 0 }),
            [F, G] = a.useState(!1),
            [z, W] = a.useState(0),
            [Y, K] = a.useState({ x: 0, y: 0 }),
            [X, q] = a.useState({ x: 0, y: 0 }),
            [Z, Q] = a.useState(!1),
            $ = a.useRef(null),
            [J, ee] = a.useState(null),
            et = (0, x.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    a = t.width,
                    l = t.height,
                    s = (a / v.i.width) * 1.5,
                    r = (l / v.i.height) * 1.5,
                    o = (a / v.i.width) * 1.1,
                    c = (l / v.i.height) * 1.1;
                K({ x: a / 2 + i.x, y: l / 2 + i.y });
                let d = Math.max(s, r);
                if ((D(Math.max(o, c)), k(d), null != $.current)) {
                    let e = $.current.getBoundingClientRect();
                    ee({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            en = a.useCallback(
                (e) => {
                    let t = Math.max(e, L),
                        n = et.current?.getBoundingClientRect();
                    if (null == n) return;
                    let i = { x: 1156, y: 1110 },
                        a = !0,
                        l = 0,
                        s = n.height / t;
                    for (; a && l < 10; ) (a = i.y + s / 2 > 1536) && (i.y -= 32), l++;
                    let r = i.x * t,
                        o = i.y * t,
                        c = n.width / 2 - r,
                        d = n.height / 2 - o;
                    U(t), H({ x: c, y: d });
                },
                [et, L],
            );
        a.useEffect(() => {
            en(V);
        }, [V, en]);
        let ei = a.useCallback(
            (e) => {
                let t = et.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / M,
                    i = t.width / M,
                    a = { x: e.x / M, y: e.y / M },
                    l = e.y / M > 0,
                    s = e.x / M > 0,
                    r = a.y - n < -1536,
                    o = a.x - i < -2180;
                r || l || s || o || H(e);
            },
            [et, M],
        );
        return (0, i.jsx)(o.vN, {
            children: (0, i.jsxs)("div", {
                ref: et,
                className: s()(S.km, l),
                onClick: () => {
                    W(0);
                },
                onMouseDown: () => G(Date.now()),
                onMouseUp: (e) => {
                    if (null != et.current) {
                        if (z < 2) {
                            let n = Date.now(),
                                i = et.current.getBoundingClientRect(),
                                a = { x: (e.pageX - i.x - B.x) / M, y: (e.pageY - i.y - B.y) / M };
                            !1 !== F && n - F > 250 && f.Ay.update(t.id, { position: a });
                        }
                        G(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== F &&
                        (W(z + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        ei({ x: B.x + e.movementX, y: B.y + e.movementY })),
                        q({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: S.VT,
                        style: { transform: `translate(${B.x}px, ${B.y}px) scale(${M}) ` },
                        children: (0, i.jsx)(v.A, {
                            roomSeats: g.seats,
                            roomParticipants: g.participants,
                            participants: r,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !C,
                            onSeatClick: P,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(S.nM, S.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(S.nM, { [S.R]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: $,
                                        children: (0, i.jsx)(c.K, {
                                            variant: "icon-only",
                                            "aria-label": b.intl.string(T.default.W7TAH4),
                                            icon: d.T,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), Q(!Z);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": b.intl.string(T.default.O7EDNk),
                                        icon: O ? u._ : p.o,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), w(!O);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.A, { channel: t, idle: n, showChat: O ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: s()(S.nM, { [S.R]: n }),
                                children: [
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: h.V,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(M - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: _.r,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(M + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(j.A, { channel: t, participants: r }),
                    (0, i.jsx)(I.A, {
                        open: Z,
                        close: () => Q(!1),
                        triggerRef: $,
                        style: null != J ? { left: J.x, top: J.y } : void 0,
                    }),
                    (0, i.jsx)(N.A, {}),
                    (0, i.jsx)("div", {
                        className: s()(S.Lw, { [S.FD]: C }),
                        children: (0, i.jsx)("div", {
                            className: S.dH,
                            children: (0, i.jsx)(m.E, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    P = (e) => {
        let t = g.s.useConfig({ location: "Haven" }).enabled,
            n = (0, r.bG)([C.A], () => C.A.isUserConnected(e.channel.id));
        return (a.useEffect(() => {
            !t || n || f.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(R, { ...e })
            : null;
    };
