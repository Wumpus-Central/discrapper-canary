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
    h = n(684339),
    f = n(164617),
    A = n(402216),
    x = n(626584),
    E = n(525505),
    v = n(753727),
    C = n(652896),
    I = n(638480),
    S = n(607407),
    j = n(872363),
    _ = n(451988),
    N = n(765671),
    b = n(461782),
    y = n(426179),
    D = n(51092),
    T = n(40056),
    R = n(109294);
function k(e) {
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
            setPanOffset: h,
            zoomLevel: f,
            isWheeling: A,
            setIsWheeling: x,
            isSlidering: E,
            setVideoAspectRatio: v,
            wrapperRef: C,
            doZoom: I,
            clampPanOffset: S,
        } = i.useContext(T.e9),
        [j, w] = i.useState(null),
        [O, L] = i.useState(null),
        [M, F] = i.useState(0),
        [V, G] = i.useState(null),
        [P, H] = i.useState(null),
        [U, z] = i.useState(!1),
        W = i.useRef(new _.Ep()),
        $ = i.useRef(new _.Ep()),
        B = i.useRef(null),
        Y = f > c,
        Z = i.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && v(e.width / e.height), s?.(e);
            },
            [s, v],
        ),
        K = i.useCallback(
            (e) => {
                if (null == C.current) return T.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        Q = i.useCallback(
            (e) => {
                if (!Y || !k(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = K(e);
                m(!0), L(t), w(t), F(Date.now()), H(t), G(p);
            },
            [K, Y, p, m],
        ),
        X = i.useCallback(
            (e) => {
                if (((u || Y) && o(), !d || !Y || null == P || null == V)) return;
                e.preventDefault(), e.stopPropagation();
                let t = K(e),
                    n = t.x - P.x,
                    l = t.y - P.y;
                h(S({ x: V.x + n, y: V.y + l })), w(t);
            },
            [S, P, V, u, K, d, Y, o, h],
        ),
        q = i.useCallback(
            (e) => {
                !d || k(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), G(null));
            },
            [d, m],
        ),
        J = i.useCallback(
            (e) => {
                if (Y && null != O && null != j) {
                    let { x: t, y: n } = O,
                        { x: l, y: i } = j;
                    (Math.sqrt((l - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - M >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, O, M, j],
        ),
        ee = i.useCallback(() => {
            m(!1), H(null), G(null);
        }, [m]),
        et = i.useCallback(
            (e) => {
                u &&
                    (x(!0),
                    I(f - e.deltaY / 100, K(e), "wheel"),
                    o(),
                    W.current.start(100, () => {
                        x(!1);
                    }));
            },
            [u, I, f, K, o, x],
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
                    h((e) => {
                        let l = (i * (f - 1)) / 2,
                            r = (s * (f - 1)) / 2,
                            a = (t * (f - 1)) / 2,
                            o = (n * (f - 1)) / 2;
                        return S({ x: (0 !== l ? e.x / l : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        z(!1);
                    }));
            },
            [S, Y, f, h],
        ),
        [Y, f],
    ),
        (0, g.l0)(() => {
            W.current.stop(), $.current.stop();
        }),
        i.useEffect(() => {
            null != n && (0, y.c)(n, void 0, u && Y ? f : 1);
        }, [u, Y, n, f]);
    let en = i.useMemo(() => {
        let e = S(p);
        return {
            "--custom-zoom-scale": f,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || A || E ? "none" : "transform 0.15s ease-out",
        };
    }, [S, d, U, A, E, p, f]);
    return (0, l.jsx)("div", {
        ref: C,
        className: r()(R.iE, a, { [R.rc]: u && Y, [R.d$]: d }),
        onMouseDown: Q,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: r()(R.j, R.L2),
                style: en,
                children: (0, l.jsx)(D.A, { ...t, onResize: Z, wrapperClassName: void 0 }),
            }),
    });
});
var O = n(742023),
    L = n(919706),
    M = n(616356),
    F = n(280450),
    V = n(734057),
    G = n(453028),
    P = n(531685),
    H = n(200749),
    U = n(566331),
    z = n(768088),
    W = n(256195),
    $ = n(834730),
    B = n(1215),
    Y = n(375708),
    Z = n(584841);
function K(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.A, { className: r()(Z.HL, Z.gH), stream: t, noText: !0 }),
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
var Q = n(275731),
    X = n(345812),
    q = n(652215),
    J = n(806931),
    ee = n(731854);
let et = new x.A("StreamTile");
function en(e) {
    let { participant: t, selected: n, focused: i, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([M.A], () => M.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, X.VE)(r);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || i ? null : (0, l.jsx)(Q.A, { participant: t }),
            i || null == u || u.state === q.XYD.ENDED || u.state === q.XYD.FAILED
                ? null
                : (0, l.jsx)(j.A, {
                      size: A.Ay.Sizes.SMALL,
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
            fit: A,
            popoutType: x,
            width: j,
            wrapperClassName: _,
            paused: N = !1,
        } = e,
        b = G.Ay.getVideoComponent(),
        y = (0, a.bG)([F.default], () => F.default.getId()),
        D = (0, v.A)(),
        { stream: T, user: R, streamId: k } = t,
        $ = (0, a.bG)([V.A], () => V.A.getChannel(T.channelId)),
        B = (0, a.bG)([M.A], () => M.A.getActiveStreamForUser(R.id, T.guildId), [R.id, T.guildId]),
        Q = (0, a.bG)([M.A], () => M.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([P.A], () => P.A.isFocused()),
        en = (0, a.bG)([O.Ay], () => O.Ay.pauseSelfStreamPreviewWhenUnfocused),
        el = B?.ownerId === y,
        ei = el && en && !X && x === f.N.NO_POPOUT,
        es = null != B ? (0, I.A)(B, R, R.id === y, ei) : null,
        er = j < 195;
    (0, g.Ay)(() => {
        !Q &&
            $?.isGuildStageVoice() &&
            !el &&
            !M.A.isStreamMarkedFull((0, C._z)(T)) &&
            ((0, p.A9)(T), m.A.updateStageStreamSize(T.channelId, !1));
    });
    let ea = (0, E.u)(ee.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            et.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != b} | MediaEngine: ${G.Ay.supports(ee.O5.VIDEO)}`,
            );
        }, [b, B, n]),
        D)
    )
        return (0, l.jsx)(K, { stream: t.stream, isSmall: er, selected: n, isSelfStream: R.id === y });
    if (B?.state === q.XYD.ENDED) return (0, l.jsx)(U.A, { selected: n, stream: B, width: j });
    if (null != ea || B?.state === q.XYD.FAILED)
        return (0, l.jsx)(z.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: j });
    if (t.type === J.lp.HIDDEN_STREAM) return (0, l.jsx)(W.A, { selected: n, participant: t, width: j });
    if (null != B && !n && null != b && G.Ay.supports(ee.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    w,
                    {
                        onResize: s,
                        wrapperClassName: r()(x !== f.N.CALL_TILE ? Z.tN : void 0, _),
                        className: Z.Qs,
                        streamId: k,
                        videoComponent: b,
                        fit: A,
                        paused: N || B?.state === q.XYD.PAUSED || ei,
                        videoSpinnerContext: el ? h.u.SELF_STREAM : h.u.REMOTE_STREAM,
                        userId: R.id,
                        streamKey: t.id,
                    },
                    k,
                ),
                null != es ? (0, l.jsx)(L.A, { size: (0, H.J)(j), ...es }) : null,
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: r()(Z.Qs, Z.Rh, { [Z.EX]: er }),
            children: [
                (0, l.jsx)(S.A, {
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
                                      text: j < 175 ? Y.intl.string(Y.t.I6JG46) : Y.intl.string(Y.t["7Xq/nV"]),
                                  }),
                              }),
                              Q
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
