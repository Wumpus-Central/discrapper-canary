n.d(t, { A: () => iN });
var i,
    r,
    l = n(627968),
    s = n(442433),
    a = n(763827),
    o = n(140069),
    u = n(589051),
    d = n(308726),
    c = n(64700),
    h = n(503698),
    m = n.n(h),
    g = n(812729),
    p = n.n(g),
    f = n(580929),
    x = n(866323),
    A = n(939249),
    E = n(834730),
    S = n(259788),
    I = n(302614),
    v = n(639198);
let T = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function C(e) {
    let { locked: t, pinned: n } = e,
        [i, r] = c.useState(0),
        [s, a] = c.useState(0),
        [o, u] = c.useState(0),
        d = c.useRef(0),
        [h, g] = c.useState(0),
        { timeToLiveMs: C, reappearTimeMs: j } = S.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            p(),
        ),
        y = { timeToLiveMs: C, reappearTimeMs: j },
        b = c.useRef(y);
    function N() {
        r(Date.now()), g((e) => e + 1);
    }
    c.useEffect(() => {
        b.current = y;
    }),
        c.useEffect(
            () => (
                (d.current = setInterval(() => {
                    let e = Date.now();
                    a(e),
                        u((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                r = i + b.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(d.current);
                }
            ),
            [],
        );
    let _ = i > 0 && s - i < 1e3,
        R = (0, x.p)(o > 0 && o < s && s - o < C, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: T,
        }),
        [w, O] = c.useState(!1);
    if (
        (c.useEffect(() => {
            h > 10 && O(!0);
        }, [h]),
        w)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: R(
                  (e, t) =>
                      t &&
                      (0, l.jsx)(f.animated.div, {
                          style: e,
                          className: v.r2,
                          children: (0, l.jsx)(I.A, {
                              className: m()(v.VC, _ && v.Nd),
                              children: (0, l.jsx)(A.D, {
                                  onClick: N,
                                  className: v.vk,
                                  children: (0, l.jsxs)(E.E, {
                                      variant: "text-md/semibold",
                                      color: "text-overlay-light",
                                      children: ["Click Me (", h, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
var j = n(149741),
    y = n(17928),
    b = n(183623),
    N = n(684013),
    _ = n(964486),
    R = n(313961),
    w = n(652896),
    O = n(567249),
    M = n(616356),
    D = n(280450),
    k = n(734057),
    L = n(38502),
    P = n(309010),
    z = n(41984),
    V = n(412477),
    G = n(475743),
    U = n(184809),
    Z = n(810412),
    F = n(702841),
    H = n(459838),
    Y = n(866665),
    X = n(358618),
    W = n(983851),
    B = n(622631),
    q = n(365199),
    K = n(890856),
    Q = n(827343),
    J = n(391973),
    $ = n(401843),
    ee = n(520698),
    et = n(164617),
    en = n(402216),
    ei = n(607407),
    er = n(534400),
    el = n(267102),
    es = n(51092),
    ea = n(816578),
    eo = n(110234),
    eu = n(186295),
    ed = n(287809),
    ec = n(562153),
    eh = n(761661),
    em = n(652215),
    eg = n(375708),
    ep = n(614715);
function ef(e) {
    let { participant: t } = e,
        n = t.user.id,
        i = (0, F.bG)([eu.Ay], () => {
            let e = (0, ee.A)(t.type);
            return eu.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        r = (0, F.bG)([D.default], () => D.default.getId()),
        { hasVideo: s } = (0, eo.A)(t, r),
        a = i && s,
        o = c.useCallback(() => {
            Q.A.toggleLocalMute(n, H.x.STREAM);
        }, [n]);
    return (0, l.jsx)(Y.m, {
        text: a ? eg.intl.string(eg.t.YqAjXy) : eg.intl.string(eg.t.w4m945),
        children: (0, l.jsx)(A.D, {
            className: ep.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, Z.YX)(em.uss.GO_LIVE, {
                        type: Z.Z5.AUDIO,
                        value: a ? Z.IP.ENABLED : Z.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    o();
            },
            children: a
                ? (0, l.jsx)(X._, { size: "sm", color: "currentColor" })
                : (0, l.jsx)(W.H, { size: "sm", color: "currentColor" }),
        }),
    });
}
function ex(e, t) {
    return (i) => {
        (0, Z.YX)(em.uss.GO_LIVE, { type: Z.Z5.GO_LIVE, value: Z.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, s.L3)(i, async () => {
                let { default: i } = await Promise.all([n.e("89673"), n.e("45996"), n.e("58315"), n.e("61361")]).then(
                    n.bind(n, 663912),
                );
                return (n) => (0, l.jsx)(i, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function eA(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: i } = e,
        r = (0, el.Us)(),
        s = n.user,
        a = (0, F.bG)([ed.default], () => ed.default.getUser(s.id) ?? s, [s]),
        o = t ? eg.intl.string(eg.t.tLxK4l) : eg.intl.string(eg.t.E5RDnK);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: m()(ep.MI, { [ep.te]: t }) }),
            !t &&
                (0, l.jsx)("div", {
                    className: ep.TP,
                    children: (0, l.jsx)(Y.m, {
                        text: o,
                        children: (0, l.jsxs)(A.D, {
                            className: ep.kx,
                            onClick: () => {
                                (0, $.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    i(),
                                    (0, Z.YX)(em.uss.GO_LIVE, {
                                        type: Z.Z5.GO_LIVE,
                                        value: Z.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, l.jsx)(E.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-overlay-light",
                                    children: eg.intl.string(eg.t.I6JG46),
                                }),
                                (0, l.jsx)(B.v, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, l.jsxs)("div", {
                className: ep.ne,
                children: [
                    (0, l.jsx)("div", {
                        className: ep.fL,
                        children: (0, l.jsxs)("div", {
                            className: ep.K8,
                            children: [
                                (0, l.jsx)(E.E, {
                                    variant: "text-md/medium",
                                    color: "text-overlay-light",
                                    className: ep.yb,
                                    children: ec.Ay.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, l.jsx)(er.Ay, {
                                    primaryGuild: a.primaryGuild,
                                    userId: a.id,
                                    containerClassName: ep.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, Z.YX)(em.uss.GO_LIVE, {
                                            type: Z.Z5.GO_LIVE,
                                            value: Z.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: ep.FO,
                        children:
                            t &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ef, { participant: n }),
                                    (0, l.jsx)(Y.m, {
                                        text: eg.intl.string(eg.t["3D5yo/"]),
                                        children: (0, l.jsx)(A.D, {
                                            className: ep.IF,
                                            onClick: ex(n, r),
                                            children: (0, l.jsx)(q.j, { size: "sm", color: "currentColor" }),
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
let eE = new Set([em.XYD.ENDED, em.XYD.FAILED, em.XYD.PAUSED]),
    eS = c.memo(function (e) {
        let { participant: t, width: n, locked: i, widgetId: r, pinned: s } = e,
            a = (0, F.bG)([M.A], () => M.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            o = (0, el.Us)(),
            u = null != a && eE.has(a.state),
            d = null != a,
            c = (0, eh.dh)(t.stream),
            h = (0, eh.XG)(t.stream);
        return (!d && i) || u
            ? null
            : (0, l.jsxs)("div", {
                  className: ep.Vs,
                  children: [
                      d && !i && (0, l.jsx)(en.Ay, { size: en.Ay.Sizes.SMALL, className: ep.Ok }),
                      d
                          ? (0, l.jsx)("div", {
                                className: ep.X$,
                                children: (0, l.jsx)(K.s, {
                                    "aria-label": eg.intl.formatToPlainString(eg.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: ex(t, o),
                                    className: ep.X$,
                                    style: { transform: `scale(${c})` },
                                    children: (0, l.jsx)(ea.A, {
                                        participant: t,
                                        width: n,
                                        fit: h ?? es.$.CONTAIN,
                                        popoutType: et.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: i ? ep.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, l.jsx)("div", {
                                className: ep.Rh,
                                children: (0, l.jsx)(ei.A, { noText: !0, className: ep.HL, stream: t.stream }),
                            }),
                      i
                          ? null
                          : (0, l.jsx)(eA, {
                                participant: t,
                                hasActiveStream: d,
                                onEnablePin: function () {
                                    s || (0, J.v0)(r);
                                },
                            }),
                  ],
              });
    });
var eI = n(765671),
    ev = n(531685),
    eT = n(365971),
    eC = n(129537);
let ej = 9 / 16,
    ey = 16 / 9;
function eb(e, t) {
    return t * (Math.max(1, e) - 1);
}
function eN(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: l, isVertical: s } = e,
        a = s ? t : t - eb(l, r),
        o = s ? n - eb(l, r) : n;
    return { verticalRatio: (o - i) / (a - i), horizontalRatio: (a - i) / (o - i) };
}
function e_(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: l, isVertical: s } = t,
        { maxWidth: a, maxHeight: o } = n,
        u = Math.max(1, l),
        d = e.width > a,
        c = e.height > o;
    if (!d && !c) return e;
    let h = eb(l, r),
        { verticalRatio: m, horizontalRatio: g } = eN({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: u,
            isVertical: s,
        }),
        p = e.width - i,
        f = e.height - i,
        x = a - i,
        A = o - i;
    return (
        s ? ((A -= h), (f -= h)) : ((x -= h), (p -= h)),
        d && c && (e.width > e.height ? (f = (p = x) * m) : (p = (f = A) * g), (d = p > x), (c = f > A)),
        d && (f = (p = x) * m),
        c && (p = (f = A) * g),
        s ? (f += eb(l, r)) : (p += eb(l, r)),
        { width: p + i, height: f + i }
    );
}
var eR = n(897720),
    ew = n(545807);
function eO(e, t) {
    return 2 * e + 2 * t;
}
function eM(e) {
    let { width: t, height: n } = e;
    return { fixed: !0, width: t, height: n };
}
function eD(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        l = { width: r, height: r * ej },
        s = Math.max(1, e),
        a = eb(e, t),
        o = eO(n, t);
    return i
        ? { width: l.width + o, height: l.height * s + a + o }
        : { width: l.width * s + a + o, height: l.height + o };
}
function ek(e, t, n, i) {
    let r = eO(e, t);
    return i ? n.width - r : (n.height - r) * ey;
}
function eL(e) {
    return e.height > e.width;
}
let eP = 180 / 1080;
function ez(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: l, widgetMinMaxSizes: s } = e,
        a = t === eR.IV.VERTICAL,
        o = ek(i, r, l, a);
    return e_(
        eD(n, r, i, a, o),
        { containerOffset: eO(i, r), gapSize: r, tileCount: n, isVertical: a },
        { maxWidth: s.maxSize.width, maxHeight: s.maxSize.height },
    );
}
function eV(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: r, minSize: l, containerSpecs: s, defaultSize: a, ...o } = e;
    function u(e) {
        return eG({
            operation: eC.P.RESIZE_NORTH,
            computedSize: e,
            originSize: e,
            borderWidth: i,
            padding: r,
            containerSpecs: s,
            ...o,
        });
    }
    let d = { widgetId: t, size: { fixed: n.fixed, ...u(n) }, minSize: { ...u(l) } };
    null != a && (d.defaultSize = { ...u(a) }), (0, J.Ju)({ ...d });
}
let eG = (e) => {
    let t,
        n,
        i,
        { operation: r, computedSize: l, originSize: s, borderWidth: a, padding: o, containerSpecs: u } = e,
        d = eO(a, o),
        c = Math.max(1, s.width),
        h = Math.max(1, s.height),
        m = { width: c, height: h },
        g = eL(m),
        p = ((t = eL(m)), (i = (n = ek(a, o, m, t)) * ej), t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        f = eN({ width: c, height: h, containerOffset: d, gapSize: o, tileCount: p, isVertical: g }),
        x = eb(p, o);
    return e_(
        (() => {
            var e, t;
            switch (r) {
                case eC.P.RESIZE_NORTH:
                case eC.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: l.height,
                        width: ((e = l.height), (n = ((g ? e - x : e) - d) * f.horizontalRatio), g || (n += x), n + d),
                    };
                default:
                    let i;
                    return {
                        width: l.width,
                        height: ((t = l.width), (i = ((g ? t : t - x) - d) * f.verticalRatio), g && (i += x), i + d),
                    };
            }
        })(),
        { containerOffset: d, gapSize: o, tileCount: p, isVertical: g },
        { maxWidth: 0.75 * u.maxX, maxHeight: 0.75 * u.maxY },
    );
};
var eU = n(220959);
let eZ = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    eF = c.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: i,
                layout: r,
                locked: s,
                activeStreams: a,
                streamParticipants: o,
                participantsVersion: u,
                pinned: d,
                padding: h,
            } = e,
            g = o.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: i,
                locked: s,
                widgetId: t,
                pinned: d,
            })),
            p = (0, G.A)(n),
            A = (0, G.A)(s),
            E = r === eR.IV.VERTICAL,
            S = s || A !== s || p !== n,
            I = c.useMemo(() => {
                let e = 0,
                    t = 0;
                return E
                    ? g.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? h : 0)) - t.height, x: 0 }))
                    : g.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? h : 0)) - e.width, y: 0 }));
            }, [g, h, E]),
            v = c.useMemo(
                () => (0 === I.length ? 256 * ej : I.reduce((e, t) => e + t.height, 0) + (E ? h * (I.length - 1) : 0)),
                [I, E, h],
            ),
            T = c.useMemo(
                () => (0 === I.length ? 256 : I.reduce((e, t) => e + t.width, 0) + (E ? 0 : h * (I.length - 1))),
                [I, E, h],
            ),
            C = (0, x.p)(
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
                    trail: 100 * !S,
                },
                S ? "animate-never" : "respect-motion-settings",
            ),
            j = (0, Z.Dk)(() => new Set(o.map((e) => e.user.id)), [o, u]),
            y = (0, Z.Dk)(() => new Set(o.filter((e) => a.has((0, w._z)(e.stream))).map((e) => e.user.id)), [o, a, u]);
        return (
            c.useEffect(() => {
                0 !== j.size &&
                    (0, Z.Y)(em.uss.GO_LIVE, {
                        locked: U.default.isInstanceLocked(),
                        shownUserIds: Array.from(j),
                        liveUserIds: Array.from(y),
                        contentInventoryIds: [],
                    });
            }, [j, y]),
            (0, l.jsx)("div", {
                className: m()({ [eU.UT]: !0, [eU.Vd]: E, [eU.xM]: !E }),
                style: E ? { height: v } : { width: T },
                children: C((e, t, r, s) =>
                    (0, l.jsx)(f.animated.div, {
                        className: eU.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: g.length - s }),
                        children: (function (e) {
                            let { participant: t, width: n, locked: i, widgetId: r, pinned: s } = e;
                            return (0, l.jsx)("div", {
                                className: eU.iA,
                                children: (0, l.jsx)(
                                    eS,
                                    { participant: t, width: n, locked: i, widgetId: r, pinned: s },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
var eH = n(392164),
    eY = n(674243);
function eX(e) {
    var t, n;
    let i,
        r,
        s,
        {
            id: a,
            widget: o,
            size: u,
            locked: d,
            padding: h,
            borderWidth: m,
            opacity: g,
            horizontal: p,
            pinned: f,
            anchorTop: x,
            anchorLeft: A,
            showEmpty: E = !0,
        } = e,
        S = p ? eR.IV.HORIZONTAL : eR.IV.VERTICAL,
        I = S === eR.IV.VERTICAL,
        v = (0, y.bG)([L.A], () => {
            let e = L.A.getWidget(a);
            return !!(0, eR.dO)(e) && !d && (e.meta.showAllStreams ?? !0);
        }, [a, d]),
        T = (0, y.bG)([P.Ay], () => P.Ay.getVoiceChannelId()),
        C = (0, y.bG)([k.A], () => k.A.getChannel(T)),
        j = (0, y.bG)([D.default], () => D.default.getId()),
        {
            streamParticipants: U,
            activeStreams: Z,
            participantsVersion: F,
        } = ((t = (x && I) || (A && p)),
        (n = (!x && I) || (!A && p)),
        (i = (0, y.yK)([M.A], () => (null == T ? [] : M.A.getAllActiveStreamsForChannel(T)))),
        (r = c.useMemo(() => new Set(i.map((e) => (0, w._z)(e))), [i])),
        (s = (0, y.bG)([R.A], () => (null == T ? -1 : R.A.getParticipantsVersion(T)))),
        {
            streamParticipants: (0, y.yK)([R.A, M.A], () => {
                if (null == T) return [];
                function e(e) {
                    return r.has((0, w._z)(e.stream));
                }
                let i = R.A.getStreamParticipants(T).filter((t) => {
                    if (t.user.id === j) return !1;
                    let n = M.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && eE.has(n.state)) && (!!v || e(t));
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
            }, [T, r, j, v, t, n]),
            activeStreams: r,
            participantsVersion: s,
        }),
        H = U.length,
        Y = (0, y.bG)([O.A], () => O.A.getWindowState(eH.f), []),
        {
            tileWidth: X,
            tileHeight: W,
            widgetWidth: B,
            widgetHeight: q,
            containerRef: K,
            containerMinMaxSizes: Q,
        } = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, isVertical: r, widgetSize: l } = e,
                { width: s, height: a } = {
                    width: "number" == typeof l.width ? l.width : 256,
                    height: "number" == typeof l.height ? l.height : 256 * ej,
                },
                { width: o = s, height: u = a, ref: d } = (0, eI.Ay)(),
                c = (0, ew.A)(),
                h = (0, eT.Q2)(c),
                m = (0, y.bG)([ev.A], () => ev.A.windowSize(h), [h]),
                g = (function (e) {
                    let {
                            tileCount: t,
                            padding: n,
                            borderWidth: i,
                            windowWidth: r,
                            windowHeight: l,
                            isVertical: s,
                        } = e,
                        a = eD(t, n, i, s),
                        o = { maxX: r ?? (2 * a.width) / 0.75, maxY: l ?? (2 * a.height) / 0.75, minX: 0, minY: 0 },
                        u = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                        d = (l ?? 0) * eP;
                    return (
                        (d = Math.max(a.height, d)),
                        {
                            minSize: a,
                            defaultSize: eD(t, n, i, s, (d = Math.min(u.height, d)) * ey),
                            maxSize: u,
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
                p = eO(i, n),
                f = ek(i, n, { width: o + p, height: u + p }, r),
                x = f * ej;
            return {
                tileWidth: f,
                tileHeight: x,
                widgetWidth: s,
                widgetHeight: a,
                containerRef: d,
                containerMinMaxSizes: g,
            };
        })({ tileCount: H, padding: h, borderWidth: m, isVertical: I, widgetSize: u }),
        J = {
            id: a,
            widget: o,
            layout: S,
            participants: U.length,
            padding: h,
            borderWidth: m,
            widgetMinMaxSizes: Q,
            containerSize: { width: B, height: q },
            orientedPosition: { top: 0, left: 0, bottom: Y?.height ?? q, right: Y?.width ?? B },
            locked: d,
        };
    !(function (e) {
        let { streamParticipants: t, layout: n, widgetLayoutSpecs: i } = e,
            r = c.useRef(i);
        r.current = i;
        let l = (0, G.A)(n),
            s = t.length,
            a = i.widgetMinMaxSizes.maxSize.width * i.widgetMinMaxSizes.maxSize.height;
        (0, _.u5)(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: l,
                widget: a,
                borderWidth: o,
                locked: u,
                ...d
            } = r.current;
            null == a ||
                eV({
                    widgetId: e,
                    size: eM(
                        ez({
                            layout: i,
                            tileCount: Math.max(1, s),
                            borderWidth: o,
                            padding: l,
                            previousContainerSize: t.defaultSize,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    defaultSize: t.defaultSize,
                    minSize: eM(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: l,
                    borderWidth: o,
                    widget: a,
                    ...d,
                });
        }),
            c.useLayoutEffect(() => {
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: n,
                    layout: i,
                    padding: l,
                    widget: a,
                    borderWidth: o,
                    locked: u,
                    ...d
                } = r.current;
                if (null != a) {
                    if (0 === s) {
                        if (u) return;
                        eV({
                            widgetId: e,
                            size: eM(t.defaultSize),
                            defaultSize: t.defaultSize,
                            minSize: eM(t.minSize),
                            padding: l,
                            borderWidth: o,
                            widget: a,
                            containerSpecs: t.containerSpecs,
                            ...d,
                        });
                        return;
                    }
                    eV({
                        widgetId: e,
                        size: eM(
                            ez({
                                layout: i,
                                tileCount: s,
                                borderWidth: o,
                                padding: l,
                                previousContainerSize: n,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: eM(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: l,
                        borderWidth: o,
                        widget: a,
                        ...d,
                    });
                }
            }, [s, a]),
            c.useLayoutEffect(() => {
                if (r.current.participants <= 1) return;
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: i,
                    padding: s,
                    borderWidth: a,
                    participants: o,
                    widget: u,
                    ...d
                } = r.current;
                if (null == u || l === n) return;
                let c = (function (e) {
                    let {
                            oldLayout: t,
                            newLayout: n,
                            tileCount: i,
                            borderWidth: r,
                            padding: l,
                            previousContainerSize: s,
                            widgetMinMaxSizes: a,
                        } = e,
                        o = ek(r, l, s, t === eR.IV.VERTICAL);
                    return e_(
                        eD(i, l, r, n === eR.IV.VERTICAL, o),
                        { containerOffset: eO(r, l), gapSize: l, tileCount: i, isVertical: n === eR.IV.VERTICAL },
                        { maxWidth: a.maxSize.width, maxHeight: a.maxSize.height },
                    );
                })({
                    oldLayout: l ?? n,
                    newLayout: n,
                    tileCount: o,
                    borderWidth: a,
                    padding: s,
                    previousContainerSize: i,
                    widgetMinMaxSizes: t,
                });
                eV({
                    widgetId: e,
                    size: eM(c),
                    minSize: eM(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: s,
                    borderWidth: a,
                    widget: u,
                    ...d,
                });
            }, [n, l]),
            (0, _.l0)(() => {
                let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...l } = r.current;
                null != n &&
                    eV({
                        widgetId: e,
                        size: eM(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: eM(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: i,
                        widget: n,
                        ...l,
                    });
            });
    })({ id: a, streamParticipants: U, layout: S, widgetLayoutSpecs: J });
    let $ = null == C || (0 === Z.size && d) || (0 === H && !d);
    return (c.useEffect(() => {
        N.A.setGpuBoostRequested(z.y7.OVERLAY_VIDEO_STREAM_RENDERING, !$);
    }, [$]),
    (0, _.Ay)(() => () => {
        N.A.setGpuBoostRequested(z.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    ($ || !f) && d)
        ? null
        : $ && !d
          ? E
              ? d
                  ? null
                  : (0, l.jsx)(V.g, { emptyText: eg.intl.string(eg.t["T6+rXy"]), icon: b.F, absolute: !0 })
              : null
          : (0, l.jsx)("div", {
                className: eY.u,
                style: { opacity: g },
                ref: K,
                children: (0, l.jsx)(eF, {
                    widgetId: a,
                    tileWidth: X,
                    tileHeight: W,
                    locked: d,
                    layout: S,
                    activeStreams: Z,
                    streamParticipants: U,
                    participantsVersion: F,
                    pinned: f,
                    padding: h,
                }),
            });
}
var eW = n(243721),
    eB = n(821609),
    eq = n(706712),
    eK = n(617710),
    eQ = n(321090),
    eJ = n(548934);
function e$(e) {
    let { locked: t, pinned: n, anchorLeft: i } = e,
        r = (0, y.bG)([eK.A], () => eK.A.getSocket()),
        s = (0, y.bG)([eQ.A], () => eQ.A.isGPUBoosted());
    (0, eq.ZX)();
    let a = (0, y.bG)([O.A], () => O.A.getWindow(eH.f)),
        [o, u] = (0, eq.DQ)(r),
        {
            currentFPS: d,
            averageFrameTime: h,
            timeSinceLastDrop: g,
            onResetFrameData: p,
            droppedFramesRef: f,
            renderedFrameCount: x,
            bufferFramecountRef: A,
            frameCheckerEffect: S,
        } = (0, eq.Dj)(!0, o, !0),
        [v, T, C] = (0, eq.F5)(r),
        [j, b] = (0, eq.km)(v, S, a),
        N = performance.now() - u.current < eq.Jc,
        R = T(h, A.current);
    (0, _.Ay)(
        () => (
            j(),
            () => {
                b();
            }
        ),
    );
    let w = c.useCallback(() => {
            p(), C(), j();
        }, [p, C, j]),
        [M, D] = c.useState(!0),
        [k, L] = c.useState(!0),
        [P, z] = c.useState(!0),
        [V, G] = c.useState(!0),
        [U, Z] = c.useState(!0);
    return t && !n
        ? null
        : (0, l.jsxs)("div", {
              className: m()(eJ.st, !i && eJ.Hk),
              children: [
                  (M || !t) &&
                      (0, l.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, l.jsx)(eW.d, { checked: M, onChange: (e) => D(e) }),
                                  }),
                              (0, l.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, l.jsx)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              d < 30
                                                  ? "text-feedback-critical"
                                                  : d < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: d.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (k || !t) &&
                      (0, l.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, l.jsx)(eW.d, { checked: k, onChange: (e) => L(e) }),
                                  }),
                              (0, l.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, l.jsxs)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: h > 1.1 * eq.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [h.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (P || !t) &&
                      (0, l.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, l.jsx)(eW.d, { checked: P, onChange: (e) => z(e) }),
                                  }),
                              (0, l.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, l.jsx)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              g < 2
                                                  ? "text-feedback-critical"
                                                  : g < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: f.current,
                                      }),
                                      (0, l.jsxs)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: eJ.af,
                                          children: ["(", ((f.current / x.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (V || !t) &&
                      (0, l.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, l.jsx)(eW.d, { checked: V, onChange: (e) => G(e) }),
                                  }),
                              (0, l.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, l.jsx)(E.E, {
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
                      (0, l.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, l.jsx)(eW.d, { checked: U, onChange: (e) => Z(e) }),
                                  }),
                              (0, l.jsx)(Y.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, l.jsx)("div", {
                                      children: (0, l.jsxs)(E.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: eJ.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, l.jsxs)(E.E, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: R > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [R.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  N &&
                      (0, l.jsx)(Y.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, l.jsx)("span", {
                              children: (0, l.jsx)(E.E, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  s &&
                      (0, l.jsx)(E.E, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, l.jsx)("div", {
                          className: eJ.m8,
                          children: (0, l.jsx)(I.A, {
                              children: (0, l.jsx)(eB.$, { variant: "primary", text: "Reset Frame Data", onClick: w }),
                          }),
                      }),
              ],
          });
}
var e0 = n(417098),
    e1 = n(55619),
    e2 = n(734066);
let e6 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-06-clips-secondary-entrypoints",
    defaultConfig: { enableOverlayEntrypoint: !1 },
    variations: { 1: { enableOverlayEntrypoint: !0 } },
});
var e5 = n(351906),
    e3 = n(377802),
    e4 = n(348858),
    e8 = n(523875),
    e9 = n(416696),
    e7 = n(621956),
    te = n(446080),
    tt = n(922016),
    tn = n(615675),
    ti = n(978940),
    tr = n(176781),
    tl = n(730852),
    ts = n(688810),
    ta = n(617354),
    to = n(980923),
    tu = n(829773),
    td = n(329072),
    tc = n(18235),
    th = n(183184),
    tm = n(47167),
    tg = n(713654),
    tp = n(915725),
    tf = n(572164),
    tx = n(430795),
    tA = n(980707),
    tE = n(477782),
    tS = n(402432),
    tI = n(598495),
    tv = n(934025),
    tT = n(650338),
    tC = n(753070),
    tj = n(16590);
function ty(e) {
    let { onClose: t } = e,
        n = (0, tf.Et)(),
        i = (0, y.bG)([tp.Ay], () => tp.Ay.getSettings().clipsQuality),
        r = (0, y.bG)([tp.Ay], () => tp.Ay.getSettings().clipsLength),
        s = (0, tI.Q)(),
        a = (0, tv.g)(),
        o = (0, tS.F)();
    return (0, l.jsxs)(tA.W, {
        navId: "overlay-clips-menu",
        "aria-label": eg.intl.string(tj.default["YvJKD+"]),
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(tE.sL, {
                id: "status",
                label: eg.intl.string(tj.default.qGgW4M),
                checked: n,
                action: () => {
                    (0, tx.yO)({ clipsEnabled: !n, trackAnalytics: !0 });
                },
            }),
            (0, l.jsx)(tE.Dr, {
                id: "clips-length",
                label: eg.intl.string(eg.t.OgfUio),
                subtext: eg.intl.formatToPlainString(eg.t["bTFv/3"], { count: r / 1e3 }),
                children: s.map((e) => {
                    let { id: t, value: n, label: i } = e;
                    return (0, l.jsx)(
                        tE.iD,
                        {
                            id: t,
                            group: "clips-length-options",
                            label: i,
                            checked: n === r,
                            action: () => (0, tx.h$)(n),
                        },
                        t,
                    );
                }),
            }),
            (0, l.jsx)(tE.Dr, {
                id: "clips-resolution",
                subtext: (0, tC.zr)(i.resolution),
                label: eg.intl.string(eg.t.aFudZJ),
                children: a.map((e) => {
                    let { id: t, value: n, label: r } = e;
                    return (0, l.jsx)(
                        tE.iD,
                        {
                            id: t,
                            group: "clips-resolution-options",
                            label: r,
                            checked: n === i.resolution,
                            action: () => {
                                let { clipsQuality: e } = tp.Ay.getSettings();
                                (0, tx.GS)({ resolution: n, frameRate: e.frameRate });
                            },
                        },
                        t,
                    );
                }),
            }),
            (0, l.jsx)(tE.Dr, {
                id: "clips-framerate",
                subtext: (0, tT.Bs)(i.frameRate),
                label: eg.intl.string(eg.t["2wScL1"]),
                children: o.map((e) => {
                    let { id: t, value: n, label: r } = e;
                    return (0, l.jsx)(
                        tE.iD,
                        {
                            id: t,
                            group: "clips-framerate-options",
                            label: r,
                            checked: n === i.frameRate,
                            action: () => {
                                let { clipsQuality: e } = tp.Ay.getSettings();
                                (0, tx.GS)({ resolution: e.resolution, frameRate: n });
                            },
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var tb = n(880144),
    tN = n(338771),
    t_ = n(548118),
    tR = n(999751),
    tw = n(209932),
    tO = n(333216),
    tM = n(167579),
    tD = n(704877),
    tk = n(173660),
    tL = n(675991),
    tP = n(848362),
    tz = n(141157),
    tV = n(222692),
    tG = n(204651),
    tU = n(71393),
    tZ = n(977997),
    tF = n(46282),
    tH = n(489277),
    tY = n(243612),
    tX = n(296841);
function tW(e) {
    let t = c.useRef(null);
    return (
        c.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function tB(e) {
    let {
        ref: t,
        isActive: n,
        disabled: i,
        iconComponent: r,
        iconColor: s,
        tooltip: a,
        defaultColor: o = "primaryDark",
        highlightedColor: u = "primaryDark",
        caretColor: d,
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
    return (0, l.jsx)(tG.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? u : o,
        className: tX.x6,
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
        iconColor: s,
        caretColor: d,
        isActive: n,
        onContextMenu: x,
        onPopoutClick: g,
        "aria-label": E["aria-label"],
    });
}
function tq(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        { suppress: r, selfMute: s, mute: a } = (0, tk.A)(t),
        o = s || a || r,
        u = (0, to.A)(s, a, r, !1),
        { Component: d, play: h, events: m } = (0, e8.L)(o ? "unmute" : "mute");
    c.useEffect(() => () => h(), [h, o]);
    let g = tW(n);
    function p(e) {
        return (t) => {
            e(t), (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.MICROPHONE, value: Z.IP.SETTINGS_OPENED });
        };
    }
    return (0, l.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = g(t);
            return (0, l.jsx)(tu.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: em.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, l.jsx)(tB, {
                ref: i,
                iconComponent: d,
                isActive: o,
                highlightedColor: "red",
                tooltip: u,
                onClick: () => {
                    (0, th.A)(a, r, em.JJy.OVERLAY),
                        (0, Z.YX)(em.uss.QUICK_ACTIONS, {
                            type: Z.Z5.MICROPHONE,
                            value: o ? Z.IP.ENABLED : Z.IP.DISABLED,
                            userId: D.default.getId(),
                        });
                },
                onPopoutClick: p(n),
                onContextMenu: p(n),
                popoutOpen: s,
                onMouseEnter: () => {
                    m.onMouseEnter();
                },
                onMouseLeave: () => {
                    m.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function tK(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        { selfDeaf: r, deaf: s } = (0, tM.A)(t),
        a = r || s,
        {
            Component: o,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h },
        } = (0, e4.I)(a ? "undeafen" : "deafen"),
        m = s ? tn.T : o;
    function g() {
        (0, tc.A)(s, em.JJy.OVERLAY),
            (0, Z.YX)(em.uss.QUICK_ACTIONS, {
                type: Z.Z5.AUDIO,
                value: s ? Z.IP.ENABLED : Z.IP.DISABLED,
                userId: D.default.getId(),
            });
    }
    function p(e) {
        return (t) => {
            e(t), (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.AUDIO, value: Z.IP.SETTINGS_OPENED });
        };
    }
    c.useEffect(() => () => u(), [a, u]);
    let f = tW(n);
    return (0, l.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(tu.A, {
                onClose: f(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: em.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, l.jsx)(tB, {
                ref: i,
                iconComponent: m,
                tooltip: (0, ta.A)(r, s, !1),
                isActive: a,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: p(n),
                onMouseEnter: d,
                onMouseLeave: h,
                onPopoutClick: p(n),
                popoutOpen: o,
                isTrayButton: !0,
            });
        },
    });
}
function tQ(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        r = (0, y.bG)([eu.Ay], () => eu.Ay.isVideoEnabled()),
        s = (0, y.bG)([eu.Ay], () => Object.values(eu.Ay.getVideoDevices())[0]),
        a = s?.disabled ?? !0,
        o = !1 === a,
        u = (0, tD.A)(t);
    function d(e) {
        Q.A.setVideoEnabled(e);
    }
    function h(e) {
        return (t) => {
            e(t), (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.CAMERA, value: Z.IP.SETTINGS_OPENED });
        };
    }
    function m() {
        a ? (o ? d(!0) : (0, tV.A)()) : d(!r),
            (0, Z.YX)(em.uss.QUICK_ACTIONS, {
                type: Z.Z5.CAMERA,
                value: r ? Z.IP.DISABLED : Z.IP.ENABLED,
                userId: D.default.getId(),
            });
    }
    let {
            Component: g,
            play: p,
            events: { onMouseEnter: f, onMouseLeave: x },
        } = (0, te.K)(r ? "disable" : "enable"),
        A = null != t ? (0, tL.Q)({ enabled: r, cameraUnavailable: a, hasPermission: u, channel: t }) : void 0;
    c.useEffect(() => () => p(), [r, p]);
    let E = tW(n),
        S = null == t || !u;
    return (0, l.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(td.A, { onClose: E(t), appContext: em.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, l.jsx)(tB, {
                ref: i,
                iconComponent: g,
                tooltip: A,
                onClick: m,
                isActive: r,
                highlightedColor: "green",
                onPopoutClick: h(n),
                popoutOpen: s,
                onContextMenu: h(n),
                onMouseEnter: f,
                onMouseLeave: x,
                disabled: S,
                isTrayButton: !0,
            });
        },
    });
}
function tJ(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        r = c.useRef(null),
        s = (0, y.bG)([ed.default], () => ed.default.getCurrentUser()),
        a = (0, tD.A)(n),
        o = (0, y.cf)([eu.Ay], () => (0, tb.A)(eu.Ay)),
        u = (0, y.bG)([M.A], () => M.A.getCurrentUserActiveStream()),
        d = (0, y.bG)([tH.A], () => tH.A.getTargetPID()),
        h = (0, tF.y)({ pid: d, allowOneClickGoLive: !0, analyticsLocation: em.ThZ.UNLOCKED_OVERLAY });
    function m() {
        h(), (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.GO_LIVE, value: Z.IP.ENABLED, userId: D.default.getId() });
    }
    let g = null != u;
    if (g) t = eg.intl.string(eg.t.S5anIc);
    else if (null != n) {
        let e = (0, tY.qv)();
        t = a
            ? null != e
                ? eg.intl.format(eg.t.AB5gTy, { game: e.name })
                : eg.intl.string(eg.t.FeUKeA)
            : eg.intl.string(eg.t.uQn9B8);
    }
    let p = () => {
        if (g)
            return (
                (0, Z.YX)(em.uss.QUICK_ACTIONS, {
                    type: Z.Z5.GO_LIVE,
                    value: Z.IP.DISABLED,
                    userId: D.default.getId(),
                }),
                (0, tN.A)(u, !1)
            );
        m();
    };
    function f(e) {
        return (t) => {
            e(t), (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.SCREEN_SHARE, value: Z.IP.SETTINGS_OPENED });
        };
    }
    let {
        Component: x,
        events: { onMouseEnter: A, onMouseLeave: E },
        play: S,
    } = (0, e9.c)(g ? "disable" : "enable");
    c.useEffect(() => () => S(), [g, S]);
    let I = tW(i);
    return (0, l.jsx)(tt.Y, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(tP.A, {
                channel: n,
                currentUser: s,
                activeStreams: g ? [u] : [],
                handleGoLive: m,
                onClose: I(t),
                appContext: em.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: s } = n;
            return (0, l.jsx)(tB, {
                ref: r,
                iconComponent: x,
                tooltip: t,
                "aria-label": eg.intl.string(eg.t.FeUKeA),
                isActive: g,
                highlightedColor: "green",
                onClick: p,
                popoutOpen: s,
                popoutDisabled: !g,
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
function t$(e) {
    let { voiceChannel: t, locked: i } = e,
        r = c.useRef(null),
        a = t?.getGuildId() ?? null,
        { mute: o, suppress: u } = (0, tk.A)(t),
        d = (0, y.bG)([eu.Ay], () => eu.Ay.isDeaf()),
        h = null == t || o || u || d,
        { analyticsLocations: m } = (0, ts.Ay)();
    function g(e) {
        null != a &&
            ((0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.SOUNDBOARD, value: Z.IP.SETTINGS_OPENED }),
            (0, s.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: m, guildId: a, ...t });
            }));
    }
    let {
            Component: p,
            events: { onClick: f, onMouseEnter: x, onMouseLeave: A },
        } = (0, e7.E)(),
        E = tW(i),
        S = (0, y.bG)([tw.A, D.default], () => tw.A.isUserPlayingSounds(D.default.getId()), []) ? "green" : void 0;
    return (0, l.jsx)(tt.Y, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return h || null == t
                ? (0, l.jsx)(l.Fragment, {})
                : (0, l.jsx)(tO.A, { guildId: a, channel: t, onClose: E(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, l.jsx)(tB, {
                ref: r,
                iconComponent: p,
                tooltip: o
                    ? eg.intl.string(eg.t["Ox4/zU"])
                    : u
                      ? eg.intl.string(eg.t["+YBKYI"])
                      : d
                        ? eg.intl.string(eg.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    f(),
                        (0, Z.YX)(em.uss.QUICK_ACTIONS, {
                            type: Z.Z5.SOUNDBOARD,
                            value: Z.IP.PANEL_OPENED,
                            userId: D.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: S,
                defaultColor: S,
                onContextMenu: g,
                onMouseEnter: x,
                onMouseLeave: A,
                isActive: i,
                popoutOpen: i,
                disabled: h,
                isTrayButton: !0,
            });
        },
    });
}
function t0(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        r = (0, y.bG)([P.Ay], () => P.Ay.getVoiceChannelId() === t?.id);
    function s() {
        (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.CALL_BUTTON, value: Z.IP.DISABLED, userId: D.default.getId() }),
            r && tl.default.disconnect();
    }
    function a(e, t) {
        tl.default.selectVoiceChannel(e),
            (0, Z.YX)(em.uss.QUICK_ACTIONS, {
                type: Z.Z5.CALL_BUTTON,
                value: Z.IP.ENABLED,
                userId: D.default.getId(),
                secondaryValue: t,
            });
    }
    let [o, u] = c.useTransition();
    function d(e) {
        return (t) => {
            u(() => {
                e(t);
            }),
                (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.CALL_BUTTON, value: Z.IP.SETTINGS_OPENED });
        };
    }
    let {
            Component: h,
            events: { onMouseEnter: m, onMouseLeave: g },
        } = (0, e3.O)(),
        p = tW(n),
        f = (0, tz.qZ)(),
        x = r ? h : ti._;
    return (0, l.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(tz.Ay, {
                allAvailableChannelRows: f,
                currentVoiceChannel: t,
                onClose: p(n),
                onSelect: a,
            });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, l.jsx)(tB, {
                ref: i,
                iconComponent: x,
                tooltip: r ? eg.intl.string(eg.t["6vrfgt"]) : eg.intl.string(eg.t.S0W8Z5),
                onClick: r ? s : d(n),
                defaultColor: r ? "disconnect" : void 0,
                onMouseEnter: m,
                onMouseLeave: g,
                onContextMenu: d(n),
                isActive: a,
                onPopoutClick: r ? d(n) : void 0,
                popoutOpen: a,
                isTrayButton: !0,
            });
        },
    });
}
function t1(e) {
    let { voiceChannel: t } = e,
        n = (0, y.bG)([tU.A], () => tU.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", { className: tX.rK }),
                    (0, l.jsxs)("div", {
                        className: tX._C,
                        children: [
                            (0, l.jsx)(t_.Ay, { guild: n, size: t_.Ay.Sizes.SMOL, className: tX.$f }),
                            (0, l.jsx)(E.E, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: tX.J5,
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
function t2(e) {
    let { voiceChannel: t } = e,
        n = (0, tg.gU)(t),
        i = (0, tm.Ay)(t);
    return (0, l.jsxs)("div", {
        className: tX.Wh,
        children: [
            null != n &&
                (0, l.jsx)(E.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: tX.p,
                    children: (0, l.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != i &&
                (0, l.jsx)(E.E, { variant: "text-sm/medium", color: "text-muted", className: tX.HA, children: i }),
        ],
    });
}
function t6(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, y.cf)([a.A], () => ({ quality: a.A.getQuality(), state: a.A.getState(), lastPing: a.A.getLastPing() })),
        r = (0, y.bG)([tZ.A], () => null != n && tZ.A.hasVideo(n), [n]),
        s = (0, u.Mn)("VoiceConnectionStatus"),
        o = (0, y.bG)([e5.A], () => e5.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tR.A, { ...i, channelId: n, hasVideo: r, connectionStatusTextVariant: "text-sm/medium" }),
                !(s && o) &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t1, { voiceChannel: t }),
                            (0, l.jsx)("div", { className: tX.rK }),
                            (0, l.jsx)(t2, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
function t5(e) {
    let t,
        n,
        i = c.useRef(null),
        r = (0, tf.Et)(),
        s = (0, y.bG)([tp.Ay], () => tp.Ay.getLastClipsError()),
        a = (0, y.bG)([eu.Ay], () => eu.Ay.hasClipsSource());
    function o(e) {
        return (t) => {
            e(t), (0, Z.YX)(em.uss.QUICK_ACTIONS, { type: Z.Z5.CLIPS, value: Z.IP.SETTINGS_OPENED });
        };
    }
    function u() {
        r && (0, tx.l0)();
    }
    return (
        null != s && r && (t = "red"),
        (n =
            null != s
                ? s
                : r && !a
                  ? eg.intl.string(tj.default["+QNUov"])
                  : r
                    ? eg.intl.string(eg.t.U4URzP)
                    : eg.intl.string(tj.default.Jc3hn1)),
        (0, l.jsx)(tt.Y, {
            targetElementRef: i,
            clickTrap: !0,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(ty, { onClose: t });
            },
            align: "center",
            position: "top",
            animation: tt.Y.Animation.FADE,
            children: (e, d) => {
                let { onClick: c } = e,
                    { isShown: h } = d;
                return (0, l.jsx)(tB, {
                    ref: i,
                    iconComponent: tr.x,
                    tooltip: n,
                    "aria-label": n,
                    highlightedColor: t,
                    onClick: u,
                    popoutOpen: h,
                    onPopoutClick: o(c),
                    onContextMenu: o(c),
                    disabled: !r || null != s || !a,
                    isTrayButton: !0,
                });
            },
        })
    );
}
var t3 = n(423005);
let t4 = c.memo(function () {
    let e = (0, y.bG)([e5.A], () => e5.A.enabled),
        t = (0, u.Mn)("StreamerModeNotice");
    return e && t
        ? (0, l.jsxs)(e0.$T, {
              color: e0.Hv.STREAMER_MODE,
              className: t3.$X,
              children: [
                  (0, l.jsx)(E.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "text-overlay-light",
                      children: eg.intl.string(eg.t.q9K7jp),
                  }),
                  (0, l.jsx)(e0.Z_, {
                      className: t3.lI,
                      onClick: () => e1.A.setEnabled(!1),
                      noticeType: em.kqX.STREAMER_MODE,
                      children: eg.intl.string(eg.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function t8(e) {
    let { locked: t } = e,
        n = (0, y.bG)([P.Ay], () => P.Ay.getVoiceChannelId()),
        { enableOverlayEntrypoint: i } = e6.useConfig({ location: "QuickActionsWidget" }),
        r = (0, e2.sw)(),
        s = (0, y.bG)([k.A], () => k.A.getChannel(n)),
        a = null != s;
    return (0, l.jsxs)("div", {
        className: m()({ [t3.KE]: !0, [t3.xt]: t }),
        children: [
            (0, l.jsx)(t4, {}),
            (0, l.jsxs)("div", {
                className: t3.Pm,
                children: [
                    (0, l.jsxs)("div", {
                        className: t3.qi,
                        children: [
                            (0, l.jsx)(tq, { voiceChannel: s, locked: t }),
                            (0, l.jsx)(tK, { voiceChannel: s, locked: t }),
                            (0, l.jsx)(tQ, { voiceChannel: s, locked: t }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: t3.qi,
                        children: [
                            (0, l.jsx)(tJ, { voiceChannel: s, locked: t }),
                            (0, l.jsx)(t$, { voiceChannel: s, locked: t }),
                            i && r && (0, l.jsx)(t5, { voiceChannel: s, locked: t }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: m()(t3.qi, a && t3.SV),
                        children: (0, l.jsx)(t0, { voiceChannel: s, locked: t }),
                    }),
                ],
            }),
            a && (0, l.jsx)("div", { className: t3.Pm, children: (0, l.jsx)(t6, { voiceChannel: s, locked: t }) }),
        ],
    });
}
var t9 = n(534890),
    t7 = n(364522),
    ne = n(994500),
    nt = n(996439);
function nn(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function ni(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var nr = n(459192),
    nl = n(408278),
    ns = n(366605),
    na = n(780338),
    no = n(782603),
    nu = n(241541),
    nd = n(320448),
    nc = n(661531),
    nh = n(446576),
    nm = n(789645),
    ng = n(387755),
    np = n(945830),
    nf = n(461678),
    nx = n(277370),
    nA = n(95701),
    nE = n(543465),
    nS = n(914853),
    nI = n(220884),
    nv = n(145567),
    nT = n(778712),
    nC = n(290863),
    nj = n(172491),
    ny = n(912156),
    nb = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function nN(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? nT._3.SIZE_24 : nT._3.SIZE_40;
        case "guild":
            return 24 === e ? t_.Ay.Sizes.SMALLER : t_.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let n_ = c.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: r = !1,
            size: s = 24,
            isTyping: a = !1,
            mentionCount: o = 0,
            isMentionLowImportance: u = !1,
        } = e,
        d = t?.isPrivate() ?? !1,
        c = t?.isMultiUserDM() ?? !1,
        h = n?.id,
        m = (0, y.bG)([nC.A], () => (null != h ? nC.A.getStatus(h) : null), [h]),
        g = (0, y.bG)([nC.A], () => null != h && nC.A.isMobileOnline(h), [h]);
    if (d || c)
        return (0, l.jsx)(nj.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: nN(s, "user"),
            status: m,
            isMobile: g,
            isTyping: a,
            mentionCount: o,
            isMentionLowImportance: u,
        });
    if (null == i) return (0, l.jsx)(t9.o, { size: nN(s, "default"), color: nc.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, l.jsx)(t_.Ay, { guild: i, size: nN(s, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === s ? ny.Q.MEDIUM_40 : ny.Q.TINY_24;
        return (0, l.jsx)(ny.A, { channel: t, guild: i, size: e, isTyping: a });
    }
});
var nR = n(769015);
function nw(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, l.jsx)(nR.A, { game: t, size: nR.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var nO = n(429913),
    nM = n(34307),
    nD = n(499214),
    nk = n(657956);
function nL(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nP(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r } = e,
        s = c.useRef(null);
    return t?.id == null
        ? null
        : (0, l.jsx)(tt.Y, {
              targetElementRef: s,
              shouldShow: n,
              animation: tt.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: r,
              renderPopout: (e) =>
                  (0, l.jsx)(np.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                              type: Z.Z5.TEXT_CHAT,
                              value: Z.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, l.jsx)("div", {
                      ref: s,
                      children: (0, l.jsx)(Y.m, {
                          text: eg.intl.string(eg.t["mp1N/2"]),
                          "aria-label": eg.intl.string(eg.t["mp1N/2"]),
                          children: (0, l.jsx)(nl.K, {
                              ...n,
                              icon: ns.t,
                              "aria-label": eg.intl.string(eg.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: i,
                          }),
                      }),
                  });
              },
          });
}
function nz(e) {
    let { channel: t } = e,
        n = c.useRef(null),
        i = t?.id ?? null,
        r = t?.guild_id != null,
        [s, a] = (0, y.yK)(
            [nE.Ay],
            () =>
                r && null != i && null != t
                    ? [nE.Ay.isChannelMuted(t.getGuildId(), t.id), nE.Ay.resolvedMessageNotifications(t)]
                    : [!1, em.orn.ALL_MESSAGES],
            [t, i, r],
        ),
        [o, u] = c.useState(!1),
        d = c.useCallback(() => {
            u((e) => !e),
                (0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                    type: Z.Z5.TEXT_CHAT,
                    value: Z.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        h = eg.intl.string(eg.t.h850Ss),
        m = s || a !== em.orn.ALL_MESSAGES ? na.a : no.X;
    return r && null != t
        ? (0, l.jsx)(tt.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: tt.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => u(!1),
              renderPopout: (e) =>
                  (0, l.jsx)(nf.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: eg.intl.string(eg.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, l.jsx)("div", {
                      ref: n,
                      children: (0, l.jsx)(Y.m, {
                          text: h,
                          "aria-label": h,
                          children: (0, l.jsx)(nl.K, {
                              ...i,
                              icon: m,
                              "aria-label": h,
                              size: "sm",
                              variant: "icon-only",
                              onClick: d,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function nV(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: r, onRequestClosePinsPopout: s } = e;
    return nL(t)
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(Y.m, {
                      text: eg.intl.string(eg.t.JJogjm),
                      "aria-label": eg.intl.string(eg.t.JJogjm),
                      children: (0, l.jsx)(nl.K, {
                          icon: ti._,
                          "aria-label": eg.intl.string(eg.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, l.jsx)(nP, { channel: t, pinsOpen: i, onTogglePinsPopout: r, onRequestClosePinsPopout: s }),
                  t.isMultiUserDM()
                      ? (0, l.jsx)(Y.m, {
                            text: eg.intl.string(eg.t["LR+Ptf"]),
                            "aria-label": eg.intl.string(eg.t["LR+Ptf"]),
                            children: (0, l.jsx)(nl.K, {
                                icon: nu.D,
                                "aria-label": eg.intl.string(eg.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                                        type: Z.Z5.INVITE,
                                        value: Z.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, nx.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, nv.D$)({
                                                    target: {
                                                        kind: nv.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: nM.B.MANUAL,
                                                    widgetType: em.uss.TEXT_CHAT_V3,
                                                });
                                            },
                                        });
                                },
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
function nG(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nz, { channel: t }),
                  (0, l.jsx)(nP, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r }),
              ],
          });
}
function nU(e) {
    let t,
        { channel: n, user: i, guild: r, title: s, dragStart: o, dragging: d } = e,
        { hasFriendList: h } = (0, u.M8)("TextChatHeader"),
        [g, p] = c.useState(!1),
        f = (0, y.bG)([a.A], () => a.A.getChannelId(), []),
        x = n?.isDM() ? (i?.id ?? null) : null,
        S =
            ((t = (0, y.bG)([nC.A], () => {
                if (null != x)
                    return (
                        (function (e) {
                            for (let t of e)
                                if (t.type === em.$pd.PLAYING && null != t.application_id) return t.application_id;
                            return null;
                        })(nC.A.getActivities(x)) ?? void 0
                    );
            }, [x])),
            (0, nO.h)(t) ?? void 0),
        I = f === n?.id,
        v = eg.intl.string(nD.default.tYPfF2),
        T = (0, y.bG)([k.A], () => (n?.isThread() && null != n.parent_id ? k.A.getChannel(n.parent_id) : null), [n]),
        C = (0, y.bG)([ed.default, ne.A], () => (null != T ? (0, tm.m1)(T, ed.default, ne.A) : null), [T]),
        j = c.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = i),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? ne.A.isFriend(t.id)
                          ? { tab: nS.x.FRIENDS, targetId: t.id }
                          : null
                      : (0, nA.ke)(e.type)
                        ? { tab: nS.x.MESSAGES, targetId: e.id }
                        : (0, nA.ay)(e.type)
                          ? { tab: nS.x.VOICE, targetId: e.id }
                          : null
            );
        }, [n, i]),
        b = c.useCallback(
            (e) => {
                nL(n) &&
                    ((0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                        type: Z.Z5.CALL_BUTTON,
                        value: Z.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    ng.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        N = c.useCallback(() => {
            n?.id != null &&
                p((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                                type: Z.Z5.TEXT_CHAT,
                                value: Z.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [n?.id]);
    return (0, l.jsxs)("div", {
        className: m()(nk.XV, d && nk.cB),
        onMouseDown: (e) => {
            0 === e.button && o(eC.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, l.jsxs)("div", {
                className: nk.LD,
                children: [
                    (0, l.jsx)("div", {
                        className: nk.gr,
                        children: (0, l.jsx)(nw, {
                            application: S,
                            fallback: (0, l.jsx)(n_, { channel: null, user: i, guild: r, size: nb.SIZE_24 }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: nk.G1,
                        children: [
                            (function () {
                                if (null != x) return null;
                                let e = (0, tg.gU)(n, r);
                                return null != e ? (0, l.jsx)(e, { className: nk.gr, size: "xs" }) : null;
                            })(),
                            null != T && null != C
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(A.D, {
                                              className: nk.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, nv.D$)({
                                                          target: {
                                                              kind: nv.bB.CHANNEL,
                                                              channelId: T.id,
                                                              guildId: T.getGuildId?.() ?? T.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: nM.B.MANUAL,
                                                          widgetType: em.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, l.jsx)(E.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: C,
                                              }),
                                          }),
                                          (0, l.jsx)(nd._, {
                                              className: nk.ln,
                                              size: "xs",
                                              color: nc.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, l.jsxs)(E.E, {
                                className: nk.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    s,
                                    S?.name != null && "" !== S.name
                                        ? (0, l.jsx)(E.E, {
                                              tag: "span",
                                              className: nk.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: eg.intl.formatToPlainString(nD.default.x1k3cO, {
                                                  gameName: S.name,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: nk.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, l.jsx)(nV, {
                        channel: n,
                        onStartPrivateCall: b,
                        pinsOpen: g,
                        onTogglePinsPopout: N,
                        onRequestClosePinsPopout: () => p(!1),
                    }),
                    (0, l.jsx)(nG, {
                        channel: n,
                        pinsOpen: g,
                        onTogglePinsPopout: N,
                        onRequestClosePinsPopout: () => p(!1),
                    }),
                    h &&
                        null != j &&
                        (0, l.jsx)(nI.j, {
                            tab: j.tab,
                            targetId: j.targetId,
                            widgetType: em.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    n?.id != null &&
                        (I
                            ? (0, l.jsx)(Y.m, {
                                  text: v,
                                  "aria-label": v,
                                  children: (0, l.jsx)(nl.K, {
                                      icon: nh.g,
                                      "aria-label": v,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                                              type: Z.Z5.TEXT_CHAT,
                                              value: Z.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nv.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, l.jsx)(nr.u, {
                                  title: eg.intl.string(nD.default.ERApc4),
                                  body: eg.intl.string(nD.default.PBVXVW),
                                  children: (0, l.jsx)(nl.K, {
                                      icon: nm.P,
                                      "aria-label": eg.intl.string(nD.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, Z.YX)(em.uss.TEXT_CHAT_V3, {
                                                    type: Z.Z5.TEXT_CHAT,
                                                    value: Z.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, nv.$p)())
                                              : (0, nv.lu)({
                                                    channelId: n.id,
                                                    widgetType: em.uss.TEXT_CHAT_V3,
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
var nZ = n(602853),
    nF = n(941971),
    nH = n(568548),
    nY = n(485296),
    nX = n(741961),
    nW = n(228366),
    nB = n(308528);
let nq = new Set();
async function nK(e) {
    if (!nq.has(e)) {
        nq.add(e);
        try {
            let t = await nB.A.fetchChannel(e),
                n = (0, nA.UE)(t);
            nW.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let i = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != i) return void nB.A.preload(i, n.id);
        } catch {}
    }
}
var nQ = n(95231),
    nJ = (((r = {}).DEFAULT = "DEFAULT"), (r.CHANNEL_TYPE = "CHANNEL_TYPE"), r);
let n$ = c.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: r = "DEFAULT" } = e,
        a = null != i && t === i,
        u = (0, y.bG)([o.A], () => o.A.getSelectedChannelId() === t, [t]),
        d = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        h = (0, nZ.r)(nc.A.colors.ICON_STATUS_ONLINE),
        g = (0, y.bG)([nY.A], () => !!a && !!(nY.A.isAnyoneElseSpeaking() || nY.A.isCurrentUserSpeaking()), [a]),
        [p, f] = c.useState(!1),
        { mentionCount: x, isMentionLowImportance: E } = (0, y.cf)(
            [nH.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: nH.Ay.getMentionCount(t),
                          isMentionLowImportance: nH.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: S,
            user: I,
            guild: v,
            channel: T,
        } = (0, y.cf)([k.A, tU.A, ed.default, ne.A], () => {
            let e = k.A.getChannel(t) ?? null;
            if (null == e) return { label: eg.intl.string(eg.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, tm.m1)(e, ed.default, ne.A);
            return { label: n, user: nn(e, ed.default), guild: ni(e, tU.A), channel: e };
        }, [t]);
    c.useEffect(() => {
        null == T && nK(t);
    }, [T, t]);
    let C = (0, y.bG)([nX.A, ed.default], () => {
            if (null == T) return !1;
            let e = ed.default.getCurrentUser()?.id ?? null,
                t = nX.A.getTypingUsers(T.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [T]),
        j = (0, y.bG)([nH.Ay], () => {
            let e = T?.id;
            return null != e && nH.Ay.hasUnread(e);
        }, [T]),
        b = (0, l.jsx)("div", {
            className: nQ.St,
            children: (() => {
                let e = T?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === r && !e) {
                    let e = (0, tg.gU)(T, v);
                    e ??= t9.o;
                    let t = a && !d && g,
                        n = { boxShadow: "none" },
                        i = h.rgba({ opacity: 0.85 }),
                        r = h.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${r})`),
                        (0, l.jsx)("div", {
                            className: m()(nQ.s, u && nQ.lJ),
                            style: n,
                            children: (0, l.jsx)(e, {
                                className: nQ.Yc,
                                size: "sm",
                                color: u ? nc.A.colors.WHITE : nc.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, l.jsx)(n_, {
                    channel: T,
                    user: I,
                    guild: v,
                    isSelected: u,
                    size: nb.SIZE_40,
                    isTyping: C,
                    mentionCount: x,
                    isMentionLowImportance: E,
                });
            })(),
        }),
        N = (function (e) {
            let { channel: t, guild: i, user: r } = e;
            return c.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("38730"),
                                    n.e("81609"),
                                    n.e("53416"),
                                    n.e("77927"),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, l.jsx)(e, { ...n, channel: t, selected: !1, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != r)
                            return void (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("71406"),
                                    n.e("94881"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("8757"),
                                    n.e("85968"),
                                    n.e("38730"),
                                    n.e("89673"),
                                    n.e("29787"),
                                    n.e("82073"),
                                    n.e("97558"),
                                    n.e("91994"),
                                    n.e("76665"),
                                    n.e("76273"),
                                    n.e("45996"),
                                    n.e("792"),
                                    n.e("92822"),
                                    n.e("23427"),
                                    n.e("29422"),
                                    n.e("9291"),
                                    n.e("7059"),
                                    n.e("72883"),
                                    n.e("81609"),
                                    n.e("98199"),
                                    n.e("41175"),
                                    n.e("96443"),
                                    n.e("23490"),
                                    n.e("95049"),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        ...n,
                                        user: r,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: em.uss.TEXT_CHAT_V3,
                                    });
                            });
                        if (t.isModeratorReportChannel())
                            return void (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("38730"),
                                    n.e("43266"),
                                    n.e("81609"),
                                    n.e("79366"),
                                ]).then(n.bind(n, 95616));
                                return (n) => (0, l.jsx)(e, { ...n, channel: t, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nA.ay)(t.type)) {
                            if (null == i) return;
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("62867"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("38730"),
                                    n.e("43266"),
                                    n.e("9004"),
                                    n.e("44058"),
                                    n.e("81609"),
                                    n.e("94138"),
                                    n.e("58262"),
                                    n.e("18663"),
                                    n.e("21905"),
                                ]).then(n.bind(n, 769192));
                                return (n) =>
                                    (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("38730"),
                                    n.e("43266"),
                                    n.e("9004"),
                                    n.e("44058"),
                                    n.e("91377"),
                                    n.e("81609"),
                                    n.e("66540"),
                                    n.e("54036"),
                                ]).then(n.bind(n, 813407));
                                return (n) =>
                                    (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, r],
            );
        })({ channel: T, guild: v, user: I }),
        _ = T?.isPrivate() ?? !1,
        R = v?.name ?? "",
        w = _ ? void 0 : S,
        O = _ ? S : "" !== R ? R : S,
        M = (() => {
            if (null == T || _) return null;
            let e = (0, tg.gU)(T, v);
            return (e ??= t9.o), (0, l.jsx)(e, { size: "sm", color: nc.A.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == T
        ? (0, l.jsx)("div", { className: nQ.R })
        : (0, l.jsx)(nr.u, {
              title: w,
              body: O,
              asset: M,
              assetSize: 20,
              "aria-label": S,
              children: (0, l.jsxs)(A.D, {
                  className: nQ.pc,
                  onClick: () => {
                      a && (0, nv.S$)({ minimized: !1 }),
                          (0, nv.D$)({
                              target: { kind: nv.bB.CHANNEL, channelId: t, guildId: v?.id ?? null, messageId: null },
                              source: nM.B.MANUAL,
                              widgetType: em.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: N,
                  onMouseEnter: () => f(!0),
                  onMouseLeave: () => f(!1),
                  children: [
                      b,
                      (0, l.jsx)("div", {
                          className: nQ.vT,
                          children: (0, l.jsx)(nF.A, { selected: u, hovered: p, unread: j }),
                      }),
                  ],
              }),
          });
});
var n0 = n(493336),
    n1 = n(928078),
    n2 = n(355622),
    n6 = n(232835),
    n5 = n(576705),
    n3 = n(625494),
    n4 = n(827280);
function n8(e) {
    let t,
        n,
        i,
        r,
        s,
        a,
        { selectedChannelId: o } = e,
        u = (0, y.bG)([k.A], () => k.A.getChannel(o), [o]),
        d = (0, ew.A)(),
        h = (0, y.bG)(
            [tU.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(u, tU.A),
            [u],
        );
    return ((t = u?.id ?? null),
    (n = c.useRef(new Set())),
    (i = (0, y.bG)([n6.A], () => (null != t ? n6.A.getMessages(t) : null), [t])),
    (r = (0, y.bG)([n5.A], () => n5.A.can(em.xBc.READ_MESSAGE_HISTORY, u), [u])),
    (s = i?.first() ?? null),
    (a = null != u && null == s && null != i && !i.loadingMore && !i.ready && !i.hasFetched && r),
    c.useEffect(() => {
        null == t || (!n.current.has(t) && a && (n.current.add(t), n0.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, a]),
    c.useEffect(() => {
        if (null == o) return;
        let e = d.requestAnimationFrame(() => {
            n3._.dispatchToLastSubscribed(em.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => d.cancelAnimationFrame(e);
    }, [o, d]),
    null != u)
        ? (0, l.jsx)("div", {
              className: n4.Q,
              children: (0, l.jsx)("div", {
                  className: n4.T,
                  children: (0, l.jsx)(n1.A, { channel: u, guild: h, chatInputType: n2.oU.OVERLAY }, u.id),
              }),
          })
        : null;
}
var n9 = n(881890);
function n7(e) {
    let { dragStart: t, dragging: n } = e,
        [i, r] = (0, y.bG)([o.A], () => o.A.getSessionEntries(), [], nt.D),
        s = (0, y.bG)([o.A], () => o.A.getSelectedChannelId()),
        u = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        d = (0, y.bG)([k.A], () => (null != s ? (k.A.getChannel(s) ?? null) : null), [s]);
    c.useEffect(() => {
        null == s || (null == d && nK(s));
    }, [d, s]);
    let h = (0, y.bG)([tU.A], () => ni(d, tU.A), [d]),
        m = (0, y.bG)([a.A], () => a.A.getChannelId(), []),
        g = c.useMemo(() => (null == m || 0 === r ? i : i.filter((e) => e.channelId !== m)), [i, r, m]),
        p = (0, Z.Dk)(() => {
            let e = new Set();
            for (let t of (null != m && e.add(m), g)) e.add(t.channelId);
            return e;
        }, [g, m, r]),
        { shownUserIds: f, contentInventoryIds: x } = c.useMemo(
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = k.A.getChannel(i) ?? null;
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
                })(p),
            [p],
        ),
        A = (0, Z.Dk)(() => f, [f]),
        E = (0, Z.Dk)(() => x, [x]);
    c.useEffect(() => {
        (0 !== A.size || 0 !== E.size) &&
            (0, Z.Y)(em.uss.TEXT_CHAT_V3, {
                locked: U.default.isInstanceLocked(),
                shownUserIds: Array.from(A),
                liveUserIds: [],
                contentInventoryIds: Array.from(E),
            });
    }, [A, E]);
    let S = (0, y.bG)([ed.default], () => nn(d, ed.default)),
        I = (0, y.bG)(
            [ed.default, ne.A],
            () => (null == d ? eg.intl.string(nD.default.uhJexs) : (0, tm.m1)(d, ed.default, ne.A)),
            [d],
        ),
        v = (0, y.bG)([k.A], () => {
            if (null != m && null != k.A.getChannel(m)) return !0;
            if (0 === r) return !1;
            for (let e of i) if (null != k.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [i, m, r]),
        T = null != s && !(u && s === m);
    return v
        ? (0, l.jsxs)("div", {
              className: n9.kL,
              children: [
                  (0, l.jsx)("nav", {
                      className: n9.pz,
                      "aria-label": eg.intl.string(nD.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(eC.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, l.jsxs)(t7.d_, {
                          children: [
                              null != m
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(
                                                n$,
                                                {
                                                    channelId: m,
                                                    selectedVoiceChannelId: m,
                                                    iconVariant: nJ.CHANNEL_TYPE,
                                                },
                                                `tiv-${m}`,
                                            ),
                                            g.length > 0 ? (0, l.jsx)("hr", { className: n9.mF }) : null,
                                        ],
                                    })
                                  : null,
                              g.map((e) =>
                                  (0, l.jsx)(n$, { channelId: e.channelId, selectedVoiceChannelId: m }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  T
                      ? (0, l.jsxs)("div", {
                            className: n9.oM,
                            children: [
                                (0, l.jsx)(nU, { channel: d, user: S, guild: h, title: I, dragStart: t, dragging: n }),
                                (0, l.jsx)(n8, { selectedChannelId: s }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, l.jsx)(V.g, { emptyText: eg.intl.string(nD.default["xpv/t5"]), icon: t9.o });
}
let ie = c.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, l.jsx)(n7, { dragStart: n, dragging: i });
});
var it = n(428689),
    ii = n(175203),
    ir = n(163432),
    il = n(799808),
    is = n(731854),
    ia = n(521380);
let io = c.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            r = t.user?.id;
        return (0, y.bG)([eu.Ay], () => null != t.user && null != i && null != n && eu.Ay.isLocalVideoDisabled(r, i), [
            r,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, l.jsx)(ii.Ay, { ...e });
    }),
    iu = c.memo(function (e) {
        let {
                context: t = is.x.DEFAULT,
                participants: i,
                locked: r,
                channel: a,
                width: o,
                height: u,
                shouldDisplay: d,
            } = e,
            h = c.useCallback(
                (e, i) => {
                    let r = e.user;
                    (0, Z.YX)(em.uss.VIDEO, { type: Z.Z5.CAMERA, value: Z.IP.SETTINGS_OPENED, userId: r?.id }),
                        (0, s.L3)(i, async () => {
                            let { default: e } = await Promise.all([
                                n.e("94881"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("8757"),
                                n.e("85968"),
                                n.e("89673"),
                                n.e("82073"),
                                n.e("97558"),
                                n.e("91994"),
                                n.e("49145"),
                                n.e("70314"),
                                n.e("4524"),
                                n.e("54148"),
                                n.e("58980"),
                            ]).then(n.bind(n, 535503));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: r,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, Z.YX)(em.uss.VIDEO, {
                                            type: Z.Z5.GO_LIVE,
                                            value: Z.IP.ENABLED,
                                            userId: r?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            m = (0, Z.Dk)(() => new Set(i.map((e) => e.user?.id)), [i]);
        c.useEffect(() => {
            d &&
                (0, Z.Y)(em.uss.VIDEO, {
                    locked: U.default.isInstanceLocked(),
                    shownUserIds: Array.from(m),
                    liveUserIds: Array.from(m),
                    contentInventoryIds: [],
                });
        }, [m, d]);
        let g = c.useMemo(() => ({ width: o, height: u }), [o, u]);
        return (0, l.jsx)(l.Fragment, {
            children: i.map((e) =>
                (0, l.jsx)(
                    io,
                    {
                        participant: e,
                        width: o,
                        className: ia.Vs,
                        containerStyle: g,
                        fit: es.$.COVER,
                        channel: a,
                        popoutType: et.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: r ? void 0 : h,
                        forceIdle: r,
                        paused: !d,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    id = c.memo(function (e) {
        let {
                context: t = is.x.DEFAULT,
                participants: n,
                participantsVersion: i,
                locked: r,
                widget: s,
                channel: a,
                width: o,
                height: u,
                showEmpty: d = !0,
                containerRef: h,
            } = e,
            g = "boolean" != typeof s.meta.horizontal || s.meta.horizontal,
            p = n.length > 0 && null != t && null != a && (!r || s.pinned);
        c.useEffect(() => {
            (0, il.j_)({ locked: r, pinned: s.pinned, widget: s.type, isPreviewingInGame: !1 }, p);
        }, [r, s, p]);
        let f = c.useMemo(() => ({ opacity: s.opacity }), [s.opacity]),
            x = c.useMemo(() => m()({ [ia.wb]: !0, [ia.Vd]: !g, [ia.R]: !p && r }), [g, p, r]);
        return 0 !== n.length || r
            ? null == a
                ? null
                : (0, l.jsx)("div", {
                      ref: h,
                      className: x,
                      style: f,
                      children: (0, l.jsx)(iu, {
                          context: t,
                          participants: n,
                          locked: r,
                          channel: a,
                          width: o,
                          height: u,
                          shouldDisplay: p,
                          participantsVersion: i,
                      }),
                  })
            : d
              ? (0, l.jsx)("div", {
                    ref: h,
                    children: (0, l.jsx)(V.g, { emptyText: eg.intl.string(eg.t.aTiM42), icon: it.n, absolute: !0 }),
                })
              : null;
    }),
    ic = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, eR.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * r;
        return (function (e, t) {
            let { maxWidth: n, maxHeight: i } = t;
            return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
        })(
            s
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + a) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + a) },
            { maxWidth: 0.75 * l.maxX, maxHeight: 0.75 * l.maxY },
        );
    };
function ih(e) {
    let t = (0, y.bG)([P.Ay, k.A], () => k.A.getChannel(P.Ay.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [r, s] = (0, y.bG)(
            [R.A],
            () => (null == i ? [[], 0] : [R.A.getVideoParticipants(i), R.A.getParticipantsVersion(i)]),
            [i],
            nt.D,
        ),
        a = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: u = e.height - n, ref: d } = (0, eI.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: h, visibleParticipants: m } = (0, ir.i4)(a ? o : u, r, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: s,
        }),
        g = (0, y.bG)([O.A], () => O.A.getWindowState(eH.f)),
        p = {
            id: e.widget.id,
            containerSize: { containerHeight: u, containerWidth: o },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: g?.width ?? e.width - n, maxY: g?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: g?.height ?? e.height, right: g?.width ?? e.width },
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
                l = c.useRef(r);
            c.useLayoutEffect(() => void (l.current = r)),
                c.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: r,
                        widget: s,
                        widgetLayoutSpecs: a,
                    } = l.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: u } = ic({
                        ...a,
                        widget: s,
                        operation: eC.P.RESIZE_NORTH,
                        computedSize: { width: r, height: i },
                        originSize: { width: r, height: i },
                    });
                    (0, J.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: u } });
                }, [t]);
        })({ horizontal: a, widget: e.widget, widgetLayoutSpecs: p }),
        (0, l.jsx)(id, {
            ...e,
            channel: t,
            participants: m,
            participantsVersion: s,
            width: a ? h : (o ?? e.width),
            height: a ? (u ?? e.height) : h,
            containerRef: d,
        })
    );
}
var im = n(450740),
    ig = n(968898);
n(321073);
var ip = n(518009),
    ix = n(592598),
    iA = n(28528),
    iE = n(57019),
    iS = n(191701),
    iI = n(672396),
    iv = n(669192);
let iT = [];
function iC(e) {
    return e.notification.id;
}
function ij(e, t, n, i) {
    let { index: r, notification: s, locked: a, pinned: o } = t;
    return (0, l.jsx)(iA.A, { index: r, notification: s, locked: a, pinned: o, transitionState: n, cleanUp: i }, e);
}
function iy(e) {
    return (0, l.jsx)("div", { className: iv.k, children: e });
}
let ib = c.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            r = (0, y.bG)(
                [iS.default, ix.A],
                () => {
                    if (ix.A.isNotificationDisabled(iI.KS.TextChat)) return iT;
                    let e = [],
                        i = 0;
                    for (let r of iS.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || r.status !== em.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: r }), i++);
                    }
                    return e;
                },
                [t, n],
                tY.oQ,
            ),
            s = c.useState(() => new iE.Fn(t))[0];
        return (c.useLayoutEffect(() => s.updateState(r, t)),
        c.useLayoutEffect(() => (s.initialize((0, ew.b)()), () => s.cleanUp()), [s]),
        0 !== r.length || t)
            ? (0, l.jsx)(iE.Gt.Provider, {
                  value: s,
                  children: (0, l.jsx)(ip.F, { items: r, renderItem: ij, getItemKey: iC, wrapChildren: iy }),
              })
            : i
              ? t
                  ? null
                  : (0, l.jsx)(V.g, { emptyText: eg.intl.string(eg.t.O1Nbjq), icon: no.X, absolute: !0 })
              : null;
    }),
    iN = {
        [em.uss.VIDEO]: {
            streamerModeLabel: () => eg.intl.string(eg.t.UPvOia),
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: r, borderWidth: s, showEmpty: a } = e;
                return (0, eR.cv)(t)
                    ? (0, l.jsx)(ih, {
                          id: t.id,
                          locked: n,
                          widget: t,
                          height: "auto" === i.height ? 0 : i.height - 2 * r - 2 * s,
                          width: "auto" === i.width ? 0 : i.width - 2 * r - 2 * s,
                          showEmpty: a,
                          padding: r,
                          borderWidth: s,
                      })
                    : null;
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: eg.intl.string(eg.t.UPvOia) }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ig.CS, {
                            onClick: (t) => {
                                (0, eR.cv)(e) &&
                                    (0, s.L3)(t, async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("792"),
                                            n.e("92822"),
                                            n.e("55630"),
                                            n.e("78238"),
                                        ]).then(n.bind(n, 662554));
                                        return (n) => (0, l.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, l.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: ic,
        },
        [em.uss.VOICE_V3]: {
            streamerModeLabel: () => eg.intl.string(eg.t.nFv3Gb),
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: r } = e;
                return (0, eR.ZO)(t)
                    ? (0, l.jsx)(im.Ay, {
                          anchorLeft: n,
                          id: t.id,
                          locked: i,
                          pinned: t.pinned,
                          widget: em.uss.VOICE_V3,
                          maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                          isPreviewingInGame: !1,
                          showEmpty: r,
                      })
                    : null;
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: eg.intl.string(eg.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ig.CS, {
                            onClick: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, l.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, l.jsx)(C, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ig.CS, {
                            onClick: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, l.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, l.jsx)(e$, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, l.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
        },
        [em.uss.GO_LIVE]: {
            streamerModeLabel: () => eg.intl.string(eg.t["386XRo"]),
            renderWidget(e) {
                let {
                    widget: t,
                    locked: n,
                    size: i,
                    dragStart: r,
                    anchorTop: s,
                    anchorLeft: a,
                    showEmpty: o,
                    padding: u,
                    borderWidth: d,
                } = e;
                return (0, eR.dO)(t)
                    ? (0, l.jsx)(eX, {
                          id: t.id,
                          locked: n,
                          pinned: t.pinned,
                          opacity: t.opacity,
                          size: i,
                          anchorTop: s,
                          anchorLeft: a,
                          widget: t,
                          isPreviewingInGame: !1,
                          dragStart: r,
                          horizontal: t.meta.horizontal ?? !1,
                          padding: u,
                          borderWidth: d,
                          showEmpty: o,
                      })
                    : null;
            },
            renderTitle: (e) => (0, l.jsx)(ig.we, { widgetId: e.id, children: eg.intl.string(eg.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, eR.dO)(e)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(ig.CS, {
                                  onClick: (t) => {
                                      (0, eR.dO)(e) &&
                                          (0, s.L3)(t, async () => {
                                              let { default: t } = await Promise.all([n.e("55630"), n.e("21289")]).then(
                                                  n.bind(n, 543824),
                                              );
                                              return (n) => (0, l.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, l.jsx)(ig.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, l.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eG,
        },
        [em.uss.QUICK_ACTIONS]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, l.jsx)(t8, { locked: t });
            },
        },
        [em.uss.NOTIFICATIONS]: {
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, l.jsx)(ib, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: eg.intl.string(eg.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ig.CS, {
                            onClick: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await n.e("51607").then(n.bind(n, 98109));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, l.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.ACTIVITY]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, l.jsx)(d.Ay, { locked: t });
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: eg.intl.string(eg.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, u.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.FRIENDS]: {
            streamerModeLabel: () => eg.intl.string(eg.t.TdEu5X),
            renderWidget(e) {
                let { locked: t } = e;
                return (0, l.jsx)(j.A, { locked: t });
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: eg.intl.string(eg.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, u.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.TEXT_CHAT_V3]: {
            streamerModeLabel: () => eg.intl.string(eg.t["/VQax8"]),
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, l.jsx)(ie, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, l.jsx)(ig.Pl, { children: eg.intl.string(eg.t["/VQax8"]) }),
            renderButtons: () => null,
            predicate: () => (0, u.NI)("WidgetRenderConfig").hasChat,
            containerRenderGate: {
                stores: [a.A, o.A],
                shouldRender(e) {
                    let { locked: t } = e;
                    if (t) return !1;
                    let n = a.A.getChannelId() ?? null,
                        [i] = o.A.getSessionEntries(),
                        r = i.length > 0;
                    return null != n || r;
                },
            },
        },
    };
