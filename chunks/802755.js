i.d(t, { D: () => yo });
var n,
    s,
    l,
    r,
    a = i(419954),
    o = i(358776),
    u = i(780964),
    d = i(682348),
    c = i(574381),
    g = i(17928),
    m = i(952818),
    A = i(871633),
    h = i(933297),
    E = i(627968),
    S = i(64700),
    T = i(627363),
    x = i(587895),
    p = i(769015),
    f = i(751075),
    N = i(403362);
i(321073);
var _ = i(843402);
let I = (0, i(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return new Set(t.map((e) => e.exePath));
});
function C() {
    let e = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!1)),
        t = (0, g.bG)([m.Ay], () => I(...m.Ay.getOverrides()));
    S.useEffect(() => ((0, _.a2)(), _.e0), []);
    let { gameHistory: i, robloxSubgameHistory: n } = S.useMemo(
        () =>
            e.reduce((e, t) => ((0, A.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: i, robloxSubgameHistory: n, overrideExePaths: t };
}
function b(e) {
    let { gameHistory: t } = C();
    return {
        namedGames: S.useMemo(
            () =>
                t
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .take(e)
                    .toArray(),
            [t, e],
        ),
        totalCount: t.length,
    };
}
function y(e) {
    let { namedGames: t, totalCount: i } = b(e);
    return { names: t.map((e) => e.name), totalCount: i };
}
function v() {
    let { namedGames: e } = b(2),
        [t, i] = S.useMemo(() => e.map((e) => e.id), [e]);
    S.useEffect(() => {
        T.Ay.fetchApplications([t, i].filter(N.Vq));
    }, [t, i]);
    let [n, s] = (0, g.yK)([x.A], () => [t, i].map(x.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, E.jsx)(p.A, { game: n, size: p.M.MEDIUM_LARGE }), shape: f.e0.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, E.jsx)(p.A, { game: s, size: p.M.MEDIUM }), shape: f.e0.ROUNDED } : null,
          };
}
var j = i(375708);
let O = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = y(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: v }),
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        usePredicate: () => {
            let e = (0, o.SV)("ActivitySharingRelatedSettings"),
                t = (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e)));
            return e && t && (0, c.xl)();
        },
    }),
    R = (0, a.gN)(u.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [O] });
var L = i(885386),
    D = i(395277);
let P = (0, a.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => j.intl.string(D.default.WhdCGP),
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var G = i(174459),
    M = i(406535),
    U = i(652215);
let V = (0, a.zD)(u.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(D.default.A0FVCV),
        useSubtitle: () => j.intl.string(D.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            L.hV.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                });
        },
    }),
    k = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("ActivitySharingCategory") ? j.intl.string(j.t.WmsPis) : j.intl.string(j.t["6x5uWQ"]),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [P, V, R],
    });
var w = i(945810),
    F = i(106531);
let B = (0, w.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
function z(e) {
    let t = (0, F.lX)(e),
        i = B.useConfig({ location: e });
    return t || i.copyChanges;
}
let X = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    Y = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [X],
    });
var H = i(873298),
    K = i(192308),
    W = i(365258);
