"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(607470),
    u = n(418126),
    d = n(814550),
    c = n(572808),
    _ = n(9045),
    f = n(806931),
    E = n(93203);
let h = (e) => {
    let {
            seats: t,
            claimedSeat: n,
            participant: s,
            participants: h,
            channel: p,
            flip: m,
            handleHover: g,
            enableAnimations: A = !0,
        } = e,
        I = i.useRef(null),
        T = i.useRef(new Set()),
        S = (0, _.A)(s),
        {
            setAsset: y,
            sampleAsset: N,
            animationState: O,
            updateAnimationState: R,
            characterAssets: v,
        } = (0, d.u)(S?.name),
        C = i.useMemo(() => Object.values(v ?? {}).flat(), [v]),
        b = h.find((e) => e.type === f.lp.USER && e.user.id === s.userId),
        D = i.useMemo(
            () =>
                h.filter((e) => {
                    let t;
                    return (t = s.userId), e.type === f.lp.USER && e.speaking && e.user.id !== t;
                }),
            [h, s.userId],
        ),
        L = i.useMemo(
            () =>
                D.flatMap((e) => {
                    let n = t.find((t) => t.claimedBy === e.user.id);
                    return null != n ? [n] : [];
                }),
            [D, t],
        ),
        [w, M] = i.useState(!1),
        [P, U] = i.useState(0),
        [k, x] = i.useState(0);
    return (
        i.useEffect(() => {
            M(!1);
        }, [S, C]),
        i.useEffect(() => {
            let e = T.current;
            return () => {
                [...e].forEach((e) => window.clearTimeout(e));
            };
        }, []),
        i.useEffect(() => {
            if (!A) return;
            let e = I.current;
            if (null == e || !0 === w) return;
            let t = N(),
                n = C.findIndex((e) => e === t);
            y(t),
                x(n),
                [...e.children].forEach((e, t) => {
                    "VIDEO" !== e.nodeName || ((e.currentTime = 0), t === n && (e.play(), M(!0)));
                });
        }, [w, C, N, y, A]),
        i.useEffect(() => {
            A && (b?.speaking ? R(d.f.TALKING) : O === d.f.TALKING && R(d.f.IDLE));
        }, [b, O, R, A]),
        i.useEffect(() => {
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
                    (R(d.f.HEAD_TURN), U(Date.now())));
        }, [L, n, P, R, A]),
        (0, r.jsxs)(o.D, {
            className: E.iE,
            style: { width: S.width, top: S.offset.top, left: m ? -S.offset.left : S.offset.left },
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (s.avatar + 1) % c.oo.length;
                0 === t && (t = 1), u.Ay.update(p.id, { avatar: t, seat: n?.id });
            },
            children: [
                (0, r.jsx)("div", { className: E.Fk, style: { height: 1.25 * S.height, width: 1.25 * S.width } }),
                v?.decoration != null &&
                    (0, r.jsx)(l.A, {
                        src: v.decoration[0],
                        className: a()(E.GG, { [E.UU]: m }),
                        autoPlay: A,
                        loop: A,
                        style: { width: S.width },
                    }),
                (0, r.jsx)("div", {
                    ref: I,
                    children: C.map((e, t) =>
                        (0, r.jsx)(
                            l.A,
                            {
                                style: { opacity: +(t === k), width: S.width },
                                src: e,
                                className: a()(E.GG, { [E.UU]: m }),
                                onEnded: () => {
                                    if (O === d.f.HEAD_TURN && v?.headTurn?.includes(e)) {
                                        R(d.f.HEAD_TURN_BACK);
                                        let e = setTimeout(() => {
                                            M(!1), T.current.delete(e);
                                        }, 2e3);
                                        T.current.add(e);
                                    } else
                                        O === d.f.HEAD_TURN_BACK && v?.headTurnBack?.includes(e) && R(d.f.IDLE), M(!1);
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
