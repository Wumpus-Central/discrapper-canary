"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(607470),
    d = n(418126),
    c = n(814550),
    u = n(572808),
    _ = n(9045),
    E = n(806931),
    A = n(840275);
let h = (e) => {
    let {
            seats: t,
            claimedSeat: n,
            participant: a,
            participants: h,
            channel: I,
            flip: f,
            handleHover: p,
            enableAnimations: T = !0,
        } = e,
        m = r.useRef(null),
        g = r.useRef(new Set()),
        S = (0, _.A)(a),
        {
            setAsset: N,
            sampleAsset: C,
            animationState: R,
            updateAnimationState: O,
            characterAssets: L,
        } = (0, c.u)(S?.name),
        D = r.useMemo(() => Object.values(L ?? {}).flat(), [L]),
        y = h.find((e) => e.type === E.lp.USER && e.user.id === a.userId),
        v = r.useMemo(
            () =>
                h.filter((e) => {
                    var t;
                    return (t = a.userId), e.type === E.lp.USER && e.speaking && e.user.id !== t;
                }),
            [h, a.userId],
        ),
        b = r.useMemo(
            () =>
                v.flatMap((e) => {
                    let n = t.find((t) => t.claimedBy === e.user.id);
                    return null != n ? [n] : [];
                }),
            [v, t],
        ),
        [M, P] = r.useState(!1),
        [U, w] = r.useState(0),
        [G, x] = r.useState(0);
    return (
        r.useEffect(() => {
            P(!1);
        }, [S, D]),
        r.useEffect(() => {
            let e = g.current;
            return () => {
                [...e].forEach((e) => window.clearTimeout(e));
            };
        }, []),
        r.useEffect(() => {
            if (!T) return;
            let e = m.current;
            if (null == e || !0 === M) return;
            let t = C(),
                n = D.findIndex((e) => e === t);
            N(t),
                x(n),
                [...e.children].forEach((e, t) => {
                    "VIDEO" !== e.nodeName || ((e.currentTime = 0), t === n && (e.play(), P(!0)));
                });
        }, [M, D, C, N, T]),
        r.useEffect(() => {
            T && (y?.speaking ? O(c.f.TALKING) : R === c.f.TALKING && O(c.f.IDLE));
        }, [y, R, O, T]),
        r.useEffect(() => {
            !T ||
                (b.some((e) => {
                    switch (n.id) {
                        case 1:
                        case 2:
                        case 3:
                            return e?.id < n.id;
                        case 4:
                        case 5:
                        case 6:
                            return e?.id > n.id;
                        default:
                            return !1;
                    }
                }) &&
                    U + 13e3 < Date.now() &&
                    (O(c.f.HEAD_TURN), w(Date.now())));
        }, [b, n, U, O, T]),
        (0, i.jsxs)(l.D, {
            className: A.iE,
            style: { width: S.width, top: S.offset.top, left: f ? -S.offset.left : S.offset.left },
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (a.avatar + 1) % u.oo.length;
                0 === t && (t = 1), d.Ay.update(I.id, { avatar: t, seat: n?.id });
            },
            children: [
                (0, i.jsx)("div", { className: A.Fk, style: { height: 1.25 * S.height, width: 1.25 * S.width } }),
                L?.decoration != null &&
                    (0, i.jsx)(o.A, {
                        src: L.decoration[0],
                        className: s()(A.GG, { [A.UU]: f }),
                        autoPlay: T,
                        loop: T,
                        style: { width: S.width },
                    }),
                (0, i.jsx)("div", {
                    ref: m,
                    children: D.map((e, t) =>
                        (0, i.jsx)(
                            o.A,
                            {
                                style: { opacity: +(t === G), width: S.width },
                                src: e,
                                className: s()(A.GG, { [A.UU]: f }),
                                onEnded: () => {
                                    if (R === c.f.HEAD_TURN && L?.headTurn?.includes(e)) {
                                        O(c.f.HEAD_TURN_BACK);
                                        let e = setTimeout(() => {
                                            P(!1), g.current.delete(e);
                                        }, 2e3);
                                        g.current.add(e);
                                    } else
                                        R === c.f.HEAD_TURN_BACK && L?.headTurnBack?.includes(e) && O(c.f.IDLE), P(!1);
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
