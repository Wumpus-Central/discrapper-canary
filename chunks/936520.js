(t.d(s, { Wr: () => er, Ay: () => ec, Kc: () => ea }), t(321073));
var n,
    i = t(477900),
    l = t(582128),
    r = t(503698),
    a = t.n(r),
    c = t(172218),
    o = t(738678),
    d = t(960027),
    u = t(17928),
    m = t(866665),
    x = t(943812),
    A = t(428689),
    g = t(695366),
    h = t(661531),
    N = t(323384),
    E = t(39623),
    j = t(939249),
    C = t(778712),
    I = t(890856),
    p = t(546861),
    f = t(666654),
    L = t(83107),
    O = t(615675),
    R = t(990836),
    T = t(387755),
    S = t(440594),
    _ = t(323073),
    b = t(666860),
    k = t(863089),
    v = t(85448),
    D = t(556525),
    y = t(402216),
    M = t(268218),
    V = t(609425),
    G = t(73392),
    P = t(769015);
let U = (0, t(945810).mj)({
    name: "2026-09-guild-sidebar-stream-preview",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = t(450149),
    F = t(430363),
    w = t(823854),
    z = t(602853),
    H = t(475743),
    J = t(775602),
    Z = t(21161),
    B =
        (((n = {})[(n.OFFERED = 0)] = "OFFERED"),
        (n[(n.ACCEPTED = 1)] = "ACCEPTED"),
        (n[(n.RUNNING = 2)] = "RUNNING"),
        (n[(n.COMPLETED = 3)] = "COMPLETED"),
        (n[(n.FAILED = 4)] = "FAILED"),
        (n[(n.CANCELLED = 5)] = "CANCELLED"),
        n),
    W = t(818888);
function X(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        r = (0, u.bG)([w.A], () => w.A.getProgressForUserId(s), [s]),
        a = (0, u.bG)(
            [w.A],
            () => {
                let e = w.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === B.COMPLETED;
            },
            [s],
        ),
        c = (0, u.bG)([J.Ay], () => J.Ay.useReducedMotion),
        o = (0, H.Ay)(r),
        d = (0, H.Ay)(a),
        { createMultipleConfettiAt: m } = l.useContext(Z.x),
        x = (0, z.r)(h.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        A = (0, z.r)(h.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        g = (0, z.r)(h.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        N = l.useRef(0),
        E = l.useRef(null),
        j = Math.max(0, Math.min(1, r ?? 0)),
        C = j >= 1 ? g : A,
        I = l.useMemo(
            () => ({ backgroundImage: `conic-gradient(${C} ${Math.round(360 * j)}deg, ${x} 0deg)` }),
            [j, C, x],
        ),
        p = l.useMemo(
            () => ({
                size: { type: "static-random", minValue: 2, maxValue: 6 },
                velocity: { type: "static-random", minValue: { x: -120, y: -140 }, maxValue: { x: 120, y: -260 } },
            }),
            [],
        ),
        f = l.useCallback(() => {
            if (c) return;
            let e = E.current?.getBoundingClientRect();
            null != e && m(e.left + e.width / 2, e.top + e.height / 2, p, 250);
        }, [p, m, c]);
    (l.useEffect(() => {
        c || ((o ?? 0) < 1 && j >= 1 && f());
    }, [j, f, o, c]),
        l.useEffect(() => {
            c || !0 !== a || (!0 !== d && f());
        }, [f, a, d, c]));
    let L = l.useCallback(() => {
        if (c || j < 1) return;
        let e = Date.now();
        e - N.current < 4e3 || ((N.current = e), f());
    }, [j, f, c]);
    return (0, i.jsx)("div", {
        className: t,
        onMouseEnter: L,
        children: (0, i.jsxs)("div", {
            ref: E,
            className: W.R,
            children: [(0, i.jsx)("div", { className: W.h, style: I }), n],
        }),
    });
}
function Y(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, F.Uk)("VoiceDareAvatarRing"),
        r = (0, u.bG)([w.A], () => w.A.hasVoiceDareForUserId(s), [s]);
    return l && r
        ? (0, i.jsx)(X, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var $ = t(790381),
    q = t(266080),
    Q = t(427262),
    ee = t(652215),
    es = t(806931),
    et = t(544105),
    en = t(105292),
    ei = t(254849);
let el = (0, M.Fe)({
    createPromise: () => Promise.all([t.e("910349"), t.e("528966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function er(e) {
    let { children: s, collapsed: t = !1, className: n } = e;
    return (0, i.jsx)("div", { className: a()(n, ei.p_, t ? ei.GT : ei.m3), role: "group", children: s });
}
function ea(e) {
    let {
            className: s,
            mute: t,
            localMute: n,
            localVideoDisabled: l,
            serverMute: r,
            deaf: c,
            serverDeaf: u,
            collapsed: C,
            video: I,
            isStreaming: b,
            disabled: k,
            isWatching: v,
            ringing: D,
            iconClassName: M,
            embeddedApplication: V,
            otherClientSessionType: G,
            voicePlatform: P,
            application: F,
            game: w,
            guildId: z,
            channelId: H,
            user: J,
            disconnected: Z,
            isHovered: B,
            soundboardMuted: W,
        } = e,
        X = C || k,
        { enabled: Y } = U.useConfig({ guildId: z ?? "", location: "VoiceUserIcons" }),
        Q = (0, _.UK)(H),
        { previewUrl: ee } = (0, K.A)(z, H, Y && b && !X && !Q ? J.id : void 0),
        el = null != ee && "" !== ee.trim();
    if (X) return null;
    let er = [],
        ea = (function (e) {
            let {
                    iconClassName: s,
                    mute: t,
                    localMute: n,
                    serverMute: l,
                    deaf: r,
                    serverDeaf: c,
                    soundboardMuted: o,
                } = e,
                d = [];
            if (
                (o &&
                    d.push(
                        (0, i.jsx)(
                            m.m,
                            {
                                text: en.intl.string(en.t["9bJYWN"]),
                                children: (0, i.jsx)(p.N, { className: a()(ei.Kk, s), color: "currentColor" }),
                            },
                            "soundboard-mute",
                        ),
                    ),
                t)
            ) {
                let e;
                e = l || n ? f.O : L.z;
                let t = (0, i.jsx)(e, { className: a()(ei.Kk, s, { [ei.DU]: l }), color: "currentColor" });
                d.push(
                    (0, i.jsx)(
                        m.m,
                        {
                            text: n
                                ? en.intl.string(en.t.Q8Uzof)
                                : l
                                  ? en.intl.string(en.t.uLddbQ)
                                  : en.intl.string(en.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || r) {
                let e = c ? O.T : R.c,
                    t = (0, i.jsx)(e, { className: a()(ei.Kk, s, { [ei.DU]: c }), color: "currentColor" });
                d.push(
                    (0, i.jsx)(
                        m.m,
                        { text: c ? en.intl.string(en.t.btxSdB) : en.intl.string(en.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return d;
        })({ iconClassName: M, mute: t, localMute: n, serverMute: r, deaf: c, serverDeaf: u, soundboardMuted: W });
    (I &&
        (l
            ? er.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: en.intl.string(en.t["PXMZ/+"]),
                          children: (0, i.jsx)(x.O, { size: "md", color: "currentColor", className: a()(ei.Kk, M) }),
                      },
                      "video",
                  ),
              )
            : er.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: en.intl.string(en.t.FlNoSV),
                          children: (0, i.jsx)(A.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(ei.Kk, M),
                          }),
                      },
                      "video",
                  ),
              )),
        Z &&
            er.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: en.intl.string(en.t.HFwRpk),
                        children: (0, i.jsx)(g.E, {
                            className: a()(ei.Kk, M),
                            color: h.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != V &&
            er.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: (0, S.A)(V.name),
                        children: (0, i.jsx)(N.k, { size: "md", color: "currentColor", className: a()(ei.Kk, M) }),
                    },
                    "activity",
                ),
            ),
        G === et.f$.XBOX || P === es.J7.XBOX
            ? er.push((0, i.jsx)(q.A, { className: a()(ei.Kk, M) }, "xbox"))
            : G === et.f$.PLAYSTATION || P === es.J7.PLAYSTATION
              ? er.push((0, i.jsx)($.A, { className: a()(ei.Kk, M) }, "playstation"))
              : P === es.J7.QUEST &&
                er.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(ei.Kk, M) }, "quest")),
        v &&
            er.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: en.intl.string(en.t["JH1SJ+"]),
                        children: (0, i.jsx)(E.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(ei.Kk, M),
                        }),
                    },
                    "watch",
                ),
            ));
    let ec = null != F && !F.isEmbedded,
        ed =
            ec && !D
                ? (0, i.jsx)(
                      "div",
                      {
                          className: ei.RL,
                          children: (0, i.jsx)(eo, {
                              application: F,
                              game: w,
                              iconClassName: M,
                              guildId: z,
                              channelId: H,
                              userId: J.id,
                          }),
                      },
                      `${J.id}-game`,
                  )
                : null;
    return (Y && null != ed && er.push(ed),
    b && !el && er.push((0, i.jsx)(y.Ay, { size: y.Ay.Sizes.SMALL }, "stream")),
    D &&
        null != H &&
        B &&
        er.push(
            (0, i.jsx)(
                m.m,
                {
                    text: en.intl.string(en.t.ygslb0),
                    children: (0, i.jsx)(j.D, {
                        onClick: (e) => {
                            (e.stopPropagation(), T.A.stopRinging(H, [J.id]));
                        },
                        children: (0, i.jsx)(d.z, {
                            size: "sm",
                            color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                            className: a()(ei.Kk, M),
                        }),
                    }),
                },
                "ring",
            ),
        ),
    0 !== er.length || 0 !== ea.length || ec || D || el)
        ? (0, i.jsxs)("div", {
              className: a()(ei.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: ei.RL, children: [ea, er] }),
                  !Y && ed,
                  Y &&
                      el &&
                      (0, i.jsx)(m.m, {
                          text: en.intl.string(en.t.dI3q4h),
                          ariaHidden: !0,
                          children: (0, i.jsx)("img", { src: ee, alt: en.intl.string(en.t.cxSpOM), className: ei.Rh }),
                      }),
              ],
          })
        : null;
}
let ec = function (e) {
    let s,
        t,
        n,
        r,
        {
            avatarContainerClass: c = ei.H,
            userNameClassName: o = ei.gr,
            size: d = ee.OSZ.SMALL,
            selected: x = !1,
            disabled: A = !1,
            isOverlay: g = !1,
            ref: h,
            ...N
        } = e,
        {
            onClick: E,
            onKeyDown: j,
            onDoubleClick: p,
            onContextMenu: f,
            onMouseLeave: L,
            onMouseDown: O,
            priority: R,
            speaking: T = !1,
            playingSoundboard: S = !1,
            collapsed: _,
            mute: b,
            localMute: y,
            serverMute: M,
            deaf: P,
            serverDeaf: U,
            guildId: K,
            nick: z,
            isGuest: H,
            flipped: J,
            className: Z,
            overlap: B,
            "aria-label": W,
            ringing: X,
            connecting: $ = !1,
            user: q,
            soundboardMuted: es,
        } = N,
        et = (0, V.A)({ userId: q.id, guildId: K }),
        er = (0, G.a)({ displayNameStyles: et }),
        ec = (0, k.A)(q.id),
        eo = (0, D.v)({
            voiceStatus: (0, C.n$)(T, S),
            voiceDb: ec,
            ...(B ? { spreadDirection: D.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ed, eu] = l.useState(!1),
        em = (() => {
            if (null != W) return W;
            let e = z ?? q.username,
                s = null;
            return ($
                ? (s = en.intl.string(en.t["7LkwqE"]))
                : U
                  ? (s = en.intl.string(en.t.btxSdB))
                  : P
                    ? (s = en.intl.string(en.t.NjmiOL))
                    : y
                      ? (s = en.intl.string(en.t.Q8Uzof))
                      : M
                        ? (s = en.intl.string(en.t.uLddbQ))
                        : b
                          ? (s = en.intl.string(en.t.tjtv3P))
                          : es && (s = en.intl.string(en.t["9bJYWN"])),
            null != s)
                ? en.intl.formatToPlainString(en.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ex = (0, u.bG)([w.A], () => w.A.getProgressForUserId(q.id), [q.id]),
        eA = (0, F.Uk)("VoiceUser") && null != ex;
    return (0, i.jsx)(I.s, {
        ref: h,
        className: a()(Z, {
            [ei.q7]: !0,
            [ei.EF]: B,
            [ei.wH]: x,
            [ei.vk]: null != E,
            [ei.L9]: d === ee.OSZ.SMALL,
            [ei.p8]: d === ee.OSZ.LARGE,
            [ei.r9]: !x && A,
            [ei.jI]: $,
        }),
        onClick: function (e) {
            E?.(e, q);
        },
        onDoubleClick: function (e) {
            p?.(e, q);
        },
        onContextMenu: function (e) {
            f?.(e, q);
        },
        onMouseLeave: function (e) {
            (L?.(e, q), eu(!1));
        },
        onMouseDown: function (e) {
            O?.(e, q);
        },
        onMouseEnter: function () {
            eu(!0);
        },
        onKeyDown: j,
        "aria-label": em,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: a()(ei.Qs, { [ei.zq]: J }),
            children: [
                R && !_
                    ? (0, i.jsx)(m.m, {
                          text: en.intl.string(en.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(ei.G, { [ei.g4]: !b && !M && T }) }),
                      })
                    : null,
                ((s = a()(ei.my, { [ei.Jb]: d === ee.OSZ.LARGE, [ei.dT]: d === ee.OSZ.SMALL, [ei.DF]: X })),
                (t = { backgroundImage: `url(${q.getAvatarURL(K, d === ee.OSZ.LARGE ? 38 : 24)})`, ...eo }),
                X
                    ? (0, i.jsx)(v.Ay, {
                          size: d === ee.OSZ.LARGE ? C._3.SIZE_40 : C._3.SIZE_24,
                          ringing: !0,
                          src: q.getAvatarURL(K, d === ee.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : eA
                      ? (0, i.jsx)(Y, {
                            userId: q.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, ei.Xh, er, { [ei.Pi]: !b && !M && T, [ei.DF]: X }),
                    children: [
                        z ?? Q.Ay.getName(q),
                        H
                            ? (0, i.jsxs)("span", {
                                  className: ei.IW,
                                  children: ["\xa0", en.intl.string(en.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (r = {
                    primaryGuild: q.primaryGuild,
                    userId: q.id,
                    contextGuildId: K,
                    isOverlay: g,
                    disableTooltip: !0,
                    className: a()(ei.fc, g && ei.zW),
                    profileViewedAnalytics: { source: g ? ee.JJy.OVERLAY : ee.ThZ.VOICE_PANEL },
                }),
                !_ || g ? (0, i.jsx)(el, { ...r, children: n }) : null),
                (0, i.jsx)(ea, { disabled: A, ...N, isHovered: ed }),
            ],
        }),
    });
};
function eo(e) {
    let { application: s, game: t, iconClassName: n, guildId: r, channelId: o, userId: d } = e,
        [u, x] = l.useState(!1),
        A = (0, c.K)((e) => x(e));
    return (
        l.useEffect(() => {
            u &&
                b.Ay.trackWithMetadata(ee.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: r,
                    user_id: d,
                });
        }, [s.id, o, r, d, u]),
        (0, i.jsx)(m.m, {
            text: en.intl.formatToPlainString(en.t.Sq9xJ7, { game: s.name }),
            "aria-label": en.intl.formatToPlainString(en.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(P.A, {
                ref: A,
                className: a()(ei.Kk, ei.n8, n),
                game: t ?? s,
                size: P.M.XSMALL,
                onMouseEnter: function () {
                    b.Ay.trackWithMetadata(ee.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: r,
                        game_name: s.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
