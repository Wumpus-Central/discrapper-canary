l.d(t, { m: () => e4 });
var n = l(477900),
    i = l(582128),
    a = l(593673),
    r = l(661531),
    s = l(369606),
    d = l(251812);
l(539888);
var o = l(289873),
    u = l(738188),
    c = l(834730),
    m = l(375708),
    f = l(448492);
function h() {
    return (0, n.jsx)("div", {
        className: f.w,
        children: (0, n.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE, "aria-label": m.intl.string(m.t.ZTNur7) }),
    });
}
function x() {
    return (0, n.jsxs)("div", {
        className: f.w,
        role: "alert",
        children: [
            (0, n.jsx)(u.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: m.intl.string(m.t.F8FvUy) }),
        ],
    });
}
var g = l(503698),
    A = l.n(g),
    p = l(17928),
    v = l(364522),
    j = l(663417),
    E = l(866665),
    _ = l(80682),
    S = l(287809),
    I = l(58703),
    N = l(331322),
    y = l(297264);
function b(e) {
    return e.entries.length < 3;
}
var T = l(61567),
    C = l(823353);
function D() {
    return (0, n.jsxs)(N.B, {
        className: C.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, n.jsx)(y.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: m.intl.string(T.default.ULK65a),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m.intl.format(T.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var w = l(140735),
    R = l(97808),
    G = l(778712),
    M = l(463930),
    L = l(939249),
    U = l(81466),
    P = l(406810),
    k = l(687966),
    B = l(109112),
    W = l(683063),
    O = l(573435),
    F = l(402860),
    z = l(342296),
    H = l(518782),
    Y = l(927813);
function q(e) {
    let t = Math.floor(Math.max(e, 0) / Y.A.Seconds.MINUTE);
    return m.intl.formatToPlainString(T.default["6Y8H0A"], {
        hours: Math.floor(t / Y.A.Minutes.HOUR),
        minutes: t % Y.A.Minutes.HOUR,
    });
}
var V = l(396583),
    X = l(587895),
    K = l(429913),
    $ = l(967144),
    Q = l(696451),
    Z = l(562153);
function J(e, t) {
    return { id: e, name: m.intl.string(T.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ee(e, t) {
    return e.get(t) ?? J(t, !1);
}
var et = l(518477),
    el = l(870087);
function en(e) {
    let t,
        l,
        i,
        a,
        r,
        s,
        {
            guildId: d,
            entry: o,
            stat: u,
            games: c,
            isCurrentUser: f,
            shouldDimForCurrentUser: h,
            isFloating: x = !1,
            rowRef: g,
        } = e,
        v =
            ((t = o.user_id),
            (l = (0, p.bG)([S.default], () => S.default.getUser(t), [t])),
            (i = (0, p.bG)([Q.Ay], () => Q.Ay.getMember(d, t), [d, t])),
            (a = (0, $.gn)(d, t, i?.colorStrings ?? null)),
            (r = Z.Ay.useName(d, void 0, l)),
            (s = null != l ? r : o.name),
            {
                user: l,
                member: i,
                roleColorStrings: a,
                baseName: s,
                displayName: f ? m.intl.formatToPlainString(T.default.subXXA, { name: s }) : s,
            }),
        j = o.application_ids[0],
        E = null != j ? ee(c, j) : void 0;
    return (0, n.jsxs)("div", {
        ref: g,
        "aria-hidden": x,
        inert: x,
        className: A()(el.nM, { [el.Bh]: f && !x, [el.lR]: h }),
        children: [
            (0, n.jsx)(ei, { guildId: d, entry: o, identity: v, lastPlayedGame: E }),
            (0, n.jsx)(es, { entry: o, stat: u }),
            (0, n.jsx)(ec, {
                guildId: d,
                userId: o.user_id,
                name: v.baseName,
                applicationIds: o.application_ids,
                applicationCount: o.application_count,
                games: c,
            }),
        ],
    });
}
function ei(e) {
    let { guildId: t, entry: l, identity: a, lastPlayedGame: r } = e,
        s = i.useRef(null),
        d = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ea, { rank: l.rank }),
                (0, n.jsx)(R.eu, {
                    size: G._3.SIZE_32,
                    src: a.user?.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                    className: el.my,
                    "aria-hidden": !0,
                }),
                (0, n.jsxs)("div", {
                    className: el.Dc,
                    children: [
                        (0, n.jsx)(y.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, n.jsx)(M.g, {
                                name: a.displayName,
                                colorString: a.member?.colorString ?? null,
                                colorStrings: a.roleColorStrings,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(c.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: m.intl.formatToPlainString(T.default.YuNVPY, { gameName: r.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == a.user
        ? (0, n.jsx)("div", { className: el.D_, children: d })
        : (0, n.jsx)(z.A, {
              targetElementRef: s,
              user: a.user,
              guildId: t,
              children: (e) => (0, n.jsx)(L.D, { ...e, innerRef: s, className: A()(el.D_, el.FB), children: d }),
          });
}
function ea(e) {
    let { rank: t } = e,
        l = m.intl.formatToPlainString(T.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, n.jsx)("div", {
                className: el.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: el.Xe }),
            });
        case 2:
            return (0, n.jsx)("div", {
                className: el.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: el.XQ }),
            });
        case 3:
            return (0, n.jsx)("div", {
                className: el.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: el.c9 }),
            });
        default:
            return (0, n.jsxs)("div", {
                className: el.mH,
                children: [
                    (0, n.jsx)(w.A, { children: l }),
                    (0, n.jsx)(c.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        tabularNumbers: !0,
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function er(e) {
    let { stat: t } = e;
    switch (t) {
        case H.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, n.jsx)(U.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case H.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, n.jsx)(P.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case H.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, n.jsx)(k.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function es(e) {
    let { entry: t, stat: l } = e,
        { primary: i, secondary: a } = (function (e, t) {
            switch (t) {
                case H.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return {
                        primary: m.intl.formatToPlainString(m.t["k2UNz+"], { days: e.value }),
                        secondary: q(e.time_played_seconds),
                    };
                case H.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return {
                        primary: m.intl.formatToPlainString(T.default.rgpc8E, { count: e.value }),
                        secondary: q(e.time_played_seconds),
                    };
                case H.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
                    let l, n, i;
                    return {
                        primary:
                            ((n = Math.floor(
                                (l = Math.floor(Math.max(e.value, 0) / Y.A.Millis.MINUTE)) / Y.A.Minutes.HOUR,
                            )),
                            (i = l % Y.A.Minutes.HOUR),
                            0 === n
                                ? m.intl.formatToPlainString(T.default.bgQf2H, { minutes: i })
                                : 0 === i
                                  ? m.intl.formatToPlainString(T.default["D/HToK"], { hours: n })
                                  : m.intl.formatToPlainString(T.default.fvtrHn, { hours: n, minutes: i })),
                    };
                default:
                    return { primary: "\u2014" };
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: el.TH,
        children: [
            (0, n.jsxs)("div", {
                className: el.bf,
                children: [
                    (0, n.jsx)(er, { stat: l }),
                    (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
            null != a && (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
        ],
    });
}
function ed(e) {
    let { game: t, notched: l } = e;
    return (0, n.jsx)("span", {
        className: el.rO,
        "aria-hidden": !0,
        children: (0, n.jsx)(O.Ay, {
            mask: l ? O.l8[24] : O.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, n.jsx)("img", { className: el.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, n.jsx)("span", {
                          className: el.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, n.jsx)(B._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eo(e) {
    let { played: t, totalCount: l } = e,
        i = t.slice(0, 2),
        a = l - i.length;
    return (0, n.jsxs)("div", {
        className: el.Nw,
        children: [
            i.map((e, t) => (0, n.jsx)(ed, { game: e, notched: a > 0 || t !== i.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, n.jsx)("span", {
                      className: el.rO,
                      children: (0, n.jsx)(O.Ay, {
                          mask: O.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, n.jsx)("div", {
                              className: el.p0,
                              children: (0, n.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: m.intl.formatToPlainString(T.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eu(e) {
    let { played: t, totalCount: l, children: i } = e;
    return (0, n.jsx)(W.u, {
        body:
            0 === t.length
                ? m.intl.string(T.default["7CrlYb"])
                : 1 === t.length
                  ? m.intl.formatToPlainString(T.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? m.intl.formatToPlainString(T.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : m.intl.formatToPlainString(T.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, n.jsx)(eo, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: i,
    });
}
function ec(e) {
    let { guildId: t, userId: l, name: a, applicationIds: r, applicationCount: s, games: d } = e,
        o = r.map((e) => ee(d, e)),
        u = i.useCallback(() => {
            (0, F.openUserProfileModal)({
                userId: l,
                guildId: t,
                tabSection: et.RP.ACTIVITY,
                scrollTarget: et.bk.RECENT_ACTIVITY,
            });
        }, [l, t]);
    return (0, n.jsx)("div", {
        className: el.ag,
        children: (0, n.jsx)(eu, {
            played: o,
            totalCount: s,
            children: (0, n.jsx)(L.D, {
                className: A()(el.Nw, el.Dz),
                "aria-label": m.intl.formatToPlainString(T.default.o6mBdl, { name: a }),
                onClick: u,
                children: (0, n.jsx)(eo, { played: o, totalCount: s }),
            }),
        }),
    });
}
var em = l(219047);
function ef(e) {
    let t,
        l,
        a,
        { guildId: r, data: s } = e,
        { stat: d, entries: o } = s,
        u = (0, p.bG)([S.default], () => S.default.getCurrentUser()?.id),
        c = i.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        m = i.useMemo(() => {
            let e = o.slice(0, 20);
            return null == c || e.includes(c) ? e : [...e, c];
        }, [o, c]),
        f = i.useMemo(() => ({ [r]: Array.from(new Set(m.map((e) => e.user_id))) }), [r, m]);
    (0, _.Eq)(f, "leaderboard");
    let h =
            ((t = i.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
            (l = (0, K.A)(t)),
            (a = (0, p.yK)([X.A], () => t.map((e) => X.A.didFetchingApplicationFail(e)))),
            i.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, n) => {
                        let i = l[n];
                        e.set(
                            t,
                            null != i
                                ? { id: t, name: i.name, iconUrl: i.getIconURL(64) ?? void 0, isLoading: !1 }
                                : J(t, !a[n]),
                        );
                    }),
                    e
                );
            }, [t, l, a])),
        {
            scrollerRef: x,
            userRowRef: g,
            floatingRowPosition: j,
        } = (function () {
            let [e, t] = i.useState(null),
                [l, n] = i.useState(null),
                [a, r] = i.useState("unknown");
            return (
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            var t, l;
                            let n,
                                i,
                                [a] = e;
                            if (a?.rootBounds == null) return;
                            let { clippedPx: s, floatTo: d } =
                                ((t = a.boundingClientRect),
                                (n = Math.max(0, (l = a.rootBounds).top - t.top)),
                                {
                                    clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)),
                                    floatTo: n > i ? "top" : "bottom",
                                });
                            r(() => (s <= 1 ? "visible" : d));
                        },
                        { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
                    );
                    return (t.observe(l), () => t.disconnect());
                }, [e, l]),
                { scrollerRef: t, userRowRef: n, floatingRowPosition: "top" === a || "bottom" === a ? a : null }
            );
        })(),
        E = null != j,
        I = i.useCallback(
            (e) => {
                let t = e === c;
                return (0, n.jsx)(
                    en,
                    {
                        guildId: r,
                        entry: e,
                        stat: d,
                        games: h,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && E,
                        rowRef: t ? g : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [E, c, h, r, d, g],
        );
    return b(s)
        ? (0, n.jsx)(D, {})
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsxs)("div", {
                      className: em.SY,
                      children: [
                          (0, n.jsx)(v.d_, { className: em.p_, ref: x, children: m.map(I) }),
                          null != c &&
                              null != j &&
                              (0, n.jsx)("div", { className: A()(em.Dz, "top" === j ? em.gN : em.qV) }),
                          null != c &&
                              null != j &&
                              (0, n.jsx)("div", {
                                  className: A()(em.z$, "top" === j ? em.aG : em.Ie),
                                  children: (0, n.jsx)(en, {
                                      guildId: r,
                                      entry: c,
                                      stat: d,
                                      games: h,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                  }),
                              }),
                      ],
                  }),
                  (0, n.jsx)(eh, { computedAt: s.computed_at }),
              ],
          });
}
function eh(e) {
    let { computedAt: t } = e,
        l = (0, n.jsxs)("div", {
            className: em.z8,
            children: [
                (0, n.jsx)(j.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, n.jsx)(c.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: m.intl.string(T.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, n.jsx)("div", { className: em.qr, children: l })
        : (0, n.jsx)("div", {
              className: em.qr,
              tabIndex: 0,
              children: (0, n.jsx)(E.m, {
                  text: m.intl.formatToPlainString(T.default["1bt50t"], { timestamp: (0, I.mk)(new Date(t)) }),
                  position: "bottom",
                  children: l,
              }),
          });
}
var ex = l(885386),
    eg = l(515746);
function eA(e) {
    let { data: t } = e,
        l = (0, d.K)(t.stat),
        {
            ended: a,
            endDate: r,
            badgeLabel: s,
        } = (function (e) {
            let t = (e + Y.A.Seconds.WEEK) * Y.A.Millis.SECOND,
                [l, n] = i.useState(() => Date.now()),
                a = t - l,
                r = a <= 0,
                s = a - (Math.ceil(a / Y.A.Millis.DAY) - 1) * Y.A.Millis.DAY;
            return (
                (0, V.A)(() => n(Date.now()), r ? null : s),
                i.useMemo(
                    () => ({
                        ended: r,
                        endDate: new Date(t),
                        badgeLabel: r
                            ? m.intl.string(T.default["J8r/7L"])
                            : m.intl.formatToPlainString(T.default["PuaR+2"], { days: Math.ceil(a / Y.A.Millis.DAY) }),
                    }),
                    [r, t, a],
                )
            );
        })(t.week_start_ts),
        o = ex.PZ.useSetting(),
        u = 2 > (0, I.m_)(r, new Date()) ? (0, I.mk)(r, !1, o) : (0, I.i$)(r, "L LT", o),
        f = a
            ? m.intl.format(T.default.kG9XmM, { endedAt: u, nextStatName: (0, d.K)(t.next_stat).name })
            : m.intl.format(T.default["X+VLqi"], { statQuestion: l.question, endsAt: u });
    return (0, n.jsx)(W.u, {
        title: l.name,
        body: f,
        position: "top",
        children: (0, n.jsx)("div", {
            className: eg.q,
            tabIndex: 0,
            children: (0, n.jsx)(c.E, {
                variant: "text-xs/semibold",
                color: a ? "text-muted" : "text-brand",
                children: s,
            }),
        }),
    });
}
var ep = l(452027),
    ev = l(103557),
    ej = l(825484),
    eE = l(821609),
    e_ = l(95477),
    eS = l(408278),
    eI = l(241326),
    eN = l(683071),
    ey = l(2553),
    eb = l(405810),
    eT = l(967198),
    eC = l(488428),
    eD = l(776231),
    ew = l(486020),
    eR = l(652215);
function eG(e, t, l) {
    let n = ew.QB ? "webp" : "jpg",
        { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = eR.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, n),
        s = null != i ? `https://${i}${r}` : location.protocol + a + r,
        d = { size: (0, eD.kr)(500 * (0, eD.mZ)()) };
    return ("jpg" === n && (d.quality = "lossless"), (s += `?${eC.stringify(d)}`));
}
var eM = l(868602),
    eL = l(445187),
    eU = l(890497),
    eP = l(734057),
    ek = l(317525),
    eB = l(576705),
    eW = l(935208),
    eO = l(44167);
l(321073);
var eF = l(485845),
    ez = l(136722),
    eH = l(435183),
    eY = l(155718),
    eq = l(795816),
    eV = l(933958),
    eX = l(574152),
    eK = l(627363),
    e$ = l(712440),
    eQ = l(733110),
    eZ = l(488926),
    eJ = l(360469);
async function e0(e) {
    null == X.A.getApplication(eJ.NW) && (await (0, eK.TA)(eJ.NW));
    let t = eV.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== eJ.NW);
    return await (0, eq.su)({
        channelId: e,
        applicationId: eJ.NW,
        isStart: t,
        embeddedActivitiesManager: (0, eX.A)(),
        renderInFramePool: !0,
    });
}
async function e1(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: eY.r2.ROLE, allow: eZ.x3, deny: eR.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: eY.r2.ROLE, allow: eR.xBc.USE_EMBEDDED_ACTIVITIES, deny: eZ.x3 });
    let i = await (0, eH.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let e8 = [];
var e2 = l(344351),
    e6 = l(256693),
    e3 = l(812901),
    e7 = l(317608),
    e5 = l(953538);
let e4 = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: i } = e,
                { text: a, image_hash: r } = t.config,
                s = "edit" === l ? t.config.image : void 0,
                d = void 0 !== s ? s : null != r ? eG(i, t.id, r) : null;
            return (0, n.jsxs)("div", {
                className: eL.kL,
                children: [
                    null != d && (0, n.jsx)("img", { className: eL.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, n.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: eL.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: r } = e,
                s = t.config,
                [d, o] = i.useState(s.title ?? ""),
                [u, c] = i.useState(s.text ?? ""),
                [f, h] = i.useState(s.image),
                [x, g] = i.useState(null),
                A = (0, p.bG)([eT.A], () => eT.A.getGuildId()),
                v = void 0 !== f ? f : null != s.image_hash && null != A ? eG(A, t.id, s.image_hash) : null;
            return (0, n.jsxs)(N.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(e_.k, {
                        label: m.intl.string(m.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (g(null), o(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(ep.D, {
                        label: m.intl.string(m.t.X4IxWL),
                        children: (0, n.jsxs)(N.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: eM.B,
                            children: [
                                (0, n.jsxs)(N.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(eb.A, {
                                            variant: "secondary",
                                            text: m.intl.string(m.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (g(null), h(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, ey.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, n.jsx)(E.m, {
                                                text: m.intl.string(m.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(eS.K, {
                                                    variant: "critical-secondary",
                                                    icon: eI.TrashIcon,
                                                    onClick: function () {
                                                        (g(null), h(null));
                                                    },
                                                    "aria-label": m.intl.string(m.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, n.jsx)("img", { className: eM.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(ev.f, {
                        label: m.intl.string(m.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (g(null), c(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != x &&
                        (0, n.jsx)("div", {
                            role: "alert",
                            children: (0, n.jsx)(eN.w, { type: "critical", children: x }),
                        }),
                    (0, n.jsxs)(ej.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(eE.$, { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(eE.$, {
                                variant: "primary",
                                text: m.intl.string(m.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != s.image_hash),
                                        0 === u.length && !e && (g(m.intl.string(T.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: u.length > 0 ? u : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    (void 0 !== f && (t.image = f), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (e) {
            return e.config.title ?? e.default_title ?? "";
        },
    },
    [a.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, n.jsx)(h, {})
                : "error" === t.status
                  ? (0, n.jsx)(x, {})
                  : (0, n.jsx)(ef, { guildId: l, data: t.data });
        },
        useTitle: function (e, t) {
            return t?.status !== "success" ? (e.default_title ?? "") : (0, d.K)(b(t.data) ? void 0 : t.data.stat).name;
        },
        TitleIcon: function () {
            return (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || b(t.data) ? null : (0, n.jsx)(eA, { data: t.data });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = (0, eO.n)(),
                r = (0, p.bG)(
                    [eP.A, eB.A],
                    () => {
                        let e = null != a ? eP.A.getChannel(a) : void 0;
                        return null != e && eB.A.can(eR.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                s = (0, p.bG)(
                    [eV.Ay],
                    () => {
                        let e = eV.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== eJ.NW ||
                            e.location.kind !== e2.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, p.bG)([eV.Ay], () => eV.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, p.bG)(
                        [eQ.default],
                        () => eQ.default.getFetchStateForApplication(eJ.NW) === eQ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, p.bG)(
                        [eQ.default, X.A],
                        () => {
                            let e = eQ.default.getNewestTokenForApplication(eJ.NW);
                            if (null == e) return !1;
                            let t = X.A.getApplication(eJ.NW),
                                l = t?.integrationTypesConfig?.[eF.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    i.useEffect(() => {
                        (eQ.default.getFetchStateForApplication(eJ.NW) === eQ.FetchState.NOT_FETCHED &&
                            e$.A.fetch([eJ.NW]),
                            null == X.A.getApplication(eJ.NW) && (0, eK.TA)(eJ.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                f = i.useRef(!1);
            i.useEffect(() => {
                null == s && null != a && r && o && u && !f.current && ((f.current = !0), e0(a));
            }, [r, a, s, o, u]);
            let h = i.useCallback(() => {
                    null != a && ((f.current = !0), e0(a));
                }, [a]),
                x = null != a && o && !u;
            return r
                ? (0, n.jsxs)("div", {
                      className: e5.kL,
                      children: [
                          null != s &&
                              (0, n.jsx)(e7.A, {
                                  frameId: (0, e6.Ri)(s),
                                  level: e3.A.WithinAppContent,
                                  className: e5.t$,
                              }),
                          null == s &&
                              x &&
                              (0, n.jsx)("div", {
                                  className: e5.P5,
                                  children: (0, n.jsx)(eE.$, {
                                      variant: "secondary",
                                      text: m.intl.string(T.default.PSuly6),
                                      loading: d,
                                      onClick: h,
                                  }),
                              }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: e5.kL,
                      children: (0, n.jsx)("div", {
                          className: e5.m0,
                          children: (0, n.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: m.intl.string(T.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, p.bG)([eT.A], () => eT.A.getGuildId()),
                a = eW.default.castGuildIdAsEveryoneGuildRoleId(l),
                r = (0, eO.n)(),
                s = (0, p.bG)([eP.A], () => (null != r ? eP.A.getChannel(r) : void 0), [r]),
                d = (0, p.bG)([eB.A], () => null != s && eB.A.can(eR.xBc.MANAGE_ROLES, s), [s]),
                o = (0, p.bG)([ek.A], () => (null == l ? e8 : ek.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                u = i.useMemo(() => {
                    let e;
                    return null != s
                        ? null != (e = s.permissionOverwrites[s.guild_id]) &&
                          ez.zy(e.deny, eR.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = s.permissionOverwrites[e.id];
                                      return null != t && ez.zy(t.allow, eR.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [s, o]),
                [c, f] = i.useState(null),
                [h, x] = i.useState(!1),
                [g, A] = i.useState(!1),
                v = c ?? u,
                j = i.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            async function E() {
                if (null != s) {
                    (A(!1), x(!0));
                    try {
                        (await e1({ channel: s, selectedRoleIds: v }), t());
                    } catch {
                        (x(!1), A(!0));
                    }
                }
            }
            return null == s
                ? null
                : (0, n.jsxs)(N.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(eU.Z, {
                              selectionMode: "multiple",
                              label: m.intl.string(T.default.XXLbfv),
                              description: m.intl.string(T.default.XrpYIG),
                              placeholder: m.intl.string(T.default.pp6WeD),
                              options: j,
                              value: v,
                              onSelectionChange: function (e) {
                                  (A(!1), f(e));
                              },
                              disabled: !d || h,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, n.jsx)(eN.w, { type: "warning", children: m.intl.string(T.default.UPLtlA) }),
                          g &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(eN.w, {
                                      type: "critical",
                                      children: m.intl.string(T.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(ej.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(eE.$, {
                                      variant: "secondary",
                                      text: m.intl.string(m.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: h,
                                  }),
                                  (0, n.jsx)(eE.$, {
                                      variant: "primary",
                                      text: m.intl.string(m.t["R3BPH+"]),
                                      onClick: E,
                                      disabled: !d,
                                      loading: h,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: r = 288, height: s = 192 } = e;
            return (0, n.jsx)("img", {
                style: { width: r, height: s },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": i,
                role: a ?? "img",
            });
        },
    },
};