let Z = (0, a.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => {
        let e = (0, o.SV)("GuildActivitySharingDefaultSetting");
        return z("GuildActivitySharingDefaultSetting") && !e
            ? j.intl.string(j.t.vpgck1)
            : j.intl.string(D.default["/LHVbt"]);
    },
    useSubtitle: () => ((0, o.SV)("GuildActivitySharingDefaultSetting") ? j.intl.string(j.t.L5IdzV) : null),
    useOptions: function () {
        let e = (0, o.SV)("GuildActivitySharingDefaultSetting"),
            t = z("GuildActivitySharingDefaultSetting");
        return S.useMemo(
            () =>
                e
                    ? [
                          { value: H.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
                          { value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(D.default["5+lnTA"]) },
                          { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(D.default["egr+VZ"]) },
                      ]
                    : t
                      ? [
                            {
                                value: H.Qd.ACTIVITY_STATUS_OFF,
                                name: j.intl.string(j.t.FzgQna),
                                desc: j.intl.string(j.t.SQxoyc),
                            },
                            {
                                value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                name: j.intl.string(j.t["1hvuGH"]),
                                desc: j.intl.string(j.t.odUCPE),
                            },
                            { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.fQc5la) },
                        ]
                      : [
                            { value: H.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.UzGMH9) },
                            {
                                value: H.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                name: j.intl.string(D.default["/sAeRY"]),
                            },
                            { value: H.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
                        ],
            [t, e],
        );
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let n = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, F.W1)(t) && !B.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, W.g8)(n, e);
        if (null == s) return;
        let l = (0, W.Xc)(e);
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("43548"), i.e("81849"), i.e("62041"), i.e("41996")]).then(
                i.bind(i, 32167),
            );
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var q = i(683071),
    Q = i(331322),
    J = i(243721),
    $ = i(892547),
    ee = i(922016),
    et = i(980707),
    ei = i(477782),
    en = i(939249),
    es = i(834730),
    el = i(847374),
    er = i(661531),
    ea = i(123292),
    eo = i(140735),
    eu = i(498642),
    ed = i(743790),
    ec = i(71393),
    eg = i(711014),
    em =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let eA = {
    "recently-joined": (e) =>
        e
            .concat()
            .sort((e, t) =>
                null == e.joinedAt
                    ? -1
                    : null == t.joinedAt
                      ? 1
                      : e.joinedAt === t.joinedAt
                        ? 0
                        : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime(),
            ),
    "activity-sharing-on": (e, t) =>
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                s = t.includes(i.id);
            return !n && s ? -1 : n && !s ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                s = t.includes(i.id);
            return n && !s ? -1 : !n && s ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var eh = i(775657);
function eE(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, g.bG)([eu.A], () => eu.A.getMemberCount(t.id));
    return (0, E.jsxs)(Q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, E.jsx)("div", { className: eh.FO, children: (0, E.jsx)(ed.K, { guild: t, size: 48 }) }),
            (0, E.jsx)("div", {
                className: eh.QH,
                children: (0, E.jsx)(J.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let eS = function (e) {
    let { notice: t } = e,
        {
            guilds: i,
            searchQuery: n,
            setSearchQuery: s,
            sortOrder: l,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: c,
            numTotalGuilds: m,
        } = (function () {
            let [e, t] = (0, S.useState)(""),
                [i, n] = (0, S.useState)("server-order"),
                s = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
                l = (0, g.bG)([ec.A], () => ec.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = L.Pw.useSetting(),
                [o, u] = (0, S.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await L.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, S.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [m, A] = (0, S.useState)(() => eA[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(eA[e](r, a)), n(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: i } = e,
                        n = new Set(o);
                    t ? n.delete(i) : n.add(i), d([...n]);
                },
                isActivityRestricted: function (e) {
                    return o.includes(e);
                },
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: function () {
                    c ? d([]) : d(s);
                },
                numTotalGuilds: s.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        A = (0, S.useId)(),
        h = (0, S.useRef)(null),
        T = (0, S.useMemo)(
            () => [
                { id: em.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: em.SERVER_ORDER },
                { id: em.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: em.RECENTLY_JOINED },
                { id: em.ACTIVITY_SHARING_ON, label: j.intl.string(D.default.ZI51JZ), value: em.ACTIVITY_SHARING_ON },
                {
                    id: em.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(D.default["+kxafn"]),
                    value: em.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = T.find((e) => e.value === l)?.label ?? "";
    return (0, E.jsxs)("div", {
        className: eh.iE,
        children: [
            t,
            (0, E.jsxs)("div", {
                className: eh.N1,
                children: [
                    (0, E.jsx)($.I, {
                        query: n,
                        onChange: s,
                        onClear: function () {
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        onBlur: () =>
                            G.default.track(U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: m,
                            }),
                        placeholder: j.intl.string(j.t["H+nRYw"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        inputProps: { "aria-controls": A, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, E.jsxs)("div", {
                            className: eh.gO,
                            children: [
                                (0, E.jsx)(ee.Y, {
                                    targetElementRef: h,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, E.jsx)(et.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, E.jsx)(ei.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, E.jsx)(
                                                        ei.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                G.default.track(
                                                                    U.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: n,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: m,
                                                                    },
                                                                ),
                                                                    r(n);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, E.jsxs)(en.D, {
                                            ...e,
                                            innerRef: h,
                                            className: eh.Ku,
                                            children: [
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, E.jsx)(el.a, { size: "xs", color: er.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, E.jsx)(ea.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, E.jsx)(eo.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(D.default.EvzDff, { count: i.length }),
            }),
            (0, E.jsxs)("ul", {
                className: eh.X1,
                id: A,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, E.jsx)("div", {
                            className: eh.pb,
                            children: (0, E.jsx)(es.E, {
                                className: eh.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, E.jsx)(
                            eE,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var eT = i(155957);
let ex = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(D.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: eT.l,
                      children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(D.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(eS, { notice: e });
        },
    }),
    ep = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => {
            let e = (0, o.SV)("GuildActivitySharingCategory"),
                t = z("GuildActivitySharingCategory");
            return e ? j.intl.string(j.t.bwqjL9) : t ? j.intl.string(j.t.VDcvrR) : j.intl.string(D.default["1PougL"]);
        },
        useSubtitle: () => {
            let e = z("GuildActivitySharingCategory");
            return (0, o.SV)("GuildActivitySharingCategory")
                ? null
                : e
                  ? j.intl.string(j.t["/Go08F"])
                  : j.intl.string(D.default.OO17Lg);
        },
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [Z, ex, Y] : [Z]),
    }),
    ef = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (z("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [ex, Y],
    }),
    eN = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.khuuzv),
        useSubtitle: () => j.intl.string(D.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    e_ = (0, a.E2)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(es.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, E.jsx)(
                            es.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
        usePredicate: () => (0, o.SV)("GameJoiningBlurb"),
    }),
    eI = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(D.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    eC = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(D.default["89YBr5"]),
        useSubtitle: () => ((0, o.SV)("GameJoiningCategory") ? j.intl.string(j.t.uGDpgH) : null),
        buildLayout: () => [eN, eI, e_],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    });
var eb = i(993077),
    ey = i(575915);
let ev = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(eb.Z, {
                type: eb.Z.Types.PRIMARY,
                className: ey.A,
                children: (0, E.jsx)(es.E, {
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.xvCsx4, { termsLink: U.X7G.TERMS, privacyLink: U.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ej = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, {
        buildLayout: () => [ev],
        usePredicate: () => !(0, o.SV)("TermsCategory"),
    }),
    eO = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => ((0, o.Bv)("ActivityPrivacyPanel") ? [k, ep, eC] : [k, ep, ef, eC, ej]),
    }),
    eR = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: d._,
        buildLayout: () => [eO],
    });
var eL = i(935399),
    eD = i(625657),
    eP = i(297264),
    eG = i(821609),
    eM = i(404778),
    eU = i(554146),
    eV = i(131607),
    ek = i(589051),
    ew = i(592598),
    eF = i(351906),
    eB = i(532624),
    ez = i(773371),
    eX = i(184809),
    eY = i(723702),
    eH = i(766075),
    eK = i(999834),
    eW = i(435558),
    eZ = i.n(eW),
    eq = i(350535),
    eQ = i(672396);
let eJ = e0(null);
function e$() {
    var e;
    let t = e0(eJ);
    (e = eJ),
        eZ().isEqual(eZ().omit(t, "old_enabled"), eZ().omit(e, "old_enabled")) ||
            (G.default.track(U.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eJ = t));
}
function e0(e) {
    let t = eX.default.getNotificationPositionMode(),
        i = t !== U.G6Q.DISABLED,
        n = eB.Ay.getOverlayKeybind(),
        s = eB.Ay.getOverlayChatKeybind();
    return {
        enabled: ez.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: ew.A.isNotificationDisabled(eQ.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eq.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eq.dI)(s.shortcut) : null,
        text_opacity_slider: eX.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ez.default.enabled,
    };
}
var e1 = i(793574),
    e2 = i(237984),
    e3 = i(503698),
    e6 = i.n(e3),
    e4 = i(890856),
    e5 = i(295648);
function e7(e) {
    e.preventDefault(), e.stopPropagation();
}
function e8(e) {
    let {
        header: t,
        icon: i,
        title: n,
        description: s,
        action: l,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, E.jsxs)("div", {
        className: e6()(e5.HS, d),
        children: [
            (0, E.jsxs)(e4.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, E.jsx)("div", { className: e5.x_, children: t }),
                    (0, E.jsxs)("div", {
                        className: e5.rN,
                        children: [
                            null != i && (0, E.jsx)("div", { className: e5.$t, children: i }),
                            (0, E.jsxs)("div", {
                                className: e5.c8,
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: e5.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, E.jsx)(es.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, E.jsx)(es.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, E.jsx)("div", { className: e5.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: e5.Om, children: a }),
        ],
    });
}
let e9 = (0, a.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, E.jsx)(e8, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, E.jsx)(eG.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, e2.b)(e1.A.USER_SETTINGS, U.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var te = i(812729),
    tt = i.n(te),
    ti = i(429913),
    tn = i(616356);
function ts(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function tl() {
    let e = (0, g.bG)([tn.A], () => tn.A.getStreamerActiveStreamMetadata()),
        t = (0, g.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getVisibleGame();
                return null != e ? m.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            tt(),
        ),
        [i] = (0, ti.A)([ts(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var tr = i(866665),
    ta = i(478016),
    to = i(31300),
    tu = i(780907),
    td = i(684013),
    tc = i(56562),
    tg = i(964486),
    tm = i(311043),
    tA = i(569926),
    th = i(814925),
    tE = i(810412),
    tS = i(41984),
    tT = i(296027),
    tx = i(562519);
let tp = 5 * i(927813).A.Millis.DAY,
    tf = new tx.A("overlay_survey_timestamps");
function tN(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tf.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < tp) ||
            Array.from(tf.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, K.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("79969"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tf.add(n), (i) => (0, E.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var t_ = i(512950),
    tI = i(975571),
    tC = i(935671);
function tb() {
    (0, tC.sL)("overlay-settings");
}
function ty(e) {
    let { className: t, game: i } = e;
    return (0, tC.NP)() && null != i && i.elevated
        ? (0, E.jsx)("div", {
              className: t,
              children: (0, E.jsx)(t_.p, {
                  messageType: t_.Y.WARNING,
                  action: (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: tb,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: tI.A.getArticleURL(U.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tv = i(760751),
    tj = i(189081),
    tO = i(9302),
    tR = i(656513),
    tL = i(320448);
let tD = new Set([
    tS.AR.INITIALIZING,
    tS.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    tS.AR.WAITING_FOR_MODULE_TRACKING,
    tS.AR.WAITING_FOR_OVERLAY_OPEN,
    tS.AR.WAITING_FOR_POPOUT_OPEN,
    tS.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    tS.AR.WAITING_FOR_REACT_INITIALIZATION,
    tS.AR.WAITING_FOR_PID_FOCUS,
    tS.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tP(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = S.useState(!1);
    return (0, E.jsx)(tR.N, {
        className: e5.uR,
        collapsibleContent: (0, E.jsx)("div", { className: e5.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(e8, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: e6()(e5.AC, i),
                action: (0, E.jsxs)("div", {
                    className: e5.rc,
                    children: [
                        s.action,
                        l
                            ? (0, E.jsx)(el.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, E.jsx)(tL._, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
let tG = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = tl();
        (0, tA.I)(e?.id);
        let i = e?.pid,
            n = (0, g.bG)(
                [tT.default],
                () => (null == e || null == i ? null : tT.default.getTrackedGameByPid(i)),
                [e, i],
                tt(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, g.cf)(
                [tv.A, tj.A, tm.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tv.A, tj.A, tm.A]),
                [e, n],
            ),
            r = (0, g.bG)(
                [m.Ay, tv.A, tj.A, tm.A],
                () => (null == e ? null : (0, m.xU)(e, m.Ay, tv.A, tj.A, tm.A)),
                [e],
                tt(),
            ),
            [a, o] = S.useState(l),
            [u, d] = S.useState(s),
            [c, A] = S.useState(!1);
        S.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, tO.supportsLegacy)(),
            T = !(0, tO.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: f } = (0, g.cf)([tT.default], () => tT.default.getGlobalEnabledStatus());
        function N(t, i) {
            if (null == e) return;
            let n = !1,
                s = !1;
            switch (i) {
                case tE.OverlayToggledClientSettingType.LEGACY_GAME:
                    d(t), tu.Ay.toggleOverlay(e, t, a), (n = !t && u);
                    break;
                case tE.OverlayToggledClientSettingType.OOP_GAME:
                    o(t), tu.Ay.toggleOverlay(e, u, t), (s = !t && a);
                    break;
                case tE.OverlayToggledClientSettingType.LEGACY:
                    td.A.setEnabled(t, f), (0, tE.Q3)(t, tE.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case tE.OverlayToggledClientSettingType.OOP:
                    td.A.setEnabled(x, t), (0, tE.Q3)(t, tE.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (n || s) &&
                tN(
                    n ? tE.OverlayToggledClientSettingType.LEGACY_GAME : tE.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let _ = h && T,
            I = !x && !f,
            C = !a && !x && u && !h,
            b = !u && !f && a && !T,
            y = n?.overlayMethod === tS.Ue.Disabled,
            v = n?.state === tS.AR.OVERLAY_RENDERING && !y,
            O = n?.state != null && tD.has(n.state) && !y,
            R = n?.overlayMethod === tS.Ue.OutOfProcess,
            L = n?.overlayMethod === tS.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === tS.Ue.Hook,
            P = n?.state === tS.AR.OVERLAY_CRASHED || n?.state === tS.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [M, U] = (function () {
                switch (!0) {
                    case v && R:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        es.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-positive",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case v && L:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        es.E,
                                        {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            children: e,
                                        },
                                        t,
                                    );
                                },
                            }),
                            null,
                        ];
                    case v && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        es.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== tc.aI.BORDERLESS_FULLSCREEN:
                                        return j.intl.string(j.t.mJmbeC);
                                    case T:
                                        return j.intl.string(j.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return j.intl.string(j.t.WiY24u);
                                    case !f:
                                        return j.intl.string(j.t.cAFVsL);
                                    case !n?.supportsOutOfProcess:
                                        return j.intl.string(j.t.XcGEcs);
                                    default:
                                        return j.intl.string(j.t.bJXH2v);
                                }
                            })(),
                        ];
                    case P:
                        return [j.intl.string(j.t.OFC2aw), null];
                    case _:
                        return [j.intl.string(j.t.m7X4az), null];
                    case I:
                        return [j.intl.string(j.t["9DUS5l"]), null];
                    case G:
                        return [j.intl.string(j.t.nQ9EdJ), null];
                    case C:
                    case b:
                        return [j.intl.string(j.t.VWUn0a), null];
                    case O:
                        if (R) return [j.intl.string(j.t["s8+CFq"]), null];
                        if (D) return [j.intl.string(j.t.JEEdqt), null];
                        if (L) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == n:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case y: {
                        let e = n?.fullscreenType === tc.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, tg.Ay)(() => {
            tu.Ay.getDetectableGames();
        });
        let [V, k] = S.useMemo(
            () =>
                O
                    ? ["text-muted", er.A.colors.TEXT_MUTED.css]
                    : v && L
                      ? ["text-feedback-warning", er.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : v && R
                        ? ["text-feedback-positive", er.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : v && D
                          ? ["text-strong", er.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", er.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, v, L, R, D],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tP, {
                  onExpand: A,
                  className: c ? e5.tx : void 0,
                  title: (0, E.jsxs)(E.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, E.jsx)(tr.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, E.jsx)(th.A, {
                                        size: 16,
                                        color: er.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, E.jsx)(ta.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: er.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: M,
                  hint: null != U ? U : void 0,
                  header: (0, E.jsxs)(E.Fragment, {
                      children: [
                          v || O
                              ? (0, E.jsx)(to.k, { size: "xxs", color: k })
                              : (0, E.jsx)("div", { className: e5.W4 }),
                          (0, E.jsx)(es.E, {
                              variant: "text-xs/semibold",
                              color: V,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, E.jsx)(p.A, { game: t, pid: e?.pid, size: p.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, E.jsx)(en.D, {
                      onClick: (e) => e7(e),
                      children: (0, E.jsx)(J.d, {
                          checked: (a && f) || (u && x),
                          disabled: _,
                          onChange: (t) => {
                              !(function (t, i) {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          tu.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          td.A.setEnabled(t, t), (n = !t && x), (s = !t && f);
                                          break;
                                      case "both":
                                          td.A.setEnabled(t, t),
                                              tu.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && x) || (!t && u)),
                                              (s = (!t && f) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? tE.OverlayToggledClientSettingType.LEGACY_GAME
                                                : tE.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? tE.OverlayToggledClientSettingType.OOP_GAME
                                                : tE.OverlayToggledClientSettingType.OOP),
                                      null != l && tN(l, e.id ?? null);
                              })(
                                  t,
                                  (function (e, t) {
                                      let i = !t && e,
                                          n = !f && a,
                                          s = !x && u,
                                          l = !a && f,
                                          r = !u && x;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && f) || (u && x)),
                              );
                          },
                      }),
                  }),
                  warning: (0, E.jsx)(ty, { className: e5.Hh, game: e }),
                  children: [
                      (0, E.jsx)(e8, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: f ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(J.d, {
                                      checked: a && f,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !f
                                              ? N(e, tE.OverlayToggledClientSettingType.OOP)
                                              : N(e, tE.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e5.Kz }),
                              ],
                          }),
                      }),
                      (0, E.jsx)(e8, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: x ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(J.d, {
                                      checked: u && x,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !x
                                              ? N(e, tE.OverlayToggledClientSettingType.LEGACY)
                                              : N(e, tE.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e5.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = tl();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var tM = i(364522),
    tU = i(206885);
function tV(e) {
    let { game: t, gameApplication: i } = e,
        n = S.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: s, pid: n, size: p.M.SMALL });
}
function tk(e) {
    let {
        rawGame: t,
        gameApplication: i,
        supportDisabled: n,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, tA.I)(t?.id);
    let o = (0, g.cf)([m.Ay, tv.A, tj.A, tm.A], () => (0, m.xU)(t, m.Ay, tv.A, tj.A, tm.A)),
        u = (0, g.cf)([tv.A, tj.A, tm.A], () => (0, m.hw)(t, !1, [tv.A, tj.A, tm.A]), [t]),
        d = s(u),
        [c, A] = S.useState(d);
    return (
        S.useEffect(() => {
            A(d);
        }, [d]),
        (0, E.jsx)(e8, {
            title: t.name,
            icon: (0, E.jsx)(tV, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(J.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (A(e), l(e, o, u), i && tN(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, E.jsx)("div", { className: e5.Kz }),
                ],
            }),
        })
    );
}
let tw = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, g.cf)([tT.default], () =>
                    tT.default.getGlobalEnabledStatus(),
                ),
                s = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                l = (0, ti.A)(s.map((e) => e.id)),
                r = !(0, tO.supportsLegacy)();
            function a(e) {
                td.A.setEnabled(e, n);
                let t = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tE.Q3)(e, tE.OverlayToggledClientSettingType.LEGACY, t),
                    !e && i && tN(tE.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, i) {
                let { enabledOOP: n } = i;
                tu.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () =>
                    (0, tO.supportsLegacy)()
                        ? r
                            ? j.intl.string(j.t.r9jEVw)
                            : j.intl.string(j.t.OzInYk)
                        : j.intl.string(j.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, E.jsx)(e8, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: e5.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tU.O && (0, E.jsx)("div", { className: e5.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tP, {
                      onExpand: t,
                      className: e ? e5.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, E.jsx)(en.D, {
                          onClick: (e) => e7(e),
                          children: (0, E.jsx)(J.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e5.SC,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tM.Ip, {
                              className: e5.XG,
                              children: s.map((e, t) =>
                                  (0, E.jsx)(
                                      tk,
                                      {
                                          rawGame: e,
                                          clientSettingType: tE.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.BfFpW1)],
    }),
    tF = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, g.cf)([tT.default], () =>
                    tT.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tO.supportsOutOfProcess)(),
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, ti.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && i;
                td.A.setEnabled(n, e);
                let s = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, tE.Q3)(e, tE.OverlayToggledClientSettingType.OOP, s),
                    t && tN(tE.OverlayToggledClientSettingType.OOP, s);
            }
            function o(e, t, i) {
                let { enabledLegacy: n } = i;
                tu.Ay.toggleOverlay(t, e, n);
            }
            let u = S.useMemo(
                () => (tU.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, E.jsx)(e8, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: e5.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(J.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tU.O && (0, E.jsx)("div", { className: e5.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tP, {
                      onExpand: t,
                      className: e ? e5.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, E.jsx)(en.D, {
                          onClick: (e) => e7(e),
                          children: (0, E.jsx)(J.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e5.SC,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tM.Ip, {
                              className: e5.XG,
                              children: l.map((e, t) =>
                                  (0, E.jsx)(
                                      tk,
                                      {
                                          rawGame: e,
                                          clientSettingType: tE.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["7BlVIs"])],
    }),
    tB = (0, a.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [tG, tF, tw, e9],
    }),
    tz = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, g.bG)([eX.default], () => !eX.default.disableClickableRegions),
        setValue: (e) => {
            td.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    });
var tX = i(284009),
    tY = i.n(tX),
    tH = i(97260),
    tK = i(635242);
let tW = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, g.bG)([eB.Ay], () => eB.Ay.getOverlayKeybind()),
            t = !(0, tO.supportsLegacy)(),
            i = !(0, tO.supportsOutOfProcess)(),
            [n, s] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            l = (0, tC.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eB.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: e5.hc,
            children: (0, E.jsxs)("div", {
                className: e5.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: e5.Bu,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: j.intl.string(j.t.VsAZcC),
                            }),
                            r &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e5.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e5.y7,
                                    children: j.intl.string(j.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: e5.IH,
                        children: (0, E.jsx)(tK.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tY()(null != e, "Keybind should never be undefined"),
                                    tH.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
});
var tZ = i(515183),
    tq = i(682763);
let tQ = (0, a.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = tl();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = tl();
            return null != e && (0, tZ.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = tl(),
                i = t?.id,
                n = (0, g.bG)([ew.A], () => ew.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tZ.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = tn.A.getStreamerActiveStreamMetadata()),
                    (s = ts(
                        t,
                        (n =
                            null != (i = m.Ay.getVisibleGame()) ? m.Ay.getGameOrTransformedSubgameForPID(i.pid) : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: x.A.getApplication(s) ?? void 0 });
            null != l && (0, tq.x8)(l.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    tJ = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tW, tQ, tz] });
var t$ = i(93465);
let t0 = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: t$.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: t$.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: t$.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: t$.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: t$.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: t$.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ek.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, g.bG)([ew.A], () => ew.A.isNotificationDisabledBySetting(t$.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function t1(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, g.bG)([ew.A], () => ew.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            td.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let t2 = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => t0.map(t1),
    }),
    t3 = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [t2],
    }),
    t6 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getAvatarSizeMode()),
        setValue: (e) => {
            td.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: U.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: U.OSZ.SMALL },
        ],
    }),
    t4 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayNameMode()),
        setValue: (e) => {
            td.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: U.pwA.NEVER },
        ],
    }),
    t5 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayUserMode()),
        setValue: (e) => {
            td.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var t7 = i(391973),
    t8 = i(489277),
    t9 = i(897720),
    ie = i(38502);
function it() {
    let e = t8.A.getWidgetByType(U.uss.VOICE_V3);
    if (null == e) return null;
    let t = ie.A.getWidget(e.id);
    return null != t && (0, t9.ZO)(t) ? t : null;
}
i(392164);
let ii = (0, a.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = it();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = it();
        null != t &&
            (e < 1
                ? (0, t7.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, t7.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var is = i(43990),
    il = i(450740),
    ir = i(968898),
    ia = i(95701),
    io = i(889227),
    iu = i(288737),
    id = i(287809);
function ic(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new iu.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: i,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: n,
        }),
        user: new io.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
let ig = (0, a.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, g.cf)([eX.default], () => ({
                    avatarSizeMode: eX.default.getAvatarSizeMode(),
                    displayNameMode: eX.default.getDisplayNameMode(),
                    displayUserMode: eX.default.getDisplayUserMode(),
                })),
                [l] = S.useState(() => [
                    ic(j.intl.string(j.t.C0ZDvo), !0, !1),
                    ic(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    ic(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, g.bG)([t8.A, ie.A], () => {
                    let e = t8.A.getWidgetByType(U.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = ie.A.getWidget(e.id);
                    return null != t && (0, t9.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = ic(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(is.N, {
                    theme: U.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, E.jsxs)("div", {
                            className: e6()(e5.Y5, e),
                            children: [
                                (0, E.jsx)("div", {
                                    className: e5.kJ,
                                    children: (0, E.jsx)(il.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, ia.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: U.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: U.uss.VOICE,
                                        anchorLeft: !0,
                                        application: null,
                                        stream: null,
                                        streamApplication: null,
                                        streamMetadata: null,
                                        locked: !1,
                                        pinned: !1,
                                        isSettingsPreview: !0,
                                        isPreviewingInGame: !1,
                                        maxDisplayedVoiceStates: a,
                                    }),
                                }),
                                (0, E.jsxs)("div", {
                                    className: e5.R$,
                                    children: [
                                        (0, E.jsx)(ir.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, E.jsx)(ir.CS, {}),
                                        (0, E.jsx)(ir.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, E.jsx)("div", { className: e5.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    im = (0, a.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [ig, t6, t4, t5, ii],
    });
var iA = i(49999),
    ih = i(102937);
function iE() {
    let [e, t] = (0, eV.kn)([eU.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eL.Ay)(() => () => {
        t(iA.i.AUTO_DISMISS);
    }),
    e !== eU.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsxs)("div", {
                      className: ih.xC,
                      children: [
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: ih.tl,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsxs)("div", {
                                  className: ih.vJ,
                                  children: [
                                      (0, E.jsx)(eP.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.jzjJQg),
                                      }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: ih.lh,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ih.VV,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(iA.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eM.c, { className: ih.yF }),
              ],
          });
}
function iS() {
    let e = (0, g.bG)([eF.A], () => eF.A.enabled),
        t = (0, ek.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(q.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, eH.openUserSettings)(u.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, E.jsx)(eM.c, { className: ih.yF }),
              ],
          })
        : null;
}
let iT = (0, a.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                e$(),
                eB.Ay.addChangeListener(e$),
                ew.A.addChangeListener(e$),
                eX.default.addChangeListener(e$),
                ez.default.addChangeListener(e$),
                eY.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    eB.Ay.removeChangeListener(e$),
                        ew.A.removeChangeListener(e$),
                        eX.default.removeChangeListener(e$),
                        ez.default.removeChangeListener(e$),
                        eY.isPlatformEmbedded && (0, _.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(iE, {}), (0, E.jsx)(iS, {})] });
            },
        },
        buildLayout: () => [tB, tJ, im, t3],
    }),
    ix = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: eD.l,
        usePredicate: eK.b_,
        buildLayout: () => [iT],
    });
var ip = i(687966);
let iN = (0, a.AK)(u.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    i_ = (0, a.gN)(u.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, o.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [iN],
    });
var iI = i(396478),
    iC = i(270003),
    ib = i(227309),
    iy = i(363195),
    iv = i(1215),
    ij = i(39623),
    iO = i(952270),
    iR = i(138134),
    iL = i(414079),
    iD = i(29160),
    iP = i(650583),
    iG = i(18293),
    iM = i(582835);
let iU = (0, eY.isWindows)();
function iV(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, tA.I)(t.id);
    let o = (0, g.cf)([m.Ay, tv.A, tj.A, tm.A], () => (0, m.xU)(t, m.Ay, tv.A, tj.A, tm.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, g.cf)([m.Ay], () => ({
            canToggleDetection: null == a || m.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: m.Ay.isDetectionEnabled(o),
        })),
        c = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame()),
        [h, T] = S.useState(!1),
        x = S.useMemo(
            () =>
                (0, A.n1)(o)
                    ? r
                        ? o.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [p, f] = S.useState(x ?? "???"),
        N = e6()(iM.tR, {
            [iG.LO]: !n,
            [iG.Rw]: n,
            [iG.FB]: null != o && n,
            [iG.xL]: r,
            [iG.fG]: null != l && l.length > 0,
        });
    function _() {
        null != l && l.length > 0 && d
            ? (0, K.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, E.jsx)(e, {
                          ...t,
                          title: j.intl.formatToPlainString(j.t.PZ4fKc, { platform: x }),
                          subtitle: j.intl.formatToPlainString(j.t.ZIQbfb, { platform: x }),
                          actions: [
                              { text: j.intl.string(j.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: j.intl.string(j.t.Fmjztz),
                                  onClick: () => {
                                      tu.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : tu.Ay.toggleDetection(o);
    }
    let I = null != c && (0, m.Es)(o) === (0, m.Es)(c),
        C = (null != a && a.id === c?.id) || I || (null != l && l.some((e) => e.id === c?.id));
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: N,
                children: [
                    (0, E.jsxs)("div", {
                        className: e6()(iG.$K, iM.Vd),
                        children: [
                            o.verified && !s
                                ? (0, E.jsxs)("div", {
                                      className: iG.HS,
                                      children: [
                                          (0, E.jsx)("div", { className: iG.mO, children: x }),
                                          (0, E.jsx)(tr.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, E.jsx)(th.A, {
                                                  className: iG.qf,
                                                  size: 18,
                                                  color: er.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, E.jsx)(ta.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: er.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, E.jsx)("input", {
                                      className: e6()(iG.mO, iG.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && tu.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iP.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => f(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: s } = o;
                                return (
                                    n || I
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != i && "" !== i && (e = j.intl.format(j.t["gGeOE+"], { when: i })),
                                    (0, E.jsx)("div", {
                                        className: iG.GN,
                                        children: (0, E.jsx)(iD.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, eY.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    s || h
                        ? null
                        : (0, E.jsx)("div", {
                              className: e6()(iM.tR, iM.oA, iM.LT, iG.E3),
                              children: (0, E.jsx)(tr.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, E.jsx)(en.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: iG.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tv.A.getDetectableGame(o.id) : null;
                                          G.default.track(U.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(o) ? o.gameName : o.name,
                                          }),
                                              T(!0),
                                              (0, K.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("21072"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, E.jsx)(t, {
                                                          ...i,
                                                          detectedActivity: {
                                                              name: o.name ?? "",
                                                              application_id: e?.id ?? o.id ?? void 0,
                                                              type: U.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, E.jsx)(iR.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iG.Lj,
                                          colorClass: iG.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, E.jsx)(ij.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iG.Lj,
                                          colorClass: iG.GS,
                                      })
                                    : (0, E.jsx)(iO.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iG.$V : iG.zN,
                                          colorClass: iG.GS,
                                      });
                        return (0, E.jsx)("div", {
                            className: e6()(iM.tR, iM.oA, iM.LT, iG.E3),
                            children: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, E.jsx)(en.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: iG.ym,
                                          onClick: _,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!iU || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, E.jsx)(to.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iG.Lj,
                                      colorClass: iG.GS,
                                  })
                                : (0, E.jsx)(iv.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iG.$V,
                                      colorClass: iG.GS,
                                  }),
                            n = t
                                ? (0, E.jsx)(tr.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, E.jsx)("i", { className: iG.kb }),
                                  })
                                : null;
                        return (0, E.jsxs)("div", {
                            className: e6()(iM.tR, iM.oA, iM.LT, iG.E3),
                            children: [
                                n,
                                (0, E.jsx)(tr.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, E.jsx)(en.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: iG.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void tu.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || C
                        ? null
                        : (0, E.jsx)(iL.A, {
                              className: iG.LS,
                              onClick: function () {
                                  tu.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          tu.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, E.jsx)("div", {
                    className: iG.AQ,
                    children: l.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iV, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, E.jsx)("div", { className: iG.PQ }),
                                ],
                            },
                            (0, m.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
var ik = i(522826);
function iw() {
    let e = (0, g.bG)([iy.A], () => iy.A.theme);
    return (0, E.jsxs)(iI.pp, {
        theme: e,
        className: ik.eT,
        children: [
            (0, E.jsx)(iI.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, E.jsx)(iI.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function iF() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = C();
    return 0 === e.length
        ? (0, E.jsx)(iw, {})
        : (0, E.jsx)(iC.n, {
              children: (0, E.jsx)("div", {
                  children: e.map((e) =>
                      (0, E.jsx)(
                          iV,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === ib.a7 ? t : void 0 },
                          (0, m.Es)(e),
                      ),
                  ),
              }),
          });
}
let iB = (0, a.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, E.jsx)(iF, {}),
});
var iz = i(424994);
let iX = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iB, i_],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: iz.s8 }),
});
var iY = i(305866),
    iH = i(783878),
    iK = i(930863),
    iW = i(997213);
function iZ(e) {
    let { onClose: t } = e,
        i = (0, g.bG)([m.Ay], () => m.Ay.getCandidateGames()),
        [n, s] = S.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, E.jsxs)(iY.l, {
        className: e6()(iK.H, iW.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, E.jsx)(iH.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, E.jsx)(eM.c, { className: e6()(ik.Ot, ik.QB) }),
            (0, E.jsxs)("div", {
                className: e6()(iK.o, iM.xM),
                children: [
                    (0, E.jsx)(ea.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, E.jsx)(eG.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (tu.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iq = i(347990);
let iQ = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: function () {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e6()(iq.a, ik.Gf),
            children: [
                (0, E.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, E.jsx)(ee.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(iZ, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, E.jsx)(ea.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: j.intl.string(j.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function iJ() {
    return (0, E.jsx)("div", {
        className: e6()(iM.tR, iG.eS, iG.Rw),
        children: (0, E.jsxs)("div", {
            className: e6()(iG.$K, iM.Vd),
            children: [
                (0, E.jsx)("div", { className: iG.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, E.jsx)("div", { className: iG.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let i$ = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = C(),
                i = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame());
            return null != i
                ? (0, E.jsx)(
                      iV,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === ib.a7 ? e : void 0,
                      },
                      (0, m.Es)(i),
                  )
                : (0, E.jsx)(iJ, {});
        },
    }),
    i0 = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [i$, iQ],
    }),
    i1 = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [i0, iX],
    }),
    i2 = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: ip._,
        usePredicate: eK.Pi,
        buildLayout: () => [i1],
    }),
    i3 = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => j.intl.string(j.t.nVPpLM),
        buildLayout: () => [eR, i2, ix],
    });
var i6 = i(550640),
    i4 = i(346055),
    i5 = i(97808),
    i7 = i(778712),
    i8 = i(775602),
    i9 = i(320095),
    ne = i(963852),
    nt = i(763754),
    ni = i(20851),
    nn = i(486020),
    ns = i(827053);
let nl = new ia.nA({ id: "1337", guild_id: "1337", type: U.rbe.GUILD_TEXT, name: "preview" }),
    nr = [
        { status: U.clD.IDLE, discriminator: "2" },
        { status: U.clD.DND, discriminator: "3" },
        { status: U.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function na(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i9.rh)({ ...(0, ne.Ay)({ channelId: nl.id, content: e }), state: U.cmJ.SENT, reactions: t });
}
var no = i(856488);
let nu = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    nd = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var nc = i(100767),
    ng = i(106236),
    nm = i(113494),
    nA = i(782134),
    nh = i(54570),
    nE = i(8880),
    nS = i(75804);
let nT = eZ().debounce((e) => {
    (0, nh.zU)(e);
}, 250);
function nx() {
    let [e, t] = S.useState(!1);
    return (
        (0, eL.l0)(() => (0, nh.pr)()),
        (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? nm.E : nA.u,
            size: "sm",
            onClick: function () {
                if (e) {
                    (0, nh.pr)(), t(!1);
                    return;
                }
                (0, nh.AU)(
                    j.intl.string(j.t.PKaNJL),
                    !0,
                    void 0,
                    function () {
                        return t(!0);
                    },
                    function () {
                        return t(!1);
                    },
                ),
                    t(!0);
            },
        })
    );
}
let np = (0, a.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, g.bG)([nE.A], () => nE.A.speechRate);
            return (0, E.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(ng.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: nS.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nT,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, E.jsx)(es.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, E.jsx)(es.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, E.jsx)(es.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, E.jsx)(nx, {}),
                ],
            });
        },
        usePredicate: () => nc.$j,
    }),
    nf = (0, a.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [np, nd, nu],
    }),
    nN = (0, a.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    n_ = (0, a.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [nN] });
var nI = i(955572);
let nC = (0, a.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.desaturateUserColors),
    setValue: () => (0, nI.YV)(),
});
var nb = i(652525);
let ny = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.enableCustomCursor),
        setValue: (e) => (0, nI.ts)(e),
        usePredicate: () => (0, nb.t)("EnableCustomCursorSetting"),
    }),
    nv = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, nI.Gm)(e),
        hasIcon: !0,
    }),
    nj = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => j.intl.string(j.t.aZlePv),
        useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isHighContrastModeEnabled),
        setValue: (e) => (0, nI.uh)(e ? i8._1.HIGH : i8._1.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: h.Xi.NEW, dismissibleContent: eU.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nO = i(406360),
    nR = i(742023);
let nL = (0, a.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => j.intl.string(j.t.nemtgW),
        useSubtitle: () => j.intl.string(j.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useOptions: function () {
            return S.useMemo(
                () => [
                    { name: j.intl.string(j.t.D5Fma9), desc: j.intl.string(j.t.Qj75ck), value: "no-limit" },
                    { name: j.intl.string(j.t.ldcGIH), desc: j.intl.string(j.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, nO.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nI.FU)(e);
        },
        useValue: function () {
            return (0, g.bG)([nR.Ay], () => nR.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    nD = (0, a.Hn)(u.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => j.intl.string(j.t.nC2XBl),
        useSubtitle: () => j.intl.string(j.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: j.intl.string(j.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: j.intl.string(j.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: j.intl.string(j.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: j.intl.string(j.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.officialMessageStyle),
        setValue: (e) => (0, nI.w_)(e),
    }),
    nP = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.roleStyle),
        setValue: (e) => (0, nI.IX)(e),
    });
(0, a.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.roleStyle),
    setValue: (e) => (0, nI.IX)(e),
});
let nG = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: U.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => i8.Ay.saturation,
    asValueChanges: (e) => (0, nI.HU)(e),
});
var nM = i(839214),
    nU = i(502229);
let nV = (0, nM.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nk = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: tI.A.getArticleURL(U.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([i8.Ay], () => i8.Ay.syncForcedColors);
            return (
                (0, tg.Ay)(() => {
                    nV.setState({ syncEnabled: i8.Ay.syncForcedColors });
                }),
                nV.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nV.getState();
            if (null != t) {
                clearTimeout(t), nV.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === i8.Ay.syncForcedColors) return void nV.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nI.D3)(e), nV.setState({ updateTimeout: null });
            }, 150);
            nV.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nU.D)(),
    }),
    nw = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nG, nC, nj, ny, nk, nL, nP, nD, nv, n_],
    });
var nF = i(397438),
    nB = i(355097);
function nz(e) {
    return (0, g.bG)([nF.A], () =>
        (function (e) {
            switch (e) {
                case nB._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nB._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nF.A.getAppliedOverrideReasonKey(e)),
    );
}
let nX = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nz("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    nY = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nz("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var nH = i(823894);
let nK = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nz("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nH.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nH.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nH.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    nW = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: tI.A.getArticleURL(U.MVz.REDUCED_MOTION) }),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
        setValue: (e) => (0, nI.qz)(e ? "reduce" : "no-preference"),
    }),
    nZ = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, g.bG)([i8.Ay], () => "auto" === i8.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, nI.qz)(e ? "auto" : i8.Ay.systemPrefersReducedMotion),
    }),
    nq = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [nW, nZ, nY, nX, nK],
    });
var nQ = i(688810),
    nJ = i(259065),
    n$ = i(864386);
let n0 = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(n$.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, nQ.Ay)();
        return j.intl.format(n$.default.aEax6P, {
            onClickOpenModal() {
                (0, nJ.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, nI.Dm)(e),
});
function n1(e) {
    return `${e.toFixed(0)}px`;
}
let n2 = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: U.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: U.hH7.FONT_SIZES["0"],
        maxValue: U.hH7.FONT_SIZES[U.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => U.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => i8.Ay.fontSize,
        onValueRender: n1,
        onMarkerRender: n1,
        asValueChanges: (e) => (0, nI.XS)(e),
    }),
    n3 = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, nI.kI)(e),
    }),
    n6 = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [n2, n3, n0],
    }),
    n4 = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: H.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: H.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: H.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== H.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    n5 = "cozy",
    n7 = "compact",
    n8 = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: n5 },
            { name: j.intl.string(j.t["1JNcPS"]), value: n7 },
        ],
        useValue: () => (L.hH.useSetting() ? n7 : n5),
        setValue: (e) => {
            L.hH.updateSetting(e === n7), (0, nI.AC)();
        },
    });
var n9 = i(381941);
function se(e) {
    return `${e.toFixed(0)}px`;
}
let st = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => j.intl.string(j.t.Q6lKkg),
    useSubtitle: () => j.intl.string(j.t.p7eUrb),
    markers: n9.qh,
    stickToMarkers: !0,
    minValue: n9.qh["0"],
    maxValue: n9.qh[n9.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? n9.y5 : n9.ES),
    useExternalValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.messageGroupSpacing),
    getInitialValue: () => i8.Ay.messageGroupSpacing,
    onValueRender: se,
    onMarkerRender: se,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, nI.AC)(e);
        }
    },
});
var si = i(775121);
let sn = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => eY.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: si.A.modKey }),
        markers: U.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: U.hH7.ZOOM_SCALES["0"],
        maxValue: U.hH7.ZOOM_SCALES[U.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => U.hH7.ZOOM_DEFAULT,
        getInitialValue: () => i8.Ay.zoom,
        useExternalValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, nI.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    ss = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n4, n8, st, sn],
    }),
    sl = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n6, ss, nw, nq, nf],
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    i = S.useMemo(
                        () => [
                            na(
                                j.intl.formatToPlainString(j.t.BknJRT, {}),
                                t
                                    ? [
                                          {
                                              emoji: { id: null, name: "\uD83E\uDD40", animated: !1 },
                                              me: !0,
                                              count: 3,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                          {
                                              emoji: { id: null, name: "\uD83E\uDEA4", animated: !1 },
                                              me: !1,
                                              count: 1,
                                              me_burst: !1,
                                              burst_count: 0,
                                          },
                                      ]
                                    : [],
                            ),
                            na(
                                j.intl.formatToPlainString(j.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, g.bG)([i8.Ay], () => i8.Ay.messageGroupSpacing);
                return (0, E.jsx)(i4.M, {
                    children: (0, E.jsxs)("section", {
                        "aria-label": j.intl.string(j.t.RC22qg),
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: ns.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, E.jsxs)(tM.Ip, {
                                className: ns.VH,
                                children: [
                                    (0, E.jsx)("ol", {
                                        className: ns.DZ,
                                        style: { gap: n },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, E.jsx)(
                                                "li",
                                                {
                                                    children: (0, E.jsx)(ni.A, {
                                                        message: t,
                                                        channel: nl,
                                                        compact: e,
                                                        author: { ...(0, nt.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: ns.Jb,
                                        children: [
                                            (0, E.jsx)("div", {
                                                className: ns.HD,
                                                children: nr.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, E.jsx)(
                                                        i5.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: i7._3.SIZE_32,
                                                            src: nn.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, E.jsx)(eG.$, {
                                                text: j.intl.string(j.t["2RHHgz"]),
                                                size: "sm",
                                                variant: "primary",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            },
            sticky: !0,
        },
    }),
    sr = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i6.c,
        useMenu: no.A,
        buildLayout: () => [sl],
    });
var sa = i(650809),
    so = i(636537),
    su = i(228366),
    sd = i(74396),
    sc = i(269880),
    sg = i(55619),
    sm = i(812993),
    sA = i(314116),
    sh = i(19575),
    sE = i(546385);
let sS = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => sh.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(Q.B, {
            children: [
                (0, E.jsx)(J.d, { label: t, description: i, checked: e, onChange: sT }),
                !e && (0, E.jsx)(sE.A, { look: sE.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function sT(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, sA.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            sh.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sx = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([tj.A], () => tj.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    sp = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [...((0, o.SB)("AppearanceAdvancedCategory_buildLayout") ? [] : [sS]), sx],
    });
var sf = i(199966),
    sN = i(963935);
function s_(e) {
    let { title: t } = e;
    return t;
}
function sI(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function sC(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(sI, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function sb(e) {
    return e.type === sN.Z6.LIST;
}
function sy(e, t) {
    let { limit: i = 2, formatter: n = s_ } = t ?? {};
    tY()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, sf._)(),
        r = s.get(e) ?? l.get(e);
    tY()(
        null != r && (r.type === sN.Z6.ACCORDION || sb(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = sb(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return S.useMemo(() => {
        let e = a,
            t = [];
        for (let i of o)
            if ("useTitle" in i && null != i.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: i.key, useTitle: i.useTitle });
            }
        if (0 === t.length) return "";
        let s = Math.min(i, 3);
        if (t.length <= s)
            if (1 === t.length)
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: sC({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: sC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sC({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: sC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sC({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: sC({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: sC({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: sC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sC({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: sC({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: sC({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: sC({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
var sv = i(951260);
let sj = (0, a.zD)(u.X.ENABLE_APPS_BUTTON, {
        useTitle: () => j.intl.string(j.t.ZTH4j4),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, nI.n8)({ appsButtonEnabled: e }),
    }),
    sO = {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isSubmitButtonEnabled),
        setValue: () => (0, nI.Xt)(),
    },
    sR = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, sO),
    sL = (0, a.zD)(u.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...sO,
        usePredicate: () => !(0, sv.n)("EnableSendButtonOutsideExperiment"),
    }),
    sD = (0, a.zD)(u.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => j.intl.string(j.t.WggFoO),
        useSubtitle: () => j.intl.string(j.t.XpErGj),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, nI.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, g.bG)([i8.Ay], () => i8.Ay.expressionPickerFormat === i8.IG.FLEXIBLE),
    }),
    sP = (0, a.zD)(u.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, nI.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i8.Ay], () => i8.Ay.expressionPickerFormat === i8.IG.FLEXIBLE),
    }),
    sG = (0, a.zD)(u.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isGifButtonEnabled),
        setValue: (e) => (0, nI.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i8.Ay], () => i8.Ay.expressionPickerFormat === i8.IG.FLEXIBLE),
    }),
    sM = (0, a.zD)(u.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => j.intl.string(j.t.Ar0krj),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, nI.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, g.bG)([i8.Ay], () => i8.Ay.expressionPickerFormat === i8.IG.FLEXIBLE),
    }),
    sU = (0, a.Qx)(u.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => j.intl.string(j.t.AxRAWt),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.expressionPickerFormat),
        setValue: (e) => (0, nI.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.k86Soy), desc: j.intl.string(j.t.bSGTTZ), value: i8.IG.FLEXIBLE },
                { name: j.intl.string(j.t.bjwSOn), desc: j.intl.string(j.t.We36HX), value: i8.IG.CONDENSED },
                { name: j.intl.string(j.t.FDIKss), desc: j.intl.string(j.t["rclZL/"]), value: i8.IG.HIDDEN },
            ];
        },
    }),
    sV = (0, a.FW)(u.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [sU, sD, sP, sG, sM],
    }),
    sk = (0, a.bd)(u.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => sy(u.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, sv.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [sR, sj, sV],
    });
var sw = i(565645);
let sF = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sw.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    sB = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e);
        },
    }),
    sz = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e1.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    sX = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sB, sF, sz, sL, sk],
    });
var sY = i(526162),
    sH = i(793943),
    sK = i(792656),
    sW = i(830543),
    sZ = i(785007),
    sq = i(806932),
    sQ = i(915089),
    sJ = i(174197),
    s$ = i(202541);
let s0 = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sQ.GV)(),
            { ref: t, ...i } = (0, sZ._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sY.A], () => sY.A.isUpsellPreview);
        return (
            (0, eL.Ay)(() => {
                n &&
                    G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: s$.e.APP_ICON_UPSELL,
                        location_stack: [e1.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(Q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sq.m, { disabled: n, size: sJ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function s1() {
    (0, sH.nf)(sH.HP.APP_ICON), (0, sW.default)();
}
function s2() {
    return (0, E.jsx)(sK.A, {
        subscriptionTier: s$.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let s3 = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([sY.A], () => sY.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: s1,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: s2 }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [s0],
    }),
    s6 = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    s4 = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [s6] });
var s5 = i(379587),
    s7 = i(452027),
    s8 = i(976860),
    s9 = i(474090),
    le = i(181079),
    lt = i(422258),
    li = i(668267),
    ln = i(313281),
    ls = i(335993);
let ll = tI.A.getArticleURL(U.MVz.FAVORITES_GUILD);
function lr() {
    let { analyticsLocations: e } = (0, nQ.Ay)(e1.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, li.mv)("settings_page"), (0, s8.uh)(U.YYv), (0, sW.default)();
        }, []);
    return (0, E.jsx)(nQ.f5, {
        value: e,
        children: (0, E.jsx)(s7.D, {
            label: j.intl.string(ls.default.OT1NK5),
            description: j.intl.format(ls.default.GR2KOG, { helpCenterLink: ll }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(eG.$, { variant: "secondary", text: j.intl.string(ls.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sK.A, {
                        subscriptionTier: s$.pe.TIER_2,
                        defaultTextOverride: j.intl.string(ls.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let la = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, s5.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [j.intl.string(ls.default.OT1NK5)],
        Component: function () {
            let e = (0, g.bG)([le.A], () => le.A.favoriteGuildEnabled),
                t = (0, g.bG)([id.default], () => {
                    let e = id.default.getCurrentUser();
                    return null != e && s9.Ay.isPremiumExactly(e, s$.PremiumTypes.TIER_2);
                }),
                i = (0, ln.DZ)(),
                n = S.useCallback(
                    (e) => {
                        (0, lt.tV)(e, "settings_page"), !e && i && (0, s8.pX)(U.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, E.jsx)(J.d, {
                      checked: e,
                      description: j.intl.format(ls.default.GR2KOG, { helpCenterLink: ll }),
                      onChange: n,
                      label: j.intl.string(ls.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(lr, {});
        },
    }),
    lo = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    lu = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    ld = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [lo, lu],
    }),
    lc = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    lg = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var lm = i(817281);
let lA = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, E.jsx)(
                            en.D,
                            {
                                tag: "a",
                                onClick: () => (0, eH.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nR.Ay], () => nR.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            lm.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lh = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: U.P6Q.ON_CLICK, id: U.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: U.P6Q.ALWAYS, id: U.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: U.P6Q.IF_MODERATOR, id: U.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    lE = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    lS = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [ld, lc, lg, lh, lE, lA, la, s4],
    });
var lT = i(753806),
    lx = i(145331);
let lp = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => j.intl.string(j.t.VkoLsy),
        useSearchTerms: () => [j.intl.string(j.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.E9JM4J), value: 0 },
                { name: j.intl.string(j.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!L.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? lT.A.cleanUpPrivateChannelSearchState() : lT.A.cleanUpSearchState({ type: U.I4_.DMS }),
                (0, lx._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: lx.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    lf = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [lp],
    }),
    lN = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eF.A], () => {
                let { autoToggle: e } = eF.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sg.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    l_ = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([eF.A], () => {
                let { enabled: e } = eF.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sg.A.update({ enabled: e });
        },
    });
var lI = i(77729),
    lC = i(588857);
let lb = [],
    ly = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eK.b_)(),
                t = (0, ek.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return S.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(lC.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([eF.A], () => eF.A.getSettings().disabledOverlayWidgets ?? lb);
        },
        setValue: (e) => sg.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    lv = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { hidePersonalInformation: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sg.A.update({ hidePersonalInformation: e }),
    }),
    lj = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { hideInstantInvites: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sg.A.update({ hideInstantInvites: e }),
    }),
    lO = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { disableSounds: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sg.A.update({ disableSounds: e }),
    }),
    lR = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { disableNotifications: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sg.A.update({ disableNotifications: e }),
    }),
    lL = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eF.A], () => {
                let { enableContentProtection: e } = eF.A.getSettings();
                return e;
            }),
        setValue: (e) => sg.A.update({ enableContentProtection: e }),
        usePredicate: () => lI.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lD = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [lv, lj, lO, lR, lL, ly],
    }),
    lP = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [l_, lN, lD],
    });
var lG = i(147248),
    lM = i(665267),
    lU = i(414133),
    lV = i(412848);
let lk = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lV.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: H.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: H.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, lU.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lw = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([i8.Ay], () => i8.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, nI.M1)(),
    });
var lF = i(284016);
let lB = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([lF.A], () => !1 !== lF.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iy.A.theme,
            n = lG.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = U.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            su.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            lm.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lz = i(98596);
let lX = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lY = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lX] }),
    lH = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, g.bG)([i8.Ay], () => i8.Ay.useForcedColors)
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nU.D)()
                              ? j.intl.format(j.t.Jae48E, {
                                    onClick: () => {
                                        (0, eH.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, g.bG)([lG.A, i8.Ay], () => i8.Ay.useForcedColors || lG.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: lM.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lz.k, lB, lw, lk, lY],
    }),
    lK = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            sd.A.isFetching() ||
                (su.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                so.Bo.get({ url: U.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        su.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        su.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [lH, s3, lS, sX, lf, lP, sp],
    }),
    lW = [
        { badgeType: h.Xi.NEW, dismissibleContent: eU.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eU.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(sm.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    lZ = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: sa.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, sc.A)(),
                s =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, E.jsx)(ei.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  G.default.track(U.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: U.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, g.bG)([eF.A], () => eF.A.enabled, [])),
                    (0, E.jsx)(ei.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            sg.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return S.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, E.jsx)(ei.rX, { label: j.intl.string(j.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, E.jsx)(ei.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lW,
        buildLayout: () => [lK],
    });
var lq = i(410767),
    lQ = i(691885),
    lJ = i(408278),
    l$ = i(241326),
    l0 = i(885574),
    l1 = i(475358),
    l2 = i(28647),
    l3 = i(549406),
    l6 = i(695366),
    l4 = i(186295),
    l5 = i(868886);
function l7(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: l5.zc,
              children: (0, E.jsx)(l6.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: l5.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: l5.Am,
                      children: (0, E.jsx)(l6.E, { size: "sm", color: er.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function l8(e) {
    let t = (0, g.bG)([l4.Ay], () => l4.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tl();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, tC.NP)(),
        l = s && null != i && t === U.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function l9(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = l8(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e6()(l5.kL, t),
              children: [
                  (0, E.jsx)(l7, { game: s, application: l }),
                  (0, E.jsxs)("div", {
                      className: l5.FS,
                      children: [
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != s
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, E.jsx)(es.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: tI.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, tC.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var re = i(189213),
    rt = i(292666),
    ri = i(320989),
    rn = i(978263);
let rs = [];
var rl = i(235986),
    rr = i(820785),
    ra = i(734057),
    ro = i(808728),
    ru = i(967198),
    rd = i(926140),
    rc = i(387722);
function rg() {}
let rm = [rd.rD.VOICE_CHANNEL];
function rA(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function rh() {
    return (0, E.jsx)("div", {
        className: rc.i1,
        children: (0, E.jsx)(es.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: rc.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function rE(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [s, l] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, K.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(rS, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tH.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e6()(rc.a8, i),
        children: (0, E.jsx)(s7.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(rl.A, {
                align: rl.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: rc.$X, children: (0, E.jsx)(rT, { channelId: s }) }),
                    (0, E.jsx)(rl.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(eG.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function rS(e) {
    let t,
        i,
        { transitionState: n, onClose: s, onSelect: l } = e,
        r = S.useId(),
        a = S.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: i,
                    autocompleterOptions: n,
                    autocompleterBeforeCreateSearchContext: s,
                } = e,
                [l, r] = S.useState(""),
                [a, o] = S.useState(rs),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(rs) : o(e);
                }, []);
            S.useEffect(
                () =>
                    ri.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new rn.A(u, i, void 0, n));
            return (
                S.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: S.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: rm, autocompleterBeforeCreateSearchContext: rA }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([ro.Ay, ra.A, ru.A], () => {
                let e = ru.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of ro.Ay.getVocalChannelIds(e)) {
                    let e = ra.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: m, setFocusedIndex: A } = (function (e) {
            let [t, i] = S.useState(0),
                n = S.useRef(e);
            return (
                e !== n.current && 0 !== t && i(0),
                S.useEffect(() => {
                    n.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: i }
            );
        })(o);
    S.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, m, !0) || e.scrollToIndex({ section: 0, row: m });
    }, [m]);
    let h = null != c ? c.length : d.length,
        T = (() => {
            if (null != c) return c[m]?.id;
            let e = d[m];
            if (e?.type === rd.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
            h > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: j.intl.string(j.t["+N3fW7"]),
                      ref: a,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === rd.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? ra.A.getChannel(i.parent_id) : void 0,
                              r = ec.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              rr.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: m === t,
                                  onMouseEnter: () => A(t),
                                  onClick: () => {
                                      l(i.id), s();
                                  },
                                  onFocus: () => A(t),
                                  children:
                                      null != r ? (0, E.jsx)("div", { className: rc.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(rh, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(re.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(rt.k, {
            value: o,
            onChange: u,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            s();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[m];
                                let e = d[m];
                                if (e?.type === rd.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? l(void 0) : l(e.id), s();
                            break;
                        }
                        case "arrowup":
                            0 === m ? A(h - 1) : A(m - 1);
                            break;
                        case "arrowdown":
                            m >= h - 1 ? A(0) : A(m + 1);
                    }
            },
            placeholder: j.intl.string(j.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": h > 0,
            "aria-activedescendant": h > 0 && null != T ? T : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
    });
}
function rT(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, g.cf)([ra.A, ec.A], () => {
            let e = null != t ? ra.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? ra.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? ec.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(es.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: rc.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(rr.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: rg,
              onFocus: rg,
              onMouseEnter: rg,
              focused: !1,
              children: null != s ? (0, E.jsx)("div", { className: rc.J5, children: s.name }) : null,
          });
}
function rx(e) {
    let { className: t, children: i } = e;
    return (0, E.jsx)("div", { className: t, children: (0, E.jsx)(Q.B, { gap: 16, children: i }) });
}
var rp = i(734066),
    rf = i(880144),
    rN = i(614455);
function r_() {
    let e = (0, g.bG)([eB.Ay], () => eB.Ay.getState()),
        t = (0, g.bG)([l4.Ay], () => (0, rf.A)(l4.Ay)),
        i = (0, g.bG)([rN.A], () => rN.A.isSupported),
        n = (0, rp.sw)(),
        s = (0, rp.BW)(),
        l = (0, eY.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eZ()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![U.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, U.hCu.SAVE_CLIP, U.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((e) => !i && (e.action === U.hCu.SAVE_CLIP || e.action === U.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === U.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === U.hCu.SOUNDBOARD || e.action === U.hCu.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        })({ keybinds: e, enableClips: n, enableScreenshotKeybind: s, allowSoundboard: l }),
        keybindActionTypes: (function (e) {
            let {
                    overlaySupported: t,
                    canGoLive: i,
                    allowSoundboard: n,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                } = e,
                r = [
                    { id: "unassigned", value: U.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                    { id: "push-to-talk", value: U.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: U.hCu.PUSH_TO_TALK_PRIORITY,
                        label: j.intl.string(j.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: U.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                    { id: "vad-priority", value: U.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                    { id: "toggle-mute", value: U.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                    { id: "toggle-deafen", value: U.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: U.hCu.TOGGLE_VOICE_MODE, label: j.intl.string(j.t.Wa5H9S) },
                    { id: "toggle-streamer-mode", value: U.hCu.TOGGLE_STREAMER_MODE, label: j.intl.string(j.t.BK0Ncc) },
                    { id: "toggle-camera", value: U.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                    {
                        id: "toggle-voice-channel-chat",
                        value: U.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                        label: j.intl.string(j.t.YeqEjm),
                    },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: U.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: j.intl.string(j.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: U.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: j.intl.string(j.t.hurHWo),
                    })),
                i &&
                    ((0, eY.isWindows)() || l4.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: U.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: j.intl.string(j.t.ybdjJD),
                    }),
                (0, eY.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: U.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                        { id: "navigate-forward", value: U.hCu.NAVIGATE_FORWARD, label: j.intl.string(j.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: U.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: j.intl.string(j.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: U.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: j.intl.string(j.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: U.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: U.hCu.SOUNDBOARD_HOLD,
                                label: j.intl.string(j.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: U.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: U.hCu.SAVE_SCREENSHOT,
                                label: j.intl.string(j.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [U.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                    [U.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                    [U.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                    [U.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                    [U.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                    [U.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                    [U.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                    [U.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                    [U.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                    [U.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                    [U.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: j.intl.string(j.t.desfB4),
                };
            return (
                t && (l[U.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                i && (0, eY.isWindows)() && (l[U.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                (0, eY.isDesktop)() &&
                    ((l[U.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                    (l[U.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                    (l[U.hCu.SOUNDBOARD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t["5wJefL"])
                        : j.intl.string(j.t.gzjsSP)),
                    (l[U.hCu.SOUNDBOARD_HOLD] = (0, eY.isWindows)()
                        ? j.intl.string(j.t.RRkZc9)
                        : j.intl.string(j.t.laNlTl)),
                    n &&
                        ((l[U.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                        s && (l[U.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var rI = i(760677);
function rC(e) {
    let { children: t } = e;
    return t([l3.Q_.MESSAGE, l3.Q_.NAVIGATION, l3.Q_.DND, l3.Q_.CHAT, l3.Q_.VOICE_AND_VIDEO, l3.Q_.MISCELLANEOUS]);
}
class rb extends S.PureComponent {
    handleActionChanged = (e) => {
        tH.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tH.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tH.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tH.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eq.dI(e.shortcut);
        return si.A.hasBind(t)
            ? (0, E.jsx)(t_.p, { messageType: t_.Y.ERROR, children: j.intl.string(j.t["7lQlw3"]) })
            : iP.Yy.has(t)
              ? (0, E.jsx)(t_.p, {
                    messageType: t_.Y.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tI.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, E.jsx)(es.E, {
                    variant: "text-md/normal",
                    className: rI.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, E.jsxs)("div", {
            className: rI.YI,
            children: [
                (0, E.jsxs)("div", {
                    className: rI.PO,
                    children: [
                        (0, E.jsx)("div", {
                            className: rI.AS,
                            children: (0, E.jsx)(lQ.l, {
                                selectionMode: "single",
                                label: j.intl.string(j.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rI.AS,
                            children: (0, E.jsx)(s7.D, {
                                label: j.intl.string(j.t["1La4tC"]),
                                children: (0, E.jsx)(tK.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, E.jsx)("div", {
                                className: rI.d9,
                                children: (0, E.jsx)(lJ.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: l$.u,
                                    "aria-label": j.intl.string(j.t.qEHmmB),
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: rI.ZW,
                            children: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t.uCD7qK),
                                children: (0, E.jsx)("div", {
                                    children: (0, E.jsx)(J.d, { checked: t, onChange: this.handleEnableDisable }),
                                }),
                            }),
                        }),
                    ],
                }),
                this.renderMessage(),
                this.renderExtraSettings(),
            ],
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(rE, { keybind: this.props.keybind }) : void 0;
    }
}
class ry extends S.PureComponent {
    handleAddKeybind = () => {
        tH.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, E.jsxs)(
                S.Fragment,
                {
                    children: [
                        (0, E.jsx)(rb, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, E.jsx)(eM.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, E.jsxs)("div", {
            className: rI.$e,
            children: [
                (0, E.jsx)(l0.m, { size: "xs", color: er.A.colors.ICON_SUBTLE }),
                (0, E.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { customizableKeybinds: e, keybindActionTypes: t, keybindDescriptions: i } = this.props;
        return (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(rx, {
                    className: ik.IE,
                    children: eY.isPlatformEmbedded
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: rI.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, E.jsx)("div", {
                                              className: rI.c9,
                                              children: (0, E.jsx)(eG.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(l9, { className: rI.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [(0, E.jsx)(eM.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, E.jsx)(eM.c, {}),
                              ],
                          })
                        : (0, E.jsx)(t_.p, {
                              messageType: t_.Y.INFO,
                              className: rI.Ly,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                          }),
                }),
                (0, E.jsx)(rv, {}),
            ],
        });
    }
}
function rv(e) {
    let { showHeader: t = !0 } = e,
        i = eZ()((0, l3.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(Q.B, {
        gap: 48,
        children: [
            (0, E.jsx)(iC.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: rI.jh,
                    children: (0, E.jsxs)("div", {
                        className: rI.yZ,
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: rI.DM,
                                children: (0, E.jsx)(l1.e, { shortcut: l2.z.binds["0"], className: rI.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(rC, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, l3.Gm)(e),
                                s = (0, l3.zF)(e),
                                l = i[e];
                            return (0, E.jsx)(
                                iC.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, E.jsx)("div", {
                                        className: rI.jh,
                                        children: l.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(eM.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: rI.yZ,
                                                            children: [
                                                                (0, E.jsx)(es.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: rI.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            l1.e,
                                                                            { shortcut: e, className: rI.LE },
                                                                            e,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                e.description,
                                            ),
                                        ),
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
            }),
        ],
    });
}
let rj = (0, a.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            S.useEffect(
                () => (
                    tH.A.enableAll(!1),
                    () => {
                        tH.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = r_();
            return (0, E.jsx)(ry, { ...e });
        },
        useSearchTerms: () => [j.intl.string(j.t.T9DA2K)],
    }),
    rO = (0, a.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [rj] }),
    rR = (0, a.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => j.intl.string(j.t.T9DA2K), buildLayout: () => [rO] }),
    rL = (0, a.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.T9DA2K),
        icon: lq.F,
        buildLayout: () => [rR],
    });
var rD = i(37646),
    rP = i(434404);
let rG = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rP.F],
    }),
    rM = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rD.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rG],
    }),
    rU = (0, nM.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rV() {
    let e = await sh.Ay.getOpenOnStart(),
        t = await sh.Ay.getSetting("START_MINIMIZED", !1),
        i = await sh.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rU.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rk = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rU.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rU.setState({ openOnStartup: e }), sh.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            sh.Ay.getOpenOnStart().then((e) => rU.setState({ openOnStartup: e }));
        },
    }),
    rw = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rU.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rU.setState({ minimizeToTray: e }), sh.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            sh.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rU.setState({ minimizeToTray: e }));
        },
    });
var rF = i(314647);
function rB(e) {
    switch (e.state) {
        case "unknown":
            return j.intl.string(j.t["KW+nqT"]);
        case "disabled":
            return j.intl.string(j.t["Q/wAF7"]);
        case "disconnected":
            return j.intl.string(j.t.Xvs9IM);
        case "initializing":
            return j.intl.string(j.t.h4qz8W);
        case "connecting":
            return j.intl.string(j.t.fSu9XF);
        case "handshaking":
            return j.intl.string(j.t["00aYLJ"]);
        case "running":
            return j.intl.string(j.t["54TB7Z"]);
        case "waiting-for-retry":
            return j.intl.string(j.t["0FONwi"]);
        case "failure":
            return j.intl.string(j.t.Ic0nkd);
        default:
            (0, N.xb)(e.state);
    }
}
let rz = new Set(["failure", "unknown"]),
    rX = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = S.useState(!1),
                [i, n] = S.useState(() => (0, tC.TC)()),
                s = (0, o.ri)("SystemService"),
                l = (0, g.bG)([m.Ay], () => m.Ay.getSystemServiceStatus("input-service")),
                r = S.useCallback(async () => {
                    t(!0),
                        i ? await (0, tC.z8)("windows-settings") : await (0, tC.sL)("windows-settings"),
                        t(!1),
                        n((0, tC.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, E.jsxs)("div", {
                className: rF.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: rF.L,
                        children: [
                            (0, E.jsxs)(Q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rz.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rB(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: tI.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? j.intl.string(j.t.KHVMkW)
                                        : j.intl.format(j.t["5Rlr0b"], { status: rB(l) }),
                                }),
                        ],
                    }),
                    (0, E.jsx)(eG.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tC.XQ,
    }),
    rY = (0, a.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rk, rw, rX],
        initialize: () => {
            rV();
        },
    }),
    rH = (0, a.t_)(u.X.LINUX_PANEL, { useTitle: () => j.intl.string(j.t["7pPjTW"]), buildLayout: () => [rY] }),
    rK = (0, a.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["7pPjTW"]),
        icon: to.k,
        usePredicate: () => eY.isPlatformEmbedded && (0, eY.isLinux)(),
        buildLayout: () => [rH],
    });
var rW = i(3137),
    rZ = i(369606),
    rq = i(604121),
    rQ = i(725951),
    rJ = i(400492),
    r$ = i(669067),
    r0 = i(115063),
    r1 = i(754692),
    r2 = i(927018),
    r3 = i(512599),
    r6 = i(532197),
    r4 = i(874486),
    r5 = i(989349),
    r7 = i.n(r5),
    r8 = i(58703),
    r9 = i(906688),
    ae = i(892208);
function at(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, r2.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = r7()(i),
        m = null != o && s,
        A = m ? en.D : "div";
    return (0, E.jsxs)(A, {
        className: e6()(ae.kL, m && ae.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: ae.zc,
                children: (0, E.jsx)(r9.A, { achievementId: t, size: r9.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, E.jsxs)("div", {
                className: ae.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(es.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ae.YR,
                            children: (0, r8.mk)(g),
                        }),
                    (0, E.jsx)(es.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, E.jsx)(es.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ai = i(776351);
function an(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([r4.A], () => r4.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = S.useMemo(
            () =>
                Object.values(r2.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(en.D, {
                onClick: t,
                className: ai.vv,
                children: [
                    (0, E.jsx)(r6.A, { direction: r6.A.Directions.LEFT, className: ai.Kk }),
                    (0, E.jsx)(es.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: ai.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: ai.if,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: ai.nr,
                        children: (0, E.jsx)(rZ.O, {
                            size: "custom",
                            color: er.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, E.jsx)("div", {
                    className: ai.yF,
                    children: (0, E.jsx)("div", {
                        className: ai.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(at, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, E.jsxs)("div", {
                    className: ai.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: ai.if,
                            children: (0, E.jsx)(es.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: ai.Eh,
                            children: s.map((e) => (0, E.jsx)(at, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: ai.yF, children: (0, E.jsx)("div", { className: ai.F3 }) }),
        ],
    });
}
var as = i(224964),
    al = i(31408),
    ar = i(381579);
let aa = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ao = (0, eW.range)(0, 11),
    au = (0, eW.range)(0, 2.25, 0.25),
    ad = (0, eW.range)(1, 11),
    ac = (0, eW.range)(1, 26),
    ag = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function am(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, E.jsx)(
                J.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: n[e.location],
                    disabled: t,
                    onChange: (t) => s({ ...n, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, E.jsx)(iC.n, { label: j.intl.string(j.t.bWVN1D), children: l });
}
function aA(e) {
    let { children: t } = e;
    return (0, E.jsx)(es.E, { className: ar.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function ah(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion);
    return (0, E.jsx)(J.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, r1._)(r2.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, sA.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? aa : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function aE(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: i,
                confettiCount: n,
                confettiSize: s,
                confettiEnabledLocations: l,
            },
            updateSettings: r,
        } = e,
        a = !t || !i;
    return (0, E.jsxs)(iC.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ar.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(aA, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(ng.A, {
                        disabled: a,
                        markers: ad,
                        stickToMarkers: !0,
                        minValue: ad[0],
                        maxValue: ad[ad.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ar.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(aA, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(ng.A, {
                        disabled: a,
                        markers: ac,
                        stickToMarkers: !0,
                        minValue: ac[0],
                        maxValue: ac[ac.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(am, {
                disabled: a,
                locations: [
                    {
                        location: al.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: al.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: al.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: al.k.CALL_TILE,
                        title: j.intl.string(j.t.V66giQ),
                        description: j.intl.string(j.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function aS(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, E.jsxs)(iC.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: ar.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(aA, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(ng.A, {
                        disabled: r,
                        markers: ao,
                        stickToMarkers: !0,
                        minValue: ao[0],
                        maxValue: ao[ao.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function aT(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
        a = !t || !i || r;
    return (0, E.jsxs)(iC.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, E.jsx)(J.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ar.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(aA, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(ng.A, {
                        disabled: a,
                        markers: au,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: au[0],
                        maxValue: au[au.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, r1._)(r2.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === au[au.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(am, {
                disabled: a,
                locations: [
                    {
                        location: al.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: al.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: al.uD.MENTION,
                        title: j.intl.string(j.t.oW4shO),
                        description: j.intl.string(j.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function ax(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(iC.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(Q.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ar.hw,
                    children: (0, E.jsx)(eG.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sW.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function ap(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(en.D, {
        onClick: function () {
            return t(1);
        },
        className: ar.Tq,
        children: [
            (0, E.jsx)("div", {
                className: ar.w1,
                children: (0, E.jsx)(rZ.O, { size: "md", color: er.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: ar.qL,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, E.jsx)(es.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, E.jsx)(tL._, { size: "custom", color: "currentColor", width: 16, className: ar.nT }),
        ],
    });
}
function af() {
    return i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function aN(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([rW.A], () => rW.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, as.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === n.enabled &&
                (i(!0),
                (0, rJ.Ak)("poggermode_enabled"),
                (0, r0.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
            (0, r3.O9)(e),
            null == t)
        )
            return;
        let A =
            ((l = n.confettiEnabled), (a = e.confettiEnabled), (o = n.enabled), (u = e.enabled), (a ?? l) && (u ?? o));
        0 === t && A && r.fire(s.x, s.y, { settings: e });
        let h =
            ((d = n.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = n.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && h && (0, r0.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        S.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, E.jsxs)(Q.B, {
            gap: 24,
            children: [
                (0, E.jsx)(ah, { settings: n, updateSettings: a }),
                (0, E.jsx)(ap, { onChangePage: t }),
                (0, E.jsx)(aS, { settings: n, updateSettings: a }),
                (0, E.jsx)(aT, { settings: n, updateSettings: a }),
                (0, E.jsx)(aE, { settings: n, updateSettings: a }),
                (0, E.jsx)(ax, { updateSettings: a }),
            ],
        })
    );
}
function a_(e) {
    return 0 === e ? rQ.f.LEFT : rQ.f.RIGHT;
}
let aI = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(a_(e)),
                [s, l] = S.useState(!1),
                r = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
                a = s && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(a_(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, r$._)(ag[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, r1._)(r2.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(rQ.A, {
                            className: ar.l3,
                            step: e,
                            direction: i,
                            children: (function (e, t, i) {
                                function n(e) {
                                    return () => {
                                        t(e);
                                    };
                                }
                                switch (e) {
                                    case 0:
                                        return (0, E.jsx)(aN, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(an, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? ar.Sr : ar.IP,
                            children: (0, E.jsx)(rq.a, {
                                className: ar.gT,
                                importData: af,
                                shouldAnimate: a,
                                autoplay: !1,
                                resetOnPlay: !0,
                                loop: !1,
                                onComplete: () => l(!1),
                            }),
                        }),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            j.intl.string(j.t.AtCukI),
            j.intl.string(j.t.mqxwJO),
            j.intl.string(j.t.wVS5Sd),
            j.intl.string(j.t.Xz0ole),
            j.intl.string(j.t["Ax+IoW"]),
            j.intl.string(j.t["6jI0hd"]),
            j.intl.string(j.t.s0KCgF),
        ],
    }),
    aC = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [aI] });
var ab = i(231570);
let ay = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [aC] }),
    av = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: ab.$ }),
        usePredicate: () => (0, g.bG)([rW.A], () => rW.A.settingsVisible),
        buildLayout: () => [ay],
    });
var aj = i(307301);
let aO = (0, a.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => j.intl.string(j.t.GfBL83),
    useSubtitle: () => j.intl.string(j.t.XGyhhc),
    usePredicate: () => (0, c.uF)(),
    useValue: () => rU.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rU.setState({ startMinimized: e }), sh.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rU.useState((e) => e.openOnStartup),
    initialize: () => {
        sh.Ay.getSetting("START_MINIMIZED", !1).then((e) => rU.setState({ startMinimized: e }));
    },
});
var aR = i(489718),
    aL = i(492064);
function aD(e) {
    let { keybind: t } = e,
        i = eq.dI(t.shortcut);
    return si.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: aL.$e,
              children: (0, E.jsx)(q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iP.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: aL.$e,
                children: (0, E.jsx)(q.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: tI.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function aP(e) {
    let { keybind: t } = e;
    return t.action === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(rE, { keybind: t, className: aL._M }) : null;
}
let aG = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = S.useCallback((e) => tH.A.setKeybind({ ...t, action: e }), [t]),
        l = S.useCallback((e) => tH.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tH.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tH.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: aL.f_,
        children: [
            (0, E.jsx)(aD, { keybind: t }),
            (0, E.jsx)("div", {
                className: aL.XI,
                children: (0, E.jsx)(lQ.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: aL.LE,
                children: (0, E.jsx)(s7.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tK.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: aL.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(lJ.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: l$.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, E.jsx)(tr.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(eo.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, E.jsx)(aR.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(es.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aL.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(aP, { keybind: t }),
        ],
    });
});
var aM = i(487866);
let aU = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = r_();
        return 0 === e.length
            ? (0, E.jsx)(es.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: aM.A,
                  children: e.map((n, s) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(aG, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, E.jsx)(eM.c, { className: aM.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    aV = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(aU, {})
                : (0, E.jsx)(q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                  });
        },
    }),
    ak = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
        Component: () => (0, E.jsx)(rv, { showHeader: !1 }),
    });
function aw() {
    su.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aF = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, g.bG)([id.default], () => id.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            aw();
        },
    }),
    aB = (0, a.zZ)(u.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [aF],
    }),
    az = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [rk, aO, rw, sS],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            rV();
        },
    }),
    aX = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [aV],
        initialize: () => (tH.A.enableAll(!1), () => tH.A.enableAll(!0)),
        useInlineNotice: function () {
            return c.Av
                ? {
                      type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, E.jsxs)(Q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, E.jsx)(q.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, E.jsx)(l9, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            c.Av
                ? {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t.zk6Xbs),
                              variant: "secondary",
                              icon: aj.j,
                              onClick: () => tH.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    aY = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [ak],
    }),
    aH = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [rX],
    }),
    aK = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [az, aX, aY, aH, aB],
    }),
    aW = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: lq.F,
        buildLayout: () => [aK],
    });
var aZ = i(831544),
    aq = i(922795),
    aQ = i(212245),
    aJ = i(329551),
    a$ = i(285918),
    a0 = i(413339),
    a1 = i(952572),
    a2 = i(382003);
let a3 = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: a1.A,
        Component: function () {
            let e = (0, aQ.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([l4.Ay], () => l4.Ay.getVideoDeviceId()),
                [n, s] = S.useState((0, aJ.i)(id.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, a$._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(a2.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (l.current = i), s(i), (0, a0.gB)(i, { location: e.location }).catch(U.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    a6 = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), G.default.track(U.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var a4 = i(625841),
    a5 = i(74848),
    a7 = i(204050);
let a8 = (0, nM.D)(() => ({ previewEnabled: !1 }));
var a9 = i(731854);
let oe = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([l4.Ay], () => l4.Ay.isVideoAvailable()),
            { id: t } = (0, a5.x5)(a9.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nQ.Ay)();
        return (0, E.jsx)(a4.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: a9.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, a7.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          a8.setState({ previewEnabled: !1 }),
                              window.open((0, a7.i)(t)),
                              G.default.track(U.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var ot = i(745317),
    oi = i(514956);
let on = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = l4.Ay.getCameraComponent(),
                t = (0, g.bG)([l4.Ay], () => l4.Ay.getVideoDeviceId()),
                i = a8.useField("previewEnabled"),
                n = (0, g.bG)([l4.Ay], () => l4.Ay.isVideoAvailable());
            return ((0, tg.l0)(() => {
                a8.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: oi.T9,
                      children: (0, E.jsxs)("div", {
                          className: oi.Xi,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: oi.UI,
                                  children: [
                                      (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                                      (0, E.jsx)(ot.kE, {}),
                                  ],
                              }),
                              (0, E.jsx)(ot.eK, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: oi.T9,
                      children: (0, E.jsx)(tr.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(eG.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => a8.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    os = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.VIDEO)),
        buildLayout: () => [on, a6, oe, a3],
    });
var ol = i(827343);
let or = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            ol.A.setOpenH264Enabled(e),
                (0, sA.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => lI.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    oa = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getAecDump());
        },
        setValue: ol.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.isAecDumpSupported());
        },
    });
var oo = i(139033),
    ou = i(862482),
    od = i(640238),
    oc = i(825484),
    og = i(77138),
    om = i(487329),
    oA = i(353835);
let oh = (0, nM.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function oE() {
    let e = await lI.A.fileManager.getLogPath();
    lI.A.fileManager.showItemInFolder(e);
}
function oS(e) {
    (0, sA.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => ol.A.setDebugLogging(e),
    });
}
async function oT(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await l4.Ay.getMediaEngine().writeAudioDebugState(),
            await oA.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, og.a)(U.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, oo.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, om.B1)(om.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, K.openModal)((i) =>
                (0, E.jsx)(od.a, {
                    header: e,
                    confirmButtonColor: ou.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, E.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: t }),
                            (0, E.jsx)(es.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        i?.();
    }
}
async function ox() {
    await oT({
        onUploadStart: () => oh.setState({ isUploading: !0 }),
        onUploadFinish: () => oh.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let op = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.DEBUG_LOGGING));
        return c.Av && e && null != lI.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([l4.Ay], () => l4.Ay.getDebugLogging()),
            t = oh.useField("isUploading"),
            i = oh.useField("isDisabled"),
            n = S.useId();
        return (0, E.jsxs)("fieldset", {
            children: [
                (0, E.jsx)(eo.A, { tag: "legend", id: n, children: j.intl.string(j.t["FjN+et"]) }),
                (0, E.jsxs)(Q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: oS,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(oc.e, {
                                children: [
                                    (0, E.jsx)(eG.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: ox,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(eG.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: oE,
                                        "aria-label": j.intl.string(j.t["L/hFOe"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
});
var of = i(233545),
    oN = i(412780);
function o_() {
    return (0, g.bG)([id.default, l4.Ay], () => {
        let e = id.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === sh.Ay.releaseChannel || "development" === sh.Ay.releaseChannel,
            n = l4.Ay.supports(a9.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let oI = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([oN.Ay], () => oN.Ay.shouldRecordNextConnection());
        },
        setValue: of.Et,
        usePredicate: o_,
    }),
    oC = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: of.YW,
        usePredicate: o_,
    });
var ob = i(926919),
    oy = i(111162),
    ov = i(855302);
let oj = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([oy.default], () => oy.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = oy.default.isStreamInfoOverlayEnabled;
            (0, ov.A)("stream_info_overlay_enabled", e, t), (0, ob.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    oO = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [oj, oa, oI, oC, op],
    });
function oR(e, t, i) {
    (0, sA.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let oL = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            oR(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), ol.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    oD = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [or, oO, oL],
    });
var oP = i(347481),
    oG = i(852712);
let oM = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            ol.A.setAutomaticGainControl(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([l4.Ay, oP.A], () => {
                let e = l4.Ay.getInputDeviceId();
                return oP.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.isAutomaticGainControlSupported() && l4.Ay.isInputProfileCustom());
        },
    }),
    oU = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            ol.A.setAttenuation(e, l4.Ay.getAttenuateWhileSpeakingSelf(), l4.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => l4.Ay.getAttenuation(),
    }),
    oV = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([l4.Ay], () => l4.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => ol.A.setAttenuation(l4.Ay.getAttenuation(), e, l4.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    ok = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([l4.Ay], () => l4.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => ol.A.setAttenuation(l4.Ay.getAttenuation(), l4.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    ow = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.ATTENUATION)),
        buildLayout: () => [oU, oV, ok],
    });
var oF = i(801644);
let oB = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nR.Ay], () => !nR.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, ov.A)("hardware_mute_silence_alert_enabled", e, !nR.Ay.disableHardwareMuteSilenceAlert),
                lm.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oF.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oz = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            ol.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.showBypassSystemInputProcessing() && l4.Ay.isInputProfileCustom());
        },
    }),
    oX = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nR.Ay], () => !nR.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, ov.A)("switch_channel_warning_enabled", e, !nR.Ay.disableVoiceChannelChangeAlert),
                lm.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oY = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => {
                let { vadUseKrisp: e } = l4.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = l4.Ay.getMode();
            ol.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)(
                [l4.Ay],
                () => l4.Ay.getMode() !== U.TBI.VOICE_ACTIVITY || !l4.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.isAdvancedVoiceActivitySupported() && l4.Ay.isInputProfileCustom());
        },
    }),
    oH = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            oR(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => ol.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([l4.Ay], () => ({
                legacyAudioSubsystemSupported: l4.Ay.supports(a9.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: l4.Ay.supports(a9.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: l4.Ay.supports(a9.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: a9.rB.STANDARD, value: a9.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: a9.rB.LEGACY, value: a9.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: a9.rB.EXPERIMENTAL, value: a9.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: a9.rB.AUTOMATIC, value: a9.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oK = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getQoS());
        },
        setValue: function (e) {
            ol.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.QOS));
        },
    }),
    oW = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            ol.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eY.isPlatformEmbedded;
        },
    }),
    oZ = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            sy(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([l4.Ay], () => l4.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oM, oY, oz, oW, oB, oX, ow, oH, oK],
    }),
    oq = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            ol.A.setEchoCancellation(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([l4.Ay, oP.A], () => {
                let e = l4.Ay.getInputDeviceId();
                return oP.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.isInputProfileCustom());
        },
    });
var oQ = i(459838),
    oJ = i(451988),
    o$ = i(934246),
    o0 = i(300839);
let o1 = (0, sQ.Ld)();
function o2(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e6()(o$.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e6()(o$.Jx, o$.NU, { [o$.zY]: t && !r, [o$.r9]: r }) }),
    });
}
function o3(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([l4.Ay], () => ({
            threshold: l4.Ay.getModeOptions().threshold,
            autoThreshold: l4.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([l4.Ay], () => l4.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e6()(o$.Mo, o$.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, E.jsx)(ng.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void ol.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: er.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: er.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": o1,
            disabled: l,
            children: (0, E.jsxs)("div", {
                className: e6()(o$.NU, o$.TL, o$.Jx, o0.bar),
                children: [
                    (0, E.jsx)("div", { className: e6()(o$.GS, o$.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let o6 = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([l4.Ay], () => l4.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([l4.Ay], () => ({
                autoThreshold: l4.Ay.getModeOptions().autoThreshold,
                disabled: l4.Ay.getMode() !== a9.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = l4.Ay.getMode(),
                    { threshold: i } = l4.Ay.getModeOptions();
                ol.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function s(e, i) {
                    t(e), n((i & a9.ME.VOICE) === a9.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oJ.Ep();
                        return (
                            e.start(1e3, () => {
                                l4.Ay.getMediaEngine().on(oQ.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                l4.Ay.getMediaEngine().removeListener(oQ.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([l4.Ay], () => l4.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: o$.B4,
                        children: (0, E.jsx)(q.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => ol.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = S.useMemo(() => (e ? j.intl.string(j.t.JsbzjA) : j.intl.string(j.t.MLmyMY)), [e]),
            u = S.useId(),
            d = S.useId();
        return n
            ? (0, E.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, E.jsx)(eo.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, E.jsx)(eo.A, { id: d, children: o }),
                      (0, E.jsxs)(Q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, E.jsx)(J.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, E.jsx)(o2, {
                                        isSpeaking: l,
                                        className: o$.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(o3, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(Q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(s7.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(o2, {
                                        isSpeaking: l,
                                        className: o$.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(o3, {
                                        volume: s,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    }),
                      }),
                      a,
                  ],
              });
    },
});
var o4 = i(366010);
let o5 = i(993830),
    o7 = i(413142),
    o8 = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO };
function o9() {
    let e = (0, g.bG)([iy.A], () => (0, o4.q)(iy.A.theme));
    return (0, E.jsx)("img", { src: e ? o5 : o7, width: 48, height: 32, alt: "" });
}
let ue = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([l4.Ay], () => l4.Ay.isInputProfileCustom() && l4.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                ol.A.setNoiseCancellation("KRISP" === e, o8), ol.A.setNoiseSuppression("STANDARD" === e, o8);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, g.cf)([l4.Ay], () => ({
                noiseCancellation: l4.Ay.getNoiseCancellation(),
                noiseSuppression: l4.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: l4.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: l4.Ay.isNoiseCancellationSupported(),
            })),
            l = S.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: j.intl.string(j.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: j.intl.string(j.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: j.intl.string(j.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, n]),
            r = s
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: tI.A.getArticleURL(U.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(Q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(lQ.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, E.jsx)(o9, {}),
            ],
        });
    },
});
var ut = i(934729),
    ui = i(621380);
let un = !c.Av;
function us() {
    return (0, g.bG)([l4.Ay], () => l4.Ay.getMode() === a9.TB.PUSH_TO_TALK);
}
let ul = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([l4.Ay], () => l4.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === a9.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, ut._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([l4.Ay], () => l4.Ay.getActiveInputProfile() !== ui.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([l4.Ay], () => l4.Ay.getMode() === a9.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? a9.TB.PUSH_TO_TALK : a9.TB.VOICE_ACTIVITY),
            (n = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === a9.TB.PUSH_TO_TALK &&
                un &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("74558"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, ut._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            ol.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var ur = i(297932);
let ua = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: us,
        Component: function () {
            let e = (0, g.bG)([l4.Ay], () => {
                    let { shortcut: e } = l4.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, { onClick: () => (0, eH.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: ur.e,
                    children: (0, E.jsx)(tK.A, {
                        defaultValue: e,
                        onChange: (e) => ol.A.setMode(U.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    uo = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            ol.A.setMode(U.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: U.IjB,
        getInitialValue: function () {
            let { delay: e } = l4.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: us,
    }),
    uu = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oG._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getActiveInputProfile() ?? ui.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ol.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oG.d)({ location: "InputProfileCategory" });
            return [
                { value: ui.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: ui.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: ui.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    ud = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([oP.A, l4.Ay], () => {
                let e = l4.Ay.getInputDeviceId();
                return (
                    (oP.A.hasEchoCancellation(e) || oP.A.hasNoiseSuppression(e) || oP.A.hasAutomaticGainControl(e)) &&
                    l4.Ay.isInputProfileCustom()
                );
            });
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => j.intl.string(j.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [uu, o6, ue, oq, ul, ua, uo, oZ],
    });
var uc = i(403581),
    ug = i(983851),
    um = i(687021),
    uA = i(128450),
    uh = i(796774),
    uE = i(209932),
    uS = i(813564),
    uT = i(984813),
    ux = i(22231),
    up = i(428262),
    uf = i(792348),
    uN = i(674168),
    u_ = i(333216),
    uI = i(805945),
    uC = i(199300);
function ub(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        s = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        l = up.Ay.canUseCustomCallSounds(s),
        r = S.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, E.jsx)(ee.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(iY.l, {
                children: (0, E.jsx)(u_.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, E.jsx)(uN.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(uI.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(ux.R, { size: "md", color: "currentColor", className: uC.Wo }),
            }),
    });
}
function uy(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, uf.A)(t, null),
        n =
            0 === (0, uS.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(uI.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(ug.H, { size: "md", color: "currentColor", className: uC.wg }),
    });
}
function uv(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, E.jsxs)("div", {
        className: uC.D6,
        children: [
            (0, E.jsxs)("div", {
                className: uC.kL,
                children: [
                    a && (0, E.jsx)(sw.A, { emojiId: l, emojiName: r, className: uC.Zg }),
                    (0, E.jsx)(es.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: uC.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, E.jsx)(es.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            });
                                        },
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, E.jsx)(uy, { sound: t })
                        : (0, E.jsx)(ug.H, { size: "md", color: "currentColor", className: uC.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: uC.kL,
                children: [
                    (0, E.jsx)(ub, { onSelect: n }),
                    s &&
                        !i &&
                        (0, E.jsx)(uI.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(l$.u, {
                                size: "md",
                                color: er.A.unsafe_rawColors.RED_400.css,
                                className: uC.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uj = i(617617);
i(980504);
var uO = i(907895);
function uR(e) {
    return (0, g.bG)([uE.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return uE.A.getSound("0" === t ? "0" : t, i);
    });
}
function uL(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uj.A], () => uj.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uR(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, E.jsxs)("div", {
        className: uO.Io,
        children: [
            r
                ? (0, E.jsx)(sw.A, { emojiId: s, emojiName: l, className: uO.nW })
                : (0, E.jsx)(ug.H, { size: "md", color: "currentColor", className: uO.nW }),
            (0, E.jsx)(es.E, { className: uO.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let uD = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nQ.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, uT.mz)(t),
            s = uR(n),
            l = n?.type === uT.PP.GLOBAL,
            r = (0, g.bG)([uE.A], () => uE.A.hasFetchedAllSounds()) && null != n && null == s;
        S.useEffect(() => {
            r && (0, uS.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, uh.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(uL, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(iC.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: tI.A.getArticleURL(U.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(um.A, {
                    guildId: t,
                    className: uO.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(uA.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(uc.t, { size: "md", color: "currentColor", className: uO.ax }),
                    }),
                    children: [
                        (0, E.jsx)(uv, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, uS.Dv)(t, e) : (0, uS.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(t_.p, {
                                className: uO.lm,
                                messageType: t_.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uP = i(824744);
let uG = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: tI.A.getArticleURL(U.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uP.w)(e);
        (0, uh.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, uS.wH)();
        return (0, uP.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uM = i(864145);
let uU = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, uP.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, uP.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uM.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uV = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uG, uU, uD],
    });
var uk = i(803224),
    uw = i(552122);
let uF = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != uw.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(es.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eH.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uB = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uz = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uB] });
var uX = i(264686);
let uY = (0, nM.D)(() => ({ currentPlayingSound: null }));
function uH() {
    let e = uY.getField("currentPlayingSound");
    e?.stop(), uY.setState({ currentPlayingSound: null });
}
function uK(e) {
    let t = uY.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rJ.Ak)(e);
    uY.setState({ currentPlayingSound: i });
}
function uW(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uK(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uk.A], () => uk.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uk.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uX.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uk.A], () => uk.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uZ = [
        { useTitle: () => j.intl.string(j.t.hK51Yg), sound: "deafen" },
        { useTitle: () => j.intl.string(j.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => j.intl.string(j.t.w4m945), sound: "mute" },
        { useTitle: () => j.intl.string(j.t.YqAjXy), sound: "unmute" },
        { useTitle: () => j.intl.string(j.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => j.intl.string(j.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => j.intl.string(j.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => j.intl.string(j.t.x98vQq),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => j.intl.string(j.t["1HjRqC"]),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => j.intl.string(j.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => j.intl.string(j.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => j.intl.string(j.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => j.intl.string(j.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => j.intl.string(j.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => j.intl.string(j.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => j.intl.string(j.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => j.intl.string(j.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => j.intl.string(j.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => j.intl.string(j.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => j.intl.string(j.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => j.intl.string(j.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => j.intl.string(j.t.CP3DC3), sound: "reconnect" },
    ],
    uq = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => sy(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uH();
            };
        },
        buildLayout: () => uZ.map((e) => uW(e)),
    }),
    uQ = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uk.A], () => uk.A.getDisableAllSounds());
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            j.intl.format(j.t.fRvixS, {
                                onClick: () => (0, eH.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uq, uF, uz],
    }),
    uJ = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, ov.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e1.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    u$ = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getVideoHook());
        },
        setValue: ol.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.supportsVideoHook());
        },
    }),
    u0 = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getExperimentalSoundshare());
        },
        setValue: ol.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => {
                let e = l4.Ay.supportsExperimentalSoundshare(),
                    t = l4.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    u1 = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ol.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return l4.Ay.supports(a9.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    u2 = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ol.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: l4.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([l4.Ay], () => l4.Ay.getSidechainCompression());
            return l4.Ay.supports(a9.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    u3 = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, sA.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          ol.A.setUseSystemScreensharePicker(e), lI.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : ol.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([l4.Ay], () => l4.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    u6 = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => sy(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [u1, u2, u3, u0, u$],
    }),
    u4 = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uJ, u6] });
var u5 = i(106713);
let u7 = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u5.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, E.jsx)(a4.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: a9.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u8 = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = u5.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, E.jsx)(a4.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: a9.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    u9 = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [u7, u8] }),
    de = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = l4.Ay.getInputVolume();
            return (0, uP.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uP.w)(e);
            ol.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    dt = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = l4.Ay.getOutputVolume();
            return (0, uP.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e1.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uP.w)(e);
            ol.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    di = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [de, dt] });
var dn = i(702841),
    ds = i(349288),
    dl = i(152567),
    dr = i(141218);
let da = `${tI.A.getArticleURL(U.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    du = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, dn.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.LOOPBACK));
        },
        Component: function () {
            return (0, dn.bG)([l4.Ay], () => l4.Ay.supports(a9.O5.LOOPBACK))
                ? (0, E.jsx)(dl.A, {
                      size: "md",
                      notchBackground: dl.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(es.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(ds.Anchor, {
                                  className: dr.X,
                                  href: tI.A.getArticleURL(U.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: da }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    dd = eY.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function dc(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(Q.B, {
        children: [
            i && (0, E.jsx)(l9, { sourcePage: "voice" }),
            t && (0, E.jsx)(sE.A, { look: sE.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let dg = (0, a.zZ)(u.X.VOICE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.K3lovD),
        useSearchTerms: () => [
            j.intl.string(j.t.hHMYbb),
            j.intl.string(j.t.nuFtHH),
            j.intl.string(j.t.dl18zb),
            j.intl.string(j.t["3182VD"]),
            j.intl.string(j.t["DGq/PR"]),
            j.intl.string(j.t.eATD2B),
            j.intl.string(j.t.Rtsr6w),
            j.intl.string(j.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = l8("voice"),
                t = (0, a5.x5)(a9.oh.AUDIO_INPUT),
                i = (0, a5.x5)(a9.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = dd.some((e) => t?.hardwareId?.startsWith(e)),
                        n = dd.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return S.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, E.jsx)(dc, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [u9, di, du],
    }),
    dm = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [dg, ud, os, u4, uQ, uV, oD],
    }),
    dA = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => l4.Ay.isSupported(),
        icon: aZ.c,
        useMenu: aq.A,
        buildLayout: () => [dm],
    }),
    dh = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rk, aO, rw, rX],
        initialize: () => {
            rV();
        },
    }),
    dE = (0, a.t_)(u.X.WINDOWS_PANEL, { useTitle: () => j.intl.string(j.t.ZkDZov), buildLayout: () => [dh] }),
    dS = (0, a.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.ZkDZov),
        icon: to.k,
        usePredicate: () => eY.isPlatformEmbedded && (0, eY.isWindows)(),
        buildLayout: () => [dE],
    }),
    dT = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: function () {
            let e = (0, o.SB)("AppSection_buildLayout");
            return [dA, lZ, sr, av, e ? aW : rL, rM, e ? null : dS, e ? null : rK].filter(N.Vq);
        },
    });
var dx = i(360669),
    dp = i(974544),
    df = i(423764),
    dN = i(289873),
    d_ = i(132500),
    dI = i(465323),
    dC = i(37766),
    db = i(194261),
    dy = i(391048),
    dv = i(277984),
    dj = i(99696),
    dO = i(202613),
    dR = i(615405),
    dL = i(580630),
    dD = i(83617),
    dP = i(935208),
    dG = i(607399),
    dM = i(150934),
    dU = i(256006),
    dV = i(198970),
    dk = i(71532);
let dw = /[^0-9/]/g,
    dF = /[^0-9]/g;
class dB extends S.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        (this._inputRef = e), null != t && t(e);
    };
    handleChange = (e, t) => {
        let i,
            n,
            s,
            l,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((n = (i = e.replace(dw, "").split("/"))[0]),
                (s = i[1]),
                (l = []),
                parseInt(n, 10) > 12 && (n = n.substring(0, 1)),
                l.push(n),
                (parseInt(n, 10) > 1 || 2 === n.length || (null != s && "" !== s)) && l.push("/"),
                null != s && "" !== s && parseInt(s, 10) > 99 && (s = (s + "").substring(0, 2)),
                l.push(s),
                l.join("")),
            d = o.selectionStart;
        u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(dF, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(rt.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dz = i(832208),
    dX = i(729919);
let dY = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sQ.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dX.ep,
                        renderInput: (e) => (0, E.jsx)(dB, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dH = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dz.A, {
                className: i,
                form: dY,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dk.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dK = i(219887),
    dW = i(520229);
let dZ = "isDefault";
class dq extends S.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: i } = e,
            n = t.billingAddress;
        this.state = {
            billingAddress: {
                name: n.name ?? "",
                line1: n.line1 ?? "",
                line2: n.line2 ?? "",
                country: n.country ?? "",
                state: n.state ?? "",
                city: n.city ?? "",
                postalCode: n.postalCode ?? "",
            },
            expiresMonth: t instanceof dO.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dO.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        su.h.wait(() => {
            (0, dv.ey)(), (0, dv.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(N.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: i, expiresYear: n } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: i,
                expiresYear: n,
                isDefault: t,
            });
        }
    };
    handleCancel = () => {
        this.props.onCancel();
    };
    handleDelete = () => {
        let { onDelete: e, paymentSource: t } = this.props;
        e(t.id);
    };
    handleAddressUpdate = (e, t, i) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: i },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: i } = e;
        if ((this.setState({ expirationValid: t }), null == i || "" === i)) return;
        let [n, s] = i.split("/");
        this.handleFieldChange(Number(n), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${s}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, E.jsx)("div", {
                      className: dW.zc,
                      children: (0, E.jsx)(q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dW.zc,
                  children: (0, E.jsx)(q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dU.g)(i);
        return (0, E.jsxs)("div", {
            className: dW.yV,
            children: [
                (0, E.jsx)(es.E, {
                    className: dW.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dV.Ay, {
                    ...e,
                    mode: dV.Ay.Modes.EDIT,
                    layout: n,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let i = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, E.jsxs)("div", {
            className: dW.yV,
            children: [
                (0, E.jsx)(es.E, { className: dW.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dH, {
                    expirationDate: i,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: i } = this.props,
            { billingAddressValid: n, expirationValid: s } = this.state;
        return (0, E.jsx)("div", {
            className: dW.AU,
            children: (0, E.jsxs)(Q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(oc.e, {
                        children: (0, E.jsxs)("div", {
                            className: dW.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(tr.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dW.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(eG.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dG.Fr ? "sm" : "md",
                                    text: dG.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(oc.e, {
                        children: [
                            (0, E.jsx)(eG.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dG.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eG.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dG.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: i, className: n, isForSubscription: s } = this.props,
            { isDefault: l } = this.state,
            r = e instanceof dO.SJ;
        return (0, E.jsx)(eb.Z, {
            editable: !0,
            className: e6()(dW.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dW.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dK.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dW.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dW.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dW.D5,
                        children: (0, E.jsx)(dM.S, {
                            value: dZ,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dZ),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, E.jsx)(eM.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dQ = g.Ay.connectStores([dR.A], () => ({ updateError: dR.A.editSourceError, removeError: dR.A.removeSourceError }))(
    dq,
);
var dJ = i(776409),
    d$ = i(743526),
    d0 = i(455218);
function d1() {
    (0, dj.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, d_.A)() });
}
class d2 extends S.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: i,
            hideDivider: n,
            isForSubscription: s,
            locale: l,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return i
            ? (0, E.jsx)(dQ, {
                  paymentSource: e,
                  isDefault: t,
                  removing: r,
                  submitting: a,
                  locale: l,
                  isForSubscription: s,
                  onSubmit: o,
                  onCancel: u,
                  onDelete: d,
              })
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      n ? null : (0, E.jsx)(eM.c, { className: d0.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: d0.Yb,
                          children: [
                              (0, E.jsx)(dK.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: j.intl.string(j.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let d3 = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([id.default], () => id.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dR.A], () => dR.A.ipCountryCode),
        d = S.useMemo(() => (0, dI.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dv.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(eM.c, { className: d0.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: d0.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dK.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(rl.A, {
                                  align: rl.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(dC._, { size: "lg" }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/medium",
                                          className: d$.Wi,
                                          children: j.intl.string(dJ.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: d0.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: d0.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(dN.y, { type: dN.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dL.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, E.jsx)(eG.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: j.intl.string(dJ.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class d6 extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dv.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dv.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dv.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dD.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dy.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: d0.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: d0.z8,
                          children: [
                              (0, E.jsx)(es.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: d0.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, E.jsx)(eG.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: i,
                paymentSources: n,
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = eZ()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dP.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dO.LQ)),
            c = u.filter((e) => e instanceof dO.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    d2,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: l,
                        isEditing: g === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                c.length > 0
                    ? c.map((e, t) =>
                          (0, E.jsx)(
                              d3,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: d1,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(d3, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: d1,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(db.X, { size: "sm", className: d0.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, E.jsx)(eM.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var d4 = i(459357),
    d5 = i(295405),
    d7 = i(166403),
    d8 = i(773669),
    d9 = i(844828);
function ce() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, df.Gw)(e.country) };
}
let ct = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dR.A], () => dR.A.isSyncing),
                n = (0, g.bG)([d5.A], () => d5.A.paymentSources),
                s = (0, g.bG)([d5.A], () => d5.A.defaultPaymentSourceId),
                l = (0, g.bG)([d8.default], () => d8.default.locale),
                r = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dR.A], () => dR.A.isRemovingPaymentSource),
                o = (0, g.bG)([dR.A], () => dR.A.isUpdatingPaymentSource),
                { enabled: u } = (0, d4.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dv.$o(), dv.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: d9.o, children: (0, E.jsx)(dN.y, {}) })
                : (0, E.jsx)(d6, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== U.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    ci = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = ce();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ce()
                ? null
                : {
                      type: h.p3.INFO_POPOVER,
                      ariaLabel: j.intl.string(j.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: j.intl.string(j.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: j.intl.string(j.t.PuB1W7),
                                  variant: "primary",
                                  onClick: () => {
                                      window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e();
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [ct],
    });
var cn = i(549363),
    cs = i(682174);
let cl = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([d8.default], () => d8.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(cs.kb, {}), (0, E.jsx)(cn.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    cr = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [cl],
    }),
    ca = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [ci, cr],
        useObscuredNotice: dp.L,
    }),
    co = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: dx.B,
        buildLayout: () => [ca],
    });
var cu = i(70283),
    cd = i(597770),
    cc = i(682618),
    cg = i(611881),
    cm = i(962644),
    cA = i(35587),
    ch = i(86379);
let cE = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: cs.uK,
        usePredicate: () => (0, ch.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    cS = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [cE] });
var cT = i(532446),
    cx = i(869038),
    cp = i(499454),
    cf = i(45938);
class cN extends S.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: U.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let i = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    await (0, dj.Qp)(i),
                        (0, dj.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, d_.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cf.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cx.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            G.default.track(U.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: U.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: U.ZSU.BUTTON_CTA,
                },
            }),
                (0, cp.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: i, submitting: n, hasError: s, isPromoCode: l } = this.state,
            r = e ? j.intl.string(j.t["hVEn/j"]) : j.intl.string(j.t.SeKIoS),
            a = e ? j.intl.string(j.t.epHMtp) : void 0;
        return (0, E.jsx)(iC.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, E.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, E.jsxs)(cT.M, {
                    children: [
                        (0, E.jsx)(rt.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: i,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? j.intl.string(j.t.Y11a2u) : null,
                            helperText: l
                                ? j.intl.format(j.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${i}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, E.jsx)(eG.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.KIpp7M),
                            type: "submit",
                            loading: n,
                            disabled: e && 0 === i.length,
                        }),
                    ],
                }),
            }),
        });
    }
}
function c_(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, d4.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        s = (0, g.bG)([eF.A], () => eF.A.enabled);
    return (0, E.jsx)(cN, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let cI = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: c_,
    usePredicate: () => !(0, ch.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var cC = i(725570),
    cb = i(707554),
    cy = i(736653),
    cv = i(982240),
    cj = i(46054);
let cO = r7().duration(30, "days");
var cR = i(3074),
    cL = i(264779),
    cD = i(416052),
    cP = i(53070);
function cG(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(re.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: cP.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: cP.t4,
            children: [
                (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(es.E, { variant: "text-md/normal", className: cP.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let cM = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sQ.GV)(),
        { analyticsLocations: u } = (0, nQ.Ay)(e1.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cL.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(cG, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(dN.y, { className: cP.Lq })
          : (0, E.jsx)(re.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: cP.N1,
                    children: [
                        (0, E.jsx)("div", { className: cP.Qw }),
                        (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(es.E, {
                            variant: "text-md/normal",
                            className: cP.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: j.intl.string(j.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: j.intl.string(j.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, cL.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(eM.c, { className: cP.M5 }),
                        (0, E.jsx)(s7.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(cD.A, {
                                value: n,
                                buttonColor: ou.$n.Colors.BRAND,
                                buttonLook: ou.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cU = i(788833),
    cV = i(914410),
    ck = i(360615),
    cw = i(215082);
function cF(e) {
    let { tier: t, active: i = !1 } = e;
    return (0, E.jsxs)("div", {
        className: e6()(cw.fO, { [cw.bF]: i }),
        children: [
            null != t.simple_icon_url && (0, E.jsx)("img", { src: t.simple_icon_url, alt: "", className: cw.si }),
            (0, E.jsxs)("div", {
                className: cw.tc,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, E.jsx)(es.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(ck.default.qvx9E4, { count: (0, cv.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function cB(e) {
    let { tiers: t, currentTier: i } = e;
    return (0, E.jsx)("div", {
        className: cw.dw,
        children: t.map((e) => (0, E.jsx)(cF, { tier: e, active: e.key === i?.key }, e.key)),
    });
}
function cz(e) {
    let { analyticsLocation: t, location: i } = e,
        { analyticsLocations: n } = (0, nQ.Ay)(e1.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, cU.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: i,
        });
    return (0, E.jsx)("div", {
        className: cw.NG,
        children: (0, E.jsx)(eG.$, {
            variant: "primary",
            icon: cd.o,
            text: j.intl.string(ck.default.DZnomS),
            onClick: s,
        }),
    });
}
function cX(e) {
    let t,
        { badgeProgress: i, currentTier: n, nextTier: s, giftsRemaining: l } = e,
        r = (0, cv.rL)(n),
        a = (0, cv.rL)(s),
        o = (0, cg.GZ)(i, n, s);
    return (
        (t =
            null != s
                ? j.intl.formatToPlainString(ck.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : j.intl.formatToPlainString(ck.default.LnsdbK, { currentTier: n?.name ?? "" })),
        (0, E.jsxs)("div", {
            className: cw.mY,
            children: [
                n?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: cw.fC,
                        children: (0, E.jsx)("img", { src: n.simple_icon_url, alt: "", className: cw.qS }),
                    }),
                (0, E.jsxs)("div", {
                    className: cw.Qs,
                    children: [
                        (0, E.jsx)(es.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, E.jsx)(cV.Ay, { variant: cV.qP.BLUE, weight: cV.fh.MEDIUM, progress: o }),
                        (0, E.jsx)(es.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: cw.qg,
                            children: j.intl.format(ck.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? i : r,
                            }),
                        }),
                    ],
                }),
                s?.simple_icon_url != null &&
                    (0, E.jsx)("div", {
                        className: cw.fC,
                        children: (0, E.jsx)("img", { src: s.simple_icon_url, alt: "", className: cw.qS }),
                    }),
            ],
        })
    );
}
function cY(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: i,
            currentTier: n,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, g.cf)([cv.Ay], () => ({
            badgeProgress: cv.Ay.getSingleRequirementProgress(cu.$.GIFTING)?.current ?? 0,
            currentTier: cv.Ay.getCurrentTier(cu.$.GIFTING),
            nextTier: cv.Ay.getNextTier(cu.$.GIFTING),
            giftsRemaining: cv.Ay.getRemainingToNextTier(cu.$.GIFTING),
            tiers: cv.Ay.getBadgeById(cu.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, E.jsxs)("div", {
              className: cw.kL,
              children: [
                  (0, E.jsxs)("div", {
                      className: cw.Jo,
                      children: [
                          i > 0 &&
                              (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(cX, {
                                          badgeProgress: i,
                                          currentTier: n,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, E.jsx)("div", { className: cw.yF }),
                                  ],
                              }),
                          (0, E.jsx)(cB, { tiers: r, currentTier: n }),
                          (0, E.jsx)(es.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: cw.PJ,
                              children: j.intl.string(ck.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, E.jsx)(cz, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
var cH = i(725807),
    cK = i(212168),
    cW = i(469778),
    cZ = i(109802),
    cq = i(221347);
function cQ(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, E.jsxs)(rl.A, {
        className: e6()(cq.wx, i),
        align: rl.A.Align.CENTER,
        children: [
            (0, E.jsx)("div", { className: cq.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function cJ(e) {
    let { children: t, className: i } = e;
    return (0, E.jsx)("div", { className: e6()(cq.rf, i), children: t });
}
class c$ extends S.PureComponent {
    static Header = cQ;
    static Body = cJ;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e6()(cq.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var c0 = i(75825),
    c1 = i(871123),
    c2 = i(366523),
    c3 = i(280450),
    c6 = i(30793),
    c4 = i(97352),
    c5 = i(67480),
    c7 = i(147925),
    c8 = i(957565),
    c9 = i(615396),
    ge = i(990125);
class gt extends S.PureComponent {
    _copyModeTimeout = new oJ.Ep();
    state = { copyMode: cZ.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cZ.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cZ.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cx.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cf.AK)(t, i),
            (0, c8.C)(
                e,
                () => this.setState({ copyMode: cZ.q.SUCCESS }),
                () => this.setState({ copyMode: cZ.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cZ.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(rl.A, {
            direction: rl.A.Direction.VERTICAL,
            className: ge.Gj,
            children: [
                (0, E.jsx)(cZ.e, {
                    className: ge.ph,
                    value: (0, cf.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: c8.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: ou.XD.BRAND,
                    buttonLook: ou.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: ge.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(r7()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, E.jsx)(en.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: j.intl.string(j.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class gi extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cx.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cx.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, c1.bF)(e)
            ? (0, E.jsx)(c2.e, { shape: "square", sku: e, containerClassName: ge.ez })
            : null != t
              ? (0, E.jsx)(c0.A, { giftStyle: t, className: ge.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, c1.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e6()(ge.Oc, ge.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: ge._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: ge.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === s$.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === s$.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === s$.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === s$.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: ge.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(rl.A, {
            justify: rl.A.Justify.BETWEEN,
            align: rl.A.Align.CENTER,
            className: ge.pe,
            children: [
                (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.Q3Qguo),
                    loading: this.state.isCreating,
                    onClick: this.handleGenerateGiftCode,
                }),
            ],
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let {
                entitlements: e,
                application: t,
                giftCodes: i,
                className: n,
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, E.jsxs)(c$, {
            className: n,
            children: [
                (0, E.jsx)(en.D, {
                    onClick: this.handleToggleOpen,
                    className: ge.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(c$.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: ge.MY,
                            children: [
                                (0, E.jsxs)(rl.A, {
                                    align: rl.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: ge.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(c7.A, {
                                    direction: a ? c7.A.Directions.UP : c7.A.Directions.DOWN,
                                    className: ge.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(c$.Body, {
                          children: l
                              ? (0, E.jsx)(dN.y, { className: ge.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(gt, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let gn = g.Ay.connectStores([c5.A, eF.A, c6.A, x.A, c4.A, c3.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = c5.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = c6.A.getForGifterSKUAndPlan(c3.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eF.A.enabled,
        isFetching: c6.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: c6.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, c9.c9)(i) : null,
        giftCodes: l,
    };
})(gi);
var gs = i(104589);
function gl(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cW.A], () => cW.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, cR.N)(),
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, cA.y7)(),
        a = i.find((e) => e.giftCodeBatchId === s$.FB && !e.consumed),
        o = i.filter((e) => e.giftCodeBatchId === s$.Bu && !e.consumed) ?? [],
        [u, d] = eZ().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === s$.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        m =
            t || !c
                ? null
                : (0, E.jsxs)("div", {
                      className: gs.N1,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eM.c, { className: gs.yF }),
                      ],
                  }),
        A =
            !1 === n && c
                ? (0, E.jsxs)("div", {
                      className: gs.uo,
                      children: [
                          (0, E.jsx)(uc.t, {
                              size: "md",
                              color: er.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: gs.PC,
                          }),
                          (0, E.jsx)(es.E, {
                              variant: "text-md/normal",
                              className: gs.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sW.default)(), (0, s8.pX)(U.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cH.A, {
                              showGradient: !0,
                              className: gs.aA,
                              subscriptionTier: s$.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            m,
            (0, E.jsx)(cK.A, {
                className: gs.Yj,
                isShown: !1 === n && c,
                type: cK.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: gs.DE,
                    children: [
                        A,
                        l.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(go, { outboundPromotion: i, code: t }, i.id);
                        }),
                        s.map((e) => (0, E.jsx)(go, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, E.jsx)(
                                  gn,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: s$.FB,
                                  },
                                  (0, cf.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, E.jsx)(
                                  gn,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: s$.Bu,
                                  },
                                  (0, cf.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  gn,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: s$.Bu,
                                  },
                                  (0, cf.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var gr = i(339048);
function ga() {
    let e = (0, g.yK)([cW.A], () => cW.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eZ().groupBy(e, (e) => (0, cf.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            su.h.wait(() => {
                (0, gr.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(dN.y, { className: gs.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: gs.p$,
            children: [
                (0, E.jsx)("div", { className: gs.QT }),
                (0, E.jsx)(cb.H, { className: gs.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: gs.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, eH.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = eZ()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cf.X6)(e);
            return (0, E.jsx)(gn, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(Q.B, { gap: "lg", children: s });
}
function go(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, cy.Ay)(),
        d = (0, cL.WD)(i.id, u),
        c = null != n,
        g = S.useMemo(
            () =>
                (0, r8.i$)(
                    c
                        ? null != i.outboundRedemptionEndDate
                            ? r7()(i.outboundRedemptionEndDate)
                            : r7()(i.endDate).add(cO)
                        : r7()(i.endDate),
                    "LL",
                ),
            [i, c],
        );
    c && s
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = j.intl.format(j.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        A = !0 === (0, cR.N)(i),
        h = S.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: gs.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: gs.Pg,
                        children: [
                            (0, E.jsxs)("div", {
                                className: gs.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: gs.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: d, className: gs.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, E.jsx)(eG.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, E.jsx)(es.E, {
                            className: gs.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cj.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, E.jsx)(cC.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cM, {
                            ...e,
                            onClose: h,
                            onClaim: cm.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
let gu = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, cg.F5)("EntitlementGifts"),
                t = (0, g.bG)([cv.Ay], () => cv.Ay.getBadgeById(cu.$.GIFTING));
            return (
                S.useEffect(() => {
                    e && (0, cc.o0)(cu.$.GIFTING);
                }, [e]),
                (0, E.jsxs)(Q.B, {
                    gap: "md",
                    children: [
                        (0, E.jsx)(gl, {}),
                        e &&
                            null != t &&
                            (0, E.jsx)("div", {
                                className: gs.N1,
                                children: (0, E.jsxs)(cb.F, {
                                    component: (0, E.jsx)(eP.D, {
                                        variant: "heading-md/semibold",
                                        children: j.intl.string(ck.default.sFokBp),
                                    }),
                                    children: [(0, E.jsx)(eM.c, { className: gs.yF }), (0, E.jsx)(cY, {})],
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: gs.N1,
                            children: (0, E.jsxs)(cb.F, {
                                component: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t["9KeUbY"]),
                                }),
                                children: [(0, E.jsx)(eM.c, { className: gs.yF }), (0, E.jsx)(ga, {})],
                            }),
                        }),
                    ],
                })
            );
        },
        usePredicate: () => !(0, ch.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
    }),
    gd = (0, a.zZ)(u.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(ck.default.sFokBp),
        buildLayout: () => [gc],
        usePredicate: () => {
            let e = (0, cg.F5)("gift_inventory"),
                t = (0, g.bG)([cv.Ay], () => cv.Ay.getBadgeById(cu.$.GIFTING));
            return e && null != t;
        },
    }),
    gc = (0, a.E2)(u.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(ck.default.sFokBp)],
        Component: () => (0, E.jsx)(cY, {}),
    });
var gg = i(412260);
let gm = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: gh,
        buildLayout: () => [gA],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, g.cf)(
                    [gg.A],
                    () => ({
                        claimedOutboundPromotionCodes: gg.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: gg.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, cA.T1)({ includeClaimedPromotions: !0 }),
                n = (0, cL.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    gA = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [gh()],
        Component: () => (0, E.jsx)(gl, { redesign: !0 }),
    });
function gh() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let gE = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: gT, buildLayout: () => [gS] }),
    gS = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [gT()], Component: () => (0, E.jsx)(ga, {}) });
function gT() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let gx = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [gp],
        usePredicate: () => !(0, ch.Hp)(),
    }),
    gp = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(c_, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    gf = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [cI, gu, cE] }),
    gN = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [gx, gm, gd, gE, cS] : [gf]),
        initialize: () => {
            (0, o.SB)("GiftPanel") &&
                (cm.Ay.fetchClaimedOutboundPromotionCodes(), (0, cg.Ig)("gift_inventory") && (0, cc.o0)(cu.$.GIFTING));
        },
    }),
    g_ = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: cd.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, cA.IO)().length }), []);
        },
        buildLayout: () => [gN],
    });
var gI = i(659758),
    gC = i(828208),
    gb = i(815846);
let gy = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([id.default], () => id.default.getCurrentUser());
            return (0, up.YE)(e, s$.PremiumTypes.TIER_2) ? (0, E.jsx)(gb.A, {}) : (0, E.jsx)(gC.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gv = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gy] }),
    gj = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dp.L,
        buildLayout: () => [gv],
    }),
    gO = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: uc.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, gI.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [gj],
    });
var gR = i(104510),
    gL = i(820739),
    gD = i(73825),
    gP = i(160946);
let gG = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gM = i(859241),
    gU = i(531260),
    gV = i(369163),
    gk = i(957485),
    gw = i(926268),
    gF = i(253449),
    gB = i(93364);
function gz(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e6()(gF.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gF.Kk }),
            (0, E.jsx)(es.E, { className: gF.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gX = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gF.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gF.Qs,
                children: [
                    (0, E.jsx)(eP.D, {
                        className: gF.R_,
                        color: "text-overlay-light",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gF.kR,
                        children: [
                            (0, E.jsx)(gz, { className: t, icon: gV.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gz, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e6()(e.className, gF.Dp), src: gB, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gz, { className: t, icon: gk.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gz, { className: t, icon: gw.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gF.JP }),
        ],
    });
};
var gY = i(834040),
    gH = i(999747);
let gK = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: tI.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gW = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e6()(gH.iE, t),
            children: [
                (0, E.jsx)(eP.D, {
                    className: gH.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gH.p_,
                    children: gK.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gH.Aw,
                                children: [
                                    (0, E.jsxs)(en.D, {
                                        className: e6()(gH.k7, { [gH.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                className: gH.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gY.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gH.q4,
                                                  })
                                                : (0, E.jsx)(aj.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gH.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(es.E, {
                                            className: gH.ZF,
                                            color: "text-default",
                                            variant: "text-md/normal",
                                            children: e.getAnswer(),
                                        }),
                                ],
                            },
                            t,
                        );
                    }),
                }),
            ],
        });
    };
var gZ = i(462887),
    gq = i(933832),
    gQ = i(789645),
    gJ = i(116891),
    g$ = i(537532);
let g0 = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => s$.TG[U.TVA.NONE].limits.emoji,
        getTier1Value: () => s$.TG[U.TVA.TIER_1].limits.emoji,
        getTier2Value: () => s$.TG[U.TVA.TIER_2].limits.emoji,
        getTier3Value: () => s$.TG[U.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => s$.TG[U.TVA.NONE].limits.stickers,
        getTier1Value: () => s$.TG[U.TVA.TIER_1].limits.stickers,
        getTier2Value: () => s$.TG[U.TVA.TIER_2].limits.stickers,
        getTier3Value: () => s$.TG[U.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => s$.TG[U.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => s$.TG[U.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => s$.TG[U.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => s$.TG[U.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: s$.TG[U.TVA.NONE].limits.screenShareQualityResolution,
                framerate: s$.TG[U.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: s$.TG[U.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: s$.TG[U.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gJ.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: s$.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gJ.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: s$.TG[U.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s$.TG[U.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s$.TG[U.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s$.TG[U.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: s$.TG[U.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s$.TG[U.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s$.TG[U.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s$.TG[U.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: s$.TG[U.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => s$.TG[U.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => s$.TG[U.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => s$.TG[U.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => s$.TG[U.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.qDqUME),
        getPerkPreviewLightTheme: () => i(970770),
        getPerkPreviewDarkTheme: () => i(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.uwqgbu),
        getPerkPreviewLightTheme: () => i(243580),
        getPerkPreviewDarkTheme: () => i(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.zxsDxc),
        getPerkPreviewLightTheme: () => i(435748),
        getPerkPreviewDarkTheme: () => i(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => j.intl.string(j.t["2TNS3n"]),
        getTier3Value: () => j.intl.string(j.t["l+S46U"]),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => i(329312),
        getPerkPreviewDarkTheme: () => i(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.QV6MZQ),
        getPerkPreviewLightTheme: () => i(463384),
        getPerkPreviewDarkTheme: () => i(481344),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function g1(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === U.TVA.NONE ? "text-muted" : "text-strong",
        l = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e6()(g$.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eP.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(es.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: U.M2T[n] }),
                }),
        ],
    });
}
function g2(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e6()(g$.Jk, { [g$.I$]: s });
        t = s
            ? (0, E.jsx)(gq.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gQ.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(es.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e6()(g$.xR, i), children: t });
}
function g3(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case U.TVA.NONE:
                case U.TVA.TIER_1:
                    return U.TVA.TIER_2;
                case U.TVA.TIER_2:
                case U.TVA.TIER_3:
                    return U.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, E.jsx)("div", {
              className: e6()(g$.ER, { [g$.GH]: i === U.TVA.TIER_2, [g$.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(es.E, {
                  className: g$.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function g6(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: g$.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e6()(g$.xR, g$.uB),
                scope: "row",
                children: (0, E.jsx)(en.D, {
                    className: e6()(g$.VC, g$.xR, g$.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, E.jsx)(ee.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, E.jsx)("img", {
                                className: g$.Mz,
                                src: (0, gZ.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(es.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(g2, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(g2, { value: l.getTier1Value() }),
            (0, E.jsx)(g2, { value: l.getTier2Value() }),
            (0, E.jsx)(g2, { value: l.getTier3Value() }),
        ],
    });
}
let g4 = function (e) {
    let t = (0, cy.Ay)(),
        [i, n] = S.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, E.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, E.jsx)(eP.D, {
                    className: g$.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: g$.wY,
                children: [
                    null != l && (0, E.jsx)(g3, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: g$.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: g$.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(g1, { className: g$.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(g1, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(g1, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(g1, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(g1, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: g$.__invalid_tableBody,
                                children: g0.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              g6,
                                              {
                                                  isFocused: l,
                                                  handleFocus: function () {
                                                      n(s);
                                                  },
                                                  handleRowBlur: o,
                                                  theme: t,
                                                  row: e,
                                                  hideTier0: a,
                                              },
                                              s,
                                          )
                                        : null;
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var g5 = i(338548),
    g7 = i(776096),
    g8 = i(178368),
    g9 = i(617498),
    me = i(866323),
    mt = i(530005),
    mi = i(443865),
    mn = i(473145);
function ms(e) {
    let {
            guildBoostSlot: t,
            onClose: n,
            hasCancelableGuildBoostSlot: s,
            premiumSubscription: l,
            onSelect: r,
            fractionalState: a,
        } = e,
        o = {
            transfer: {
                label: null != t.premiumGuildSubscription ? j.intl.string(j.t["PR0n//"]) : j.intl.string(j.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? j.intl.string(j.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: j.intl.string(j.t.twFU3R), subtext: s ? null : j.intl.string(j.t.oQ9lOh), disabled: !s },
            uncancel: { label: j.intl.string(j.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case U.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = j.intl.string(j.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case U.Dmq.PAUSE_PENDING:
        case U.Dmq.PAUSED:
            a === s$.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === s$.xc.NONE
                ? (0, E.jsx)(ei.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: mi.x,
                      leadingAccessory: { type: "icon", icon: mi.x },
                  })
                : null,
        [a, l],
    );
    return (0, E.jsxs)(et.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: n,
        children: [
            (0, E.jsx)(ei.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, K.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, E.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: U.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, mn.I5)(t)
                ? (0, E.jsx)(ei.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, K.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, E.jsx)(ei.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, K.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 983511));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var ml = i(545934),
    mr = i(496431);
let ma = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, mr.A)(i);
    return (0, E.jsx)(es.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, r8.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var mo = i(759692);
let mu = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e6()(mo.h4, t, { [mo.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e6()(mo.Sl, n, { [mo.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var md = i(743552);
let mc = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e6()(md.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e6()(md.$J, md.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(mu, { className: md.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: md.De, src: i(438807), alt: "" }),
        ],
    });
};
var mg = i(548118),
    mm = i(63152),
    mA = i(944304),
    mh = i(864310),
    mE = i(310918);
let mS = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, dn.bG)([ec.A], () => ec.A.getGuild(i), [i]),
        l = (0, mh.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e6()(t, mE.bo),
              children: (0, E.jsx)("div", {
                  className: mE.$g,
                  children: (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e6()(t, mE.bo),
              children: [
                  (0, E.jsx)(mg.Ay, { className: mE.__invalid_guildIcon, guild: s, size: mg.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: mE.$g,
                      children: [
                          (0, E.jsx)(es.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: mE.TZ,
                              children: [
                                  (0, E.jsx)(gR._, {
                                      color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: mE.Me,
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: mE.me }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, mn.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(mA.A, {
                            guild: s,
                            analyticsLocation: {
                                page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: U.ZSU.BUTTON_CTA,
                                objectType: U.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: ou.$n.Sizes.MEDIUM,
                            color: ou.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, sW.default)(),
                                    (0, mm.K4)({
                                        guildId: s.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var mT = i(20230);
function mx(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: s,
            premiumSubscription: l,
            fractionalPremiumInfo: r,
        } = e,
        a = S.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), j.intl.format(j.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dP.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: s$.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: s$.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: s$.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: s$.TG[e].limits.screenShareQualityResolution,
                            framerate: s$.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: s$.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: s$.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: s$.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= U.TVA.TIER_2 && (t.push(j.intl.string(j.t.SztbtN)), t.push(j.intl.string(j.t["3GK91n"]))),
                        e >= U.TVA.TIER_3 && t.push(j.intl.string(j.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return j.intl.format(j.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, me.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: mT.xm,
              children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(g9.animated.div, {
                  style: e,
                  className: mT.xm,
                  children: (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function mp(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, dn.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, mn.I5)(i),
        c = (0, gU.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: mT.PW,
        children: [
            (0, E.jsxs)("div", {
                className: mT.$U,
                children: [
                    (0, E.jsx)(mc, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: mT.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(ma, { className: mT.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(mx, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, E.jsx)(ee.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, E.jsx)(ms, {
                                onClose: t,
                                guildBoostSlot: i,
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: s,
                                fractionalState: c.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, E.jsx)(en.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                className: mT.oU,
                                children: (0, E.jsx)(mt.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: mT.eX }),
        ],
    });
}
function mf(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, dn.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mT.ag,
        children: [
            (0, E.jsx)(mS, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mp,
                    {
                        guildTier: r?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: s,
                        showAltText: l,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function mN(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, dn.bG)([ec.A], () => ec.A.getGuild(t), [t]),
        l = dP.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dP.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = ml.A.createFromServer(
        {
            id: dP.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: mT.ag,
        children: [
            (0, E.jsx)(mS, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mp,
                    {
                        guildTier: s?.premiumTier,
                        guildBoostSlot: r,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    t,
                ),
            ),
        ],
    });
}
function m_(e) {
    let { appliedGuildBoosts: t, premiumSubscription: i } = e,
        n = S.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let i = t.guildId;
                    i in e || (e[i] = []), e[i].push(t);
                }),
                e
            );
        }, [t]);
    return null == i || 0 === t.length
        ? null
        : (0, E.jsxs)("div", {
              className: mT.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: mT.kL,
                      children: dP.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(mN, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: mT.vK }),
              ],
          });
}
function mI(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, s] = S.useState(!1);
    S.useEffect(() => {
        let e = -1;
        return (
            null != i &&
                (e = setInterval(() => {
                    s((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [i]);
    let { boostsByGuildId: l, numActiveGuildBoostSlots: r } = S.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let s = t[n];
                if ((!(0, mn.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > up.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: mT.iE,
        children: [
            (0, E.jsx)("div", {
                className: mT.kL,
                children: dP.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            mf,
                            {
                                guildId: e,
                                guildBoostSlotRecords: l[e],
                                premiumSubscription: i,
                                hasCancelableGuildBoostSlot: a,
                                showAltText: n,
                            },
                            e,
                        ),
                    ),
            }),
            (0, E.jsx)("div", { className: mT.vK }),
        ],
    });
}
var mC = i(461546);
let mb = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: mC.iE,
        children: [
            (0, E.jsx)("div", {
                className: mC.bj,
                children: (0, E.jsx)("img", { alt: "", className: mC.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: mC.D7,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "display-md",
                        className: mC.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: i,
                                hasBoostPerk: n,
                                canAddBoosts: s,
                            } = e;
                            return s
                                ? t
                                    ? n && !i
                                        ? j.intl.format(j.t.s9zQyG, {})
                                        : j.intl.format(j.t.Rb8Jhs, {})
                                    : j.intl.string(j.t["2rh0by"])
                                : j.intl.format(j.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, E.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: mC.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var my = i(725538),
    mv = i(168482);
function mj() {
    return (0, E.jsxs)("div", {
        className: my.iE,
        children: [
            (0, E.jsx)("img", { className: my.Kk, alt: "", src: mv }),
            (0, E.jsxs)("div", {
                className: my.pq,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, E.jsx)(eG.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: function () {
                    (0, s8.pX)(U.BVt.GUILD_DISCOVERY), (0, sW.default)();
                },
            }),
        ],
    });
}
var mO = i(502572),
    mR = i(614820),
    mL = i(987144),
    mD = i(178015);
let mP = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nQ.Ay)(),
        { fractionalState: n } = (0, gU.A)();
    function s(i) {
        null != e.current && (0, K.closeModal)(e.current),
            (0, mL.g)({
                analyticsLocation: {
                    page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: U.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: U.ZSU.BUTTON_CTA,
                    objectType: U.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, K.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, E.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, K.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, mn.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: mD.iE,
        children: [
            (0, E.jsx)(gR._, { color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: mD.$J }),
            (0, E.jsx)(es.E, {
                className: mD.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, mR.O)(e),
                            s = (0, E.jsx)("div", {
                                className: mD.lO,
                                children: (0, E.jsx)(
                                    ea.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  mO.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, E.jsx)("span", { ...e, children: s }),
                                  },
                                  t,
                              )
                            : s;
                    },
                }),
            }),
        ],
    });
};
var mG = i(735310);
let mM = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([g7.A], () => g7.A.affinities),
        s = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        l = S.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < s.length && !(e.length >= 3); t++) {
                let i = s[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, s]);
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mG.iE,
              children: [
                  t &&
                      (0, E.jsx)(eP.D, {
                          variant: "heading-lg/semibold",
                          className: mG.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(mS, { className: mG.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(mP, {}),
              ],
          });
};
var mU = i(773447);
let mV = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        } = e,
        { subtitle: l, flavor: r } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: i,
                hasGuildAffinitiesOrInGuild: n,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: j.intl.format(j.t.doslJu, {
                        onClick: () => (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: j.intl.string(j.t.oiWYAc) };
            if (t)
                return {
                    subtitle: j.intl.string(j.t.W5rDjW),
                    flavor: j.intl.format(j.t.cUHcaQ, {
                        helpdeskArticle: tI.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = s$.hd[s$.gD.PREMIUM_MONTH_GUILD],
                r = up.Ay.getDefaultPrice(l.id, i),
                a = (0, dL.CE)((0, dL.$g)(r.amount, r.currency), l.interval, l.intervalCount);
            return {
                subtitle: i ? j.intl.string(j.t.bhPzXR) : j.intl.string(j.t.Zs9h9Z),
                flavor: j.intl.formatToPlainString(j.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, E.jsxs)("div", {
        className: mU.i,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-lg/bold", className: mU.V, children: l }),
            null != r && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mk = i(724624),
    mw = i(983511),
    mF = i(342744),
    mB = i(87719),
    mz = i(439312);
function mX(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: s,
            premiumSubscription: l,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, mn.I5)(t),
        d = l?.isPaused === !0 && a === s$.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mz.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mz.YL,
                    children: [
                        (0, E.jsx)(mc, {
                            className: mz.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, E.jsx)(es.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, E.jsx)(ma, { cooldown: o.getTime() })
                              : (0, E.jsx)(es.E, {
                                    className: mz.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mz.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(mO.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mz.LB,
                                        children: (0, E.jsx)(ea.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t.twFU3R),
                                            onClick: () => n(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        u &&
                            (0, E.jsx)(mO.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mz.LB,
                                        children: (0, E.jsx)(ea.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t["2glQNp"]),
                                            onClick: () => s(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function mY(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mw.default, { ...t, guildBoostSlot: e }));
}
function mH(e) {
    (0, K.openModalLazy)(async () => (t) => (0, E.jsx)(mF.default, { ...t, guildBoostSlotId: e.id }));
}
let mK = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gU.A)(),
        o = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
        u = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        d = a === s$.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: m,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: T,
            allGuildBoostsAreOnCooldown: x,
        } = S.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, mn.I5)(s) && i++,
                        s.isOnCooldown() ? (n = !0) : (l = !1),
                        null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: i,
                    hasCooldownBoosts: n,
                    allGuildBoostsAreOnCooldown: l,
                }
            );
        }, [s]),
        p = null != l ? up.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === s.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(mu, { className: mz.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let y = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: y })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: y })),
        up.Ay.isPremium(u))
    ) {
        function v(e, t) {
            return (0, E.jsx)(
                en.D,
                {
                    className: mz.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mB.e)();
                    },
                    children: e,
                },
                t,
            );
        }
        i = x
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: v })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: y, learnMoreHook: v });
    } else
        i = x
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: y });
    return (
        (n = r && a === s$.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mz.iE,
            children: (0, E.jsxs)("div", {
                className: e6()(mz.Qs, [mz.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mz.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mz.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mz.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mz.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eP.D, {
                                                className: mz.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(es.E, {
                                                className: mz.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mz.di,
                                children: (0, E.jsx)(mO.A, {
                                    shouldShow: null == b || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.BMx1iy),
                                            ...e,
                                            disabled: null == b || c,
                                            onClick:
                                                null != b
                                                    ? () => {
                                                          (0, K.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, E.jsx)(mk.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [b],
                                                                      locationSection: U.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!_ || T) &&
                        (0, E.jsx)("ul", {
                            className: mz.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mX,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mY,
                                        onUncancel: mH,
                                        premiumSubscription: l,
                                        useReducedMotion: o,
                                        fractionalState: a,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                ],
            }),
        })
    );
};
var mW = i(561835);
function mZ(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([g8.A], () => g8.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        l = up.Ay.isPremium(s, s$.PremiumTypes.TIER_2),
        r = (0, g.bG)([g7.A], () => g7.A.affinities),
        a = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gM.A], () => gM.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gU.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === s$.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === s$.xc.NONE && !T,
        f = l && h === s$.xc.FP_SUB_PAUSED,
        N = h === s$.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mW.GO,
        children: [
            (0, E.jsx)(cs.kb, { className: mW.ek }),
            (0, E.jsx)(mb, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mV, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(g5.A, {}),
            !o && (0, E.jsx)(mj, {}),
            t?.isPaused && h !== s$.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(m_, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(mI, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mK, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(mM, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(g4, { className: mW.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gX, { cardClassName: mW.KW }),
            (0, E.jsx)(gW, { className: mW.JL }),
        ],
    });
}
var mq = i(527113),
    mQ = i(365199),
    mJ = i(378102);
function m$(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, mh.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mJ.OA,
        children: [
            (0, E.jsx)(mg.Ay, { className: mJ.$f, guild: t, size: mg.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mJ.gI,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mJ.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mJ.QW,
                                children: [
                                    (0, E.jsx)(gR._, {
                                        className: mJ.Wz,
                                        color: er.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== U.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: mJ.zk }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, mn.gb)(t.premiumTier, { useLevels: !1 }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function m0(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mJ.Nr,
              children: [
                  (0, E.jsx)(m$, { guild: i }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gR._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mL.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: U.ZSU.BUTTON_CTA,
                                  objectType: U.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var m1 = i(512062);
let m2 =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function m3(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, mn.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gU.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: s$.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: s$.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: s$.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: s$.TG[e].limits.screenShareQualityResolution,
                            framerate: s$.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: s$.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: s$.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: s$.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= U.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= U.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        g = S.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dP.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e6()(m1.iq, { [m1.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: m1.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: m1.bB, src: m2 }),
                    a && null != m
                        ? (0, E.jsx)(es.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: m }),
                          })
                        : (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: m1.zk }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: j.intl.formatToPlainString(j.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != n.trialEndsAt &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: m1.zk }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: j.intl.formatToPlainString(j.t.OdPSpk, {
                                                      date: new Date(n.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, E.jsx)(ee.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, E.jsx)(ms, {
                        onClose: i,
                        guildBoostSlot: t,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: s,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, E.jsx)(en.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: m1.Mj,
                        ...e,
                        children: (0, E.jsx)(mQ.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function m6(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([ec.A], () => ec.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: m1.Nr,
        children: [
            (0, E.jsx)("div", {
                className: m1.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(m$, { guild: l, className: m1.OA }),
                                  (0, E.jsx)(eG.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sW.default)(),
                                              (0, mm.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, E.jsx)("div", {
                              className: m1.OA,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    m3,
                    {
                        slot: e,
                        guildTier: l?.premiumTier,
                        premiumSubscription: n,
                        hasCancelableSlots: s,
                        isLast: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function m4(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = S.useMemo(() => {
            if (s && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let s = i[e];
                            n[e] = s.map((i) =>
                                ml.A.createFromServer(
                                    {
                                        id: i.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: i.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return n;
                    })(n, i),
                    numActiveSlots: 0,
                };
            let e = 0,
                l = {};
            for (let i of Object.keys(t)) {
                let n = t[i];
                if ((!(0, mn.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > up.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: m1.kR,
        children: dP.default
            .keys(l)
            .map((e) => (0, E.jsx)(m6, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var m5 = i(928171);
function m7(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, mn.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? up.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === s$.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: m5.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: m5.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: m5._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: m5.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: m5.F8, src: m2 }),
                                          (0, E.jsx)("div", {
                                              className: e6()(m5.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: m5.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: m5.Qp,
                                      children: [
                                          (0, E.jsx)(es.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, E.jsx)(es.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: j.intl.format(j.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, E.jsx)(mO.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eG.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gR._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, K.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, E.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, mL.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: U.JJy.SETTINGS_PREMIUM,
                                                                      object: U.ZSU.BUTTON_CTA,
                                                                      objectType: U.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              });
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  l.map((e, t) =>
                      (0, E.jsx)(
                          m8,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, mn.I5)(e),
                              isCanceled: (0, mn.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function m8(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = S.useRef(null),
        u = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, E.jsx)(es.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, E.jsx)(ma, { cooldown: u.getTime() })
              : (0, E.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e6()(m5.iq, { [m5.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: m5.kd,
                children: [(0, E.jsx)("img", { alt: "", className: m5.bB, src: m2 }), t],
            }),
            d &&
                (0, E.jsx)(ee.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsxs)(et.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, E.jsx)(ei.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, K.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mw.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, E.jsx)(ei.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, K.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mF.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, E.jsx)(en.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: m5.Mj,
                            ...e,
                            children: (0, E.jsx)(mQ.j, { size: "xs", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var m9 = i(942053);
function Ae(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = tI.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== s$.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: m9.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: m9.b,
                      children: [
                          (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(es.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(m4, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(m7, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var At = i(917064),
    Ai = i(401721);
function An() {
    return (0, E.jsxs)("div", {
        className: Ai.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: Ai.kR,
                children: At.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: Ai.Nr,
                            children: [
                                (0, E.jsx)(i, { className: Ai.Kk }),
                                (0, E.jsx)(es.E, {
                                    className: Ai.h_,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var As = i(232122),
    Al = i(630579);
function Ar() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: Al.iE,
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: Al.p_,
                children: As.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        en.D,
                        {
                            tag: "li",
                            className: e6()(Al.Aw, { [Al.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Al.k7,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            className: Al.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(el.a, {
                                            size: "sm",
                                            color: er.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: Al.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(es.E, {
                                        className: Al.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: s.getAnswer(),
                                    }),
                            ],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var Aa = i(182859),
    Ao = i(853513),
    Au = i(880482);
function Ad() {
    let e = tI.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: Au.wx,
        children: [
            (0, E.jsxs)("div", {
                className: Au.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: Au.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: Au.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(Ao.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, E.jsx)(Aa.A, {
                variant: "member",
                className: Au.iO,
                analyticsLocation: {
                    page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: U.JJy.HERO,
                    object: U.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var Ac = i(315629),
    Ag = i(524170);
function Am() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser());
    if (null == e || up.Ay.hasFreeBoosts(e)) return null;
    let t = tI.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(Ac.h, {
        color: "nitro-pink",
        className: Ag.vK,
        children: [
            (0, E.jsxs)("div", {
                className: Ag.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: Ag.q3, src: m2 }),
                    (0, E.jsxs)("div", {
                        className: Ag.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: s$.M4, boostCount: s$.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: Ag.xv,
                                children: [
                                    (0, E.jsx)(uc.t, { className: Ag.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: s$.M4,
                                            boostCount: s$.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(eG.$, {
                variant: "expressive",
                size: "sm",
                icon: uc.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mB.e,
            }),
        ],
    });
}
var AA = i(738262);
function Ah() {
    let e = (0, g.bG)([g7.A], () => g7.A.affinities),
        t = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        i = S.useMemo(() => {
            let i = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && i.length < 3; e++) {
                let n = t[e];
                i.includes(n) || i.push(n);
            }
            return i;
        }, [e, t]);
    return 0 === i.length
        ? null
        : (0, E.jsxs)("div", {
              className: AA.i,
              children: [
                  (0, E.jsx)(eP.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: AA.k, children: i.map((e) => (0, E.jsx)(m0, { guildId: e }, e)) }),
              ],
          });
}
var AE = i(553429);
function AS(e) {
    let { count: t, disabledReason: n } = e,
        s = tI.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(Ac.h, {
        color: "nitro-pink",
        className: AE.vK,
        children: [
            (0, E.jsxs)("div", {
                className: AE.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: AE.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: AE.F8, src: m2 }),
                            (0, E.jsx)("div", {
                                className: e6()(AE.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: AE.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: AE.Tm,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: AE.xv,
                                children: [
                                    (0, E.jsx)(uc.t, { className: AE.nE }),
                                    (0, E.jsx)(es.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: s$.M4,
                                            boostCount: s$.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(mO.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eG.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gR._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, K.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, E.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, mL.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: U.JJy.SETTINGS_PREMIUM,
                                                        object: U.ZSU.BUTTON_CTA,
                                                        objectType: U.AnalyticsObjectTypes.BUY,
                                                    },
                                                    guild: e,
                                                });
                                        },
                                    });
                            });
                        },
                    }),
            }),
        ],
    });
}
function AT(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([g8.A], () => g8.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        l = (0, g.bG)([g7.A], () => g7.A.affinities),
        r = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gM.A], () => gM.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gU.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === s$.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = up.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mW.GO,
        children: [
            (0, E.jsx)(cs.kb, { className: mW.ek }),
            (0, E.jsx)(Ad, {}),
            (0, E.jsx)(Am, {}),
            T > 0 && (0, E.jsx)(AS, { count: T, disabledReason: h }),
            c && (0, E.jsx)(g5.A, {}),
            !a && (0, E.jsx)(mj, {}),
            (0, E.jsxs)("div", {
                className: mW.C_,
                children: [
                    (0, E.jsx)(Ae, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(Ah, {}),
                    (0, E.jsx)(mq.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(An, {}),
                    (0, E.jsx)(Ar, {}),
                ],
            }),
        ],
    });
}
var Ax = i(672140);
let Ap = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gG.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                su.h.wait(() => {
                    dv.hP(), dv.$o(), (0, gL.CD)(), (0, gD.zS)(null, null, U.tF5.DISCOVERY), (0, gL.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([d7.A], () => ({
                    hasFetchedSubscriptions: d7.A.hasFetchedSubscriptions(),
                    premiumSubscription: d7.A.getPremiumTypeSubscription(),
                })),
                n = (0, gP.Y)(),
                s = (0, g.bG)([d5.A], () => d5.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gM.A], () => gM.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e6()(Ax.kL, Ax.Lq), children: (0, E.jsx)(dN.y, {}) })
                : (0, E.jsxs)("div", {
                      className: Ax.kL,
                      children: [
                          (0, E.jsx)("div", { className: Ax.Tp }),
                          (0, E.jsx)("div", {
                              className: Ax.Qs,
                              children: e
                                  ? (0, E.jsx)(AT, { premiumSubscription: i })
                                  : (0, E.jsx)(mZ, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    Af = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Ap] }),
    AN = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [Af],
    }),
    A_ = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gR._,
        buildLayout: () => [AN],
    });
var AI = i(153659),
    AC = i(155984),
    Ab = i(357758),
    Ay = i(262077),
    Av = i(696986),
    Aj = i(898555);
function AO(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(Av.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: Aj.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(Av.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: Aj.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Aj.RI }),
                    (0, E.jsxs)("div", {
                        className: Aj.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: Aj.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: Aj.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(eG.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: j.intl.string(j.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var AR = i(872351),
    AL = i(9113),
    AD = i(599941),
    AP = i(384684),
    AG = i(2242);
let AM = [];
var AU = i(912851),
    AV = i(497267);
let Ak = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(en.D, {
        onClick: n ? void 0 : i,
        className: AV.x6,
        children: (0, E.jsxs)("div", {
            className: AV.hQ,
            children: [
                n
                    ? (0, E.jsx)(dN.y, { type: dN.y.Type.PULSING_ELLIPSIS, className: AV.__invalid_spinner })
                    : (0, E.jsx)(es.E, { variant: "text-md/medium", className: AV.Pf, children: t }),
                (0, E.jsx)(el.a, { size: "md", color: "currentColor", className: AV.UE }),
            ],
        }),
    });
};
var Aw = i(465932),
    AF = i(543767),
    AB = i(420139),
    Az = i(790284),
    AX = i(636194),
    AY = i(624456),
    AH = i(710144),
    AK = i(815332),
    AW = i(162093),
    AZ = i(960309);
function Aq(e) {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sQ.GV)(),
        { analyticsLocations: a } = (0, nQ.Ay)(e1.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, i] = S.useState(!1),
                [n, s] = S.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return i(!0), await dv.M2(t, e), !0;
                    } catch (e) {
                        s(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(s.id)) && l();
    }
    let g = n.role_benefits.benefits.filter((e) => e.ref_type === AG.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === AG.bN.INTANGIBLE),
        A = r7()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(re.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: c, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: h,
        onClose: l,
        children: (0, E.jsxs)(Q.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(q.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(AW.x, { listingId: n.id, guildId: i.guild_id, className: AZ.P }),
            ],
        }),
    });
}
var AQ = i(319225),
    AJ = i(746080),
    A$ = i(74669);
function A0(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
    return (0, E.jsxs)("div", {
        className: A$.L0,
        children: [
            (0, E.jsxs)("div", {
                className: A$.a5,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-deprecated-12/semibold", className: A$.HU, children: t }),
                    n &&
                        (0, E.jsx)(tr.m, {
                            text: s,
                            children: (0, E.jsx)(l0.m, { size: "xs", color: "currentColor", className: A$.Mo }),
                        }),
                ],
            }),
            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", className: A$.sx, children: i }),
        ],
    });
}
function A1(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, nQ.Ay)(),
        [n] = (0, AF.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: e1.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        s = (0, g.bG)([d5.A], () => d5.A.hasFetchedPaymentSources);
    return null != n && s ? (0, E.jsx)(AB.A, { subscription: t, currentInvoicePreview: n }) : (0, E.jsx)(dN.y, {});
}
function A2(e) {
    let {
        isTrial: t,
        isCancelled: i,
        isResubscribing: n,
        shouldHideRoleSubscriptionEntryPoints: s,
        onCancelSubscriptionClick: l,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return i && (t || s)
        ? null
        : (0, E.jsx)(s7.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, E.jsx)("div", {
                  className: A$.__invalid_rowButtons,
                  children: i
                      ? (0, E.jsx)(eG.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.y3mAE4),
                            onClick: r,
                            loading: n,
                        })
                      : (0, E.jsxs)(E.Fragment, {
                            children: [
                                !t && !s && (0, E.jsx)(Ak, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, E.jsx)(Ak, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let A3 = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AY.M)(e),
                i = (0, g.bG)([AX.A], () => AX.A.getSubscriptionListingForPlan(t)),
                n = (0, g.bG)([AX.A], () =>
                    null != i ? AX.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                s = (0, g.bG)([ec.A], () => ec.A.getGuild(n?.guild_id)),
                [l, r] = S.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AD.XE)();
            S.useEffect(() => {
                l && null != s && null == AX.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = r7()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, dL.$g)(t.price, t.currency) : "",
                              s = r7()(t.createdAt).format("M/D/YY"),
                              l = t.status === U.Dmq.CANCELED,
                              r = t.status === U.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: i,
                              nextRenewalLabel: l ? j.intl.string(j.t.UAfot2) : j.intl.string(j.t.CVjLcM),
                              subscriptionPrice: n,
                              isCancelled: l,
                              isPastDue: r,
                              isTrial: a,
                          };
                      })({ subscription: e });
            return {
                guild: s,
                expanded: l,
                handleToggleExpanded: function () {
                    return r((e) => !e);
                },
                listing: i,
                groupListing: n,
                subscriptionInfo: o,
            };
        })(t),
        [o, d] = S.useState(!1),
        c = (0, sQ.GV)(),
        { analyticsLocations: m } = (0, nQ.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: A } = (0, Aw.MH)(s?.id),
        h = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function T() {
        try {
            d(!0), await dv.QP(t, m), (0, AQ.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
        } finally {
            d(!1);
        }
    }
    let {
            isCancelled: x,
            isPastDue: p,
            subscriptionPrice: f,
            memberSince: N,
            nextRenewalDate: _,
            nextRenewalLabel: I,
            isTrial: C,
        } = a,
        b = i.soft_deleted || null == s || h;
    return (0, E.jsxs)("div", {
        className: A$.kL,
        children: [
            (0, E.jsx)(AH.A, {
                onClick: r,
                className: A$.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [
                            null != s && (0, E.jsx)(mg.Ay, { guild: s, active: !0, size: mg.Ay.Sizes.MEDIUM }),
                            (0, E.jsxs)("div", {
                                className: A$.if,
                                children: [
                                    (0, E.jsx)(es.E, {
                                        variant: "text-md/medium",
                                        className: A$.J5,
                                        children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: A$.xp,
                                        children: [
                                            (0, E.jsx)(es.E, {
                                                variant: "text-sm/normal",
                                                className: A$.KR,
                                                children: i.name,
                                            }),
                                            x
                                                ? (0, E.jsx)(sm.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : C
                                                  ? (0, E.jsx)(sm.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: er.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : p
                                                    ? (0, E.jsx)(tr.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(sm.Lp, {
                                                                  className: A$.qc,
                                                                  text: j.intl.string(j.t.NrRwIl),
                                                                  color: er.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            h
                                                ? (0, E.jsx)(tr.m, {
                                                      text: j.intl.string(j.t.nv1IqK),
                                                      children: (0, E.jsx)("div", {
                                                          children: (0, E.jsx)(sm.Lp, {
                                                              text: j.intl.string(j.t["sBl3X/"]),
                                                              color: er.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)(en.D, {
                                onClick: n(r),
                                "aria-label": j.intl.string(j.t.e5eQOy),
                                "aria-controls": c,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, E.jsx)(el.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: e6()(A$.D6, { [A$.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != n && l
                ? (0, E.jsxs)("div", {
                      id: c,
                      children: [
                          (0, E.jsx)("div", { className: A$.yF }),
                          (0, E.jsx)(AK.A, { groupListingId: n.id, subscription: t, className: A$.kE }),
                          (0, E.jsxs)("div", {
                              className: A$.Zx,
                              children: [
                                  (0, E.jsx)(A0, { label: I, value: _ }),
                                  (0, E.jsx)(A0, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: f,
                                      showInfoIcon: C,
                                      infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, E.jsx)(A0, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, E.jsx)(Av.h, { size: 16 }),
                          !x &&
                              !h &&
                              (0, E.jsx)(s7.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, E.jsx)(A1, { subscription: t }),
                              }),
                          !b &&
                              (0, E.jsx)(A2, {
                                  isTrial: C,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: A,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != n && null != i) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, K.openModal)((t) => (0, E.jsx)(Aq, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, s8.pX)(U.BVt.CHANNEL(s.id, AJ.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, sW.default)(),
                                          AU.A.show(
                                              U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  Az.A.setState({ subsection: nB.nR }),
                                                      (0, eH.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
                                              },
                                          ));
                                  },
                                  onResubscribeClick: T,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var A6 = i(175880);
let A4 = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([AP.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AP.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? AG.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AG.M_.NONE
                                  : AG.M_.IN_SUBSCRIPTION_SERVER;
                        })([AP.A]),
                    ) === AG.M_.SUBSCRIBED,
                i = (0, g.bG)([d7.A], () => d7.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = d7.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !d7.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dv.hP());
                }, [e, t]),
                i ?? AM
            );
        })(),
        { loading: n } = (0, AD.eb)(i);
    return ((0, AL.A)(dG.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(dN.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eG.$, { text: j.intl.string(j.t.hqyhKQ), icon: AR.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(Av.h, { size: 10 }),
                    (0, E.jsx)(iC.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: A6.A,
                            children: i.map((e) => (0, E.jsx)(A3, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var A5 = i(327479),
    A7 = i(388567);
function A8(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(Av.h, { size: 4 }),
            (0, E.jsx)(es.E, { variant: "text-md/normal", className: A7.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(Av.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: A7.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: A7._e }),
                    (0, E.jsxs)("div", {
                        className: A7.FS,
                        children: [
                            (0, E.jsx)(eP.D, {
                                variant: "heading-xl/semibold",
                                className: A7.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(es.E, {
                                variant: "text-md/normal",
                                className: A7.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(A5.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var A9 = i(548411),
    he = i(417098),
    ht = i(143582),
    hi = i(915043),
    hn = i(46367);
function hs(e) {
    let { className: t, header: i, headerClassName: n, children: s } = e,
        l = S.useMemo(() => {
            let e = !1;
            return (
                S.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, E.jsxs)("div", {
        className: e6()(hn.iE, t),
        children: [
            (0, E.jsx)("div", { className: e6()(hn.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: hn.Qs, children: s }),
        ],
    });
}
var hl = i(885996),
    hr = i(144165),
    ha = i(664121),
    ho = i(950305),
    hu = i(943775),
    hd = i(123791),
    hc = i(900797),
    hg = i(300118);
let hm = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function hA(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(hm.Provider, { value: s, children: t(i) });
}
hA.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(hm),
        l = n ? hc.t : el.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(en.D, {
        className: e6()(hg.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(es.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var hh = i(243217),
    hE = i(328968),
    hS = i(163437),
    hT = i(3432);
function hx(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hp = i(583995),
    hf = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function hN(e) {
    let { subscription: t, navigateToSwitchPlan: i, loadingState: n } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: c,
            sku: m,
            isCancelled: A,
            isOrphanedGuildSubscription: h,
            renewalPlan: x,
        } = (0, g.cf)([c4.A, c5.A, hE.A, ec.A], () => {
            let e,
                i = c4.A.get(r),
                n = null != i ? c5.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? hE.A.getForSKU(i.skuId) : null,
                u = null != o && (0, hS.PJ)(o.skuFlags),
                d = u && null != s ? ec.A.getGuild(s) : void 0,
                c = (0, hS.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = c4.A.get(t.planId) ?? void 0;
            }
            return {
                appId: a,
                isGuildSubscription: u,
                isOrphanedGuildSubscription: g,
                plan: i,
                sku: n,
                storeListing: o,
                subscriptionForGuild: d,
                isCancelled: c,
                renewalPlan: e,
            };
        }, [s, r, l, t]),
        { data: p } = (0, T.YY)(a),
        f = S.useMemo(() => (null != p ? (0, hu.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, hS.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nQ.Ay)(),
        [b] = (0, AF.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e1.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        y = hx(t.currentPeriodEnd),
        v = 0 === n;
    return (0, E.jsxs)(hs, {
        headerClassName: hp.dL,
        header:
            !1 === v
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: hp.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(hr._, { src: f.href, imageClassName: hp.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: hp.aF,
                                      children: [
                                          (0, E.jsx)(eP.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, E.jsx)(es.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? j.intl.string(j.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, E.jsx)("div", {
                              className: hp.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(hy, {
                                      subscription: t,
                                      app: p,
                                      guild: c,
                                      sku: m,
                                      storeListing: u,
                                      isCancelled: A,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: x?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, E.jsx)(dN.y, { type: dN.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(hb, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: y })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: y }),
                }),
            !A && h && (0, E.jsx)(hb, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(hb, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: hp.zH,
                children: [
                    (0, E.jsx)(hC, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: hp.yW,
                                          children: [(0, E.jsx)(ha.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: hp._t,
                                              children: [
                                                  (0, E.jsx)(es.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(mg.Ay, { guild: c, size: mg.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: hp.yW,
                                  children: [(0, E.jsx)(ho.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(h_, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(hC, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: hx(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(hI, { isCancelled: A, subscriptionPeriodEnd: y, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hj, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hv, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function h_(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(hC, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dL.CE)((0, dL.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(hC, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dL.CE)((0, dL.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(hC, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, E.jsx)(tr.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, E.jsx)(es.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, E.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function hI(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dL.CE)((0, dL.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(hC, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-sm/medium", children: i }),
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, E.jsx)(hC, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function hC(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: hp.nM,
        children: [
            (0, E.jsx)(es.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(es.E, { variant: "text-sm/medium", className: hp.u4, children: i }),
        ],
    });
}
function hb(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(t_.p, {
        messageType: "warning" === t ? t_.Y.WARNING : t_.Y.ERROR,
        className: hp.Xm,
        children: (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
    });
}
function hy(e) {
    let {
            app: t,
            storeListing: n,
            sku: s,
            subscription: l,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        c = (0, hS.Se)(s),
        { analyticsLocations: m } = (0, nQ.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, hd.C)(t.id),
        x = (0, g.bG)([c5.A], () => c5.A.getParentSKU(n.skuId), [n.skuId]),
        p = S.useMemo(() => {
            var e, t;
            let i;
            return null == x
                ? []
                : ((e = n.id),
                  (t = T.subscriptions),
                  (i = new Set(x.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, T, x]),
        f = 0 !== p.length;
    async function N() {
        try {
            h(!0);
            let { subscription: e } = await (0, dv.QP)(l, m);
            if (null == e) return;
            (0, K.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("76229"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: hh.A.createFromServer(e) });
            });
        } finally {
            h(!1);
        }
    }
    return (0, E.jsxs)("div", {
        className: hp.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: N,
                        loading: A,
                    })
                  : (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: function () {
                            (0, K.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("52266"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, E.jsx)(e, { ...i, application: t, storeListing: n, subscription: l, guild: o });
                            });
                        },
                    }),
            f &&
                null != x &&
                !1 === r &&
                !1 === a &&
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: p,
                            app: t,
                            subscriptionGroup: x,
                            currentListing: n,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function hv(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(hA, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: hp.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: hp.wV,
                        children: [
                            e && (0, E.jsx)(es.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(hA.Toggle, {
                                className: hp.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(hl.FY, { header: n, icon: (0, hT.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hj(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: hp.Ji,
                children: (0, E.jsx)(s7.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(dN.y, { type: dN.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: hp.Ji,
                  children: (0, E.jsxs)(he.$T, {
                      color: he.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: hp.Ji,
                  children: (0, E.jsx)(s7.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AB.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hO = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hR = i(38405);
let hL = (0, g.UT)(c4.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = c4.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hR.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gD.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hD = i(240248),
    hP = i(237218),
    hG = i(242653);
function hM(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hG.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(es.E, {
                    className: hG.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(hc.t, { color: er.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, E.jsx)(el.a, { color: er.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = S.useState(null),
        c = S.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    S.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, i]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, E.jsxs)("div", {
            children: [
                (0, E.jsx)(es.E, {
                    ...n,
                    className: hG.Qs,
                    lineClamp: s ? void 0 : i,
                    ref: d,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var hU = i(386447);
function hV(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, hP.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hL(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dL._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(hs, {
              className: e6()(hU.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hU.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(hr._, { src: a.href, imageClassName: hU.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eP.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(es.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, hD.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hU.h_,
                          children: (0, E.jsx)(hM, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hU.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(hl.FY, { header: i, icon: (0, hT.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hk = i(185438),
    hw = i(711171);
function hF(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, hu.A)(t, 100),
        u = (0, hS.PJ)(r.flags),
        d = u ? ha.R : ho.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([ec.A], () => (u && null != m ? ec.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([c5.A], () => {
            if (null != a) return c5.A.get(a);
        }, [a]),
        S = hx(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hw.wx,
                children: [
                    null != o && (0, E.jsx)(hr._, { src: o.href, imageClassName: hw.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eP.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hw.p4,
                                children: [
                                    (0, E.jsxs)(eP.D, {
                                        variant: "heading-md/normal",
                                        className: hw.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(es.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hw.vP,
                                                    children: [
                                                        (0, E.jsx)(mg.Ay, { guild: A, size: mg.Ay.Sizes.SMOL }),
                                                        (0, E.jsx)(eP.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: j.intl.format(j.t["7ZD8p1"], {
                                                                guildName: A.name,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(hA, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hw._B,
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, E.jsx)(es.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, E.jsx)(hA.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hw.x0,
                children: [
                    (0, E.jsx)(hV, {
                        storeListing: n,
                        className: hw.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hw.cJ,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, E.jsx)(es.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["OQk+jr"], { endDate: S }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, E.jsx)(
                                  hV,
                                  {
                                      storeListing: e,
                                      cta: (0, E.jsx)(es.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, E.jsx)(hB, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hB(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hk.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hV, {
        storeListing: t,
        cta: (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hz extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(he.$T, {
                  color: he.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      j.intl.format(j.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function hX(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hO.HOME }),
        { route: l } = n;
    function r() {
        s({ route: hO.HOME });
    }
    let a = (e) => {
            s({ route: hO.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hf.LOADING })),
                (0, ht._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hf.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hf.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, hi.E)(),
        c = d !== hi.mJ.LOADED;
    switch (l) {
        case hO.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hz,
                        {
                            subscription: e,
                            children: (0, E.jsx)(hN, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hf.LOADING : (o[e.id] ?? hf.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hO.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hF, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hY = i(131352);
function hH(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [d7.A],
            () =>
                d7.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hK, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hY.A,
                    children: (0, E.jsx)(hX, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            s(
                                (0, E.jsx)(hK, {
                                    title: e,
                                    onBack: () => {
                                        t(), s(void 0);
                                    },
                                }),
                            );
                        },
                    }),
                }),
            ],
        })
    );
}
function hK(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hY.D,
        children: [
            (0, E.jsx)(lJ.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(A9.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eP.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hW = i(881489),
    hZ = i(366999),
    hq = i(466919),
    hQ = i(406252);
function hJ(e) {
    let t,
        i,
        {
            showChargingUpState: n,
            rowValueText: s,
            endsAt: l,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = j.intl.string(hq.default["/S02sx"])), (i = j.intl.string(hq.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === s$.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e6()({ [hQ.Hs]: n, [hQ.mT]: !n }),
        d = e6()({ [hQ.CQ]: n, [hQ.ZM]: !n }),
        c = e6()({ [hQ.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hQ.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hQ.Nv,
                children: [
                    (0, E.jsx)(eP.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(es.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hQ.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(es.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let h$ = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, up.kX)(t),
        r = l.length > 0,
        a = (0, hZ.Ay)(t.endsAt, hZ.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e6()(i, hQ.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hQ.J_,
                    children: (0, E.jsxs)("div", {
                        className: hQ.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hQ.xt,
                                children: (0, E.jsx)(uc.t, { size: "md", color: "white", className: hQ.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hQ.pt,
                                children: (0, E.jsx)(eP.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(es.E, {
                                className: hQ.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hJ, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: n,
                    hasPremiumGroup: s,
                }),
            ],
        }),
    });
};
var h0 = i(868942);
function h1(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([c4.A], () => [c4.A.get(n), null != l ? c4.A.get(l.planId) : null]);
    if (null == o || up.Ay.getInterval(n).intervalType !== s$.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = up.Ay.getDisplayName(n);
    if (a) t = j.intl.string(hq.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === U.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, up._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hQ.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e6()({
                    [hQ.sr]: o.skuId === s$.pe.TIER_0,
                    [hQ.lP]: o.skuId === s$.pe.TIER_1,
                    [hQ.eb]: o.skuId === s$.pe.TIER_2,
                }),
                children: (0, E.jsx)(uc.t, { size: "md", color: "currentColor", className: hQ.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hQ.pt,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eP.D, {
                            className: hQ.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(es.E, {
                className: hQ.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let h2 = function (e) {
    let { className: t, entitlements: i } = e,
        n = eZ()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cW.A], () => cW.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([d7.A], () => d7.A.getPremiumSubscription()),
        r = (0, g.bG)([d7.A], () => null == d7.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === s$.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([id.default], () => id.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e6()(t, hQ.xF, hQ.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        h1,
                        {
                            planId: e,
                            count: n[e].length,
                            userPremiumSubscription: l,
                            user: o,
                            unconsumedFractionalPremiumUnits: s,
                            hasPremiumGroup: u,
                        },
                        e,
                    ),
                ),
            }),
            a &&
                r &&
                (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(es.E, {
                            className: hQ.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(h0.i, {}),
                    ],
                }),
        ],
    });
};
var h3 = i(830991);
function h6(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nQ.Ay)(),
        [l] = (0, AF.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e1.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? h3.r : h3.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, up.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = c4.A.get(o);
    tY()(null != u, "Missing plan");
    let d = (0, dL.$g)(l.total, l.currency);
    return (
        u.interval === s$.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: U.X7G.TERMS,
                  paidURL: U.X7G.PAID_TERMS,
                  privacyUrl: U.X7G.PRIVACY,
              }))
            : u.interval === s$.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: U.X7G.TERMS,
                            paidURL: U.X7G.PAID_TERMS,
                            privacyUrl: U.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: U.X7G.TERMS,
                            paidURL: U.X7G.PAID_TERMS,
                            privacyUrl: U.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, E.jsx)(es.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function h4(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(h6, { subscription: t, withOverheadSeparator: i });
}
var h5 = i(37397),
    h7 = i(533792);
let h8 = { [nB.nR]: "role_subscriptions_panel", [nB.PZ]: "application_subscriptions_panel" };
function h9() {
    return (0, E.jsx)(eb.Z, {
        className: h7.wb,
        type: eb.Z.Types.CUSTOM,
        children: (0, E.jsxs)(rl.A, {
            align: rl.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: h7.pV }),
                (0, E.jsx)("span", { className: h7.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function Ee(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Ab._)(e, t));
}
function Et() {
    let e = (0, g.bG)([cW.A], () => cW.A.getForApplication(s$.tv), [], Ee);
    return (
        S.useEffect(() => {
            (0, gr.LM)(s$.tv);
        }, []),
        (0, E.jsx)(iC.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && up.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(h2, { className: h7.fX, entitlements: e })
                    : (0, E.jsx)(h9, {}),
        })
    );
}
function Ei() {
    return (0, E.jsx)("hr", { className: h7.hr });
}
let En = function () {
        var e;
        let t = (0, g.bG)([d7.A], () => d7.A.getPremiumTypeSubscription()),
            i = (0, Ay.A)({ subscriptionFilter: (e) => h5.Hy.has(e.status) }),
            n = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [d5.A],
                () => (null != t && null != t.paymentSourceId ? d5.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([d7.A], () => d7.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dR.A], () => dR.A.isBusy),
            o = (0, gP.Y)(),
            d = Az.A.useField("subsection");
        S.useEffect(() => {
            (0, r$._)(null != d ? h8[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([d7.A], () => d7.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [d7.A],
                () =>
                    Object.values(d7.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            A = (0, gU.A)({ forceFetch: !0 }),
            h = (0, hW.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== s$.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                su.h.wait(() => {
                    (0, gD.zS)(), dv.hP(), (0, gL.CD)(), dv.$o();
                }),
                function () {
                    Az.A.resetState();
                }
            ),
            [],
        ),
        eF.A.enabled)
            ? (0, E.jsx)(dp.A, {})
            : r && o
              ? d === nB.nR
                  ? (0, E.jsx)(A4, { onGoBack: () => Az.A.setState({ subsection: null }) })
                  : d === nB.PZ
                    ? (0, E.jsx)(hH, { onGoBack: () => Az.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: h7.kL,
                          children: (0, E.jsxs)("div", {
                              className: h7.Qs,
                              children: [
                                  s ? (0, E.jsx)(h5.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(h5.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(h5.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eP.D, {
                                                  variant: "heading-md/bold",
                                                  className: h7.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  className: h7.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: tI.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(h$, {
                                                  className: h7.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(Et, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Ei, {}),
                                              (0, E.jsx)(AO, {
                                                  count: m,
                                                  onClickManageSubscription: () => Az.A.setState({ subsection: nB.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(Ei, {}),
                                              (0, E.jsx)(A8, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      Az.A.setState({ subsection: nB.PZ }),
                                                          G.default.track(
                                                              U.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(Ei, {}),
                                  null != t ? (0, E.jsx)(h4, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e6()(h7.kL, h7.Lq), children: (0, E.jsx)(dN.y, {}) });
    },
    Es = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(En, {}),
    }),
    El = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [Es],
    }),
    Er = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [El] }),
    Ea = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: AI.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, AC.l)() ? (0, E.jsx)(l6.E, { size: "xs", color: er.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [Er],
    }),
    Eo = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gO, A_, Ea, g_, co],
    });
var Eu = i(540999),
    Ed = i(306471),
    Ec = i(964355),
    Eg = i(172272);
let Em = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isAxeEnabled),
        setValue: (e) => (0, ob.x)({ axeEnabled: e }),
    }),
    EA = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ob.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Eh = i(276086),
    EE = i(354328);
let ES = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, EE.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Eh.L)("highlight_mana_components", e);
        },
    }),
    ET = (0, a.zD)(u.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, EE.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Eh.L)("highlight_mana_text", e);
        },
    }),
    Ex = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, EE.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Eh.L)("highlight_void_toggleables", e);
        },
    }),
    Ep = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([oy.default], () => oy.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Eg.YR,
        markers: Array.from({ length: Eg.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Eg.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Eg.Or.getState().setHorizontalSpacing(e);
        },
    }),
    Ef = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ob.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EN = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([oy.default], () => oy.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Eg.YR,
        markers: Array.from({ length: Eg.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Eg.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Eg.Or.getState().setVerticalSpacing(e);
        },
    }),
    E_ = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [EA, Ef, Ep, EN, ES, ET, Ex, Em],
    }),
    EI = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var EC = i(173936),
    Eb = i(260598),
    Ey = i(148810),
    Ev = i(380610),
    Ej = i(986238),
    EO = i(281161),
    ER = i(663894);
let EL = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    ED = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function EP(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class EG extends S.Component {
    handleRemoveBuildOverride = () => {
        this.props.onBuildOverrideRemoved(this.props.project);
    };
    handleOverrideIdChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { id: e });
    };
    handleOverrideTypeChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { type: e, id: "" });
    };
    render() {
        let { project: e, overrideType: t, overrideId: i, disabled: n, error: s } = this.props;
        return (0, E.jsxs)(rl.A, {
            direction: rl.A.Direction.VERTICAL,
            className: e6()(EO.oS, ik.SX, ER.N, EO.nM),
            children: [
                (0, E.jsx)(iL.A, {
                    className: e6()(EO.lL, { [EO.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(rl.A, {
                    className: ik.QB,
                    children: [
                        (0, E.jsx)(rl.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(lQ.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: ED,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(rl.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(rt.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(rl.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, E.jsx)(es.E, {
                                className: EO.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(es.E, {
                            variant: "text-sm/normal",
                            className: EO.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, E.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class EM extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ev.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eZ().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eZ().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eZ().without(EL, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: i } = this.state,
            n = { ...(null != i ? i[e] : {}), ...t },
            s = { ...this.state.buildOverrides, [e]: n };
        this.setState({ buildOverrides: s });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        delete t[e], this.setState({ buildOverrides: t });
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: eZ().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, Ey.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: eZ().cloneDeep(e),
                errors: {},
                didSave: !0,
                saving: !1,
            });
        } else if (400 === t.status) {
            let e = t.body;
            this.setState({ errors: e, saving: !1, didSave: !1 });
        } else this.setState({ saving: !1, didSave: !1 });
    };
    handleLinkGeneration = () => {
        let { buildOverrides: e } = this.state;
        (0, K.openModal)((t) => (0, E.jsx)(EU, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, E.jsx)(iI.pp, {
            theme: iy.A.theme,
            className: e6()(ik.eT, ik.SX),
            children: (0, E.jsx)(iI.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eZ().map(e, (e, n) =>
                  (0, E.jsx)(
                      EG,
                      {
                          project: n,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: i[n],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      n,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, E.jsx)(eG.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, E.jsx)(tr.m, {
                  text: "Generate Public Link",
                  children: (0, E.jsx)(lJ.K, {
                      variant: "secondary",
                      icon: EC.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(eG.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: EP(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: i, buildOverrides: n } = this.state;
        e = t
            ? (0, E.jsx)(dN.y, { className: ik.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                EP(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(es.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(iC.n, {
            children: (0, E.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(lQ.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !s,
                    }),
                    l,
                    e,
                    (0, E.jsxs)(oc.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class EU extends S.Component {
    state = {
        ttlSeconds: 3600,
        releaseChannel: "all",
        userIds: new Set(),
        userIdEntry: "",
        userIdEntryError: null,
        allowedVersions: [],
        allowedVersionEntry: "",
        allowedVersionEntryError: null,
        publicLink: " ",
        statusText: null,
        status: 0,
        allowLoggedOut: !1,
    };
    setUserEntryError = (e) => {
        this.setState({ userIdEntryError: e });
    };
    setStatusMessage = (() => {
        var e = this;
        return function (t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: i });
        };
    })();
    handleUserIDEntry = (e) => {
        if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
        let t = new Set(e.split(/[,\s]+/).filter(Boolean));
        this.setState({ userIdEntry: e, userIds: t });
    };
    setAllowedVersionError = (e) => {
        this.setState({ allowedVersionEntryError: e });
    };
    handleAllowedVersionEntry = (e) => {
        this.setState({ allowedVersionEntry: e });
    };
    handleAllowedVersionEnter = (e) => {
        e.key === iP.dh.ENTER && this.handleAddAllowedVersion();
    };
    handleAddAllowedVersion = () => {
        let { allowedVersions: e, allowedVersionEntry: t } = this.state;
        return 0 === (t = t.trim()).length
            ? this.setAllowedVersionError("Enter a valid version number!")
            : e.indexOf(t) >= 0
              ? this.setAllowedVersionError("You already added that version!")
              : void this.setState({
                    allowedVersions: [...e, t],
                    allowedVersionEntry: "",
                    allowedVersionEntryError: "",
                });
    };
    handleRemoveAllowedVersion = (e) => {
        let { allowedVersions: t } = this.state;
        (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
    };
    handleAllowLoggedOut = (e) => {
        this.setState({ allowLoggedOut: e });
    };
    handleExpirationChange = (e) => {
        this.setState({ ttlSeconds: e });
    };
    handleReleaseChannelChange = (e) => {
        this.setState({ releaseChannel: e });
    };
    handleExperiments = (e) => {
        if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
        try {
            let t = JSON.parse(e);
            for (let e in t) {
                if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
                    return void this.setState({ experimentsError: `${e} is an invalid experiment name` });
                if ("number" != typeof t[e])
                    return void this.setState({ experimentsError: `${e} has an invalid bucket override` });
            }
        } catch (e) {
            this.setState({ experimentsError: `Unable to parse experiments ${e.message}` });
            return;
        }
        this.setState({ experiments: e, experimentsError: void 0 });
    };
    generatePayload = () => ({
        overrides: this.props.buildOverrides,
        meta: {
            release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
            ttl_seconds: this.state.ttlSeconds,
            user_ids: Array.from(this.state.userIds),
            allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
            allow_logged_out: this.state.allowLoggedOut,
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, Ey.SB)(e);
        !1 !== t.error
            ? this.setStatusMessage(JSON.stringify(t.error), 0)
            : (this.setState({ publicLink: t.url.toString() }),
              0 === e.meta.user_ids.length &&
                  this.setStatusMessage(
                      "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                      1,
                  ));
    };
    isMobile() {
        return EP(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: i,
                userIdEntryError: n,
                allowedVersions: s,
                allowedVersionEntry: l,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = Ej.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, E.jsx)(lQ.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ej.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(lQ.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ej.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(Q.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(rt.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: aj.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(lQ.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: c,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === s.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, E.jsx)(Eb.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(Eb.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, E.jsx)(J.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, E.jsx)("div", {});
        let i = t_.Y.INFO;
        switch (t) {
            case 0:
                i = t_.Y.ERROR;
                break;
            case 1:
                i = t_.Y.WARNING;
        }
        return (0, E.jsx)(t_.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, E.jsx)(re.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(cD.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let EV = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: EM });
var Ek = i(256311),
    Ew = i(883600);
let EF = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([Ew.A], () => Ew.A.overrideId());
        async function t(e) {
            let t = Ew.A.getChangelog(e, "en-US");
            return null != t ? t : ((await Ek.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, E.jsx)(E2, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ek.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var EB = i(506774);
let Ez = new Date("2018-01-01"),
    EX = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === dP.default.fromTimestamp(Ez.getTime()),
        onClick: () => (EB.w.set("lastChangeLogDate", Ez), L.pK.updateSetting(dP.default.fromTimestamp(Ez.getTime()))),
    }),
    EY = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([oy.default], () => oy.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [oy.default],
                () => oy.default.disableAppCollectionsCache || oy.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ob.x)({ disableAppCollectionsCache: e }),
    }),
    EH = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isForcedCanary),
        setValue: (e) => {
            (0, ob.x)({ canary: e });
        },
    }),
    EK = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.sourceMapsEnabled),
        setValue: (e) => (0, ob.x)({ sourceMapsEnabled: e }),
    }),
    EW = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ob.x)({ onlyShowPreviewAppCollections: e }),
    });
var EZ = i(10094),
    Eq = i(683760);
let EQ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: s$.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: s$.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: s$.PremiumTypes.TIER_2 },
    ],
    EJ = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => EQ,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([Eq.A], () => {
                let e = Eq.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, EZ.O)(null, void 0)
                : null === e
                  ? (0, EZ.O)(void 0, void 0)
                  : (0, EZ.O)(0 === e ? null : e, void 0);
        },
    });
var E$ = i(246605),
    E0 = i(274184);
let E1 = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([E0.Ay], () => E0.Ay.getSurveyOverride());
        return (0, E.jsx)(E2, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => E$.xr(e),
            fetchOverride: (e) => E$.BC(e, !0) ?? null,
        });
    },
});
function E2(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(s7.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(rt.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            c(0), l(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            c(1),
                                r(e).then((t) => {
                                    c(null == t ? 2 : 3), null != t && l(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let E3 = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [EJ, E1, EF, EX, EH, EI, EW, EY, EK, EV],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    E6 = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ob.x)({ logAnalyticsEvents: e }),
    }),
    E4 = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ob.x)({ logGatewayEvents: e }),
    }),
    E5 = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.preventPopoutClose),
        setValue: (e) => (0, ob.x)({ preventPopoutClose: e }),
    }),
    E7 = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.logKeyboardMismatches),
        setValue: (e) => (0, ob.x)({ logKeyboardMismatches: e }),
    }),
    E8 = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ob.x)({ logOverlayEvents: e }),
    }),
    E9 = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isLoggingQuestEvents),
        setValue: (e) => (0, ob.x)({ logQuestEvents: e }),
    }),
    Se = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([oy.default], () => oy.default.isTracingRequests),
        setValue: (e) => (0, ob.x)({ trace: e }),
    }),
    St = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [E4, E8, Se, E6, E7, E5, E9] }),
    Si = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [E3, St, E_],
    }),
    Sn = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ed.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: i,
                    isLoggingOverlayEvents: n,
                    isLoggingAnalyticsEvents: s,
                    isTracingRequests: l,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: c,
                    isStaff: m,
                } = (0, g.cf)([oy.default, Eu.A, id.default], () => ({
                    layoutDebuggingEnabled: oy.default.layoutDebuggingEnabled,
                    isDeveloper: Eu.A.isDeveloper,
                    isLoggingGatewayEvents: oy.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: oy.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: oy.default.isLoggingAnalyticsEvents,
                    isTracingRequests: oy.default.isTracingRequests,
                    isForcedCanary: oy.default.isForcedCanary,
                    isSourceMapsEnabled: oy.default.sourceMapsEnabled,
                    isAxeEnabled: oy.default.isAxeEnabled,
                    preventPopoutClose: oy.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: oy.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: oy.default.disableAppCollectionsCache,
                    isStaff: id.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, Eg.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = Eg.Or.getState(),
                x = L.HZ.useSetting();
            return t
                ? [
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              L.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, ob.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, ob.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, ob.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, ob.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, ob.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, ob.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, ob.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, ob.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, E.jsxs)(
                          ei.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, eH.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, ob.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, E.jsx)(
                                      ei.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, ob.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(
                                                  ei.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(Ec.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: Eg.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, E.jsx)(
                                                  ei.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(Ec.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: Eg.YR,
                                                              onChange: (e) => T(e),
                                                              "aria-label": "Vertical Spacing",
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                          }),
                                                  },
                                                  "vertical-spacing",
                                              ),
                                          ],
                                      }),
                              ],
                          },
                          "design-tools",
                      ),
                      m
                          ? (0, E.jsx)(
                                ei.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aw() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Si],
    });
var Ss = i(127062),
    Sl = i(25044),
    Sr = i(80703),
    Sa = i(691540),
    So = i(857250),
    Su = i(97483),
    Sd = i(100392),
    Sc = i(102609),
    Sg = i(271478),
    Sm = i(736056),
    SA = i(386976),
    Sh = i(257433),
    SE = i(32523),
    SS = i(96919),
    ST = i(688151),
    Sx = i(142862);
function Sp(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([c3.default], () => c3.default.getId()),
        c = (0, g.bG)([c3.default], () => {
            let e = c3.default.getInstallationForTracking();
            return null == e ? null : (0, Sr.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, Sh.iN)(t, m),
        h = (0, Sh.Fm)(t, m),
        T = (0, g.yK)([Sm.A], () =>
            eZ()
                .sortBy(Sm.A.getRecentExposures(ST.Vh.USER, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        x = S.useCallback(
            (e) => {
                (0, c8.C)((0, Sd.yA)(i), () => {
                    (0, Sa.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: Su.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        p = (0, E.jsx)(e4.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, E.jsxs)(es.E, {
                variant: "text-md/medium",
                className: Sx.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsxs)(Q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    c8.p5 &&
                                        (0, E.jsx)(en.D, { onClick: x, children: (0, E.jsx)(EC.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: Sx.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: Sx.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === Sc.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? ST.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: Sx.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(Sg.g, {
                        label: t.system === Sc.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: Sx.h_,
                    children:
                        null == h
                            ? (0, E.jsx)(es.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, E.jsxs)("div", {
                          children: [
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sx.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sx.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sx.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sx.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "text-lg/medium",
                                  className: Sx.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(es.E, {
                                  variant: "code",
                                  className: Sx.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: Sx.id,
                          children: (0, E.jsx)(ea.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eM.c, { className: Sx.yF }),
            ],
        })
    );
}
function Sf(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([Sm.A], () => Sm.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([Sm.A], () =>
            eZ()
                .sortBy(Sm.A.getRecentExposures(ST.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([ec.A, Sm.A], () => {
            let e = eZ().sortBy(ec.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = Sm.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? ST.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eZ()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        A = (0, E.jsx)(en.D, {
            onClick: o,
            children: (0, E.jsxs)(es.E, {
                variant: "text-md/medium",
                className: Sx.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(es.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: Sx.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: Sx.Os,
              children: [
                  A,
                  (0, E.jsx)(Sg.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: Sx.h_,
                      children:
                          null == u
                              ? (0, E.jsx)(es.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  r
                      ? (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sx.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(es.E, { variant: "code", className: Sx.AS, children: c }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sx.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Sx.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sx.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Sx.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-lg/medium",
                                    className: Sx.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "code",
                                    className: Sx.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: Sx.id,
                            children: (0, E.jsx)(ea.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eM.c, { className: Sx.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: Sx.Os, children: A });
}
let SN = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, SA.op)(),
                { experiments: i, overridesInfo: n } = (0, SE.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([c3.default], () => {
                    let e = c3.default.getInstallationForTracking();
                    return null == e ? null : (0, Sr.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, SS.oC)((0, SS.R3)((0, SS.Fm)(s), l), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(Q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(es.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                c8.p5 &&
                                    (0, E.jsx)(ea.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, c8.C)(r, () => {
                                                (0, Sa.P0)((0, So.o)("Installation ID copied!", Su.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)($.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sf : Sp;
                              return (0, E.jsx)(
                                  t,
                                  {
                                      experiment: e.experiment,
                                      experimentId: e.id,
                                      overrideInfo: l[e.id],
                                      defaultOpen: null != l[e.id],
                                  },
                                  e.id,
                              );
                          })
                        : (0, E.jsx)("div", {
                              className: Sx.p$,
                              children: (0, E.jsx)(eP.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    S_ = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [SN] }),
    SI = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [S_] }),
    SC = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ss.c,
        useMenu: Sl.A,
        buildLayout: () => [SI],
    }),
    Sb = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => Eu.A.isDeveloper,
        buildLayout: () => [SC, Sn],
    });
var Sy = i(712440),
    Sv = i(370997);
let Sj = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Sv.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var SO = i(187322),
    SR = i(77468),
    SL = i(289498),
    SD = i(573648),
    SP = i(874490),
    SG = i(370480),
    SM = i(968309);
let SU = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var SV = i(169869),
    Sk = i(235693),
    Sw = i(757036),
    SF = i(555837),
    SB = i(733110),
    Sz = i(241524),
    SX = i(346017),
    SY = i(631368),
    SH = i(968671),
    SK = i(212739),
    SW = i(30370),
    SZ = i(933287),
    Sq = i(594387),
    SQ = i(651439);
function SJ() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, SY.$)()),
            (t = (0, SH.GM)("connectedAccountsBannerFooter")),
            (n = (0, SK.O)()),
            (l = null != (s = (0, g.bG)([SW.A], () => SW.A.getAccount(null, U.fg2.XBOX))) && !s.revoked),
            e === SY.C.NONE || n
                ? { variant: SY.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === SY.C.NO_ACCESS && !l }),
        { analyticsLocations: o } = (0, nQ.Ay)(e1.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, SX.yW)(o),
        d = (0, Sz.A)("(max-width: 485px)");
    if (r === SY.C.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case SY.C.HAS_ACCESS:
            (m = j.intl.string(SZ.default["7PdsMK"])),
                (A = (0, E.jsx)(eG.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(SZ.default.CubeLC),
                    onClick: () => {
                        (0, K.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("52283"), i.e("13088")]).then(
                                i.bind(i, 347171),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case SY.C.NO_ACCESS:
            (m = j.intl.string(SZ.default.NwkRTZ)),
                (A = (0, E.jsx)(sK.A, {
                    defaultTextOverride: j.intl.string(SZ.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: s$.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(nQ.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: SQ.bV,
                children: [
                    (0, E.jsx)(eP.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(uc.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(is.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: SQ.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: SQ.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: SQ.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: SQ.$h }),
                                        (0, E.jsx)("div", { className: SQ.Rv }),
                                        (0, E.jsx)("div", { className: SQ.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: SQ.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: SQ.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: SQ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(es.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: SQ.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: SQ.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: SQ.yF }),
                                            (0, E.jsxs)("div", {
                                                className: SQ.sQ,
                                                children: [
                                                    (0, E.jsx)(cd.o, {
                                                        size: d ? "md" : "sm",
                                                        color: er.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(es.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(Sq.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(SX.Hx.CONNECT),
                                                                    (0, SM.A)({
                                                                        platformType: U.fg2.XBOX,
                                                                        location: "Connected Accounts Banner",
                                                                    });
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var S$ = i(201718),
    S0 = i(321078),
    S1 = i(672130),
    S2 = i(379848),
    S3 = i(567910);
function S6(e) {
    let { markAsDismissed: t } = e;
    return (
        S.useEffect(() => t(iA.i.UNKNOWN), [t]),
        (0, E.jsx)(sm.Lp, { className: S3.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function S4(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, E.jsxs)("div", {
        className: S3.kL,
        children: [
            n,
            (0, E.jsxs)("div", {
                className: S3.FS,
                children: [
                    (0, E.jsxs)("div", {
                        className: S3.TK,
                        children: [
                            (0, E.jsx)(S2.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === s ? (0, E.jsx)(S6, { markAsDismissed: i }) : null;
                                },
                            }),
                            (0, E.jsx)(es.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, E.jsx)(es.E, { variant: "text-xs/normal", children: i }),
                ],
            }),
            (0, E.jsx)(eG.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
        ],
    });
}
function S5() {
    let e = tI.A.getArticleURL(U.MVz.PS_CONNECTION);
    return (0, E.jsx)(S4, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eU.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, SM.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let S7 = "/assets/9df988a227916145.png";
function S8() {
    return (0, E.jsx)(S4, {
        title: j.intl.string(Sq.default["9cLtDI"]),
        body: j.intl.format(Sq.default["D+kUbg"], { learnMoreLink: tI.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, E.jsx)("img", { src: S7, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eU.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, SM.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function S9() {
    let e = tI.A.getArticleURL(U.MVz.XBOX_CONNECTION);
    return (0, E.jsx)(S4, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, E.jsx)("img", { src: S7, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eU.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, SM.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Te = i(783419),
    Tt = i(534952),
    Ti = i(452832),
    Tn = i(113463);
function Ts(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [SW.A],
            () => ({
                isJoining: SW.A.isJoining(i.id),
                joinErrorMessage:
                    "" === SW.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : SW.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== SW.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([ec.A], () => ec.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eG.$, {
                size: "sm",
                onClick: function () {
                    SR.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Tn.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Tn.XX,
                    children: [
                        (0, E.jsx)(mg.Ay, { size: mg.Ay.Sizes.SMALL, guild: i.guild, className: Tn.$f }),
                        (0, E.jsxs)("div", {
                            className: Tn.Vn,
                            children: [
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(ds.Anchor, {
                                    href: SD.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, E.jsx)(es.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: i.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                l &&
                    (0, E.jsx)(es.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Tn.R,
                        children: s,
                    }),
            ],
        })
    );
}
function Tl(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, SF.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Sw.L)(s$.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === U.fg2.XBOX && l
        ? (0, E.jsx)(S8, {})
        : s.twoWayLink
          ? null
          : s.type === U.fg2.XBOX
            ? (0, E.jsx)(S9, {})
            : s.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(S5, {})
              : null;
}
function Tr(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = S.useState(u.friendSync),
        [A, h] = S.useState(u.visibility),
        [T, x] = S.useState(u.metadataVisibility),
        [p, f] = S.useState(u.showActivity),
        [N, _] = S.useState(null),
        [I, C] = S.useState(null),
        [b, y] = S.useState(!1),
        [v, O] = S.useState([]),
        R = (0, SP.ML)(u.type),
        L = SD.A.get(R);
    S.useEffect(() => {
        m(u.friendSync), h(u.visibility), x(u.metadataVisibility), f(u.showActivity);
    }, [u]);
    let D = { inProgressVisibility: N, inProgressMetadataVisibility: I },
        P = S.useRef(D);
    return (
        S.useEffect(() => {
            P.current = D;
        }),
        S.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = P.current;
            null != e && (h(e), SR.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), SR.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Tn.FI,
            children: [
                ((t = SD.A.get(u.type)),
                (i = SD.A.get(R)),
                (n = "1" === (u.metadata ?? {})[Te.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === U.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(tr.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(th.A, {
                            color: er.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(ta.U, { size: "xs", color: er.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: Tn.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Tn.gj,
                            src: (0, gZ.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Tn.$p,
                                    children: [
                                        (0, E.jsx)(es.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Tn.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: Tn.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(es.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Tn.Au,
                                    children: i.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(Ti.default.Glhokn, { platformName: i.name })
                                        : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(en.D, {
                            className: Tn.uH,
                            onClick: function () {
                                let e = SD.A.get(u.type);
                                (0, K.openModal)((t) =>
                                    (0, E.jsx)(re.Modal, {
                                        title: j.intl.formatToPlainString(j.t.U5x12f, { name: e.name }),
                                        subtitle: j.intl.format(j.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: j.intl.string(j.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: j.intl.string(j.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            SU.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sE.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gQ.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(Tl, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, SG.An)(t[Te.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, SV.xE)(t, Tn.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, SV.dy)(t, Tn.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, SV.ED)(t, Tn.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, SV.ub)(t, Tn.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, SV.gZ)(t, Tn.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, SV.HU)(t, Tn.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                es.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Tn.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = v.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== SD.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sm.Lp, { className: Tn.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    es.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Tn.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: tI.A.getArticleURL(U.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = j.intl.string(j.t["LVh3/5"]));
                    return (
                        s && (l = j.intl.string(j.t.i4jeWR)),
                        i.push(
                            (0, E.jsx)(
                                "div",
                                {
                                    className: Tn.jy,
                                    children: (0, E.jsx)(eG.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: s,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  y(!0),
                                                      SR.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              v.push(e.id), O(v), y(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, E.jsx)("div", { className: Tn.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (l = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), SR.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)(J.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), SR.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                SD.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)(J.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, SM.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), SR.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Tn.HZ,
                    children: [
                        (0, E.jsx)(J.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, SM.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), SR.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, E.jsx)(eM.c, {});
                })(),
                u.revoked
                    ? (0, E.jsx)(t_.p, {
                          messageType: t_.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, SM.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(s7.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(Ts, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(Sk.A, { partner: u.type }),
            ],
        })
    );
}
function Ta(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Tn.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = nn.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Tn.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e6()(Tn.gj, Tn.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Tn.$p,
                                          children: (0, E.jsx)(es.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Tn.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(es.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Tn.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(en.D, {
                                  className: Tn.uH,
                                  onClick: () =>
                                      (0, Sv.d1)(i, t.scopes, () => {
                                          Sy.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gQ.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Tn.HZ,
                      children: (0, E.jsx)(J.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              S$.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function To(e) {
    let t = SD.A.get(e);
    (0, SM.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function Tu() {
    let e = (0, SP.gn)(),
        t = (0, ti.A)((0, Tt.Gl)("NewConnectionsList"));
    return (0, E.jsxs)("div", {
        className: Tn.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        S1.A,
                        { application: e, className: Tn.__invalid_accountButton, innerClassName: Tn.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, E.jsx)(
                        SL.A,
                        { type: e.type, className: Tn.__invalid_accountButton, innerClassName: Tn.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(tr.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e6()(Tn.ej, Tn.__invalid_accountButton),
                    children: (0, E.jsx)(SO.vN, {
                        children: (0, E.jsx)("button", {
                            className: e6()(Tn.R8, Tn.U$),
                            type: "button",
                            onClick: function () {
                                su.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: To });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, E.jsx)(tL._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": j.intl.string(j.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function Td(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => SD.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(dN.y, { type: dN.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(iI.pp, {
                    theme: r,
                    className: u ? Tn.p$ : void 0,
                    children: (0, E.jsx)(iI.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, E.jsxs)(E.Fragment, {
                    children: [
                        u &&
                            (0, E.jsx)(eP.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: s.length + d.length }),
                            }),
                        s.map((e, t) =>
                            (0, E.jsx)(
                                Ta,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                Tr,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            SR.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Tn.V, children: t })
    );
}
let Tc = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(Tu, {}),
            });
        },
        useSearchTerms: () => [
            j.intl.string(j.t.ZeDrUf),
            j.intl.string(j.t.Zhcj9X),
            j.intl.string(j.t.QqTz8b),
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    }),
    Tg = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
                t = (0, g.bG)([SW.A], () => SW.A.isFetching()),
                i = (0, g.bG)([SW.A], () => SW.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([SB.default], () => ({
                    authorizedAppsFetchState: SB.default.getFetchState(),
                    authorizedApps: SB.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, S0.A)(id.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cy.Ay)(),
                o = (0, g.bG)([d8.default], () => d8.default.locale);
            return (S.useEffect(() => {
                n === SB.FetchState.NOT_FETCHED && Sy.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(SJ, {}),
                          (0, E.jsx)(Td, {
                              fetching: t || l || (r.length > 0 && n !== SB.FetchState.FETCHED),
                              accounts: i,
                              appIdentities: r,
                              authorizedApps: s,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            SR.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var Tm = i(206828);
function TA() {
    let e = (0, g.bG)([SW.A], () => SW.A.getAccounts()),
        t = S.useMemo(
            () =>
                SD.A.filter(
                    (e) => e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") === !0,
                ).filter((t) => e.some((e) => e.type === t.type)),
            [e],
        ),
        [i, n] = S.useState(0),
        [s, l] = S.useState(t),
        r = t !== s;
    r && (l(t), n(0));
    let a = S.useMemo(() => t[i], [t, i]),
        o = (0, ti.h)(a?.migrationData?.replacedBy),
        { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, Tm.RD)(o),
        m =
            a?.type === U.fg2.RIOT_GAMES || a?.type === U.fg2.LEAGUE_OF_LEGENDS
                ? j.intl.string(Ti.default["1S6oAo"])
                : o?.name,
        A = null != a && c,
        E = A && !d && u && o?.connectionEntrypointUrl != null;
    return (
        r || !A || E || n((e) => e + 1),
        S.useMemo(
            () =>
                E
                    ? {
                          type: h.lT.INLINE_NOTICE,
                          noticeType: "info",
                          useText: () =>
                              j.intl.format(Ti.default.wUXupS, {
                                  connectionName: a.name,
                                  applicationName: m,
                                  connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                  helpCenterLink:
                                      a.migrationData?.helpCenterLinkIntlMessage != null
                                          ? j.intl.string(a.migrationData.helpCenterLinkIntlMessage)
                                          : void 0,
                              }),
                      }
                    : null,
            [a, m, o, E],
        )
    );
}
let Th = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: TA,
        buildLayout: () => [Tc, Tg],
    }),
    TE = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Sj],
        initialize: () => (
            Sy.A.fetch(),
            () => {
                Sv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    TS = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dp.L,
        buildLayout: () => [Th, TE],
    }),
    TT = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: EC.q,
        buildLayout: () => [TS],
    }),
    Tx = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i2, eR, ix, TT],
    });
var Tp = i(631670),
    Tf = i(619499),
    TN = i(836602),
    T_ = i(591179),
    TI = i(854627),
    TC = i(975732),
    Tb = i(761508),
    Ty = i(83257),
    Tv = i(159001),
    Tj = i(344346),
    TO = i(919395),
    TR = i(699217);
function TL(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eP.D, { variant: "text-md/medium", className: TR.Vf, children: t }), i],
    });
}
function TD(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, E.jsx)("div", {
        className: e6()(TR.UA, i),
        children: (0, E.jsxs)("div", {
            className: e6()(TR.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e6()(TR.Fp, a && TR.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(TL, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(TL, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: TR.oB, children: t }),
            ],
        }),
    });
}
var TP = i(986687),
    TG = i(101058),
    TM = i(321191),
    TU = i(696451),
    TV = i(271078);
function Tk() {
    return (0, E.jsxs)("div", {
        className: TV.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TV.Sl }),
            (0, E.jsx)(eP.D, {
                className: TV.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(es.E, { className: TV.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TV.h8,
                children: (0, E.jsx)(eG.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, s8.pX)(U.BVt.GUILD_DISCOVERY), (0, sW.default)();
                    },
                }),
            }),
        ],
    });
}
var Tw = i(81400),
    TF = i(252732),
    TB = i(355622),
    Tz = i(408018),
    TX = i(138617),
    TY = i(594943);
let TH = (0, sQ.Ld)(),
    TK = (0, ia.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    TW = (0, sQ.Ld)();
function TZ(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = S.useState(s ?? r),
        [d, c] = S.useState((0, Tz.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, Tz.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, Tz.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(uA.A, {
            title: t,
            titleId: TH,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(TX.Ay, {
                    "aria-describedby": TW,
                    "aria-labelledby": TH,
                    className: TY.i,
                    innerClassName: TY.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: TK,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eH.USER_SETTINGS_MODAL_KEY,
                    type: TB.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        m.current = !1;
                    },
                    onFocus: () => {
                        m.current = !0;
                    },
                    focused: m.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, E.jsx)(eo.A, { id: TW, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var Tq = i(930861),
    TQ = i(821956),
    TJ = i(562819),
    T$ = i(84540),
    T0 = i(70956);
function T1(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nQ.Ay)(),
        o = (0, TO.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, TO.CP)(i?.id),
        c = r ? Tq.wL : ou.$n;
    return (0, E.jsx)(uA.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: T0.NC,
            children: [
                (0, E.jsx)(c, {
                    size: ou.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TJ.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e6()({ [T0.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T0.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TQ.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, T$.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T2 = i(339984),
    T3 = i(831653);
let T6 = [{ name: "gif", extensions: ["gif"] }];
function T4(e) {
    let {
            showRemoveAvatarButton: t,
            errors: i,
            onAvatarChange: n,
            sectionTitle: s,
            changeAvatarButtonText: l,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, nQ.Ay)(),
        m = c ? Tq.wL : ou.$n,
        A = S.useCallback(() => {
            (0, TF.XD)({
                uploadType: T2.HL.AVATAR,
                analyticsSource: g,
                filters: u ? T6 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(uA.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: T3.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e6()({ [T3.yj]: c }),
                    size: ou.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T3.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? j.intl.string(j.t.TDjKDm) : j.intl.string(j.t.twB3fz),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var T5 = i(248778),
    T7 = i(479183);
function T8(e) {
    let { user: t, guildId: i, className: n } = e,
        s = up.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nQ.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, TO.B0)(t, i),
        d = (0, T5.ux)("DisplayNameStylesSection"),
        [c, g] = (0, eV.kn)(d ? [eU.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eU.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, S.useCallback)(() => {
            g(iA.i.TAKE_ACTION),
                G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, nJ.L)({ analyticsLocations: l, guildId: i });
        }, [l, i, g]),
        h = (0, S.useCallback)(() => {
            (0, T$.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        T = (0, S.useCallback)(() => {
            (0, T$.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        x = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(uA.A, {
        title: j.intl.string(n$.default["86GtGH"]),
        titleBadge: m ? (0, E.jsx)(sm.Lp, { text: j.intl.string(j.t.y2b7CA), className: T7.A }) : void 0,
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: T7.N,
            children: [
                (0, E.jsx)(eG.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(n$.default.vJqrIg),
                    onClick: A,
                }),
                null == i &&
                    null != x &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(n$.default.ymq8WQ),
                        onClick: h,
                    }),
                null != i &&
                    null != x &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(n$.default["j/KRxc"]),
                        onClick: T,
                    }),
            ],
        }),
    });
}
var T9 = i(637193),
    xe = i(946801);
function xt(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nQ.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, TO.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, T9.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, T$.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(uA.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: xe.u,
            children: [
                (0, E.jsx)(eG.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, E.jsx)(eG.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var xi = i(617255);
function xn(e) {
    let {
            showRemoveBannerButton: t,
            errors: i,
            onBannerChange: n,
            guildId: s,
            className: l,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, nQ.Ay)(),
        g = d ? Tq.wL : ou.$n;
    return (0, E.jsx)(uA.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: xi.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e6()({ [xi.yj]: d }),
                    size: ou.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TF.XD)({ uploadType: T2.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xi.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? j.intl.string(j.t.jHlJNS) : j.intl.string(j.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var xs = i(617061),
    xl = i(869438);
function xr(e) {
    let {
            user: t,
            guild: i,
            initialSelectedEffect: n,
            className: s,
            sectionTitle: l,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, nQ.Ay)(),
        d = up.Ay.canUsePremiumProfileCustomization(t),
        c = (0, TO.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, TO.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: s$.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? Tq.wL : ou.$n;
    return (0, E.jsx)(uA.A, {
        forcedDivider: r,
        borderType: cK.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: xl.NC,
            children: [
                (0, E.jsx)(A, {
                    size: ou.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xs.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e6()({ [xl.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xl.DT,
                        children: (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, T$.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xa = i(13875),
    xo = i(515727),
    xu = i(566935);
function xd(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nQ.Ay)(),
        l = (0, xa.sk)("ProfileFrameSection"),
        r = (0, TO.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, TO.Tu)(i?.id),
        [u, d] = (0, eV.kn)([eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eU.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(uA.A, {
              showBorder: c,
              borderType: c ? cK.i.NEW_UPSELL : cK.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sm.Lp, { text: j.intl.string(j.t.y2b7CA), className: xu.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: xu.NC,
                  children: [
                      (0, E.jsx)(eG.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, xo.w)({ analyticsLocations: s, guild: i }), d(iA.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xu.DT,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, T$.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xc = i(602853),
    xg = i(654107),
    xm = i(999291),
    xA = i(101928),
    xh = i(317097),
    xE = i(508274),
    xS = i(919796),
    xT = i(426399);
function xx(e) {
    let {
            onChange: t,
            onClose: i,
            color: n,
            suggestedColors: s,
            disabled: l,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = S.useRef(null),
        c = (0, xc.r)(er.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = er.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TF.sN)(n),
        A = (0, xh.Hl)(n),
        h = A === c ? g : A,
        T = m ? er.A.unsafe_rawColors.WHITE.css : er.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xS.A)(a),
        p = (0, xS.A)(o),
        [f, N] = S.useState((0, d_.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, d_.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(ee.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(xE.VN, {
                    ...e,
                    value: n,
                    onChange: t,
                    suggestedColors: s,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: i,
            children: (e) => {
                let { onClick: t, ...i } = e;
                return (0, E.jsxs)("div", {
                    ref: d,
                    className: e6()(xT.oP, { [xT.r9]: l }),
                    children: [
                        (0, E.jsx)(en.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: xT.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(ux.R, {
                                size: "custom",
                                className: xT.BW,
                                width: 14,
                                height: 14,
                                color: T,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var xp = i(811160);
function xf(e) {
    let {
            user: t,
            pendingAvatarSrc: i,
            pendingColors: n,
            onThemeColorsChange: s,
            preventDisabled: l,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        c = (0, xm.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, xA.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = up.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, xc.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xg.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, E.jsx)(uA.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !A && !l,
              className: e6()(xp.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, E.jsxs)("div", {
                  className: xp.hd,
                  children: [
                      (0, E.jsx)("div", {
                          className: xp.YX,
                          children: (0, E.jsx)(xx, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xp.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, E.jsx)("div", {
                          className: xp.YX,
                          children: (0, E.jsx)(xx, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, E.jsx)(es.E, {
                                  className: xp.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xp.WA,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function xN(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sQ.GV)();
    return (0, E.jsx)(uA.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(rt.k, {
            "aria-labelledby": o,
            placeholder: l ?? j.intl.string(j.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var x_ = i(427262),
    xI = i(684732),
    xC = i(576705),
    xb = i(522334);
function xy(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xC.A], () => xC.A.can(U.xBc.CHANGE_NICKNAME, r) || xC.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Sw.L)(s$.PremiumTypes.TIER_2);
    return (0, E.jsxs)(uA.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(rt.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, T$.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(T8, { user: l, guildId: r.id, className: xb.F }),
        ],
    });
}
var xv = i(816453);
let xj = "/assets/b25da78aa7949feb.png";
function xO(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, cy.Ay)(),
        { analyticsLocations: l } = (0, nQ.Ay)(e1.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: s$.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xv.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xv.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xv.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xj;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xj;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xv._9,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(cH.A, {
                              size: ou.$n.Sizes.LARGE,
                              color: ou.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: up.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: s$.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xR = i(784075);
function xL() {
    let e = (0, g.bG)([id.default], () => {
            let e = id.default.getCurrentUser();
            return tY()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Sw.L)(s$.PremiumTypes.TIER_2),
        i = (0, g.bG)([TN.A, ec.A], () => ec.A.getGuild(TN.A.selectedGuildId));
    tY()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([TN.A], () => ({ ...TN.A.getPendingChanges(i.id), errors: TN.A.getErrors(i.id) })),
        d = (0, TG.V7)({ userId: e.id, image: n }),
        c = (0, Tw.EC)(i.id),
        m = (0, g.bG)([TU.Ay], () => (null == i.id ? null : TU.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([TM.A], () => TM.A.getGuildMemberProfile(e.id, i.id)),
        h = up.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TO.z5)(n, m?.avatar),
        T = (0, TO.Ac)(l, A?.banner),
        x = (0, xI.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xR.Q,
        children: [
            (0, E.jsx)(
                xy,
                {
                    errors: u?.nick ?? c?.nick,
                    username: x_.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                xN,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, T$.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xO, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        T4,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uc.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xR.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != i)
                                    return (0, TF.rM)(e, m?.avatar, (e) => (0, T$.p)({ guildId: i.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        T1,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uc.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xR.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(T8, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        xt,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(tr.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(uc.t, { size: "md", color: "currentColor", className: xR.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        xr,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uc.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xR.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, E.jsx)(
                        xd,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uc.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xR.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        xn,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != i)
                                    return (0, TF.rM)(e, A?.banner, (e) => (0, T$.p)({ guildId: i.id, banner: e }));
                            },
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(xf, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, T$.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        TZ,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(tr.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(uc.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xR.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, T$.p)({ guildId: i.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: p,
                            disabled: !h,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var xD = i(379550);
function xP(e) {
    (0, K.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("41509"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xG(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nQ.Ay)(e1.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([id.default], () => {
            let e = id.default.getCurrentUser();
            return tY()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([TU.Ay], () => (null != t ? TU.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([TM.A], () => !TM.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([TN.A], () => TN.A.getPendingChanges(t?.id)),
        c = (0, TG.V7)({ userId: s.id, image: o }),
        m = (0, TO.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, TO.B0)(s, t?.id);
    return (S.useEffect(() => () => su.h.wait(Tv.IM), []), a)
        ? (0, E.jsx)(dp.A, {})
        : r
          ? (0, E.jsxs)(nQ.f5, {
                value: n,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: tI.A.getArticleURL(U.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(um.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(TD, {
                                      profilePreviewTitle: (0, E.jsx)(eP.D, {
                                          variant: "heading-md/medium",
                                          className: xD.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(TP.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: up.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xP,
                                          containerClassName: xD.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Tj.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xD.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xL, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Tk, {}),
                ],
            })
          : (0, E.jsx)(dN.y, {});
}
var xM = i(903209),
    xU = i(834297);
function xV(e) {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xU.r, children: [i, (0, E.jsx)("div", { children: t })] });
}
var xk = i(269115),
    xw = i(823092),
    xF = i(662388),
    xB = i(379197),
    xz = i(488430),
    xX = i(457421),
    xY = i(940622),
    xH = i(25176),
    xK = i(341206);
let xW = function () {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nQ.Ay)(e1.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xY.mb)(xH.RN.UPSELL_BANNER)),
        (t = (0, xY.mb)(xH.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xX.A], () => xX.A.getMarketingBySurface(xB.R.EDIT_PROFILE_SETTINGS))),
        (n = S.useMemo(
            () =>
                null != i
                    ? i
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: j.intl.string(j.t.QZVVBh),
                          body: j.intl.string(j.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [i],
        )),
        S.useMemo(
            () => ({ ...n, type: xz.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xw.L_)();
    return (
        S.useEffect(() => {
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: s$.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xK.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xK.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xK.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xK.Em,
                    children: [
                        (0, E.jsx)(eP.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xK.DD,
                            children: o,
                        }),
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(eG.$, {
                    onClick: function () {
                        m(() =>
                            (0, xF.Cz)({
                                analyticsLocations: s,
                                analyticsSource: e1.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: j.intl.string(j.t.fYfGgK),
                }),
            ],
        })
    );
};
var xZ = i(451909),
    xq = i(202639),
    xQ = i(400669),
    xJ = i(835071),
    x$ = i(422936),
    x0 = i(234419),
    x1 = i(590180),
    x2 = i(898461),
    x3 = i(207803),
    x6 = i(508425),
    x4 = i(559949);
let x5 = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: x4.x.CHICLE, effectId: x6.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: x4.x.PIXELIFY, effectId: x6.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: x4.x.NEO_CASTEL, effectId: x6.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: x4.x.CHERRY_BOMB, effectId: x6.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: x4.x.MUSEO_MODERNO, effectId: x6.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    x7 = Object.keys(x5);
function x8(e) {
    let t = null == e ? x7 : x7.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var x9 = i(764336),
    pe = i(461893);
function pt(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
        s = (0, x9.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = x5[t];
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: pe.kL,
        children: [
            (0, E.jsx)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: pe.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(en.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: pe.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pe.L_ }),
                    (0, E.jsx)(es.E, {
                        className: pe._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var pi = i(410516),
    pn = i(811611),
    ps = i(515718),
    pl = i(507553);
function pr(e, t) {
    let i = pl.A.useField("scrollPosition"),
        n = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), pl.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var pa = i(844222),
    po = i(4542);
function pu(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(pa.C),
        {
            pendingAvatar: s,
            pendingBanner: l,
            pendingAvatarDecoration: r,
            pendingProfileEffect: a,
            pendingDisplayNameStyles: o,
            pendingThemeColors: u,
            pendingPronouns: d,
            pendingBio: c,
            tryItOutThemeColors: m,
            tryItOutAvatar: A,
            tryItOutBanner: h,
            tryItOutAvatarDecoration: T,
            tryItOutDisplayNameStyles: x,
        } = (0, g.cf)([TN.A], () => {
            let e = TN.A.getPendingChanges(),
                t = TN.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, TG.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(TP.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : po.WX,
        containerClassName: po.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pd = i(530702);
function pc(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = up.Ay.isPremium(t),
        l = up.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([TN.A], () => {
            let e = TN.A.getPendingChanges(),
                t = TN.A.getErrors(),
                i = TN.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
                [t, i] = (0, S.useState)(x8()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = x5[t];
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([x1.A], () => {
                    let e = x1.A.getProduct(l);
                    return (0, x2.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, x3.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = x8(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    pr(A, nB._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nQ.Ay)(e1.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function x(e) {
        e &&
            (d?.startsWith("https:") === !0
                ? fetch(d)
                      .then((e) => e.blob())
                      .then((e) => (0, ps.We)(e))
                      .then((e) => {
                          (0, T$.p)({ avatar: u, themeColors: o, banner: e });
                      })
                      .catch(() => {
                          (0, T$.p)({ avatar: u, themeColors: o });
                      })
                : null != d
                  ? (0, T$.p)({ avatar: u, themeColors: o, banner: d })
                  : (0, T$.p)({ avatar: u, themeColors: o }),
            G.default.track(U.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: s$.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, x0.V)()?.subscription_trial?.sku_id === s$.pe.TIER_2,
        f = (0, x$.O)(),
        N = (0, pi.U9)(f, s$.pe.TIER_2);
    return n
        ? (0, E.jsx)(nQ.f5, {
              value: h,
              children: (0, E.jsxs)(cK.A, {
                  ref: A,
                  className: pd.MT,
                  type: cK.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(TD, {
                          stickyPreview: !1,
                          layoutClassName: pd.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(uc.t, { size: "md", color: "currentColor", className: pd.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(pt, { preset: c, onShuffle: m }), (0, E.jsx)(pu, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eP.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(es.E, {
                                              className: pd.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(xf, {
                                      className: pd.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TG.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: x3.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(xn, {
                                      className: pd.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: x3.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(T4, {
                                          className: pd.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: x3.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(T8, { user: t, className: pd.fz }),
                                  !p &&
                                      (0, E.jsx)(es.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xq.d, {
                              onSubscribeModalClose: x,
                              className: pd.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xJ.K)({ onSubscribeFinish: x });
                                  },
                              }),
                              button: s
                                  ? j.intl.string(j.t.AfRWI8)
                                  : N
                                    ? j.intl.formatToPlainString(j.t.bkQ4bH, { percent: f?.discount.amount })
                                    : j.intl.string(j.t.pj0XBN),
                              position: "inline",
                          }),
                      p &&
                          (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsx)("div", { className: pd.BU }),
                                  (0, E.jsx)(pn.Ay, {
                                      type: s$.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: s$.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pg = i(814390),
    pm = i(909536),
    pA = i(843282),
    ph = i(145497),
    pE = i(685073),
    pS = i(534400),
    pT = i(581781),
    px = i(743981),
    pp = i(217510);
let pf = (0, sQ.Ld)(),
    pN = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([id.default], () => (0, pE.Zo)(id.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : l,
            a = S.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, E.jsx)(pT.A, {
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [s],
            ),
            u = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, E.jsx)(ph.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [s],
            ),
            d = S.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, E.jsx)(pS.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: px.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
            ),
            c = S.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, E.jsx)(E.Fragment, { children: o(t) });
                },
                [o],
            ),
            m = S.useCallback(
                (e) => {
                    n?.(e);
                },
                [n],
            ),
            A = S.useCallback((e) => e === r, [r]),
            h = S.useCallback((e) => e, []),
            T = S.useCallback(() => {
                n?.(null);
            }, [n]),
            x = S.useRef(null);
        return (
            pr(x, nB._F.GUILD_TAG),
            (0, E.jsxs)(uA.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pf,
                ref: x,
                children: [
                    (0, E.jsx)(es.E, {
                        className: pp.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(pA.Pw, {
                        className: pp.Lt,
                        optionClassName: pp.S0,
                        isSelected: A,
                        options: a,
                        select: m,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: h,
                        clear: T,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var p_ = i(318785),
    pI = i(992526),
    pC = i(470739);
let pb = function () {
    return (0, pI.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, E.jsx)(uA.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, E.jsx)(eG.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pC._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var py = i(182817);
let pv = (0, sQ.Ld)();
function pj(e) {
    let t = (0, Sw.L)(s$.PremiumTypes.TIER_2);
    return (0, E.jsxs)(uA.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pv,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(rt.k, {
                    "aria-labelledby": pv,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(T8, { user: e.user, className: py.F }),
        ],
    });
}
var pO = i(273151);
function pR(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)("div", {
        className: pO.u,
        children: (0, E.jsx)(J.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === n ? (0, Tp._e)() : (0, T$.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function pL(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, xc.r)(er.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xg.rh)(l, r, !1),
        o = (0, xh.LX)(a[0]);
    return (0, E.jsx)(uA.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(xx, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pD = i(518477);
let pP = function () {
    let e = (0, g.bG)([c3.default], () => c3.default.getId());
    return (0, E.jsx)(uA.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eG.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, TC.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e1.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pD.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pG = i(577997);
function pM() {
    let e = (0, g.bG)([id.default], () => {
            let e = id.default.getCurrentUser();
            return tY()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([TM.A], () => TM.A.getUserProfile(e.id)),
        {
            pendingAvatar: i,
            pendingGlobalName: n,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: r,
            pendingAccentColor: a,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: u,
            pendingPrimaryGuildId: d,
            errors: c,
        } = (0, g.cf)([TN.A], () => {
            let e = TN.A.getPendingChanges(),
                t = TN.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, TG.V7)({ userId: e.id, image: i }),
        A = (0, Tw.EC)(),
        h = up.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TO.z5)(i, e.avatar),
        T = (0, TO.Ac)(s, t?.banner),
        x = (0, xm.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, p_.b)();
    return (0, E.jsxs)("div", {
        className: pG.Q,
        children: [
            (0, E.jsx)(pj, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, T$.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                xN,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, T$.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pP, {}),
            (0, E.jsx)(
                T4,
                {
                    onAvatarChange: (e) => {
                        (0, T$.p)({ avatar: e }), (0, TO.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(T1, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(xt, { user: e }),
            (0, E.jsx)(xr, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(xd, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              xn,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, T$.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(xf, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, T$.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      pL,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, T$.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                TZ,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, T$.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(pN, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, T$.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pR, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, E.jsx)(pb, {}, "badges"),
        ],
    });
}
function pU() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("41509"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                source: {
                    page: U.liQ.USER_SETTINGS,
                    section: U.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: U.ZSU.BUTTON_CTA,
                    type: U.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var pV = i(157723);
function pk() {
    let e = (0, g.bG)([id.default], () => {
            let e = id.default.getCurrentUser();
            return tY()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eF.A], () => eF.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, g.cf)([TN.A], () => ({ ...TN.A.getPendingChanges(), showNotice: TN.A.showNotice() })),
        a = (0, TG.V7)({ userId: e.id, image: n }),
        o = (0, TO.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, pg.A)() && null != i ? xZ.Ay.parse(void 0, i).content : i,
        d = up.Ay.canUsePremiumProfileCustomization(e),
        c = (0, pm.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nQ.Ay)(e1.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => su.h.wait(Tp.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dp.A, {})
        : (0, E.jsxs)(nQ.f5, {
              value: m,
              children: [
                  (0, E.jsx)(xW, {}),
                  (0, E.jsx)(TD, {
                      profilePreview: (0, E.jsx)(TP.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pU,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pV.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Tj.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pV.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(pM, {}),
                  }),
                  (0, E.jsx)(xk.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(pc, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(xq.d, {
                          className: pV.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xJ.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xQ.l, { size: "md", location: e1.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pV.Xl,
                              children: (0, E.jsx)(eG.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: uc.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pw = i(625494),
    pF = i(521078);
let pB = { [nB.Eq.USER_PROFILE]: "main_profile_tab", [nB.Eq.GUILD]: "guild_profile_tab" },
    pz = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([ru.A, eg.Ay, TN.A], () => {
                    let e = TN.A.selectedGuildId ?? ru.A.getGuildId();
                    return null == e || TN._.has(e) ? eg.Ay.getFlattenedGuildIds().find((e) => !TN._.has(e)) : e;
                }),
                t = (0, g.bG)([ec.A], () => ec.A.getGuild(e)),
                i = (0, g.bG)([TN.A], () => TN.A.showNotice()),
                n = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
                s = pl.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, r$._)(pB[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xM.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xV, {
                    children: (0, E.jsxs)(cb.F, {
                        component: (0, E.jsx)(eo.A, {
                            children: (0, E.jsx)(eP.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(Tb.V, {
                                className: pF.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, r0.fO)({ duration: 300, intensity: Ty.n3 }),
                                                pw._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nB.Eq.GUILD && null != t && (0, Tv.V2)(t.id),
                                            pl.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        Tb.V.Item,
                                        {
                                            className: pF.YU,
                                            id: nB.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nB.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        Tb.V.Item,
                                        {
                                            className: e6()(pF.YU, pF.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nB.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nB.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nB.Eq.GUILD
                                ? (0, E.jsx)(xG, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, r0.fO)({ duration: 300, intensity: Ty.n3 }),
                                                  pw._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Tv.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pk, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            j.intl.string(j.t["vi7f+q"]),
            j.intl.string(j.t.Ip9nBS),
            j.intl.string(j.t["2p07FR"]),
            j.intl.string(j.t["7vhiqk"]),
            j.intl.string(j.t.kPHroX),
            j.intl.string(j.t.lqaIxI),
            j.intl.string(j.t.Vgdusv),
            j.intl.string(j.t.DMeO2X),
        ],
    }),
    pX = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pz] });
var pY = i(938706);
function pH() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TI.A)({ userId: e?.id, size: i7._3.SIZE_48 });
    return null == e
        ? null
        : (0, E.jsxs)("div", {
              className: pY.a5,
              children: [
                  (0, E.jsx)(i5.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: i7._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, E.jsxs)("div", {
                      className: pY.FS,
                      children: [
                          (0, E.jsx)(es.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, E.jsxs)("div", {
                              className: pY.Fk,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, E.jsx)(ux.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let pK = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [TN.A], element: Tf.A },
        initialize: () => () =>
            su.h.wait(() => {
                (0, Tp.F7)();
            }),
        buildLayout: () => [pX],
    }),
    pW = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pq,
        StronglyDiscouragedCustomComponent: pH,
        usePredicate: () => !(0, T_.X)("user_settings_sidebar"),
        buildLayout: () => [pK],
    }),
    pZ = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pq,
        StronglyDiscouragedCustomComponent: pH,
        usePredicate: () => (0, T_.X)("user_settings_sidebar"),
        onClick: () => {
            let e = c3.default.getId();
            (0, TC.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pq() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TI.A)({ userId: e?.id, size: i7._3.SIZE_48 });
    return (0, E.jsx)(i5.eu, { src: t, avatarDecoration: i, size: i7._3.SIZE_20, "aria-hidden": !0 });
}
let pQ = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pW, pZ] });
var pJ = i(98207),
    p$ = (i(204925), i(818348));
let p0 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, K.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("69757"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? p$.tE : null, onCloseCallback: t },
    );
};
var p1 = i(940856),
    p2 = i(36149),
    p3 = i(207560);
function p6(e) {
    let t = (0, p3.fk)(),
        i = (0, p2.b8)(),
        n = (0, p2.yM)(),
        s = (0, p2.Y2)();
    if (!t) return !1;
    let l = !i || n;
    switch (e) {
        case "verify":
            return l;
        case "edit":
            return !l && s;
        case "info":
            return !l && !s;
        default:
            return !1;
    }
}
var p4 = i(516761);
function p5() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(es.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(p4.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(tI.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let p7 = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => p6("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p5 }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    p8 = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => p6("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(eG.$, {
                                onClick: p$.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var p9 = i(379257),
    fe = i(847599);
function ft() {
    return (0, p2.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let fi = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => p6("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: ft }),
        useLabel: function () {
            return (0, p2.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.ACCOUNT_AGE_GROUP }),
    }),
    fn = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([id.default], () => id.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => p0(),
    });
function fs(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fl(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fr(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: o }) : o,
            (0, E.jsx)(ea.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function fa() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(fr, {
              text: e,
              censor: fl,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let fo = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([id.default], () => id.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fa }),
    useLabel: function () {
        return null == (0, g.bG)([id.default], () => id.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, g.bG)([id.default], () => id.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, K.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("11322"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var fu = i(557722),
    fd = i(53516);
function fc() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(es.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(Q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(fr, {
                  text: t,
                  censor: fs,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fg = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([id.default], () => id.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([id.default], () => id.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fc }),
    useLabel: function () {
        return null == (0, g.bG)([id.default], () => id.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == id.default.getCurrentUser()?.phone
            ? (0, K.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("49747"),
                          i.e("72712"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: fu.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fd.V },
              )
            : (0, K.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("55682"), i.e("40933")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function fm() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fA() {
    let e = (0, Tw.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([id.default], () => id.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(es.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(tr.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(l6.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: er.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fh = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fA }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (fm() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fm,
        onClick: function () {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("80032"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    fE = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, g.bG)([id.default], () => null != id.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, g.bG)([id.default], () => id.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => j.intl.string(j.t.tuGzBT),
                            useText: () => j.intl.string(j.t.NAzplE),
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, p1.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => p0() },
                    };
        },
        buildLayout: () => [fh, fn, fo, fg, fi, p7, p8],
    });
var fS = i(398177);
let fT = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, K.openModal)((e) => (0, E.jsx)(fS.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fx = i(200921);
let fp = [];
function ff() {
    fp = [];
}
class fN extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fp;
    }
}
let f_ = new fN(su.h, {
    LOGOUT: ff,
    LOGIN_SUCCESS: ff,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fp = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fp],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fp = i;
    },
});
function fI() {
    let e = (0, g.cf)([f_], () => f_.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = c3.default.getAuthSessionIdHash();
        if (null != n) {
            let e = t.findIndex((e) => e.id_hash === n);
            e >= 0 && (i = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            { currentSession: i, otherSessions: t }
        );
    }, [e]);
}
function fC(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : r7()(e).fromNow();
}
var fb = i(176524),
    fy = i(646270),
    fv = i(738678),
    fj = i(53061);
function fO(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(fb.A, { Icon: t, color: r ? er.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(Q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, E.jsx)(es.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, E.jsx)(es.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, E.jsx)(es.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, E.jsx)(es.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function fR(e) {
    let { session: t, current: i } = e,
        {
            location: n,
            platform: s,
            os: l,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let i = e.client_info?.location ?? e.client_info?.ip,
                n = e.client_info?.platform,
                { text: s, icon: l } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: j.intl.string(j.t.cDHCNY), icon: to.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: fy.u };
                        case "horizon os":
                            return { text: e, icon: fv.G };
                        default:
                            return { text: e, icon: to.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : fC(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fO, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(en.D, {
                className: fj.X,
                onClick: () => (0, fx.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gQ.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fL(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(Q.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eP.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(Q.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fD = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fI();
            return null == e
                ? (0, E.jsx)(dN.y, {})
                : (0, E.jsx)(fL, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fR, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fP = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fI();
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eG.$, {
                    onClick: () => (0, fx.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fI();
            return e.length > 0;
        },
    });
var fG = i(766928);
function fM() {
    return (0, E.jsx)(fO, {
        icon: fG.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eH.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e1.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fU = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fI(),
                t = (0, g.bG)([id.default], () => id.default.getCurrentUser());
            return (0, E.jsxs)(fL, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fR, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fM, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fI(),
                t = (0, g.bG)([id.default], () => id.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fV = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fx.GY)();
        },
        buildLayout: () => [fD, fU, fP],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fk = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dp.L,
        buildLayout: () => [fV],
    }),
    fw = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fk],
        initialize: () => {
            (0, fx.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = fI(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fF = i(464477);
function fB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(U.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function fz() {
    return (0, dn.bG)([id.default], () => {
        let e = id.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fX =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fY() {
    let e = (0, dn.bG)([id.default], () => id.default.getCurrentUser()?.verified);
    return fF.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fH() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, dn.bG)([ec.A, xC.A, id.default], () =>
        id.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : ec.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xC.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fK = i(466034);
let fW = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fH(!0),
        useDisabled: () => null !== fH(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([c3.default], () => c3.default.hasTOTPEnabled()),
                t = fY() === fX.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, sA.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pJ.A.disable(),
            }),
    }),
    fZ = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([c3.default], () => c3.default.hasTOTPEnabled()),
                t = fY() === fX.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fK.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fY()) {
                case fX.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fX.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fX.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fW],
    });
var fq = i(670492),
    fQ = i(32880),
    fJ = i(663417),
    f$ = i(658675),
    f0 = i(900686);
function f1() {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pJ.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, K.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("12536"), i.e("96179")]).then(
                                        i.bind(i, 518142),
                                    );
                                    return (i) => (0, E.jsx)(e, { ...i, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: j.intl.string(j.t.PsQmzU),
                actionText: j.intl.string(j.t.ajkYcF),
            });
    });
}
var f2 = i(808658);
function f3(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function f6() {
    let e = fq.A.getVerificationKey();
    try {
        await pJ.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Sa.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: Su.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function f4(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = f3(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(f$.P, { checked: i }), (0, E.jsx)(es.E, { variant: "text-md/normal", children: n })],
        });
    return c8.p5
        ? (0, E.jsx)(en.D, {
              tag: "li",
              className: e6()(f2.aY, f2.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, c8.C)(n), s?.current?.focus());
              },
              onClick: function () {
                  (0, c8.C)(n),
                      (0, Sa.P0)({ message: j.intl.string(j.t.mGZ66D), type: Su.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: f2.aY, children: l });
}
let f5 = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fq.A], () => fq.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fz,
        buildLayout: () => [f7],
    }),
    f7 = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fq.A], () => fq.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${f3(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eG.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: f1 })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: f2.E5,
                              children: e.map((e) => (0, E.jsx)(f4, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(oc.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(f0.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eG.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fQ.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eG.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fJ.f,
                                      onClick: f6,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    f8 = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = S.useState(!1),
                i = (0, g.bG)([id.default], () => id.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, E.jsx)(ea.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, g.bG)([id.default], () => id.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pJ.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    f9 = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([id.default], () => fB(id.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([id.default], () => null != fB(id.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: Ne,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fY(),
                t = fz(),
                i = (0, g.bG)([c3.default], () => c3.default.hasTOTPEnabled());
            return e === fX.AVAILABLE && t && i;
        },
        buildLayout: () => [f8],
    });
function Ne() {
    let e = id.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: fu.d.USER_SETTINGS_UPDATE, onAddedPhone: pJ.A.enableSMS }),
                (0, K.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("49747"),
                            i.e("72712"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, E.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: fd.V },
                );
        } else pJ.A.enableSMS();
}
var Nt = i(665671),
    Ni = i(442433),
    Nn = i(917136),
    Ns = i(976910),
    Nl = i(303778);
function Nr(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: Nl.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(es.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fC(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lJ.K, {
                icon: mQ.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Ni.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let Na = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fY() === fX.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: aj.j,
                            onClick: Nt.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fY()) {
                    case fX.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fX.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fX.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [No],
    }),
    No = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([Ns.A], () => ({
                hasFetchedCredentials: Ns.A.hasFetchedCredentials(),
                credentials: Ns.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || Nn.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(Q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(Nr, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(dN.y, {});
        },
    }),
    Nu = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [Na, fZ, f9, f5],
    }),
    Nd = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fz() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [Nu],
    }),
    Nc = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [fT, Nd, fw],
    });
var Ng = i(308645),
    Nm = i(271995),
    NA = i(855267);
let Nh = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: NA.A,
    }),
    NE = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nh] }),
    NS = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [NE],
    }),
    NT = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Nx],
    }),
    Nx = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Nm.$b,
        useSubtitle: Nm.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Nm._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            Ng.Yn();
        },
        buildLayout: () => [NS],
    });
var Np = i(738188),
    Nf = i(834981),
    NN = i(987197),
    N_ = i(822585),
    NI = i(840387),
    NC = i(465558),
    Nb = i(602339);
let Ny = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: NC.p,
        useSearchTerms: () => [
            j.intl.string(Nb.default.RZqaJn),
            j.intl.string(Nb.default.bdBmqy),
            j.intl.string(Nb.default["gVWG+6"]),
            j.intl.string(Nb.default.ahKIJO),
            j.intl.string(Nb.default["8SLtqb"]),
        ],
    }),
    Nv = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Ny] }),
    Nj = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(Nb.default.RZqaJn),
        buildLayout: () => [Nv],
    }),
    NO = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(Nb.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, NN.f)(),
                t = (0, N_.L)()?.daysRemaining ?? null,
                i = e && null != t && t >= 0;
            return S.useMemo(() => (i ? { badgeType: h.Xi.WARNING } : { badgeType: h.Xi.COUNT, useCount: Nf.VT }), [i]);
        },
        buildLayout: () => [NR],
    }),
    NR = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nf.Li)() ? j.intl.string(Nb.default.IcMQUP) : j.intl.string(Nb.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NI.Z)(),
                t = (0, Nf.Li)();
            return e
                ? t
                    ? j.intl.string(Nb.default.G8lHFU)
                    : j.intl.string(Nb.default.uOLNEZ)
                : j.intl.string(Nb.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, NN.f)(),
                t = (0, N_.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: h.Xy.ICON,
                      icon: Np.i,
                      color: er.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: er.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Nj],
    });
var NL = i(425587),
    ND = i(662758);
function NP(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, oo.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function NG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = id.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await NL.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, oo.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : ec.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, oo.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, K.openModal)((t) =>
                  (0, E.jsx)(ND.default, {
                      ...t,
                      handleSubmit: (t) => (0, Tp.U_)(t, e).then(U.tEg, NP),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, sA.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, Tp.U_)("", !0),
              });
}
let NM = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NG(!0),
    }),
    NU = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NG(!1),
        usePredicate: () => {
            let e = (0, g.bG)([id.default], () => id.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NV = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NU, NM] }),
    Nk = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pJ.A.clearBackupCodes(), (0, Tp.Uo)();
            };
        },
        useObscuredNotice: dp.L,
        buildLayout: () => [fE, Nc, NT, NO, NV],
    }),
    Nw = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: ho.n,
        buildLayout: () => [Nk],
    });
var NF = i(323384);
let NB = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Sj],
        initialize: () => (
            Sy.A.fetch(),
            () => {
                Sv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Nz = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dp.L,
        buildLayout: () => [NB],
    }),
    NX = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: NF.k,
        buildLayout: () => [Nz],
    });
var NY = i(176781),
    NH = i(888916),
    NK = i(341923),
    NW = i(572164),
    NZ = i(430795),
    Nq = i(915725),
    NQ = i(16590);
let NJ = (0, a.zD)(u.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(NQ.default.j29uJx),
        useSubtitle: () => j.intl.format(NQ.default.UCzGcQ, { learnMoreLink: tI.A.getArticleURL(U.MVz.CLIPS) }),
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getEnableAutoclipping()),
        setValue: NZ.uL,
        useDisabled: NH.Rt,
    }),
    N$ = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = Nq.Ay.getSettings().clipSignals;
            NZ.PW({ ...t, enableGameSignals: e });
        },
        useDisabled: NH.A0,
    }),
    N0 = (0, a.zY)(u.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NJ, N$], headerSettingKey: NJ.key }),
    N1 = (0, a.zZ)(u.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(NQ.default.XWkJoi),
        useSubtitle: () => j.intl.string(NQ.default["MJ/VsO"]),
        usePredicate: function () {
            let e = (0, NH.As)(),
                t = (0, NK.H)();
            return e && t;
        },
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
        useInlineNotice: () =>
            (0, NW.Et)()
                ? null
                : {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      useText: () => j.intl.string(NQ.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          useText: () => j.intl.string(NQ.default.qGgW4M),
                          onClick: () => NZ.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [N0],
    });
var N2 = i(974293),
    N3 = i(458977),
    N6 = i(486925),
    N4 = i(696016);
let N5 = (() => {
        let e = [N4.wN];
        for (let t = 10; t <= N4.qh; t += 10) e.push(t);
        return e[e.length - 1] !== N4.qh && e.push(N4.qh), e;
    })(),
    N7 = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        usePredicate: () => !(0, N6.M2)(),
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: N4.wN,
        maxValue: N4.qh,
        getInitialValue: () => Nq.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NZ.e6(Math.floor(e)),
        markers: N5,
        onMarkerRender: (e) => `${Math.floor(e)}`,
        useDisabled: NH.Rt,
    }),
    N8 = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, NH.As)(),
                t = (0, N2.aJ)("ClipsAutomaticClippingCategory"),
                i = N3.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return !e && (t || i);
        },
        buildLayout: () => [N7, N$],
    });
var N9 = i(226640);
let _e = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = Nq.Ay.getSettings();
        NZ.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: N9.Fz,
    useDisabled: NH.Rt,
});
var _t = i(372684);
let _i = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getHardwareClassification()) === _t.k9.BELOW_MINIMUM,
        Component: () => (0, E.jsx)(sE.A, { look: sE.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    _n = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipsLength),
        setValue: (e) => NZ.h$(e),
        useOptions: N9.Qu,
        useDisabled: NH.Rt,
    }),
    _s = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sE.A, { look: sE.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    _l = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nq.Ay.getSettings();
            NZ.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: N9.gF,
        useDisabled: NH.Rt,
    }),
    _r = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().remindersEnabled),
        setValue: (e) => NZ.Mt(e),
        useDisabled: NH.Rt,
    }),
    _a = (0, a.zZ)(u.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(NQ.default.TGwzMe),
        usePredicate: NH.As,
        buildLayout: () => [_i, _n, _e, _l, _s, _r],
    }),
    _o = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NZ.YP(e),
    }),
    _u = (0, a.zD)(u.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NZ.Uh(e),
    }),
    _d = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([id.default], () => {
                let e = id.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_o, _u],
    });
var _c = i(417270),
    _g = i(645886);
let _m = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tY()(null != e, "Save clip keybind unset");
            let t = (0, NH.Rt)(),
                i = (0, NH.As)(),
                n = S.useRef(null),
                s = S.useCallback(
                    (t) => {
                        tH.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = S.useCallback(() => {
                    tH.A.setKeybind({ ...e, shortcut: (0, eq.OH)(N4.Ot) });
                }, [e]);
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: _g.g,
                    children: (0, E.jsx)(tK.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: s,
                        trailingActions: i
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NQ.default.bUtubv),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lJ.K, {
                                              icon: lq.F,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NQ.default.bUtubv),
                                              onClick: (e) => {
                                                  e.stopPropagation(), n.current?.toggleRecordMode();
                                              },
                                          }),
                                      }),
                                      (0, E.jsx)(tr.m, {
                                          text: j.intl.string(NQ.default.Kyk1Tp),
                                          position: "top",
                                          ariaHidden: !0,
                                          children: (0, E.jsx)(lJ.K, {
                                              icon: _c.m,
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: t,
                                              "aria-label": j.intl.string(NQ.default.Kyk1Tp),
                                              onClick: (e) => {
                                                  e.stopPropagation(), l();
                                              },
                                          }),
                                      }),
                                  ],
                              })
                            : void 0,
                    }),
                }),
            });
        },
    }),
    _A = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: rp.BW,
        Component: () => {
            let e = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([eB.Ay], () => eB.Ay.getKeybindForAction(U.hCu.SAVE_SCREENSHOT, !0));
            tY()(null != e, "Save clip keybind unset"), tY()(null != t, "Save screenshot keybind unset");
            let i = S.useCallback(
                (e) => {
                    tH.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: _g.g,
                    children: (0, E.jsx)(tK.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _h = (0, a.zD)(u.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, NW.Et)(),
        setValue: (e) => NZ.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    });
var _E = i(915618);
let _S = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: NW.XT,
        setValue: (e) => NZ.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: function () {
            let e = (0, eY.isWindows)(),
                t = (0, _E.A)(l4.Ay),
                i = (0, NH.As)();
            return e && t && !i;
        },
        useDisabled: NH.Rt,
    }),
    _T = (0, a.zY)(u.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_h, _S, _m, _A], headerSettingKey: _h.key }),
    _x = (0, a.zZ)(u.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(NQ.default["dh7g+S"], { learnMoreLink: tI.A.getArticleURL(U.MVz.CLIPS) }),
        usePredicate: NH.As,
        buildLayout: () => [_T],
    }),
    _p = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([Nq.Ay], () => Nq.Ay.getSettings().storageLocation),
                t = (0, NH.Rt)(),
                i = S.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await lI.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NZ.HU(e[0]);
                    } finally {
                        i.current = !1;
                    }
                }
            }
            return (0, E.jsx)(s7.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, E.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, E.jsx)(rt.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, E.jsx)(eG.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: n,
                            text: j.intl.string(NQ.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _f = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        usePredicate: () => !(0, NH.As)(),
        buildLayout: () => [_s, _i, _h, _S, _r, _n, _l, _e, _m, _A, _p],
    }),
    _N = (0, a.zZ)(u.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(NQ.default["0Q+pdZ"]),
        usePredicate: NH.As,
        buildLayout: () => [_p, N7],
    }),
    __ = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: rp.sw,
        buildLayout: () => [_x, N1, _a, _N, _f, N8, _d],
    }),
    _I = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NY.x,
        buildLayout: () => [__],
    }),
    _C = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [Tc], useInlineNotice: TA }),
    _b = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [Tg] }),
    _y = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dp.L,
        buildLayout: () => [_C, _b],
    }),
    _v = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: EC.q,
        buildLayout: () => [_y],
    });
var _j = i(875444);
function _O(e, t) {
    let i = (0, g.bG)([SB.default], () => SB.default.getFetchState()),
        n = (0, g.bG)([SB.default], () =>
            e ? SB.default.getNewestTokensForNonChildrenApplications() : SB.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _j.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || Sy.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== SB.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var _R = i(390646);
function _L(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => dP.default.compare(t.id, e.id)), [t]),
        n = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = e.join(", "),
                n = i.length - 3;
            return n > 0
                ? j.intl.format(j.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, E.jsx)(
                              es.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: j.intl.format(j.t["EADv+4"], { count: n }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [i]),
        s = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = nn.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, E.jsx)(
                        tr.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: _R.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = i.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, E.jsx)(
                            "div",
                            {
                                className: _R.lK,
                                children: (0, E.jsx)(es.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: `+${t}`,
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [i]);
    return (0, E.jsxs)("div", {
        className: _R.wx,
        children: [
            (0, E.jsxs)("div", {
                className: _R.kX,
                children: [
                    (0, E.jsx)(es.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(en.D, {
                        onClick: function () {
                            (0, eH.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _R.bJ,
                        children: [
                            (0, E.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tL._, {
                                size: "xxs",
                                color: er.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _R.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: _R.yF }),
            (0, E.jsx)("div", { className: _R.lJ, children: s }),
        ],
    });
}
function _D() {
    return (0, E.jsxs)("div", {
        className: _R.do,
        children: [
            (0, E.jsx)(es.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _R.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(es.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: tI.A.getArticleURL(U.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _P(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(_L, { applications: t }) : (0, E.jsx)(_D, {});
}
let _G = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _O(!0);
        return e ? (0, E.jsx)(dN.y, {}) : (0, E.jsx)(_P, { applications: t });
    },
});
function _M() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _O(!0, !0);
    return !e && t.length > 0;
}
let _U = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: tI.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: _M,
    }),
    _V = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.JIFnN9), value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: j.intl.string(j.t.rRdsk1), value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                {
                    name: (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                    value: H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
                },
            ];
        },
        useValue: function () {
            let e = L.TA.useSetting();
            return e === H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? H.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: _M,
    }),
    _k = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_G, _U, _V],
    });
var _w = i(687123),
    _F = i(444802),
    _B = i(558001);
i(866945);
var _z = i(835002);
function _X() {
    let e = (0, _F.WX)();
    S.useEffect(() => {
        (0, _B.N)(_z.YA.AGE_CONFIRMATION_NOTICE, _z.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(tI.A.getArticleURL(e), "_blank"), (0, _B.N)(_z.YA.AGE_CONFIRMATION_NOTICE, _z.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _B.N)(_z.YA.AGE_CONFIRMATION_NOTICE, _z.YX.CONFIRM_AGE);
        }, []);
    return (0, E.jsx)(t_.p, {
        messageType: t_.Y.INFO,
        action: (0, E.jsx)(ea.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(ds.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _Y() {
    let e = (0, p3.aX)(_w.t.REACTIVE_CHECK),
        t = (0, p2.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _X };
    }, [e, t]);
}
var _H = i(308528),
    _K = i(171316);
function _W() {
    let e = (0, _K.uM)(),
        t = (0, Nf.vx)(),
        i = S.useCallback(() => {
            (0, sW.default)(),
                _H.A.openPrivateChannel({ recipientIds: t }),
                (0, _B.N)(_z.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _z.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _B.N)(_z.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _z.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(Nb.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(ds.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _Z = i(323073),
    _q = i(386171),
    _Q = i(96607);
let _J = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _q.hT,
        useDisabled: function () {
            let e = (0, _Q.A)() ?? !0,
                t = (0, _Z.sP)(),
                i = (0, p2.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _Z.p5)() && e
                ? p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _$ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _q.tI,
        useDisabled: function () {
            let e = (0, _Q.A)() ?? !0,
                t = (0, _Z.sP)(),
                i = (0, p2.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _Z.p5)() && e
                ? p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _0 = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _1 = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_0] });
i(667532);
var _2 = i(390248),
    _3 = i(632119),
    _6 = i(945276),
    _4 = i(389737),
    _5 = i(566769);
function _7() {
    let e,
        t = (0, _6.A)() ?? !0,
        i = (0, _K.uM)(),
        n = (0, _K.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, dn.cf)([uj.A], () => uj.A.settings.textAndImages?.explicitContentSettings ?? (0, _3.C$)())),
        {
            explicitContentGuilds: (0, _3.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _3.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _3.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _2.hK)() && t.includes(H.TO.SHOW)
            ? p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _3.Jz)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(Nb.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_4.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_5.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_5.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_5.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(Nb.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _8() {
    let e,
        t = (0, _6.A)() ?? !0,
        i = (0, _K.uM)(),
        n = (0, _K.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, dn.cf)([uj.A], () => uj.A.settings.textAndImages?.goreContentSettings ?? (0, _F.T4)())),
        {
            goreContentGuilds: (0, _F.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _F.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _F.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _2.hK)() && t.includes(H.TO.SHOW)
            ? p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _F.qY)(e);
    }
    let o = [
            { value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: H.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: H.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: H.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(Nb.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_4.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_5.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_5.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_5.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(Nb.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _9 = i(464946),
    Ie = i(875162),
    It = i(428275);
let Ii = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _F.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _7,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _8,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_9.h, {
            children: [
                (0, E.jsx)(_9._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: tI.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(Ie.A, { tabs: t, orientation: "vertical", tabsClassName: It.v }),
            ],
        });
    },
    useSearchTerms: () => [
        j.intl.string(j.t["Hj/But"]),
        j.intl.string(j.t["N/oRI+"]),
        j.intl.string(j.t.QVdYsK),
        j.intl.string(j.t["aWD+tu"]),
        j.intl.string(j.t["5mnTa7"]),
        j.intl.string(j.t["K0OWP+"]),
    ],
});
var In = i(639555),
    Is = i(617641),
    Il = i(546140),
    Ir = i(406935),
    Ia = i(594061);
let Io = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: tI.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: Il.L,
    setValue: function (e) {
        return Ia.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = Ir._t.create({ value: e });
            },
            Ia.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, Is.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, In.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _6.A)() ?? !0;
        return e && !i && !t;
    },
});
var Iu = i(809505),
    Id = i(923457),
    Ic = i(750714);
let Ig = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: tI.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
                n = (0, p3.yv)(Id.p.SPAM_FILTERS);
            return e !== H.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? H.he.FRIENDS_AND_NON_FRIENDS
                  : (Ic.xY.get(t) ?? H.he.NON_FRIENDS);
        },
        setValue: (e) => L.he.updateSetting(e),
        useOptions: function () {
            let e = (0, o.SV)("DMSpamSetting");
            return S.useMemo(
                () =>
                    e
                        ? [
                              { name: j.intl.string(j.t["+w5yKk"]), value: H.he.FRIENDS_AND_NON_FRIENDS },
                              { name: j.intl.string(j.t.yAPg6r), value: H.he.NON_FRIENDS },
                              { name: j.intl.string(j.t.FEXKsv), value: H.he.DISABLED },
                          ]
                        : (0, Iu.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    Im = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
        useTitle: () => ((0, o.SV)("ContentCategory") ? j.intl.string(j.t["3upKU8"]) : j.intl.string(j.t.xVRG4P)),
        useInlineNotice: function () {
            let e,
                t,
                i,
                n,
                s,
                l,
                r,
                a,
                o,
                u = _W(),
                d =
                    ((e = (0, NI.Z)()),
                    (t = (0, _F.WX)()),
                    (i = S.useCallback(() => {
                        window.open(tI.A.getArticleURL(t), "_blank"),
                            (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _z.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _z.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    j.intl.format(j.t.EUo0yj, {
                                        hook: (e, t) => (0, E.jsx)(ds.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, p3.SJ)()),
                    (l = (0, p2.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _z.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _z.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    j.intl.format(j.t.OX4ybh, {
                                        hook: (e, t) => (0, E.jsx)(ds.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = _Y();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [Ii, Io, _J, _$, _1] : [Ii, Ig, Io, _J, _$]),
    });
var IA = i(189883);
let Ih = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, r0.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _K.uM)();
    },
});
var IE = i(665260);
let IS = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, r0.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? IE.UI(t, U.dzt.MUTUAL_FRIENDS) : IE.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _K.uM)();
        },
    }),
    IT = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, r0.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? IE.UI(t, U.dzt.MUTUAL_GUILDS) : IE.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _K.uM)();
        },
    }),
    Ix = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [Ih, IS, IT],
    }),
    Ip = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => IA.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    });
function If() {
    let { enabled: e } = IA.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let IN = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: If,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _W,
        buildLayout: () => [Ix, Ip],
    }),
    I_ = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: If,
        useInlineNotice: _W,
        buildLayout: () => [Ih, IS, IT, Ip],
    });
var II = i(994500),
    IC = i(428678),
    Ib = i(717398),
    Iy = i(730134),
    Iv = i(943646);
function Ij(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: Iv.wx,
        children: [
            (0, E.jsx)("div", { className: Iv.zc, children: n ? (0, E.jsx)(IC.K, {}) : (0, E.jsx)(iO.G, {}) }),
            (0, E.jsxs)("div", {
                className: Iv.Qq,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, E.jsx)(es.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: n
                            ? j.intl.format(j.t["r91W/h"], { numberOfBlockedUsers: i })
                            : j.intl.format(j.t.rXUeOl, { numberOfIgnoredUsers: i }),
                    }),
                ],
            }),
        ],
    });
}
function IO(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([II.A], () => II.A.isBlocked(t)),
        s = (0, g.bG)([id.default], () => id.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? Ib.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Ib.A.unignoreUser(t, e1.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e6()(Iv.nM, { [Iv.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: Iv.eF,
                      children: [
                          (0, E.jsx)(Iy.A, { user: s, size: i7._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: Iv.Qq,
                              children: [
                                  (0, E.jsx)(es.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, E.jsx)(es.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, E.jsx)(eG.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function IR(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_9.h, {
        children: (0, E.jsxs)("div", {
            className: Iv.Nr,
            children: [
                (0, E.jsx)(Ij, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: Iv.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(IO, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: Iv.vM,
                          children: (0, E.jsx)(en.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: Iv.Qf,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: j.intl.format(j.t.jULEDr, {
                                      numberOfUsers: n + 5 < t.length ? 5 : t.length - n,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
let IL = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([II.A], () => II.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([II.A], () => II.A.getBlockedIDs());
            return (0, E.jsx)(IR, { userIds: e, listType: "blocked" });
        },
    }),
    ID = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([II.A], () => II.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([II.A], () => II.A.getIgnoredIDs());
            return (0, E.jsx)(IR, { userIds: e, listType: "ignored" });
        },
    }),
    IP = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: tI.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [IL, ID],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([II.A], () => ({
                hasBlockedUsers: II.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: II.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var IG = i(22385),
    IM = i(556534),
    IU = i(111159),
    IV = i(152056),
    Ik = i(467962);
let Iw = { label: () => j.intl.string(j.t["32u1Dx"]), value: IG.YG };
var IF = i(954225);
function IB() {
    return (0, IM.Tx)() !== IG.YG;
}
function Iz() {
    return j.intl.string(j.t["T+nevN"]);
}
let IX = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: Iz,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: tI.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, IM.Tx)();
        return !L.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IG.xk.getState().selectedGuildId,
            i = (0, r0.CN)();
        e ? i.delete(t) : i.add(t),
            L.pE.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IF.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: nB.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IB,
});
function IY() {
    return (0, IM.Tx)() !== IG.YG;
}
function IH() {
    return j.intl.string(D.default.WhdCGP);
}
let IK = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: IH,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: function () {
        let e = (0, IM.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = IG.xk.getState().selectedGuildId,
            i = (0, r0.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IF.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nB.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IY,
});
var IW = i(307863),
    IZ = i(428031),
    Iq = i(972737);
function IQ() {
    return (0, IW.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function IJ() {
    let e = (0, IM.Tx)(),
        t = (0, IM.q9)(),
        i = (0, IW.e)();
    return e === IG.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function I$() {
    let e = (0, IM.Tx)(),
        t = L.$s.useSetting().includes(e),
        i = (0, IZ.K)();
    return e === IG.YG ? !i : !t;
}
function I0() {
    let e = (0, _K.uM)();
    return (0, IM.Tx)() === IG.YG && e;
}
function I1(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function I2(e) {
    let t = IG.xk.getState().selectedGuildId;
    if (t === IG.YG) {
        var i;
        (i = !e),
            (0, Iq.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: ou.$n.Colors.BRAND,
                onConfirm: function () {
                    L.n6.updateSetting(i), I1(i, !1);
                },
                onCancel: function () {
                    L.n6.updateSetting(i), L.$s.updateSetting(i ? ec.A.getGuildIds() : []), I1(i, !0);
                },
            });
    } else {
        let i = (0, r0.Tb)();
        e ? i.delete(t) : i.add(t),
            L.$s.updateSetting(Array.from(i)),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: IF.m.DIRECT_MESSAGES_TOGGLE,
                ingress: nB.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let I3 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IJ,
        useValue: I$,
        useDisabled: I0,
        setValue: I2,
    }),
    I6 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: IQ,
        useSubtitle: IJ,
        useValue: I$,
        useDisabled: I0,
        setValue: I2,
    });
var I4 = i(953298);
function I5(e, t) {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function I7() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, IM.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let I8 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: I7,
        useSubtitle: function () {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, IM.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: tI.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: tI.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: tI.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, IM.Tx)(),
                t = (0, IZ.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                s = L.Zr.useSetting().includes(e);
            return e === IG.YG ? !t && !n : !i && !s;
        },
        useDisabled: function () {
            let e = (0, IM.Tx)(),
                t = (0, _K.uM)(),
                i = (0, IZ.K)(),
                n = L.$s.useSetting().includes(e);
            return e === IG.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = IG.xk.getState().selectedGuildId;
            if (!e && (0, I4.w)())
                return void p9.A.showAgeVerificationGetStartedModal({ entryPoint: fe.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === IG.YG) {
                var i;
                (i = !e),
                    (0, Iq.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: ou.$n.Colors.BRAND,
                        onConfirm: function () {
                            L.YX.updateSetting(i), I5(i, !1);
                        },
                        onCancel: function () {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? ec.A.getGuildIds() : []), I5(i, !0);
                        },
                    });
            } else {
                let i = (0, r0.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: IF.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nB.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    I9 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [IQ(), I7()],
                i = IH(),
                n = IY();
            !e && n && t.push(i);
            let s = Iz(),
                l = IB();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, IG.xk)(),
                i = (0, g.bG)([eg.Ay], () => eg.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([ec.A], () => ec.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    IV.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = IG.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === IG.YG && null != s
                                ? t(s)
                                : "" === e && n !== IG.YG && t(IG.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Iw,
                        id: Iw.value,
                        label: Iw.label(),
                        leading: (0, E.jsx)("div", {
                            className: Ik.KP,
                            children: (0, E.jsx)(IU.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Ik.cl,
                            }),
                        }),
                    }),
                    i.forEach((t) => {
                        let i = n[t];
                        null != i &&
                            e.push({
                                id: i.id,
                                label: i.name,
                                value: i.id,
                                leading: (0, E.jsx)(mg.Ay, {
                                    className: Ik.cl,
                                    guild: i,
                                    size: mg.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, E.jsx)(iH.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    });
function Ce() {
    let e = _W(),
        t = _Y();
    if ((0, IM.Tx)() === IG.YG) return e ?? t;
}
let Ct = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: Ce,
        buildLayout: () => [I9, I3, I8],
    }),
    Ci = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: Ce,
        buildLayout: () => [I9, I6, I8, IK, IX],
    }),
    Cn = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [Im, Ci, I_, IP],
    }),
    Cs = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            Sy.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_k],
    }),
    Cl = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [Cn, Cs],
    }),
    Cr = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gk.i,
        buildLayout: () => [Cl],
    });
var Ca = i(254138);
function Co() {
    return (
        su.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        so.Bo.get({ url: U.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                su.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                su.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function Cu(e) {
    return (0, Tp.$I)(e).then(
        (e) => (
            null != e && null != e.body && su.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var Cd = i(157559),
    Cc = i(331887);
function Cg() {
    let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
        t = (0, g.bG)([Cc.A], () => Cc.A.harvestType),
        [i, n] = S.useState(() => Date.now()),
        s = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        l = S.useRef(null);
    return (S.useEffect(() => {
        let e = s - Date.now();
        if (e > 0) {
            let t = setTimeout(() => n(Date.now()), e);
            clearTimeout(l.current), (l.current = t);
        }
        return () => clearTimeout(l.current);
    }, [s]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : s > i
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(s) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
function Cm(e) {
    let { onConfirm: t, ...n } = e;
    (0, K.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var CA = i(383475);
let Ch = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([id.default], () => id.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([Cc.A], () => ({
                    currentHarvestType: Cc.A.harvestType,
                    awaitingInitialRequest: Cc.A.requestingHarvest,
                })),
                [n, s] = S.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && r7()().diff(r7()(t.created_at), "days") < U.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, E.jsxs)(_9.h, {
                children: [
                    (0, E.jsx)(_9._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: tI.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(eb.Z, {
                              className: CA.N,
                              children: (0, E.jsx)(es.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: r7()(t.created_at).add(U.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(eb.Z, {
                                className: CA.N,
                                children: (0, E.jsx)(es.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(eb.Z, {
                                              className: CA.N,
                                              children: (0, E.jsx)(es.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: CA.x,
                                        children: (0, E.jsx)(eG.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: function () {
                                                Cm({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            Cu(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? Cd.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : Cd.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        Cd.A.show({
                                                                            title: j.intl.string(j.t.OjbtDm),
                                                                            body: t,
                                                                        });
                                                                    },
                                                                )
                                                                .finally(() => s(!1));
                                                    },
                                                });
                                            },
                                            loading: n || i,
                                        }),
                                    }),
                                ],
                            }),
                ],
            });
        },
    }),
    CE = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            Co();
        },
        buildLayout: () => [Ch],
    });
var CS = i(290595),
    CT = i(153488);
let Cx = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => L.Q$.useSetting(),
        setValue: (e) => NZ.eQ({ allowVoiceRecording: e }),
    }),
    Cp = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = Cg();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: tI.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return j.intl.string(j.t.hIbRso);
                case "not_verified":
                    return j.intl.format(j.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, E.jsx)(
                                en.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = r7()(e.nextAllowed).format("MMMM Do YYYY");
                    return j.intl.format(j.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            Co();
        },
        useDisabled: () => !Cg().allowed,
        useLoading: () => (0, g.bG)([Cc.A], () => Cc.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                Cm({
                    onConfirm: (i) => {
                        (t = !1),
                            Cu(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Cd.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : Cd.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        Cd.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
                                    },
                                )
                                .finally(e);
                    },
                    onCloseCallback: () => {
                        t && e();
                    },
                });
            });
        },
    }),
    Cf = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eH.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eH.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    CN = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: tI.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([CT.A], () => CT.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, CS.U)([U.YAq.PERSONALIZATION], []).catch(Iq.i)
                : (0, Iq.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, CS.U)([], [U.YAq.PERSONALIZATION]).catch(Iq.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _K.uM,
    }),
    C_ = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return j.intl.format(e ? j.t["md5l4/"] : j.t["2QFDU/"], {
                helpdeskArticle: tI.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return !L.vf.useSetting();
        },
        setValue: function (e) {
            L.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = L.H1.useSetting(),
                t = (0, _K.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    CI = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? j.intl.string(j.t.w4fvxe)
                : j.intl.format(j.t.cf9mvV, { helpdeskArticle: tI.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _K.uM,
    }),
    CC = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = y(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: v }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    Cb = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CC] }),
    Cy = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: tI.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([CT.A], () => CT.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CS.U)([U.YAq.USAGE_STATISTICS], []).catch(Iq.i)
                : (0, Iq.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, CS.U)([], [U.YAq.USAGE_STATISTICS]).catch(Iq.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _K.uM,
    }),
    Cv = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _W,
        initialize: () => {
            CT.A.fetchedConsents || (0, CS.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [Cf, Cy, CN, CI, C_, Cx, Cp, Cb] : [Cy, CI, C_, CN, Cx, Cf],
    }),
    Cj = (0, w.mj)({
        kind: "user",
        name: "2026-06-notify-friends-on-profile-update",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function CO(e) {
    return Cj.useConfig({ location: e }).enabled;
}
var CR = i(567926);
let CL = (0, a.zD)(u.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(CR.default.F3llsQ),
    useSubtitle: () => j.intl.string(CR.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        L.Sy.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
    usePredicate: () => CO("NotifyFriendsOnProfileUpdateSetting"),
});
function CD() {
    let e = L.JG.useSetting();
    return (0, g.yK)([eg.Ay, ec.A], () => {
        let t = new Set(e);
        return eg.Ay.getFlattenedGuildIds().filter((e) => null != ec.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CP = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = CD(),
                t = (0, g.yK)(
                    [ec.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => ec.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, E.jsx)(ed.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE },
                        backIcon: { icon: (0, E.jsx)(ed.$, { guild: t[1], size: f.CD }), shape: f.e0.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, E.jsx)(ed.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE } };
        },
    },
    CG = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CD();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = ec.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return CP;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CM = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, F.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CG],
    }),
    CU = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, F.lX)("ProfilePrivacySetting"),
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: j.intl.string(j.t.Boxc8R),
                    desc: j.intl.string(j.t["nLj+nc"]),
                    value: H.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: j.intl.string(j.t.YOIKBt),
                    desc: j.intl.string(j.t.y0JZ4s),
                    value: H.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: H.KP.FRIENDS_ONLY },
            ];
        },
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, F.W1)("ProfilePrivacySetting"))) return;
            let n = (0, W.gS)(t, e);
            null != n &&
                (0, K.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("43548"),
                        i.e("81849"),
                        i.e("62041"),
                        i.e("63786"),
                    ]).then(i.bind(i, 413201));
                    return (t) =>
                        (0, E.jsx)(e, {
                            ...t,
                            direction: n.direction,
                            affectedGuildIds: n.affectedGuildIds,
                            settingName: n.settingName,
                            mappedActivityValue: n.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.Qnf32C)],
    }),
    CV = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => {
            let e = (0, F.lX)("ProfilePrivacyCategory"),
                t = CO("ProfilePrivacyCategory");
            return e || t;
        },
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: tI.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CU, CL, CM],
    });
var Ck = i(814278),
    Cw = i(936388),
    CF = i(714763);
let CB = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, Ck.Lu)() }),
    useValue: function () {
        return (0, g.bG)([CF.A], () => CF.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Cw.A.updatePersistentCodesEnabled(e);
    },
});
var Cz = i(787392);
function CX() {
    return (0, g.yK)([Cz.A], () => Cz.A.getUserIds());
}
var CY = i(803306),
    CH = i(966327),
    CK = i(509531);
function CW(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nQ.Ay)(),
        s = (0, g.bG)([id.default], () => id.default.getUser(t)),
        l = x_.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, Ck.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, TC.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, CY.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: CK.uW,
            children: [
                null != s && (0, E.jsx)(CH.A, { className: CK.my, user: s, size: i7._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: CK.Qq,
                    children: [
                        (0, E.jsx)(en.D, {
                            className: CK.Xh,
                            onClick: a,
                            children: (0, E.jsx)(es.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, E.jsx)(es.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, E.jsx)(en.D, { onClick: r, className: CK.Qz, children: (0, E.jsx)(l$.u, { size: "xs" }) }),
            ],
        })
    );
}
function CZ(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, Ck.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, Ck.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: CK.Qq,
                children: [
                    (0, E.jsx)(es.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, E.jsx)(es.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, E.jsx)(en.D, {
                className: CK.Kk,
                onClick: r,
                children: (0, E.jsx)(gQ.P, { size: "md", color: er.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Cq(e) {
    let { userId: t } = e,
        i = (0, g.yK)([Cz.A], () =>
            eZ()(Cz.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, i] = e;
                    return { verifiedKey: t, timestamp: i };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(CW, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(CZ, { className: CK.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: CK.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CQ = i(756625);
let CJ = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = CX();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = CX();
            return (0, E.jsxs)(_9.h, {
                children: [
                    (0, E.jsx)(_9._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, Ck.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: CQ.A, children: (0, E.jsx)(Cq, { userId: e }) }, e)),
                ],
            });
        },
    }),
    C$ = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, o.ri)("VoiceSecurityCategory") ? j.intl.string(j.t.bTwjaz) : j.intl.string(j.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, o.ri)("VoiceSecurityCategory");
            return S.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: h.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, Ck.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, eY.isDesktop)(),
        buildLayout: () => [CB, CJ],
    }),
    C0 = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [Cv, CV, C$] : [Cv, CV, CE, C$]),
    }),
    C1 = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: Ca.m,
        buildLayout: () => [C0],
    });
var C2 = i(476713);
let C3 = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    C6 = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [C3] }),
    C4 = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _O(!0, !0);
            return e ? (0, E.jsx)(dN.y, {}) : (0, E.jsx)(_D, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _O(!0, !0);
            return e || 0 === t.length;
        },
    });
function C5() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _O(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => dP.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
function C7() {
    let { sortedGames: e } = C5();
    return S.useMemo(() => {
        let t = e[0];
        if (null == t) return null;
        let i = e[1];
        return {
            frontIcon: {
                icon: (0, E.jsx)("img", {
                    src: nn.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    alt: t.name,
                    width: f.CD,
                    height: f.CD,
                }),
                shape: f.e0.ROUNDED,
            },
            ...(null != i && {
                backIcon: {
                    icon: (0, E.jsx)("img", {
                        src: nn.Ay.getApplicationIconURL({ id: i.id, icon: i.icon }),
                        alt: i.name,
                        width: f.YP,
                        height: f.YP,
                    }),
                    shape: f.e0.ROUNDED,
                },
            }),
        };
    }, [e]);
}
i(839272);
let C8 = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [Ig] }),
    C9 = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = C5();
            function t(e, t) {
                return (0, E.jsx)(
                    es.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? j.intl.string(j.t.Amr1IZ)
                : 1 === e.length
                  ? j.intl.format(j.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? j.intl.format(j.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : j.intl.format(j.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => j.intl.string(j.t.YpCiMt),
        useHeaderDecoration: () => ({ type: h.WX.STACKED_ICONS, useIcons: C7 }),
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            Sy.A.fetch();
        },
        buildLayout: () => [_U, _V, C4, C6],
    }),
    be = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [Im, C8, Ct, IN, C9, IP],
    }),
    bt = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: C2.l,
        buildLayout: () => [be],
    });
var bi = i(782603),
    bn = i(899847),
    bs = i(695515),
    bl = i(936926);
let br = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            eW
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
                })),
    }),
    ba = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eH.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bo = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uk.A], () => uk.A.getTTSType()),
        setValue: (e) => uX.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
            ];
        },
        usePredicate: () => nc.$j,
    }),
    bu = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bd = (0, a.bd)(bu, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return sy(bu, {
                formatter: (e) => {
                    let { title: t, index: i } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === i
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [br, ba, bo],
    }),
    bc = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [bd],
    }),
    bg = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, g.bG)([uk.A], () => !uk.A.getDisableUnreadBadge());
        },
        setValue: (e) => uX.default.setDisableUnreadBadge(!e),
    }),
    bm = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [bg],
    });
var bA = i(840559),
    bh = i(997187),
    bE = i(723923);
let bS = bE.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, g.cf)([bh.A], () => bh.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bA.CA)(e.category, t),
        }),
    ),
    bT = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, g.cf)([bh.A], () => bh.A.getEmailSettings());
            return bE.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bA.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bx = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = bh.A.getEmailSettings();
            e || (0, bA.cR)();
        },
        buildLayout: () => [...bS, bT],
    }),
    bp = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, g.bG)([uk.A], () => uk.A.getDesktopType()) !== U.nRU.NEVER;
        },
        setValue: (e) => uX.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var bf = i(832712),
    bN = i(543465),
    b_ = i(790782);
let bI = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([bN.Ay], () => bN.Ay.useNewNotifications),
    setValue: function (e) {
        bf.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (EB.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: ec.A.getGuildsArray().filter(
                        (e) => bN.Ay.resolveGuildUnreadSetting(e) === b_.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [id.default, bN.Ay],
            () =>
                id.default.getCurrentUser()?.isStaff() ||
                id.default.getCurrentUser()?.isStaffPersonal() ||
                bN.Ay.useNewNotifications,
        ),
});
var bC = i(534654);
let bb = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uk.A], () => uk.A.screenDowntimeReminder),
        setValue: (e) => uX.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bl.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bC.A)(),
                i = (0, Nf.Du)();
            return e && t && i;
        },
    }),
    by = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bl.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bC.A)(),
                i = (0, Nf.Du)();
            return e && t && i;
        },
    });
var bv = i(70730);
let bj = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            L.oz.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = bv.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bO = (0, w.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bR = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bO.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bL = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            L.Yh.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    bD = (0, w.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bP = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bD.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bG = i(815807);
let bM = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: H.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: H.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: H.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bG.n4)(e, L.Zp.getSetting()),
    }),
    bU = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            L.Qr.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bV = (0, w.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bk = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bV.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bw = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bL, bj, bR, bU, bk, bP, bM],
    }),
    bF = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uk.A], () => uk.A.taskbarFlash),
        setValue: (e) => uX.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bB = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [bp, bF, bw, bI, by, bb],
    });
var bz = i(965957),
    bX = i(312671),
    bY = i(235079);
let bH = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uw.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bX.A], () => bX.A.getSoundpack()),
            t = uw.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uw.A.getHolidaySoundpack();
        tY()(null != t, "predicate should fail if no soundpack is available"), (0, bz.p)(e ? t : bY.i.CLASSIC);
    },
    usePredicate: uw.A.useIsEligible,
});
var bK = i(970931);
let bW = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bK.kB,
        useDisabledMessage: () => ((0, bK.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bZ = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bq = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uK("message3") }),
        useValue: () =>
            (0, g.bG)([uk.A], () => uk.A.getNotifyMessagesInSelectedChannel() && !uk.A.getDisableAllSounds()),
        setValue: (e) => uX.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uk.A], () => uk.A.getDisableAllSounds()),
    }),
    bQ = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uk.A], () => uk.A.getDisableAllSounds()),
        setValue: (e) => uX.default.toggleDisableAllSounds(e),
    }),
    bJ = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uH();
            };
        },
        buildLayout: () => [uW(bW), bq, uW(bZ), bQ],
    }),
    b$ = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    b0 = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [b$] }),
    b1 = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bH, bJ, b0],
    }),
    b2 = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, bl.Eq)({ location: "NotificationsPanel" }) ||
                null != bs.A.getAgeGroup() ||
                bs.A.isLoading() ||
                (bs.A.canRefetch() && bn.Ay.initialPageLoad());
        },
        buildLayout: () => [bB, b1, bm, bx, bc],
    }),
    b3 = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: bi.X,
        buildLayout: () => [b2],
    }),
    b6 = (0, a.WI)(u.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Nw, ...(e ? [] : [Cr]), C1, ...(e ? [bt] : []), ...(e ? [] : [NX]), ...(e ? [] : [_v]), b3, _I];
        },
    });
var b4 = i(387758),
    b5 = i(271866),
    b7 = i(147964),
    b8 = i(868511);
let b9 = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([b7.A], () => null != b7.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, K.openModal)((e) => (0, E.jsx)(b8.A, { ...e })) : b5.cL();
        },
    }),
    ye = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => c8.p5,
    }),
    yt = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [ye, b9] }),
    yi = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [yt] }),
    yn = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: b4.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [yi],
    });
var ys = i(70688),
    yl = i(830215);
let yr = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: ys.o,
        onClick: () => {
            (0, sA.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    yl.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    ya = (0, a.WI)(u.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [yn, yr],
    }),
    yo = (0, a.Hr)({
        buildLayout: function () {
            return [pQ, b6, Eo, dT, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Tx : i3, Sb, ya];
        },
        analyticsKey: "user_settings",
    });
