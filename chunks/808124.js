n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(187322),
    c = n(408278),
    d = n(432017),
    u = n(353182),
    h = n(534890),
    p = n(92259),
    m = n(218429),
    A = n(834730),
    x = n(517461),
    g = n(770178),
    C = n(418126),
    f = n(266626),
    E = n(998740),
    y = n(732777),
    N = n(709382),
    j = n(287245),
    v = n(615658),
    I = n(592044),
    T = n(100449),
    _ = n(368662),
    R = n(375708),
    S = n(683807);
let P = (e) => {
        let { channel: t, idle: n, className: a, participants: r } = e,
            f = (0, y.A)(t.id),
            [E, P] = l.useState(!1),
            O = l.useCallback(
                (e) => {
                    C.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [b, L] = (0, x.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                P(!0);
            }, 2500);
        }, []);
        let [M, D] = l.useState(0.65),
            [U, w] = l.useState(0.65),
            [V, B] = l.useState(0.65),
            [k, H] = l.useState({ x: 0, y: 0 }),
            [F, G] = l.useState(!1),
            [z, W] = l.useState(0),
            [Y, K] = l.useState({ x: 0, y: 0 }),
            [X, Z] = l.useState({ x: 0, y: 0 }),
            [q, Q] = l.useState(!1),
            $ = l.useRef(null),
            [J, ee] = l.useState(null),
            et = (0, g.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    l = t.width,
                    a = t.height,
                    s = (l / N.i.width) * 1.5,
                    r = (a / N.i.height) * 1.5,
                    o = (l / N.i.width) * 1.1,
                    c = (a / N.i.height) * 1.1;
                K({ x: l / 2 + i.x, y: a / 2 + i.y });
                let d = Math.max(s, r);
                if ((D(Math.max(o, c)), B(d), null != $.current)) {
                    let e = $.current.getBoundingClientRect();
                    ee({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            en = l.useCallback(
                (e) => {
                    let t = Math.max(e, M),
                        n = et.current?.getBoundingClientRect();
                    if (null == n) return;
                    let i = { x: 1156, y: 1110 },
                        l = !0,
                        a = 0,
                        s = n.height / t;
                    for (; l && a < 10; ) (l = i.y + s / 2 > 1536) && (i.y -= 32), a++;
                    let r = i.x * t,
                        o = i.y * t,
                        c = n.width / 2 - r,
                        d = n.height / 2 - o;
                    w(t), H({ x: c, y: d });
                },
                [et, M],
            );
        l.useEffect(() => {
            en(V);
        }, [V, en]);
        let ei = l.useCallback(
            (e) => {
                let t = et.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / U,
                    i = t.width / U,
                    l = { x: e.x / U, y: e.y / U },
                    a = e.y / U > 0,
                    s = e.x / U > 0,
                    r = l.y - n < -1536,
                    o = l.x - i < -2180;
                r || a || s || o || H(e);
            },
            [et, U],
        );
        return (0, i.jsx)(o.vN, {
            children: (0, i.jsxs)("div", {
                ref: et,
                className: s()(S.km, a),
                onClick: () => {
                    W(0);
                },
                onMouseDown: () => G(Date.now()),
                onMouseUp: (e) => {
                    if (null != et.current) {
                        if (z < 2) {
                            let n = Date.now(),
                                i = et.current.getBoundingClientRect(),
                                l = { x: (e.pageX - i.x - k.x) / U, y: (e.pageY - i.y - k.y) / U };
                            !1 !== F && n - F > 250 && C.Ay.update(t.id, { position: l });
                        }
                        G(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== F &&
                        (W(z + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        ei({ x: k.x + e.movementX, y: k.y + e.movementY })),
                        Z({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: S.VT,
                        style: { transform: `translate(${k.x}px, ${k.y}px) scale(${U}) ` },
                        children: (0, i.jsx)(N.A, {
                            roomSeats: f.seats,
                            roomParticipants: f.participants,
                            participants: r,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !E,
                            onSeatClick: O,
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
                                            "aria-label": R.intl.string(_.default.W7TAH4),
                                            icon: d.T,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), Q(!q);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": R.intl.string(_.default.O7EDNk),
                                        icon: b ? u._ : h.o,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), L(!b);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(j.A, { channel: t, idle: n, showChat: b ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: s()(S.nM, { [S.R]: n }),
                                children: [
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: p.V,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(U - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: m.r,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(U + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(T.A, { channel: t, participants: r }),
                    (0, i.jsx)(I.A, {
                        open: q,
                        close: () => Q(!1),
                        triggerRef: $,
                        style: null != J ? { left: J.x, top: J.y } : void 0,
                    }),
                    (0, i.jsx)(v.A, {}),
                    (0, i.jsx)("div", {
                        className: s()(S.Lw, { [S.FD]: E }),
                        children: (0, i.jsx)("div", {
                            className: S.dH,
                            children: (0, i.jsx)(A.E, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    O = (e) => {
        let t = f.s.useConfig({ location: "Haven" }).enabled,
            n = (0, r.bG)([E.A], () => E.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || C.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(P, { ...e })
            : null;
    };
