l.d(t, { m: () => e9 });
var n = l(477900),
    i = l(582128),
    a = l(593673),
    r = l(661531),
    s = l(369606),
    d = l(251812);
l(539888);
var c = l(289873),
    u = l(738188),
    o = l(834730),
    f = l(375708),
    m = l(448492);
function h() {
    return (0, n.jsx)("div", {
        className: m.w,
        children: (0, n.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE, "aria-label": f.intl.string(f.t.ZTNur7) }),
    });
}
function x() {
    return (0, n.jsxs)("div", {
        className: m.w,
        role: "alert",
        children: [
            (0, n.jsx)(u.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: f.intl.string(f.t.F8FvUy) }),
        ],
    });
}
var g = l(503698),
    A = l.n(g),
    E = l(17928),
    p = l(364522),
    v = l(663417),
    j = l(866665),
    S = l(80682),
    _ = l(287809),
    I = l(58703),
    b = l(331322),
    N = l(297264);
function C(e) {
    return e.entries.length < 3;
}
var y = l(61567),
    T = l(823353);
function D() {
    return (0, n.jsxs)(b.B, {
        className: T.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, n.jsx)(N.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: f.intl.string(y.default.ULK65a),
            }),
            (0, n.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: f.intl.format(y.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var w = l(140735),
    R = l(97808),
    G = l(778712),
    L = l(463930),
    U = l(939249),
    M = l(81466),
    k = l(406810),
    P = l(687966),
    B = l(109112),
    W = l(683063),
    F = l(573435),
    O = l(402860),
    H = l(342296),
    z = l(518782),
    Y = l(927813);
function q(e) {
    let t = Math.floor(Math.max(e, 0) / Y.A.Seconds.MINUTE);
    return f.intl.formatToPlainString(y.default["6Y8H0A"], {
        hours: Math.floor(t / Y.A.Minutes.HOUR),
        minutes: t % Y.A.Minutes.HOUR,
    });
}
var X = l(396583),
    V = l(587895),
    K = l(429913),
    $ = l(967144),
    Q = l(696451),
    Z = l(562153);
function J(e, t) {
    return { id: e, name: f.intl.string(y.default.rhDbuQ), iconUrl: void 0, isLoading: t };
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
            entry: c,
            stat: u,
            games: o,
            isCurrentUser: m,
            shouldDimForCurrentUser: h,
            isFloating: x = !1,
            rowRef: g,
        } = e,
        p =
            ((t = c.user_id),
            (l = (0, E.bG)([_.default], () => _.default.getUser(t), [t])),
            (i = (0, E.bG)([Q.Ay], () => Q.Ay.getMember(d, t), [d, t])),
            (a = (0, $.gn)(d, t, i?.colorStrings ?? null)),
            (r = Z.Ay.useName(d, void 0, l)),
            (s = null != l ? r : c.name),
            {
                user: l,
                member: i,
                roleColorStrings: a,
                baseName: s,
                displayName: m ? f.intl.formatToPlainString(y.default.subXXA, { name: s }) : s,
            }),
        v = c.application_ids[0],
        j = null != v ? ee(o, v) : void 0;
    return (0, n.jsxs)("div", {
        ref: g,
        "aria-hidden": x,
        inert: x,
        className: A()(el.nM, { [el.Bh]: m && !x, [el.lR]: h }),
        children: [
            (0, n.jsx)(ei, { guildId: d, entry: c, identity: p, lastPlayedGame: j }),
            (0, n.jsx)(es, { entry: c, stat: u }),
            (0, n.jsx)(eo, {
                guildId: d,
                userId: c.user_id,
                name: p.baseName,
                applicationIds: c.application_ids,
                applicationCount: c.application_count,
                games: o,
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
                        (0, n.jsx)(N.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, n.jsx)(L.g, {
                                name: a.displayName,
                                colorString: a.member?.colorString ?? null,
                                colorStrings: a.roleColorStrings,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(o.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: f.intl.formatToPlainString(y.default.YuNVPY, { gameName: r.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == a.user
        ? (0, n.jsx)("div", { className: el.D_, children: d })
        : (0, n.jsx)(H.A, {
              targetElementRef: s,
              user: a.user,
              guildId: t,
              children: (e) => (0, n.jsx)(U.D, { ...e, innerRef: s, className: A()(el.D_, el.FB), children: d }),
          });
}
function ea(e) {
    let { rank: t } = e,
        l = f.intl.formatToPlainString(y.default.I4JiAQ, { rank: t });
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
                    (0, n.jsx)(o.E, {
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
        case z.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, n.jsx)(M.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case z.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, n.jsx)(k.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case z.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, n.jsx)(P.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function es(e) {
    let { entry: t, stat: l } = e,
        { primary: i, secondary: a } = (function (e, t) {
            switch (t) {
                case z.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return {
                        primary: f.intl.formatToPlainString(f.t["k2UNz+"], { days: e.value }),
                        secondary: q(e.time_played_seconds),
                    };
                case z.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return {
                        primary: f.intl.formatToPlainString(y.default.rgpc8E, { count: e.value }),
                        secondary: q(e.time_played_seconds),
                    };
                default:
                    let l;
                    return {
                        primary:
                            ((l = Math.floor(Math.max(e.value * Y.A.Seconds.HOUR, 0) / Y.A.Seconds.MINUTE)),
                            f.intl.formatToPlainString(y.default["Sa+h68"], {
                                hours: Math.floor(l / Y.A.Minutes.HOUR),
                                minutes: l % Y.A.Minutes.HOUR,
                            })),
                    };
            }
        })(t, l);
    return (0, n.jsxs)("div", {
        className: el.TH,
        children: [
            (0, n.jsxs)("div", {
                className: el.bf,
                children: [
                    (0, n.jsx)(er, { stat: l }),
                    (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
            null != a && (0, n.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
        ],
    });
}
function ed(e) {
    let { game: t, notched: l } = e;
    return (0, n.jsx)("span", {
        className: el.rO,
        "aria-hidden": !0,
        children: (0, n.jsx)(F.Ay, {
            mask: l ? F.l8[24] : F.Ay.Masks.SQUIRCLE,
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
function ec(e) {
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
                      children: (0, n.jsx)(F.Ay, {
                          mask: F.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, n.jsx)("div", {
                              className: el.p0,
                              children: (0, n.jsx)(o.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: f.intl.formatToPlainString(y.default.JiMMEd, { count: a }),
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
                ? f.intl.string(y.default["7CrlYb"])
                : 1 === t.length
                  ? f.intl.formatToPlainString(y.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? f.intl.formatToPlainString(y.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : f.intl.formatToPlainString(y.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, n.jsx)(ec, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: i,
    });
}
function eo(e) {
    let { guildId: t, userId: l, name: a, applicationIds: r, applicationCount: s, games: d } = e,
        c = r.map((e) => ee(d, e)),
        u = i.useCallback(() => {
            (0, O.openUserProfileModal)({
                userId: l,
                guildId: t,
                tabSection: et.RP.ACTIVITY,
                scrollTarget: et.bk.RECENT_ACTIVITY,
            });
        }, [l, t]);
    return (0, n.jsx)("div", {
        className: el.ag,
        children: (0, n.jsx)(eu, {
            played: c,
            totalCount: s,
            children: (0, n.jsx)(U.D, {
                className: A()(el.Nw, el.Dz),
                "aria-label": f.intl.formatToPlainString(y.default.o6mBdl, { name: a }),
                onClick: u,
                children: (0, n.jsx)(ec, { played: c, totalCount: s }),
            }),
        }),
    });
}
var ef = l(219047);
function em(e) {
    let t,
        l,
        a,
        { guildId: r, data: s } = e,
        { stat: d, entries: c } = s,
        u = (0, E.bG)([_.default], () => _.default.getCurrentUser()?.id),
        o = i.useMemo(() => c.find((e) => e.user_id === u), [c, u]),
        f = i.useMemo(() => {
            let e = c.slice(0, 20);
            return null == o || e.includes(o) ? e : [...e, o];
        }, [c, o]),
        m = i.useMemo(() => ({ [r]: Array.from(new Set(f.map((e) => e.user_id))) }), [r, f]);
    (0, S.Eq)(m, "leaderboard");
    let h =
            ((t = i.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (l = (0, K.A)(t)),
            (a = (0, E.yK)([V.A], () => t.map((e) => V.A.didFetchingApplicationFail(e)))),
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
            floatingRowPosition: v,
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
        j = null != v,
        I = i.useCallback(
            (e) => {
                let t = e === o;
                return (0, n.jsx)(
                    en,
                    {
                        guildId: r,
                        entry: e,
                        stat: d,
                        games: h,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && j,
                        rowRef: t ? g : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [j, o, h, r, d, g],
        );
    return C(s)
        ? (0, n.jsx)(D, {})
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsxs)("div", {
                      className: ef.SY,
                      children: [
                          (0, n.jsx)(p.d_, { className: ef.p_, ref: x, children: f.map(I) }),
                          null != o &&
                              null != v &&
                              (0, n.jsx)("div", { className: A()(ef.Dz, "top" === v ? ef.gN : ef.qV) }),
                          null != o &&
                              null != v &&
                              (0, n.jsx)("div", {
                                  className: A()(ef.z$, "top" === v ? ef.aG : ef.Ie),
                                  children: (0, n.jsx)(en, {
                                      guildId: r,
                                      entry: o,
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
            className: ef.z8,
            children: [
                (0, n.jsx)(v.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, n.jsx)(o.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: f.intl.string(y.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, n.jsx)("div", { className: ef.qr, children: l })
        : (0, n.jsx)("div", {
              className: ef.qr,
              tabIndex: 0,
              children: (0, n.jsx)(j.m, {
                  text: f.intl.formatToPlainString(y.default["1bt50t"], { timestamp: (0, I.mk)(new Date(t)) }),
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
                (0, X.A)(() => n(Date.now()), r ? null : s),
                i.useMemo(
                    () => ({
                        ended: r,
                        endDate: new Date(t),
                        badgeLabel: r
                            ? f.intl.string(y.default["J8r/7L"])
                            : f.intl.formatToPlainString(y.default["PuaR+2"], { days: Math.ceil(a / Y.A.Millis.DAY) }),
                    }),
                    [r, t, a],
                )
            );
        })(t.week_start_ts),
        c = ex.PZ.useSetting(),
        u = 2 > (0, I.m_)(r, new Date()) ? (0, I.mk)(r, !1, c) : (0, I.i$)(r, "L LT", c),
        m = a
            ? f.intl.format(y.default.kG9XmM, { endedAt: u, nextStatName: (0, d.K)(t.next_stat).name })
            : f.intl.format(y.default["X+VLqi"], { statQuestion: l.question, endsAt: u });
    return (0, n.jsx)(W.u, {
        title: l.name,
        body: m,
        position: "top",
        children: (0, n.jsx)("div", {
            className: eg.q,
            tabIndex: 0,
            children: (0, n.jsx)(o.E, {
                variant: "text-xs/semibold",
                color: a ? "text-muted" : "text-brand",
                children: s,
            }),
        }),
    });
}
var eE = l(452027),
    ep = l(103557),
    ev = l(825484),
    ej = l(821609),
    eS = l(95477),
    e_ = l(408278),
    eI = l(241326),
    eb = l(683071),
    eN = l(2553),
    eC = l(405810),
    ey = l(967198),
    eT = l(488428),
    eD = l(776231),
    ew = l(486020),
    eR = l(652215);
function eG(e, t, l) {
    let n = ew.QB ? "webp" : "jpg",
        { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = eR.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, n),
        s = null != i ? `https://${i}${r}` : location.protocol + a + r,
        d = { size: (0, eD.kr)(500 * (0, eD.mZ)()) };
    return ("jpg" === n && (d.quality = "lossless"), (s += `?${eT.stringify(d)}`));
}
var eL = l(868602),
    eU = l(445187),
    eM = l(890497),
    ek = l(734057),
    eP = l(317525),
    eB = l(576705),
    eW = l(935208),
    eF = l(44167);
l(321073);
var eO = l(485845),
    eH = l(136722),
    ez = l(435183),
    eY = l(155718),
    eq = l(795816),
    eX = l(933958),
    eV = l(574152),
    eK = l(627363),
    e$ = l(712440),
    eQ = l(733110),
    eZ = l(488926),
    eJ = l(360469);
async function e0(e) {
    null == V.A.getApplication(eJ.NW) && (await (0, eK.TA)(eJ.NW));
    let t = eX.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== eJ.NW);
    return await (0, eq.su)({
        channelId: e,
        applicationId: eJ.NW,
        isStart: t,
        embeddedActivitiesManager: (0, eV.A)(),
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
    let i = await (0, ez.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let e8 = [];
var e2 = l(344351),
    e6 = l(256693),
    e3 = l(812901),
    e7 = l(317608),
    e5 = l(953538);
let e9 = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: i } = e,
                { text: a, image_hash: r } = t.config,
                s = "edit" === l ? t.config.image : void 0,
                d = void 0 !== s ? s : null != r ? eG(i, t.id, r) : null;
            return (0, n.jsxs)("div", {
                className: eU.k,
                children: [
                    null != d && (0, n.jsx)("img", { className: eU.S, src: d, alt: "" }),
                    null != a && (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: r } = e,
                s = t.config,
                [d, c] = i.useState(s.title ?? ""),
                [u, o] = i.useState(s.text ?? ""),
                [m, h] = i.useState(s.image),
                [x, g] = i.useState(null),
                A = (0, E.bG)([ey.A], () => ey.A.getGuildId()),
                p = void 0 !== m ? m : null != s.image_hash && null != A ? eG(A, t.id, s.image_hash) : null;
            return (0, n.jsxs)(b.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(eS.k, {
                        label: f.intl.string(f.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (g(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(eE.D, {
                        label: f.intl.string(f.t.X4IxWL),
                        children: (0, n.jsxs)(b.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: eL.B,
                            children: [
                                (0, n.jsxs)(b.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(eC.A, {
                                            variant: "secondary",
                                            text: f.intl.string(f.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (g(null), h(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eN.A)(0xa00000),
                                        }),
                                        null != p &&
                                            (0, n.jsx)(j.m, {
                                                text: f.intl.string(f.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(e_.K, {
                                                    variant: "critical-secondary",
                                                    icon: eI.TrashIcon,
                                                    onClick: function () {
                                                        (g(null), h(null));
                                                    },
                                                    "aria-label": f.intl.string(f.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != p && (0, n.jsx)("img", { className: eL.V, src: p, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(ep.f, {
                        label: f.intl.string(f.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (g(null), o(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != x &&
                        (0, n.jsx)("div", {
                            role: "alert",
                            children: (0, n.jsx)(eb.w, { type: "critical", children: x }),
                        }),
                    (0, n.jsxs)(ev.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(ej.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(ej.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== m ? null !== m : null != s.image_hash),
                                        0 === u.length && !e && (g(f.intl.string(y.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: u.length > 0 ? u : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    (void 0 !== m && (t.image = m), l(t));
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
                  : (0, n.jsx)(em, { guildId: l, data: t.data });
        },
        useTitle: function (e, t) {
            return t?.status !== "success" ? (e.default_title ?? "") : (0, d.K)(C(t.data) ? void 0 : t.data.stat).name;
        },
        TitleIcon: function () {
            return (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || C(t.data) ? null : (0, n.jsx)(eA, { data: t.data });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = (0, eF.n)(),
                r = (0, E.bG)(
                    [ek.A, eB.A],
                    () => {
                        let e = null != a ? ek.A.getChannel(a) : void 0;
                        return null != e && eB.A.can(eR.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                s = (0, E.bG)(
                    [eX.Ay],
                    () => {
                        let e = eX.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== eJ.NW ||
                            e.location.kind !== e2.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, E.bG)([eX.Ay], () => eX.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: u } =
                    ((t = (0, E.bG)(
                        [eQ.default],
                        () => eQ.default.getFetchStateForApplication(eJ.NW) === eQ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, E.bG)(
                        [eQ.default, V.A],
                        () => {
                            let e = eQ.default.getNewestTokenForApplication(eJ.NW);
                            if (null == e) return !1;
                            let t = V.A.getApplication(eJ.NW),
                                l = t?.integrationTypesConfig?.[eO.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    i.useEffect(() => {
                        (eQ.default.getFetchStateForApplication(eJ.NW) === eQ.FetchState.NOT_FETCHED &&
                            e$.A.fetch([eJ.NW]),
                            null == V.A.getApplication(eJ.NW) && (0, eK.TA)(eJ.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = i.useRef(!1);
            i.useEffect(() => {
                null == s && null != a && r && c && u && !m.current && ((m.current = !0), e0(a));
            }, [r, a, s, c, u]);
            let h = i.useCallback(() => {
                    null != a && ((m.current = !0), e0(a));
                }, [a]),
                x = null != a && c && !u;
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
                                  children: (0, n.jsx)(ej.$, {
                                      variant: "secondary",
                                      text: f.intl.string(y.default.PSuly6),
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
                          children: (0, n.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: f.intl.string(y.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, E.bG)([ey.A], () => ey.A.getGuildId()),
                a = eW.default.castGuildIdAsEveryoneGuildRoleId(l),
                r = (0, eF.n)(),
                s = (0, E.bG)([ek.A], () => (null != r ? ek.A.getChannel(r) : void 0), [r]),
                d = (0, E.bG)([eB.A], () => null != s && eB.A.can(eR.xBc.MANAGE_ROLES, s), [s]),
                c = (0, E.bG)([eP.A], () => (null == l ? e8 : eP.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                u = i.useMemo(() => {
                    let e;
                    return null != s
                        ? null != (e = s.permissionOverwrites[s.guild_id]) &&
                          eH.zy(e.deny, eR.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = s.permissionOverwrites[e.id];
                                      return null != t && eH.zy(t.allow, eR.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [s, c]),
                [o, m] = i.useState(null),
                [h, x] = i.useState(!1),
                [g, A] = i.useState(!1),
                p = o ?? u,
                v = i.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function j() {
                if (null != s) {
                    (A(!1), x(!0));
                    try {
                        (await e1({ channel: s, selectedRoleIds: p }), t());
                    } catch {
                        (x(!1), A(!0));
                    }
                }
            }
            return null == s
                ? null
                : (0, n.jsxs)(b.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(eM.Z, {
                              selectionMode: "multiple",
                              label: f.intl.string(y.default.XXLbfv),
                              description: f.intl.string(y.default.XrpYIG),
                              placeholder: f.intl.string(y.default.pp6WeD),
                              options: v,
                              value: p,
                              onSelectionChange: function (e) {
                                  (A(!1), m(e));
                              },
                              disabled: !d || h,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, n.jsx)(eb.w, { type: "warning", children: f.intl.string(y.default.UPLtlA) }),
                          g &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(eb.w, {
                                      type: "critical",
                                      children: f.intl.string(y.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(ev.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(ej.$, {
                                      variant: "secondary",
                                      text: f.intl.string(f.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: h,
                                  }),
                                  (0, n.jsx)(ej.$, {
                                      variant: "primary",
                                      text: f.intl.string(f.t["R3BPH+"]),
                                      onClick: j,
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
