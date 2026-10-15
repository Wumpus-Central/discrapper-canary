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
    g = n(401843),
    p = n(964486),
    f = n(684339),
    h = n(164617),
    x = n(402216),
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
    T = n(40056),
    L = n(109294);
function D(e) {
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
            panOffset: g,
            setPanOffset: f,
            zoomLevel: h,
            isWheeling: x,
            setIsWheeling: A,
            isSlidering: v,
            setVideoAspectRatio: E,
            wrapperRef: C,
            doZoom: j,
            clampPanOffset: I,
        } = l.useContext(T.e9),
        [S, k] = l.useState(null),
        [w, M] = l.useState(null),
        [O, G] = l.useState(0),
        [V, P] = l.useState(null),
        [F, H] = l.useState(null),
        [U, z] = l.useState(!1),
        W = l.useRef(new _.Ep()),
        B = l.useRef(new _.Ep()),
        $ = l.useRef(null),
        Z = h > c,
        Y = l.useCallback(
            (e) => {
                (e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e));
            },
            [s, E],
        ),
        Q = l.useCallback(
            (e) => {
                if (null == C.current) return T.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        K = l.useCallback(
            (e) => {
                if (!Z || !D(e)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = Q(e);
                (m(!0), M(t), k(t), G(Date.now()), H(t), P(g));
            },
            [Q, Z, g, m],
        ),
        X = l.useCallback(
            (e) => {
                if (((u || Z) && o(), !d || !Z || null == F || null == V)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = Q(e),
                    n = t.x - F.x,
                    i = t.y - F.y;
                (f(I({ x: V.x + n, y: V.y + i })), k(t));
            },
            [I, F, V, u, Q, d, Z, o, f],
        ),
        q = l.useCallback(
            (e) => {
                !d || D(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), P(null));
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
            (m(!1), H(null), P(null));
        }, [m]),
        et = l.useCallback(
            (e) => {
                u &&
                    (A(!0),
                    j(h - e.deltaY / 100, Q(e), "wheel"),
                    o(),
                    W.current.start(100, () => {
                        A(!1);
                    }));
            },
            [u, j, h, Q, o, A],
        );
    ((0, N.i4)(
        C,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Z || null == t || null == n) return;
                let i = $.current;
                if (null == i) {
                    $.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (z(!0),
                    f((e) => {
                        let i = (l * (h - 1)) / 2,
                            r = (s * (h - 1)) / 2,
                            a = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return I({ x: (0 !== i ? e.x / i : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    ($.current = { width: t, height: n }),
                    B.current.start(100, () => {
                        z(!1);
                    }));
            },
            [I, Z, h, f],
        ),
        [Z, h],
    ),
        (0, p.l0)(() => {
            (W.current.stop(), B.current.stop());
        }),
        l.useEffect(() => {
            null != n && (0, y.c)(n, void 0, u && Z ? h : 1);
        }, [u, Z, n, h]));
    let en = l.useMemo(() => {
        let e = I(g);
        return {
            "--custom-zoom-scale": h,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || x || v ? "none" : "transform 0.15s ease-out",
        };
    }, [I, d, U, x, v, g, h]);
    return (0, i.jsx)("div", {
        ref: C,
        className: r()(L.iE, a, { [L.rc]: u && Z, [L.d$]: d }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: r()(L.j, L.L2),
                style: en,
                children: (0, i.jsx)(R.A, { ...t, onResize: Y, wrapperClassName: void 0 }),
            }),
    });
});
var w = n(964404),
    M = n(919706),
    O = n(616356),
    G = n(280450),
    V = n(734057),
    P = n(192820),
    F = n(531685),
    H = n(200749),
    U = n(566331),
    z = n(768088),
    W = n(256195),
    B = n(834730),
    $ = n(1215),
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
                        (0, i.jsx)(B.E, {
                            className: Y.gS,
                            color: "text-overlay-light",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: s ? Z.intl.string(Z.t.UeEwjy) : Z.intl.string(Z.t["1i3tSY"]),
                        }),
                        (0, i.jsx)(u.m, {
                            asContainer: !0,
                            text: s ? Z.intl.string(Z.t["ro/HN8"]) : Z.intl.string(Z.t.UPf6ZM),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)($.n, {
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
                      size: x.Ay.Sizes.SMALL,
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
            fit: x,
            popoutType: A,
            width: S,
            wrapperClassName: _,
            paused: N = !1,
        } = e,
        b = P.Ay.getVideoComponent(),
        y = (0, a.bG)([G.default], () => G.default.getId()),
        R = (0, E.A)(),
        { stream: T, user: L, streamId: D } = t,
        B = (0, a.bG)([V.A], () => V.A.getChannel(T.channelId)),
        $ = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(L.id, T.guildId), [L.id, T.guildId]),
        K = (0, a.bG)([O.A], () => O.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([F.A], () => F.A.isFocused()),
        en = (0, a.bG)([w.Ay], () => w.Ay.pauseSelfStreamPreviewWhenUnfocused),
        ei = $?.ownerId === y,
        el = ei && en && !X && A === h.N.NO_POPOUT,
        es = null != $ ? (0, j.A)($, L, L.id === y, el) : null,
        er = S < 195;
    (0, p.Ay)(() => {
        !K &&
            B?.isGuildStageVoice() &&
            !ei &&
            !O.A.isStreamMarkedFull((0, C._z)(T)) &&
            ((0, g.A9)(T), m.A.updateStageStreamSize(T.channelId, !1));
    });
    let ea = (0, v.u)(ee.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            et.info(
                `Stream Tile State - activeStream: ${null != $} | selected: ${n} | Video: ${null != b} | MediaEngine: ${P.Ay.supports(ee.O5.VIDEO)}`,
            );
        }, [b, $, n]),
        R)
    )
        return (0, i.jsx)(Q, { stream: t.stream, isSmall: er, selected: n, isSelfStream: L.id === y });
    if ($?.state === q.XYD.ENDED) return (0, i.jsx)(U.A, { selected: n, stream: $, width: S });
    if (null != ea || $?.state === q.XYD.FAILED)
        return (0, i.jsx)(z.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: S });
    if (t.type === J.lp.HIDDEN_STREAM) return (0, i.jsx)(W.A, { selected: n, participant: t, width: S });
    if (null != $ && !n && null != b && P.Ay.supports(ee.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    k,
                    {
                        onResize: s,
                        wrapperClassName: r()(A !== h.N.CALL_TILE ? Y.tN : void 0, _),
                        className: Y.Qs,
                        streamId: D,
                        videoComponent: b,
                        fit: x,
                        paused: N || $?.state === q.XYD.PAUSED || el,
                        videoSpinnerContext: ei ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: L.id,
                        streamKey: t.id,
                    },
                    D,
                ),
                null != es ? (0, i.jsx)(M.A, { size: (0, H.J)(S), ...es }) : null,
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: r()(Y.Qs, Y.Rh, { [Y.EX]: er }),
            children: [
                (0, i.jsx)(I.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Y.HL, { [Y.gH]: null == $ }),
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
                                                    (e.stopPropagation(), (0, g.A9)(t.stream, { forceMultiple: !0 }));
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
