i.d(t, { D: () => bR });
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
    p = i(137177),
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
function v(e) {
    let { namedGames: t, totalCount: i } = b(e);
    return { names: t.map((e) => e.name), totalCount: i };
}
function y() {
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
            let { names: e, totalCount: t } = v(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: y }),
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
    U = i(652215),
    V = i(802185);
let k = (0, a.zD)(u.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
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
        usePredicate: () => V.A.useConfig({ location: "NotifyFriendsOnComeOnlineSetting" }).enabled,
    }),
    w = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("ActivitySharingCategory") ? j.intl.string(j.t.WmsPis) : j.intl.string(j.t["6x5uWQ"]),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [P, k, R],
    });
var F = i(945810),
    B = i(21973);
let z = (0, F.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    Y = (e) => {
        let t = (0, B.lX)(e),
            i = z.useConfig({ location: e });
        return t || i.copyChanges;
    },
    X = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    H = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, B.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [X],
    });
var K = i(873298),
    W = i(192308),
    Z = i(365258);
let q = (0, a.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () =>
        Y("GuildActivitySharingDefaultSetting") ? j.intl.string(j.t.vpgck1) : j.intl.string(D.default["/LHVbt"]),
    useOptions: function () {
        let e = Y("GuildActivitySharingDefaultSetting");
        return S.useMemo(
            () =>
                e
                    ? [
                          {
                              value: K.Qd.ACTIVITY_STATUS_OFF,
                              name: j.intl.string(j.t.FzgQna),
                              desc: j.intl.string(j.t.SQxoyc),
                          },
                          {
                              value: K.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: j.intl.string(j.t["1hvuGH"]),
                              desc: j.intl.string(j.t.odUCPE),
                          },
                          { value: K.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.fQc5la) },
                      ]
                    : [
                          { value: K.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(j.t.UzGMH9) },
                          { value: K.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(D.default["/sAeRY"]) },
                          { value: K.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(D.default.m3oL7Q) },
                      ],
            [e],
        );
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        let t,
            n = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, B.W1)(t) && !z.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, Z.g8)(n, e);
        if (null == s) return;
        let l = (0, Z.Xc)(e);
        (0, W.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("92164"), i.e("36281"), i.e("62041"), i.e("41996")]).then(
                i.bind(i, 32167),
            );
            return (t) =>
                (0, E.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var Q = i(683071),
    J = i(331322),
    $ = i(243721),
    ee = i(892547),
    et = i(922016),
    ei = i(980707),
    en = i(477782),
    es = i(939249),
    el = i(834730),
    er = i(847374),
    ea = i(661531),
    eo = i(123292),
    eu = i(140735),
    ed = i(498642),
    ec = i(743790),
    eg = i(71393),
    em = i(711014),
    eA =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let eh = {
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
var eE = i(842449);
function eS(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, g.bG)([ed.A], () => ed.A.getMemberCount(t.id));
    return (0, E.jsxs)(J.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, E.jsx)("div", { className: eE.FO, children: (0, E.jsx)(ec.K, { guild: t, size: 48 }) }),
            (0, E.jsx)("div", {
                className: eE.QH,
                children: (0, E.jsx)($.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let eT = function (e) {
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
                s = (0, g.bG)([em.Ay], () => em.Ay.getFlattenedGuildIds()),
                l = (0, g.bG)([eg.A], () => eg.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = L.Pw.useSetting(),
                [o, u] = (0, S.useState)(a);
            (0, S.useEffect)(() => {
                u(a);
            }, [a]);
            let d = async (e) => {
                    u(e);
                    try {
                        await L.Pw.updateSetting(e);
                    } catch (e) {
                        u(a);
                    }
                },
                c = 0 !== o.length,
                [m, A] = (0, S.useState)(() => eh[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(eh[e](r, a)), n(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: (e) => {
                    let { checked: t, guildId: i } = e,
                        n = new Set(o);
                    t ? n.delete(i) : n.add(i), d([...n]);
                },
                isActivityRestricted: (e) => o.includes(e),
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: () => {
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
                { id: eA.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: eA.SERVER_ORDER },
                { id: eA.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: eA.RECENTLY_JOINED },
                { id: eA.ACTIVITY_SHARING_ON, label: j.intl.string(D.default.ZI51JZ), value: eA.ACTIVITY_SHARING_ON },
                {
                    id: eA.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(D.default["+kxafn"]),
                    value: eA.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = T.find((e) => e.value === l)?.label ?? "";
    return (0, E.jsxs)("div", {
        className: eE.iE,
        children: [
            t,
            (0, E.jsxs)("div", {
                className: eE.N1,
                children: [
                    (0, E.jsx)(ee.I, {
                        query: n,
                        onChange: s,
                        onClear: () => {
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
                            className: eE.gO,
                            children: [
                                (0, E.jsx)(et.Y, {
                                    targetElementRef: h,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, E.jsx)(ei.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, E.jsx)(en.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, E.jsx)(
                                                        en.iD,
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
                                        (0, E.jsxs)(es.D, {
                                            ...e,
                                            innerRef: h,
                                            className: eE.Ku,
                                            children: [
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, E.jsx)(er.a, { size: "xs", color: ea.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, E.jsx)(eo.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, E.jsx)(eu.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(D.default.EvzDff, { count: i.length }),
            }),
            (0, E.jsxs)("ul", {
                className: eE.X1,
                id: A,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, E.jsx)("div", {
                            className: eE.pb,
                            children: (0, E.jsx)(el.E, {
                                className: eE.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, E.jsx)(
                            eS,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var ex = i(366189);
let ep = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(D.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, E.jsx)("div", {
                      className: ex.l,
                      children: (0, E.jsx)(Q.w, { type: "warning", children: j.intl.string(D.default["xxI0/W"]) }),
                  });
            return (0, E.jsx)(eT, { notice: e });
        },
    }),
    ef = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => {
            let e = (0, o.SV)("GuildActivitySharingCategory"),
                t = Y("GuildActivitySharingCategory");
            return e
                ? j.intl.string(j.t["ymulT+"])
                : t
                  ? j.intl.string(j.t.VDcvrR)
                  : j.intl.string(D.default["1PougL"]);
        },
        useSubtitle: () => {
            let e = Y("GuildActivitySharingCategory");
            return (0, o.SV)("GuildActivitySharingCategory")
                ? null
                : e
                  ? j.intl.string(j.t["/Go08F"])
                  : j.intl.string(D.default.OO17Lg);
        },
        buildLayout: () => ((0, o.Bv)("GuildActivitySharingCategory") ? [q, ep, H] : [q]),
    }),
    eN = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.TqdOvC),
        useSubtitle: () => (Y("MyServersCategory") ? j.intl.string(D.default.OO17Lg) : null),
        buildLayout: () => [ep, H],
    }),
    e_ = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.khuuzv),
        useSubtitle: () => j.intl.string(D.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    eI = (0, a.E2)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(el.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, E.jsx)(
                            el.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
        usePredicate: () => (0, o.SV)("GameJoiningBlurb"),
    }),
    eC = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(D.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(D.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    eb = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(D.default["89YBr5"]),
        useSubtitle: () => ((0, o.SV)("GameJoiningCategory") ? j.intl.string(j.t.uGDpgH) : null),
        buildLayout: () => [e_, eC, eI],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    });
var ev = i(359778),
    ey = i(208963);
let ej = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, E.jsx)(ev.Z, {
                type: ev.Z.Types.PRIMARY,
                className: ey.A,
                children: (0, E.jsx)(el.E, {
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.xvCsx4, { termsLink: U.X7G.TERMS, privacyLink: U.X7G.PRIVACY }),
                }),
            });
        },
    }),
    eO = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, {
        buildLayout: () => [ej],
        usePredicate: () => !(0, o.SV)("TermsCategory"),
    }),
    eR = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => ((0, o.Bv)("ActivityPrivacyPanel") ? [w, ef, eb] : [w, ef, eN, eb, eO]),
    }),
    eL = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: d._,
        buildLayout: () => [eR],
    });
var eD = i(935399),
    eP = i(625657),
    eG = i(534514),
    eM = i(821609),
    eU = i(404778),
    eV = i(554146),
    ek = i(131607),
    ew = i(589051),
    eF = i(592598),
    eB = i(351906),
    ez = i(532624),
    eY = i(773371),
    eX = i(184809),
    eH = i(723702),
    eK = i(766075),
    eW = i(999834),
    eZ = i(735438),
    eq = i.n(eZ),
    eQ = i(350535),
    eJ = i(672396);
let e$ = e1(null);
function e0() {
    var e;
    let t = e1(e$);
    (e = e$),
        eq().isEqual(eq().omit(t, "old_enabled"), eq().omit(e, "old_enabled")) ||
            (G.default.track(U.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (e$ = t));
}
function e1(e) {
    let t = eX.default.getNotificationPositionMode(),
        i = t !== U.G6Q.DISABLED,
        n = ez.Ay.getOverlayKeybind(),
        s = ez.Ay.getOverlayChatKeybind();
    return {
        enabled: eY.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eF.A.isNotificationDisabled(eJ.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eQ.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eQ.dI)(s.shortcut) : null,
        text_opacity_slider: eX.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eY.default.enabled,
    };
}
var e2 = i(793574),
    e3 = i(237984),
    e6 = i(503698),
    e4 = i.n(e6),
    e7 = i(890856),
    e5 = i(389128);
let e8 = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function e9(e) {
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
        className: e4()(e5.HS, d),
        children: [
            (0, E.jsxs)(e7.s, {
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
                                    (0, E.jsx)(el.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: e5.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, E.jsx)(el.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, E.jsx)(el.E, {
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
let te = (0, a.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, E.jsx)(e9, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, E.jsx)(eM.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, e3.b)(e2.A.USER_SETTINGS, U.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var tt = i(812729),
    ti = i.n(tt),
    tn = i(429913),
    ts = i(616356);
function tl(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function tr() {
    let e = (0, g.bG)([ts.A], () => ts.A.getStreamerActiveStreamMetadata()),
        t = (0, g.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getVisibleGame();
                return null != e ? m.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            ti(),
        ),
        [i] = (0, tn.A)([tl(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var ta = i(990078),
    to = i(478016),
    tu = i(31300),
    td = i(780907),
    tc = i(684013),
    tg = i(56562),
    tm = i(964486),
    tA = i(814925),
    th = i(810412),
    tE = i(41984),
    tS = i(296027),
    tT = i(562519);
let tx = 5 * i(927813).A.Millis.DAY,
    tp = new tT.A("overlay_survey_timestamps");
function tf(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tp.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < tx) ||
            Array.from(tp.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, W.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tp.add(n), (i) => (0, E.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var tN = i(512950),
    t_ = i(975571),
    tI = i(935671);
function tC() {
    (0, tI.sL)("overlay-settings");
}
function tb(e) {
    let { className: t, game: i } = e;
    return (0, tI.NP)() && null != i && i.elevated
        ? (0, E.jsx)("div", {
              className: t,
              children: (0, E.jsx)(tN.p, {
                  messageType: tN.Y.WARNING,
                  action: (0, E.jsx)(eM.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: tC,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: t_.A.getArticleURL(U.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tv = i(760751),
    ty = i(189081),
    tj = i(9302),
    tO = i(311678),
    tR = i(320448);
let tL = new Set([
    tE.AR.INITIALIZING,
    tE.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    tE.AR.WAITING_FOR_MODULE_TRACKING,
    tE.AR.WAITING_FOR_OVERLAY_OPEN,
    tE.AR.WAITING_FOR_POPOUT_OPEN,
    tE.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    tE.AR.WAITING_FOR_REACT_INITIALIZATION,
    tE.AR.WAITING_FOR_PID_FOCUS,
    tE.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tD(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = S.useState(!1);
    return (0, E.jsx)(tO.N, {
        className: e5.uR,
        collapsibleContent: (0, E.jsx)("div", { className: e5.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, E.jsx)(e9, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: e4()(e5.AC, i),
                action: (0, E.jsxs)("div", {
                    className: e5.rc,
                    children: [
                        s.action,
                        l
                            ? (0, E.jsx)(er.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, E.jsx)(tR._, {
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
let tP = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = tr(),
            i = e?.pid,
            n = (0, g.bG)(
                [tS.default],
                () => (null == e || null == i ? null : tS.default.getTrackedGameByPid(i)),
                [e, i],
                ti(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, g.cf)(
                [tv.A, ty.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, m.hw)(e, !1, [tv.A, ty.A]),
                [e, n],
            ),
            r = (0, g.bG)([m.Ay, tv.A, ty.A], () => (null == e ? null : (0, m.xU)(e, m.Ay, tv.A, ty.A)), [e], ti()),
            [a, o] = S.useState(l),
            [u, d] = S.useState(s),
            [c, A] = S.useState(!1);
        S.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, tj.supportsLegacy)(),
            T = !(0, tj.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: f } = (0, g.cf)([tS.default], () => tS.default.getGlobalEnabledStatus()),
            N = (t, i) => {
                if (null == e) return;
                let n = !1,
                    s = !1;
                switch (i) {
                    case th.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), td.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case th.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), td.Ay.toggleOverlay(e, u, t), (s = !t && a);
                        break;
                    case th.OverlayToggledClientSettingType.LEGACY:
                        tc.A.setEnabled(t, f), (0, th.Q3)(t, th.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case th.OverlayToggledClientSettingType.OOP:
                        tc.A.setEnabled(x, t), (0, th.Q3)(t, th.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || s) &&
                    tf(
                        n
                            ? th.OverlayToggledClientSettingType.LEGACY_GAME
                            : th.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            _ = h && T,
            I = !x && !f,
            C = !a && !x && u && !h,
            b = !u && !f && a && !T,
            v = n?.overlayMethod === tE.Ue.Disabled,
            y = n?.state === tE.AR.OVERLAY_RENDERING && !v,
            O = n?.state != null && tL.has(n.state) && !v,
            R = n?.overlayMethod === tE.Ue.OutOfProcess,
            L = n?.overlayMethod === tE.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === tE.Ue.Hook,
            P = n?.state === tE.AR.OVERLAY_CRASHED || n?.state === tE.AR.OVERLAY_CRASHED_DISABLED,
            G = !a && !u,
            [M, U] = (() => {
                switch (!0) {
                    case y && R:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        el.E,
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
                    case y && L:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        el.E,
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
                    case y && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, E.jsx)(
                                        el.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== tg.aI.BORDERLESS_FULLSCREEN:
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
                    case v: {
                        let e = n?.fullscreenType === tg.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, tm.Ay)(() => {
            td.Ay.getDetectableGames();
        });
        let [V, k] = S.useMemo(
            () =>
                O
                    ? ["text-muted", ea.A.colors.TEXT_MUTED.css]
                    : y && L
                      ? ["text-feedback-warning", ea.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && R
                        ? ["text-feedback-positive", ea.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", ea.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", ea.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [O, y, L, R, D],
        );
        return null == e
            ? null
            : (0, E.jsxs)(tD, {
                  onExpand: A,
                  className: c ? e5.tx : void 0,
                  title: (0, E.jsxs)(E.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, E.jsx)(ta.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, E.jsx)(tA.A, {
                                        size: 16,
                                        color: ea.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, E.jsx)(to.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: ea.A.colors.WHITE.css,
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
                          y || O
                              ? (0, E.jsx)(tu.k, { size: "xxs", color: k })
                              : (0, E.jsx)("div", { className: e5.W4 }),
                          (0, E.jsx)(el.E, {
                              variant: "text-xs/semibold",
                              color: V,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, E.jsx)(p.A, { game: t, pid: e?.pid, size: p.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, E.jsx)(es.D, {
                      onClick: (e) => e8(e),
                      children: (0, E.jsx)($.d, {
                          checked: (a && f) || (u && x),
                          disabled: _,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          td.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          tc.A.setEnabled(t, t), (n = !t && x), (s = !t && f);
                                          break;
                                      case "both":
                                          tc.A.setEnabled(t, t),
                                              td.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && x) || (!t && u)),
                                              (s = (!t && f) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? th.OverlayToggledClientSettingType.LEGACY_GAME
                                                : th.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? th.OverlayToggledClientSettingType.OOP_GAME
                                                : th.OverlayToggledClientSettingType.OOP),
                                      null != l && tf(l, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
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
                  warning: (0, E.jsx)(tb, { className: e5.Hh, game: e }),
                  children: [
                      (0, E.jsx)(e9, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: f ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)($.d, {
                                      checked: a && f,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !f
                                              ? N(e, th.OverlayToggledClientSettingType.OOP)
                                              : N(e, th.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, E.jsx)("div", { className: e5.Kz }),
                              ],
                          }),
                      }),
                      (0, E.jsx)(e9, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: x ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)($.d, {
                                      checked: u && x,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !x
                                              ? N(e, th.OverlayToggledClientSettingType.LEGACY)
                                              : N(e, th.OverlayToggledClientSettingType.LEGACY_GAME);
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
        let { runningGame: e } = tr();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var tG = i(364522),
    tM = i(206885);
function tU(e) {
    let { game: t, gameApplication: i } = e,
        n = S.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, g.bG)([x.A], () => (null != i ? i : x.A.getApplication(t?.id)), [i, t]);
    return (0, E.jsx)(p.A, { game: s, pid: n, size: p.M.SMALL });
}
function tV(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: s,
            onChange: l,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, g.cf)([m.Ay, tv.A, ty.A], () => (0, m.xU)(t, m.Ay, tv.A, ty.A)),
        u = (0, g.cf)([tv.A, ty.A], () => (0, m.hw)(t, !1, [tv.A, ty.A]), [t]),
        d = s(u),
        [c, A] = S.useState(d);
    return (
        S.useEffect(() => {
            A(d);
        }, [d]),
        (0, E.jsx)(e9, {
            title: t.name,
            icon: (0, E.jsx)(tU, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)($.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (A(e), l(e, o, u), i && tf(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, E.jsx)("div", { className: e5.Kz }),
                ],
            }),
        })
    );
}
let tk = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, g.cf)([tS.default], () =>
                    tS.default.getGlobalEnabledStatus(),
                ),
                s = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                l = (0, tn.A)(s.map((e) => e.id)),
                r = !(0, tj.supportsLegacy)(),
                a = (e) => {
                    tc.A.setEnabled(e, n);
                    let t = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, th.Q3)(e, th.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && tf(th.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, i) => {
                    let { enabledOOP: n } = i;
                    td.Ay.toggleOverlay(t, e, n);
                },
                u = S.useMemo(
                    () =>
                        (0, tj.supportsLegacy)()
                            ? r
                                ? j.intl.string(j.t.r9jEVw)
                                : j.intl.string(j.t.OzInYk)
                            : j.intl.string(j.t["8Ox6/E"]),
                    [r],
                );
            return 0 === s.length
                ? (0, E.jsx)(e9, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: e5.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)($.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tM.O && (0, E.jsx)("div", { className: e5.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tD, {
                      onExpand: t,
                      className: e ? e5.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, E.jsx)(es.D, {
                          onClick: (e) => e8(e),
                          children: (0, E.jsx)($.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e5.SC,
                              children: (0, E.jsx)(el.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tG.Ip, {
                              className: e5.XG,
                              children: s.map((e, t) =>
                                  (0, E.jsx)(
                                      tV,
                                      {
                                          rawGame: e,
                                          clientSettingType: th.OverlayToggledClientSettingType.LEGACY_GAME,
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
    tw = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = S.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, g.cf)([tS.default], () =>
                    tS.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tj.supportsOutOfProcess)(),
                l = (0, g.yK)([m.Ay], () => m.Ay.getGamesSeen(!0)).filter((e) => !(0, A.n1)(e)),
                r = (0, tn.A)(l.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    tc.A.setEnabled(n, e);
                    let s = m.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, th.Q3)(e, th.OverlayToggledClientSettingType.OOP, s),
                        t && tf(th.OverlayToggledClientSettingType.OOP, s);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    td.Ay.toggleOverlay(t, e, n);
                },
                u = S.useMemo(
                    () =>
                        tM.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, E.jsx)(e9, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: e5.dA,
                      action: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)($.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tM.O && (0, E.jsx)("div", { className: e5.Kz }),
                          ],
                      }),
                  })
                : (0, E.jsxs)(tD, {
                      onExpand: t,
                      className: e ? e5.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, E.jsx)(es.D, {
                          onClick: (e) => e8(e),
                          children: (0, E.jsx)($.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, E.jsx)("div", {
                              className: e5.SC,
                              children: (0, E.jsx)(el.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, E.jsx)(tG.Ip, {
                              className: e5.XG,
                              children: l.map((e, t) =>
                                  (0, E.jsx)(
                                      tV,
                                      {
                                          rawGame: e,
                                          clientSettingType: th.OverlayToggledClientSettingType.OOP_GAME,
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
    tF = (0, a.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [tP, tw, tk, te],
    }),
    tB = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, g.bG)([eX.default], () => !eX.default.disableClickableRegions),
        setValue: (e) => {
            tc.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    });
var tz = i(284009),
    tY = i.n(tz),
    tX = i(97260),
    tH = i(635242);
let tK = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, g.bG)([ez.Ay], () => ez.Ay.getOverlayKeybind()),
            t = !(0, tj.supportsLegacy)(),
            i = !(0, tj.supportsOutOfProcess)(),
            [n, s] = (0, g.yK)([m.Ay], () => [m.Ay.canShowAdminWarning, m.Ay.getVisibleGame()], []),
            l = (0, tI.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, ez.DV)(e?.shortcut ?? []);
        return (0, E.jsx)("div", {
            className: e5.hc,
            children: (0, E.jsxs)("div", {
                className: e5.eH,
                children: [
                    (0, E.jsxs)("div", {
                        className: e5.Bu,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: j.intl.string(j.t.VsAZcC),
                            }),
                            r &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e5.y7,
                                    children: j.intl.string(j.t.NsowVa),
                                }),
                            a &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e5.y7,
                                    children: j.intl.string(j.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: e5.IH,
                        children: (0, E.jsx)(tH.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tY()(null != e, "Keybind should never be undefined"),
                                    tX.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
});
var tW = i(515183),
    tZ = i(682763);
let tq = (0, a.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = tr();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = tr();
            return null != e && (0, tW.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = tr(),
                i = t?.id,
                n = (0, g.bG)([eF.A], () => eF.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tW.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = ts.A.getStreamerActiveStreamMetadata()),
                    (s = tl(
                        t,
                        (n =
                            null != (i = m.Ay.getVisibleGame()) ? m.Ay.getGameOrTransformedSubgameForPID(i.pid) : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: x.A.getApplication(s) ?? void 0 });
            null != l && (0, tZ.x8)(l.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    tQ = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tK, tq, tB] });
var tJ = i(93465);
let t$ = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: tJ.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: tJ.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: tJ.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: tJ.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: tJ.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: tJ.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ew.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, g.bG)([eF.A], () => eF.A.isNotificationDisabledBySetting(tJ.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function t0(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, g.bG)([eF.A], () => eF.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            tc.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let t1 = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => t$.map(t0),
    }),
    t2 = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [t1],
    }),
    t3 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getAvatarSizeMode()),
        setValue: (e) => {
            tc.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: U.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: U.OSZ.SMALL },
        ],
    }),
    t6 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayNameMode()),
        setValue: (e) => {
            tc.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: U.pwA.NEVER },
        ],
    }),
    t4 = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, g.bG)([eX.default], () => eX.default.getDisplayUserMode()),
        setValue: (e) => {
            tc.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: U.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: U.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var t7 = i(391973),
    t5 = i(489277),
    t8 = i(897720),
    t9 = i(38502);
function ie() {
    let e = t5.A.getWidgetByType(U.uss.VOICE_V3);
    if (null == e) return null;
    let t = t9.A.getWidget(e.id);
    return null != t && (0, t8.ZO)(t) ? t : null;
}
i(392164);
let it = (0, a.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = ie();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = ie();
        null != t &&
            (e < 1
                ? (0, t7.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, t7.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var ii = i(43990),
    is = i(450740),
    il = i(968898),
    ir = i(95701),
    ia = i(889227),
    io = i(288737),
    iu = i(287809);
function id(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new io.A({
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
        user: new ia.A({ id: s, username: e }),
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
let ic = (0, a.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
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
                    id(j.intl.string(j.t.C0ZDvo), !0, !1),
                    id(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    id(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, g.bG)([t5.A, t9.A], () => {
                    let e = t5.A.getWidgetByType(U.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = t9.A.getWidget(e.id);
                    return null != t && (0, t8.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = id(t.username)).user = t), e) : null, ...l].filter(N.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, E.jsx)(ii.N, {
                    theme: U.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, E.jsxs)("div", {
                            className: e4()(e5.Y5, e),
                            children: [
                                (0, E.jsx)("div", {
                                    className: e5.kJ,
                                    children: (0, E.jsx)(is.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, ir.createChannelRecord)({
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
                                        (0, E.jsx)(il.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, E.jsx)(il.CS, {}),
                                        (0, E.jsx)(il.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, E.jsx)("div", { className: e5.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    ig = (0, a.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [ic, t3, t6, t4, it],
    });
var im = i(49999),
    iA = i(9025);
function ih() {
    let [e, t] = (0, ek.kn)([eV.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eD.Ay)(() => () => {
        t(im.i.AUTO_DISMISS);
    }),
    e !== eV.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsxs)("div", {
                      className: iA.xC,
                      children: [
                          (0, E.jsx)("div", {
                              children: (0, E.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: iA.tl,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              children: (0, E.jsxs)("div", {
                                  className: iA.vJ,
                                  children: [
                                      (0, E.jsx)(eG.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.jzjJQg),
                                      }),
                                      (0, E.jsx)(el.E, {
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
                                  className: iA.lh,
                              }),
                          }),
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: iA.VV,
                              children: (0, E.jsx)(eM.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(im.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eU.c, { className: iA.yF }),
              ],
          });
}
function iE() {
    let e = (0, g.bG)([eB.A], () => eB.A.enabled),
        t = (0, ew.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)(Q.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: () => (0, eK.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, E.jsx)(eU.c, { className: iA.yF }),
              ],
          })
        : null;
}
let iS = (0, a.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                e0(),
                ez.Ay.addChangeListener(e0),
                eF.A.addChangeListener(e0),
                eX.default.addChangeListener(e0),
                eY.default.addChangeListener(e0),
                eH.isPlatformEmbedded && (0, _.a2)(),
                () => {
                    ez.Ay.removeChangeListener(e0),
                        eF.A.removeChangeListener(e0),
                        eX.default.removeChangeListener(e0),
                        eY.default.removeChangeListener(e0),
                        eH.isPlatformEmbedded && (0, _.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(ih, {}), (0, E.jsx)(iE, {})] });
            },
        },
        buildLayout: () => [tF, tQ, ig, t2],
    }),
    iT = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: eP.l,
        usePredicate: eW.b_,
        buildLayout: () => [iS],
    });
var ix = i(687966);
let ip = (0, a.AK)(u.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    iN = (0, a.gN)(u.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, o.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [ip],
    });
var i_ = i(396478),
    iI = i(270003),
    iC = i(227309),
    ib = i(363195),
    iv = i(1215),
    iy = i(39623),
    ij = i(952270),
    iO = i(138134),
    iR = i(414079),
    iL = i(29160),
    iD = i(650583),
    iP = i(150717),
    iG = i(653307);
let iM = (0, eH.isWindows)();
function iU(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, g.cf)([m.Ay, tv.A, ty.A], () => (0, m.xU)(t, m.Ay, tv.A, ty.A)),
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
        N = e4()(iG.tR, {
            [iP.LO]: !n,
            [iP.Rw]: n,
            [iP.FB]: null != o && n,
            [iP.xL]: r,
            [iP.fG]: null != l && l.length > 0,
        });
    function _() {
        null != l && l.length > 0 && d
            ? (0, W.openModalLazy)(async () => {
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
                                      td.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : td.Ay.toggleDetection(o);
    }
    let I = null != c && (0, m.Es)(o) === (0, m.Es)(c),
        C = (null != a && a.id === c?.id) || I || (null != l && l.some((e) => e.id === c?.id));
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: N,
                children: [
                    (0, E.jsxs)("div", {
                        className: e4()(iP.$K, iG.Vd),
                        children: [
                            o.verified && !s
                                ? (0, E.jsxs)("div", {
                                      className: iP.HS,
                                      children: [
                                          (0, E.jsx)("div", { className: iP.mO, children: x }),
                                          (0, E.jsx)(ta.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, E.jsx)(tA.A, {
                                                  className: iP.qf,
                                                  size: 18,
                                                  color: ea.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, E.jsx)(to.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: ea.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, E.jsx)("input", {
                                      className: e4()(iP.mO, iP.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && td.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iD.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                        className: iP.GN,
                                        children: (0, E.jsx)(iL.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, eH.isWindows)() && (t = t.toUpperCase()),
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
                              className: e4()(iG.tR, iG.oA, iG.LT, iP.E3),
                              children: (0, E.jsx)(ta.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, E.jsx)(es.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: iP.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? tv.A.getDetectableGame(o.id) : null;
                                          G.default.track(U.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(o) ? o.gameName : o.name,
                                          }),
                                              T(!0),
                                              (0, W.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("56600"),
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
                                      children: (0, E.jsx)(iO.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iP.Lj,
                                          colorClass: iP.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, E.jsx)(iy.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: iP.Lj,
                                          colorClass: iP.GS,
                                      })
                                    : (0, E.jsx)(ij.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iP.$V : iP.zN,
                                          colorClass: iP.GS,
                                      });
                        return (0, E.jsx)("div", {
                            className: e4()(iG.tR, iG.oA, iG.LT, iP.E3),
                            children: (0, E.jsx)(ta.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, E.jsx)(es.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: iP.ym,
                                          onClick: _,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!iM || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, E.jsx)(tu.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iP.Lj,
                                      colorClass: iP.GS,
                                  })
                                : (0, E.jsx)(iv.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iP.$V,
                                      colorClass: iP.GS,
                                  }),
                            n = t
                                ? (0, E.jsx)(ta.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, E.jsx)("i", { className: iP.kb }),
                                  })
                                : null;
                        return (0, E.jsxs)("div", {
                            className: e4()(iG.tR, iG.oA, iG.LT, iP.E3),
                            children: [
                                n,
                                (0, E.jsx)(ta.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, E.jsx)(es.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: iP.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void td.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || C
                        ? null
                        : (0, E.jsx)(iR.A, {
                              className: iP.LS,
                              onClick: function () {
                                  td.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          td.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, E.jsx)("div", {
                    className: iP.AQ,
                    children: l.map((e, t) =>
                        (0, E.jsxs)(
                            S.Fragment,
                            {
                                children: [
                                    (0, E.jsx)(iU, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, E.jsx)("div", { className: iP.PQ }),
                                ],
                            },
                            (0, m.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
var iV = i(818050);
function ik() {
    let e = (0, g.bG)([ib.A], () => ib.A.theme);
    return (0, E.jsxs)(i_.pp, {
        theme: e,
        className: iV.eT,
        children: [
            (0, E.jsx)(i_.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, E.jsx)(i_.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function iw() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = C();
    return 0 === e.length
        ? (0, E.jsx)(ik, {})
        : (0, E.jsx)(iI.n, {
              children: (0, E.jsx)("div", {
                  children: e.map((e) =>
                      (0, E.jsx)(
                          iU,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === iC.a7 ? t : void 0 },
                          (0, m.Es)(e),
                      ),
                  ),
              }),
          });
}
let iF = (0, a.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, E.jsx)(iw, {}),
});
var iB = i(424994);
let iz = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iF, iN],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: iB.s8 }),
});
var iY = i(305866),
    iX = i(783878),
    iH = i(197287),
    iK = i(604949);
function iW(e) {
    let { onClose: t } = e,
        i = (0, g.bG)([m.Ay], () => m.Ay.getCandidateGames()),
        [n, s] = S.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, E.jsxs)(iY.l, {
        className: e4()(iH.H, iK.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, E.jsx)(iX.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, E.jsx)(eU.c, { className: e4()(iV.Ot, iV.QB) }),
            (0, E.jsxs)("div", {
                className: e4()(iH.o, iG.xM),
                children: [
                    (0, E.jsx)(eo.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, E.jsx)(eM.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (td.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iZ = i(564206);
let iq = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: () => {
        let e = S.useRef(null);
        return (0, E.jsxs)("div", {
            className: e4()(iZ.a, iV.Gf),
            children: [
                (0, E.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, E.jsx)(et.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(iW, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, E.jsx)(eo.Q, {
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
function iQ() {
    return (0, E.jsx)("div", {
        className: e4()(iG.tR, iP.eS, iP.Rw),
        children: (0, E.jsxs)("div", {
            className: e4()(iP.$K, iG.Vd),
            children: [
                (0, E.jsx)("div", { className: iP.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, E.jsx)("div", { className: iP.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let iJ = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = C(),
                i = (0, g.bG)([m.Ay], () => m.Ay.getVisibleGame());
            return null != i
                ? (0, E.jsx)(
                      iU,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === iC.a7 ? e : void 0,
                      },
                      (0, m.Es)(i),
                  )
                : (0, E.jsx)(iQ, {});
        },
    }),
    i$ = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [iJ, iq],
    }),
    i0 = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [i$, iz],
    }),
    i1 = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: ix._,
        usePredicate: eW.Pi,
        buildLayout: () => [i0],
    }),
    i2 = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => j.intl.string(j.t.nVPpLM),
        buildLayout: () => [eL, i1, iT],
    });
var i3 = i(550640),
    i6 = i(247928),
    i4 = i(97808),
    i7 = i(778712),
    i5 = i(775602),
    i8 = i(320095),
    i9 = i(963852),
    ne = i(763754),
    nt = i(20851),
    ni = i(486020),
    nn = i(382677);
let ns = new ir.nA({ id: "1337", guild_id: "1337", type: U.rbe.GUILD_TEXT, name: "preview" }),
    nl = [
        { status: U.clD.IDLE, discriminator: "2" },
        { status: U.clD.DND, discriminator: "3" },
        { status: U.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function nr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i8.rh)({ ...(0, i9.Ay)({ channelId: ns.id, content: e }), state: U.cmJ.SENT, reactions: t });
}
var na = i(856488);
let no = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    nu = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var nd = i(100767),
    nc = i(106236),
    ng = i(113494),
    nm = i(782134),
    nA = i(54570),
    nh = i(8880),
    nE = i(75804);
let nS = eq().debounce((e) => {
    (0, nA.zU)(e);
}, 250);
function nT() {
    let [e, t] = S.useState(!1);
    return (
        (0, eD.l0)(() => (0, nA.pr)()),
        (0, E.jsx)(eM.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? ng.E : nm.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, nA.pr)(), t(!1);
                    return;
                }
                (0, nA.AU)(
                    j.intl.string(j.t.PKaNJL),
                    !0,
                    void 0,
                    () => t(!0),
                    () => t(!1),
                ),
                    t(!0);
            },
        })
    );
}
let nx = (0, a.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, g.bG)([nh.A], () => nh.A.speechRate);
            return (0, E.jsxs)(J.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(nc.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: nE.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nS,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, E.jsx)(el.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, E.jsx)(el.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, E.jsx)(el.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, E.jsx)(nT, {}),
                ],
            });
        },
        usePredicate: () => nd.$j,
    }),
    np = (0, a.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [nx, nu, no],
    }),
    nf = (0, a.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    nN = (0, a.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [nf] });
var n_ = i(955572);
let nI = (0, a.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, g.bG)([i5.A], () => i5.A.desaturateUserColors),
    setValue: () => (0, n_.YV)(),
});
var nC = i(652525);
let nb = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.enableCustomCursor),
        setValue: (e) => (0, n_.ts)(e),
        usePredicate: () => (0, nC.t)("EnableCustomCursorSetting"),
    }),
    nv = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.isSwitchIconsEnabled),
        setValue: (e) => (0, n_.Gm)(e),
        hasIcon: !0,
    }),
    ny = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => j.intl.string(j.t.aZlePv),
        useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.isHighContrastModeEnabled),
        setValue: (e) => (0, n_.uh)(e ? i5._.HIGH : i5._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: h.Xi.NEW, dismissibleContent: eV.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nj = i(406360),
    nO = i(742023);
let nR = (0, a.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
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
            return (0, nj.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, n_.FU)(e);
        },
        useValue: function () {
            return (0, g.bG)([nO.Ay], () => nO.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    nL = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, g.bG)([i5.A], () => i5.A.roleStyle),
        setValue: (e) => (0, n_.IX)(e),
    });
(0, a.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, g.bG)([i5.A], () => i5.A.roleStyle),
    setValue: (e) => (0, n_.IX)(e),
});
let nD = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: U.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => i5.A.saturation,
    asValueChanges: (e) => (0, n_.HU)(e),
});
var nP = i(839214),
    nG = i(502229);
let nM = (0, nP.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nU = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: t_.A.getArticleURL(U.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, g.bG)([i5.A], () => i5.A.syncForcedColors);
            return (
                (0, tm.Ay)(() => {
                    nM.setState({ syncEnabled: i5.A.syncForcedColors });
                }),
                nM.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nM.getState();
            if (null != t) {
                clearTimeout(t), nM.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === i5.A.syncForcedColors) return void nM.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, n_.D3)(e), nM.setState({ updateTimeout: null });
            }, 150);
            nM.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nG.D)(),
    }),
    nV = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [nD, nI, ny, nb, nU, nR, nL, nv, nN],
    });
var nk = i(397438),
    nw = i(355097);
function nF(e) {
    return (0, g.bG)([nk.A], () =>
        (function (e) {
            switch (e) {
                case nw._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case nw._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(nk.A.getAppliedOverrideReasonKey(e)),
    );
}
let nB = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => nF("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    nz = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => nF("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var nY = i(823894);
let nX = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => nF("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: nY.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: nY.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: nY.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    nH = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: t_.A.getArticleURL(U.MVz.REDUCED_MOTION) }),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.useReducedMotion),
        setValue: (e) => (0, n_.qz)(e ? "reduce" : "no-preference"),
    }),
    nK = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, g.bG)([i5.A], () => "auto" === i5.A.rawPrefersReducedMotion),
        setValue: (e) => (0, n_.qz)(e ? "auto" : i5.A.systemPrefersReducedMotion),
    }),
    nW = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [nH, nK, nz, nB, nX],
    });
var nZ = i(688810),
    nq = i(259065),
    nQ = i(864386);
let nJ = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => j.intl.string(nQ.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nZ.Ay)();
            return j.intl.format(nQ.default.aEax6P, {
                onClickOpenModal() {
                    (0, nq.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, g.bG)([i5.A], () => i5.A.displayNameStylesEnabled),
        setValue: (e) => (0, n_.Dm)(e),
    }),
    n$ = (e) => `${e.toFixed(0)}px`,
    n0 = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: U.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: U.hH7.FONT_SIZES["0"],
        maxValue: U.hH7.FONT_SIZES[U.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => U.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => i5.A.fontSize,
        onValueRender: n$,
        onMarkerRender: n$,
        asValueChanges: (e) => (0, n_.XS)(e),
    }),
    n1 = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, n_.kI)(e),
    }),
    n2 = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [n0, n1, nJ],
    }),
    n3 = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: K.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: K.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: K.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== K.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    n6 = "cozy",
    n4 = "compact",
    n7 = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: n6 },
            { name: j.intl.string(j.t["1JNcPS"]), value: n4 },
        ],
        useValue: () => (L.hH.useSetting() ? n4 : n6),
        setValue: (e) => {
            L.hH.updateSetting(e === n4), (0, n_.AC)();
        },
    });
var n5 = i(381941);
let n8 = (e) => `${e.toFixed(0)}px`,
    n9 = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => j.intl.string(j.t.Q6lKkg),
        useSubtitle: () => j.intl.string(j.t.p7eUrb),
        markers: n5.qh,
        stickToMarkers: !0,
        minValue: n5.qh["0"],
        maxValue: n5.qh[n5.qh.length - 1],
        useDefaultValue: () => (L.hH.useSetting() ? n5.y5 : n5.ES),
        useExternalValue: () => (0, g.bG)([i5.A], () => i5.A.messageGroupSpacing),
        getInitialValue: () => i5.A.messageGroupSpacing,
        onValueRender: n8,
        onMarkerRender: n8,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, n_.AC)(e);
            }
        },
    });
var se = i(775121);
let st = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => eH.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: se.A.modKey }),
        markers: U.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: U.hH7.ZOOM_SCALES["0"],
        maxValue: U.hH7.ZOOM_SCALES[U.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => U.hH7.ZOOM_DEFAULT,
        getInitialValue: () => i5.A.zoom,
        useExternalValue: () => (0, g.bG)([i5.A], () => i5.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, n_.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    si = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [n3, n7, n9, st],
    }),
    sn = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [n2, si, nV, nW, np],
        decoration: {
            type: h.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    i = S.useMemo(
                        () => [
                            nr(
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
                            nr(
                                j.intl.formatToPlainString(j.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, g.bG)([i5.A], () => i5.A.messageGroupSpacing);
                return (0, E.jsx)(i6.M, {
                    "aria-hidden": !0,
                    children: (0, E.jsxs)("section", {
                        children: [
                            (0, E.jsx)(eG.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: nn.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, E.jsxs)(tG.Ip, {
                                className: nn.VH,
                                children: [
                                    (0, E.jsx)("ol", {
                                        className: nn.DZ,
                                        style: { gap: n },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, E.jsx)(
                                                "li",
                                                {
                                                    children: (0, E.jsx)(nt.A, {
                                                        message: t,
                                                        channel: ns,
                                                        compact: e,
                                                        author: { ...(0, ne.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, E.jsxs)("div", {
                                        className: nn.Jb,
                                        children: [
                                            (0, E.jsx)("div", {
                                                className: nn.HD,
                                                children: nl.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, E.jsx)(
                                                        i4.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: i7._3.SIZE_32,
                                                            src: ni.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, E.jsx)(eM.$, {
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
    ss = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: i3.c,
        useMenu: na.A,
        buildLayout: () => [sn],
    });
var sl = i(650809),
    sr = i(636537),
    sa = i(228366),
    so = i(74396),
    su = i(269880),
    sd = i(55619),
    sc = i(777666),
    sg = i(314116),
    sm = i(19575),
    sA = i(546385);
let sh = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => c.Av && !(0, c.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = S.useState(() => sm.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, E.jsxs)(J.B, {
            children: [
                (0, E.jsx)($.d, { label: t, description: i, checked: e, onChange: sE }),
                !e && (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function sE(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, sg.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            sm.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sS = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, g.bG)([ty.A], () => ty.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    sT = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [...((0, o.SB)("AppearanceAdvancedCategory_buildLayout") ? [] : [sh]), sS],
    });
var sx = i(565645);
let sp = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, E.jsx)(sx.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    sf = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.isSubmitButtonEnabled),
        setValue: () => (0, n_.Xt)(),
    }),
    sN = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
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
    s_ = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            G.default.track(U.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: U.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [e2.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e);
        },
    }),
    sI = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [sN, sp, s_, sf],
    });
var sC = i(526162),
    sb = i(793943),
    sv = i(792656),
    sy = i(830543),
    sj = i(785007),
    sO = i(806932),
    sR = i(915089),
    sL = i(174197),
    sD = i(788868);
let sP = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, sR.GV)(),
            { ref: t, ...i } = (0, sj._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, g.bG)([sC.A], () => sC.A.isUpsellPreview);
        return (
            (0, eD.Ay)(() => {
                n &&
                    G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sD.e.APP_ICON_UPSELL,
                        location_stack: [e2.A.USER_SETTINGS],
                    });
            }),
            (0, E.jsx)("div", {
                ...i,
                ref: t,
                children: (0, E.jsx)(J.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, E.jsx)(sO.m, { disabled: n, size: sL.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function sG() {
    (0, sb.nf)(sb.HP.APP_ICON), (0, sy.default)();
}
function sM() {
    return (0, E.jsx)(sv.A, {
        subscriptionTier: sD.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: U.ZSU.BUTTON_CTA, objectType: U.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sU = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([sC.A], () => sC.A.isUpsellPreview);
            return S.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: h.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: sG,
                    }),
                    e && t.push({ id: "upsell-button", type: h.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sM }),
                    { type: h.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sP],
    }),
    sV = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sk = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sV] });
var sw = i(379587),
    sF = i(452027),
    sB = i(976860),
    sz = i(474090),
    sY = i(181079),
    sX = i(422258),
    sH = i(668267),
    sK = i(313281),
    sW = i(335993);
let sZ = t_.A.getArticleURL(U.MVz.FAVORITES_GUILD);
function sq() {
    let { analyticsLocations: e } = (0, nZ.Ay)(e2.A.USER_SETTINGS_FAVORITES),
        t = S.useCallback(() => {
            (0, sH.mv)("settings_page"), (0, sB.uh)(U.YYv), (0, sy.default)();
        }, []);
    return (0, E.jsx)(nZ.f5, {
        value: e,
        children: (0, E.jsx)(sF.D, {
            label: j.intl.string(sW.default.OT1NK5),
            description: j.intl.format(sW.default.GR2KOG, { helpCenterLink: sZ }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, E.jsxs)(J.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, E.jsx)(eM.$, { variant: "secondary", text: j.intl.string(sW.default["7WwLnr"]), onClick: t }),
                    (0, E.jsx)(sv.A, {
                        subscriptionTier: sD.pe.TIER_2,
                        defaultTextOverride: j.intl.string(sW.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sQ = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sw.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [j.intl.string(sW.default.OT1NK5)],
        Component: function () {
            let e = (0, g.bG)([sY.A], () => sY.A.favoriteGuildEnabled),
                t = (0, g.bG)([iu.default], () => {
                    let e = iu.default.getCurrentUser();
                    return null != e && sz.Ay.isPremiumExactly(e, sD.PremiumTypes.TIER_2);
                }),
                i = (0, sK.DZ)(),
                n = S.useCallback(
                    (e) => {
                        (0, sX.tV)(e, "settings_page"), !e && i && (0, sB.pX)(U.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, E.jsx)($.d, {
                      checked: e,
                      description: j.intl.format(sW.default.GR2KOG, { helpCenterLink: sZ }),
                      onChange: n,
                      label: j.intl.string(sW.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, E.jsx)(sq, {});
        },
    }),
    sJ = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    s$ = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    s0 = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [sJ, s$],
    }),
    s1 = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    s2 = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var s3 = i(817281);
let s6 = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, E.jsx)(
                            es.D,
                            {
                                tag: "a",
                                onClick: () => (0, eK.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, g.bG)([nO.Ay], () => nO.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            s3.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    s4 = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: U.P6Q.ON_CLICK, id: U.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: U.P6Q.ALWAYS, id: U.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: U.P6Q.IF_MODERATOR, id: U.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    s7 = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    s5 = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [s0, s1, s2, s4, s7, s6, sQ, sk],
    });
var s8 = i(753806),
    s9 = i(145331);
let le = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? s8.A.cleanUpPrivateChannelSearchState() : s8.A.cleanUpSearchState({ type: U.I4_.DMS }),
                (0, s9._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: s9.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t);
        },
    }),
    lt = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [le],
    }),
    li = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, g.bG)([eB.A], () => {
                let { autoToggle: e } = eB.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sd.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return c.Av;
        },
    }),
    ln = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, g.bG)([eB.A], () => {
                let { enabled: e } = eB.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            sd.A.update({ enabled: e });
        },
    });
var ls = i(77729),
    ll = i(349230);
let lr = [],
    la = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eW.b_)(),
                t = (0, ew.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return S.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(ll.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, g.bG)([eB.A], () => eB.A.getSettings().disabledOverlayWidgets ?? lr);
        },
        setValue: (e) => sd.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    lo = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { hidePersonalInformation: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ hidePersonalInformation: e }),
    }),
    lu = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { hideInstantInvites: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ hideInstantInvites: e }),
    }),
    ld = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { disableSounds: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ disableSounds: e }),
    }),
    lc = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { disableNotifications: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ disableNotifications: e }),
    }),
    lg = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, g.bG)([eB.A], () => {
                let { enableContentProtection: e } = eB.A.getSettings();
                return e;
            }),
        setValue: (e) => sd.A.update({ enableContentProtection: e }),
        usePredicate: () => ls.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lm = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [lo, lu, ld, lc, lg, la],
    }),
    lA = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [ln, li, lm],
    });
var lh = i(47671),
    lE = i(665267),
    lS = i(414133),
    lT = i(412848);
let lx = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(lT.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: K.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: K.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, lS.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lp = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, g.bG)([i5.A], () => i5.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, n_.M1)(),
    });
var lf = i(284016);
let lN = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, g.bG)([lf.A], () => !1 !== lf.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = ib.A.theme,
            n = lh.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        (t = U.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            sa.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            s3.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var l_ = i(98596);
let lI = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lC = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lI] }),
    lb = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, g.bG)([i5.A], () => i5.A.useForcedColors)
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nG.D)()
                              ? j.intl.format(j.t.Jae48E, {
                                    onClick: () => {
                                        (0, eK.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, g.bG)([lh.A, i5.A], () => i5.A.useForcedColors || lh.A.isPreview)
                ? null
                : {
                      type: h.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: h.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: lE.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [l_.k, lN, lp, lx, lC],
    }),
    lv = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            so.A.isFetching() ||
                (sa.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                sr.Bo.get({ url: U.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        sa.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        sa.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [lb, sU, s5, sI, lt, lA, sT],
    }),
    ly = [
        { badgeType: h.Xi.NEW, dismissibleContent: eV.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eV.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, E.jsx)(sc.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    lj = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: sl.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, su.A)(),
                s =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, E.jsx)(en.sL, {
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
                    ((i = (0, g.bG)([eB.A], () => eB.A.enabled, [])),
                    (0, E.jsx)(en.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            sd.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return S.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, E.jsx)(en.rX, { label: j.intl.string(j.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, E.jsx)(en.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => ly,
        buildLayout: () => [lv],
    });
var lO = i(410767),
    lR = i(691885),
    lL = i(408278),
    lD = i(241326),
    lP = i(885574),
    lG = i(475358),
    lM = i(28647),
    lU = i(337371),
    lV = i(695366),
    lk = i(555975),
    lw = i(364094);
function lF(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, E.jsx)("div", {
              className: lw.zc,
              children: (0, E.jsx)(lV.E, { size: "sm", color: ea.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, E.jsxs)("div", {
              className: lw.nt,
              children: [
                  (0, E.jsx)(p.A, { game: i, pid: t.pid, size: p.M.MEDIUM }),
                  (0, E.jsx)("div", {
                      className: lw.Am,
                      children: (0, E.jsx)(lV.E, { size: "sm", color: ea.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lB(e) {
    let t = (0, g.bG)([lk.Ay], () => lk.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = tr();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, tI.NP)(),
        l = s && null != i && t === U.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lz(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lB(i);
    return n
        ? (0, E.jsxs)("div", {
              className: e4()(lw.kL, t),
              children: [
                  (0, E.jsx)(lF, { game: s, application: l }),
                  (0, E.jsxs)("div", {
                      className: lw.FS,
                      children: [
                          (0, E.jsx)(el.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != s
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, E.jsx)(el.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: t_.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(eM.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, tI.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lY = i(189213),
    lX = i(292666),
    lH = i(320989),
    lK = i(978263);
let lW = [];
var lZ = i(235986),
    lq = i(820785),
    lQ = i(734057),
    lJ = i(808728),
    l$ = i(967198),
    l0 = i(926140),
    l1 = i(746642);
function l2() {}
let l3 = [l0.rD.VOICE_CHANNEL];
function l6(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function l4() {
    return (0, E.jsx)("div", {
        className: l1.i1,
        children: (0, E.jsx)(el.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: l1.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function l7(e) {
    let { keybind: t, className: i } = e,
        n = S.useRef(t);
    S.useEffect(() => {
        n.current = t;
    });
    let [s, l] = S.useState(t.params?.channelId ?? void 0),
        r = S.useCallback(() => {
            (0, W.openModalLazy)(
                async () => (e) =>
                    (0, E.jsx)(l5, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tX.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, E.jsx)("div", {
        className: e4()(l1.a8, i),
        children: (0, E.jsx)(sF.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, E.jsxs)(lZ.A, {
                align: lZ.A.Align.STRETCH,
                children: [
                    (0, E.jsx)("div", { className: l1.$X, children: (0, E.jsx)(l8, { channelId: s }) }),
                    (0, E.jsx)(lZ.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, E.jsx)(eM.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function l5(e) {
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
                [a, o] = S.useState(lW),
                u = S.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lW) : o(e);
                }, []);
            S.useEffect(
                () =>
                    lH.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = S.useState(() => new lK.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: l3, autocompleterBeforeCreateSearchContext: l6 }),
        c =
            ((t = "" !== o),
            (i = (0, g.yK)([lJ.Ay, lQ.A, l$.A], () => {
                let e = l$.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lJ.Ay.getVocalChannelIds(e)) {
                    let e = lQ.A.getChannel(t);
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
            if (e?.type === l0.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === l0.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lQ.A.getChannel(i.parent_id) : void 0,
                              r = eg.A.getGuild(i.guild_id);
                          return (0, E.jsx)(
                              lq.c3,
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
                                      null != r ? (0, E.jsx)("div", { className: l1.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, E.jsx)(l4, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, E.jsx)(lY.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, E.jsx)(lX.k, {
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
                                if (e?.type === l0.rD.VOICE_CHANNEL) return e.record;
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
function l8(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, g.cf)([lQ.A, eg.A], () => {
            let e = null != t ? lQ.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lQ.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? eg.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, E.jsx)(el.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: l1.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, E.jsx)(lq.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: l2,
              onFocus: l2,
              onMouseEnter: l2,
              focused: !1,
              children: null != s ? (0, E.jsx)("div", { className: l1.J5, children: s.name }) : null,
          });
}
function l9(e) {
    let { className: t, children: i } = e;
    return (0, E.jsx)("div", { className: t, children: (0, E.jsx)(J.B, { gap: 16, children: i }) });
}
var re = i(734066),
    rt = i(880144),
    ri = i(614455);
function rn() {
    let e = (0, g.bG)([ez.Ay], () => ez.Ay.getState()),
        t = (0, g.bG)([lk.Ay], () => (0, rt.A)(lk.Ay)),
        i = (0, g.bG)([ri.A], () => ri.A.isSupported),
        n = (0, re.sw)(),
        s = (0, re.BW)(),
        l = (0, eH.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eq()(t)
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
                    ((0, eH.isWindows)() || lk.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: U.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: j.intl.string(j.t.ybdjJD),
                    }),
                (0, eH.isDesktop)() &&
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
                };
            return (
                t && (l[U.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                i && (0, eH.isWindows)() && (l[U.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                (0, eH.isDesktop)() &&
                    ((l[U.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                    (l[U.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                    (l[U.hCu.SOUNDBOARD] = (0, eH.isWindows)()
                        ? j.intl.string(j.t["5wJefL"])
                        : j.intl.string(j.t.gzjsSP)),
                    (l[U.hCu.SOUNDBOARD_HOLD] = (0, eH.isWindows)()
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
var rs = i(581133);
function rl(e) {
    let { children: t } = e;
    return t([lU.Q_.MESSAGE, lU.Q_.NAVIGATION, lU.Q_.DND, lU.Q_.CHAT, lU.Q_.VOICE_AND_VIDEO, lU.Q_.MISCELLANEOUS]);
}
class rr extends S.PureComponent {
    handleActionChanged = (e) => {
        tX.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tX.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tX.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tX.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eQ.dI(e.shortcut);
        return se.A.hasBind(t)
            ? (0, E.jsx)(tN.p, { messageType: tN.Y.ERROR, children: j.intl.string(j.t["7lQlw3"]) })
            : iD.Yy.has(t)
              ? (0, E.jsx)(tN.p, {
                    messageType: tN.Y.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: t_.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, E.jsx)(el.E, {
                    variant: "text-md/normal",
                    className: rs.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, E.jsxs)("div", {
            className: rs.YI,
            children: [
                (0, E.jsxs)("div", {
                    className: rs.PO,
                    children: [
                        (0, E.jsx)("div", {
                            className: rs.AS,
                            children: (0, E.jsx)(lR.l, {
                                selectionMode: "single",
                                label: j.intl.string(j.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rs.AS,
                            children: (0, E.jsx)(sF.D, {
                                label: j.intl.string(j.t["1La4tC"]),
                                children: (0, E.jsx)(tH.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, E.jsx)("div", {
                                className: rs.d9,
                                children: (0, E.jsx)(lL.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lD.u,
                                    "aria-label": j.intl.string(j.t.qEHmmB),
                                }),
                            }),
                        (0, E.jsx)("div", {
                            className: rs.ZW,
                            children: (0, E.jsx)(ta.m, {
                                text: j.intl.string(j.t.uCD7qK),
                                children: (0, E.jsx)("div", {
                                    children: (0, E.jsx)($.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(l7, { keybind: this.props.keybind }) : void 0;
    }
}
class ra extends S.PureComponent {
    handleAddKeybind = () => {
        tX.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, E.jsxs)(
                S.Fragment,
                {
                    children: [
                        (0, E.jsx)(rr, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, E.jsx)(eU.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, E.jsxs)("div", {
            className: rs.$e,
            children: [
                (0, E.jsx)(lP.m, { size: "xs", color: ea.A.colors.ICON_SUBTLE }),
                (0, E.jsx)(el.E, {
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
                (0, E.jsx)(l9, {
                    className: iV.IE,
                    children: eH.isPlatformEmbedded
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: rs.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, E.jsx)("div", {
                                              className: rs.c9,
                                              children: (0, E.jsx)(eM.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(lz, { className: rs.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [(0, E.jsx)(eU.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, E.jsx)(eU.c, {}),
                              ],
                          })
                        : (0, E.jsx)(tN.p, {
                              messageType: tN.Y.INFO,
                              className: rs.Ly,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                          }),
                }),
                (0, E.jsx)(ro, {}),
            ],
        });
    }
}
function ro(e) {
    let { showHeader: t = !0 } = e,
        i = eq()((0, lU.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, E.jsxs)(J.B, {
        gap: 48,
        children: [
            (0, E.jsx)(iI.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, E.jsx)("div", {
                    className: rs.jh,
                    children: (0, E.jsxs)("div", {
                        className: rs.yZ,
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, E.jsx)("div", {
                                className: rs.DM,
                                children: (0, E.jsx)(lG.e, { shortcut: lM.z.binds["0"], className: rs.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, E.jsx)(rl, {
                children: (e) =>
                    (0, E.jsx)(E.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lU.Gm)(e),
                                s = (0, lU.zF)(e),
                                l = i[e];
                            return (0, E.jsx)(
                                iI.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, E.jsx)("div", {
                                        className: rs.jh,
                                        children: l.map((e, t) =>
                                            (0, E.jsxs)(
                                                S.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, E.jsx)(eU.c, {}),
                                                        (0, E.jsxs)("div", {
                                                            className: rs.yZ,
                                                            children: [
                                                                (0, E.jsx)(el.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, E.jsx)("div", {
                                                                    className: rs.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, E.jsx)(
                                                                            lG.e,
                                                                            { shortcut: e, className: rs.LE },
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
let ru = (0, a.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            S.useEffect(
                () => (
                    tX.A.enableAll(!1),
                    () => {
                        tX.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = rn();
            return (0, E.jsx)(ra, { ...e });
        },
        useSearchTerms: () => [j.intl.string(j.t.T9DA2K)],
    }),
    rd = (0, a.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [ru] }),
    rc = (0, a.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => j.intl.string(j.t.T9DA2K), buildLayout: () => [rd] }),
    rg = (0, a.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.T9DA2K),
        icon: lO.F,
        buildLayout: () => [rc],
    });
var rm = i(37646),
    rA = i(434404);
let rh = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rA.F],
    }),
    rE = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rm.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [rh],
    }),
    rS = (0, nP.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rT() {
    let e = await sm.Ay.getOpenOnStart(),
        t = await sm.Ay.getSetting("START_MINIMIZED", !1),
        i = await sm.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rS.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rx = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rS.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rS.setState({ openOnStartup: e }), sm.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            sm.Ay.getOpenOnStart().then((e) => rS.setState({ openOnStartup: e }));
        },
    }),
    rp = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => c.Av && !(0, c.cX)(),
        useValue: () => rS.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rS.setState({ minimizeToTray: e }), sm.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            sm.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rS.setState({ minimizeToTray: e }));
        },
    });
var rf = i(117695);
function rN(e) {
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
let r_ = new Set(["failure", "unknown"]),
    rI = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = S.useState(!1),
                [i, n] = S.useState(() => (0, tI.TC)()),
                s = (0, o.ri)("SystemService"),
                l = (0, g.bG)([m.Ay], () => m.Ay.getSystemServiceStatus("input-service")),
                r = S.useCallback(async () => {
                    t(!0),
                        i ? await (0, tI.z8)("windows-settings") : await (0, tI.sL)("windows-settings"),
                        t(!1),
                        n((0, tI.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, E.jsxs)("div", {
                className: rf.q,
                children: [
                    (0, E.jsxs)("div", {
                        className: rf.L,
                        children: [
                            (0, E.jsxs)(J.B, {
                                direction: "horizontal",
                                children: [
                                    (0, E.jsx)(el.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : r_.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rN(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: t_.A.getArticleURL(U.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? j.intl.string(j.t.KHVMkW)
                                        : j.intl.format(j.t["5Rlr0b"], { status: rN(l) }),
                                }),
                        ],
                    }),
                    (0, E.jsx)(eM.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tI.XQ,
    }),
    rC = (0, a.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rx, rp, rI],
        initialize: () => {
            rT();
        },
    }),
    rb = (0, a.t_)(u.X.LINUX_PANEL, { useTitle: () => j.intl.string(j.t["7pPjTW"]), buildLayout: () => [rC] }),
    rv = (0, a.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["7pPjTW"]),
        icon: tu.k,
        usePredicate: () => eH.isPlatformEmbedded && (0, eH.isLinux)(),
        buildLayout: () => [rb],
    });
var ry = i(3137),
    rj = i(369606),
    rO = i(604121),
    rR = i(725951),
    rL = i(400492),
    rD = i(669067),
    rP = i(115063),
    rG = i(754692),
    rM = i(927018),
    rU = i(512599),
    rV = i(532197),
    rk = i(874486),
    rw = i(989349),
    rF = i.n(rw),
    rB = i(58703),
    rz = i(906688),
    rY = i(523896);
function rX(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rM.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = rF()(i),
        m = null != o && s,
        A = m ? es.D : "div";
    return (0, E.jsxs)(A, {
        className: e4()(rY.kL, m && rY.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, E.jsx)("div", {
                className: rY.zc,
                children: (0, E.jsx)(rz.A, { achievementId: t, size: rz.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, E.jsxs)("div", {
                className: rY.VW,
                children: [
                    null != i &&
                        (0, E.jsx)(el.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rY.YR,
                            children: (0, rB.mk)(g),
                        }),
                    (0, E.jsx)(el.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, E.jsx)(el.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rH = i(885959);
function rK(e) {
    let { onBackClick: t } = e,
        i = (0, g.bG)([rk.A], () => rk.A.getAllUnlockedAchievements()),
        n = S.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = S.useMemo(
            () =>
                Object.values(rM.l0)
                    .filter(N.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)(es.D, {
                onClick: t,
                className: rH.vv,
                children: [
                    (0, E.jsx)(rV.A, { direction: rV.A.Directions.LEFT, className: rH.Kk }),
                    (0, E.jsx)(el.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: rH.N1,
                children: [
                    (0, E.jsxs)("div", {
                        className: rH.if,
                        children: [
                            (0, E.jsx)(eG.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, E.jsx)("div", {
                        className: rH.nr,
                        children: (0, E.jsx)(rj.O, {
                            size: "custom",
                            color: ea.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, E.jsx)("div", {
                    className: rH.yF,
                    children: (0, E.jsx)("div", {
                        className: rH.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, E.jsx)(rX, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, E.jsxs)("div", {
                    className: rH.yF,
                    children: [
                        (0, E.jsx)("div", {
                            className: rH.if,
                            children: (0, E.jsx)(el.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, E.jsx)("div", {
                            className: rH.Eh,
                            children: s.map((e) => (0, E.jsx)(rX, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, E.jsx)("div", { className: rH.yF, children: (0, E.jsx)("div", { className: rH.F3 }) }),
        ],
    });
}
var rW = i(224964),
    rZ = i(31408),
    rq = i(739347);
let rQ = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rJ = (0, eZ.range)(0, 11),
    r$ = (0, eZ.range)(0, 2.25, 0.25),
    r0 = (0, eZ.range)(1, 11),
    r1 = (0, eZ.range)(1, 26),
    r2 = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function r3(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, E.jsx)(
                $.d,
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
    return (0, E.jsx)(iI.n, { label: j.intl.string(j.t.bWVN1D), children: l });
}
function r6(e) {
    let { children: t } = e;
    return (0, E.jsx)(el.E, { className: rq.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function r4(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, g.bG)([i5.A], () => i5.A.useReducedMotion);
    return (0, E.jsx)($.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, rG._)(rM.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, sg.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? rQ : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function r7(e) {
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
    return (0, E.jsxs)(iI.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, E.jsx)($.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rq.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, E.jsx)(r6, { children: j.intl.string(j.t.a18Sug) }),
                    (0, E.jsx)(nc.A, {
                        disabled: a,
                        markers: r0,
                        stickToMarkers: !0,
                        minValue: r0[0],
                        maxValue: r0[r0.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rq.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, E.jsx)(r6, { children: j.intl.string(j.t.xoldVn) }),
                    (0, E.jsx)(nc.A, {
                        disabled: a,
                        markers: r1,
                        stickToMarkers: !0,
                        minValue: r1[0],
                        maxValue: r1[r1.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, E.jsx)(r3, {
                disabled: a,
                locations: [
                    {
                        location: rZ.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: rZ.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: rZ.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: rZ.k.CALL_TILE,
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
function r5(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, E.jsxs)(iI.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, E.jsx)($.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, E.jsx)($.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rq.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, E.jsx)(r6, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, E.jsx)(nc.A, {
                        disabled: r,
                        markers: rJ,
                        stickToMarkers: !0,
                        minValue: rJ[0],
                        maxValue: rJ[rJ.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function r8(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, g.bG)([i5.A], () => i5.A.useReducedMotion),
        a = !t || !i || r;
    return (0, E.jsxs)(iI.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, E.jsx)($.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rq.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, E.jsx)(r6, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, E.jsx)(nc.A, {
                        disabled: a,
                        markers: r$,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: r$[0],
                        maxValue: r$[r$.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, rG._)(rM.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === r$[r$.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, E.jsx)(r3, {
                disabled: a,
                locations: [
                    {
                        location: rZ.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: rZ.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: rZ.uD.MENTION,
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
function r9(e) {
    let { updateSettings: t } = e;
    return (0, E.jsx)(iI.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, E.jsxs)(J.B, {
            gap: 16,
            children: [
                (0, E.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, E.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rq.hw,
                    children: (0, E.jsx)(eM.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sy.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function ae(e) {
    let { onChangePage: t } = e;
    return (0, E.jsxs)(es.D, {
        onClick: () => t(1),
        className: rq.Tq,
        children: [
            (0, E.jsx)("div", {
                className: rq.w1,
                children: (0, E.jsx)(rj.O, { size: "md", color: ea.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, E.jsxs)("div", {
                className: rq.qL,
                children: [
                    (0, E.jsx)(eG.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, E.jsx)(el.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, E.jsx)(tR._, { size: "custom", color: "currentColor", width: 16, className: rq.nT }),
        ],
    });
}
let at = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function ai(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, g.cf)([ry.A], () => ry.A.getState()),
        [s, l] = S.useState({ x: 0, y: 0 }),
        r = (0, rW.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rL.Ak)("poggermode_enabled"),
                    (0, rP.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rU.O9)(e),
                null == t)
            )
                return;
            let A =
                ((l = n.confettiEnabled),
                (a = e.confettiEnabled),
                (o = n.enabled),
                (u = e.enabled),
                (a ?? l) && (u ?? o));
            0 === t && A && r.fire(s.x, s.y, { settings: e });
            let h =
                ((d = n.screenshakeEnabled),
                (c = e.screenshakeEnabled),
                (g = n.enabled),
                (m = e.enabled),
                (c ?? d) && (m ?? g));
            1 === t && h && (0, rP.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
    return (
        S.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, E.jsxs)(J.B, {
            gap: 24,
            children: [
                (0, E.jsx)(r4, { settings: n, updateSettings: a }),
                (0, E.jsx)(ae, { onChangePage: t }),
                (0, E.jsx)(r5, { settings: n, updateSettings: a }),
                (0, E.jsx)(r8, { settings: n, updateSettings: a }),
                (0, E.jsx)(r7, { settings: n, updateSettings: a }),
                (0, E.jsx)(r9, { updateSettings: a }),
            ],
        })
    );
}
let an = (e) => (0 === e ? rR.f.LEFT : rR.f.RIGHT),
    as = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = S.useState(0),
                [i, n] = S.useState(an(e)),
                [s, l] = S.useState(!1),
                r = (0, g.bG)([i5.A], () => i5.A.useReducedMotion),
                a = s && !r;
            return (
                S.useEffect(() => {
                    let t = setTimeout(() => {
                        n(an(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                S.useEffect(() => {
                    (0, rD._)(r2[e]);
                }, [e]),
                S.useEffect(() => {
                    Math.random() > 0.99 && (0, rG._)(rM.sn.VISITOR_100);
                }, []),
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(rR.A, {
                            className: rq.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, E.jsx)(ai, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, E.jsx)(rK, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, E.jsx)("div", {
                            className: a ? rq.Sr : rq.IP,
                            children: (0, E.jsx)(rO.a, {
                                className: rq.gT,
                                importData: at,
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
    al = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [as] });
var ar = i(736170);
let aa = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [al] }),
    ao = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, E.jsx)("img", { alt: "", src: i(724405), className: ar.$ }),
        usePredicate: () => (0, g.bG)([ry.A], () => ry.A.settingsVisible),
        buildLayout: () => [aa],
    });
var au = i(307301);
let ad = (0, a.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => j.intl.string(j.t.GfBL83),
    useSubtitle: () => j.intl.string(j.t.XGyhhc),
    usePredicate: () => (0, c.uF)(),
    useValue: () => rS.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rS.setState({ startMinimized: e }), sm.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rS.useState((e) => e.openOnStartup),
    initialize: () => {
        sm.Ay.getSetting("START_MINIMIZED", !1).then((e) => rS.setState({ startMinimized: e }));
    },
});
var ac = i(839610),
    ag = i(145339);
function am(e) {
    let { keybind: t } = e,
        i = eQ.dI(t.shortcut);
    return se.A.hasBind(i)
        ? (0, E.jsx)("div", {
              className: ag.$e,
              children: (0, E.jsx)(Q.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : iD.Yy.has(i)
          ? (0, E.jsx)("div", {
                className: ag.$e,
                children: (0, E.jsx)(Q.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: t_.A.getArticleURL(U.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function aA(e) {
    let { keybind: t } = e;
    return t.action === U.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, E.jsx)(l7, { keybind: t, className: ag._M }) : null;
}
let ah = S.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = S.useCallback((e) => tX.A.setKeybind({ ...t, action: e }), [t]),
        l = S.useCallback((e) => tX.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = S.useCallback(() => tX.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = S.useCallback(() => tX.A.deleteKeybind(t.id), [t.id]),
        o = S.useId(),
        u = S.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, E.jsxs)("div", {
        className: ag.f_,
        children: [
            (0, E.jsx)(am, { keybind: t }),
            (0, E.jsx)("div", {
                className: ag.XI,
                children: (0, E.jsx)(lR.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, E.jsx)("div", {
                className: ag.LE,
                children: (0, E.jsx)(sF.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, E.jsx)(tH.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, E.jsxs)("div", {
                className: ag.ne,
                children: [
                    !t.managed &&
                        (0, E.jsx)(lL.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lD.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, E.jsx)(ta.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsx)(eu.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, E.jsx)(ac.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, E.jsx)(el.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ag.h_,
                children: i[t.action],
            }),
            (0, E.jsx)(aA, { keybind: t }),
        ],
    });
});
var aE = i(354594);
let aS = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = rn();
        return 0 === e.length
            ? (0, E.jsx)(el.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, E.jsx)("div", {
                  className: aE.A,
                  children: e.map((n, s) =>
                      (0, E.jsxs)(
                          S.Fragment,
                          {
                              children: [
                                  (0, E.jsx)(ah, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, E.jsx)(eU.c, { className: aE.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    aT = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return c.Av
                ? (0, E.jsx)(aS, {})
                : (0, E.jsx)(Q.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: U.X7G.DOWNLOAD }),
                  });
        },
    }),
    ax = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
        Component: () => (0, E.jsx)(ro, { showHeader: !1 }),
    }),
    ap = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [rx, ad, rp, sh],
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        initialize: () => {
            rT();
        },
    }),
    af = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [aT],
        initialize: () => (tX.A.enableAll(!1), () => tX.A.enableAll(!0)),
        useInlineNotice: function () {
            return c.Av
                ? {
                      type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, E.jsxs)(J.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, E.jsx)(Q.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, E.jsx)(lz, { sourcePage: "keybinds" }),
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
                              icon: au.j,
                              onClick: () => tX.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    aN = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [ax],
    }),
    a_ = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => c.Av && ((0, c.uF)() || (0, c.j9)()),
        buildLayout: () => [rI],
    }),
    aI = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [ap, af, aN, a_],
    }),
    aC = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: lO.F,
        buildLayout: () => [aI],
    });
var ab = i(831544),
    av = i(922795),
    ay = i(212245),
    aj = i(329551),
    aO = i(285918),
    aR = i(413339),
    aL = i(952572),
    aD = i(382003);
let aP = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: aL.A,
        Component: function () {
            let e = (0, ay.p)(),
                t = S.useRef(!1),
                i = (0, g.bG)([lk.Ay], () => lk.Ay.getVideoDeviceId()),
                [n, s] = S.useState((0, aj.i)(iu.default.getCurrentUser())),
                l = S.useRef(n);
            return (
                S.useEffect(
                    () => () => {
                        t.current && (0, aO._C)(l.current);
                    },
                    [],
                ),
                (0, E.jsx)(aD.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, aR.gB)(i, { location: e.location }).catch(U.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aG = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            L.bm.updateSetting(e), G.default.track(U.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aM = i(625841),
    aU = i(74848),
    aV = i(204050);
let ak = (0, nP.D)(() => ({ previewEnabled: !1 }));
var aw = i(731854);
let aF = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, g.bG)([lk.Ay], () => lk.Ay.isVideoAvailable()),
            { id: t } = (0, aU.x5)(aw.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nZ.Ay)();
        return (0, E.jsx)(aM.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: aw.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aV.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          ak.setState({ previewEnabled: !1 }),
                              window.open((0, aV.i)(t)),
                              G.default.track(U.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aB = i(745317),
    az = i(886964);
let aY = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = lk.Ay.getCameraComponent(),
                t = (0, g.bG)([lk.Ay], () => lk.Ay.getVideoDeviceId()),
                i = ak.useField("previewEnabled"),
                n = (0, g.bG)([lk.Ay], () => lk.Ay.isVideoAvailable());
            return ((0, tm.l0)(() => {
                ak.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, E.jsx)("div", {
                      className: az.T,
                      children: (0, E.jsxs)("div", {
                          className: az.U,
                          children: [
                              (0, E.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, E.jsx)(aB.k, {}),
                          ],
                      }),
                  })
                : (0, E.jsx)("div", {
                      className: az.T,
                      children: (0, E.jsx)(ta.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, E.jsx)(eM.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => ak.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aX = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, g.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.VIDEO)),
        buildLayout: () => [aY, aG, aF, aP],
    });
function aH() {
    sa.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aK = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        aH();
    },
});
var aW = i(827343);
let aZ = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, c.j9)();
        },
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aW.A.setOpenH264Enabled(e),
                (0, sg.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => ls.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aq = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getAecDump());
        },
        setValue: aW.A.setAecDump,
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.isAecDumpSupported());
        },
    });
var aQ = i(139033),
    aJ = i(862482),
    a$ = i(640238),
    a0 = i(825484),
    a1 = i(77138),
    a2 = i(487329),
    a3 = i(353835);
let a6 = (0, nP.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function a4() {
    let e = await ls.A.fileManager.getLogPath();
    ls.A.fileManager.showItemInFolder(e);
}
function a7(e) {
    (0, sg.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => aW.A.setDebugLogging(e),
    });
}
async function a5(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lk.Ay.getMediaEngine().writeAudioDebugState(),
            await a3.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, a1.a)(U.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, aQ.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, a2.B1)(a2.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, W.openModal)((i) =>
                (0, E.jsx)(a$.a, {
                    header: e,
                    confirmButtonColor: aJ.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, E.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: t }),
                            (0, E.jsx)(el.E, {
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
async function a8() {
    await a5({
        onUploadStart: () => a6.setState({ isUploading: !0 }),
        onUploadFinish: () => a6.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let a9 = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, g.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.DEBUG_LOGGING));
        return c.Av && e && null != ls.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, g.bG)([lk.Ay], () => lk.Ay.getDebugLogging()),
            t = a6.useField("isUploading"),
            i = a6.useField("isDisabled"),
            n = S.useId();
        return (0, E.jsxs)("fieldset", {
            children: [
                (0, E.jsx)(eu.A, { tag: "legend", id: n, children: j.intl.string(j.t["FjN+et"]) }),
                (0, E.jsxs)(J.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, E.jsx)($.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: a7,
                        }),
                        (0, E.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, E.jsxs)(a0.e, {
                                children: [
                                    (0, E.jsx)(eM.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: a8,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, E.jsx)(eM.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: a4,
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
var oe = i(233545),
    ot = i(412780);
function oi() {
    return (0, g.bG)([iu.default, lk.Ay], () => {
        let e = iu.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === sm.Ay.releaseChannel || "development" === sm.Ay.releaseChannel,
            n = lk.Ay.supports(aw.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let on = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, g.bG)([ot.Ay], () => ot.Ay.shouldRecordNextConnection());
        },
        setValue: oe.Et,
        usePredicate: oi,
    }),
    os = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: oe.YW,
        usePredicate: oi,
    });
var ol = i(926919),
    or = i(111162),
    oa = i(855302);
let oo = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, g.bG)([or.default], () => or.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = or.default.isStreamInfoOverlayEnabled;
            (0, oa.A)("stream_info_overlay_enabled", e, t), (0, ol.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    ou = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [oo, aq, on, os, a9],
    });
function od(e, t, i) {
    (0, sg.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let oc = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            od(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), aW.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    og = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [aZ, ou, aK, oc],
    });
var om = i(347481),
    oA = i(852712),
    oh = i(199966),
    oE = i(963935);
function oS(e) {
    let { title: t } = e;
    return t;
}
function oT(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function ox(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, E.jsx)(oT, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function op(e) {
    return e.type === oE.Z6.LIST;
}
function of(e, t) {
    let { limit: i = 2, formatter: n = oS } = t ?? {};
    tY()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, oh._)(),
        r = s.get(e) ?? l.get(e);
    tY()(
        null != r && (r.type === oE.Z6.ACCORDION || op(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = op(r) ? (r.collapseAfter ?? 0) : 0,
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
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: ox({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: ox({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ox({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: ox({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ox({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: ox({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: ox({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: ox({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ox({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: ox({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ox({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: ox({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let oN = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aW.A.setAutomaticGainControl(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([lk.Ay, om.A], () => {
                let e = lk.Ay.getInputDeviceId();
                return om.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.isAutomaticGainControlSupported() && lk.Ay.isInputProfileCustom());
        },
    }),
    o_ = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            aW.A.setAttenuation(e, lk.Ay.getAttenuateWhileSpeakingSelf(), lk.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lk.Ay.getAttenuation(),
    }),
    oI = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, g.bG)([lk.Ay], () => lk.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aW.A.setAttenuation(lk.Ay.getAttenuation(), e, lk.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oC = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, g.bG)([lk.Ay], () => lk.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aW.A.setAttenuation(lk.Ay.getAttenuation(), lk.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    ob = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, g.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.ATTENUATION)),
        buildLayout: () => [o_, oI, oC],
    });
var ov = i(801644);
let oy = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, g.bG)([nO.Ay], () => !nO.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, oa.A)("hardware_mute_silence_alert_enabled", e, !nO.Ay.disableHardwareMuteSilenceAlert),
                s3.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = ov.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oj = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aW.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.showBypassSystemInputProcessing() && lk.Ay.isInputProfileCustom());
        },
    }),
    oO = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, g.bG)([nO.Ay], () => !nO.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, oa.A)("switch_channel_warning_enabled", e, !nO.Ay.disableVoiceChannelChangeAlert),
                s3.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oR = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => {
                let { vadUseKrisp: e } = lk.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lk.Ay.getMode();
            aW.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, g.bG)(
                [lk.Ay],
                () => lk.Ay.getMode() !== U.TBI.VOICE_ACTIVITY || !lk.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.isAdvancedVoiceActivitySupported() && lk.Ay.isInputProfileCustom());
        },
    }),
    oL = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            od(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => aW.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, g.cf)([lk.Ay], () => ({
                legacyAudioSubsystemSupported: lk.Ay.supports(aw.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lk.Ay.supports(aw.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lk.Ay.supports(aw.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return S.useMemo(() => {
                let n;
                return (
                    (n = [{ id: aw.rB.STANDARD, value: aw.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: aw.rB.LEGACY, value: aw.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: aw.rB.EXPERIMENTAL, value: aw.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: aw.rB.AUTOMATIC, value: aw.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oD = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getQoS());
        },
        setValue: function (e) {
            aW.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.QOS));
        },
    }),
    oP = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aW.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eH.isPlatformEmbedded;
        },
    }),
    oG = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            of(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, g.bG)([lk.Ay], () => lk.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oN, oR, oj, oP, oy, oO, ob, oL, oD],
    }),
    oM = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aW.A.setEchoCancellation(e, { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, g.bG)([lk.Ay, om.A], () => {
                let e = lk.Ay.getInputDeviceId();
                return om.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.isInputProfileCustom());
        },
    });
var oU = i(459838),
    oV = i(451988),
    ok = i(801102),
    ow = i(160671);
let oF = (0, sR.Ld)();
function oB(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, E.jsx)("div", {
        role: "meter",
        className: e4()(ok.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, E.jsx)("div", { className: e4()(ok.Jx, ok.NU, { [ok.zY]: t && !r, [ok.r9]: r }) }),
    });
}
function oz(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, g.cf)([lk.Ay], () => ({
            threshold: lk.Ay.getModeOptions().threshold,
            autoThreshold: lk.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, g.bG)([lk.Ay], () => lk.Ay.getMode());
    return (0, E.jsx)("section", {
        className: e4()(ok.Mo, ok.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, E.jsx)(nc.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aW.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: ea.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: ea.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oF,
            disabled: l,
            children: (0, E.jsxs)("div", {
                className: e4()(ok.NU, ok.TL, ok.Jx, ow.bar),
                children: [
                    (0, E.jsx)("div", { className: e4()(ok.GS, ok.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, E.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oY = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, g.bG)([lk.Ay], () => lk.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, g.cf)([lk.Ay], () => ({
                autoThreshold: lk.Ay.getModeOptions().autoThreshold,
                disabled: lk.Ay.getMode() !== aw.TB.VOICE_ACTIVITY,
            })),
            i = S.useCallback((e) => {
                let t = lk.Ay.getMode(),
                    { threshold: i } = lk.Ay.getModeOptions();
                aW.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, g.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = S.useState(-100),
                    [i, n] = S.useState(!1);
                function s(e, i) {
                    t(e), n((i & aw.ME.VOICE) === aw.ME.VOICE);
                }
                return (
                    S.useEffect(() => {
                        let e = new oV.Ep();
                        return (
                            e.start(1e3, () => {
                                lk.Ay.getMediaEngine().on(oU.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lk.Ay.getMediaEngine().removeListener(oU.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, g.bG)([lk.Ay], () => lk.Ay.isEnabled()),
            a = S.useMemo(
                () =>
                    !r &&
                    (0, E.jsx)("div", {
                        className: ok.B4,
                        children: (0, E.jsx)(Q.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => aW.A.enable(!0) }),
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
                      (0, E.jsx)(eu.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, E.jsx)(eu.A, { id: d, children: o }),
                      (0, E.jsxs)(J.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, E.jsx)($.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, E.jsx)(oB, {
                                        isSpeaking: l,
                                        className: ok.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oz, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, E.jsxs)(J.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, E.jsx)(sF.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, E.jsx)(oB, {
                                        isSpeaking: l,
                                        className: ok.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, E.jsx)(oz, {
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
var oX = i(366010);
let oH = i(993830),
    oK = i(413142),
    oW = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO };
function oZ() {
    let e = (0, g.bG)([ib.A], () => (0, oX.q)(ib.A.theme));
    return (0, E.jsx)("img", { src: e ? oH : oK, width: 48, height: 32, alt: "" });
}
let oq = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, g.bG)([lk.Ay], () => lk.Ay.isInputProfileCustom() && lk.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = S.useCallback((e) => {
                aW.A.setNoiseCancellation("KRISP" === e, oW), aW.A.setNoiseSuppression("STANDARD" === e, oW);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, g.cf)([lk.Ay], () => ({
                noiseCancellation: lk.Ay.getNoiseCancellation(),
                noiseSuppression: lk.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lk.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lk.Ay.isNoiseCancellationSupported(),
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
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: t_.A.getArticleURL(U.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, E.jsxs)(J.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, E.jsx)(lR.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, E.jsx)(oZ, {}),
            ],
        });
    },
});
var oQ = i(934729),
    oJ = i(621380);
let o$ = !c.Av;
function o0() {
    return (0, g.bG)([lk.Ay], () => lk.Ay.getMode() === aw.TB.PUSH_TO_TALK);
}
let o1 = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return c.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, g.bG)([lk.Ay], () => lk.Ay.getMode());
        return S.useMemo(() => {
            if (!c.Av && e === aw.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, oQ._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, g.bG)([lk.Ay], () => lk.Ay.getActiveInputProfile() !== oJ.m.STUDIO);
    },
    useValue: function () {
        return (0, g.bG)([lk.Ay], () => lk.Ay.getMode() === aw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? aw.TB.PUSH_TO_TALK : aw.TB.VOICE_ACTIVITY),
            (n = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === aw.TB.PUSH_TO_TALK &&
                o$ &&
                (0, W.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, E.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, oQ._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            aW.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var o2 = i(371060);
let o3 = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: o0,
        Component: function () {
            let e = (0, g.bG)([lk.Ay], () => {
                    let { shortcut: e } = lk.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, { onClick: () => (0, eK.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, E.jsx)("div", {
                    className: o2.e,
                    children: (0, E.jsx)(tH.A, {
                        defaultValue: e,
                        onChange: (e) => aW.A.setMode(U.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    o6 = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            aW.A.setMode(U.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: U.IjB,
        getInitialValue: function () {
            let { delay: e } = lk.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: o0,
    }),
    o4 = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oA._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getActiveInputProfile() ?? oJ.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aW.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oA.d)({ location: "InputProfileCategory" });
            return [
                { value: oJ.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: oJ.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: oJ.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    o7 = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, g.bG)([om.A, lk.Ay], () => {
                let e = lk.Ay.getInputDeviceId();
                return (
                    (om.A.hasEchoCancellation(e) || om.A.hasNoiseSuppression(e) || om.A.hasAutomaticGainControl(e)) &&
                    lk.Ay.isInputProfileCustom()
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
        buildLayout: () => [o4, oY, oq, oM, o1, o3, o6, oG],
    });
var o5 = i(403581),
    o8 = i(983851),
    o9 = i(687021),
    ue = i(128450),
    ut = i(796774),
    ui = i(209932),
    un = i(813564),
    us = i(984813),
    ul = i(22231),
    ur = i(428262),
    ua = i(792348),
    uo = i(674168),
    uu = i(277192),
    ud = i(805945),
    uc = i(902460);
function ug(e) {
    let { onSelect: t } = e,
        [i, n] = S.useState(!1),
        s = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        l = ur.Ay.canUseCustomCallSounds(s),
        r = S.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, E.jsx)(et.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(iY.l, {
                children: (0, E.jsx)(uu.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, E.jsx)(uo.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, E.jsx)(ud.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, E.jsx)(ul.R, { size: "md", color: "currentColor", className: uc.Wo }),
            }),
    });
}
function um(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, ua.A)(t, null),
        n =
            0 === (0, un.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, E.jsx)(ud.dT, {
        onClick: i,
        text: n,
        children: (0, E.jsx)(o8.H, { size: "md", color: "currentColor", className: uc.wg }),
    });
}
function uA(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, E.jsxs)("div", {
        className: uc.D6,
        children: [
            (0, E.jsxs)("div", {
                className: uc.kL,
                children: [
                    a && (0, E.jsx)(sx.A, { emojiId: l, emojiName: r, className: uc.Zg }),
                    (0, E.jsx)(el.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: uc.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, E.jsx)(el.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, E.jsx)(um, { sound: t })
                        : (0, E.jsx)(o8.H, { size: "md", color: "currentColor", className: uc.Gk }),
                ],
            }),
            (0, E.jsxs)("div", {
                className: uc.kL,
                children: [
                    (0, E.jsx)(ug, { onSelect: n }),
                    s &&
                        !i &&
                        (0, E.jsx)(ud.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, E.jsx)(lD.u, {
                                size: "md",
                                color: ea.A.unsafe_rawColors.RED_400.css,
                                className: uc.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var uh = i(617617);
i(980504);
var uE = i(384863);
function uS(e) {
    return (0, g.bG)([ui.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return ui.A.getSound("0" === t ? "0" : t, i);
    });
}
function uT(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([uh.A], () => uh.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = uS(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, E.jsxs)("div", {
        className: uE.Io,
        children: [
            r
                ? (0, E.jsx)(sx.A, { emojiId: s, emojiName: l, className: uE.nW })
                : (0, E.jsx)(o8.H, { size: "md", color: "currentColor", className: uE.nW }),
            (0, E.jsx)(el.E, { className: uE.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let ux = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nZ.Ay)(),
            [t, i] = S.useState("0"),
            n = (0, us.mz)(t),
            s = uS(n),
            l = n?.type === us.PP.GLOBAL,
            r = (0, g.bG)([ui.A], () => ui.A.hasFetchedAllSounds()) && null != n && null == s;
        S.useEffect(() => {
            r && (0, un.ND)({ location: e });
        }, [r, e]),
            S.useEffect(() => {
                (0, ut.E7)();
            }, []);
        let a = S.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, E.jsx)(uT, { guildId: e.value }) : null;
        }, []);
        return (0, E.jsxs)(iI.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: t_.A.getArticleURL(U.MVz.SOUNDBOARD) }),
            children: [
                (0, E.jsx)(o9.A, {
                    guildId: t,
                    className: uE.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, E.jsxs)(ue.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: uE.ax }),
                    }),
                    children: [
                        (0, E.jsx)(uA, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, un.Dv)(t, e) : (0, un.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, E.jsx)(tN.p, {
                                className: uE.lm,
                                messageType: tN.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var up = i(824744);
let uf = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: t_.A.getArticleURL(U.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, up.w)(e);
        (0, ut.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, un.wH)();
        return (0, up.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uN = i(864145);
let u_ = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, up.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, up.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uN.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uI = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [uf, u_, ux],
    });
var uC = i(803224),
    ub = i(552122);
let uv = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != ub.A.useHolidaySoundpack(),
        Component: () =>
            (0, E.jsx)(el.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, eK.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uy = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uj = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uy] });
var uO = i(264686);
let uR = (0, nP.D)(() => ({ currentPlayingSound: null }));
function uL() {
    let e = uR.getField("currentPlayingSound");
    e?.stop(), uR.setState({ currentPlayingSound: null });
}
function uD(e) {
    let t = uR.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rL.Ak)(e);
    uR.setState({ currentPlayingSound: i });
}
function uP(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uD(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, g.bG)([uC.A], () => uC.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uC.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uO.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, g.bG)([uC.A], () => uC.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uG = [
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
    uM = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => of(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uL();
            };
        },
        buildLayout: () => uG.map((e) => uP(e)),
    }),
    uU = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, g.bG)([uC.A], () => uC.A.getDisableAllSounds());
            return S.useMemo(() => {
                if (e)
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            j.intl.format(j.t.fRvixS, {
                                onClick: () => (0, eK.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uM, uv, uj],
    }),
    uV = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            (0, oa.A)("stream_previews_disabled", !e, L.uh.getSetting(), [e2.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e);
        },
    }),
    uk = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getVideoHook());
        },
        setValue: aW.A.setVideoHook,
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.supportsVideoHook());
        },
    }),
    uw = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getExperimentalSoundshare());
        },
        setValue: aW.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => {
                let e = lk.Ay.supportsExperimentalSoundshare(),
                    t = lk.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uF = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aW.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lk.Ay.supports(aw.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uB = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aW.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lk.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, g.bG)([lk.Ay], () => lk.Ay.getSidechainCompression());
            return lk.Ay.supports(aw.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    uz = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, c.cX)() && e
                ? (0, sg.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aW.A.setUseSystemScreensharePicker(e), ls.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : aW.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, g.bG)([lk.Ay], () => lk.Ay.supportsSystemScreensharePicker() && (0, c.cX)());
        },
    }),
    uY = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => of(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uF, uB, uz, uw, uk],
    }),
    uX = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [uV, uY] });
var uH = i(106713);
let uK = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = uH.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, E.jsx)(aM.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: aw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    uW = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = uH.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, E.jsx)(aM.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: aw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    uZ = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uK, uW] }),
    uq = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lk.Ay.getInputVolume();
            return (0, up.M)(e);
        },
        asValueChanges: function (e) {
            let t = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, up.w)(e);
            aW.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uQ = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lk.Ay.getOutputVolume();
            return (0, up.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [e2.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, up.w)(e);
            aW.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uJ = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uq, uQ] });
var u$ = i(702841),
    u0 = i(349288),
    u1 = i(152567),
    u2 = i(593290);
let u3 = `${t_.A.getArticleURL(U.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    u6 = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, u$.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, u$.bG)([lk.Ay], () => lk.Ay.supports(aw.O5.LOOPBACK))
                ? (0, E.jsx)(u1.A, {
                      size: "md",
                      notchBackground: u1.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, E.jsxs)(E.Fragment, {
                          children: [
                              (0, E.jsx)(el.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, E.jsx)(u0.Anchor, {
                                  className: u2.X,
                                  href: t_.A.getArticleURL(U.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: u3 }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    u4 = eH.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function u7(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, E.jsxs)(J.B, {
        children: [
            i && (0, E.jsx)(lz, { sourcePage: "voice" }),
            t && (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let u5 = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = lB("voice"),
                t = (0, aU.x5)(aw.oh.AUDIO_INPUT),
                i = (0, aU.x5)(aw.oh.AUDIO_OUTPUT),
                n = S.useMemo(() => {
                    let e = u4.some((e) => t?.hardwareId?.startsWith(e)),
                        n = u4.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return S.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: h.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, E.jsx)(u7, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uZ, uJ, u6],
    }),
    u8 = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [u5, o7, aX, uX, uU, uI, og],
    }),
    u9 = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => lk.Ay.isSupported(),
        icon: ab.c,
        useMenu: av.A,
        buildLayout: () => [u8],
    }),
    de = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rx, ad, rp, rI],
        initialize: () => {
            rT();
        },
    }),
    dt = (0, a.t_)(u.X.WINDOWS_PANEL, { useTitle: () => j.intl.string(j.t.ZkDZov), buildLayout: () => [de] }),
    di = (0, a.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.ZkDZov),
        icon: tu.k,
        usePredicate: () => eH.isPlatformEmbedded && (0, eH.isWindows)(),
        buildLayout: () => [dt],
    }),
    dn = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: function () {
            let e = (0, o.SB)("AppSection_buildLayout");
            return [u9, lj, ss, ao, e ? aC : rg, rE, e ? null : di, e ? null : rv].filter(N.Vq);
        },
    });
var ds = i(360669),
    dl = i(974544),
    dr = i(546605),
    da = i(423764),
    du = i(289873),
    dd = i(835245),
    dc = i(465323),
    dg = i(37766),
    dm = i(194261),
    dA = i(391048),
    dh = i(753390),
    dE = i(99696),
    dS = i(202613),
    dT = i(615405),
    dx = i(580630),
    dp = i(83617),
    df = i(935208),
    dN = i(607399),
    d_ = i(150934),
    dI = i(256006),
    dC = i(198970),
    db = i(71532);
let dv = /[^0-9/]/g,
    dy = /[^0-9]/g;
class dj extends S.PureComponent {
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
                ((n = (i = e.replace(dv, "").split("/"))[0]),
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
            ? (u = u.replace(dy, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, E.jsx)(lX.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dO = i(832208),
    dR = i(536439);
let dL = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sR.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dR.ep,
                        renderInput: (e) => (0, E.jsx)(dj, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dD = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = S.useState(!1),
            [a, o] = S.useState(null),
            [u, d] = S.useState(n);
        return (
            S.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, E.jsx)(dO.A, {
                className: i,
                form: dL,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, db.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dP = i(219887),
    dG = i(276589);
let dM = "isDefault";
class dU extends S.PureComponent {
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
            expiresMonth: t instanceof dS.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dS.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        sa.h.wait(() => {
            (0, dh.ey)(), (0, dh.tc)();
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
                      className: dG.zc,
                      children: (0, E.jsx)(Q.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, E.jsx)("div", {
                  className: dG.zc,
                  children: (0, E.jsx)(Q.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dI.g)(i);
        return (0, E.jsxs)("div", {
            className: dG.yV,
            children: [
                (0, E.jsx)(el.E, {
                    className: dG.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, E.jsx)(dC.Ay, {
                    ...e,
                    mode: dC.Ay.Modes.EDIT,
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
            className: dG.yV,
            children: [
                (0, E.jsx)(el.E, { className: dG.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, E.jsx)(dD, {
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
            className: dG.AU,
            children: (0, E.jsxs)(J.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, E.jsx)(a0.e, {
                        children: (0, E.jsxs)("div", {
                            className: dG.lH,
                            children: [
                                i
                                    ? (0, E.jsx)(ta.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, E.jsx)("div", { "aria-hidden": !0, className: dG.dm }),
                                      })
                                    : null,
                                (0, E.jsx)(eM.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dN.Fr ? "sm" : "md",
                                    text: dN.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsxs)(a0.e, {
                        children: [
                            (0, E.jsx)(eM.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dN.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, E.jsx)(eM.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dN.Fr ? "sm" : "md",
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
            r = e instanceof dS.SJ;
        return (0, E.jsx)(ev.Z, {
            editable: !0,
            className: e4()(dG.Nr, n),
            children: (0, E.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, E.jsxs)("div", {
                        className: dG.__invalid_paymentSection,
                        children: [
                            (0, E.jsx)(dP.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, E.jsx)("div", { className: dG.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, E.jsx)("div", {
                                className: dG.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, E.jsx)("div", {
                        className: dG.D5,
                        children: (0, E.jsx)(d_.S, {
                            value: dM,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dM),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, E.jsx)(eU.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dV = g.Ay.connectStores([dT.A], () => ({ updateError: dT.A.editSourceError, removeError: dT.A.removeSourceError }))(
    dU,
);
var dk = i(776409),
    dw = i(447774),
    dF = i(95322);
function dB() {
    (0, dE.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, dd.A)() });
}
class dz extends S.PureComponent {
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
            ? (0, E.jsx)(dV, {
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
                      n ? null : (0, E.jsx)(eU.c, { className: dF.__invalid_sourceDivider }),
                      (0, E.jsxs)("div", {
                          className: dF.Yb,
                          children: [
                              (0, E.jsx)(dP.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, E.jsx)(eM.$, {
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
let dY = S.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = S.useState(null),
        o = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, g.bG)([dT.A], () => dT.A.ipCountryCode),
        d = S.useMemo(() => (0, dc.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        S.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : dh.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, E.jsxs)(E.Fragment, {
            children: [
                i ? null : (0, E.jsx)(eU.c, { className: dF.__invalid_sourceDivider }),
                (0, E.jsxs)("div", {
                    className: dF.Yb,
                    children: [
                        void 0 !== t
                            ? (0, E.jsx)(dP.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, E.jsxs)(lZ.A, {
                                  align: lZ.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)(dg._, { size: "lg" }),
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/medium",
                                          className: dw.Wi,
                                          children: j.intl.string(dk.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, E.jsxs)("div", {
                            className: dF.zy,
                            children: [
                                (0, E.jsx)("div", {
                                    className: dF.Tq,
                                    children:
                                        null == r
                                            ? (0, E.jsx)(du.y, { type: du.y.Type.SPINNING_CIRCLE })
                                            : (0, E.jsx)(el.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dx.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, E.jsx)(eM.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: j.intl.string(dk.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dX extends S.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dh.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dh.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dh.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dp.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, W.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, E.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dA.ET)();
                },
                onCloseRequest: U.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, E.jsxs)("div", {
            className: dF.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, E.jsxs)("div", {
                          className: dF.z8,
                          children: [
                              (0, E.jsx)(el.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dF.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, E.jsx)(eM.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
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
            u = eq()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : df.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dS.LQ)),
            c = u.filter((e) => e instanceof dS.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, E.jsx)(
                    dz,
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
                              dY,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: dB,
                              },
                              e.id,
                          ),
                      )
                    : (0, E.jsx)(dY, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: dB,
                      })),
            (0, E.jsxs)(E.Fragment, {
                children: [
                    t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsxs)(eG.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, E.jsx)(dm.X, { size: "sm", className: dF.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, E.jsx)(eU.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dH = i(459357),
    dK = i(295405),
    dW = i(166403),
    dZ = i(773669),
    dq = i(589764);
function dQ() {
    let e = (0, dr.vg)("PaymentMethodsHeader"),
        t = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, da.Gw)(t.country) } : null;
}
let dJ = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, g.bG)([dT.A], () => dT.A.isSyncing),
                n = (0, g.bG)([dK.A], () => dK.A.paymentSources),
                s = (0, g.bG)([dK.A], () => dK.A.defaultPaymentSourceId),
                l = (0, g.bG)([dZ.default], () => dZ.default.locale),
                r = (0, g.bG)([dW.A], () => dW.A.getPremiumTypeSubscription()),
                a = (0, g.bG)([dT.A], () => dT.A.isRemovingPaymentSource),
                o = (0, g.bG)([dT.A], () => dT.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dH.c)({ location: "UserSettingsBilling" });
            return (S.useEffect(() => {
                dh.$o(), dh.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, E.jsx)("div", { className: dq.o, children: (0, E.jsx)(du.y, {}) })
                : (0, E.jsx)(dX, {
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
    d$ = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = dQ();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dQ()
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
        buildLayout: () => [dJ],
    });
var d0 = i(549363),
    d1 = i(545075);
let d2 = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, g.bG)([dZ.default], () => dZ.default.locale);
            return (0, E.jsxs)(E.Fragment, { children: [(0, E.jsx)(d1.kb, {}), (0, E.jsx)(d0.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    d3 = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [d2],
    }),
    d6 = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [d$, d3],
        useObscuredNotice: dl.L,
    }),
    d4 = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: ds.B,
        buildLayout: () => [d6],
    });
var d7 = i(597770),
    d5 = i(962644),
    d8 = i(35587),
    d9 = i(86379);
let ce = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: d1.uK,
        usePredicate: () => (0, d9.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    ct = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [ce] });
var ci = i(532446),
    cn = i(869038),
    cs = i(499454),
    cl = i(45938);
class cr extends S.Component {
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
                    await (0, dE.Qp)(i),
                        (0, dE.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, dd.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, cl.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await cn.A.resolveGiftCode(e);
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
                (0, cs.h)({ processedCode: e }),
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
        return (0, E.jsx)(iI.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, E.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, E.jsxs)(ci.M, {
                    children: [
                        (0, E.jsx)(lX.k, {
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
                        (0, E.jsx)(eM.$, {
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
function ca(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dH.c)({ location: "UserSettingsBilling" }),
        n = S.useContext(G.AnalyticsContext),
        s = (0, g.bG)([eB.A], () => eB.A.enabled);
    return (0, E.jsx)(cr, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let co = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: ca,
    usePredicate: () => !(0, d9.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
});
var cu = i(725570),
    cd = i(707554),
    cc = i(736653),
    cg = i(46054);
let cm = rF().duration(30, "days");
var cA = i(264779),
    ch = i(416052),
    cE = i(961302);
function cS(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, E.jsx)(lY.Modal, {
        title: "",
        size: "md",
        input: (0, E.jsx)("div", { className: cE.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, E.jsxs)("div", {
            className: cE.t4,
            children: [
                (0, E.jsx)(eG.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, E.jsx)(el.E, { variant: "text-md/normal", className: cE.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let cT = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = S.useState(null),
        o = (0, sR.GV)(),
        { analyticsLocations: u } = (0, nZ.Ay)(e2.A.USER_SETTINGS_GIFT_INVENTORY);
    return (S.useEffect(() => {
        null == n &&
            (0, cA.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, E.jsx)(cS, { onClose: t, transitionState: l })
        : null == n
          ? (0, E.jsx)(du.y, { className: cE.Lq })
          : (0, E.jsx)(lY.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, E.jsxs)("div", {
                    className: cE.N1,
                    children: [
                        (0, E.jsx)("div", { className: cE.Qw }),
                        (0, E.jsx)(eG.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, E.jsx)(el.E, {
                            variant: "text-md/normal",
                            className: cE.G3,
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
                            let e = (0, cA.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, E.jsxs)("div", {
                    children: [
                        (0, E.jsx)(eU.c, { className: cE.M5 }),
                        (0, E.jsx)(sF.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, E.jsx)(ch.A, {
                                value: n,
                                buttonColor: aJ.$n.Colors.BRAND,
                                buttonLook: aJ.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cx = i(725807),
    cp = i(212168),
    cf = i(469778),
    cN = i(109802),
    c_ = i(503787);
let cI = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, E.jsxs)(lZ.A, {
            className: e4()(c_.wx, i),
            align: lZ.A.Align.CENTER,
            children: [
                (0, E.jsx)("div", { className: c_.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    cC = (e) => {
        let { children: t, className: i } = e;
        return (0, E.jsx)("div", { className: e4()(c_.rf, i), children: t });
    };
class cb extends S.PureComponent {
    static Header = cI;
    static Body = cC;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, E.jsx)("div", { className: e4()(c_.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cv = i(165191),
    cy = i(871123),
    cj = i(366523),
    cO = i(495544),
    cR = i(30793),
    cL = i(97352),
    cD = i(67480),
    cP = i(147925),
    cG = i(957565),
    cM = i(615396),
    cU = i(86629);
class cV extends S.PureComponent {
    _copyModeTimeout = new oV.Ep();
    state = { copyMode: cN.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cN.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case cN.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cn.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, cl.AK)(t, i),
            (0, cG.C)(
                e,
                () => this.setState({ copyMode: cN.q.SUCCESS }),
                () => this.setState({ copyMode: cN.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cN.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, E.jsxs)(lZ.A, {
            direction: lZ.A.Direction.VERTICAL,
            className: cU.Gj,
            children: [
                (0, E.jsx)(cN.e, {
                    className: cU.ph,
                    value: (0, cl.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cG.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aJ.XD.BRAND,
                    buttonLook: aJ.pR.FILLED,
                }),
                (0, E.jsxs)("div", {
                    className: cU.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, E.jsxs)(S.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(rF()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, E.jsx)(es.D, {
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
class ck extends S.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await cn.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && cn.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cy.bF)(e)
            ? (0, E.jsx)(cj.e, { shape: "square", sku: e, containerClassName: cU.ez })
            : null != t
              ? (0, E.jsx)(cv.A, { giftStyle: t, className: cU.ez, shouldAnimate: this.state.isHovered })
              : (0, E.jsx)(p.A, { game: i, size: p.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cy.bF)(e)
            ? (0, E.jsxs)("div", {
                  className: e4()(cU.Oc, cU.ic),
                  children: [
                      (0, E.jsx)(p.A, { game: i, size: p.M.XSMALL, skuId: e.id, className: cU._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, E.jsx)("div", { className: cU.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sD.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === sD.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === sD.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === sD.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, E.jsx)("div", { className: cU.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, E.jsxs)(lZ.A, {
            justify: lZ.A.Justify.BETWEEN,
            align: lZ.A.Align.CENTER,
            className: cU.pe,
            children: [
                (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, E.jsx)(eM.$, {
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
        return (0, E.jsxs)(cb, {
            className: n,
            children: [
                (0, E.jsx)(es.D, {
                    onClick: this.handleToggleOpen,
                    className: cU.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, E.jsx)(cb.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, E.jsxs)("div", {
                            className: cU.MY,
                            children: [
                                (0, E.jsxs)(lZ.A, {
                                    align: lZ.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, E.jsxs)("div", {
                                            className: cU.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(cP.A, {
                                    direction: a ? cP.A.Directions.UP : cP.A.Directions.DOWN,
                                    className: cU.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, E.jsx)(cb.Body, {
                          children: l
                              ? (0, E.jsx)(du.y, { className: cU.u1 })
                              : (0, E.jsxs)(S.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, E.jsx)(cV, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cw = g.Ay.connectStores([cD.A, eB.A, cR.A, x.A, cL.A, cO.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cD.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cR.A.getForGifterSKUAndPlan(cO.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eB.A.enabled,
        isFetching: cR.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cR.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cM.c9)(i) : null,
        giftCodes: l,
    };
})(ck);
var cF = i(928661);
function cB(e) {
    let { redesign: t = !1 } = e,
        i = (0, g.yK)([cf.A], () => cf.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, g.bG)([iu.default], () => ur.Ay.isPremiumExactly(iu.default.getCurrentUser(), sD.PremiumTypes.TIER_2)),
        s = (0, g.bG)([iu.default], () => !ur.Ay.isPremium(iu.default.getCurrentUser())),
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: r,
            claimedOutboundPromotionCodeMap: a,
        } = (0, d8.y7)(),
        o = i.find((e) => e.giftCodeBatchId === sD.FB && !e.consumed),
        u = i.filter((e) => e.giftCodeBatchId === sD.Bu && !e.consumed) ?? [],
        [d, c] = eq().partition(u, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sD.gD.PREMIUM_YEAR_TIER_2;
        }),
        m = l.length + r.length > 0,
        A =
            t || !m
                ? null
                : (0, E.jsxs)("div", {
                      className: cF.N1,
                      children: [
                          (0, E.jsx)(eG.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, E.jsx)(eU.c, { className: cF.yF }),
                      ],
                  }),
        h =
            s && m
                ? (0, E.jsxs)("div", {
                      className: cF.uo,
                      children: [
                          (0, E.jsx)(o5.t, {
                              size: "md",
                              color: ea.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cF.PC,
                          }),
                          (0, E.jsx)(el.E, {
                              variant: "text-md/normal",
                              className: cF.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sy.default)(), (0, sB.pX)(U.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, E.jsx)(cx.A, {
                              showGradient: !0,
                              className: cF.aA,
                              subscriptionTier: sD.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, E.jsxs)("div", {
        children: [
            A,
            (0, E.jsx)(cp.A, {
                className: cF.Yj,
                isShown: s && m,
                type: cp.i.PREMIUM,
                hasBackground: !0,
                children: (0, E.jsxs)("div", {
                    className: cF.DE,
                    children: [
                        h,
                        r.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, E.jsx)(cX, { outboundPromotion: i, code: t, disabled: !n }, i.id);
                        }),
                        l.map((e) => (0, E.jsx)(cX, { outboundPromotion: e, code: a[e.id], disabled: !n }, e.id)),
                        null != o
                            ? (0, E.jsx)(
                                  cw,
                                  {
                                      skuId: o.skuId,
                                      subscriptionPlanId: o.subscriptionPlanId,
                                      entitlements: [o],
                                      giftCodeBatchId: sD.FB,
                                  },
                                  (0, cl.Kx)(o.skuId, o.subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, E.jsx)(
                                  cw,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sD.Bu,
                                  },
                                  (0, cl.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                        c.length > 0
                            ? (0, E.jsx)(
                                  cw,
                                  {
                                      skuId: c[0].skuId,
                                      subscriptionPlanId: c[0].subscriptionPlanId,
                                      entitlements: c,
                                      giftCodeBatchId: sD.Bu,
                                  },
                                  (0, cl.Kx)(c[0].skuId, c[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var cz = i(339048);
function cY() {
    let e = (0, g.yK)([cf.A], () => cf.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eq().groupBy(e, (e) => (0, cl.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = S.useState(!1);
    if (
        (S.useEffect(() => {
            sa.h.wait(() => {
                (0, cz.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, E.jsx)(du.y, { className: cF.Lq });
    if (0 === Object.keys(t).length)
        return (0, E.jsxs)("div", {
            className: cF.p$,
            children: [
                (0, E.jsx)("div", { className: cF.QT }),
                (0, E.jsx)(cd.H, { className: cF.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, E.jsx)("p", {
                    className: cF.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, eK.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = eq()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, cl.X6)(e);
            return (0, E.jsx)(cw, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, E.jsx)(J.B, { gap: "lg", children: s });
}
function cX(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = S.useState(!1),
        [a, o] = S.useState(!1),
        u = () => r((e) => !e),
        d = (0, cc.Ay)(),
        c = (0, cA.WD)(i.id, d),
        g = null != n,
        m = S.useMemo(
            () =>
                (0, rB.i$)(
                    g
                        ? null != i.outboundRedemptionEndDate
                            ? rF()(i.outboundRedemptionEndDate)
                            : rF()(i.endDate).add(cm)
                        : rF()(i.endDate),
                    "LL",
                ),
            [i, g],
        );
    g && l
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: m, onClickDetails: u }))
        : g && !l
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: m, onClickDetails: u }))
          : !g && l
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: m, onClickDetails: u }))
            : g || l || (t = j.intl.format(j.t["57+7Qn"], { endDate: m, onClickDetails: u }));
    let A = g ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        h = S.useCallback(() => o(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsxs)("div", {
                className: cF.AX,
                children: [
                    (0, E.jsxs)("div", {
                        className: cF.gE,
                        children: [
                            (0, E.jsxs)("div", {
                                className: cF.At,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: cF.$G,
                                        children: (0, E.jsx)("img", { alt: "", src: c, className: cF.IJ }),
                                    }),
                                    (0, E.jsxs)("div", {
                                        children: [
                                            (0, E.jsx)(eG.D, { variant: "heading-md/semibold", children: T }),
                                            (0, E.jsx)(el.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, E.jsx)(eM.$, { text: A, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, E.jsx)(el.E, {
                            className: cF.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cg.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, E.jsx)(cu.aF, {
                    renderModal: (e) =>
                        (0, E.jsx)(cT, {
                            ...e,
                            onClose: h,
                            onClaim: d5.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: h,
                }),
        ],
    });
}
let cH = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
    Component: function () {
        return (0, E.jsxs)(J.B, {
            gap: "md",
            children: [
                (0, E.jsx)(cB, {}),
                (0, E.jsx)("div", {
                    className: cF.N1,
                    children: (0, E.jsxs)(cd.F, {
                        component: (0, E.jsx)(eG.D, {
                            variant: "heading-md/semibold",
                            children: j.intl.string(j.t["9KeUbY"]),
                        }),
                        children: [(0, E.jsx)(eU.c, { className: cF.yF }), (0, E.jsx)(cY, {})],
                    }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, d9.Hp)(),
    useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["9KeUbY"])],
});
var cK = i(89366),
    cW = i(881489),
    cZ = i(374200),
    cq = i(354670);
let cQ = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: c$,
        buildLayout: () => [cJ],
        usePredicate: () => {
            let e = (0, cK.QQ)(),
                t = (0, g.bG)([cq.A], () => cq.A.hasAnyUnexpiredOffer()),
                i = (0, cW.ds)(),
                { claimedOutboundPromotionCodes: n, claimedOutboundPromotionCodesLoaded: s } = (0, g.cf)(
                    [cZ.A],
                    () => ({
                        claimedOutboundPromotionCodes: cZ.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cZ.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                l = (0, cA.eN)(n),
                r = (0, d8.T1)(e, t, i, l),
                a = (0, cA.Wl)(n, r).length;
            return s && r.length + a > 0;
        },
    }),
    cJ = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [c$()],
        Component: () => (0, E.jsx)(cB, { redesign: !0 }),
    });
function c$() {
    return (0, o.ri)("MyGifts") ? j.intl.string(j.t.YzjdWJ) : j.intl.string(j.t.wFsj3B);
}
let c0 = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: c2, buildLayout: () => [c1] }),
    c1 = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [c2()], Component: () => (0, E.jsx)(cY, {}) });
function c2() {
    return (0, o.ri)("PurchasedGifts") ? j.intl.string(j.t.FWe6CP) : j.intl.string(j.t["9KeUbY"]);
}
let c3 = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [c6],
        usePredicate: () => !(0, d9.Hp)(),
    }),
    c6 = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, E.jsx)(ca, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    c4 = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [co, cH, ce] }),
    c7 = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [c3, cQ, c0, ct] : [c4]),
        initialize: () => {
            (0, o.SB)("GiftPanel") && d5.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    c5 = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: d7.o,
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: () => (0, d8.IO)().length }), []);
        },
        buildLayout: () => [c7],
    });
var c8 = i(659758),
    c9 = i(741046),
    ge = i(815846);
let gt = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
            return (0, ur.YE)(e, sD.PremiumTypes.TIER_2) ? (0, E.jsx)(ge.A, {}) : (0, E.jsx)(c9.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    gi = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [gt] }),
    gn = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: dl.L,
        buildLayout: () => [gi],
    }),
    gs = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: o5.t,
        usePersistentBadge: function (e) {
            return S.useMemo(
                () => ({ badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, c8.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [gn],
    });
var gl = i(104510),
    gr = i(820739),
    ga = i(73825),
    go = i(160946);
let gu = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var gd = i(859241),
    gc = i(531260),
    gg = i(369163),
    gm = i(957485),
    gA = i(926268),
    gh = i(106529),
    gE = i(93364);
function gS(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, E.jsxs)("li", {
        className: e4()(gh.Nr, t),
        children: [
            (0, E.jsx)(i, { className: gh.Kk }),
            (0, E.jsx)(el.E, { className: gh.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gT = function (e) {
    let { cardClassName: t } = e;
    return (0, E.jsxs)("div", {
        className: gh.iE,
        children: [
            (0, E.jsxs)("div", {
                className: gh.Qs,
                children: [
                    (0, E.jsx)(eG.D, {
                        className: gh.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, E.jsxs)("ul", {
                        className: gh.kR,
                        children: [
                            (0, E.jsx)(gS, { className: t, icon: gg.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, E.jsx)(gS, {
                                className: t,
                                icon: (e) =>
                                    (0, E.jsx)("img", { className: e4()(e.className, gh.Dp), src: gE, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, E.jsx)(gS, { className: t, icon: gm.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, E.jsx)(gS, { className: t, icon: gA.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: gh.JP }),
        ],
    });
};
var gx = i(834040),
    gp = i(811227);
let gf = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: t_.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    gN = function (e) {
        let { className: t } = e,
            [i, n] = S.useState(null);
        return (0, E.jsxs)("div", {
            className: e4()(gp.iE, t),
            children: [
                (0, E.jsx)(eG.D, {
                    className: gp.R_,
                    variant: "heading-xxl/bold",
                    children: j.intl.string(j.t.HPJ6Nj),
                }),
                (0, E.jsx)("ul", {
                    className: gp.p_,
                    children: gf.map((e, t) => {
                        let s = i === t;
                        return (0, E.jsxs)(
                            "div",
                            {
                                className: gp.Aw,
                                children: [
                                    (0, E.jsxs)(es.D, {
                                        className: e4()(gp.k7, { [gp.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, E.jsx)(el.E, {
                                                className: gp.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, E.jsx)(gx.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gp.q4,
                                                  })
                                                : (0, E.jsx)(au.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gp.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, E.jsx)(el.E, {
                                            className: gp.ZF,
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
var g_ = i(462887),
    gI = i(933832),
    gC = i(789645),
    gb = i(116891),
    gv = i(416676);
let gy = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sD.TG[U.TVA.NONE].limits.emoji,
        getTier1Value: () => sD.TG[U.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sD.TG[U.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sD.TG[U.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sD.TG[U.TVA.NONE].limits.stickers,
        getTier1Value: () => sD.TG[U.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sD.TG[U.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sD.TG[U.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sD.TG[U.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sD.TG[U.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sD.TG[U.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sD.TG[U.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sD.TG[U.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sD.TG[U.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: sD.TG[U.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sD.TG[U.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gb.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sD.TG[U.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, gb.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sD.TG[U.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sD.TG[U.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sD.TG[U.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sD.TG[U.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: sD.TG[U.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sD.TG[U.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sD.TG[U.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sD.TG[U.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: sD.TG[U.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sD.TG[U.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sD.TG[U.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sD.TG[U.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sD.TG[U.TVA.TIER_3].limits.stageVideoUsers,
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
function gj(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === U.TVA.NONE ? "text-muted" : "text-strong",
        l = n === U.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, E.jsxs)("th", {
        className: e4()(gv.PG, i),
        scope: "col",
        children: [
            (0, E.jsx)(eG.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, E.jsx)(el.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: U.M2T[n] }),
                }),
        ],
    });
}
function gO(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = e4()(gv.Jk, { [gv.I$]: s });
        t = s
            ? (0, E.jsx)(gI.A, { size: "md", color: "currentColor", className: e })
            : (0, E.jsx)(gC.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, E.jsx)(el.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, E.jsx)("td", { className: e4()(gv.xR, i), children: t });
}
function gR(e) {
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
              className: e4()(gv.ER, { [gv.GH]: i === U.TVA.TIER_2, [gv.z5]: i === U.TVA.TIER_3 }),
              children: (0, E.jsx)(el.E, {
                  className: gv.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === U.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function gL(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = S.useRef(null);
    return (0, E.jsxs)("tr", {
        className: gv.__invalid_tableRow,
        children: [
            (0, E.jsx)("th", {
                className: e4()(gv.xR, gv.uB),
                scope: "row",
                children: (0, E.jsx)(es.D, {
                    className: e4()(gv.VC, gv.xR, gv.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, E.jsx)(et.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, E.jsx)("img", {
                                className: gv.Mz,
                                src: (0, g_.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, E.jsx)(el.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, E.jsx)(gO, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, E.jsx)(gO, { value: l.getTier1Value() }),
            (0, E.jsx)(gO, { value: l.getTier2Value() }),
            (0, E.jsx)(gO, { value: l.getTier3Value() }),
        ],
    });
}
let gD = function (e) {
    let t = (0, cc.Ay)(),
        [i, n] = S.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, E.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, E.jsx)(eG.D, {
                    className: gv.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, E.jsxs)("div", {
                className: gv.wY,
                children: [
                    null != l && (0, E.jsx)(gR, { currentTier: l.premiumTier }),
                    (0, E.jsxs)("table", {
                        className: gv.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, E.jsx)("thead", {
                                children: (0, E.jsxs)("tr", {
                                    className: gv.__invalid_tableRow,
                                    children: [
                                        (0, E.jsx)(gj, { className: gv.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, E.jsx)(gj, { tier: U.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, E.jsx)(gj, { tier: U.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, E.jsx)(gj, { tier: U.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, E.jsx)(gj, { tier: U.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, E.jsx)("tbody", {
                                className: gv.__invalid_tableBody,
                                children: gy.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, E.jsx)(
                                              gL,
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
var gP = i(338548),
    gG = i(776096),
    gM = i(178368),
    gU = i(922139),
    gV = i(866323),
    gk = i(530005),
    gw = i(443865),
    gF = i(473145);
function gB(e) {
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
            a === sD.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (o.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = S.useMemo(
        () =>
            l.isPausedOrPausePending && a === sD.xc.NONE
                ? (0, E.jsx)(en.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, eK.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gw.x,
                      leadingAccessory: { type: "icon", icon: gw.x },
                  })
                : null,
        [a, l],
    );
    return (0, E.jsxs)(ei.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: n,
        children: [
            (0, E.jsx)(en.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, W.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, E.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: U.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gF.I5)(t)
                ? (0, E.jsx)(en.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, W.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, E.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, E.jsx)(en.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, W.openModalLazy)(async () => {
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
var gz = i(545934),
    gY = i(496431);
let gX = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gY.A)(i);
    return (0, E.jsx)(el.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rB.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var gH = i(482900);
let gK = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, E.jsx)("div", {
        className: e4()(gH.h4, t, { [gH.K2]: s }),
        children: (0, E.jsx)("img", {
            className: e4()(gH.Sl, n, { [gH.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gW = i(583032);
let gZ = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, E.jsxs)("div", {
        className: e4()(gW.sn, t),
        children: [
            s
                ? (0, E.jsx)("img", { className: e4()(gW.$J, gW.qX), src: i(728707), alt: "" })
                : (0, E.jsx)(gK, { className: gW.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, E.jsx)("img", { className: gW.De, src: i(438807), alt: "" }),
        ],
    });
};
var gq = i(548118),
    gQ = i(509536),
    gJ = i(944304),
    g$ = i(864310),
    g0 = i(245390);
let g1 = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, u$.bG)([eg.A], () => eg.A.getGuild(i), [i]),
        l = (0, g$.A)(s?.id).total;
    return null == s
        ? (0, E.jsx)("div", {
              className: e4()(t, g0.bo),
              children: (0, E.jsx)("div", {
                  className: g0.$g,
                  children: (0, E.jsx)(el.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, E.jsxs)("div", {
              className: e4()(t, g0.bo),
              children: [
                  (0, E.jsx)(gq.Ay, { className: g0.__invalid_guildIcon, guild: s, size: gq.Ay.Sizes.LARGER }),
                  (0, E.jsxs)("div", {
                      className: g0.$g,
                      children: [
                          (0, E.jsx)(el.E, { variant: "text-lg/bold", children: s.name }),
                          (0, E.jsxs)("div", {
                              className: g0.TZ,
                              children: [
                                  (0, E.jsx)(gl._, {
                                      color: ea.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: g0.Me,
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, E.jsx)("div", { className: g0.me }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gF.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, E.jsx)(gJ.A, {
                            guild: s,
                            analyticsLocation: {
                                page: U.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: U.ZSU.BUTTON_CTA,
                                objectType: U.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aJ.$n.Sizes.MEDIUM,
                            color: aJ.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, E.jsx)(eM.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, sy.default)(),
                                    (0, gQ.K4)({
                                        guildId: s.id,
                                        location: { section: U.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var g2 = i(85566);
function g3(e) {
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
            let e = null != i.premiumGuildSubscription ? df.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = S.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sD.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sD.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sD.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sD.TG[e].limits.screenShareQualityResolution,
                            framerate: sD.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sD.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sD.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sD.TG[e].limits.stageVideoUsers }),
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
        u = (0, gV.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === U.TVA.NONE
        ? (0, E.jsx)("div", {
              className: g2.xm,
              children: (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, E.jsx)(gU.animated.div, {
                  style: e,
                  className: g2.xm,
                  children: (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function g6(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, u$.bG)([i5.A], () => i5.A.useReducedMotion),
        o = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = S.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gF.I5)(i),
        c = (0, gc.A)(),
        g = S.useRef(null);
    return (0, E.jsxs)("div", {
        className: g2.PW,
        children: [
            (0, E.jsxs)("div", {
                className: g2.$U,
                children: [
                    (0, E.jsx)(gZ, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, E.jsx)("div", {
                        className: g2.vh,
                        children:
                            null != o && u && !d
                                ? (0, E.jsx)(gX, { className: g2.xm, cooldown: o.getTime() })
                                : (0, E.jsx)(g3, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, E.jsx)(et.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, E.jsx)(gB, {
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
                            (0, E.jsx)(es.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                className: g2.oU,
                                children: (0, E.jsx)(gk.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, E.jsx)("div", { className: g2.eX }),
        ],
    });
}
function g4(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, u$.bG)([eg.A], () => eg.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: g2.ag,
        children: [
            (0, E.jsx)(g1, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    g6,
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
function g7(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, u$.bG)([eg.A], () => eg.A.getGuild(t), [t]),
        l = df.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > df.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gz.A.createFromServer(
        {
            id: df.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, E.jsxs)("div", {
        className: g2.ag,
        children: [
            (0, E.jsx)(g1, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, E.jsx)(
                    g6,
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
function g5(e) {
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
              className: g2.iE,
              children: [
                  (0, E.jsx)("div", {
                      className: g2.kL,
                      children: df.default
                          .keys(n)
                          .map((e) =>
                              (0, E.jsx)(g7, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, E.jsx)("div", { className: g2.vK }),
              ],
          });
}
function g8(e) {
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
                if ((!(0, gF.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > ur.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsxs)("div", {
        className: g2.iE,
        children: [
            (0, E.jsx)("div", {
                className: g2.kL,
                children: df.default
                    .keys(l)
                    .map((e) =>
                        (0, E.jsx)(
                            g4,
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
            (0, E.jsx)("div", { className: g2.vK }),
        ],
    });
}
var g9 = i(520610);
let me = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, E.jsxs)("div", {
        className: g9.iE,
        children: [
            (0, E.jsx)("div", {
                className: g9.bj,
                children: (0, E.jsx)("img", { alt: "", className: g9.KV, src: i(742885) }),
            }),
            (0, E.jsxs)("div", {
                className: g9.D7,
                children: [
                    (0, E.jsx)(eG.D, {
                        variant: "display-md",
                        className: g9.R_,
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
                        className: g9.Mz,
                        children: (0, E.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var mt = i(20218),
    mi = i(168482);
function mn() {
    return (0, E.jsxs)("div", {
        className: mt.iE,
        children: [
            (0, E.jsx)("img", { className: mt.Kk, alt: "", src: mi }),
            (0, E.jsxs)("div", {
                className: mt.pq,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, E.jsx)(eM.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: () => {
                    (0, sB.pX)(U.BVt.GUILD_DISCOVERY), (0, sy.default)();
                },
            }),
        ],
    });
}
var ms = i(502572),
    ml = i(614820),
    mr = i(987144),
    ma = i(805319);
let mo = function () {
    let e = S.useRef(null),
        { analyticsLocations: t } = (0, nZ.Ay)(),
        { fractionalState: n } = (0, gc.A)();
    function s(i) {
        null != e.current && (0, W.closeModal)(e.current),
            (0, mr.g)({
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
        e.current = await (0, W.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, E.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, W.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gF.Nc)({ fractionalState: n });
    return (0, E.jsxs)("div", {
        className: ma.iE,
        children: [
            (0, E.jsx)(gl._, { color: ea.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: ma.$J }),
            (0, E.jsx)(el.E, {
                className: ma.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, ml.O)(e),
                            s = (0, E.jsx)("div", {
                                className: ma.lO,
                                children: (0, E.jsx)(
                                    eo.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, E.jsx)(
                                  ms.A,
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
var mu = i(279574);
let md = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, g.bG)([gG.A], () => gG.A.affinities),
        s = (0, g.bG)([em.Ay], () => em.Ay.getFlattenedGuildIds()),
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
              className: mu.iE,
              children: [
                  t &&
                      (0, E.jsx)(eG.D, {
                          variant: "heading-lg/semibold",
                          className: mu.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, E.jsx)(g1, { className: mu.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, E.jsx)(mo, {}),
              ],
          });
};
var mc = i(649327);
let mg = function (e) {
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
                        onClick: () => (0, eK.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: j.intl.string(j.t.oiWYAc) };
            if (t)
                return {
                    subtitle: j.intl.string(j.t.W5rDjW),
                    flavor: j.intl.format(j.t.cUHcaQ, {
                        helpdeskArticle: t_.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sD.hd[sD.gD.PREMIUM_MONTH_GUILD],
                r = ur.Ay.getDefaultPrice(l.id, i),
                a = (0, dx.CE)((0, dx.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: mc.i,
        children: [
            (0, E.jsx)(eG.D, { variant: "heading-lg/bold", className: mc.V, children: l }),
            null != r && (0, E.jsx)(el.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var mm = i(724624),
    mA = i(983511),
    mh = i(342744),
    mE = i(87719),
    mS = i(354888);
function mT(e) {
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
        u = (0, gF.I5)(t),
        d = l?.isPaused === !0 && a === sD.xc.NONE,
        c = j.intl.string(j.t.mOWsF1);
    return (0, E.jsxs)(
        "li",
        {
            className: mS.Hp,
            children: [
                (0, E.jsxs)("div", {
                    className: mS.YL,
                    children: [
                        (0, E.jsx)(gZ, {
                            className: mS.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, E.jsx)(el.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, E.jsx)(gX, { cooldown: o.getTime() })
                              : (0, E.jsx)(el.E, {
                                    className: mS.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: mS.E7,
                    children: [
                        i &&
                            !u &&
                            (0, E.jsx)(ms.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mS.LB,
                                        children: (0, E.jsx)(eo.Q, {
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
                            (0, E.jsx)(ms.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, E.jsx)("div", {
                                        className: mS.LB,
                                        children: (0, E.jsx)(eo.Q, {
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
function mx(e) {
    (0, W.openModalLazy)(async () => (t) => (0, E.jsx)(mA.default, { ...t, guildBoostSlot: e }));
}
function mp(e) {
    (0, W.openModalLazy)(async () => (t) => (0, E.jsx)(mh.default, { ...t, guildBoostSlotId: e.id }));
}
let mf = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, g.bG)([dW.A], () => dW.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, gc.A)(),
        o = (0, g.bG)([i5.A], () => i5.A.useReducedMotion),
        u = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        d = a === sD.xc.FP_SUB_PAUSED,
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
                    !(0, gF.I5)(s) && i++,
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
        p = null != l ? ur.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        f = Math.max(0, p - m.length),
        N = h > p,
        _ = p === s.length,
        I = _ ? f : 1,
        C = S.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, E.jsx)(gK, { className: mS.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        b = S.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let v = A.length;
    if (
        ((t = _
            ? j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: v })
            : j.intl.formatToPlainString(x ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: v })),
        ur.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, E.jsx)(
                es.D,
                {
                    className: mS.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mE.e)();
                    },
                    children: e,
                },
                t,
            );
        i = x
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: e })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: v, learnMoreHook: e });
    } else
        i = x
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: v });
    return (
        (n = r && a === sD.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, E.jsx)("div", {
            className: mS.iE,
            children: (0, E.jsxs)("div", {
                className: e4()(mS.Qs, [mS.Yq]),
                children: [
                    (0, E.jsxs)("div", {
                        className: mS.wx,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mS.RW,
                                children: [
                                    (0, E.jsx)("div", { className: mS.PS, children: C }),
                                    (0, E.jsxs)("div", {
                                        className: mS.__invalid_headerCopy,
                                        children: [
                                            (0, E.jsx)(eG.D, {
                                                className: mS.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, E.jsx)(el.E, {
                                                className: mS.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, E.jsx)("div", {
                                className: mS.di,
                                children: (0, E.jsx)(ms.A, {
                                    shouldShow: null == b || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, E.jsx)(eM.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.BMx1iy),
                                            ...e,
                                            disabled: null == b || c,
                                            onClick:
                                                null != b
                                                    ? () => {
                                                          (0, W.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, E.jsx)(mm.default, {
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
                            className: mS.LU,
                            children: A.map((e) =>
                                (0, E.jsx)(
                                    mT,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: mx,
                                        onUncancel: mp,
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
var mN = i(616659);
function m_(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gM.A], () => gM.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        l = ur.Ay.isPremium(s, sD.PremiumTypes.TIER_2),
        r = (0, g.bG)([gG.A], () => gG.A.affinities),
        a = (0, g.bG)([em.Ay], () => em.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        m = n.length > d.length,
        A = (0, g.bG)([gd.A], () => gd.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, gc.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && h === sD.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && h === sD.xc.NONE && !T,
        f = l && h === sD.xc.FP_SUB_PAUSED,
        N = h === sD.xc.NONE && !T;
    return (0, E.jsxs)("div", {
        className: mN.GO,
        children: [
            (0, E.jsx)(d1.kb, { className: mN.ek }),
            (0, E.jsx)(me, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, E.jsx)(mg, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, E.jsx)(gP.A, {}),
            !o && (0, E.jsx)(mn, {}),
            t?.isPaused && h !== sD.xc.FP_SUB_PAUSED
                ? (0, E.jsx)(g5, { appliedGuildBoosts: A, premiumSubscription: t })
                : (0, E.jsx)(g8, { guildBoostSlots: i, premiumSubscription: t }),
            (0, E.jsx)(mf, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, E.jsx)(md, { canAddBoosts: c && p, canApplyBoosts: m }),
            (0, E.jsx)(gD, { className: mN.e4, hideHeading: !0, hideTier0: !0 }),
            (0, E.jsx)(gT, { cardClassName: mN.KW }),
            (0, E.jsx)(gN, { className: mN.JL }),
        ],
    });
}
var mI = i(527113),
    mC = i(365199),
    mb = i(162286);
function mv(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, g$.A)(t.id);
    return (0, E.jsxs)("div", {
        className: i ?? mb.OA,
        children: [
            (0, E.jsx)(gq.Ay, { className: mb.$f, guild: t, size: gq.Ay.Sizes.MEDIUM }),
            (0, E.jsxs)("div", {
                className: mb.gI,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, E.jsxs)("div", {
                        className: mb.ew,
                        children: [
                            (0, E.jsxs)("div", {
                                className: mb.QW,
                                children: [
                                    (0, E.jsx)(gl._, {
                                        className: mb.Wz,
                                        color: ea.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, E.jsx)(el.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== U.TVA.NONE &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)("div", { className: mb.zk }),
                                        (0, E.jsx)(el.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gF.gb)(t.premiumTier, { useLevels: !1 }),
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
function my(e) {
    let { guildId: t } = e,
        i = (0, g.bG)([eg.A], () => eg.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: mb.Nr,
              children: [
                  (0, E.jsx)(mv, { guild: i }),
                  (0, E.jsx)(eM.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gl._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, mr.g)({
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
var mj = i(225334);
let mO =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mR(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = S.useRef(null),
        a = (0, gF.I5)(t),
        o = S.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gc.A)(),
        c = S.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === U.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: sD.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: sD.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: sD.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: sD.TG[e].limits.screenShareQualityResolution,
                            framerate: sD.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: sD.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: sD.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: sD.TG[e].limits.stageVideoUsers }),
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
            let e = null != t.premiumGuildSubscription ? df.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = S.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, E.jsxs)("div", {
        className: e4()(mj.iq, { [mj.Mt]: l }),
        children: [
            (0, E.jsxs)("div", {
                className: mj.kd,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mj.bB, src: mO }),
                    a && null != m
                        ? (0, E.jsx)(el.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: m }),
                          })
                        : (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)("div", { className: mj.zk }),
                                              (0, E.jsx)(el.E, {
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
                                              (0, E.jsx)("div", { className: mj.zk }),
                                              (0, E.jsx)(el.E, {
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
            (0, E.jsx)(et.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, E.jsx)(gB, {
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
                    (0, E.jsx)(es.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: mj.Mj,
                        ...e,
                        children: (0, E.jsx)(mC.j, { size: "xs", color: ea.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mL(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, g.bG)([eg.A], () => eg.A.getGuild(t), [t]);
    return (0, E.jsxs)("div", {
        className: mj.Nr,
        children: [
            (0, E.jsx)("div", {
                className: mj.MY,
                children:
                    null != l
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(mv, { guild: l, className: mj.OA }),
                                  (0, E.jsx)(eM.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, sy.default)(),
                                              (0, gQ.K4)({
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
                              className: mj.OA,
                              children: (0, E.jsx)(eG.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, E.jsx)(
                    mR,
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
function mD(e) {
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
                                gz.A.createFromServer(
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
                if ((!(0, gF.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > ur.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, E.jsx)("div", {
        className: mj.kR,
        children: df.default
            .keys(l)
            .map((e) => (0, E.jsx)(mL, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mP = i(68179);
function mG(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, g.bG)([dW.A], () => dW.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = S.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gF.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? ur.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sD.xc.NONE;
    return 0 === l.length
        ? null
        : (0, E.jsxs)("div", {
              className: mP.Nr,
              children: [
                  (0, E.jsxs)("div", {
                      className: mP.MY,
                      children: [
                          (0, E.jsxs)("div", {
                              className: mP._L,
                              children: [
                                  (0, E.jsxs)("div", {
                                      className: mP.MD,
                                      children: [
                                          (0, E.jsx)("img", { alt: "", className: mP.F8, src: mO }),
                                          (0, E.jsx)("div", {
                                              className: e4()(mP.qS, "theme-dark"),
                                              children: (0, E.jsx)("span", { className: mP.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsxs)("div", {
                                      className: mP.Qp,
                                      children: [
                                          (0, E.jsx)(el.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, E.jsx)(el.E, {
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
                          (0, E.jsx)(ms.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, E.jsx)(eM.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gl._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, W.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, E.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, mr.g)({
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
                          mM,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gF.I5)(e),
                              isCanceled: (0, gF.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mM(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = S.useRef(null),
        u = S.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, E.jsx)(el.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, E.jsx)(gX, { cooldown: u.getTime() })
              : (0, E.jsx)(el.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, E.jsxs)("div", {
        className: e4()(mP.iq, { [mP.Mt]: n }),
        children: [
            (0, E.jsxs)("div", {
                className: mP.kd,
                children: [(0, E.jsx)("img", { alt: "", className: mP.bB, src: mO }), t],
            }),
            d &&
                (0, E.jsx)(et.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsxs)(ei.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, E.jsx)(en.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, W.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mA.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, E.jsx)(en.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, W.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, E.jsx)(mh.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, E.jsx)(es.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: mP.Mj,
                            ...e,
                            children: (0, E.jsx)(mC.j, { size: "xs", color: ea.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mU = i(185949);
function mV(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = t_.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sD.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, E.jsxs)("div", {
              className: mU.i,
              children: [
                  (0, E.jsxs)("div", {
                      className: mU.b,
                      children: [
                          (0, E.jsx)(eG.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, E.jsx)(el.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, E.jsx)(mD, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, E.jsx)(mG, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mk = i(917064),
    mw = i(438929);
function mF() {
    return (0, E.jsxs)("div", {
        className: mw.iE,
        children: [
            (0, E.jsx)(eG.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, E.jsx)("div", {
                className: mw.kR,
                children: mk.s.map((e, t) => {
                    let i = e.icon;
                    return (0, E.jsxs)(
                        "div",
                        {
                            className: mw.Nr,
                            children: [
                                (0, E.jsx)(i, { className: mw.Kk }),
                                (0, E.jsx)(el.E, {
                                    className: mw.h_,
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
var mB = i(232122),
    mz = i(539915);
function mY() {
    let [e, t] = S.useState(null),
        [i, n] = S.useState(null);
    return (0, E.jsxs)("div", {
        className: mz.iE,
        children: [
            (0, E.jsx)(eG.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, E.jsx)("ul", {
                className: mz.p_,
                children: mB.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, E.jsxs)(
                        es.D,
                        {
                            tag: "li",
                            className: e4()(mz.Aw, { [mz.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, E.jsxs)("div", {
                                    className: mz.k7,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            className: mz.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, E.jsx)(er.a, {
                                            size: "sm",
                                            color: ea.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mz.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, E.jsx)(el.E, {
                                        className: mz.ZF,
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
var mX = i(182859),
    mH = i(853513),
    mK = i(560378);
function mW() {
    let e = t_.A.getArticleURL(U.MVz.GUILD_SUBSCRIPTIONS);
    return (0, E.jsxs)("div", {
        className: mK.wx,
        children: [
            (0, E.jsxs)("div", {
                className: mK.Qs,
                children: [
                    (0, E.jsxs)("div", {
                        className: mK.B5,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: mK.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, E.jsx)(eG.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(mH.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, E.jsx)(mX.A, {
                variant: "member",
                className: mK.iO,
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
var mZ = i(315629),
    mq = i(780082);
function mQ() {
    let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
    if (null == e || ur.Ay.hasFreeBoosts(e)) return null;
    let t = t_.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(mZ.h, {
        color: "nitro-pink",
        className: mq.vK,
        children: [
            (0, E.jsxs)("div", {
                className: mq.nw,
                children: [
                    (0, E.jsx)("img", { alt: "", className: mq.q3, src: mO }),
                    (0, E.jsxs)("div", {
                        className: mq.Tm,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: sD.M4, boostCount: sD.M4 }),
                            }),
                            (0, E.jsxs)("div", {
                                className: mq.xv,
                                children: [
                                    (0, E.jsx)(o5.t, { className: mq.nE }),
                                    (0, E.jsx)(el.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sD.M4,
                                            boostCount: sD.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(eM.$, {
                variant: "expressive",
                size: "sm",
                icon: o5.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: mE.e,
            }),
        ],
    });
}
var mJ = i(894206);
function m$() {
    let e = (0, g.bG)([gG.A], () => gG.A.affinities),
        t = (0, g.bG)([em.Ay], () => em.Ay.getFlattenedGuildIds()),
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
              className: mJ.i,
              children: [
                  (0, E.jsx)(eG.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, E.jsx)("div", { className: mJ.k, children: i.map((e) => (0, E.jsx)(my, { guildId: e }, e)) }),
              ],
          });
}
var m0 = i(140909);
function m1(e) {
    let { count: t, disabledReason: n } = e,
        s = t_.A.getArticleURL(U.MVz.GUILD_BOOSTING_FAQ);
    return (0, E.jsxs)(mZ.h, {
        color: "nitro-pink",
        className: m0.vK,
        children: [
            (0, E.jsxs)("div", {
                className: m0.nw,
                children: [
                    (0, E.jsxs)("div", {
                        className: m0.MD,
                        children: [
                            (0, E.jsx)("img", { alt: "", className: m0.F8, src: mO }),
                            (0, E.jsx)("div", {
                                className: e4()(m0.qS, "theme-dark"),
                                children: (0, E.jsx)("span", { className: m0.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, E.jsxs)("div", {
                        className: m0.Tm,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, E.jsxs)("div", {
                                className: m0.xv,
                                children: [
                                    (0, E.jsx)(o5.t, { className: m0.nE }),
                                    (0, E.jsx)(el.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: sD.M4,
                                            boostCount: sD.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)(ms.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, E.jsx)(eM.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: gl._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, W.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, E.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, mr.g)({
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
function m2(e) {
    let { premiumSubscription: t } = e,
        i = (0, g.bG)([gM.A], () => gM.A.boostSlots),
        n = S.useMemo(() => Object.values(i), [i]),
        s = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        l = (0, g.bG)([gG.A], () => gG.A.affinities),
        r = (0, g.bG)([em.Ay], () => em.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = S.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, g.bG)([gd.A], () => gd.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, gc.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sD.xc.NONE,
        A = S.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? j.intl.string(j.t.mOWsF1) : A ? void 0 : j.intl.string(j.t.xr4m5B),
        T = S.useMemo(() => {
            if (null == t) return 0;
            let e = ur.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, E.jsxs)("div", {
        className: mN.GO,
        children: [
            (0, E.jsx)(d1.kb, { className: mN.ek }),
            (0, E.jsx)(mW, {}),
            (0, E.jsx)(mQ, {}),
            T > 0 && (0, E.jsx)(m1, { count: T, disabledReason: h }),
            c && (0, E.jsx)(gP.A, {}),
            !a && (0, E.jsx)(mn, {}),
            (0, E.jsxs)("div", {
                className: mN.C_,
                children: [
                    (0, E.jsx)(mV, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, E.jsx)(m$, {}),
                    (0, E.jsx)(mI.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, E.jsx)(mF, {}),
                    (0, E.jsx)(mY, {}),
                ],
            }),
        ],
    });
}
var m3 = i(65188);
let m6 = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = gu.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            S.useEffect(() => {
                sa.h.wait(() => {
                    dh.hP(), dh.$o(), (0, gr.CD)(), (0, ga.zS)(null, null, U.tF5.DISCOVERY), (0, gr.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, g.cf)([dW.A], () => ({
                    hasFetchedSubscriptions: dW.A.hasFetchedSubscriptions(),
                    premiumSubscription: dW.A.getPremiumTypeSubscription(),
                })),
                n = (0, go.Y)(),
                s = (0, g.bG)([dK.A], () => dK.A.hasFetchedPaymentSources),
                l = (0, g.bG)([gd.A], () => gd.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = S.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, E.jsx)("div", { className: e4()(m3.kL, m3.Lq), children: (0, E.jsx)(du.y, {}) })
                : (0, E.jsxs)("div", {
                      className: m3.kL,
                      children: [
                          (0, E.jsx)("div", { className: m3.Tp }),
                          (0, E.jsx)("div", {
                              className: m3.Qs,
                              children: e
                                  ? (0, E.jsx)(m2, { premiumSubscription: i })
                                  : (0, E.jsx)(m_, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    m4 = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m6] }),
    m7 = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [m4],
    }),
    m5 = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: gl._,
        buildLayout: () => [m7],
    });
var m8 = i(153659),
    m9 = i(155984),
    Ae = i(357758),
    At = i(262077),
    Ai = i(696986),
    An = i(819411);
function As(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eG.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, E.jsx)(Ai.h, { size: 4 }),
            (0, E.jsx)(el.E, { variant: "text-md/normal", className: An.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, E.jsx)(Ai.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: An.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: An.RI }),
                    (0, E.jsxs)("div", {
                        className: An.FS,
                        children: [
                            (0, E.jsx)(eG.D, {
                                variant: "heading-xl/semibold",
                                className: An.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                className: An.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(eM.$, {
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
var Al = i(872351),
    Ar = i(9113),
    Aa = i(599941),
    Ao = i(384684),
    Au = i(2242);
let Ad = [];
var Ac = i(912851),
    Ag = i(146795);
let Am = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, E.jsx)(es.D, {
        onClick: n ? void 0 : i,
        className: Ag.x6,
        children: (0, E.jsxs)("div", {
            className: Ag.hQ,
            children: [
                n
                    ? (0, E.jsx)(du.y, { type: du.y.Type.PULSING_ELLIPSIS, className: Ag.__invalid_spinner })
                    : (0, E.jsx)(el.E, { variant: "text-md/medium", className: Ag.Pf, children: t }),
                (0, E.jsx)(er.a, { size: "md", color: "currentColor", className: Ag.UE }),
            ],
        }),
    });
};
var AA = i(465932),
    Ah = i(543767),
    AE = i(420139),
    AS = i(790284),
    AT = i(636194),
    Ax = i(624456),
    Ap = i(710144),
    Af = i(815332),
    AN = i(817649),
    A_ = i(969389);
let AI = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sR.GV)(),
        { analyticsLocations: a } = (0, nZ.Ay)(e2.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = ((e) => {
            let [t, i] = S.useState(!1),
                [n, s] = S.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await dh.M2(t, e), !0;
                    } catch (e) {
                        s(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a),
        c = async () => {
            (await o(s.id)) && l();
        },
        g = n.role_benefits.benefits.filter((e) => e.ref_type === Au.bN.CHANNEL),
        m = n.role_benefits.benefits.filter((e) => e.ref_type === Au.bN.INTANGIBLE),
        A = rF()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        h = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, E.jsx)(lY.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: c, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: h,
        onClose: l,
        children: (0, E.jsxs)(J.B, {
            gap: 8,
            children: [
                null != u ? (0, E.jsx)(Q.w, { type: "critical", children: u.message }) : null,
                (0, E.jsx)(AN.x, { listingId: n.id, guildId: i.guild_id, className: A_.P }),
            ],
        }),
    });
};
var AC = i(319225),
    Ab = i(746080),
    Av = i(47685);
let Ay = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, E.jsxs)("div", {
            className: Av.L0,
            children: [
                (0, E.jsxs)("div", {
                    className: Av.a5,
                    children: [
                        (0, E.jsx)(eG.D, { variant: "heading-deprecated-12/semibold", className: Av.HU, children: t }),
                        n &&
                            (0, E.jsx)(ta.m, {
                                text: s,
                                children: (0, E.jsx)(lP.m, { size: "xs", color: "currentColor", className: Av.Mo }),
                            }),
                    ],
                }),
                (0, E.jsx)(eG.D, { variant: "heading-xl/semibold", className: Av.sx, children: i }),
            ],
        });
    },
    Aj = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nZ.Ay)(),
            [n] = (0, Ah.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: e2.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, g.bG)([dK.A], () => dK.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, E.jsx)(AE.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: Av.Nw })
            : (0, E.jsx)(du.y, {});
    },
    AO = (e) => {
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
            : (0, E.jsx)(sF.D, {
                  label: j.intl.string(j.t["4neDM+"]),
                  children: (0, E.jsx)("div", {
                      className: Av.__invalid_rowButtons,
                      children: i
                          ? (0, E.jsx)(eM.$, {
                                variant: "primary",
                                text: j.intl.string(j.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    !t && !s && (0, E.jsx)(Am, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                    (0, E.jsx)(Am, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    AR = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, Ax.M)(e),
                    i = (0, g.bG)([AT.A], () => AT.A.getSubscriptionListingForPlan(t)),
                    n = (0, g.bG)([AT.A], () =>
                        null != i ? AT.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, g.bG)([eg.A], () => eg.A.getGuild(n?.guild_id)),
                    [l, r] = S.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, Aa.XE)();
                S.useEffect(() => {
                    l && null != s && null == AT.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = rF()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dx.$g)(t.price, t.currency) : "",
                                  s = rF()(t.createdAt).format("M/D/YY"),
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
                    handleToggleExpanded: () => r((e) => !e),
                    listing: i,
                    groupListing: n,
                    subscriptionInfo: o,
                };
            })(t),
            [o, d] = S.useState(!1),
            c = (0, sR.GV)(),
            { analyticsLocations: m } = (0, nZ.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, AA.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let T = async () => {
                try {
                    d(!0),
                        await dh.QP(t, m),
                        (0, AC.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
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
            className: Av.kL,
            children: [
                (0, E.jsx)(Ap.A, {
                    onClick: r,
                    className: Av.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, E.jsxs)(E.Fragment, {
                            children: [
                                null != s && (0, E.jsx)(gq.Ay, { guild: s, active: !0, size: gq.Ay.Sizes.MEDIUM }),
                                (0, E.jsxs)("div", {
                                    className: Av.if,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            variant: "text-md/medium",
                                            className: Av.J5,
                                            children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                        }),
                                        (0, E.jsxs)("div", {
                                            className: Av.xp,
                                            children: [
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-sm/normal",
                                                    className: Av.KR,
                                                    children: i.name,
                                                }),
                                                x
                                                    ? (0, E.jsx)(sc.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                    : C
                                                      ? (0, E.jsx)(sc.Lp, {
                                                            text: j.intl.string(j.t["6anton"]),
                                                            color: ea.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : p
                                                        ? (0, E.jsx)(ta.m, {
                                                              text: j.intl.string(j.t.eSuJE2),
                                                              children: (0, E.jsx)("div", {
                                                                  children: (0, E.jsx)(sc.Lp, {
                                                                      className: Av.qc,
                                                                      text: j.intl.string(j.t.NrRwIl),
                                                                      color: ea.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, E.jsx)(ta.m, {
                                                          text: j.intl.string(j.t.nv1IqK),
                                                          children: (0, E.jsx)("div", {
                                                              children: (0, E.jsx)(sc.Lp, {
                                                                  text: j.intl.string(j.t["sBl3X/"]),
                                                                  color: ea.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, E.jsx)(es.D, {
                                    onClick: n(r),
                                    "aria-label": j.intl.string(j.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": l,
                                    focusProps: { ringTarget: t },
                                    children: (0, E.jsx)(er.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: e4()(Av.D6, { [Av.S7]: l }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                l
                    ? (0, E.jsxs)("div", {
                          id: c,
                          children: [
                              (0, E.jsx)("div", { className: Av.yF }),
                              (0, E.jsx)(Af.A, { groupListingId: n.id, subscription: t, className: Av.kE }),
                              (0, E.jsxs)("div", {
                                  className: Av.Zx,
                                  children: [
                                      (0, E.jsx)(Ay, { label: I, value: _ }),
                                      (0, E.jsx)(Ay, {
                                          label: j.intl.string(j.t.dltUMH),
                                          value: f,
                                          showInfoIcon: C,
                                          infoIconTooltipText: C ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, E.jsx)(Ay, { label: j.intl.string(j.t.AOcwWB), value: N }),
                                  ],
                              }),
                              (0, E.jsx)(Ai.h, { size: 16 }),
                              !x &&
                                  !h &&
                                  (0, E.jsx)(sF.D, {
                                      label: j.intl.string(j.t.wmMFvA),
                                      children: (0, E.jsx)(Aj, { subscription: t }),
                                  }),
                              !b &&
                                  (0, E.jsx)(AO, {
                                      isTrial: C,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, W.openModal)((t) => (0, E.jsx)(AI, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sB.pX)(U.BVt.CHANNEL(s.id, Ab.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sy.default)(),
                                              Ac.A.show(
                                                  U.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  j.intl.string(j.t.DvbaM4),
                                                  () => {
                                                      AS.A.setState({ subsection: nw.nR }),
                                                          (0, eK.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
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
var AL = i(170272);
let AD = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, g.bG)([Ao.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Ao.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? Au.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Au.M_.NONE
                                  : Au.M_.IN_SUBSCRIPTION_SERVER;
                        })([Ao.A]),
                    ) === Au.M_.SUBSCRIBED,
                i = (0, g.bG)([dW.A], () => dW.A.getActiveGuildSubscriptions()),
                n = S.useRef(!1);
            return (
                S.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dW.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dW.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), dh.hP());
                }, [e, t]),
                i ?? Ad
            );
        })(),
        { loading: n } = (0, Aa.eb)(i);
    return ((0, Ar.A)(dN.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, E.jsx)(du.y, {})
        : 0 === i.length
          ? null
          : (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(eM.$, { text: j.intl.string(j.t.hqyhKQ), icon: Al.z, variant: "secondary", onClick: t }),
                    (0, E.jsx)(Ai.h, { size: 10 }),
                    (0, E.jsx)(iI.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, E.jsx)("div", {
                            className: AL.A,
                            children: i.map((e) => (0, E.jsx)(AR, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AP = i(327479),
    AG = i(334335);
function AM(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)(eG.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, E.jsx)(Ai.h, { size: 4 }),
            (0, E.jsx)(el.E, { variant: "text-md/normal", className: AG.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, E.jsx)(Ai.h, { size: 24 }),
            (0, E.jsxs)("div", {
                className: AG.Nr,
                children: [
                    (0, E.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AG._e }),
                    (0, E.jsxs)("div", {
                        className: AG.FS,
                        children: [
                            (0, E.jsx)(eG.D, {
                                variant: "heading-xl/semibold",
                                className: AG.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, E.jsx)(el.E, {
                                variant: "text-md/normal",
                                className: AG.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, E.jsx)(AP.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AU = i(548411),
    AV = i(417098),
    Ak = i(143582),
    Aw = i(915043),
    AF = i(920087);
function AB(e) {
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
        className: e4()(AF.iE, t),
        children: [
            (0, E.jsx)("div", { className: e4()(AF.wx, n), children: i }),
            l && (0, E.jsx)("div", { className: AF.Qs, children: s }),
        ],
    });
}
var Az = i(885996),
    AY = i(144165),
    AX = i(664121),
    AH = i(950305),
    AK = i(943775),
    AW = i(123791),
    AZ = i(900797),
    Aq = i(632510);
let AQ = S.createContext({ isOpen: !1, toggleOpen: () => {} });
function AJ(e) {
    let { children: t } = e,
        [i, n] = S.useReducer((e) => !e, !1),
        s = S.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, E.jsx)(AQ.Provider, { value: s, children: t(i) });
}
AJ.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = S.useContext(AQ),
        l = n ? AZ.t : er.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, E.jsxs)(es.D, {
        className: e4()(Aq.L, t),
        onClick: s,
        children: [
            (0, E.jsx)(el.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, E.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var A$ = i(243217),
    A0 = i(328968),
    A1 = i(163437),
    A2 = i(3432);
function A3(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var A6 = i(184451),
    A4 = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function A7(e) {
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
        } = (0, g.cf)([cL.A, cD.A, A0.A, eg.A], () => {
            let e,
                i = cL.A.get(r),
                n = null != i ? cD.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? A0.A.getForSKU(i.skuId) : null,
                u = null != o && (0, A1.PJ)(o.skuFlags),
                d = u && null != s ? eg.A.getGuild(s) : void 0,
                c = (0, A1.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cL.A.get(t.planId) ?? void 0;
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
        f = S.useMemo(() => (null != p ? (0, AK.A)(p, 100) : null), [p]),
        N = m?.deleted ?? !1,
        _ = null != m && (0, A1.Se)(m),
        I = t.status === U.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nZ.Ay)(),
        [b] = (0, Ah.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: e2.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = A3(t.currentPeriodEnd),
        y = 0 === n;
    return (0, E.jsxs)(AB, {
        headerClassName: A6.dL,
        header:
            !1 === y
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsxs)("div", {
                              className: A6.VW,
                              children: [
                                  null != f &&
                                      (0, E.jsx)(AY._, { src: f.href, imageClassName: A6.Z2, width: 40, height: 40 }),
                                  (0, E.jsxs)("div", {
                                      className: A6.aF,
                                      children: [
                                          (0, E.jsx)(eG.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, E.jsx)(el.E, {
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
                              className: A6.Pz,
                              children:
                                  null != p &&
                                  null != u &&
                                  null != m &&
                                  (0, E.jsx)(ht, {
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
                : (0, E.jsx)(du.y, { type: du.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, E.jsx)(he, {
                    type: "warning",
                    title: _
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !A && h && (0, E.jsx)(he, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            I && (0, E.jsx)(he, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, E.jsxs)("div", {
                className: A6.zH,
                children: [
                    (0, E.jsx)(A9, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, E.jsxs)(E.Fragment, {
                                  children: [
                                      (0, E.jsxs)("span", {
                                          className: A6.yW,
                                          children: [(0, E.jsx)(AX.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, E.jsxs)("span", {
                                              className: A6._t,
                                              children: [
                                                  (0, E.jsx)(el.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, E.jsx)(gq.Ay, { guild: c, size: gq.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, E.jsxs)("span", {
                                  className: A6.yW,
                                  children: [(0, E.jsx)(AH.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, E.jsx)(A5, { invoicePreview: b, subscriptionPlan: o }),
                    (0, E.jsx)(A9, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: A3(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, E.jsx)(A8, { isCancelled: A, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, E.jsx)(hn, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: n,
                isDeleted: N,
                isCancelled: A,
            }),
            null != p &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, E.jsx)(hi, { appId: p.id, listingBenefits: u.benefits }),
        ],
    });
}
function A5(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, E.jsx)(A9, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, dx.CE)((0, dx.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, E.jsx)(A9, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, dx.CE)((0, dx.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, E.jsx)(A9, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)(el.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, E.jsx)(ta.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, E.jsx)(el.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, E.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function A8(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dx.CE)((0, dx.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, E.jsx)(A9, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(el.E, { variant: "text-sm/medium", children: i }),
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, E.jsx)(A9, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function A9(e) {
    let { title: t, content: i } = e;
    return (0, E.jsxs)("div", {
        className: A6.nM,
        children: [
            (0, E.jsx)(el.E, { variant: "text-sm/medium", children: t }),
            (0, E.jsx)(el.E, { variant: "text-sm/medium", className: A6.u4, children: i }),
        ],
    });
}
function he(e) {
    let { type: t, title: i } = e;
    return (0, E.jsx)(tN.p, {
        messageType: "warning" === t ? tN.Y.WARNING : tN.Y.ERROR,
        className: A6.Xm,
        children: (0, E.jsx)(el.E, { variant: "text-sm/normal", children: i }),
    });
}
function ht(e) {
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
        c = (0, A1.Se)(s),
        { analyticsLocations: m } = (0, nZ.Ay)(),
        [A, h] = S.useState(!1),
        T = (0, AW.C)(t.id),
        x = (0, g.bG)([cD.A], () => cD.A.getParentSKU(n.skuId), [n.skuId]),
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
        f = 0 !== p.length,
        N = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, dh.QP)(l, m);
                if (null == e) return;
                (0, W.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, E.jsx)(t, { ...i, storeListing: n, subscription: A$.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, E.jsxs)("div", {
        className: A6.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, E.jsx)(eM.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: N,
                        loading: A,
                    })
                  : (0, E.jsx)(eM.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: () => {
                            (0, W.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("1426"), i.e("22800")]).then(
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
                (0, E.jsx)(eM.$, {
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
function hi(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, E.jsx)(AJ, {
        children: (e) =>
            (0, E.jsxs)("div", {
                className: A6.PX,
                children: [
                    (0, E.jsxs)("div", {
                        className: A6.wV,
                        children: [
                            e && (0, E.jsx)(el.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, E.jsx)(AJ.Toggle, {
                                className: A6.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, E.jsx)(Az.FY, { header: n, icon: (0, A2.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function hn(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, E.jsx)("div", {
                className: A6.Ji,
                children: (0, E.jsx)(sF.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, E.jsx)(du.y, { type: du.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, E.jsx)("div", {
                  className: A6.Ji,
                  children: (0, E.jsxs)(AV.$T, {
                      color: AV.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, E.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, E.jsx)("div", {
                  className: A6.Ji,
                  children: (0, E.jsx)(sF.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, E.jsx)(AE.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hs = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hl = i(38405);
let hr = (0, g.UT)(cL.A, {
    getQueryId: U.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cL.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hl.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, ga.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var ha = i(240248),
    ho = i(237218),
    hu = i(988325);
function hd(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = S.useState(!1),
        [r, a] = S.useState(null),
        o =
            null != r &&
            (0, E.jsx)("button", {
                className: hu.x6,
                onClick: () => l((e) => !e),
                children: (0, E.jsxs)(el.E, {
                    className: hu.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, E.jsx)(AZ.t, { color: ea.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, E.jsx)(er.a, { color: ea.A.colors.TEXT_BRAND, size: "xs" }),
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
                (0, E.jsx)(el.E, {
                    ...n,
                    className: hu.Qs,
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
var hc = i(827991);
function hg(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = S.useMemo(() => (null == i.thumbnail ? null : (0, ho.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hr(i.skuId),
        u = S.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dx._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, E.jsxs)(AB, {
              className: e4()(hc.iE, n),
              header: (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: hc.qd,
                          children: [
                              null != a &&
                                  (0, E.jsx)(AY._, { src: a.href, imageClassName: hc.rW, width: 48, height: 48 }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)(eG.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, E.jsx)(el.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, ha.uJ)(r) &&
                      (0, E.jsx)("div", {
                          className: hc.h_,
                          children: (0, E.jsx)(hd, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, E.jsx)("div", {
                          className: hc.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, E.jsx)(Az.FY, { header: i, icon: (0, A2.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var hm = i(185438),
    hA = i(386011);
function hh(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AK.A)(t, 100),
        u = (0, A1.PJ)(r.flags),
        d = u ? AX.R : AH.n,
        c = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, g.bG)([eg.A], () => (u && null != m ? eg.A.getGuild(m) : void 0), [m, u]),
        h = (0, g.bG)([cD.A], () => {
            if (null != a) return cD.A.get(a);
        }, [a]),
        S = A3(i.currentPeriodEnd);
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsxs)("div", {
                className: hA.wx,
                children: [
                    null != o && (0, E.jsx)(AY._, { src: o.href, imageClassName: hA.Z2, width: 48, height: 48 }),
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(eG.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, E.jsxs)("div", {
                                className: hA.p4,
                                children: [
                                    (0, E.jsxs)(eG.D, {
                                        variant: "heading-md/normal",
                                        className: hA.N4,
                                        children: [(0, E.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, E.jsxs)(E.Fragment, {
                                            children: [
                                                (0, E.jsx)(el.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, E.jsxs)("span", {
                                                    className: hA.vP,
                                                    children: [
                                                        (0, E.jsx)(gq.Ay, { guild: A, size: gq.Ay.Sizes.SMOL }),
                                                        (0, E.jsx)(eG.D, {
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
            (0, E.jsx)(AJ, {
                children: (e) =>
                    (0, E.jsxs)("div", {
                        className: hA._B,
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, E.jsxs)(E.Fragment, {
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, E.jsx)(el.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, E.jsx)(AJ.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, E.jsxs)("div", {
                className: hA.x0,
                children: [
                    (0, E.jsx)(hg, {
                        storeListing: n,
                        className: hA.o3,
                        cta: (0, E.jsxs)("div", {
                            className: hA.cJ,
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, E.jsx)(el.E, {
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
                                  hg,
                                  {
                                      storeListing: e,
                                      cta: (0, E.jsx)(el.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, E.jsx)(hE, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hE(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, hm.A)({
            analyticsLocation: U.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, E.jsx)(hg, {
        storeListing: t,
        cta: (0, E.jsx)(eM.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class hS extends S.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, E.jsxs)(AV.$T, {
                  color: AV.Hv.DANGER,
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
function hT(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = S.useState({ route: hs.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: hs.HOME });
        },
        a = (e) => {
            s({ route: hs.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = S.useState({});
    S.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: A4.LOADING })),
                (0, Ak._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: A4.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: A4.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Aw.E)(),
        c = d !== Aw.mJ.LOADED;
    switch (l) {
        case hs.HOME:
            return (0, E.jsx)(E.Fragment, {
                children: t.map((e) =>
                    (0, E.jsx)(
                        hS,
                        {
                            subscription: e,
                            children: (0, E.jsx)(A7, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? A4.LOADING : (o[e.id] ?? A4.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hs.SWITCH_APP_PLANS:
            let { route: g, ...m } = n;
            return (0, E.jsx)(hh, { ...m, navigateToHome: r });
        default:
            (0, N.xb)(l);
    }
}
var hx = i(470464);
function hp(e) {
    let { onGoBack: t } = e,
        i = (0, g.yK)(
            [dW.A],
            () =>
                dW.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = S.useState();
    return (
        null == n && (n = (0, E.jsx)(hf, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, E.jsxs)("div", {
            children: [
                n,
                (0, E.jsx)("div", {
                    className: hx.A,
                    children: (0, E.jsx)(hT, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, E.jsx)(hf, {
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
function hf(e) {
    let { onBack: t, title: i } = e;
    return (0, E.jsxs)("div", {
        className: hx.D,
        children: [
            (0, E.jsx)(lL.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, E.jsx)(AU.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, E.jsx)(eG.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hN = i(366999),
    h_ = i(466919),
    hI = i(441924);
function hC(e) {
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
        ? ((t = j.intl.string(h_.default["/S02sx"])), (i = j.intl.string(h_.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === sD.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = e4()({ [hI.Hs]: n, [hI.mT]: !n }),
        d = e4()({ [hI.CQ]: n, [hI.ZM]: !n }),
        c = e4()({ [hI.EM]: !n });
    return (0, E.jsxs)("div", {
        className: hI.r6,
        children: [
            (0, E.jsxs)("div", {
                className: hI.Nv,
                children: [
                    (0, E.jsx)(eG.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, E.jsx)(el.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, E.jsx)("div", {
                    className: hI.ZS,
                    children: (0, E.jsx)("div", {
                        className: u,
                        children: (0, E.jsx)(el.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hb = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, ur.kX)(t),
        r = l.length > 0,
        a = (0, hN.Ay)(t.endsAt, hN.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, E.jsx)("div", {
        children: (0, E.jsxs)("div", {
            className: e4()(i, hI.f8),
            children: [
                (0, E.jsx)("div", {
                    className: hI.J_,
                    children: (0, E.jsxs)("div", {
                        className: hI.Bh,
                        children: [
                            (0, E.jsx)("div", {
                                className: hI.xt,
                                children: (0, E.jsx)(o5.t, { size: "md", color: "white", className: hI.T8 }),
                            }),
                            (0, E.jsx)("div", {
                                className: hI.pt,
                                children: (0, E.jsx)(eG.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, E.jsx)(el.E, {
                                className: hI.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, E.jsx)(hC, {
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
var hv = i(868942);
function hy(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, g.yK)([cL.A], () => [cL.A.get(n), null != l ? cL.A.get(l.planId) : null]);
    if (null == o || ur.Ay.getInterval(n).intervalType !== sD.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = ur.Ay.getDisplayName(n);
    if (a) t = j.intl.string(h_.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === U.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, ur._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, E.jsxs)("div", {
        className: hI.Bh,
        children: [
            (0, E.jsx)("div", {
                className: e4()({
                    [hI.sr]: o.skuId === sD.pe.TIER_0,
                    [hI.lP]: o.skuId === sD.pe.TIER_1,
                    [hI.eb]: o.skuId === sD.pe.TIER_2,
                }),
                children: (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: hI.Kk }),
            }),
            (0, E.jsxs)("div", {
                className: hI.pt,
                children: [
                    (0, E.jsx)(eG.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, E.jsx)(eG.D, {
                            className: hI.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, E.jsx)(el.E, {
                className: hI.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hj = function (e) {
    let { className: t, entitlements: i } = e,
        n = eq()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, g.yK)([cf.A], () => cf.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, g.bG)([dW.A], () => dW.A.getPremiumSubscription()),
        r = (0, g.bG)([dW.A], () => null == dW.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sD.gD.PREMIUM_MONTH_TIER_1),
        o = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, E.jsxs)("div", {
        children: [
            (0, E.jsx)("div", {
                className: e4()(t, hI.xF, hI.J_),
                children: Object.keys(n).map((e) =>
                    (0, E.jsx)(
                        hy,
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
                        (0, E.jsx)(el.E, {
                            className: hI.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, E.jsx)(hv.i, {}),
                    ],
                }),
        ],
    });
};
var hO = i(50919);
function hR(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        [l] = (0, Ah.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: e2.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hO.r : hO.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ur.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cL.A.get(o);
    tY()(null != u, "Missing plan");
    let d = (0, dx.$g)(l.total, l.currency);
    return (
        u.interval === sD.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: U.X7G.TERMS,
                  paidURL: U.X7G.PAID_TERMS,
                  privacyUrl: U.X7G.PRIVACY,
              }))
            : u.interval === sD.WT.MONTH &&
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
        (0, E.jsx)(el.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function hL(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === U.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, E.jsx)(hR, { subscription: t, withOverheadSeparator: i });
}
var hD = i(735912),
    hP = i(558808);
let hG = { [nw.nR]: "role_subscriptions_panel", [nw.PZ]: "application_subscriptions_panel" };
function hM() {
    return (0, E.jsx)(ev.Z, {
        className: hP.wb,
        type: ev.Z.Types.CUSTOM,
        children: (0, E.jsxs)(lZ.A, {
            align: lZ.A.Align.CENTER,
            children: [
                (0, E.jsx)(p.A, { game: null, size: p.M.SMALL, className: hP.pV }),
                (0, E.jsx)("span", { className: hP.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hU(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Ae._)(e, t));
}
function hV() {
    let e = (0, g.bG)([cf.A], () => cf.A.getForApplication(sD.tv), [], hU);
    return (
        S.useEffect(() => {
            (0, cz.LM)(sD.tv);
        }, []),
        (0, E.jsx)(iI.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && ur.Ay.hasAccountCredit(e)
                    ? (0, E.jsx)(hj, { className: hP.fX, entitlements: e })
                    : (0, E.jsx)(hM, {}),
        })
    );
}
function hk() {
    return (0, E.jsx)("hr", { className: hP.hr });
}
let hw = function () {
        var e;
        let t = (0, g.bG)([dW.A], () => dW.A.getPremiumTypeSubscription()),
            i = (0, At.A)({ subscriptionFilter: (e) => hD.Hy.has(e.status) }),
            n = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, g.bG)(
                [dK.A],
                () => (null != t && null != t.paymentSourceId ? dK.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, g.bG)([dW.A], () => dW.A.hasFetchedSubscriptions()),
            a = (0, g.bG)([dT.A], () => dT.A.isBusy),
            o = (0, go.Y)(),
            d = AS.A.useField("subsection");
        S.useEffect(() => {
            (0, rD._)(null != d ? hG[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, g.bG)([dW.A], () => dW.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, g.bG)(
                [dW.A],
                () =>
                    Object.values(dW.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === U.rzx.GUILD)
                        .filter((e) => e.status !== U.Dmq.ENDED).length,
            ),
            A = (0, gc.A)({ forceFetch: !0 }),
            h = (0, cW.ds)(),
            T = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sD.xc.NONE || A.unactivatedUnits.length > 0);
        return (S.useEffect(
            () => (
                sa.h.wait(() => {
                    (0, ga.zS)(), dh.hP(), (0, gr.CD)(), dh.$o();
                }),
                function () {
                    AS.A.resetState();
                }
            ),
            [],
        ),
        eB.A.enabled)
            ? (0, E.jsx)(dl.A, {})
            : r && o
              ? d === nw.nR
                  ? (0, E.jsx)(AD, { onGoBack: () => AS.A.setState({ subsection: null }) })
                  : d === nw.PZ
                    ? (0, E.jsx)(hp, { onGoBack: () => AS.A.setState({ subsection: null }) })
                    : (0, E.jsx)("div", {
                          className: hP.kL,
                          children: (0, E.jsxs)("div", {
                              className: hP.Qs,
                              children: [
                                  s ? (0, E.jsx)(hD.Sb, {}) : null,
                                  null != t
                                      ? (0, E.jsx)(hD.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, E.jsx)(hD.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, E.jsxs)("section", {
                                          children: [
                                              (0, E.jsx)(eG.D, {
                                                  variant: "heading-md/bold",
                                                  className: hP.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, E.jsx)(el.E, {
                                                  variant: "text-md/normal",
                                                  className: hP.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: t_.A.getArticleURL(
                                                          U.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, E.jsx)(hb, {
                                                  className: hP.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: T,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, E.jsx)(hV, {}),
                                  m > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hk, {}),
                                              (0, E.jsx)(As, {
                                                  count: m,
                                                  onClickManageSubscription: () => AS.A.setState({ subsection: nw.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(hk, {}),
                                              (0, E.jsx)(AM, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      AS.A.setState({ subsection: nw.PZ }),
                                                          G.default.track(
                                                              U.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, E.jsx)(hk, {}),
                                  null != t ? (0, E.jsx)(hL, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, E.jsx)("div", { className: e4()(hP.kL, hP.Lq), children: (0, E.jsx)(du.y, {}) });
    },
    hF = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, E.jsx)(hw, {}),
    }),
    hB = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [hF],
    }),
    hz = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [hB] }),
    hY = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: m8.L,
        usePersistentBadge: function () {
            return S.useMemo(
                () => ({
                    badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, m9.l)() ? (0, E.jsx)(lV.E, { size: "xs", color: ea.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hz],
    }),
    hX = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [gs, m5, hY, c5, d4],
    });
var hH = i(540999),
    hK = i(306471),
    hW = i(964355),
    hZ = i(172272);
let hq = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, g.bG)([or.default], () => or.default.isAxeEnabled),
        setValue: (e) => (0, ol.x)({ axeEnabled: e }),
    }),
    hQ = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, g.bG)([or.default], () => or.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, ol.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hJ = i(276086),
    h$ = i(354328);
let h0 = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, h$.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hJ.L)("highlight_mana_components", e);
        },
    }),
    h1 = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, h$.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hJ.L)("highlight_void_toggleables", e);
        },
    }),
    h2 = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, g.bG)([or.default], () => or.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hZ.YR,
        markers: Array.from({ length: hZ.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hZ.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hZ.Or.getState().setHorizontalSpacing(e);
        },
    }),
    h3 = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, g.bG)([or.default], () => or.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, ol.x)({ layoutDebuggingEnabled: e });
        },
    }),
    h6 = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, g.bG)([or.default], () => or.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hZ.YR,
        markers: Array.from({ length: hZ.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hZ.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hZ.Or.getState().setVerticalSpacing(e);
        },
    }),
    h4 = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hQ, h3, h2, h6, h0, h1, hq],
    }),
    h7 = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var h5 = i(173936),
    h8 = i(260598),
    h9 = i(148810),
    Ee = i(380610),
    Et = i(986238),
    Ei = i(727201),
    En = i(274446);
let Es = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    El = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function Er(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Ea extends S.Component {
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
        return (0, E.jsxs)(lZ.A, {
            direction: lZ.A.Direction.VERTICAL,
            className: e4()(Ei.oS, iV.SX, En.N, Ei.nM),
            children: [
                (0, E.jsx)(iR.A, {
                    className: e4()(Ei.lL, { [Ei.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, E.jsxs)(lZ.A, {
                    className: iV.QB,
                    children: [
                        (0, E.jsx)(lZ.A.Child, {
                            basis: "50%",
                            children: (0, E.jsx)(lR.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: El,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, E.jsx)(lZ.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, E.jsx)(lX.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, E.jsxs)(lZ.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, E.jsx)(el.E, {
                                className: Ei.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, E.jsxs)(el.E, {
                            variant: "text-sm/normal",
                            className: Ei.AS,
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
class Eo extends S.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ee.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eq().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eq().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eq().without(Es, ...t);
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
        this.setState({ buildOverrides: eq().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, h9.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: eq().cloneDeep(e),
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
        (0, W.openModal)((t) => (0, E.jsx)(Eu, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, E.jsx)(i_.pp, {
            theme: ib.A.theme,
            className: e4()(iV.eT, iV.SX),
            children: (0, E.jsx)(i_.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eq().map(e, (e, n) =>
                  (0, E.jsx)(
                      Ea,
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
            : (0, E.jsx)(eM.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, E.jsx)(ta.m, {
                  text: "Generate Public Link",
                  children: (0, E.jsx)(lL.K, {
                      variant: "secondary",
                      icon: h5.q,
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
                (0, E.jsx)(eM.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, E.jsx)(eM.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: Er(t ?? {}),
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
            ? (0, E.jsx)(du.y, { className: iV.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                Er(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, E.jsx)(el.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, E.jsx)(iI.n, {
            children: (0, E.jsxs)(J.B, {
                gap: 16,
                children: [
                    (0, E.jsx)(lR.l, {
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
                    (0, E.jsxs)(a0.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class Eu extends S.Component {
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
        e.key === iD.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, h9.SB)(e);
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
        return Er(this.props.buildOverrides ?? {});
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
            d = Et.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, E.jsxs)(J.B, {
            gap: 20,
            children: [
                (0, E.jsx)(lR.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Et.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, E.jsx)(lR.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Et.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, E.jsxs)(J.B, {
                          gap: 20,
                          children: [
                              (0, E.jsx)(lX.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: au.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, E.jsx)(lR.l, {
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
                    : (0, E.jsx)(h8.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, E.jsx)(h8.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, E.jsx)($.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, E.jsx)("div", {});
        let i = tN.Y.INFO;
        switch (t) {
            case 0:
                i = tN.Y.ERROR;
                break;
            case 1:
                i = tN.Y.WARNING;
        }
        return (0, E.jsx)(tN.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, E.jsx)(lY.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, E.jsx)(ch.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Ed = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: Eo });
var Ec = i(256311),
    Eg = i(883600);
let Em = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, g.bG)([Eg.A], () => Eg.A.overrideId()),
            t = async (e) => {
                let t = Eg.A.getChangelog(e, "en-US");
                return null != t ? t : ((await Ec.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, E.jsx)(Ey, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ec.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var EA = i(506774);
let Eh = new Date("2018-01-01"),
    EE = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === df.default.fromTimestamp(Eh.getTime()),
        onClick: () => (EA.w.set("lastChangeLogDate", Eh), L.pK.updateSetting(df.default.fromTimestamp(Eh.getTime()))),
    }),
    ES = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, g.bG)([or.default], () => or.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, g.bG)(
                [or.default],
                () => or.default.disableAppCollectionsCache || or.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, ol.x)({ disableAppCollectionsCache: e }),
    }),
    ET = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, g.bG)([or.default], () => or.default.isForcedCanary),
        setValue: (e) => {
            (0, ol.x)({ canary: e });
        },
    }),
    Ex = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, g.bG)([or.default], () => or.default.sourceMapsEnabled),
        setValue: (e) => (0, ol.x)({ sourceMapsEnabled: e }),
    }),
    Ep = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, g.bG)([or.default], () => or.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, ol.x)({ onlyShowPreviewAppCollections: e }),
    });
var Ef = i(10094),
    EN = i(683760);
let E_ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sD.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sD.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sD.PremiumTypes.TIER_2 },
    ],
    EI = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => E_,
        clearable: !0,
        useValue: () =>
            (0, g.bG)([EN.A], () => {
                let e = EN.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Ef.O)(null, void 0)
                : null === e
                  ? (0, Ef.O)(void 0, void 0)
                  : (0, Ef.O)(0 === e ? null : e, void 0);
        },
    });
var EC = i(246605),
    Eb = i(274184);
let Ev = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, g.bG)([Eb.Ay], () => Eb.Ay.getSurveyOverride());
        return (0, E.jsx)(Ey, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => EC.xr(e),
            fetchOverride: (e) => EC.BC(e, !0) ?? null,
        });
    },
});
function Ey(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = S.useState(s ?? ""),
        u = S.useRef(null),
        [d, c] = S.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        S.useEffect(() => g, []),
        (0, E.jsx)(sF.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, E.jsx)(lX.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: (e) => {
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
let Ej = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [EI, Ev, Em, EE, ET, h7, Ep, ES, Ex, Ed],
        useInlineNotice: () => ({
            type: h.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    EO = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, g.bG)([or.default], () => or.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, ol.x)({ logAnalyticsEvents: e }),
    }),
    ER = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, g.bG)([or.default], () => or.default.isLoggingGatewayEvents),
        setValue: (e) => (0, ol.x)({ logGatewayEvents: e }),
    }),
    EL = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, g.bG)([or.default], () => or.default.preventPopoutClose),
        setValue: (e) => (0, ol.x)({ preventPopoutClose: e }),
    }),
    ED = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, g.bG)([or.default], () => or.default.logKeyboardMismatches),
        setValue: (e) => (0, ol.x)({ logKeyboardMismatches: e }),
    }),
    EP = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, g.bG)([or.default], () => or.default.isLoggingOverlayEvents),
        setValue: (e) => (0, ol.x)({ logOverlayEvents: e }),
    }),
    EG = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, g.bG)([or.default], () => or.default.isLoggingQuestEvents),
        setValue: (e) => (0, ol.x)({ logQuestEvents: e }),
    }),
    EM = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, g.bG)([or.default], () => or.default.isTracingRequests),
        setValue: (e) => (0, ol.x)({ trace: e }),
    }),
    EU = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [ER, EP, EM, EO, ED, EL, EG] }),
    EV = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Ej, EU, h4],
    }),
    Ek = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hK.V,
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
                } = (0, g.cf)([or.default, hH.A, iu.default], () => ({
                    layoutDebuggingEnabled: or.default.layoutDebuggingEnabled,
                    isDeveloper: hH.A.isDeveloper,
                    isLoggingGatewayEvents: or.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: or.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: or.default.isLoggingAnalyticsEvents,
                    isTracingRequests: or.default.isTracingRequests,
                    isForcedCanary: or.default.isForcedCanary,
                    isSourceMapsEnabled: or.default.sourceMapsEnabled,
                    isAxeEnabled: or.default.isAxeEnabled,
                    preventPopoutClose: or.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: or.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: or.default.disableAppCollectionsCache,
                    isStaff: iu.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hZ.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = hZ.Or.getState(),
                x = L.HZ.useSetting();
            return t
                ? [
                      (0, E.jsxs)(
                          en.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, eK.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, E.jsx)(
                                      en.sL,
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
                                      en.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, ol.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, ol.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, ol.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, E.jsxs)(
                          en.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, eK.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, ol.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, ol.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, ol.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, ol.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, ol.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, E.jsxs)(
                          en.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, eK.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, ol.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, E.jsx)(
                                      en.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, ol.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, E.jsxs)(E.Fragment, {
                                          children: [
                                              (0, E.jsx)(
                                                  en.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(hW.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hZ.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, E.jsx)(
                                                  en.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, E.jsx)(hW.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: hZ.YR,
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
                                en.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aH() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [EV],
    });
var Ew = i(127062),
    EF = i(25044),
    EB = i(80703),
    Ez = i(691540),
    EY = i(857250),
    EX = i(97483),
    EH = i(100392),
    EK = i(102609),
    EW = i(271478),
    EZ = i(736056),
    Eq = i(386976),
    EQ = i(257433),
    EJ = i(32523),
    E$ = i(96919),
    E0 = i(688151),
    E1 = i(636566);
function E2(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = S.useState(s),
        [a, o] = S.useState(!1),
        u = S.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, g.bG)([cO.default], () => cO.default.getId()),
        c = (0, g.bG)([cO.default], () => {
            let e = cO.default.getInstallationForTracking();
            return null == e ? null : (0, EB.v)(e);
        }),
        m = "installation" === t.kind && null != c ? c : d,
        A = (0, EQ.iN)(t, m),
        h = (0, EQ.Fm)(t, m),
        T = (0, g.yK)([EZ.A], () =>
            eq()
                .sortBy(EZ.A.getRecentExposures(E0.Vh.USER, i), (e) => {
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
                (0, cG.C)((0, EH.yA)(i), () => {
                    (0, Ez.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: EX.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        p = (0, E.jsx)(e7.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, E.jsxs)(el.E, {
                variant: "text-md/medium",
                className: E1.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsxs)(J.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    cG.p5 &&
                                        (0, E.jsx)(es.D, { onClick: x, children: (0, E.jsx)(h5.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, E.jsx)(el.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", {
                        className: E1.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, E.jsx)("div", { className: E1.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === EK.l5.LEGACY
                ? `Currently assigned to bucket ${A ?? E0.RE.NOT_ELIGIBLE}`
                : null != A
                  ? `Currently assigned to variant ${A}`
                  : "Currently unassigned"),
        (0, E.jsxs)("div", {
            className: E1.Os,
            children: [
                p,
                (0, E.jsx)("div", {
                    children: (0, E.jsx)(EW.g, {
                        label: t.system === EK.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, E.jsx)("div", {
                    className: E1.h_,
                    children:
                        null == h
                            ? (0, E.jsx)(el.E, {
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
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: E1.id,
                                  children: "Server Descriptor",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: E1.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: E1.id,
                                  children: "Override Descriptor",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: E1.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "text-lg/medium",
                                  className: E1.id,
                                  children: "Recent Exposures",
                              }),
                              (0, E.jsx)(el.E, {
                                  variant: "code",
                                  className: E1.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, E.jsx)("div", {
                          className: E1.id,
                          children: (0, E.jsx)(eo.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, E.jsx)(eU.c, { className: E1.yF }),
            ],
        })
    );
}
function E3(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = S.useState(null != n),
        [r, a] = S.useState(!1),
        o = S.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, g.bG)([EZ.A], () => EZ.A.getLoadedGuildExperiment(i)),
        d = (0, g.yK)([EZ.A], () =>
            eq()
                .sortBy(EZ.A.getRecentExposures(E0.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, m] = (0, g.yK)([eg.A, EZ.A], () => {
            let e = eq().sortBy(eg.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EZ.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? E0.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eq()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        A = (0, E.jsx)(es.D, {
            onClick: o,
            children: (0, E.jsxs)(el.E, {
                variant: "text-md/medium",
                className: E1.DD,
                children: [
                    (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)("span", { children: t.title }),
                            (0, E.jsx)(el.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, E.jsx)("span", { className: E1.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, E.jsxs)("div", {
              className: E1.Os,
              children: [
                  A,
                  (0, E.jsx)(EW.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, E.jsx)("div", {
                      className: E1.h_,
                      children:
                          null == u
                              ? (0, E.jsx)(el.E, {
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
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: E1.id,
                                    children: "Guild Assignments",
                                }),
                                (0, E.jsx)(el.E, { variant: "code", className: E1.AS, children: c }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: E1.id,
                                    children: "Server Descriptor",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: E1.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: E1.id,
                                    children: "Override Descriptor",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: E1.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-lg/medium",
                                    className: E1.id,
                                    children: "Recent Exposures",
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "code",
                                    className: E1.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, E.jsx)("div", {
                            className: E1.id,
                            children: (0, E.jsx)(eo.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, E.jsx)(eU.c, { className: E1.yF }),
              ],
          })
        : (0, E.jsx)("div", { className: E1.Os, children: A });
}
let E6 = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Eq.op)(),
                { experiments: i, overridesInfo: n } = (0, EJ.hI)(),
                s = S.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = S.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, g.bG)([cO.default], () => {
                    let e = cO.default.getInstallationForTracking();
                    return null == e ? null : (0, EB.v)(e);
                }),
                [a, o] = S.useState(""),
                u = (0, E$.oC)((0, E$.R3)((0, E$.Fm)(s), l), a);
            return (0, E.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, E.jsxs)(J.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, E.jsxs)(el.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cG.p5 &&
                                    (0, E.jsx)(eo.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cG.C)(r, () => {
                                                (0, Ez.P0)((0, EY.o)("Installation ID copied!", EX.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, E.jsx)(ee.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? E3 : E2;
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
                              className: E1.p$,
                              children: (0, E.jsx)(eG.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    E4 = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [E6] }),
    E7 = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [E4] }),
    E5 = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ew.c,
        useMenu: EF.A,
        buildLayout: () => [E7],
    }),
    E8 = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => hH.A.isDeveloper,
        buildLayout: () => [E5, Ek],
    });
var E9 = i(824552),
    Se = i(370997);
let St = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Se.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var Si = i(187322),
    Sn = i(77468),
    Ss = i(289498),
    Sl = i(573648),
    Sr = i(941314),
    Sa = i(874490),
    So = i(370480),
    Su = i(968309);
let Sd = new Set([U.fg2.XBOX, U.fg2.PLAYSTATION, U.fg2.PLAYSTATION_STAGING, U.fg2.CRUNCHYROLL]);
var Sc = i(169869),
    Sg = i(235693),
    Sm = i(757036),
    SA = i(555837),
    Sh = i(241524),
    SE = i(346017),
    SS = i(212739),
    ST = i(30370),
    Sx = i(968671),
    Sp = i(674567),
    Sf = i(237146),
    SN = i(594387),
    S_ = i(34934);
function SI() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, Sp.V)()),
            (t = (0, Sx.GM)("connectedAccountsBannerFooter")),
            (n = (0, SS.O)()),
            (l = null != (s = (0, g.bG)([ST.A], () => ST.A.getAccount(null, U.fg2.XBOX))) && !s.revoked),
            e === Sp.s.NONE || e === Sp.s.FREE_FRACTIONAL_NITRO || n
                ? { variant: Sp.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === Sp.s.NON_NITRO && !l }),
        { analyticsLocations: o } = (0, nZ.Ay)(e2.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, SE.yW)(o),
        d = (0, Sh.A)("(max-width: 485px)");
    if (r === Sp.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case Sp.s.NITRO:
            (m = j.intl.string(Sf.default["+QAvQz"])),
                (A = (0, E.jsx)(eM.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: j.intl.string(Sf.default.CubeLC),
                    onClick: () => {
                        (0, W.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(
                                i.bind(i, 836291),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case Sp.s.NON_NITRO:
        case Sp.s.FREE_FRACTIONAL_NITRO:
            (m = j.intl.string(Sf.default.NwkRTZ)),
                (A = (0, E.jsx)(sv.A, {
                    defaultTextOverride: j.intl.string(Sf.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: sD.pe.TIER_2,
                }));
            break;
        default:
            (0, N.xb)(r);
    }
    return (0, E.jsxs)(nZ.f5, {
        value: o,
        children: [
            (0, E.jsxs)("div", {
                className: S_.bV,
                children: [
                    (0, E.jsx)(eG.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, E.jsx)(o5.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, E.jsx)(ii.N, {
                theme: "dark",
                children: (e) =>
                    (0, E.jsx)("div", {
                        className: e,
                        children: (0, E.jsxs)("div", {
                            className: S_.Nr,
                            children: [
                                (0, E.jsxs)("div", {
                                    className: S_.Tp,
                                    children: [
                                        (0, E.jsx)("div", {
                                            className: S_.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, E.jsx)("div", { className: S_.$h }),
                                        (0, E.jsx)("div", { className: S_.Rv }),
                                        (0, E.jsx)("div", { className: S_.Lw }),
                                    ],
                                }),
                                (0, E.jsxs)("div", {
                                    className: S_.Mn,
                                    children: [
                                        (0, E.jsxs)("div", {
                                            className: S_.mY,
                                            children: [
                                                (0, E.jsx)("img", {
                                                    className: S_.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, E.jsx)(el.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: S_.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, E.jsx)("div", { className: S_.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, E.jsxs)(E.Fragment, {
                                        children: [
                                            (0, E.jsx)("div", { className: S_.yF }),
                                            (0, E.jsxs)("div", {
                                                className: S_.sQ,
                                                children: [
                                                    (0, E.jsx)(d7.o, {
                                                        size: d ? "md" : "sm",
                                                        color: ea.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, E.jsx)(el.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(SN.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(SE.Hx.CONNECT),
                                                                    (0, Su.A)({
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
var SC = i(201718),
    Sb = i(321078),
    Sv = i(672130),
    Sy = i(546183),
    Sj = i(379848),
    SO = i(96734);
let SR = (e) => {
        let { markAsDismissed: t } = e;
        return (
            S.useEffect(() => t(im.i.UNKNOWN), [t]),
            (0, E.jsx)(sc.Lp, { className: SO.Ad, text: j.intl.string(j.t.y2b7CA) })
        );
    },
    SL = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, E.jsxs)("div", {
            className: SO.kL,
            children: [
                n,
                (0, E.jsxs)("div", {
                    className: SO.FS,
                    children: [
                        (0, E.jsxs)("div", {
                            className: SO.TK,
                            children: [
                                (0, E.jsx)(Sj.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, E.jsx)(SR, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, E.jsx)(el.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, E.jsx)(el.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, E.jsx)(eM.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
            ],
        });
    },
    SD = () => {
        let e = t_.A.getArticleURL(U.MVz.PS_CONNECTION);
        return (0, E.jsx)(SL, {
            title: j.intl.string(j.t.v20wwm),
            body: j.intl.format(j.t.lTZBit, { help_article: e }),
            img: (0, E.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eV.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, Su.A)({ platformType: U.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    SP = "/assets/9df988a227916145.png",
    SG = () =>
        (0, E.jsx)(SL, {
            title: j.intl.string(SN.default["9cLtDI"]),
            body: j.intl.format(SN.default["D+kUbg"], {
                learnMoreLink: t_.A.getArticleURL(U.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, E.jsx)("img", { src: SP, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eV.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, Su.A)({ platformType: U.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    SM = () => {
        let e = t_.A.getArticleURL(U.MVz.XBOX_CONNECTION);
        return (0, E.jsx)(SL, {
            title: j.intl.string(j.t["2okkZV"]),
            body: j.intl.format(j.t.OnERSS, { help_article: e }),
            img: (0, E.jsx)("img", { src: SP, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eV.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, Su.A)({ platformType: U.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var SU = i(783419),
    SV = i(534952),
    Sk = i(230451),
    Sw = i(781471);
let SF = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, g.cf)(
            [ST.A],
            () => ({
                isJoining: ST.A.isJoining(i.id),
                joinErrorMessage:
                    "" === ST.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : ST.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== ST.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, g.bG)([eg.A], () => eg.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, E.jsx)(eM.$, {
                size: "sm",
                onClick: function () {
                    Sn.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, E.jsxs)("div", {
            className: Sw.iA,
            children: [
                (0, E.jsxs)("div", {
                    className: Sw.XX,
                    children: [
                        (0, E.jsx)(gq.Ay, { size: gq.Ay.Sizes.SMALL, guild: i.guild, className: Sw.$f }),
                        (0, E.jsxs)("div", {
                            className: Sw.Vn,
                            children: [
                                (0, E.jsx)(el.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, E.jsx)(u0.Anchor, {
                                    href: Sl.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, E.jsx)(el.E, {
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
                    (0, E.jsx)(el.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Sw.R,
                        children: s,
                    }),
            ],
        })
    );
};
function SB(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, SA.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Sm.L)(sD.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === U.fg2.XBOX && l
        ? (0, E.jsx)(SG, {})
        : s.twoWayLink
          ? null
          : s.type === U.fg2.XBOX
            ? (0, E.jsx)(SM, {})
            : s.type === U.fg2.PLAYSTATION
              ? (0, E.jsx)(SD, {})
              : null;
}
function Sz(e) {
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
        [b, v] = S.useState(!1),
        [y, O] = S.useState([]),
        R = (0, Sa.ML)(u.type),
        L = Sl.A.get(R),
        D = (0, Sr.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
    S.useEffect(() => {
        m(u.friendSync), h(u.visibility), x(u.metadataVisibility), f(u.showActivity);
    }, [u]);
    let P = { inProgressVisibility: N, inProgressMetadataVisibility: I },
        G = S.useRef(P);
    return (
        S.useEffect(() => {
            G.current = P;
        }),
        S.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            null != e && (h(e), Sn.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (x(t), Sn.A.setMetadataVisibility(u.type, u.id, t), C(null));
        }, [u]),
        (0, E.jsxs)("div", {
            className: Sw.FI,
            children: [
                ((t = Sl.A.get(u.type)),
                (i = Sl.A.get(R)),
                (n = "1" === (u.metadata ?? {})[SU.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === U.fg2.TWITTER &&
                    n &&
                    (s = (0, E.jsx)(ta.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, E.jsx)(tA.A, {
                            color: ea.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, E.jsx)(to.U, { size: "xs", color: ea.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, E.jsxs)("div", {
                    className: Sw.Il,
                    children: [
                        (0, E.jsx)("img", {
                            alt: i.name,
                            className: Sw.gj,
                            src: (0, g_.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, E.jsxs)("div", {
                            children: [
                                (0, E.jsxs)("div", {
                                    className: Sw.$p,
                                    children: [
                                        (0, E.jsx)(el.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sw.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, E.jsx)("div", { className: Sw.cG, children: s }),
                                    ],
                                }),
                                (0, E.jsx)(el.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sw.Au,
                                    children:
                                        null != i.replacedBy && D
                                            ? j.intl.format(Sk.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, E.jsx)(es.D, {
                            className: Sw.uH,
                            onClick: function () {
                                let e = Sl.A.get(u.type);
                                (0, W.openModal)((t) =>
                                    (0, E.jsx)(lY.Modal, {
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
                                            Sd.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, E.jsx)(sA.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, E.jsx)(gC.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, E.jsx)(SB, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, So.An)(t[SU.pK.CREATED_AT], c);
                    switch (e.type) {
                        case U.fg2.REDDIT:
                            i = (0, Sc.xE)(t, Sw.Nz);
                            break;
                        case U.fg2.STEAM:
                            i = (0, Sc.dy)(t, Sw.Nz);
                            break;
                        case U.fg2.BLUESKY:
                        case U.fg2.TWITTER:
                        case U.fg2.MASTODON:
                            i = (0, Sc.ED)(t, Sw.Nz);
                            break;
                        case U.fg2.EBAY:
                            i = (0, Sc.ub)(t, Sw.Nz);
                            break;
                        case U.fg2.PAYPAL:
                            i = (0, Sc.gZ)(t, Sw.Nz);
                            break;
                        case U.fg2.TIKTOK:
                            i = (0, Sc.HU)(t, Sw.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, E.jsx)(
                                el.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sw.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = y.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== Sl.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, E.jsx)(sc.Lp, { className: Sw.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, E.jsx)(
                                    el.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sw.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: t_.A.getArticleURL(U.MVz.CONNECTION_DETAILS),
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
                                    className: Sw.jy,
                                    children: (0, E.jsx)(eM.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: b,
                                        disabled: s,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  v(!0),
                                                      Sn.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              y.push(e.id), O(y), v(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, E.jsx)("div", { className: Sw.tJ, children: i })
                    );
                })(u),
                (U.txh.has(u.type) &&
                    (l = (0, E.jsx)($.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), Sn.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                U.ewM.has(u.type) &&
                    (r = (0, E.jsx)($.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: L.name }),
                        checked: p,
                        onChange: function (e) {
                            f(e), Sn.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                Sl.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, E.jsx)($.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                C(i), (0, Su.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), Sn.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, E.jsxs)("div", {
                    className: Sw.HZ,
                    children: [
                        (0, E.jsx)($.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    _(i), (0, Su.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                h(i), Sn.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, E.jsx)(eU.c, {});
                })(),
                u.revoked
                    ? (0, E.jsx)(tN.p, {
                          messageType: tN.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Su.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, E.jsx)(sF.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, E.jsx)(SF, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, E.jsx)(Sg.A, { partner: u.type }),
            ],
        })
    );
}
function SY(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, E.jsxs)("div", {
              className: Sw.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = ni.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, E.jsxs)("div", {
                          className: Sw.Il,
                          children: [
                              (0, E.jsx)("img", { alt: i.name, className: e4()(Sw.gj, Sw.sN), src: n }),
                              (0, E.jsxs)("div", {
                                  children: [
                                      (0, E.jsx)("div", {
                                          className: Sw.$p,
                                          children: (0, E.jsx)(el.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sw.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, E.jsx)(el.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sw.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(es.D, {
                                  className: Sw.uH,
                                  onClick: () =>
                                      (0, Se.d1)(i, t.scopes, () => {
                                          E9.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, E.jsx)(gC.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, E.jsx)("div", {
                      className: Sw.HZ,
                      children: (0, E.jsx)($.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              SC.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function SX(e) {
    let t = Sl.A.get(e);
    (0, Su.A)({ platformType: t.type }),
        G.default.track(U.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function SH() {
    let e = (0, Sa.gn)(),
        t = (0, Sr.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, tn.A)(t ? SV.tX : []);
    return (0, E.jsxs)("div", {
        className: Sw.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, E.jsx)(
                        Sv.A,
                        { application: e, className: Sw.__invalid_accountButton, innerClassName: Sw.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, E.jsx)(
                        Ss.A,
                        { type: e.type, className: Sw.__invalid_accountButton, innerClassName: Sw.U$ },
                        e.type,
                    ),
                ),
            (0, E.jsx)(ta.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, E.jsx)("div", {
                    className: e4()(Sw.ej, Sw.__invalid_accountButton),
                    children: (0, E.jsx)(Si.vN, {
                        children: (0, E.jsx)("button", {
                            className: e4()(Sw.R8, Sw.U$),
                            type: "button",
                            onClick: function () {
                                sa.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: SX });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, E.jsx)(tR._, {
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
function SK(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = S.useMemo(() => n.filter((e) => Sl.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, E.jsx)(du.y, { type: du.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, E.jsx)(i_.pp, {
                    theme: r,
                    className: u ? Sw.p$ : void 0,
                    children: (0, E.jsx)(i_.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, E.jsxs)(E.Fragment, {
                    children: [
                        u &&
                            (0, E.jsx)(eG.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: s.length + d.length }),
                            }),
                        s.map((e, t) =>
                            (0, E.jsx)(
                                SY,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, E.jsx)(
                                Sz,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            Sn.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, E.jsx)("div", { className: Sw.V, children: t })
    );
}
let SW = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: U.X7G.PRIVACY }),
                children: (0, E.jsx)(SH, {}),
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
    SZ = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
                t = (0, g.bG)([ST.A], () => ST.A.isFetching()),
                i = (0, g.bG)([ST.A], () => ST.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, g.cf)([Sy.default], () => ({
                    authorizedAppsFetchState: Sy.default.getFetchState(),
                    authorizedApps: Sy.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Sb.A)(iu.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cc.Ay)(),
                o = (0, g.bG)([dZ.default], () => dZ.default.locale);
            return (S.useEffect(() => {
                n === Sy.FetchState.NOT_FETCHED && E9.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(SI, {}),
                          (0, E.jsx)(SK, {
                              fetching: t || l || (r.length > 0 && n !== Sy.FetchState.FETCHED),
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
            Sn.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var Sq = i(46225);
let SQ = [U.fg2.LEAGUE_OF_LEGENDS, U.fg2.RIOT_GAMES];
function SJ() {
    let e = (0, g.bG)([ST.A], () => ST.A.getAccounts().find((e) => SQ.includes(e.type))?.type),
        t = null != e ? Sl.A.get(e) : null,
        i = (0, tn.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, Sq.RD)(i),
        r = j.intl.string(Sk.default["1S6oAo"]),
        a = (0, Sr.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return S.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: h.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          j.intl.format(Sk.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let S$ = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: SJ,
        buildLayout: () => [SW, SZ],
    }),
    S0 = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [St],
        initialize: () => (
            E9.A.fetch(),
            () => {
                Se.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    S1 = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: dl.L,
        buildLayout: () => [S$, S0],
    }),
    S2 = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: h5.q,
        buildLayout: () => [S1],
    }),
    S3 = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [i1, eL, iT, S2],
    });
var S6 = i(631670),
    S4 = i(619499),
    S7 = i(836602),
    S5 = i(591179),
    S8 = i(854627),
    S9 = i(975732),
    Te = i(761508),
    Tt = i(83257),
    Ti = i(159001),
    Tn = i(344346),
    Ts = i(919395),
    Tl = i(233641);
function Tr(e) {
    let { title: t, children: i } = e;
    return (0, E.jsxs)("div", {
        children: [(0, E.jsx)(eG.D, { variant: "text-md/medium", className: Tl.Vf, children: t }), i],
    });
}
function Ta(e) {
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
        className: e4()(Tl.UA, i),
        children: (0, E.jsxs)("div", {
            className: e4()(Tl.yt, n),
            children: [
                (0, E.jsx)("div", {
                    className: e4()(Tl.Fp, a && Tl.Oz),
                    children: (0, E.jsxs)(E.Fragment, {
                        children: [
                            (0, E.jsx)(Tr, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, E.jsx)(Tr, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, E.jsx)("div", { className: Tl.oB, children: t }),
            ],
        }),
    });
}
var To = i(986687),
    Tu = i(101058),
    Td = i(841595),
    Tc = i(696451),
    Tg = i(10478);
function Tm() {
    return (0, E.jsxs)("div", {
        className: Tg.p$,
        children: [
            (0, E.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tg.Sl }),
            (0, E.jsx)(eG.D, {
                className: Tg.h8,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.Z1OZCV),
            }),
            (0, E.jsx)(el.E, { className: Tg.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, E.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tg.h8,
                children: (0, E.jsx)(eM.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: () => {
                        (0, sB.pX)(U.BVt.GUILD_DISCOVERY), (0, sy.default)();
                    },
                }),
            }),
        ],
    });
}
var TA = i(81400),
    Th = i(252732),
    TE = i(355622),
    TS = i(408018),
    TT = i(138617),
    Tx = i(158983);
let Tp = (0, sR.Ld)(),
    Tf = (0, ir.createChannelRecord)({ id: "1", type: U.rbe.DM }),
    TN = (0, sR.Ld)();
function T_(e) {
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
        [d, c] = S.useState((0, TS.x7)(o)),
        g = S.useRef(r),
        m = S.useRef(!1);
    return (
        S.useEffect(() => {
            if (g.current !== r) {
                let e = (0, TS.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        S.useEffect(() => {
            void 0 !== s || o === r || m.current || (u(r), c((0, TS.x7)(r)));
        }, [s, r, o]),
        (0, E.jsxs)(ue.A, {
            title: t,
            titleId: Tp,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, E.jsx)(TT.Ay, {
                    "aria-describedby": TN,
                    "aria-labelledby": Tp,
                    className: Tx.i,
                    innerClassName: Tx.Z,
                    maxCharacterCount: U.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: Tf,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: eK.USER_SETTINGS_MODAL_KEY,
                    type: TE.oU.PROFILE_BIO_INPUT,
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
                (0, E.jsx)(eu.A, { id: TN, children: j.intl.format(j.t["+DFxLc"], { maxLength: U.NA2 }) }),
            ],
        })
    );
}
var TI = i(930861),
    TC = i(821956),
    Tb = i(562819),
    Tv = i(84540),
    Ty = i(408919);
function Tj(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nZ.Ay)(),
        o = (0, Ts.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Ts.CP)(i?.id),
        c = r ? TI.wL : aJ.$n;
    return (0, E.jsx)(ue.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, E.jsxs)("div", {
            className: Ty.NC,
            children: [
                (0, E.jsx)(c, {
                    size: aJ.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, Tb.L)({ analyticsLocations: a, guild: i });
                    },
                    className: e4()({ [Ty.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ty.DT,
                        children: (0, E.jsx)(eM.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TC.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: () => {
                                (0, Tv.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TO = i(339984),
    TR = i(114077);
let TL = [{ name: "gif", extensions: ["gif"] }];
function TD(e) {
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
        { newestAnalyticsLocation: g } = (0, nZ.Ay)(),
        m = c ? TI.wL : aJ.$n,
        A = S.useCallback(() => {
            (0, Th.XD)({
                uploadType: TO.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TL : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, E.jsx)(ue.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: TR.NC,
            children: [
                (0, E.jsx)(m, {
                    className: e4()({ [TR.yj]: c }),
                    size: aJ.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TR.DT,
                        children: (0, E.jsx)(eM.$, {
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
var TP = i(152103);
function TG(e) {
    let { user: t, guildId: i, className: n } = e,
        s = ur.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nZ.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Ts.B0)(t, i),
        d = (0, S.useCallback)(() => {
            G.default.track(U.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nq.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, S.useCallback)(() => {
            (0, Tv.p)({ displayNameStyles: null }), G.default.track(U.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, S.useCallback)(() => {
            (0, Tv.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        m = void 0 !== o ? o : null != i ? a : r;
    return (0, E.jsx)(ue.A, {
        title: j.intl.string(nQ.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TP.N,
            children: [
                (0, E.jsx)(eM.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(nQ.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    null != m &&
                    (0, E.jsx)(eM.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nQ.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != m &&
                    (0, E.jsx)(eM.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(nQ.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var TM = i(637193),
    TU = i(727369);
function TV(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Ts.rv)(t, i?.id),
        d = S.useCallback(() => {
            (0, TM.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = S.useCallback(() => {
            (0, Tv.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, E.jsx)(ue.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, E.jsxs)("div", {
            className: TU.u,
            children: [
                (0, E.jsx)(eM.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, E.jsx)(eM.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Tk = i(33023);
function Tw(e) {
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
        { newestAnalyticsLocation: c } = (0, nZ.Ay)(),
        g = d ? TI.wL : aJ.$n;
    return (0, E.jsx)(ue.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, E.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, E.jsx)(g, {
                    className: e4()({ [Tk.yj]: d }),
                    size: aJ.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Th.XD)({ uploadType: TO.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, E.jsx)(eM.$, {
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
var TF = i(617061),
    TB = i(872246);
function Tz(e) {
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
        { analyticsLocations: u } = (0, nZ.Ay)(),
        d = ur.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Ts.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Ts.nZ)(i?.id);
    S.useEffect(() => {
        d &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sD.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? TI.wL : aJ.$n;
    return (0, E.jsx)(ue.A, {
        forcedDivider: r,
        borderType: cp.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, E.jsxs)("div", {
            className: TB.NC,
            children: [
                (0, E.jsx)(A, {
                    size: aJ.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, TF.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: e4()({ [TB.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, E.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TB.DT,
                        children: (0, E.jsx)(eM.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: () => {
                                (0, Tv.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TY = i(13875),
    TX = i(515727),
    TH = i(238780);
function TK(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nZ.Ay)(),
        l = (0, TY.sk)("ProfileFrameSection"),
        r = (0, Ts.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Ts.Tu)(i?.id),
        [u, d] = (0, ek.kn)([eV.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eV.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, E.jsx)(ue.A, {
              showBorder: c,
              borderType: c ? cp.i.NEW_UPSELL : cp.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, E.jsx)(sc.Lp, { text: j.intl.string(j.t.y2b7CA), className: TH.Ad }) : void 0,
              description: c ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, E.jsxs)("div", {
                  className: TH.NC,
                  children: [
                      (0, E.jsx)(eM.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: () => {
                              (0, TX.w)({ analyticsLocations: s, guild: i }), d(im.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, E.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TH.DT,
                              children: (0, E.jsx)(eM.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: () => {
                                      (0, Tv.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var TW = i(33851),
    TZ = i.n(TW),
    Tq = i(602853),
    TQ = i(654107),
    TJ = i(999291),
    T$ = i(101928),
    T0 = i(317097),
    T1 = i(508274),
    T2 = i(919796),
    T3 = i(773431);
function T6(e) {
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
        c = (0, Tq.r)(ea.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = ea.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Th.sN)(n),
        A = (0, T0.Hl)(n),
        h = A === c ? g : A,
        T = m ? ea.A.unsafe_rawColors.WHITE.css : ea.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T2.A)(a),
        p = (0, T2.A)(o),
        [f, N] = S.useState((0, dd.A)());
    return (
        S.useEffect(() => {
            (x !== a || p !== o) && N((0, dd.A)());
        }, [o, a, p, x]),
        (0, E.jsx)(et.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, E.jsx)(T1.VN, {
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
                    className: e4()(T3.oP, { [T3.r9]: l }),
                    children: [
                        (0, E.jsx)(es.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? U.tEg : t,
                            style: { backgroundColor: A, borderColor: h },
                            className: T3.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, E.jsx)(ul.R, {
                                size: "custom",
                                className: T3.BW,
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
var T4 = i(362656);
function T7(e) {
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
        c = (0, TJ.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, T$.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = ur.Ay.canUsePremiumProfileCustomization(t),
        h = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, Tq.r)(ea.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TQ.rh)(h, S, !1);
    if (null == g || null == m) return null;
    let x = (e) => {
        s(TZ()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, E.jsx)(ue.A, {
        title: j.intl.string(j.t.DMeO2X),
        disabled: !A && !l,
        className: e4()(T4.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, E.jsxs)("div", {
            className: T4.hd,
            children: [
                (0, E.jsx)("div", {
                    className: T4.YX,
                    children: (0, E.jsx)(T6, {
                        onChange: (e) => x([e, m]),
                        color: g,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, E.jsx)(el.E, {
                            className: T4.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: j.intl.string(j.t.C3KTQk),
                        }),
                    }),
                }),
                (0, E.jsx)("div", {
                    className: T4.YX,
                    children: (0, E.jsx)(T6, {
                        onChange: (e) => x([g, e]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, E.jsx)(el.E, {
                            className: T4.yz,
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
                        className: T4.WA,
                        children: (0, E.jsx)(eM.$, {
                            variant: "secondary",
                            size: "sm",
                            text: j.intl.string(j.t["L+GmoR"]),
                            onClick: () => x([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function T5(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sR.GV)();
    return (0, E.jsx)(ue.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, E.jsx)(lX.k, {
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
var T8 = i(427262),
    T9 = i(684732),
    xe = i(576705),
    xt = i(376294);
function xi(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, g.bG)([xe.A], () => xe.A.can(U.xBc.CHANGE_NICKNAME, r) || xe.A.can(U.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Sm.L)(sD.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ue.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, E.jsx)(lX.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: U.d0r,
                onChange: function (e) {
                    (0, Tv.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, E.jsx)(TG, { user: l, guildId: r.id, className: xt.F }),
        ],
    });
}
var xn = i(574173);
let xs = "/assets/b25da78aa7949feb.png";
function xl(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, cc.Ay)(),
        { analyticsLocations: l } = (0, nZ.Ay)(e2.A.PREMIUM_UPSELL_OVERLAY);
    return (S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sD.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, E.jsxs)("div", {
              className: xn.ry,
              children: [
                  (0, E.jsx)("div", { children: n }),
                  (0, E.jsxs)("div", {
                      className: xn.Wc,
                      children: [
                          (0, E.jsx)("img", {
                              className: xn.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case U.NJ8.DARK:
                                      case U.NJ8.DARKER:
                                      case U.NJ8.MIDNIGHT:
                                          return xs;
                                      case U.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xs;
                                  }
                              })(s),
                          }),
                          (0, E.jsxs)("div", {
                              className: xn._9,
                              children: [
                                  (0, E.jsx)(el.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, E.jsx)(cx.A, {
                              size: aJ.$n.Sizes.LARGE,
                              color: aJ.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ur.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: sD.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xr = i(887267);
function xa() {
    let e = (0, g.bG)([iu.default], () => {
            let e = iu.default.getCurrentUser();
            return tY()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Sm.L)(sD.PremiumTypes.TIER_2),
        i = (0, g.bG)([S7.A, eg.A], () => eg.A.getGuild(S7.A.selectedGuildId));
    tY()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, g.cf)([S7.A], () => ({ ...S7.A.getPendingChanges(i.id), errors: S7.A.getErrors(i.id) })),
        d = (0, Tu.V7)({ userId: e.id, image: n }),
        c = (0, TA.EC)(i.id),
        m = (0, g.bG)([Tc.Ay], () => (null == i.id ? null : Tc.Ay.getMember(i.id, e.id))),
        A = (0, g.bG)([Td.A], () => Td.A.getGuildMemberProfile(e.id, i.id)),
        h = ur.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Ts.z5)(n, m?.avatar),
        T = (0, Ts.Ac)(l, A?.banner),
        x = (0, T9.l)(o, A?.themeColors),
        p = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, E.jsxs)("div", {
        className: xr.Q,
        children: [
            (0, E.jsx)(
                xi,
                {
                    errors: u?.nick ?? c?.nick,
                    username: T8.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, E.jsx)(
                T5,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tv.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, E.jsxs)(xl, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, E.jsx)(
                        TD,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, E.jsx)(ta.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: (e) =>
                                (0, Th.rM)(e, m?.avatar, (e) => (0, Tv.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, E.jsx)(
                        Tj,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, E.jsx)(ta.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, E.jsx)(TG, { user: e, guildId: i.id }),
                    (0, E.jsx)(
                        TV,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, E.jsx)(ta.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: xr.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, E.jsx)(
                        Tz,
                        {
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, E.jsx)(ta.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
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
                        TK,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, E.jsx)(ta.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, E.jsx)(
                        Tw,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, Th.rM)(e, A?.banner, (e) => (0, Tv.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, E.jsx)(T7, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tv.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, E.jsx)(
                        T_,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, E.jsxs)(E.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, E.jsx)(ta.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, E.jsx)(o5.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xr.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, Tv.p)({ guildId: i.id, bio: e }),
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
var xo = i(405318);
function xu(e) {
    (0, W.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("51762"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, E.jsx)(t, { source: { ...e, page: U.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xd(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(e2.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, g.bG)([iu.default], () => {
            let e = iu.default.getCurrentUser();
            return tY()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, g.bG)([Tc.Ay], () => (null != t ? Tc.Ay.getMember(t.id, s.id) : null)),
        r = (0, g.bG)([Td.A], () => !Td.A.isFetchingProfile(s.id, t?.id)),
        a = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, g.cf)([S7.A], () => S7.A.getPendingChanges(t?.id)),
        c = (0, Tu.V7)({ userId: s.id, image: o }),
        m = (0, Ts.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Ts.B0)(s, t?.id);
    return (S.useEffect(() => () => sa.h.wait(Ti.IM), []), a)
        ? (0, E.jsx)(dl.A, {})
        : r
          ? (0, E.jsxs)(nZ.f5, {
                value: n,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: t_.A.getArticleURL(U.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(o9.A, { guildId: t.id, onChange: i }),
                                  (0, E.jsx)(Ta, {
                                      profilePreviewTitle: (0, E.jsx)(eG.D, {
                                          variant: "heading-md/medium",
                                          className: xo.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, E.jsx)(To.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ur.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xu,
                                          containerClassName: xo.ti,
                                      }),
                                      nameplatePreview: (0, E.jsx)(Tn.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xo.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, E.jsx)(xa, {}),
                                  }),
                              ],
                          })
                        : (0, E.jsx)(Tm, {}),
                ],
            })
          : (0, E.jsx)(du.y, {});
}
var xc = i(903209),
    xg = i(39409);
let xm = (e) => {
    let { children: t, notice: i } = e;
    return (0, E.jsxs)("div", { className: xg.r, children: [i, (0, E.jsx)("div", { children: t })] });
};
var xA = i(269115),
    xh = i(823092),
    xE = i(859040),
    xS = i(379197),
    xT = i(488430),
    xx = i(457421),
    xp = i(940622),
    xf = i(559474),
    xN = i(144030);
let x_ = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nZ.Ay)(e2.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = S.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xp.mb)(xf.RN.UPSELL_BANNER)),
        (t = (0, xp.mb)(xf.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, g.bG)([xx.A], () => xx.A.getMarketingBySurface(xS.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xT.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xh.L_)();
    return (
        S.useEffect(() => {
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sD.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, E.jsxs)("div", {
            ref: l,
            className: xN.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, E.jsx)("div", {
                    className: xN.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, E.jsx)("img", { src: a, className: xN.Qw, alt: "" }),
                }),
                (0, E.jsxs)("div", {
                    className: xN.Em,
                    children: [
                        (0, E.jsx)(eG.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xN.DD,
                            children: o,
                        }),
                        (0, E.jsx)(el.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, E.jsx)(eM.$, {
                    onClick: () => {
                        m(() =>
                            (0, xE.Cz)({
                                analyticsLocations: s,
                                analyticsSource: e2.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var xI = i(451909),
    xC = i(202639),
    xb = i(400669),
    xv = i(835071),
    xy = i(422936),
    xj = i(234419),
    xO = i(590180),
    xR = i(898461),
    xL = i(207803),
    xD = i(508425),
    xP = i(559949);
let xG = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xP.x.CHICLE, effectId: xD.z.POP, colors: [959694] },
            getName: () => j.intl.string(j.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xP.x.PIXELIFY, effectId: xD.z.NEON, colors: [2949343] },
            getName: () => j.intl.string(j.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xP.x.NEO_CASTEL, effectId: xD.z.TOON, colors: [0xff0000] },
            getName: () => j.intl.string(j.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xP.x.CHERRY_BOMB, effectId: xD.z.TOON, colors: [3343795] },
            getName: () => j.intl.string(j.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xP.x.MUSEO_MODERNO, effectId: xD.z.NEON, colors: [28737] },
            getName: () => j.intl.string(j.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    xM = (e) => xG[e],
    xU = Object.keys(xG),
    xV = (e) => {
        let t = null == e ? xU : xU.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var xk = i(371912),
    xw = i(674253);
function xF(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, g.bG)([i5.A], () => i5.A.useReducedMotion),
        s = (0, xk.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = S.useMemo(() => {
            let e = xM(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, E.jsxs)("div", {
        className: xw.kL,
        children: [
            (0, E.jsx)(es.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xw.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, E.jsxs)(es.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: xw.Lt,
                children: [
                    (0, E.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xw.L_ }),
                    (0, E.jsx)(el.E, { className: xw._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var xB = i(410516),
    xz = i(811611),
    xY = i(515718),
    xX = i(507553);
function xH(e, t) {
    let i = xX.A.useField("scrollPosition"),
        n = (0, g.bG)([i5.A], () => i5.A.useReducedMotion);
    (0, S.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), xX.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var xK = i(844222),
    xW = i(314649);
function xZ(e) {
    let { user: t } = e,
        { reducedMotion: n } = S.useContext(xK.C),
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
        } = (0, g.cf)([S7.A], () => {
            let e = S7.A.getPendingChanges(),
                t = S7.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tu.V7)({ userId: t.id, image: A ?? s });
    return (0, E.jsx)(To.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: x ?? o,
        pendingAvatar: p,
        pendingThemeColors: m ?? u,
        pendingAvatarDecoration: void 0 !== T ? T : r,
        pendingProfileEffect: a,
        avatarClassName: null != A || null != s || n.enabled ? void 0 : xW.WX,
        containerClassName: xW.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var xq = i(461414);
function xQ(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = ur.Ay.isPremium(t),
        l = ur.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, g.cf)([S7.A], () => {
            let e = S7.A.getPendingChanges(),
                t = S7.A.getErrors(),
                i = S7.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, g.bG)([i5.A], () => i5.A.useReducedMotion),
                [t, i] = (0, S.useState)(xV()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, S.useMemo)(() => {
                    let i = xM(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, g.bG)([xO.A], () => {
                    let e = xO.A.getProduct(l);
                    return (0, xR.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, S.useEffect)(() => {
                (0, xL.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, S.useCallback)(() => {
                let e = xV(t);
                i(e), G.default.track(U.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = S.useRef(null);
    xH(A, nw._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: T } = (0, nZ.Ay)(e2.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, xY.We)(e))
                          .then((e) => {
                              (0, Tv.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, Tv.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, Tv.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, Tv.p)({ avatar: u, themeColors: o }),
                G.default.track(U.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    S.useEffect(() => {
        i &&
            G.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sD.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.liQ.USER_SETTINGS },
                location_stack: T,
            });
    }, [T, t, i]);
    let p = (0, xj.V)()?.subscription_trial?.sku_id === sD.pe.TIER_2,
        f = (0, xy.O)(),
        N = (0, xB.U9)(f, sD.pe.TIER_2);
    return n
        ? (0, E.jsx)(nZ.f5, {
              value: h,
              children: (0, E.jsxs)(cp.A, {
                  ref: A,
                  className: xq.MT,
                  type: cp.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, E.jsx)(Ta, {
                          stickyPreview: !1,
                          layoutClassName: xq.th,
                          profilePreviewTitle: (0, E.jsxs)(E.Fragment, {
                              children: [
                                  (0, E.jsx)(o5.t, { size: "md", color: "currentColor", className: xq.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, E.jsxs)(E.Fragment, {
                              children: [(0, E.jsx)(xF, { preset: c, onShuffle: m }), (0, E.jsx)(xZ, { user: t })],
                          }),
                          children: (0, E.jsxs)("div", {
                              children: [
                                  (0, E.jsxs)("div", {
                                      children: [
                                          (0, E.jsx)(eG.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, E.jsx)(el.E, {
                                              className: xq.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, E.jsx)(T7, {
                                      className: xq.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tu.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xL.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, E.jsx)(Tw, {
                                      className: xq.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xL.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, E.jsx)(TD, {
                                          className: xq.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xL.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, E.jsx)(TG, { user: t, className: xq.fz }),
                                  !p &&
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !p &&
                          (0, E.jsx)(xC.d, {
                              onSubscribeModalClose: x,
                              className: xq.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xv.K)({ onSubscribeFinish: x });
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
                                  (0, E.jsx)("div", { className: xq.BU }),
                                  (0, E.jsx)(xz.Ay, {
                                      type: sD.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sD.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var xJ = i(814390),
    x$ = i(909536),
    x0 = i(843282),
    x1 = i(145497),
    x2 = i(685073),
    x3 = i(534400),
    x6 = i(581781),
    x4 = i(743981),
    x7 = i(51358);
let x5 = (0, sR.Ld)(),
    x8 = S.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = S.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, g.bG)([iu.default], () => (0, x2.Zo)(iu.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, E.jsx)(x6.A, {
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
                        : (0, E.jsx)(x1.j, {
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
                        : (0, E.jsx)(x3.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: x4.Sl.SIZE_16,
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
            xH(x, nw._F.GUILD_TAG),
            (0, E.jsxs)(ue.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: x5,
                ref: x,
                children: [
                    (0, E.jsx)(el.E, {
                        className: x7.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, E.jsx)(x0.Pw, {
                        className: x7.Lt,
                        optionClassName: x7.S0,
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
var x9 = i(318785),
    pe = i(556729);
let pt = (0, sR.Ld)();
function pi(e) {
    let t = (0, Sm.L)(sD.PremiumTypes.TIER_2);
    return (0, E.jsxs)(ue.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pt,
        children: [
            (0, E.jsx)("div", {
                children: (0, E.jsx)(lX.k, {
                    "aria-labelledby": pt,
                    placeholder: e.placeholder,
                    maxLength: U.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, E.jsx)(TG, { user: e.user, className: pe.F }),
        ],
    });
}
function pn(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = L.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, E.jsx)($.d, {
        label: j.intl.string(j.t["3cWDuO"]),
        description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, S6._e)() : (0, Tv.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function ps(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, Tq.r)(ea.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TQ.rh)(l, r, !1),
        o = (0, T0.LX)(a[0]);
    return (0, E.jsx)(ue.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, E.jsx)(T6, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pl = i(518477);
let pr = () => {
    let e = (0, g.bG)([cO.default], () => cO.default.getId());
    return (0, E.jsx)(ue.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, E.jsx)(eM.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, S9.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [e2.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pl.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pa = i(594453);
function po() {
    let e = (0, g.bG)([iu.default], () => {
            let e = iu.default.getCurrentUser();
            return tY()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([Td.A], () => Td.A.getUserProfile(e.id)),
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
        } = (0, g.cf)([S7.A], () => {
            let e = S7.A.getPendingChanges(),
                t = S7.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Tu.V7)({ userId: e.id, image: i }),
        A = (0, TA.EC)(),
        h = ur.Ay.canUsePremiumProfileCustomization(e),
        S = (0, Ts.z5)(i, e.avatar),
        T = (0, Ts.Ac)(s, t?.banner),
        x = (0, TJ.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, x9.b)();
    return (0, E.jsxs)("div", {
        className: pa.Q,
        children: [
            (0, E.jsx)(pi, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, Tv.p)({ globalName: e }),
                user: e,
            }),
            (0, E.jsx)(
                T5,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, Tv.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, E.jsx)(pr, {}),
            (0, E.jsx)(
                TD,
                {
                    onAvatarChange: (e) => {
                        (0, Tv.p)({ avatar: e }), (0, Ts.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: c.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, E.jsx)(Tj, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, E.jsx)(TV, { user: e }),
            (0, E.jsx)(Tz, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, E.jsx)(TK, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)(
                              Tw,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, Tv.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, E.jsx)(T7, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tv.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, E.jsx)(
                      ps,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tv.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, E.jsx)(
                T_,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, Tv.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, E.jsx)(x8, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tv.p)({ primaryGuildId: e }),
                }),
            null != p && (0, E.jsx)(pn, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function pu() {
    (0, W.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("51762"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
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
var pd = i(743539);
function pc() {
    let e = (0, g.bG)([iu.default], () => {
            let e = iu.default.getCurrentUser();
            return tY()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, g.bG)([eB.A], () => eB.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, g.cf)([S7.A], () => ({ ...S7.A.getPendingChanges(), showNotice: S7.A.showNotice() })),
        a = (0, Tu.V7)({ userId: e.id, image: n }),
        o = (0, Ts.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, xJ.A)() && null != i ? xI.Ay.parse(void 0, i).content : i,
        d = ur.Ay.canUsePremiumProfileCustomization(e),
        c = (0, x$.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nZ.Ay)(e2.A.USER_SETTINGS_USER_PROFILE);
    S.useEffect(() => () => sa.h.wait(S6.IM), []);
    let [A, h] = S.useState(!1),
        T = !d,
        x = S.useRef(null);
    return t
        ? (0, E.jsx)(dl.A, {})
        : (0, E.jsxs)(nZ.f5, {
              value: m,
              children: [
                  (0, E.jsx)(x_, {}),
                  (0, E.jsx)(Ta, {
                      profilePreview: (0, E.jsx)(To.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pu,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pd.ti,
                      }),
                      nameplatePreview: (0, E.jsx)(Tn.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pd.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, E.jsx)(po, {}),
                  }),
                  (0, E.jsx)(xA.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, E.jsx)("div", {
                          ref: x,
                          children: (0, E.jsx)(xQ, { user: e, shouldShow: T, isVisible: A }),
                      }),
                  }),
                  T &&
                      !l &&
                      (0, E.jsx)(xC.d, {
                          className: pd.EL,
                          showUpsell: !A,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xv.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, E.jsx)(xb.l, { size: "md", location: e2.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, E.jsx)("div", {
                              className: pd.Xl,
                              children: (0, E.jsx)(eM.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      G.default.track(U.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: o5.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pg = i(625494),
    pm = i(454078);
let pA = { [nw.Eq.USER_PROFILE]: "main_profile_tab", [nw.Eq.GUILD]: "guild_profile_tab" },
    ph = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, g.bG)([l$.A, em.Ay, S7.A], () => {
                    let e = S7.A.selectedGuildId ?? l$.A.getGuildId();
                    return null == e || S7._.has(e) ? em.Ay.getFlattenedGuildIds().find((e) => !S7._.has(e)) : e;
                }),
                t = (0, g.bG)([eg.A], () => eg.A.getGuild(e)),
                i = (0, g.bG)([S7.A], () => S7.A.showNotice()),
                n = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
                s = xX.A.useField("subsection");
            return (
                S.useEffect(() => {
                    (0, rD._)(pA[s]);
                }, [s]),
                S.useEffect(() => {
                    null != n && t?.id != null && (0, xc.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, E.jsx)(xm, {
                    children: (0, E.jsxs)(cd.F, {
                        component: (0, E.jsx)(eu.A, {
                            children: (0, E.jsx)(eG.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, E.jsxs)(Te.V, {
                                className: pm.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rP.fO)({ duration: 300, intensity: Tt.n3 }),
                                                pg._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nw.Eq.GUILD && null != t && (0, Ti.V2)(t.id),
                                            xX.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, E.jsx)(
                                        Te.V.Item,
                                        {
                                            className: pm.YU,
                                            id: nw.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        nw.Eq.USER_PROFILE,
                                    ),
                                    (0, E.jsx)(
                                        Te.V.Item,
                                        {
                                            className: e4()(pm.YU, pm.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: nw.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        nw.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nw.Eq.GUILD
                                ? (0, E.jsx)(xd, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rP.fO)({ duration: 300, intensity: Tt.n3 }),
                                                  pg._.dispatch(U.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, Ti.JJ)(e.id);
                                      },
                                  })
                                : (0, E.jsx)(pc, {}),
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
    pE = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [ph] });
var pS = i(294666);
let pT = () => {
        let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, S8.A)({ userId: e?.id, size: i7._3.SIZE_48 });
        return null == e
            ? null
            : (0, E.jsxs)("div", {
                  className: pS.a5,
                  children: [
                      (0, E.jsx)(i4.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: i7._3.SIZE_48,
                          "aria-label": j.intl.string(j.t.lqaIxI),
                      }),
                      (0, E.jsxs)("div", {
                          className: pS.FS,
                          children: [
                              (0, E.jsx)(el.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, E.jsxs)("div", {
                                  className: pS.Fk,
                                  children: [
                                      (0, E.jsx)(el.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: j.intl.string(j.t.Ip9nBS),
                                      }),
                                      (0, E.jsx)(ul.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    px = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [S7.A], element: S4.A },
        initialize: () => () =>
            sa.h.wait(() => {
                (0, S6.F7)();
            }),
        buildLayout: () => [pE],
    }),
    pp = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pN,
        StronglyDiscouragedCustomComponent: pT,
        usePredicate: () => !(0, S5.X)("user_settings_sidebar"),
        buildLayout: () => [px],
    }),
    pf = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pN,
        StronglyDiscouragedCustomComponent: pT,
        usePredicate: () => (0, S5.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cO.default.getId();
            (0, S9.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pN() {
    let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, S8.A)({ userId: e?.id, size: i7._3.SIZE_48 });
    return (0, E.jsx)(i4.eu, { src: t, avatarDecoration: i, size: i7._3.SIZE_20, "aria-hidden": !0 });
}
let p_ = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pp, pf] });
var pI = i(98207),
    pC = (i(204925), i(818348));
let pb = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, W.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, E.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pC.tE : null, onCloseCallback: t },
    );
};
var pv = i(940856),
    py = i(36149),
    pj = i(207560);
function pO(e) {
    let t = (0, pj.fk)(),
        i = (0, py.b8)(),
        n = (0, py.yM)(),
        s = (0, py.Y2)();
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
var pR = i(516761);
function pL() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, E.jsxs)(el.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pR.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(t_.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let pD = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pO("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pL }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, W.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pP = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pO("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, E.jsxs)(J.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, E.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, E.jsx)(eM.$, {
                                onClick: pC.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pG = i(139716),
    pM = i(847599);
function pU() {
    return (0, py.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA);
}
let pV = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pO("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: pU }),
        useLabel: function () {
            return (0, py.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.ACCOUNT_AGE_GROUP }),
    }),
    pk = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: h._1.TEXT, useText: () => j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pb(),
    });
function pw(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pF(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function pB(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = S.useState(!1),
        o = r ? t : i(t);
    return (0, E.jsxs)(J.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: o }) : o,
            (0, E.jsx)(eo.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function pz() {
    let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.email);
    return null == e
        ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, E.jsx)(pB, {
              text: e,
              censor: pF,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
              redesign: !0,
          });
}
let pY = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pz }),
    useLabel: function () {
        return null == (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, W.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, E.jsx)(e, { ...t });
        });
    },
});
var pX = i(557722),
    pH = i(53516);
function pK() {
    let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, E.jsx)(el.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, E.jsx)(J.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, E.jsx)(pB, {
                  text: t,
                  censor: pw,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pW = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pK }),
    useLabel: function () {
        return null == (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == iu.default.getCurrentUser()?.phone
            ? (0, W.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("81927"),
                          i.e("4782"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, E.jsx)(e, { reason: pX.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pH.V },
              )
            : (0, W.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, E.jsx)(e, { ...t });
              });
    },
});
function pZ() {
    let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function pq() {
    let e = (0, TA.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, E.jsxs)(E.Fragment, {
        children: [
            (0, E.jsx)(el.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, E.jsx)(ta.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, E.jsx)(lV.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: ea.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pQ = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingContent: () => ({ type: h._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pq }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (pZ() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pZ,
        onClick: function () {
            (0, W.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, E.jsx)(e, { ...t });
            });
        },
    }),
    pJ = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, g.bG)([iu.default], () => null != iu.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
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
                            button: { useText: () => j.intl.string(j.t.lm1UKt), onClick: () => (0, pv.S)(e) },
                        }
                  : {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => j.intl.string(j.t["/3qnL/"]),
                        useText: () => j.intl.string(j.t.qKs3vg),
                        button: { useText: () => j.intl.string(j.t["7psymi"]), onClick: () => pb() },
                    };
        },
        buildLayout: () => [pQ, pk, pY, pW, pV, pD, pP],
    });
var p$ = i(398177);
let p0 = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, W.openModal)((e) => (0, E.jsx)(p$.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var p1 = i(200921);
let p2 = [];
function p3() {
    p2 = [];
}
class p6 extends g.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return p2;
    }
}
let p4 = new p6(sa.h, {
    LOGOUT: p3,
    LOGIN_SUCCESS: p3,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        p2 = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...p2],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        p2 = i;
    },
});
function p7() {
    let e = (0, g.cf)([p4], () => p4.getSessions());
    return S.useMemo(() => {
        let t = [...e],
            i = null,
            n = cO.default.getAuthSessionIdHash();
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
function p5(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : rF()(e).fromNow();
}
var p8 = i(176524),
    p9 = i(646270),
    fe = i(738678),
    ft = i(490173);
function fi(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, E.jsxs)(J.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, E.jsx)(p8.A, { Icon: t, color: r ? ea.A.colors.ICON_MUTED : "currentColor" }),
            (0, E.jsxs)(J.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, E.jsxs)(J.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, E.jsx)(el.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, E.jsx)(el.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, E.jsx)(el.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, E.jsx)(el.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function fn(e) {
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
                            return { text: j.intl.string(j.t.cDHCNY), icon: tu.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: p9.u };
                        case "horizon os":
                            return { text: e, icon: fe.G };
                        default:
                            return { text: e, icon: tu.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : p5(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(N.Vq);
    return (0, E.jsx)(fi, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, E.jsx)(es.D, {
                className: ft.X,
                onClick: () => (0, p1.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, E.jsx)(gC.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fs(e) {
    let { title: t, children: i } = e,
        n = S.useId();
    return (0, E.jsxs)(J.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, E.jsx)(eG.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, E.jsx)(J.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fl = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = p7();
            return null == e
                ? (0, E.jsx)(du.y, {})
                : (0, E.jsx)(fs, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, E.jsx)(fn, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fr = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = p7();
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, E.jsx)(eM.$, {
                    onClick: () => (0, p1.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = p7();
            return e.length > 0;
        },
    });
var fa = i(766928);
function fo() {
    return (0, E.jsx)(fi, {
        icon: fa.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, eK.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [e2.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fu = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = p7(),
                t = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
            return (0, E.jsxs)(fs, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, E.jsx)(fn, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, E.jsx)(fo, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = p7(),
                t = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fd = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, p1.GY)();
        },
        buildLayout: () => [fl, fu, fr],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fc = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: dl.L,
        buildLayout: () => [fd],
    }),
    fg = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fc],
        initialize: () => {
            (0, p1.GY)();
        },
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = p7(),
                    i = t.length + +(null != e);
                return i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL);
            },
        }),
    });
var fm = i(464477);
function fA(e) {
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
function fh() {
    return (0, u$.bG)([iu.default], () => {
        let e = iu.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fE =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fS() {
    let e = (0, u$.bG)([iu.default], () => iu.default.getCurrentUser()?.verified);
    return fm.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, u$.bG)([eg.A, xe.A, iu.default], () =>
        iu.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : eg.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(U.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xe.A.can(U.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fx = i(466034);
let fp = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fT(!0),
        useDisabled: () => null !== fT(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, g.bG)([cO.default], () => cO.default.hasTOTPEnabled()),
                t = fS() === fE.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, sg.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => pI.A.disable(),
            }),
    }),
    ff = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, g.bG)([cO.default], () => cO.default.hasTOTPEnabled()),
                t = fS() === fE.AVAILABLE;
            if (!e && t)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fx.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fS()) {
                case fE.UNAVAILABLE_NO_CRYPTO:
                    return { type: h.lT.INLINE_NOTICE, noticeType: "info", useText: () => j.intl.string(j.t.PhHhsj) };
                case fE.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: h.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => j.intl.string(j.t.uggF7o),
                    };
                case fE.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fp],
    });
var fN = i(670492),
    f_ = i(32880),
    fI = i(663417),
    fC = i(658675),
    fb = i(900686);
function fv() {
    (0, W.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, E.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pI.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, W.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("30464"), i.e("96179")]).then(
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
var fy = i(203082);
function fj(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fO() {
    let e = fN.A.getVerificationKey();
    try {
        await pI.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Ez.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: EX.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fR(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fj(t),
        s = S.useRef(null),
        l = (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(fC.P, { checked: i }), (0, E.jsx)(el.E, { variant: "text-md/normal", children: n })],
        });
    return cG.p5
        ? (0, E.jsx)(es.D, {
              tag: "li",
              className: e4()(fy.aY, fy.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cG.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cG.C)(n),
                      (0, Ez.P0)({ message: j.intl.string(j.t.mGZ66D), type: EX.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, E.jsx)("li", { className: fy.aY, children: l });
}
let fL = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, g.bG)([fN.A], () => fN.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fh,
        buildLayout: () => [fD],
    }),
    fD = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, g.bG)([fN.A], () => fN.A.getBackupCodes()),
                t = S.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fj(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, E.jsx)(eM.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fv })
                : (0, E.jsxs)(E.Fragment, {
                      children: [
                          (0, E.jsx)("ul", {
                              className: fy.E5,
                              children: e.map((e) => (0, E.jsx)(fR, { code: e }, e.code)),
                          }),
                          (0, E.jsxs)(a0.e, {
                              size: "sm",
                              children: [
                                  (0, E.jsx)(fb.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, E.jsx)(eM.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: f_.s,
                                      }),
                                  }),
                                  (0, E.jsx)(eM.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fI.f,
                                      onClick: fO,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fP = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = S.useState(!1),
                i = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, E.jsx)(eo.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, W.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        handleSubmit: pI.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fG = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, g.bG)([iu.default], () => fA(iu.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()?.hasFlag(U.nhx.MFA_SMS) ?? !1),
                t = (0, g.bG)([iu.default], () => null != fA(iu.default.getCurrentUser()));
            if (!e)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fM,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fS(),
                t = fh(),
                i = (0, g.bG)([cO.default], () => cO.default.hasTOTPEnabled());
            return e === fE.AVAILABLE && t && i;
        },
        buildLayout: () => [fP],
    });
function fM() {
    let e = iu.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pX.d.USER_SETTINGS_UPDATE, onAddedPhone: pI.A.enableSMS }),
                (0, W.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("81927"),
                            i.e("4782"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, E.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: pH.V },
                );
        } else pI.A.enableSMS();
}
var fU = i(665671),
    fV = i(442433),
    fk = i(917136),
    fw = i(976910),
    fF = i(108666);
function fB(e) {
    let { credential: t } = e;
    return (0, E.jsxs)("li", {
        className: fF.e,
        children: [
            (0, E.jsxs)("div", {
                children: [
                    (0, E.jsx)(el.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, E.jsx)(el.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: p5(t.last_used) }),
                        }),
                ],
            }),
            (0, E.jsx)(lL.K, {
                icon: mC.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fV.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, E.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let fz = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fS() === fE.AVAILABLE)
                return {
                    type: h.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: h.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: au.j,
                            onClick: fU.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fS()) {
                    case fE.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => j.intl.string(j.t.bWCGI9),
                        };
                    case fE.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: h.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => j.intl.string(j.t.uggF7o),
                        };
                    case fE.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fY],
    }),
    fY = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, g.cf)([fw.A], () => ({
                hasFetchedCredentials: fw.A.hasFetchedCredentials(),
                credentials: fw.A.getCredentials(),
            }));
            return (S.useEffect(() => {
                t || fk.JQ();
            }, [t]),
            t)
                ? (0, E.jsx)(J.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, E.jsx)(fB, { credential: e }, e.id)),
                  })
                : (0, E.jsx)(du.y, {});
        },
    }),
    fX = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [fz, ff, fG, fL],
    }),
    fH = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: h.xn.TEXT,
            useText: () => (fh() ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt)),
        }),
        buildLayout: () => [fX],
    }),
    fK = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [p0, fH, fg],
    });
var fW = i(308645),
    fZ = i(271995),
    fq = i(855267);
let fQ = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: fq.A,
    }),
    fJ = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fQ] }),
    f$ = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fJ],
    }),
    f0 = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [f1],
    }),
    f1 = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fZ.$b,
        useSubtitle: fZ.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, fZ._k)();
            return { type: h.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            fW.Yn();
        },
        buildLayout: () => [f$],
    });
var f2 = i(834981),
    f3 = i(840387),
    f6 = i(286668),
    f4 = i(602339);
let f7 = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: f6.p,
        useSearchTerms: () => [
            j.intl.string(f4.default.RZqaJn),
            j.intl.string(f4.default.bdBmqy),
            j.intl.string(f4.default["gVWG+6"]),
            j.intl.string(f4.default.ahKIJO),
            j.intl.string(f4.default["8SLtqb"]),
        ],
    }),
    f5 = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [f7] }),
    f8 = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(f4.default.RZqaJn),
        buildLayout: () => [f5],
    }),
    f9 = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(f4.default.RZqaJn),
        usePersistentBadge: function () {
            return S.useMemo(() => ({ badgeType: h.Xi.COUNT, useCount: f2.VT }), []);
        },
        buildLayout: () => [Ne],
    }),
    Ne = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, f2.Li)() ? j.intl.string(f4.default.IcMQUP) : j.intl.string(f4.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, f3.Z)(),
                t = (0, f2.Li)();
            return e
                ? t
                    ? j.intl.string(f4.default.G8lHFU)
                    : j.intl.string(f4.default.uOLNEZ)
                : j.intl.string(f4.default.Z53oSM);
        },
        buildLayout: () => [f8],
    });
var Nt = i(425587),
    Ni = i(662758);
function Nn(e) {
    if (e.body.code === U.t02.INVALID_PASSWORD) throw e;
    (0, aQ.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = iu.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Nt.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aQ.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : eg.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aQ.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, W.openModal)((t) =>
                  (0, E.jsx)(Ni.default, {
                      ...t,
                      handleSubmit: (t) => (0, S6.U_)(t, e).then(U.tEg, Nn),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, sg.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, S6.U_)("", !0),
              });
}
let Nl = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Ns(!0),
    }),
    Nr = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Ns(!1),
        usePredicate: () => {
            let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Na = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nr, Nl] }),
    No = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pI.A.clearBackupCodes(), (0, S6.Uo)();
            };
        },
        useObscuredNotice: dl.L,
        buildLayout: () => [pJ, fK, f0, f9, Na],
    }),
    Nu = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: AH.n,
        buildLayout: () => [No],
    });
var Nd = i(323384);
let Nc = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [St],
        initialize: () => (
            E9.A.fetch(),
            () => {
                Se.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Ng = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useObscuredNotice: dl.L,
        buildLayout: () => [Nc],
    }),
    Nm = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        icon: Nd.k,
        buildLayout: () => [Ng],
    });
var NA = i(176781),
    Nh = i(611371);
let NE = () =>
    (0, E.jsx)(ta.m, { asContainer: !0, text: j.intl.string(j.t["/fgfWh"]), children: (0, E.jsx)(Nh.A, {}) });
var NS = i(974293),
    NT = i(458977),
    Nx = i(274372),
    Np = i(877575),
    Nf = i(696016);
let NN = (() => {
        let e = [Nf.wN];
        for (let t = 10; t <= Nf.qh; t += 10) e.push(t);
        return e[e.length - 1] !== Nf.qh && e.push(Nf.qh), e;
    })(),
    N_ = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => j.intl.string(j.t.yfsrDI),
        useSubtitle: () => j.intl.string(j.t.vlDHdC),
        minValue: Nf.wN,
        maxValue: Nf.qh,
        getInitialValue: () => Nx.Ay.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => Np.e6(Math.floor(e)),
        markers: NN,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    NI = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => j.intl.string(j.t.iV6KcI),
        useSubtitle: () => j.intl.string(j.t["dJ2tX+"]),
        useValue: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().clipSignals.enableGameSignals),
        usePredicate: () => !1,
        setValue: (e) => {
            let t = Nx.Ay.getSettings().clipSignals;
            Np.PW({ ...t, enableGameSignals: e });
        },
    }),
    NC = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.sA0WKL),
        usePredicate: () => {
            let e = (0, NS.aJ)(),
                t = NT.A.useConfig({ location: "ClipsAutomaticClippingCategory" }).enableDistributedClips;
            return e || t;
        },
        buildLayout: () => [N_, NI],
    }),
    Nb = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Np.YP(e),
    }),
    Nv = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, g.bG)([iu.default], () => {
                let e = iu.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [Nb],
    });
var Ny = i(753070);
let Nj = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => j.intl.string(j.t["2wScL1"]),
    useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
    useValue: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = Nx.Ay.getSettings();
        Np.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: Ny.kn.FPS_15, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: Ny.kn.FPS_15 }) },
        { id: "30", value: Ny.kn.FPS_30, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: Ny.kn.FPS_30 }) },
        { id: "60", value: Ny.kn.FPS_60, label: j.intl.formatToPlainString(j.t.Qb44XH, { fps: Ny.kn.FPS_60 }) },
    ],
});
var NO = i(372684);
let NR = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
    usePredicate: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getHardwareClassification()) === NO.k9.BELOW_MINIMUM,
    Component: () => (0, E.jsx)(sA.A, { look: sA.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
});
var NL = i(158278);
let ND = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, g.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0));
            tY()(null != e, "Save clip keybind unset");
            let t = S.useCallback(
                (t) => {
                    tX.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: NL.g,
                    children: (0, E.jsx)(tH.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    NP = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().clipsLength),
        setValue: (e) => Np.h$(e),
        useOptions: () => [
            { id: "30s", value: Nf.LX.SECONDS_30, label: j.intl.formatToPlainString(j.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: Nf.LX.MINUTES_1, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: Nf.LX.MINUTES_2, label: j.intl.formatToPlainString(j.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    NG = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, E.jsx)(sA.A, { look: sA.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    NM = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nx.Ay.getSettings();
            Np.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: Ny.on.RESOLUTION_480,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Ny.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: Ny.on.RESOLUTION_720,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Ny.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: Ny.on.RESOLUTION_1080,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Ny.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: Ny.on.RESOLUTION_1440,
                label: j.intl.formatToPlainString(j.t.TEOC0I, { resolution: Ny.on.RESOLUTION_1440 }),
            },
            { id: "source", value: Ny.on.RESOLUTION_SOURCE, label: j.intl.string(j.t.XjXqzh) },
        ],
    }),
    NU = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: re.BW,
        Component: () => {
            let e = (0, g.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(U.hCu.SAVE_CLIP, !0)),
                t = (0, g.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(U.hCu.SAVE_SCREENSHOT, !0));
            tY()(null != e, "Save clip keybind unset"), tY()(null != t, "Save screenshot keybind unset");
            let i = S.useCallback(
                (e) => {
                    tX.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, E.jsx)("div", {
                    className: NL.g,
                    children: (0, E.jsx)(tH.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    NV = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().storageLocation),
                t = S.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await ls.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && Np.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, E.jsx)(sF.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "horizontal",
                children: (0, E.jsx)(es.D, {
                    "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, E.jsx)(lX.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var Nk = i(572164);
let Nw = (0, a.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => j.intl.string(j.t.h8rgrK),
    useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
    useValue: () => (0, Nk.Et)(),
    setValue: (e) => Np.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var NF = i(915618);
let NB = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => j.intl.string(j.t.yXvykv),
        useSubtitle: () => j.intl.string(j.t.YP3ujk),
        useValue: Nk.XT,
        setValue: (e) => Np.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, eH.isWindows)(),
                t = (0, NF.A)(lk.Ay);
            return e && t;
        },
    }),
    Nz = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, g.bG)([Nx.Ay], () => Nx.Ay.getSettings().remindersEnabled),
        setValue: (e) => Np.Mt(e),
    }),
    NY = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.iIwmV5),
        buildLayout: () => [NG, NR, Nw, NB, Nz, NP, NM, Nj, ND, NU, NV],
    }),
    NX = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: h.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, E.jsx)(NE, {}),
        }),
        usePredicate: re.sw,
        buildLayout: () => [NY, NC, Nv],
    }),
    NH = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NA.x,
        buildLayout: () => [NX],
    }),
    NK = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [SW], useInlineNotice: SJ }),
    NW = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [SZ] }),
    NZ = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useObscuredNotice: dl.L,
        buildLayout: () => [NK, NW],
    }),
    Nq = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        icon: h5.q,
        buildLayout: () => [NZ],
    });
var NQ = i(875444);
function NJ(e, t) {
    let i = (0, g.bG)([Sy.default], () => Sy.default.getFetchState()),
        n = (0, g.bG)([Sy.default], () =>
            e ? Sy.default.getNewestTokensForNonChildrenApplications() : Sy.default.getNewestTokens(),
        ),
        s = S.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, NQ.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        S.useEffect(() => {
            t || E9.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== Sy.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var N$ = i(998382);
function N0(e) {
    let { applications: t } = e,
        i = S.useMemo(() => t.sort((e, t) => df.default.compare(t.id, e.id)), [t]),
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
                              el.E,
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
                    a = ni.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, E.jsx)(
                        ta.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, E.jsx)("img", { src: a, "aria-label": l, className: N$.Kk }),
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
                                className: N$.lK,
                                children: (0, E.jsx)(el.E, {
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
        className: N$.wx,
        children: [
            (0, E.jsxs)("div", {
                className: N$.kX,
                children: [
                    (0, E.jsx)(el.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, E.jsxs)(es.D, {
                        onClick: () => {
                            (0, eK.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: N$.bJ,
                        children: [
                            (0, E.jsx)(el.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, E.jsx)(tR._, {
                                size: "xxs",
                                color: ea.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: N$.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, E.jsx)("div", { className: N$.yF }),
            (0, E.jsx)("div", { className: N$.lJ, children: s }),
        ],
    });
}
function N1() {
    return (0, E.jsxs)("div", {
        className: N$.do,
        children: [
            (0, E.jsx)(el.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: N$.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, E.jsx)(el.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: t_.A.getArticleURL(U.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function N2(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, E.jsx)(N0, { applications: t }) : (0, E.jsx)(N1, {});
}
let N3 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = NJ(!0);
        return e ? (0, E.jsx)(du.y, {}) : (0, E.jsx)(N2, { applications: t });
    },
});
function N6() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = NJ(!0, !0);
    return !e && t.length > 0;
}
let N4 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, o.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, o.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: t_.A.getArticleURL(U.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: N6,
    }),
    N7 = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: () => [
            { name: j.intl.string(j.t.JIFnN9), value: K.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: j.intl.string(j.t.rRdsk1), value: K.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            {
                name: (0, o.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                value: K.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ],
        useValue: () => {
            let e = L.TA.useSetting();
            return e === K.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? K.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: N6,
    }),
    N5 = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [N3, N4, N7],
    });
var N8 = i(687123),
    N9 = i(444802),
    _e = i(558001);
i(866945);
var _t = i(835002);
function _i() {
    let e = (0, N9.WX)();
    S.useEffect(() => {
        (0, _e.N)(_t.YA.AGE_CONFIRMATION_NOTICE, _t.YX.VIEWED);
    }, []);
    let t = S.useCallback(() => {
            window.open(t_.A.getArticleURL(e), "_blank"), (0, _e.N)(_t.YA.AGE_CONFIRMATION_NOTICE, _t.YX.LEARN_MORE);
        }, [e]),
        i = S.useCallback(() => {
            pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _e.N)(_t.YA.AGE_CONFIRMATION_NOTICE, _t.YX.CONFIRM_AGE);
        }, []);
    return (0, E.jsx)(tN.p, {
        messageType: tN.Y.INFO,
        action: (0, E.jsx)(eo.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, E.jsx)(u0.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _n() {
    let e = (0, pj.aX)(N8.t.REACTIVE_CHECK),
        t = (0, py.b8)();
    return S.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _i };
    }, [e, t]);
}
var _s = i(308528),
    _l = i(171316);
function _r() {
    let e = (0, _l.uM)(),
        t = (0, f2.vx)(),
        i = S.useCallback(() => {
            (0, sy.default)(),
                _s.A.openPrivateChannel({ recipientIds: t }),
                (0, _e.N)(_t.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _t.YX.LEARN_MORE);
        }, [t]),
        n = S.useCallback(() => {
            (0, _e.N)(_t.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _t.YX.VIEWED);
        }, []);
    return S.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    j.intl.format(f4.default.i284fU, {
                        hook: (e, t) => (0, E.jsx)(u0.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _a = i(323073),
    _o = i(386171),
    _u = i(96607);
let _d = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _o.hT,
        useDisabled: () => {
            let e = (0, _u.A)() ?? !0,
                t = (0, _a.sP)(),
                i = (0, py.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _a.p5)() && e
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    _c = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, o.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _o.tI,
        useDisabled: () => {
            let e = (0, _u.A)() ?? !0,
                t = (0, _a.sP)(),
                i = (0, py.yM)();
            return S.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _a.p5)() && e
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    _g = (0, a.AK)(u.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: u.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _m = (0, a.gN)(u.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_g] });
i(667532);
var _A = i(390248),
    _h = i(632119),
    _E = i(945276),
    _S = i(389737),
    _T = i(566769);
function _x() {
    let e,
        t = (0, _E.A)() ?? !0,
        i = (0, _l.uM)(),
        n = (0, _l.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, u$.cf)([uh.A], () => uh.A.settings.textAndImages?.explicitContentSettings ?? (0, _h.C$)())),
        {
            explicitContentGuilds: (0, _h.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _h.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _h.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _A.hK)() && t.includes(K.TO.SHOW)
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _h.Jz)(e);
        },
        o = [
            { value: K.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: K.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: K.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: K.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_S.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, E.jsx)(_T.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_T.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_T.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _p() {
    let e,
        t = (0, _E.A)() ?? !0,
        i = (0, _l.uM)(),
        n = (0, _l.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, u$.cf)([uh.A], () => uh.A.settings.textAndImages?.goreContentSettings ?? (0, N9.T4)())),
        {
            goreContentGuilds: (0, N9.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, N9.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, N9.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _A.hK)() && t.includes(K.TO.SHOW)
                ? pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, N9.qY)(e);
        },
        o = [
            { value: K.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: K.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: K.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: K.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0 };
    return (0, E.jsxs)(_S.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, E.jsx)(_T.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_T.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, E.jsx)(_T.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(f4.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _f = i(464946),
    _N = i(875162),
    __ = i(334859);
let _I = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, N9.WX)(),
            t = S.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _x,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _p,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, E.jsxs)(_f.h, {
            children: [
                (0, E.jsx)(_f._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: t_.A.getArticleURL(e) }),
                }),
                (0, E.jsx)(_N.A, { tabs: t, orientation: "vertical", tabsClassName: __.v }),
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
var _C = i(639555),
    _b = i(617641),
    _v = i(546140),
    _y = i(406935),
    _j = i(594061);
let _O = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: t_.A.getArticleURL(U.MVz.SAFETY_ALERTS) }),
    useValue: _v.L,
    setValue: (e) =>
        _j.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _y._t.create({ value: e });
            },
            _j.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _b.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _C.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _E.A)() ?? !0;
        return e && !i && !t;
    },
});
var _R = i(809505),
    _L = i(923457),
    _D = i(750714);
let _P = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, o.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, o.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: t_.A.getArticleURL(U.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = L.he.useSetting(),
                t = L.cj.useSetting(),
                i = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
                n = (0, pj.yv)(_L.p.SPAM_FILTERS);
            return e !== K.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? K.he.FRIENDS_AND_NON_FRIENDS
                  : (_D.xY.get(t) ?? K.he.NON_FRIENDS);
        },
        setValue: (e) => L.he.updateSetting(e),
        useOptions: function () {
            let e = (0, o.SV)("DMSpamSetting");
            return S.useMemo(
                () =>
                    e
                        ? [
                              { name: j.intl.string(j.t["+w5yKk"]), value: K.he.FRIENDS_AND_NON_FRIENDS },
                              { name: j.intl.string(j.t.yAPg6r), value: K.he.NON_FRIENDS },
                              { name: j.intl.string(j.t.FEXKsv), value: K.he.DISABLED },
                          ]
                        : (0, _R.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    _G = (0, a.zZ)(u.X.CONTENT_CATEGORY, {
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
                u = _r(),
                d =
                    ((e = (0, f3.Z)()),
                    (t = (0, N9.WX)()),
                    (i = S.useCallback(() => {
                        window.open(t_.A.getArticleURL(t), "_blank"),
                            (0, _e.N)(_t.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _t.YX.LEARN_MORE);
                    }, [t])),
                    (n = S.useCallback(() => {
                        (0, _e.N)(_t.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _t.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (e)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    j.intl.format(j.t.EUo0yj, {
                                        hook: (e, t) => (0, E.jsx)(u0.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, pj.SJ)()),
                    (l = (0, py.b8)()),
                    (r = s && !l),
                    (a = S.useCallback(() => {
                        pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _e.N)(_t.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _t.YX.LEARN_MORE);
                    }, [])),
                    (o = S.useCallback(() => {
                        (0, _e.N)(_t.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _t.YX.VIEWED);
                    }, [])),
                    S.useMemo(() => {
                        if (r)
                            return {
                                type: h.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    j.intl.format(j.t.OX4ybh, {
                                        hook: (e, t) => (0, E.jsx)(u0.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = _n();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => ((0, o.Bv)("ContentCategory") ? [_I, _O, _d, _c, _m] : [_I, _P, _O, _d, _c]),
    });
var _M = i(189883);
let _U = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: () => {
        let e = L.FA.useSetting();
        return S.useMemo(() => (0, rP.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        L.FA.updateSetting(e ? U.yKI : U.yKI & ~U.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _l.uM)(),
});
var _V = i(665260);
let _k = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: () => {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rP.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? _V.UI(t, U.dzt.MUTUAL_FRIENDS) : _V.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _l.uM)(),
    }),
    _w = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, o.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: () => {
            let e = L.FA.useSetting(),
                t = S.useMemo(() => (0, rP.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? _V.UI(t, U.dzt.MUTUAL_GUILDS) : _V.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _l.uM)(),
    }),
    _F = (0, a.FW)(u.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [_U, _k, _w],
    }),
    _B = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !L.Zd.useSetting(),
        setValue: (e) => {
            L.Zd.updateSetting(!e);
        },
        usePredicate: () => _M.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: h.Xi.BETA }),
    }),
    _z = () => {
        let { enabled: e } = _M.A.useConfig({ location: "Friend Request Setting" });
        return e ? j.intl.string(j.t.QVbF3l) : void 0;
    },
    _Y = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: _z,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _r,
        buildLayout: () => [_F, _B],
    }),
    _X = (0, a.zZ)(u.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: _z,
        useInlineNotice: _r,
        buildLayout: () => [_U, _k, _w, _B],
    });
var _H = i(994500),
    _K = i(428678),
    _W = i(717398),
    _Z = i(730134),
    _q = i(753686);
function _Q(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, E.jsxs)("div", {
        className: _q.wx,
        children: [
            (0, E.jsx)("div", { className: _q.zc, children: n ? (0, E.jsx)(_K.K, {}) : (0, E.jsx)(ij.G, {}) }),
            (0, E.jsxs)("div", {
                className: _q.Qq,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, E.jsx)(el.E, {
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
function _J(e) {
    let { userId: t, last: i } = e,
        n = (0, g.bG)([_H.A], () => _H.A.isBlocked(t)),
        s = (0, g.bG)([iu.default], () => iu.default.getUser(t)),
        [l, r] = S.useState(!1),
        a = S.useCallback(() => {
            r(!0),
                n
                    ? _W.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _W.A.unignoreUser(t, e2.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, E.jsxs)("div", {
              className: e4()(_q.nM, { [_q.fW]: i }),
              children: [
                  (0, E.jsxs)("div", {
                      className: _q.eF,
                      children: [
                          (0, E.jsx)(_Z.A, { user: s, size: i7._3.SIZE_40 }),
                          (0, E.jsxs)("div", {
                              className: _q.Qq,
                              children: [
                                  (0, E.jsx)(el.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, E.jsx)(el.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, E.jsx)(eM.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function _$(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = S.useState(5);
    return (0, E.jsx)(_f.h, {
        children: (0, E.jsxs)("div", {
            className: _q.Nr,
            children: [
                (0, E.jsx)(_Q, { listType: i, numberOfUsers: t.length }),
                (0, E.jsx)("div", {
                    className: _q.jS,
                    children: t.slice(0, n).map((e, i) => (0, E.jsx)(_J, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, E.jsx)("div", {
                          className: _q.vM,
                          children: (0, E.jsx)(es.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: _q.Qf,
                              children: (0, E.jsx)(el.E, {
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
let _0 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, g.bG)([_H.A], () => _H.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([_H.A], () => _H.A.getBlockedIDs());
            return (0, E.jsx)(_$, { userIds: e, listType: "blocked" });
        },
    }),
    _1 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, g.bG)([_H.A], () => _H.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, g.yK)([_H.A], () => _H.A.getIgnoredIDs());
            return (0, E.jsx)(_$, { userIds: e, listType: "ignored" });
        },
    }),
    _2 = (0, a.zZ)(u.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, o.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: t_.A.getArticleURL(U.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [_0, _1],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, g.cf)([_H.A], () => ({
                hasBlockedUsers: _H.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _H.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var _3 = i(22385),
    _6 = i(556534),
    _4 = i(111159),
    _7 = i(152056),
    _5 = i(219714);
let _8 = { label: () => j.intl.string(j.t["32u1Dx"]), value: _3.YG };
var _9 = i(954225);
let Ie = () => (0, _6.Tx)() !== _3.YG;
function It() {
    return j.intl.string(j.t["T+nevN"]);
}
let Ii = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: It,
        useSubtitle: () =>
            j.intl.format(j.t.jXKQCu, { helpdeskArticle: t_.A.getArticleURL(U.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, _6.Tx)();
            return !L.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = _3.xk.getState().selectedGuildId,
                i = (0, rP.CN)();
            e ? i.delete(t) : i.add(t),
                L.pE.updateSetting([...i]),
                G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _9.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: Ie,
    }),
    In = () => (0, _6.Tx)() !== _3.YG;
function Is() {
    return j.intl.string(D.default.WhdCGP);
}
let Il = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: Is,
    useSubtitle: () => j.intl.string(D.default.UQ9RHJ),
    useValue: () => {
        let e = (0, _6.Tx)();
        return !L.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = _3.xk.getState().selectedGuildId,
            i = (0, rP.Kk)();
        e ? i.delete(t) : i.add(t),
            L.JG.updateSetting([...i]),
            G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: _9.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: In,
});
var Ir = i(307863),
    Ia = i(428031),
    Io = i(972737);
let Iu = () => ((0, Ir.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN)),
    Id = () => {
        let e = (0, _6.Tx)(),
            t = (0, _6.q9)(),
            i = (0, Ir.e)();
        return e === _3.YG
            ? i
                ? j.intl.string(j.t.XXGmuB)
                : j.intl.string(j.t.wbYDfT)
            : t
              ? j.intl.string(j.t.V0ka0Q)
              : i
                ? j.intl.string(j.t.F9WY3f)
                : j.intl.string(j.t.G7c3Xo);
    },
    Ic = () => {
        let e = (0, _6.Tx)(),
            t = L.$s.useSetting().includes(e),
            i = (0, Ia.K)();
        return e === _3.YG ? !i : !t;
    },
    Ig = () => {
        let e = (0, _l.uM)();
        return (0, _6.Tx)() === _3.YG && e;
    },
    Im = (e, t) => {
        G.default.track(U.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    IA = (e) => {
        let t = _3.xk.getState().selectedGuildId;
        if (t === _3.YG) {
            var i;
            (i = !e),
                (0, Io.O)({
                    header: j.intl.string(j.t["uUr+GR"]),
                    body: j.intl.string(j.t.hjGJBp),
                    confirmText: j.intl.string(j.t.gm1Vej),
                    cancelText: j.intl.string(j.t.p89ACt),
                    confirmButtonColor: aJ.$n.Colors.BRAND,
                    onConfirm: () => {
                        L.n6.updateSetting(i), Im(i, !1);
                    },
                    onCancel: () => {
                        L.n6.updateSetting(i), L.$s.updateSetting(i ? eg.A.getGuildIds() : []), Im(i, !0);
                    },
                });
        } else {
            let i = (0, rP.Tb)();
            e ? i.delete(t) : i.add(t),
                L.$s.updateSetting(Array.from(i)),
                G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _9.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
    Ih = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Id,
        useValue: Ic,
        useDisabled: Ig,
        setValue: IA,
    }),
    IE = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Iu,
        useSubtitle: Id,
        useValue: Ic,
        useDisabled: Ig,
        setValue: IA,
    });
var IS = i(953298);
let IT = (e, t) => {
    G.default.track(U.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function Ix() {
    let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
        t = (0, _6.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let Ip = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Ix,
        useSubtitle: () => {
            let e = (0, o.SV)("PermissionsMessageRequestsSetting"),
                t = (0, _6.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: t_.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: t_.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: t_.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) });
        },
        useValue: () => {
            let e = (0, _6.Tx)(),
                t = (0, Ia.K)(),
                i = L.$s.useSetting().includes(e),
                n = L.YX.useSetting(),
                s = L.Zr.useSetting().includes(e);
            return e === _3.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, _6.Tx)(),
                t = (0, _l.uM)(),
                i = (0, Ia.K)(),
                n = L.$s.useSetting().includes(e);
            return e === _3.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = _3.xk.getState().selectedGuildId;
            if (!e && (0, IS.w)())
                return void pG.A.showAgeVerificationGetStartedModal({ entryPoint: pM.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === _3.YG) {
                var i;
                (i = !e),
                    (0, Io.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: aJ.$n.Colors.BRAND,
                        onConfirm: () => {
                            L.YX.updateSetting(i), IT(i, !1);
                        },
                        onCancel: () => {
                            L.YX.updateSetting(i), L.Zr.updateSetting(i ? eg.A.getGuildIds() : []), IT(i, !0);
                        },
                    });
            } else {
                let i = (0, rP.xo)();
                e ? i.delete(t) : i.add(t),
                    L.Zr.updateSetting(Array.from(i)),
                    G.default.track(U.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _9.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nw.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    If = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, o.SV)("GuildSelect"),
                t = [Iu(), Ix()],
                i = Is(),
                n = In();
            !e && n && t.push(i);
            let s = It(),
                l = Ie();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, _3.xk)(),
                i = (0, g.bG)([em.Ay], () => em.Ay.getFlattenedGuildIds()),
                n = (0, g.bG)([eg.A], () => eg.A.getGuilds()),
                s = i[0];
            S.useEffect(
                () =>
                    _7.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = _3.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === _3.YG && null != s
                                ? t(s)
                                : "" === e && n !== _3.YG && t(_3.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = S.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ..._8,
                        id: _8.value,
                        label: _8.label(),
                        leading: (0, E.jsx)("div", {
                            className: _5.KP,
                            children: (0, E.jsx)(_4.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: _5.cl,
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
                                leading: (0, E.jsx)(gq.Ay, {
                                    className: _5.cl,
                                    guild: i,
                                    size: gq.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, E.jsx)(iX.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    });
function IN() {
    let e = _r(),
        t = _n();
    if ((0, _6.Tx)() === _3.YG) return e ?? t;
}
let I_ = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: IN,
        buildLayout: () => [If, Ih, Ip],
    }),
    II = (0, a.zZ)(u.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: IN,
        buildLayout: () => [If, IE, Ip, Il, Ii],
    }),
    IC = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [_G, II, _X, _2],
    }),
    Ib = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            E9.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [N5],
    }),
    Iv = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [IC, Ib],
    }),
    Iy = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: gm.i,
        buildLayout: () => [Iv],
    });
var Ij = i(254138);
function IO() {
    return (
        sa.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        sr.Bo.get({ url: U.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                sa.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function IR(e) {
    return (0, S6.$I)(e).then(
        (e) => (
            null != e && null != e.body && sa.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var IL = i(157559),
    ID = i(331887);
function IP() {
    let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
        t = (0, g.bG)([ID.A], () => ID.A.harvestType),
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
function IG(e) {
    let { onConfirm: t, ...n } = e;
    (0, W.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, E.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var IM = i(160427);
let IU = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.dmBSKo)],
        Component: function () {
            let e = (0, g.bG)([iu.default], () => iu.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, g.cf)([ID.A], () => ({
                    currentHarvestType: ID.A.harvestType,
                    awaitingInitialRequest: ID.A.requestingHarvest,
                })),
                [n, s] = S.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && rF()().diff(rF()(t.created_at), "days") < U.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, E.jsxs)(_f.h, {
                children: [
                    (0, E.jsx)(_f._, {
                        header: j.intl.string(j.t.XAHCgJ),
                        description: j.intl.format(j.t.P3kNfr, {
                            helpdeskArticle: t_.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, E.jsx)(ev.Z, {
                              className: IM.N,
                              children: (0, E.jsx)(el.E, {
                                  variant: "text-md/normal",
                                  children: j.intl.format(j.t.RNDlV9, {
                                      date: rF()(t.created_at).add(U.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, E.jsx)(ev.Z, {
                                className: IM.N,
                                children: (0, E.jsx)(el.E, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.ZPQLH2),
                                }),
                            })
                          : (0, E.jsxs)(E.Fragment, {
                                children: [
                                    u
                                        ? (0, E.jsx)(ev.Z, {
                                              className: IM.N,
                                              children: (0, E.jsx)(el.E, {
                                                  variant: "text-md/normal",
                                                  children: j.intl.string(j.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, E.jsx)("div", {
                                        className: IM.x,
                                        children: (0, E.jsx)(eM.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                IG({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            IR(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? IL.A.show({
                                                                                  title: j.intl.string(j.t.i2iul5),
                                                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                                                              })
                                                                            : IL.A.show({
                                                                                  title: j.intl.string(j.t.OjbtDm),
                                                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            j.intl.string(j.t["0F5Jyt"]);
                                                                        IL.A.show({
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
    IV = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VjDjpb),
        initialize: () => {
            IO();
        },
        buildLayout: () => [IU],
    });
var Ik = i(290595),
    Iw = i(153488);
let IF = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => j.intl.string(j.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? j.intl.string(j.t.kyo3dJ) : j.intl.string(j.t["wW9/zQ"]),
        useValue: () => L.Q$.useSetting(),
        setValue: (e) => Np.eQ({ allowVoiceRecording: e }),
    }),
    IB = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = IP();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: t_.A.getArticleURL(U.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return j.intl.string(j.t.hIbRso);
            if ("not_verified" === e.reason)
                return j.intl.format(j.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, E.jsx)(
                            es.D,
                            {
                                tag: "a",
                                onClick: () => (0, eK.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = rF()(e.nextAllowed).format("MMMM Do YYYY");
                return j.intl.format(j.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            IO();
        },
        useDisabled: () => !IP().allowed,
        useLoading: () => (0, g.bG)([ID.A], () => ID.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                IG({
                    onConfirm: (i) => {
                        (t = !1),
                            IR(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? IL.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : IL.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        IL.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    Iz = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? j.intl.format(j.t.dszICC, {
                      onClickDisable: () => (0, eK.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, eK.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : j.intl.format(j.t.R5N31P, { onClick: () => (0, eK.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    IY = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return j.intl.format(e ? j.t["2SiYln"] : j.t["eQL/Mr"], {
                helpdeskArticle: t_.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, g.bG)([Iw.A], () => Iw.A.hasConsented(U.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Ik.U)([U.YAq.PERSONALIZATION], []).catch(Io.i)
                : (0, Io.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Ik.U)([], [U.YAq.PERSONALIZATION]).catch(Io.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _l.uM,
    }),
    IX = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return j.intl.format(e ? j.t["md5l4/"] : j.t["2QFDU/"], {
                helpdeskArticle: t_.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
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
                t = (0, _l.uM)();
            return e || t;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    IH = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? j.intl.string(j.t.w4fvxe)
                : j.intl.format(j.t.cf9mvV, { helpdeskArticle: t_.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !L.H1.useSetting();
        },
        setValue: function (e) {
            L.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _l.uM,
    }),
    IK = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = v(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => ({ type: h.wF.STACKED_ICONS, useIcons: y }),
        usePredicate: () => (0, g.bG)([m.Ay], () => m.Ay.getGamesSeen(!1).some((e) => !(0, A.n1)(e))) && (0, c.xl)(),
    }),
    IW = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [IK] }),
    IZ = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return j.intl.format(e ? j.t.FNqmmX : j.t["igTSG/"], {
                helpdeskArticle: t_.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, g.bG)([Iw.A], () => Iw.A.hasConsented(U.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Ik.U)([U.YAq.USAGE_STATISTICS], []).catch(Io.i)
                : (0, Io.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, Ik.U)([], [U.YAq.USAGE_STATISTICS]).catch(Io.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _l.uM,
    }),
    Iq = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? j.intl.string(j.t.QDAriI) : j.intl.string(j.t.bvw42E)),
        useInlineNotice: _r,
        initialize: () => {
            Iw.A.fetchedConsents || (0, Ik.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [Iz, IZ, IY, IH, IX, IF, IB, IW] : [IZ, IH, IX, IY, IF, Iz],
    });
function IQ() {
    let e = L.JG.useSetting();
    return (0, g.yK)([em.Ay, eg.A], () => {
        let t = new Set(e);
        return em.Ay.getFlattenedGuildIds().filter((e) => null != eg.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let IJ = {
        type: h.wF.STACKED_ICONS,
        useIcons: function () {
            let e = IQ(),
                t = (0, g.yK)(
                    [eg.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => eg.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, E.jsx)(ec.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE },
                        backIcon: { icon: (0, E.jsx)(ec.$, { guild: t[1], size: f.CD }), shape: f.e0.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, E.jsx)(ec.$, { guild: t[0], size: f.CD }), shape: f.e0.SQUIRCLE } };
        },
    },
    I$ = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = IQ();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = eg.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return IJ;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    I0 = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [I$] }),
    I1 = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: () => [
            { name: j.intl.string(j.t.Boxc8R), desc: j.intl.string(j.t["nLj+nc"]), value: K.KP.FRIENDS_AND_ALL_GUILDS },
            { name: j.intl.string(j.t.YOIKBt), desc: j.intl.string(j.t.y0JZ4s), value: K.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: K.KP.FRIENDS_ONLY },
        ],
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, B.W1)("ProfilePrivacySetting"))) return;
            let n = (0, Z.gS)(t, e);
            null != n &&
                (0, W.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("36281"),
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
    I2 = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, B.lX)("ProfilePrivacyCategory"),
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: t_.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [I1, I0],
    });
var I3 = i(814278),
    I6 = i(936388),
    I4 = i(714763);
let I7 = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, I3.Lu)() }),
    useValue: function () {
        return (0, g.bG)([I4.A], () => I4.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        I6.A.updatePersistentCodesEnabled(e);
    },
});
var I5 = i(787392);
function I8() {
    return (0, g.yK)([I5.A], () => I5.A.getUserIds());
}
var I9 = i(803306),
    Ce = i(966327),
    Ct = i(146003);
function Ci(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nZ.Ay)(),
        s = (0, g.bG)([iu.default], () => iu.default.getUser(t)),
        l = T8.Ay.getFormattedName(s),
        r = S.useCallback(() => {
            (0, I3.kj)(t);
        }, [t]),
        a = S.useCallback(() => (0, S9.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        S.useEffect(() => {
            (0, I9.wz)(t);
        }, [t]),
        (0, E.jsxs)("div", {
            className: Ct.uW,
            children: [
                null != s && (0, E.jsx)(Ce.A, { className: Ct.my, user: s, size: i7._3.SIZE_40 }),
                (0, E.jsxs)("div", {
                    className: Ct.Qq,
                    children: [
                        (0, E.jsx)(es.D, {
                            className: Ct.Xh,
                            onClick: a,
                            children: (0, E.jsx)(el.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, E.jsx)(el.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, E.jsx)(es.D, { onClick: r, className: Ct.Qz, children: (0, E.jsx)(lD.u, { size: "xs" }) }),
            ],
        })
    );
}
function Cn(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, I3.tC)(n.timestamp),
        r = S.useCallback(() => {
            (0, I3.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, E.jsxs)("div", {
        className: t,
        children: [
            (0, E.jsxs)("div", {
                className: Ct.Qq,
                children: [
                    (0, E.jsx)(el.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, E.jsx)(el.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, E.jsx)(es.D, {
                className: Ct.Kk,
                onClick: r,
                children: (0, E.jsx)(gC.P, { size: "md", color: ea.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Cs(e) {
    let { userId: t } = e,
        i = (0, g.yK)([I5.A], () =>
            eq()(I5.A.getUserVerifiedKeys(t))
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
            (0, E.jsx)(Ci, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, E.jsxs)(
                    S.Fragment,
                    {
                        children: [
                            (0, E.jsx)(Cn, { className: Ct.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, E.jsx)("div", { className: Ct.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Cl = i(623161);
let Cr = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = I8();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = I8();
            return (0, E.jsxs)(_f.h, {
                children: [
                    (0, E.jsx)(_f._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, I3.dc)() }),
                    }),
                    e.map((e) => (0, E.jsx)("div", { className: Cl.A, children: (0, E.jsx)(Cs, { userId: e }) }, e)),
                ],
            });
        },
    }),
    Ca = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
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
                              useText: () => j.intl.format(j.t["/6sFWa"], { helpArticle: (0, I3.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, eH.isDesktop)(),
        buildLayout: () => [I7, Cr],
    }),
    Co = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [Iq, I2, Ca] : [Iq, I2, IV, Ca]),
    }),
    Cu = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: Ij.m,
        buildLayout: () => [Co],
    });
var Cd = i(476713);
let Cc = (0, a.AK)(u.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: u.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Cg = (0, a.gN)(u.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Cc] }),
    Cm = (0, a.E2)(u.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = NJ(!0, !0);
            return e ? (0, E.jsx)(du.y, {}) : (0, E.jsx)(N1, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = NJ(!0, !0);
            return e || 0 === t.length;
        },
    });
function CA() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = NJ(!0, !0);
    return {
        sortedGames: S.useMemo(() => e.toSorted((e, t) => df.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
function Ch() {
    let { sortedGames: e } = CA();
    return S.useMemo(() => {
        let t = e[0];
        if (null == t) return null;
        let i = e[1];
        return {
            frontIcon: {
                icon: (0, E.jsx)("img", {
                    src: ni.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    alt: t.name,
                    width: f.CD,
                    height: f.CD,
                }),
                shape: f.e0.ROUNDED,
            },
            ...(null != i && {
                backIcon: {
                    icon: (0, E.jsx)("img", {
                        src: ni.Ay.getApplicationIconURL({ id: i.id, icon: i.icon }),
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
let CE = (0, a.zZ)(u.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [_P] }),
    CS = (0, a.zZ)(u.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = CA(),
                t = e.slice(0, 2).map((e) => e.name);
            return j.intl.format(j.t.ihVNdf, {
                nameCount: t.length,
                game1: t[0],
                game2: t[1],
                remaining: e.length - t.length,
                gameListHook: (e, t) =>
                    (0, E.jsx)(el.E, { tag: "span", variant: "text-sm/normal", color: "text-default", children: e }, t),
            });
        },
        useSubnavLabel: () => j.intl.string(j.t.YpCiMt),
        useHeaderDecoration: () => ({ type: h.WX.STACKED_ICONS, useIcons: Ch }),
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            E9.A.fetch();
        },
        buildLayout: () => [N4, N7, Cm, Cg],
    }),
    CT = (0, a.t_)(u.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [_G, CE, I_, _Y, CS, _2],
    }),
    Cx = (0, a.i4)(u.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: Cd.l,
        buildLayout: () => [CT],
    });
var Cp = i(782603),
    Cf = i(899847),
    CN = i(695515),
    C_ = i(936926);
let CI = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            eZ
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
                })),
    }),
    CC = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, eK.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    Cb = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, g.bG)([uC.A], () => uC.A.getTTSType()),
        setValue: (e) => uO.default.setTTSType(e),
        useOptions: () => [
            { name: j.intl.string(j.t.B1AGeJ), value: U.aVn.ALL_CHANNELS },
            { name: j.intl.string(j.t.uzZg9e), value: U.aVn.SELECTED_CHANNEL },
            { name: j.intl.string(j.t.DYO5Oi), value: U.aVn.NEVER },
        ],
        usePredicate: () => nd.$j,
    }),
    Cv = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Cy = (0, a.bd)(Cv, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return of(Cv, {
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
        buildLayout: () => [CI, CC, Cb],
    }),
    Cj = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [Cy],
    }),
    CO = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: () => (0, g.bG)([uC.A], () => !uC.A.getDisableUnreadBadge()),
        setValue: (e) => uO.default.setDisableUnreadBadge(!e),
    }),
    CR = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [CO],
    });
var CL = i(840559),
    CD = i(997187),
    CP = i(723923);
let CG = CP.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, g.cf)([CD.A], () => CD.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, CL.CA)(e.category, t),
        }),
    ),
    CM = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, g.cf)([CD.A], () => CD.A.getEmailSettings());
            return CP.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, CL.NI)(),
        useVariant: () => "critical-secondary",
    }),
    CU = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = CD.A.getEmailSettings();
            e || (0, CL.cR)();
        },
        buildLayout: () => [...CG, CM],
    }),
    CV = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: () => (0, g.bG)([uC.A], () => uC.A.getDesktopType()) !== U.nRU.NEVER,
        setValue: (e) => uO.default.setDesktopType(e ? U.nRU.ALL : U.nRU.NEVER),
    });
var Ck = i(832712),
    Cw = i(543465),
    CF = i(790782);
let CB = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, g.bG)([Cw.Ay], () => Cw.Ay.useNewNotifications),
    setValue: function (e) {
        Ck.A.setAccountFlag(M.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (EA.w.set("turnedOffNewNotifications", !0),
                G.default.track(U.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: eg.A.getGuildsArray().filter(
                        (e) => Cw.Ay.resolveGuildUnreadSetting(e) === CF.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, g.bG)(
            [iu.default, Cw.Ay],
            () =>
                iu.default.getCurrentUser()?.isStaff() ||
                iu.default.getCurrentUser()?.isStaffPersonal() ||
                Cw.Ay.useNewNotifications,
        ),
});
var Cz = i(534654);
let CY = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, g.bG)([uC.A], () => uC.A.screenDowntimeReminder),
        setValue: (e) => uO.default.setScreenDowntimeReminder(e),
        usePredicate: () => {
            let e = (0, C_.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, Cz.A)(),
                i = (0, f2.Du)();
            return e && t && i;
        },
    }),
    CX = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: () => {
            let e = (0, C_.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, Cz.A)(),
                i = (0, f2.Du)();
            return e && t && i;
        },
    });
var CH = i(70730);
let CK = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
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
            let { enabled: e } = CH.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    CW = (0, F.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    CZ = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            L.NR.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => CW.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    Cq = (0, F.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var CQ = i(275007);
let CJ = (0, a.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => j.intl.string(CQ.default["ZZIP+o"]),
    useValue: L.JV.useSetting,
    setValue: function (e) {
        L.JV.updateSetting(e),
            G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: M.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => Cq.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var C$ = i(571524);
let C0 = (0, a.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.nvkXtr),
        useValue: L.c3.useSetting,
        setValue: function (e) {
            L.c3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, C$.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    C1 = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
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
    C2 = (0, F.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    C3 = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            L.T3.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => C2.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var C6 = i(815807);
let C4 = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: K.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: K.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: K.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, C6.n4)(e, L.Zp.getSetting()),
    }),
    C7 = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
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
    C5 = (0, F.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    C8 = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            L.zS.updateSetting(e),
                G.default.track(U.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: M.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => C5.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    C9 = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [C1, CK, CZ, C7, C8, CJ, C3, C4, C0],
    }),
    be = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, g.bG)([uC.A], () => uC.A.taskbarFlash),
        setValue: (e) => uO.default.setTaskbarFlash(e),
        usePredicate: () => (0, c.uF)(),
    }),
    bt = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [CV, be, C9, CB, CX, CY],
    });
var bi = i(965957),
    bn = i(312671),
    bs = i(235079);
let bl = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = ub.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, g.bG)([bn.A], () => bn.A.getSoundpack()),
            t = ub.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = ub.A.getHolidaySoundpack();
        tY()(null != t, "predicate should fail if no soundpack is available"), (0, bi.p)(e ? t : bs.i.CLASSIC);
    },
    usePredicate: ub.A.useIsEligible,
});
var br = i(970931);
let ba = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: br.kB,
        useDisabledMessage: () => ((0, br.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bo = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bu = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => uD("message3") }),
        useValue: () =>
            (0, g.bG)([uC.A], () => uC.A.getNotifyMessagesInSelectedChannel() && !uC.A.getDisableAllSounds()),
        setValue: (e) => uO.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, g.bG)([uC.A], () => uC.A.getDisableAllSounds()),
    }),
    bd = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, g.bG)([uC.A], () => uC.A.getDisableAllSounds()),
        setValue: (e) => uO.default.toggleDisableAllSounds(e),
    }),
    bc = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uL();
            };
        },
        buildLayout: () => [uP(ba), bu, uP(bo), bd],
    }),
    bg = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bm = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bg] }),
    bA = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bl, bc, bm],
    }),
    bh = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, C_.Eq)({ location: "NotificationsPanel" }) ||
                null != CN.A.getAgeGroup() ||
                CN.A.isLoading() ||
                (CN.A.canRefetch() && Cf.Ay.initialPageLoad());
        },
        buildLayout: () => [bt, bA, CR, CU, Cj],
    }),
    bE = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: Cp.X,
        buildLayout: () => [bh],
    }),
    bS = (0, a.WI)(u.X.USER_SECTION, {
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [Nu, ...(e ? [] : [Iy]), Cu, ...(e ? [Cx] : []), ...(e ? [] : [Nm]), ...(e ? [] : [Nq]), bE, NH];
        },
    });
var bT = i(387758),
    bx = i(271866),
    bp = i(147964),
    bf = i(868511);
let bN = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, g.bG)([bp.A], () => null != bp.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, W.openModal)((e) => (0, E.jsx)(bf.A, { ...e })) : bx.cL();
        },
    }),
    b_ = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: U.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => cG.p5,
    }),
    bI = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [b_, bN] }),
    bC = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [bI] }),
    bb = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bT.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [bC],
    });
var bv = i(70688),
    by = i(830215);
let bj = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bv.o,
        onClick: () => {
            (0, sg.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    by.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bO = (0, a.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [bb, bj] }),
    bR = (0, a.Hr)({
        buildLayout: function () {
            return [p_, bS, hX, dn, (0, o.Bv)("UserSettingsRoot_buildLayout") ? S3 : i2, E8, bO];
        },
        analyticsKey: "user_settings",
    });
