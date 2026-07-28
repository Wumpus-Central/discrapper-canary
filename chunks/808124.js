n.d(t, { A: () => P });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(259678),
    c = n(408278),
    d = n(432017),
    u = n(353182),
    h = n(534890),
    p = n(92259),
    m = n(218429),
    A = n(834730),
    f = n(517461),
    x = n(770178),
    g = n(418126),
    C = n(266626),
    y = n(998740),
    j = n(732777),
    v = n(709382),
    E = n(287245),
    N = n(615658),
    I = n(592044),
    T = n(100449),
    b = n(368662),
    _ = n(375708),
    R = n(749719);
let S = (e) => {
        let { channel: t, idle: n, className: a, participants: r } = e,
            C = (0, j.A)(t.id),
            [y, S] = l.useState(!1),
            P = l.useCallback(
                (e) => {
                    g.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [L, O] = (0, f.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                S(!0);
            }, 2500);
        }, []);
        let [w, M] = l.useState(0.65),
            [D, U] = l.useState(0.65),
            [k, V] = l.useState(0.65),
            [G, B] = l.useState({ x: 0, y: 0 }),
            [H, F] = l.useState(!1),
            [z, W] = l.useState(0),
            [Y, K] = l.useState({ x: 0, y: 0 }),
            [X, $] = l.useState({ x: 0, y: 0 }),
            [Z, q] = l.useState(!1),
            Q = l.useRef(null),
            [J, ee] = l.useState(null),
            et = (0, x.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    l = t.width,
                    a = t.height,
                    s = (l / v.i.width) * 1.5,
                    r = (a / v.i.height) * 1.5,
                    o = (l / v.i.width) * 1.1,
                    c = (a / v.i.height) * 1.1;
                K({ x: l / 2 + i.x, y: a / 2 + i.y });
                let d = Math.max(s, r);
                if ((M(Math.max(o, c)), V(d), null != Q.current)) {
                    let e = Q.current.getBoundingClientRect();
                    ee({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            en = l.useCallback(
                (e) => {
                    let t = Math.max(e, w),
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
                    U(t), B({ x: c, y: d });
                },
                [et, w],
            );
        l.useEffect(() => {
            en(k);
        }, [k, en]);
        let ei = l.useCallback(
            (e) => {
                let t = et.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / D,
                    i = t.width / D,
                    l = { x: e.x / D, y: e.y / D },
                    a = e.y / D > 0,
                    s = e.x / D > 0,
                    r = l.y - n < -1536,
                    o = l.x - i < -2180;
                r || a || s || o || B(e);
            },
            [et, D],
        );
        return (0, i.jsx)(o.vN, {
            children: (0, i.jsxs)("div", {
                ref: et,
                className: s()(R.km, a),
                onClick: () => {
                    W(0);
                },
                onMouseDown: () => F(Date.now()),
                onMouseUp: (e) => {
                    if (null != et.current) {
                        if (z < 2) {
                            let n = Date.now(),
                                i = et.current.getBoundingClientRect(),
                                l = { x: (e.pageX - i.x - G.x) / D, y: (e.pageY - i.y - G.y) / D };
                            !1 !== H && n - H > 250 && g.Ay.update(t.id, { position: l });
                        }
                        F(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== H &&
                        (W(z + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        ei({ x: G.x + e.movementX, y: G.y + e.movementY })),
                        $({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: R.VT,
                        style: { transform: `translate(${G.x}px, ${G.y}px) scale(${D}) ` },
                        children: (0, i.jsx)(v.A, {
                            roomSeats: C.seats,
                            roomParticipants: C.participants,
                            participants: r,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !y,
                            onSeatClick: P,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(R.nM, R.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(R.nM, { [R.R]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: Q,
                                        children: (0, i.jsx)(c.K, {
                                            variant: "icon-only",
                                            "aria-label": _.intl.string(b.default.W7TAH4),
                                            icon: d.T,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), q(!Z);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": _.intl.string(b.default.O7EDNk),
                                        icon: L ? u._ : h.o,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), O(!L);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.A, { channel: t, idle: n, showChat: L ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: s()(R.nM, { [R.R]: n }),
                                children: [
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: p.V,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(D - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: m.r,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(D + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(T.A, { channel: t, participants: r }),
                    (0, i.jsx)(I.A, {
                        open: Z,
                        close: () => q(!1),
                        triggerRef: Q,
                        style: null != J ? { left: J.x, top: J.y } : void 0,
                    }),
                    (0, i.jsx)(N.A, {}),
                    (0, i.jsx)("div", {
                        className: s()(R.Lw, { [R.FD]: y }),
                        children: (0, i.jsx)("div", {
                            className: R.dH,
                            children: (0, i.jsx)(A.E, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    P = function (e) {
        let t = C.s.useConfig({ location: "Haven" }).enabled,
            n = (0, r.bG)([y.A], () => y.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || g.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(S, { ...e })
            : null;
    };
