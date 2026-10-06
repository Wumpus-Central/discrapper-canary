(t.d(s, { Wr: () => ei, Ay: () => er, Kc: () => el }), t(321073));
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
    S = t(666860),
    _ = t(863089),
    k = t(85448),
    b = t(556525),
    v = t(402216),
    D = t(268218),
    y = t(609425),
    M = t(73392),
    V = t(769015);
let G = (0, t(945810).mj)({
    name: "2026-09-guild-sidebar-stream-preview",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = t(450149),
    U = t(430363),
    F = t(823854),
    K = t(602853),
    w = t(475743),
    z = t(775602),
    H = t(21161),
    Z =
        (((n = {})[(n.OFFERED = 0)] = "OFFERED"),
        (n[(n.ACCEPTED = 1)] = "ACCEPTED"),
        (n[(n.RUNNING = 2)] = "RUNNING"),
        (n[(n.COMPLETED = 3)] = "COMPLETED"),
        (n[(n.FAILED = 4)] = "FAILED"),
        (n[(n.CANCELLED = 5)] = "CANCELLED"),
        n),
    B = t(818888);
function J(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        r = (0, u.bG)([F.A], () => F.A.getProgressForUserId(s), [s]),
        a = (0, u.bG)(
            [F.A],
            () => {
                let e = F.A.getTrackingEntryForUserId(s);
                return e?.presence?.phase === Z.COMPLETED;
            },
            [s],
        ),
        c = (0, u.bG)([z.Ay], () => z.Ay.useReducedMotion),
        o = (0, w.Ay)(r),
        d = (0, w.Ay)(a),
        { createMultipleConfettiAt: m } = l.useContext(H.x),
        x = (0, K.r)(h.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        A = (0, K.r)(h.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        g = (0, K.r)(h.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
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
            className: B.R,
            children: [(0, i.jsx)("div", { className: B.h, style: I }), n],
        }),
    });
}
function X(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, U.Uk)("VoiceDareAvatarRing"),
        r = (0, u.bG)([F.A], () => F.A.hasVoiceDareForUserId(s), [s]);
    return l && r
        ? (0, i.jsx)(J, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var q = t(790381),
    W = t(266080),
    $ = t(427262),
    Q = t(652215),
    Y = t(806931),
    ee = t(544105),
    es = t(375708),
    et = t(254849);
let en = (0, D.Fe)({
    createPromise: () => Promise.all([t.e("910349"), t.e("528966")]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function ei(e) {
    let { children: s, collapsed: t = !1, className: n } = e;
    return (0, i.jsx)("div", { className: a()(n, et.p_, t ? et.GT : et.m3), role: "group", children: s });
}
function el(e) {
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
            isStreaming: S,
            disabled: _,
            isWatching: k,
            ringing: b,
            iconClassName: D,
            embeddedApplication: y,
            otherClientSessionType: M,
            voicePlatform: V,
            application: U,
            game: F,
            guildId: K,
            channelId: w,
            user: z,
            disconnected: H,
            isHovered: Z,
        } = e,
        B = C || _,
        { enabled: J } = G.useConfig({ guildId: K ?? "", location: "VoiceUserIcons" }),
        { previewUrl: X } = (0, P.A)(K, w, J && S && !B ? z.id : void 0),
        $ = null != X && "" !== X.trim();
    if (B) return null;
    let Q = [],
        en = (function (e) {
            let { iconClassName: s, mute: t, localMute: n, serverMute: l, deaf: r, serverDeaf: c } = e,
                o = [];
            if (t) {
                let e;
                e = l || n ? p.O : f.z;
                let t = (0, i.jsx)(e, { className: a()(et.Kk, s, { [et.DU]: l }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        {
                            text: n
                                ? es.intl.string(es.t.Q8Uzof)
                                : l
                                  ? es.intl.string(es.t.uLddbQ)
                                  : es.intl.string(es.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (c || r) {
                let e = c ? L.T : O.c,
                    t = (0, i.jsx)(e, { className: a()(et.Kk, s, { [et.DU]: c }), color: "currentColor" });
                o.push(
                    (0, i.jsx)(
                        m.m,
                        { text: c ? es.intl.string(es.t.btxSdB) : es.intl.string(es.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return o;
        })({ iconClassName: D, mute: t, localMute: n, serverMute: r, deaf: c, serverDeaf: u });
    (I &&
        (l
            ? Q.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: es.intl.string(es.t["PXMZ/+"]),
                          children: (0, i.jsx)(x.O, {
                              size: "md",
                              color: "currentColor",
                              className: a()(et.Kk, D),
                              colorClass: et.of,
                          }),
                      },
                      "video",
                  ),
              )
            : Q.push(
                  (0, i.jsx)(
                      m.m,
                      {
                          text: es.intl.string(es.t.FlNoSV),
                          children: (0, i.jsx)(A.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: a()(et.Kk, D),
                          }),
                      },
                      "video",
                  ),
              )),
        H &&
            Q.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: es.intl.string(es.t.HFwRpk),
                        children: (0, i.jsx)(g.E, {
                            className: a()(et.Kk, D),
                            color: h.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != y &&
            Q.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: (0, T.A)(y.name),
                        children: (0, i.jsx)(N.k, { size: "md", color: "currentColor", className: a()(et.Kk, D) }),
                    },
                    "activity",
                ),
            ),
        M === ee.f$.XBOX || V === Y.J7.XBOX
            ? Q.push((0, i.jsx)(W.A, { className: a()(et.Kk, D) }, "xbox"))
            : M === ee.f$.PLAYSTATION || V === Y.J7.PLAYSTATION
              ? Q.push((0, i.jsx)(q.A, { className: a()(et.Kk, D) }, "playstation"))
              : V === Y.J7.QUEST &&
                Q.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(et.Kk, D) }, "quest")),
        k &&
            Q.push(
                (0, i.jsx)(
                    m.m,
                    {
                        text: es.intl.string(es.t["JH1SJ+"]),
                        children: (0, i.jsx)(E.EyeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(et.Kk, D),
                        }),
                    },
                    "watch",
                ),
            ));
    let ei = null != U && !U.isEmbedded,
        el =
            ei && !b
                ? (0, i.jsx)(
                      "div",
                      {
                          className: et.RL,
                          children: (0, i.jsx)(ea, {
                              application: U,
                              game: F,
                              iconClassName: D,
                              guildId: K,
                              channelId: w,
                              userId: z.id,
                          }),
                      },
                      `${z.id}-game`,
                  )
                : null;
    return (J && null != el && Q.push(el),
    S && !$ && Q.push((0, i.jsx)(v.Ay, { size: v.Ay.Sizes.SMALL }, "stream")),
    b &&
        null != w &&
        Z &&
        Q.push(
            (0, i.jsx)(
                m.m,
                {
                    text: es.intl.string(es.t.ygslb0),
                    children: (0, i.jsx)(j.D, {
                        onClick: (e) => {
                            (e.stopPropagation(), R.A.stopRinging(w, [z.id]));
                        },
                        children: (0, i.jsx)(d.z, {
                            size: "sm",
                            color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                            className: a()(et.Kk, D),
                        }),
                    }),
                },
                "ring",
            ),
        ),
    0 !== Q.length || 0 !== en.length || ei || b || $)
        ? (0, i.jsxs)("div", {
              className: a()(et.Pt, s),
              children: [
                  (0, i.jsxs)("div", { className: et.RL, children: [en, Q] }),
                  !J && el,
                  J &&
                      $ &&
                      (0, i.jsx)(m.m, {
                          text: es.intl.string(es.t.dI3q4h),
                          ariaHidden: !0,
                          children: (0, i.jsx)("img", { src: X, alt: es.intl.string(es.t.cxSpOM), className: et.Rh }),
                      }),
              ],
          })
        : null;
}
let er = function (e) {
    let s,
        t,
        n,
        r,
        {
            avatarContainerClass: c = et.H,
            userNameClassName: o = et.gr,
            size: d = Q.OSZ.SMALL,
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
            mute: v,
            localMute: D,
            serverMute: V,
            deaf: G,
            serverDeaf: P,
            guildId: K,
            nick: w,
            isGuest: z,
            flipped: H,
            className: Z,
            overlap: B,
            "aria-label": J,
            ringing: q,
            connecting: W = !1,
            user: Y,
        } = N,
        ee = (0, y.A)({ userId: Y.id, guildId: K }),
        ei = (0, M.a)({ displayNameStyles: ee }),
        er = (0, _.A)(Y.id),
        ea = (0, b.v)({
            isSpeaking: T,
            voiceDb: er,
            ...(B ? { spreadDirection: b.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [ec, eo] = l.useState(!1),
        ed = (() => {
            if (null != J) return J;
            let e = w ?? Y.username,
                s = null;
            return (W
                ? (s = es.intl.string(es.t["7LkwqE"]))
                : P
                  ? (s = es.intl.string(es.t.btxSdB))
                  : G
                    ? (s = es.intl.string(es.t.NjmiOL))
                    : D
                      ? (s = es.intl.string(es.t.Q8Uzof))
                      : V
                        ? (s = es.intl.string(es.t.uLddbQ))
                        : v && (s = es.intl.string(es.t.tjtv3P)),
            null != s)
                ? es.intl.formatToPlainString(es.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        eu = (0, u.bG)([F.A], () => F.A.getProgressForUserId(Y.id), [Y.id]),
        em = (0, U.Uk)("VoiceUser") && null != eu;
    return (0, i.jsx)(I.s, {
        ref: h,
        className: a()(Z, {
            [et.q7]: !0,
            [et.EF]: B,
            [et.wH]: x,
            [et.vk]: null != E,
            [et.L9]: d === Q.OSZ.SMALL,
            [et.p8]: d === Q.OSZ.LARGE,
            [et.r9]: !x && A,
            [et.jI]: W,
        }),
        onClick: function (e) {
            E?.(e, Y);
        },
        onDoubleClick: function (e) {
            p?.(e, Y);
        },
        onContextMenu: function (e) {
            f?.(e, Y);
        },
        onMouseLeave: function (e) {
            (L?.(e, Y), eo(!1));
        },
        onMouseDown: function (e) {
            O?.(e, Y);
        },
        onMouseEnter: function () {
            eo(!0);
        },
        onKeyDown: j,
        "aria-label": ed,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: a()(et.Qs, { [et.zq]: H }),
            children: [
                R && !S
                    ? (0, i.jsx)(m.m, {
                          text: es.intl.string(es.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(et.G, { [et.g4]: !v && !V && T }) }),
                      })
                    : null,
                ((s = a()(et.my, { [et.Jb]: d === Q.OSZ.LARGE, [et.dT]: d === Q.OSZ.SMALL, [et.DF]: q })),
                (t = { backgroundImage: `url(${Y.getAvatarURL(K, d === Q.OSZ.LARGE ? 38 : 24)})`, ...ea }),
                q
                    ? (0, i.jsx)(k.Ay, {
                          size: d === Q.OSZ.LARGE ? C._3.SIZE_40 : C._3.SIZE_24,
                          ringing: !0,
                          src: Y.getAvatarURL(K, d === Q.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : em
                      ? (0, i.jsx)(X, {
                            userId: Y.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, et.Xh, ei, { [et.Pi]: !v && !V && T, [et.DF]: q }),
                    children: [
                        w ?? $.Ay.getName(Y),
                        z
                            ? (0, i.jsxs)("span", {
                                  className: et.IW,
                                  children: ["\xa0", es.intl.string(es.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (r = {
                    primaryGuild: Y.primaryGuild,
                    userId: Y.id,
                    contextGuildId: K,
                    isOverlay: g,
                    disableTooltip: !0,
                    className: a()(et.fc, g && et.zW),
                    profileViewedAnalytics: { source: g ? Q.JJy.OVERLAY : Q.ThZ.VOICE_PANEL },
                }),
                !S || g ? (0, i.jsx)(en, { ...r, children: n }) : null),
                (0, i.jsx)(el, { disabled: A, ...N, isHovered: ec }),
            ],
        }),
    });
};
function ea(e) {
    let { application: s, game: t, iconClassName: n, guildId: r, channelId: o, userId: d } = e,
        [u, x] = l.useState(!1),
        A = (0, c.K)((e) => x(e));
    return (
        l.useEffect(() => {
            u &&
                S.Ay.trackWithMetadata(Q.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: r,
                    user_id: d,
                });
        }, [s.id, o, r, d, u]),
        (0, i.jsx)(m.m, {
            text: es.intl.formatToPlainString(es.t.Sq9xJ7, { game: s.name }),
            "aria-label": es.intl.formatToPlainString(es.t.Sq9xJ7, { game: s.name }),
            children: (0, i.jsx)(V.A, {
                ref: A,
                className: a()(et.Kk, et.n8, n),
                game: t ?? s,
                size: V.M.XSMALL,
                onMouseEnter: function () {
                    S.Ay.trackWithMetadata(Q.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
