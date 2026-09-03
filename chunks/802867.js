n.d(t, { A: () => el, D: () => en });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(821609),
    u = n(866665),
    c = n(408278),
    d = n(622631),
    m = n(367513),
    p = n(401843),
    g = n(964486),
    f = n(684339),
    x = n(164617),
    h = n(402216),
    A = n(626584),
    v = n(525505),
    E = n(753727),
    C = n(652896),
    j = n(638480),
    I = n(607407),
    S = n(872363),
    _ = n(451988),
    N = n(765671),
    b = n(461782),
    y = n(426179),
    R = n(51092),
    k = n(40056),
    D = n(109294);
function T(e) {
    return (1 & e.buttons) == 1;
}
let w = i.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: a } = t,
        { onActive: o } = i.useContext(b.k3),
        {
            enabled: u,
            minZoom: c,
            isDragging: d,
            setIsDragging: m,
            panOffset: p,
            setPanOffset: f,
            zoomLevel: x,
            isWheeling: h,
            setIsWheeling: A,
            isSlidering: v,
            setVideoAspectRatio: E,
            wrapperRef: C,
            doZoom: j,
            clampPanOffset: I,
        } = i.useContext(k.e9),
        [S, w] = i.useState(null),
        [L, M] = i.useState(null),
        [O, V] = i.useState(0),
        [G, P] = i.useState(null),
        [F, H] = i.useState(null),
        [U, z] = i.useState(!1),
        W = i.useRef(new _.Ep()),
        $ = i.useRef(new _.Ep()),
        B = i.useRef(null),
        Y = x > c,
        Z = i.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e);
            },
            [s, E],
        ),
        Q = i.useCallback(
            (e) => {
                if (null == C.current) return k.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        K = i.useCallback(
            (e) => {
                if (!Y || !T(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e);
                m(!0), M(t), w(t), V(Date.now()), H(t), P(p);
            },
            [Q, Y, p, m],
        ),
        X = i.useCallback(
            (e) => {
                if (((u || Y) && o(), !d || !Y || null == F || null == G)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e),
                    n = t.x - F.x,
                    l = t.y - F.y;
                f(I({ x: G.x + n, y: G.y + l })), w(t);
            },
            [I, F, G, u, Q, d, Y, o, f],
        ),
        q = i.useCallback(
            (e) => {
                !d || T(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), P(null));
            },
            [d, m],
        ),
        J = i.useCallback(
            (e) => {
                if (Y && null != L && null != S) {
                    let { x: t, y: n } = L,
                        { x: l, y: i } = S;
                    (Math.sqrt((l - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - O >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, L, O, S],
        ),
        ee = i.useCallback(() => {
            m(!1), H(null), P(null);
        }, [m]),
        et = i.useCallback(
            (e) => {
                u &&
                    (A(!0),
                    j(x - e.deltaY / 100, Q(e), "wheel"),
                    o(),
                    W.current.start(100, () => {
                        A(!1);
                    }));
            },
            [u, j, x, Q, o, A],
        );
    (0, N.i4)(
        C,
        i.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Y || null == t || null == n) return;
                let l = B.current;
                if (null == l) {
                    B.current = { width: t, height: n };
                    return;
                }
                let { width: i, height: s } = l;
                (1 > Math.abs(t - i) && 1 > Math.abs(n - s)) ||
                    (z(!0),
                    f((e) => {
                        let l = (i * (x - 1)) / 2,
                            r = (s * (x - 1)) / 2,
                            a = (t * (x - 1)) / 2,
                            o = (n * (x - 1)) / 2;
                        return I({ x: (0 !== l ? e.x / l : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        z(!1);
                    }));
            },
            [I, Y, x, f],
        ),
        [Y, x],
    ),
        (0, g.l0)(() => {
            W.current.stop(), $.current.stop();
        }),
        i.useEffect(() => {
            null != n && (0, y.c)(n, void 0, u && Y ? x : 1);
        }, [u, Y, n, x]);
    let en = i.useMemo(() => {
        let e = I(p);
        return {
            "--custom-zoom-scale": x,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || h || v ? "none" : "transform 0.15s ease-out",
        };
    }, [I, d, U, h, v, p, x]);
    return (0, l.jsx)("div", {
        ref: C,
        className: r()(D.iE, a, { [D.rc]: u && Y, [D.d$]: d }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: r()(D.j, D.L2),
                style: en,
                children: (0, l.jsx)(R.A, { ...t, onResize: Z, wrapperClassName: void 0 }),
            }),
    });
});
var L = n(742023),
    M = n(919706),
    O = n(616356),
    V = n(280450),
    G = n(734057),
    P = n(916546),
    F = n(531685),
    H = n(200749),
    U = n(566331),
    z = n(768088),
    W = n(256195),
    $ = n(834730),
    B = n(1215),
    Y = n(375708),
    Z = n(584841);
function Q(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.A, { className: r()(Z.HL, Z.gH), stream: t, noText: !0 }),
            !i &&
                (0, l.jsxs)("div", {
                    className: r()(Z.Qs, Z.JK, { [Z.EX]: n }),
                    children: [
                        (0, l.jsx)($.E, {
                            className: Z.gS,
                            color: "text-overlay-light",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: s ? Y.intl.string(Y.t.UeEwjy) : Y.intl.string(Y.t["1i3tSY"]),
                        }),
                        (0, l.jsx)(u.m, {
                            asContainer: !0,
                            text: s ? Y.intl.string(Y.t["ro/HN8"]) : Y.intl.string(Y.t.UPf6ZM),
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(B.n, {
                                    size: "md",
                                    color: "currentColor",
                                    className: Z.uI,
                                    colorClass: Z.g$,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var K = n(275731),
    X = n(345812),
    q = n(652215),
    J = n(806931),
    ee = n(731854);
let et = new A.A("StreamTile");
function en(e) {
    let { participant: t, selected: n, focused: i, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, X.VE)(r);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || i ? null : (0, l.jsx)(K.A, { participant: t }),
            i || null == u || u.state === q.XYD.ENDED || u.state === q.XYD.FAILED
                ? null
                : (0, l.jsx)(S.A, {
                      size: h.Ay.Sizes.SMALL,
                      className: Z.Ok,
                      participant: t,
                      showQuality: !c && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function el(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: s,
            fit: h,
            popoutType: A,
            width: S,
            wrapperClassName: _,
            paused: N = !1,
        } = e,
        b = P.Ay.getVideoComponent(),
        y = (0, a.bG)([V.default], () => V.default.getId()),
        R = (0, E.A)(),
        { stream: k, user: D, streamId: T } = t,
        $ = (0, a.bG)([G.A], () => G.A.getChannel(k.channelId)),
        B = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(D.id, k.guildId), [D.id, k.guildId]),
        K = (0, a.bG)([O.A], () => O.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([F.A], () => F.A.isFocused()),
        en = (0, a.bG)([L.Ay], () => L.Ay.pauseSelfStreamPreviewWhenUnfocused),
        el = B?.ownerId === y,
        ei = el && en && !X && A === x.N.NO_POPOUT,
        es = null != B ? (0, j.A)(B, D, D.id === y, ei) : null,
        er = S < 195;
    (0, g.Ay)(() => {
        !K &&
            $?.isGuildStageVoice() &&
            !el &&
            !O.A.isStreamMarkedFull((0, C._z)(k)) &&
            ((0, p.A9)(k), m.A.updateStageStreamSize(k.channelId, !1));
    });
    let ea = (0, v.u)(ee.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            et.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != b} | MediaEngine: ${P.Ay.supports(ee.O5.VIDEO)}`,
            );
        }, [b, B, n]),
        R)
    )
        return (0, l.jsx)(Q, { stream: t.stream, isSmall: er, selected: n, isSelfStream: D.id === y });
    if (B?.state === q.XYD.ENDED) return (0, l.jsx)(U.A, { selected: n, stream: B, width: S });
    if (null != ea || B?.state === q.XYD.FAILED)
        return (0, l.jsx)(z.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: S });
    if (t.type === J.lp.HIDDEN_STREAM) return (0, l.jsx)(W.A, { selected: n, participant: t, width: S });
    if (null != B && !n && null != b && P.Ay.supports(ee.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    w,
                    {
                        onResize: s,
                        wrapperClassName: r()(A !== x.N.CALL_TILE ? Z.tN : void 0, _),
                        className: Z.Qs,
                        streamId: T,
                        videoComponent: b,
                        fit: h,
                        paused: N || B?.state === q.XYD.PAUSED || ei,
                        videoSpinnerContext: el ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: D.id,
                        streamKey: t.id,
                    },
                    T,
                ),
                null != es ? (0, l.jsx)(M.A, { size: (0, H.J)(S), ...es }) : null,
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: r()(Z.Qs, Z.Rh, { [Z.EX]: er }),
            children: [
                (0, l.jsx)(I.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Z.HL, { [Z.gH]: null == B }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: Z.lO,
                                  children: (0, l.jsx)(o.$, {
                                      variant: "secondary",
                                      size: er ? "sm" : "md",
                                      text: S < 175 ? Y.intl.string(Y.t.I6JG46) : Y.intl.string(Y.t["7Xq/nV"]),
                                  }),
                              }),
                              K
                                  ? (0, l.jsx)("div", {
                                        className: r()(Z.lO, Z.EU),
                                        children: (0, l.jsx)(u.m, {
                                            text: Y.intl.string(Y.t.wCrzut),
                                            children: (0, l.jsx)(c.K, {
                                                variant: "secondary",
                                                size: er ? "sm" : "md",
                                                icon: d.v,
                                                "aria-label": Y.intl.string(Y.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(), (0, p.A9)(t.stream, { forceMultiple: !0 });
                                                },
                                            }),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
            ],
        });
}
