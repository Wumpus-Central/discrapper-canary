(t.d(s, { Wr: () => el, Ay: () => ea, Kc: () => er }), t(321073));
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
    p = t(666654),
    f = t(83107),
    L = t(615675),
    O = t(990836),
    R = t(387755),
    T = t(440594),
    S = t(323073),
    _ = t(666860),
    k = t(863089),
    b = t(85448),
    v = t(556525),
    D = t(402216),
    y = t(268218),
    M = t(609425),
    V = t(73392),
    G = t(769015);
let P = (0, t(945810).mj)({
    name: "2026-09-guild-sidebar-stream-preview",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var U = t(450149),
    K = t(430363),
    F = t(823854),
    w = t(602853),
    z = t(475743),
    H = t(775602),
    Z = t(21161),
    B =
        (((n = {})[(n.OFFERED = 0)] = "OFFERED"),
        (n[(n.ACCEPTED = 1)] = "ACCEPTED"),
        (n[(n.RUNNING = 2)] = "RUNNING"),
        (n[(n.COMPLETED = 3)] = "COMPLETED"),
        (n[(n.FAILED = 4)] = "FAILED"),
        (n[(n.CANCELLED = 5)] = "CANCELLED"),
        n),
    J = t(818888);
function X(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        r = (0, u.bG)([F.A], () => F.A.getProgressForUserId(s), [s]),
        a = (0, u.bG)(
            [F.A],
            () => {
                let e = F.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === B.COMPLETED;
            },
            [s],
        ),
        c = (0, u.bG)([H.Ay], () => H.Ay.useReducedMotion),
        o = (0, z.Ay)(r),
        d = (0, z.Ay)(a),
        { createMultipleConfettiAt: m } = l.useContext(Z.x),
        x = (0, w.r)(h.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        A = (0, w.r)(h.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        g = (0, w.r)(h.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
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
            className: J.R,
            children: [(0, i.jsx)("div", { className: J.h, style: I }), n],
        }),
    });
}
function q(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, K.Uk)("VoiceDareAvatarRing"),
        r = (0, u.bG)([F.A], () => F.A.hasVoiceDareForUserId(s), [s]);
    return l && r
        ? (0, i.jsx)(X, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var W = t(790381),
    $ = t(266080),
    Q = t(427262),
    Y = t(652215),
    ee = t(806931),
    es = t(544105),
    et = t(660183),
    en = t(254849);
let ei = (0, y.Fe)({
    createPromise: () => Promise.all([t.e("910349"), t.e("528966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function el(e) {
    let { children: s, collapsed: t = !1, className: n } = e;
    return (0, i.jsx)("div", { className: a()(n, en.p_, t ? en.GT : en.m3), role: "group", children: s });
}
function er(e) {
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
            isStreaming: _,
            disabled: k,
            isWatching: b,
            ringing: v,
            iconClassName: y,
            embeddedApplication: M,
            otherClientSessionType: V,
            voicePlatform: G,
            application: K,
            game: F,
            guildId: w,
            channelId: z,
            user: H,
            disconnected: Z,
            isHovered: B,
        } = e,
        J = C || k,
        { enabled: X } = P.useConfig({ guildId: w ?? "", location: "VoiceUserIcons" }),
        q = (0, S.UK)(z),
        { previewUrl: Q } = (0, U.A)(w, z, X && _ && !J && !q ? H.id : void 0),
        Y = null != Q && "" !== Q.trim();
    if (J) return null;
    let ei = [],
        el = (function (e) {
            let { iconClassName: s, mute: t, localMute: n, serverMute: l, deaf: r, serverDeaf: c } = e,
                o = [];
            if (t) {
                let e;
                e = l || n ? p.O : f.z;
                let t = (0, i.jsx)(e, { className: a()(en.Kk, s, { [en.DU]: l }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        {
                            text: n
                                ? et.intl.string(et.t.Q8Uzof)
                                : l
                                  ? et.intl.string(et.t.uLddbQ)
                                  : et.intl.string(et.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || r) {
                let e = c ? L.T : O.c,
                    t = (0, i.jsx)(e, { className: a()(en.Kk, s, { [en.DU]: c }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        { text: c ? et.intl.string(et.t.btxSdB) : et.intl.string(et.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: y, mute: t, localMute: n, serverMute: r, deaf: c, serverDeaf: u });
    (I &&
        (l
            ? ei.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: et.intl.string(et.t["PXMZ/+"]),
                          children: (0, i.jsx)(x.O, {
                              size: "md",
                              color: "currentColor",
                              className: a()(en.Kk, y),
                              colorClass: en.of,
                          }),
                      },
                      "video",
                  ),
              )
            : ei.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: et.intl.string(et.t.FlNoSV),
                          children: (0, i.jsx)(A.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(en.Kk, y),
                          }),
                      },
                      "video",
                  ),
              )),
        Z &&
            ei.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: et.intl.string(et.t.HFwRpk),
                        children: (0, i.jsx)(g.E, {
                            className: a()(en.Kk, y),
                            color: h.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            ei.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: (0, T.A)(M.name),
                        children: (0, i.jsx)(N.k, { size: "md", color: "currentColor", className: a()(en.Kk, y) }),
                    },
                    "activity",
                ),
            ),
        V === es.f$.XBOX || G === ee.J7.XBOX
            ? ei.push((0, i.jsx)($.A, { className: a()(en.Kk, y) }, "xbox"))
            : V === es.f$.PLAYSTATION || G === ee.J7.PLAYSTATION
              ? ei.push((0, i.jsx)(W.A, { className: a()(en.Kk, y) }, "playstation"))
              : G === ee.J7.QUEST &&
                ei.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(en.Kk, y) }, "quest")),
        b &&
            ei.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: et.intl.string(et.t["JH1SJ+"]),
                        children: (0, i.jsx)(E.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(en.Kk, y),
                        }),
                    },
                    "watch",
                ),
            ));
    let er = null != K && !K.isEmbedded,
        ea =
            er && !v
                ? (0, i.jsx)(
                      "div",
                      {
                          className: en.RL,
                          children: (0, i.jsx)(ec, {
                              application: K,
                              game: F,
                              iconClassName: y,
                              guildId: w,
                              channelId: z,
                              userId: H.id,
                          }),
                      },
                      `${H.id}-game`,
                  )
                : null;
    return (X && null != ea && ei.push(ea),
    _ && !Y && ei.push((0, i.jsx)(D.Ay, { size: D.Ay.Sizes.SMALL }, "stream")),
    v &&
        null != z &&
        B &&
        ei.push(
            (0, i.jsx)(
                m.m,
                {
                    text: et.intl.string(et.t.ygslb0),
                    children: (0, i.jsx)(j.D, {
                        onClick: (e) => {
                            (e.stopPropagation(), R.A.stopRinging(z, [H.id]));
                        },
                        children: (0, i.jsx)(d.z, {
                            size: "sm",
                            color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                            className: a()(en.Kk, y),
                        }),
                    }),
                },
                "ring",
            ),
        ),
    0 !== ei.length || 0 !== el.length || er || v || Y)
        ? (0, i.jsxs)("div", {
              className: a()(en.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: en.RL, children: [el, ei] }),
                  !X && ea,
                  X &&
                      Y &&
                      (0, i.jsx)(m.m, {
                          text: et.intl.string(et.t.dI3q4h),
                          ariaHidden: !0,
                          children: (0, i.jsx)("img", { src: Q, alt: et.intl.string(et.t.cxSpOM), className: en.Rh }),
                      }),
              ],
          })
        : null;
}
let ea = function (e) {
    let s,
        t,
        n,
        r,
        {
            avatarContainerClass: c = en.H,
            userNameClassName: o = en.gr,
            size: d = Y.OSZ.SMALL,
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
            collapsed: S,
            mute: _,
            localMute: D,
            serverMute: y,
            deaf: G,
            serverDeaf: P,
            guildId: U,
            nick: w,
            isGuest: z,
            flipped: H,
            className: Z,
            overlap: B,
            "aria-label": J,
            ringing: X,
            connecting: W = !1,
            user: $,
        } = N,
        ee = (0, M.A)({ userId: $.id, guildId: U }),
        es = (0, V.a)({ displayNameStyles: ee }),
        el = (0, k.A)($.id),
        ea = (0, v.v)({
            isSpeaking: T,
            voiceDb: el,
            ...(B ? { spreadDirection: v.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ec, eo] = l.useState(!1),
        ed = (() => {
            if (null != J) return J;
            let e = w ?? $.username,
                s = null;
            return (W
                ? (s = et.intl.string(et.t["7LkwqE"]))
                : P
                  ? (s = et.intl.string(et.t.btxSdB))
                  : G
                    ? (s = et.intl.string(et.t.NjmiOL))
                    : D
                      ? (s = et.intl.string(et.t.Q8Uzof))
                      : y
                        ? (s = et.intl.string(et.t.uLddbQ))
                        : _ && (s = et.intl.string(et.t.tjtv3P)),
            null != s)
                ? et.intl.formatToPlainString(et.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        eu = (0, u.bG)([F.A], () => F.A.getProgressForUserId($.id), [$.id]),
        em = (0, K.Uk)("VoiceUser") && null != eu;
    return (0, i.jsx)(I.s, {
        ref: h,
        className: a()(Z, {
            [en.q7]: !0,
            [en.EF]: B,
            [en.wH]: x,
            [en.vk]: null != E,
            [en.L9]: d === Y.OSZ.SMALL,
            [en.p8]: d === Y.OSZ.LARGE,
            [en.r9]: !x && A,
            [en.jI]: W,
        }),
        onClick: function (e) {
            E?.(e, $);
        },
        onDoubleClick: function (e) {
            p?.(e, $);
        },
        onContextMenu: function (e) {
            f?.(e, $);
        },
        onMouseLeave: function (e) {
            (L?.(e, $), eo(!1));
        },
        onMouseDown: function (e) {
            O?.(e, $);
        },
        onMouseEnter: function () {
            eo(!0);
        },
        onKeyDown: j,
        "aria-label": ed,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: a()(en.Qs, { [en.zq]: H }),
            children: [
                R && !S
                    ? (0, i.jsx)(m.m, {
                          text: et.intl.string(et.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(en.G, { [en.g4]: !_ && !y && T }) }),
                      })
                    : null,
                ((s = a()(en.my, { [en.Jb]: d === Y.OSZ.LARGE, [en.dT]: d === Y.OSZ.SMALL, [en.DF]: X })),
                (t = { backgroundImage: `url(${$.getAvatarURL(U, d === Y.OSZ.LARGE ? 38 : 24)})`, ...ea }),
                X
                    ? (0, i.jsx)(b.Ay, {
                          size: d === Y.OSZ.LARGE ? C._3.SIZE_40 : C._3.SIZE_24,
                          ringing: !0,
                          src: $.getAvatarURL(U, d === Y.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : em
                      ? (0, i.jsx)(q, {
                            userId: $.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, en.Xh, es, { [en.Pi]: !_ && !y && T, [en.DF]: X }),
                    children: [
                        w ?? Q.Ay.getName($),
                        z
                            ? (0, i.jsxs)("span", {
                                  className: en.IW,
                                  children: ["\xa0", et.intl.string(et.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (r = {
                    primaryGuild: $.primaryGuild,
                    userId: $.id,
                    contextGuildId: U,
                    isOverlay: g,
                    disableTooltip: !0,
                    className: a()(en.fc, g && en.zW),
                    profileViewedAnalytics: { source: g ? Y.JJy.OVERLAY : Y.ThZ.VOICE_PANEL },
                }),
                !S || g ? (0, i.jsx)(ei, { ...r, children: n }) : null),
                (0, i.jsx)(er, { disabled: A, ...N, isHovered: ec }),
            ],
        }),
    });
};
function ec(e) {
    let { application: s, game: t, iconClassName: n, guildId: r, channelId: o, userId: d } = e,
        [u, x] = l.useState(!1),
        A = (0, c.K)((e) => x(e));
    return (
        l.useEffect(() => {
            u &&
                _.Ay.trackWithMetadata(Y.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: r,
                    user_id: d,
                });
        }, [s.id, o, r, d, u]),
        (0, i.jsx)(m.m, {
            text: et.intl.formatToPlainString(et.t.Sq9xJ7, { game: s.name }),
            "aria-label": et.intl.formatToPlainString(et.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(G.A, {
                ref: A,
                className: a()(en.Kk, en.n8, n),
                game: t ?? s,
                size: G.M.XSMALL,
                onMouseEnter: function () {
                    _.Ay.trackWithMetadata(Y.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
