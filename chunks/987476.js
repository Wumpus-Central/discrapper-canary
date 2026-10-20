l.d(t, { m: () => nF });
var n,
    i = l(477900),
    s = l(582128),
    a = l(62617);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var d = l(593673),
    c = l(661531);
function o(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/58e54efe82f33e76cc9388d9907b1684625b43f15aa5bc7f85752f0f3d4e9be7.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var u = l(369606),
    m = l(866665),
    x = l(408278),
    h = l(26430),
    f = l(174459),
    g = l(562073),
    j = l(503698),
    p = l.n(j),
    v = l(289873),
    _ = l(738188),
    A = l(834730),
    N = l(331322),
    b = l(297264),
    E = l(105292),
    I = l(448492);
function S() {
    return (0, i.jsx)("div", {
        className: I.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": E.intl.string(E.t.ZTNur7) }),
    });
}
function C() {
    return (0, i.jsxs)("div", {
        className: I.w,
        role: "alert",
        children: [
            (0, i.jsx)(_.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: E.intl.string(E.t.F8FvUy) }),
        ],
    });
}
function y(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(N.B, {
        className: p()(I.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            null != l && (0, i.jsx)(l, { alt: "", ariaHidden: !0, width: 160 }),
            (0, i.jsxs)(N.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(b.D, { variant: "heading-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            a,
        ],
    });
}
var T = l(441920);
function k(e) {
    let { graphic: t, title: l, subtitle: n, minHeight: a } = e,
        r = s.useMemo(() => (null != a ? { minHeight: `${a}px` } : void 0), [a]);
    return (0, i.jsxs)(N.B, {
        className: T.VH,
        style: r,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsx)("div", { className: T.fA, children: t }),
            (0, i.jsxs)(N.B, {
                className: T.C,
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(b.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
var D = l(17928),
    R = l(364522),
    w = l(939249),
    L = l(663417),
    M = l(140735),
    U = l(97808),
    G = l(778712),
    P = l(463930),
    O = l(478016),
    B = l(821609),
    W = l(80682),
    z = l(827827),
    F = l(461213),
    H = l(287809),
    K = l(58703),
    q = l(848966);
function Y(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? q.oT : q.yf });
}
function $(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? q.sU : q._u, children: l });
}
var Q = l(606072),
    V = l(775602);
function Z() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, D.bG)([V.Ay], () => V.Ay.useReducedMotion);
    s.useEffect(() => {
        if (null == e || null == l) return;
        let t = new IntersectionObserver(
            (e) => {
                var t, l;
                let n,
                    i,
                    [s] = e;
                if (s?.rootBounds == null) return;
                let { clippedPx: r, floatTo: d } =
                    ((t = s.boundingClientRect),
                    (n = Math.max(0, (l = s.rootBounds).top - t.top)),
                    { clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)), floatTo: n > i ? "top" : "bottom" });
                a(() => (r <= 1 ? "visible" : d));
            },
            { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
        );
        return (t.observe(l), () => t.disconnect());
    }, [e, l]);
    let d = s.useCallback(() => {
        if (null == e || null == l) return;
        let t = e.getBoundingClientRect(),
            n = l.getBoundingClientRect();
        e.scrollTo({ top: e.scrollTop + n.top - t.top - (t.height - n.height) / 2, behavior: r ? "auto" : "smooth" });
    }, [e, l, r]);
    return {
        scrollerRef: t,
        scrollerNode: e,
        userRowRef: n,
        floatingRowPosition: "top" === i || "bottom" === i ? i : null,
        scrollToUserRow: d,
    };
}
var X = l(967144),
    J = l(696451),
    ee = l(562153),
    et = l(104129);
function el(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, D.bG)([H.default], () => H.default.getUser(t), [t]),
        i = (0, D.bG)([J.Ay], () => J.Ay.getMember(e, t), [e, t]),
        s = (0, X.gn)(e, t, i?.colorStrings ?? null),
        a = ee.Ay.useName(e, void 0, n);
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        name: a,
        displayName: l ? E.intl.formatToPlainString(et.default.subXXA, { name: a }) : a,
    };
}
var en = l(587895),
    ei = l(429913),
    es = l(311043),
    ea = l(454908),
    er = l(403362);
function ed(e, t) {
    return { id: e, name: E.intl.string(E.t.GIWFlF), iconUrl: void 0, coverUrl: void 0, isLoading: t };
}
function ec(e) {
    let t = (0, ei.A)(e),
        l = (0, D.yK)([en.A], () => e.map((e) => en.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(er.Vq), [n]);
    (0, ea.x)(i);
    let a = (0, D.yK)([es.A], () => n.map((e) => (null != e ? es.A.getGame(e) : void 0))),
        r = (0, D.yK)([es.A], () => n.map((e) => null != e && (es.A.didFetchingFail(e) || es.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    c = a[s],
                    o = null == d && !l[s],
                    u = null == c && null != n[s] && !r[s];
                null == d || u
                    ? i.set(e, ed(e, o || u))
                    : i.set(e, {
                          id: e,
                          name: c?.name ?? d.name,
                          iconUrl: d.getIconURL(64) ?? void 0,
                          coverUrl: c?.getCoverURL() ?? void 0,
                          isLoading: !1,
                      });
            }),
            i
        );
    }, [e, t, l, n, a, r]);
}
function eo(e, t) {
    return e.get(t) ?? ed(t, !1);
}
function eu(e, t) {
    return t.map((t) => eo(e, t));
}
var em = l(927813),
    ex = l(251812),
    eh = l(518782);
