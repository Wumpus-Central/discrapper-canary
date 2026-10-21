l.d(t, { m: () => nJ });
var n,
    i = l(477900),
    s = l(582128),
    a = l(62617);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var d = l(593673),
    c = l(661531);
function u(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/58e54efe82f33e76cc9388d9907b1684625b43f15aa5bc7f85752f0f3d4e9be7.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var o = l(369606),
    m = l(866665),
    x = l(408278),
    f = l(26430),
    g = l(174459),
    h = l(562073),
    j = l(503698),
    p = l.n(j),
    v = l(289873),
    _ = l(738188),
    b = l(834730),
    A = l(331322),
    E = l(297264),
    N = l(105292),
    I = l(448492);
function C() {
    return (0, i.jsx)("div", {
        className: I.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": N.intl.string(N.t.ZTNur7) }),
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: I.w,
        role: "alert",
        children: [
            (0, i.jsx)(_.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: N.intl.string(N.t.F8FvUy) }),
        ],
    });
}
function y(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(A.B, {
        className: p()(I.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            null != l && (0, i.jsx)(l, { alt: "", ariaHidden: !0, width: 160 }),
            (0, i.jsxs)(A.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            a,
        ],
    });
}
var k = l(441920);
function T(e) {
    let { graphic: t, title: l, subtitle: n, minHeight: a } = e,
        r = s.useMemo(() => (null != a ? { minHeight: `${a}px` } : void 0), [a]);
    return (0, i.jsxs)(A.B, {
        className: k.VH,
        style: r,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsx)("div", { className: k.fA, children: t }),
            (0, i.jsxs)(A.B, {
                className: k.C,
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
var w = l(17928),
    R = l(364522),
    D = l(939249),
    L = l(663417),
    M = l(140735),
    U = l(97808),
    G = l(778712),
    P = l(463930),
    O = l(478016),
    B = l(821609),
    W = l(80682),
    z = l(827827),
    H = l(461213),
    F = l(287809),
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
var V = l(606072),
    Q = l(775602);
function Z() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, w.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
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
    et = l(61567);
function el(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, w.bG)([F.default], () => F.default.getUser(t), [t]),
        i = (0, w.bG)([J.Ay], () => J.Ay.getMember(e, t), [e, t]),
        s = (0, X.gn)(e, t, i?.colorStrings ?? null),
        a = ee.Ay.useName(e, void 0, n);
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        name: a,
        displayName: l ? N.intl.formatToPlainString(et.default.subXXA, { name: a }) : a,
    };
}
var en = l(587895),
    ei = l(429913),
    es = l(311043),
    ea = l(454908),
    er = l(403362);
function ed(e, t) {
    return { id: e, name: N.intl.string(N.t.GIWFlF), iconUrl: void 0, coverUrl: void 0, isLoading: t };
}
function ec(e) {
    let t = (0, ei.A)(e),
        l = (0, w.yK)([en.A], () => e.map((e) => en.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(er.Vq), [n]);
    (0, ea.x)(i);
    let a = (0, w.yK)([es.A], () => n.map((e) => (null != e ? es.A.getGame(e) : void 0))),
        r = (0, w.yK)([es.A], () => n.map((e) => null != e && (es.A.didFetchingFail(e) || es.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    c = a[s],
                    u = null == d && !l[s],
                    o = null == c && null != n[s] && !r[s];
                null == d || o
                    ? i.set(e, ed(e, u || o))
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
function eu(e, t) {
    return e.get(t) ?? ed(t, !1);
}
function eo(e, t) {
    return t.map((t) => eu(e, t));
}
var em = l(927813),
    ex = l(251812),
    ef = l(518782);
function eg(e) {
    return e.entries.length < 3;
}
function eh(e) {
    return (0, ex.K)(eg(e) ? void 0 : e.stat).name;
}
function ej(e) {
    let t;
    return eg(e)
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
        case ef.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case ef.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case ef.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
var e_ = l(192308);
function eb(e, t, n) {
    (0, e_.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("518264"),
                l.e("5257"),
                l.e("6050"),
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
                l.e("16954"),
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
var eA = l(823353);
function eE(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, V.T4)(t),
        s = null != n ? et.default.wyIs4o : et.default["81PK67"];
    return (0, i.jsx)(y, {
        className: eA.w,
        illustration: u,
        title: N.intl.string(et.default.ULK65a),
        body: N.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(B.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(et.default.A4ZMJL),
                      onClick: () => {
                          (l(), eb(t, n, N.intl.string(et.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eN =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eI = `${eN} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eC(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eN,
        srcSet: eI,
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eS =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ey = `${eS} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function ek(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eS,
        srcSet: ey,
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var eT = l(846058),
    ew = l(342296);
function eR(e) {
    let t = Math.floor(Math.max(e, 0) / em.A.Seconds.MINUTE),
        l = Math.floor(t / em.A.Minutes.HOUR),
        n = t % em.A.Minutes.HOUR;
    return 0 === l
        ? N.intl.formatToPlainString(et.default.DdzvGL, { minutes: n })
        : N.intl.formatToPlainString(et.default["6Y8H0A"], { hours: l, minutes: n });
}
function eD(e, t) {
    switch (t) {
        case ef.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eR(e.time_played_seconds),
            };
        case ef.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(et.default.rgpc8E, { count: e.value }),
                secondary: eR(e.time_played_seconds),
            };
        case ef.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / em.A.Millis.MINUTE)) / em.A.Minutes.HOUR)),
                    (i = l % em.A.Minutes.HOUR),
                    0 === n
                        ? N.intl.formatToPlainString(et.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? N.intl.formatToPlainString(et.default["D/HToK"], { hours: n })
                          : N.intl.formatToPlainString(et.default.fvtrHn, { hours: n, minutes: i })),
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
    eH = l(994500),
    eF = l(396583),
    eK = l(280450);
function eq(e, t) {
    let l = t.user_id,
        n = (0, w.bG)([eK.default], () => eK.default.getId() === l, [l]);
    return el(e, l, { showYouSuffix: n });
}
function eY(e, t) {
    let l = (0, w.bG)([F.default], () => F.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, V.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var e$ = l(518477),
    eV = l(870087);
function eQ(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: a,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: u,
            onClick: o,
            metricWidth: m,
        } = e,
        x = eq(t, l),
        f = l.application_ids[0],
        g = null != f ? eu(a, f) : void 0,
        h = l.user_id,
        j = s.useCallback(() => {
            (o?.(),
                (0, ez.openUserProfileModal)({
                    userId: h,
                    guildId: t,
                    tabSection: e$.RP.ACTIVITY,
                    scrollTarget: e$.bk.RECENT_ACTIVITY,
                }));
        }, [o, h, t]);
    return (0, i.jsxs)("div", {
        ref: u,
        "aria-hidden": c,
        inert: c,
        className: p()(eV.nM, { [eV.Bh]: r && !c, [eV.lR]: d }),
        children: [
            (0, i.jsx)(eZ, { guildId: t, entry: l, identity: x, lastPlayedGame: g, onClick: o }),
            (0, i.jsx)(e0, { entry: l, stat: n, width: m, onClick: j }),
            (0, i.jsx)(e3, {
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
        u = (0, w.bG)(
            [eH.A],
            () => (eH.A.isBlocked(l.user_id) ? "blocked" : eH.A.isIgnored(l.user_id) ? "ignored" : null),
            [l.user_id],
        ),
        o = null != u,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eX, { rank: l.rank }),
                o
                    ? (0, i.jsx)("span", {
                          className: eV.gt,
                          children:
                              "blocked" === u
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
                          className: eV.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: eV.Dc,
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: o ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != u
                                    ? (function (e) {
                                          switch (e) {
                                              case "blocked":
                                                  return N.intl.string(et.default.I3YOjC);
                                              case "ignored":
                                                  return N.intl.string(et.default.CfMzwe);
                                          }
                                      })(u)
                                    : (0, i.jsx)(P.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                      }),
                        }),
                        !o &&
                            null != a &&
                            (0, i.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(et.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eV.D_, children: m })
        : (0, i.jsx)(ew.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(D.D, {
                      ...e,
                      innerRef: d,
                      className: p()(eV.D_, eV.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: m,
                  }),
          });
}
function eX(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(et.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eV.Tm, children: (0, i.jsx)(eL.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eV.Tm, children: (0, i.jsx)(eC, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eV.Tm, children: (0, i.jsx)(ek, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eV.mH,
                children: [
                    (0, i.jsx)(M.A, { children: l }),
                    (0, i.jsx)(b.E, {
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
        case ef.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eG.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ef.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eP.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ef.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eO.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function e0(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eD(t, l);
    return (0, i.jsxs)(D.D, {
        className: eV.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": N.intl.string(et.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eV.bf,
                children: [
                    (0, i.jsx)(eJ, { stat: l }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function e1(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eV.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eV.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eV.ct, "aria-hidden": !0 }),
        }),
    });
}
function e2(e) {
    let { played: t, totalCount: l } = e,
        n = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        s = l - n.length;
    return (0, i.jsxs)("div", {
        className: eV.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(e1, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eV.rO,
                      children: (0, i.jsx)(eW.Ay, {
                          mask: eW.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eV.p0,
                              children: (0, i.jsx)(b.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: N.intl.formatToPlainString(et.default.JiMMEd, { count: s }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function e6(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(eB.u, {
        body:
            0 === t.length
                ? N.intl.string(et.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(et.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? N.intl.formatToPlainString(et.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : N.intl.formatToPlainString(et.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: s.length > 0 ? (0, i.jsx)(e2, { played: s, totalCount: s.length }) : void 0,
        assetSize: s.length > 1 ? 43 : 24,
        children: n,
    });
}
function e3(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = eo(s, l);
    return (0, i.jsx)("div", {
        className: eV.ag,
        children: (0, i.jsx)(e6, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(D.D, {
                className: p()(eV.Nw, eV.Dz),
                "aria-label": N.intl.formatToPlainString(et.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(e2, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e4 = l(189043);
function e8(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e4.HC, pillar: e4.P5 },
            2: { column: e4.th, pillar: e4.Vk },
            3: { column: e4.Ou, pillar: e4.el },
        };
    return (0, i.jsx)("div", {
        className: e4.pI,
        role: "list",
        "aria-label": N.intl.string(et.default.wKXLfQ),
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
            isCurrentUser: u,
            currentUserPillarRef: o,
            onClick: m,
        } = e,
        x = eo(c, l.application_ids),
        f = eq(t, l),
        { primary: g } = eD(l, d),
        h = 1 === n ? G._3.SIZE_48 : G._3.SIZE_40,
        j = s.useRef(null),
        v = 1 === n ? eT.b : 2 === n ? eC : ek,
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e4.R3,
                    children: [
                        (0, i.jsx)(U.eu, {
                            size: h,
                            src: f.user?.getAvatarURL(t, (0, G.FT)(h)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v, { className: e4.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p()(e4.DX, r),
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: e4.IY,
                            children: (0, i.jsx)(P.g, {
                                name: f.displayName,
                                colorString: f.member?.colorString ?? null,
                                colorStrings: f.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(e6, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: g,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: a,
        role: "listitem",
        ref: u ? o : void 0,
        children:
            null != f.user
                ? (0, i.jsx)(ew.A, {
                      targetElementRef: j,
                      user: f.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(D.D, {
                              ...e,
                              className: e4.fs,
                              innerRef: j,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: _,
                          }),
                  })
                : (0, i.jsx)("div", { className: e4.fs, children: _ }),
    });
}
var e5 = l(652215),
    e9 = l(219047);
function te(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: c } = l,
        u = (0, w.bG)([F.default], () => F.default.getCurrentUser()?.id),
        o = s.useMemo(() => c.find((e) => e.user_id === u) ?? null, [c, u]),
        m = s.useMemo(() => {
            let e = c.slice(0, 20);
            return null == o || e.includes(o) ? e : [...e, o];
        }, [c, o]),
        x = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, W.k6)(t, x);
    let f = ev(d),
        h = ec(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        j = eg(l),
        v = ej(l),
        _ = "podium" === v,
        b = ep({ expanded: n, column: a }),
        A = [m[0], m[1], m[2]],
        { scrollerRef: E, scrollerNode: I, userRowRef: S, floatingRowPosition: y, scrollToUserRow: k } = Z(),
        T = (function (e) {
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
        L = null == o && null != u,
        M = null != y,
        U = s.useMemo(() => {
            let e = null == o || m.includes(o) ? m : [...m, o];
            return e.length > 0 ? e : m;
        }, [m, o]),
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
            className: e9.V$,
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
            u = s.useRef(null),
            o = `${t}:${l}:${n}:${i}:${a}`,
            m = s.useCallback(() => {
                u.current !== o &&
                    ((u.current = o),
                    g.default.track(e5.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, o, l, n, i, a]);
        s.useEffect(() => {
            !c && (d || r) && m();
        }, [c, d, r, m]);
    })({
        guildId: t,
        leaderboardLength: j ? 0 : m.length,
        leaderboardState: v,
        leaderboardView: b,
        metric: f,
        isAtEnd: T,
        isEmpty: j,
        disabled: r,
    });
    let B = s.useCallback(
            (e) => {
                r ||
                    g.default.track(e5.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: b,
                        metric: f,
                    });
            },
            [t, v, b, f, r],
        ),
        z = s.useCallback(
            (e) => {
                let l = e === o;
                return (0, i.jsx)(
                    eQ,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: h,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && M,
                        rowRef: l ? S : void 0,
                        onClick: () => B("row"),
                        metricWidth: P ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [M, o, h, t, d, S, B, P],
        );
    return j
        ? (0, i.jsx)("div", {
              className: e9.Cm,
              children: (0, i.jsx)(eE, { guildId: t, onActivitySharingClick: () => B("activity_sharing") }),
          })
        : null == P
          ? (0, i.jsxs)("div", { className: e9.rf, children: [O, (0, i.jsx)(C, {})] })
          : (0, i.jsxs)("div", {
                className: e9.rf,
                children: [
                    O,
                    (0, i.jsxs)("div", {
                        className: e9.SY,
                        children: [
                            (0, i.jsxs)(R.d_, {
                                className: p()(e9.p_, { [e9.zE]: n, [e9.Ng]: L }),
                                ref: E,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e8, {
                                            guildId: t,
                                            entries: A,
                                            stat: d,
                                            games: h,
                                            currentUserEntry: o,
                                            currentUserPillarRef: S,
                                            onClick: () => B("podium"),
                                        }),
                                    m.map(z),
                                ],
                            }),
                            (null != o && null != y) || (L && !T)
                                ? (0, i.jsx)(Y, { position: "top" !== y || L ? "bottom" : "top" })
                                : null,
                            null != o &&
                                null != y &&
                                (0, i.jsx)($, {
                                    position: y,
                                    children: (0, i.jsx)(D.D, {
                                        className: e9.Po,
                                        "aria-label": N.intl.string(et.default.d0Z8kd),
                                        onClick: k,
                                        children: (0, i.jsx)(eQ, {
                                            guildId: t,
                                            entry: o,
                                            stat: d,
                                            games: h,
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
            className: e9.z8,
            children: [
                (0, i.jsx)(L.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(b.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(et.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: e9.qr, children: n })
        : (0, i.jsx)("div", {
              className: p()(e9.qr, { [e9.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: N.intl.formatToPlainString(et.default["1bt50t"], {
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
        } = (0, V.T4)(t),
        u = null != d,
        o = (0, w.bG)([H.A], () => H.A.getStatus() === e5.clD.INVISIBLE),
        m = N.intl.string(et.default.toxuHd),
        x = !1;
    n && a
        ? r
            ? o && ((m = N.intl.string(et.default.PTDDhW)), (x = !0))
            : (m = N.intl.string(et.default.mTARYx))
        : (m = N.intl.string(et.default["8y885d"]));
    let [f] = s.useState(u),
        [g] = s.useState(x),
        h = !u && !x && f,
        j = !u && !x && g;
    j ? (m = N.intl.string(et.default.cgRADC)) : h && (m = N.intl.string(et.default.dqYuni));
    let {
        user: p,
        member: v,
        name: _,
        roleColorStrings: A,
    } = el(
        t,
        (0, w.bG)([F.default], () => F.default.getCurrentUser()?.id ?? ""),
    );
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              className: e9.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: e9.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: e9.nk,
                              children: [
                                  (0, i.jsx)(M.A, { children: N.intl.string(et.default["oHdW+u"]) }),
                                  (0, i.jsx)(b.E, {
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
                              className: e9.SA,
                              "aria-hidden": !0,
                              status: o ? e5.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: e9.ko,
                              children: [
                                  (0, i.jsx)(E.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(P.g, {
                                          name: _,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: A,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: e9.LF,
                                      children: [
                                          h || j
                                              ? (0, i.jsx)(O.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(b.E, {
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
                  u &&
                      (0, i.jsx)("div", {
                          className: e9.rl,
                          children: (0, i.jsx)(B.$, {
                              variant: "secondary",
                              size: "sm",
                              text: N.intl.string(et.default.fMbgeZ),
                              onClick: () => {
                                  (l(), eb(t, d, N.intl.string(et.default.PJn0ih)));
                              },
                          }),
                      }),
                  x &&
                      !u &&
                      (0, i.jsx)(B.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, z.A)({ nextStatus: e5.clD.ONLINE, prevStatus: e5.clD.INVISIBLE });
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
    tu = l(49303),
    to = l(313627);
let tm = e5.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tx = l(224640),
    tf = l(20742),
    tg = l(885386),
    th = l(515746);
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
                (0, eF.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? N.intl.string(et.default["J8r/7L"])
                            : N.intl.formatToPlainString(et.default["PuaR+2"], {
                                  days: Math.ceil(i / em.A.Millis.DAY),
                              }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tg.PZ.useSetting(),
        c = 2 > (0, K.m_)(a, new Date()) ? (0, K.mk)(a, !1, d).toLowerCase() : (0, K.i$)(a, "L LT", d).toLowerCase(),
        u = n
            ? N.intl.format(et.default.kG9XmM, { endedAt: c, nextStatName: (0, ex.K)(t.next_stat).name })
            : N.intl.format(et.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eB.u, {
        title: l.name,
        body: u,
        position: "top",
        children: (0, i.jsx)("div", {
            className: p()(th.qS, n ? th.yM : th.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tp(e) {
    let { onHoverEnd: t, segmentKey: l, enabled: n = !0 } = e,
        [i, a] = s.useState(null),
        r = s.useRef(null),
        d = s.useRef(t),
        c = s.useRef(l),
        u = s.useCallback((e) => {
            let t = r.current;
            if (null == t) return;
            r.current = null;
            let l = Date.now() - t;
            l < 250 || d.current({ duration: Math.round(l) / 1e3, flush: e });
        }, []);
    return (
        s.useEffect(() => {
            (c.current !== l && null != r.current && (u(!1), (r.current = Date.now())),
                (c.current = l),
                (d.current = t));
        }, [l, t, u]),
        s.useEffect(() => {
            if (null != i && n)
                return (
                    i.addEventListener("mouseenter", e),
                    i.addEventListener("mouseleave", t),
                    window.addEventListener("blur", l),
                    document.addEventListener("visibilitychange", s),
                    window.addEventListener("pagehide", a),
                    () => {
                        (i.removeEventListener("mouseenter", e),
                            i.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", l),
                            document.removeEventListener("visibilitychange", s),
                            window.removeEventListener("pagehide", a),
                            u(!0));
                    }
                );
            function e() {
                r.current = Date.now();
            }
            function t() {
                u(!1);
            }
            function l() {
                u(!1);
            }
            function s() {
                "hidden" === document.visibilityState && u(!0);
            }
            function a() {
                u(!0);
            }
        }, [i, n, u]),
        s.useCallback((e) => {
            a(e);
        }, [])
    );
}
function tv(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a } = e,
        r = s.useCallback(
            (e) => {
                let { duration: s, flush: a } = e;
                null != l &&
                    g.default.track(
                        e5.HAw.LEADERBOARD_HOVER,
                        {
                            guild_id: t,
                            duration: s,
                            leaderboard_state: ej(l),
                            leaderboard_view: ep({ expanded: n, column: i }),
                            metric: ev(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        );
    return tp({ onHoverEnd: r, enabled: a });
}
var t_ = l(460614);
function tb(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eY(t, l),
        a = tv({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tx.d, {
              size: "lg",
              "aria-label": eh(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: t_.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: t_.LD,
                                  children: [
                                      (0, i.jsx)(o.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(E.D, {
                                          variant: "heading-sm/medium",
                                          className: t_.DD,
                                          children: eh(s),
                                      }),
                                      (0, i.jsx)(tj, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tf.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: t_.rf,
                          children: (0, i.jsx)(te, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tA = l(452027),
    tE = l(103557),
    tN = l(95477),
    tI = l(241326),
    tC = l(2553),
    tS = l(405810),
    ty = l(488428),
    tk = l(776231);
let tT = (0, l(676279).cy)();
function tw(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tT ? "webp" : "gif") : tT ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = e5.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, tk.kr)(500 * (0, tk.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${ty.stringify(c)}`)
    );
}
var tR = l(868602),
    tD = l(445187);
function tL(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/d561fd91d87017743133e6f7c82388345a8938aa2434a28cc42077d126076514.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var tM = l(770178),
    tU = l(104171),
    tG = l(889227),
    tP = l(427262),
    tO = l(950305),
    tB = l(409626),
    tW = l(692969),
    tz = l(788593),
    tH = l(948852),
    tF = l(365611);
function tK(e) {
    let { totalUsers: t, gameName: l } = e,
        n = N.intl.formatToPlainString(et.default["XaT+x0"], { count: t, gameName: l });
    return (0, i.jsxs)("div", {
        className: tH.Fk,
        role: "img",
        "aria-label": n,
        children: [
            (0, i.jsx)(tO.UserIcon, {
                size: "custom",
                width: 14,
                height: 14,
                color: c.A.colors.ICON_SUBTLE,
                "aria-hidden": !0,
            }),
            (0, i.jsx)(b.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
        ],
    });
}
function tq(e) {
    let { entry: t, games: l } = e,
        { name: n, coverUrl: s, isLoading: a } = eu(l, t.application_id),
        r = (0, tW.A)({
            location: "PopularGamesGameCard",
            applicationId: t.application_id,
            source: tB.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        d = null != r;
    if (a)
        return (0, i.jsx)("div", {
            className: tH.Nr,
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
                    children: (0, i.jsx)(tz.R, { imageSrc: s, gameName: n }),
                }),
            }),
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: n }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tH.Nr,
        role: "listitem",
        children: [
            d
                ? (0, i.jsx)(D.D, {
                      className: p()(tH.LO, tH.vk),
                      onClick: r,
                      "aria-label": N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: n }),
                      children: c,
                  })
                : (0, i.jsx)("div", { className: tH.LO, children: c }),
            (0, i.jsx)(tK, { totalUsers: t.total_users, gameName: n }),
        ],
    });
}
var tY = l(347661),
    t$ = l(57129),
    tV = l(560328);
function tQ(e) {
    let { guildId: t } = e,
        { requirement: l } = (0, V.T4)(t);
    return (0, i.jsx)(y, {
        className: tV.p$,
        illustration: tL,
        title: N.intl.string(et.default.ULK65a),
        body: N.intl.format(null != l ? et.default.JDAHQV : et.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(B.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(et.default.A4ZMJL),
                      onClick: () => eb(t, l, N.intl.string(et.default.e7pD5m)),
                  })
                : null,
    });
}
function tZ(e) {
    let { guildId: t, requirement: l } = e;
    return (0, i.jsxs)("div", {
        className: tV.UX,
        children: [
            (0, i.jsxs)("div", {
                className: tV.tD,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: N.intl.string(t$.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children:
                            l === V.kG.ACTIVITY_SHARING
                                ? N.intl.string(et.default.wyK5KO)
                                : N.intl.string(et.default.uQOR1j),
                    }),
                ],
            }),
            (0, i.jsx)(B.$, {
                variant: "secondary",
                size: "sm",
                text: N.intl.string(et.default.fMbgeZ),
                onClick: () => eb(t, l, N.intl.string(et.default.e7pD5m)),
            }),
        ],
    });
}
function tX(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, w.yK)(
            [F.default],
            () =>
                l
                    .map((e) => F.default.getUser(e))
                    .filter(er.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: tV.qr,
        children: [
            (0, i.jsx)(b.E, {
                className: tV.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: N.intl.format(et.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: tV.WM,
                    children: (0, i.jsx)(tU.Ay, {
                        users: d,
                        guildId: t,
                        size: tU.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            if (!(e instanceof tG.A)) return null;
                            let l = ee.Ay.getNickname(t, void 0, e) ?? tP.Ay.getName(e);
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
                                className: tV.ju,
                                children: (0, i.jsx)(b.E, {
                                    tag: "span",
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    children: N.intl.formatToPlainString(et.default.G5PLYW, { count: c }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function tJ(e) {
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
            return ((0, tM.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: c } = (0, V.T4)(t),
        u = (0, w.bG)([F.default], () => F.default.getCurrentUser()?.id),
        o = s.useMemo(() => (null != c ? l.user_ids.filter((e) => e !== u) : l.user_ids), [l.user_ids, c, u]),
        m = s.useMemo(() => ({ ...l, user_ids: o }), [l, o]),
        x = (0, tY.m)(m),
        f = x ? [] : m.user_ids;
    (0, W.k6)(t, f);
    let g = s.useMemo(() => m.games.map((e) => e.application_id), [m.games]),
        h = ec(g),
        j = s.useMemo(() => g.map((e) => h.get(e)?.coverUrl).find(er.Vq) ?? null, [h, g]),
        p = s.useMemo(() => ({ "--custom-popular-games-columns": r }), [r]),
        v = null;
    return (
        (v = x
            ? (0, i.jsx)(tQ, { guildId: t })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: tV.Qs,
                          children: [
                              null != j
                                  ? (0, i.jsx)("div", {
                                        className: tV.G,
                                        children: (0, i.jsx)("img", { className: tV.LZ, src: j, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: tV.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: p,
                                  children: m.games
                                      .slice(0, r)
                                      .map((e) => (0, i.jsx)(tq, { entry: e, games: h }, e.application_id)),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: tV.sQ,
                          children: [
                              null != c && (0, i.jsx)(tZ, { guildId: t, requirement: c }),
                              (0, i.jsx)(tX, {
                                  guildId: t,
                                  memberIds: f,
                                  totalUsers: m.total_users,
                                  totalGames: m.total_games,
                                  isCompact: d,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: tV.rf, ref: a, children: v })
    );
}
function t0(e) {
    return e.default_title ?? N.intl.string(et.default.GZsvDx);
}
var t1 = l(612324),
    t2 = l(650583),
    t6 = l(684343);
function t3(e) {
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
                    case t2.dh.ARROW_RIGHT:
                    case t2.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case t2.dh.ARROW_LEFT:
                    case t2.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case t2.dh.HOME:
                        t = 0;
                        break;
                    case t2.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: t6.vR,
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
                    className: t6.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(b.E, {
                        className: t6.Pf,
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
var t4 = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let t8 = ["top_songs", "top_artists", "top_listeners"];
function t7(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function t5(e) {
    return e.top_listeners.length < 2;
}
function t9(e, t) {
    return t7(e) || ("top_listeners" === t && t5(e)) ? "empty_state" : "populated";
}
function le(e) {
    return e ? "compact" : "regular";
}
function lt(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(et.default.KgeEtx);
        case "top_artists":
            return N.intl.string(et.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(et.default.KO73KB);
    }
}
function ll(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function ln(e) {
    return `popular-music-panel-${e}`;
}
var li = l(196765);
let ls = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    la = (0, li.v)(() => ({ byWidgetId: {} }));
function lr(e, t) {
    la.setState((l) => {
        let n = l.byWidgetId[e] ?? ls;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function ld(e) {
    return la((t) => t.byWidgetId[e]?.view ?? ls.view);
}
function lc(e) {
    return la((t) => t.byWidgetId[e]?.isCompact ?? ls.isCompact);
}
function lu(e) {
    return la((t) => t.byWidgetId[e]?.selectedTrackId ?? ls.selectedTrackId);
}
function lo(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    g.default.track(e5.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? t9(l, n) : null,
        popular_music_view: n,
        popular_music_layout: le(i),
    });
}
function lm(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = ld(l),
        a = lc(l);
    return s.useCallback((e) => lo({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lx(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = ld(l),
        c = lc(l),
        u = null != n ? t9(n, d) : null,
        o = le(c),
        m = "empty_state" === u,
        x = s.useRef(null),
        f = `${t}:${i}:${u}:${d}:${o}`,
        h = s.useCallback(() => {
            x.current !== f &&
                ((x.current = f),
                g.default.track(e5.HAw.POPULAR_MUSIC_END_IMPRESSION, {
                    guild_id: t,
                    popular_music_length: m ? 0 : i,
                    popular_music_state: u,
                    popular_music_view: d,
                    popular_music_layout: o,
                }));
        }, [t, f, m, i, u, d, o]);
    s.useEffect(() => {
        !r && null != u && (m || a) && h();
    }, [r, u, m, a, h]);
}
function lf(e) {
    let [t, l] = s.useState(null),
        n = s.useCallback(
            (t) => {
                l((l) => (l?.contentKey === e && l.isAtEnd === t ? l : { contentKey: e, isAtEnd: t }));
            },
            [e],
        );
    return [t?.contentKey === e && t.isAtEnd, n];
}
var lg = l(59652),
    lh = l(991308),
    lj = l(28863),
    lp = l(148166),
    lv = l(427209),
    l_ = l(294454),
    lb = l(605810);
function lA(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lb.ql,
        children: (0, i.jsx)(m.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: lv.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
                onClick: () => {
                    (s(),
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
                                    l.e("6050"),
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
                                    l.e("70690"),
                                    l.e("587618"),
                                    l.e("645499"),
                                    l.e("726391"),
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
                                    l.e("205596"),
                                    l.e("140402"),
                                    l.e("199999"),
                                    l.e("828111"),
                                    l.e("890027"),
                                    l.e("721690"),
                                    l.e("809915"),
                                    l.e("136022"),
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
                                    l.e("502018"),
                                    l.e("92124"),
                                    l.e("955184"),
                                    l.e("165595"),
                                    l.e("249366"),
                                    l.e("728633"),
                                    l.e("628439"),
                                    l.e("631608"),
                                    l.e("756148"),
                                    l.e("988077"),
                                    l.e("776750"),
                                    l.e("225990"),
                                    l.e("539620"),
                                    l.e("183534"),
                                    l.e("935715"),
                                    l.e("248329"),
                                    l.e("276863"),
                                    l.e("123353"),
                                    l.e("561216"),
                                    l.e("401590"),
                                    l.e("498215"),
                                    l.e("313681"),
                                    l.e("552712"),
                                    l.e("829177"),
                                    l.e("592028"),
                                    l.e("106943"),
                                    l.e("133902"),
                                    l.e("232551"),
                                    l.e("892340"),
                                    l.e("425906"),
                                    l.e("14962"),
                                    l.e("123216"),
                                    l.e("770291"),
                                    l.e("593176"),
                                    l.e("588940"),
                                    l.e("643612"),
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
                                    l.e("716092"),
                                    l.e("784041"),
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
                                    l.e("556967"),
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
                                    l.e("278424"),
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
                            { stackingBehavior: "stack", modalKey: l_.aU },
                        ));
                },
            }),
        }),
    });
}
var lE = l(272984);
function lN(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lE.RQ.IMAGE(t.artist_image_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lE.RQ.WEB_OPEN(lE.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        u = s.useMemo(() => lg.V.getDefaultLinkInterceptor(c.shareUrl), [c.shareUrl]),
        o = s.useCallback(
            (e) => {
                (a(), u?.(e));
            },
            [u, a],
        ),
        m = (0, i.jsx)(lp.R, { src: d, isCircular: !0, FallbackIcon: lh.I });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lb.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lb.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lb.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(lj.Anchor, {
                      ...l,
                      className: lb.MT,
                      href: c.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: o,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lb.Qq,
                              children: (0, i.jsx)(b.E, {
                                  className: lb.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lA, { target: c, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var lI = l(872351),
    lC = l(708988),
    lS = l(628137);
let ly = "none",
    lk = (e, t) => (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function lT(e) {
    return e;
}
function lw(e) {
    return e?.direction ?? ly;
}
function lR(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(et.default["h+LUpk"], { percent: t }) };
}
function lD(e) {
    return lR(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lL = l(633099);
function lM(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? lI.z : lC.M;
    return (0, i.jsxs)("span", {
        className: lL.GW,
        children: [
            (0, i.jsx)(l, {
                className: p()({ [lL.$J]: "up" === t.direction, [lL.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lU(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, w.yK)(
            [eH.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !eH.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, W.k6)(l, a);
    let r = (0, w.yK)([F.default], () => a.map((e) => F.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lL.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(et.default.AzIhRB, { count: t, trend: ly, countHook: lT })),
        children: (0, i.jsx)(tU.Ay, {
            users: d,
            guildId: l,
            size: tU.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lL.ju,
                    children: (0, i.jsx)(b.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: N.intl.formatToPlainString(et.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function lG(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lL.aF,
        children: [
            (0, i.jsx)(lS.A, {
                resourceType: lE.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lL.Ls, "aria-hidden": !0 }),
        ],
    });
}
function lP(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: p()(lL.yp, { [lL.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lL.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(b.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lL._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(b.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(lM, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function lO(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = lR(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: p()(lL.yp, { [lL.Fl]: n }),
        children: [
            s && (0, i.jsx)(lG, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: p()(lL.QD, lL.rk),
                children: [
                    (0, i.jsx)(lU, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lL._0,
                        children: [
                            (0, i.jsx)(b.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    N.intl.format(et.default["7hHUIS"], { count: t, trend: lw(r), countHook: lk })),
                            }),
                            null != r && (0, i.jsx)(lM, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lB = l(197935),
    lW = l(915734);
function lz(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: r, onScrollEndChange: d } = e,
        [c, u] = s.useState(null),
        o = l.length - 1;
    s.useEffect(() => {
        if (null == c) return;
        let e = new IntersectionObserver(
            (e) => {
                let [t] = e;
                null != t && d(t.intersectionRatio >= 0.99);
            },
            { threshold: [0, 0.99] },
        );
        return (e.observe(c), () => e.disconnect());
    }, [c, d]);
    let m = s.useCallback((e, t, l) => r(e, t, l === o ? u : void 0), [r, o]);
    return (0, i.jsx)("div", {
        className: p()(lW.Dk, { [lW.yI]: n }),
        children: (0, i.jsx)(lB.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lW.o1,
            "aria-label": t,
        }),
    });
}
var lH = l(742452);
function lF(e) {
    return e.artist_external_id;
}
function lK(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lf(a.ranked_artists.length),
        c = lm({ guildId: t, widgetId: l, data: a });
    lx({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let u = s.useCallback(() => c("artist"), [c]),
        o = s.useCallback(() => c("forward"), [c]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lN, { artist: e, itemProps: t, cardRef: l, onClick: u, onForwardClick: o }),
            [u, o],
        );
    if (0 === a.ranked_artists.length) return null;
    let x = lD(a);
    return (0, i.jsxs)("div", {
        className: lH.U,
        children: [
            (0, i.jsx)(lz, {
                label: lt(t4.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: lF,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(lP, {
                isCompact: n,
                headline:
                    a.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(et.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : N.intl.format(et.default.yGqf0D, {
                              memberCount: a.distinct_listeners,
                              artistCount: a.distinct_artists,
                              trend: lw(x),
                              memberCountHook: lk,
                              artistCountHook: lk,
                          }),
                trend: x,
            }),
        ],
    });
}
var lq = l(803613),
    lY = l(682348),
    l$ = l(73152),
    lV = l(280911);
function lQ(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, w.bG)([F.default], () => F.default.getCurrentUser()),
        s = (0, w.bG)([J.Ay], () => (null != n ? J.Ay.getMember(t, n.id) : null)),
        a = (0, X.gn)(t, n?.id, s?.colorStrings ?? null),
        r = ee.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: lV.D_,
        children: [
            (0, i.jsxs)("div", {
                className: lV.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: lV.eu, children: (0, i.jsx)(lq.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: lV.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: lV.Om }),
                                        (0, i.jsx)("span", { className: lV.Om }),
                                        (0, i.jsx)("span", { className: lV.Om }),
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
                className: lV.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(P.g, {
                            name: N.intl.formatToPlainString(et.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.string(et.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function lZ(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: lV.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: lV.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(lY._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: lV.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(t$.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.formatToPlainString(et.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function lX(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: lV.UX,
        children: [
            a ? (0, i.jsx)(lZ, { widgetName: n, isCompact: s }) : (0, i.jsx)(lQ, { guildId: t, isCompact: s }),
            (0, i.jsx)(B.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : l$.E,
                text: a ? N.intl.string(N.t.KY0ilj) : N.intl.string(et.default.jB1fWC),
                onClick: () => {
                    (r(),
                        (0, e_.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e("120239"),
                                    l.e("955410"),
                                    l.e("518264"),
                                    l.e("5257"),
                                    l.e("6050"),
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
                                    l.e("16954"),
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
                        ));
                },
            }),
        ],
    });
}
function lJ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/e5cd35ca79f49d81161fc468618bf0291bd91c44fbb5190819cd6dffcf71fef0.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var l0 = l(625903),
    l1 = l(780964),
    l2 = l(766075),
    l6 = l(30370),
    l3 = l(123894);
function l4(e) {
    let { onSettingsClick: t } = e,
        l = (0, w.bG)([l6.A], () => l6.A.getAccounts().some((e) => e.type === e5.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(y, {
        className: l3.w,
        illustration: lJ,
        title: N.intl.string(et.default.ULK65a),
        body: N.intl.format(l ? et.default.BLuvck : et.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(B.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: l0.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, l2.openUserSettings)(l1.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function l8() {
    return (0, i.jsx)(y, {
        className: l3.w,
        illustration: lJ,
        title: N.intl.string(et.default.ULK65a),
        body: N.intl.format(et.default.ZQxU8v, { memberCount: 2 }),
    });
}
var l7 = l(109487),
    l5 = l(279543);
function l9(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: l5.qr,
        children: [
            (0, i.jsxs)("div", {
                className: l5.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: l5.Kk,
                        children: (0, i.jsx)(L.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        className: l5.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(et.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(lj.Anchor, {
                className: l5.al,
                href: lE.RQ.WEB_HOME,
                "aria-label": N.intl.string(et.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: l5.Kk,
                        children: (0, i.jsx)(l7.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(b.E, {
                            className: l5.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: N.intl.string(et.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var ne = l(860071),
    nt = l(65154),
    nl = l(329177),
    nn = l(242226);
function ni(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: s,
            rank: a,
            isCompact: r,
            isCurrentUser: d,
            shouldDimForCurrentUser: u,
            isFloating: o = !1,
            rowRef: m,
            onClick: x,
        } = e,
        f = el(l, n, { showYouSuffix: d }),
        { user: g } = f;
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": o,
              inert: o,
              className: p()(nn.nM, { [nn.Bh]: d && !o, [nn.lR]: u }),
              children: [
                  (0, i.jsx)(ns, { guildId: l, user: g, identity: f, rank: a, listener: s, onClick: x }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: p()(nn.Mx, { [nn.dA]: r }),
                          children: [
                              (0, i.jsx)(nt.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(b.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), N.intl.formatToPlainString(et.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(nc, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function ns(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r, onClick: d } = e,
        u = s.useRef(null),
        o = (0, w.bG)([eH.A], () => (eH.A.isBlocked(l.id) ? "blocked" : eH.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        m = null != o;
    return (0, i.jsx)(ew.A, {
        targetElementRef: u,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(D.D, {
                ...e,
                innerRef: u,
                className: nn.D_,
                onClick: (t) => {
                    (d(), e.onClick(t));
                },
                children: [
                    null != a &&
                        (0, i.jsx)(M.A, { children: N.intl.formatToPlainString(et.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: nn.R3,
                        children: [
                            m
                                ? (0, i.jsx)("span", {
                                      className: nn.gt,
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
                                    className: nn.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(nl.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: nn.Dc,
                        children: [
                            (0, i.jsx)(E.D, {
                                variant: "heading-sm/semibold",
                                color: m ? "text-subtle" : "text-default",
                                lineClamp: 1,
                                children:
                                    null != o
                                        ? (function (e) {
                                              switch (e) {
                                                  case "blocked":
                                                      return N.intl.string(et.default.I3YOjC);
                                                  case "ignored":
                                                      return N.intl.string(et.default.CfMzwe);
                                              }
                                          })(o)
                                        : (0, i.jsx)(P.g, {
                                              name: n.displayName,
                                              colorString: n.member?.colorString ?? null,
                                              colorStrings: n.roleColorStrings,
                                          }),
                            }),
                            !m && (0, i.jsx)(nr, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function na(e, t) {
    return (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function nr(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(b.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? N.intl.format(et.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: na })
                : N.intl.format(et.default.ZMJ8Mt, { trackTitle: l, highlightHook: na }),
    });
}
function nd(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lE.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: nn.sG,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: nn.Ql,
                          children: (0, i.jsx)(lh.I, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: nn.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function nc(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: nn.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: nn.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            nd,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: nn.sG,
                            children: (0, i.jsx)(eW.Ay, {
                                mask: eW.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: nn.ag,
                                    children: (0, i.jsx)(b.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(et.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var nu = l(897130);
function no(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a, shouldHideCurrentUser: r, upsell: d } = e,
        c = a.top_listeners,
        u = (0, w.bG)([F.default], () => F.default.getCurrentUser()?.id),
        o = r ? null : u,
        m = c.findIndex((e) => e.user_id === o),
        x = -1 === m ? null : c[m],
        f = s.useMemo(() => c.map((e) => e.user_id), [c]);
    (0, W.k6)(t, f);
    let g = (0, w.bG)([F.default], () => f.reduce((e, t) => (null != F.default.getUser(t) ? e + 1 : e), 0), [f]),
        h = (0, w.bG)(
            [F.default, ne.A],
            () => f.every((e) => null != F.default.getUser(e) || ne.A.isMemberRequestSettled(t, e)),
            [t, f],
        ),
        { scrollerRef: j, scrollerNode: v, userRowRef: _, floatingRowPosition: b } = Z(),
        A = (function (e, t) {
            let [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    function l() {
                        let l = 0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1;
                        n((e) => (e?.contentKey === t && e.isAtEnd === l ? e : { contentKey: t, isAtEnd: l }));
                    }
                    (l(), e.addEventListener("scroll", l, { passive: !0 }));
                    let i = new ResizeObserver(l);
                    return (
                        i.observe(e),
                        () => {
                            (e.removeEventListener("scroll", l), i.disconnect());
                        }
                    );
                }, [e, t]),
                l?.contentKey === t && l.isAtEnd
            );
        })(v, g),
        E = lm({ guildId: t, widgetId: l, data: a }),
        N = s.useCallback(() => E("listener_row"), [E]);
    lx({ guildId: t, widgetId: l, data: a, length: c.length, isAtEnd: A, disabled: !h && !t5(a) });
    let I = null != d,
        C = I ? null : b,
        S = null != C;
    return t5(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(l8, {}), d] })
        : (0, i.jsxs)("div", {
              className: nu.SY,
              children: [
                  (0, i.jsxs)(R.d_, {
                      className: p()(nu.p_, { [nu.w]: I }),
                      ref: j,
                      children: [
                          c.map((e, l) => {
                              let s = e.user_id === o;
                              return (0, i.jsx)(
                                  ni,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: l + 1,
                                      isCompact: n,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && S,
                                      rowRef: s ? _ : void 0,
                                      onClick: N,
                                  },
                                  e.user_id,
                              );
                          }),
                          !I &&
                              null != o &&
                              null == x &&
                              (0, i.jsx)(ni, {
                                  guildId: t,
                                  userId: o,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: S,
                                  rowRef: _,
                                  onClick: N,
                              }),
                      ],
                  }),
                  I &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Y, { position: "bottom" }),
                              (0, i.jsx)("div", { className: nu.Kv, children: d }),
                          ],
                      }),
                  null != o &&
                      null != C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Y, { position: C }),
                              (0, i.jsx)($, {
                                  position: C,
                                  children: (0, i.jsx)(ni, {
                                      guildId: t,
                                      userId: o,
                                      listener: x,
                                      rank: -1 === m ? null : m + 1,
                                      isCompact: n,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: N,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var nm = l(717683);
function nx(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nm.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: p()(nm.Dk, { [nm.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nm.Nr,
                            children: [
                                (0, i.jsx)("div", { className: p()(nm.om, nm.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nm.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: p()(nm.om, nm.DD) }),
                                        (0, i.jsx)("div", { className: p()(nm.om, nm.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: p()(nm.yp, { [nm.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: p()(nm.om, nm.Pl) }),
                    (0, i.jsx)("div", { className: p()(nm.om, nm._0) }),
                ],
            }),
        ],
    });
}
var nf = l(450078),
    ng = l(362704);
function nh(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        c = null != t.cover_art_hash ? lE.RQ.IMAGE(t.cover_art_hash) : null,
        u = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lE.RQ.WEB_OPEN(lE.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: c,
            }),
            [t.track_external_id, t.track_title, t.artist_name, c],
        );
    return (0, i.jsxs)("div", {
        className: lb.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: p()(lb.MT, { [lb.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(lp.R, {
                        src: c,
                        isCircular: !1,
                        FallbackIcon: nf.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: p()(lb.Lw, lb.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(ng.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lb.Qq,
                            children: [
                                (0, i.jsx)(b.E, {
                                    className: lb.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(b.E, {
                                        className: lb.VA,
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
            (0, i.jsx)(lA, { target: u, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function nj(e) {
    return e.track_external_id;
}
function np(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lu(n),
        c = la((e) => e.byWidgetId[n]?.canShowEmbed ?? ls.canShowEmbed),
        [u, o] = lf(r.ranked_songs.length),
        m = lm({ guildId: l, widgetId: n, data: r });
    lx({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: u });
    let x = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = la.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lr(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        f = s.useCallback(() => m("forward"), [m]),
        g = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nh, {
                    song: e,
                    isSelected: e.track_external_id === d,
                    onSelect: x,
                    itemProps: t,
                    cardRef: l,
                    onForwardClick: f,
                }),
            [d, x, f],
        );
    if (0 === r.ranked_songs.length) return null;
    let h = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        j = lD(r);
    return (0, i.jsxs)("div", {
        className: lH.U,
        children: [
            (0, i.jsx)(lz, {
                label: lt(t4.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nj,
                renderItem: g,
                onScrollEndChange: o,
            }),
            null != h
                ? (0, i.jsx)(lO, { guildId: l, isCompact: a, canShowEmbed: c, song: h })
                : (0, i.jsx)(lP, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / em.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(et.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(et.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: lw(j),
                                    countHook: lk,
                                }),
                      trend: j,
                  }),
        ],
    });
}
var nv = l(691885),
    n_ = l(109765);
function nb(e) {
    let { widgetId: t, onSelect: l } = e,
        n = ld(t),
        a = s.useMemo(() => t8.map((e) => ({ id: e, label: lt(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: n_.L,
        children: (0, i.jsx)(nv.l, {
            selectionMode: "single",
            label: N.intl.string(et.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: a,
            value: n,
            onSelectionChange: l,
        }),
    });
}
var nA = l(432017),
    nE = l(871107);
function nN(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nE.$,
        children: [
            (0, i.jsx)("span", {
                className: nE.K,
                children: (0, i.jsx)(nA.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var nI = l(77915),
    nC = l(756936);
function nS(e) {
    return e.default_title ?? N.intl.string(et.default["5xxUI2"]);
}
var ny = l(890497),
    nk = l(734057),
    nT = l(317525),
    nw = l(576705),
    nR = l(935208),
    nD = l(44167);
l(321073);
var nL = l(485845),
    nM = l(136722),
    nU = l(435183),
    nG = l(155718),
    nP = l(795816),
    nO = l(933958),
    nB = l(627363),
    nW = l(712440),
    nz = l(733110),
    nH = l(488926),
    nF = l(818023);
async function nK(e) {
    null == en.A.getApplication(nF.NW) && (await (0, nB.TA)(nF.NW));
    let t = nO.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== nF.NW);
    return await (0, nP.su)({ channelId: e, applicationId: nF.NW, isStart: t, renderInFramePool: !0 });
}
async function nq(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nG.r2.ROLE, allow: nH.x3, deny: e5.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nG.r2.ROLE, allow: e5.xBc.USE_EMBEDDED_ACTIVITIES, deny: nH.x3 });
    let i = await (0, nU.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let nY = [];
var n$ = l(344351),
    nV = l(256693),
    nQ = l(343030),
    nZ = l(317608),
    nX = l(953538);
let nJ = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? tw(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tD.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tD.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tD.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [u, o] = s.useState(a.text ?? ""),
                [f, g] = s.useState(a.image),
                [h, j] = s.useState(null),
                p = (0, w.bG)([tc.A], () => tc.A.getGuildId()),
                v = void 0 !== f ? f : null != a.image_hash && null != p ? tw(p, t.id, a.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tN.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tA.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tR.B,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tS.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tC.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: tI.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), g(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: tR.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tE.f, {
                        label: N.intl.string(N.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (j(null), o(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != h &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(ta.w, { type: "critical", message: h, role: "none" }),
                        }),
                    (0, i.jsxs)(tr.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(B.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(B.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != a.image_hash),
                                        0 === u.length && !e && (j(N.intl.string(et.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: u.length > 0 ? u : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== f && (t.image = f), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [d.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = eY(a, n?.status === "success" ? n.data : void 0),
                c = tv({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                o = s.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(T, {
                              minHeight: 390,
                              graphic: (0, i.jsx)(u, { alt: "", ariaHidden: !0, width: 200 }),
                              title: N.intl.string(et.default.wqHke4),
                              subtitle: N.intl.string(et.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null != d
                            ? (0, i.jsx)(te, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(C, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, w.bG)([tc.A], () => tc.A.getGuildId()),
                n = (0, w.bG)([td.A], () => td.A.getGuild(l), [l]),
                a = (0, to.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, u] = s.useState(!1),
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                g = s.useCallback(async () => {
                    if (null == n || null == l || null == o || null == d) return void t();
                    (f(!1), u(!0));
                    try {
                        (await ti.Bo.patch({
                            url: e5.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, tn.lA)(d, tm, !o) },
                            rejectWithError: !0,
                        }),
                            (0, tu.q9)(l, tu.PY.LEADERBOARD_SYSTEM_MESSAGES, o),
                            t());
                    } catch (e) {
                        f(!0);
                    } finally {
                        u(!1);
                    }
                }, [n, l, o, d, t]),
                h = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(ts.d, {
                        label: N.intl.string(et.default.v0iLIA),
                        description: N.intl.string(et.default["88c7ds"]),
                        checked: o ?? !(0, tn.Lt)(d ?? 0, tm),
                        onChange: m,
                        disabled: h,
                    }),
                    !r && (0, i.jsx)(ta.w, { type: "warning", children: N.intl.string(et.default["1hsDpi"]) }),
                    x && (0, i.jsx)(ta.w, { type: "critical", children: N.intl.string(et.default["4FcF2j"]) }),
                    (0, i.jsxs)(tr.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(B.$, {
                                variant: "secondary",
                                text: N.intl.string(N.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(B.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: g,
                                disabled: h,
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
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: eh(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(o.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eY(l, t?.status === "success" ? t.data : void 0);
            return null == n || eg(n) ? null : (0, i.jsx)(tj, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eY(l, s);
            return "mini" !== ep({ expanded: !1, column: n }) || (null != a && eg(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: N.intl.string(N.t.dcl9MQ),
                      children: (0, i.jsx)(x.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: f._,
                          "aria-label": N.intl.string(N.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (g.default.track(e5.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ej(a),
                                      leaderboard_view: ep({ expanded: !1, column: n }),
                                      metric: ev(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tb, { guildId: t, data: l, modalProps: e });
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
                ? (0, i.jsx)(T, {
                      minHeight: 273,
                      graphic: (0, i.jsx)(tL, { alt: "", ariaHidden: !0, width: 200 }),
                      title: N.intl.string(et.default.v59XPT),
                      subtitle: N.intl.string(et.default.Bayri1),
                  })
                : null == l || "idle" === l.status || "loading" === l.status
                  ? (0, i.jsx)(C, {})
                  : "error" === l.status
                    ? (0, i.jsx)(S, {})
                    : (0, i.jsx)(tJ, { guildId: n, data: l.data, title: t0(t) });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: t0(t) });
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
                { guildId: d, widget: c, hydration: u, guildSpaceMode: o } = e,
                m =
                    ((t = c.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            lr(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tM.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            la.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lc(c.id),
                f = ld(c.id),
                h = lu(c.id),
                { isContributing: j, isSpotifyConnected: p, hasFetchedConsents: v } = (0, nI.MX)(d),
                _ = u?.status === "success" ? u.data : void 0,
                { data: b, shouldHideCurrentUser: A } = (0, nI.qL)(d, _),
                E = "edit" === o,
                N = null != _ && t7(_),
                I = !x && !E && !N,
                y = lm({ guildId: d, widgetId: c.id, data: b }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = ld(l),
                        r = lc(l);
                    return tp({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    g.default.track(
                                        e5.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: t9(n, a),
                                            popular_music_view: a,
                                            popular_music_layout: le(r),
                                        },
                                        { flush: i },
                                    );
                            },
                            [t, n, a, r],
                        ),
                        segmentKey: `${a}:${le(r)}`,
                        enabled: i,
                    });
                })({ guildId: d, widgetId: c.id, data: b, enabled: "view" === o }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, t1.A)(m, T);
            lx({ guildId: d, widgetId: c.id, data: b, length: 0, isAtEnd: !1, disabled: E || !N });
            let R =
                    "view" === o && v && !j
                        ? (0, i.jsx)(lX, {
                              guildId: d,
                              widgetName: nS(c),
                              isCompact: x,
                              isSpotifyConnected: p,
                              onClick: () => y("contribution_upsell"),
                          })
                        : null,
                D =
                    E || N || u?.status !== "success" || f === t4.TOP_LISTENERS
                        ? null
                        : ((l = u.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === h && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lE.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nC.rf,
                ref: w,
                children: [
                    null != D &&
                        (0, i.jsx)("div", {
                            className: nC.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nC.LZ, src: D, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nC.Qs,
                        children: (0, i.jsx)("div", {
                            id: ln(c.id),
                            className: nC.nd,
                            role: I ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": I ? void 0 : lt(f),
                            "aria-labelledby": I ? ll(c.id, f) : void 0,
                            children: (function () {
                                if (E) return (0, i.jsx)(nx, { isCompact: x });
                                if (null == u || "idle" === u.status || "loading" === u.status)
                                    return (0, i.jsx)(C, {});
                                if ("error" === u.status) return (0, i.jsx)(S, {});
                                if (N) return (0, i.jsx)(l4, { onSettingsClick: () => y("empty_state_settings") });
                                if (null == b) return (0, i.jsx)(C, {});
                                switch (f) {
                                    case t4.TOP_SONGS:
                                        return (0, i.jsx)(np, { guildId: d, widgetId: c.id, isCompact: x, data: b });
                                    case t4.TOP_ARTISTS:
                                        return (0, i.jsx)(lK, { guildId: d, widgetId: c.id, isCompact: x, data: b });
                                    case t4.TOP_LISTENERS:
                                        return (0, i.jsx)(no, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: b,
                                            shouldHideCurrentUser: A,
                                            upsell: R,
                                        });
                                }
                            })(),
                        }),
                    }),
                    f !== t4.TOP_LISTENERS && R,
                    (0, i.jsx)(l9, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nS(t),
                a = l?.status === "success" && t7(l.data);
            return "edit" === n || a ? (0, i.jsx)(h.q, { size: "md", children: s }) : (0, i.jsx)(nN, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = lc(t.id),
                r = ld(t.id),
                { data: d } = (0, nI.qL)(s, l?.status === "success" ? l.data : void 0);
            function c(e, l) {
                if (e !== r) {
                    var n;
                    (lo({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (la.getState().byWidgetId[n] ?? ls).view !== e && lr(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && t7(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nb, { widgetId: t.id, onSelect: (e) => c(e, "view_select") })
                  : (0, i.jsx)(t3, {
                        label: n,
                        tabs: t8.map((e) => ({ id: e, label: lt(e) })),
                        selectedId: r,
                        panelId: ln(t.id),
                        getTabId: (e) => ll(t.id, e),
                        onSelect: (e) => c(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nD.n)(),
                a = (0, w.bG)(
                    [nk.A, nw.A],
                    () => {
                        let e = null != n ? nk.A.getChannel(n) : void 0;
                        return null != e && nw.A.can(e5.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, w.bG)(
                    [nO.Ay],
                    () => {
                        let e = nO.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== nF.NW ||
                            e.location.kind !== n$.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, w.bG)([nO.Ay], () => nO.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, w.bG)(
                        [nz.default],
                        () => nz.default.getFetchStateForApplication(nF.NW) === nz.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, w.bG)(
                        [nz.default, en.A],
                        () => {
                            let e = nz.default.getNewestTokenForApplication(nF.NW);
                            if (null == e) return !1;
                            let t = en.A.getApplication(nF.NW),
                                l = t?.integrationTypesConfig?.[nL.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nz.default.getFetchStateForApplication(nF.NW) === nz.FetchState.NOT_FETCHED &&
                            nW.A.fetch([nF.NW]),
                            null == en.A.getApplication(nF.NW) && (0, nB.TA)(nF.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && u && o && !m.current && ((m.current = !0), nK(n));
            }, [a, n, d, u, o]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), nK(n));
                }, [n]),
                f = null != n && u && !o;
            return null == n
                ? (0, i.jsx)(A.B, {
                      className: nX.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: nX.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(nZ.A, {
                                    frameId: (0, nV.Ri)(d),
                                    level: nQ.A.WithinAppContent,
                                    className: nX.t$,
                                }),
                            null == d &&
                                f &&
                                (0, i.jsx)("div", {
                                    className: nX.P5,
                                    children: (0, i.jsx)(B.$, {
                                        variant: "secondary",
                                        text: N.intl.string(et.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: nX.kL,
                        children: (0, i.jsx)("div", {
                            className: nX.m0,
                            children: (0, i.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(et.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, w.bG)([tc.A], () => tc.A.getGuildId()),
                n = nR.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nD.n)(),
                r = (0, w.bG)([nk.A], () => (null != a ? nk.A.getChannel(a) : void 0), [a]),
                d = (0, w.bG)([nw.A], () => null != r && nw.A.can(e5.xBc.MANAGE_ROLES, r), [r]),
                c = (0, w.bG)([nT.A], () => (null == l ? nY : nT.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                u = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nM.zy(e.deny, e5.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nM.zy(t.allow, e5.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                [g, h] = s.useState(!1),
                j = o ?? u,
                p = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function v() {
                if (null != r) {
                    (h(!1), f(!0));
                    try {
                        (await nq({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (f(!1), h(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(A.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(ny.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(et.default.XXLbfv),
                              description: N.intl.string(et.default.XrpYIG),
                              placeholder: N.intl.string(et.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (h(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(ta.w, {
                                  type: "warning",
                                  message: N.intl.string(et.default.UPLtlA),
                                  role: "none",
                              }),
                          g &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(ta.w, {
                                      type: "critical",
                                      message: N.intl.string(et.default.xyCJYs),
                                      role: "none",
                                  }),
                              }),
                          (0, i.jsxs)(tr.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(B.$, {
                                      variant: "secondary",
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(B.$, {
                                      variant: "primary",
                                      text: N.intl.string(N.t["R3BPH+"]),
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
