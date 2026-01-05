n.d(t, { Z: () => g }), n(388685), n(472816), n(794429), n(361932), n(187205);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(70097),
    c = n(785925),
    u = n(544975),
    d = n(390551),
    f = n(130692),
    p = n(354459),
    _ = n(246447);
let m = 13000,
    h = (e, t) => e.type === p.fO.USER && e.speaking && e.user.id !== t,
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
            v = i.useRef(null),
            S = i.useRef(new Set()),
            I = (0, f.Z)(a),
            {
                setAsset: T,
                sampleAsset: C,
                animationState: A,
                updateAnimationState: N,
                characterAssets: P,
            } = (0, u.o)(null == I ? void 0 : I.name),
            R = i.useMemo(() => Object.values(null != P ? P : {}).flat(), [P]),
            w = g.find((e) => e.type === p.fO.USER && e.user.id === a.userId),
            D = i.useMemo(() => g.filter((e) => h(e, a.userId)), [g, a.userId]),
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
            }, [I, R]),
            i.useEffect(() => {
                let e = S.current;
                return () => {
                    [...e].forEach((e) => window.clearTimeout(e));
                };
            }, []),
            i.useEffect(() => {
                if (!O) return;
                let e = v.current;
                if (null == e || !0 === L) return;
                let t = C(),
                    n = R.findIndex((e) => e === t);
                T(t),
                    G(n),
                    [...e.children].forEach((e, t) => {
                        if ("VIDEO" !== e.nodeName) return;
                        let r = e;
                        (r.currentTime = 0), t === n && (r.play(), j(!0));
                    });
            }, [L, R, C, T, O]),
            i.useEffect(() => {
                O && ((null == w ? void 0 : w.speaking) ? N(u.O.TALKING) : A === u.O.TALKING && N(u.O.IDLE));
            }, [w, A, N, O]),
            i.useEffect(() => {
                O &&
                    x.some((e) => {
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
                    M + m < Date.now() &&
                    (N(u.O.HEAD_TURN), k(Date.now()));
            }, [x, n, M, N, O]),
            (0, r.jsxs)(s.P3F, {
                className: _.wrapper,
                style: {
                    width: I.width,
                    top: I.offset.top,
                    left: b ? -I.offset.left : I.offset.left,
                },
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                onClick: (e) => {
                    e.preventDefault(), e.stopPropagation();
                    let t = (a.avatar + 1) % d.eJ.length;
                    0 === t && (t = 1),
                        c.ZP.update(E.id, {
                            avatar: t,
                            seat: null == n ? void 0 : n.id,
                        });
                },
                children: [
                    (0, r.jsx)("div", {
                        className: _.vingette,
                        style: {
                            height: 1.25 * I.height,
                            width: 1.25 * I.width,
                        },
                    }),
                    (null == P ? void 0 : P.decoration) != null &&
                        (0, r.jsx)(l.Z, {
                            src: P.decoration[0],
                            className: o()(_.character, { [_.flip]: b }),
                            autoPlay: O,
                            loop: O,
                            style: { width: I.width },
                        }),
                    (0, r.jsx)("div", {
                        ref: v,
                        children: R.map((e, t) =>
                            (0, r.jsx)(
                                l.Z,
                                {
                                    style: {
                                        opacity: +(t === U),
                                        width: I.width,
                                    },
                                    src: e,
                                    className: o()(_.character, { [_.flip]: b }),
                                    onEnded: () => {
                                        var t, n;
                                        if (
                                            A === u.O.HEAD_TURN &&
                                            (null == P || null == (t = P.headTurn) ? void 0 : t.includes(e))
                                        ) {
                                            N(u.O.HEAD_TURN_BACK);
                                            let e = setTimeout(() => {
                                                j(!1), S.current.delete(e);
                                            }, 2000);
                                            S.current.add(e);
                                        } else
                                            A === u.O.HEAD_TURN_BACK &&
                                                (null == P || null == (n = P.headTurnBack) ? void 0 : n.includes(e)) &&
                                                N(u.O.IDLE),
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
