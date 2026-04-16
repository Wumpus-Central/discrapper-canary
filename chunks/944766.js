"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(607470),
    u = n(418126),
    c = n(814550),
    d = n(572808),
    _ = n(9045),
    f = n(806931),
    p = n(840275);
let h = 13e3,
    m = (e, t) => e.type === f.lp.USER && e.speaking && e.user.id !== t,
    E = (e) => {
        let {
                seats: t,
                claimedSeat: n,
                participant: s,
                participants: E,
                channel: g,
                flip: A,
                handleHover: I,
                enableAnimations: T = !0,
            } = e,
            S = i.useRef(null),
            y = i.useRef(new Set()),
            v = (0, _.A)(s),
            {
                setAsset: N,
                sampleAsset: C,
                animationState: R,
                updateAnimationState: O,
                characterAssets: b,
            } = (0, c.u)(v?.name),
            D = i.useMemo(() => Object.values(b ?? {}).flat(), [b]),
            L = E.find((e) => e.type === f.lp.USER && e.user.id === s.userId),
            w = i.useMemo(() => E.filter((e) => m(e, s.userId)), [E, s.userId]),
            M = i.useMemo(
                () =>
                    w.flatMap((e) => {
                        let n = t.find((t) => t.claimedBy === e.user.id);
                        return null != n ? [n] : [];
                    }),
                [w, t],
            ),
            [P, x] = i.useState(!1),
            [k, U] = i.useState(0),
            [G, F] = i.useState(0);
        return (
            i.useEffect(() => {
                x(!1);
            }, [v, D]),
            i.useEffect(() => {
                let e = y.current;
                return () => {
                    [...e].forEach((e) => window.clearTimeout(e));
                };
            }, []),
            i.useEffect(() => {
                if (!T) return;
                let e = S.current;
                if (null == e || !0 === P) return;
                let t = C(),
                    n = D.findIndex((e) => e === t);
                N(t),
                    F(n),
                    [...e.children].forEach((e, t) => {
                        if ("VIDEO" !== e.nodeName) return;
                        let r = e;
                        (r.currentTime = 0), t === n && (r.play(), x(!0));
                    });
            }, [P, D, C, N, T]),
            i.useEffect(() => {
                T && (L?.speaking ? O(c.f.TALKING) : R === c.f.TALKING && O(c.f.IDLE));
            }, [L, R, O, T]),
            i.useEffect(() => {
                !T ||
                    (M.some((e) => {
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
                        (O(c.f.HEAD_TURN), U(Date.now())));
            }, [M, n, k, O, T]),
            (0, r.jsxs)(o.DUT, {
                className: p.iE,
                style: { width: v.width, top: v.offset.top, left: A ? -v.offset.left : v.offset.left },
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                onClick: (e) => {
                    e.preventDefault(), e.stopPropagation();
                    let t = (s.avatar + 1) % d.oo.length;
                    0 === t && (t = 1), u.Ay.update(g.id, { avatar: t, seat: n?.id });
                },
                children: [
                    (0, r.jsx)("div", { className: p.Fk, style: { height: 1.25 * v.height, width: 1.25 * v.width } }),
                    b?.decoration != null &&
                        (0, r.jsx)(l.A, {
                            src: b.decoration[0],
                            className: a()(p.GG, { [p.UU]: A }),
                            autoPlay: T,
                            loop: T,
                            style: { width: v.width },
                        }),
                    (0, r.jsx)("div", {
                        ref: S,
                        children: D.map((e, t) =>
                            (0, r.jsx)(
                                l.A,
                                {
                                    style: { opacity: +(t === G), width: v.width },
                                    src: e,
                                    className: a()(p.GG, { [p.UU]: A }),
                                    onEnded: () => {
                                        if (R === c.f.HEAD_TURN && b?.headTurn?.includes(e)) {
                                            O(c.f.HEAD_TURN_BACK);
                                            let e = setTimeout(() => {
                                                x(!1), y.current.delete(e);
                                            }, 2e3);
                                            y.current.add(e);
                                        } else
                                            R === c.f.HEAD_TURN_BACK && b?.headTurnBack?.includes(e) && O(c.f.IDLE),
                                                x(!1);
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
