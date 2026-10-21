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
    v = t(85448),
    b = t(556525),
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
function $(e) {
    let { userId: s, wrapperClassName: t, children: n } = e,
        l = (0, K.Uk)("VoiceDareAvatarRing"),
        r = (0, u.bG)([F.A], () => F.A.hasVoiceDareForUserId(s), [s]);
    return l && r
        ? (0, i.jsx)(X, { userId: s, wrapperClassName: t, children: n })
        : (0, i.jsx)("div", { className: t, children: n });
}
var q = t(790381),
    W = t(266080),
    Q = t(427262),
    Y = t(652215),
    ee = t(806931),
    es = t(544105),
    et = t(105292),
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
            isWatching: v,
            ringing: b,
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
        $ = (0, S.UK)(z),
        { previewUrl: Q } = (0, U.A)(w, z, X && _ && !J && !$ ? H.id : void 0),
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
            ? ei.push((0, i.jsx)(W.A, { className: a()(en.Kk, y) }, "xbox"))
            : V === es.f$.PLAYSTATION || G === ee.J7.PLAYSTATION
              ? ei.push((0, i.jsx)(q.A, { className: a()(en.Kk, y) }, "playstation"))
              : G === ee.J7.QUEST &&
                ei.push((0, i.jsx)(o.G, { size: "xs", color: "currentColor", className: a()(en.Kk, y) }, "quest")),
        v &&
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
            er && !b
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
    b &&
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
    0 !== ei.length || 0 !== el.length || er || b || Y)
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
            playingSoundboard: S = !1,
            collapsed: _,
            mute: D,
            localMute: y,
            serverMute: G,
            deaf: P,
            serverDeaf: U,
            guildId: w,
            nick: z,
            isGuest: H,
            flipped: Z,
            className: B,
            overlap: J,
            "aria-label": X,
            ringing: q,
            connecting: W = !1,
            user: ee,
        } = N,
        es = (0, M.A)({ userId: ee.id, guildId: w }),
        el = (0, V.a)({ displayNameStyles: es }),
        ea = (0, k.A)(ee.id),
        ec = (0, b.v)({
            voiceStatus: (0, C.n$)(T, S),
            voiceDb: ea,
            ...(J ? { spreadDirection: b.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [eo, ed] = l.useState(!1),
        eu = (() => {
            if (null != X) return X;
            let e = z ?? ee.username,
                s = null;
            return (W
                ? (s = et.intl.string(et.t["7LkwqE"]))
                : U
                  ? (s = et.intl.string(et.t.btxSdB))
                  : P
                    ? (s = et.intl.string(et.t.NjmiOL))
                    : y
                      ? (s = et.intl.string(et.t.Q8Uzof))
                      : G
                        ? (s = et.intl.string(et.t.uLddbQ))
                        : D && (s = et.intl.string(et.t.tjtv3P)),
            null != s)
                ? et.intl.formatToPlainString(et.t["1+MVBP"], { userName: e, status: s })
                : e;
        })(),
        em = (0, u.bG)([F.A], () => F.A.getProgressForUserId(ee.id), [ee.id]),
        ex = (0, K.Uk)("VoiceUser") && null != em;
    return (0, i.jsx)(I.s, {
        ref: h,
        className: a()(B, {
            [en.q7]: !0,
            [en.EF]: J,
            [en.wH]: x,
            [en.vk]: null != E,
            [en.L9]: d === Y.OSZ.SMALL,
            [en.p8]: d === Y.OSZ.LARGE,
            [en.r9]: !x && A,
            [en.jI]: W,
        }),
        onClick: function (e) {
            E?.(e, ee);
        },
        onDoubleClick: function (e) {
            p?.(e, ee);
        },
        onContextMenu: function (e) {
            f?.(e, ee);
        },
        onMouseLeave: function (e) {
            (L?.(e, ee), ed(!1));
        },
        onMouseDown: function (e) {
            O?.(e, ee);
        },
        onMouseEnter: function () {
            ed(!0);
        },
        onKeyDown: j,
        "aria-label": eu,
        focusProps: { offset: { right: 4 } },
        children: (0, i.jsxs)("div", {
            className: a()(en.Qs, { [en.zq]: Z }),
            children: [
                R && !_
                    ? (0, i.jsx)(m.m, {
                          text: et.intl.string(et.t.BVK71i),
                          children: (0, i.jsx)("div", { className: a()(en.G, { [en.g4]: !D && !G && T }) }),
                      })
                    : null,
                ((s = a()(en.my, { [en.Jb]: d === Y.OSZ.LARGE, [en.dT]: d === Y.OSZ.SMALL, [en.DF]: q })),
                (t = { backgroundImage: `url(${ee.getAvatarURL(w, d === Y.OSZ.LARGE ? 38 : 24)})`, ...ec }),
                q
                    ? (0, i.jsx)(v.Ay, {
                          size: d === Y.OSZ.LARGE ? C._3.SIZE_40 : C._3.SIZE_24,
                          ringing: !0,
                          src: ee.getAvatarURL(w, d === Y.OSZ.LARGE ? 40 : 24),
                          className: a()(c, s),
                      })
                    : ex
                      ? (0, i.jsx)($, {
                            userId: ee.id,
                            wrapperClassName: c,
                            children: (0, i.jsx)("div", { className: s, style: t }),
                        })
                      : (0, i.jsx)("div", { className: a()(c, s), style: t })),
                ((n = (0, i.jsxs)("div", {
                    className: a()(o, en.Xh, el, { [en.Pi]: !D && !G && T, [en.DF]: q }),
                    children: [
                        z ?? Q.Ay.getName(ee),
                        H
                            ? (0, i.jsxs)("span", {
                                  className: en.IW,
                                  children: ["\xa0", et.intl.string(et.t["pFO/Ph"])],
                              })
                            : "",
                    ],
                })),
                (r = {
                    primaryGuild: ee.primaryGuild,
                    userId: ee.id,
                    contextGuildId: w,
                    isOverlay: g,
                    disableTooltip: !0,
                    className: a()(en.fc, g && en.zW),
                    profileViewedAnalytics: { source: g ? Y.JJy.OVERLAY : Y.ThZ.VOICE_PANEL },
                }),
                !_ || g ? (0, i.jsx)(ei, { ...r, children: n }) : null),
                (0, i.jsx)(er, { disabled: A, ...N, isHovered: eo }),
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
