"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(607470),
    u = n(418126),
    c = n(814550),
    d = n(572808),
    _ = n(9045),
    f = n(806931),
    h = n(840275);
let p = (e) => {
    let {
            seats: t,
            claimedSeat: n,
            participant: s,
            participants: p,
            channel: E,
            flip: m,
            handleHover: g,
            enableAnimations: A = !0,
        } = e,
        I = r.useRef(null),
        T = r.useRef(new Set()),
        S = (0, _.A)(s),
        {
            setAsset: N,
            sampleAsset: y,
            animationState: C,
            updateAnimationState: v,
            characterAssets: O,
        } = (0, c.u)(S?.name),
        R = r.useMemo(() => Object.values(O ?? {}).flat(), [O]),
        b = p.find((e) => e.type === f.lp.USER && e.user.id === s.userId),
        D = r.useMemo(
            () =>
                p.filter((e) => {
                    let t;
                    return (t = s.userId), e.type === f.lp.USER && e.speaking && e.user.id !== t;
                }),
            [p, s.userId],
        ),
        L = r.useMemo(
            () =>
                D.flatMap((e) => {
                    let n = t.find((t) => t.claimedBy === e.user.id);
                    return null != n ? [n] : [];
                }),
            [D, t],
        ),
        [w, M] = r.useState(!1),
        [P, x] = r.useState(0),
        [U, k] = r.useState(0);
    return (
        r.useEffect(() => {
            M(!1);
        }, [S, R]),
        r.useEffect(() => {
            let e = T.current;
            return () => {
                [...e].forEach((e) => window.clearTimeout(e));
            };
        }, []),
        r.useEffect(() => {
            if (!A) return;
            let e = I.current;
            if (null == e || !0 === w) return;
            let t = y(),
                n = R.findIndex((e) => e === t);
            N(t),
                k(n),
                [...e.children].forEach((e, t) => {
                    "VIDEO" !== e.nodeName || ((e.currentTime = 0), t === n && (e.play(), M(!0)));
                });
        }, [w, R, y, N, A]),
        r.useEffect(() => {
            A && (b?.speaking ? v(c.f.TALKING) : C === c.f.TALKING && v(c.f.IDLE));
        }, [b, C, v, A]),
        r.useEffect(() => {
            !A ||
                (L.some((e) => {
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
                    P + 13e3 < Date.now() &&
                    (v(c.f.HEAD_TURN), x(Date.now())));
        }, [L, n, P, v, A]),
        (0, i.jsxs)(o.D, {
            className: h.iE,
            style: { width: S.width, top: S.offset.top, left: m ? -S.offset.left : S.offset.left },
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (s.avatar + 1) % d.oo.length;
                0 === t && (t = 1), u.Ay.update(E.id, { avatar: t, seat: n?.id });
            },
            children: [
                (0, i.jsx)("div", { className: h.Fk, style: { height: 1.25 * S.height, width: 1.25 * S.width } }),
                O?.decoration != null &&
                    (0, i.jsx)(l.A, {
                        src: O.decoration[0],
                        className: a()(h.GG, { [h.UU]: m }),
                        autoPlay: A,
                        loop: A,
                        style: { width: S.width },
                    }),
                (0, i.jsx)("div", {
                    ref: I,
                    children: R.map((e, t) =>
                        (0, i.jsx)(
                            l.A,
                            {
                                style: { opacity: +(t === U), width: S.width },
                                src: e,
                                className: a()(h.GG, { [h.UU]: m }),
                                onEnded: () => {
                                    if (C === c.f.HEAD_TURN && O?.headTurn?.includes(e)) {
                                        v(c.f.HEAD_TURN_BACK);
                                        let e = setTimeout(() => {
                                            M(!1), T.current.delete(e);
                                        }, 2e3);
                                        T.current.add(e);
                                    } else
                                        C === c.f.HEAD_TURN_BACK && O?.headTurnBack?.includes(e) && v(c.f.IDLE), M(!1);
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
