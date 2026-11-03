(t.d(s, { Wr: () => ea, Ay: () => eo, Kc: () => ec }), t(321073));
var i,
    n = t(477900),
    l = t(582128),
    r = t(503698),
    a = t.n(r),
    c = t(172218),
    o = t(738678),
    d = t(960027),
    u = t(31300),
    m = t(17928),
    x = t(866665),
    A = t(943812),
    h = t(428689),
    g = t(695366),
    N = t(661531),
    E = t(323384),
    j = t(39623),
    I = t(939249),
    C = t(778712),
    p = t(890856),
    f = t(546861),
    L = t(666654),
    O = t(83107),
    R = t(615675),
    T = t(990836),
    k = t(387755),
    S = t(440594),
    _ = t(323073),
    b = t(666860),
    v = t(863089),
    D = t(85448),
    y = t(556525),
    M = t(402216),
    G = t(268218),
    V = t(609425),
    P = t(73392),
    U = t(769015);
let F = (0, t(945810).mj)({
    name: "2026-09-guild-sidebar-stream-preview",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var K = t(450149),
    w = t(430363),
    z = t(823854),
    H = t(602853),
    J = t(475743),
    Z = t(775602),
    B = t(21161),
    W =
        (((i = {})[(i.OFFERED = 0)] = "OFFERED"),
        (i[(i.ACCEPTED = 1)] = "ACCEPTED"),
        (i[(i.RUNNING = 2)] = "RUNNING"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.FAILED = 4)] = "FAILED"),
        (i[(i.CANCELLED = 5)] = "CANCELLED"),
        i),
    Y = t(818888);
