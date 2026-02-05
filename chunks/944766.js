"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(607470),
    u = n(418126),
    c = n(814550),
    d = n(572808),
    _ = n(9045),
    f = n(806931),
    p = n(447196);
let h = 13e3,
    m = (e, t) => e.type === f.lp.USER && e.speaking && e.user.id !== t,
    g = (e) => {
        let {
                seats: t,
                claimedSeat: n,
                participant: a,
                participants: g,
                channel: E,
                flip: A,
                handleHover: I,
                enableAnimations: T = !0,
            } = e,
            y = i.useRef(null),
            S = i.useRef(new Set()),
            v = (0, _.A)(a),
            {
                setAsset: C,
                sampleAsset: b,
                animationState: N,
                updateAnimationState: R,
                characterAssets: O,
            } = (0, c.u)(v?.name),
            D = i.useMemo(() => Object.values(O ?? {}).flat(), [O]),
            L = g.find((e) => e.type === f.lp.USER && e.user.id === a.userId),
            w = i.useMemo(() => g.filter((e) => m(e, a.userId)), [g, a.userId]),
            x = i.useMemo(
                () =>
                    w.flatMap((e) => {
                        let n = t.find((t) => t.claimedBy === e.user.id);
                        return null != n ? [n] : [];
                    }),
                [w, t],
            ),
            [P, M] = i.useState(!1),
            [k, U] = i.useState(0),
            [G, V] = i.useState(0);
        return (
            i.useEffect(() => {
                M(!1);
            }, [v, D]),
            i.useEffect(() => {
                let e = S.current;
                return () => {
                    [...e].forEach((e) => window.clearTimeout(e));
                };
            }, []),
            i.useEffect(() => {
                if (!T) return;
                let e = y.current;
                if (null == e || !0 === P) return;
                let t = b(),
                    n = D.findIndex((e) => e === t);
                C(t),
                    V(n),
                    [...e.children].forEach((e, t) => {
                        if ("VIDEO" !== e.nodeName) return;
                        let r = e;
                        (r.currentTime = 0), t === n && (r.play(), M(!0));
                    });
            }, [P, D, b, C, T]),
            i.useEffect(() => {
                T && (L?.speaking ? R(c.f.TALKING) : N === c.f.TALKING && R(c.f.IDLE));
            }, [L, N, R, T]),
            i.useEffect(() => {
                !T ||
                    (x.some((e) => {
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
                        k + h < Date.now() &&
                        (R(c.f.HEAD_TURN), U(Date.now())));
            }, [x, n, k, R, T]),
            (0, r.jsxs)(o.DUT, {
                className: p.iE,
                style: { width: v.width, top: v.offset.top, left: A ? -v.offset.left : v.offset.left },
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                onClick: (e) => {
                    e.preventDefault(), e.stopPropagation();
                    let t = (a.avatar + 1) % d.oo.length;
                    0 === t && (t = 1), u.Ay.update(E.id, { avatar: t, seat: n?.id });
                },
                children: [
                    (0, r.jsx)("div", { className: p.Fk, style: { height: 1.25 * v.height, width: 1.25 * v.width } }),
                    O?.decoration != null &&
                        (0, r.jsx)(l.A, {
                            src: O.decoration[0],
                            className: s()(p.GG, { [p.UU]: A }),
                            autoPlay: T,
                            loop: T,
                            style: { width: v.width },
                        }),
                    (0, r.jsx)("div", {
                        ref: y,
                        children: D.map((e, t) =>
                            (0, r.jsx)(
                                l.A,
                                {
                                    style: { opacity: +(t === G), width: v.width },
                                    src: e,
                                    className: s()(p.GG, { [p.UU]: A }),
                                    onEnded: () => {
                                        if (N === c.f.HEAD_TURN && O?.headTurn?.includes(e)) {
                                            R(c.f.HEAD_TURN_BACK);
                                            let e = setTimeout(() => {
                                                M(!1), S.current.delete(e);
                                            }, 2e3);
                                            S.current.add(e);
                                        } else
                                            N === c.f.HEAD_TURN_BACK && O?.headTurnBack?.includes(e) && R(c.f.IDLE),
                                                M(!1);
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
