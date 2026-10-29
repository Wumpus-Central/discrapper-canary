n.d(t, { A: () => ei, D: () => en });
var i = n(477900),
    l = n(582128),
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
    T = n(51092),
    L = n(40056),
    D = n(109294);
function R(e) {
    return (1 & e.buttons) == 1;
}
let k = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: a } = t,
        { onActive: o } = l.useContext(b.k3),
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
        } = l.useContext(L.e9),
        [S, k] = l.useState(null),
        [w, M] = l.useState(null),
        [O, G] = l.useState(0),
        [V, P] = l.useState(null),
        [H, F] = l.useState(null),
        [U, z] = l.useState(!1),
        W = l.useRef(new _.Ep()),
        $ = l.useRef(new _.Ep()),
        B = l.useRef(null),
        Z = x > c,
        Y = l.useCallback(
            (e) => {
                (e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e));
            },
            [s, E],
        ),
        Q = l.useCallback(
            (e) => {
                if (null == C.current) return L.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        K = l.useCallback(
            (e) => {
                if (!Z || !R(e)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = Q(e);
                (m(!0), M(t), k(t), G(Date.now()), F(t), P(p));
            },
            [Q, Z, p, m],
        ),
        X = l.useCallback(
            (e) => {
                if (((u || Z) && o(), !d || !Z || null == H || null == V)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = Q(e),
                    n = t.x - H.x,
                    i = t.y - H.y;
                (f(I({ x: V.x + n, y: V.y + i })), k(t));
            },
            [I, H, V, u, Q, d, Z, o, f],
        ),
        q = l.useCallback(
            (e) => {
                !d || R(e) || (e.preventDefault(), e.stopPropagation(), m(!1), F(null), P(null));
            },
            [d, m],
        ),
        J = l.useCallback(
            (e) => {
                if (Z && null != w && null != S) {
                    let { x: t, y: n } = w,
                        { x: i, y: l } = S;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - O >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Z, w, O, S],
        ),
        ee = l.useCallback(() => {
            (m(!1), F(null), P(null));
        }, [m]),
        et = l.useCallback(
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
    ((0, N.i4)(
        C,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Z || null == t || null == n) return;
                let i = B.current;
                if (null == i) {
                    B.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (z(!0),
                    f((e) => {
                        let i = (l * (x - 1)) / 2,
                            r = (s * (x - 1)) / 2,
                            a = (t * (x - 1)) / 2,
                            o = (n * (x - 1)) / 2;
                        return I({ x: (0 !== i ? e.x / i : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        z(!1);
                    }));
            },
            [I, Z, x, f],
        ),
        [Z, x],
    ),
        (0, g.l0)(() => {
            (W.current.stop(), $.current.stop());
        }),
        l.useEffect(() => {
            null != n && (0, y.c)(n, void 0, u && Z ? x : 1);
        }, [u, Z, n, x]));
    let en = l.useMemo(() => {
        let e = I(p);
        return {
            "--custom-zoom-scale": x,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || h || v ? "none" : "transform 0.15s ease-out",
        };
    }, [I, d, U, h, v, p, x]);
    return (0, i.jsx)("div", {
        ref: C,
        className: r()(D.iE, a, { [D.rc]: u && Z, [D.d$]: d }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: r()(D.j, D.L2),
                style: en,
                children: (0, i.jsx)(T.A, { ...t, onResize: Y, wrapperClassName: void 0 }),
            }),
    });
});
var w = n(964404),
    M = n(919706),
    O = n(616356),
    G = n(280450),
    V = n(734057),
    P = n(360906),
    H = n(531685),
    F = n(200749),
    U = n(566331),
    z = n(768088),
    W = n(256195),
    $ = n(834730),
    B = n(1215),
    Z = n(105292),
    Y = n(584841);
function Q(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.A, { className: r()(Y.HL, Y.gH), stream: t, noText: !0 }),
            !l &&
                (0, i.jsxs)("div", {
                    className: r()(Y.Qs, Y.JK, { [Y.EX]: n }),
                    children: [
                        (0, i.jsx)($.E, {
                            className: Y.gS,
                            color: "text-overlay-light",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: s ? Z.intl.string(Z.t.UeEwjy) : Z.intl.string(Z.t["1i3tSY"]),
                        }),
                        (0, i.jsx)(u.m, {
                            asContainer: !0,
                            text: s ? Z.intl.string(Z.t["ro/HN8"]) : Z.intl.string(Z.t.UPf6ZM),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(B.n, {
                                    size: "md",
                                    color: "currentColor",
                                    className: Y.uI,
                                    colorClass: Y.g$,
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
    let { participant: t, selected: n, focused: l, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, X.VE)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(K.A, { participant: t }),
            l || null == u || u.state === q.XYD.ENDED || u.state === q.XYD.FAILED
                ? null
                : (0, i.jsx)(S.A, {
                      size: h.Ay.Sizes.SMALL,
                      className: Y.Ok,
                      participant: t,
                      showQuality: !c && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function ei(e) {
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
        y = (0, a.bG)([G.default], () => G.default.getId()),
        T = (0, E.A)(),
        { stream: L, user: D, streamId: R } = t,
        $ = (0, a.bG)([V.A], () => V.A.getChannel(L.channelId)),
        B = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(D.id, L.guildId), [D.id, L.guildId]),
        K = (0, a.bG)([O.A], () => O.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([H.A], () => H.A.isFocused()),
        en = (0, a.bG)([w.Ay], () => w.Ay.pauseSelfStreamPreviewWhenUnfocused),
        ei = B?.ownerId === y,
        el = ei && en && !X && A === x.N.NO_POPOUT,
        es = null != B ? (0, j.A)(B, D, D.id === y, el) : null,
        er = S < 195;
    (0, g.Ay)(() => {
        !K &&
            $?.isGuildStageVoice() &&
            !ei &&
            !O.A.isStreamMarkedFull((0, C._z)(L)) &&
            ((0, p.A9)(L), m.A.updateStageStreamSize(L.channelId, !1));
    });
    let ea = (0, v.u)(ee.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            et.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != b} | MediaEngine: ${P.Ay.supports(ee.O5.VIDEO)}`,
            );
        }, [b, B, n]),
        T)
    )
        return (0, i.jsx)(Q, { stream: t.stream, isSmall: er, selected: n, isSelfStream: D.id === y });
    if (B?.state === q.XYD.ENDED) return (0, i.jsx)(U.A, { selected: n, stream: B, width: S });
    if (null != ea || B?.state === q.XYD.FAILED)
        return (0, i.jsx)(z.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: S });
    if (t.type === J.lp.HIDDEN_STREAM) return (0, i.jsx)(W.A, { selected: n, participant: t, width: S });
    if (null != B && !n && null != b && P.Ay.supports(ee.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    k,
                    {
                        onResize: s,
                        wrapperClassName: r()(A !== x.N.CALL_TILE ? Y.tN : void 0, _),
                        className: Y.Qs,
                        streamId: R,
                        videoComponent: b,
                        fit: h,
                        paused: N || B?.state === q.XYD.PAUSED || el,
                        videoSpinnerContext: ei ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: D.id,
                        streamKey: t.id,
                    },
                    R,
                ),
                null != es ? (0, i.jsx)(M.A, { size: (0, F.J)(S), ...es }) : null,
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: r()(Y.Qs, Y.Rh, { [Y.EX]: er }),
            children: [
                (0, i.jsx)(I.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Y.HL, { [Y.gH]: null == B }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: Y.lO,
                                  children: (0, i.jsx)(o.$, {
                                      variant: "secondary",
                                      size: er ? "sm" : "md",
                                      text: S < 175 ? Z.intl.string(Z.t.I6JG46) : Z.intl.string(Z.t["7Xq/nV"]),
                                  }),
                              }),
                              K
                                  ? (0, i.jsx)("div", {
                                        className: r()(Y.lO, Y.EU),
                                        children: (0, i.jsx)(u.m, {
                                            text: Z.intl.string(Z.t.wCrzut),
                                            children: (0, i.jsx)(c.K, {
                                                variant: "secondary",
                                                size: er ? "sm" : "md",
                                                icon: d.v,
                                                "aria-label": Z.intl.string(Z.t.wCrzut),
                                                onClick: (e) => {
                                                    (e.stopPropagation(), (0, p.A9)(t.stream, { forceMultiple: !0 }));
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
