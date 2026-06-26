n.d(t, { A: () => en, D: () => et });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(990078),
    u = n(821609),
    c = n(408278),
    d = n(845012),
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
    I = n(638480),
    j = n(607407),
    _ = n(872363),
    S = n(451988),
    N = n(765671),
    b = n(461782),
    y = n(228366),
    T = n(51092),
    D = n(40056),
    w = n(926613);
function R(e) {
    return (1 & e.buttons) == 1;
}
let k = i.memo(function (e) {
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
            clampPanOffset: j,
        } = i.useContext(D.e9),
        [_, k] = i.useState(null),
        [O, L] = i.useState(null),
        [M, F] = i.useState(0),
        [V, G] = i.useState(null),
        [P, H] = i.useState(null),
        [U, z] = i.useState(!1),
        W = i.useRef(new S.Ep()),
        $ = i.useRef(new S.Ep()),
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
                if (null == C.current) return D.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        Q = i.useCallback(
            (e) => {
                if (!Y || !R(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = K(e);
                m(!0), L(t), k(t), F(Date.now()), H(t), G(p);
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
                h(j({ x: V.x + n, y: V.y + l })), k(t);
            },
            [j, P, V, u, K, d, Y, o, h],
        ),
        q = i.useCallback(
            (e) => {
                !d || R(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), G(null));
            },
            [d, m],
        ),
        J = i.useCallback(
            (e) => {
                if (Y && null != O && null != _) {
                    let { x: t, y: n } = O,
                        { x: l, y: i } = _;
                    (Math.sqrt((l - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - M >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, O, M, _],
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
                        return j({ x: (0 !== l ? e.x / l : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        z(!1);
                    }));
            },
            [j, Y, f, h],
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
                    y.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: n, dimensions: void 0, zoom: e });
            }
        }, [u, Y, n, f]);
    let en = i.useMemo(() => {
        let e = j(p);
        return {
            "--custom-zoom-scale": f,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || A || E ? "none" : "transform 0.15s ease-out",
        };
    }, [j, d, U, A, E, p, f]);
    return (0, l.jsx)("div", {
        ref: C,
        className: r()(w.iE, a, { [w.rc]: u && Y, [w.d$]: d }),
        onMouseDown: Q,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: r()(w.j, w.L2),
                style: en,
                children: (0, l.jsx)(T.A, { ...t, onResize: Z, wrapperClassName: void 0 }),
            }),
    });
});
var O = n(919706),
    L = n(616356),
    M = n(495544),
    F = n(734057),
    V = n(472444),
    G = n(531685),
    P = n(200749),
    H = n(566331),
    U = n(768088),
    z = n(256195),
    W = n(834730),
    $ = n(1215),
    B = n(375708),
    Y = n(391308);
function Z(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.A, { className: r()(Y.HL, Y.gH), stream: t, noText: !0 }),
            !i &&
                (0, l.jsxs)("div", {
                    className: r()(Y.Qs, Y.JK, { [Y.EX]: n }),
                    children: [
                        (0, l.jsx)(W.E, {
                            className: Y.gS,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: s ? B.intl.string(B.t.UeEwjy) : B.intl.string(B.t["1i3tSY"]),
                        }),
                        (0, l.jsx)(o.m, {
                            asContainer: !0,
                            text: s ? B.intl.string(B.t["ro/HN8"]) : B.intl.string(B.t.UPf6ZM),
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)($.n, {
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
    Q = n(345812),
    X = n(652215),
    q = n(806931),
    J = n(731854);
let ee = new x.A("StreamTile");
function et(e) {
    let { participant: t, selected: n, focused: i, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([L.A], () => L.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, Q.VE)(r);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || i ? null : (0, l.jsx)(K.A, { participant: t }),
            i || null == u || u.state === X.XYD.ENDED || u.state === X.XYD.FAILED
                ? null
                : (0, l.jsx)(_.A, {
                      size: A.Ay.Sizes.SMALL,
                      className: Y.Ok,
                      participant: t,
                      showQuality: !c && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function en(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: s,
            fit: A,
            popoutType: x,
            width: _,
            wrapperClassName: S,
            paused: N = !1,
        } = e,
        b = V.Ay.getVideoComponent(),
        y = (0, a.bG)([M.default], () => M.default.getId()),
        T = (0, v.A)(),
        { stream: D, user: w, streamId: R } = t,
        W = (0, a.bG)([F.A], () => F.A.getChannel(D.channelId)),
        $ = (0, a.bG)([L.A], () => L.A.getActiveStreamForUser(w.id, D.guildId), [w.id, D.guildId]),
        K = (0, a.bG)([L.A], () => L.A.getAllActiveStreams().length > 0),
        Q = (0, a.bG)([G.A], () => G.A.isFocused()),
        et = (0, C.Qu)(),
        en = $?.ownerId === y,
        el = en && !(Q || et) && x === f.N.NO_POPOUT,
        ei = null != $ ? (0, I.A)($, w, w.id === y, el) : null,
        es = _ < 195;
    (0, g.Ay)(() => {
        !K && W?.isGuildStageVoice() && !en && ((0, p.A9)(D), m.A.updateStageStreamSize(D.channelId, !1));
    });
    let er = (0, E.u)(J.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            ee.info(
                `Stream Tile State - activeStream: ${null != $} | selected: ${n} | Video: ${null != b} | MediaEngine: ${V.Ay.supports(J.O5.VIDEO)}`,
            );
        }, [b, $, n]),
        T)
    )
        return (0, l.jsx)(Z, { stream: t.stream, isSmall: es, selected: n, isSelfStream: w.id === y });
    if ($?.state === X.XYD.ENDED) return (0, l.jsx)(H.A, { selected: n, stream: $, width: _ });
    if (null != er || $?.state === X.XYD.FAILED)
        return (0, l.jsx)(U.A, { avError: er?.type, avErrorContext: er, selected: n, stream: t.stream, width: _ });
    if (t.type === q.lp.HIDDEN_STREAM) return (0, l.jsx)(z.A, { selected: n, participant: t, width: _ });
    if (null != $ && !n && null != b && V.Ay.supports(J.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    k,
                    {
                        onResize: s,
                        wrapperClassName: r()(x !== f.N.CALL_TILE ? Y.tN : void 0, S),
                        className: Y.Qs,
                        streamId: R,
                        videoComponent: b,
                        fit: A,
                        paused: N || $?.state === X.XYD.PAUSED || el,
                        videoSpinnerContext: en ? h.u.SELF_STREAM : h.u.REMOTE_STREAM,
                        userId: w.id,
                        streamKey: t.id,
                    },
                    R,
                ),
                null != ei ? (0, l.jsx)(O.A, { size: (0, P.J)(_), ...ei }) : null,
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: r()(Y.Qs, Y.Rh, { [Y.EX]: es }),
            children: [
                (0, l.jsx)(j.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Y.HL, { [Y.gH]: null == $ }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: Y.lO,
                                  children: (0, l.jsx)(u.$, {
                                      variant: "secondary",
                                      size: es ? "sm" : "md",
                                      text: _ < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"]),
                                  }),
                              }),
                              K
                                  ? (0, l.jsx)("div", {
                                        className: r()(Y.lO, Y.EU),
                                        children: (0, l.jsx)(o.m, {
                                            text: B.intl.string(B.t.wCrzut),
                                            children: (0, l.jsx)(c.K, {
                                                variant: "secondary",
                                                size: es ? "sm" : "md",
                                                icon: d.v,
                                                "aria-label": B.intl.string(B.t.wCrzut),
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
