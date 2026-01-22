n.d(t, {
    A: () => g,
}),
    n(896048),
    n(864466),
    n(443073),
    n(114821),
    n(339614);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(607470),
    c = n(418126),
    u = n(814550),
    d = n(572808),
    f = n(9045),
    p = n(806931),
    _ = n(447196);
let h = 13e3,
    m = (e, t) => e.type === p.lp.USER && e.speaking && e.user.id !== t,
    g = (e) => {
        let {
                seats: t,
                claimedSeat: n,
                participant: a,
                participants: g,
                channel: E,
                flip: b,
                handleHover: y,
                enableAnimations: O = !0,
            } = e,
            A = i.useRef(null),
            v = i.useRef(new Set()),
            S = (0, f.A)(a),
            {
                setAsset: I,
                sampleAsset: T,
                animationState: C,
                updateAnimationState: N,
                characterAssets: R,
            } = (0, u.u)(null == S ? void 0 : S.name),
            w = i.useMemo(() => Object.values(null != R ? R : {}).flat(), [R]),
            P = g.find((e) => e.type === p.lp.USER && e.user.id === a.userId),
            D = i.useMemo(() => g.filter((e) => m(e, a.userId)), [g, a.userId]),
            x = i.useMemo(
                () =>
                    D.flatMap((e) => {
                        let n = t.find((t) => t.claimedBy === e.user.id);
                        return null != n ? [n] : [];
                    }),
                [D, t],
            ),
            [L, j] = i.useState(!1),
            [M, k] = i.useState(0),
            [U, G] = i.useState(0);
        return (
            i.useEffect(() => {
                j(!1);
            }, [S, w]),
            i.useEffect(() => {
                let e = v.current;
                return () => {
                    [...e].forEach((e) => window.clearTimeout(e));
                };
            }, []),
            i.useEffect(() => {
                if (!O) return;
                let e = A.current;
                if (null == e || !0 === L) return;
                let t = T(),
                    n = w.findIndex((e) => e === t);
                I(t),
                    G(n),
                    [...e.children].forEach((e, t) => {
                        if ("VIDEO" !== e.nodeName) return;
                        let r = e;
                        (r.currentTime = 0), t === n && (r.play(), j(!0));
                    });
            }, [L, w, T, I, O]),
            i.useEffect(() => {
                O && ((null == P ? void 0 : P.speaking) ? N(u.f.TALKING) : C === u.f.TALKING && N(u.f.IDLE));
            }, [P, C, N, O]),
            i.useEffect(() => {
                !O ||
                    (x.some((e) => {
                        switch (n.id) {
                            case 1:
                            case 2:
                            case 3:
                                return (null == e ? void 0 : e.id) < n.id;
                            case 4:
                            case 5:
                            case 6:
                                return (null == e ? void 0 : e.id) > n.id;
                            default:
                                return !1;
                        }
                    }) &&
                        M + h < Date.now() &&
                        (N(u.f.HEAD_TURN), k(Date.now())));
            }, [x, n, M, N, O]),
            (0, r.jsxs)(o.DUT, {
                className: _.iE,
                style: {
                    width: S.width,
                    top: S.offset.top,
                    left: b ? -S.offset.left : S.offset.left,
                },
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                onClick: (e) => {
                    e.preventDefault(), e.stopPropagation();
                    let t = (a.avatar + 1) % d.oo.length;
                    0 === t && (t = 1),
                        c.Ay.update(E.id, {
                            avatar: t,
                            seat: null == n ? void 0 : n.id,
                        });
                },
                children: [
                    (0, r.jsx)("div", {
                        className: _.Fk,
                        style: {
                            height: 1.25 * S.height,
                            width: 1.25 * S.width,
                        },
                    }),
                    (null == R ? void 0 : R.decoration) != null &&
                        (0, r.jsx)(l.A, {
                            src: R.decoration[0],
                            className: s()(_.GG, {
                                [_.UU]: b,
                            }),
                            autoPlay: O,
                            loop: O,
                            style: {
                                width: S.width,
                            },
                        }),
                    (0, r.jsx)("div", {
                        ref: A,
                        children: w.map((e, t) =>
                            (0, r.jsx)(
                                l.A,
                                {
                                    style: {
                                        opacity: +(t === U),
                                        width: S.width,
                                    },
                                    src: e,
                                    className: s()(_.GG, {
                                        [_.UU]: b,
                                    }),
                                    onEnded: () => {
                                        var t, n;
                                        if (
                                            C === u.f.HEAD_TURN &&
                                            (null == R || null == (t = R.headTurn) ? void 0 : t.includes(e))
                                        ) {
                                            N(u.f.HEAD_TURN_BACK);
                                            let e = setTimeout(() => {
                                                j(!1), v.current.delete(e);
                                            }, 2e3);
                                            v.current.add(e);
                                        } else
                                            C === u.f.HEAD_TURN_BACK &&
                                                (null == R || null == (n = R.headTurnBack) ? void 0 : n.includes(e)) &&
                                                N(u.f.IDLE),
                                                j(!1);
                                    },
                                    autoPlay: !1,
                                    loop: !1,
                                },
                                e,
                            ),
                        ),
                    }),
                ],
            })
        );
    };