function ef(e) {
    return e.entries.length < 3;
}
function eg(e) {
    return (0, ex.K)(ef(e) ? void 0 : e.stat).name;
}
function ej(e) {
    let t;
    return ef(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * em.A.Millis.SECOND >= em.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function ep(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
function ev(e) {
    switch (e) {
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
var e_ = l(192308);
function eA(e, t, n) {
    (0, e_.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("132502"),
                l.e("230029"),
                l.e("488926"),
                l.e("352456"),
                l.e("203112"),
                l.e("762831"),
                l.e("348567"),
                l.e("264236"),
                l.e("273232"),
                l.e("240511"),
                l.e("463095"),
                l.e("959134"),
                l.e("371482"),
                l.e("610943"),
                l.e("390213"),
                l.e("944602"),
                l.e("421778"),
                l.e("679019"),
                l.e("210413"),
                l.e("758219"),
            ]).then(l.bind(l, 499334));
            return (l) => (0, i.jsx)(s, { ...l, guildId: e, requirement: t, description: n });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var eN = l(823353);
function eb(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        s = null != n ? et.default.wyIs4o : et.default["81PK67"];
    return (0, i.jsx)(y, {
        className: eN.w,
        illustration: o,
        title: E.intl.string(et.default.ULK65a),
        body: E.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(B.$, {
                      variant: "secondary",
                      size: "sm",
                      text: E.intl.string(et.default.A4ZMJL),
                      onClick: () => {
                          (l(), eA(t, n, E.intl.string(et.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eE =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eI = `${eE} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eS(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eE,
        srcSet: eI,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eC =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ey = `${eC} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function eT(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eC,
        srcSet: ey,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var ek = l(846058),
    eD = l(342296);
function eR(e) {
    let t = Math.floor(Math.max(e, 0) / em.A.Seconds.MINUTE),
        l = Math.floor(t / em.A.Minutes.HOUR),
        n = t % em.A.Minutes.HOUR;
    return 0 === l
        ? E.intl.formatToPlainString(et.default.DdzvGL, { minutes: n })
        : E.intl.formatToPlainString(et.default["6Y8H0A"], { hours: l, minutes: n });
}
function ew(e, t) {
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: E.intl.formatToPlainString(E.t["k2UNz+"], { days: e.value }),
                secondary: eR(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: E.intl.formatToPlainString(et.default.rgpc8E, { count: e.value }),
                secondary: eR(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / em.A.Millis.MINUTE)) / em.A.Minutes.HOUR)),
                    (i = l % em.A.Minutes.HOUR),
                    0 === n
                        ? E.intl.formatToPlainString(et.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? E.intl.formatToPlainString(et.default["D/HToK"], { hours: n })
                          : E.intl.formatToPlainString(et.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eL = l(793169),
    eM = l(428678),
    eU = l(952270),
    eG = l(81466),
    eP = l(406810),
    eO = l(687966),
    eB = l(683063),
    eW = l(573435),
    ez = l(402860),
    eF = l(994500),
    eH = l(396583),
    eK = l(280450);
function eq(e, t) {
    let l = t.user_id,
        n = (0, D.bG)([eK.default], () => eK.default.getId() === l, [l]);
    return el(e, l, { showYouSuffix: n });
}
function eY(e, t) {
    let l = (0, D.bG)([H.default], () => H.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, Q.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var e$ = l(518477),
    eQ = l(870087);
function eV(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: a,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
            onClick: u,
            metricWidth: m,
        } = e,
        x = eq(t, l),
        h = l.application_ids[0],
        f = null != h ? eo(a, h) : void 0,
        g = l.user_id,
        j = s.useCallback(() => {
            (u?.(),
                (0, ez.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: e$.RP.ACTIVITY,
                    scrollTarget: e$.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: p()(eQ.nM, { [eQ.Bh]: r && !c, [eQ.lR]: d }),
        children: [
            (0, i.jsx)(eZ, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(e0, { entry: l, stat: n, width: m, onClick: j }),
            (0, i.jsx)(e8, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onClick: j,
            }),
        ],
    });
}
function eZ(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: a, onClick: r } = e,
        d = s.useRef(null),
        o = (0, D.bG)(
            [eF.A],
            () => (eF.A.isBlocked(l.user_id) ? "blocked" : eF.A.isIgnored(l.user_id) ? "ignored" : null),
            [l.user_id],
        ),
        u = null != o,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eX, { rank: l.rank }),
                u
                    ? (0, i.jsx)("span", {
                          className: eQ.gt,
                          children:
                              "blocked" === o
                                  ? (0, i.jsx)(eM.K, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 })
                                  : (0, i.jsx)(eU.EyeSlashIcon, {
                                        size: "xs",
                                        color: c.A.colors.ICON_SUBTLE,
                                        "aria-hidden": !0,
                                    }),
                      })
                    : (0, i.jsx)(U.eu, {
                          size: G._3.SIZE_32,
                          src: n.user?.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                          className: eQ.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: eQ.Dc,
                    children: [
                        (0, i.jsx)(b.D, {
                            variant: "heading-sm/semibold",
                            color: u ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != o
                                    ? (function (e) {
                                          switch (e) {
                                              case "blocked":
                                                  return E.intl.string(et.default.I3YOjC);
                                              case "ignored":
                                                  return E.intl.string(et.default.CfMzwe);
                                          }
                                      })(o)
                                    : (0, i.jsx)(P.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                      }),
                        }),
                        !u &&
                            null != a &&
                            (0, i.jsx)(A.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: E.intl.formatToPlainString(et.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eQ.D_, children: m })
        : (0, i.jsx)(eD.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(w.D, {
                      ...e,
                      innerRef: d,
                      className: p()(eQ.D_, eQ.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: m,
                  }),
          });
}
function eX(e) {
    let { rank: t } = e,
        l = E.intl.formatToPlainString(et.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eQ.Tm, children: (0, i.jsx)(eL.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eQ.Tm, children: (0, i.jsx)(eS, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eQ.Tm, children: (0, i.jsx)(eT, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eQ.mH,
                children: [
                    (0, i.jsx)(M.A, { children: l }),
                    (0, i.jsx)(A.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function eJ(e) {
    let { stat: t } = e;
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eG.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eP.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eO.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function e0(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = ew(t, l);
    return (0, i.jsxs)(w.D, {
        className: eQ.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(et.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eQ.bf,
                children: [
                    (0, i.jsx)(eJ, { stat: l }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function e1(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eQ.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eQ.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eQ.ct, "aria-hidden": !0 }),
        }),
    });
}
function e2(e) {
    let { played: t, totalCount: l } = e,
        n = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        s = l - n.length;
    return (0, i.jsxs)("div", {
        className: eQ.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(e1, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eQ.rO,
                      children: (0, i.jsx)(eW.Ay, {
                          mask: eW.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eQ.p0,
                              children: (0, i.jsx)(A.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: E.intl.formatToPlainString(et.default.JiMMEd, { count: s }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function e3(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(eB.u, {
        body:
            0 === t.length
                ? E.intl.string(et.default["7CrlYb"])
                : 1 === t.length
                  ? E.intl.formatToPlainString(et.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? E.intl.formatToPlainString(et.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : E.intl.formatToPlainString(et.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: s.length > 0 ? (0, i.jsx)(e2, { played: s, totalCount: s.length }) : void 0,
        assetSize: s.length > 1 ? 43 : 24,
        children: n,
    });
}
function e8(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = eu(s, l);
    return (0, i.jsx)("div", {
        className: eQ.ag,
        children: (0, i.jsx)(e3, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(w.D, {
                className: p()(eQ.Nw, eQ.Dz),
                "aria-label": E.intl.formatToPlainString(et.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(e2, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e6 = l(189043);
function e4(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e6.HC, pillar: e6.P5 },
            2: { column: e6.th, pillar: e6.Vk },
            3: { column: e6.Ou, pillar: e6.el },
        };
    return (0, i.jsx)("div", {
        className: e6.pI,
        role: "list",
        "aria-label": E.intl.string(et.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                e7,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: c[l + 1].column,
                    pillarClassName: c[l + 1].pillar,
                    stat: n,
                    games: s,
                    isCurrentUser: e === a,
                    currentUserPillarRef: e === a ? r : void 0,
                    onClick: d,
                },
                e.user_id,
            ),
        ),
    });
}
function e7(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: a,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: o,
            currentUserPillarRef: u,
            onClick: m,
        } = e,
        x = eu(c, l.application_ids),
        h = eq(t, l),
        { primary: f } = ew(l, d),
        g = 1 === n ? G._3.SIZE_48 : G._3.SIZE_40,
        j = s.useRef(null),
        v = 1 === n ? ek.b : 2 === n ? eS : eT,
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e6.R3,
                    children: [
                        (0, i.jsx)(U.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, G.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v, { className: e6.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p()(e6.DX, r),
                    children: [
                        (0, i.jsx)(b.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: e6.IY,
                            children: (0, i.jsx)(P.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(e3, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: f,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: a,
        role: "listitem",
        ref: o ? u : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(eD.A, {
                      targetElementRef: j,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(w.D, {
                              ...e,
                              className: e6.fs,
                              innerRef: j,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: _,
                          }),
                  })
                : (0, i.jsx)("div", { className: e6.fs, children: _ }),
    });
}
var e9 = l(652215),
    e5 = l(219047);
function te(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: c } = l,
        o = (0, D.bG)([H.default], () => H.default.getCurrentUser()?.id),
        u = s.useMemo(() => c.find((e) => e.user_id === o) ?? null, [c, o]),
        m = s.useMemo(() => {
            let e = c.slice(0, 20);
            return null == u || e.includes(u) ? e : [...e, u];
        }, [c, u]),
        x = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, W.k6)(t, x);
    let h = ev(d),
        g = ec(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        j = ef(l),
        v = ej(l),
        _ = "podium" === v,
        A = ep({ expanded: n, column: a }),
        N = [m[0], m[1], m[2]],
        { scrollerRef: b, scrollerNode: I, userRowRef: C, floatingRowPosition: y, scrollToUserRow: T } = Z(),
        k = (function (e) {
            let [t, l] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    function t() {
                        l(0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1);
                    }
                    (t(), e.addEventListener("scroll", t, { passive: !0 }));
                    let n = new ResizeObserver(t);
                    return (
                        n.observe(e),
                        () => {
                            (e.removeEventListener("scroll", t), n.disconnect());
                        }
                    );
                }, [e]),
                t
            );
        })(I),
        L = null == u && null != o,
        M = null != y,
        U = s.useMemo(() => {
            let e = null == u || m.includes(u) ? m : [...m, u];
            return e.length > 0 ? e : m;
        }, [m, u]),
        { metricMeasureRef: G, metricWidth: P } = (function () {
            let [e, t] = s.useState(null),
                [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    let t = new ResizeObserver((e) => {
                        let [t] = e;
                        null != t && n(Math.ceil(t.borderBoxSize[0]?.inlineSize ?? t.contentRect.width));
                    });
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                { metricMeasureRef: t, metricWidth: l }
            );
        })(),
        O = (0, i.jsx)("div", {
            ref: G,
            className: e5.V$,
            "aria-hidden": !0,
            children: U.map((e) => (0, i.jsx)(e0, { entry: e, stat: d }, e.user_id)),
        });
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: l,
                leaderboardState: n,
                leaderboardView: i,
                metric: a,
                isAtEnd: r,
                isEmpty: d,
                disabled: c = !1,
            } = e,
            o = s.useRef(null),
            u = `${t}:${l}:${n}:${i}:${a}`,
            m = s.useCallback(() => {
                o.current !== u &&
                    ((o.current = u),
                    f.default.track(e9.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, u, l, n, i, a]);
        s.useEffect(() => {
            !c && (d || r) && m();
        }, [c, d, r, m]);
    })({
        guildId: t,
        leaderboardLength: j ? 0 : m.length,
        leaderboardState: v,
        leaderboardView: A,
        metric: h,
        isAtEnd: k,
        isEmpty: j,
        disabled: r,
    });
    let B = s.useCallback(
            (e) => {
                r ||
                    f.default.track(e9.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: A,
                        metric: h,
                    });
            },
            [t, v, A, h, r],
        ),
        z = s.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    eV,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: g,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && M,
                        rowRef: l ? C : void 0,
                        onClick: () => B("row"),
                        metricWidth: P ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [M, u, g, t, d, C, B, P],
        );
    return j
        ? (0, i.jsx)("div", {
              className: e5.Cm,
              children: (0, i.jsx)(eb, { guildId: t, onActivitySharingClick: () => B("activity_sharing") }),
          })
        : null == P
          ? (0, i.jsxs)("div", { className: e5.rf, children: [O, (0, i.jsx)(S, {})] })
          : (0, i.jsxs)("div", {
                className: e5.rf,
                children: [
                    O,
                    (0, i.jsxs)("div", {
                        className: e5.SY,
                        children: [
                            (0, i.jsxs)(R.d_, {
                                className: p()(e5.p_, { [e5.zE]: n, [e5.Ng]: L }),
                                ref: b,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e4, {
                                            guildId: t,
                                            entries: N,
                                            stat: d,
                                            games: g,
                                            currentUserEntry: u,
                                            currentUserPillarRef: C,
                                            onClick: () => B("podium"),
                                        }),
                                    m.map(z),
                                ],
                            }),
                            (null != u && null != y) || (L && !k)
                                ? (0, i.jsx)(Y, { position: "top" !== y || L ? "bottom" : "top" })
                                : null,
                            null != u &&
                                null != y &&
                                (0, i.jsx)($, {
                                    position: y,
                                    children: (0, i.jsx)(w.D, {
                                        className: e5.Po,
                                        "aria-label": E.intl.string(et.default.d0Z8kd),
                                        onClick: T,
                                        children: (0, i.jsx)(eV, {
                                            guildId: t,
                                            entry: u,
                                            stat: d,
                                            games: g,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => B("row"),
                                            metricWidth: P ?? void 0,
                                        }),
                                    }),
                                }),
                            L && (0, i.jsx)(tl, { guildId: t, onActivitySharingClick: () => B("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(tt, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function tt(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: e5.z8,
            children: [
                (0, i.jsx)(L.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.string(et.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: e5.qr, children: n })
        : (0, i.jsx)("div", {
              className: p()(e5.qr, { [e5.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: E.intl.formatToPlainString(et.default["1bt50t"], {
                      timestamp: (0, K.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function tl(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: a,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, Q.T4)(t),
        o = null != d,
        u = (0, D.bG)([F.A], () => F.A.getStatus() === e9.clD.INVISIBLE),
        m = E.intl.string(et.default.toxuHd),
        x = !1;
    n && a
        ? r
            ? u && ((m = E.intl.string(et.default.PTDDhW)), (x = !0))
            : (m = E.intl.string(et.default.mTARYx))
        : (m = E.intl.string(et.default["8y885d"]));
    let [h] = s.useState(o),
        [f] = s.useState(x),
        g = !o && !x && h,
        j = !o && !x && f;
    j ? (m = E.intl.string(et.default.cgRADC)) : g && (m = E.intl.string(et.default.dqYuni));
    let {
        user: p,
        member: v,
        name: _,
        roleColorStrings: N,
    } = el(
        t,
        (0, D.bG)([H.default], () => H.default.getCurrentUser()?.id ?? ""),
    );
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              className: e5.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: e5.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: e5.nk,
                              children: [
                                  (0, i.jsx)(M.A, { children: E.intl.string(et.default["oHdW+u"]) }),
                                  (0, i.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(U.eu, {
                              size: G._3.SIZE_32,
                              src: p.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                              className: e5.SA,
                              "aria-hidden": !0,
                              status: u ? e9.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: e5.ko,
                              children: [
                                  (0, i.jsx)(b.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(P.g, {
                                          name: _,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: N,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: e5.LF,
                                      children: [
                                          g || j
                                              ? (0, i.jsx)(O.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(A.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              children: m,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  o &&
                      (0, i.jsx)("div", {
                          className: e5.rl,
                          children: (0, i.jsx)(B.$, {
                              variant: "secondary",
                              size: "sm",
                              text: E.intl.string(et.default.fMbgeZ),
                              onClick: () => {
                                  (l(), eA(t, d, E.intl.string(et.default.PJn0ih)));
                              },
                          }),
                      }),
                  x &&
                      !o &&
                      (0, i.jsx)(B.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(E.t.fwPurU),
                          onClick: () => {
                              (0, z.A)({ nextStatus: e9.clD.ONLINE, prevStatus: e9.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var tn = l(665260),
    ti = l(636537),
    ts = l(193249),
    ta = l(683071),
    tr = l(825484),
    td = l(71393),
    tc = l(967198),
    to = l(49303),
    tu = l(313627);
let tm = e9.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tx = l(224640),
    th = l(20742),
    tf = l(885386),
    tg = l(515746);
function tj(e) {
    let { data: t } = e,
        l = (0, ex.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + em.A.Seconds.WEEK) * em.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / em.A.Millis.DAY) - 1) * em.A.Millis.DAY;
            return (
                (0, eH.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? E.intl.string(et.default["J8r/7L"])
                            : E.intl.formatToPlainString(et.default["PuaR+2"], {
                                  days: Math.ceil(i / em.A.Millis.DAY),
                              }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tf.PZ.useSetting(),
        c = 2 > (0, K.m_)(a, new Date()) ? (0, K.mk)(a, !1, d).toLowerCase() : (0, K.i$)(a, "L LT", d).toLowerCase(),
        o = n
            ? E.intl.format(et.default.kG9XmM, { endedAt: c, nextStatName: (0, ex.K)(t.next_stat).name })
            : E.intl.format(et.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eB.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: p()(tg.qS, n ? tg.yM : tg.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(A.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tp(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a = !0 } = e,
        [r, d] = s.useState(null),
        c = s.useRef(null),
        o = s.useRef({ guildId: t, data: l, expanded: n, column: i });
    s.useEffect(() => {
        o.current = { guildId: t, data: l, expanded: n, column: i };
    }, [t, l, n, i]);
    let u = s.useCallback((e) => {
        let t = c.current;
        if (null == t) return;
        c.current = null;
        let l = Date.now() - t;
        if (l < 250) return;
        let n = o.current;
        null != n.data &&
            f.default.track(
                e9.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: ej(n.data),
                    leaderboard_view: ep({ expanded: n.expanded, column: n.column }),
                    metric: ev(n.data.stat),
                },
                { flush: e },
            );
    }, []);
    return (
        s.useEffect(() => {
            if (null != r && a)
                return (
                    r.addEventListener("mouseenter", e),
                    r.addEventListener("mouseleave", t),
                    window.addEventListener("blur", l),
                    document.addEventListener("visibilitychange", n),
                    window.addEventListener("pagehide", i),
                    () => {
                        (r.removeEventListener("mouseenter", e),
                            r.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", l),
                            document.removeEventListener("visibilitychange", n),
                            window.removeEventListener("pagehide", i),
                            u(!0));
                    }
                );
            function e() {
                c.current = Date.now();
            }
            function t() {
                u(!1);
            }
            function l() {
                u(!1);
            }
            function n() {
                "hidden" === document.visibilityState && u(!0);
            }
            function i() {
                u(!0);
            }
        }, [r, a, u]),
        s.useCallback((e) => {
            d(e);
        }, [])
    );
}
var tv = l(460614);
function t_(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eY(t, l),
        a = tp({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tx.d, {
              size: "lg",
              "aria-label": eg(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tv.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tv.LD,
                                  children: [
                                      (0, i.jsx)(u.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(b.D, {
                                          variant: "heading-sm/medium",
                                          className: tv.DD,
                                          children: eg(s),
                                      }),
                                      (0, i.jsx)(tj, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(th.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tv.rf,
                          children: (0, i.jsx)(te, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tA = l(452027),
    tN = l(103557),
    tb = l(95477),
    tE = l(241326),
    tI = l(2553),
    tS = l(405810),
    tC = l(488428),
    ty = l(776231);
let tT = (0, l(676279).cy)();
function tk(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tT ? "webp" : "gif") : tT ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = e9.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, ty.kr)(500 * (0, ty.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tC.stringify(c)}`)
    );
}
var tD = l(868602),
    tR = l(445187);
function tw(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/d561fd91d87017743133e6f7c82388345a8938aa2434a28cc42077d126076514.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var tL = l(770178),
    tM = l(104171),
    tU = l(889227),
    tG = l(427262),
    tP = l(950305),
    tO = l(409626),
    tB = l(692969),
    tW = l(788593),
    tz = l(948852),
    tF = l(365611);
function tH(e) {
    let { totalUsers: t, gameName: l } = e,
        n = E.intl.formatToPlainString(et.default["XaT+x0"], { count: t, gameName: l });
    return (0, i.jsxs)("div", {
        className: tz.Fk,
        role: "img",
        "aria-label": n,
        children: [
            (0, i.jsx)(tP.UserIcon, {
                size: "custom",
                width: 14,
                height: 14,
                color: c.A.colors.ICON_SUBTLE,
                "aria-hidden": !0,
            }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
        ],
    });
}
function tK(e) {
    let { entry: t, games: l } = e,
        { name: n, coverUrl: s, isLoading: a } = eo(l, t.application_id),
        r = (0, tB.A)({
            location: "PopularGamesGameCard",
            applicationId: t.application_id,
            source: tO.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        d = null != r;
    if (a)
        return (0, i.jsx)("div", {
            className: tz.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tF.mD }),
        });
    let c = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: n,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: p()(tF.PY, { [tF.vk]: d, [tF.iL]: d && null != s }),
                    children: (0, i.jsx)(tW.R, { imageSrc: s, gameName: n }),
                }),
            }),
            (0, i.jsx)(A.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: n }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tz.Nr,
        role: "listitem",
        children: [
            d
                ? (0, i.jsx)(w.D, {
                      className: p()(tz.LO, tz.vk),
                      onClick: r,
                      "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: n }),
                      children: c,
                  })
                : (0, i.jsx)("div", { className: tz.LO, children: c }),
            (0, i.jsx)(tH, { totalUsers: t.total_users, gameName: n }),
        ],
    });
}
var tq = l(347661),
    tY = l(968987),
    t$ = l(560328);
function tQ(e) {
    let { guildId: t } = e,
        { requirement: l } = (0, Q.T4)(t);
    return (0, i.jsx)(y, {
        className: t$.p$,
        illustration: tw,
        title: E.intl.string(et.default.ULK65a),
        body: E.intl.format(null != l ? et.default.JDAHQV : et.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(B.$, {
                      variant: "secondary",
                      size: "sm",
                      text: E.intl.string(et.default.A4ZMJL),
                      onClick: () => eA(t, l, E.intl.string(et.default.e7pD5m)),
                  })
                : null,
    });
}
function tV(e) {
    let { guildId: t, requirement: l } = e;
    return (0, i.jsxs)("div", {
        className: t$.UX,
        children: [
            (0, i.jsxs)("div", {
                className: t$.tD,
                children: [
                    (0, i.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: E.intl.string(tY.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children:
                            l === Q.kG.ACTIVITY_SHARING
                                ? E.intl.string(et.default.wyK5KO)
                                : E.intl.string(et.default.uQOR1j),
                    }),
                ],
            }),
            (0, i.jsx)(B.$, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(et.default.fMbgeZ),
                onClick: () => eA(t, l, E.intl.string(et.default.e7pD5m)),
            }),
        ],
    });
}
function tZ(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, D.yK)(
            [H.default],
            () =>
                l
                    .map((e) => H.default.getUser(e))
                    .filter(er.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: t$.qr,
        children: [
            (0, i.jsx)(A.E, {
                className: t$.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: E.intl.format(et.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: t$.WM,
                    children: (0, i.jsx)(tM.Ay, {
                        users: d,
                        guildId: t,
                        size: tM.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            if (!(e instanceof tU.A)) return null;
                            let l = ee.Ay.getNickname(t, void 0, e) ?? tG.Ay.getName(e);
                            return (0, i.jsx)(m.m, {
                                text: l,
                                ariaHidden: !0,
                                children: (0, i.jsx)("span", {
                                    role: "img",
                                    "aria-label": l,
                                    children: (0, i.jsx)(U.eu, {
                                        src: e.getAvatarURL(t, (0, G.FT)(G._3.SIZE_24)),
                                        size: G._3.SIZE_24,
                                        "aria-hidden": !0,
                                    }),
                                }),
                            });
                        },
                        count: n,
                        hideMoreUsers: c <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: t$.ju,
                                children: (0, i.jsx)(A.E, {
                                    tag: "span",
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    children: E.intl.formatToPlainString(et.default.G5PLYW, { count: c }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function tX(e) {
    let { guildId: t, data: l, title: n } = e,
        {
            ref: a,
            visibleCount: r,
            isCompact: d,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState({ visibleCount: 5, isCompact: !1 }),
                n = s.useCallback((e) => {
                    let { width: t } = e.contentRect,
                        n = Math.max(1, Math.min(5, Math.floor((t - 32 + 12) / 108))),
                        i = t < 480;
                    l((e) => (e.visibleCount === n && e.isCompact === i ? e : { visibleCount: n, isCompact: i }));
                }, []);
            return ((0, tL.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: c } = (0, Q.T4)(t),
        o = (0, D.bG)([H.default], () => H.default.getCurrentUser()?.id),
        u = s.useMemo(() => (null != c ? l.user_ids.filter((e) => e !== o) : l.user_ids), [l.user_ids, c, o]),
        m = s.useMemo(() => ({ ...l, user_ids: u }), [l, u]),
        x = (0, tq.m)(m),
        h = x ? [] : m.user_ids;
    (0, W.k6)(t, h);
    let f = s.useMemo(() => m.games.map((e) => e.application_id), [m.games]),
        g = ec(f),
        j = s.useMemo(() => f.map((e) => g.get(e)?.coverUrl).find(er.Vq) ?? null, [g, f]),
        p = s.useMemo(() => ({ "--custom-popular-games-columns": r }), [r]),
        v = null;
    return (
        (v = x
            ? (0, i.jsx)(tQ, { guildId: t })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: t$.Qs,
                          children: [
                              null != j
                                  ? (0, i.jsx)("div", {
                                        className: t$.G,
                                        children: (0, i.jsx)("img", { className: t$.LZ, src: j, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: t$.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: p,
                                  children: m.games
                                      .slice(0, r)
                                      .map((e) => (0, i.jsx)(tK, { entry: e, games: g }, e.application_id)),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: t$.sQ,
                          children: [
                              null != c && (0, i.jsx)(tV, { guildId: t, requirement: c }),
                              (0, i.jsx)(tZ, {
                                  guildId: t,
                                  memberIds: h,
                                  totalUsers: m.total_users,
                                  totalGames: m.total_games,
                                  isCompact: d,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: t$.rf, ref: a, children: v })
    );
}
function tJ(e) {
    return e.default_title ?? E.intl.string(et.default.GZsvDx);
}
var t0 = l(650583),
    t1 = l(684343);
function t2(e) {
    let { label: t, tabs: l, selectedId: n, panelId: a, getTabId: r, onSelect: d } = e,
        c = s.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                s = i.indexOf(l);
            if (-1 !== s && 0 !== i.length) {
                switch (e.key) {
                    case t0.dh.ARROW_RIGHT:
                    case t0.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case t0.dh.ARROW_LEFT:
                    case t0.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case t0.dh.HOME:
                        t = 0;
                        break;
                    case t0.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: t1.vR,
        role: "tablist",
        "aria-label": t,
        children: l.map((e) => {
            let t = e.id === n;
            return (0, i.jsx)(
                "button",
                {
                    type: "button",
                    role: "tab",
                    id: r(e.id),
                    className: t1.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(A.E, {
                        className: t1.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "none",
                        children: e.label,
                    }),
                },
                e.id,
            );
        }),
    });
}
var t3 = l(831544),
    t8 = l(28863),
    t6 = l(148166),
    t4 = l(427209),
    t7 = l(294454),
    t9 = l(605810);
function t5(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: t9.ql,
        children: (0, i.jsx)(m.m, {
            text: E.intl.string(E.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: t4.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": E.intl.string(E.t.Ej3B3Y),
                onClick: () => {
                    (0, e_.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                l.e("325522"),
                                l.e("401317"),
                                l.e("790340"),
                                l.e("147119"),
                                l.e("425292"),
                                l.e("209994"),
                                l.e("457428"),
                                l.e("552653"),
                                l.e("311580"),
                                l.e("174554"),
                                l.e("116815"),
                                l.e("813057"),
                                l.e("132502"),
                                l.e("230029"),
                                l.e("891089"),
                                l.e("861973"),
                                l.e("196063"),
                                l.e("392028"),
                                l.e("124054"),
                                l.e("441674"),
                                l.e("152862"),
                                l.e("148326"),
                                l.e("148729"),
                                l.e("650195"),
                                l.e("67702"),
                                l.e("662387"),
                                l.e("31544"),
                                l.e("629972"),
                                l.e("334168"),
                                l.e("582012"),
                                l.e("166336"),
                                l.e("113658"),
                                l.e("162182"),
                                l.e("327545"),
                                l.e("860640"),
                                l.e("681801"),
                                l.e("85427"),
                                l.e("698584"),
                                l.e("967850"),
                                l.e("570385"),
                                l.e("916885"),
                                l.e("272804"),
                                l.e("915170"),
                                l.e("449933"),
                                l.e("405714"),
                                l.e("360732"),
                                l.e("352456"),
                                l.e("864875"),
                                l.e("678906"),
                                l.e("799357"),
                                l.e("491899"),
                                l.e("50466"),
                                l.e("999272"),
                                l.e("701406"),
                                l.e("216112"),
                                l.e("490514"),
                                l.e("962953"),
                                l.e("550929"),
                                l.e("64769"),
                                l.e("644013"),
                                l.e("971156"),
                                l.e("260009"),
                                l.e("691398"),
                                l.e("266201"),
                                l.e("752704"),
                                l.e("56606"),
                                l.e("206516"),
                                l.e("163466"),
                                l.e("234017"),
                                l.e("40791"),
                                l.e("358404"),
                                l.e("996907"),
                                l.e("831130"),
                                l.e("377989"),
                                l.e("529787"),
                                l.e("358931"),
                                l.e("880150"),
                                l.e("168248"),
                                l.e("490743"),
                                l.e("245420"),
                                l.e("216870"),
                                l.e("89100"),
                                l.e("340363"),
                                l.e("459086"),
                                l.e("720210"),
                                l.e("601152"),
                                l.e("319714"),
                                l.e("189281"),
                                l.e("205035"),
                                l.e("200075"),
                                l.e("896995"),
                                l.e("267732"),
                                l.e("686889"),
                                l.e("560570"),
                                l.e("896691"),
                                l.e("779367"),
                                l.e("992956"),
                                l.e("7452"),
                                l.e("60002"),
                                l.e("189423"),
                                l.e("649500"),
                                l.e("683426"),
                                l.e("524434"),
                                l.e("933947"),
                                l.e("866475"),
                                l.e("56347"),
                                l.e("424199"),
                                l.e("496818"),
                                l.e("587618"),
                                l.e("645499"),
                                l.e("342551"),
                                l.e("125729"),
                                l.e("162512"),
                                l.e("695765"),
                                l.e("777489"),
                                l.e("188941"),
                                l.e("264236"),
                                l.e("349619"),
                                l.e("481647"),
                                l.e("543039"),
                                l.e("398125"),
                                l.e("221825"),
                                l.e("930758"),
                                l.e("244560"),
                                l.e("776602"),
                                l.e("253729"),
                                l.e("593600"),
                                l.e("266900"),
                                l.e("707826"),
                                l.e("948804"),
                                l.e("695445"),
                                l.e("140402"),
                                l.e("199999"),
                                l.e("828111"),
                                l.e("890027"),
                                l.e("721690"),
                                l.e("809915"),
                                l.e("117268"),
                                l.e("812310"),
                                l.e("776195"),
                                l.e("87306"),
                                l.e("361626"),
                                l.e("832817"),
                                l.e("425544"),
                                l.e("646506"),
                                l.e("416143"),
                                l.e("445124"),
                                l.e("445421"),
                                l.e("844695"),
                                l.e("832823"),
                                l.e("761935"),
                                l.e("511527"),
                                l.e("763070"),
                                l.e("234236"),
                                l.e("381933"),
                                l.e("502018"),
                                l.e("92124"),
                                l.e("165595"),
                                l.e("249366"),
                                l.e("728633"),
                                l.e("628439"),
                                l.e("757238"),
                                l.e("92678"),
                                l.e("988077"),
                                l.e("776750"),
                                l.e("225990"),
                                l.e("539620"),
                                l.e("183534"),
                                l.e("935715"),
                                l.e("248329"),
                                l.e("633128"),
                                l.e("123353"),
                                l.e("561216"),
                                l.e("401590"),
                                l.e("498215"),
                                l.e("313681"),
                                l.e("475166"),
                                l.e("829177"),
                                l.e("592028"),
                                l.e("106943"),
                                l.e("133902"),
                                l.e("232551"),
                                l.e("892340"),
                                l.e("425906"),
                                l.e("14962"),
                                l.e("123216"),
                                l.e("593176"),
                                l.e("588940"),
                                l.e("401518"),
                                l.e("390098"),
                                l.e("398793"),
                                l.e("836545"),
                                l.e("770697"),
                                l.e("147786"),
                                l.e("854461"),
                                l.e("790244"),
                                l.e("482861"),
                                l.e("592731"),
                                l.e("53374"),
                                l.e("256616"),
                                l.e("273232"),
                                l.e("894747"),
                                l.e("858514"),
                                l.e("344265"),
                                l.e("784103"),
                                l.e("121435"),
                                l.e("784041"),
                                l.e("869546"),
                                l.e("240511"),
                                l.e("817852"),
                                l.e("718573"),
                                l.e("133179"),
                                l.e("614784"),
                                l.e("346102"),
                                l.e("486792"),
                                l.e("377766"),
                                l.e("463095"),
                                l.e("334127"),
                                l.e("537894"),
                                l.e("128534"),
                                l.e("799657"),
                                l.e("810034"),
                                l.e("124060"),
                                l.e("238412"),
                                l.e("146566"),
                                l.e("317225"),
                                l.e("8563"),
                                l.e("444376"),
                                l.e("32661"),
                                l.e("831145"),
                                l.e("187856"),
                                l.e("96588"),
                                l.e("170653"),
                                l.e("696123"),
                                l.e("400954"),
                                l.e("610449"),
                                l.e("32781"),
                                l.e("912773"),
                                l.e("499941"),
                                l.e("693832"),
                                l.e("488990"),
                                l.e("509793"),
                                l.e("577084"),
                                l.e("332470"),
                                l.e("696374"),
                                l.e("710638"),
                                l.e("193158"),
                                l.e("318546"),
                                l.e("843719"),
                                l.e("772493"),
                                l.e("846523"),
                                l.e("919307"),
                                l.e("565617"),
                                l.e("73500"),
                                l.e("662355"),
                                l.e("418943"),
                                l.e("455924"),
                                l.e("844780"),
                                l.e("41991"),
                                l.e("959134"),
                                l.e("872648"),
                                l.e("174347"),
                                l.e("565065"),
                                l.e("834386"),
                                l.e("784727"),
                                l.e("976148"),
                                l.e("130674"),
                                l.e("622825"),
                                l.e("959669"),
                                l.e("220518"),
                                l.e("371482"),
                                l.e("875842"),
                                l.e("126780"),
                                l.e("360781"),
                                l.e("88160"),
                                l.e("209518"),
                                l.e("631825"),
                                l.e("851243"),
                                l.e("748015"),
                                l.e("237834"),
                                l.e("952577"),
                                l.e("807771"),
                                l.e("338516"),
                                l.e("478476"),
                                l.e("496715"),
                                l.e("115754"),
                                l.e("398082"),
                                l.e("744385"),
                                l.e("59413"),
                                l.e("29664"),
                                l.e("793394"),
                                l.e("546745"),
                                l.e("250478"),
                                l.e("192440"),
                                l.e("863076"),
                                l.e("462276"),
                                l.e("680986"),
                                l.e("90373"),
                                l.e("979630"),
                                l.e("293697"),
                                l.e("568980"),
                                l.e("168177"),
                                l.e("260218"),
                                l.e("236946"),
                                l.e("935948"),
                                l.e("692639"),
                                l.e("890480"),
                                l.e("440963"),
                                l.e("766031"),
                                l.e("394317"),
                                l.e("304329"),
                                l.e("84755"),
                                l.e("256831"),
                            ]).then(l.bind(l, 99266));
                            return function (l) {
                                return (0, i.jsx)(e, { ...l, target: t });
                            };
                        },
                        { stackingBehavior: "stack", modalKey: t7.aU },
                    );
                },
            }),
        }),
    });
}
var le = l(272984);
function lt(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? le.RQ.IMAGE(t.artist_image_hash) : null,
        a = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: le.RQ.WEB_OPEN(le.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(t6.R, { src: n, isCircular: !0, FallbackIcon: t3.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: t9.Nr, children: (0, i.jsx)("div", { ...l, className: t9.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: t9.Nr,
              children: [
                  (0, i.jsxs)(t8.Anchor, {
                      ...l,
                      className: t9.MT,
                      href: a.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: t9.Qq,
                              children: (0, i.jsx)(A.E, {
                                  className: t9.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(t5, { target: a, tabIndex: l.tabIndex }),
              ],
          });
}
var ll = l(872351),
    ln = l(708988),
    li = l(628137);
let ls = "none",
    la = (e, t) => (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function lr(e) {
    return e;
}
function ld(e) {
    return e?.direction ?? ls;
}
function lc(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: E.intl.formatToPlainString(et.default["h+LUpk"], { percent: t }) };
}
function lo(e) {
    return lc(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lu = l(633099);
function lm(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? ll.z : ln.M;
    return (0, i.jsxs)("span", {
        className: lu.GW,
        children: [
            (0, i.jsx)(l, {
                className: p()({ [lu.$J]: "up" === t.direction, [lu.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lx(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, D.yK)(
            [eF.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !eF.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, W.k6)(l, a);
    let r = (0, D.yK)([H.default], () => a.map((e) => H.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lu.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            E.intl.formatToPlainString(et.default.AzIhRB, { count: t, trend: ls, countHook: lr })),
        children: (0, i.jsx)(tM.Ay, {
            users: d,
            guildId: l,
            size: tM.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lu.ju,
                    children: (0, i.jsx)(A.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: E.intl.formatToPlainString(et.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function lh(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lu.aF,
        children: [
            (0, i.jsx)(li.A, {
                resourceType: le.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lu.Ls, "aria-hidden": !0 }),
        ],
    });
}
function lf(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: p()(lu.yp, { [lu.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lu.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(A.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lu._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(A.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(lm, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function lg(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = lc(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: p()(lu.yp, { [lu.Fl]: n }),
        children: [
            s && (0, i.jsx)(lh, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: p()(lu.QD, lu.rk),
                children: [
                    (0, i.jsx)(lx, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lu._0,
                        children: [
                            (0, i.jsx)(A.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    E.intl.format(et.default["7hHUIS"], { count: t, trend: ld(r), countHook: la })),
                            }),
                            null != r && (0, i.jsx)(lm, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lj = l(197935),
    lp = l(915734);
function lv(e) {
    let { label: t, items: l, isCompact: n, getItemKey: s, renderItem: a } = e;
    return (0, i.jsx)("div", {
        className: p()(lp.Dk, { [lp.yI]: n }),
        children: (0, i.jsx)(lj.A, {
            items: l,
            getItemKey: s,
            renderItem: a,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lp.o1,
            "aria-label": t,
        }),
    });
}
var l_ = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let lA = ["top_songs", "top_artists", "top_listeners"];
function lN(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lb(e) {
    switch (e) {
        case "top_songs":
            return E.intl.string(et.default.KgeEtx);
        case "top_artists":
            return E.intl.string(et.default.RYxWTS);
        case "top_listeners":
            return E.intl.string(et.default.KO73KB);
    }
}
function lE(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lI(e) {
    return `popular-music-panel-${e}`;
}
var lS = l(742452);
function lC(e) {
    return e.artist_external_id;
}
function ly(e, t) {
    return (0, i.jsx)(lt, { artist: e, itemProps: t });
}
function lT(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = lo(l);
    return (0, i.jsxs)("div", {
        className: lS.U,
        children: [
            (0, i.jsx)(lv, {
                label: lb(l_.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: lC,
                renderItem: ly,
            }),
            (0, i.jsx)(lf, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : E.intl.formatToPlainString(et.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : E.intl.format(et.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: ld(n),
                              memberCountHook: la,
                              artistCountHook: la,
                          }),
                trend: n,
            }),
        ],
    });
}
var lk = l(803613),
    lD = l(682348),
    lR = l(73152),
    lw = l(280911);
function lL(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, D.bG)([H.default], () => H.default.getCurrentUser()),
        s = (0, D.bG)([J.Ay], () => (null != n ? J.Ay.getMember(t, n.id) : null)),
        a = (0, X.gn)(t, n?.id, s?.colorStrings ?? null),
        r = ee.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: lw.D_,
        children: [
            (0, i.jsxs)("div", {
                className: lw.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: lw.eu, children: (0, i.jsx)(lk.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: lw.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: lw.Om }),
                                        (0, i.jsx)("span", { className: lw.Om }),
                                        (0, i.jsx)("span", { className: lw.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(U.eu, {
                        size: G._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lw.Qq,
                children: [
                    (0, i.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(P.g, {
                            name: E.intl.formatToPlainString(et.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.string(et.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function lM(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: lw.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: lw.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(lD._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: lw.Qq,
                children: [
                    (0, i.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: E.intl.string(tY.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.formatToPlainString(et.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function lU(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a } = e;
    return (0, i.jsxs)("div", {
        className: lw.UX,
        children: [
            a ? (0, i.jsx)(lM, { widgetName: n, isCompact: s }) : (0, i.jsx)(lL, { guildId: t, isCompact: s }),
            (0, i.jsx)(B.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : lR.E,
                text: a ? E.intl.string(E.t.KY0ilj) : E.intl.string(et.default.jB1fWC),
                onClick: () => {
                    (0, e_.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                l.e("120239"),
                                l.e("955410"),
                                l.e("132502"),
                                l.e("230029"),
                                l.e("488926"),
                                l.e("352456"),
                                l.e("203112"),
                                l.e("13566"),
                                l.e("348567"),
                                l.e("264236"),
                                l.e("273232"),
                                l.e("240511"),
                                l.e("463095"),
                                l.e("959134"),
                                l.e("371482"),
                                l.e("610943"),
                                l.e("390213"),
                                l.e("944602"),
                                l.e("421778"),
                                l.e("679019"),
                                l.e("210413"),
                                l.e("32820"),
                            ]).then(l.bind(l, 70111));
                            return (l) => (0, i.jsx)(e, { ...l, guildId: t, widgetName: n });
                        },
                        { modalKey: "guild-space-popular-music-contribution" },
                    );
                },
            }),
        ],
    });
}
function lG(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/e5cd35ca79f49d81161fc468618bf0291bd91c44fbb5190819cd6dffcf71fef0.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var lP = l(625903),
    lO = l(780964),
    lB = l(766075),
    lW = l(30370),
    lz = l(123894);
function lF() {
    let e = (0, D.bG)([lW.A], () => lW.A.getAccounts().some((e) => e.type === e9.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(y, {
        className: lz.w,
        illustration: lG,
        title: E.intl.string(et.default.ULK65a),
        body: E.intl.format(e ? et.default.BLuvck : et.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(B.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: lP.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => (0, lB.openUserSettings)(lO.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function lH() {
    return (0, i.jsx)(y, {
        className: lz.w,
        illustration: lG,
        title: E.intl.string(et.default.ULK65a),
        body: E.intl.format(et.default.ZQxU8v, { memberCount: 2 }),
    });
}
var lK = l(109487),
    lq = l(279543);
function lY(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lq.qr,
        children: [
            (0, i.jsxs)("div", {
                className: lq.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: lq.Kk,
                        children: (0, i.jsx)(L.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        className: lq.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(et.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(t8.Anchor, {
                className: lq.al,
                href: le.RQ.WEB_HOME,
                "aria-label": E.intl.string(et.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: lq.Kk,
                        children: (0, i.jsx)(lK.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(A.E, {
                            className: lq.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: E.intl.string(et.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var l$ = l(65154),
    lQ = l(329177),
    lV = l(242226);
function lZ(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: s,
            rank: a,
            isCompact: r,
            isCurrentUser: d,
            shouldDimForCurrentUser: o,
            isFloating: u = !1,
            rowRef: m,
        } = e,
        x = el(l, n, { showYouSuffix: d }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: p()(lV.nM, { [lV.Bh]: d && !u, [lV.lR]: o }),
              children: [
                  (0, i.jsx)(lX, { guildId: l, user: h, identity: x, rank: a, listener: s }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: p()(lV.Mx, { [lV.dA]: r }),
                          children: [
                              (0, i.jsx)(l$.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), E.intl.formatToPlainString(et.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(l2, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function lX(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r } = e,
        d = s.useRef(null),
        o = (0, D.bG)([eF.A], () => (eF.A.isBlocked(l.id) ? "blocked" : eF.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        u = null != o;
    return (0, i.jsx)(eD.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(w.D, {
                ...e,
                innerRef: d,
                className: lV.D_,
                children: [
                    null != a &&
                        (0, i.jsx)(M.A, { children: E.intl.formatToPlainString(et.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: lV.R3,
                        children: [
                            u
                                ? (0, i.jsx)("span", {
                                      className: lV.gt,
                                      children:
                                          "blocked" === o
                                              ? (0, i.jsx)(eM.K, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_SUBTLE,
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(eU.EyeSlashIcon, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_SUBTLE,
                                                    "aria-hidden": !0,
                                                }),
                                  })
                                : (0, i.jsx)(U.eu, {
                                      size: G._3.SIZE_32,
                                      src: l.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                                      "aria-hidden": !0,
                                  }),
                            1 === a &&
                                (0, i.jsx)("span", {
                                    className: lV.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(lQ.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: lV.Dc,
                        children: [
                            (0, i.jsx)(b.D, {
                                variant: "heading-sm/semibold",
                                color: u ? "text-subtle" : "text-default",
                                lineClamp: 1,
                                children:
                                    null != o
                                        ? (function (e) {
                                              switch (e) {
                                                  case "blocked":
                                                      return E.intl.string(et.default.I3YOjC);
                                                  case "ignored":
                                                      return E.intl.string(et.default.CfMzwe);
                                              }
                                          })(o)
                                        : (0, i.jsx)(P.g, {
                                              name: n.displayName,
                                              colorString: n.member?.colorString ?? null,
                                              colorStrings: n.roleColorStrings,
                                          }),
                            }),
                            !u && (0, i.jsx)(l0, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function lJ(e, t) {
    return (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function l0(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(A.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? E.intl.format(et.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: lJ })
                : E.intl.format(et.default.ZMJ8Mt, { trackTitle: l, highlightHook: lJ }),
    });
}
function l1(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? le.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: lV.sG,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: lV.Ql,
                          children: (0, i.jsx)(t3.MicrophoneIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: lV.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function l2(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: lV.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: lV.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            l1,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: lV.sG,
                            children: (0, i.jsx)(eW.Ay, {
                                mask: eW.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: lV.ag,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.formatToPlainString(et.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var l3 = l(897130);
function l8(e) {
    let { guildId: t, isCompact: l, data: n, shouldHideCurrentUser: a, upsell: r } = e,
        d = n.top_listeners,
        c = (0, D.bG)([H.default], () => H.default.getCurrentUser()?.id),
        o = a ? null : c,
        u = d.findIndex((e) => e.user_id === o),
        m = -1 === u ? null : d[u],
        x = s.useMemo(() => d.map((e) => e.user_id), [d]);
    (0, W.k6)(t, x);
    let { scrollerRef: h, userRowRef: f, floatingRowPosition: g } = Z(),
        j = null != r,
        v = j ? null : g,
        _ = null != v;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(lH, {}), r] })
        : (0, i.jsxs)("div", {
              className: l3.SY,
              children: [
                  (0, i.jsxs)(R.d_, {
                      className: p()(l3.p_, { [l3.w]: j }),
                      ref: h,
                      children: [
                          d.map((e, n) => {
                              let s = e.user_id === o;
                              return (0, i.jsx)(
                                  lZ,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && _,
                                      rowRef: s ? f : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          !j &&
                              null != o &&
                              null == m &&
                              (0, i.jsx)(lZ, {
                                  guildId: t,
                                  userId: o,
                                  listener: null,
                                  rank: null,
                                  isCompact: l,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: _,
                                  rowRef: f,
                              }),
                      ],
                  }),
                  j &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Y, { position: "bottom" }),
                              (0, i.jsx)("div", { className: l3.Kv, children: r }),
                          ],
                      }),
                  null != o &&
                      null != v &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Y, { position: v }),
                              (0, i.jsx)($, {
                                  position: v,
                                  children: (0, i.jsx)(lZ, {
                                      guildId: t,
                                      userId: o,
                                      listener: m,
                                      rank: -1 === u ? null : u + 1,
                                      isCompact: l,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var l6 = l(717683);
function l4(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: l6.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: p()(l6.Dk, { [l6.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: l6.Nr,
                            children: [
                                (0, i.jsx)("div", { className: p()(l6.om, l6.xX) }),
                                (0, i.jsxs)("div", {
                                    className: l6.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: p()(l6.om, l6.DD) }),
                                        (0, i.jsx)("div", { className: p()(l6.om, l6.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: p()(l6.yp, { [l6.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: p()(l6.om, l6.Pl) }),
                    (0, i.jsx)("div", { className: p()(l6.om, l6._0) }),
                ],
            }),
        ],
    });
}
var l7 = l(432017),
    l9 = l(362704);
function l5(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a } = e,
        r = null != t.cover_art_hash ? le.RQ.IMAGE(t.cover_art_hash) : null,
        d = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: le.RQ.WEB_OPEN(le.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: t9.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: p()(t9.MT, { [t9.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(t6.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: l7.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: p()(t9.Lw, t9.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(l9.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: t9.Qq,
                            children: [
                                (0, i.jsx)(A.E, {
                                    className: t9.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(A.E, {
                                        className: t9.VA,
                                        tag: "span",
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: t.artist_name,
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(t5, { target: d, tabIndex: a.tabIndex }),
        ],
    });
}
var ne = l(196765);
let nt = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    nl = (0, ne.v)(() => ({ byWidgetId: {} }));
function nn(e, t) {
    nl.setState((l) => {
        let n = l.byWidgetId[e] ?? nt;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function ni(e) {
    return nl((t) => t.byWidgetId[e]?.view ?? nt.view);
}
function ns(e) {
    return nl((t) => t.byWidgetId[e]?.isCompact ?? nt.isCompact);
}
function na(e) {
    return nl((t) => t.byWidgetId[e]?.selectedTrackId ?? nt.selectedTrackId);
}
function nr(e, t) {
    (nl.getState().byWidgetId[e] ?? nt).view !== t && nn(e, { view: t, selectedTrackId: null });
}
function nd(e) {
    return e.track_external_id;
}
function nc(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = na(n),
        c = nl((e) => e.byWidgetId[n]?.canShowEmbed ?? nt.canShowEmbed),
        o = s.useCallback(
            (e) => {
                let t;
                return (
                    (t = nl.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void nn(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = s.useCallback(
            (e, t) => (0, i.jsx)(l5, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = lo(r);
    return (0, i.jsxs)("div", {
        className: lS.U,
        children: [
            (0, i.jsx)(lv, {
                label: lb(l_.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nd,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(lg, { guildId: l, isCompact: a, canShowEmbed: c, song: m })
                : (0, i.jsx)(lf, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / em.A.Millis.MINUTE)) < 1
                              ? null
                              : E.intl.formatToPlainString(et.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : E.intl.format(et.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: ld(x),
                                    countHook: la,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var no = l(691885),
    nu = l(109765);
function nm(e) {
    let { widgetId: t } = e,
        l = ni(t),
        n = s.useMemo(() => lA.map((e) => ({ id: e, label: lb(e), value: e })), []),
        a = s.useCallback(
            (e) => {
                nr(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: nu.L,
        children: (0, i.jsx)(no.l, {
            selectionMode: "single",
            label: E.intl.string(et.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: a,
        }),
    });
}
var nx = l(871107);
function nh(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nx.$,
        children: [
            (0, i.jsx)("span", {
                className: nx.K,
                children: (0, i.jsx)(l7.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(g.q, { size: "md", children: t }),
        ],
    });
}
var nf = l(77915),
    ng = l(756936);
function nj(e) {
    return e.default_title ?? E.intl.string(et.default["5xxUI2"]);
}
var np = l(890497),
    nv = l(734057),
    n_ = l(317525),
    nA = l(576705),
    nN = l(935208),
    nb = l(44167);
l(321073);
var nE = l(485845),
    nI = l(136722),
    nS = l(435183),
    nC = l(155718),
    ny = l(795816),
    nT = l(933958),
    nk = l(627363),
    nD = l(712440),
    nR = l(733110),
    nw = l(488926),
    nL = l(818023);
async function nM(e) {
    null == en.A.getApplication(nL.NW) && (await (0, nk.TA)(nL.NW));
    let t = nT.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== nL.NW);
    return await (0, ny.su)({ channelId: e, applicationId: nL.NW, isStart: t, renderInFramePool: !0 });
}
async function nU(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nC.r2.ROLE, allow: nw.x3, deny: e9.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nC.r2.ROLE, allow: e9.xBc.USE_EMBEDDED_ACTIVITIES, deny: nw.x3 });
    let i = await (0, nS.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let nG = [];
var nP = l(344351),
    nO = l(256693),
    nB = l(343030),
    nW = l(317608),
    nz = l(953538);
let nF = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? tk(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tR.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tR.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(A.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tR.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [o, u] = s.useState(a.text ?? ""),
                [h, f] = s.useState(a.image),
                [g, j] = s.useState(null),
                p = (0, D.bG)([tc.A], () => tc.A.getGuildId()),
                v = void 0 !== h ? h : null != a.image_hash && null != p ? tk(p, t.id, a.image_hash) : null;
            return (0, i.jsxs)(N.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tb.k, {
                        label: E.intl.string(E.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tA.D, {
                        label: E.intl.string(E.t.X4IxWL),
                        children: (0, i.jsxs)(N.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tD.B,
                            children: [
                                (0, i.jsxs)(N.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tS.A, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tI.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: E.intl.string(E.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: tE.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": E.intl.string(E.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: tD.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tN.f, {
                        label: E.intl.string(E.t.COGMNC),
                        value: o,
                        onChange: function (e) {
                            (j(null), u(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != g &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(ta.w, { type: "critical", message: g, role: "none" }),
                        }),
                    (0, i.jsxs)(tr.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(B.$, { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(B.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != a.image_hash),
                                        0 === o.length && !e && (j(E.intl.string(et.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: o.length > 0 ? o : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== h && (t.image = h), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(g.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [d.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = eY(a, n?.status === "success" ? n.data : void 0),
                c = tp({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                u = s.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(k, {
                              minHeight: 390,
                              graphic: (0, i.jsx)(o, { alt: "", ariaHidden: !0, width: 200 }),
                              title: E.intl.string(et.default.wqHke4),
                              subtitle: E.intl.string(et.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(C, {})
                          : null != d
                            ? (0, i.jsx)(te, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(S, {})),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, D.bG)([tc.A], () => tc.A.getGuildId()),
                n = (0, D.bG)([td.A], () => td.A.getGuild(l), [l]),
                a = (0, tu.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, o] = s.useState(!1),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                f = s.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (h(!1), o(!0));
                    try {
                        (await ti.Bo.patch({
                            url: e9.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, tn.lA)(d, tm, !u) },
                            rejectWithError: !0,
                        }),
                            (0, to.q9)(l, to.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        h(!0);
                    } finally {
                        o(!1);
                    }
                }, [n, l, u, d, t]),
                g = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(N.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(ts.d, {
                        label: E.intl.string(et.default.v0iLIA),
                        description: E.intl.string(et.default["88c7ds"]),
                        checked: u ?? !(0, tn.Lt)(d ?? 0, tm),
                        onChange: m,
                        disabled: g,
                    }),
                    !r && (0, i.jsx)(ta.w, { type: "warning", children: E.intl.string(et.default["1hsDpi"]) }),
                    x && (0, i.jsx)(ta.w, { type: "critical", children: E.intl.string(et.default["4FcF2j"]) }),
                    (0, i.jsxs)(tr.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(B.$, {
                                variant: "secondary",
                                text: E.intl.string(E.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(B.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: f,
                                disabled: g,
                                loading: c,
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                s = eY(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(g.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(g.q, { children: eg(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(u.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eY(l, t?.status === "success" ? t.data : void 0);
            return null == n || ef(n) ? null : (0, i.jsx)(tj, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eY(l, s);
            return "mini" !== ep({ expanded: !1, column: n }) || (null != a && ef(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: E.intl.string(E.t.dcl9MQ),
                      children: (0, i.jsx)(x.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: h._,
                          "aria-label": E.intl.string(E.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (f.default.track(e9.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ej(a),
                                      leaderboard_view: ep({ expanded: !1, column: n }),
                                      metric: ev(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(t_, { guildId: t, data: l, modalProps: e });
                                      (0, e_.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: s }));
                          },
                      }),
                  });
        },
    },
    [d.a.POPULAR_GAMES]: {
        View: function (e) {
            let { widget: t, hydration: l, guildId: n, guildSpaceMode: s } = e;
            return "edit" === s && null == l
                ? (0, i.jsx)(k, {
                      minHeight: 273,
                      graphic: (0, i.jsx)(tw, { alt: "", ariaHidden: !0, width: 200 }),
                      title: E.intl.string(et.default.v59XPT),
                      subtitle: E.intl.string(et.default.Bayri1),
                  })
                : null == l || "idle" === l.status || "loading" === l.status
                  ? (0, i.jsx)(S, {})
                  : "error" === l.status
                    ? (0, i.jsx)(C, {})
                    : (0, i.jsx)(tX, { guildId: n, data: l.data, title: tJ(t) });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(g.q, { children: tJ(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(eO.GameControllerIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
    },
    [d.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                a,
                r,
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            nn(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tL.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            nl.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = ns(c.id),
                h = ni(c.id),
                f = na(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: p } = (0, nf.MX)(d),
                { data: v, shouldHideCurrentUser: _ } = (0, nf.qL)(d, o?.status === "success" ? o.data : void 0),
                A = "edit" === u,
                N = o?.status === "success" && lN(o.data),
                b = !x && !A && !N,
                E =
                    "view" === u && p && !g
                        ? (0, i.jsx)(lU, { guildId: d, widgetName: nj(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                I =
                    A || N || o?.status !== "success" || h === l_.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : le.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: ng.rf,
                ref: m,
                children: [
                    null != I &&
                        (0, i.jsx)("div", {
                            className: ng.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: ng.LZ, src: I, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: ng.Qs,
                        children: (0, i.jsx)("div", {
                            id: lI(c.id),
                            className: ng.nd,
                            role: b ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": b ? void 0 : lb(h),
                            "aria-labelledby": b ? lE(c.id, h) : void 0,
                            children: (function () {
                                if (A) return (0, i.jsx)(l4, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(S, {});
                                if ("error" === o.status) return (0, i.jsx)(C, {});
                                if (N) return (0, i.jsx)(lF, {});
                                if (null == v) return (0, i.jsx)(S, {});
                                switch (h) {
                                    case l_.TOP_SONGS:
                                        return (0, i.jsx)(nc, { guildId: d, widgetId: c.id, isCompact: x, data: v });
                                    case l_.TOP_ARTISTS:
                                        return (0, i.jsx)(lT, { isCompact: x, data: v });
                                    case l_.TOP_LISTENERS:
                                        return (0, i.jsx)(l8, {
                                            guildId: d,
                                            isCompact: x,
                                            data: v,
                                            shouldHideCurrentUser: _,
                                            upsell: E,
                                        });
                                }
                            })(),
                        }),
                    }),
                    h !== l_.TOP_LISTENERS && E,
                    (0, i.jsx)(lY, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nj(t),
                a = l?.status === "success" && lN(l.data);
            return "edit" === n || a ? (0, i.jsx)(g.q, { size: "md", children: s }) : (0, i.jsx)(nh, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                s = ns(t.id),
                a = ni(t.id);
            return l?.status === "success" && lN(l.data)
                ? null
                : s
                  ? (0, i.jsx)(nm, { widgetId: t.id })
                  : (0, i.jsx)(t2, {
                        label: n,
                        tabs: lA.map((e) => ({ id: e, label: lb(e) })),
                        selectedId: a,
                        panelId: lI(t.id),
                        getTabId: (e) => lE(t.id, e),
                        onSelect: (e) => nr(t.id, e),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nb.n)(),
                a = (0, D.bG)(
                    [nv.A, nA.A],
                    () => {
                        let e = null != n ? nv.A.getChannel(n) : void 0;
                        return null != e && nA.A.can(e9.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, D.bG)(
                    [nT.Ay],
                    () => {
                        let e = nT.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== nL.NW ||
                            e.location.kind !== nP.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, D.bG)([nT.Ay], () => nT.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, D.bG)(
                        [nR.default],
                        () => nR.default.getFetchStateForApplication(nL.NW) === nR.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, D.bG)(
                        [nR.default, en.A],
                        () => {
                            let e = nR.default.getNewestTokenForApplication(nL.NW);
                            if (null == e) return !1;
                            let t = en.A.getApplication(nL.NW),
                                l = t?.integrationTypesConfig?.[nE.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nR.default.getFetchStateForApplication(nL.NW) === nR.FetchState.NOT_FETCHED &&
                            nD.A.fetch([nL.NW]),
                            null == en.A.getApplication(nL.NW) && (0, nk.TA)(nL.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && o && u && !m.current && ((m.current = !0), nM(n));
            }, [a, n, d, o, u]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), nM(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(N.B, {
                      className: nz.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: nz.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(nW.A, {
                                    frameId: (0, nO.Ri)(d),
                                    level: nB.A.WithinAppContent,
                                    className: nz.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: nz.P5,
                                    children: (0, i.jsx)(B.$, {
                                        variant: "secondary",
                                        text: E.intl.string(et.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: nz.kL,
                        children: (0, i.jsx)("div", {
                            className: nz.m0,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: E.intl.string(et.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, D.bG)([tc.A], () => tc.A.getGuildId()),
                n = nN.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nb.n)(),
                r = (0, D.bG)([nv.A], () => (null != a ? nv.A.getChannel(a) : void 0), [a]),
                d = (0, D.bG)([nA.A], () => null != r && nA.A.can(e9.xBc.MANAGE_ROLES, r), [r]),
                c = (0, D.bG)([n_.A], () => (null == l ? nG : n_.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nI.zy(e.deny, e9.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nI.zy(t.allow, e9.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                [f, g] = s.useState(!1),
                j = u ?? o,
                p = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function v() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await nU({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(N.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(np.Z, {
                              selectionMode: "multiple",
                              label: E.intl.string(et.default.XXLbfv),
                              description: E.intl.string(et.default.XrpYIG),
                              placeholder: E.intl.string(et.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(ta.w, {
                                  type: "warning",
                                  message: E.intl.string(et.default.UPLtlA),
                                  role: "none",
                              }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(ta.w, {
                                      type: "critical",
                                      message: E.intl.string(et.default.xyCJYs),
                                      role: "none",
                                  }),
                              }),
                          (0, i.jsxs)(tr.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(B.$, {
                                      variant: "secondary",
                                      text: E.intl.string(E.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(B.$, {
                                      variant: "primary",
                                      text: E.intl.string(E.t["R3BPH+"]),
                                      onClick: v,
                                      disabled: !d,
                                      loading: x,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: r,
    },
};
