n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(517461),
    u = n(770178),
    d = n(418126),
    f = n(266626),
    p = n(998740),
    h = n(732777),
    b = n(709382),
    g = n(287245),
    m = n(615658),
    A = n(592044),
    y = n(100449),
    O = n(588703),
    j = n(985018),
    v = n(185014);
let x = (e) => {
        let { channel: t, idle: n, className: i, participants: s } = e,
            f = (0, h.A)(t.id),
            [p, x] = l.useState(!1),
            E = l.useCallback(
                (e) => {
                    d.Ay.update(t.id, {
                        seat: e,
                    });
                },
                [t.id],
            ),
            [_, C] = (0, c.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                x(!0);
            }, 2500);
        }, []);
        let [S, I] = l.useState(0.65),
            [N, T] = l.useState(0.65),
            [P, w] = l.useState(0.65),
            [R, D] = l.useState({
                x: 0,
                y: 0,
            }),
            [M, L] = l.useState(!1),
            [G, k] = l.useState(0),
            [U, V] = l.useState({
                x: 0,
                y: 0,
            }),
            [F, H] = l.useState({
                x: 0,
                y: 0,
            }),
            [B, K] = l.useState(!1),
            W = l.useRef(null),
            [z, Y] = l.useState(null),
            q = (0, u.w)((e) => {
                let { contentRect: t, target: n } = e,
                    r = n.getBoundingClientRect(),
                    l = t.width,
                    i = t.height,
                    a = (l / b.i.width) * 1.5,
                    s = (i / b.i.height) * 1.5,
                    o = (l / b.i.width) * 1.1,
                    c = (i / b.i.height) * 1.1;
                V({
                    x: l / 2 + r.x,
                    y: i / 2 + r.y,
                });
                let u = Math.max(a, s);
                if ((I(Math.max(o, c)), w(u), null != W.current)) {
                    let e = W.current.getBoundingClientRect();
                    Y({
                        x: e.left - r.left,
                        y: e.top - r.top,
                    });
                }
            }),
            X = l.useCallback(
                (e) => {
                    var t;
                    let n = Math.max(e, S),
                        r = null == (t = q.current) ? void 0 : t.getBoundingClientRect();
                    if (null == r) return;
                    let l = {
                            x: 1156,
                            y: 1110,
                        },
                        i = !0,
                        a = 0,
                        s = r.height / n;
                    for (; i && a < 10; ) (i = l.y + s / 2 > 1536) && (l.y -= 32), a++;
                    let o = l.x * n,
                        c = l.y * n,
                        u = r.width / 2 - o,
                        d = r.height / 2 - c;
                    T(n),
                        D({
                            x: u,
                            y: d,
                        });
                },
                [q, S],
            );
        l.useEffect(() => {
            X(P);
        }, [P, X]);
        let J = l.useCallback(
            (e) => {
                var t;
                let n = null == (t = q.current) ? void 0 : t.getBoundingClientRect();
                if (null == n) return;
                let r = n.height / N,
                    l = n.width / N,
                    i = {
                        x: e.x / N,
                        y: e.y / N,
                    },
                    a = e.y / N > 0,
                    s = e.x / N > 0,
                    o = i.y - r < -1536,
                    c = i.x - l < -2180;
                o || a || s || c || D(e);
            },
            [q, N],
        );
        return (0, r.jsx)(o.vN3, {
            children: (0, r.jsxs)("div", {
                ref: q,
                className: a()(v.km, i),
                onClick: () => {
                    k(0);
                },
                onMouseDown: () => L(Date.now()),
                onMouseUp: (e) => {
                    if (null != q.current) {
                        if (G < 2) {
                            let n = Date.now(),
                                r = q.current.getBoundingClientRect(),
                                l = {
                                    x: (e.pageX - r.x - R.x) / N,
                                    y: (e.pageY - r.y - R.y) / N,
                                };
                            !1 !== M &&
                                n - M > 250 &&
                                d.Ay.update(t.id, {
                                    position: l,
                                });
                        }
                        L(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== M &&
                        (k(G + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        J({
                            x: R.x + e.movementX,
                            y: R.y + e.movementY,
                        })),
                        H({
                            x: e.pageX,
                            y: e.pageY,
                        });
                },
                children: [
                    (0, r.jsx)("div", {
                        className: v.VT,
                        style: {
                            transform: "translate(".concat(R.x, "px, ").concat(R.y, "px) scale(").concat(N, ") "),
                        },
                        children: (0, r.jsx)(b.A, {
                            roomSeats: f.seats,
                            roomParticipants: f.participants,
                            participants: s,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !p,
                            onSeatClick: E,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: a()(v.nM, v.vf),
                        children: [
                            (0, r.jsxs)("div", {
                                className: a()(v.nM, {
                                    [v.R]: n,
                                }),
                                children: [
                                    (0, r.jsx)("div", {
                                        ref: W,
                                        children: (0, r.jsx)(o.K0, {
                                            variant: "icon-only",
                                            "aria-label": j.intl.string(O.default.W7TAH4),
                                            icon: o.T7G,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), K(!B);
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": j.intl.string(O.default.O7EDNk),
                                        icon: _ ? o._mZ : o.oyn,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), C(!_);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(g.A, {
                                channel: t,
                                idle: n,
                                showChat: null != _ && _,
                            }),
                            (0, r.jsxs)("div", {
                                className: a()(v.nM, {
                                    [v.R]: n,
                                }),
                                children: [
                                    (0, r.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: o.V0_,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), X(N - 0.05);
                                        },
                                    }),
                                    (0, r.jsx)(o.K0, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: o.r1u,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), X(N + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(y.A, {
                        channel: t,
                        participants: s,
                    }),
                    (0, r.jsx)(A.A, {
                        open: B,
                        close: () => K(!1),
                        triggerRef: W,
                        style:
                            null != z
                                ? {
                                      left: z.x,
                                      top: z.y,
                                  }
                                : void 0,
                    }),
                    (0, r.jsx)(m.A, {}),
                    (0, r.jsx)("div", {
                        className: a()(v.Lw, {
                            [v.FD]: p,
                        }),
                        children: (0, r.jsx)("div", {
                            className: v.dH,
                            children: (0, r.jsx)(o.Text, {
                                variant: "display-lg",
                                children: "Welcome to Haven",
                            }),
                        }),
                    }),
                ],
            }),
        });
    },
    E = (e) => {
        let t = f.s.useConfig({
                location: "Haven",
            }).enabled,
            n = (0, s.bG)([p.A], () => p.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || d.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, r.jsx)(
                  x,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  }),
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  (r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = r);
                              });
                      }
                      return e;
                  })({}, e),
              )
            : null;
    };
