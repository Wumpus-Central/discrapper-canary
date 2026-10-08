n.d(t, { A: () => iH });
var i,
    r,
    s = n(477900),
    l = n(442433),
    a = n(793480),
    o = n(114994),
    d = n(71393),
    u = n(763827),
    c = n(140069),
    h = n(589051),
    m = n(308726),
    g = n(582128),
    p = n(503698),
    f = n.n(p),
    x = n(812729),
    A = n.n(x),
    E = n(202091),
    S = n(866323),
    I = n(939249),
    v = n(834730),
    j = n(259788),
    T = n(302614),
    C = n(981033);
let y = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function b(e) {
    let { locked: t, pinned: n } = e,
        [i, r] = g.useState(0),
        [l, a] = g.useState(0),
        [o, d] = g.useState(0),
        u = g.useRef(0),
        [c, h] = g.useState(0),
        { timeToLiveMs: m, reappearTimeMs: p } = j.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            A(),
        ),
        x = { timeToLiveMs: m, reappearTimeMs: p },
        b = g.useRef(x);
    function w() {
        (r(Date.now()), h((e) => e + 1));
    }
    (g.useEffect(() => {
        b.current = x;
    }),
        g.useEffect(
            () => (
                (u.current = setInterval(() => {
                    let e = Date.now();
                    (a(e),
                        d((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                r = i + b.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        }));
                }, 100)),
                () => {
                    clearInterval(u.current);
                }
            ),
            [],
        ));
    let N = i > 0 && l - i < 1e3,
        _ = (0, S.p)(o > 0 && o < l && l - o < m, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: y,
        }),
        [R, O] = g.useState(!1);
    if (
        (g.useEffect(() => {
            c > 10 && O(!0);
        }, [c]),
        R)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, s.jsx)(s.Fragment, {
              children: _(
                  (e, t) =>
                      t &&
                      (0, s.jsx)(E.animated.div, {
                          style: e,
                          className: C.r2,
                          children: (0, s.jsx)(T.A, {
                              className: f()(C.VC, N && C.Nd),
                              children: (0, s.jsx)(I.D, {
                                  onClick: w,
                                  className: C.vk,
                                  children: (0, s.jsxs)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-overlay-light",
                                      children: ["Click Me (", c, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
var w = n(149741),
    N = n(17928),
    _ = n(183623),
    R = n(684013),
    O = n(964486),
    M = n(198052),
    D = n(652896),
    k = n(567249),
    z = n(616356),
    P = n(280450),
    L = n(734057),
    V = n(38502),
    G = n(309010),
    U = n(41984),
    F = n(412477),
    H = n(475743),
    Y = n(532294),
    Z = n(810412),
    W = n(702841),
    X = n(205693),
    B = n(866665),
    q = n(358618),
    K = n(983851),
    Q = n(622631),
    J = n(365199),
    $ = n(890856),
    ee = n(827343),
    et = n(391973),
    en = n(401843),
    ei = n(520698),
    er = n(164617),
    es = n(402216),
    el = n(607407),
    ea = n(534400),
    eo = n(267102),
    ed = n(51092),
    eu = n(802867),
    ec = n(110234),
    eh = n(192820),
    em = n(287809),
    eg = n(562153),
    ep = n(761661),
    ef = n(652215),
    ex = n(660183),
    eA = n(911312);
function eE(e) {
    let { participant: t } = e,
        n = t.user.id,
        i = (0, W.bG)(
            [eh.Ay],
            () => {
                let e = (0, ei.A)(t.type);
                return eh.Ay.isLocalMute(t.user.id, e);
            },
            [t],
        ),
        r = (0, W.bG)([P.default], () => P.default.getId()),
        { hasVideo: l } = (0, ec.A)(t, r),
        a = i && l,
        o = g.useCallback(() => {
            ee.default.toggleLocalMute(n, X.x.STREAM);
        }, [n]);
    return (0, s.jsx)(B.m, {
        text: a ? ex.intl.string(ex.t.YqAjXy) : ex.intl.string(ex.t.w4m945),
        children: (0, s.jsx)(I.D, {
            className: eA.IF,
            onClick: (e) => {
                (e.stopPropagation(),
                    (0, Z.YX)(ef.uss.GO_LIVE, {
                        type: Z.Z5.AUDIO,
                        value: a ? Z.IP.ENABLED : Z.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    o());
            },
            children: a
                ? (0, s.jsx)(q._, { size: "sm", color: "currentColor" })
                : (0, s.jsx)(K.H, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eS(e, t) {
    return (i) => {
        ((0, Z.YX)(ef.uss.GO_LIVE, { type: Z.Z5.GO_LIVE, value: Z.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, l.L3)(i, async () => {
                let { default: i } = await Promise.all([
                    n.e("189673"),
                    n.e("245996"),
                    n.e("58315"),
                    n.e("761361"),
                ]).then(n.bind(n, 663912));
                return (n) => (0, s.jsx)(i, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            }));
    };
}
function eI(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: i } = e,
        r = (0, eo.Us)(),
        l = n.user,
        a = (0, W.bG)([em.default], () => em.default.getUser(l.id) ?? l, [l]),
        o = t ? ex.intl.string(ex.t.tLxK4l) : ex.intl.string(ex.t.E5RDnK);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: f()(eA.MI, { [eA.te]: t }) }),
            !t &&
                (0, s.jsx)("div", {
                    className: eA.TP,
                    children: (0, s.jsx)(B.m, {
                        text: o,
                        children: (0, s.jsxs)(I.D, {
                            className: eA.kx,
                            onClick: () => {
                                ((0, en.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    i(),
                                    (0, Z.YX)(ef.uss.GO_LIVE, {
                                        type: Z.Z5.GO_LIVE,
                                        value: Z.IP.ENABLED,
                                        userId: n.user.id,
                                    }));
                            },
                            children: [
                                (0, s.jsx)(v.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-overlay-light",
                                    children: ex.intl.string(ex.t.I6JG46),
                                }),
                                (0, s.jsx)(Q.v, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, s.jsxs)("div", {
                className: eA.ne,
                children: [
                    (0, s.jsx)("div", {
                        className: eA.fL,
                        children: (0, s.jsxs)("div", {
                            className: eA.K8,
                            children: [
                                (0, s.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-overlay-light",
                                    className: eA.yb,
                                    children: eg.Ay.getName(n.stream.guildId, n.stream.channelId, l),
                                }),
                                (0, s.jsx)(ea.Ay, {
                                    primaryGuild: a.primaryGuild,
                                    userId: a.id,
                                    containerClassName: eA.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, Z.YX)(ef.uss.GO_LIVE, {
                                            type: Z.Z5.GO_LIVE,
                                            value: Z.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: eA.FO,
                        children:
                            t &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(eE, { participant: n }),
                                    (0, s.jsx)(B.m, {
                                        text: ex.intl.string(ex.t["3D5yo/"]),
                                        children: (0, s.jsx)(I.D, {
                                            className: eA.IF,
                                            onClick: eS(n, r),
                                            children: (0, s.jsx)(J.MoreHorizontalIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
        ],
    });
}
let ev = new Set([ef.XYD.ENDED, ef.XYD.FAILED, ef.XYD.PAUSED]),
    ej = g.memo(function (e) {
        let { participant: t, width: n, locked: i, widgetId: r, pinned: l } = e,
            a = (0, W.bG)([z.A], () => z.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            o = (0, eo.Us)(),
            d = null != a && ev.has(a.state),
            u = null != a,
            c = (0, ep.dh)(t.stream),
            h = (0, ep.XG)(t.stream);
        return (!u && i) || d
            ? null
            : (0, s.jsxs)("div", {
                  className: eA.Vs,
                  children: [
                      u && !i && (0, s.jsx)(es.Ay, { size: es.Ay.Sizes.SMALL, className: eA.Ok }),
                      u
                          ? (0, s.jsx)("div", {
                                className: eA.X$,
                                children: (0, s.jsx)($.s, {
                                    "aria-label": ex.intl.formatToPlainString(ex.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: eS(t, o),
                                    className: eA.X$,
                                    style: { transform: `scale(${c})` },
                                    children: (0, s.jsx)(eu.A, {
                                        participant: t,
                                        width: n,
                                        fit: h ?? ed.$.CONTAIN,
                                        popoutType: er.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: i ? eA.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, s.jsx)("div", {
                                className: eA.Rh,
                                children: (0, s.jsx)(el.A, { noText: !0, className: eA.HL, stream: t.stream }),
                            }),
                      i
                          ? null
                          : (0, s.jsx)(eI, {
                                participant: t,
                                hasActiveStream: u,
                                onEnablePin: function () {
                                    l || (0, et.v0)(r);
                                },
                            }),
                  ],
              });
    });
var eT = n(765671),
    eC = n(531685),
    ey = n(365971),
    eb = n(129537);
let ew = 9 / 16,
    eN = 16 / 9;
function e_(e, t) {
    return t * (Math.max(1, e) - 1);
}
function eR(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: s, isVertical: l } = e,
        a = l ? t : t - e_(s, r),
        o = l ? n - e_(s, r) : n;
    return { verticalRatio: (o - i) / (a - i), horizontalRatio: (a - i) / (o - i) };
}
function eO(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: s, isVertical: l } = t,
        { maxWidth: a, maxHeight: o } = n,
        d = Math.max(1, s),
        u = e.width > a,
        c = e.height > o;
    if (!u && !c) return e;
    let h = e_(s, r),
        { verticalRatio: m, horizontalRatio: g } = eR({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: d,
            isVertical: l,
        }),
        p = e.width - i,
        f = e.height - i,
        x = a - i,
        A = o - i;
    return (
        l ? ((A -= h), (f -= h)) : ((x -= h), (p -= h)),
        u && c && (e.width > e.height ? (f = (p = x) * m) : (p = (f = A) * g), (u = p > x), (c = f > A)),
        u && (f = (p = x) * m),
        c && (p = (f = A) * g),
        l ? (f += e_(s, r)) : (p += e_(s, r)),
        { width: p + i, height: f + i }
    );
}
var eM = n(897720),
    eD = n(545807);
function ek(e, t) {
    return 2 * e + 2 * t;
}
function ez(e) {
    let { width: t, height: n } = e;
    return { fixed: !0, width: t, height: n };
}
function eP(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        s = { width: r, height: r * ew },
        l = Math.max(1, e),
        a = e_(e, t),
        o = ek(n, t);
    return i
        ? { width: s.width + o, height: s.height * l + a + o }
        : { width: s.width * l + a + o, height: s.height + o };
}
function eL(e, t, n, i) {
    let r = ek(e, t);
    return i ? n.width - r : (n.height - r) * eN;
}
function eV(e) {
    return e.height > e.width;
}
let eG = 180 / 1080;
function eU(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: s, widgetMinMaxSizes: l } = e,
        a = t === eM.IV.VERTICAL,
        o = eL(i, r, s, a);
    return eO(
        eP(n, r, i, a, o),
        { containerOffset: ek(i, r), gapSize: r, tileCount: n, isVertical: a },
        { maxWidth: l.maxSize.width, maxHeight: l.maxSize.height },
    );
}
function eF(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: r, minSize: s, containerSpecs: l, defaultSize: a, ...o } = e;
    function d(e) {
        return eH({
            operation: eb.P.RESIZE_NORTH,
            computedSize: e,
            originSize: e,
            borderWidth: i,
            padding: r,
            containerSpecs: l,
            ...o,
        });
    }
    let u = { widgetId: t, size: { fixed: n.fixed, ...d(n) }, minSize: { ...d(s) } };
    (null != a && (u.defaultSize = { ...d(a) }), (0, et.Ju)({ ...u }));
}
let eH = (e) => {
    let t,
        n,
        i,
        { operation: r, computedSize: s, originSize: l, borderWidth: a, padding: o, containerSpecs: d } = e,
        u = ek(a, o),
        c = Math.max(1, l.width),
        h = Math.max(1, l.height),
        m = { width: c, height: h },
        g = eV(m),
        p = ((t = eV(m)), (i = (n = eL(a, o, m, t)) * ew), t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        f = eR({ width: c, height: h, containerOffset: u, gapSize: o, tileCount: p, isVertical: g }),
        x = e_(p, o);
    return eO(
        (() => {
            var e, t;
            switch (r) {
                case eb.P.RESIZE_NORTH:
                case eb.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: s.height,
                        width: ((e = s.height), (n = ((g ? e - x : e) - u) * f.horizontalRatio), g || (n += x), n + u),
                    };
                default:
                    let i;
                    return {
                        width: s.width,
                        height: ((t = s.width), (i = ((g ? t : t - x) - u) * f.verticalRatio), g && (i += x), i + u),
                    };
            }
        })(),
        { containerOffset: u, gapSize: o, tileCount: p, isVertical: g },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
var eY = n(111568);
let eZ = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    eW = g.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: i,
                layout: r,
                locked: l,
                activeStreams: a,
                streamParticipants: o,
                participantsVersion: d,
                pinned: u,
                padding: c,
            } = e,
            h = o.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: i,
                locked: l,
                widgetId: t,
                pinned: u,
            })),
            m = (0, H.Ay)(n),
            p = (0, H.Ay)(l),
            x = r === eM.IV.VERTICAL,
            A = l || p !== l || m !== n,
            I = g.useMemo(() => {
                let e = 0,
                    t = 0;
                return x
                    ? h.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? c : 0)) - t.height, x: 0 }))
                    : h.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? c : 0)) - e.width, y: 0 }));
            }, [h, c, x]),
            v = g.useMemo(
                () => (0 === I.length ? 256 * ew : I.reduce((e, t) => e + t.height, 0) + (x ? c * (I.length - 1) : 0)),
                [I, x, c],
            ),
            j = g.useMemo(
                () => (0 === I.length ? 256 : I.reduce((e, t) => e + t.width, 0) + (x ? 0 : c * (I.length - 1))),
                [I, x, c],
            ),
            T = (0, S.p)(
                I,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return { x: t, y: n, width: i, height: r, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return { x: t, y: n, width: i, height: r };
                    },
                    config: eZ,
                    trail: 100 * !A,
                },
                A ? "animate-never" : "respect-motion-settings",
            ),
            C = (0, Z.Dk)(() => new Set(o.map((e) => e.user.id)), [o, d]),
            y = (0, Z.Dk)(() => new Set(o.filter((e) => a.has((0, D._z)(e.stream))).map((e) => e.user.id)), [o, a, d]);
        return (
            g.useEffect(() => {
                0 !== C.size &&
                    (0, Z.Y)(ef.uss.GO_LIVE, {
                        locked: Y.default.isInstanceLocked(),
                        shownUserIds: Array.from(C),
                        liveUserIds: Array.from(y),
                        contentInventoryIds: [],
                    });
            }, [C, y]),
            (0, s.jsx)("div", {
                className: f()({ [eY.UT]: !0, [eY.Vd]: x, [eY.xM]: !x }),
                style: x ? { height: v } : { width: j },
                children: T((e, t, r, l) =>
                    (0, s.jsx)(E.animated.div, {
                        className: eY.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: h.length - l }),
                        children: (function (e) {
                            let { participant: t, width: n, locked: i, widgetId: r, pinned: l } = e;
                            return (0, s.jsx)("div", {
                                className: eY.iA,
                                children: (0, s.jsx)(
                                    ej,
                                    { participant: t, width: n, locked: i, widgetId: r, pinned: l },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
var eX = n(392164),
    eB = n(391436);
function eq(e) {
    var t, n;
    let i,
        r,
        l,
        {
            id: a,
            widget: o,
            size: d,
            locked: u,
            padding: c,
            borderWidth: h,
            opacity: m,
            horizontal: p,
            pinned: f,
            anchorTop: x,
            anchorLeft: A,
            showEmpty: E = !0,
        } = e,
        S = p ? eM.IV.HORIZONTAL : eM.IV.VERTICAL,
        I = S === eM.IV.VERTICAL,
        v = (0, N.bG)(
            [V.A],
            () => {
                let e = V.A.getWidget(a);
                return !!(0, eM.dO)(e) && !u && (e.meta.showAllStreams ?? !0);
            },
            [a, u],
        ),
        j = (0, N.bG)([G.Ay], () => G.Ay.getVoiceChannelId()),
        T = (0, N.bG)([L.A], () => L.A.getChannel(j)),
        C = (0, N.bG)([P.default], () => P.default.getId()),
        {
            streamParticipants: y,
            activeStreams: b,
            participantsVersion: w,
        } = ((t = (x && I) || (A && p)),
        (n = (!x && I) || (!A && p)),
        (i = (0, N.yK)([z.A], () => (null == j ? [] : z.A.getAllActiveStreamsForChannel(j)))),
        (r = g.useMemo(() => new Set(i.map((e) => (0, D._z)(e))), [i])),
        (l = (0, N.bG)([M.A], () => (null == j ? -1 : M.A.getParticipantsVersion(j)))),
        {
            streamParticipants: (0, N.yK)(
                [M.A, z.A],
                () => {
                    if (null == j) return [];
                    function e(e) {
                        return r.has((0, D._z)(e.stream));
                    }
                    let i = M.A.getStreamParticipants(j).filter((t) => {
                        if (t.user.id === C) return !1;
                        let n = z.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                        return !(null != n && ev.has(n.state)) && (!!v || e(t));
                    });
                    return (
                        i.sort((i, r) => {
                            if (t) {
                                if (e(i) && !e(r)) return -1;
                                if (!e(i) && e(r)) return 1;
                            } else if (n) {
                                if (e(i) && !e(r)) return 1;
                                if (!e(i) && e(r)) return -1;
                            }
                            return i.user.username.localeCompare(r.user.username);
                        }),
                        i
                    );
                },
                [j, r, C, v, t, n],
            ),
            activeStreams: r,
            participantsVersion: l,
        }),
        Y = y.length,
        Z = (0, N.bG)([k.A], () => k.A.getWindowState(eX.f), []),
        {
            tileWidth: W,
            tileHeight: X,
            widgetWidth: B,
            widgetHeight: q,
            containerRef: K,
            containerMinMaxSizes: Q,
        } = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, isVertical: r, widgetSize: s } = e,
                { width: l, height: a } = {
                    width: "number" == typeof s.width ? s.width : 256,
                    height: "number" == typeof s.height ? s.height : 256 * ew,
                },
                { width: o = l, height: d = a, ref: u } = (0, eT.Ay)(),
                c = (0, eD.A)(),
                h = (0, ey.Q2)(c),
                m = (0, N.bG)([eC.A], () => eC.A.windowSize(h), [h]),
                g = (function (e) {
                    let {
                            tileCount: t,
                            padding: n,
                            borderWidth: i,
                            windowWidth: r,
                            windowHeight: s,
                            isVertical: l,
                        } = e,
                        a = eP(t, n, i, l),
                        o = { maxX: r ?? (2 * a.width) / 0.75, maxY: s ?? (2 * a.height) / 0.75, minX: 0, minY: 0 },
                        d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                        u = (s ?? 0) * eG;
                    return (
                        (u = Math.max(a.height, u)),
                        {
                            minSize: a,
                            defaultSize: eP(t, n, i, l, (u = Math.min(d.height, u)) * eN),
                            maxSize: d,
                            containerSpecs: o,
                        }
                    );
                })({
                    tileCount: t,
                    padding: n,
                    borderWidth: i,
                    windowWidth: m.width,
                    windowHeight: m.height,
                    isVertical: r,
                }),
                p = ek(i, n),
                f = eL(i, n, { width: o + p, height: d + p }, r),
                x = f * ew;
            return {
                tileWidth: f,
                tileHeight: x,
                widgetWidth: l,
                widgetHeight: a,
                containerRef: u,
                containerMinMaxSizes: g,
            };
        })({ tileCount: Y, padding: c, borderWidth: h, isVertical: I, widgetSize: d }),
        J = {
            id: a,
            widget: o,
            layout: S,
            participants: y.length,
            padding: c,
            borderWidth: h,
            widgetMinMaxSizes: Q,
            containerSize: { width: B, height: q },
            orientedPosition: { top: 0, left: 0, bottom: Z?.height ?? q, right: Z?.width ?? B },
            locked: u,
        };
    !(function (e) {
        let { streamParticipants: t, layout: n, widgetLayoutSpecs: i } = e,
            r = g.useRef(i);
        r.current = i;
        let s = (0, H.Ay)(n),
            l = t.length,
            a = i.widgetMinMaxSizes.maxSize.width * i.widgetMinMaxSizes.maxSize.height;
        ((0, O.u5)(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: s,
                widget: a,
                borderWidth: o,
                locked: d,
                ...u
            } = r.current;
            null == a ||
                eF({
                    widgetId: e,
                    size: ez(
                        eU({
                            layout: i,
                            tileCount: Math.max(1, l),
                            borderWidth: o,
                            padding: s,
                            previousContainerSize: t.defaultSize,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    defaultSize: t.defaultSize,
                    minSize: ez(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: s,
                    borderWidth: o,
                    widget: a,
                    ...u,
                });
        }),
            g.useLayoutEffect(() => {
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: n,
                    layout: i,
                    padding: s,
                    widget: a,
                    borderWidth: o,
                    locked: d,
                    ...u
                } = r.current;
                if (null != a) {
                    if (0 === l) {
                        if (d) return;
                        eF({
                            widgetId: e,
                            size: ez(t.defaultSize),
                            defaultSize: t.defaultSize,
                            minSize: ez(t.minSize),
                            padding: s,
                            borderWidth: o,
                            widget: a,
                            containerSpecs: t.containerSpecs,
                            ...u,
                        });
                        return;
                    }
                    eF({
                        widgetId: e,
                        size: ez(
                            eU({
                                layout: i,
                                tileCount: l,
                                borderWidth: o,
                                padding: s,
                                previousContainerSize: n,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: ez(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: s,
                        borderWidth: o,
                        widget: a,
                        ...u,
                    });
                }
            }, [l, a]),
            g.useLayoutEffect(() => {
                if (r.current.participants <= 1) return;
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: i,
                    padding: l,
                    borderWidth: a,
                    participants: o,
                    widget: d,
                    ...u
                } = r.current;
                if (null == d || s === n) return;
                let c = (function (e) {
                    let {
                            oldLayout: t,
                            newLayout: n,
                            tileCount: i,
                            borderWidth: r,
                            padding: s,
                            previousContainerSize: l,
                            widgetMinMaxSizes: a,
                        } = e,
                        o = eL(r, s, l, t === eM.IV.VERTICAL);
                    return eO(
                        eP(i, s, r, n === eM.IV.VERTICAL, o),
                        { containerOffset: ek(r, s), gapSize: s, tileCount: i, isVertical: n === eM.IV.VERTICAL },
                        { maxWidth: a.maxSize.width, maxHeight: a.maxSize.height },
                    );
                })({
                    oldLayout: s ?? n,
                    newLayout: n,
                    tileCount: o,
                    borderWidth: a,
                    padding: l,
                    previousContainerSize: i,
                    widgetMinMaxSizes: t,
                });
                eF({
                    widgetId: e,
                    size: ez(c),
                    minSize: ez(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: l,
                    borderWidth: a,
                    widget: d,
                    ...u,
                });
            }, [n, s]),
            (0, O.l0)(() => {
                let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...s } = r.current;
                null != n &&
                    eF({
                        widgetId: e,
                        size: ez(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: ez(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: i,
                        widget: n,
                        ...s,
                    });
            }));
    })({ id: a, streamParticipants: y, layout: S, widgetLayoutSpecs: J });
    let $ = null == T || (0 === b.size && u) || (0 === Y && !u);
    return (g.useEffect(() => {
        R.A.setGpuBoostRequested(U.y7.OVERLAY_VIDEO_STREAM_RENDERING, !$);
    }, [$]),
    (0, O.Ay)(() => () => {
        R.A.setGpuBoostRequested(U.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    ($ || !f) && u)
        ? null
        : $ && !u
          ? E
              ? u
                  ? null
                  : (0, s.jsx)(F.g, { emptyText: ex.intl.string(ex.t["T6+rXy"]), icon: _.F, absolute: !0 })
              : null
          : (0, s.jsx)("div", {
                className: eB.u,
                style: { opacity: m },
                ref: K,
                children: (0, s.jsx)(eW, {
                    widgetId: a,
                    tileWidth: W,
                    tileHeight: X,
                    locked: u,
                    layout: S,
                    activeStreams: b,
                    streamParticipants: y,
                    participantsVersion: w,
                    pinned: f,
                    padding: c,
                }),
            });
}
var eK = n(193249),
    eQ = n(821609),
    eJ = n(706712),
    e$ = n(595528),
    e0 = n(321090),
    e1 = n(189953);
function e2(e) {
    let { locked: t, pinned: n, anchorLeft: i } = e,
        r = (0, N.bG)([e$.A], () => e$.A.getSocket()),
        l = (0, N.bG)([e0.A], () => e0.A.isGPUBoosted());
    (0, eJ.ZX)();
    let a = (0, N.bG)([k.A], () => k.A.getWindow(eX.f)),
        [o, d] = (0, eJ.DQ)(r),
        {
            currentFPS: u,
            averageFrameTime: c,
            timeSinceLastDrop: h,
            onResetFrameData: m,
            droppedFramesRef: p,
            renderedFrameCount: x,
            bufferFramecountRef: A,
            frameCheckerEffect: E,
        } = (0, eJ.Dj)(!0, o, !0),
        [S, I, j] = (0, eJ.F5)(r),
        [C, y] = (0, eJ.km)(S, E, a),
        b = performance.now() - d.current < eJ.Jc,
        w = I(c, A.current);
    (0, O.Ay)(
        () => (
            C(),
            () => {
                y();
            }
        ),
    );
    let _ = g.useCallback(() => {
            (m(), j(), C());
        }, [m, j, C]),
        [R, M] = g.useState(!0),
        [D, z] = g.useState(!0),
        [P, L] = g.useState(!0),
        [V, G] = g.useState(!0),
        [U, F] = g.useState(!0);
    return t && !n
        ? null
        : (0, s.jsxs)("div", {
              className: f()(e1.st, !i && e1.Hk),
              children: [
                  (R || !t) &&
                      (0, s.jsxs)("div", {
                          className: e1.PG,
                          children: [
                              !t &&
                                  (0, s.jsx)("div", {
                                      className: e1.On,
                                      children: (0, s.jsx)(eK.d, { checked: R, onChange: (e) => M(e) }),
                                  }),
                              (0, s.jsxs)(v.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e1.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, s.jsx)(v.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              u < 30
                                                  ? "text-feedback-critical"
                                                  : u < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: u.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (D || !t) &&
                      (0, s.jsxs)("div", {
                          className: e1.PG,
                          children: [
                              !t &&
                                  (0, s.jsx)("div", {
                                      className: e1.On,
                                      children: (0, s.jsx)(eK.d, { checked: D, onChange: (e) => z(e) }),
                                  }),
                              (0, s.jsxs)(v.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e1.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, s.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: c > 1.1 * eJ.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [c.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (P || !t) &&
                      (0, s.jsxs)("div", {
                          className: e1.PG,
                          children: [
                              !t &&
                                  (0, s.jsx)("div", {
                                      className: e1.On,
                                      children: (0, s.jsx)(eK.d, { checked: P, onChange: (e) => L(e) }),
                                  }),
                              (0, s.jsxs)(v.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e1.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, s.jsx)(v.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              h < 2
                                                  ? "text-feedback-critical"
                                                  : h < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: p.current,
                                      }),
                                      (0, s.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: e1.af,
                                          children: ["(", ((p.current / x.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (V || !t) &&
                      (0, s.jsxs)("div", {
                          className: e1.PG,
                          children: [
                              !t &&
                                  (0, s.jsx)("div", {
                                      className: e1.On,
                                      children: (0, s.jsx)(eK.d, { checked: V, onChange: (e) => G(e) }),
                                  }),
                              (0, s.jsxs)(v.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e1.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, s.jsx)(v.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: x.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (U || !t) &&
                      (0, s.jsxs)("div", {
                          className: e1.PG,
                          children: [
                              !t &&
                                  (0, s.jsx)("div", {
                                      className: e1.On,
                                      children: (0, s.jsx)(eK.d, { checked: U, onChange: (e) => F(e) }),
                                  }),
                              (0, s.jsx)(B.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, s.jsx)("div", {
                                      children: (0, s.jsxs)(v.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: e1.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, s.jsxs)(v.E, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: w > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [w.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  b &&
                      (0, s.jsx)(B.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, s.jsx)("span", {
                              children: (0, s.jsx)(v.E, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  l &&
                      (0, s.jsx)(v.E, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, s.jsx)("div", {
                          className: e1.m8,
                          children: (0, s.jsx)(T.A, {
                              children: (0, s.jsx)(eQ.$, { variant: "primary", text: "Reset Frame Data", onClick: _ }),
                          }),
                      }),
              ],
          });
}
var e5 = n(417098),
    e3 = n(55619),
    e4 = n(734066),
    e6 = n(200542),
    e9 = n(351906),
    e8 = n(377802),
    e7 = n(348858),
    te = n(523875),
    tt = n(416696),
    tn = n(621956),
    ti = n(446080),
    tr = n(922016),
    ts = n(615675),
    tl = n(978940),
    ta = n(176781),
    to = n(730852),
    td = n(688810),
    tu = n(617354),
    tc = n(980923),
    th = n(829773),
    tm = n(329072),
    tg = n(18235),
    tp = n(183184),
    tf = n(47167),
    tx = n(713654),
    tA = n(572164),
    tE = n(614584),
    tS = n(980707),
    tI = n(477782),
    tv = n(650338),
    tj = n(915725),
    tT = n(226640),
    tC = n(753070),
    ty = n(704796);
function tb(e) {
    let { onClose: t } = e,
        n = (0, tA.E)(),
        i = (0, N.bG)([tj.Ay], () => tj.Ay.getSettings().clipsQuality),
        r = (0, N.bG)([tj.Ay], () => tj.Ay.getSettings().clipsLength),
        l = (0, tT.Qu)(),
        a = (0, tT.gF)(),
        o = (0, tT.Fz)();
    return (0, s.jsxs)(tS.W, {
        navId: "overlay-clips-menu",
        "aria-label": ex.intl.string(ty.default["YvJKD+"]),
        onClose: t,
        onSelect: t,
        children: [
            (0, s.jsx)(tI.sL, {
                id: "status",
                label: ex.intl.string(ty.default.qGgW4M),
                checked: n,
                action: () => {
                    (0, tE.yO)({ clipsEnabled: !n, trackAnalytics: !0 });
                },
            }),
            (0, s.jsx)(tI.Dr, {
                id: "clips-length",
                label: ex.intl.string(ex.t.OgfUio),
                subtext: ex.intl.formatToPlainString(ex.t["bTFv/3"], { count: r / 1e3 }),
                children: l.map((e) => {
                    let { id: t, value: n, label: i } = e;
                    return (0, s.jsx)(
                        tI.iD,
                        {
                            id: t,
                            group: "clips-length-options",
                            label: i,
                            checked: n === r,
                            action: () => (0, tE.h$)(n),
                        },
                        t,
                    );
                }),
            }),
            (0, s.jsx)(tI.Dr, {
                id: "clips-resolution",
                subtext: (0, tC.zr)(i.resolution),
                label: ex.intl.string(ex.t.aFudZJ),
                children: a.map((e) => {
                    let { id: t, value: n, label: r } = e;
                    return (0, s.jsx)(
                        tI.iD,
                        {
                            id: t,
                            group: "clips-resolution-options",
                            label: r,
                            checked: n === i.resolution,
                            action: () => {
                                let { clipsQuality: e } = tj.Ay.getSettings();
                                (0, tE.GS)({ ...e, resolution: n });
                            },
                        },
                        t,
                    );
                }),
            }),
            (0, s.jsx)(tI.Dr, {
                id: "clips-framerate",
                subtext: (0, tv.Bs)(i.frameRate),
                label: ex.intl.string(ex.t["2wScL1"]),
                children: o.map((e) => {
                    let { id: t, value: n, label: r } = e;
                    return (0, s.jsx)(
                        tI.iD,
                        {
                            id: t,
                            group: "clips-framerate-options",
                            label: r,
                            checked: n === i.frameRate,
                            action: () => {
                                let { clipsQuality: e } = tj.Ay.getSettings();
                                (0, tE.GS)({ ...e, frameRate: n });
                            },
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var tw = n(414405),
    tN = n(880144),
    t_ = n(338771),
    tR = n(548118),
    tO = n(999751),
    tM = n(209932),
    tD = n(511558),
    tk = n(389960),
    tz = n(704877),
    tP = n(173660),
    tL = n(675991),
    tV = n(848362),
    tG = n(594831),
    tU = n(222692),
    tF = n(204651),
    tH = n(977997),
    tY = n(46282),
    tZ = n(233741),
    tW = n(243612),
    tX = n(731854),
    tB = n(816466);
function tq(e) {
    let t = g.useRef(null);
    return (
        g.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function tK(e) {
    let {
        ref: t,
        isActive: n,
        disabled: i,
        iconComponent: r,
        iconColor: l,
        tooltip: a,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: u,
        popoutOpen: c,
        onClick: h,
        popoutDisabled: m,
        onPopoutClick: g,
        onMouseEnter: p,
        onMouseLeave: f,
        onContextMenu: x,
        isTrayButton: A,
        ...E
    } = e;
    return (0, s.jsx)(tF.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: tB.x6,
        disabled: i,
        popoutOpen: c,
        popoutDisabled: m,
        label: a,
        isTrayButton: A,
        onMouseEnter: (e) => {
            p?.(e);
        },
        onMouseLeave: (e) => {
            f?.(e);
        },
        iconComponent: r,
        iconColor: l,
        caretColor: u,
        isActive: n,
        onContextMenu: x,
        onPopoutClick: g,
        "aria-label": E["aria-label"],
    });
}
function tQ(e) {
    let { voiceChannel: t, locked: n } = e,
        i = g.useRef(null),
        { suppress: r, selfMute: l, mute: a } = (0, tP.A)(t),
        o = l || a || r,
        d = (0, tc.A)(l, a, r, !1),
        { Component: u, play: c, events: h } = (0, te.L)(o ? "unmute" : "mute");
    g.useEffect(() => () => c(), [c, o]);
    let m = tq(n);
    function p(e) {
        return (t) => {
            (e(t), (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.MICROPHONE, value: Z.IP.SETTINGS_OPENED }));
        };
    }
    return (0, s.jsx)(tr.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = m(t);
            return (0, s.jsx)(th.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: ef.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tr.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, s.jsx)(tK, {
                ref: i,
                iconComponent: u,
                isActive: o,
                highlightedColor: "red",
                tooltip: d,
                onClick: () => {
                    ((0, tp.A)(a, r, ef.JJy.OVERLAY),
                        (0, Z.YX)(ef.uss.QUICK_ACTIONS, {
                            type: Z.Z5.MICROPHONE,
                            value: o ? Z.IP.ENABLED : Z.IP.DISABLED,
                            userId: P.default.getId(),
                        }));
                },
                onPopoutClick: p(n),
                onContextMenu: p(n),
                popoutOpen: l,
                onMouseEnter: () => {
                    h.onMouseEnter();
                },
                onMouseLeave: () => {
                    h.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function tJ(e) {
    let { voiceChannel: t, locked: n } = e,
        i = g.useRef(null),
        { selfDeaf: r, deaf: l } = (0, tk.A)(t),
        a = r || l,
        {
            Component: o,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: c },
        } = (0, e7.I)(a ? "undeafen" : "deafen"),
        h = l ? ts.T : o;
    function m() {
        ((0, tg.A)(l, ef.JJy.OVERLAY),
            (0, Z.YX)(ef.uss.QUICK_ACTIONS, {
                type: Z.Z5.AUDIO,
                value: l ? Z.IP.ENABLED : Z.IP.DISABLED,
                userId: P.default.getId(),
            }));
    }
    function p(e) {
        return (t) => {
            (e(t), (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.AUDIO, value: Z.IP.SETTINGS_OPENED }));
        };
    }
    g.useEffect(() => () => d(), [a, d]);
    let f = tq(n);
    return (0, s.jsx)(tr.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(th.A, {
                onClose: f(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                maybeRenderSpatialAudioCheckbox: !0,
                renderSettingsButton: !0,
                appContext: ef.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tr.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, s.jsx)(tK, {
                ref: i,
                iconComponent: h,
                tooltip: (0, tu.A)(r, l, !1),
                isActive: a,
                highlightedColor: "red",
                onClick: m,
                onContextMenu: p(n),
                onMouseEnter: u,
                onMouseLeave: c,
                onPopoutClick: p(n),
                popoutOpen: o,
                isTrayButton: !0,
            });
        },
    });
}
function t$(e) {
    let { voiceChannel: t, locked: n } = e,
        i = g.useRef(null),
        r = (0, N.bG)([eh.Ay], () => eh.Ay.isVideoEnabled()),
        l = (0, N.bG)([eh.Ay], () => Object.values(eh.Ay.getVideoDevices())[0]),
        a = (0, N.bG)([eh.Ay], () => eh.Ay.supports(tX.O5.VIDEO)),
        o = l?.disabled ?? !0,
        d = !1 === o,
        u = (0, tz.A)(t);
    function c(e) {
        ee.default.setVideoEnabled(e);
    }
    function h(e) {
        return (t) => {
            (e(t), (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.CAMERA, value: Z.IP.SETTINGS_OPENED }));
        };
    }
    function m() {
        (o ? (d ? c(!0) : (0, tU.A)()) : c(!r),
            (0, Z.YX)(ef.uss.QUICK_ACTIONS, {
                type: Z.Z5.CAMERA,
                value: r ? Z.IP.DISABLED : Z.IP.ENABLED,
                userId: P.default.getId(),
            }));
    }
    let {
            Component: p,
            play: f,
            events: { onMouseEnter: x, onMouseLeave: A },
        } = (0, ti.K)(r ? "disable" : "enable"),
        E = null != t ? (0, tL.Q)({ enabled: r, cameraUnavailable: o, hasPermission: u, channel: t }) : void 0;
    g.useEffect(() => () => f(), [r, f]);
    let S = tq(n),
        I = null == t || !u || !a;
    return (0, s.jsx)(tr.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(tm.A, { onClose: S(t), appContext: ef.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: tr.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, s.jsx)(tK, {
                ref: i,
                iconComponent: p,
                tooltip: E,
                onClick: m,
                isActive: r,
                highlightedColor: "green",
                onPopoutClick: a ? h(n) : void 0,
                popoutOpen: l,
                onContextMenu: a ? h(n) : void 0,
                onMouseEnter: x,
                onMouseLeave: A,
                disabled: I,
                isTrayButton: !0,
            });
        },
    });
}
function t0(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        r = g.useRef(null),
        l = (0, N.bG)([em.default], () => em.default.getCurrentUser()),
        a = (0, tz.A)(n),
        o = (0, N.cf)([eh.Ay], () => (0, tN.A)(eh.Ay)),
        d = (0, N.bG)([z.A], () => z.A.getCurrentUserActiveStream()),
        u = (0, N.bG)([tZ.A], () => tZ.A.getTargetPID()),
        c = (0, tY.y)({ pid: u, allowOneClickGoLive: !0, analyticsLocation: ef.ThZ.UNLOCKED_OVERLAY });
    function h() {
        (c(), (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.GO_LIVE, value: Z.IP.ENABLED, userId: P.default.getId() }));
    }
    let m = null != d;
    if (m) t = ex.intl.string(ex.t.S5anIc);
    else if (null != n) {
        let e = (0, tW.qv)();
        t = a
            ? null != e
                ? ex.intl.format(ex.t.AB5gTy, { game: e.name })
                : ex.intl.string(ex.t.FeUKeA)
            : ex.intl.string(ex.t.uQn9B8);
    }
    function p() {
        if (m)
            return (
                (0, Z.YX)(ef.uss.QUICK_ACTIONS, {
                    type: Z.Z5.GO_LIVE,
                    value: Z.IP.DISABLED,
                    userId: P.default.getId(),
                }),
                (0, t_.A)(d, !1)
            );
        h();
    }
    function f(e) {
        return (t) => {
            (e(t), (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.SCREEN_SHARE, value: Z.IP.SETTINGS_OPENED }));
        };
    }
    let {
        Component: x,
        events: { onMouseEnter: A, onMouseLeave: E },
        play: S,
    } = (0, tt.c)(m ? "disable" : "enable");
    g.useEffect(() => () => S(), [m, S]);
    let I = tq(i);
    return (0, s.jsx)(tr.Y, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(tV.A, {
                channel: n,
                currentUser: l,
                activeStreams: m ? [d] : [],
                handleGoLive: h,
                onClose: I(t),
                appContext: ef.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: tr.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: l } = n;
            return (0, s.jsx)(tK, {
                ref: r,
                iconComponent: x,
                tooltip: t,
                "aria-label": ex.intl.string(ex.t.FeUKeA),
                isActive: m,
                highlightedColor: "green",
                onClick: p,
                popoutOpen: l,
                popoutDisabled: !m,
                onPopoutClick: f(i),
                onContextMenu: f(i),
                onMouseEnter: A,
                onMouseLeave: E,
                disabled: !o || !a,
                isTrayButton: !0,
            });
        },
    });
}
function t1(e) {
    let { voiceChannel: t, locked: i } = e,
        r = g.useRef(null),
        a = t?.getGuildId() ?? null,
        { mute: o, suppress: d } = (0, tP.A)(t),
        u = (0, N.bG)([eh.Ay], () => eh.Ay.isDeaf()),
        c = null == t || o || d || u,
        { analyticsLocations: h } = (0, td.Ay)();
    function m(e) {
        null != a &&
            ((0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.SOUNDBOARD, value: Z.IP.SETTINGS_OPENED }),
            (0, l.L3)(e, async () => {
                let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                return (t) => (0, s.jsx)(e, { sourceAnalyticsLocations: h, guildId: a, ...t });
            }));
    }
    let {
            Component: p,
            events: { onClick: f, onMouseEnter: x, onMouseLeave: A },
        } = (0, tn.E)(),
        E = tq(i),
        S = (0, N.bG)([tM.A, P.default], () => tM.A.isUserPlayingSounds(P.default.getId()), []) ? "green" : void 0;
    return (0, s.jsx)(tr.Y, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return c || null == t
                ? (0, s.jsx)(s.Fragment, {})
                : (0, s.jsx)(tD.A, { guildId: a, channel: t, onClose: E(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: tr.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, s.jsx)(tK, {
                ref: r,
                iconComponent: p,
                tooltip: o
                    ? ex.intl.string(ex.t["Ox4/zU"])
                    : d
                      ? ex.intl.string(ex.t["+YBKYI"])
                      : u
                        ? ex.intl.string(ex.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    (f(),
                        (0, Z.YX)(ef.uss.QUICK_ACTIONS, {
                            type: Z.Z5.SOUNDBOARD,
                            value: Z.IP.PANEL_OPENED,
                            userId: P.default.getId(),
                        }),
                        n(e));
                },
                highlightedColor: S,
                defaultColor: S,
                onContextMenu: m,
                onMouseEnter: x,
                onMouseLeave: A,
                isActive: i,
                popoutOpen: i,
                disabled: c,
                isTrayButton: !0,
            });
        },
    });
}
function t2(e) {
    let { voiceChannel: t, locked: n } = e,
        i = g.useRef(null),
        r = (0, N.bG)([G.Ay], () => G.Ay.getVoiceChannelId() === t?.id);
    function l() {
        ((0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.CALL_BUTTON, value: Z.IP.DISABLED, userId: P.default.getId() }),
            r && to.default.disconnect());
    }
    function a(e, t) {
        (to.default.selectVoiceChannel(e),
            (0, Z.YX)(ef.uss.QUICK_ACTIONS, {
                type: Z.Z5.CALL_BUTTON,
                value: Z.IP.ENABLED,
                userId: P.default.getId(),
                secondaryValue: t,
            }));
    }
    let [o, d] = g.useTransition();
    function u(e) {
        return (t) => {
            (d(() => {
                e(t);
            }),
                (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.CALL_BUTTON, value: Z.IP.SETTINGS_OPENED }));
        };
    }
    let {
            Component: c,
            events: { onMouseEnter: h, onMouseLeave: m },
        } = (0, e8.O)(),
        p = tq(n),
        f = (0, tG.qZ)(),
        x = r ? c : tl._;
    return (0, s.jsx)(tr.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, s.jsx)(tG.Ay, {
                allAvailableChannelRows: f,
                currentVoiceChannel: t,
                onClose: p(n),
                onSelect: a,
            });
        },
        align: "center",
        position: "top",
        animation: tr.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, s.jsx)(tK, {
                ref: i,
                iconComponent: x,
                tooltip: r ? ex.intl.string(ex.t["6vrfgt"]) : ex.intl.string(ex.t.S0W8Z5),
                onClick: r ? l : u(n),
                defaultColor: r ? "disconnect" : void 0,
                onMouseEnter: h,
                onMouseLeave: m,
                onContextMenu: u(n),
                isActive: a,
                onPopoutClick: r ? u(n) : void 0,
                popoutOpen: a,
                isTrayButton: !0,
            });
        },
    });
}
function t5(e) {
    let { voiceChannel: t } = e,
        n = (0, N.bG)([d.A], () => d.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", { className: tB.rK }),
                    (0, s.jsxs)("div", {
                        className: tB._C,
                        children: [
                            (0, s.jsx)(tR.Ay, { guild: n, size: tR.Ay.Sizes.SMOL, className: tB.$f }),
                            (0, s.jsx)(v.E, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: tB.J5,
                                children: n.name,
                            }),
                        ],
                    }),
                ],
            });
        default:
            return null;
    }
}
function t3(e) {
    let { voiceChannel: t } = e,
        n = (0, tx.gU)(t),
        i = (0, tf.Ay)(t);
    return (0, s.jsxs)("div", {
        className: tB.Wh,
        children: [
            null != n &&
                (0, s.jsx)(v.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: tB.p,
                    children: (0, s.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != i &&
                (0, s.jsx)(v.E, { variant: "text-sm/medium", color: "text-muted", className: tB.HA, children: i }),
        ],
    });
}
function t4(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, N.cf)([u.A], () => ({ quality: u.A.getQuality(), state: u.A.getState(), lastPing: u.A.getLastPing() })),
        r = (0, N.bG)([tH.A], () => null != n && tH.A.hasVideo(n), [n]),
        l = (0, h.Mn)("VoiceConnectionStatus"),
        a = (0, N.bG)([e9.A], () => e9.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tO.A, { ...i, channelId: n, hasVideo: r, connectionStatusTextVariant: "text-sm/medium" }),
                !(l && a) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(t5, { voiceChannel: t }),
                            (0, s.jsx)("div", { className: tB.rK }),
                            (0, s.jsx)(t3, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
function t6(e) {
    let t,
        n = g.useRef(null),
        i = (0, tA.E)(),
        { tooltip: r, clipsInitError: l, clipsSourceAttached: a } = (0, tw.A)();
    function o(e) {
        return (t) => {
            (e(t), (0, Z.YX)(ef.uss.QUICK_ACTIONS, { type: Z.Z5.CLIPS, value: Z.IP.SETTINGS_OPENED }));
        };
    }
    function d() {
        i && (0, tE.l0)();
    }
    return (
        null != l && i && (t = "red"),
        (0, s.jsx)(tr.Y, {
            targetElementRef: n,
            clickTrap: !0,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, s.jsx)(tb, { onClose: t });
            },
            align: "center",
            position: "top",
            animation: tr.Y.Animation.FADE,
            children: (e, u) => {
                let { onClick: c } = e,
                    { isShown: h } = u;
                return (0, s.jsx)(tK, {
                    ref: n,
                    iconComponent: ta.x,
                    tooltip: r,
                    "aria-label": r,
                    highlightedColor: t,
                    onClick: d,
                    popoutOpen: h,
                    onPopoutClick: o(c),
                    onContextMenu: o(c),
                    disabled: !i || null != l || !a,
                    isTrayButton: !0,
                });
            },
        })
    );
}
var t9 = n(944138);
let t8 = g.memo(function () {
    let e = (0, N.bG)([e9.A], () => e9.A.enabled),
        t = (0, h.Mn)("StreamerModeNotice");
    return e && t
        ? (0, s.jsxs)(e5.$T, {
              color: e5.Hv.STREAMER_MODE,
              className: t9.$X,
              children: [
                  (0, s.jsx)(v.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "text-overlay-light",
                      children: ex.intl.string(ex.t.q9K7jp),
                  }),
                  (0, s.jsx)(e5.Z_, {
                      className: t9.lI,
                      onClick: () => e3.A.setEnabled(!1),
                      noticeType: ef.kqX.STREAMER_MODE,
                      children: ex.intl.string(ex.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function t7(e) {
    let { locked: t } = e,
        n = (0, N.bG)([G.Ay], () => G.Ay.getVoiceChannelId()),
        { enableOverlayEntrypoint: i } = e6.A.useConfig({ location: "QuickActionsWidget" }),
        r = (0, e4.sw)(),
        l = (0, N.bG)([L.A], () => L.A.getChannel(n)),
        a = null != l;
    return (0, s.jsxs)("div", {
        className: f()({ [t9.KE]: !0, [t9.xt]: t }),
        children: [
            (0, s.jsx)(t8, {}),
            (0, s.jsxs)("div", {
                className: t9.Pm,
                children: [
                    (0, s.jsxs)("div", {
                        className: t9.qi,
                        children: [
                            (0, s.jsx)(tQ, { voiceChannel: l, locked: t }),
                            (0, s.jsx)(tJ, { voiceChannel: l, locked: t }),
                            (0, s.jsx)(t$, { voiceChannel: l, locked: t }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: t9.qi,
                        children: [
                            (0, s.jsx)(t0, { voiceChannel: l, locked: t }),
                            (0, s.jsx)(t1, { voiceChannel: l, locked: t }),
                            i && r && (0, s.jsx)(t6, { voiceChannel: l, locked: t }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: f()(t9.qi, a && t9.SV),
                        children: (0, s.jsx)(t2, { voiceChannel: l, locked: t }),
                    }),
                ],
            }),
            a && (0, s.jsx)("div", { className: t9.Pm, children: (0, s.jsx)(t4, { voiceChannel: l, locked: t }) }),
        ],
    });
}
var ne = n(534890),
    nt = n(364522),
    nn = n(994500),
    ni = n(996439);
function nr(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function ns(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var nl = n(408278),
    na = n(366605),
    no = n(780338),
    nd = n(782603),
    nu = n(241541),
    nc = n(320448),
    nh = n(661531),
    nm = n(446576),
    ng = n(683063),
    np = n(789645),
    nf = n(387755),
    nx = n(945830),
    nA = n(461678),
    nE = n(452015),
    nS = n(95701),
    nI = n(543465),
    nv = n(914853),
    nj = n(220884),
    nT = n(145567),
    nC = n(778712),
    ny = n(290863),
    nb = n(172491),
    nw = n(912156),
    nN = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function n_(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? nC._3.SIZE_24 : nC._3.SIZE_40;
        case "guild":
            return 24 === e ? tR.Ay.Sizes.SMALLER : tR.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let nR = g.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: r = !1,
            size: l = 24,
            isTyping: a = !1,
            mentionCount: o = 0,
            isMentionLowImportance: d = !1,
        } = e,
        u = t?.isPrivate() ?? !1,
        c = t?.isMultiUserDM() ?? !1,
        h = n?.id,
        m = (0, N.bG)([ny.A], () => (null != h ? ny.A.getStatus(h) : null), [h]),
        g = (0, N.bG)([ny.A], () => null != h && ny.A.isMobileOnline(h), [h]);
    if (u || c)
        return (0, s.jsx)(nb.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: n_(l, "user"),
            status: m,
            isMobile: g,
            isTyping: a,
            mentionCount: o,
            isMentionLowImportance: d,
        });
    if (null == i)
        return (0, s.jsx)(ne.ChatIcon, { size: n_(l, "default"), color: nh.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, s.jsx)(tR.Ay, { guild: i, size: n_(l, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === l ? nw.Q.MEDIUM_40 : nw.Q.TINY_24;
        return (0, s.jsx)(nw.A, { channel: t, guild: i, size: e, isTyping: a });
    }
});
var nO = n(769015);
function nM(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, s.jsx)(nO.A, { game: t, size: nO.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var nD = n(429913),
    nk = n(34307),
    nz = n(25448),
    nP = n(276119);
function nL(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nV(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r } = e,
        l = g.useRef(null);
    return t?.id == null
        ? null
        : (0, s.jsx)(tr.Y, {
              targetElementRef: l,
              shouldShow: n,
              animation: tr.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: r,
              renderPopout: (e) =>
                  (0, s.jsx)(nx.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                              type: Z.Z5.TEXT_CHAT,
                              value: Z.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, s.jsx)("div", {
                      ref: l,
                      children: (0, s.jsx)(B.m, {
                          text: ex.intl.string(ex.t["mp1N/2"]),
                          "aria-label": ex.intl.string(ex.t["mp1N/2"]),
                          children: (0, s.jsx)(nl.K, {
                              ...n,
                              icon: na.t,
                              "aria-label": ex.intl.string(ex.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: i,
                          }),
                      }),
                  });
              },
          });
}
function nG(e) {
    let { channel: t } = e,
        n = g.useRef(null),
        i = t?.id ?? null,
        r = t?.guild_id != null,
        [l, a] = (0, N.yK)(
            [nI.Ay],
            () =>
                r && null != i && null != t
                    ? [nI.Ay.isChannelMuted(t.getGuildId(), t.id), nI.Ay.resolvedMessageNotifications(t)]
                    : [!1, ef.orn.ALL_MESSAGES],
            [t, i, r],
        ),
        [o, d] = g.useState(!1),
        u = g.useCallback(() => {
            (d((e) => !e),
                (0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                    type: Z.Z5.TEXT_CHAT,
                    value: Z.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                }));
        }, []),
        c = ex.intl.string(ex.t.h850Ss),
        h = l || a !== ef.orn.ALL_MESSAGES ? no.BellSlashIcon : nd.BellIcon;
    return r && null != t
        ? (0, s.jsx)(tr.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: tr.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => d(!1),
              renderPopout: (e) =>
                  (0, s.jsx)(nA.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: ex.intl.string(ex.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, s.jsx)("div", {
                      ref: n,
                      children: (0, s.jsx)(B.m, {
                          text: c,
                          "aria-label": c,
                          children: (0, s.jsx)(nl.K, {
                              ...i,
                              icon: h,
                              "aria-label": c,
                              size: "sm",
                              variant: "icon-only",
                              onClick: u,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function nU(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: r, onRequestClosePinsPopout: l } = e;
    return nL(t)
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(B.m, {
                      text: ex.intl.string(ex.t.JJogjm),
                      "aria-label": ex.intl.string(ex.t.JJogjm),
                      children: (0, s.jsx)(nl.K, {
                          icon: tl._,
                          "aria-label": ex.intl.string(ex.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, s.jsx)(nV, { channel: t, pinsOpen: i, onTogglePinsPopout: r, onRequestClosePinsPopout: l }),
                  t.isMultiUserDM()
                      ? (0, s.jsx)(B.m, {
                            text: ex.intl.string(ex.t["LR+Ptf"]),
                            "aria-label": ex.intl.string(ex.t["LR+Ptf"]),
                            children: (0, s.jsx)(nl.K, {
                                icon: nu.D,
                                "aria-label": ex.intl.string(ex.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    ((0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                                        type: Z.Z5.INVITE,
                                        value: Z.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, nE.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, nT.D$)({
                                                    target: {
                                                        kind: nT.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: nk.B.MANUAL,
                                                    widgetType: ef.uss.TEXT_CHAT_V3,
                                                });
                                            },
                                        }));
                                },
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
function nF(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(nG, { channel: t }),
                  (0, s.jsx)(nV, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r }),
              ],
          });
}
function nH(e) {
    let t,
        { channel: n, user: i, guild: r, title: l, dragStart: a, dragging: o } = e,
        { hasFriendList: d } = (0, h.M8)("TextChatHeader"),
        [c, m] = g.useState(!1),
        p = (0, N.bG)([u.A], () => u.A.getChannelId(), []),
        x = n?.isDM() ? (i?.id ?? null) : null,
        A =
            ((t = (0, N.bG)(
                [ny.A],
                () => {
                    if (null != x)
                        return (
                            (function (e) {
                                for (let t of e)
                                    if (t.type === ef.$pd.PLAYING && null != t.application_id) return t.application_id;
                                return null;
                            })(ny.A.getActivities(x)) ?? void 0
                        );
                },
                [x],
            )),
            (0, nD.h)(t) ?? void 0),
        E = p === n?.id,
        S = ex.intl.string(nz.default.tYPfF2),
        j = (0, N.bG)([L.A], () => (n?.isThread() && null != n.parent_id ? L.A.getChannel(n.parent_id) : null), [n]),
        T = (0, N.bG)([em.default, nn.A], () => (null != j ? (0, tf.m1)(j, em.default, nn.A) : null), [j]),
        C = g.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = i),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? nn.A.isFriend(t.id)
                          ? { tab: nv.x.FRIENDS, targetId: t.id }
                          : null
                      : (0, nS.ke)(e.type)
                        ? { tab: nv.x.MESSAGES, targetId: e.id }
                        : (0, nS.ay)(e.type)
                          ? { tab: nv.x.VOICE, targetId: e.id }
                          : null
            );
        }, [n, i]),
        y = g.useCallback(
            (e) => {
                nL(n) &&
                    ((0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                        type: Z.Z5.CALL_BUTTON,
                        value: Z.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    nf.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        b = g.useCallback(() => {
            n?.id != null &&
                m((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                                type: Z.Z5.TEXT_CHAT,
                                value: Z.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [n?.id]);
    return (0, s.jsxs)("div", {
        className: f()(nP.XV, o && nP.cB),
        onMouseDown: (e) => {
            0 === e.button && a(eb.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, s.jsxs)("div", {
                className: nP.LD,
                children: [
                    (0, s.jsx)("div", {
                        className: nP.gr,
                        children: (0, s.jsx)(nM, {
                            application: A,
                            fallback: (0, s.jsx)(nR, { channel: null, user: i, guild: r, size: nN.SIZE_24 }),
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: nP.G1,
                        children: [
                            (function () {
                                if (null != x) return null;
                                let e = (0, tx.gU)(n, r);
                                return null != e ? (0, s.jsx)(e, { className: nP.gr, size: "xs" }) : null;
                            })(),
                            null != j && null != T
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(I.D, {
                                              className: nP.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  (e.stopPropagation(),
                                                      (0, nT.D$)({
                                                          target: {
                                                              kind: nT.bB.CHANNEL,
                                                              channelId: j.id,
                                                              guildId: j.getGuildId?.() ?? j.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: nk.B.MANUAL,
                                                          widgetType: ef.uss.TEXT_CHAT_V3,
                                                      }));
                                              },
                                              children: (0, s.jsx)(v.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: T,
                                              }),
                                          }),
                                          (0, s.jsx)(nc._, {
                                              className: nP.ln,
                                              size: "xs",
                                              color: nh.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, s.jsxs)(v.E, {
                                className: nP.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    l,
                                    A?.name != null && "" !== A.name
                                        ? (0, s.jsx)(v.E, {
                                              tag: "span",
                                              className: nP.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: ex.intl.formatToPlainString(nz.default.x1k3cO, {
                                                  gameName: A.name,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: nP.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, s.jsx)(nU, {
                        channel: n,
                        onStartPrivateCall: y,
                        pinsOpen: c,
                        onTogglePinsPopout: b,
                        onRequestClosePinsPopout: () => m(!1),
                    }),
                    (0, s.jsx)(nF, {
                        channel: n,
                        pinsOpen: c,
                        onTogglePinsPopout: b,
                        onRequestClosePinsPopout: () => m(!1),
                    }),
                    d &&
                        null != C &&
                        (0, s.jsx)(nj.j, {
                            tab: C.tab,
                            targetId: C.targetId,
                            widgetType: ef.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    n?.id != null &&
                        (E
                            ? (0, s.jsx)(B.m, {
                                  text: S,
                                  "aria-label": S,
                                  children: (0, s.jsx)(nl.K, {
                                      icon: nm.g,
                                      "aria-label": S,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          ((0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                                              type: Z.Z5.TEXT_CHAT,
                                              value: Z.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nT.S$)({ minimized: !0 }));
                                      },
                                  }),
                              })
                            : (0, s.jsx)(ng.u, {
                                  title: ex.intl.string(nz.default.ERApc4),
                                  body: ex.intl.string(nz.default.PBVXVW),
                                  children: (0, s.jsx)(nl.K, {
                                      icon: np.P,
                                      "aria-label": ex.intl.string(nz.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, Z.YX)(ef.uss.TEXT_CHAT_V3, {
                                                    type: Z.Z5.TEXT_CHAT,
                                                    value: Z.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, nT.$p)())
                                              : (0, nT.lu)({
                                                    channelId: n.id,
                                                    widgetType: ef.uss.TEXT_CHAT_V3,
                                                    secondaryValue: "close_button",
                                                });
                                      },
                                  }),
                              })),
                ],
            }),
        ],
    });
}
var nY = n(602853),
    nZ = n(941971),
    nW = n(573163),
    nX = n(485296),
    nB = n(741961),
    nq = n(73153),
    nK = n(308528);
let nQ = new Set();
async function nJ(e) {
    if (!nQ.has(e)) {
        nQ.add(e);
        try {
            let t = await nK.A.fetchChannel(e),
                n = (0, nS.UE)(t);
            nq.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let i = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != i) return void nK.A.preload(i, n.id);
        } catch {}
    }
}
var n$ = n(835078),
    n0 = (((r = {}).DEFAULT = "DEFAULT"), (r.CHANNEL_TYPE = "CHANNEL_TYPE"), r);
let n1 = g.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: r = "DEFAULT" } = e,
        a = null != i && t === i,
        o = (0, N.bG)([c.A], () => c.A.getSelectedChannelId() === t, [t]),
        u = (0, N.bG)([c.A], () => c.A.getVoiceChatMinimized()),
        h = (0, nY.r)(nh.A.colors.ICON_STATUS_ONLINE),
        m = (0, N.bG)([nX.A], () => !!a && !!(nX.A.isAnyoneElseSpeaking() || nX.A.isCurrentUserSpeaking()), [a]),
        [p, x] = g.useState(!1),
        { mentionCount: A, isMentionLowImportance: E } = (0, N.cf)(
            [nW.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: nW.Ay.getMentionCount(t),
                          isMentionLowImportance: nW.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: S,
            user: v,
            guild: j,
            channel: T,
        } = (0, N.cf)(
            [L.A, d.A, em.default, nn.A],
            () => {
                let e = L.A.getChannel(t) ?? null;
                if (null == e) return { label: ex.intl.string(ex.t.zLZPmk), user: null, guild: null, channel: null };
                let n = (0, tf.m1)(e, em.default, nn.A);
                return { label: n, user: nr(e, em.default), guild: ns(e, d.A), channel: e };
            },
            [t],
        );
    g.useEffect(() => {
        null == T && nJ(t);
    }, [T, t]);
    let C = (0, N.bG)(
            [nB.A, em.default],
            () => {
                if (null == T) return !1;
                let e = em.default.getCurrentUser()?.id ?? null,
                    t = nB.A.getTypingUsers(T.id);
                for (let n in t) if (n !== e) return !0;
                return !1;
            },
            [T],
        ),
        y = (0, N.bG)(
            [nW.Ay],
            () => {
                let e = T?.id;
                return null != e && nW.Ay.hasUnread(e);
            },
            [T],
        ),
        b = (0, s.jsx)("div", {
            className: n$.St,
            children: (function () {
                let e = T?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === r && !e) {
                    let e = (0, tx.gU)(T, j);
                    e ??= ne.ChatIcon;
                    let t = a && !u && m,
                        n = { boxShadow: "none" },
                        i = h.rgba({ opacity: 0.85 }),
                        r = h.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${r})`),
                        (0, s.jsx)("div", {
                            className: f()(n$.s, o && n$.lJ),
                            style: n,
                            children: (0, s.jsx)(e, {
                                className: n$.Yc,
                                size: "sm",
                                color: o ? nh.A.colors.WHITE : nh.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, s.jsx)(nR, {
                    channel: T,
                    user: v,
                    guild: j,
                    isSelected: o,
                    size: nN.SIZE_40,
                    isTyping: C,
                    mentionCount: A,
                    isMentionLowImportance: E,
                });
            })(),
        }),
        w = (function (e) {
            let { channel: t, guild: i, user: r } = e;
            return g.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("955557"),
                                    n.e("581609"),
                                    n.e("153416"),
                                    n.e("777927"),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, s.jsx)(e, { ...n, channel: t, selected: !1, widgetType: ef.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != r)
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("463317"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("893190"),
                                    n.e("189673"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("955557"),
                                    n.e("691994"),
                                    n.e("229787"),
                                    n.e("576665"),
                                    n.e("245996"),
                                    n.e("700792"),
                                    n.e("592822"),
                                    n.e("529422"),
                                    n.e("823427"),
                                    n.e("309291"),
                                    n.e("242204"),
                                    n.e("307059"),
                                    n.e("298199"),
                                    n.e("581609"),
                                    n.e("864464"),
                                    n.e("296443"),
                                    n.e("123490"),
                                    n.e("895049"),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, s.jsx)(e, {
                                        ...n,
                                        user: r,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: ef.uss.TEXT_CHAT_V3,
                                    });
                            });
                        if (t.isModeratorReportChannel())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("955557"),
                                    n.e("343266"),
                                    n.e("581609"),
                                    n.e("256985"),
                                ]).then(n.bind(n, 95616));
                                return (n) => (0, s.jsx)(e, { ...n, channel: t, widgetType: ef.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nS.ay)(t.type)) {
                            if (null == i) return;
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("249727"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("955557"),
                                    n.e("343266"),
                                    n.e("309004"),
                                    n.e("544058"),
                                    n.e("581609"),
                                    n.e("694138"),
                                    n.e("958262"),
                                    n.e("318663"),
                                    n.e("221905"),
                                ]).then(n.bind(n, 769192));
                                return (n) =>
                                    (0, s.jsx)(e, { ...n, channel: t, guild: i, widgetType: ef.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("893190"),
                                    n.e("955557"),
                                    n.e("343266"),
                                    n.e("309004"),
                                    n.e("544058"),
                                    n.e("591377"),
                                    n.e("256372"),
                                    n.e("581609"),
                                    n.e("354036"),
                                ]).then(n.bind(n, 813407));
                                return (n) =>
                                    (0, s.jsx)(e, { ...n, channel: t, guild: i, widgetType: ef.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, r],
            );
        })({ channel: T, guild: j, user: v }),
        _ = T?.isPrivate() ?? !1,
        R = j?.name ?? "",
        O = _ ? void 0 : S,
        M = _ ? S : "" !== R ? R : S,
        D = (() => {
            if (null == T || _) return null;
            let e = (0, tx.gU)(T, j);
            return ((e ??= ne.ChatIcon), (0, s.jsx)(e, { size: "sm", color: nh.A.colors.INTERACTIVE_ICON_DEFAULT }));
        })();
    return null == T
        ? (0, s.jsx)("div", { className: n$.R })
        : (0, s.jsx)(ng.u, {
              title: O,
              body: M,
              asset: D,
              assetSize: 20,
              "aria-label": S,
              children: (0, s.jsxs)(I.D, {
                  className: n$.pc,
                  focusProps: { offset: 4 },
                  onClick: () => {
                      (a && (0, nT.S$)({ minimized: !1 }),
                          (0, nT.D$)({
                              target: { kind: nT.bB.CHANNEL, channelId: t, guildId: j?.id ?? null, messageId: null },
                              source: nk.B.MANUAL,
                              widgetType: ef.uss.TEXT_CHAT_V3,
                          }));
                  },
                  onContextMenu: w,
                  onMouseEnter: () => x(!0),
                  onMouseLeave: () => x(!1),
                  children: [
                      b,
                      (0, s.jsx)("div", {
                          className: n$.vT,
                          children: (0, s.jsx)(nZ.A, { selected: o, hovered: p, unread: y }),
                      }),
                  ],
              }),
          });
});
var n2 = n(148494),
    n5 = n(688438),
    n3 = n(355622),
    n4 = n(232835),
    n6 = n(576705),
    n9 = n(625494),
    n8 = n(973196),
    n7 = n(727961);
function ie(e) {
    let t,
        n,
        i,
        r,
        l,
        a,
        { selectedChannelId: o } = e,
        u = (0, N.bG)([L.A], () => L.A.getChannel(o), [o]),
        c = (0, eD.A)(),
        h = (0, N.bG)(
            [d.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(u, d.A),
            [u],
        ),
        m = (0, n8.A)();
    return ((t = u?.id ?? null),
    (n = g.useRef(new Set())),
    (i = (0, N.bG)([n4.A], () => (null != t ? n4.A.getMessages(t) : null), [t])),
    (r = (0, N.bG)([n6.A], () => n6.A.can(ef.xBc.READ_MESSAGE_HISTORY, u), [u])),
    (l = i?.first() ?? null),
    (a = null != u && null == l && null != i && !i.loadingMore && !i.ready && !i.hasFetched && r),
    g.useEffect(() => {
        null == t || (!n.current.has(t) && a && (n.current.add(t), n2.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, a]),
    g.useEffect(() => {
        if (null == o || m) return;
        let e = c.requestAnimationFrame(() => {
            n9._.dispatchToLastSubscribed(ef.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => c.cancelAnimationFrame(e);
    }, [o, c, m]),
    null != u)
        ? (0, s.jsx)("div", {
              className: n7.Q,
              children: (0, s.jsx)("div", {
                  className: n7.T,
                  children: (0, s.jsx)(n5.A, { channel: u, guild: h, chatInputType: n3.oU.OVERLAY }, u.id),
              }),
          })
        : null;
}
var it = n(722185);
function ii(e) {
    let { dragStart: t, dragging: n } = e,
        [i, r] = (0, N.bG)([c.A], () => c.A.getSessionEntries(), [], ni.D),
        l = (0, N.bG)([c.A], () => c.A.getSelectedChannelId()),
        a = (0, N.bG)([c.A], () => c.A.getVoiceChatMinimized()),
        o = (0, N.bG)([L.A], () => (null != l ? (L.A.getChannel(l) ?? null) : null), [l]);
    g.useEffect(() => {
        null == l || (null == o && nJ(l));
    }, [o, l]);
    let h = (0, N.bG)([d.A], () => ns(o, d.A), [o]),
        m = (0, N.bG)([u.A], () => u.A.getChannelId(), []),
        p = g.useMemo(() => (null == m || 0 === r ? i : i.filter((e) => e.channelId !== m)), [i, r, m]),
        f = (0, Z.Dk)(() => {
            let e = new Set();
            for (let t of (null != m && e.add(m), p)) e.add(t.channelId);
            return e;
        }, [p, m, r]),
        { shownUserIds: x, contentInventoryIds: A } = g.useMemo(
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = L.A.getChannel(i) ?? null;
                        if (null != e) {
                            if (e.isDM()) {
                                let n = e.getRecipientId?.() ?? null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of e.recipients ?? []) t.add(n);
                                continue;
                            }
                            n.add(i);
                        }
                    }
                    return { shownUserIds: t, contentInventoryIds: n };
                })(f),
            [f],
        ),
        E = (0, Z.Dk)(() => x, [x]),
        S = (0, Z.Dk)(() => A, [A]);
    g.useEffect(() => {
        (0 !== E.size || 0 !== S.size) &&
            (0, Z.Y)(ef.uss.TEXT_CHAT_V3, {
                locked: Y.default.isInstanceLocked(),
                shownUserIds: Array.from(E),
                liveUserIds: [],
                contentInventoryIds: Array.from(S),
            });
    }, [E, S]);
    let I = (0, N.bG)([em.default], () => nr(o, em.default)),
        v = (0, N.bG)(
            [em.default, nn.A],
            () => (null == o ? ex.intl.string(nz.default.uhJexs) : (0, tf.m1)(o, em.default, nn.A)),
            [o],
        ),
        j = (0, N.bG)(
            [L.A],
            () => {
                if (null != m && null != L.A.getChannel(m)) return !0;
                if (0 === r) return !1;
                for (let e of i) if (null != L.A.getChannel(e.channelId)) return !0;
                return !1;
            },
            [i, m, r],
        ),
        T = null != l && !(a && l === m);
    return j
        ? (0, s.jsxs)("div", {
              className: it.kL,
              children: [
                  (0, s.jsx)("nav", {
                      className: it.pz,
                      "aria-label": ex.intl.string(nz.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(eb.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, s.jsxs)(nt.d_, {
                          children: [
                              null != m
                                  ? (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(
                                                n1,
                                                {
                                                    channelId: m,
                                                    selectedVoiceChannelId: m,
                                                    iconVariant: n0.CHANNEL_TYPE,
                                                },
                                                `tiv-${m}`,
                                            ),
                                            p.length > 0 ? (0, s.jsx)("hr", { className: it.mF }) : null,
                                        ],
                                    })
                                  : null,
                              p.map((e) =>
                                  (0, s.jsx)(n1, { channelId: e.channelId, selectedVoiceChannelId: m }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  T
                      ? (0, s.jsxs)("div", {
                            className: it.oM,
                            children: [
                                (0, s.jsx)(nH, { channel: o, user: I, guild: h, title: v, dragStart: t, dragging: n }),
                                (0, s.jsx)(ie, { selectedChannelId: l }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, s.jsx)(F.g, { emptyText: ex.intl.string(nz.default["xpv/t5"]), icon: ne.ChatIcon });
}
let ir = g.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, s.jsx)(ii, { dragStart: n, dragging: i });
});
var is = n(428689),
    il = n(175203),
    ia = n(163432),
    io = n(799808),
    id = n(88525);
let iu = g.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            r = t.user?.id;
        return (0, N.bG)([eh.Ay], () => null != t.user && null != i && null != n && eh.Ay.isLocalVideoDisabled(r, i), [
            r,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, s.jsx)(il.Ay, { ...e });
    }),
    ic = g.memo(function (e) {
        let {
                context: t = tX.x.DEFAULT,
                participants: i,
                locked: r,
                channel: a,
                width: o,
                height: d,
                shouldDisplay: u,
            } = e,
            c = g.useCallback(
                (e, i) => {
                    let r = e.user;
                    ((0, Z.YX)(ef.uss.VIDEO, { type: Z.Z5.CAMERA, value: Z.IP.SETTINGS_OPENED, userId: r?.id }),
                        (0, l.L3)(i, async () => {
                            let { default: e } = await Promise.all([
                                n.e("463317"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("242204"),
                                n.e("449145"),
                                n.e("470314"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("658980"),
                            ]).then(n.bind(n, 535503));
                            return (n) =>
                                (0, s.jsx)(e, {
                                    ...n,
                                    user: r,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, Z.YX)(ef.uss.VIDEO, {
                                            type: Z.Z5.GO_LIVE,
                                            value: Z.IP.ENABLED,
                                            userId: r?.id,
                                        });
                                    },
                                });
                        }));
                },
                [t],
            ),
            h = (0, Z.Dk)(() => new Set(i.map((e) => e.user?.id)), [i]);
        g.useEffect(() => {
            u &&
                (0, Z.Y)(ef.uss.VIDEO, {
                    locked: Y.default.isInstanceLocked(),
                    shownUserIds: Array.from(h),
                    liveUserIds: Array.from(h),
                    contentInventoryIds: [],
                });
        }, [h, u]);
        let m = g.useMemo(() => ({ width: o, height: d }), [o, d]);
        return (0, s.jsx)(s.Fragment, {
            children: i.map((e) =>
                (0, s.jsx)(
                    iu,
                    {
                        participant: e,
                        width: o,
                        className: id.Vs,
                        containerStyle: m,
                        fit: ed.$.COVER,
                        channel: a,
                        popoutType: er.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: r ? void 0 : c,
                        forceIdle: r,
                        paused: !u,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    ih = g.memo(function (e) {
        let {
                context: t = tX.x.DEFAULT,
                participants: n,
                participantsVersion: i,
                locked: r,
                widget: l,
                channel: a,
                width: o,
                height: d,
                showEmpty: u = !0,
                containerRef: c,
            } = e,
            h = "boolean" != typeof l.meta.horizontal || l.meta.horizontal,
            m = n.length > 0 && null != t && null != a && (!r || l.pinned);
        g.useEffect(() => {
            (0, io.j_)({ locked: r, pinned: l.pinned, widget: l.type, isPreviewingInGame: !1 }, m);
        }, [r, l, m]);
        let p = g.useMemo(() => ({ opacity: l.opacity }), [l.opacity]),
            x = g.useMemo(() => f()({ [id.wb]: !0, [id.Vd]: !h, [id.R]: !m && r }), [h, m, r]);
        return 0 !== n.length || r
            ? null == a
                ? null
                : (0, s.jsx)("div", {
                      ref: c,
                      className: x,
                      style: p,
                      children: (0, s.jsx)(ic, {
                          context: t,
                          participants: n,
                          locked: r,
                          channel: a,
                          width: o,
                          height: d,
                          shouldDisplay: m,
                          participantsVersion: i,
                      }),
                  })
            : u
              ? (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(F.g, {
                        emptyText: ex.intl.string(ex.t.aTiM42),
                        icon: is.VideoIcon,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    im = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: s } = e;
        if (!(0, eM.cv)(t)) return n;
        let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * r;
        return (function (e, t) {
            let { maxWidth: n, maxHeight: i } = t;
            return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
        })(
            l
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + a) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + a) },
            { maxWidth: 0.75 * s.maxX, maxHeight: 0.75 * s.maxY },
        );
    };
function ig(e) {
    let t = (0, N.bG)([G.Ay, L.A], () => L.A.getChannel(G.Ay.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [r, l] = (0, N.bG)(
            [M.A],
            () => (null == i ? [[], 0] : [M.A.getVideoParticipants(i), M.A.getParticipantsVersion(i)]),
            [i],
            ni.D,
        ),
        a = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: d = e.height - n, ref: u } = (0, eT.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: c, visibleParticipants: h } = (0, ia.i4)(a ? o : d, r, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: l,
        }),
        m = (0, N.bG)([k.A], () => k.A.getWindowState(eX.f)),
        p = {
            id: e.widget.id,
            containerSize: { containerHeight: d, containerWidth: o },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: m?.width ?? e.width - n, maxY: m?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: m?.height ?? e.height, right: m?.width ?? e.width },
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                r = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                s = g.useRef(r);
            (g.useLayoutEffect(() => {
                s.current = r;
            }),
                g.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: r,
                        widget: l,
                        widgetLayoutSpecs: a,
                    } = s.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = im({
                        ...a,
                        widget: l,
                        operation: eb.P.RESIZE_NORTH,
                        computedSize: { width: r, height: i },
                        originSize: { width: r, height: i },
                    });
                    (0, et.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]));
        })({ horizontal: a, widget: e.widget, widgetLayoutSpecs: p }),
        (0, s.jsx)(ih, {
            ...e,
            channel: t,
            participants: h,
            participantsVersion: l,
            width: a ? c : (o ?? e.width),
            height: a ? (d ?? e.height) : c,
            containerRef: u,
        })
    );
}
var ip = n(450740),
    ix = n(968898),
    iA = n(264588),
    iE = n(378859),
    iS = n(269094),
    iI = n(338941),
    iv = n(155037),
    ij = n(165610),
    iT = n(261425),
    iC = n(197921);
function iy(e) {
    let { applicationId: t } = e,
        n = (0, iI.A)({ applicationId: t, surface: ij.ZN, hostWindowKey: eX.f });
    switch ((g.useEffect(() => () => (0, iv.mu)(t), [t]), n.state)) {
        case iI.n.Launched:
            if (n.frame.data.proxyTicketRefreshing) return (0, s.jsx)(iE.j, {});
            return (0, s.jsx)(iS.A, { frame: n.frame, application: n.application, className: iC.Gt });
        case iI.n.RenderingElsewhere:
            return (0, s.jsx)(iE.A, { description: ex.intl.string(ex.t["2KIDX+"]) });
        case iI.n.NoApplication:
            return (0, s.jsx)(iE.A, { description: ex.intl.string(iT.default["/YOSiU"]) });
        case iI.n.DoesNotSupportSurface:
            return (0, s.jsx)(iE.A, { description: ex.intl.string(iT.default.Y1JOTm) });
        case iI.n.Error:
            return (0, s.jsx)(iE.A, { heading: ex.intl.string(ex.t.VquUff), error: ex.intl.string(ex.t["Sd9D/R"]) });
        case iI.n.AwaitingLaunch:
        case iI.n.Loading:
            return (0, s.jsx)(iE.j, {});
        default:
            return null;
    }
}
let ib = g.memo(function (e) {
    let { applicationId: t, locked: n, dragging: i, dragStart: r } = e,
        l = g.useCallback(
            (e) => {
                n || 0 !== e.button || r(eb.P.MOVE, e.clientX, e.clientY);
            },
            [n, r],
        );
    return (0, s.jsxs)("div", {
        className: iC.kL,
        children: [
            (0, s.jsx)("div", {
                "aria-hidden": !0,
                className: f()(iC.p$, { [iC.cB]: i, [iC.xt]: n }),
                onMouseDown: l,
                children: (0, s.jsx)("div", { className: iC.Ub }),
            }),
            (0, s.jsx)("div", {
                className: f()(iC.ru, { [iC.po]: n || i }),
                children: (0, s.jsx)(iy, { applicationId: t }),
            }),
        ],
    });
});
function iw(e) {
    let { applicationId: t } = e,
        n = (0, N.bG)([o.A], () => o.A.getProject(t)?.name, [t]);
    return (0, s.jsx)(ix.Pl, { children: null != n && "" !== n ? n : ex.intl.string(iT.default.nXsF71) });
}
function iN(e) {
    let { widget: t } = e,
        n = g.useCallback(() => {
            let { applicationId: e } = t.meta;
            ((0, iA.T)(e), (0, et.uv)(t.id), (0, iv.Iq)(e));
        }, [t]);
    return (0, s.jsx)(ix.hM, { label: ex.intl.string(iT.default.xdiRDZ), onClick: n });
}
function i_(e, t) {
    return null != e && Number.isFinite(e) ? e : t;
}
n(321073);
var iR = n(232554),
    iO = n(592598),
    iM = n(28528),
    iD = n(57019),
    ik = n(191701),
    iz = n(672396),
    iP = n(942833);
let iL = [];
function iV(e) {
    return e.notification.id;
}
function iG(e, t, n, i) {
    let { index: r, notification: l, locked: a, pinned: o } = t;
    return (0, s.jsx)(iM.A, { index: r, notification: l, locked: a, pinned: o, transitionState: n, cleanUp: i }, e);
}
function iU(e) {
    return (0, s.jsx)("div", { className: iP.k, children: e });
}
let iF = g.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            r = (0, N.bG)(
                [ik.default, iO.A],
                () => {
                    if (iO.A.isNotificationDisabled(iz.KS.TextChat)) return iL;
                    let e = [],
                        i = 0;
                    for (let r of ik.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || r.status !== ef.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: r }), i++);
                    }
                    return e;
                },
                [t, n],
                tW.oQ,
            ),
            l = g.useState(() => new iD.Fn(t))[0];
        return (g.useLayoutEffect(() => l.updateState(r, t)),
        g.useLayoutEffect(() => (l.initialize((0, eD.b)()), () => l.cleanUp()), [l]),
        0 !== r.length || t)
            ? (0, s.jsx)(iD.Gt.Provider, {
                  value: l,
                  children: (0, s.jsx)(iR.F, { items: r, renderItem: iG, getItemKey: iV, wrapChildren: iU }),
              })
            : i
              ? t
                  ? null
                  : (0, s.jsx)(F.g, { emptyText: ex.intl.string(ex.t.O1Nbjq), icon: nd.BellIcon, absolute: !0 })
              : null;
    }),
    iH = {
        [ef.uss.VIDEO]: {
            streamerModeLabel: () => ex.intl.string(ex.t.UPvOia),
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: r, borderWidth: l, showEmpty: a } = e;
                return (0, eM.cv)(t)
                    ? (0, s.jsx)(ig, {
                          id: t.id,
                          locked: n,
                          widget: t,
                          height: "auto" === i.height ? 0 : i.height - 2 * r - 2 * l,
                          width: "auto" === i.width ? 0 : i.width - 2 * r - 2 * l,
                          showEmpty: a,
                          padding: r,
                          borderWidth: l,
                      })
                    : null;
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: ex.intl.string(ex.t.UPvOia) }),
            renderButtons: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ix.CS, {
                            onClick: (t) => {
                                (0, eM.cv)(e) &&
                                    (0, l.L3)(t, async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("700792"),
                                            n.e("592822"),
                                            n.e("955630"),
                                            n.e("478238"),
                                        ]).then(n.bind(n, 662554));
                                        return (n) => (0, s.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: im,
        },
        [ef.uss.VOICE_V3]: {
            streamerModeLabel: () => ex.intl.string(ex.t.nFv3Gb),
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: r } = e;
                return (0, eM.ZO)(t)
                    ? (0, s.jsx)(ip.Ay, {
                          anchorLeft: n,
                          id: t.id,
                          locked: i,
                          pinned: t.pinned,
                          widget: ef.uss.VOICE_V3,
                          maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                          isPreviewingInGame: !1,
                          showEmpty: r,
                      })
                    : null;
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: ex.intl.string(ex.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ix.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("234901").then(n.bind(n, 51444));
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [ef.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, s.jsx)(b, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ix.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("249170").then(n.bind(n, 508457));
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [ef.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, s.jsx)(e2, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned }),
        },
        [ef.uss.GO_LIVE]: {
            streamerModeLabel: () => ex.intl.string(ex.t["386XRo"]),
            renderWidget(e) {
                let {
                    widget: t,
                    locked: n,
                    size: i,
                    dragStart: r,
                    anchorTop: l,
                    anchorLeft: a,
                    showEmpty: o,
                    padding: d,
                    borderWidth: u,
                } = e;
                return (0, eM.dO)(t)
                    ? (0, s.jsx)(eq, {
                          id: t.id,
                          locked: n,
                          pinned: t.pinned,
                          opacity: t.opacity,
                          size: i,
                          anchorTop: l,
                          anchorLeft: a,
                          widget: t,
                          isPreviewingInGame: !1,
                          dragStart: r,
                          horizontal: t.meta.horizontal ?? !1,
                          padding: d,
                          borderWidth: u,
                          showEmpty: o,
                      })
                    : null;
            },
            renderTitle: (e) => (0, s.jsx)(ix.we, { widgetId: e.id, children: ex.intl.string(ex.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, eM.dO)(e)
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(ix.CS, {
                                  onClick: (t) => {
                                      (0, eM.dO)(e) &&
                                          (0, l.L3)(t, async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("955630"),
                                                  n.e("421289"),
                                              ]).then(n.bind(n, 543824));
                                              return (n) => (0, s.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, s.jsx)(ix.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eH,
        },
        [ef.uss.QUICK_ACTIONS]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, s.jsx)(t7, { locked: t });
            },
        },
        [ef.uss.NOTIFICATIONS]: {
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, s.jsx)(iF, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: ex.intl.string(ex.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ix.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("903820"), n.e("751607")]).then(
                                        n.bind(n, 98109),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [ef.uss.ACTIVITY]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, s.jsx)(m.Ay, { locked: t });
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: ex.intl.string(ex.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, h.NI)("WidgetRenderConfig").hasFriendList,
        },
        [ef.uss.FRIENDS]: {
            streamerModeLabel: () => ex.intl.string(ex.t.TdEu5X),
            renderWidget(e) {
                let { locked: t } = e;
                return (0, s.jsx)(w.A, { locked: t });
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: ex.intl.string(ex.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, h.NI)("WidgetRenderConfig").hasFriendList,
        },
        [ef.uss.TEXT_CHAT_V3]: {
            streamerModeLabel: () => ex.intl.string(ex.t["/VQax8"]),
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, s.jsx)(ir, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, s.jsx)(ix.Pl, { children: ex.intl.string(ex.t["/VQax8"]) }),
            renderButtons: () => null,
            predicate: () => (0, h.NI)("WidgetRenderConfig").hasChat,
            containerRenderGate: {
                stores: [u.A, c.A],
                shouldRender(e) {
                    let { locked: t } = e;
                    if (t) return !1;
                    let n = u.A.getChannelId() ?? null,
                        [i] = c.A.getSessionEntries(),
                        r = i.length > 0;
                    return null != n || r;
                },
            },
        },
        [ef.uss.CONJURE]: {
            streamerModeLabel: () => ex.intl.string(iT.default.IbNaU4),
            renderWidget(e) {
                let { widget: t, locked: n, dragging: i, dragStart: r } = e;
                return (0, eM.Du)(t)
                    ? (0, s.jsx)(ib, { applicationId: t.meta.applicationId, locked: n, dragging: i, dragStart: r })
                    : null;
            },
            renderTitle: (e) => ((0, eM.Du)(e) ? (0, s.jsx)(iw, { applicationId: e.meta.applicationId }) : null),
            renderButtons: (e) =>
                (0, eM.Du)(e)
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(iN, { widget: e }), (0, s.jsx)(ix.O0, { id: e.id, pinned: e.pinned })],
                      })
                    : null,
            resizeValidation: (e) => {
                let { widget: t, computedSize: n, containerSpecs: i } = e,
                    r = V.A.getWidgetDefaultSettings(ef.uss.CONJURE)?.minSize,
                    s = i_(t.minSize.width, r?.width ?? 0),
                    l = i_(t.minSize.height, r?.height ?? 0),
                    a = Math.max(s, i.maxX - i.minX),
                    o = Math.max(l, i.maxY - i.minY);
                return { width: Math.min(Math.max(n.width, s), a), height: Math.min(Math.max(n.height, l), o) };
            },
            predicate: () => (0, a.OC)(Object.values(d.A.getGuilds()), "overlay_conjure_widgets"),
            containerRenderGate: {
                stores: [o.A],
                shouldRender(e) {
                    let { widget: t } = e;
                    return (0, eM.Du)(t) && null != o.A.getProject(t.meta.applicationId);
                },
            },
        },
    };
