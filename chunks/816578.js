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
    C = n(899e3),
    I = n(652896),
    S = n(638480),
    j = n(607407),
    _ = n(872363),
    N = n(451988),
    b = n(765671),
    y = n(461782),
    D = n(228366),
    T = n(51092),
    R = n(40056),
    k = n(566541);
function w(e) {
    return (1 & e.buttons) == 1;
}
let O = i.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: a } = t,
        { onActive: o } = i.useContext(y.k3),
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
        } = i.useContext(R.e9),
        [j, _] = i.useState(null),
        [O, L] = i.useState(null),
        [M, F] = i.useState(0),
        [V, G] = i.useState(null),
        [P, H] = i.useState(null),
        [U, z] = i.useState(!1),
        W = i.useRef(new N.Ep()),
        $ = i.useRef(new N.Ep()),
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
                if (null == C.current) return R.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        Q = i.useCallback(
            (e) => {
                if (!Y || !w(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = K(e);
                m(!0), L(t), _(t), F(Date.now()), H(t), G(p);
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
                h(S({ x: V.x + n, y: V.y + l })), _(t);
            },
            [S, P, V, u, K, d, Y, o, h],
        ),
        q = i.useCallback(
            (e) => {
                !d || w(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), G(null));
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
    (0, b.i4)(
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
            if (null != n) {
                var e;
                (e = u && Y ? f : 1),
                    D.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: n, dimensions: void 0, zoom: e });
            }
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
        className: r()(k.iE, a, { [k.rc]: u && Y, [k.d$]: d }),
        onMouseDown: Q,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: r()(k.j, k.L2),
                style: en,
                children: (0, l.jsx)(T.A, { ...t, onResize: Z, wrapperClassName: void 0 }),
            }),
    });
});
var L = n(919706),
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
    Z = n(837284);
function K(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.A, { className: r()(Z.HL, Z.gH), stream: t, noText: !0 }),
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
                : (0, l.jsx)(_.A, {
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
            width: _,
            wrapperClassName: N,
            paused: b = !1,
        } = e,
        y = G.Ay.getVideoComponent(),
        D = (0, a.bG)([F.default], () => F.default.getId()),
        T = (0, v.A)(),
        { stream: R, user: k, streamId: w } = t,
        $ = (0, a.bG)([V.A], () => V.A.getChannel(R.channelId)),
        B = (0, a.bG)([M.A], () => M.A.getActiveStreamForUser(k.id, R.guildId), [k.id, R.guildId]),
        Q = (0, a.bG)([M.A], () => M.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([P.A], () => P.A.isFocused()),
        en = (0, C.Qu)(),
        el = B?.ownerId === D,
        ei = el && !(X || en) && x === f.N.NO_POPOUT,
        es = null != B ? (0, S.A)(B, k, k.id === D, ei) : null,
        er = _ < 195;
    (0, g.Ay)(() => {
        !Q &&
            $?.isGuildStageVoice() &&
            !el &&
            !M.A.isStreamMarkedFull((0, I._z)(R)) &&
            ((0, p.A9)(R), m.A.updateStageStreamSize(R.channelId, !1));
    });
    let ea = (0, E.u)(ee.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            et.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != y} | MediaEngine: ${G.Ay.supports(ee.O5.VIDEO)}`,
            );
        }, [y, B, n]),
        T)
    )
        return (0, l.jsx)(K, { stream: t.stream, isSmall: er, selected: n, isSelfStream: k.id === D });
    if (B?.state === q.XYD.ENDED) return (0, l.jsx)(U.A, { selected: n, stream: B, width: _ });
    if (null != ea || B?.state === q.XYD.FAILED)
        return (0, l.jsx)(z.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: _ });
    if (t.type === J.lp.HIDDEN_STREAM) return (0, l.jsx)(W.A, { selected: n, participant: t, width: _ });
    if (null != B && !n && null != y && G.Ay.supports(ee.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    O,
                    {
                        onResize: s,
                        wrapperClassName: r()(x !== f.N.CALL_TILE ? Z.tN : void 0, N),
                        className: Z.Qs,
                        streamId: w,
                        videoComponent: y,
                        fit: A,
                        paused: b || B?.state === q.XYD.PAUSED || ei,
                        videoSpinnerContext: el ? h.u.SELF_STREAM : h.u.REMOTE_STREAM,
                        userId: k.id,
                        streamKey: t.id,
                    },
                    w,
                ),
                null != es ? (0, l.jsx)(L.A, { size: (0, H.J)(_), ...es }) : null,
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: r()(Z.Qs, Z.Rh, { [Z.EX]: er }),
            children: [
                (0, l.jsx)(j.A, {
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
                                      text: _ < 175 ? Y.intl.string(Y.t.I6JG46) : Y.intl.string(Y.t["7Xq/nV"]),
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
