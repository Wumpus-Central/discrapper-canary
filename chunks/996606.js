n.d(t, { Z: () => m }), n(388685), n(472816), n(794429), n(361932), n(187205);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(70097),
    c = n(785925),
    u = n(544975),
    d = n(390551),
    p = n(130692),
    f = n(354459),
    h = n(246447);
let m = (e) => {
    let { seats: t, claimedSeat: n, participant: l, participants: m, channel: g, flip: b, handleHover: y } = e,
        C = r.useRef(null),
        v = r.useRef(new Set()),
        x = (0, p.Z)(l),
        {
            setAsset: O,
            sampleAsset: E,
            animationState: j,
            updateAnimationState: S,
            characterAssets: _,
        } = (0, u.o)(null == x ? void 0 : x.name),
        P = r.useMemo(() => Object.values(null != _ ? _ : {}).flat(), [_]),
        I = m.find((e) => e.type === f.fO.USER && e.user.id === l.userId),
        Z = r.useMemo(
            () =>
                m.filter((e) => {
                    let t;
                    return (t = l.userId), e.type === f.fO.USER && e.speaking && e.user.id !== t;
                }),
            [m, l.userId],
        ),
        T = r.useMemo(
            () =>
                Z.flatMap((e) => {
                    let n = t.find((t) => t.claimedBy === e.user.id);
                    return null != n ? [n] : [];
                }),
            [Z, t],
        ),
        [N, A] = r.useState(!1),
        [w, M] = r.useState(0),
        [R, D] = r.useState(0);
    return (
        r.useEffect(() => {
            A(!1);
        }, [x, P]),
        r.useEffect(() => {
            let e = v.current;
            return () => {
                [...e].forEach((e) => window.clearTimeout(e));
            };
        }, []),
        r.useEffect(() => {
            let e = C.current;
            if (null == e || !0 === N) return;
            let t = E(),
                n = P.findIndex((e) => e === t);
            O(t),
                D(n),
                [...e.children].forEach((e, t) => {
                    "VIDEO" === e.nodeName && ((e.currentTime = 0), t === n && (e.play(), A(!0)));
                });
        }, [N, P, E, O]),
        r.useEffect(() => {
            (null == I ? void 0 : I.speaking) ? S(u.O.TALKING) : j === u.O.TALKING && S(u.O.IDLE);
        }, [I, j, S]),
        r.useEffect(() => {
            T.some((e) => {
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
                w + 13000 < Date.now() &&
                (S(u.O.HEAD_TURN), M(Date.now()));
        }, [T, n, w, S]),
        (0, i.jsxs)(o.P3F, {
            className: h.wrapper,
            style: {
                width: x.width,
                top: x.offset.top,
                left: b ? -x.offset.left : x.offset.left,
            },
            onMouseEnter: () => y(!0),
            onMouseLeave: () => y(!1),
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (l.avatar + 1) % d.eJ.length;
                0 === t && (t = 1),
                    c.ZP.update(g.id, {
                        avatar: t,
                        seat: null == n ? void 0 : n.id,
                    });
            },
            children: [
                (0, i.jsx)("div", {
                    className: h.vingette,
                    style: {
                        height: 1.25 * x.height,
                        width: 1.25 * x.width,
                    },
                }),
                (null == _ ? void 0 : _.decoration) != null &&
                    (0, i.jsx)(s.Z, {
                        src: _.decoration[0],
                        className: a()(h.character, { [h.flip]: b }),
                        autoPlay: !0,
                        loop: !0,
                        style: { width: x.width },
                    }),
                (0, i.jsx)("div", {
                    ref: C,
                    children: P.map((e, t) =>
                        (0, i.jsx)(
                            s.Z,
                            {
                                style: {
                                    opacity: +(t === R),
                                    width: x.width,
                                },
                                src: e,
                                className: a()(h.character, { [h.flip]: b }),
                                onEnded: () => {
                                    var t, n;
                                    if (
                                        j === u.O.HEAD_TURN &&
                                        (null == _ || null == (t = _.headTurn) ? void 0 : t.includes(e))
                                    ) {
                                        S(u.O.HEAD_TURN_BACK);
                                        let e = setTimeout(() => {
                                            A(!1), v.current.delete(e);
                                        }, 2000);
                                        v.current.add(e);
                                    } else
                                        j === u.O.HEAD_TURN_BACK &&
                                            (null == _ || null == (n = _.headTurnBack) ? void 0 : n.includes(e)) &&
                                            S(u.O.IDLE),
                                            A(!1);
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