function $(e) {
    let { userId: s, wrapperClassName: t, children: i } = e,
        r = (0, m.bG)([z.A], () => z.A.getProgressForUserId(s), [s]),
        a = (0, m.bG)(
            [z.A],
            () => {
                let e = z.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === W.COMPLETED;
            },
            [s],
        ),
        c = (0, m.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        o = (0, J.Ay)(r),
        d = (0, J.Ay)(a),
        { createMultipleConfettiAt: u } = l.useContext(B.x),
        x = (0, H.r)(N.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        A = (0, H.r)(N.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        h = (0, H.r)(N.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        g = l.useRef(0),
        E = l.useRef(null),
        j = Math.max(0, Math.min(1, r ?? 0)),
        I = j >= 1 ? h : A,
        C = l.useMemo(
            () => ({ backgroundImage: `conic-gradient(${I} ${Math.round(360 * j)}deg, ${x} 0deg)` }),
            [j, I, x],
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
            null != e && u(e.left + e.width / 2, e.top + e.height / 2, p, 250);
        }, [p, u, c]);
    (l.useEffect(() => {
        c || ((o ?? 0) < 1 && j >= 1 && f());
    }, [j, f, o, c]),
        l.useEffect(() => {
            c || !0 !== a || (!0 !== d && f());
        }, [f, a, d, c]));
    let L = l.useCallback(() => {
        if (c || j < 1) return;
        let e = Date.now();
        e - g.current < 4e3 || ((g.current = e), f());
    }, [j, f, c]);
    return (0, n.jsx)("div", {
        className: t,
        onMouseEnter: L,
        children: (0, n.jsxs)("div", {
            ref: E,
            className: Y.R,
            children: [(0, n.jsx)("div", { className: Y.h, style: C }), i],
        }),
    });
}
function q(e) {
    let { userId: s, wrapperClassName: t, children: i } = e,
        l = (0, w.Uk)("VoiceDareAvatarRing"),
        r = (0, m.bG)([z.A], () => z.A.hasVoiceDareForUserId(s), [s]);
    return l && r
        ? (0, n.jsx)($, { userId: s, wrapperClassName: t, children: i })
        : (0, n.jsx)("div", { className: t, children: i });
}
var X = t(790381),
    Q = t(266080),
    ee = t(427262),
    es = t(652215),
    et = t(806931),
    ei = t(544105),
    en = t(105292),
    el = t(254849);
let er = (0, G.Fe)({
    createPromise: () => Promise.all([t.e("910349"), t.e("528966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function ea(e) {
    let { children: s, collapsed: t = !1, className: i } = e;
    return (0, n.jsx)("div", { className: a()(i, el.p_, t ? el.GT : el.m3), role: "group", children: s });
}
function ec(e) {
    let {
            className: s,
            mute: t,
            localMute: i,
            localVideoDisabled: l,
            serverMute: r,
            deaf: c,
            serverDeaf: m,
            collapsed: C,
            video: p,
            isStreaming: b,
            disabled: v,
            isWatching: D,
            ringing: y,
            iconClassName: G,
            embeddedApplication: V,
            otherClientSessionType: P,
            voicePlatform: U,
            application: w,
            game: z,
            guildId: H,
            channelId: J,
            user: Z,
            disconnected: B,
            isHovered: W,
            soundboardMuted: Y,
        } = e,
        $ = C || v,
        { enabled: q } = F.useConfig({ guildId: H ?? "", location: "VoiceUserIcons" }),
        ee = (0, _.UK)(J),
        { previewUrl: es } = (0, K.A)(H, J, q && b && !$ && !ee ? Z.id : void 0),
        er = null != es && "" !== es.trim();
    if ($) return null;
    let ea = [],
        ec = (function (e) {
            let {
                    iconClassName: s,
                    mute: t,
                    localMute: i,
                    serverMute: l,
                    deaf: r,
                    serverDeaf: c,
                    soundboardMuted: o,
                } = e,
                d = [];
            if (
                (o &&
                    d.push(
                        (0, n.jsx)(
                            x.m,
                            {
                                text: en.intl.string(en.t["9bJYWN"]),
                                children: (0, n.jsx)(f.N, { className: a()(el.Kk, s), color: "currentColor" }),
                            },
                            "soundboard-mute",
                        ),
                    ),
                t)
            ) {
                let e;
                e = l || i ? L.O : O.z;
                let t = (0, n.jsx)(e, { className: a()(el.Kk, s, { [el.DU]: l }), color: "currentColor" });
                d.push(
                    (0, n.jsx)(
                        x.m,
                        {
                            text: i
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
                let e = c ? R.T : T.c,
                    t = (0, n.jsx)(e, { className: a()(el.Kk, s, { [el.DU]: c }), color: "currentColor" });
                d.push(
                    (0, n.jsx)(
                        x.m,
                        { text: c ? en.intl.string(en.t.btxSdB) : en.intl.string(en.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return d;
        })({ iconClassName: G, mute: t, localMute: i, serverMute: r, deaf: c, serverDeaf: m, soundboardMuted: Y });
    (p &&
        (l
            ? ea.push(
                  (0, n.jsx)(
                      x.m,
                      {
                          text: en.intl.string(en.t["PXMZ/+"]),
                          children: (0, n.jsx)(A.O, { size: "md", color: "currentColor", className: a()(el.Kk, G) }),
                      },
                      "video",
                  ),
              )
            : ea.push(
                  (0, n.jsx)(
                      x.m,
                      {
                          text: en.intl.string(en.t.FlNoSV),
                          children: (0, n.jsx)(h.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(el.Kk, G),
                          }),
                      },
                      "video",
                  ),
              )),
        B &&
            ea.push(
                (0, n.jsx)(
                    x.m,
                    {
                        text: en.intl.string(en.t.HFwRpk),
                        children: (0, n.jsx)(g.E, {
                            className: a()(el.Kk, G),
                            color: N.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != V &&
            ea.push(
                (0, n.jsx)(
                    x.m,
                    {
                        text: (0, S.A)(V.name),
                        children: (0, n.jsx)(E.k, { size: "md", color: "currentColor", className: a()(el.Kk, G) }),
                    },
                    "activity",
                ),
            ),
        P === ei.f$.XBOX || U === et.J7.XBOX
            ? ea.push((0, n.jsx)(Q.A, { className: a()(el.Kk, G) }, "xbox"))
            : P === ei.f$.PLAYSTATION || U === et.J7.PLAYSTATION
              ? ea.push((0, n.jsx)(X.A, { className: a()(el.Kk, G) }, "playstation"))
              : U === et.J7.QUEST &&
                ea.push((0, n.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(el.Kk, G) }, "quest")),
        D &&
            ea.push(
                (0, n.jsx)(
                    x.m,
                    {
                        text: en.intl.string(en.t["JH1SJ+"]),
                        children: (0, n.jsx)(j.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(el.Kk, G),
                        }),
                    },
                    "watch",
                ),
            ));
    let eo = null != w && !w.isEmbedded,
        eu =
            eo && !y
                ? (0, n.jsx)(
                      "div",
                      {
                          className: el.RL,
                          children: (0, n.jsx)(ed, {
                              application: w,
                              game: z,
                              iconClassName: G,
                              guildId: H,
                              channelId: J,
                              userId: Z.id,
                          }),
                      },
                      `${Z.id}-game`,
                  )
                : null;
    return (q && null != eu && ea.push(eu),
    b && !er && ea.push((0, n.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL }, "stream")),
    y &&
        null != J &&
        W &&
        ea.push(
            (0, n.jsx)(
                x.m,
                {
                    text: en.intl.string(en.t.ygslb0),
                    children: (0, n.jsx)(I.D, {
                        onClick: (e) => {
                            (e.stopPropagation(), k.A.stopRinging(J, [Z.id]));
                        },
                        children: (0, n.jsx)(d.z, {
                            size: "sm",
                            color: N.A.colors.ICON_FEEDBACK_CRITICAL,
                            className: a()(el.Kk, G),
                        }),
                    }),
                },
                "ring",
            ),
        ),
    0 !== ea.length || 0 !== ec.length || eo || y || er)
        ? (0, n.jsxs)("div", {
              className: a()(el.Pt, s),
              children: [
                  (0, n.jsxs)("div", { className: el.RL, children: [ec, ea] }),
                  !q && eu,
                  q &&
                      er &&
                      (0, n.jsx)(x.m, {
                          text: en.intl.string(en.t.dI3q4h),
                          ariaHidden: !0,
                          children: (0, n.jsxs)("div", {
                              className: el.Um,
                              children: [
                                  (0, n.jsx)("img", { src: es, alt: en.intl.string(en.t.cxSpOM), className: el.Rh }),
                                  (0, n.jsx)("div", {
                                      className: el.OF,
                                      children: (0, n.jsx)(u.k, {
                                          height: 10,
                                          width: 10,
                                          size: "custom",
                                          color: N.A.colors.WHITE,
                                      }),
                                  }),
                              ],
                          }),
                      }),
              ],
          })
        : null;
}
let eo = function (e) {
    let s,
        t,
        i,
        r,
        {
            avatarContainerClass: c = el.H,
            userNameClassName: o = el.gr,
            size: d = es.OSZ.SMALL,
            selected: u = !1,
            disabled: A = !1,
            isOverlay: h = !1,
            ref: g,
            ...N
        } = e,
        {
            onClick: E,
            onKeyDown: j,
            onDoubleClick: I,
            onContextMenu: f,
            onMouseLeave: L,
            onMouseDown: O,
            priority: R,
            speaking: T = !1,
            playingSoundboard: k = !1,
            collapsed: S,
            mute: _,
            localMute: b,
            serverMute: M,
            deaf: G,
            serverDeaf: U,
            guildId: F,
            nick: K,
            isGuest: H,
            flipped: J,
            className: Z,
            overlap: B,
            "aria-label": W,
            ringing: Y,
            connecting: $ = !1,
            user: X,
            soundboardMuted: Q,
        } = N,
        et = (0, V.A)({ userId: X.id, guildId: F }),
        ei = (0, P.a)({ displayNameStyles: et }),
        ea = (0, v.A)(X.id),
        eo = (0, y.v)({
            voiceStatus: (0, C.n$)(T, k),
            voiceDb: ea,
            ...(B ? { spreadDirection: y.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ed, eu] = l.useState(!1),
        em = (() => {
            if (null != W) return W;
            let e = K ?? X.username,
                s = null;
            return ($
                ? (s = en.intl.string(en.t["7LkwqE"]))
                : U
                  ? (s = en.intl.string(en.t.btxSdB))
                  : G
                    ? (s = en.intl.string(en.t.NjmiOL))
                    : b
                      ? (s = en.intl.string(en.t.Q8Uzof))
                      : M
                        ? (s = en.intl.string(en.t.uLddbQ))
                        : _
                          ? (s = en.intl.string(en.t.tjtv3P))
                          : Q && (s = en.intl.string(en.t["9bJYWN"])),
            null != s)
                ? en.intl.formatToPlainString(en.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        ex = (0, m.bG)([z.A], () => z.A.getProgressForUserId(X.id), [X.id]),
        eA = (0, w.Uk)("VoiceUser") && null != ex;
    return (0, n.jsx)(p.s, {
        ref: g,
        className: a()(Z, {
            [el.q7]: !0,
            [el.EF]: B,
            [el.wH]: u,
            [el.vk]: null != E,
            [el.L9]: d === es.OSZ.SMALL,
            [el.p8]: d === es.OSZ.LARGE,
            [el.r9]: !u && A,
            [el.jI]: $,
        }),
        onClick: function (e) {
            E?.(e, X);
        },
        onDoubleClick: function (e) {
            I?.(e, X);
        },
        onContextMenu: function (e) {
            f?.(e, X);
        },
        onMouseLeave: function (e) {
            (L?.(e, X), eu(!1));
        },
        onMouseDown: function (e) {
            O?.(e, X);
        },
        onMouseEnter: function () {
            eu(!0);
        },
        onKeyDown: j,
        "aria-label": em,
        focusProps: { offset: { right: 4 } },
        children: (0, n.jsxs)("div", {
            className: a()(el.Qs, { [el.zq]: J }),
            children: [
                R && !S
                    ? (0, n.jsx)(x.m, {
                          text: en.intl.string(en.t.BVK71i),
                          children: (0, n.jsx)("div", { className: a()(el.G, { [el.g4]: !_ && !M && T }) }),
                      })
                    : null,
                ((s = a()(el.my, { [el.Jb]: d === es.OSZ.LARGE, [el.dT]: d === es.OSZ.SMALL, [el.DF]: Y })),
                (t = { backgroundImage: `url(${X.getAvatarURL(F, d === es.OSZ.LARGE ? 38 : 24)})`, ...eo }),
                Y
                    ? (0, n.jsx)(D.Ay, {
                          size: d === es.OSZ.LARGE ? C._3.SIZE_40 : C._3.SIZE_24,
                          ringing: !0,
                          src: X.getAvatarURL(F, d === es.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : eA
                      ? (0, n.jsx)(q, {
                            userId: X.id,
                            wrapperClassName: c,
                            children: (0, n.jsx)("div", { className: s, style: t }),
                        })
                      : (0, n.jsx)("div", { className: a()(c, s), style: t })),
                ((i = (0, n.jsxs)("div", {
                    className: a()(o, el.oF, ei, { [el.Pi]: !_ && !M && T, [el.DF]: Y }),
                    children: [
                        K ?? ee.Ay.getName(X),
                        H
                            ? (0, n.jsxs)("span", {
                                  className: el.IW,
                                  children: ["\xa0", en.intl.string(en.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (r = {
                    primaryGuild: X.primaryGuild,
                    userId: X.id,
                    contextGuildId: F,
                    isOverlay: h,
                    disableTooltip: !0,
                    className: a()(el.fc, h && el.zW),
                    profileViewedAnalytics: { source: h ? es.JJy.OVERLAY : es.ThZ.VOICE_PANEL },
                }),
                !S || h ? (0, n.jsx)(er, { ...r, children: i }) : null),
                (0, n.jsx)(ec, { disabled: A, ...N, isHovered: ed }),
            ],
        }),
    });
};
function ed(e) {
    let { application: s, game: t, iconClassName: i, guildId: r, channelId: o, userId: d } = e,
        [u, m] = l.useState(!1),
        A = (0, c.K)((e) => m(e));
    return (
        l.useEffect(() => {
            u &&
                b.Ay.trackWithMetadata(es.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: r,
                    user_id: d,
                });
        }, [s.id, o, r, d, u]),
        (0, n.jsx)(x.m, {
            text: en.intl.formatToPlainString(en.t.Sq9xJ7, { game: s.name }),
            "aria-label": en.intl.formatToPlainString(en.t.Sq9xJ7, { game: s.name }),
            children: (0, n.jsx)(U.A, {
                ref: A,
                className: a()(el.Kk, el.Gt, i),
                game: t ?? s,
                size: U.M.XSMALL,
                onMouseEnter: function () {
                    b.Ay.trackWithMetadata(es.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
