n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(187322),
    c = n(408278),
    d = n(432017),
    u = n(353182),
    p = n(534890),
    h = n(92259),
    m = n(218429),
    A = n(834730),
    x = n(517461),
    g = n(770178),
    f = n(418126),
    C = n(266626),
    y = n(998740),
    E = n(732777),
    N = n(709382),
    v = n(287245),
    j = n(615658),
    I = n(592044),
    T = n(100449),
    _ = n(368662),
    S = n(375708),
    R = n(683807);
let P = (e) => {
        let { channel: t, idle: n, className: a, participants: r } = e,
            C = (0, E.A)(t.id),
            [y, P] = l.useState(!1),
            b = l.useCallback(
                (e) => {
                    f.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [O, L] = (0, x.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                P(!0);
            }, 2500);
        }, []);
        let [D, M] = l.useState(0.65),
            [w, U] = l.useState(0.65),
            [V, k] = l.useState(0.65),
            [B, H] = l.useState({ x: 0, y: 0 }),
            [G, F] = l.useState(!1),
            [z, W] = l.useState(0),
            [Y, K] = l.useState({ x: 0, y: 0 }),
            [X, Z] = l.useState({ x: 0, y: 0 }),
            [q, $] = l.useState(!1),
            Q = l.useRef(null),
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
                if ((M(Math.max(o, c)), k(d), null != Q.current)) {
                    let e = Q.current.getBoundingClientRect();
                    ee({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            en = l.useCallback(
                (e) => {
                    let t = Math.max(e, D),
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
                    U(t), H({ x: c, y: d });
                },
                [et, D],
            );
        l.useEffect(() => {
            en(V);
        }, [V, en]);
        let ei = l.useCallback(
            (e) => {
                let t = et.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / w,
                    i = t.width / w,
                    l = { x: e.x / w, y: e.y / w },
                    a = e.y / w > 0,
                    s = e.x / w > 0,
                    r = l.y - n < -1536,
                    o = l.x - i < -2180;
                r || a || s || o || H(e);
            },
            [et, w],
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
                                l = { x: (e.pageX - i.x - B.x) / w, y: (e.pageY - i.y - B.y) / w };
                            !1 !== G && n - G > 250 && f.Ay.update(t.id, { position: l });
                        }
                        F(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== G &&
                        (W(z + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        ei({ x: B.x + e.movementX, y: B.y + e.movementY })),
                        Z({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: R.VT,
                        style: { transform: `translate(${B.x}px, ${B.y}px) scale(${w}) ` },
                        children: (0, i.jsx)(N.A, {
                            roomSeats: C.seats,
                            roomParticipants: C.participants,
                            participants: r,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !y,
                            onSeatClick: b,
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
                                            "aria-label": S.intl.string(_.default.W7TAH4),
                                            icon: d.T,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), $(!q);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": S.intl.string(_.default.O7EDNk),
                                        icon: O ? u._ : p.o,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), L(!O);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.A, { channel: t, idle: n, showChat: O ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: s()(R.nM, { [R.R]: n }),
                                children: [
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: h.V,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(w - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(c.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: m.r,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), en(w + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(T.A, { channel: t, participants: r }),
                    (0, i.jsx)(I.A, {
                        open: q,
                        close: () => $(!1),
                        triggerRef: Q,
                        style: null != J ? { left: J.x, top: J.y } : void 0,
                    }),
                    (0, i.jsx)(j.A, {}),
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
    b = function (e) {
        let t = C.s.useConfig({ location: "Haven" }).enabled,
            n = (0, r.bG)([y.A], () => y.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || f.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(P, { ...e })
            : null;
    };
